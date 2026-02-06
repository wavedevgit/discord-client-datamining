// modules/age_assurance/AgeVerificationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun53122: for (var _fun53122_ip = 0;;) switch (_fun53122_ip) {
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
                _fun53122_ip = 74;
                continue _fun53122;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun53125: for (var _fun53125_ip = 0;;) switch (_fun53125_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var0 = null;
                var2 = var0 == var1;
                var3 = undefined;
                if (var2) {
                    _fun53125_ip = 32;
                    continue _fun53125
                }
            case 27:
                var3 = var1.id;
            case 32:
                var1 = var0 == var3;
                var0 = null;
                if (var1) {
                    _fun53125_ip = 65;
                    continue _fun53125
                }
            case 41:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'AgeVerificationStore_';
                var0 = var2.bind(var1)(var3);
            case 65:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var0 = 'unchecked';
        _closure1_slot11 = var0;
        var0 = null;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun53127: for (var _fun53127_ip = 0;;) switch (_fun53127_ip) {
            case 0:
                var1 = _closure1_slot14;
                var0 = undefined;
                var4 = var1.bind(var0)();
                var1 = null;
                if (!(var1 != var4)) {
                    _fun53127_ip = 76;
                    continue _fun53127
                }
            case 19:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = {};
                var6 = _closure1_slot11;
                var1.reactiveCheckStatus = var6;
                var5 = _closure1_slot12;
                var1.reactiveCheckMissAt = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 76:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        _fun53128: for (var _fun53128_ip = 0;;) switch (_fun53128_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = undefined;
                var4 = var2.bind(var0)();
                var5 = null;
                if (!(var5 == var4)) {
                    _fun53128_ip = 32;
                    continue _fun53128
                }
            case 19:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                _fun53128_ip = 201;
                continue _fun53128;
            case 32:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.Storage;
                var2 = var3.get;
                var2 = var2.bind(var3)(var4);
                if (!(var5 != var2)) {
                    _fun53128_ip = 83;
                    continue _fun53128
                }
            case 72:
                var4 = 'object';
                var3 = typeof var2;
                if (!(var4 !== var3)) {
                    _fun53128_ip = 93;
                    continue _fun53128
                }
            case 83:
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                _fun53128_ip = 201;
                continue _fun53128;
            case 93:
                var4 = var2.reactiveCheckStatus;
                var6 = var5 != var4;
                var3 = 'unchecked';
                if (!var6) {
                    _fun53128_ip = 115;
                    continue _fun53128
                }
            case 112:
                var3 = var4;
            case 115:
                var4 = var2.reactiveCheckMissAt;
                var6 = var5 != var4;
                var2 = null;
                if (!var6) {
                    _fun53128_ip = 133;
                    continue _fun53128
                }
            case 130:
                var2 = var4;
            case 133:
                var4 = 'miss';
                var4 = var4 === var3;
                if (!var4) {
                    _fun53128_ip = 148;
                    continue _fun53128
                }
            case 144:
                var4 = var5 != var2;
            case 148:
                if (!var4) {
                    _fun53128_ip = 180;
                    continue _fun53128
                }
            case 151:
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var6 = var5 - var2;
                var5 = _closure1_slot8;
                var4 = var6 >= var5;
            case 180:
                if (var4) {
                    _fun53128_ip = 193;
                    continue _fun53128
                }
            case 183:
                _closure1_slot11 = var3;
                _closure1_slot12 = var2;
                _fun53128_ip = 201;
                continue _fun53128;
            case 193:
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)();
            case 201:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun53129: for (var _fun53129_ip = 0;;) switch (_fun53129_ip) {
            case 0:
                var2 = _closure1_slot11;
                var0 = 'miss';
                var0 = var0 === var2;
                if (!var0) {
                    _fun53129_ip = 28;
                    continue _fun53129
                }
            case 18:
                var3 = _closure1_slot12;
                var2 = null;
                var0 = var2 != var3;
            case 28:
                if (!var0) {
                    _fun53129_ip = 64;
                    continue _fun53129
                }
            case 31:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot12;
                var2 = var3 - var2;
                var1 = _closure1_slot8;
                var0 = var2 < var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var1 = 86400000;
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var7 = false;
    var _closure1_slot10 = var7;
    var7 = 'unchecked';
    var _closure1_slot11 = var7;
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53131: for (var _fun53131_ip = 0;;) switch (_fun53131_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53131_ip = 69;
                        continue _fun53131
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53131_ip = 105;
                    continue _fun53131;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'loading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'methods';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getReactiveCheckStatus';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getReactiveCheckMiss';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getReactiveCheckPassed';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var0 = 'passed';
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'shouldCallReactiveCheck';
        var4.key = var6;
        var5 = function() {
            _fun53138: for (var _fun53138_ip = 0;;) switch (_fun53138_ip) {
                case 0:
                    var1 = _closure1_slot11;
                    var0 = 'passed';
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun53138_ip = 51;
                        continue _fun53138
                    }
                case 20:
                    var3 = _closure1_slot11;
                    var1 = 'suppress';
                    var1 = var1 !== var3;
                    if (!var1) {
                        _fun53138_ip = 48;
                        continue _fun53138
                    }
                case 35:
                    var3 = _closure1_slot18;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var1 = !var2;
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AgeVerificationStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = true;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AGE_VERIFICATION_METHODS_LOAD_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.methods;
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AGE_VERIFICATION_METHODS_LOAD_SUCCESS = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AGE_VERIFICATION_METHODS_LOAD_FAILURE = var8;
    var8 = function() {
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun53143: for (var _fun53143_ip = 0;;) switch (_fun53143_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.status;
                _closure1_slot11 = var3;
                var2 = 'miss';
                var1 = null;
                if (!(var2 === var3)) {
                    _fun53143_ip = 42;
                    continue _fun53143
                }
            case 25:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var1 = var2.bind(var3)();
            case 42:
                _closure1_slot12 = var1;
                var1 = _closure1_slot16;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.AGE_VERIFICATION_CHECK_RESULT_SET = var8;
    var3 = function() {
        var1 = 'suppress';
        _closure1_slot11 = var1;
        var1 = null;
        _closure1_slot12 = var1;
        var1 = _closure1_slot16;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.AGE_VERIFICATION_RESET = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/AgeVerificationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 587, 566, 806, 2]);