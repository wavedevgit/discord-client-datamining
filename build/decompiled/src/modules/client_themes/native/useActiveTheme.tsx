// modules/client_themes/native/useActiveTheme.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() {
        _fun62152: for (var _fun62152_ip = 0;;) switch (_fun62152_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var5 = undefined;
                var9 = var6.bind(var5)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.hasCustomTheme;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var8.bind(var9)(var4, var3);
                var3 = var7[var2];
                var10 = var6.bind(var5)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot3;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.gradientPreset;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var3 = var9.bind(var10)(var8, var3);
                var2 = var7[var2];
                var6 = var6.bind(var5)(var2);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot2;
                    var0 = var0.useSystemTheme;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var0);
                var0 = _closure1_slot5;
                var0 = var0.ON;
                if (var4) {
                    _fun62152_ip = 185;
                    continue _fun62152
                }
            case 142:
                if (var3) {
                    _fun62152_ip = 173;
                    continue _fun62152
                }
            case 145:
                if (!(var2 !== var0)) {
                    _fun62152_ip = 161;
                    continue _fun62152
                }
            case 149:
                var0 = _closure1_slot6;
                var0 = var0.DEFAULT;
                _fun62152_ip = 171;
                continue _fun62152;
            case 161:
                var2 = _closure1_slot6;
                var0 = var2.SYSTEM;
            case 171:
                _fun62152_ip = 183;
                continue _fun62152;
            case 173:
                var2 = _closure1_slot6;
                var0 = var2.CLIENT;
            case 183:
                _fun62152_ip = 195;
                continue _fun62152;
            case 185:
                var1 = _closure1_slot6;
                var0 = var1.CUSTOM;
            case 195:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SystemThemeState;
    var _closure1_slot5 = var7;
    var4 = var4.ActiveThemeType;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/useActiveTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var0 = _closure1_slot6;
        var0 = var0.CUSTOM;
        var0 = var1 === var0;
        return var0;
    };
    var2.useIsCustomThemeActive = var4;
    var3 = function() {
        _fun62157: for (var _fun62157_ip = 0;;) switch (_fun62157_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var0 = _closure1_slot6;
                var0 = var0.CLIENT;
                var0 = var2 === var0;
                if (var0) {
                    _fun62157_ip = 44;
                    continue _fun62157
                }
            case 30:
                var1 = _closure1_slot6;
                var1 = var1.CUSTOM;
                var0 = var2 === var1;
            case 44:
                return var0;
        }
    };
    var2.useIsClientThemeOrCustomThemeActive = var3;
    var2.useActiveThemeType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3199, 3210, 3203, 3200, 566, 2]);