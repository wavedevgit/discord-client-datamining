// modules/themes/resolveTheme.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot6 = var6;
    var6 = var3.SystemTheme;
    var _closure1_slot7 = var6;
    var3 = var3.SystemThemeState;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/resolveTheme.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: resolveTheme, environment: var1
        _fun27538: for (var _fun27538_ip = 0;;) switch (_fun27538_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = _closure1_slot2;
                var0 = var3.getPreviewTheme;
                var0 = var0.bind(var3)();
                var8 = undefined;
                if (!(var8 === var0)) {
                    _fun27538_ip = 285;
                    continue _fun27538
                }
            case 32:
                var3 = _closure1_slot4;
                var5 = var3.useSystemTheme;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 5;
                var3 = var7[var3];
                var6 = var6.bind(var8)(var3);
                var3 = var6.isAuthenticated;
                var3 = var3.bind(var6)();
                if (!var3) {
                    _fun27538_ip = 89;
                    continue _fun27538
                }
            case 75:
                var3 = _closure1_slot8;
                var3 = var3.ON;
                if (!(var5 === var3)) {
                    _fun27538_ip = 106;
                    continue _fun27538
                }
            case 89:
                var3 = _closure1_slot7;
                var3 = var3.NO_PREFERENCE;
                if (!(var2 === var3)) {
                    _fun27538_ip = 279;
                    continue _fun27538
                }
            case 106:
                var5 = _closure1_slot3;
                var3 = var5.getAppearanceSettings;
                var5 = var3.bind(var5)();
                var6 = null;
                var7 = var6 == var5;
                var3 = undefined;
                if (var7) {
                    _fun27538_ip = 137;
                    continue _fun27538
                }
            case 131:
                var3 = var5.theme;
            case 137:
                if (!(var6 == var3)) {
                    _fun27538_ip = 277;
                    continue _fun27538
                }
            case 144:
                var5 = _closure1_slot5;
                var5 = var5.settings;
                var7 = var5.appearance;
                var9 = var6 == var7;
                var5 = undefined;
                if (var9) {
                    _fun27538_ip = 175;
                    continue _fun27538
                }
            case 169:
                var5 = var7.theme;
            case 175:
                if (!(var6 == var5)) {
                    _fun27538_ip = 211;
                    continue _fun27538
                }
            case 179:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 6;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.Theme;
                var5 = var6.UNSET;
            case 211:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 6;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.Theme;
                var6 = var6.UNSET;
                if (!(var5 === var6)) {
                    _fun27538_ip = 261;
                    continue _fun27538
                }
            case 247:
                var6 = _closure1_slot7;
                var6 = var6.NO_PREFERENCE;
                if (!(var2 === var6)) {
                    _fun27538_ip = 271;
                    continue _fun27538
                }
            case 261:
                var4 = _closure1_slot6;
                var4 = var4[var5];
                _fun27538_ip = 275;
                continue _fun27538;
            case 271:
                var4 = var1[var2];
            case 275:
                return var4;
            case 277:
                return var3;
            case 279:
                var1 = var1[var2];
                return var1;
            case 285:
                var0 = var0.baseTheme;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3161, 1354, 3156, 1310, 3157, 3162, 1311, 2]);