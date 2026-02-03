// uikit-native/EmptyState.tsx
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
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingHorizontal': 36,
        'paddingBottom': 80
    };
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'maxWidth': 300,
        'maxHeight': 200
    };
    var3.emptyImage = var8;
    var8 = {
        'marginTop': 20,
        'textTransform': 'uppercase'
    };
    var3.emptyTitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.emptyBody = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/EmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59622: for (var _fun59622_ip = 0;;) switch (_fun59622_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot6;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 5;
                var1 = var1[var10];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useThemeContext;
                var1 = var1.bind(var2)();
                var9 = var1.theme;
                var1 = var0.Illustration;
                var6 = null;
                if (!(var6 == var1)) {
                    _fun59622_ip = 167;
                    continue _fun59622
                }
            case 64:
                var4 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = 'contain';
                var1.resizeMode = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var10];
                var8 = var8.bind(var3)(var5);
                var5 = var8.isThemeLight;
                var5 = var5.bind(var8)(var9);
                if (var5) {
                    _fun59622_ip = 121;
                    continue _fun59622
                }
            case 113:
                var5 = var0.darkSource;
                _fun59622_ip = 127;
                continue _fun59622;
            case 121:
                var5 = var0.lightSource;
            case 127:
                var1.source = var5;
                var8 = var11.emptyImage;
                var5 = new Array(2);
                var5[0] = var8;
                var8 = var0.imageStyle;
                var5[1] = var8;
                var1.style = var5;
                var8 = var4.bind(var3)(var2, var1);
                _fun59622_ip = 221;
                continue _fun59622;
            case 167:
                var4 = _closure1_slot4;
                var2 = var0.Illustration;
                var1 = {};
                var5 = 'contain';
                var1.resizeMode = var5;
                var9 = var11.emptyImage;
                var5 = new Array(2);
                var5[0] = var9;
                var9 = var0.imageStyle;
                var5[1] = var9;
                var1.style = var5;
                var8 = var4.bind(var3)(var2, var1);
            case 221:
                var9 = var0.style;
                var10 = var0.body;
                var15 = var0.title;
                var5 = var0.children;
                var12 = var0.bodyStyle;
                var17 = var0.titleStyle;
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var13 = var11.container;
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var9;
                var0.style = var4;
                var4 = true;
                var0.accessible = var4;
                var4 = new Array(4);
                var4[0] = var8;
                var9 = var6 != var15;
                var8 = null;
                if (!var9) {
                    _fun59622_ip = 382;
                    continue _fun59622
                }
            case 307:
                var14 = _closure1_slot4;
                var13 = _closure1_slot0;
                var16 = _closure1_slot1;
                var9 = 6;
                var9 = var16[var9];
                var9 = var13.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary',
                    'maxFontSizeMultiplier': 2
                };
                var18 = var11.emptyTitle;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var9.style = var16;
                var9.children = var15;
                var8 = var14.bind(var3)(var13, var9);
            case 382:
                var4[1] = var8;
                var8 = var6 != var10;
                var6 = null;
                if (!var8) {
                    _fun59622_ip = 470;
                    continue _fun59622
                }
            case 395:
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 6;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted',
                    'maxFontSizeMultiplier': 2
                };
                var13 = var11.emptyBody;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var7.style = var11;
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 470:
                var4[2] = var6;
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3197, 3932, 2]);