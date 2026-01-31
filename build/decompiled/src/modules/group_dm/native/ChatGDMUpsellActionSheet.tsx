// modules/group_dm/native/ChatGDMUpsellActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var8 = {};
    var9 = 4;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.marginBottom = var12;
    var12 = 'center';
    var8.textAlign = var12;
    var3.title = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.padding = var13;
    var3.footer = var8;
    var8 = {};
    var8.textAlign = var12;
    var3.body = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginVertical = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var3.noticeContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingBottom': 16
    };
    var3.innerContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.secondInnerContainer = var8;
    var8 = {};
    var8.flex = var11;
    var3.text = var8;
    var8 = {
        'padding': 16,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.titleImage = var8;
    var8 = {
        'backgroundColor': null,
        'marginRight': 16,
        'height': 40,
        'width': 40,
        'borderRadius': 20,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var3.item = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingTop = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/group_dm/native/ChatGDMUpsellActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.onClick;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot7;
        var3 = undefined;
        var16 = var1.bind(var3)();
        var13 = _closure1_slot1;
        var19 = _closure1_slot2;
        var1 = 5;
        var1 = var19[var1];
        var1 = var13.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var8 = var1.bottom;
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var11
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 6;
            var2 = var3[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var2);
            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
            var2 = 7;
            var2 = var3[var2];
            var2 = var6.bind(var0)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GDM_INVITE_REMINDER;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            var1 = _closure2_slot0;
            var1 = var1.bind(var0)();
            return var0;
        };
        var10 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot5;
        var18 = _closure1_slot0;
        var0 = 9;
        var0 = var19[var0];
        var0 = var18.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'showGradient': true,
            'scrollable': true,
            'startExpanded': true
        };
        var9 = _closure1_slot4;
        var5 = {};
        var6 = var16.titleImage;
        var5.style = var6;
        var6 = 10;
        var6 = var19[var6];
        var7 = var13.bind(var3)(var6);
        var6 = {};
        var12 = 11;
        var12 = var19[var12];
        var12 = var13.bind(var3)(var12);
        var6.source = var12;
        var12 = 'contain';
        var6.resizeMode = var12;
        var6 = var2.bind(var3)(var7, var6);
        var5.children = var6;
        var5 = var2.bind(var3)(var9, var5);
        var0.header = var5;
        var6 = _closure1_slot6;
        var4 = {};
        var7 = var16.footer;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var12 = 16;
        var7.padding = var12;
        var8 = var8 + var12;
        var7.paddingBottom = var8;
        var5[1] = var7;
        var4.style = var5;
        var8 = 12;
        var5 = var19[var8];
        var5 = var18.bind(var3)(var5);
        var7 = var5.Button;
        var5 = {};
        var15 = 13;
        var13 = var19[var15];
        var13 = var18.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var19[var15];
        var13 = var18.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["3PatSz"];
        var13 = var14.bind(var17)(var13);
        var5.text = var13;
        var5.onPress = var10;
        var7 = var2.bind(var3)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var10 = var16.button;
        var7.style = var10;
        var8 = var19[var8];
        var8 = var18.bind(var3)(var8);
        var10 = var8.Button;
        var8 = {};
        var13 = var19[var15];
        var13 = var18.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var19[var15];
        var13 = var18.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["ETE/oC"];
        var13 = var14.bind(var17)(var13);
        var8.text = var13;
        var11 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var8.onPress = var11;
        var11 = 'tertiary';
        var8.variant = var11;
        var8 = var2.bind(var3)(var10, var8);
        var7.children = var8;
        var7 = var2.bind(var3)(var9, var7);
        var5[1] = var7;
        var4.children = var5;
        var4 = var6.bind(var3)(var9, var4);
        var0.footer = var4;
        var4 = 14;
        var4 = var19[var4];
        var4 = var18.bind(var3)(var4);
        var5 = var4.BottomSheetScrollView;
        var4 = {};
        var13 = 15;
        var7 = var19[var13];
        var7 = var18.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'style': null,
            'variant': 'heading-lg/extrabold',
            'accessibilityRole': 'header'
        };
        var10 = var16.title;
        var7.style = var10;
        var10 = var19[var15];
        var10 = var18.bind(var3)(var10);
        var14 = var10.intl;
        var11 = var14.string;
        var10 = var19[var15];
        var10 = var18.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["bkqux/"];
        var10 = var11.bind(var14)(var10);
        var7.children = var10;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var8 = var19[var13];
        var8 = var18.bind(var3)(var8);
        var10 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-muted'
        };
        var11 = var16.body;
        var8.style = var11;
        var11 = var19[var15];
        var11 = var18.bind(var3)(var11);
        var17 = var11.intl;
        var14 = var17.string;
        var11 = var19[var15];
        var11 = var18.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.N6TdqN;
        var11 = var14.bind(var17)(var11);
        var8.children = var11;
        var8 = var2.bind(var3)(var10, var8);
        var7[1] = var8;
        var8 = {};
        var10 = var16.noticeContainer;
        var8.style = var10;
        var10 = {};
        var11 = var16.innerContainer;
        var10.style = var11;
        var11 = {};
        var14 = var16.item;
        var11.style = var14;
        var12 = var19[var12];
        var12 = var18.bind(var3)(var12);
        var14 = var12.TimerIcon;
        var12 = {};
        var20 = 'sm';
        var12.size = var20;
        var12 = var2.bind(var3)(var14, var12);
        var11.children = var12;
        var12 = var2.bind(var3)(var9, var11);
        var11 = new Array(2);
        var11[0] = var12;
        var12 = var19[var13];
        var12 = var18.bind(var3)(var12);
        var14 = var12.Text;
        var12 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var17 = var16.text;
        var12.style = var17;
        var17 = var19[var15];
        var17 = var18.bind(var3)(var17);
        var22 = var17.intl;
        var21 = var22.string;
        var17 = var19[var15];
        var17 = var18.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.Fq3DJb;
        var17 = var21.bind(var22)(var17);
        var12.children = var17;
        var12 = var2.bind(var3)(var14, var12);
        var11[1] = var12;
        var10.children = var11;
        var11 = var6.bind(var3)(var9, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var11 = {};
        var12 = var16.secondInnerContainer;
        var11.style = var12;
        var12 = {};
        var14 = var16.item;
        var12.style = var14;
        var14 = 17;
        var14 = var19[var14];
        var14 = var18.bind(var3)(var14);
        var17 = var14.LinkIcon;
        var14 = {};
        var14.size = var20;
        var14 = var2.bind(var3)(var17, var14);
        var12.children = var14;
        var14 = var2.bind(var3)(var9, var12);
        var12 = new Array(2);
        var12[0] = var14;
        var13 = var19[var13];
        var13 = var18.bind(var3)(var13);
        var14 = var13.Text;
        var13 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var16 = var16.text;
        var13.style = var16;
        var16 = var19[var15];
        var16 = var18.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var19[var15];
        var15 = var18.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.XKbf2G;
        var15 = var16.bind(var17)(var15);
        var13.children = var15;
        var13 = var2.bind(var3)(var14, var13);
        var12[1] = var13;
        var11.children = var12;
        var11 = var6.bind(var3)(var9, var11);
        var10[1] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 3171, 1358, 3237, 4894, 4667, 11761, 4043, 1234, 4896, 3900, 7814, 3213, 2]);