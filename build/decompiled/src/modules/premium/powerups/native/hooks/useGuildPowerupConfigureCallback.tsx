// modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildSettingsSections;
    var _closure1_slot4 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = var4.skuId;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun102498: for (var _fun102498_ip = 0;;) switch (_fun102498_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 2;
                    var1 = var6[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.hideActionSheet;
                    var5 = _closure1_slot0;
                    var1 = 3;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.GUILD_POWERUPS_BOTTOM_SHEET_KEY;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot1;
                    var4 = var3.skuId;
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                    if (!(var4 === var3)) {
                        _fun102498_ip = 152;
                        continue _fun102498
                    }
                case 93:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var7 = var4.bind(var0)(var3);
                    var6 = var7.open;
                    var5 = _closure2_slot0;
                    var3 = _closure1_slot4;
                    var4 = var3.ROLES;
                    var3 = _closure1_slot5;
                    var3 = var3.GUILD_POWERUPS_OVERVIEW_CARD;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    _fun102498_ip = 214;
                    continue _fun102498;
                case 152:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var1 = _closure2_slot1;
                    var4 = var1.skuId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Unsupported powerup SKU ID: ';
                    var2 = var2.bind(var1)(var4);
                    var1 = false;
                    var1 = var3.bind(var0)(var1, var2);
                case 214:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 3278, 13362, 6640, 8155, 44, 2]);