// uikit-native/TextInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TextInput;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.KeyboardThemes;
    var _closure1_slot4 = var7;
    var10 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'fontSize': 16,
        'alignSelf': 'center'
    };
    var10 = var10.PRIMARY_MEDIUM;
    var9.fontFamily = var10;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var3.input = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INPUT_PLACEHOLDER_TEXT_DEFAULT;
    var9.color = var10;
    var3.placeholderTextColor = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun44500: for (var _fun44500_ip = 0;;) switch (_fun44500_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.style;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.style = var0;
                var15 = {};
                var14 = var2;
                var13 = var1;
                var4 = copyDataProperties(var15, var14, var13);
                var0 = _closure1_slot6;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 6;
                var2 = var0[var11];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useThemeContext;
                var2 = var2.bind(var7)();
                var10 = var2.theme;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var1 = var0.bind(var1)(var10);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var1) {
                    _fun44500_ip = 136;
                    continue _fun44500
                }
            case 128:
                var9 = var0.PRIMARY_500;
                _fun44500_ip = 142;
                continue _fun44500;
            case 136:
                var9 = var0.PRIMARY_100;
            case 142:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = arg1;
                var0.ref = var7;
                var12 = var5.input;
                var7 = new Array(2);
                var7[0] = var12;
                var7[1] = var8;
                var0.style = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var8 = var8.bind(var3)(var7);
                var7 = var8.isThemeDark;
                var7 = var7.bind(var8)(var10);
                var8 = _closure1_slot4;
                if (var7) {
                    _fun44500_ip = 224;
                    continue _fun44500
                }
            case 216:
                var7 = var8.LIGHT;
                _fun44500_ip = 230;
                continue _fun44500;
            case 224:
                var7 = var8.DARK;
            case 230:
                var0.keyboardAppearance = var7;
                var5 = var5.placeholderTextColor;
                var5 = var5.color;
                var0.placeholderTextColor = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isAndroid;
                var7 = var5.bind(var7)();
                var5 = var9;
                if (!var7) {
                    _fun44500_ip = 329;
                    continue _fun44500
                }
            case 287:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.hexWithOpacity;
                var6 = 0.5;
                var5 = var7.bind(var8)(var9, var6);
            case 329:
                var0.selectionColor = var5;
                var15 = var0;
                var14 = var4;
                var4 = copyDataProperties(var15, var14);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/TextInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3206, 478, 3240, 2]);