// modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'padding': 24
    };
    var9 = 5;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var10 = 24;
    var3.container = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.button = var8;
    var8 = {
        'flex': 1,
        'width': '100%',
        'paddingVertical': 40,
        'paddingHorizontal': 12
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_WARNING;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.topContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'padding': 12,
        'width': '100%',
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var12;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var9 = 'center';
    var3.setAsThumbnailContainer = var8;
    var8 = {
        'alignItems': 'center',
        'flex': 1
    };
    var3.contentContainer = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.markAsDismissed;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot7;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var11 = _closure1_slot1;
        var18 = _closure1_slot2;
        var0 = 6;
        var0 = var18[var0];
        var0 = var11.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var14 = var0.bottom;
        var2 = _closure1_slot5;
        var17 = _closure1_slot0;
        var0 = 7;
        var0 = var18[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var4 = 0.8;
        var0.backdropOpacity = var4;
        var4 = function() {
            var2 = _closure2_slot0;
            var0 = _closure1_slot4;
            var1 = var0.UNKNOWN;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onDismiss = var4;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var13.container;
        var4.style = var7;
        var8 = _closure1_slot6;
        var6 = 8;
        var6 = var18[var6];
        var6 = var17.bind(var3)(var6);
        var7 = var6.BottomSheetScrollView;
        var6 = {};
        var10 = var13.contentContainer;
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var10.paddingBottom = var14;
        var9[1] = var10;
        var6.contentContainerStyle = var9;
        var9 = {};
        var10 = var13.topContainer;
        var9.style = var10;
        var10 = {};
        var14 = var13.setAsThumbnailContainer;
        var10.style = var14;
        var15 = 9;
        var14 = var18[var15];
        var14 = var17.bind(var3)(var14);
        var19 = var14.Text;
        var16 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = 10;
        var20 = var18[var14];
        var20 = var17.bind(var3)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var18[var14];
        var20 = var17.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20.ews2pj;
        var20 = var21.bind(var22)(var20);
        var16.children = var20;
        var19 = var2.bind(var3)(var19, var16);
        var16 = new Array(2);
        var16[0] = var19;
        var19 = 11;
        var19 = var18[var19];
        var20 = var11.bind(var3)(var19);
        var19 = {};
        var21 = true;
        var19.selected = var21;
        var19 = var2.bind(var3)(var20, var19);
        var16[1] = var19;
        var10.children = var16;
        var10 = var8.bind(var3)(var5, var10);
        var9.children = var10;
        var10 = var2.bind(var3)(var5, var9);
        var9 = new Array(6);
        var9[0] = var10;
        var10 = var18[var15];
        var10 = var17.bind(var3)(var10);
        var16 = var10.Text;
        var10 = {
            'variant': 'heading-lg/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var19 = var13.title;
        var10.style = var19;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.WJisip;
        var19 = var20.bind(var21)(var19);
        var10.children = var19;
        var10 = var2.bind(var3)(var16, var10);
        var9[1] = var10;
        var10 = 12;
        var16 = var18[var10];
        var19 = var11.bind(var3)(var16);
        var16 = {};
        var16.size = var10;
        var16 = var2.bind(var3)(var19, var16);
        var9[2] = var16;
        var15 = var18[var15];
        var15 = var17.bind(var3)(var15);
        var16 = var15.Text;
        var15 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var19 = var13.description;
        var15.style = var19;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.X6ZH6d;
        var19 = var20.bind(var21)(var19);
        var15.children = var19;
        var15 = var2.bind(var3)(var16, var15);
        var9[3] = var15;
        var10 = var18[var10];
        var15 = var11.bind(var3)(var10);
        var10 = {};
        var16 = 48;
        var10.size = var16;
        var10 = var2.bind(var3)(var15, var10);
        var9[4] = var10;
        var10 = 13;
        var10 = var18[var10];
        var11 = var11.bind(var3)(var10);
        var10 = {};
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14["NX+WJN"];
        var14 = var15.bind(var16)(var14);
        var10.text = var14;
        var13 = var13.button;
        var10.style = var13;
        var12 = function() {
            var2 = _closure2_slot0;
            var0 = _closure1_slot4;
            var1 = var0.UNKNOWN;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var10.onPress = var12;
        var10 = var2.bind(var3)(var11, var10);
        var9[5] = var10;
        var6.children = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1369, 33, 1297, 671, 1568, 4896, 4898, 3902, 1234, 4883, 9228, 4838, 2]);