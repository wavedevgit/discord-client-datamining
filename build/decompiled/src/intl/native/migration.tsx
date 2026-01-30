// intl/native/migration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var1 = function(arg0) { // Original name: IntlLink, environment: var6
        _fun14035: for (var _fun14035_ip = 0;;) switch (_fun14035_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.target;
                var _closure2_slot0 = var2;
                var4 = var0.children;
                var7 = _closure1_slot3;
                var6 = var7.useContext;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var8.bind(var3)(var5);
                var5 = var5.AccessibilityPreferencesContext;
                var5 = var6.bind(var7)(var5);
                var6 = var5.alwaysShowLinkDecorations;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var6);
                var8 = typeof var2;
                var6 = 'string';
                if (!(var6 !== var8)) {
                    _fun14035_ip = 126;
                    continue _fun14035
                }
            case 92:
                var7 = 'object';
                var6 = var2;
                if (!(var7 === var8)) {
                    _fun14035_ip = 124;
                    continue _fun14035
                }
            case 103:
                var8 = var2.onClick;
                var7 = null;
                var6 = var2;
                if (!(var7 != var8)) {
                    _fun14035_ip = 124;
                    continue _fun14035
                }
            case 118:
                var6 = var2.onClick;
            case 124:
                _fun14035_ip = 131;
                continue _fun14035;
            case 126:
                var6 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 5;
                    var0 = var5[var0];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var0);
                    var1 = var2.openURL;
                    var0 = 6;
                    var0 = var5[var0];
                    var4 = var4.bind(var3)(var0);
                    var3 = var4.sanitizeUrl;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 131:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'accessible': true,
                    'accessibilityRole': 'link'
                };
                var0.onPress = var6;
                var5 = var5.link;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var6
        _fun14037: for (var _fun14037_ip = 0;;) switch (_fun14037_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.colors;
                var2 = var2.TEXT_LINK;
                var1.color = var2;
                var2 = 'none';
                var3 = arg0;
                if (!var3) {
                    _fun14037_ip = 58;
                    continue _fun14037
                }
            case 54:
                var2 = 'underline';
            case 58:
                var1.textDecorationLine = var2;
                var0.link = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'intl/native/migration.tsx';
    var3 = var4.bind(var5)(var3);
    var2.IntlLink = var1;
    var2.I18nLinkComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 3124, 3103, 3105, 1295, 2]);