// modules/main_tabs_v2/native/UserSettingsNativeScrollFixExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2026-01-user-settings-native-scroll-fix',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var8[1] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/UserSettingsNativeScrollFixExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104394: for (var _fun104394_ip = 0;;) switch (_fun104394_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var3 = _closure1_slot3;
                var1 = var3.useConfig;
                var0 = {};
                var0.location = var4;
                var0 = var1.bind(var3)(var0);
                var0 = var0.enabled;
                if (!var0) {
                    _fun104394_ip = 72;
                    continue _fun104394
                }
            case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isIOS;
                var0 = var1.bind(var3)();
            case 72:
                if (!var0) {
                    _fun104394_ip = 131;
                    continue _fun104394
                }
            case 75:
                var1 = global;
                var4 = var1.parseInt;
                var2 = _closure1_slot2;
                var3 = var2.Version;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var3 = var2.bind(var1)(var3);
                var2 = undefined;
                var1 = 10;
                var2 = var4.bind(var2)(var3, var1);
                var1 = 26;
                var0 = var2 >= var1;
            case 131:
                return var0;
        }
    };
    var2.useIsUserSettingsScrollFixEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1301, 478, 2]);