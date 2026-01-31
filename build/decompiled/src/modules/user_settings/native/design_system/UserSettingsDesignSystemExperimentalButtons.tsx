// modules/user_settings/native/design_system/UserSettingsDesignSystemExperimentalButtons.tsx
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
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemExperimentalButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 3;
        var0 = var12[var5];
        var3 = undefined;
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonState;
        var8 = var0.bind(var1)();
        var0 = var12[var5];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonScroll;
        var10 = var0.bind(var1)(var8);
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var7 = _closure1_slot5;
        var13 = _closure1_slot4;
        var4 = {};
        var4.onScroll = var10;
        var14 = {};
        var18 = 4;
        var10 = var12[var18];
        var10 = var6.bind(var3)(var10);
        var15 = var10.FormSection;
        var10 = {};
        var11 = 'Header Button';
        var10.title = var11;
        var22 = 5;
        var11 = var12[var22];
        var11 = var6.bind(var3)(var11);
        var19 = var11.Text;
        var16 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button."
        };
        var20 = {};
        var11 = _closure1_slot1;
        var26 = 6;
        var21 = var12[var26];
        var21 = var11.bind(var3)(var21);
        var21 = var21.spacing;
        var21 = var21.PX_16;
        var20.padding = var21;
        var25 = 0;
        var20.paddingTop = var25;
        var16.style = var20;
        var16 = var7.bind(var3)(var19, var16);
        var10.description = var16;
        var16 = var12[var18];
        var16 = var6.bind(var3)(var16);
        var19 = var16.FormRow;
        var16 = {};
        var20 = {};
        var21 = {};
        var23 = 'center';
        var21.alignItems = var23;
        var20.style = var21;
        var21 = var12[var5];
        var21 = var6.bind(var3)(var21);
        var23 = var21.HeaderButton;
        var21 = {
            'onPress': null,
            'text': 'Channel Name',
            'icon': null,
            'iconPosition': 'end',
            'accessibilityHint': 'double-tap for more options',
            'iconOpticalOffsetMargin': 4294967290
        };
        var24 = function() {
            var0 = undefined;
            return var0;
        };
        var21.onPress = var24;
        var24 = 7;
        var24 = var12[var24];
        var24 = var11.bind(var3)(var24);
        var21.icon = var24;
        var21 = var7.bind(var3)(var23, var21);
        var20.children = var21;
        var20 = var7.bind(var3)(var1, var20);
        var16.label = var20;
        var20 = {};
        var21 = var12[var26];
        var21 = var11.bind(var3)(var21);
        var21 = var21.unsafe_rawColors;
        var21 = var21.BG_GRADIENT_CHROMA_GLOW_1;
        var20.backgroundColor = var21;
        var21 = var12[var26];
        var21 = var11.bind(var3)(var21);
        var21 = var21.spacing;
        var21 = var21.PX_48;
        var20.paddingVertical = var21;
        var16.style = var20;
        var16 = var7.bind(var3)(var19, var16);
        var10.children = var16;
        var10 = var7.bind(var3)(var15, var10);
        var15 = new Array(7);
        var15[0] = var10;
        var10 = var12[var18];
        var10 = var6.bind(var3)(var10);
        var16 = var10.FormSection;
        var10 = {};
        var19 = 'Input Button';
        var10.title = var19;
        var19 = var12[var22];
        var19 = var6.bind(var3)(var19);
        var20 = var19.Text;
        var19 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'A specialized button which looks like a text field, but functions as a button.'
        };
        var21 = {};
        var23 = var12[var26];
        var23 = var11.bind(var3)(var23);
        var23 = var23.spacing;
        var23 = var23.PX_16;
        var21.padding = var23;
        var21.paddingTop = var25;
        var19.style = var21;
        var19 = var7.bind(var3)(var20, var19);
        var10.description = var19;
        var19 = var12[var18];
        var19 = var6.bind(var3)(var19);
        var20 = var19.FormRow;
        var19 = {};
        var21 = var12[var5];
        var21 = var6.bind(var3)(var21);
        var23 = var21.InputButton;
        var21 = {
            'onPress': null,
            'size': 'lg',
            'text': 'Search',
            'icon': null,
            'isRound': true
        };
        var24 = function() {
            var0 = undefined;
            return var0;
        };
        var21.onPress = var24;
        var24 = 8;
        var24 = var12[var24];
        var24 = var11.bind(var3)(var24);
        var21.icon = var24;
        var21 = var7.bind(var3)(var23, var21);
        var19.label = var21;
        var20 = var7.bind(var3)(var20, var19);
        var19 = new Array(2);
        var19[0] = var20;
        var20 = var12[var18];
        var20 = var6.bind(var3)(var20);
        var21 = var20.FormRow;
        var20 = {};
        var23 = var12[var5];
        var23 = var6.bind(var3)(var23);
        var24 = var23.InputButton;
        var23 = {
            'onPress': null,
            'size': 'lg',
            'text': 'http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'icon': null,
            'iconPosition': 'end',
            'accessibilityLabel': 'Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        };
        var27 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var27;
        var27 = 9;
        var27 = var12[var27];
        var27 = var11.bind(var3)(var27);
        var23.icon = var27;
        var23 = var7.bind(var3)(var24, var23);
        var20.label = var23;
        var20 = var7.bind(var3)(var21, var20);
        var19[1] = var20;
        var10.children = var19;
        var10 = var2.bind(var3)(var16, var10);
        var15[1] = var10;
        var10 = var12[var18];
        var10 = var6.bind(var3)(var10);
        var16 = var10.FormSection;
        var10 = {};
        var19 = 'Twin Buttons';
        var10.title = var19;
        var20 = _closure1_slot7;
        var17 = {};
        var19 = var12[var22];
        var19 = var6.bind(var3)(var19);
        var21 = var19.Text;
        var19 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other.'
        };
        var23 = {};
        var24 = var12[var26];
        var24 = var11.bind(var3)(var24);
        var24 = var24.spacing;
        var24 = var24.PX_16;
        var23.padding = var24;
        var23.paddingTop = var25;
        var19.style = var23;
        var21 = var7.bind(var3)(var21, var19);
        var19 = new Array(2);
        var19[0] = var21;
        var21 = var12[var22];
        var21 = var6.bind(var3)(var21);
        var23 = var21.Text;
        var21 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.'
        };
        var24 = {};
        var27 = var12[var26];
        var27 = var11.bind(var3)(var27);
        var27 = var27.spacing;
        var27 = var27.PX_16;
        var24.padding = var27;
        var24.paddingTop = var25;
        var21.style = var24;
        var21 = var7.bind(var3)(var23, var21);
        var19[1] = var21;
        var17.children = var19;
        var17 = var2.bind(var3)(var20, var17);
        var10.description = var17;
        var17 = var12[var18];
        var17 = var6.bind(var3)(var17);
        var19 = var17.FormRow;
        var17 = {};
        var21 = var12[var5];
        var21 = var6.bind(var3)(var21);
        var23 = var21.TwinButtons;
        var21 = {};
        var27 = 10;
        var24 = var12[var27];
        var24 = var6.bind(var3)(var24);
        var28 = var24.Button;
        var24 = {};
        var29 = function() {
            var0 = undefined;
            return var0;
        };
        var24.onPress = var29;
        var29 = 'Add Status';
        var24.text = var29;
        var28 = var7.bind(var3)(var28, var24);
        var24 = new Array(2);
        var24[0] = var28;
        var27 = var12[var27];
        var27 = var6.bind(var3)(var27);
        var28 = var27.Button;
        var27 = {};
        var29 = function() {
            var0 = undefined;
            return var0;
        };
        var27.onPress = var29;
        var29 = 'Edit Profile';
        var27.text = var29;
        var27 = var7.bind(var3)(var28, var27);
        var24[1] = var27;
        var21.children = var24;
        var21 = var2.bind(var3)(var23, var21);
        var17.label = var21;
        var17 = var7.bind(var3)(var19, var17);
        var10.children = var17;
        var10 = var7.bind(var3)(var16, var10);
        var15[2] = var10;
        var10 = var12[var18];
        var10 = var6.bind(var3)(var10);
        var17 = var10.FormSection;
        var16 = {};
        var10 = 'PressableScale';
        var16.title = var10;
        var10 = var12[var22];
        var10 = var6.bind(var3)(var10);
        var19 = var10.Text;
        var10 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.'
        };
        var21 = {};
        var23 = var12[var26];
        var23 = var11.bind(var3)(var23);
        var23 = var23.spacing;
        var23 = var23.PX_16;
        var21.padding = var23;
        var21.paddingTop = var25;
        var10.style = var21;
        var10 = var7.bind(var3)(var19, var10);
        var16.description = var10;
        var10 = var12[var18];
        var10 = var6.bind(var3)(var10);
        var21 = var10.FormRow;
        var19 = {};
        var10 = var12[var5];
        var10 = var6.bind(var3)(var10);
        var24 = var10.PressableScale;
        var23 = {};
        var10 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var10;
        var27 = {};
        var10 = 12;
        var28 = {
            'borderColor': 'pink',
            'borderWidth': 1,
            'borderRadius': 8,
            'padding': 12
        };
        var27.style = var28;
        var28 = var12[var22];
        var28 = var6.bind(var3)(var28);
        var29 = var28.Text;
        var28 = {
            'variant': 'text-md/semibold',
            'children': 'This is a custom button'
        };
        var28 = var7.bind(var3)(var29, var28);
        var27.children = var28;
        var27 = var7.bind(var3)(var1, var27);
        var23.children = var27;
        var23 = var7.bind(var3)(var24, var23);
        var19.label = var23;
        var19 = var7.bind(var3)(var21, var19);
        var16.children = var19;
        var16 = var7.bind(var3)(var17, var16);
        var15[3] = var16;
        var16 = var12[var18];
        var16 = var6.bind(var3)(var16);
        var17 = var16.FormSection;
        var16 = {};
        var19 = 'Experimental Blur Background Row Button';
        var16.title = var19;
        var19 = var12[var22];
        var19 = var6.bind(var3)(var19);
        var21 = var19.Text;
        var19 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.'
        };
        var23 = {};
        var24 = var12[var26];
        var24 = var11.bind(var3)(var24);
        var24 = var24.spacing;
        var24 = var24.PX_16;
        var23.padding = var24;
        var23.paddingTop = var25;
        var19.style = var23;
        var19 = var7.bind(var3)(var21, var19);
        var16.description = var19;
        var19 = {};
        var19 = var7.bind(var3)(var1, var19);
        var16.children = var19;
        var16 = var7.bind(var3)(var17, var16);
        var15[4] = var16;
        var16 = 11;
        var16 = var12[var16];
        var16 = var6.bind(var3)(var16);
        var17 = var16.ThemeContextProvider;
        var16 = {};
        var19 = 'darker';
        var16.theme = var19;
        var10 = var12[var10];
        var21 = var11.bind(var3)(var10);
        var19 = {};
        var10 = {};
        var23 = 16;
        var10.padding = var23;
        var19.style = var10;
        var10 = {
            'x': 0,
            'y': 0
        };
        var19.start = var10;
        var10 = {
            'x': 1,
            'y': 0
        };
        var19.end = var10;
        var10 = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];
        var19.colors = var10;
        var10 = 13;
        var10 = var12[var10];
        var10 = var6.bind(var3)(var10);
        var24 = var10.RowButton;
        var23 = {
            'icon': null,
            'label': 'Row Button',
            'subLabel': 'With a blur background',
            'experimental_withBlurBackground': true
        };
        var10 = 14;
        var27 = var12[var10];
        var27 = var11.bind(var3)(var27);
        var23.icon = var27;
        var27 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var27;
        var23 = var7.bind(var3)(var24, var23);
        var19.children = var23;
        var19 = var7.bind(var3)(var21, var19);
        var16.children = var19;
        var16 = var7.bind(var3)(var17, var16);
        var15[5] = var16;
        var16 = var12[var18];
        var16 = var6.bind(var3)(var16);
        var17 = var16.FormSection;
        var16 = {};
        var19 = 'Collapsible Floating Action Button';
        var16.title = var19;
        var19 = {};
        var21 = var12[var22];
        var21 = var6.bind(var3)(var21);
        var23 = var21.Text;
        var21 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'A variation of the FloatingActionButton which will display some text until the user scrolls.'
        };
        var24 = {};
        var27 = var12[var26];
        var27 = var11.bind(var3)(var27);
        var27 = var27.spacing;
        var27 = var27.PX_16;
        var24.padding = var27;
        var24.paddingTop = var25;
        var21.style = var24;
        var23 = var7.bind(var3)(var23, var21);
        var21 = new Array(2);
        var21[0] = var23;
        var22 = var12[var22];
        var22 = var6.bind(var3)(var22);
        var23 = var22.Text;
        var22 = {
            'variant': 'text-sm/normal',
            'style': null,
            'children': 'We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.'
        };
        var24 = {};
        var26 = var12[var26];
        var26 = var11.bind(var3)(var26);
        var26 = var26.spacing;
        var26 = var26.PX_16;
        var24.padding = var26;
        var24.paddingTop = var25;
        var22.style = var24;
        var22 = var7.bind(var3)(var23, var22);
        var21[1] = var22;
        var19.children = var21;
        var19 = var2.bind(var3)(var20, var19);
        var16.description = var19;
        var18 = var12[var18];
        var18 = var6.bind(var3)(var18);
        var19 = var18.FormRow;
        var18 = {};
        var20 = {};
        var21 = {};
        var22 = 48;
        var21.padding = var22;
        var20.style = var21;
        var20 = var7.bind(var3)(var1, var20);
        var18.label = var20;
        var18 = var7.bind(var3)(var19, var18);
        var16.children = var18;
        var16 = var7.bind(var3)(var17, var16);
        var15[6] = var16;
        var14.children = var15;
        var14 = var2.bind(var3)(var1, var14);
        var4.children = var14;
        var13 = var7.bind(var3)(var13, var4);
        var4 = new Array(2);
        var4[0] = var13;
        var5 = var12[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.CollapsibleFloatingActionButton;
        var5 = {};
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var5.icon = var10;
        var9 = function() {
            var0 = undefined;
            return var0;
        };
        var5.onPress = var9;
        var9 = 32;
        var5.positionBottom = var9;
        var9 = 'Floating Action Button';
        var5.text = var9;
        var5.state = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 6987, 5340, 3900, 671, 7703, 6973, 3218, 4043, 3118, 4057, 5342, 5332, 2]);