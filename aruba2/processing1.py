from datetime import datetime

OUTPUT_FILE = 'motion_only.tsv'
interesting_motion_sensors = [
    'M006', 'M007', 'M004', 'M011', 'M024', 'M020', 'M027', 'M029', 'M016',
    'M019', 'M014', 'M030'
]
interesting_door_sensors = ['D001', 'D002', 'D004']
interesting_temperature_sensors = ['T001', 'T002', 'T003', 'T004', 'T005']
global_day = 0
daily_token = ''
with open(OUTPUT_FILE, 'w') as toFile:
    with open('data', 'r') as fromFile:
        for line in fromFile:
            interesting_events = line.split('\t')
            date_and_time = interesting_events[0]
            device = interesting_events[1]
            event = interesting_events[2]
            # print(date_and_time)
            # print(device)
            # print(event)

            # if (interesting_events in interesting_motion_sensors or interesting_events in interesting_door_sensors or interesting_events in interesting_temperature_sensors):
            if (device in interesting_motion_sensors):

                print(interesting_events)
                print(date_and_time)
                datetime_object = datetime.strptime(date_and_time,
                                                    '%Y-%m-%d %H:%M:%S.%f')
                month = datetime_object.month
                day = datetime_object.day
                hour = datetime_object.hour
                minute = datetime_object.minute

                time_token = str(month) + '_' + str(day) + '_' + str(
                    hour) + '_' + str(minute)
                print(time_token)
                token = '<' + time_token + ',' + device + ',' + event.replace('\n','') + '>'

                if(global_day == day):
                    daily_token = daily_token + ' '+  token
                elif(global_day == 0):
                    daily_token += token
                    global_day = day
                else:
                    toFile.write(daily_token + '\n')
                    daily_token = ''
                    global_day = day


                    

                #
