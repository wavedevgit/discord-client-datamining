// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var6 = var3.Object;
    var5 = var6.freeze;
    var4 = {
        'GRANTED': 'granted',
        'DENIED': 'denied',
        'NEVER_ASK_AGAIN': 'never_ask_again'
    };
    var4 = var5.bind(var6)(var4);
    var _closure1_slot5 = var4;
    var5 = var3.Object;
    var4 = var5.freeze;
    var3 = {
        'READ_CALENDAR': 'android.permission.READ_CALENDAR',
        'WRITE_CALENDAR': 'android.permission.WRITE_CALENDAR',
        'CAMERA': 'android.permission.CAMERA',
        'READ_CONTACTS': 'android.permission.READ_CONTACTS',
        'WRITE_CONTACTS': 'android.permission.WRITE_CONTACTS',
        'GET_ACCOUNTS': 'android.permission.GET_ACCOUNTS',
        'ACCESS_FINE_LOCATION': 'android.permission.ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION': 'android.permission.ACCESS_COARSE_LOCATION',
        'ACCESS_BACKGROUND_LOCATION': 'android.permission.ACCESS_BACKGROUND_LOCATION',
        'RECORD_AUDIO': 'android.permission.RECORD_AUDIO',
        'READ_PHONE_STATE': 'android.permission.READ_PHONE_STATE',
        'CALL_PHONE': 'android.permission.CALL_PHONE',
        'READ_CALL_LOG': 'android.permission.READ_CALL_LOG',
        'WRITE_CALL_LOG': 'android.permission.WRITE_CALL_LOG',
        'ADD_VOICEMAIL': 'com.android.voicemail.permission.ADD_VOICEMAIL',
        'READ_VOICEMAIL': 'com.android.voicemail.permission.READ_VOICEMAIL',
        'WRITE_VOICEMAIL': 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        'USE_SIP': 'android.permission.USE_SIP',
        'PROCESS_OUTGOING_CALLS': 'android.permission.PROCESS_OUTGOING_CALLS',
        'BODY_SENSORS': 'android.permission.BODY_SENSORS',
        'BODY_SENSORS_BACKGROUND': 'android.permission.BODY_SENSORS_BACKGROUND',
        'SEND_SMS': 'android.permission.SEND_SMS',
        'RECEIVE_SMS': 'android.permission.RECEIVE_SMS',
        'READ_SMS': 'android.permission.READ_SMS',
        'RECEIVE_WAP_PUSH': 'android.permission.RECEIVE_WAP_PUSH',
        'RECEIVE_MMS': 'android.permission.RECEIVE_MMS',
        'READ_EXTERNAL_STORAGE': 'android.permission.READ_EXTERNAL_STORAGE',
        'READ_MEDIA_IMAGES': 'android.permission.READ_MEDIA_IMAGES',
        'READ_MEDIA_VIDEO': 'android.permission.READ_MEDIA_VIDEO',
        'READ_MEDIA_AUDIO': 'android.permission.READ_MEDIA_AUDIO',
        'READ_MEDIA_VISUAL_USER_SELECTED': 'android.permission.READ_MEDIA_VISUAL_USER_SELECTED',
        'WRITE_EXTERNAL_STORAGE': 'android.permission.WRITE_EXTERNAL_STORAGE',
        'BLUETOOTH_CONNECT': 'android.permission.BLUETOOTH_CONNECT',
        'BLUETOOTH_SCAN': 'android.permission.BLUETOOTH_SCAN',
        'BLUETOOTH_ADVERTISE': 'android.permission.BLUETOOTH_ADVERTISE',
        'ACCESS_MEDIA_LOCATION': 'android.permission.ACCESS_MEDIA_LOCATION',
        'ACCEPT_HANDOVER': 'android.permission.ACCEPT_HANDOVER',
        'ACTIVITY_RECOGNITION': 'android.permission.ACTIVITY_RECOGNITION',
        'ANSWER_PHONE_CALLS': 'android.permission.ANSWER_PHONE_CALLS',
        'READ_PHONE_NUMBERS': 'android.permission.READ_PHONE_NUMBERS',
        'UWB_RANGING': 'android.permission.UWB_RANGING',
        'POST_NOTIFICATIONS': 'android.permission.POST_NOTIFICATIONS',
        'NEARBY_WIFI_DEVICES': 'android.permission.NEARBY_WIFI_DEVICES'
    };
    var3 = var4.bind(var5)(var3);
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot2;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot6;
            var2.PERMISSIONS = var3;
            var1 = _closure1_slot5;
            var2.RESULTS = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'checkPermission';
        var4.key = var1;
        var1 = function arg0() {
            var0 = global;
            var2 = var0.console;
            var1 = var2.warn;
            var0 = '"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead';
            var0 = var1.bind(var2)(var0);
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var0 = var3[var0];
            var1 = undefined;
            var6 = var2.bind(var1)(var0);
            var0 = 4;
            var4 = var3[var0];
            var5 = var2.bind(var1)(var4);
            var4 = 'PermissionsAndroid is not installed correctly.';
            var4 = var6.bind(var1)(var5, var4);
            var0 = var3[var0];
            var2 = var2.bind(var1)(var0);
            var1 = var2.checkPermission;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var1;
        var1 = new Array(5);
        var1[0] = var4;
        var4 = {};
        var6 = 'check';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var0 = var3[var0];
            var1 = undefined;
            var6 = var2.bind(var1)(var0);
            var0 = 4;
            var4 = var3[var0];
            var5 = var2.bind(var1)(var4);
            var4 = 'PermissionsAndroid is not installed correctly.';
            var4 = var6.bind(var1)(var5, var4);
            var0 = var3[var0];
            var2 = var2.bind(var1)(var0);
            var1 = var2.checkPermission;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'requestPermission';
        var4.key = var6;
        var7 = _closure1_slot2;
        var0 = undefined;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun6082: for (var _fun6082_ip = 0;;) switch (_fun6082_ip) {
                    case 0:
                        StartGenerator();
                        var2 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun6082_ip = 84;
                            continue _fun6082
                        }
                    case 10:
                        var1 = global;
                        var4 = var1.console;
                        var3 = var4.warn;
                        var1 = '"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead';
                        var1 = var3.bind(var4)(var1);
                        var4 = var2.request;
                        var3 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var3, var1);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun6082_ip = 81;
                            continue _fun6082
                        }
                    case 62:
                        var2 = var2.RESULTS;
                        var2 = var2.GRANTED;
                        var2 = var1 === var2;
                        return var2;
                    case 81:
                        return var1;
                    case 84:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot1 = var6;
        var6 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'request';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun6085: for (var _fun6085_ip = 0;;) switch (_fun6085_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun6085_ip = 211;
                            continue _fun6085
                        }
                    case 18:
                        var _closure4_slot0 = var5;
                        var _closure4_slot1 = var1;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var6 = 3;
                        var7 = var4[var6];
                        var6 = undefined;
                        var9 = var8.bind(var6)(var7);
                        var7 = 4;
                        var4 = var4[var7];
                        var8 = var8.bind(var6)(var4);
                        var4 = 'PermissionsAndroid is not installed correctly.';
                        var4 = var9.bind(var6)(var8, var4);
                        if (!var1) {
                            _fun6085_ip = 142;
                            continue _fun6085
                        }
                    case 78:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var4 = var4.bind(var6)(var1);
                        var1 = var4.shouldShowRequestPermissionRationale;
                        var1 = var1.bind(var4)(var5);
                        SaveGenerator(address = 110);
                    case 108:
                        return var1;
                    case 110:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun6085_ip = 208;
                            continue _fun6085
                        }
                    case 116:
                        if (!var1) {
                            _fun6085_ip = 142;
                            continue _fun6085
                        }
                    case 119:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var4 = 5;
                        var4 = var9[var4];
                        var4 = var8.bind(var6)(var4);
                        if (var4) {
                            _fun6085_ip = 172;
                            continue _fun6085
                        }
                    case 142:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var7];
                        var4 = var4.bind(var6)(var2);
                        var2 = var4.requestPermission;
                        var2 = var2.bind(var4)(var5);
                        _fun6085_ip = 205;
                        continue _fun6085;
                    case 172:
                        var4 = global;
                        var5 = var4.Promise;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = function(arg0, arg1) { // Environment: var3
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var0 = global;
                            var4 = var0.Object;
                            var3 = var4.assign;
                            var2 = _closure4_slot1;
                            var0 = {};
                            var5 = var3.bind(var4)(var0, var2);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.showAlert;
                            var2 = function() { // Environment: var1
                                var2 = _closure5_slot1;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'Error showing rationale';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = function() { // Environment: var1
                                var2 = _closure5_slot0;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 4;
                                var0 = var1[var0];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var0);
                                var3 = var4.requestPermission;
                                var0 = _closure4_slot0;
                                var0 = var3.bind(var4)(var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var5, var2, var1);
                            return var0;
                        };
                        var12 = var4;
                        var3 = new var12[var5](var11, var10);
                        var2 = var3 instanceof Object ? var3 : var4;
                    case 205:
                        return var2;
                    case 208:
                        return var1;
                    case 211:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = 'requestMultiple';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var0 = var3[var0];
            var1 = undefined;
            var6 = var2.bind(var1)(var0);
            var0 = 4;
            var4 = var3[var0];
            var5 = var2.bind(var1)(var4);
            var4 = 'PermissionsAndroid is not installed correctly.';
            var4 = var6.bind(var1)(var5, var4);
            var0 = var3[var0];
            var2 = var2.bind(var1)(var0);
            var1 = var2.requestMultiplePermissions;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var1[4] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 44, 458, 232]);