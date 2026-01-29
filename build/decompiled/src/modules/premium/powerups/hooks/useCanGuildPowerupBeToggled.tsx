// modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.PowerupActiveStatusType;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useCanGuildPowerupBeToggled, environment: var1
        var4 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 3;
        var2 = var9[var2];
        var3 = undefined;
        var10 = var7.bind(var3)(var2);
        var8 = var10.useStateFromStores;
        var2 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getStateForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var8.bind(var10)(var7, var2);
        var _closure2_slot3 = var7;
        var8 = _closure1_slot1;
        var2 = 4;
        var2 = var9[var2];
        var2 = var8.bind(var3)(var2);
        var4 = var2.bind(var3)(var4, var6);
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var7;
        var7 = var6.skuId;
        var1[1] = var7;
        var6 = var6.dependencies;
        var1[2] = var6;
        var1[3] = var5;
        var4 = var4.type;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun102820: for (var _fun102820_ip = 0;;) switch (_fun102820_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var8 = null;
                    if (!(var8 != var1)) {
                        _fun102820_ip = 320;
                        continue _fun102820
                    }
                case 18:
                    var1 = _closure2_slot4;
                    var4 = var1.type;
                    var1 = _closure1_slot5;
                    var1 = var1.LEVEL_ACTIVATED;
                    if (!(var4 !== var1)) {
                        _fun102820_ip = 303;
                        continue _fun102820
                    }
                case 47:
                    var1 = _closure2_slot3;
                    var9 = var1.allPowerups;
                    var5 = var1.unlockedPowerups;
                    var _closure3_slot0 = var5;
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun102820_ip = 103;
                        continue _fun102820
                    }
                case 74:
                    var1 = _closure2_slot1;
                    var6 = var1.dependencies;
                    var4 = var6.find;
                    var1 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 == var1;
                        return var0;
                    };
                    var7 = var4.bind(var6)(var1);
                    _fun102820_ip = 156;
                    continue _fun102820;
                case 103:
                    var1 = global;
                    var4 = var1.Object;
                    var1 = var4.values;
                    var4 = var1.bind(var4)(var5);
                    var1 = var4.find;
                    var0 = function(arg0) { // Environment: var0
                        _fun102821: for (var _fun102821_ip = 0;;) switch (_fun102821_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.sku;
                                var1 = null;
                                var2 = var1 == var0;
                                var1 = undefined;
                                if (var2) {
                                    _fun102821_ip = 26;
                                    continue _fun102821
                                }
                            case 20:
                                var1 = var0.dependent_sku_id;
                            case 26:
                                var0 = _closure2_slot1;
                                var0 = var0.skuId;
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var1 = var1.bind(var4)(var0);
                    var4 = var8 == var1;
                    var0 = undefined;
                    if (var4) {
                        _fun102820_ip = 153;
                        continue _fun102820
                    }
                case 147:
                    var0 = var1.sku_id;
                case 153:
                    var7 = var0;
                case 156:
                    var0 = {};
                    var1 = var8 != var7;
                    var0.disabled = var1;
                    var4 = var8 != var7;
                    var6 = undefined;
                    var1 = undefined;
                    if (!var4) {
                        _fun102820_ip = 296;
                        continue _fun102820
                    }
                case 177:
                    var4 = var9[var7];
                    var4 = var8 != var4;
                    var1 = undefined;
                    if (!var4) {
                        _fun102820_ip = 296;
                        continue _fun102820
                    }
                case 190:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var3 = _closure2_slot2;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 6;
                    var2 = var11[var2];
                    var2 = var10.bind(var6)(var2);
                    if (var3) {
                        _fun102820_ip = 257;
                        continue _fun102820
                    }
                case 247:
                    var3 = var2["1B8AZr"];
                    _fun102820_ip = 265;
                    continue _fun102820;
                case 257:
                    var3 = var2.vCEBiS;
                case 265:
                    var2 = {};
                    var7 = var9[var7];
                    var8 = var8 == var7;
                    var6 = undefined;
                    if (var8) {
                        _fun102820_ip = 285;
                        continue _fun102820
                    }
                case 280:
                    var6 = var7.title;
                case 285:
                    var2.perk = var6;
                    var1 = var4.bind(var5)(var3, var2);
                case 296:
                    var0.reason = var1;
                    return var0;
                case 303:
                    var0 = {};
                    var1 = true;
                    var0.disabled = var1;
                    var1 = undefined;
                    var0.reason = var1;
                    return var0;
                case 320:
                    var0 = {};
                    var1 = true;
                    var0.disabled = var1;
                    var1 = undefined;
                    var0.reason = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6674, 6675, 566, 13341, 1234, 1881, 2]);