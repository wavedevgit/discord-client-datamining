// modules/user_settings/native/connections/two_way_link/TwoWayLinkError.tsx
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
    var6 = var3.Image;
    var _closure1_slot3 = var6;
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
    var8 = {
        'width': 254,
        'height': 127,
        'marginBottom': 32
    };
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/TwoWayLinkError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.onClose;
        var12 = var0.title;
        var9 = var0.body;
        var15 = var0.onRetry;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var0 = 4;
        var0 = var18[var0];
        var1 = var17.bind(var3)(var0);
        var0 = var1.useTwoWayLinkStyles;
        var10 = var0.bind(var1)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var4 = {};
        var5 = var10.content;
        var4.style = var5;
        var7 = _closure1_slot5;
        var6 = _closure1_slot3;
        var5 = {};
        var14 = _closure1_slot1;
        var11 = 5;
        var11 = var18[var11];
        var11 = var14.bind(var3)(var11);
        var5.source = var11;
        var8 = var8.image;
        var5.style = var8;
        var6 = var7.bind(var3)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var6 = 6;
        var8 = var18[var6];
        var8 = var17.bind(var3)(var8);
        var11 = var8.Text;
        var8 = {
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var10.title;
        var8.style = var14;
        var8.children = var12;
        var8 = var7.bind(var3)(var11, var8);
        var5[1] = var8;
        var6 = var18[var6];
        var6 = var17.bind(var3)(var6);
        var8 = var6.Text;
        var6 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var11 = var10.body;
        var6.style = var11;
        var6.children = var9;
        var6 = var7.bind(var3)(var8, var6);
        var5[2] = var6;
        var4.children = var5;
        var5 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 7;
        var5 = var18[var5];
        var5 = var17.bind(var3)(var5);
        var6 = var5.SafeAreaPaddingView;
        var5 = {};
        var8 = true;
        var5.bottom = var8;
        var8 = var10.footerContainer;
        var5.style = var8;
        var8 = 8;
        var8 = var18[var8];
        var8 = var17.bind(var3)(var8);
        var9 = var8.Stack;
        var8 = {
            'spacing': 8,
            'direction': 'vertical'
        };
        var10 = var10.footerButton;
        var8.style = var10;
        var11 = 9;
        var10 = var18[var11];
        var10 = var17.bind(var3)(var10);
        var12 = var10.Button;
        var10 = {
            'size': 'lg',
            'variant': 'primary'
        };
        var14 = 10;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var20 = var16.intl;
        var19 = var20.string;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["5911Lb"];
        var16 = var19.bind(var20)(var16);
        var10.text = var16;
        var10.onPress = var15;
        var12 = var7.bind(var3)(var12, var10);
        var10 = new Array(2);
        var10[0] = var12;
        var11 = var18[var11];
        var11 = var17.bind(var3)(var11);
        var12 = var11.Button;
        var11 = {
            'size': 'lg',
            'variant': 'secondary'
        };
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14["ETE/oC"];
        var14 = var15.bind(var16)(var14);
        var11.text = var14;
        var11.onPress = var13;
        var11 = var7.bind(var3)(var12, var11);
        var10[1] = var11;
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.TwoWayLinkError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5335, 5788, 3941, 4736, 4080, 4084, 1234, 2]);