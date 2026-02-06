// modules/quests/native/QuestHomeEmptyState.tsx
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
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ImageBackground;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var9 = 'center';
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'flex': 1
    };
    var3.emptyStateContainer = var8;
    var8 = {};
    var10 = -55;
    var8.top = var10;
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var8.paddingHorizontal = var10;
    var3.emptyStateContentContainer = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.emptyStateContentTitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 4
    };
    var3.emptyStateContentDescription = var8;
    var8 = {
        'flex': 1,
        'width': '100%',
        'aspectRatio': 1.6375545851528384,
        'minWidth': '100%',
        'position': 'absolute',
        'bottom': 0,
        'zIndex': 4294967295
    };
    var3.emptyImage = var8;
    var8 = {
        'height': 22,
        'width': '100%',
        'position': 'absolute',
        'bottom': 0
    };
    var3.gradient = var8;
    var8 = {
        'marginTop': 16,
        'alignSelf': 'center'
    };
    var3.actionWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHomeEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83299: for (var _fun83299_ip = 0;;) switch (_fun83299_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.action;
                var20 = var0.title;
                var3 = undefined;
                if (!(var20 === var3)) {
                    _fun83299_ip = 79;
                    continue _fun83299
                }
            case 19:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.SdlRnK;
                var20 = var2.bind(var4)(var1);
            case 79:
                var13 = var0.subtitle;
                if (!(var13 === var3)) {
                    _fun83299_ip = 149;
                    continue _fun83299
                }
            case 89:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["R7mv+G"];
                var13 = var1.bind(var2)(var0);
            case 149:
                var0 = _closure1_slot9;
                var19 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var0 = var14[var0];
                var4 = var12.bind(var3)(var0);
                var2 = var4.useToken;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOWER;
                var18 = var2.bind(var4)(var0);
                var0 = 8;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var10 = var0.isChatLockedOpen;
                var2 = _closure1_slot6;
                var0 = 9;
                var0 = var14[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = 10;
                var4 = var14[var4];
                var5 = var12.bind(var3)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                var0.bottom = var4;
                var4 = var19.container;
                var0.style = var4;
                var5 = _closure1_slot3;
                var4 = {};
                var6 = var19.container;
                var4.style = var6;
                var7 = _closure1_slot7;
                var6 = {};
                var8 = var19.emptyStateContainer;
                var6.style = var8;
                var8 = {};
                var9 = var19.emptyStateContentContainer;
                var8.style = var9;
                var9 = 11;
                var11 = var14[var9];
                var11 = var12.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var19.emptyStateContentTitle;
                var11.style = var21;
                var11.children = var20;
                var15 = var2.bind(var3)(var15, var11);
                var11 = new Array(3);
                var11[0] = var15;
                var9 = var14[var9];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var14 = var19.emptyStateContentDescription;
                var9.style = var14;
                var9.children = var13;
                var9 = var2.bind(var3)(var12, var9);
                var11[1] = var9;
                var9 = null;
                var12 = var9 != var16;
                if (!var12) {
                    _fun83299_ip = 492;
                    continue _fun83299
                }
            case 462:
                var15 = _closure1_slot6;
                var14 = _closure1_slot3;
                var13 = {};
                var20 = var19.actionWrapper;
                var13.style = var20;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 492:
                var11[2] = var12;
                var8.children = var11;
                var11 = var7.bind(var3)(var5, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var9 = null;
                if (var10) {
                    _fun83299_ip = 684;
                    continue _fun83299
                }
            case 522:
                var12 = _closure1_slot7;
                var11 = _closure1_slot8;
                var10 = {};
                var16 = _closure1_slot6;
                var14 = _closure1_slot4;
                var13 = {};
                var15 = var19.emptyImage;
                var13.style = var15;
                var15 = _closure1_slot1;
                var20 = _closure1_slot2;
                var21 = 12;
                var21 = var20[var21];
                var21 = var15.bind(var3)(var21);
                var13.source = var21;
                var21 = 'cover';
                var13.resizeMode = var21;
                var14 = var16.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 13;
                var14 = var20[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var19 = var19.gradient;
                var14.style = var19;
                var17 = _closure1_slot5;
                var19 = var17.END;
                var14.end = var19;
                var17 = var17.START;
                var14.start = var17;
                var17 = ['rgba(0, 0, 0, 0)'];
                var17[1] = var18;
                var14.colors = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 684:
                var8[1] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var5, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1234, 3153, 3924, 4737, 478, 3943, 10732, 4099, 2]);