// modules/user_settings/native/design_system/UserSettingsDesignSystemStack.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var19 = function() {
        var1 = _closure1_slot3;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot2;
        var1 = _closure1_slot0;
        var0 = {};
        var4 = var4.block;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot0 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.jsx;
    var _closure1_slot2 = var11;
    var7 = var3.jsxs;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var6 = var9.createStyles;
    var3 = {};
    var8 = 16;
    var10 = {
        'padding': 16,
        'flex': 1,
        'alignItems': 'center'
    };
    var3.container = var10;
    var10 = {};
    var13 = 4;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10.borderRadius = var15;
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_STRONG;
    var10.backgroundColor = var13;
    var13 = 80;
    var10.height = var13;
    var10.flex = var12;
    var3.block = var10;
    var3 = var6.bind(var9)(var3);
    var _closure1_slot3 = var3;
    var15 = 5;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Stack;
    var3 = {};
    var3.spacing = var8;
    var9 = 6;
    var8 = var5[var9];
    var8 = var4.bind(var0)(var8);
    var10 = var8.Card;
    var8 = {};
    var12 = var5[var15];
    var12 = var4.bind(var0)(var12);
    var13 = var12.Stack;
    var12 = {};
    var16 = 7;
    var14 = var5[var16];
    var14 = var4.bind(var0)(var14);
    var17 = var14.Text;
    var14 = {
        'variant': 'text-lg/bold',
        'children': 'Basic Example'
    };
    var17 = var11.bind(var0)(var17, var14);
    var14 = new Array(3);
    var14[0] = var17;
    var17 = var5[var16];
    var17 = var4.bind(var0)(var17);
    var18 = var17.Text;
    var17 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'By default, stacks are vertical and have a spacing of 8.'
    };
    var17 = var11.bind(var0)(var18, var17);
    var14[1] = var17;
    var17 = var5[var15];
    var17 = var4.bind(var0)(var17);
    var18 = var17.Stack;
    var17 = {};
    var20 = {};
    var21 = var11.bind(var0)(var19, var20);
    var20 = new Array(2);
    var20[0] = var21;
    var21 = {};
    var21 = var11.bind(var0)(var19, var21);
    var20[1] = var21;
    var17.children = var20;
    var17 = var7.bind(var0)(var18, var17);
    var14[2] = var17;
    var12.children = var14;
    var12 = var7.bind(var0)(var13, var12);
    var8.children = var12;
    var10 = var11.bind(var0)(var10, var8);
    var8 = new Array(3);
    var8[0] = var10;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var12 = var10.Card;
    var10 = {};
    var13 = var5[var15];
    var13 = var4.bind(var0)(var13);
    var14 = var13.Stack;
    var13 = {};
    var17 = var5[var16];
    var17 = var4.bind(var0)(var17);
    var18 = var17.Text;
    var17 = {
        'variant': 'text-lg/bold',
        'children': 'Spacing'
    };
    var18 = var11.bind(var0)(var18, var17);
    var17 = new Array(3);
    var17[0] = var18;
    var18 = var5[var16];
    var18 = var4.bind(var0)(var18);
    var20 = var18.Text;
    var18 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8.'
    };
    var18 = var11.bind(var0)(var20, var18);
    var17[1] = var18;
    var18 = var5[var15];
    var18 = var4.bind(var0)(var18);
    var20 = var18.Stack;
    var18 = {};
    var21 = 24;
    var18.spacing = var21;
    var21 = {};
    var22 = var11.bind(var0)(var19, var21);
    var21 = new Array(2);
    var21[0] = var22;
    var22 = {};
    var22 = var11.bind(var0)(var19, var22);
    var21[1] = var22;
    var18.children = var21;
    var18 = var7.bind(var0)(var20, var18);
    var17[2] = var18;
    var13.children = var17;
    var13 = var7.bind(var0)(var14, var13);
    var10.children = var13;
    var10 = var11.bind(var0)(var12, var10);
    var8[1] = var10;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var10 = var9.Card;
    var9 = {};
    var12 = var5[var15];
    var12 = var4.bind(var0)(var12);
    var13 = var12.Stack;
    var12 = {};
    var14 = var5[var16];
    var14 = var4.bind(var0)(var14);
    var17 = var14.Text;
    var14 = {
        'variant': 'text-lg/bold',
        'children': 'Horizontal'
    };
    var17 = var11.bind(var0)(var17, var14);
    var14 = new Array(3);
    var14[0] = var17;
    var16 = var5[var16];
    var16 = var4.bind(var0)(var16);
    var17 = var16.Text;
    var16 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'You can control the direction with the direction prop. The direction prop can be either horizontal or vertical.'
    };
    var16 = var11.bind(var0)(var17, var16);
    var14[1] = var16;
    var15 = var5[var15];
    var15 = var4.bind(var0)(var15);
    var16 = var15.Stack;
    var15 = {};
    var17 = 'horizontal';
    var15.direction = var17;
    var17 = {};
    var18 = var11.bind(var0)(var19, var17);
    var17 = new Array(2);
    var17[0] = var18;
    var18 = {};
    var18 = var11.bind(var0)(var19, var18);
    var17[1] = var18;
    var15.children = var17;
    var15 = var7.bind(var0)(var16, var15);
    var14[2] = var15;
    var12.children = var14;
    var12 = var7.bind(var0)(var13, var12);
    var9.children = var12;
    var9 = var11.bind(var0)(var10, var9);
    var8[2] = var9;
    var3.children = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemStack.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot3;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot2;
        var1 = _closure1_slot1;
        var0 = {};
        var5 = _closure1_slot0;
        var4 = {};
        var7 = var7.container;
        var4.style = var7;
        var6 = _closure1_slot4;
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4086, 4878, 3938, 2]);