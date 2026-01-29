// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1380: for (var _fun1380_ip = 0;;) switch (_fun1380_ip) {
        case 0:
            var3 = global;
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var8;
            var1 = function(arg0, arg1) { // Original name: genModule, environment: var4
                _fun1381: for (var _fun1381_ip = 0;;) switch (_fun1381_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        if (var4) {
                            _fun1381_ip = 19;
                            continue _fun1381
                        }
                    case 15:
                        var1 = null;
                        return var1;
                    case 19:
                        var3 = _closure1_slot3;
                        var7 = undefined;
                        var2 = 5;
                        var8 = var3.bind(var7)(var4, var2);
                        var2 = 0;
                        var2 = var8[var2];
                        var4 = 1;
                        var6 = var8[var4];
                        var _closure2_slot1 = var6;
                        var3 = 2;
                        var5 = var8[var3];
                        var3 = 3;
                        var3 = var8[var3];
                        var _closure2_slot2 = var3;
                        var3 = 4;
                        var3 = var8[var3];
                        var _closure2_slot3 = var3;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var4 = var3.bind(var7)(var1);
                        var3 = var2.startsWith;
                        var1 = 'RCT';
                        var1 = var3.bind(var2)(var1);
                        var3 = !var1;
                        if (!var3) {
                            _fun1381_ip = 143;
                            continue _fun1381
                        }
                    case 123:
                        var8 = var2.startsWith;
                        var1 = 'RK';
                        var1 = var8.bind(var2)(var1);
                        var3 = !var1;
                    case 143:
                        var1 = "Module name prefixes should've been stripped by the native side but wasn't for ";
                        var1 = var1 + var2;
                        var1 = var4.bind(var7)(var3, var1);
                        if (var6) {
                            _fun1381_ip = 173;
                            continue _fun1381
                        }
                    case 162:
                        if (var5) {
                            _fun1381_ip = 173;
                            continue _fun1381
                        }
                    case 165:
                        var1 = {};
                        var1.name = var2;
                        return var1;
                    case 173:
                        var1 = {};
                        var _closure2_slot4 = var1;
                        if (!var5) {
                            _fun1381_ip = 197;
                            continue _fun1381
                        }
                    case 182:
                        var4 = var5.forEach;
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun1382: for (var _fun1382_ip = 0;;) switch (_fun1382_ip) {
                                case 0:
                                    var5 = arg1;
                                    var2 = _closure2_slot2;
                                    if (!var2) {
                                        _fun1382_ip = 32;
                                        continue _fun1382
                                    }
                                case 13:
                                    var4 = _closure1_slot7;
                                    var3 = _closure2_slot2;
                                    var0 = undefined;
                                    var2 = var4.bind(var0)(var3, var5);
                                case 32:
                                    if (var2) {
                                        _fun1382_ip = 37;
                                        continue _fun1382
                                    }
                                case 35:
                                    var2 = false;
                                case 37:
                                    var3 = _closure2_slot3;
                                    if (!var3) {
                                        _fun1382_ip = 63;
                                        continue _fun1382
                                    }
                                case 44:
                                    var6 = _closure1_slot7;
                                    var4 = _closure2_slot3;
                                    var0 = undefined;
                                    var3 = var6.bind(var0)(var4, var5);
                                case 63:
                                    if (var3) {
                                        _fun1382_ip = 68;
                                        continue _fun1382
                                    }
                                case 66:
                                    var3 = false;
                                case 68:
                                    var6 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var0 = 1;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var7 = var6.bind(var0)(var4);
                                    var6 = !var2;
                                    if (var6) {
                                        _fun1382_ip = 102;
                                        continue _fun1382
                                    }
                                case 99:
                                    var6 = !var3;
                                case 102:
                                    var4 = 'Cannot have a method that is both async and a sync hook';
                                    var4 = var7.bind(var0)(var6, var4);
                                    var4 = 'promise';
                                    if (var2) {
                                        _fun1382_ip = 135;
                                        continue _fun1382
                                    }
                                case 121:
                                    var2 = 'async';
                                    if (!var3) {
                                        _fun1382_ip = 132;
                                        continue _fun1382
                                    }
                                case 128:
                                    var2 = 'sync';
                                case 132:
                                    var4 = var2;
                                case 135:
                                    var3 = _closure2_slot4;
                                    var2 = _closure2_slot0;
                                    var1 = function(arg0, arg1, arg2) { // Original name: genMethod, environment: var1
                                        _fun1383: for (var _fun1383_ip = 0;;) switch (_fun1383_ip) {
                                            case 0:
                                                var1 = arg2;
                                                var0 = arg0;
                                                var _closure4_slot0 = var0;
                                                var0 = arg1;
                                                var _closure4_slot1 = var0;
                                                var _closure4_slot2 = var1;
                                                var0 = 'promise';
                                                if (!(var0 !== var1)) {
                                                    _fun1383_ip = 38;
                                                    continue _fun1383
                                                }
                                            case 31:
                                                var0 = function() { // Original name: nonPromiseMethodWrapper, environment: var2
                                                    _fun1388: for (var _fun1388_ip = 0;;) switch (_fun1388_ip) {
                                                        case 0:
                                                            var3 = undefined;
                                                            var5 = undefined;
                                                            var1 = arguments.length;
                                                            var0 = global;
                                                            var0 = var0.Array;
                                                            var2 = var0.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var0
                                                                }
                                                            });
                                                            var16 = var2;
                                                            var15 = var1;
                                                            var0 = new var16[var0](var15, var14);
                                                            var4 = var0 instanceof Object ? var0 : var2;
                                                            var2 = 0;
                                                            var6 = var2 < var1;
                                                            var0 = 0;
                                                            if (!var6) {
                                                                _fun1388_ip = 64;
                                                                continue _fun1388
                                                            }
                                                        case 49:
                                                            var6 = arguments[var0];
                                                            var4[var0] = var6;
                                                            var0 = var0 + 1;
                                                            if (var0 < var1) {
                                                                _fun1388_ip = 49;
                                                                continue _fun1388
                                                            }
                                                        case 64:
                                                            var0 = var4.length;
                                                            var0 = var0 > var2;
                                                            var7 = null;
                                                            if (!var0) {
                                                                _fun1388_ip = 94;
                                                                continue _fun1388
                                                            }
                                                        case 78:
                                                            var1 = var4.length;
                                                            var0 = 1;
                                                            var0 = var1 - var0;
                                                            var7 = var4[var0];
                                                        case 94:
                                                            var0 = var4.length;
                                                            var10 = 1;
                                                            var0 = var0 > var10;
                                                            var1 = null;
                                                            if (!var0) {
                                                                _fun1388_ip = 127;
                                                                continue _fun1388
                                                            }
                                                        case 111:
                                                            var5 = var4.length;
                                                            var0 = 2;
                                                            var0 = var5 - var0;
                                                            var1 = var4[var0];
                                                        case 127:
                                                            var5 = 'function';
                                                            var0 = typeof var7;
                                                            var8 = var5 === var0;
                                                            var0 = typeof var1;
                                                            var0 = var5 === var0;
                                                            if (!var0) {
                                                                _fun1388_ip = 180;
                                                                continue _fun1388
                                                            }
                                                        case 148:
                                                            var9 = _closure1_slot1;
                                                            var5 = _closure1_slot2;
                                                            var5 = var5[var10];
                                                            var9 = var9.bind(var3)(var5);
                                                            var5 = 'Cannot have a non-function arg after a function arg.';
                                                            var5 = var9.bind(var3)(var8, var5);
                                                        case 180:
                                                            var5 = null;
                                                            if (!var8) {
                                                                _fun1388_ip = 188;
                                                                continue _fun1388
                                                            }
                                                        case 185:
                                                            var5 = var7;
                                                        case 188:
                                                            var6 = null;
                                                            if (!var0) {
                                                                _fun1388_ip = 196;
                                                                continue _fun1388
                                                            }
                                                        case 193:
                                                            var6 = var1;
                                                        case 196:
                                                            var1 = var4.slice;
                                                            var7 = var4.length;
                                                            var0 = var8 + var0;
                                                            var0 = var7 - var0;
                                                            var4 = var1.bind(var4)(var2, var0);
                                                            var2 = _closure4_slot2;
                                                            var1 = 'sync';
                                                            if (!(var1 !== var2)) {
                                                                _fun1388_ip = 295;
                                                                continue _fun1388
                                                            }
                                                        case 235:
                                                            var2 = _closure1_slot1;
                                                            var7 = _closure1_slot2;
                                                            var1 = 2;
                                                            var1 = var7[var1];
                                                            var1 = var2.bind(var3)(var1);
                                                            var8 = var1.default;
                                                            var7 = var8.enqueueNativeCall;
                                                            var15 = _closure4_slot0;
                                                            var14 = _closure4_slot1;
                                                            var16 = var8;
                                                            var13 = var4;
                                                            var12 = var6;
                                                            var11 = var5;
                                                            var1 = var16[var7](var15, var14, var13, var12, var11, var10);
                                                            return var3;
                                                        case 295:
                                                            var2 = _closure1_slot1;
                                                            var7 = _closure1_slot2;
                                                            var1 = 2;
                                                            var1 = var7[var1];
                                                            var1 = var2.bind(var3)(var1);
                                                            var3 = var1.default;
                                                            var2 = var3.callNativeSyncHook;
                                                            var15 = _closure4_slot0;
                                                            var14 = _closure4_slot1;
                                                            var16 = var3;
                                                            var13 = var4;
                                                            var12 = var6;
                                                            var11 = var5;
                                                            var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                                                            return var0;
                                                    }
                                                };
                                                _fun1383_ip = 43;
                                                continue _fun1383;
                                            case 38:
                                                var0 = function() { // Original name: promiseMethodWrapper, environment: var2
                                                    _fun1384: for (var _fun1384_ip = 0;;) switch (_fun1384_ip) {
                                                        case 0:
                                                            var5 = undefined;
                                                            var4 = arguments.length;
                                                            var1 = global;
                                                            var2 = var1.Array;
                                                            var3 = var2.prototype;
                                                            var3 = Object.create(var3, {
                                                                constructor: {
                                                                    value: var2
                                                                }
                                                            });
                                                            var8 = var3;
                                                            var7 = var4;
                                                            var2 = new var8[var2](var7, var6);
                                                            var3 = var2 instanceof Object ? var2 : var3;
                                                            var _closure5_slot0 = var3;
                                                            var2 = 0;
                                                            var6 = var2 < var4;
                                                            if (!var6) {
                                                                _fun1384_ip = 66;
                                                                continue _fun1384
                                                            }
                                                        case 51:
                                                            var6 = arguments[var2];
                                                            var3[var2] = var6;
                                                            var2 = var2 + 1;
                                                            if (var2 < var4) {
                                                                _fun1384_ip = 51;
                                                                continue _fun1384
                                                            }
                                                        case 66:
                                                            var2 = var1.Error;
                                                            var3 = var2.prototype;
                                                            var3 = Object.create(var3, {
                                                                constructor: {
                                                                    value: var2
                                                                }
                                                            });
                                                            var8 = var3;
                                                            var2 = new var8[var2](var7);
                                                            var2 = var2 instanceof Object ? var2 : var3;
                                                            var _closure5_slot1 = var2;
                                                            var2 = var1.Promise;
                                                            var1 = var2.prototype;
                                                            var1 = Object.create(var1, {
                                                                constructor: {
                                                                    value: var2
                                                                }
                                                            });
                                                            var7 = function(arg0, arg1) { // Environment: var0
                                                                var0 = arg0;
                                                                var _closure6_slot0 = var0;
                                                                var0 = arg1;
                                                                var _closure6_slot1 = var0;
                                                                var3 = _closure1_slot1;
                                                                var2 = _closure1_slot2;
                                                                var0 = 2;
                                                                var2 = var2[var0];
                                                                var0 = undefined;
                                                                var2 = var3.bind(var0)(var2);
                                                                var7 = var2.default;
                                                                var6 = var7.enqueueNativeCall;
                                                                var12 = _closure4_slot0;
                                                                var11 = _closure4_slot1;
                                                                var10 = _closure5_slot0;
                                                                var9 = function(arg0) { // Environment: var1
                                                                    var2 = _closure6_slot0;
                                                                    var1 = undefined;
                                                                    var0 = arg0;
                                                                    var0 = var2.bind(var1)(var0);
                                                                    return var0;
                                                                };
                                                                var8 = function(arg0) { // Environment: var1
                                                                    _fun1387: for (var _fun1387_ip = 0;;) switch (_fun1387_ip) {
                                                                        case 0:
                                                                            var4 = arg0;
                                                                            var2 = _closure6_slot1;
                                                                            var3 = _closure5_slot1;
                                                                            var0 = global;
                                                                            var1 = var0.Object;
                                                                            var0 = var1.assign;
                                                                            if (var4) {
                                                                                _fun1387_ip = 35;
                                                                                continue _fun1387
                                                                            }
                                                                        case 33:
                                                                            var4 = {};
                                                                        case 35:
                                                                            var1 = var0.bind(var1)(var3, var4);
                                                                            var0 = undefined;
                                                                            var0 = var2.bind(var0)(var1);
                                                                            return var0;
                                                                    }
                                                                };
                                                                var13 = var7;
                                                                var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                                                                return var0;
                                                            };
                                                            var8 = var1;
                                                            var0 = new var8[var2](var7, var6);
                                                            var0 = var0 instanceof Object ? var0 : var1;
                                                            return var0;
                                                    }
                                                };
                                            case 43:
                                                var0.type = var1;
                                                return var0;
                                        }
                                    };
                                    var2 = var1.bind(var0)(var2, var5, var4);
                                    var1 = arg0;
                                    var3[var1] = var2;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                    case 197:
                        var3 = global;
                        var5 = var3.Object;
                        var4 = var5.assign;
                        var4 = var4.bind(var5)(var1, var6);
                        var5 = var1.getConstants;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun1381_ip = 285;
                            continue _fun1381
                        }
                    case 228:
                        var5 = var3.console;
                        var4 = var5.warn;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var13 = "Unable to define method 'getConstants()' on NativeModule '";
                        var11 = "'. NativeModule '";
                        var9 = "' already has a constant or method called 'getConstants'. Please remove it.";
                        var12 = var2;
                        var10 = var2;
                        var3 = var13[var8](var12, var11, var10, var9, var8);
                        var3 = var4.bind(var5)(var3);
                        _fun1381_ip = 296;
                        continue _fun1381;
                    case 285:
                        var0 = function() { // Environment: var0
                            _fun1389: for (var _fun1389_ip = 0;;) switch (_fun1389_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    if (var0) {
                                        _fun1389_ip = 31;
                                        continue _fun1389
                                    }
                                case 10:
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.freeze;
                                    var1 = {};
                                    var0 = var2.bind(var3)(var1);
                                case 31:
                                    return var0;
                            }
                        };
                        var1.getConstants = var0;
                    case 296:
                        var0 = {};
                        var0.name = var2;
                        var0.module = var1;
                        return var0;
                }
            };
            var _closure1_slot6 = var1;
            var0 = function(arg0, arg1) { // Original name: arrayContains, environment: var4
                var2 = arg0;
                var1 = var2.indexOf;
                var0 = arg1;
                var1 = var1.bind(var2)(var0);
                var0 = -1;
                var0 = var0 !== var1;
                return var0;
            };
            var _closure1_slot7 = var0;
            var0 = global;
            var9 = var0.Object;
            var6 = var9.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var9)(var2, var0, var5);
            var0 = 0;
            var6 = var8[var0];
            var5 = arg2;
            var0 = undefined;
            var5 = var5.bind(var0)(var6);
            var _closure1_slot3 = var5;
            var3.__fbGenNativeModule = var1;
            var1 = {};
            var _closure1_slot4 = var1;
            var5 = var3.nativeModuleProxy;
            if (var5) {
                _fun1380_ip = 198;
                continue _fun1380
            }
        case 117:
            var5 = var3.__fbBatchedBridgeConfig;
            var6 = 1;
            var6 = var8[var6];
            var9 = var7.bind(var0)(var6);
            var6 = '__fbBatchedBridgeConfig is not set, cannot invoke native modules';
            var6 = var9.bind(var0)(var5, var6);
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var6 = var6.default;
            var _closure1_slot5 = var6;
            var7 = var5.remoteModuleConfig;
            if (var7) {
                _fun1380_ip = 181;
                continue _fun1380
            }
        case 177:
            var7 = new Array(0);
        case 181:
            var6 = var7.forEach;
            var5 = function(arg0, arg1) { // Environment: var4
                _fun1391: for (var _fun1391_ip = 0;;) switch (_fun1391_ip) {
                    case 0:
                        var4 = arg1;
                        var _closure2_slot0 = var4;
                        var3 = _closure1_slot6;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var1, var4);
                        var _closure2_slot1 = var1;
                        if (!var1) {
                            _fun1391_ip = 95;
                            continue _fun1391
                        }
                    case 34:
                        var3 = var1.module;
                        if (var3) {
                            _fun1391_ip = 76;
                            continue _fun1391
                        }
                    case 43:
                        var6 = _closure1_slot5;
                        var5 = _closure1_slot4;
                        var4 = var1.name;
                        var3 = {};
                        var7 = function() { // Original name: get, environment: var7
                            _fun1392: for (var _fun1392_ip = 0;;) switch (_fun1392_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var5 = var1.name;
                                    var3 = _closure2_slot0;
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 1;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var7 = var4.bind(var2)(var1);
                                    var4 = _closure1_slot0;
                                    var6 = var4.nativeRequireModuleConfig;
                                    var1 = "Can't lazily create module without nativeRequireModuleConfig";
                                    var1 = var7.bind(var2)(var6, var1);
                                    var1 = _closure1_slot6;
                                    var0 = var4.nativeRequireModuleConfig;
                                    var0 = var0.bind(var4)(var5);
                                    var1 = var1.bind(var2)(var0, var3);
                                    var0 = var1;
                                    if (!var0) {
                                        _fun1392_ip = 96;
                                        continue _fun1392
                                    }
                                case 90:
                                    var0 = var1.module;
                                case 96:
                                    return var0;
                            }
                        };
                        var3.get = var7;
                        var3 = var6.bind(var0)(var5, var4, var3);
                        _fun1391_ip = 95;
                        continue _fun1391;
                    case 76:
                        var3 = _closure1_slot4;
                        var2 = var1.name;
                        var1 = var1.module;
                        var3[var2] = var1;
                    case 95:
                        return var0;
                }
            };
            var5 = var6.bind(var7)(var5);
            _fun1380_ip = 211;
            continue _fun1380;
        case 198:
            var3 = var3.nativeModuleProxy;
            _closure1_slot4 = var3;
            var1 = var3;
        case 211:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 44, 63, 50]);