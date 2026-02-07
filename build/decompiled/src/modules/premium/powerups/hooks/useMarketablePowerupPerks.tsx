// modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var10 = 0;
    var8 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var8);
    var _closure1_slot3 = var3;
    var8 = 1;
    var3 = var5[var8];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var11 = var3.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
    var3 = var3.GuildPowerupType;
    var _closure1_slot5 = var3;
    var7 = var6.Set;
    var9 = var6.Array;
    var3 = var9.from;
    var14 = var3.bind(var9)(var12);
    var3 = new Array(1);
    var15 = var3;
    var13 = 0;
    var13 = arraySpread(var15, var14, var13);
    var10 = var6.Array;
    var6 = var10.from;
    var14 = var6.bind(var10)(var11);
    var15 = var3;
    var6 = arraySpread(var15, var14, var13);
    var9 = 3;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.VANITY_URL_POWERUP_SKU_ID;
    var3[var6] = var9;
    var6 = var6 + var8;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var16 = var6;
    var15 = var3;
    var3 = new var16[var7](var15, var14);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 4;
        var2 = var7[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var6 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun79064: for (var _fun79064_ip = 0;;) switch (_fun79064_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getStateForGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    var5 = var3 == var2;
                    var0 = undefined;
                    if (var5) {
                        _fun79064_ip = 65;
                        continue _fun79064
                    }
                case 36:
                    var2 = var2.powerupCatalog;
                    var3 = var3 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun79064_ip = 65;
                        continue _fun79064
                    }
                case 51:
                    var1 = _closure1_slot5;
                    var1 = var1.PERK;
                    var0 = var2[var1];
                case 65:
                    return var0;
            }
        };
        var5 = var6.bind(var8)(var5, var2);
        var _closure2_slot1 = var5;
        var6 = _closure1_slot1;
        var2 = 5;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var4 = var2.bind(var3)(var4);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun79065: for (var _fun79065_ip = 0;;) switch (_fun79065_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun79065_ip = 19;
                        continue _fun79065
                    }
                case 13:
                    var4 = new Array(0);
                    _fun79065_ip = 23;
                    continue _fun79065;
                case 19:
                    var4 = _closure2_slot1;
                case 23:
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var6 = var4;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = _closure2_slot2;
                    if (!(var3 != var1)) {
                        _fun79065_ip = 61;
                        continue _fun79065
                    }
                case 47:
                    var1 = var2.push;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                case 61:
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot6;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var0.skuId;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6783, 6784, 6707, 566, 10042, 2]);