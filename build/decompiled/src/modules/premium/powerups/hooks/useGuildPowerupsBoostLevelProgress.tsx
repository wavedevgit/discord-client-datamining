// modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot4 = var6;
    var6 = var3.BoostedGuildTiers;
    var _closure1_slot5 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55910: for (var _fun55910_ip = 0;;) switch (_fun55910_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var6 = undefined;
                var0 = var4.bind(var6)(var0);
                var0 = var0.bind(var6)(var3);
                var5 = _closure1_slot0;
                var4 = 3;
                var3 = var8[var4];
                var11 = var5.bind(var6)(var3);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var7;
                var3 = function() { // Environment: var1
                    _fun55911: for (var _fun55911_ip = 0;;) switch (_fun55911_ip) {
                        case 0:
                            var3 = _closure1_slot3;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var3 = var2.bind(var3)(var0);
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun55911_ip = 41;
                                continue _fun55911
                            }
                        case 35:
                            var0 = var3.premiumTier;
                        case 41:
                            if (!(var2 == var0)) {
                                _fun55911_ip = 55;
                                continue _fun55911
                            }
                        case 45:
                            var1 = _closure1_slot5;
                            var0 = var1.NONE;
                        case 55:
                            return var0;
                    }
                };
                var3 = var10.bind(var11)(var9, var3);
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var7;
                var1 = function() { // Environment: var1
                    _fun55912: for (var _fun55912_ip = 0;;) switch (_fun55912_ip) {
                        case 0:
                            var3 = _closure1_slot3;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot0;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun55912_ip = 61;
                                continue _fun55912
                            }
                        case 35:
                            var3 = var2.features;
                            var2 = var3.has;
                            var0 = _closure1_slot6;
                            var0 = var0.PREMIUM_TIER_3_OVERRIDE;
                            var1 = var2.bind(var3)(var0);
                        case 61:
                            var0 = true;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4, var1);
                var1 = 0;
                if (var4) {
                    _fun55910_ip = 129;
                    continue _fun55910
                }
            case 121:
                var2 = _closure1_slot4;
                var1 = var2[var3];
            case 129:
                var0 = var0.available;
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun55913: for (var _fun55913_ip = 0;;) switch (_fun55913_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.getGuildPowerupsBoostCount;
                var0 = var0.bind(var3)(var5);
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var4 = var3.bind(var4)(var5);
                var3 = null;
                var5 = var3 == var4;
                if (var5) {
                    _fun55913_ip = 68;
                    continue _fun55913
                }
            case 62:
                var2 = var4.premiumTier;
            case 68:
                if (!(var3 == var2)) {
                    _fun55913_ip = 82;
                    continue _fun55913
                }
            case 72:
                var3 = _closure1_slot5;
                var2 = var3.NONE;
            case 82:
                var1 = _closure1_slot4;
                var1 = var1[var2];
                var0 = var0.available;
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.getGuildPowerupBoostLevelProgress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 6737, 566, 2]);