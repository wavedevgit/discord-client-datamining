// lib/pushnotification/PushNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun69358: for (var _fun69358_ip = 0;;) switch (_fun69358_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun69359: for (var _fun69359_ip = 0;;) switch (_fun69359_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var0 = null;
                        var1 = var0 == var1;
                        if (var1) {
                            _fun69359_ip = 119;
                            continue _fun69359
                        }
                    case 18:
                        var1 = {};
                        var3 = function() {
                            _fun69360: for (var _fun69360_ip = 0;;) switch (_fun69360_ip) {
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
                                        _fun69360_ip = 61;
                                        continue _fun69360
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
                _fun69358_ip = 139;
                continue _fun69358
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
                _fun69368: for (var _fun69368_ip = 0;;) switch (_fun69368_ip) {
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
                            _fun69368_ip = 70;
                            continue _fun69368
                        }
                    case 38:
                        var1 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 2;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.getInitialNotification;
                        var0 = var0.bind(var1)();
                        _fun69368_ip = 107;
                        continue _fun69368;
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
                _fun69371: for (var _fun69371_ip = 0;;) switch (_fun69371_ip) {
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
                            _fun69371_ip = 60;
                            continue _fun69371
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
                _fun69372: for (var _fun69372_ip = 0;;) switch (_fun69372_ip) {
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
                            _fun69372_ip = 73;
                            continue _fun69372
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
                _fun69373: for (var _fun69373_ip = 0;;) switch (_fun69373_ip) {
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
                            _fun69373_ip = 72;
                            continue _fun69373
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
                _fun69374: for (var _fun69374_ip = 0;;) switch (_fun69374_ip) {
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
                            _fun69374_ip = 73;
                            continue _fun69374
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
                        _fun69374_ip = 87;
                        continue _fun69374;
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
                _fun69375: for (var _fun69375_ip = 0;;) switch (_fun69375_ip) {
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
                            _fun69375_ip = 74;
                            continue _fun69375
                        }
                    case 41:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.presentLocalNotification;
                        var2 = var2.bind(var4)(var3);
                        _fun69375_ip = 89;
                        continue _fun69375;
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
                _fun69376: for (var _fun69376_ip = 0;;) switch (_fun69376_ip) {
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
                            _fun69376_ip = 77;
                            continue _fun69376
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
                        _fun69376_ip = 92;
                        continue _fun69376;
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
                _fun69378: for (var _fun69378_ip = 0;;) switch (_fun69378_ip) {
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
                            _fun69378_ip = 72;
                            continue _fun69378
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
                _fun69379: for (var _fun69379_ip = 0;;) switch (_fun69379_ip) {
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
                            _fun69379_ip = 72;
                            continue _fun69379
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
                _fun69380: for (var _fun69380_ip = 0;;) switch (_fun69380_ip) {
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
                            _fun69380_ip = 72;
                            continue _fun69380
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
                _fun69381: for (var _fun69381_ip = 0;;) switch (_fun69381_ip) {
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
                            _fun69381_ip = 72;
                            continue _fun69381
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
                _fun69382: for (var _fun69382_ip = 0;;) switch (_fun69382_ip) {
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
                            _fun69382_ip = 68;
                            continue _fun69382
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
                _fun69383: for (var _fun69383_ip = 0;;) switch (_fun69383_ip) {
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
                            _fun69383_ip = 74;
                            continue _fun69383
                        }
                    case 41:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.checkPermissions;
                        var1 = var1.bind(var3)(var2);
                        _fun69383_ip = 81;
                        continue _fun69383;
                    case 74:
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
                    case 81:
                        return var0;
                }
            };
            var1.checkPermissions = var6;
            var6 = function arg0() {
                _fun69384: for (var _fun69384_ip = 0;;) switch (_fun69384_ip) {
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
                            _fun69384_ip = 74;
                            continue _fun69384
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
                        _fun69384_ip = 111;
                        continue _fun69384;
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
                _fun69387: for (var _fun69387_ip = 0;;) switch (_fun69387_ip) {
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
                            _fun69387_ip = 84;
                            continue _fun69387
                        }
                    case 50:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 2;
                        var4 = var7[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.addEventListener;
                        var4 = var4.bind(var5)(var3, var6);
                        _fun69387_ip = 163;
                        continue _fun69387;
                    case 84:
                        var7 = 'notification';
                        if (!(var7 === var3)) {
                            _fun69387_ip = 115;
                            continue _fun69387
                        }
                    case 92:
                        var6 = _closure1_slot4;
                        var5 = var6.addListener;
                        var4 = function(arg0) { // Environment: var2
                            _fun69388: for (var _fun69388_ip = 0;;) switch (_fun69388_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun69388_ip = 35;
                                        continue _fun69388
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
                            _fun69387_ip = 148;
                            continue _fun69387
                        }
                    case 125:
                        var5 = _closure1_slot4;
                        var4 = var5.addListener;
                        var2 = function(arg0) { // Environment: var2
                            _fun69389: for (var _fun69389_ip = 0;;) switch (_fun69389_ip) {
                                case 0:
                                    var2 = _closure1_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun69389_ip = 35;
                                        continue _fun69389
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
                _fun69390: for (var _fun69390_ip = 0;;) switch (_fun69390_ip) {
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
                            _fun69390_ip = 85;
                            continue _fun69390
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
                        _fun69390_ip = 127;
                        continue _fun69390;
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
                    _fun69393: for (var _fun69393_ip = 0;;) switch (_fun69393_ip) {
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
                                _fun69393_ip = 56;
                                continue _fun69393
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69393_ip = 87;
                            continue _fun69393;
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
                    _fun69396: for (var _fun69396_ip = 0;;) switch (_fun69396_ip) {
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
                                _fun69396_ip = 56;
                                continue _fun69396
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69396_ip = 87;
                            continue _fun69396;
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
                    _fun69399: for (var _fun69399_ip = 0;;) switch (_fun69399_ip) {
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
                                _fun69399_ip = 56;
                                continue _fun69399
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69399_ip = 87;
                            continue _fun69399;
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
                _fun69401: for (var _fun69401_ip = 0;;) switch (_fun69401_ip) {
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
                            _fun69401_ip = 56;
                            continue _fun69401
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
                _fun69402: for (var _fun69402_ip = 0;;) switch (_fun69402_ip) {
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
                            _fun69402_ip = 56;
                            continue _fun69402
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
                _fun69403: for (var _fun69403_ip = 0;;) switch (_fun69403_ip) {
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
                            _fun69403_ip = 56;
                            continue _fun69403
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
                _fun69404: for (var _fun69404_ip = 0;;) switch (_fun69404_ip) {
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
                            _fun69404_ip = 58;
                            continue _fun69404
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
                    _fun69406: for (var _fun69406_ip = 0;;) switch (_fun69406_ip) {
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
                                _fun69406_ip = 56;
                                continue _fun69406
                            }
                        case 47:
                            var3 = false;
                            var3 = var4.bind(var0)(var3);
                            _fun69406_ip = 89;
                            continue _fun69406;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 8686, 8687, 8688, 2]);