// modules/user_settings/native/core/openUserSettings.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/core/openUserSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun52451: for (var _fun52451_ip = 0;;) switch (_fun52451_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var3 = var1.bind(var2)();
                var6 = null;
                var1 = var6 != var3;
                if (!var1) {
                    _fun52451_ip = 57;
                    continue _fun52451
                }
            case 47:
                var2 = var3.isReady;
                var1 = var2.bind(var3)();
            case 57:
                if (!var1) {
                    _fun52451_ip = 199;
                    continue _fun52451
                }
            case 63:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var5 = var2.bind(var0)(var1);
                var2 = var5.dispatch;
                var1 = {};
                var7 = 'USER_SETTINGS_MODAL_INIT';
                var1.type = var7;
                var7 = var4.screen;
                if (!(var6 == var7)) {
                    _fun52451_ip = 118;
                    continue _fun52451
                }
            case 108:
                var8 = _closure1_slot3;
                var7 = var8.OVERVIEW;
            case 118:
                var1.section = var7;
                var7 = var4.subsection;
                var8 = var6 != var7;
                var6 = null;
                if (!var8) {
                    _fun52451_ip = 140;
                    continue _fun52451
                }
            case 137:
                var6 = var7;
            case 140:
                var1.subsection = var6;
                var6 = var4.analyticsLocation;
                var1.analyticsLocation = var6;
                var6 = var4.scrollPosition;
                var1.scrollPosition = var6;
                var6 = var4.searchParams;
                var1.searchParams = var6;
                var1 = var2.bind(var5)(var1);
                var2 = var3.navigate;
                var1 = 'settings';
                var1 = var2.bind(var3)(var1, var4);
            case 199:
                return var0;
        }
    };
    var2.openUserSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5974, 660, 3921, 806, 2]);