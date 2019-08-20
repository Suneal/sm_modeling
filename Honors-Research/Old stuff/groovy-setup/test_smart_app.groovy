
def installed() {
	log.debug "Installed with settings: ${settings}"
        // commented out log statement because presence sensor label could contain user's name
	//log.debug "Current mode = ${location.mode}, people = ${people.collect{it.label + ': ' + it.currentPresence}}"
	subscribe(people, "presence", presence)
}

def updated() {
	log.debug "Updated with settings: ${settings}"
        // commented out log statement because presence sensor label could contain user's name
	//log.debug "Current mode = ${location.mode}, people = ${people.collect{it.label + ': ' + it.currentPresence}}"
	unsubscribe()
	subscribe(people, "presence", presence)
}

def presence(evt)
{
	log.debug "evt.name: $evt.value"
	if (evt.value == "not present") {
		if (location.mode != newMode) {
			log.debug "checking if everyone is away"
			if (everyoneIsAway()) {
				log.debug "starting sequence"
				runIn(findFalseAlarmThreshold() * 60, "takeAction", [overwrite: false])
			}
		}
		else {
			log.debug "mode is the same, not evaluating"
		}
	}
	else {
		log.debug "present; doing nothing"
	}
}

def takeAction()
{
	if (everyoneIsAway()) {
		def threshold = 1000 * 60 * findFalseAlarmThreshold() - 1000
		def awayLongEnough = people.findAll { person ->
			def presenceState = person.currentState("presence")
			if (!presenceState) {
				// This device has yet to check in and has no presence state, treat it as not away long enough
				return false
			}
			def elapsed = now() - presenceState.rawDateCreated.time
			elapsed >= threshold
		}
		log.debug "Found ${awayLongEnough.size()} out of ${people.size()} person(s) who were away long enough"
		if (awayLongEnough.size() == people.size()) {
			// TODO -- uncomment when app label is available
			def message = "SmartThings changed your mode to '${newMode}' because everyone left home"
			log.info message
			send(message)
			setLocationMode(newMode)
		} else {
			log.debug "not everyone has been away long enough; doing nothing"
		}
	} else {
    	log.debug "not everyone is away; doing nothing"
    }
}

private everyoneIsAway()
{
	def result = true
	for (person in people) {
		if (person.currentPresence == "present") {
			result = false
			break
		}
	}
	log.debug "everyoneIsAway: $result"
	return result
}

private send(msg) {
	if (location.contactBookEnabled) {
        log.debug("sending notifications to: ${recipients?.size()}")
		sendNotificationToContacts(msg, recipients)
	}
	else  {
		if (sendPushMessage != "No") {
			log.debug("sending push message")
			sendPush(msg)
		}

		if (phone) {
			log.debug("sending text message")
			sendSms(phone, msg)
		}
	}
	log.debug msg
}

private findFalseAlarmThreshold() {
	(falseAlarmThreshold != null && falseAlarmThreshold != "") ? falseAlarmThreshold : 10
}
