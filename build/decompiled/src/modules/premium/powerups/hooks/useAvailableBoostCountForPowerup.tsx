// modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildPowerupType;
    var _closure1_slot6 = var6;
    var6 = var3.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot7 = var6;
    var3 = var3.LEVEL_SKU_ID_TO_BOOSTING_TIER;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useAvailableBoostCountForPowerup, environment: var1
        _fun102463: for (var _fun102463_ip = 0;;) switch (_fun102463_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var8;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 4;
                var1 = var9[var0];
                var7 = undefined;
                var11 = var4.bind(var7)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var10.bind(var11)(var6, var1);
                var0 = var9[var0];
                var10 = var4.bind(var7)(var0);
                var6 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var10)(var4, var0);
                var _closure2_slot2 = var0;
                var6 = _closure1_slot1;
                var4 = 5;
                var4 = var9[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.bind(var7)(var5);
                var6 = var4.spent;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var0;
                var0 = function() { // Environment: var2
                    _fun102466: for (var _fun102466_ip = 0;;) switch (_fun102466_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun102466_ip = 187;
                                continue _fun102466
                            }
                        case 18:
                            var0 = _closure2_slot1;
                            var5 = var0.type;
                            var4 = _closure1_slot6;
                            var4 = var4.LEVEL;
                            if (!(var5 === var4)) {
                                _fun102466_ip = 187;
                                continue _fun102466
                            }
                        case 47:
                            var4 = _closure2_slot2;
                            if (!(var3 != var4)) {
                                _fun102466_ip = 187;
                                continue _fun102466
                            }
                        case 58:
                            var4 = _closure1_slot8;
                            var2 = _closure2_slot1;
                            var2 = var2.skuId;
                            var2 = var4[var2];
                            var _closure3_slot0 = var2;
                            if (!(var3 != var2)) {
                                _fun102466_ip = 181;
                                continue _fun102466
                            }
                        case 84:
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.entries;
                            var2 = _closure1_slot7;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var1
                                _fun102467: for (var _fun102467_ip = 0;;) switch (_fun102467_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = var4[Symbol.iterator];
                                        var4 = var0().next;
                                        var1 = var4().value;
                                        var2 = var0;
                                        var6 = undefined;
                                        var3 = var2 === var6;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun102467_ip = 27;
                                            continue _fun102467
                                        }
                                    case 24:
                                        var2 = var1;
                                    case 27:
                                        var1 = undefined;
                                        if (var3) {
                                            _fun102467_ip = 57;
                                            continue _fun102467
                                        }
                                    case 32:
                                        var5 = var4().value;
                                        var4 = var0;
                                        var4 = var4 === var6;
                                        var1 = undefined;
                                        var3 = var4;
                                        if (var4) {
                                            _fun102467_ip = 57;
                                            continue _fun102467
                                        }
                                    case 51:
                                        var1 = var5;
                                        var3 = var4;
                                    case 57:
                                        if (var3) {
                                            _fun102467_ip = 63;
                                            continue _fun102467
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = _closure3_slot0;
                                        var0 = var1 === var0;
                                        if (!var0) {
                                            _fun102467_ip = 100;
                                            continue _fun102467
                                        }
                                    case 77:
                                        var1 = _closure2_slot2;
                                        var1 = var1.unlockedPowerups;
                                        var2 = var1[var2];
                                        var1 = null;
                                        var0 = var1 != var2;
                                    case 100:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun102468: for (var _fun102468_ip = 0;;) switch (_fun102468_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1[Symbol.iterator];
                                        var1 = var0().next;
                                        var3 = var1().value;
                                        var2 = var0;
                                        var1 = undefined;
                                        var2 = var2 === var1;
                                        if (var2) {
                                            _fun102468_ip = 25;
                                            continue _fun102468
                                        }
                                    case 22:
                                        var1 = var3;
                                    case 25:
                                        if (var2) {
                                            _fun102468_ip = 31;
                                            continue _fun102468
                                        }
                                    case 28:
                                        var0.return();
                                    case 31:
                                        var0 = _closure2_slot2;
                                        var0 = var0.allPowerups;
                                        var0 = var0[var1];
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.filter;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.isNotNullish;
                            var0 = var1.bind(var2)(var0);
                            _fun102466_ip = 185;
                            continue _fun102466;
                        case 181:
                            var0 = new Array(0);
                        case 185:
                            return var0;
                        case 187:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var8 = var4.bind(var5)(var0, var3);
                var0 = null;
                var3 = var0 == var8;
                var5 = undefined;
                if (var3) {
                    _fun102463_ip = 207;
                    continue _fun102463
                }
            case 186:
                var4 = var8.reduce;
                var3 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var1 = var0.cost;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var2 = 0;
                var5 = var4.bind(var8)(var3, var2);
            case 207:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.max;
                var4 = var0 == var1;
                var7 = undefined;
                if (var4) {
                    _fun102463_ip = 235;
                    continue _fun102463
                }
            case 229:
                var7 = var1.premiumSubscriberCount;
            case 235:
                var8 = var0 != var7;
                var1 = 0;
                var4 = 0;
                if (!var8) {
                    _fun102463_ip = 249;
                    continue _fun102463
                }
            case 246:
                var4 = var7;
            case 249:
                var4 = var4 - var6;
                var6 = var0 != var5;
                var0 = 0;
                if (!var6) {
                    _fun102463_ip = 265;
                    continue _fun102463
                }
            case 262:
                var0 = var5;
            case 265:
                var0 = var4 + var0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 6678, 6679, 566, 6675, 1304, 2]);