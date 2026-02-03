// modules/premium/OverridePremiumTypeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun18066: for (var _fun18066_ip = 0;;) switch (_fun18066_ip) {
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
                _fun18066_ip = 74;
                continue _fun18066;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.user;
        var2 = _closure1_slot9;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.getPremiumTypeFromRawValue;
        var1 = var1.premium_type;
        var1 = var3.bind(var4)(var1);
        var2.premiumTypeActual = var1;
        return var0;
    };
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = var4.bind(var0)(var1);
    var7 = var1.UNSELECTED_CREATED_AT_DATE;
    var _closure1_slot7 = var7;
    var9 = var1.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot8 = var9;
    var1 = {};
    var1.premiumTypeOverride = var9;
    var1.premiumTypeActual = var9;
    var1.createdAtOverride = var7;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun18071: for (var _fun18071_ip = 0;;) switch (_fun18071_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18071_ip = 69;
                        continue _fun18071
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun18071_ip = 105;
                    continue _fun18071;
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
        var0 = function arg0() {
            _fun18072: for (var _fun18072_ip = 0;;) switch (_fun18072_ip) {
                case 0:
                    var1 = arg0;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun18072_ip = 44;
                        continue _fun18072
                    }
                case 9:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot8;
                    var4.premiumTypeOverride = var2;
                    var2 = _closure1_slot9;
                    var0 = _closure1_slot7;
                    var2.createdAtOverride = var0;
                    var0 = undefined;
                    return var0;
                case 44:
                    var5 = _closure1_slot9;
                    var6 = var3 == var1;
                    var0 = undefined;
                    if (var6) {
                        _fun18072_ip = 66;
                        continue _fun18072
                    }
                case 60:
                    var0 = var1.premiumTypeActual;
                case 66:
                    var5.premiumTypeActual = var0;
                    var0 = _closure1_slot9;
                    var5 = var3 == var1;
                    var4 = undefined;
                    if (var5) {
                        _fun18072_ip = 91;
                        continue _fun18072
                    }
                case 85:
                    var4 = var1.premiumTypeOverride;
                case 91:
                    var0.premiumTypeOverride = var4;
                    var0 = var1.createdAtOverride;
                    if (!(var3 == var0)) {
                        _fun18072_ip = 123;
                        continue _fun18072
                    }
                case 107:
                    var3 = _closure1_slot9;
                    var0 = _closure1_slot7;
                    var3.createdAtOverride = var0;
                    _fun18072_ip = 170;
                    continue _fun18072;
                case 123:
                    var2 = _closure1_slot9;
                    var3 = global;
                    var4 = var3.Date;
                    var7 = var1.createdAtOverride;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var3;
                    var1 = new var8[var4](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.createdAtOverride = var1;
                    var0 = var1;
                case 170:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPremiumTypeOverride';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.premiumTypeOverride;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPremiumTypeActual';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.premiumTypeActual;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCreatedAtOverride';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.createdAtOverride;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'premiumType';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot9;
            var0 = var0.premiumTypeOverride;
            return var0;
        };
        var4.get = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'OverridePremiumTypeStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var9 = function(arg0) { // Environment: var8
        _fun18078: for (var _fun18078_ip = 0;;) switch (_fun18078_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun18078_ip = 22;
                    continue _fun18078
                }
            case 16:
                var2 = var1.createdAtOverride;
            case 22:
                if (!(var3 != var2)) {
                    _fun18078_ip = 28;
                    continue _fun18078
                }
            case 26:
                return var0;
            case 28:
                var0 = {};
                var6 = var0;
                var5 = var1;
                var1 = copyDataProperties(var6, var5);
                var2 = _closure1_slot7;
                var1 = 'createdAtOverride';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[0] = var9;
    var7.migrations = var1;
    var1 = 8;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.premiumType;
        var0 = _closure1_slot9;
        var0.premiumTypeOverride = var1;
        var0 = undefined;
        return var0;
    };
    var1.SET_PREMIUM_TYPE_OVERRIDE = var9;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.createdAt;
        var0 = _closure1_slot9;
        var0.createdAtOverride = var1;
        var0 = undefined;
        return var0;
    };
    var1.SET_CREATED_AT_OVERRIDE = var8;
    var1.CURRENT_USER_UPDATE = var3;
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/OverridePremiumTypeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1623, 1626, 566, 806, 2]);