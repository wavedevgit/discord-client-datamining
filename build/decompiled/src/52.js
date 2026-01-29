// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1358: for (var _fun1358_ip = 0;;) switch (_fun1358_ip) {
        case 0:
            var6 = global;
            var8 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var6;
            var0 = require;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var8;
            var _closure1_slot3 = var9;
            var4 = function() { // Original name: _getConstants, environment: var3
                _fun1359: for (var _fun1359_ip = 0;;) switch (_fun1359_ip) {
                    case 0:
                        var1 = _closure1_slot7;
                        if (var1) {
                            _fun1359_ip = 51;
                            continue _fun1359
                        }
                    case 10:
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 0;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.getConstants;
                        var1 = var1.bind(var2)();
                        _closure1_slot6 = var1;
                        var1 = true;
                        _closure1_slot7 = var1;
                    case 51:
                        var0 = _closure1_slot6;
                        return var0;
                }
            };
            var _closure1_slot9 = var4;
            var0 = function(arg0) { // Original name: _getViewManagerConfig, environment: var3
                _fun1360: for (var _fun1360_ip = 0;;) switch (_fun1360_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3;
                        var0 = _closure1_slot4;
                        var0 = var0[var3];
                        var5 = undefined;
                        if (!(var5 === var0)) {
                            _fun1360_ip = 149;
                            continue _fun1360
                        }
                    case 26:
                        var3 = _closure1_slot2;
                        var0 = _closure1_slot3;
                        var7 = 0;
                        var0 = var0[var7];
                        var0 = var3.bind(var5)(var0);
                        var0 = var0.getConstantsForViewManager;
                        if (!var0) {
                            _fun1360_ip = 149;
                            continue _fun1360
                        }
                    case 54: // try_start_0
                        var4 = _closure1_slot4;
                        var3 = var1;
                        var6 = _closure1_slot2;
                        var0 = _closure1_slot3;
                        var0 = var0[var7];
                        var6 = var6.bind(var5)(var0);
                        var0 = var6.getConstantsForViewManager;
                        var0 = var0.bind(var6)(var3);
                        var4[var3] = var0;
                    case 93: // try_end0
                        _fun1360_ip = 149;
                        continue _fun1360;
                    case 95: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var0 = global;
                        var6 = var0.console;
                        var3 = var6.error;
                        var4 = var1;
                        var0 = "NativeUIManager.getConstantsForViewManager('";
                        var8 = var0 + var4;
                        var0 = "') threw an exception.";
                        var0 = var8 + var0;
                        var0 = var3.bind(var6)(var0, var7);
                        var3 = _closure1_slot4;
                        var0 = null;
                        var3[var4] = var0;
                    case 149:
                        var3 = _closure1_slot4;
                        var0 = var1;
                        var0 = var3[var0];
                        if (var0) {
                            _fun1360_ip = 359;
                            continue _fun1360
                        }
                    case 166:
                        var3 = _closure1_slot0;
                        var3 = var3.nativeCallSyncHook;
                        if (var3) {
                            _fun1360_ip = 181;
                            continue _fun1360
                        }
                    case 179:
                        return var0;
                    case 181:
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var7 = 0;
                        var3 = var3[var7];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.lazilyLoadView;
                        if (!var3) {
                            _fun1360_ip = 349;
                            continue _fun1360
                        }
                    case 212:
                        var6 = _closure1_slot5;
                        var4 = var6.has;
                        var3 = var1;
                        var3 = var4.bind(var6)(var3);
                        if (var3) {
                            _fun1360_ip = 349;
                            continue _fun1360
                        }
                    case 232:
                        var6 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var4 = 1;
                        var4 = var3[var4];
                        var4 = var6.bind(var5)(var4);
                        var3 = var3[var7];
                        var3 = var6.bind(var5)(var3);
                        var3 = var3.lazilyLoadView;
                        var3 = var4.bind(var5)(var3);
                        var7 = var1;
                        var3 = var3.bind(var5)(var7);
                        var6 = _closure1_slot5;
                        var4 = var6.add;
                        var4 = var4.bind(var6)(var7);
                        var7 = null;
                        var4 = var7 != var3;
                        if (!var4) {
                            _fun1360_ip = 313;
                            continue _fun1360
                        }
                    case 303:
                        var6 = var3.viewConfig;
                        var4 = var7 != var6;
                    case 313:
                        if (!var4) {
                            _fun1360_ip = 349;
                            continue _fun1360
                        }
                    case 316:
                        var4 = _closure1_slot9;
                        var6 = var4.bind(var5)();
                        var4 = var1;
                        var3 = var3.viewConfig;
                        var6[var4] = var3;
                        var3 = function(arg0) { // Original name: lazifyViewManagerConfig, environment: var3
                            _fun1361: for (var _fun1361_ip = 0;;) switch (_fun1361_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = _closure1_slot9;
                                    var0 = undefined;
                                    var3 = var3.bind(var0)();
                                    var5 = var3[var4];
                                    var _closure3_slot0 = var5;
                                    var3 = _closure1_slot4;
                                    var3[var4] = var5;
                                    var3 = var5.Manager;
                                    if (!var3) {
                                        _fun1361_ip = 126;
                                        continue _fun1361
                                    }
                                case 43:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot3;
                                    var2 = 2;
                                    var6 = var4[var2];
                                    var9 = var3.bind(var0)(var6);
                                    var8 = var9.default;
                                    var7 = {};
                                    var6 = function() { // Original name: get, environment: var1
                                        _fun1362: for (var _fun1362_ip = 0;;) switch (_fun1362_ip) {
                                            case 0:
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot3;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2);
                                                var2 = var0.default;
                                                var0 = _closure3_slot0;
                                                var0 = var0.Manager;
                                                var4 = var2[var0];
                                                var _closure4_slot0 = var4;
                                                var0 = {};
                                                var _closure4_slot1 = var0;
                                                if (!var4) {
                                                    _fun1362_ip = 95;
                                                    continue _fun1362
                                                }
                                            case 62:
                                                var2 = global;
                                                var3 = var2.Object;
                                                var2 = var3.keys;
                                                var3 = var2.bind(var3)(var4);
                                                var2 = var3.forEach;
                                                var1 = function(arg0) { // Environment: var1
                                                    _fun1363: for (var _fun1363_ip = 0;;) switch (_fun1363_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            var1 = _closure4_slot0;
                                                            var1 = var1[var2];
                                                            var4 = 'function';
                                                            var3 = typeof var1;
                                                            if (!(var4 !== var3)) {
                                                                _fun1363_ip = 33;
                                                                continue _fun1363
                                                            }
                                                        case 25:
                                                            var0 = _closure4_slot1;
                                                            var0[var2] = var1;
                                                        case 33:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var1 = var2.bind(var3)(var1);
                                            case 95:
                                                return var0;
                                        }
                                    };
                                    var7.get = var6;
                                    var6 = 'Constants';
                                    var6 = var8.bind(var9)(var5, var6, var7);
                                    var2 = var4[var2];
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.default;
                                    var2 = {};
                                    var1 = function() { // Original name: get, environment: var1
                                        _fun1364: for (var _fun1364_ip = 0;;) switch (_fun1364_ip) {
                                            case 0:
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot3;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2);
                                                var2 = var0.default;
                                                var0 = _closure3_slot0;
                                                var0 = var0.Manager;
                                                var4 = var2[var0];
                                                var _closure4_slot0 = var4;
                                                var0 = {};
                                                var _closure4_slot1 = var0;
                                                var2 = 0;
                                                var _closure4_slot2 = var2;
                                                if (!var4) {
                                                    _fun1364_ip = 101;
                                                    continue _fun1364
                                                }
                                            case 68:
                                                var2 = global;
                                                var3 = var2.Object;
                                                var2 = var3.keys;
                                                var3 = var2.bind(var3)(var4);
                                                var2 = var3.forEach;
                                                var1 = function(arg0) { // Environment: var1
                                                    _fun1365: for (var _fun1365_ip = 0;;) switch (_fun1365_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            var0 = _closure4_slot0;
                                                            var0 = var0[var2];
                                                            var1 = 'function';
                                                            var0 = typeof var0;
                                                            if (!(var1 === var0)) {
                                                                _fun1365_ip = 47;
                                                                continue _fun1365
                                                            }
                                                        case 25:
                                                            var1 = _closure4_slot1;
                                                            var0 = _closure4_slot2;
                                                            var0 = parseFloat(var0);
                                                            var3 = var0 + 1;
                                                            _closure4_slot2 = var3;
                                                            var1[var2] = var0;
                                                        case 47:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var1 = var2.bind(var3)(var1);
                                            case 101:
                                                return var0;
                                        }
                                    };
                                    var2.get = var1;
                                    var1 = 'Commands';
                                    var1 = var3.bind(var4)(var5, var1, var2);
                                case 126:
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var5)(var4);
                    case 349:
                        var2 = _closure1_slot4;
                        var1 = var2[var1];
                        return var1;
                    case 359:
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var5 = global;
            var10 = var5.Object;
            var7 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var10)(var2, var0, var1);
            var0 = {};
            var _closure1_slot4 = var0;
            var0 = var5.Set;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var17 = var1;
            var0 = new var17[var0](var16);
            var0 = var0 instanceof Object ? var0 : var1;
            var _closure1_slot5 = var0;
            var0 = {};
            var _closure1_slot6 = var0;
            var0 = false;
            var _closure1_slot7 = var0;
            var13 = var5.Object;
            var12 = var13.assign;
            var7 = 0;
            var1 = var9[var7];
            var0 = undefined;
            var11 = var8.bind(var0)(var1);
            var10 = {};
            var1 = function(arg0, arg1, arg2, arg3) { // Original name: createView, environment: var3
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var2.bind(var0)(var1);
                var5 = var6.createView;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var0;
            };
            var10.createView = var1;
            var1 = function() { // Original name: getConstants, environment: var3
                var1 = _closure1_slot9;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var10.getConstants = var1;
            var1 = function(arg0) { // Original name: getViewManagerConfig, environment: var3
                var2 = _closure1_slot10;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var10.getViewManagerConfig = var1;
            var1 = function(arg0) { // Original name: hasViewManagerConfig, environment: var3
                var2 = _closure1_slot10;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var10.hasViewManagerConfig = var1;
            var1 = {};
            var1 = var12.bind(var13)(var1, var11, var10);
            var _closure1_slot8 = var1;
            var10 = var9[var7];
            var11 = var8.bind(var0)(var10);
            var10 = var1.getViewManagerConfig;
            var11.getViewManagerConfig = var10;
            var10 = var4.bind(var0)();
            var10 = var10.ViewManagerNames;
            if (!var10) {
                _fun1358_ip = 284;
                continue _fun1358
            }
        case 244:
            var7 = var9[var7];
            var8 = var8.bind(var0)(var7);
            var7 = var8.getConstants;
            var7 = var7.bind(var8)();
            var9 = var7.ViewManagerNames;
            var8 = var9.forEach;
            var7 = function(arg0) { // Environment: var3
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 2;
                var2 = var7[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.default;
                var2 = _closure1_slot2;
                var1 = 0;
                var1 = var7[var1];
                var2 = var2.bind(var0)(var1);
                var1 = {};
                var6 = function() { // Original name: get, environment: var6
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var0 = 1;
                    var0 = var4[var0];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var0);
                    var0 = 0;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.getConstantsForViewManager;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.get = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var0;
            };
            var7 = var8.bind(var9)(var7);
        case 284:
            var6 = var6.nativeCallSyncHook;
            if (var6) {
                _fun1358_ip = 328;
                continue _fun1358
            }
        case 293:
            var6 = var5.Object;
            var5 = var6.keys;
            var4 = var4.bind(var0)();
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var3
                _fun1372: for (var _fun1372_ip = 0;;) switch (_fun1372_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 4;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = var2.default;
                        var2 = var3.includes;
                        var2 = var2.bind(var3)(var5);
                        if (var2) {
                            _fun1372_ip = 141;
                            continue _fun1372
                        }
                    case 52:
                        var2 = _closure1_slot4;
                        var2 = var2[var5];
                        if (var2) {
                            _fun1372_ip = 83;
                            continue _fun1372
                        }
                    case 63:
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var0)();
                        var2 = var2[var5];
                        var3[var5] = var2;
                    case 83:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var2 = 2;
                        var2 = var7[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.default;
                        var2 = _closure1_slot2;
                        var1 = 0;
                        var1 = var7[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var6 = function() { // Original name: get, environment: var6
                            var0 = global;
                            var3 = var0.console;
                            var1 = var3.warn;
                            var2 = _closure2_slot0;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var11 = "Accessing view manager configs directly off UIManager via UIManager['";
                            var9 = "'] is no longer supported. Use UIManager.getViewManagerConfig('";
                            var7 = "') instead.";
                            var10 = var2;
                            var8 = var2;
                            var0 = var11[var6](var10, var9, var8, var7, var6);
                            var0 = var1.bind(var3)(var0);
                            var1 = _closure1_slot8;
                            var0 = var1.getViewManagerConfig;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                        };
                        var1.get = var6;
                        var1 = var3.bind(var4)(var2, var5, var1);
                    case 141:
                        return var0;
                }
            };
            var3 = var4.bind(var5)(var3);
        case 328:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [53, 48, 50, 56, 72]);