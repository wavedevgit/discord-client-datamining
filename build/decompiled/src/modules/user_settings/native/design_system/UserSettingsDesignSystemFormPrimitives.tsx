// modules/user_settings/native/design_system/UserSettingsDesignSystemFormPrimitives.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var8 = function arg0() {
        _fun87313: for (var _fun87313_ip = 0;;) switch (_fun87313_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.label;
                var7 = var0.description;
                var6 = var0.required;
                var1 = var0.startChecked;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun87313_ip = 33;
                    continue _fun87313
                }
            case 31:
                var1 = false;
            case 33:
                var0 = function() { // Environment: var0
                    _fun87314: for (var _fun87314_ip = 0;;) switch (_fun87314_ip) {
                        case 0:
                            var4 = arguments[0];
                            var5 = undefined;
                            if (!(var4 === var5)) {
                                _fun87314_ip = 13;
                                continue _fun87314
                            }
                        case 11:
                            var4 = true;
                        case 13:
                            var _closure3_slot0 = var5;
                            var3 = _closure1_slot3;
                            var0 = var3.useState;
                            var4 = var0.bind(var3)(var4);
                            var3 = _closure1_slot2;
                            var0 = 2;
                            var4 = var3.bind(var5)(var4, var0);
                            var0 = 0;
                            var3 = var4[var0];
                            var0 = 1;
                            var0 = var4[var0];
                            _closure3_slot0 = var0;
                            var0 = {};
                            var0.checked = var3;
                            var4 = _closure1_slot3;
                            var3 = var4.useCallback;
                            var2 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = new Array(0);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.onPress = var1;
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var1);
                var5 = var0.checked;
                var4 = var0.onPress;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 11;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Checkbox;
                var0 = {};
                var0.label = var8;
                var0.description = var7;
                var0.required = var6;
                var0.checked = var5;
                var0.onToggle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.NOOP;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var9 = var3.jsxs;
    var _closure1_slot6 = var9;
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = 5;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var6 = var12.createStyles;
    var3 = {};
    var11 = 16;
    var13 = {
        'padding': 16,
        'paddingBottom': 32
    };
    var3.container = var13;
    var3 = var6.bind(var12)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Radio'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot9 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Select a single option from a short list of multiple options'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var12 = var6.TableRadioGroup;
    var6 = {
        'title': 'Role Colors',
        'hasIcons': false,
        'defaultValue': 'color-in-names'
    };
    var6.onChange = var10;
    var14 = 8;
    var13 = var5[var14];
    var13 = var4.bind(var0)(var13);
    var15 = var13.TableRadioRow;
    var13 = {
        'label': 'Show role colors in names',
        'value': 'color-in-names'
    };
    var15 = var7.bind(var0)(var15, var13);
    var13 = new Array(4);
    var13[0] = var15;
    var15 = var5[var14];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TableRadioRow;
    var15 = {
        'label': 'Show role colors next to names',
        'value': 'color-next-to-names'
    };
    var15 = var7.bind(var0)(var16, var15);
    var13[1] = var15;
    var15 = var5[var14];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TableRadioRow;
    var15 = {
        'label': "Don't show role colors",
        'value': 'no-color'
    };
    var15 = var7.bind(var0)(var16, var15);
    var13[2] = var15;
    var14 = var5[var14];
    var14 = var4.bind(var0)(var14);
    var15 = var14.TableRadioRow;
    var14 = {
        'label': 'Disabled Item',
        'subLabel': 'This should not be selectable',
        'value': 'option4',
        'disabled': true
    };
    var14 = var7.bind(var0)(var15, var14);
    var13[3] = var14;
    var6.children = var13;
    var6 = var9.bind(var0)(var12, var6);
    var _closure1_slot11 = var6;
    var6 = function() {
        _fun87319: for (var _fun87319_ip = 0;;) switch (_fun87319_ip) {
            case 0:
                var4 = arguments[0];
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun87319_ip = 13;
                    continue _fun87319
                }
            case 11:
                var4 = true;
            case 13:
                var _closure2_slot0 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useState;
                var4 = var2.bind(var3)(var4);
                var3 = _closure1_slot2;
                var2 = 2;
                var4 = var3.bind(var5)(var4, var2);
                var2 = 0;
                var2 = var4[var2];
                var3 = 1;
                var3 = var4[var3];
                _closure2_slot0 = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var1 = var3.bind(var4)(var1, var0);
                var0 = {};
                var0.value = var2;
                var0.onValueChange = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Switch'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot13 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Toggle the state of a single setting on or off, immediately'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var12 = var6.TableSwitchRow;
    var6 = {
        'label': 'Disabled switch item',
        'subLabel': 'This should not be switchable',
        'disabled': true,
        'value': false
    };
    var6.onValueChange = var10;
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot15 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Inline Checkbox'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot16 = var6;
    var6 = {
        'label': 'Checkbox label',
        'description': 'This is a description',
        'startChecked': true
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot17 = var6;
    var6 = {};
    var12 = 'Trust google.com links from now on';
    var6.label = var12;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot18 = var6;
    var6 = {
        'label': 'I agree to the Terms of Service',
        'required': true
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot19 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Checkbox'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot20 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Select one or more options from a short list of options'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot21 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.TableRowGroup;
    var6 = {};
    var12 = 'Who can send you a friend request?';
    var6.title = var12;
    var13 = 12;
    var12 = var5[var13];
    var12 = var4.bind(var0)(var12);
    var14 = var12.TableCheckboxRow;
    var12 = {
        'label': 'Everyone',
        'subLabel': 'Anyone can send you a friend request',
        'checked': false
    };
    var12.onPress = var10;
    var14 = var7.bind(var0)(var14, var12);
    var12 = new Array(3);
    var12[0] = var14;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var15 = var14.TableCheckboxRow;
    var14 = {
        'label': 'Friends of Friends',
        'subLabel': 'Anyone who is friends with your friends can send you a friend request',
        'checked': true
    };
    var14.onPress = var10;
    var14 = var7.bind(var0)(var15, var14);
    var12[1] = var14;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var14 = var13.TableCheckboxRow;
    var13 = {
        'label': 'Server Members',
        'subLabel': 'Anyone who is in a server with you can send you a friend request',
        'checked': true
    };
    var13.onPress = var10;
    var13 = var7.bind(var0)(var14, var13);
    var12[2] = var13;
    var6.children = var12;
    var6 = var9.bind(var0)(var8, var6);
    var _closure1_slot22 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'heading-lg/bold',
        'children': 'Slider'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot23 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TableRow;
    var3 = {
        'start': true,
        'end': true,
        'label': 'Volume'
    };
    var8 = 14;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Slider;
    var8 = {};
    var12 = 15;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var13 = var12.VoiceXIcon;
    var12 = {};
    var12 = var7.bind(var0)(var13, var12);
    var8.startIcon = var12;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var12 = var11.VoiceNormalIcon;
    var11 = {};
    var11 = var7.bind(var0)(var12, var11);
    var8.endIcon = var11;
    var8.onValueChange = var10;
    var8 = var7.bind(var0)(var9, var8);
    var3.subLabel = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot24 = var3;
    var6 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = _closure1_slot9;
        var0 = new Array(3);
        var0[0] = var5;
        var5 = _closure1_slot10;
        var0[1] = var5;
        var4 = _closure1_slot11;
        var0[2] = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot25 = var3;
    var6 = function() {
        var0 = _closure1_slot12;
        var3 = undefined;
        var20 = var0.bind(var3)();
        var0 = _closure1_slot12;
        var1 = false;
        var16 = var0.bind(var3)(var1);
        var0 = _closure1_slot12;
        var17 = var0.bind(var3)();
        var0 = _closure1_slot12;
        var13 = var0.bind(var3)(var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = _closure1_slot13;
        var4 = new Array(4);
        var4[0] = var5;
        var5 = _closure1_slot14;
        var4[1] = var5;
        var8 = _closure1_slot7;
        var11 = _closure1_slot0;
        var14 = _closure1_slot1;
        var5 = 10;
        var6 = var14[var5];
        var6 = var11.bind(var3)(var6);
        var7 = var6.TableRowGroup;
        var6 = {};
        var10 = 'Emoji';
        var6.title = var10;
        var18 = _closure1_slot7;
        var10 = 9;
        var12 = var14[var10];
        var12 = var11.bind(var3)(var12);
        var15 = var12.TableSwitchRow;
        var12 = {
            'label': 'Show emoji reactions on messages',
            'subLabel': 'Show more information in less space'
        };
        var21 = var12;
        var19 = copyDataProperties(var21, var20);
        var12 = var18.bind(var3)(var15, var12);
        var6.children = var12;
        var6 = var8.bind(var3)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot6;
        var5 = var14[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var8 = 'Display images, videos, and lolcats';
        var5.title = var8;
        var15 = _closure1_slot7;
        var8 = var14[var10];
        var8 = var11.bind(var3)(var8);
        var12 = var8.TableSwitchRow;
        var8 = {};
        var18 = 'When posted as links to chat';
        var8.label = var18;
        var21 = var8;
        var20 = var16;
        var16 = copyDataProperties(var21, var20);
        var12 = var15.bind(var3)(var12, var8);
        var8 = new Array(4);
        var8[0] = var12;
        var16 = _closure1_slot7;
        var12 = var14[var10];
        var12 = var11.bind(var3)(var12);
        var15 = var12.TableSwitchRow;
        var12 = {};
        var18 = 'When uploaded directly to Discord';
        var12.label = var18;
        var21 = var12;
        var20 = var17;
        var17 = copyDataProperties(var21, var20);
        var12 = var16.bind(var3)(var15, var12);
        var8[1] = var12;
        var12 = _closure1_slot7;
        var10 = var14[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.TableSwitchRow;
        var10 = {};
        var14 = 'With image descriptions';
        var10.label = var14;
        var21 = var10;
        var20 = var13;
        var13 = copyDataProperties(var21, var20);
        var10 = var12.bind(var3)(var11, var10);
        var8[2] = var10;
        var9 = _closure1_slot15;
        var8[3] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot26 = var3;
    var6 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = _closure1_slot20;
        var0 = new Array(3);
        var0[0] = var5;
        var5 = _closure1_slot21;
        var0[1] = var5;
        var4 = _closure1_slot22;
        var0[2] = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot27 = var3;
    var6 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = _closure1_slot16;
        var0 = new Array(4);
        var0[0] = var5;
        var5 = _closure1_slot17;
        var0[1] = var5;
        var5 = _closure1_slot18;
        var0[2] = var5;
        var4 = _closure1_slot19;
        var0[3] = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot28 = var3;
    var6 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = _closure1_slot23;
        var0 = new Array(2);
        var0[0] = var5;
        var4 = _closure1_slot24;
        var0[1] = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot29 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemFormPrimitives.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 17;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var9 = 24;
        var4.spacing = var9;
        var7 = var7.container;
        var4.style = var7;
        var9 = _closure1_slot25;
        var7 = new Array(5);
        var7[0] = var9;
        var9 = _closure1_slot26;
        var7[1] = var9;
        var9 = _closure1_slot27;
        var7[2] = var9;
        var9 = _closure1_slot28;
        var7[3] = var9;
        var8 = _closure1_slot29;
        var7[4] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 3938, 5481, 5480, 5344, 5343, 5499, 8798, 4876, 11255, 8571, 4839, 4086, 2]);