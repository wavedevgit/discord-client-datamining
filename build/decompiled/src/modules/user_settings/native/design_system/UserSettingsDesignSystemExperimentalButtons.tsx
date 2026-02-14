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
    var3 = var3.TABLE_ROW_PADDING;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemExperimentalButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 4;
        var0 = var12[var5];
        var3 = undefined;
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonState;
        var8 = var0.bind(var1)();
        var0 = var12[var5];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useCollapsibleFloatingActionButtonScroll;
        var10 = var0.bind(var1)(var8);
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var7 = _closure1_slot6;
        var13 = _closure1_slot4;
        var4 = {};
        var4.onScroll = var10;
        var19 = 5;
        var10 = var12[var19];
        var10 = var6.bind(var3)(var10);
        var15 = var10.Stack;
        var14 = {};
        var11 = _closure1_slot1;
        var22 = 6;
        var10 = var12[var22];
        var10 = var11.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_24;
        var14.spacing = var10;
        var10 = {};
        var21 = _closure1_slot5;
        var10.paddingHorizontal = var21;
        var14.style = var10;
        var17 = 7;
        var10 = var12[var17];
        var10 = var6.bind(var3)(var10);
        var16 = var10.TableRowGroup;
        var10 = {
            'title': 'Header Button',
            'description': "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button."
        };
        var18 = {};
        var20 = {};
        var23 = 'center';
        var20.alignItems = var23;
        var23 = var12[var22];
        var23 = var11.bind(var3)(var23);
        var23 = var23.unsafe_rawColors;
        var23 = var23.BG_GRADIENT_CHROMA_GLOW_1;
        var20.backgroundColor = var23;
        var23 = var12[var22];
        var23 = var11.bind(var3)(var23);
        var23 = var23.spacing;
        var23 = var23.PX_48;
        var20.paddingVertical = var23;
        var18.style = var20;
        var20 = var12[var5];
        var20 = var6.bind(var3)(var20);
        var23 = var20.HeaderButton;
        var20 = {
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
        var20.onPress = var24;
        var24 = 8;
        var24 = var12[var24];
        var24 = var11.bind(var3)(var24);
        var20.icon = var24;
        var20 = var7.bind(var3)(var23, var20);
        var18.children = var20;
        var18 = var7.bind(var3)(var1, var18);
        var10.children = var18;
        var10 = var7.bind(var3)(var16, var10);
        var16 = new Array(7);
        var16[0] = var10;
        var10 = var12[var17];
        var10 = var6.bind(var3)(var10);
        var18 = var10.TableRowGroup;
        var10 = {
            'title': 'Input Button',
            'description': 'A specialized button which looks like a text field, but functions as a button.'
        };
        var19 = var12[var19];
        var19 = var6.bind(var3)(var19);
        var20 = var19.Stack;
        var19 = {};
        var22 = var12[var22];
        var22 = var11.bind(var3)(var22);
        var22 = var22.spacing;
        var22 = var22.PX_24;
        var19.spacing = var22;
        var22 = var12[var5];
        var22 = var6.bind(var3)(var22);
        var23 = var22.InputButton;
        var22 = {
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
        var22.onPress = var24;
        var24 = 9;
        var24 = var12[var24];
        var24 = var11.bind(var3)(var24);
        var22.icon = var24;
        var23 = var7.bind(var3)(var23, var22);
        var22 = new Array(2);
        var22[0] = var23;
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
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var25;
        var25 = 10;
        var25 = var12[var25];
        var25 = var11.bind(var3)(var25);
        var23.icon = var25;
        var23 = var7.bind(var3)(var24, var23);
        var22[1] = var23;
        var19.children = var22;
        var19 = var2.bind(var3)(var20, var19);
        var10.children = var19;
        var10 = var7.bind(var3)(var18, var10);
        var16[1] = var10;
        var10 = var12[var17];
        var10 = var6.bind(var3)(var10);
        var18 = var10.TableRowGroup;
        var10 = {
            'title': 'Twin Buttons',
            'description': 'TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.'
        };
        var19 = var12[var5];
        var19 = var6.bind(var3)(var19);
        var20 = var19.TwinButtons;
        var19 = {};
        var23 = 11;
        var22 = var12[var23];
        var22 = var6.bind(var3)(var22);
        var24 = var22.Button;
        var22 = {};
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var22.onPress = var25;
        var25 = 'Add Status';
        var22.text = var25;
        var24 = var7.bind(var3)(var24, var22);
        var22 = new Array(2);
        var22[0] = var24;
        var23 = var12[var23];
        var23 = var6.bind(var3)(var23);
        var24 = var23.Button;
        var23 = {};
        var25 = function() {
            var0 = undefined;
            return var0;
        };
        var23.onPress = var25;
        var25 = 'Edit Profile';
        var23.text = var25;
        var23 = var7.bind(var3)(var24, var23);
        var22[1] = var23;
        var19.children = var22;
        var19 = var2.bind(var3)(var20, var19);
        var10.children = var19;
        var10 = var7.bind(var3)(var18, var10);
        var16[2] = var10;
        var10 = var12[var17];
        var10 = var6.bind(var3)(var10);
        var18 = var10.TableRowGroup;
        var10 = {
            'title': 'PressableScale',
            'description': 'If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.'
        };
        var19 = {};
        var20 = {};
        var20.padding = var21;
        var19.style = var20;
        var20 = var12[var5];
        var20 = var6.bind(var3)(var20);
        var21 = var20.PressableScale;
        var20 = {};
        var22 = function() {
            var0 = undefined;
            return var0;
        };
        var20.onPress = var22;
        var22 = {};
        var23 = 12;
        var24 = {
            'borderColor': 'pink',
            'borderWidth': 1,
            'borderRadius': 8,
            'padding': 12
        };
        var22.style = var24;
        var23 = var12[var23];
        var23 = var6.bind(var3)(var23);
        var24 = var23.Text;
        var23 = {
            'variant': 'text-md/semibold',
            'children': 'This is a custom button'
        };
        var23 = var7.bind(var3)(var24, var23);
        var22.children = var23;
        var22 = var7.bind(var3)(var1, var22);
        var20.children = var22;
        var20 = var7.bind(var3)(var21, var20);
        var19.children = var20;
        var19 = var7.bind(var3)(var1, var19);
        var10.children = var19;
        var10 = var7.bind(var3)(var18, var10);
        var16[3] = var10;
        var10 = var12[var17];
        var10 = var6.bind(var3)(var10);
        var18 = var10.TableRowGroup;
        var10 = {
            'title': 'Experimental Blur Background Row Button',
            'description': 'Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.'
        };
        var19 = {};
        var19 = var7.bind(var3)(var1, var19);
        var10.children = var19;
        var10 = var7.bind(var3)(var18, var10);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4879, 33, 7115, 4088, 671, 5425, 7770, 7101, 3265, 4092, 3940, 3166, 4106, 5442, 5432, 2]);