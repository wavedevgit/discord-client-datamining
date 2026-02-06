// modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
    var6 = var3.GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE;
    var _closure1_slot2 = var6;
    var3 = var3.PowerupActiveStatusType;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun102481: for (var _fun102481_ip = 0;;) switch (_fun102481_ip) {
            case 0:
                var8 = arg0;
                var3 = arg1;
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 1;
                var0 = var9[var0];
                var7 = undefined;
                var0 = var2.bind(var7)(var0);
                var5 = var0.bind(var7)(var8, var3);
                var6 = var5.type;
                var0 = _closure1_slot3;
                var1 = var0.INACTIVE;
                var1 = var6 !== var1;
                var6 = var5.type;
                var5 = var0.TIER_OVERRIDE_ACTIVATED;
                var0 = 2;
                var0 = var9[var0];
                var2 = var2.bind(var7)(var0);
                var0 = 'GuildPowerupCardFooterAdmin';
                var7 = var2.bind(var7)(var8, var3, var0);
                var0 = {};
                var2 = var1;
                if (var1) {
                    _fun102481_ip = 103;
                    continue _fun102481
                }
            case 100:
                var2 = !var7;
            case 103:
                if (!var2) {
                    _fun102481_ip = 113;
                    continue _fun102481
                }
            case 106:
                var5 = var6 === var5;
                var2 = !var5;
            case 113:
                var0.showToggleButton = var2;
                var2 = var1;
                if (!var2) {
                    _fun102481_ip = 144;
                    continue _fun102481
                }
            case 124:
                var5 = _closure1_slot2;
                var4 = var5.has;
                var3 = var3.skuId;
                var2 = var4.bind(var5)(var3);
            case 144:
                var0.showConfigureButton = var2;
                var0.isPowerupActive = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6741, 13360, 13357, 2]);