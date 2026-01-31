// modules/video_calls/native/components/NUFScreenshareActionSheet.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'padding': 16,
        'paddingTop': 24
    };
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 16,
        'marginBottom': 8
    };
    var3.title = var8;
    var9 = 18;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'marginBottom': 24
    };
    var3.description = var8;
    var8 = {
        'padding': 4,
        'marginTop': 8
    };
    var3.skipContainer = var8;
    var8 = {};
    var8.lineHeight = var9;
    var3.skip = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/NUFScreenshareActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var14 = var0.onScreensharePress;
        var11 = var0.onSkip;
        var0 = _closure1_slot7;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 4;
        var0 = var16[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var4 = true;
        var0.startExpanded = var4;
        var6 = _closure1_slot6;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var13.container;
        var4.style = var7;
        var8 = _closure1_slot4;
        var7 = {};
        var18 = _closure1_slot1;
        var9 = 5;
        var9 = var16[var9];
        var9 = var18.bind(var3)(var9);
        var7.source = var9;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(5);
        var7[0] = var8;
        var10 = 6;
        var8 = var16[var10];
        var8 = var15.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var12 = var13.title;
        var8.style = var12;
        var12 = 7;
        var17 = var16[var12];
        var17 = var15.bind(var3)(var17);
        var20 = var17.intl;
        var19 = var20.string;
        var17 = var16[var12];
        var17 = var15.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.hZdQXt;
        var17 = var19.bind(var20)(var17);
        var8.children = var17;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var8 = var16[var10];
        var8 = var15.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var17 = var13.description;
        var8.style = var17;
        var17 = var16[var12];
        var17 = var15.bind(var3)(var17);
        var20 = var17.intl;
        var19 = var20.string;
        var17 = var16[var12];
        var17 = var15.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.PMitOE;
        var17 = var19.bind(var20)(var17);
        var8.children = var17;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var17 = 8;
        var8 = var16[var17];
        var9 = var18.bind(var3)(var8);
        var8 = {};
        var19 = var16[var12];
        var19 = var15.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var16[var12];
        var19 = var15.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.QQuxIc;
        var19 = var20.bind(var21)(var19);
        var8.text = var19;
        var19 = var16[var17];
        var19 = var18.bind(var3)(var19);
        var19 = var19.Sizes;
        var19 = var19.MEDIUM;
        var8.size = var19;
        var17 = var16[var17];
        var17 = var18.bind(var3)(var17);
        var17 = var17.Colors;
        var17 = var17.BRAND;
        var8.color = var17;
        var8.onPress = var14;
        var8 = var2.bind(var3)(var9, var8);
        var7[3] = var8;
        var8 = 9;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.PressableOpacity;
        var8 = {};
        var8.onPress = var11;
        var11 = var13.skipContainer;
        var8.style = var11;
        var11 = 'button';
        var8.accessibilityRole = var11;
        var11 = var16[var12];
        var11 = var15.bind(var3)(var11);
        var17 = var11.intl;
        var14 = var17.string;
        var11 = var16[var12];
        var11 = var15.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.PwrR2D;
        var11 = var14.bind(var17)(var11);
        var8.accessibilityLabel = var11;
        var10 = var16[var10];
        var10 = var15.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'style': null,
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var13 = var13.skip;
        var10.style = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.PwrR2D;
        var12 = var13.bind(var14)(var12);
        var10.children = var12;
        var10 = var2.bind(var3)(var11, var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[4] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4894, 8418, 3900, 1234, 4836, 4865, 2]);