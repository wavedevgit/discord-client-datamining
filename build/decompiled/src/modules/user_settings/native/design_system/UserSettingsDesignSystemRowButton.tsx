// modules/user_settings/native/design_system/UserSettingsDesignSystemRowButton.tsx
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemRowButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = _closure1_slot5;
        var12 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 3;
        var4 = var16[var0];
        var0 = undefined;
        var4 = var12.bind(var0)(var4);
        var5 = var4.FormSection;
        var4 = {};
        var8 = 'Row Buttons';
        var4.title = var8;
        var8 = 4;
        var9 = var16[var8];
        var9 = var12.bind(var0)(var9);
        var10 = var9.Stack;
        var9 = {};
        var11 = {};
        var15 = _closure1_slot1;
        var14 = 5;
        var14 = var16[var14];
        var14 = var15.bind(var0)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var11.padding = var14;
        var9.style = var11;
        var14 = 6;
        var11 = var16[var14];
        var11 = var12.bind(var0)(var11);
        var17 = var11.Text;
        var11 = {
            'variant': 'text-sm/normal',
            'children': 'Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.'
        };
        var17 = var7.bind(var0)(var17, var11);
        var11 = new Array(2);
        var11[0] = var17;
        var14 = var16[var14];
        var14 = var12.bind(var0)(var14);
        var17 = var14.Text;
        var14 = {
            'variant': 'text-sm/normal',
            'children': 'Only stack up to 2 Row Buttons in a row to to prevent decision fatigue.'
        };
        var14 = var7.bind(var0)(var17, var14);
        var11[1] = var14;
        var9.children = var11;
        var9 = var3.bind(var0)(var10, var9);
        var4.description = var9;
        var6 = _closure1_slot3;
        var9 = {};
        var9 = var7.bind(var0)(var6, var9);
        var4.children = var9;
        var5 = var7.bind(var0)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var9 = {};
        var10 = 16;
        var9.padding = var10;
        var5.style = var9;
        var8 = var16[var8];
        var8 = var12.bind(var0)(var8);
        var9 = var8.Stack;
        var8 = {};
        var11 = 7;
        var10 = var16[var11];
        var10 = var12.bind(var0)(var10);
        var17 = var10.RowButton;
        var10 = {
            'variant': 'primary',
            'icon': null,
            'label': 'Primary Row Button'
        };
        var14 = 8;
        var18 = var16[var14];
        var18 = var15.bind(var0)(var18);
        var10.icon = var18;
        var18 = function() {
            var0 = undefined;
            return var0;
        };
        var10.onPress = var18;
        var17 = var7.bind(var0)(var17, var10);
        var10 = new Array(7);
        var10[0] = var17;
        var17 = var16[var11];
        var17 = var12.bind(var0)(var17);
        var18 = var17.RowButton;
        var17 = {
            'variant': 'primary',
            'icon': null,
            'label': 'Primary Row Button',
            'subLabel': 'I am a high emphasis button with a subLabel'
        };
        var19 = var16[var14];
        var19 = var15.bind(var0)(var19);
        var17.icon = var19;
        var19 = function() {
            var0 = undefined;
            return var0;
        };
        var17.onPress = var19;
        var17 = var7.bind(var0)(var18, var17);
        var10[1] = var17;
        var17 = var16[var11];
        var17 = var12.bind(var0)(var17);
        var18 = var17.RowButton;
        var17 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Secondary Row Button'
        };
        var19 = var16[var14];
        var19 = var15.bind(var0)(var19);
        var17.icon = var19;
        var19 = function() {
            var0 = undefined;
            return var0;
        };
        var17.onPress = var19;
        var17 = var7.bind(var0)(var18, var17);
        var10[2] = var17;
        var17 = var16[var11];
        var17 = var12.bind(var0)(var17);
        var18 = var17.RowButton;
        var17 = {
            'icon': null,
            'label': 'Secondary Row Button',
            'subLabel': 'I am a high emphasis button with a subLabel'
        };
        var19 = var16[var14];
        var19 = var15.bind(var0)(var19);
        var17.icon = var19;
        var19 = function() {
            var0 = undefined;
            return var0;
        };
        var17.onPress = var19;
        var17 = var7.bind(var0)(var18, var17);
        var10[3] = var17;
        var17 = var16[var11];
        var17 = var12.bind(var0)(var17);
        var18 = var17.RowButton;
        var17 = {
            'icon': null,
            'label': 'Secondary Row Button',
            'subLabel': 'I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap'
        };
        var19 = var16[var14];
        var19 = var15.bind(var0)(var19);
        var17.icon = var19;
        var19 = function() {
            var0 = undefined;
            return var0;
        };
        var17.onPress = var19;
        var17 = var7.bind(var0)(var18, var17);
        var10[4] = var17;
        var17 = var16[var11];
        var17 = var12.bind(var0)(var17);
        var18 = var17.RowButton;
        var17 = {
            'icon': null,
            'label': 'Row Button',
            'subLabel': 'With a custom RowButton.Icon'
        };
        var19 = var16[var11];
        var19 = var12.bind(var0)(var19);
        var19 = var19.RowButton;
        var20 = var19.Icon;
        var19 = {};
        var21 = var16[var14];
        var21 = var15.bind(var0)(var21);
        var19.source = var21;
        var21 = 'boosting-pink';
        var19.variant = var21;
        var19 = var7.bind(var0)(var20, var19);
        var17.icon = var19;
        var19 = function() {
            var0 = undefined;
            return var0;
        };
        var17.onPress = var19;
        var17 = var7.bind(var0)(var18, var17);
        var10[5] = var17;
        var11 = var16[var11];
        var11 = var12.bind(var0)(var11);
        var12 = var11.RowButton;
        var11 = {
            'icon': null,
            'label': 'Row Button',
            'subLabel': 'I am disabled',
            'onPress': null,
            'disabled': true
        };
        var14 = var16[var14];
        var14 = var15.bind(var0)(var14);
        var11.icon = var14;
        var13 = function() {
            var0 = undefined;
            return var0;
        };
        var11.onPress = var13;
        var11 = var7.bind(var0)(var12, var11);
        var10[6] = var11;
        var8.children = var10;
        var8 = var3.bind(var0)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5430, 4080, 671, 3942, 5432, 5422, 2]);