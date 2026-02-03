// uikit-native/refresh/EmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.View;
    var _closure1_slot3 = var4;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot5 = var4;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var10 = 'center';
    var17 = 16;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var3.container = var8;
    var8 = {};
    var14 = 5;
    var9 = var6[var14];
    var16 = var12.bind(var0)(var9);
    var15 = var13.DISPLAY_SEMIBOLD;
    var11 = 6;
    var9 = var6[var11];
    var9 = var12.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var19 = var16.bind(var0)(var15, var9, var17);
    var20 = var8;
    var9 = copyDataProperties(var20, var19);
    var9 = 'textAlign';
    var8[var9] = var10;
    var16 = 8;
    var15 = 'marginBottom';
    var8[var15] = var16;
    var3.title = var8;
    var8 = {};
    var14 = var6[var14];
    var14 = var12.bind(var0)(var14);
    var13 = var13.PRIMARY_MEDIUM;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var12 = var11.TEXT_SUBTLE;
    var11 = 14;
    var19 = var14.bind(var0)(var13, var12, var11);
    var20 = var8;
    var11 = copyDataProperties(var20, var19);
    var8[var9] = var10;
    var3.body = var8;
    var8 = {};
    var9 = 32;
    var8.marginBottom = var9;
    var3.image = var8;
    var8 = {
        'alignSelf': 'center',
        'marginTop': 16
    };
    var3.cta = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun67491: for (var _fun67491_ip = 0;;) switch (_fun67491_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.source;
                var15 = var0.title;
                var10 = var0.body;
                var5 = var0.containerStyle;
                var16 = var0.imageStyle;
                var17 = var0.titleStyle;
                var14 = var0.bodyStyle;
                var12 = var0.callToAction;
                var0 = _closure1_slot7;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var13.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var5 = null;
                var4 = var5 != var11;
                var7 = null;
                if (!var4) {
                    _fun67491_ip = 147;
                    continue _fun67491
                }
            case 105:
                var9 = _closure1_slot5;
                var8 = _closure1_slot4;
                var4 = {};
                var4.source = var11;
                var18 = var13.image;
                var11 = new Array(2);
                var11[0] = var18;
                var11[1] = var16;
                var4.style = var11;
                var7 = var9.bind(var3)(var8, var4);
            case 147:
                var4 = new Array(4);
                var4[0] = var7;
                var8 = var5 != var15;
                var7 = null;
                if (!var8) {
                    _fun67491_ip = 227;
                    continue _fun67491
                }
            case 164:
                var11 = _closure1_slot5;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 7;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var18 = var13.title;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var8.style = var16;
                var8.children = var15;
                var7 = var11.bind(var3)(var9, var8);
            case 227:
                var4[1] = var7;
                var9 = _closure1_slot5;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 7;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.LegacyText;
                var7 = {};
                var15 = var13.body;
                var11 = new Array(2);
                var11[0] = var15;
                var11[1] = var14;
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4[2] = var7;
                var7 = var5 != var12;
                var5 = null;
                if (!var7) {
                    _fun67491_ip = 424;
                    continue _fun67491
                }
            case 307:
                var8 = _closure1_slot5;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 8;
                var6 = var11[var9];
                var7 = var10.bind(var3)(var6);
                var6 = {};
                var14 = true;
                var6.shrink = var14;
                var13 = var13.cta;
                var6.style = var13;
                var13 = var12.label;
                var6.text = var13;
                var12 = var12.onPress;
                var6.onPress = var12;
                var12 = var11[var9];
                var12 = var10.bind(var3)(var12);
                var12 = var12.Colors;
                var12 = var12.BRAND;
                var6.color = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.Sizes;
                var9 = var9.SMALL;
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 424:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/EmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun67492: for (var _fun67492_ip = 0;;) switch (_fun67492_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.lightSource;
                var5 = var3.darkSource;
                var0 = null;
                var2 = Object.create(var0);
                var0 = 0;
                var2.lightSource = var0;
                var2.darkSource = var0;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var4 = copyDataProperties(var12, var11, var10);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var7 = var8[var2];
                var3 = undefined;
                var9 = var6.bind(var3)(var7);
                var7 = var9.useThemeContext;
                var7 = var7.bind(var9)();
                var7 = var7.theme;
                var2 = var8[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isThemeLight;
                var2 = var2.bind(var6)(var7);
                if (!var2) {
                    _fun67492_ip = 111;
                    continue _fun67492
                }
            case 108:
                var5 = var1;
            case 111:
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var0 = {};
                var0.source = var5;
                var12 = var0;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ThemedEmptyState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 4677, 671, 4871, 4868, 3197, 2]);