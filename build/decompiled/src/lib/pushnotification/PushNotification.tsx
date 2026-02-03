// lib/pushnotification/PushNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68916: for (var _fun68916_ip = 0;;) switch (_fun68916_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun68917: for (var _fun68917_ip = 0;;) switch (_fun68917_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var0 = null;
                        var1 = var0 == var1;
                        if (var1) {
                            _fun68917_ip = 119;
                            continue _fun68917
                        }
                    case 18:
                        var1 = {};
                        var3 = function() {
                            _fun68918: for (var _fun68918_ip = 0;;) switch (_fun68918_ip) {
                                case 0:
                                    var0 = {};
                                    var2 = _closure2_slot0;
                                    var6 = var0;
                                    var5 = var2;
                                    var3 = copyDataProperties(var6, var5);
                                    var3 = var2.message;
                                    var2 = null;
                                    var3 = var2 != var3;
                                    if (!var3) {
                                        _fun68918_ip = 61;
                                        continue _fun68918
                                    }
                                case 33:
                                    var3 = global;
                                    var4 = var3.JSON;
                                    var3 = var4.parse;
                                    var1 = _closure2_slot0;
                                    var1 = var1.message;
                                    var2 = var3.bind(var4)(var1);
                                case 61:
                                    var1 = 'message';
                                    var0[var1] = var2;
                                    return var0;
                            }
                        };
                        var1.getData = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getMessage = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getSound = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getCategory = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getAlert = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getContentAvailable = var3;
                        var3 = function() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'TODO: Implement on Android';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.getBadgeCount = var3;
                        var2 = function arg0() {
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var1 = 'Not implemented on Android: ';
                            var0 = arg0;
                            var4 = var3.bind(var1)(var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = var1;
                            var0 = new var5[var2](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var1.finish = var2;
                        var0 = var1;
                    case 119:
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var6 = var1.NativeModules;
            var8 = var1.NativeEventEmitter;
            var7 = var6.PushNotificationAndroid;
            var _closure1_slot3 = var7;
            var1 = null;
            var7 = var1 != var7;
            if (!var7) {
                _fun68916_ip = 139;
                continue _fun68916
            }
        case 113:
            var11 = var6.PushNotificationAndroid;
            var7 = var8.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var8
                }
            });
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var1 = var6 instanceof Object ? var6 : var7;
        case 139:
            var _closure1_slot4 = var1;
            var1 = {};
            var6 = function() {
                _fun68926: for (var _fun68926_ip = 0;;) switch (_fun68926_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 1;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.isAndroid;
                        var1 = var1.bind(var3)();
                        if (var1) {
                            _fun68926_ip = 70;
                            continue _fun68926
                        }
                    case 38:
                        var1 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 2;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.getInitialNotification;
                        var0 = var0.bind(var1)();
                        _fun68926_ip = 107;
                        continue _fun68926;
                    case 70:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure1_slot3;
                            var1 = var2.getInitialNotification;
                            var2 = var1.bind(var2)();
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var3 = _closure1_slot5;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var3.bind(var0)(var1);
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 107:
                        return var0;
                }
            };
            var1.getInitialNotification = var6;
            var6 = function arg0, arg1() {
                _fun68929: for (var _fun68929_ip = 0;;) switch (_fun68929_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68929_ip = 60;
                            continue _fun68929
                        }
                    case 38:
                        var4 = _closure1_slot3;
                        var3 = var4.setCurrentUser;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                    case 60:
                        return var0;
                }
            };
            var1.setCurrentUser = var6;
            var6 = function() {
                _fun68930: for (var _fun68930_ip = 0;;) switch (_fun68930_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68930_ip = 73;
                            continue _fun68930
                        }
                    case 38:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.default;
                        var1 = var2.clearLogs;
                        var1 = var1.bind(var2)();
                    case 73:
                        return var0;
                }
            };
            var1.clearPushNotificationLogs = var6;
            var6 = function arg0() {
                _fun68931: for (var _fun68931_ip = 0;;) switch (_fun68931_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68931_ip = 72;
                            continue _fun68931
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setApplicationIconBadgeNumber;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 72:
                        return var0;
                }
            };
            var1.setApplicationIconBadgeNumber = var6;
            var6 = function() {
                _fun68932: for (var _fun68932_ip = 0;;) switch (_fun68932_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68932_ip = 73;
                            continue _fun68932
                        }
                    case 38:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 2;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.setApplicationIconBadgeNumber;
                        var2 = 0;
                        var2 = var3.bind(var4)(var2);
                        _fun68932_ip = 87;
                        continue _fun68932;
                    case 73:
                        var2 = _closure1_slot3;
                        var1 = var2.clearAllNotifications;
                        var1 = var1.bind(var2)();
                    case 87:
                        return var0;
                }
            };
            var1.clearAllNotifications = var6;
            var6 = function arg0() {
                _fun68933: for (var _fun68933_ip = 0;;) switch (_fun68933_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.isAndroid;
                        var2 = var2.bind(var4)();
                        if (var2) {
                            _fun68933_ip = 74;
                            continue _fun68933
                        }
                    case 41:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.presentLocalNotification;
                        var2 = var2.bind(var4)(var3);
                        _fun68933_ip = 89;
                        continue _fun68933;
                    case 74:
                        var2 = _closure1_slot3;
                        var1 = var2.presentLocalNotification;
                        var1 = var1.bind(var2)(var3);
                    case 89:
                        return var0;
                }
            };
            var1.presentLocalNotification = var6;
            var6 = function() {
                _fun68934: for (var _fun68934_ip = 0;;) switch (_fun68934_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.isAndroid;
                        var0 = var0.bind(var1)();
                        var1 = global;
                        var3 = var1.Promise;
                        if (var0) {
                            _fun68934_ip = 77;
                            continue _fun68934
                        }
                    case 46:
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getDeliveredNotifications;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var1;
                        var0 = new var5[var3](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        _fun68934_ip = 92;
                        continue _fun68934;
                    case 77:
                        var2 = var3.resolve;
                        var1 = new Array(0);
                        var0 = var2.bind(var3)(var1);
                    case 92:
                        return var0;
                }
            };
            var1.getDeliveredNotifications = var6;
            var6 = function arg0() {
                _fun68936: for (var _fun68936_ip = 0;;) switch (_fun68936_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68936_ip = 72;
                            continue _fun68936
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.removeDeliveredNotifications;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 72:
                        return var0;
                }
            };
            var1.removeDeliveredNotifications = var6;
            var6 = function arg0() {
                _fun68937: for (var _fun68937_ip = 0;;) switch (_fun68937_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68937_ip = 72;
                            continue _fun68937
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.scheduleLocalNotification;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 72:
                        return var0;
                }
            };
            var1.scheduleLocalNotification = var6;
            var6 = function arg0() {
                _fun68938: for (var _fun68938_ip = 0;;) switch (_fun68938_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68938_ip = 72;
                            continue _fun68938
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getScheduledLocalNotifications;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 72:
                        return var0;
                }
            };
            var1.getScheduledLocalNotifications = var6;
            var6 = function arg0() {
                _fun68939: for (var _fun68939_ip = 0;;) switch (_fun68939_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68939_ip = 72;
                            continue _fun68939
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.cancelLocalNotifications;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 72:
                        return var0;
                }
            };
            var1.cancelLocalNotifications = var6;
            var6 = function() {
                _fun68940: for (var _fun68940_ip = 0;;) switch (_fun68940_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun68940_ip = 68;
                            continue _fun68940
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.cancelAllLocalNotifications;
                        var1 = var1.bind(var2)();
                    case 68:
                        return var0;
                }
            };
            var1.cancelAllLocalNotifications = var6;
            var6 = function arg0() {
                _fun68941: for (var _fun68941_ip = 0;;) switch (_fun68941_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 1;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun68941_ip = 74;
                            continue _fun68941
                        }
                    case 41:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.checkPermissions;
                        var1 = var1.bind(var3)(var2);
                        _fun68941_ip = 81;
                        continue _fun68941;
                    case 74:
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
                    case 81:
                        return var0;
                }
            };
            var1.checkPermissions = var6;
            var6 = function arg0() {
                _fun68942: for (var _fun68942_ip = 0;;) switch (_fun68942_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 1;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.isAndroid;
                        var1 = var1.bind(var3)();
                        if (var1) {
                            _fun68942_ip = 74;
                            continue _fun68942
                        }
                    case 38:
                        var1 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 2;
                        var0 = var3[var0];
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.requestPermissions;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        _fun68942_ip = 111;
                        continue _fun68942;
                    case 74:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var1
                            var2 = arg0;
                            var1 = undefined;
                            var0 = {};
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 111:
                        return var0;
                }
            };
            var1.requestPermissions = var6;
            var6 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.bind(var0)();
                return var0;
            };
            var1.openNotificationSettings = var6;
            var6 = function arg0, arg1() {
                _fun68945: for (var _fun68945_ip = 0;;) switch (_fun68945_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var _closure2_slot0 = var6;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 1;
                        var4 = var4[var0];
                        var0 = undefined;
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.isAndroid;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun68945_ip = 84;
                            continue _fun68945
                        }
                    case 50:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 2;
                        var4 = var7[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.addEventListener;
                        var4 = var4.bind(var5)(var3, var6);
                        _fun68945_ip = 163;
                        continue _fun68945;
                    case 84:
                        var7 = 'notification';
                        if (!(var7 === var3)) {
                            _fun68945_ip = 115;
                            continue _fun68945
                        }
                    case 92:
                        var6 = _closure1_slot4;
                        var5 = var6.addListener;
                        var4 = function(arg0) { // Environment: var2
                            _fun68946: for (var _fun68946_ip = 0;;) switch (_fun68946_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun68946_ip = 35;
                                        continue _fun68946
                                    }
                                case 23:
                                    var1 = _closure2_slot0;
                                    var1 = var1.bind(var0)(var2);
                                case 35:
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var7, var4);
                    case 115:
                        var6 = 'localNotification';
                        if (!(var6 === var3)) {
                            _fun68945_ip = 148;
                            continue _fun68945
                        }
                    case 125:
                        var5 = _closure1_slot4;
                        var4 = var5.addListener;
                        var2 = function(arg0) { // Environment: var2
                            _fun68947: for (var _fun68947_ip = 0;;) switch (_fun68947_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun68947_ip = 35;
                                        continue _fun68947
                                    }
                                case 23:
                                    var1 = _closure2_slot0;
                                    var1 = var1.bind(var0)(var2);
                                case 35:
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var5)(var6, var2);
                    case 148:
                        var2 = _closure1_slot3;
                        var1 = var2.registerEventListener;
                        var1 = var1.bind(var2)(var3);
                    case 163:
                        return var0;
                }
            };
            var1.addNotificationEventListener = var6;
            var6 = function arg0() {
                _fun68948: for (var _fun68948_ip = 0;;) switch (_fun68948_ip) {
                    case 0:
                        var6 = arg0;
                        var _closure2_slot0 = var6;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 1;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun68948_ip = 85;
                            continue _fun68948
                        }
                    case 47:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.addEventListener;
                        var3 = 'register';
                        var3 = var4.bind(var5)(var3, var6);
                        _fun68948_ip = 127;
                        continue _fun68948;
                    case 85:
                        var5 = _closure1_slot4;
                        var4 = var5.addListener;
                        var3 = 'register';
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var2 = var0.token;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = _closure1_slot3;
                        var1 = var2.registerEventListener;
                        var1 = var1.bind(var2)(var3);
                    case 127:
                        return var0;
                }
            };
            var1.addRegisterEventListener = var6;
            var6 = function() {
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    _fun68951: for (var _fun68951_ip = 0;;) switch (_fun68951_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.isAndroid;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun68951_ip = 56;
                                continue _fun68951
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun68951_ip = 87;
                            continue _fun68951;
                        case 56:
                            var3 = _closure1_slot3;
                            var2 = var3.getSoundsEnabled;
                            var3 = var2.bind(var3)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var1.getSoundsEnabled = var6;
            var6 = function() {
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    _fun68954: for (var _fun68954_ip = 0;;) switch (_fun68954_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.isAndroid;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun68954_ip = 56;
                                continue _fun68954
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun68954_ip = 87;
                            continue _fun68954;
                        case 56:
                            var3 = _closure1_slot3;
                            var2 = var3.getVibrationsEnabled;
                            var3 = var2.bind(var3)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var1.getVibrationsEnabled = var6;
            var6 = function() {
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    _fun68957: for (var _fun68957_ip = 0;;) switch (_fun68957_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.isAndroid;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun68957_ip = 56;
                                continue _fun68957
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun68957_ip = 87;
                            continue _fun68957;
                        case 56:
                            var3 = _closure1_slot3;
                            var2 = var3.getLightsEnabled;
                            var3 = var2.bind(var3)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var1.getLightsEnabled = var6;
            var6 = function arg0() {
                _fun68959: for (var _fun68959_ip = 0;;) switch (_fun68959_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68959_ip = 56;
                            continue _fun68959
                        }
                    case 38:
                        var3 = _closure1_slot3;
                        var2 = var3.setSoundsEnabled;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 56:
                        return var0;
                }
            };
            var1.setSoundsEnabled = var6;
            var6 = function arg0() {
                _fun68960: for (var _fun68960_ip = 0;;) switch (_fun68960_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68960_ip = 56;
                            continue _fun68960
                        }
                    case 38:
                        var3 = _closure1_slot3;
                        var2 = var3.setVibrationsEnabled;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 56:
                        return var0;
                }
            };
            var1.setVibrationsEnabled = var6;
            var6 = function arg0() {
                _fun68961: for (var _fun68961_ip = 0;;) switch (_fun68961_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68961_ip = 56;
                            continue _fun68961
                        }
                    case 38:
                        var3 = _closure1_slot3;
                        var2 = var3.setLightsEnabled;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 56:
                        return var0;
                }
            };
            var1.setLightsEnabled = var6;
            var6 = function arg0() {
                _fun68962: for (var _fun68962_ip = 0;;) switch (_fun68962_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun68962_ip = 58;
                            continue _fun68962
                        }
                    case 38:
                        var3 = _closure1_slot3;
                        var2 = var3.setNotifyEveryTime;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var1.setAndroidNotifyEveryTime = var6;
            var3 = function() {
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    _fun68964: for (var _fun68964_ip = 0;;) switch (_fun68964_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.isAndroid;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun68964_ip = 56;
                                continue _fun68964
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun68964_ip = 89;
                            continue _fun68964;
                        case 56:
                            var3 = _closure1_slot3;
                            var2 = var3.shouldNotifyEveryTime;
                            var3 = var2.bind(var3)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 89:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var1.shouldAndroidNotifyEveryTime = var3;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'lib/pushnotification/PushNotification.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 8626, 8627, 8628, 2]);