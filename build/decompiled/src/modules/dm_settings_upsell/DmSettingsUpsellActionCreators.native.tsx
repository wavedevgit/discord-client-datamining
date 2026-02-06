// modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY;
    var _closure1_slot3 = var6;
    var1 = var1.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = function arg0() {
        _fun113016: for (var _fun113016_ip = 0;;) switch (_fun113016_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 1;
                var2 = var0[var5];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.Storage;
                var3 = var4.get;
                var2 = _closure1_slot3;
                var2 = var3.bind(var4)(var2);
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 != var2)) {
                    _fun113016_ip = 138;
                    continue _fun113016
                }
            case 71:
                var3 = var4 - var2;
                var2 = _closure1_slot4;
                if (!(!(var3 > var2))) {
                    _fun113016_ip = 138;
                    continue _fun113016
                }
            case 83:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var3 = var9[var2];
                var7 = var8.bind(var0)(var3);
                var3 = var7.trackEvent;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.DmUpsellActionTypes;
                var2 = var2.SUPPRESSED_BY_COOLDOWN;
                var2 = var3.bind(var7)(var2, var6);
                _fun113016_ip = 247;
                continue _fun113016;
            case 138:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var3 = var2[var3];
                var10 = var7.bind(var0)(var3);
                var9 = var10.openLazy;
                var3 = _closure1_slot0;
                var7 = 4;
                var7 = var2[var7];
                var11 = var3.bind(var0)(var7);
                var7 = 3;
                var8 = var2[var7];
                var7 = var2.paths;
                var8 = var11.bind(var0)(var8, var7);
                var7 = {};
                var7.guildId = var6;
                var6 = 'dm_settings_upsell_modal';
                var6 = var9.bind(var10)(var8, var6, var7);
                var2 = var2[var5];
                var2 = var3.bind(var0)(var2);
                var3 = var2.Storage;
                var2 = var3.set;
                var1 = _closure1_slot3;
                var1 = var2.bind(var3)(var1, var4);
            case 247:
                return var0;
        }
    };
    var1.openDmSettingsUpsellModal = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14522, 587, 3280, 14523, 1307, 14524, 2]);