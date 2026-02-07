// modules/hangouts/native/NativeHangoutsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun114395: for (var _fun114395_ip = 0;;) switch (_fun114395_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var7 = var3.NativeEventEmitter;
            var3 = var3.NativeModules;
            var _closure1_slot3 = var3;
            var6 = 1;
            var6 = var5[var6];
            var8 = var4.bind(var0)(var6);
            var6 = var8.isIOS;
            var6 = var6.bind(var8)();
            if (!var6) {
                _fun114395_ip = 163;
                continue _fun114395
            }
        case 112:
            var11 = var3.DCDLockscreenWidgetManager;
            var6 = var7.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var7
                }
            });
            var12 = var6;
            var3 = new var12[var7](var11, var10);
            var8 = var3 instanceof Object ? var3 : var6;
            var7 = var8.addListener;
            var6 = 'pushTokenUpdate';
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var4 = var0.token;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'HANGOUT_PUSH_TOKEN_UPDATE';
                var1.type = var5;
                var1.token = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var3 = var7.bind(var8)(var6, var3);
        case 163:
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/hangouts/native/NativeHangoutsUtils.tsx';
            var3 = var4.bind(var5)(var3);
            var3 = function arg0, arg1() {
                _fun114397: for (var _fun114397_ip = 0;;) switch (_fun114397_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isIOS;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun114397_ip = 68;
                            continue _fun114397
                        }
                    case 38:
                        var1 = _closure1_slot3;
                        var4 = var1.DCDLockscreenWidgetManager;
                        var3 = var4.downloadAndStoreImage;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                    case 68:
                        return var0;
                }
            };
            var2.preloadAsset = var3;
            var3 = function() {
                _fun114398: for (var _fun114398_ip = 0;;) switch (_fun114398_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 1;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.isIOS;
                        var3 = var1.bind(var3)();
                        var1 = global;
                        if (var3) {
                            _fun114398_ip = 75;
                            continue _fun114398
                        }
                    case 42:
                        var5 = var1.Promise;
                        var4 = var5.resolve;
                        var3 = {
                            'hasActivity': false,
                            'hasActiveActivity': false
                        };
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 75:
                        var2 = _closure1_slot3;
                        var2 = var2.DCDLockscreenWidgetManager;
                        var _closure2_slot0 = var2;
                        var2 = var1.Promise;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.hasActivity;
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun114400: for (var _fun114400_ip = 0;;) switch (_fun114400_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        var0 = arg0;
                                        if (!(var1 == var0)) {
                                            _fun114400_ip = 36;
                                            continue _fun114400
                                        }
                                    case 16:
                                        var1 = {};
                                        var0 = arg1;
                                        var1.hasActivity = var0;
                                        var0 = arg2;
                                        var1.hasActiveActivity = var0;
                                        _fun114400_ip = 50;
                                        continue _fun114400;
                                    case 36:
                                        var1 = {
                                            'hasActivity': false,
                                            'hasActiveActivity': false
                                        };
                                    case 50:
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var2.hasActivity = var3;
            var3 = function() {
                _fun114401: for (var _fun114401_ip = 0;;) switch (_fun114401_ip) {
                    case 0:
                        var3 = arguments[0];
                        var0 = undefined;
                        if (!(var3 === var0)) {
                            _fun114401_ip = 11;
                            continue _fun114401
                        }
                    case 9:
                        var3 = 0;
                    case 11:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 1;
                        var2 = var5[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.isIOS;
                        var2 = var2.bind(var4)();
                        if (!var2) {
                            _fun114401_ip = 70;
                            continue _fun114401
                        }
                    case 47:
                        var1 = _closure1_slot3;
                        var2 = var1.DCDLockscreenWidgetManager;
                        var1 = var2.endActivity;
                        var1 = var1.bind(var2)(var3);
                    case 70:
                        return var0;
                }
            };
            var2.stopHangoutActivity = var3;
            var3 = function arg0() {
                _fun114402: for (var _fun114402_ip = 0;;) switch (_fun114402_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isIOS;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun114402_ip = 83;
                            continue _fun114402
                        }
                    case 38:
                        var1 = _closure1_slot3;
                        var3 = var1.DCDLockscreenWidgetManager;
                        var2 = var3.startActivity;
                        var1 = global;
                        var5 = var1.JSON;
                        var4 = var5.stringify;
                        var1 = arg0;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                    case 83:
                        return var0;
                }
            };
            var2.startHangoutActivity = var3;
            var1 = function() {
                _fun114403: for (var _fun114403_ip = 0;;) switch (_fun114403_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 1;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.isIOS;
                        var3 = var1.bind(var3)();
                        var1 = global;
                        if (var3) {
                            _fun114403_ip = 65;
                            continue _fun114403
                        }
                    case 42:
                        var5 = var1.Promise;
                        var4 = var5.reject;
                        var3 = 'unsupported';
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 65:
                        var2 = _closure1_slot3;
                        var2 = var2.DCDLockscreenWidgetManager;
                        var _closure2_slot0 = var2;
                        var2 = var1.Promise;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = function(arg0, arg1) { // Environment: var0
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.activitiesAllowed;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun114405: for (var _fun114405_ip = 0;;) switch (_fun114405_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun114405_ip = 28;
                                            continue _fun114405
                                        }
                                    case 9:
                                        var3 = _closure3_slot0;
                                        var1 = undefined;
                                        var0 = arg1;
                                        var0 = var3.bind(var1)(var0);
                                        _fun114405_ip = 42;
                                        continue _fun114405;
                                    case 28:
                                        var1 = _closure3_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 42:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var2.activitiesAllowed = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 806, 2]);