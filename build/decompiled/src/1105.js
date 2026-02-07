// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var1;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.addEventListener;
        var1 = 'message';
        var0 = function(arg0) { // Environment: var0
            _fun12156: for (var _fun12156_ip = 0;;) switch (_fun12156_ip) {
                case 0:
                    var2 = arg0;
                    var6 = var2.data;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var3 = 0;
                    var4 = var0[var3];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.isPlainObject;
                    var7 = var4.bind(var5)(var6);
                    var4 = false;
                    if (!var7) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 51:
                    var8 = var6._sentryMessage;
                    var7 = true;
                    var4 = false;
                    if (!(var7 === var8)) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 68:
                    var8 = '_sentryDebugIds';
                    var9 = var8 in var6;
                    var8 = '_sentryWorkerError';
                    var8 = var8 in var6;
                    if (var9) {
                        _fun12156_ip = 92;
                        continue _fun12156
                    }
                case 87:
                    var4 = false;
                    if (!var8) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 92:
                    if (!var9) {
                        _fun12156_ip = 144;
                        continue _fun12156
                    }
                case 95:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var3];
                    var11 = var10.bind(var0)(var9);
                    var10 = var11.isPlainObject;
                    var9 = var6._sentryDebugIds;
                    var9 = var10.bind(var11)(var9);
                    if (var9) {
                        _fun12156_ip = 144;
                        continue _fun12156
                    }
                case 132:
                    var9 = var6._sentryDebugIds;
                    var4 = false;
                    if (!(var0 === var9)) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 144:
                    var4 = true;
                    if (!var8) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 149:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var3];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.isPlainObject;
                    var6 = var6._sentryWorkerError;
                    var6 = var8.bind(var9)(var6);
                    var4 = true;
                    if (var6) {
                        _fun12156_ip = 190;
                        continue _fun12156
                    }
                case 188:
                    var4 = false;
                case 190:
                    if (!var4) {
                        _fun12156_ip = 846;
                        continue _fun12156
                    }
                case 196:
                    var4 = var2.stopImmediatePropagation;
                    var4 = var4.bind(var2)();
                    var4 = var2.data;
                    var4 = var4._sentryDebugIds;
                    if (!var4) {
                        _fun12156_ip = 383;
                        continue _fun12156
                    }
                case 223:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 1;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun12156_ip = 297;
                        continue _fun12156
                    }
                case 252:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var3];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.debug;
                    var6 = var7.log;
                    var5 = var2.data;
                    var4 = 'Sentry debugId web worker message received';
                    var4 = var6.bind(var7)(var4, var5);
                case 297:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var4 = 2;
                    var5 = var10[var4];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.WINDOW;
                    var7 = global;
                    var9 = var7.Object;
                    var8 = var9.assign;
                    var7 = var2.data;
                    var7 = var7._sentryDebugIds;
                    var4 = var10[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.WINDOW;
                    var6 = var4._sentryDebugIds;
                    var4 = {};
                    var4 = var8.bind(var9)(var4, var7, var6);
                    var5._sentryDebugIds = var4;
                case 383:
                    var4 = var2.data;
                    var4 = var4._sentryWorkerError;
                    if (!var4) {
                        _fun12156_ip = 846;
                        continue _fun12156
                    }
                case 400:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var6 = 1;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun12156_ip = 480;
                        continue _fun12156
                    }
                case 429:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var3];
                    var4 = var5.bind(var0)(var4);
                    var8 = var4.debug;
                    var7 = var8.log;
                    var4 = var2.data;
                    var5 = var4._sentryWorkerError;
                    var4 = 'Sentry worker rejection message received';
                    var4 = var7.bind(var8)(var4, var5);
                case 480:
                    var2 = var2.data;
                    var11 = var2._sentryWorkerError;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var3];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.getClient;
                    var4 = var2.bind(var4)();
                    if (!var4) {
                        _fun12156_ip = 846;
                        continue _fun12156
                    }
                case 524:
                    var2 = var4.getOptions;
                    var2 = var2.bind(var4)();
                    var12 = var2.stackParser;
                    var2 = var4.getOptions;
                    var2 = var2.bind(var4)();
                    var10 = var2.attachStacktrace;
                    var4 = var11.reason;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var3];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.isPrimitive;
                    var2 = var2.bind(var5)(var4);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    if (var2) {
                        _fun12156_ip = 641;
                        continue _fun12156
                    }
                case 601:
                    var2 = 4;
                    var2 = var7[var2];
                    var9 = var5.bind(var0)(var2);
                    var8 = var9.eventFromUnknownInput;
                    var13 = true;
                    var18 = var9;
                    var17 = var12;
                    var16 = var4;
                    var15 = undefined;
                    var14 = var10;
                    var10 = var18[var8](var17, var16, var15, var14, var13, var12);
                    _fun12156_ip = 664;
                    continue _fun12156;
                case 641:
                    var2 = 3;
                    var2 = var7[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5._eventFromRejectionWithPrimitive;
                    var10 = var2.bind(var5)(var4);
                case 664:
                    var2 = 'error';
                    var10.level = var2;
                    var2 = var11.filename;
                    if (!var2) {
                        _fun12156_ip = 737;
                        continue _fun12156
                    }
                case 683:
                    var2 = global;
                    var9 = var2.Object;
                    var8 = var9.assign;
                    var7 = var10.contexts;
                    var5 = {};
                    var2 = {};
                    var11 = var11.filename;
                    var2.filename = var11;
                    var5.worker = var2;
                    var2 = {};
                    var2 = var8.bind(var9)(var2, var7, var5);
                    var10.contexts = var2;
                case 737:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = var2[var3];
                    var9 = var5.bind(var0)(var7);
                    var8 = var9.captureEvent;
                    var7 = {};
                    var7.originalException = var4;
                    var11 = {
                        'handled': false,
                        'type': 'auto.browser.web_worker.onunhandledrejection'
                    };
                    var7.mechanism = var11;
                    var7 = var8.bind(var9)(var10, var7);
                    var2 = var2[var6];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun12156_ip = 846;
                        continue _fun12156
                    }
                case 806:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.debug;
                    var2 = var3.log;
                    var1 = 'Captured worker unhandled rejection';
                    var1 = var2.bind(var3)(var1, var4);
                case 846:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var1);
    var4 = var5.defineIntegration;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        var0 = var0.worker;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'WebWorker';
        var0.name = var2;
        var2 = function() {
            _fun12158: for (var _fun12158_ip = 0;;) switch (_fun12158_ip) {
                case 0:
                    var0 = global;
                    var3 = var0.Array;
                    var2 = var3.isArray;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure2_slot0;
                    if (var1) {
                        _fun12158_ip = 42;
                        continue _fun12158
                    }
                case 32:
                    var2 = new Array(1);
                    var2[0] = var0;
                    _fun12158_ip = 45;
                    continue _fun12158;
                case 42:
                    var2 = var0;
                case 45:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.setupOnce = var2;
        var1 = function arg0() {
            var2 = _closure1_slot2;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.addWorker = var1;
        return var0;
    };
    var1 = var4.bind(var5)(var1);
    var4 = 'WebWorker';
    var2.INTEGRATION_NAME = var4;
    var3 = function arg0() {
        _fun12161: for (var _fun12161_ip = 0;;) switch (_fun12161_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.self;
                var _closure2_slot0 = var4;
                var3 = var4.postMessage;
                var2 = {};
                var0 = true;
                var2._sentryMessage = var0;
                var6 = var4._sentryDebugIds;
                var0 = null;
                var7 = var0 != var6;
                var0 = undefined;
                var5 = undefined;
                if (!var7) {
                    _fun12161_ip = 52;
                    continue _fun12161
                }
            case 49:
                var5 = var6;
            case 52:
                var2._sentryDebugIds = var5;
                var2 = var3.bind(var4)(var2);
                var3 = var4.addEventListener;
                var2 = 'unhandledrejection';
                var1 = function(arg0) { // Environment: var1
                    _fun12162: for (var _fun12162_ip = 0;;) switch (_fun12162_ip) {
                        case 0:
                            var4 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var3 = var5._getUnhandledRejectionError;
                            var2 = arg0;
                            var2 = var3.bind(var5)(var2);
                            var4.reason = var2;
                            var3 = _closure2_slot0;
                            var5 = var3.location;
                            var3 = null;
                            var6 = var3 == var5;
                            var3 = undefined;
                            if (var6) {
                                _fun12162_ip = 75;
                                continue _fun12162
                            }
                        case 69:
                            var3 = var5.href;
                        case 75:
                            var4.filename = var3;
                            var5 = _closure2_slot0;
                            var3 = var5.postMessage;
                            var2 = {};
                            var6 = true;
                            var2._sentryMessage = var6;
                            var2._sentryWorkerError = var4;
                            var2 = var3.bind(var5)(var2);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 1;
                            var2 = var5[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.DEBUG_BUILD;
                            if (!var2) {
                                _fun12162_ip = 180;
                                continue _fun12162
                            }
                        case 138:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 0;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = '[Sentry Worker] Forwarding unhandled rejection to parent';
                            var1 = var2.bind(var3)(var1, var4);
                        case 180:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun12161_ip = 158;
                    continue _fun12161
                }
            case 117:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.log;
                var1 = '[Sentry Worker] Registered worker with unhandled rejection handling';
                var1 = var2.bind(var3)(var1);
            case 158:
                return var0;
        }
    };
    var2.registerWebWorker = var3;
    var2.webWorkerIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1073, 1025, 1074, 1028]);