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
    var9 = var3.View;
    var _closure1_slot3 = var9;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_PADDING;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'text-md/semibold',
        'children': 'This is a custom button'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TableRowGroup;
    var3 = {
        'title': 'Experimental Blur Background Row Button',
        'description': 'Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.'
    };
    var8 = {};
    var8 = var7.bind(var0)(var9, var8);
    var3.children = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemExperimentalButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 6;
        var0 = var12[var5];
        var3 = undefined;
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonState;
        var8 = var0.bind(var1)();
        var0 = var12[var5];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonScroll;
        var11 = var0.bind(var1)(var8);
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var7 = _closure1_slot6;
        var13 = _closure1_slot4;
        var4 = {};
        var4.onScroll = var11;
        var20 = 7;
        var11 = var12[var20];
        var11 = var6.bind(var3)(var11);
        var15 = var11.Stack;
        var14 = {};
        var11 = _closure1_slot1;
        var23 = 8;
        var16 = var12[var23];
        var16 = var11.bind(var3)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_24;
        var14.spacing = var16;
        var16 = {};
        var22 = _closure1_slot5;
        var16.paddingHorizontal = var22;
        var14.style = var16;
        var17 = 5;
        var16 = var12[var17];
        var16 = var6.bind(var3)(var16);
        var18 = var16.TableRowGroup;
        var16 = {
            'title': 'Header Button',
            'description': "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button."
        };
        var19 = {};
        var21 = {};
        var24 = 'center';
        var21.alignItems = var24;
        var24 = var12[var23];
        var24 = var11.bind(var3)(var24);
        var24 = var24.unsafe_rawColors;
        var24 = var24.BG_GRADIENT_CHROMA_GLOW_1;
        var21.backgroundColor = var24;
        var24 = var12[var23];
        var24 = var11.bind(var3)(var24);
        var24 = var24.spacing;
        var24 = var24.PX_48;
        var21.paddingVertical = var24;
        var19.style = var21;
        var21 = var12[var5];
        var21 = var6.bind(var3)(var21);
        var24 = var21.HeaderButton;
        var21 = {
            'onPress': null,
            'text': 'Channel Name',
            'icon': null,
            'iconPosition': 'end',
            'accessibilityHint': 'double-tap for more options',
            'iconOpticalOffsetMargin': 4294967290
        };
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var21.onPress = var25;
        var25 = 9;
        var25 = var12[var25];
        var25 = var11.bind(var3)(var25);
        var21.icon = var25;
        var21 = var7.bind(var3)(var24, var21);
        var19.children = var21;
        var19 = var7.bind(var3)(var1, var19);
        var16.children = var19;
        var18 = var7.bind(var3)(var18, var16);
        var16 = new Array(7);
        var16[0] = var18;
        var18 = var12[var17];
        var18 = var6.bind(var3)(var18);
        var19 = var18.TableRowGroup;
        var18 = {
            'title': 'Input Button',
            'description': 'A specialized button which looks like a text field, but functions as a button.'
        };
        var20 = var12[var20];
        var20 = var6.bind(var3)(var20);
        var21 = var20.Stack;
        var20 = {};
        var23 = var12[var23];
        var23 = var11.bind(var3)(var23);
        var23 = var23.spacing;
        var23 = var23.PX_24;
        var20.spacing = var23;
        var23 = var12[var5];
        var23 = var6.bind(var3)(var23);
        var24 = var23.InputButton;
        var23 = {
            'onPress': null,
            'size': 'lg',
            'text': 'Search',
            'icon': null,
            'isRound': true
        };
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var25;
        var25 = 10;
        var25 = var12[var25];
        var25 = var11.bind(var3)(var25);
        var23.icon = var25;
        var24 = var7.bind(var3)(var24, var23);
        var23 = new Array(2);
        var23[0] = var24;
        var24 = var12[var5];
        var24 = var6.bind(var3)(var24);
        var25 = var24.InputButton;
        var24 = {
            'onPress': null,
            'size': 'lg',
            'text': 'http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'icon': null,
            'iconPosition': 'end',
            'accessibilityLabel': 'Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        };
        var26 = function() {
            var0 = undefined;
            return var0;
        };
        var24.onPress = var26;
        var26 = 11;
        var26 = var12[var26];
        var26 = var11.bind(var3)(var26);
        var24.icon = var26;
        var24 = var7.bind(var3)(var25, var24);
        var23[1] = var24;
        var20.children = var23;
        var20 = var2.bind(var3)(var21, var20);
        var18.children = var20;
        var18 = var7.bind(var3)(var19, var18);
        var16[1] = var18;
        var18 = var12[var17];
        var18 = var6.bind(var3)(var18);
        var19 = var18.TableRowGroup;
        var18 = {
            'title': 'Twin Buttons',
            'description': 'TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.'
        };
        var20 = var12[var5];
        var20 = var6.bind(var3)(var20);
        var21 = var20.TwinButtons;
        var20 = {};
        var24 = 12;
        var23 = var12[var24];
        var23 = var6.bind(var3)(var23);
        var25 = var23.Button;
        var23 = {};
        var26 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var26;
        var26 = 'Add Status';
        var23.text = var26;
        var25 = var7.bind(var3)(var25, var23);
        var23 = new Array(2);
        var23[0] = var25;
        var24 = var12[var24];
        var24 = var6.bind(var3)(var24);
        var25 = var24.Button;
        var24 = {};
        var26 = function() {
            var0 = undefined;
            return var0;
        };
        var24.onPress = var26;
        var26 = 'Edit Profile';
        var24.text = var26;
        var24 = var7.bind(var3)(var25, var24);
        var23[1] = var24;
        var20.children = var23;
        var20 = var2.bind(var3)(var21, var20);
        var18.children = var20;
        var18 = var7.bind(var3)(var19, var18);
        var16[2] = var18;
        var18 = var12[var17];
        var18 = var6.bind(var3)(var18);
        var19 = var18.TableRowGroup;
        var18 = {
            'title': 'PressableScale',
            'description': 'If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.'
        };
        var20 = {};
        var21 = {};
        var21.padding = var22;
        var20.style = var21;
        var21 = var12[var5];
        var21 = var6.bind(var3)(var21);
        var22 = var21.PressableScale;
        var21 = {};
        var23 = function() {
            var0 = undefined;
            return var0;
        };
        var21.onPress = var23;
        var23 = {};
        var24 = {
            'borderColor': 'pink',
            'borderWidth': 1,
            'borderRadius': 8,
            'padding': 12
        };
        var23.style = var24;
        var24 = _closure1_slot8;
        var23.children = var24;
        var23 = var7.bind(var3)(var1, var23);
        var21.children = var23;
        var21 = var7.bind(var3)(var22, var21);
        var20.children = var21;
        var20 = var7.bind(var3)(var1, var20);
        var18.children = var20;
        var18 = var7.bind(var3)(var19, var18);
        var16[3] = var18;
        var10 = _closure1_slot9;
        var16[4] = var10;
        var10 = 13;
        var10 = var12[var10];
        var10 = var6.bind(var3)(var10);
        var19 = var10.ThemeContextProvider;
        var18 = {};
        var10 = 'darker';
        var18.theme = var10;
        var10 = 14;
        var10 = var12[var10];
        var21 = var11.bind(var3)(var10);
        var20 = {};
        var22 = {};
        var10 = 16;
        var22.padding = var10;
        var20.style = var22;
        var22 = {
            'x': 0,
            'y': 0
        };
        var20.start = var22;
        var22 = {
            'x': 1,
            'y': 0
        };
        var20.end = var22;
        var22 = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];
        var20.colors = var22;
        var22 = 15;
        var22 = var12[var22];
        var22 = var6.bind(var3)(var22);
        var23 = var22.RowButton;
        var22 = {
            'icon': null,
            'label': 'Row Button',
            'subLabel': 'With a blur background',
            'experimental_withBlurBackground': true
        };
        var24 = var12[var10];
        var24 = var11.bind(var3)(var24);
        var22.icon = var24;
        var24 = function() {
            var0 = undefined;
            return var0;
        };
        var22.onPress = var24;
        var22 = var7.bind(var3)(var23, var22);
        var20.children = var22;
        var20 = var7.bind(var3)(var21, var20);
        var18.children = var20;
        var18 = var7.bind(var3)(var19, var18);
        var16[5] = var18;
        var17 = var12[var17];
        var17 = var6.bind(var3)(var17);
        var18 = var17.TableRowGroup;
        var17 = {
            'title': 'Collapsible Floating Action Button',
            'description': 'A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.'
        };
        var19 = {};
        var20 = {};
        var21 = 48;
        var20.padding = var21;
        var19.style = var20;
        var19 = var7.bind(var3)(var1, var19);
        var17.children = var19;
        var17 = var7.bind(var3)(var18, var17);
        var16[6] = var17;
        var14.children = var16;
        var14 = var2.bind(var3)(var15, var14);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4846, 33, 3938, 5343, 7123, 4086, 671, 8441, 7109, 3260, 4090, 3161, 4104, 5443, 5435, 2]);