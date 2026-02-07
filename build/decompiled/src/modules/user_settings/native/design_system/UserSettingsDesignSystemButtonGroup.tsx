// modules/user_settings/native/design_system/UserSettingsDesignSystemButtonGroup.tsx
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
    var3 = var3.ScrollView;
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
        'padding': 16,
        'paddingBottom': 64
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemButtonGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = _closure1_slot3;
        var4 = {};
        var6 = var6.container;
        var4.style = var6;
        var8 = _closure1_slot6;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var11 = 4;
        var6 = var16[var11];
        var6 = var15.bind(var3)(var6);
        var7 = var6.Stack;
        var6 = {};
        var9 = 24;
        var6.spacing = var9;
        var9 = {};
        var10 = var16[var11];
        var10 = var15.bind(var3)(var10);
        var12 = var10.Stack;
        var10 = {};
        var14 = 5;
        var13 = var16[var14];
        var13 = var15.bind(var3)(var13);
        var17 = var13.Text;
        var13 = {
            'variant': 'text-lg/bold',
            'children': 'Text Button Example'
        };
        var17 = var2.bind(var3)(var17, var13);
        var13 = new Array(3);
        var13[0] = var17;
        var17 = var16[var14];
        var17 = var15.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'By default, stacks buttons vertically. This is best for buttons with text.'
        };
        var17 = var2.bind(var3)(var18, var17);
        var13[1] = var17;
        var17 = 6;
        var18 = var16[var17];
        var18 = var15.bind(var3)(var18);
        var20 = var18.ButtonGroup;
        var18 = {};
        var19 = 7;
        var21 = var16[var19];
        var21 = var15.bind(var3)(var21);
        var24 = var21.Button;
        var21 = {
            'text': 'Agree',
            'variant': 'primary'
        };
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var21.onPress = var25;
        var24 = var2.bind(var3)(var24, var21);
        var21 = new Array(2);
        var21[0] = var24;
        var24 = var16[var19];
        var24 = var15.bind(var3)(var24);
        var25 = var24.Button;
        var24 = {
            'text': 'Cancel',
            'variant': 'secondary'
        };
        var26 = function() {
            var0 = undefined;
            return var0;
        };
        var24.onPress = var26;
        var24 = var2.bind(var3)(var25, var24);
        var21[1] = var24;
        var18.children = var21;
        var18 = var8.bind(var3)(var20, var18);
        var13[2] = var18;
        var10.children = var13;
        var10 = var8.bind(var3)(var12, var10);
        var9.children = var10;
        var10 = var2.bind(var3)(var5, var9);
        var9 = new Array(3);
        var9[0] = var10;
        var10 = {};
        var12 = var16[var11];
        var12 = var15.bind(var3)(var12);
        var13 = var12.Stack;
        var12 = {};
        var18 = var16[var14];
        var18 = var15.bind(var3)(var18);
        var20 = var18.Text;
        var18 = {
            'variant': 'text-lg/bold',
            'children': 'IconButton Example'
        };
        var20 = var2.bind(var3)(var20, var18);
        var18 = new Array(3);
        var18[0] = var20;
        var20 = var16[var14];
        var20 = var15.bind(var3)(var20);
        var21 = var20.Text;
        var20 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'For IconButtons, a horizontal layout is recommended'
        };
        var20 = var2.bind(var3)(var21, var20);
        var18[1] = var20;
        var20 = var16[var17];
        var20 = var15.bind(var3)(var20);
        var26 = var20.ButtonGroup;
        var25 = {};
        var21 = 'horizontal';
        var25.direction = var21;
        var20 = 8;
        var24 = var16[var20];
        var24 = var15.bind(var3)(var24);
        var28 = var24.IconButton;
        var27 = {
            'accessibilityLabel': 'Settings',
            'variant': 'secondary'
        };
        var24 = _closure1_slot1;
        var23 = 9;
        var29 = var16[var23];
        var29 = var24.bind(var3)(var29);
        var27.icon = var29;
        var29 = function() {
            var0 = undefined;
            return var0;
        };
        var27.onPress = var29;
        var28 = var2.bind(var3)(var28, var27);
        var27 = new Array(2);
        var27[0] = var28;
        var28 = var16[var20];
        var28 = var15.bind(var3)(var28);
        var29 = var28.IconButton;
        var28 = {
            'accessibilityLabel': 'Settings',
            'variant': 'secondary'
        };
        var30 = var16[var23];
        var30 = var24.bind(var3)(var30);
        var28.icon = var30;
        var30 = function() {
            var0 = undefined;
            return var0;
        };
        var28.onPress = var30;
        var28 = var2.bind(var3)(var29, var28);
        var27[1] = var28;
        var25.children = var27;
        var25 = var8.bind(var3)(var26, var25);
        var18[2] = var25;
        var12.children = var18;
        var12 = var8.bind(var3)(var13, var12);
        var10.children = var12;
        var10 = var2.bind(var3)(var5, var10);
        var9[1] = var10;
        var10 = {};
        var11 = var16[var11];
        var11 = var15.bind(var3)(var11);
        var12 = var11.Stack;
        var11 = {};
        var13 = var16[var14];
        var13 = var15.bind(var3)(var13);
        var18 = var13.Text;
        var13 = {
            'variant': 'text-lg/bold',
            'children': 'Mixed Buttons Example'
        };
        var18 = var2.bind(var3)(var18, var13);
        var13 = new Array(6);
        var13[0] = var18;
        var18 = var16[var14];
        var18 = var15.bind(var3)(var18);
        var25 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout.'
        };
        var18 = var2.bind(var3)(var25, var18);
        var13[1] = var18;
        var18 = var16[var14];
        var18 = var15.bind(var3)(var18);
        var25 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'The Button with text must have the grow prop.'
        };
        var18 = var2.bind(var3)(var25, var18);
        var13[2] = var18;
        var17 = var16[var17];
        var17 = var15.bind(var3)(var17);
        var18 = var17.ButtonGroup;
        var17 = {};
        var17.direction = var21;
        var19 = var16[var19];
        var19 = var15.bind(var3)(var19);
        var21 = var19.Button;
        var19 = {
            'text': 'Search',
            'variant': 'secondary',
            'grow': true
        };
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var19.onPress = var25;
        var21 = var2.bind(var3)(var21, var19);
        var19 = new Array(2);
        var19[0] = var21;
        var20 = var16[var20];
        var20 = var15.bind(var3)(var20);
        var21 = var20.IconButton;
        var20 = {
            'accessibilityLabel': 'Cancel',
            'variant': 'secondary'
        };
        var23 = var16[var23];
        var23 = var24.bind(var3)(var23);
        var20.icon = var23;
        var22 = function() {
            var0 = undefined;
            return var0;
        };
        var20.onPress = var22;
        var20 = var2.bind(var3)(var21, var20);
        var19[1] = var20;
        var17.children = var19;
        var17 = var8.bind(var3)(var18, var17);
        var13[3] = var17;
        var17 = var16[var14];
        var17 = var15.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-sm/medium',
            'color': 'text-feedback-critical',
            'children': 'More than one text button should not be put in a horizontal group.'
        };
        var17 = var2.bind(var3)(var18, var17);
        var13[4] = var17;
        var14 = var16[var14];
        var14 = var15.bind(var3)(var14);
        var15 = var14.Text;
        var14 = {
            'variant': 'text-sm/medium',
            'color': 'text-subtle',
            'children': 'This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.'
        };
        var14 = var2.bind(var3)(var15, var14);
        var13[5] = var14;
        var11.children = var13;
        var11 = var8.bind(var3)(var12, var11);
        var10.children = var11;
        var10 = var2.bind(var3)(var5, var10);
        var9[2] = var10;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4080, 3942, 6510, 4084, 7579, 5422, 2]);