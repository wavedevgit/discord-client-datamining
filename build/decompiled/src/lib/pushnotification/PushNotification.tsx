// lib/pushnotification/PushNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun69409: for (var _fun69409_ip = 0;;) switch (_fun69409_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun69410: for (var _fun69410_ip = 0;;) switch (_fun69410_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var0 = null;
                        var1 = var0 == var1;
                        if (var1) {
                            _fun69410_ip = 119;
                            continue _fun69410
                        }
                    case 18:
                        var1 = {};
                        var3 = function() {
                            _fun69411: for (var _fun69411_ip = 0;;) switch (_fun69411_ip) {
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
                                        _fun69411_ip = 61;
                                        continue _fun69411
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
                _fun69409_ip = 139;
                continue _fun69409
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
                _fun69419: for (var _fun69419_ip = 0;;) switch (_fun69419_ip) {
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
                            _fun69419_ip = 70;
                            continue _fun69419
                        }
                    case 38:
                        var1 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 2;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.getInitialNotification;
                        var0 = var0.bind(var1)();
                        _fun69419_ip = 107;
                        continue _fun69419;
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
                _fun69422: for (var _fun69422_ip = 0;;) switch (_fun69422_ip) {
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
                            _fun69422_ip = 60;
                            continue _fun69422
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
                _fun69423: for (var _fun69423_ip = 0;;) switch (_fun69423_ip) {
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
                            _fun69423_ip = 73;
                            continue _fun69423
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
                _fun69424: for (var _fun69424_ip = 0;;) switch (_fun69424_ip) {
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
                            _fun69424_ip = 72;
                            continue _fun69424
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
                _fun69425: for (var _fun69425_ip = 0;;) switch (_fun69425_ip) {
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
                            _fun69425_ip = 73;
                            continue _fun69425
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
                        _fun69425_ip = 87;
                        continue _fun69425;
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
                _fun69426: for (var _fun69426_ip = 0;;) switch (_fun69426_ip) {
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
                            _fun69426_ip = 74;
                            continue _fun69426
                        }
                    case 41:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.presentLocalNotification;
                        var2 = var2.bind(var4)(var3);
                        _fun69426_ip = 89;
                        continue _fun69426;
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
                _fun69427: for (var _fun69427_ip = 0;;) switch (_fun69427_ip) {
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
                            _fun69427_ip = 77;
                            continue _fun69427
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
                        _fun69427_ip = 92;
                        continue _fun69427;
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
                _fun69429: for (var _fun69429_ip = 0;;) switch (_fun69429_ip) {
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
                            _fun69429_ip = 72;
                            continue _fun69429
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
                _fun69430: for (var _fun69430_ip = 0;;) switch (_fun69430_ip) {
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
                            _fun69430_ip = 72;
                            continue _fun69430
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
                _fun69431: for (var _fun69431_ip = 0;;) switch (_fun69431_ip) {
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
                            _fun69431_ip = 72;
                            continue _fun69431
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
                _fun69432: for (var _fun69432_ip = 0;;) switch (_fun69432_ip) {
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
                            _fun69432_ip = 72;
                            continue _fun69432
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
                _fun69433: for (var _fun69433_ip = 0;;) switch (_fun69433_ip) {
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
                            _fun69433_ip = 68;
                            continue _fun69433
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
                _fun69434: for (var _fun69434_ip = 0;;) switch (_fun69434_ip) {
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
                            _fun69434_ip = 74;
                            continue _fun69434
                        }
                    case 41:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.checkPermissions;
                        var1 = var1.bind(var3)(var2);
                        _fun69434_ip = 81;
                        continue _fun69434;
                    case 74:
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
                    case 81:
                        return var0;
                }
            };
            var1.checkPermissions = var6;
            var6 = function arg0() {
                _fun69435: for (var _fun69435_ip = 0;;) switch (_fun69435_ip) {
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
                            _fun69435_ip = 74;
                            continue _fun69435
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
                        _fun69435_ip = 111;
                        continue _fun69435;
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
                _fun69438: for (var _fun69438_ip = 0;;) switch (_fun69438_ip) {
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
                            _fun69438_ip = 84;
                            continue _fun69438
                        }
                    case 50:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 2;
                        var4 = var7[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.addEventListener;
                        var4 = var4.bind(var5)(var3, var6);
                        _fun69438_ip = 163;
                        continue _fun69438;
                    case 84:
                        var7 = 'notification';
                        if (!(var7 === var3)) {
                            _fun69438_ip = 115;
                            continue _fun69438
                        }
                    case 92:
                        var6 = _closure1_slot4;
                        var5 = var6.addListener;
                        var4 = function(arg0) { // Environment: var2
                            _fun69439: for (var _fun69439_ip = 0;;) switch (_fun69439_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun69439_ip = 35;
                                        continue _fun69439
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
                            _fun69438_ip = 148;
                            continue _fun69438
                        }
                    case 125:
                        var5 = _closure1_slot4;
                        var4 = var5.addListener;
                        var2 = function(arg0) { // Environment: var2
                            _fun69440: for (var _fun69440_ip = 0;;) switch (_fun69440_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun69440_ip = 35;
                                        continue _fun69440
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
                _fun69441: for (var _fun69441_ip = 0;;) switch (_fun69441_ip) {
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
                            _fun69441_ip = 85;
                            continue _fun69441
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
                        _fun69441_ip = 127;
                        continue _fun69441;
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
                    _fun69444: for (var _fun69444_ip = 0;;) switch (_fun69444_ip) {
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
                                _fun69444_ip = 56;
                                continue _fun69444
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69444_ip = 87;
                            continue _fun69444;
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
                    _fun69447: for (var _fun69447_ip = 0;;) switch (_fun69447_ip) {
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
                                _fun69447_ip = 56;
                                continue _fun69447
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69447_ip = 87;
                            continue _fun69447;
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
                    _fun69450: for (var _fun69450_ip = 0;;) switch (_fun69450_ip) {
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
                                _fun69450_ip = 56;
                                continue _fun69450
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69450_ip = 87;
                            continue _fun69450;
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
                _fun69452: for (var _fun69452_ip = 0;;) switch (_fun69452_ip) {
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
                            _fun69452_ip = 56;
                            continue _fun69452
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
                _fun69453: for (var _fun69453_ip = 0;;) switch (_fun69453_ip) {
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
                            _fun69453_ip = 56;
                            continue _fun69453
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
                _fun69454: for (var _fun69454_ip = 0;;) switch (_fun69454_ip) {
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
                            _fun69454_ip = 56;
                            continue _fun69454
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
                _fun69455: for (var _fun69455_ip = 0;;) switch (_fun69455_ip) {
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
                            _fun69455_ip = 58;
                            continue _fun69455
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
                    _fun69457: for (var _fun69457_ip = 0;;) switch (_fun69457_ip) {
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
                                _fun69457_ip = 56;
                                continue _fun69457
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69457_ip = 89;
                            continue _fun69457;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 8687, 8688, 8689, 2]);