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
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var9 = 0;
    var8 = var5[var9];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot3 = var6;
    var8 = 1;
    var6 = var5[var8];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var10 = var6.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var6 = var6.GuildPowerupType;
    var _closure1_slot5 = var6;
    var7 = var3.Set;
    var6 = var3.Array;
    var3 = var6.from;
    var12 = var3.bind(var6)(var10);
    var3 = new Array(1);
    var13 = var3;
    var11 = 0;
    var6 = arraySpread(var13, var12, var11);
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
    var14 = var6;
    var13 = var3;
    var3 = new var14[var7](var13, var12);
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
            _fun78050: for (var _fun78050_ip = 0;;) switch (_fun78050_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getStateForGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    var5 = var3 == var2;
                    var0 = undefined;
                    if (var5) {
                        _fun78050_ip = 65;
                        continue _fun78050
                    }
                case 36:
                    var2 = var2.powerupCatalog;
                    var3 = var3 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun78050_ip = 65;
                        continue _fun78050
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
            _fun78051: for (var _fun78051_ip = 0;;) switch (_fun78051_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun78051_ip = 19;
                        continue _fun78051
                    }
                case 13:
                    var4 = new Array(0);
                    _fun78051_ip = 23;
                    continue _fun78051;
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
                        _fun78051_ip = 61;
                        continue _fun78051
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6680, 6681, 6604, 566, 9874, 2]);