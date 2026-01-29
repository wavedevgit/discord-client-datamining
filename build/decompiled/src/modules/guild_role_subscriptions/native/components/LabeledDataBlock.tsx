// modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var12 = 4;
    var3 = var5[var12];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'flexBasis': 'auto',
        'flexGrow': 1,
        'padding': 16
    };
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.container = var8;
    var8 = {};
    var8.marginRight = var12;
    var3.title = var8;
    var8 = {};
    var12 = 6;
    var12 = var5[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.PRIMARY_MEDIUM;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var9 = 24;
    var15 = var12.bind(var0)(var11, var10, var9);
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var3.data = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 16
    };
    var3.titleSection = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: LabeledDataBlock, environment: var1
        _fun83986: for (var _fun83986_ip = 0;;) switch (_fun83986_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.children;
                var11 = var0.title;
                var5 = var0.style;
                var15 = var0.icon;
                var13 = var0.onPressIcon;
                var0 = _closure1_slot6;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var10.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var4 = {};
                var5 = var10.titleSection;
                var4.style = var5;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var5 = var12[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var12 = var10.title;
                var5.style = var12;
                var5.children = var11;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = null;
                var7 = var7 != var15;
                if (!var7) {
                    _fun83986_ip = 273;
                    continue _fun83986
                }
            case 166:
                var12 = _closure1_slot4;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 8;
                var8 = var18[var8];
                var8 = var11.bind(var3)(var8);
                var11 = var8.PressableOpacity;
                var8 = {};
                var14 = 'button';
                var8.accessibilityRole = var14;
                var8.onPress = var13;
                var17 = _closure1_slot1;
                var16 = 9;
                var13 = var18[var16];
                var14 = var17.bind(var3)(var13);
                var13 = {};
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.SMALL;
                var13.size = var16;
                var13.source = var15;
                var13 = var12.bind(var3)(var14, var13);
                var8.children = var13;
                var7 = var12.bind(var3)(var11, var8);
            case 273:
                var5[1] = var7;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var8 = 'string';
                var7 = typeof var9;
                var5 = var9;
                if (!(var8 === var7)) {
                    _fun83986_ip = 360;
                    continue _fun83986
                }
            case 309:
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 10;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var10 = var10.data;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 360:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4638, 3895, 4858, 4039, 4832, 2]);