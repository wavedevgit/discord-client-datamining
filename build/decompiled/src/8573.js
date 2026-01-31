// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var4 = var4.bind(var0)(var5);
    var6 = var4.NativeEventEmitter;
    var4 = var4.NativeModules;
    var4 = var4.RNCPushNotificationIOS;
    var _closure1_slot4 = var4;
    var5 = var6.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var6
        }
    });
    var12 = var5;
    var11 = var4;
    var4 = new var12[var6](var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot5 = var4;
    var3 = var3.Map;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            _fun68745: for (var _fun68745_ip = 0;;) switch (_fun68745_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var3;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var5.bind(var0)(var3, var2);
                    var2 = {};
                    var3._data = var2;
                    var2 = false;
                    var3._remoteNotificationCompleteCallbackCalled = var2;
                    var2 = var4.remote;
                    var3._isRemote = var2;
                    var2 = var3._isRemote;
                    if (!var2) {
                        _fun68745_ip = 87;
                        continue _fun68745
                    }
                case 75:
                    var2 = var4.notificationId;
                    var3._notificationId = var2;
                case 87:
                    var2 = var4.remote;
                    if (var2) {
                        _fun68745_ip = 158;
                        continue _fun68745
                    }
                case 96:
                    var2 = var4.applicationIconBadgeNumber;
                    var3._badgeCount = var2;
                    var2 = var4.soundName;
                    var3._sound = var2;
                    var2 = var4.alertBody;
                    var3._alert = var2;
                    var2 = var4.userInfo;
                    var3._data = var2;
                    var2 = var4.category;
                    var3._category = var2;
                    _fun68745_ip = 193;
                    continue _fun68745;
                case 158:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun68746: for (var _fun68746_ip = 0;;) switch (_fun68746_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0[var3];
                                var2 = 'aps';
                                if (!(var2 !== var3)) {
                                    _fun68746_ip = 40;
                                    continue _fun68746
                                }
                            case 24:
                                var2 = _closure3_slot1;
                                var2 = var2._data;
                                var2[var3] = var0;
                                _fun68746_ip = 116;
                                continue _fun68746;
                            case 40:
                                var1 = _closure3_slot1;
                                var2 = var0.alert;
                                var1._alert = var2;
                                var2 = var0.sound;
                                var1._sound = var2;
                                var2 = var0.badge;
                                var1._badgeCount = var2;
                                var2 = var0.category;
                                var1._category = var2;
                                var2 = var0["content-available"];
                                var1._contentAvailable = var2;
                                var0 = var0["thread-id"];
                                var1._threadID = var0;
                            case 116:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 193:
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var1 = 'finish';
        var0.key = var1;
        var1 = function arg0() {
            _fun68747: for (var _fun68747_ip = 0;;) switch (_fun68747_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._isRemote;
                    if (!var1) {
                        _fun68747_ip = 18;
                        continue _fun68747
                    }
                case 12:
                    var1 = var0._notificationId;
                case 18:
                    if (!var1) {
                        _fun68747_ip = 30;
                        continue _fun68747
                    }
                case 21:
                    var2 = var0._remoteNotificationCompleteCallbackCalled;
                    var1 = !var2;
                case 30:
                    if (!var1) {
                        _fun68747_ip = 69;
                        continue _fun68747
                    }
                case 33:
                    var1 = true;
                    var0._remoteNotificationCompleteCallbackCalled = var1;
                    var3 = _closure1_slot4;
                    var2 = var3.onFinishRemoteNotification;
                    var1 = var0._notificationId;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(9);
        var2[0] = var0;
        var0 = {};
        var1 = 'getMessage';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._alert;
            return var0;
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'getSound';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._sound;
            return var0;
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'getCategory';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._category;
            return var0;
        };
        var0.value = var1;
        var2[3] = var0;
        var0 = {};
        var1 = 'getAlert';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._alert;
            return var0;
        };
        var0.value = var1;
        var2[4] = var0;
        var0 = {};
        var1 = 'getContentAvailable';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._contentAvailable;
            return var0;
        };
        var0.value = var1;
        var2[5] = var0;
        var0 = {};
        var1 = 'getBadgeCount';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._badgeCount;
            return var0;
        };
        var0.value = var1;
        var2[6] = var0;
        var0 = {};
        var1 = 'getData';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._data;
            return var0;
        };
        var0.value = var1;
        var2[7] = var0;
        var0 = {};
        var1 = 'getThreadID';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._threadID;
            return var0;
        };
        var0.value = var1;
        var2[8] = var0;
        var0 = {};
        var1 = 'presentLocalNotification';
        var0.key = var1;
        var1 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.presentLocalNotification;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(16);
        var1[0] = var0;
        var0 = {};
        var6 = 'scheduleLocalNotification';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.scheduleLocalNotification;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'cancelAllLocalNotifications';
        var0.key = var6;
        var6 = function() {
            var1 = _closure1_slot4;
            var0 = var1.cancelAllLocalNotifications;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[2] = var0;
        var0 = {};
        var6 = 'removeAllDeliveredNotifications';
        var0.key = var6;
        var6 = function() {
            var1 = _closure1_slot4;
            var0 = var1.removeAllDeliveredNotifications;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[3] = var0;
        var0 = {};
        var6 = 'getDeliveredNotifications';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.getDeliveredNotifications;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[4] = var0;
        var0 = {};
        var6 = 'removeDeliveredNotifications';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.removeDeliveredNotifications;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[5] = var0;
        var0 = {};
        var6 = 'setApplicationIconBadgeNumber';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.setApplicationIconBadgeNumber;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[6] = var0;
        var0 = {};
        var6 = 'getApplicationIconBadgeNumber';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.getApplicationIconBadgeNumber;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[7] = var0;
        var0 = {};
        var6 = 'cancelLocalNotifications';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.cancelLocalNotifications;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[8] = var0;
        var0 = {};
        var6 = 'getScheduledLocalNotifications';
        var0.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot4;
            var1 = var2.getScheduledLocalNotifications;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[9] = var0;
        var0 = {};
        var6 = 'addEventListener';
        var0.key = var6;
        var6 = function arg0, arg1() {
            _fun68766: for (var _fun68766_ip = 0;;) switch (_fun68766_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var3);
                    var3 = 'notification';
                    var3 = var3 === var4;
                    var6 = var3;
                    if (var6) {
                        _fun68766_ip = 59;
                        continue _fun68766
                    }
                case 51:
                    var5 = 'register';
                    var6 = var5 === var4;
                case 59:
                    if (var6) {
                        _fun68766_ip = 72;
                        continue _fun68766
                    }
                case 62:
                    var5 = 'registrationError';
                    var6 = var5 === var4;
                case 72:
                    if (var6) {
                        _fun68766_ip = 85;
                        continue _fun68766
                    }
                case 75:
                    var5 = 'localNotification';
                    var6 = var5 === var4;
                case 85:
                    var5 = 'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events';
                    var5 = var7.bind(var0)(var6, var5);
                    if (var3) {
                        _fun68766_ip = 229;
                        continue _fun68766
                    }
                case 103:
                    var3 = 'localNotification';
                    if (!(var3 !== var4)) {
                        _fun68766_ip = 198;
                        continue _fun68766
                    }
                case 113:
                    var3 = 'register';
                    if (!(var3 !== var4)) {
                        _fun68766_ip = 167;
                        continue _fun68766
                    }
                case 121:
                    var5 = 'registrationError';
                    var3 = undefined;
                    if (!(var5 === var4)) {
                        _fun68766_ip = 258;
                        continue _fun68766
                    }
                case 136:
                    var8 = _closure1_slot5;
                    var7 = var8.addListener;
                    var6 = 'remoteNotificationRegistrationError';
                    var5 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var5);
                    _fun68766_ip = 258;
                    continue _fun68766;
                case 167:
                    var8 = _closure1_slot5;
                    var7 = var8.addListener;
                    var6 = 'remoteNotificationsRegistered';
                    var5 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var0.deviceToken;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var5);
                    _fun68766_ip = 258;
                    continue _fun68766;
                case 198:
                    var8 = _closure1_slot5;
                    var7 = var8.addListener;
                    var6 = 'localNotificationReceived';
                    var5 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var3 = _closure2_slot0;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = arg0;
                        var5 = var1;
                        var0 = new var5[var3](var4, var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var5);
                    _fun68766_ip = 258;
                    continue _fun68766;
                case 229:
                    var7 = _closure1_slot5;
                    var6 = var7.addListener;
                    var5 = 'remoteNotificationReceived';
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var3 = _closure2_slot0;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = arg0;
                        var5 = var1;
                        var0 = new var5[var3](var4, var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var6.bind(var7)(var5, var2);
                case 258:
                    var2 = _closure1_slot6;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
            }
        };
        var0.value = var6;
        var1[10] = var0;
        var0 = {};
        var6 = 'removeEventListener';
        var0.key = var6;
        var6 = function arg0, arg1() {
            _fun68771: for (var _fun68771_ip = 0;;) switch (_fun68771_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var2 = 'notification';
                    var4 = var2 === var3;
                    if (var4) {
                        _fun68771_ip = 47;
                        continue _fun68771
                    }
                case 39:
                    var2 = 'register';
                    var4 = var2 === var3;
                case 47:
                    if (var4) {
                        _fun68771_ip = 60;
                        continue _fun68771
                    }
                case 50:
                    var2 = 'registrationError';
                    var4 = var2 === var3;
                case 60:
                    if (var4) {
                        _fun68771_ip = 73;
                        continue _fun68771
                    }
                case 63:
                    var2 = 'localNotification';
                    var4 = var2 === var3;
                case 73:
                    var2 = 'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events';
                    var2 = var5.bind(var0)(var4, var2);
                    var4 = _closure1_slot6;
                    var2 = var4.get;
                    var4 = var2.bind(var4)(var3);
                    if (!var4) {
                        _fun68771_ip = 126;
                        continue _fun68771
                    }
                case 102:
                    var2 = var4.remove;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot6;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 126:
                    return var0;
            }
        };
        var0.value = var6;
        var1[11] = var0;
        var0 = {};
        var6 = 'requestPermissions';
        var0.key = var6;
        var6 = function arg0() {
            _fun68772: for (var _fun68772_ip = 0;;) switch (_fun68772_ip) {
                case 0:
                    var1 = arg0;
                    if (var1) {
                        _fun68772_ip = 18;
                        continue _fun68772
                    }
                case 6:
                    var2 = {
                        'alert': true,
                        'badge': true,
                        'sound': true
                    };
                    _fun68772_ip = 74;
                    continue _fun68772;
                case 18:
                    var0 = {};
                    var3 = var1.alert;
                    var3 = !var3;
                    var3 = !var3;
                    var0.alert = var3;
                    var3 = var1.badge;
                    var3 = !var3;
                    var3 = !var3;
                    var0.badge = var3;
                    var1 = var1.sound;
                    var1 = !var1;
                    var1 = !var1;
                    var0.sound = var1;
                    var2 = var0;
                case 74:
                    var1 = _closure1_slot4;
                    var0 = var1.requestPermissions;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var6;
        var1[12] = var0;
        var0 = {};
        var6 = 'abandonPermissions';
        var0.key = var6;
        var6 = function() {
            var1 = _closure1_slot4;
            var0 = var1.abandonPermissions;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[13] = var0;
        var0 = {};
        var6 = 'checkPermissions';
        var0.key = var6;
        var6 = function arg0() {
            var3 = arg0;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = 'function';
            var2 = typeof var3;
            var4 = var4 === var2;
            var2 = 'Must provide a valid callback';
            var2 = var5.bind(var0)(var4, var2);
            var2 = _closure1_slot4;
            var1 = var2.checkPermissions;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var6;
        var1[14] = var0;
        var0 = {};
        var6 = 'getInitialNotification';
        var0.key = var6;
        var5 = function() {
            var1 = _closure1_slot4;
            var0 = var1.getInitialNotification;
            var2 = var0.bind(var1)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun68776: for (var _fun68776_ip = 0;;) switch (_fun68776_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3;
                        if (!var0) {
                            _fun68776_ip = 39;
                            continue _fun68776
                        }
                    case 9:
                        var1 = _closure2_slot0;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var5 = var2;
                        var4 = var3;
                        var1 = new var5[var1](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 39:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = {
        'NewData': 'UIBackgroundFetchResultNewData',
        'NoData': 'UIBackgroundFetchResultNoData',
        'ResultFailed': 'UIBackgroundFetchResultFailed'
    };
    var1.FetchResult = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 44]);