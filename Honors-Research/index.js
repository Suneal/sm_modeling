! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 26)
}([function(e, t) {
    e.exports = require("babel-runtime/helpers/classCallCheck")
}, function(e, t) {
    e.exports = require("babel-runtime/helpers/createClass")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
            PROCESS_PLATFORM_DARWIN: "darwin",
            PROCESS_PLATFORM_LINUX: "linux",
            SSO_TOKEN: {
                CONFIGURATOR_FIELD_NAME: "ssoToken",
                COOKIE_FIELD_NAME: "iPlanetDirectoryPro"
            },
            CONFIGURATOR_FIELD: {
                ADB_PATH: "adbPath",
                SSO_TOKEN: "ssoToken",
                USER_ID: "userId",
                MNNM: "mnnm",
                MNID: "mnid",
                INDIVIDUAL_MNID: "individualMnid",
                AUTH_PROVIDER_URI: "authProviderURI",
                UI_MANIFEST_FILE_NAME: "uiManifestName",
                MODE: "mode"
            },
            MANUFATURER_TYPES: {
                INDIVIDUAL: "individual",
                COMPANY: "company"
            },
            PATHS: {
                SMARTTHINGS: ".iotcloud",
                CLI: "cli",
                IDE: "ide",
                PLUGIN: "plugin",
                VIRTUAL_DEVICE_LAUNCHER: "virtual-device",
                SIMULATOR: "simulator",
                SIMULATOR_INSTALLED: "installed",
                SIMULATOR_METADATA: "metadata",
                SIMULATOR_PLUGIN: "plugin",
                LOGS: "logs"
            },
            FILES: {
                CONFIG_JSON: "config.json",
                UI_JSON: "ui.json",
                INDEX_HTML: "index.html",
                VDL_INI: "virtual-device-launcher.ini"
            },
            TARGET_SIMULATOR: "sim",
            TARGET_VIRTUAL_DEVICE_LAUNCHER: "vdl",
            TARGET_VIRTUAL_DEVICE: "vd",
            EXCLUDED_OCF_RESOURCE_TYPES: ["oic.wk.d", "oic.wk.p", "x.com.samsung.accesspointlist", "x.com.samsung.devcol", "/information/vs", "/sec/provisioninginfo"],
            EXCLUDED_RESOURCE_TYPES: ["/oic/d", "/oic/p"],
            WINDOW_TYPES: {
                MAIN_PROCESS: "Main",
                RENDERER_PROCESS: "Renderer"
            },
            PREFIX_RESOURCE_LINK_FOR_HREF: "/oic/route/",
            IPC_CHANNELS: {
                TO_MAIN: {
                    VDL_LAUNCH_VIRTUAL_DEVICE: "vdl:launch-virtual-device",
                    VDL_DELETE_VIRTUAL_DEVICE: "vdl:delete-virtual-device",
                    VDL_CLOSE_VIRTUAL_DEVICE_WINDOW: "vdl:close-virtual-device-window",
                    VDL_SEND_DELETE_VIRTUAL_DEVICE_SIGNAL: "vdl:delete-virtual-device-signal",
                    VDL_GET_DEVICE_LIST: "vdl:get-device-list",
                    VDL_GET_IS_READY_TO_LAUNCH: "vdl:get-is-window-ready",
                    VDL_GET_OPENED_VD_WINDOWS_COUNT: "vdl:get-opened-window-cnt",
                    VD_NOTIFY_MESSAGE: "vd:notify-message",
                    VD_START_SERVER: "vd:start-server",
                    SIM_GET_INITIAL_DATA: "sim:get-initial-data",
                    SIM_GET_IS_READY_TO_LAUNCH: "sim:get-is-window-ready",
                    SIM_GET_DEVICE_LIST: "sim:get-device-list",
                    SIM_GET_UI_MANIFEST: "sim:get-ui-manifest",
                    SIM_POSTACTION_CHANGED_DEVICE_STATE: "sim:changed-device-state-postaction",
                    SIM_SEND_DATA: "sim:send-data",
                    SIM_INIT_PLUGIN: "sim:init-plugin",
                    SIM_DISMISS_PLUGIN: "sim:dismiss-plugin"
                },
                TO_RENDERER: {
                    VDL_LAUNCH_VIRTUAL_DEVICE_SUCCESS: "vdl:launch-virtual-device:success",
                    VDL_LAUNCH_VIRTUAL_DEVICE_ERROR: "vdl:launch-virtual-device:error",
                    VDL_DELETE_VIRTUAL_DEVICE_SUCCESS: "vdl:delete-virtual-device:success",
                    VDL_DELETE_VIRTUAL_DEVICE_ERROR: "vdl:delete-virtual-device:error",
                    VDL_GET_DEVICE_LIST_SUCCESS: "vdl:get-device-list:success",
                    VDL_GET_DEVICE_LIST_ERROR: "vdl:get-device-list:error",
                    VDL_SET_IS_READY_TO_LAUNCH: "vdl:set-is-window-ready",
                    VDL_DEVICE_STATE_CHANGE: "vdl:device-state:change",
                    VDL_SHOW_MESSAGE_INPROGRESS: "vdl:show-message:beforelaunched",
                    VDL_IS_WINDOW_READY: "vdl:change-window-state:ready",
                    VDL_SET_OPENED_VD_WINDOWS_COUNT: "vdl:set-opened-window-cnt",
                    VD_NOTIFY_MESSAGE_ERROR: "vd:notify-message:error",
                    VD_SET_RESOURCE_TYPE_DATA: "vd:set-resource-type-data",
                    VD_START_SERVER_SUCCESS: "vd:start-server:success",
                    VD_START_SERVER_ERROR: "vd:start-server:error",
                    SIM_GET_INITIAL_DATA_SUCCESS: "sim:get-initial-data:success",
                    SIM_GET_INITIAL_DATA_ERROR: "sim:get-initial-data:error",
                    SIM_POSTACTION_CHANGED_DEVICE_STATE_ERROR: "sim:changed-device-state-postaction:error",
                    SIM_DEVICE_STATE_CHANGE: "sim:device-state:change",
                    SIM_DEVICE_RESOURCE_CHANGE: "sim:device-resource:change",
                    SIM_GET_DEVICE_LIST_SUCCESS: "sim:get-device-list:success",
                    SIM_GET_DEVICE_LIST_ERROR: "sim:get-device-list:error",
                    SIM_GET_UI_MANIFEST_SUCCESS: "sim:get-ui-manifest:success",
                    SIM_GET_UI_MANIFEST_ERROR: "sim:get-ui-manifest:error",
                    SIM_CLOSE_PLUGIN: "sim:close-plugin",
                    ALL_CONNECTION_CLOSED: "all:connection:closed",
                    ALL_UPDATE_DEVICE_LIST: "all:update-device-list",
                    ALL_DID_FAIL_LOAD: "all:did-fail-load",
                    SIM_SEND_DATA_SUCCESS: "sim:send-data:success",
                    SIM_SEND_DATA_ERROR: "sim:send-data:error",
                    SIM_PLUGIN_INIT_SUCCESS: "sim:plugin-init-success",
                    SIM_PLUGIN_INIT_ERROR: "sim:plugin-init-error",
                    SIM_SHOW_MESSAGE_INPROGRESS: "sim:show-message:beforelaunched",
                    SIM_IS_WINDOW_READY: "sim:change-window-state:ready",
                    SIM_SET_IS_READY_TO_LAUNCH: "sim:set-is-window-ready"
                }
            },
            MESSAGES: {
                INVALID_LOGIN_STATUS: "Login status is invalid. Please log in again.",
                NO_RAML: "The requested RAML file does not exit.",
                NO_RESOURCE_TYPE: "The resource type is required.",
                NO_REQUIRED_FIELD_FOR_NOTIFY_MESSAGE: "Check the required fields that ID, URI, data.",
                NOT_PROPER_TARGET_NAME: "The target name was wrong. Check again.",
                PLUGIN_TARGET_DEVICE_NOT_FOUND: "Plugin target device is not found.",
                PLUGIN_TARGET_DEVICE_NO_RESOURCES: "Target device has no resources.",
                SERVER_RECONNECT_REQUEST: "Please, refresh in a few minutes",
                ERR_MSG_REQUIRED_DEVICE_ID: "The ID for the device is required.",
                ERR_MSG_REQUIRED_DEVICE_ID_AND_NAME: "The ID and name for device are required.",
                ERR_MSG_NO_UI_MANIFEST: "No UI manifest file",
                ERR_MSG_NOT_CONNECTED: "Disconneted with the IOT cloud.",
                ERR_MSG_REQUIRED_CONFIG_NAME: "The option --config-name is required.",
                ERR_MSG_INVALID_CONFIG_NAME: "The value for the --config-name was invalid. Please check again.",
                ERR_MSG_SERVER_NOT_CONNECTED: "The server is disconnected",
                ERR_MSG_REQUEST_AUTH_CODE_FAILED: "Requesting the authentication code from Samsung Account failed.\nPlease log in again.",
                ERR_MSG_NOT_EXIST_PLUGIN_PACKAGE_NAME: "Does not exist plugin package name",
                ERR_MSG_NOT_EXIST_PLUGIN_PACKAGE_FOLDER: "Does not exist plugin package folder",
                ERR_MSG_HAS_NO_UI_MANIFEST: "Not found the UI manifest file.",
                ERR_MSG_REQUIRED_FIELDS_FOR_SEND_DATA: "The ID for the device, the link and data for the resource type are required.",
                ERR_MSG_LOGIN_REQUIRED: "Please log in first.",
                ERR_MSG_NOT_CONNECTED_NETWORK: "Network is unreachable.",
                ERR_MSG_INTERNAL_ERROR_IOT_CLOUD: "An internal error occurred on the IoT Cloud service. Please, try again in a few minutes.",
                ERR_MSG_UI_MANIFEST_INIT_FAIL: "Failed to initialize UI manifest file.",
                ERR_MSG_FAILED_REFRESH_TOKEN: "Failed to refresh token.\nPlease log in again."
            },
            CLI_MESSAGES: {
                NO_CONNECTED: "Not connected",
                NO_CONNECTED_ERRNO: "ECONNRESET",
                NO_CONNECTED_ENOENT: "ENOENT",
                NO_CONNECTED_NETWORK: "getaddrinfo ENOENT",
                FAILED_REQUEST_AUTH_CODE: "Requesting Auth Code from Samsung Account failed",
                DEVICE_NOT_CONNECTED: "COAP API failed. DEVICE_NOT_CONNECTED"
            },
            PROCESSING_MESSAGES: {
                INIT_STARTED: "Initialization started.",
                CHECKING_LAUNCH_PARAMETERS: "Checking launch parameters.",
                CHECKING_PRECONDITIONS: "Checking pre-conditions.",
                CHECKING_UI_MANIFEST_FILE: "Checking existence of UI Manifest file.",
                TRYING_TOKEN_REFRESH: "Trying to refresh Access Token.",
                TOKEN_REFRESHED: "Access Token refreshed.",
                IMPORTING_CONFIG: "Importing external configurations.",
                REQUESTING_TOKEN: "Requesting Access Token.",
                TOKEN_REQUEST_FAILED: "Failed to request Access Token.",
                SETTING_CONFIGURATIONS: "Setting configurations.",
                LOADING_UI_MANIFEST: "Loading UI Manifest.",
                LOADING_RESOURCE_DEFINITIONS: "Loading resource definitions.",
                PREPARING_IOT_CLOUD_CONNECTOR: "Preparing network connector.",
                INIT_FAILED: "Initialization failed.",
                INIT_FINISHED: "Initialization finished."
            },
            PROPERTIES: {
                READ_ONLY: "readOnly",
                SUPPOPRTED: "supported",
                DEFAULT: "default"
            },
            TEMPERATURE_UNIT: {
                C: "C",
                F: "F",
                K: "K"
            },
            ENERGY_UNIT: {
                WATT_HOUR: "Wh",
                KILLO_WATT_HOUR: "kWh",
                MILLI_WATT_HOUR: "mWh"
            },
            POWER_UNIT: {
                KILLO_WATT: "kw",
                WATT: "w",
                MILLI_WATT: "mw"
            },
            LABELS: {
                CANCEL: "Cancel",
                OK: "OK",
                UNNAMED_DEVICE: "UNNAMED-DEVICE"
            },
            TITLES: {
                CONFIRM: "Confirm",
                VDL: "Virtual Device Launcher",
                SIM: "Simulator",
                ERROR: "Error",
                WARNING: "Warning",
                FLOW_LOG: "Initializing..."
            },
            DIALOG_MESSAGEBOX_TYPES: {
                NONE: "none",
                INFO: "info",
                ERROR: "error",
                QUESTION: "question",
                WARNING: "warning"
            }
        },
        i = r;
    t.default = i;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(r, "Constants", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Constants.js"), __REACT_HOT_LOADER__.register(i, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Constants.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return O.default.TARGET ? O.default.TARGET : O.default.IS_ST_SIM ? N.default.TARGET_SIMULATOR : N.default.TARGET_VIRTUAL_DEVICE_LAUNCHER
    }

    function a() {
        try {
            return !(!window || !window.console)
        } catch (e) {
            return !1
        }
    }

    function o(e) {
        if (a()) {
            var t = "#ffffff",
                n = "";
            e === L.LOG ? (t = "#292b2c", n = "#f7f7f7") : e === L.INFO ? n = "#0f82e6" : e === L.ERROR ? n = "#d13b2e" : e === L.WARN && (n = "#ad7c0b");
            return "padding:1px 4px;border-radius:2px;font-weight:500;color:" + t + ";\n            text-shadow:0 1px 0px rgba(0, 0, 0, 0.2);background-color:" + n + ";"
        }
        return ""
    }

    function l(e) {
        return e < 10 ? "0" + e : e
    }

    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.SIMPLE,
            t = new Date,
            n = t.getFullYear(),
            r = l(t.getMonth() + 1),
            i = l(t.getDate()),
            a = l(t.getHours()),
            o = l(t.getMinutes()),
            s = l(t.getSeconds()),
            u = t.getMilliseconds(),
            d = "";
        return D.SIMPLE === e ? d = a + ":" + o + ":" + s + ":" + u : D.FULL === e && (d = n + "-" + r + "-" + i + " " + a + ":" + o + ":" + s), d
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0),
        d = r(u),
        c = n(1),
        _ = r(c),
        f = n(13),
        E = r(f),
        C = n(12),
        T = r(C),
        I = n(4),
        A = r(I),
        g = n(29),
        R = r(g),
        v = n(8),
        O = r(v),
        S = n(2),
        N = r(S),
        D = {
            SIMPLE: 0,
            FULL: 1
        },
        L = {
            LOG: "log",
            WARN: "warn",
            ERROR: "error",
            INFO: "info"
        },
        p = {
            VIRTUAL_DEVICE: "virtual-device.log",
            SIMULATOR: "simulator.log"
        },
        M = T.default.normalize(T.default.join(R.default.getHomePath(), ".iotcloud", i() === N.default.TARGET_SIMULATOR ? "simulator" : "virtual-device", "logs")),
        h = T.default.normalize(T.default.join(M, i() === N.default.TARGET_SIMULATOR ? p.SIMULATOR : p.VIRTUAL_DEVICE)),
        m = R.default.isNodeEnvDevelop(),
        P = function() {
            function e() {
                var t = this;
                (0, d.default)(this, e), this.log = function() {
                    m ? console.log.bind(console, t.createPrefix(L.LOG), o(L.LOG)).apply(void 0, arguments) : t.writeFile(t.createPrefix(L.LOG) + " " + t.createData.apply(t, arguments))
                }, this.error = function() {
                    m ? console.error.bind(console, t.createPrefix(L.ERROR), o(L.ERROR)).apply(void 0, arguments) : t.writeFile(t.createPrefix(L.ERROR) + " " + t.createData.apply(t, arguments))
                }, this.info = function() {
                    m ? console.info.bind(console, t.createPrefix(L.INFO), o(L.INFO)).apply(void 0, arguments) : t.writeFile(t.createPrefix(L.INFO) + " " + t.createData.apply(t, arguments))
                }, this.warn = function() {
                    m ? console.warn.bind(console, t.createPrefix(L.WARN), o(L.WARN)).apply(void 0, arguments) : t.writeFile(t.createPrefix(L.WARN) + " " + t.createData.apply(t, arguments))
                }
            }
            return (0, _.default)(e, [{
                key: "createPrefix",
                value: function(e) {
                    if (m) {
                        return (a() ? "%c" : "") + "[" + s() + "][" + e.toUpperCase() + "] -"
                    }
                    return "[" + s(D.FULL) + "][" + e.toUpperCase() + "] -"
                }
            }, {
                key: "createText",
                value: function(e) {
                    var t = e;
                    return A.default.isString(e) || (t = JSON.stringify(e, null, 4)), t || ""
                }
            }, {
                key: "createData",
                value: function() {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var i = n,
                        a = "";
                    return 1 === i.length ? a = this.createText(i[0]) : i.length > 1 && A.default.forEach(i, function(t) {
                        a += ", " + e.createText(t)
                    }), "" + a + R.default.getCarriageReturn()
                }
            }, {
                key: "getTotalLineNumber",
                value: function() {
                    return new Promise(function(e) {
                        var t = 0,
                            n = E.default.createReadStream(h);
                        n.on("data", function(e) {
                            for (var n = 0; n < e.length; n += 1) 10 === e[n] && (t += 1)
                        }), n.on("end", function() {
                            e(t)
                        })
                    })
                }
            }, {
                key: "popFirstLine",
                value: function(e) {
                    return new Promise(function(t) {
                        if (1e5 < e) {
                            var n = E.default.readFileSync(h, "utf8"),
                                r = R.default.getCarriageReturn(),
                                i = n.split(r).slice(1).join(r);
                            E.default.writeFileSync(h, i)
                        }
                        t()
                    })
                }
            }, {
                key: "writeFile",
                value: function(e) {
                    E.default.existsSync(M) && (E.default.existsSync(h) ? this.getTotalLineNumber().then(this.popFirstLine).then(E.default.appendFileSync.bind(this, h, e)) : (E.default.writeFileSync(h, e), E.default.chmodSync(h, 502)))
                }
            }]), e
        }(),
        y = new P,
        k = y;
    t.default = k;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "getTarget", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(a, "doesWindowExist", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(o, "styleFormat", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(l, "pad2", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(s, "getNow", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(D, "DATE_FORMAT", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(L, "LOG_TYPE", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register("utf8", "LOG_FILE_ENCODING", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(1e5, "LOG_FILE_MAX_LINE", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(p, "LOG_FILE_NAME", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(".iotcloud", "PATH_SMARTTHINGS", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register("virtual-device", "PATH_VIRTUAL_DEVICE_LAUNCHER", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register("simulator", "PATH_SIMULATOR", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register("logs", "PATH_LOGS", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(M, "LOG_FILE_BASE_PATH", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(h, "LOG_FILE_PATH", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(m, "DEBUG", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(P, "DevLog", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(y, "devLog", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"), __REACT_HOT_LOADER__.register(k, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/DevLog.js"))
    }()
}, function(e, t) {
    e.exports = require("lodash")
}, function(e, t) {
    e.exports = require("babel-runtime/regenerator")
}, function(e, t) {
    e.exports = require("babel-runtime/helpers/asyncToGenerator")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(11),
        u = n(17),
        d = r(u),
        c = n(4),
        _ = r(c),
        f = n(12),
        E = r(f),
        C = n(2),
        T = r(C),
        I = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, l.default)(e, null, [{
                key: "getHomePath",
                value: function() {
                    return s.app && s.app.getPath ? s.app.getPath("home") : null
                }
            }, {
                key: "isNodeEnvDevelop",
                value: function() {
                    return !1
                }
            }, {
                key: "isExcludedOCFResourceType",
                value: function(e) {
                    return _.default.includes(T.default.EXCLUDED_OCF_RESOURCE_TYPES, e)
                }
            }, {
                key: "isExcludedResourceType",
                value: function(e) {
                    return _.default.includes(T.default.EXCLUDED_RESOURCE_TYPES, e)
                }
            }, {
                key: "getOS",
                value: function() {
                    return d.default.platform()
                }
            }, {
                key: "getConfigPathByLaunchTarget",
                value: function(t) {
                    return e.getConfigPathByOwner(e.getOwnerByLaunchTarget(t))
                }
            }, {
                key: "getOwnerByLaunchTarget",
                value: function(e) {
                    var t = "";
                    if (e === T.default.TARGET_SIMULATOR) t = T.default.PATHS.SIMULATOR;
                    else {
                        if (e !== T.default.TARGET_VIRTUAL_DEVICE_LAUNCHER) return null;
                        t = T.default.PATHS.VIRTUAL_DEVICE_LAUNCHER
                    }
                    return t
                }
            }, {
                key: "getConfigPathByOwner",
                value: function(e) {
                    var t = [T.default.PATHS.CLI, T.default.PATHS.IDE, T.default.PATHS.PLUGIN, T.default.PATHS.VIRTUAL_DEVICE_LAUNCHER, T.default.PATHS.SIMULATOR];
                    return _.default.includes(t, e) ? E.default.normalize(E.default.join(this.getHomePath(), T.default.PATHS.SMARTTHINGS, e, T.default.FILES.CONFIG_JSON)) : null
                }
            }, {
                key: "stringify",
                value: function(e) {
                    return JSON.stringify(e, null, 2)
                }
            }]), e
        }(),
        A = I;
    t.default = A;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(I, "CommonUtil", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/CommonUtil.js"), __REACT_HOT_LOADER__.register(A, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/CommonUtil.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r() {
        return "renderer" === o.type ? -1 !== o["app-path"].indexOf("simulator") : -1 !== process.argv[1].indexOf("st-sim")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(27),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i),
        o = (0, a.default)(process.argv.slice(0)),
        l = {
            DEBUG: o.debug,
            TARGET: o.target,
            CONFIG_NAME: o["config-name"],
            IS_APP_READY: !0,
            IS_WINDOW_READY: !1,
            IS_ST_SIM: r()
        },
        s = l;
    t.default = s;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(r, "isSimulator", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Config.js"), __REACT_HOT_LOADER__.register(o, "argv", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Config.js"), __REACT_HOT_LOADER__.register(l, "Config", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Config.js"), __REACT_HOT_LOADER__.register(s, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/Config.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(28),
        f = r(_),
        E = n(7),
        C = r(E),
        T = n(3),
        I = r(T),
        A = n(8),
        g = r(A),
        R = n(2),
        v = r(R),
        O = C.default.getConfigPathByLaunchTarget(g.default.TARGET),
        S = C.default.getOwnerByLaunchTarget(g.default.TARGET),
        N = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "requestTokens",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return I.default.log("[Main] CommonLib.requestTokens() is called. config owner = " + r), n = e.getOCFLibAuthManager(r), t.next = 4, n.requestTokenBySsoToken();
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setConfigPairs",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
                        r = e.getConfigurator(C.default.getConfigPathByOwner(n));
                    t.forEach(function(e, t) {
                        r.set(t, e)
                    })
                }
            }, {
                key: "refreshToken",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.getOCFLibAuthManager(r), t.next = 3, n.refreshToken();
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getConfigurator",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                        t = new f.default.Configurator(e);
                    return t.init(), t
                }
            }, {
                key: "getConfig",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
                    return e.getConfigurator(t).getConfig()
                }
            }, {
                key: "getIndividualMNID",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
                    return e.getConfigurator(t).get(v.default.CONFIGURATOR_FIELD.INDIVIDUAL_MNID)
                }
            }, {
                key: "getMNID",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
                    return e.getConfigurator(t).get(v.default.CONFIGURATOR_FIELD.MNID)
                }
            }, {
                key: "getMNIDType",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
                    return e.getMNID(t) === e.getIndividualMNID(t) ? v.default.MANUFATURER_TYPES.INDIVIDUAL : v.default.MANUFATURER_TYPES.COMPANY
                }
            }, {
                key: "getOCFLibAuthManager",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
                        n = new f.default.AuthManager(e.getConfigurator(C.default.getConfigPathByOwner(t)));
                    return n.init(), n
                }
            }, {
                key: "getOCFLibResourceTypeManager",
                value: function() {
                    var e = new f.default.ResourceTypeManager;
                    return e.init(), e
                }
            }, {
                key: "getResourceTypeList",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.getOCFLibResourceTypeManager(), t.abrupt("return", n.retrieveResourceTypeList(!0));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getSTLibIOTCloudClient",
                value: function(e) {
                    return I.default.log("[Main] CommonLib.getSTLibIOTCloudClient() is called."), new f.default.IotCloudClient(e)
                }
            }, {
                key: "getSTLibIOTCloudServer",
                value: function(e, t) {
                    return I.default.log("[Main] CommonLib.getSTLibIOTCloudServer() is called."), new f.default.IotCloudServer(e, t)
                }
            }, {
                key: "getCertManager",
                value: function() {
                    I.default.log("[Main] CommonLib.getCertManager() is called.");
                    var t = new f.default.CertManager(e.getConfig());
                    return t.init(), t
                }
            }, {
                key: "getDeviceKeyCert",
                value: function() {
                    return I.default.log("[Main] CommonLib.getDeviceKeyCert() is called."), e.getCertManager().getDeviceKeyCert()
                }
            }, {
                key: "getServerConfig",
                value: function(e, t) {
                    return I.default.log("[Main] CommonLib.getServerConfig() is called."), f.default.Configurator.getServerConfig(e, t)
                }
            }, {
                key: "getOCFModelCOAPMessage",
                value: function() {
                    return f.default.CoapMessage
                }
            }, {
                key: "getOCFModelCOAPOptions",
                value: function() {
                    return f.default.CoapOptions
                }
            }, {
                key: "getExpireDateThreshold",
                value: function() {
                    return f.default.AuthManager.EXPIRE_DATE_THRESHOLD
                }
            }, {
                key: "isProductionMode",
                value: function(e) {
                    return f.default.Configurator.isProductionMode(e)
                }
            }, {
                key: "isStageMode",
                value: function(e) {
                    return f.default.Configurator.isStageMode(e)
                }
            }]), e
        }(),
        D = N;
    t.default = D;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(O, "defaultConfigFilePath", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/CommonLib.js"), __REACT_HOT_LOADER__.register(S, "defaultOwner", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/CommonLib.js"), __REACT_HOT_LOADER__.register(N, "CommonLib", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/CommonLib.js"), __REACT_HOT_LOADER__.register(D, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/CommonLib.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(4),
        u = r(s),
        d = n(8),
        c = r(d),
        _ = n(2),
        f = r(_),
        E = n(3),
        C = r(E),
        T = n(30),
        I = r(T),
        A = function() {
            function e(t) {
                (0, a.default)(this, e), this.target = t.target, this.isDebug = t.isDebug, this.windows = {}, this.mainWindow = null
            }
            return (0, l.default)(e, [{
                key: "createMainWindow",
                value: function() {
                    C.default.log("[WindowManager] createMainWindow() called.");
                    var e = new I.default({
                        target: this.target,
                        isDebug: this.isDebug,
                        windowType: f.default.WINDOW_TYPES.MAIN_PROCESS
                    });
                    return this.mainWindow = e, e
                }
            }, {
                key: "createRendererWindow",
                value: function(e) {
                    C.default.log("[WindowManager] createRendererWindow() called. deviceID = " + e.id);
                    var t = new I.default({
                        device: e,
                        target: f.default.TARGET_VIRTUAL_DEVICE,
                        isDebug: this.isDebug,
                        parent: this.mainWindow,
                        windowType: f.default.WINDOW_TYPES.RENDERER_PROCESS
                    });
                    return this.windows[e.id] = t, t
                }
            }, {
                key: "getMainWindow",
                value: function() {
                    return C.default.log("[WindowManager] getMainWindow() called."), this.mainWindow
                }
            }, {
                key: "getWindow",
                value: function(e) {
                    return C.default.log("[WindowManager] getWindow() called. deviceID = " + e), this.windows[e]
                }
            }, {
                key: "onCloseMainWindow",
                value: function() {
                    var e = this;
                    C.default.log("[WindowManager] onCloseMainWindow() called."), u.default.forEach(this.windows, function(t, n) {
                        t.close(), delete e.windows[n]
                    })
                }
            }, {
                key: "onCloseRendererWindow",
                value: function(e) {
                    C.default.log("[WindowManager] onCloseRendererWindow() called."), u.default.isEmpty(e) || u.default.isEmpty(e.id) || delete this.windows[e.id]
                }
            }, {
                key: "createWindow",
                value: function(e) {
                    return u.default.isEmpty(e) ? this.createMainWindow() : this.createRendererWindow(e)
                }
            }, {
                key: "hasWindow",
                value: function(e) {
                    return C.default.log("[WindowManager] hasWindow() called."), !!this.getWindow(e)
                }
            }, {
                key: "show",
                value: function(e) {
                    C.default.log("[WindowManager] show() called. deviceID = " + e), (this.getWindow(e) || this.mainWindow).show()
                }
            }, {
                key: "focus",
                value: function(e) {
                    C.default.log("[WindowManager] focus() called. deviceID = " + e), this.getWindow(e).focus()
                }
            }, {
                key: "onCloseWindow",
                value: function(e) {
                    C.default.log("[WindowManager] onCloseWindow() called.");
                    var t = e.target,
                        n = e.deviceInfo;
                    t === f.default.TARGET_SIMULATOR || t === f.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? this.onCloseMainWindow() : t === f.default.TARGET_VIRTUAL_DEVICE && this.onCloseRendererWindow(n)
                }
            }, {
                key: "getAllWindowsCnt",
                value: function() {
                    var e = u.default.keys(this.windows).length;
                    return C.default.log("[WindowManager] getAllWindowsCnt() called. count = " + e), e
                }
            }]), e
        }(),
        g = new A({
            target: c.default.TARGET,
            isDebug: c.default.DEBUG
        }),
        R = g;
    t.default = R;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(A, "WindowManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/WindowManager.js"), __REACT_HOT_LOADER__.register(g, "windowManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/WindowManager.js"), __REACT_HOT_LOADER__.register(R, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/WindowManager.js"))
    }()
}, function(e, t) {
    e.exports = require("electron")
}, function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = require("fs-extra")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(9),
        C = r(E),
        T = n(8),
        I = r(T),
        A = n(3),
        g = r(A),
        R = n(2),
        v = r(R),
        O = n(7),
        S = r(O),
        N = n(18),
        D = r(N),
        L = S.default.getOwnerByLaunchTarget(I.default.TARGET),
        p = ["ide", "cli"],
        M = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "ready",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return g.default.log("[Main] ConfigUtil.ready() is called. external config name = " + I.default.CONFIG_NAME + ", config owner = " + n + "."), D.default.sendInProgressMessage(v.default.PROCESSING_MESSAGES.IMPORTING_CONFIG), e.importConfig(n), D.default.sendInProgressMessage(v.default.PROCESSING_MESSAGES.REQUESTING_TOKEN), t.next = 6, C.default.requestTokens(n).catch(function(e) {
                                        if (g.default.log("[Main] ConfigUtil.ready(): error = " + e.message + "."), D.default.sendInProgressMessage(v.default.PROCESSING_MESSAGES.TOKEN_REQUEST_FAILED), f.default.includes(e.message, v.default.CLI_MESSAGES.FAILED_REQUEST_AUTH_CODE)) throw g.default.log("[Main] ConfigUtil.ready(): shown error message = " + v.default.MESSAGES.ERR_MSG_REQUEST_AUTH_CODE_FAILED + "."), new Error(v.default.MESSAGES.ERR_MSG_REQUEST_AUTH_CODE_FAILED);
                                        if (f.default.includes(e.message, v.default.CLI_MESSAGES.NO_CONNECTED_NETWORK)) throw g.default.log("[Main] ConfigUtil.ready(): shown error message = " + v.default.MESSAGES.ERR_MSG_NOT_CONNECTED_NETWORK + "."), new Error(v.default.MESSAGES.ERR_MSG_NOT_CONNECTED_NETWORK);
                                        throw g.default.log("[Main] ConfigUtil.ready(): shown error message = " + v.default.MESSAGES.ERR_MSG_INTERNAL_ERROR_IOT_CLOUD + "."), new Error(v.default.MESSAGES.ERR_MSG_INTERNAL_ERROR_IOT_CLOUD)
                                    });
                                case 6:
                                    e.importConfig(n);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "importConfig",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                    g.default.log("[Main] ConfigUtil.importConfig() is called. config owner = " + t + ".");
                    var n = C.default.getConfig(S.default.getConfigPathByOwner(I.default.CONFIG_NAME));
                    e.setCommandOptions(n, t)
                }
            }, {
                key: "setCommandOptions",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
                    g.default.log("[Main] ConfigUtil.setCommandOptions() is called."), g.default.log("[Main] ConfigUtil.setCommandOptions(): config owner = " + n + "."), D.default.sendInProgressMessage(v.default.PROCESSING_MESSAGES.SETTING_CONFIGURATIONS);
                    var r = new Map;
                    r.set(v.default.CONFIGURATOR_FIELD.USER_ID, t.userId), r.set(v.default.CONFIGURATOR_FIELD.SSO_TOKEN, t.ssoToken), r.set(v.default.CONFIGURATOR_FIELD.MNNM, t.mnnm), r.set(v.default.CONFIGURATOR_FIELD.MNID, t.mnid), r.set(v.default.CONFIGURATOR_FIELD.AUTH_PROVIDER_URI, t.authProvider.uri), r.set(v.default.CONFIGURATOR_FIELD.MODE, e.detectConfigMode(t)), C.default.setConfigPairs(r, n)
                }
            }, {
                key: "validateExternalConfig",
                value: function() {
                    var t = I.default.CONFIG_NAME;
                    if (!t) throw new Error(v.default.MESSAGES.ERR_MSG_REQUIRED_CONFIG_NAME);
                    if (!f.default.includes(p, t)) throw new Error(v.default.MESSAGES.ERR_MSG_INVALID_CONFIG_NAME);
                    var n = C.default.getConfig(S.default.getConfigPathByOwner(I.default.CONFIG_NAME));
                    if (!e.isValidForImport(n)) throw new Error(v.default.MESSAGES.INVALID_LOGIN_STATUS)
                }
            }, {
                key: "isValidForImport",
                value: function(e) {
                    var t = !1;
                    return !f.default.isEmpty(e) && !f.default.isEmpty(e.ssoToken) && !f.default.isEmpty(e.userId) && Date.now() <= Date.parse(e.accessTokenExpireDate) - C.default.getExpireDateThreshold() && (t = !0), t
                }
            }, {
                key: "isRefreshAvailable",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                    g.default.log("[Main] ConfigUtil.isRefreshAvailable() is called.");
                    var n = C.default.getConfig(S.default.getConfigPathByOwner(I.default.CONFIG_NAME)),
                        r = C.default.getConfig(S.default.getConfigPathByOwner(t));
                    return f.default.isEmpty(r.userId) ? (g.default.log("[Main] ConfigUtil.isRefreshAvailable(): never been logged in !!!"), !1) : f.default.isEqual(n.userId, r.userId) && f.default.isEqual(n.mnnm, r.mnnm) && f.default.isEqual(n.mnid, r.mnid) ? e.isConfigModeChanged(n, r) ? (g.default.log("[Main] ConfigUtil.isRefreshAvailable(): config mode changed !!!"), !1) : f.default.isEmpty(n.userId) || f.default.isEmpty(n.accessToken) || f.default.isEmpty(n.accessTokenExpireDate) || Date.now() > Date.parse(n.accessTokenExpireDate) - C.default.getExpireDateThreshold() ? (g.default.log("[Main] ConfigUtil.isRefreshAvailable(): external config not valid !!!"), !1) : !(f.default.isEmpty(r.userId) || f.default.isEmpty(r.refreshToken) || f.default.isEmpty(r.refreshTokenExpireDate) || Date.now() > Date.parse(r.refreshTokenExpireDate) - C.default.getExpireDateThreshold()) || (g.default.log("[Main] ConfigUtil.isRefreshAvailable(): owner config not valid !!!"), !1) : (g.default.log("[Main] ConfigUtil.isRefreshAvailable(): user info changed !!!"), !1)
                }
            }, {
                key: "tryTokenRefresh",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (g.default.log("[Main] ConfigUtil.tryTokenRefresh() is called. owner is " + n), !e.isRefreshAvailable(n)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.prev = 2, t.next = 5, C.default.refreshToken(n);
                                case 5:
                                    return t.abrupt("return", !0);
                                case 8:
                                    if (t.prev = 8, t.t0 = t.catch(2), g.default.log("[Main] ConfigUtil.tryTokenRefresh() has an error that " + t.t0.message), !f.default.includes(t.t0.message, v.default.CLI_MESSAGES.NO_CONNECTED_NETWORK)) {
                                        t.next = 14;
                                        break
                                    }
                                    throw g.default.log("[Main] ConfigUtil.tryTokenRefresh(): The shown error message is that " + v.default.MESSAGES.ERR_MSG_NOT_CONNECTED_NETWORK), new Error(v.default.MESSAGES.ERR_MSG_NOT_CONNECTED_NETWORK);
                                case 14:
                                    throw g.default.log("[Main] ConfigUtil.tryTokenRefresh(): The shown error message is that " + v.default.MESSAGES.ERR_MSG_FAILED_REFRESH_TOKEN), new Error(v.default.MESSAGES.ERR_MSG_FAILED_REFRESH_TOKEN);
                                case 16:
                                    return g.default.log("[Main] ConfigUtil.tryTokenRefresh(): token refresh not available."), t.abrupt("return", !1);
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [2, 8]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "getConfigMode",
                value: function(e) {
                    return e.mode
                }
            }, {
                key: "isConfigModeChanged",
                value: function(t, n) {
                    g.default.log("[Main] ConfigUtil.isConfigModeChanged() is called.");
                    var r = e.getConfigMode(n);
                    return !r || e.detectConfigMode(t) !== r
                }
            }, {
                key: "isConfigMNIDTypeChanged",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                    return g.default.log("[Main] ConfigUtil.isConfigMNIDTypeChanged() is called."), C.default.getMNIDType(S.default.getConfigPathByOwner(I.default.CONFIG_NAME)) === C.default.getMNIDType(S.default.getConfigPathByOwner(e))
                }
            }, {
                key: "detectConfigMode",
                value: function(e) {
                    var t = void 0;
                    if (C.default.isProductionMode(e)) t = "production";
                    else {
                        if (!C.default.isStageMode(e)) throw new Error("UNKNOWN ENV MODE");
                        t = "stage"
                    }
                    return t
                }
            }, {
                key: "getIOTCloudConfig",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                    g.default.log("[Main] ConfigUtil.getIOTCloudConfig() is called. config owner = " + e);
                    var t = C.default.getConfig(S.default.getConfigPathByOwner(e)),
                        n = C.default.getServerConfig(t, "iotCloud"),
                        r = C.default.getServerConfig(t, "iotConsole"),
                        i = C.default.getServerConfig(t, "authProvider"),
                        a = C.default.getDeviceKeyCert(),
                        o = a.key,
                        l = a.cert;
                    return o && l && (n.clientKey = o, n.clientCert = l), {
                        userId: t.userId,
                        accessToken: t.accessToken,
                        authCode: t.authCode,
                        ssoToken: t.ssoToken,
                        deviceId: t.deviceId,
                        iotCloud: n,
                        iotConsole: r,
                        authProvider: i
                    }
                }
            }]), e
        }(),
        h = M;
    t.default = h;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(L, "defaultOwner", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ConfigUtil.js"), __REACT_HOT_LOADER__.register(p, "ARR_VALID_CONFIG_NAME", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ConfigUtil.js"), __REACT_HOT_LOADER__.register(M, "ConfigUtil", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ConfigUtil.js"), __REACT_HOT_LOADER__.register(h, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ConfigUtil.js"))
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
            STATE: {
                APP: {
                    ACTIVE: "ACTIVE",
                    BACKGROUND: "BACKGROUND"
                },
                CONN: {
                    CONNECTED: "CONNECTED",
                    DISCONNECTED: "DISCONNECTED"
                }
            },
            RESULT: {
                OCF_OK: "OCF_OK",
                OCF_RESOURCE_CHANGED: "OCF_RESOURCE_CHANGED"
            },
            RESULT_CLI: {
                DEVICE_TURNED_OFF: "DEVICE_TURNED_OFF",
                INVALID_PROPERTY: "INVALID_PROPERTY",
                CANNOT_FIND_RESOURCE: "CANNOT_FIND_RESOURCE",
                CANNOT_FIND_RESOURCE_IN_DEVICE: "CANNOT_FIND_RESOURCE_IN_DEVICE"
            },
            IPC_CHANNELS: {
                MANAGER_API: {
                    SET_CLOUD_CONNECTION_STATE_LISTENER: "plugin:setCloudConnectionStateListener",
                    CALL_CLOUD_CONNECTION_STATE_LISTENER: "plugin:callCloudConnectionStateListener",
                    SET_CHANGE_APPLICATION_STATE_LISTENER: "plugin:setChangeApplicationStateListener",
                    CALL_CHANGE_APPLICATION_STATE_LISTENER: "plugin:callChangeApplicationStateListener",
                    GET_OCF_DEVICES: "plugin:getOCFDevices",
                    CLOSE: "plugin:close"
                },
                OCF_DEVICE_API: {
                    SUBSCRIBE: "plugin:subscribe",
                    UNSUBSCRIBE: "plugin:unsubscribe",
                    GET_REMOTE_REPRESENTATION: "plugin:getRemoteRepresentation",
                    SET_REMOTE_REPRESENTATION: "plugin:setRemoteRepresentation",
                    START_MONITORING_CONNECTION_STATE: "plugin:startMonitoringConnectionState",
                    STOP_MONITORING_CONNECTION_STATE: "plugin:stopMonitoringConnectionState"
                }
            }
        },
        i = r;
    t.default = i;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(r, "PluginConstants", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginConstants.js"), __REACT_HOT_LOADER__.register(i, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginConstants.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(11),
        f = n(13),
        E = r(f),
        C = n(12),
        T = r(C),
        I = n(14),
        A = r(I),
        g = n(7),
        R = r(g),
        v = n(18),
        O = r(v),
        S = n(8),
        N = r(S),
        D = n(2),
        L = r(D),
        p = n(3),
        M = r(p),
        h = n(21),
        m = r(h),
        P = n(22),
        y = r(P),
        k = n(33),
        w = r(k),
        G = n(34),
        b = r(G),
        U = n(20),
        V = r(U),
        H = n(10),
        F = r(H),
        W = n(35),
        x = r(W),
        j = n(25),
        K = r(j);
    _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_LAUNCH_VIRTUAL_DEVICE, b.default.launchVirtualDeviceListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_DELETE_VIRTUAL_DEVICE, b.default.deleteVirtualDeviceListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_GET_DEVICE_LIST, b.default.getDeviceListListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_CLOSE_VIRTUAL_DEVICE_WINDOW, b.default.closeVirtualDeviceWindowListListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_GET_IS_READY_TO_LAUNCH, b.default.getIsReadyToLaunchListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VDL_GET_OPENED_VD_WINDOWS_COUNT, b.default.getOpenedVDWindowCountListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VD_NOTIFY_MESSAGE, V.default.notifyMessageListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.VD_START_SERVER, V.default.startServerListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_INIT_PLUGIN, x.default.initPlugin), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_DISMISS_PLUGIN, x.default.dismissPlugin), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_GET_INITIAL_DATA, w.default.getInitialDataListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_POSTACTION_CHANGED_DEVICE_STATE, w.default.postActionForChangedDeviceStateListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_SEND_DATA, w.default.sendDataListener), _.ipcMain.on(L.default.IPC_CHANNELS.TO_MAIN.SIM_GET_IS_READY_TO_LAUNCH, w.default.getIsReadyToLaunchListener), x.default.preparePluginIPC();
    var B = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "makeSingleInstance",
                value: function(e) {
                    M.default.log("[Main] MainController.makeSingleInstance() is called.");
                    var t = T.default.normalize(T.default.join(R.default.getHomePath(), L.default.PATHS.SMARTTHINGS, L.default.PATHS.VIRTUAL_DEVICE_LAUNCHER, L.default.PATHS.LOGS, L.default.FILES.VDL_INI));
                    E.default.writeJsonSync(t, {
                        inProgress: e
                    })
                }
            }, {
                key: "onCloseWindow",
                value: function(e) {
                    M.default.log("[Main] MainController.onCloseWindow() is called."), F.default.onCloseWindow(e)
                }
            }, {
                key: "checkPreconditions",
                value: function() {
                    M.default.log("[Main] MainController.checkPreconditions() is called."), N.default.TARGET === L.default.TARGET_SIMULATOR ? (O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.CHECKING_PRECONDITIONS), O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.CHECKING_UI_MANIFEST_FILE), m.default.getUIManifestFilePath()) : (N.default.TARGET, L.default.TARGET_VIRTUAL_DEVICE_LAUNCHER), M.default.log("[Main] MainController.checkPreconditions() is resolved.")
                }
            }, {
                key: "readyForSimulator",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return M.default.log("[Main] MainController.readyForSimulator() is called."), e.abrupt("return", m.default.init().catch(function(e) {
                                        throw M.default.log("[Main] MainController.readyForSimulator(): error message = " + e.message), new Error(L.default.MESSAGES.ERR_MSG_UI_MANIFEST_INIT_FAIL)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "readyForVirtualDevice",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return M.default.log("[Main] MainController.readyForVirtualDevice() is called."), e.abrupt("return", y.default.init());
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "initApp",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return M.default.log("[Main] MainController.initApp() is called."), O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.INIT_STARTED), t.prev = 2, O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.CHECKING_LAUNCH_PARAMETERS), A.default.validateExternalConfig(), e.checkPreconditions(), t.next = 8, A.default.ready();
                                case 8:
                                    if (M.default.log("[Main] MainController.initApp(): ConfigUtil.ready() is resolved."), N.default.TARGET !== L.default.TARGET_SIMULATOR) {
                                        t.next = 16;
                                        break
                                    }
                                    return O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.LOADING_UI_MANIFEST), t.next = 13, e.readyForSimulator();
                                case 13:
                                    M.default.log("[Main] MainController.initApp(): MainController.readyForSimulator() is resolved."), t.next = 21;
                                    break;
                                case 16:
                                    if (N.default.TARGET !== L.default.TARGET_VIRTUAL_DEVICE_LAUNCHER) {
                                        t.next = 21;
                                        break
                                    }
                                    return O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.LOADING_RESOURCE_DEFINITIONS), t.next = 20, e.readyForVirtualDevice();
                                case 20:
                                    M.default.log("[Main] MainController.initApp(): MainController.readyForVirtualDevice() is resolved.");
                                case 21:
                                    return O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.PREPARING_IOT_CLOUD_CONNECTOR), t.next = 24, F.default.getMainWindow().setConnector();
                                case 24:
                                    O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.INIT_FINISHED), M.default.log("[Main] MainController.initApp() is revolved."), N.default.IS_WINDOW_READY = !0, setTimeout(function() {
                                        var e = F.default.getMainWindow().getWebContents(),
                                            t = N.default.TARGET === L.default.TARGET_SIMULATOR ? L.default.IPC_CHANNELS.TO_RENDERER.SIM_IS_WINDOW_READY : L.default.IPC_CHANNELS.TO_RENDERER.VDL_IS_WINDOW_READY;
                                        e.send(t)
                                    }, 500), t.next = 36;
                                    break;
                                case 30:
                                    t.prev = 30, t.t0 = t.catch(2), M.default.log("[Main] MainController.initApp() is rejected with " + t.t0.message + "."), N.default.IS_WINDOW_READY = !1, O.default.sendInProgressMessage(L.default.PROCESSING_MESSAGES.INIT_FAILED), K.default.emit("main-messagebox", L.default.DIALOG_MESSAGEBOX_TYPES.ERROR, t.t0.message);
                                case 36:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [2, 30]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "startApp",
                value: function() {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    M.default.log("[Main] MainController.startApp() is called."), n = null, t.prev = 2, N.default.IS_APP_READY && (N.default.IS_APP_READY = !1, n = F.default.createWindow(), n.getWebContents().once("did-finish-load", e.initApp)), t.next = 11;
                                    break;
                                case 6:
                                    throw t.prev = 6, t.t0 = t.catch(2), M.default.log("[Main] MainController.startApp(): An error has occurred: " + t.t0.message), n && n.close(), new Error(t.t0.message);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [2, 6]
                        ])
                    }));
                    return t
                }()
            }]), e
        }(),
        Y = B;
    t.default = Y;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(B, "MainController", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/MainController.js"), __REACT_HOT_LOADER__.register(Y, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/MainController.js"))
    }()
}, function(e, t) {
    e.exports = require("os")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(8),
        u = r(s),
        d = n(2),
        c = r(d),
        _ = n(3),
        f = r(_),
        E = n(10),
        C = r(E),
        T = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, l.default)(e, null, [{
                key: "send",
                value: function() {
                    f.default.log("[Main] SendingMessagesUtil.toRenderer is called.")
                }
            }, {
                key: "sendInProgressMessage",
                value: function(e) {
                    f.default.log("[Main] CommonUtil.sendInProgressMessage() is called.");
                    var t = C.default.getMainWindow().getWebContents(),
                        n = u.default.TARGET === c.default.TARGET_SIMULATOR ? c.default.IPC_CHANNELS.TO_RENDERER.SIM_SHOW_MESSAGE_INPROGRESS : c.default.IPC_CHANNELS.TO_RENDERER.VDL_SHOW_MESSAGE_INPROGRESS;
                    t.send(n, e)
                }
            }]), e
        }(),
        I = T;
    t.default = I;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(T, "SendingMessagesUtil", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/SendingMessagesUtil.js"), __REACT_HOT_LOADER__.register(I, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/SendingMessagesUtil.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(7),
        f = r(_),
        E = n(9),
        C = r(E),
        T = n(3),
        I = r(T),
        A = n(14),
        g = r(A),
        R = function() {
            function e(t) {
                (0, u.default)(this, e), I.default.log("[Main] IOTCloudClient.constructor() is called."), this.config = this.getIOTCloudClientConfig(t), this.client = this.createIOTCloudClient()
            }
            return (0, c.default)(e, [{
                key: "createIOTCloudClient",
                value: function() {
                    return I.default.log("[Main] IOTCloudClient.createIOTCloudClient() is called."), C.default.getSTLibIOTCloudClient(this.config)
                }
            }, {
                key: "addConnectionCloseHandler",
                value: function(e) {
                    I.default.log("[Main] IOTCloudClient.addConnectionCloseHandler() is called."), this.client.on("close", e)
                }
            }, {
                key: "addSubscribeServiceEventHandler",
                value: function(e) {
                    I.default.log("[Main] IOTCloudClient.addSubscribeServiceEventHandler() is called."), this.client.on("update_group", e)
                }
            }, {
                key: "subscribeServiceEvent",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.subscribeServiceEvent() is called."), e.abrupt("return", this.client.subscribeServiceEvent(["update_group"]));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "removeAllListeners",
                value: function() {
                    I.default.log("[Main] IOTCloudClient.removeAllListeners() is called."), this.client.removeAllListeners()
                }
            }, {
                key: "connect",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.connect() is called."), e.abrupt("return", this.client.connect());
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "disconnect",
                value: function() {
                    this.isConnected() && (I.default.log("[Main] IOTCloudClient.disconnect() is called."), this.client.disconnect(), this.removeAllListeners())
                }
            }, {
                key: "isConnected",
                value: function() {
                    return this.client.isConnected()
                }
            }, {
                key: "getIOTCloudClientConfig",
                value: function(e) {
                    return I.default.log("[Main] IOTCloudClient.getIOTCloudClientConfig() is called."), g.default.getIOTCloudConfig(e)
                }
            }, {
                key: "getDeviceInfo",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                	I.default.log("TANG: Device ID = " + t);

                                    return I.default.log("[Main] IOTCloudClient.getDeviceInfo() is called."), I.default.log("[Main] IOTCloudClient.getDeviceInfo(): deviceID = " + t), e.abrupt("return", this.client.retrieveDevice(t, !1));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getDeviceList",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                	
                                    return I.default.log("[Main] IOTCloudClient.getDeviceList() is called."), e.abrupt("return", this.client.retrieveDeviceList(!1));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "deleteVirtualDevice",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.deleteVirtualDevice() is called."), I.default.log("[Main] IOTCloudClient.deleteVirtualDevice(): deviceID = " + t), e.abrupt("return", this.client.deleteDevice(t));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "unsubscribeDevicePresence",
                value: function(e, t) {
                    I.default.log("[Main] IOTCloudClient.unsubscribeDevicePresence() is called."), I.default.log("[Main] IOTCloudClient.unsubscribeDevicePresence(): deviceID = " + e), this.client.unsubscribeDevicePresence(e), this.client.removeListener(e, t)
                }
            }, {
                key: "subscribeDevicePresence",
                value: function(e, t) {
                    I.default.log("[Main] IOTCloudClient.subscribeDevicePresence() is called."), I.default.log("[Main] IOTCloudClient.subscribeDevicePresence(): deviceID = " + e), this.client.on(e, t), this.client.subscribeDevicePresence(e)
                }
            }, {
                key: "unsubscribeDeviceResource",
                value: function(e, t) {
                    I.default.log("[Main] IOTCloudClient.unsubscribeDeviceResource() is called."), I.default.log("[Main] IOTCloudClient.unsubscribeDeviceResource(): resourceType = " + e), this.client.unsubscribeDeviceResource(e), this.client.removeListener(e, t)
                }
            }, {
                key: "subscribeDeviceResource",
                value: function(e, t) {
                    I.default.log("[Main] IOTCloudClient.subscribeDeviceResource() is called."), I.default.log("[Main] IOTCloudClient.subscribeDeviceResource(): resourceType = " + e), this.client.on(e, t), this.client.subscribeDeviceResource(e)
                }
            }, {
                key: "getDeviceResource",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n) {
                        var r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.getDeviceResource() is called."), I.default.log("[Main] IOTCloudClient.getDeviceResource(): deviceID = " + t), I.default.log("[Main] IOTCloudClient.getDeviceResource(): resourceType = " + n), e.next = 5, this.client.retrieveStatus(t, n, !1);
                                case 5:
                                    return r = e.sent, e.abrupt("return", r);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getGroup",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        var n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.getGroup() is called."), I.default.log("[Main] IOTCloudClient.getGroup(): groupID = " + t), e.next = 4, this.client.retrieveGroup(t);
                                case 4:
                                    return n = e.sent, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "isDeviceConnected",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        var n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.isDeviceConnected() is called."), I.default.log("[Main] IOTCloudClient.isDeviceConnected(): deviceID = " + t), e.next = 4, this.client.agent.getDeviceState(t).then(function(e) {
                                        return !(!e.prslist || e.prslist.length <= 0 || "on" !== e.prslist[0].state)
                                    });
                                case 4:
                                    return n = e.sent, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "sendData",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[Main] IOTCloudClient.sendData() is called."), I.default.log("[Main] IOTCloudClient.sendData(): deviceID = " + t.deviceID), I.default.log("[Main] IOTCloudClient.sendData(): resourceType = " + t.resourceType), I.default.log("[Main] IOTCloudClient.sendData(): resourceTypeData = " + f.default.stringify(t.resourceTypeData)), e.abrupt("return", this.client.commandDevice(t.deviceID, t.resourceType, t.resourceTypeData, "/oic/route/", null, null, !1));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }]), e
        }(),
        v = R;
    t.default = v;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register("/oic/route/", "PREFIX_RESOURCE_TYPE", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudClient.js"), __REACT_HOT_LOADER__.register(R, "IOTCloudClient", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudClient.js"), __REACT_HOT_LOADER__.register(v, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudClient.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(2),
        C = r(E),
        T = n(7),
        I = r(T),
        A = n(3),
        g = r(A),
        R = n(10),
        v = r(R),
        O = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "startServerListener",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n) {
                        var r, i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (g.default.log("[Main] VirtualDeviceController.startServerListener() is called."), g.default.log("[Main] VirtualDeviceController.startServerListener(): deviceID = " + n.id), e.prev = 2, !(r = v.default.getWindow(n.id))) {
                                        e.next = 17;
                                        break
                                    }
                                    if (!(i = r.iotCloudConnector)) {
                                        e.next = 17;
                                        break
                                    }
                                    return i.stop(), g.default.log("[Main] VirtualDeviceController.startServerListener(): IOTCloudServer stopped."), i.addConnectionCloseHandler(function() {
                                        var e = v.default.getWindow(n.id);
                                        if (e) {
                                            g.default.error("[Main][IOTCloudServer][ERROR] The IOTCloudServer for virtual device connection closed.");
                                            e.getWebContents().send(C.default.IPC_CHANNELS.TO_RENDERER.ALL_CONNECTION_CLOSED)
                                        }
                                    }), i.setInitialDataForAllResourceType(n.rtData), i.addRequestHandlers(), e.next = 14, i.start();
                                case 14:
                                    g.default.log("[Main] VirtualDeviceController.startServerListener(): IOTCloudServer started."), t.sender.send(C.default.IPC_CHANNELS.TO_RENDERER.VD_START_SERVER_SUCCESS, {
                                        deviceID: n.id
                                    }), g.default.log("[Main] VirtualDeviceController.startServerListener() is resolved.");
                                case 17:
                                    e.next = 23;
                                    break;
                                case 19:
                                    e.prev = 19, e.t0 = e.catch(2), g.default.log("[Main] VirtualDeviceController.startServerListener() is rejected with " + e.t0.message + "."), t.sender.send(C.default.IPC_CHANNELS.TO_RENDERER.VD_START_SERVER_ERROR, e.t0);
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [2, 19]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "notifyMessage",
                value: function(e, t, n) {
                    return g.default.log("[Main] VirtualDeviceController.notifyMessage() is called."), g.default.log("[Main] VirtualDeviceController.notifyMessage(): deviceID = " + e + "."), g.default.log("[Main] VirtualDeviceController.notifyMessage(): resourceType = " + t + "."), g.default.log("[Main] VirtualDeviceController.notifyMessage(): resourceTypeData = " + I.default.stringify(n) + "."), v.default.getWindow(e).iotCloudConnector.notify(t, n)
                }
            }, {
                key: "notifyMessageListener",
                value: function(t, n) {
                    g.default.log("[Main] VirtualDeviceController.notifyMessageListener() is called."), g.default.log("[Main] VirtualDeviceController.notifyMessageListener(): deviceID = " + n.id + "."), g.default.log("[Main] VirtualDeviceController.notifyMessageListener(): resourceType = " + n.uri + "."), g.default.log("[Main] VirtualDeviceController.notifyMessageListener(): resourceTypeData = " + I.default.stringify(n.data) + ".");
                    try {
                        if (f.default.isEmpty(n) || f.default.isEmpty(n.id) || f.default.isEmpty(n.uri) || f.default.isEmpty(n.data)) throw new Error(C.default.MESSAGES.NO_REQUIRED_FIELD_FOR_NOTIFY_MESSAGE);
                        if (n.target !== C.default.TARGET_VIRTUAL_DEVICE) throw new Error(C.default.MESSAGES.NOT_PROPER_TARGET_NAME);
                        e.notifyMessage(n.id, n.uri, n.data), g.default.log("[Main] VirtualDeviceController.notifyMessage() is resolved.")
                    } catch (e) {
                        g.default.log("[Main] VirtualDeviceController.notifyMessage() is rejected with " + e.message + "."), t.sender.send(C.default.IPC_CHANNELS.TO_RENDERER.VD_NOTIFY_MESSAGE_ERROR, e)
                    }
                }
            }, {
                key: "requestSetDataForResourceType",
                value: function(e) {
                    g.default.log("[Main] VirtualDeviceController.requestSetDataForResourceType() is called."), g.default.log("[Main] VirtualDeviceController.requestSetDataForResourceType(): deviceID = " + e.id), v.default.getWindow(e.id).getWebContents().send(C.default.IPC_CHANNELS.TO_RENDERER.VD_SET_RESOURCE_TYPE_DATA, e)
                }
            }]), e
        }(),
        S = O;
    t.default = S;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(O, "VirtualDeviceController", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/VirtualDeviceController.js"), __REACT_HOT_LOADER__.register(S, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/VirtualDeviceController.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(13),
        C = r(E),
        T = n(12),
        I = r(T),
        A = n(9),
        g = r(A),
        R = n(7),
        v = r(R),
        O = n(2),
        S = r(O),
        N = n(3),
        D = r(N),
        L = n(8),
        p = r(L),
        M = {
            LINK_HREF: "link.href",
            HREF: "href"
        },
        h = function() {
            function e() {
                (0, u.default)(this, e), this.uiManifest = null, this.voiceManifest = null
            }
            return (0, c.default)(e, [{
                key: "init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return D.default.log("[Main] ManifestFileManager.init() is called."), e.abrupt("return", this.readUIManifestFile());
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getUIManifestFilePath",
                value: function() {
                    var e = v.default.getConfigPathByOwner(p.default.CONFIG_NAME),
                        t = g.default.getConfig(e),
                        n = t.userId;
                    if (!n) throw new Error(S.default.MESSAGES.ERR_MSG_LOGIN_REQUIRED);
                    var r = I.default.normalize(I.default.join(v.default.getHomePath(), S.default.PATHS.SMARTTHINGS, S.default.PATHS.SIMULATOR, S.default.PATHS.SIMULATOR_INSTALLED, n, S.default.PATHS.SIMULATOR_METADATA, S.default.FILES.UI_JSON));
                    if (!C.default.existsSync(r)) throw new Error(S.default.MESSAGES.ERR_MSG_HAS_NO_UI_MANIFEST);
                    return r
                }
            }, {
                key: "readUIManifestFile",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        var t, n = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.getUIManifestFilePath(), D.default.log("[Main] ManifestFileManager.readUIManifestFile() is called. uiManifestPath = " + t), e.abrupt("return", C.default.readJson(t).then(function(e) {
                                        return D.default.log("[Main] ManifestFileManager.readUIManifestFile() is resolved. with uiJSON = " + v.default.stringify(e)), n.uiManifest = e, e
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "extractResourceTypesFromManifest",
                value: function() {
                    if (D.default.log("[Main] ManifestFileManager.extractResourceTypesFromManifest() is called."), this.uiManifest) {
                        var e = f.default.map(this.uiManifest.ma, f.default.property(M.LINK_HREF)),
                            t = f.default.flatMap(this.uiManifest.ms, function(e) {
                                return f.default.map(e.label.arguments, f.default.property(M.HREF))
                            });
                        return f.default.union(e, t)
                    }
                    return []
                }
            }, {
                key: "getUIManifest",
                value: function() {
                    return D.default.log("[Main] ManifestFileManager.getUIManifest() is called."), this.uiManifest
                }
            }, {
                key: "getVoiceManifest",
                value: function() {
                    return D.default.log("[Main] ManifestFileManager.getVoiceManifest() is called."), this.voiceManifest
                }
            }]), e
        }(),
        m = new h,
        P = m;
    t.default = P;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(M, "RESOURCE_TYPE_PROPERTIES", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ManifestFileManager.js"), __REACT_HOT_LOADER__.register(h, "ManifestFileManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ManifestFileManager.js"), __REACT_HOT_LOADER__.register(m, "manifestFileManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ManifestFileManager.js"), __REACT_HOT_LOADER__.register(P, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ManifestFileManager.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(9),
        C = r(E),
        T = n(3),
        I = r(T),
        A = function() {
            function e() {
                (0, u.default)(this, e), this.allResourceTypes = []
            }
            return (0, c.default)(e, [{
                key: "init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I.default.log("[ResourceTypeManager] init() called."), e.prev = 1, e.next = 4, C.default.getResourceTypeList();
                                case 4:
                                    this.allResourceTypes = e.sent, I.default.log("[ResourceTypeManager][init][SUCCESS] allResourceTypes = " + JSON.stringify(this.allResourceTypes)), e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), this.allResourceTypes = [], I.default.log("[ResourceTypeManager][init][ERROR] error message = " + e.t0.message);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [1, 8]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "getResourceType",
                value: function(e) {
                    return I.default.log("[ResourceTypeManager][getResourceType] resourceType = " + e), f.default.find(this.allResourceTypes, {
                        rt: e
                    })
                }
            }]), e
        }(),
        g = new A,
        R = g;
    t.default = R;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(A, "ResourceTypeManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ResourceTypeManager.js"), __REACT_HOT_LOADER__.register(g, "resourceTypeManager", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ResourceTypeManager.js"), __REACT_HOT_LOADER__.register(R, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/ResourceTypeManager.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(7),
        C = r(E),
        T = n(2),
        I = r(T),
        A = n(3),
        g = r(A),
        R = n(22),
        v = r(R),
        O = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, u.default)(this, e), g.default.log("[DeviceInfoModel] constructor() called."), this.data = t, this.id = t.id || "", this.name = t.nick || t.device.n || I.default.LABELS.UNNAMED_DEVICE, this.state = t.state || "off", this.device = t.device || {}, this.platform = t.platform || {}, this.resources = t.resources || [], this.dtype = f.default.find(t.device.rt, function(e) {
                    return "oic.wk.d" !== e
                })
            }
            return (0, c.default)(e, [{
                key: "setAllResourcesTypeData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        var t, n = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    g.default.log("[DeviceInfoModel] setAllResourcesTypeData() called."), t = [], f.default.forEach(this.resources, function(e) {
                                        var r = f.default.replace(e.href, "" + I.default.PREFIX_RESOURCE_LINK_FOR_HREF + n.id, "");
                                        if (!C.default.isExcludedResourceType(r)) {
                                            var i = f.default.cloneDeep(e);
                                            i.data = [], f.default.forEach(e.rt, function(t) {
                                                if (!C.default.isExcludedOCFResourceType(t)) {
                                                    g.default.log("[DeviceInfoModel] link: " + C.default.stringify(e));
                                                    var n = v.default.getResourceType(t) || {};
                                                    g.default.log("[DeviceInfoModel] rtDataObj: " + C.default.stringify(n)), i.data.push(n)
                                                }
                                            }), t.push(i)
                                        }
                                    }), this.resources = t;
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }]), e
        }(),
        S = O;
    t.default = S;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(O, "DeviceInfoModel", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/DeviceInfoModel.js"), __REACT_HOT_LOADER__.register(S, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/models/DeviceInfoModel.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(4),
        u = r(s),
        d = n(13),
        c = r(d),
        _ = n(12),
        f = r(_),
        E = n(15),
        C = r(E),
        T = n(3),
        I = r(T),
        A = n(2),
        g = r(A),
        R = n(7),
        v = r(R),
        O = n(9),
        S = r(O),
        N = Object.freeze({
            65: "CREATED",
            66: "DELETED",
            67: "VALID",
            68: "CHANGED",
            69: "CONTENT",
            128: "BAD_REQUEST",
            129: "UNAUTHORIZED",
            130: "BAD_OPTION",
            131: "FORBIDDEN",
            132: "NOT_FOUND",
            133: "METHOD_NOT_ALLOWED",
            134: "NOT_ACCEPTABLE",
            140: "PRECONDITION_FAILED",
            141: "REQUEST_ENTITY_TOO_LARGE",
            143: "UNSUPPORTED_CONTENT_FORMAT",
            160: "INTERNAL_SERVER_ERROR",
            161: "NOT_IMPLEMENTED",
            162: "BAD_GATEWAY",
            163: "SERVICE_UNAVAILABLE",
            164: "GATEWAY_TIMEOUT",
            165: "PROXYING_NOT_SUPPORTED"
        }),
        D = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, l.default)(e, null, [{
                key: "getPluginPath",
                value: function(e) {
                    if (I.default.log("[PluginUtil.getPluginPath] pluginPackageName = " + e), u.default.isEmpty(e)) throw new Error(g.default.MESSAGES.ERR_MSG_NOT_EXIST_PLUGIN_PACKAGE_NAME);
                    var t = S.default.getConfig(),
                        n = t.userId,
                        r = f.default.normalize(f.default.join(v.default.getHomePath(), g.default.PATHS.SMARTTHINGS, g.default.PATHS.SIMULATOR, g.default.PATHS.SIMULATOR_INSTALLED, n, g.default.PATHS.SIMULATOR_PLUGIN, e, g.default.FILES.INDEX_HTML));
                    if (!c.default.existsSync(r)) throw new Error(g.default.MESSAGES.ERR_MSG_NOT_EXIST_PLUGIN_PACKAGE_FOLDER);
                    return r
                }
            }, {
                key: "getOCFResult",
                value: function(e) {
                    var t = null,
                        n = null;
                    e.coapCode ? (t = N[e.coapCode], n = e.coapPayload.message) : e.code === C.default.RESULT_CLI.DEVICE_TURNED_OFF ? (t = "NOT_FOUND", n = "DEVICE_NOT_FOUND") : e.code === C.default.RESULT_CLI.CANNOT_FIND_RESOURCE || e.code === C.default.RESULT_CLI.CANNOT_FIND_RESOURCE_IN_DEVICE ? (t = "NOT_FOUND", n = "RESOURCE_NOT_FOUND") : e.code === C.default.RESULT_CLI.INVALID_PROPERTY && (t = "BAD_REQUEST", n = e.code);
                    var r = void 0;
                    switch (t) {
                        case "UNAUTHORIZED":
                            r = "OCF_UNAUTHORIZED_REQ";
                            break;
                        case "BAD_OPTION":
                            r = "OCF_INVALID_OPTION";
                            break;
                        case "FORBIDDEN":
                            r = "OCF_FORBIDDEN_REQ";
                            break;
                        case "REQUEST_ENTITY_TOO_LARGE":
                            r = "OCF_TOO_LARGE_REQ";
                            break;
                        case "UNSUPPORTED_CONTENT_FORMAT":
                            r = "OCF_NOT_SUPPORTED";
                            break;
                        case "SERVICE_UNAVAILABLE":
                            r = "OCF_STACK_SERVICE_UNAVAILABLE";
                            break;
                        case "METHOD_NOT_ALLOWED":
                        case "NOT_ACCEPTABLE":
                        case "INTERNAL_SERVER_ERROR":
                        case "NOT_IMPLEMENTED":
                        case "GATEWAY_TIMEOUT":
                        case "PROXY_NOT_SUPPORTED":
                        case "BAD_GATEWAY":
                            r = "OCF_" + t;
                            break;
                        case "VALID":
                        case "CONTENT":
                            r = "OCF_OK";
                            break;
                        case "CREATED":
                        case "DELETED":
                        case "CHANGED":
                            r = "OCF_RESOURCE_" + t;
                            break;
                        case "NOT_FOUND":
                            r = "OCF_" + (n || t);
                            break;
                        case "BAD_REQUEST":
                            switch (n) {
                                case C.default.RESULT_CLI.INVALID_PROPERTY:
                                    r = "OCF_NO_RESOURCE";
                                    break;
                                default:
                                    r = "OCF_ERROR"
                            }
                            break;
                        case "PRECONDITION_FAILED":
                            r = "OCF_ERROR";
                            break;
                        default:
                            r = null
                    }
                    return r
                }
            }]), e
        }(),
        L = D;
    t.default = L;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(N, "CODE_STATUS", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginUtil.js"), __REACT_HOT_LOADER__.register(D, "PluginUtil", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginUtil.js"), __REACT_HOT_LOADER__.register(L, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginUtil.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(37),
        u = r(s),
        d = n(38),
        c = r(d),
        _ = n(11),
        f = n(39),
        E = r(f),
        C = n(8),
        T = r(C),
        I = n(2),
        A = r(I),
        g = n(3),
        R = r(g),
        v = function(e) {
            function t() {
                (0, a.default)(this, t);
                var e = (0, u.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.on("main-messagebox", e.showMainMessageBox), e
            }
            return (0, c.default)(t, e), (0, l.default)(t, [{
                key: "showMessageBox",
                value: function(e, t, n) {
                    R.default.log("[Main] MainEventEmitter.showMessageBox() is called."), R.default.log("[Main] MainEventEmitter.showMessageBox(): type = " + e + "."), R.default.log("[Main] MainEventEmitter.showMessageBox(): title = " + t + "."), R.default.log("[Main] MainEventEmitter.showMessageBox(): message = " + n + "."), _.dialog.showMessageBox({
                        type: e,
                        title: t,
                        message: n
                    }), _.app.quit()
                }
            }, {
                key: "getTitle",
                value: function() {
                    return T.default.TARGET === A.default.TARGET_SIMULATOR ? A.default.TITLES.SIM : A.default.TITLES.VDL
                }
            }, {
                key: "showMainMessageBox",
                value: function(e, t) {
                    var n = this.getTitle();
                    this.showMessageBox(e, n, t)
                }
            }]), t
        }(E.default),
        O = new v,
        S = O;
    t.default = S;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(v, "MainEventEmitter", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/emitters/MainEventEmitter.js"), __REACT_HOT_LOADER__.register(O, "mainEventEmitter", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/emitters/MainEventEmitter.js"), __REACT_HOT_LOADER__.register(S, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/emitters/MainEventEmitter.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        E.default.log("[Main][App] event:window-all-closed"), o.app.quit()
    }

    function a() {
        E.default.log("[Main][App] event:ready"), s.default.IS_APP_READY = !0, _.default.startApp().catch(function(e) {
            T.default.emit("main-messagebox", d.default.DIALOG_MESSAGEBOX_TYPES.ERROR, e.message)
        }).finally(function() {
            s.default.TARGET === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER && _.default.makeSingleInstance(!1), s.default.IS_APP_READY = !1
        })
    }
    var o = n(11),
        l = n(8),
        s = r(l),
        u = n(2),
        d = r(u),
        c = n(16),
        _ = r(c),
        f = n(3),
        E = r(f),
        C = n(25),
        T = r(C);
    o.app.disableHardwareAcceleration(), o.app.on("ready", a), o.app.on("window-all-closed", i);
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "quitApp", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/index.js"), __REACT_HOT_LOADER__.register(a, "startApp", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/index.js"))
    }()
}, function(e, t) {
    e.exports = require("minimist")
}, function(e, t) {
    e.exports = require("../../cli/node_modules/iotcloud-lib")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(17),
        u = r(s),
        d = n(4),
        c = r(d),
        _ = n(2),
        f = r(_),
        E = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, l.default)(e, null, [{
                key: "getHomePath",
                value: function() {
                    return "win32" === u.default.platform() ? process.env.USERPROFILE : process.env.HOME
                }
            }, {
                key: "getCarriageReturn",
                value: function() {
                    return u.default.EOL
                }
            }, {
                key: "isNodeEnvDevelop",
                value: function() {
                    return !1
                }
            }, {
                key: "isServerConnectionError",
                value: function(e) {
                    var t = [f.default.CLI_MESSAGES.NO_CONNECTED, f.default.CLI_MESSAGES.NO_CONNECTED_ERRNO, f.default.CLI_MESSAGES.DEVICE_NOT_CONNECTED, f.default.CLI_MESSAGES.NO_CONNECTED_ENOENT];
                    return !!c.default.includes(t, e)
                }
            }, {
                key: "stringify",
                value: function(e) {
                    return JSON.stringify(e, null, 2)
                }
            }]), e
        }(),
        C = E;
    t.default = C;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(E, "ClientUtil", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ClientUtil.js"), __REACT_HOT_LOADER__.register(C, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/ClientUtil.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = r(i),
        o = n(1),
        l = r(o),
        s = n(11),
        u = n(2),
        d = r(u),
        c = n(19),
        _ = r(c),
        f = n(31),
        E = r(f),
        C = n(16),
        T = r(C),
        I = n(32),
        A = r(I),
        g = n(3),
        R = r(g),
        v = n(7),
        O = r(v),
        S = n(10),
        N = r(S),
        D = function() {
            function e(t) {
                (0, a.default)(this, e), R.default.log("[Window] constructor() is called for " + t.windowType + "Window."), this.type = t.windowType, this.target = t.target, this.deviceInfo = t.device || null, this.isDebug = t.isDebug || !1, this.parent = t.parent || null, this.setup = {
                    url: this.getURL(),
                    options: this.getWindowOption()
                }, this.window = this.createWindowInstance(), this.iotCloudConnector = null, this.initWindow()
            }
            return (0, l.default)(e, [{
                key: "createIOTCloudServerInstance",
                value: function() {
                    return R.default.log("[Window] createIOTCloudServerInstance() is called."), new E.default(this.deviceInfo.data)
                }
            }, {
                key: "createIOTCloudClientInstance",
                value: function() {
                    return R.default.log("[Window] createIOTCloudClientInstance() is called."), new _.default
                }
            }, {
                key: "createIOTCloudConnectorInstance",
                value: function() {
                    if (R.default.log("[Window] createIOTCloudConnectorInstance() is called. type = " + this.type), this.type === d.default.WINDOW_TYPES.MAIN_PROCESS) return this.createIOTCloudClientInstance();
                    if (this.type === d.default.WINDOW_TYPES.RENDERER_PROCESS) return this.createIOTCloudServerInstance();
                    throw Error(d.default.MESSAGES.NOT_PROPER_TARGET_NAME)
                }
            }, {
                key: "setConnector",
                value: function() {
                    R.default.log("[Window] createConnector() is called."), this.iotCloudConnector = this.createIOTCloudConnectorInstance()
                }
            }, {
                key: "reload",
                value: function() {
                    R.default.log("[Window] reload() is called."), this.window.reload()
                }
            }, {
                key: "getURL",
                value: function() {
                    var e = "";
                    return this.target === d.default.TARGET_SIMULATOR ? e = this.isDebug ? A.default.PATH_FOR_INDEX.DEV_SIM : A.default.PATH_FOR_INDEX.SIM : this.target === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? e = this.isDebug ? A.default.PATH_FOR_INDEX.DEV_VDL : A.default.PATH_FOR_INDEX.VDL : this.target === d.default.TARGET_VIRTUAL_DEVICE && (e = this.isDebug ? A.default.PATH_FOR_INDEX.DEV_VD : A.default.PATH_FOR_INDEX.VD), e
                }
            }, {
                key: "getTitle",
                value: function() {
                    var e = "";
                    return this.target === d.default.TARGET_SIMULATOR ? e = A.default.SIM_WINDOW.APP_TITLE : this.target === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? e = A.default.VDL_WINDOW.APP_TITLE : this.target === d.default.TARGET_VIRTUAL_DEVICE && (e = A.default.VD_WINDOW.APP_TITLE), this.isDebug && (e = e + " " + A.default.POSTFIX_TITLE), e
                }
            }, {
                key: "getIcon",
                value: function() {
                    return O.default.getOS() === d.default.PROCESS_PLATFORM_DARWIN ? this.isDebug ? A.default.ICON.DEV_DARWIN : A.default.ICON.DARWIN : O.default.getOS() === d.default.PROCESS_PLATFORM_LINUX ? this.isDebug ? A.default.ICON.DEV_LINUX : A.default.ICON.LINUX : this.isDebug ? A.default.ICON.DEV_WIN32 : A.default.ICON.WIN32
                }
            }, {
                key: "getWindowOption",
                value: function() {
                    var e = {};
                    return this.target === d.default.TARGET_SIMULATOR ? e = A.default.CREATE_WINDOW_OPTIONS.SIM : this.target === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? e = A.default.CREATE_WINDOW_OPTIONS.VDL : this.target === d.default.TARGET_VIRTUAL_DEVICE && (e = A.default.CREATE_WINDOW_OPTIONS.VD, e.parent = this.parent), e.title = this.getTitle(), e.icon = this.getIcon(), this.setWindowCoordinates(e)
                }
            }, {
                key: "setWindowCoordinates",
                value: function(e) {
                    var t = A.default.WINDOW_COORDINATES,
                        n = A.default.WINDOW_COORDINATES.VD_INCREMENT,
                        r = s.screen.getPrimaryDisplay().workArea.x,
                        i = s.screen.getPrimaryDisplay().workArea.y,
                        a = N.default.getAllWindowsCnt() + 1;
                    return this.target === d.default.TARGET_SIMULATOR ? (e.x = r + t.SIM.x, e.y = i + t.SIM.y) : this.target === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? (e.x = r + t.VDL.x, e.y = i + t.VDL.y) : this.target === d.default.TARGET_VIRTUAL_DEVICE && (e.x = r + t.VD.x + n.x * a, e.y = i + t.VD.y + n.y * a), e
                }
            }, {
                key: "onCloseWindow",
                value: function() {
                    R.default.log("[Window] onCloseWindow() is called."), T.default.onCloseWindow({
                        target: this.target,
                        deviceInfo: this.deviceInfo
                    }), this.disconnectIOTCloudConnector()
                }
            }, {
                key: "getWebContents",
                value: function() {
                    return this.window.webContents
                }
            }, {
                key: "loadURL",
                value: function() {
                    R.default.log("[Window] loadURL() is called. url = " + this.setup.url), this.window.loadURL(this.setup.url)
                }
            }, {
                key: "initWindow",
                value: function() {
                    var e = this;
                    R.default.log("[Window] initWindow() is called."), this.window.on("closed", function() {
                        R.default.log("[Window][BrowserWindow] event:closed"), e.onCloseWindow()
                    }), this.getWebContents().on("did-fail-load", function(t) {
                        R.default.log("[Window][WebContents] event:did-fail-load, error message = " + t.message), e.getWebContents().send(d.default.IPC_CHANNELS.TO_RENDERER.ALL_DID_FAIL_LOAD)
                    }), this.isDebug && this.window.webContents.openDevTools(), this.loadURL(), this.show()
                }
            }, {
                key: "createWindowInstance",
                value: function() {
                    return R.default.log("[Window] createWindowInstance() is called."), new s.BrowserWindow(this.setup.options)
                }
            }, {
                key: "disconnectIOTCloudConnector",
                value: function() {
                    R.default.log("[Window] disconnectIOTCloudConnector() is called."), this.target === d.default.TARGET_SIMULATOR || this.target === d.default.TARGET_VIRTUAL_DEVICE_LAUNCHER ? this.iotCloudConnector && this.iotCloudConnector.disconnect() : this.target === d.default.TARGET_VIRTUAL_DEVICE && this.iotCloudConnector && this.iotCloudConnector.stop()
                }
            }, {
                key: "show",
                value: function() {
                    this.window && (R.default.log("[Window] show() is called."), this.window.show(), this.focus())
                }
            }, {
                key: "focus",
                value: function() {
                    this.window && (R.default.log("[Window] focus() is called."), this.window.focus())
                }
            }, {
                key: "close",
                value: function() {
                    this.window && (R.default.log("[Window] close() is called."), this.window.close())
                }
            }, {
                key: "restore",
                value: function() {
                    this.window && (R.default.log("[Window] restore() is called."), this.window.restore())
                }
            }, {
                key: "isMinimized",
                value: function() {
                    return !!this.window && (R.default.log("[Window] isMinimized() is called."), this.window.isMinimized())
                }
            }]), e
        }(),
        L = D;
    t.default = L;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(D, "Window", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/Window.js"), __REACT_HOT_LOADER__.register(L, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/Window.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(7),
        C = r(E),
        T = n(9),
        I = r(T),
        A = n(3),
        g = r(A),
        R = n(20),
        v = r(R),
        O = n(14),
        S = r(O),
        N = I.default.getOCFModelCOAPMessage(),
        D = I.default.getOCFModelCOAPOptions(),
        L = function() {
            function e(t) {
                (0, u.default)(this, e), g.default.log("[Main] IOTCloudServer.constructor() is called."), g.default.log("[Main] IOTCloudServer.constructor(): devceInfo = " + C.default.stringify(t)), this.deviceInfo = t || {}, this.config = this.getIOTCloudServerConfig(), this.server = this.createIOTCloudServer(), this.rtData = []
            }
            return (0, c.default)(e, [{
                key: "setInitialDataForAllResourceType",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    g.default.log("[Main] IOTCloudServer.setInitialDataForAllResourceType() is called."), g.default.log("[Main] IOTCloudServer.setInitialDataForAllResourceType(): all resource types = " + C.default.stringify(e) + "."), this.rtData = e
                }
            }, {
                key: "getIOTCloudServerConfig",
                value: function() {
                    return g.default.log("[Main] IOTCloudServer.getIOTCloudServerConfig() is called."), S.default.getIOTCloudConfig()
                }
            }, {
                key: "createIOTCloudServer",
                value: function() {
                    return g.default.log("[Main] IOTCloudServer.createIOTCloudServer() is called."), I.default.getSTLibIOTCloudServer(this.deviceInfo, this.config)
                }
            }, {
                key: "notify",
                value: function(e, t) {
                    g.default.log("[Main] IOTCloudServer.notify() is called."), g.default.log("[Main] IOTCloudServer.notify(): resourceType = " + e + ", resourceTypeData = " + C.default.stringify(t) + "."), this.setCurrentDataForResourceType(e, t), this.server.notify(e, t)
                }
            }, {
                key: "getCurrentDataForResourceType",
                value: function(e) {
                    return g.default.log("[Main] IOTCloudServer.getCurrentDataForResourceType() is called. uri = " + e), f.default.filter(this.rtData, {
                        uri: e
                    })[0].data
                }
            }, {
                key: "setCurrentDataForResourceType",
                value: function(e, t) {
                    g.default.log("[Main] IOTCloudServer.setCurrentDataForResourceType() is called."), g.default.log("[Main] IOTCloudServer.setCurrentDataForResourceType(): resourceType = " + e + ", resourceTypeData = " + C.default.stringify(t) + ".");
                    var n = f.default.filter(this.rtData, {
                            uri: e
                        }),
                        r = n[0].data;
                    f.default.forEach(t, function(e, t) {
                        r[t] = e
                    })
                }
            }, {
                key: "addRequestHandlerForGetMethod",
                value: function(e) {
                    var t = this;
                    g.default.log("[Main] IOTCloudServer.addRequestHandlerForGetMethod() is called. uri = " + e), this.server.get(e, function(n) {
                        var r = t.getCurrentDataForResourceType(e);
                        return g.default.log("[Main][IOTCloudServer][GET] resourceType = " + e + ", resourceTypeData = " + C.default.stringify(r)), new N({
                            code: N.STATUS_CODE.CONTENT,
                            token: n.token,
                            payload: r,
                            options: new D({
                                format: D.CONTENT_FORMAT.CBOR
                            })
                        })
                    })
                }
            }, {
                key: "addRequestHandlerForSubscribeMethod",
                value: function(e) {
                    var t = this;
                    g.default.log("[Main] IOTCloudServer.addRequestHandlerForSubscribeMethod() is called. uri = " + e), this.server.subscribe(e, function(n) {
                        var r = t.getCurrentDataForResourceType(e);
                        return g.default.log("[Main][IOTCloudServer][SUBSCRIBE] resourceType = " + e + ", resourceTypeData = " + C.default.stringify(r)), new N({
                            code: N.STATUS_CODE.CONTENT,
                            token: n.token,
                            payload: r,
                            options: new D({
                                observe: D.numberTo4Bytes(0),
                                format: D.CONTENT_FORMAT.CBOR
                            })
                        })
                    })
                }
            }, {
                key: "addRequestHandlerForPostMethod",
                value: function(e) {
                    var t = this;
                    g.default.log("[Main] IOTCloudServer.addRequestHandlerForPostMethod() is called. uri = " + e), this.server.post(e, function(n) {
                        var r = n.payload;
                        t.setCurrentDataForResourceType(e, r), v.default.requestSetDataForResourceType({
                            uri: e,
                            id: t.deviceInfo.id,
                            data: r
                        }), g.default.log("[Main][IOTCloudServer][POST] resourceType = " + e + ", resourceTypeData = " + C.default.stringify(r));
                        var i = t.getCurrentDataForResourceType(e);
                        return setTimeout(function() {
                            try {
                                t.notify(e, i)
                            } catch (t) {
                                g.default.error("[Main][IOTCloudServer][POST] resourceType = " + e + ", an error occurred that " + t.message)
                            }
                        }, 1e3), new N({
                            code: N.STATUS_CODE.CHANGED,
                            token: n.token,
                            payload: i,
                            options: new D({
                                format: D.CONTENT_FORMAT.CBOR
                            })
                        })
                    })
                }
            }, {
                key: "addRequestHandlers",
                value: function() {
                    var e = this;
                    g.default.log("[Main] IOTCloudServer.addRequestHandlers() is called."), f.default.forEach(this.rtData, function(t) {
                        var n = t.uri;
                        e.addRequestHandlerForGetMethod(n), e.addRequestHandlerForSubscribeMethod(n), e.addRequestHandlerForPostMethod(n)
                    })
                }
            }, {
                key: "addConnectionCloseHandler",
                value: function(e) {
                    g.default.log("[Main] IOTCloudServer.addConnectionCloseHandler() is called."), this.server.on("close", e)
                }
            }, {
                key: "removeAllListeners",
                value: function() {
                    g.default.log("[Main] IOTCloudServer.removeAllListeners() is called."), this.server.removeAllListeners()
                }
            }, {
                key: "start",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return g.default.log("[Main] IOTCloudServer.start() is called."), e.abrupt("return", this.server.start());
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "stop",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    g.default.log("[Main] IOTCloudServer.stop() is called."), this.removeAllListeners(), this.server.stop();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }]), e
        }(),
        p = L;
    t.default = p;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(N, "COAPMessage", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudServer.js"), __REACT_HOT_LOADER__.register(D, "COAPOptions", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudServer.js"), __REACT_HOT_LOADER__.register(L, "IOTCloudServer", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudServer.js"), __REACT_HOT_LOADER__.register(p, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/connectors/IOTCloudServer.js"))
    }()
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(12),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            a = {
                PATH_FOR_INDEX: {
                    DEV_SIM: "http://localhost:9000/Simulator.html",
                    DEV_VDL: "http://localhost:9000/VirtualDeviceLauncher.html",
                    DEV_VD: "http://localhost:9000/VirtualDevice.html",
                    SIM: "file://" + i.default.resolve(process.cwd(), "Simulator.html"),
                    VDL: "file://" + i.default.resolve(process.cwd(), "VirtualDeviceLauncher.html"),
                    VD: "file://" + i.default.resolve(process.cwd(), "VirtualDevice.html")
                },
                WINDOW_COORDINATES: {
                    SIM: {
                        x: 600,
                        y: 100
                    },
                    VDL: {
                        x: 50,
                        y: 100
                    },
                    VD: {
                        x: 50,
                        y: 100
                    },
                    VD_INCREMENT: {
                        x: 50,
                        y: 50
                    }
                },
                CREATE_WINDOW_OPTIONS: {
                    SIM: {
                        minWidth: 423,
                        minHeight: 754,
                        width: 423,
                        height: 754,
                        resizable: !1,
                        movable: !0,
                        show: !1,
                        transparent: !0,
                        backgroundColor: "#00000000",
                        frame: !1,
                        webPreferences: {
                            nodeIntegration: !0,
                            nodeIntegrationInWorker: !0,
                            partition: "nopersist"
                        }
                    },
                    VDL: {
                        minWidth: 360,
                        minHeight: 640,
                        width: 360,
                        height: 640,
                        resizable: !1,
                        movable: !0,
                        show: !1,
                        transparent: !0,
                        backgroundColor: "#00000000",
                        frame: !1,
                        webPreferences: {
                            nodeIntegration: !0,
                            nodeIntegrationInWorker: !0,
                            partition: "nopersist"
                        }
                    },
                    VD: {
                        minWidth: 360,
                        minHeight: 640,
                        width: 360,
                        height: 640,
                        resizable: !0,
                        movable: !0,
                        show: !1,
                        transparent: !0,
                        backgroundColor: "#00000000",
                        frame: !1,
                        webPreferences: {
                            nodeIntegration: !0,
                            nodeIntegrationInWorker: !0,
                            partition: "nopersist"
                        }
                    }
                },
                ICON: {
                    DARWIN: i.default.normalize(i.default.resolve("./", "assets", "images", "favicon.icns")),
                    LINUX: i.default.normalize(i.default.resolve("./", "assets", "images", "favicon.png")),
                    WIN32: i.default.normalize(i.default.resolve("./", "assets", "images", "favicon.ico")),
                    DEV_DARWIN: i.default.normalize(i.default.resolve(e, "../../../", "assets", "images", "favicon.icns")),
                    DEV_LINUX: i.default.normalize(i.default.resolve(e, "../../../", "assets", "images", "favicon.png")),
                    DEV_WIN32: i.default.normalize(i.default.resolve(e, "../../../", "assets", "images", "favicon.ico"))
                },
                POSTFIX_TITLE: "- For Develop",
                SIM_WINDOW: {
                    APP_TITLE: "Simulator"
                },
                VDL_WINDOW: {
                    APP_TITLE: "Virtual Device Launcher"
                },
                VD_WINDOW: {
                    APP_TITLE: "Virtual Device"
                }
            },
            o = a;
        t.default = o;
        ! function() {
            "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(a, "WindowManagerConstants", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/WindowManagerConstants.js"), __REACT_HOT_LOADER__.register(o, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/window-manager/WindowManagerConstants.js"))
        }()
    }).call(t, "/")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(8),
        C = r(E),
        T = n(2),
        I = r(T),
        A = n(7),
        g = r(A),
        R = n(3),
        v = r(R),
        O = n(10),
        S = r(O),
        N = n(21),
        D = r(N),
        L = n(23),
        p = r(L),
        M = {
            ON: "on",
            OFF: "off"
        },
        h = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "subscribeDeviceResource",
                value: function() {
                    function e(e, n, r, i) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n, r, i) {
                        var o;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = "/oic/route/" + i + r, v.default.log("[Main] SimulatorController.subscribeDeviceResource() is called."), v.default.log("[Main] SimulatorController.subscribeDeviceResource(): resourceType = " + o), e.abrupt("return", n.subscribeDeviceResource(o, function(e) {
                                        v.default.log("[Main] SimulatorController.subscribeDevicePresence(): [IOTCloudClient][SUBSCRIBE_DEVICE_RESOURCE] " + g.default.stringify({
                                            deviceID: i,
                                            resourceType: o,
                                            resourceTypeData: e
                                        })), t.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_DEVICE_RESOURCE_CHANGE, {
                                            link: r,
                                            value: e,
                                            id: i
                                        })
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "subscribeDevicePresence",
                value: function() {
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n, r) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.subscribeDevicePresence() is called."), v.default.log("[Main] SimulatorController.subscribeDevicePresence(): deviceID = " + r), e.abrupt("return", t.subscribeDevicePresence(r, function(e) {
                                        v.default.log("[Main] SimulatorController.subscribeDevicePresence(): [IOTCloudClient][SUBSCRIBE_DEVICE_PRESENCE] " + g.default.stringify({
                                            deviceID: r,
                                            state: e
                                        })), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_DEVICE_STATE_CHANGE, {
                                            state: e,
                                            deviceID: r
                                        })
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getAllResourceTypesForDevice",
                value: function(e) {
                    v.default.log("[Main] SimulatorController.getAllResourceTypesForDevice() is called");
                    var t = [];
                    return f.default.forEach(e.resources, function(n) {
                        var r = f.default.replace(n.href, "" + I.default.PREFIX_RESOURCE_LINK_FOR_HREF + e.id, "");
                        g.default.isExcludedResourceType(r) || f.default.forEach(n.rt, function(e) {
                            g.default.isExcludedOCFResourceType(e) || t.push(r)
                        })
                    }), f.default.uniq(t)
                }
            }, {
                key: "validateResourceTypes",
                value: function(t, n) {
                    v.default.log("[Main] SimulatorController.validateResourceTypes() is called");
                    var r = e.getAllResourceTypesForDevice(t);
                    return f.default.map(n, function(e) {
                        return f.default.includes(r, e) ? e : null
                    })
                }
            }, {
                key: "subscribeAllDeviceResources",
                value: function() {
                    function t(e, t, r) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r, i) {
                        var o, l, s, u;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.subscribeAllDeviceResources() is called."), v.default.log("[Main] SimulatorController.subscribeAllDeviceResources(): Reads the JSON for the UIManifest file."), o = D.default.getUIManifest(), v.default.log("[Main] SimulatorController.subscribeAllDeviceResources(): Gets the list for the resource types used on the UIManifest file."), l = D.default.extractResourceTypesFromManifest(o), v.default.log("[Main] SimulatorController.subscribeAllDeviceResources(): usedResourceTypes = " + g.default.stringify(l)), v.default.log("[Main] SimulatorController.subscribeAllDeviceResources(): Validate the resource types."), s = e.validateResourceTypes(i, l), v.default.log("[Main] SimulatorController.subscribeAllDeviceResources(): validResourceTypes = " + g.default.stringify(s)), u = [], f.default.forEach(s, function(t) {
                                        u.push(e.subscribeDeviceResource(n, r, t, i.id))
                                    }), t.abrupt("return", Promise.all(u));
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "subscribeAllDevices",
                value: function() {
                    function t(e, t, r) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r, i) {
                        var o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.subscribeAllDevices() is called."), o = [], f.default.forEach(i, function(t) {
                                        o.push(e.subscribeDevicePresence(r, n, t.id))
                                    }), t.abrupt("return", Promise.all(o));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getDeviceList",
                value: function() {
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n, r) {
                        var i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.getDeviceList() is called."), e.next = 3, t.getDeviceList();
                                case 3:

                                    return i = e.sent, e.abrupt("return", f.default.compact(f.default.map(i, function(e) {
                                        return e.platform.mnmn === r && e.platform.vid === n ? e : null
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getDeviceInfoList",
                value: function(e, t, n) {
                    v.default.log("[Main] SimulatorController.getDeviceInfoList() is called.");
                    var r = [];
                    return f.default.forEach(n, function(e) {
                        r.push(t.getDeviceInfo(e.id))
                    }), Promise.all(r)
                }
            }, {
                key: "postActionDeviceStateOff",
                value: function(e, t) {
                    v.default.log("[Main] SimulatorController.postActionDeviceStateOff() is called. device = " + t.id)
                }
            }, {
                key: "postActionDeviceStateOn",
                value: function() {
                    function t(e, t) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r) {
                        var i, o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.postActionDeviceStateOn() is called. device = " + r.id), t.prev = 1, i = S.default.getMainWindow().iotCloudConnector, t.next = 5, i.getDeviceInfo(r.id);
                                case 5:
                                    return o = t.sent, v.default.log("[Main] SimulatorController.postActionDeviceStateOn(): deviceInfo = " + g.default.stringify(o)), t.next = 9, e.subscribeAllDeviceResources(n, i, o);
                                case 9:
                                    t.next = 15;
                                    break;
                                case 11:
                                    t.prev = 11, t.t0 = t.catch(1), v.default.error("[Main] SimulatorController.postActionDeviceStateOn() is rejected with an error message = " + t.t0.message + "."), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_POSTACTION_CHANGED_DEVICE_STATE_ERROR, {
                                        error: t.t0,
                                        deviceID: r.id
                                    });
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [1, 11]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "postActionForChangedDeviceStateListener",
                value: function(t, n) {
                    v.default.log("[Main] SimulatorController.postActionForChangedDeviceStateListener() is called. state = " + n.state), n.target === I.default.TARGET_SIMULATOR && (n.state === M.ON ? e.postActionDeviceStateOn(t, n) : n.state === M.OFF && e.postActionDeviceStateOff(t, n))
                }
            }, {
                key: "getInitialDataListener",
                value: function() {
                    function t(e, t) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r) {
                        var i, o, s, u, d, c = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (v.default.log("[Main] SimulatorController.getInitialDataListener() is called. targetName = " + r), r !== I.default.TARGET_SIMULATOR) {
                                        t.next = 40;
                                        break
                                    }
                                    if (t.prev = 2, v.default.log("[Main] SimulatorController.getInitialDataListener(): Gets the JSON for the UIManifest file."), i = D.default.getUIManifest()) {
                                        t.next = 7;
                                        break
                                    }
                                    throw new Error(I.default.MESSAGES.ERR_MSG_NO_UI_MANIFEST);
                                case 7:
                                    return o = S.default.getMainWindow(), s = o.iotCloudConnector, v.default.log("[Main] SimulatorController.getInitialDataListener(): Disconnect to the IOTCloud client."), s.disconnect(), v.default.log("[Main] SimulatorController.getInitialDataListener(): Add the handler for closed connection."), s.addConnectionCloseHandler(function() {
                                        if (o) {
                                            v.default.error("[Main][IOTCloudClient][ERROR] The IOTCloudClient for simulator connection closed.");
                                            o.getWebContents().send(I.default.IPC_CHANNELS.TO_RENDERER.ALL_CONNECTION_CLOSED)
                                        }
                                    }), v.default.log("[Main] SimulatorController.getInitialDataListener(): Add the handler for subscribing service event."), s.addSubscribeServiceEventHandler(function() {
                                        var e = (0, l.default)(a.default.mark(function e(t) {
                                            var n, r;
                                            return a.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!o || f.default.isEmpty(t.gid) || f.default.isEmpty(t.gidlist)) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        return v.default.log("[Main][IOTCloudClient][SUBSCRIBE_SERVICE_EVENT][UPDATE_GROUP] For simulator, payload = " + g.default.stringify(t) + "."), e.next = 4, s.getDeviceList();
                                                    case 4:
                                                        n = e.sent, v.default.log("[Main][IOTCloudClient][SUBSCRIBE_SERVICE_EVENT][UPDATE_GROUP] For simulator, deviceList = " + g.default.stringify(n) + "."), r = o.getWebContents(), r.send(I.default.IPC_CHANNELS.TO_RENDERER.ALL_UPDATE_DEVICE_LIST, n);
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, c)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), v.default.log("[Main] SimulatorController.getInitialDataListener(): Connect to the IOTCloud client."), t.next = 18, s.connect();
                                case 18:
                                    return v.default.log("[Main] SimulatorController.getInitialDataListener(): Gets the device list specified with the vid and mnmn."), t.next = 21, e.getDeviceList(s, i.vid, i.mnmn);
                                case 21:
                  // INJECT PAYLOAD HERE
                                    return u = t.sent, v.default.log("[Main] SimulatorController.getInitialDataListener(): deviceList = " + g.default.stringify(u)),v.default.log("TANGG: deviceList = " + g.default.stringify(u)), d = [], f.default.forEach(u, function(e) {
                                        var t = new p.default(e);
                                        d.push(t)
                                    }), v.default.log("[Main] SimulatorController.getInitialDataListener(): deviceInfoList = " + g.default.stringify(d)), v.default.log("[Main] SimulatorController.getInitialDataListener(): Subscribes the service event."), t.next = 29, s.subscribeServiceEvent();
                                case 29:
                                    return v.default.log("[Main] SimulatorController.getInitialDataListener(): Subscribes the device presence."), t.next = 32, e.subscribeAllDevices(n, s, u, i);
                                case 32:
                                    v.default.log("[Main] SimulatorController.getInitialDataListener() is resolved."), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_GET_INITIAL_DATA_SUCCESS, {
                                        uiJSON: i,
                                        devices: d
                                    }), t.next = 40;
                                    break;
                                case 36:
                                    t.prev = 36, t.t0 = t.catch(2), v.default.error("[Main] SimulatorController.getInitialDataListener() is rejected with error message = " + t.t0.message + "."), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_GET_INITIAL_DATA_ERROR, t.t0);
                                case 40:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [2, 36]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "sendData",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return v.default.log("[Main] SimulatorController.sendData() is called. params = " + g.default.stringify(n)), e.abrupt("return", t.sendData(n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "sendDataListener",
                value: function() {
                    function t(e, t) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r) {
                        var i, o, l;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (v.default.log("[Main] SimulatorController.sendDataListener() is called."), r.target !== I.default.TARGET_SIMULATOR) {
                                        t.next = 19;
                                        break
                                    }
                                    if (t.prev = 2, r.deviceID && r.resourceType && r.resourceTypeData) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error(I.default.MESSAGES.ERR_MSG_REQUIRED_FIELDS_FOR_SEND_DATA);
                                case 5:
                                    return i = S.default.getMainWindow(), o = i.iotCloudConnector, v.default.log("[Main] SimulatorController.sendDataListener(): Sends a data. data = " + g.default.stringify(r)), t.next = 10, e.sendData(o, r);
                                case 10:
                                    l = t.sent, n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_SEND_DATA_SUCCESS, {
                                        deviceID: r.deviceID,
                                        resourceType: r.resourceType,
                                        resourceTypeData: l
                                    }), v.default.log("[Main] SimulatorController.sendDataListener() is resolved."), t.next = 19;
                                    break;
                                case 15:
                                    t.prev = 15, t.t0 = t.catch(2), v.default.error("[Main] SimulatorController.sendDataListener() is rejected with error message = " + t.t0.message + "."), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_SEND_DATA_ERROR, {
                                        error: t.t0,
                                        deviceID: r.deviceID,
                                        resourceType: r.resourceType
                                    });
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [2, 15]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "getIsReadyToLaunchListener",
                value: function(e, t) {
                    t === I.default.TARGET_SIMULATOR && e.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.SIM_SET_IS_READY_TO_LAUNCH, C.default.IS_WINDOW_READY)
                }
            }]), e
        }(),
        m = h;
    t.default = m;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(M, "DEVICE_STATE", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/SimulatorController.js"), __REACT_HOT_LOADER__.register(h, "SimulatorController", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/SimulatorController.js"), __REACT_HOT_LOADER__.register(m, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/SimulatorController.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(4),
        f = r(_),
        E = n(8),
        C = r(E),
        T = n(2),
        I = r(T),
        A = n(9),
        g = r(A),
        R = n(7),
        v = r(R),
        O = n(23),
        S = r(O),
        N = n(3),
        D = r(N),
        L = n(10),
        p = r(L),
        M = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "closeVirtualDeviceWindowListListener",
                value: function(e, t) {
                    D.default.log("[Main] VirtualDeviceLauncherController.closeVirtualDeviceWindowListListener() is called."), D.default.log("[Main] VirtualDeviceLauncherController.closeVirtualDeviceWindowListListener(): arrDevices = " + v.default.stringify(t) + "."), f.default.forEach(t, function(e) {
                        var t = p.default.getWindow(e.id);
                        t && t.close()
                    })
                }
            }, {
                key: "addEventListenerForWebContents",
                value: function(e) {
                    D.default.log("[Main] VirtualDeviceLauncherController.addEventListenerForWebContents() is called.");
                    var t = p.default.getMainWindow().getWebContents(),
                        n = e.getWebContents();
                    n.on("dom-ready", function() {
                        n.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_LAUNCH_VIRTUAL_DEVICE_SUCCESS, e.deviceInfo), t.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_LAUNCH_VIRTUAL_DEVICE_SUCCESS, e.deviceInfo)
                    })
                }
            }, {
                key: "getDeviceInfo",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t) {
                        var n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return D.default.log("[Main] VirtualDeviceLauncherController.getDeviceInfo() is called."), D.default.log("[Main] VirtualDeviceLauncherController.getDeviceInfo(): deviceID = " + t), n = p.default.getMainWindow().iotCloudConnector, e.abrupt("return", n.getDeviceInfo(t));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "launchVirtualDeviceListener",
                value: function() {
                    function t(e, t) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r) {
                        var i, o, l;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener() is called."), D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener(): deviceID = " + r.id), i = null, t.prev = 3, !(f.default.isEmpty(r) || f.default.isEmpty(r.id) || f.default.isEmpty(r.name))) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new Error(I.default.MESSAGES.ERR_MSG_REQUIRED_DEVICE_ID_AND_NAME);
                                case 6:
                                    if (!p.default.hasWindow(r.id)) {
                                        t.next = 10;
                                        break
                                    }
                                    return D.default.warn("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener(): The virtual device window was already opened. deviceID = " + r.id), p.default.focus(r.id), t.abrupt("return");
                                case 10:
                                    return t.next = 12, e.getDeviceInfo(r.id);
                                case 12:
                                    return o = t.sent, l = new S.default(o), t.next = 16, l.setAllResourcesTypeData();
                                case 16:
                                    D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener(): Creates a window."), i = p.default.createWindow(l), D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener(): Sets a connector for window."), i.setConnector(), D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener(): Shows the window."), e.addEventListenerForWebContents(i), D.default.log("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener() is resolved."), t.next = 30;
                                    break;
                                case 25:
                                    t.prev = 25, t.t0 = t.catch(3), D.default.error("[Main] VirtualDeviceLauncherController.launchVirtualDeviceListener() is rejected with " + t.t0.message + "."), i && i.close(), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_LAUNCH_VIRTUAL_DEVICE_ERROR, {
                                        error: t.t0,
                                        id: r.id
                                    });
                                case 30:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [3, 25]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "deleteVirtualDeviceListener",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n) {
                        var r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (D.default.log("[Main] VirtualDeviceLauncherController.deleteVirtualDeviceListener() is called."), D.default.log("[Main] VirtualDeviceLauncherController.deleteVirtualDeviceListener(): deviceID = " + n), e.prev = 2, !f.default.isEmpty(n)) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error(I.default.MESSAGES.ERR_MSG_REQUIRED_DEVICE_ID);
                                case 5:
                                    if (!(r = p.default.getMainWindow()) || !r.iotCloudConnector) {
                                        e.next = 14;
                                        break
                                    }
                                    return D.default.log("[Main] VirtualDeviceLauncherController.deleteVirtualDeviceListener(): Deletes the virtual device with the " + n + "."), e.next = 10, r.iotCloudConnector.deleteVirtualDevice(n);
                                case 10:
                                    t.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_DELETE_VIRTUAL_DEVICE_SUCCESS, n), D.default.log("[Main] VirtualDeviceLauncherController.deleteVirtualDeviceListener() is resolved."), e.next = 15;
                                    break;
                                case 14:
                                    throw new Error(I.default.MESSAGES.ERR_MSG_NOT_CONNECTED);
                                case 15:
                                    e.next = 21;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(2), D.default.error("[Main] VirtualDeviceLauncherController.deleteVirtualDeviceListener() is rejected with " + e.t0.message + "."), t.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_DELETE_VIRTUAL_DEVICE_ERROR, e.t0);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [2, 17]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "subscribeDevicePresence",
                value: function() {
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n, r) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return D.default.log("[Main] VirtualDeviceLauncherController.subscribeDevicePresence() is called."), D.default.log("[Main] VirtualDeviceLauncherController.subscribeDevicePresence(): deviceID = " + r), e.abrupt("return", n.subscribeDevicePresence(r, function(e) {
                                        D.default.log("[Main] VirtualDeviceLauncherController.subscribeDevicePresence(): [IOTCloudClient][SUBSCRIBE_DEVICE_PRESENCE] " + v.default.stringify({
                                            deviceID: r,
                                            state: e
                                        })), t.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_DEVICE_STATE_CHANGE, {
                                            state: e,
                                            deviceID: r
                                        })
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "subscribes",
                value: function() {
                    function t(e, t, r) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r, i) {
                        var o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return D.default.log("[Main] VirtualDeviceLauncherController.subscribes() is called."), o = [], f.default.forEach(i, function(t) {
                                        o.push(e.subscribeDevicePresence(n, r, t.id))
                                    }), t.abrupt("return", Promise.all(o));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getDeviceListListener",
                value: function() {
                    function t(e, t) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, l.default)(a.default.mark(function t(n, r) {
                        var i, o, s, u, d, c, _ = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener() is called."), t.prev = 1, r !== I.default.TARGET_VIRTUAL_DEVICE_LAUNCHER) {
                                        t.next = 30;
                                        break
                                    }
                                    return i = p.default.getMainWindow(), o = i.iotCloudConnector, D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Disconnects the IOTCloudClient."), o.disconnect(), o.addConnectionCloseHandler(function() {
                                        if (i) {
                                            D.default.error("[Main][IOTCloudClient][ERROR] The IOTCloudClient for virtual device launcher connection closed.");
                                            i.getWebContents().send(I.default.IPC_CHANNELS.TO_RENDERER.ALL_CONNECTION_CLOSED)
                                        }
                                    }), D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Add the handler for subscribing service event."), o.addSubscribeServiceEventHandler(function() {
                                        var e = (0, l.default)(a.default.mark(function e(t) {
                                            var n, r;
                                            return a.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!i || f.default.isEmpty(t.gid) || f.default.isEmpty(t.gidlist)) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        return D.default.log("[Main][IOTCloudClient][SUBSCRIBE_SERVICE_EVENT][UPDATE_GROUP] For virtual device launcher, payload = " + v.default.stringify(t) + "."), e.next = 4, o.getDeviceList();
                                                    case 4:
                                                        n = e.sent, D.default.log("[Main][IOTCloudClient][SUBSCRIBE_SERVICE_EVENT][UPDATE_GROUP] For virtual device launcher, deviceList = " + v.default.stringify(n) + "."), r = i.getWebContents(), r.send(I.default.IPC_CHANNELS.TO_RENDERER.ALL_UPDATE_DEVICE_LIST, n);
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, _)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Connects the IOTCloudClient."), t.next = 13, o.connect();
                                case 13:
                                    return D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Gets the MNID."), s = g.default.getConfig(), u = s.mnid, D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): The MNID is " + u + "."), D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Gets the list of devices."), d = [], t.next = 20, o.getDeviceList();
                                case 20:
                                    return c = t.sent, f.default.forEach(c, function(e) {
                                        if (e.platform.mnmn === u && !f.default.includes(e.device.rt, "x.com.st.d.mobile.presence")) {
                                            var t = new S.default(e);
                                            d.push(t)
                                        }
                                    }), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_GET_DEVICE_LIST_SUCCESS, d), D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener(): Subscribes the service event."), t.next = 26, o.subscribeServiceEvent();
                                case 26:
                                    return D.default.log("[Main] VirtualDeviceLauncherController.getInitialDataListener(): Subscribes the device presence."), t.next = 29, e.subscribes(n, o, d);
                                case 29:
                                    D.default.log("[Main] VirtualDeviceLauncherController.getDeviceListListener() is resolved with deviceInfoList = " + v.default.stringify(d) + ".");
                                case 30:
                                    t.next = 36;
                                    break;
                                case 32:
                                    t.prev = 32, t.t0 = t.catch(1), D.default.error("[Main] VirtualDeviceLauncherController.getDeviceListListener() is rejected with an error = " + t.t0.message + "."), n.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_GET_DEVICE_LIST_ERROR, t.t0);
                                case 36:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [1, 32]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "getIsReadyToLaunchListener",
                value: function(e, t) {
                    t === I.default.TARGET_VIRTUAL_DEVICE_LAUNCHER && e.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_SET_IS_READY_TO_LAUNCH, C.default.IS_WINDOW_READY)
                }
            }, {
                key: "getOpenedVDWindowCountListener",
                value: function(e, t) {
                    t === I.default.TARGET_VIRTUAL_DEVICE_LAUNCHER && e.sender.send(I.default.IPC_CHANNELS.TO_RENDERER.VDL_SET_OPENED_VD_WINDOWS_COUNT, p.default.getAllWindowsCnt())
                }
            }]), e
        }(),
        h = M;
    t.default = h;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register("x.com.st.d.mobile.presence", "RESOURCE_TYPE_SMARTTHINGS_CLIENT_APP", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/VirtualDeviceLauncherController.js"), __REACT_HOT_LOADER__.register(M, "VirtualDeviceLauncherController", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/VirtualDeviceLauncherController.js"), __REACT_HOT_LOADER__.register(h, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/VirtualDeviceLauncherController.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        a = r(i),
        o = n(6),
        l = r(o),
        s = n(0),
        u = r(s),
        d = n(1),
        c = r(d),
        _ = n(11),
        f = n(4),
        E = r(f),
        C = n(15),
        T = r(C),
        I = n(36),
        A = r(I),
        g = n(3),
        R = r(g),
        v = n(2),
        O = r(v),
        S = n(14),
        N = r(S),
        D = n(7),
        L = r(D),
        p = n(24),
        M = r(p),
        h = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "responder",
                value: function(e) {
                    return function(t, n, r, i) {
                        e.sender.send(t, {
                            result: n,
                            args: r,
                            payload: i
                        })
                    }
                }
            }, {
                key: "getOCFDevices",
                value: function(t, n) {
                    A.default.getOCFDevices(function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("TONNY");
                        R.default.log("[Main] PluginController.getOCFDevices() is called."), R.default.log("[Main] PluginController.getOCFDevices(): result = " + i + "."), R.default.log("[Main] PluginController.getOCFDevices(): devices = " + L.default.stringify(r) + "."), e.responder(t)(T.default.IPC_CHANNELS.MANAGER_API.GET_OCF_DEVICES, i, n, r)
                    })
                }
            }, {
                key: "startMonitoringConnectionState",
                value: function(t, n) {
                    A.default.startMonitoringConnectionState(n.id, function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.startMonitoringConnectionState() is called."), R.default.log("[Main] PluginController.startMonitoringConnectionState(): result = " + i + "."), R.default.log("[Main] PluginController.startMonitoringConnectionState(): deviceID = " + n.id + "."), R.default.log("[Main] PluginController.startMonitoringConnectionState(): state = " + r + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.START_MONITORING_CONNECTION_STATE, i, n, r)
                    })
                }
            }, {
                key: "stopMonitoringConnectionState",
                value: function(t, n) {
                    A.default.stopMonitoringConnectionState(n.id, function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.stopMonitoringConnectionState() is called."), R.default.log("[Main] PluginController.stopMonitoringConnectionState(): result = " + r + "."), R.default.log("[Main] PluginController.stopMonitoringConnectionState(): deviceID = " + n.id + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.STOP_MONITORING_CONNECTION_STATE, r, n)
                    })
                }
            }, {
                key: "getRemoteRepresentation",
                value: function(t, n) {
                    A.default.getRemoteRepresentation(n.id, n.uri, function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.getRemoteRepresentation() is called."), R.default.log("[Main] PluginController.getRemoteRepresentation(): result = " + i + "."), R.default.log("[Main] PluginController.getRemoteRepresentation(): resourceType = " + n.id + n.uri + "."), R.default.log("[Main] PluginController.getRemoteRepresentation(): resourceTypeData = " + L.default.stringify(r) + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.GET_REMOTE_REPRESENTATION, i, n, r)
                    })
                }
            }, {
                key: "setRemoteRepresentation",
                value: function(t, n) {
                    A.default.setRemoteRepresentation(n.id, n.uri, n.rcsRepJson, function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_RESOURCE_CHANGED;
                        R.default.log("[Main] PluginController.setRemoteRepresentation() is called."), R.default.log("[Main] PluginController.setRemoteRepresentation(): result = " + i + "."), R.default.log("[Main] PluginController.setRemoteRepresentation(): resourceType = " + n.id + n.uri + "."), R.default.log("[Main] PluginController.setRemoteRepresentation(): resourceTypeData = " + L.default.stringify(r) + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.SET_REMOTE_REPRESENTATION, i, n, r)
                    })
                }
            }, {
                key: "subscribe",
                value: function(t, n) {
                    A.default.subscribe(n.id, n.uris, function(r, i) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.default.RESULT.OCF_RESOURCE_CHANGED;
                        R.default.log("[Main] PluginController.subscribe() is called."), R.default.log("[Main] PluginController.subscribe(): result = " + a + "."), R.default.log("[Main] PluginController.subscribe(): resourceType = " + n.id + i + "."), R.default.log("[Main] PluginController.subscribe(): resourceTypeData = " + L.default.stringify(r) + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.SUBSCRIBE, a, E.default.assign(n, {
                            uri: i
                        }), r)
                    })
                }
            }, {
                key: "unsubscribe",
                value: function(t, n) {
                    A.default.unsubscribe(n.id, function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.unsubscribe() is called."), R.default.log("[Main] PluginController.unsubscribe(): result = " + i + "."), R.default.log("[Main] PluginController.unsubscribe(): resourceType = " + n.id + r + "."), e.responder(t)(T.default.IPC_CHANNELS.OCF_DEVICE_API.UNSUBSCRIBE, i, E.default.assign(n, {
                            uri: r
                        }))
                    })
                }
            }, {
                key: "setCloudConnectionStateListener",
                value: function(t, n) {
                    A.default.setCloudConnectionStateListener(function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.setCloudConnectionStateListener() is called."), R.default.log("[Main] PluginController.setCloudConnectionStateListener(): result = " + i + "."), R.default.log("[Main] PluginController.setCloudConnectionStateListener(): state = " + r + "."), e.responder(t)(T.default.IPC_CHANNELS.MANAGER_API.SET_CLOUD_CONNECTION_STATE_LISTENER, i, n, r)
                    })
                }
            }, {
                key: "setChangeApplicationStateListener",
                value: function(t, n) {
                    A.default.setChangeApplicationStateListener(function(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.default.RESULT.OCF_OK;
                        R.default.log("[Main] PluginController.setChangeApplicationStateListener() is called."), R.default.log("[Main] PluginController.setChangeApplicationStateListener(): result = " + i + "."), R.default.log("[Main] PluginController.setChangeApplicationStateListener(): state = " + r + "."), e.responder(t)(T.default.IPC_CHANNELS.MANAGER_API.SET_CHANGE_APPLICATION_STATE_LISTENER, i, n, r)
                    })
                }
            }, {
                key: "initPlugin",
                value: function() {
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, l.default)(a.default.mark(function e(t, n, r) {
                        var i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return R.default.log("[Main] PluginController.initPlugin() is called."), e.prev = 1, i = M.default.getPluginPath(r), e.next = 5, N.default.ready(O.default.PATHS.PLUGIN);
                                case 5:
                                    return e.next = 7, A.default.init(n);
                                case 7:
                                    t.sender.send(O.default.IPC_CHANNELS.TO_RENDERER.SIM_PLUGIN_INIT_SUCCESS, {
                                        deviceID: n,
                                        pluginPath: i
                                    }), R.default.log("[Main] PluginController.initPlugin() is resolved."), e.next = 15;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(1), R.default.error("[Main] PluginController.initPlugin() is rejected with " + e.t0.message + "."), t.sender.send(O.default.IPC_CHANNELS.TO_RENDERER.SIM_PLUGIN_INIT_ERROR, e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [1, 11]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "dismissPlugin",
                value: function() {
                    R.default.log("[Main] PluginController.dismissPlugin() is called."), A.default.dismiss()
                }
            }, {
                key: "close",
                value: function() {
                    R.default.log("[Main] PluginController.close() is called."), A.default.close()
                }
            }, {
                key: "preparePluginIPC",
                value: function() {
                    _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.SET_CLOUD_CONNECTION_STATE_LISTENER, e.setCloudConnectionStateListener), _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.CALL_CLOUD_CONNECTION_STATE_LISTENER, A.default.callCloudConnectionStateListener), _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.SET_CHANGE_APPLICATION_STATE_LISTENER, e.setChangeApplicationStateListener), _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.CALL_CHANGE_APPLICATION_STATE_LISTENER, A.default.callChangeApplicationStateListener), _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.GET_OCF_DEVICES, e.getOCFDevices), _.ipcMain.on(T.default.IPC_CHANNELS.MANAGER_API.CLOSE, e.close), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.SUBSCRIBE, e.subscribe), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.UNSUBSCRIBE, e.unsubscribe), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.GET_REMOTE_REPRESENTATION, e.getRemoteRepresentation), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.SET_REMOTE_REPRESENTATION, e.setRemoteRepresentation), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.START_MONITORING_CONNECTION_STATE, e.startMonitoringConnectionState), _.ipcMain.on(T.default.IPC_CHANNELS.OCF_DEVICE_API.STOP_MONITORING_CONNECTION_STATE, e.stopMonitoringConnectionState)
                }
            }]), e
        }(),
        m = h;
    t.default = m;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(h, "PluginController", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/PluginController.js"), __REACT_HOT_LOADER__.register(m, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/controllers/PluginController.js"))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return (0, C.default)(e.resources).map(function(t) {
            return t.href.split(e.id)[1]
        }).filter(function(e) {
            return !(e.indexOf("/oic/p") > -1 || e.indexOf("/oic/d") > -1)
        })
    }

    function a(e, t) {
        p.default.getMainWindow().getWebContents().send(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(5),
        l = r(o),
        s = n(6),
        u = r(s),
        d = n(0),
        c = r(d),
        _ = n(1),
        f = r(_),
        E = n(4),
        C = r(E),
        T = n(19),
        I = r(T),
        A = n(2),
        g = r(A),
        R = n(3),
        v = r(R),
        O = n(24),
        S = r(O),
        N = n(15),
        D = r(N),
        L = n(10),
        p = r(L),
        M = function() {
            function e() {
                (0, c.default)(this, e)
            }
            return (0, f.default)(e, null, [{
                key: "init",
                value: function() {
                    function t(e) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, u.default)(l.default.mark(function t(n) {
                        var r, i;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v.default.log("[PluginAPIHandler.init]: targetDeviceID = " + n), r = e.connector, r && r.disconnect(), r = new I.default(g.default.PATHS.PLUGIN), r.addConnectionCloseHandler(function() {
                                        v.default.error("[Main][IOTCloudClient][ERROR] The IOTCloudClient for plugin connection closed."), a(g.default.IPC_CHANNELS.TO_RENDERER.ALL_CONNECTION_CLOSED)
                                    }), t.next = 7, r.connect();
                                case 7:
                                    return t.next = 9, r.getDeviceInfo(n);
                                case 9:
                                    if (i = t.sent) {
                                        t.next = 12;
                                        break
                                    }
                                    throw new Error(g.default.MESSAGES.PLUGIN_TARGET_DEVICE_NOT_FOUND + " [" + n + "]");
                                case 12:
                                    if (i.resources && 0 !== i.resources.length) {
                                        t.next = 14;
                                        break
                                    }
                                    throw new Error(g.default.MESSAGES.PLUGIN_TARGET_DEVICE_NO_RESOURCES + " [" + n + "]");
                                case 14:
                                    e.connector = r, e.targetDevice = i;
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "dismiss",
                value: function() {
                    v.default.log("[PluginAPIHandler.dismiss]");
                    var t = e.connector;
                    t && t.disconnect(), e.clean()
                }
            }, {
                key: "clean",
                value: function() {
                    delete e.targetDevice, delete e.deviceListeners, delete e.resourceListeners, delete e.applicationListener, delete e.connectionListener
                }
            }, {
                key: "handleError",
                value: function(e, t, n) {
                    var r = S.default.getOCFResult(e);
                    r || (v.default.error(t + " " + e), r = {
                        message: e.toString()
                    }), n(r)
                }
            }, {
                key: "getOCFDevices",
                value: function() {
                    function t(e) {
                        return n.apply(this, arguments)
                    }
					var _device_names = "";
					var _device_types = "";
                    var n = (0, u.default)(l.default.mark(function t(n) {
                        var r, i, a, o, s;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = "[PluginAPIHandler.getOCFDevices]:", v.default.log("" + r), i = e.connector, a = e.targetDevice, t.prev = 4, !a.group || !a.group[0]) {
                                        t.next = 11;
										v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                        break
                                    }
                                    v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                    return t.next = 8, i.getGroup(a.group[0]);
                                case 8:
                                                                    v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                    t.t0 = t.sent, t.next = 12;
                                    break;
                                case 11:
                                                                    v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                    t.t0 = null;
                                case 12:
                                    o = t.t0, s = {}, s.deviceHandle = a.id, s.resourceURIs = (0, C.default)(a.resources).map(function(e) {
                                        return e.href.split(a.id)[1]
                                    }).filter(function(e) {
                                    v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                        return !(e.indexOf("/oic/p") > -1 || e.indexOf("/oic/d") > -1)
                                    }), s.deviceType = a.device.rt, s.deviceName = a.device.n, s.firmwareVersion = a.platform.mnfv, s.locationId = o ? o.id : null, s.locationName = o ? o.name : null, s.metaData = null, s.owner = "me", n([s]), t.next = 29;
                                    break;
                                case 26:
                                                                    v.default.log("WHAT THE HECK IS i:", i.getGroup(a.group[0]));
                                    t.prev = 26, t.t1 = t.catch(4), e.handleError(t.t1, r, function(e) {
                                        n.apply(null, [null, e])
                                    });
                                case 29:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [4, 26]
                        ])
                    }));
                    v.default.log("TONY TANG WAS HERE TO TAKE OVER THE WORLD!!!!!!!!!!");

                    // v.default.log("TONY TANG devices_types: ", _device_types);
                    // v.default.log("TONY TANG devices_names: ", _device_names);
                    return t
                }()
            }, {
                key: "startMonitoringConnectionState",
                value: function(t, n) {
                    var r = "[PluginAPIHandler.startMonitoringConnectionState]:";
                    v.default.log(r + " " + t);
                    var i = e.connector,
                        a = e.deviceListeners;
                    try {
                        a ? a.has(t) && (v.default.log(r + " unregistering " + t + " to register again"), i.unsubscribeDevicePresence(t, a.get(t)), a.delete(t)) : (a = new Map, e.deviceListeners = a), i.subscribeDevicePresence(t, n), a.set(t, n)
                    } catch (t) {
                        e.handleError(t, r, function(e) {
                            n.apply(null, [null, e])
                        })
                    }
                }
            }, {
                key: "stopMonitoringConnectionState",
                value: function(t, n) {
                    var r = "[PluginAPIHandler.stopMonitoringConnectionState]:";
                    v.default.log(r + " " + t);
                    var i = e.connector,
                        a = e.deviceListeners;
                    try {
                        a && a.has(t) && (i.unsubscribeDevicePresence(t, a.get(t)), a.delete(t)), n()
                    } catch (t) {
                        e.handleError(t, r, function(e) {
                            n.apply(null, [e])
                        })
                    }
                }
            }, {
                key: "getRemoteRepresentation",
                value: function() {
                    function t(e, t, r) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, u.default)(l.default.mark(function t(n, r, i) {
                        var a, o, s;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return a = "[PluginAPIHandler.getRemoteRepresentation]:", v.default.log(a + " " + n + " - " + r), o = e.connector, t.prev = 3, t.next = 6, o.getDeviceResource(n, r);
                                case 6:
                                    s = t.sent, i(s), t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t.catch(3), e.handleError(t.t0, a, function(e) {
                                        i.apply(null, [null, e])
                                    });
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [3, 10]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "setRemoteRepresentation",
                value: function() {
                    function t(e, t, r, i) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, u.default)(l.default.mark(function t(n, r, i, a) {
                        var o, s, u, d;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = "[PluginAPIHandler.setRemoteRepresentation]:", v.default.log(o + " " + n + " - " + r), s = e.connector, t.prev = 3, u = {
                                        deviceID: n,
                                        resourceType: r,
                                        resourceTypeData: i
                                    }, t.next = 7, s.sendData(u);
                                case 7:
                                    d = t.sent, a(d), t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11, t.t0 = t.catch(3), e.handleError(t.t0, o, function(e) {
                                        a.apply(null, [null, e])
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [3, 11]
                        ])
                    }));
                    return t
                }()
            }, {
                key: "subscribe",
                value: function() {
                    function t(e, t, r) {
                        return n.apply(this, arguments)
                    }
                    var n = (0, u.default)(l.default.mark(function t(n, r, a) {
                        var o, s, u, d, c, _, f, E;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = "[PluginAPIHandler.subscribe]:", v.default.log(o + " " + n + " - " + JSON.stringify(r)), s = e.connector, u = e.targetDevice, d = e.resourceListeners, t.next = 7, s.isDeviceConnected(n);
                                case 7:
                                    if (t.sent) {
                                        t.next = 12;
                                        break
                                    }
                                    return c = new Error, c.code = D.default.RESULT_CLI.DEVICE_TURNED_OFF, e.handleError(c, o, function(e) {
                                        a.apply(null, [null, null, e])
                                    }), t.abrupt("return");
                                case 12:
                                    d || (d = new Map, e.resourceListeners = d), _ = null, f = i(u), E = !1, r && 0 !== r.length ? (_ = r, E = !0) : _ = f, _.forEach(function(t) {
                                        function r(e) {
                                            a(e, t)
                                        }
                                        try {
                                            if (E && -1 === f.indexOf(t)) {
                                                var i = new Error;
                                                throw i.code = D.default.RESULT_CLI.CANNOT_FIND_RESOURCE, i
                                            }
                                            var l = "/oic/route/" + n + t;
                                            d.has(l) && (s.unsubscribeDeviceResource(l, d.get(l)), d.delete(l)), s.subscribeDeviceResource(l, r), d.set(l, r)
                                        } catch (n) {
                                            e.handleError(n, o, function(e) {
                                                a.apply(null, [null, t, e])
                                            })
                                        }
                                    });
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "unsubscribe",
                value: function(t, n) {
                    var r = "[PluginAPIHandler.unsubscribe]:";
                    v.default.log(r + " " + t);
                    var a = e.connector,
                        o = e.targetDevice,
                        l = e.resourceListeners;
                    i(o).forEach(function(i) {
                        try {
                            var o = "/oic/route/" + t + i;
                            l.has(o) && (a.unsubscribeDeviceResource(o, l.get(o)), l.delete(o), n(i))
                        } catch (t) {
                            e.handleError(t, r, function(e) {
                                n.apply(null, [i, e])
                            })
                        }
                    })
                }
            }, {
                key: "close",
                value: function() {
                    v.default.log("[PluginAPIHandler.close]"), a(g.default.IPC_CHANNELS.TO_RENDERER.SIM_CLOSE_PLUGIN)
                }
            }, {
                key: "setCloudConnectionStateListener",
                value: function(t) {
                    v.default.log("[PluginAPIHandler.setCloudConnectionStateListener]"), e.connectionListener = t, t(D.default.STATE.CONN.CONNECTED)
                }
            }, {
                key: "callCloudConnectionStateListener",
                value: function(t, n) {
                    v.default.log("[PluginAPIHandler.callCloudConnectionStateListener]: connection state = " + n);
                    var r = e.connectionListener;
                    r && r(n)
                }
            }, {
                key: "setChangeApplicationStateListener",
                value: function(t) {
                    v.default.log("[PluginAPIHandler.setChangeApplicationStateListener]"), e.applicationListener = t, t(D.default.STATE.APP.ACTIVE)
                }
            }, {
                key: "callChangeApplicationStateListener",
                value: function(t, n) {
                    v.default.log("[PluginAPIHandler.callChangeApplicationStateListener]: application state = " + n);
                    var r = e.applicationListener;
                    r && r(n)
                }
            }]), e
        }(),
        h = M;
    t.default = h;
    ! function() {
        "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "getResourceURIs", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginAPIHandler.js"), __REACT_HOT_LOADER__.register(a, "ipcToMainWindow", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginAPIHandler.js"), __REACT_HOT_LOADER__.register(M, "PluginAPIHandler", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginAPIHandler.js"), __REACT_HOT_LOADER__.register(h, "default", "C:/jenkins_slave/workspace/SINGLE_ATOM_PACKAGE_WIN64/beta-075/sdk_devConsole_sim/src/common/utils/plugin/PluginAPIHandler.js"))
    }()
}, function(e, t) {
    e.exports = require("babel-runtime/helpers/possibleConstructorReturn")
}, function(e, t) {
    e.exports = require("babel-runtime/helpers/inherits")
}, function(e, t) {
    e.exports = require("events")
}]);