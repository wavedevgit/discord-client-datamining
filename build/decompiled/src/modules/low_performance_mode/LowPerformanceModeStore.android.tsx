// modules/low_performance_mode/LowPerformanceModeStore.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun14147: for (var _fun14147_ip = 0;;) switch (_fun14147_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun14147_ip = 74;
                continue _fun14147;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {
        'enabled': false,
        'optedOut': false
    };
    var _closure1_slot8 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun14151: for (var _fun14151_ip = 0;;) switch (_fun14151_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot1;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun14151_ip = 69;
                        continue _fun14151
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun14151_ip = 105;
                    continue _fun14151;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun14152: for (var _fun14152_ip = 0;;) switch (_fun14152_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var3 = {};
                    var1 = null;
                    var4 = var1 == var5;
                    var0 = undefined;
                    var6 = undefined;
                    if (var4) {
                        _fun14152_ip = 26;
                        continue _fun14152
                    }
                case 21:
                    var6 = var5.enabled;
                case 26:
                    var4 = var1 != var6;
                    if (!var4) {
                        _fun14152_ip = 36;
                        continue _fun14152
                    }
                case 33:
                    var4 = var6;
                case 36:
                    var3.enabled = var4;
                    var6 = var1 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun14152_ip = 55;
                        continue _fun14152
                    }
                case 49:
                    var4 = var5.optedOut;
                case 55:
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun14152_ip = 65;
                        continue _fun14152
                    }
                case 62:
                    var1 = var4;
                case 65:
                    var3.optedOut = var1;
                    _closure1_slot8 = var3;
                    var1 = var2.evaluate;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var7 = 'getState';
        var4.key = var7;
        var7 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'optedOut';
        var4.key = var7;
        var7 = function() {
            var0 = _closure1_slot8;
            var0 = var0.optedOut;
            return var0;
        };
        var4.get = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'enabled';
        var4.key = var7;
        var7 = function() {
            var0 = _closure1_slot8;
            var0 = var0.enabled;
            return var0;
        };
        var4.get = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'visible';
        var4.key = var7;
        var7 = function() {
            _fun14156: for (var _fun14156_ip = 0;;) switch (_fun14156_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var0 = var0.enabled;
                    if (var0) {
                        _fun14156_ip = 25;
                        continue _fun14156
                    }
                case 15:
                    var1 = _closure1_slot8;
                    var0 = var1.optedOut;
                case 25:
                    return var0;
            }
        };
        var4.get = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'active';
        var4.key = var7;
        var7 = function() {
            var0 = _closure1_slot8;
            var0 = var0.enabled;
            return var0;
        };
        var4.get = var7;
        var0[5] = var4;
        var4 = {};
        var7 = 'evaluate';
        var4.key = var7;
        var7 = _closure1_slot2;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun14159: for (var _fun14159_ip = 0;;) switch (_fun14159_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun14159_ip = 344;
                            continue _fun14159
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var6 = var1.LowPerformanceModeExperiment;
                        var3 = var6.getConfig;
                        var1 = {};
                        var7 = 'LowPerformanceModeStore.evaluate';
                        var1.location = var7;
                        var1 = var3.bind(var6)(var1);
                        var1 = var1.enabled;
                        if (var1) {
                            _fun14159_ip = 132;
                            continue _fun14159
                        }
                    case 75:
                        var1 = _closure1_slot8;
                        var1 = var1.enabled;
                        if (var1) {
                            _fun14159_ip = 97;
                            continue _fun14159
                        }
                    case 87:
                        var3 = _closure1_slot8;
                        var1 = var3.optedOut;
                    case 97:
                        if (!var1) {
                            _fun14159_ip = 338;
                            continue _fun14159
                        }
                    case 103:
                        var1 = {
                            'enabled': false,
                            'optedOut': false
                        };
                        _closure1_slot8 = var1;
                        var1 = var4.emitChange;
                        var1 = var1.bind(var4)();
                        _fun14159_ip = 338;
                        continue _fun14159;
                    case 132:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var3 = 8;
                        var3 = var1[var3];
                        var6 = var6.bind(var2)(var3);
                        var3 = 7;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var6.bind(var2)(var3, var1);
                        SaveGenerator(address = 174);
                    case 172:
                        return var1;
                    case 174:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun14159_ip = 341;
                            continue _fun14159
                        }
                    case 183:
                        var6 = var1.isLowPerformanceDevice;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 9;
                        var3 = var8[var3];
                        var7 = var7.bind(var2)(var3);
                        var3 = var7.getDevice;
                        var3 = var3.bind(var7)();
                        var6 = var6.bind(var2)(var3);
                        var3 = _closure1_slot8;
                        if (var6) {
                            _fun14159_ip = 279;
                            continue _fun14159
                        }
                    case 231:
                        var6 = var3.enabled;
                        if (!var6) {
                            _fun14159_ip = 338;
                            continue _fun14159
                        }
                    case 239:
                        var6 = {};
                        var9 = _closure1_slot8;
                        var10 = var6;
                        var7 = copyDataProperties(var10, var9);
                        var8 = false;
                        var7 = 'enabled';
                        var6[var7] = var8;
                        _closure1_slot8 = var6;
                        var6 = var4.emitChange;
                        var6 = var6.bind(var4)();
                        _fun14159_ip = 338;
                        continue _fun14159;
                    case 279:
                        var3 = var3.optedOut;
                        if (var3) {
                            _fun14159_ip = 297;
                            continue _fun14159
                        }
                    case 288:
                        var6 = _closure1_slot8;
                        var3 = var6.enabled;
                    case 297:
                        if (var3) {
                            _fun14159_ip = 338;
                            continue _fun14159
                        }
                    case 300:
                        var3 = {};
                        var9 = _closure1_slot8;
                        var10 = var3;
                        var6 = copyDataProperties(var10, var9);
                        var7 = true;
                        var6 = 'enabled';
                        var3[var6] = var7;
                        _closure1_slot8 = var3;
                        var3 = var4.emitChange;
                        var3 = var3.bind(var4)();
                    case 338:
                        return var2;
                    case 341:
                        return var1;
                    case 344:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LowPerformanceModeStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun14161: for (var _fun14161_ip = 0;;) switch (_fun14161_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.enabled;
                if (var3) {
                    _fun14161_ip = 77;
                    continue _fun14161
                }
            case 11:
                var0 = _closure1_slot8;
                var0 = var0.enabled;
                if (!var0) {
                    _fun14161_ip = 77;
                    continue _fun14161
                }
            case 26:
                var0 = _closure1_slot8;
                var0 = var0.optedOut;
                if (var0) {
                    _fun14161_ip = 77;
                    continue _fun14161
                }
            case 39:
                var0 = {};
                var4 = _closure1_slot8;
                var5 = var0;
                var1 = copyDataProperties(var5, var4);
                var1 = 'enabled';
                var0[var1] = var3;
                var2 = true;
                var1 = 'optedOut';
                var0[var1] = var2;
                var1 = var0;
                _fun14161_ip = 105;
                continue _fun14161;
            case 77:
                var0 = {};
                var4 = _closure1_slot8;
                var5 = var0;
                var2 = copyDataProperties(var5, var4);
                var2 = 'enabled';
                var0[var2] = var3;
                var1 = var0;
            case 105:
                _closure1_slot8 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.LOW_PERFORMANCE_MODE_SET_ENABLED = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/low_performance_mode/LowPerformanceModeStore.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1300, 1306, 1307, 1309, 566, 806, 2]);