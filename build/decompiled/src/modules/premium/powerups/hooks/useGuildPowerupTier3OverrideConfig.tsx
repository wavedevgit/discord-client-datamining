// modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
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
    var3 = var3.GuildFeatures;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102340: for (var _fun102340_ip = 0;;) switch (_fun102340_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var6 = undefined;
                var4 = var3.bind(var6)(var1);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun102341: for (var _fun102341_ip = 0;;) switch (_fun102341_ip) {
                        case 0:
                            var3 = _closure1_slot3;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot0;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun102341_ip = 61;
                                continue _fun102341
                            }
                        case 35:
                            var3 = var2.features;
                            var2 = var3.has;
                            var0 = _closure1_slot4;
                            var0 = var0.PREMIUM_TIER_3_OVERRIDE;
                            var1 = var2.bind(var3)(var0);
                        case 61:
                            var0 = true;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0);
                if (var0) {
                    _fun102340_ip = 83;
                    continue _fun102340
                }
            case 67:
                var0 = {
                    'shouldShow': false,
                    'text': ''
                };
                _fun102340_ip = 158;
                continue _fun102340;
            case 83:
                var1 = {};
                var3 = true;
                var1.shouldShow = var3;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 3;
                var3 = var7[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.l9n4QZ;
                var2 = var3.bind(var4)(var2);
                var1.text = var2;
                var0 = var1;
            case 158:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 566, 1234, 1881, 2]);