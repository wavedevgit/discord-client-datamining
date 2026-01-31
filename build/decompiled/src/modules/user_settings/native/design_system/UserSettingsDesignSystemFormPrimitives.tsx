// modules/user_settings/native/design_system/UserSettingsDesignSystemFormPrimitives.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot8;
        var1 = {};
        var7 = _closure1_slot6;
        var10 = _closure1_slot0;
        var12 = _closure1_slot1;
        var5 = 7;
        var4 = var12[var5];
        var0 = undefined;
        var4 = var10.bind(var0)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'heading-lg/bold',
            'children': 'Radio'
        };
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var5 = var12[var5];
        var5 = var10.bind(var0)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/normal',
            'children': 'Select a single option from a short list of multiple options'
        };
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot7;
        var5 = 8;
        var5 = var12[var5];
        var5 = var10.bind(var0)(var5);
        var6 = var5.TableRadioGroup;
        var5 = {
            'title': 'Role Colors',
            'hasIcons': false,
            'defaultValue': 'color-in-names'
        };
        var8 = _closure1_slot5;
        var5.onChange = var8;
        var14 = _closure1_slot6;
        var9 = 9;
        var8 = var12[var9];
        var8 = var10.bind(var0)(var8);
        var13 = var8.TableRadioRow;
        var8 = {
            'label': 'Show role colors in names',
            'value': 'color-in-names'
        };
        var13 = var14.bind(var0)(var13, var8);
        var8 = new Array(4);
        var8[0] = var13;
        var15 = _closure1_slot6;
        var13 = var12[var9];
        var13 = var10.bind(var0)(var13);
        var14 = var13.TableRadioRow;
        var13 = {
            'label': 'Show role colors next to names',
            'value': 'color-next-to-names'
        };
        var13 = var15.bind(var0)(var14, var13);
        var8[1] = var13;
        var15 = _closure1_slot6;
        var13 = var12[var9];
        var13 = var10.bind(var0)(var13);
        var14 = var13.TableRadioRow;
        var13 = {
            'label': "Don't show role colors",
            'value': 'no-color'
        };
        var13 = var15.bind(var0)(var14, var13);
        var8[2] = var13;
        var11 = _closure1_slot6;
        var9 = var12[var9];
        var9 = var10.bind(var0)(var9);
        var10 = var9.TableRadioRow;
        var9 = {
            'label': 'Disabled Item',
            'subLabel': 'This should not be selectable',
            'value': 'option4',
            'disabled': true
        };
        var9 = var11.bind(var0)(var10, var9);
        var8[3] = var9;
        var5.children = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var19 = var0.bind(var3)();
        var0 = _closure1_slot10;
        var1 = false;
        var15 = var0.bind(var3)(var1);
        var0 = _closure1_slot10;
        var17 = var0.bind(var3)();
        var0 = _closure1_slot10;
        var16 = var0.bind(var3)(var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot8;
        var0 = {};
        var7 = _closure1_slot6;
        var10 = _closure1_slot0;
        var13 = _closure1_slot1;
        var5 = 7;
        var4 = var13[var5];
        var4 = var10.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'heading-lg/bold',
            'children': 'Switch'
        };
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var5 = var13[var5];
        var5 = var10.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/normal',
            'children': 'Toggle the state of a single setting on or off, immediately'
        };
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var8 = _closure1_slot6;
        var5 = 10;
        var6 = var13[var5];
        var6 = var10.bind(var3)(var6);
        var7 = var6.TableRowGroup;
        var6 = {};
        var9 = 'Emoji';
        var6.title = var9;
        var18 = _closure1_slot6;
        var9 = 11;
        var11 = var13[var9];
        var11 = var10.bind(var3)(var11);
        var14 = var11.TableSwitchRow;
        var11 = {
            'label': 'Show emoji reactions on messages',
            'subLabel': 'Show more information in less space'
        };
        var21 = var11;
        var20 = var19;
        var19 = copyDataProperties(var21, var20);
        var11 = var18.bind(var3)(var14, var11);
        var6.children = var11;
        var6 = var8.bind(var3)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot7;
        var5 = var13[var5];
        var5 = var10.bind(var3)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var8 = 'Display images, videos, and lolcats';
        var5.title = var8;
        var14 = _closure1_slot6;
        var8 = var13[var9];
        var8 = var10.bind(var3)(var8);
        var11 = var8.TableSwitchRow;
        var8 = {};
        var18 = 'When posted as links to chat';
        var8.label = var18;
        var21 = var8;
        var20 = var15;
        var15 = copyDataProperties(var21, var20);
        var11 = var14.bind(var3)(var11, var8);
        var8 = new Array(4);
        var8[0] = var11;
        var15 = _closure1_slot6;
        var11 = var13[var9];
        var11 = var10.bind(var3)(var11);
        var14 = var11.TableSwitchRow;
        var11 = {};
        var18 = 'When uploaded directly to Discord';
        var11.label = var18;
        var21 = var11;
        var20 = var17;
        var17 = copyDataProperties(var21, var20);
        var11 = var15.bind(var3)(var14, var11);
        var8[1] = var11;
        var15 = _closure1_slot6;
        var11 = var13[var9];
        var11 = var10.bind(var3)(var11);
        var14 = var11.TableSwitchRow;
        var11 = {};
        var17 = 'With image descriptions';
        var11.label = var17;
        var21 = var11;
        var20 = var16;
        var16 = copyDataProperties(var21, var20);
        var11 = var15.bind(var3)(var14, var11);
        var8[2] = var11;
        var11 = _closure1_slot6;
        var9 = var13[var9];
        var9 = var10.bind(var3)(var9);
        var10 = var9.TableSwitchRow;
        var9 = {
            'label': 'Disabled switch item',
            'subLabel': 'This should not be switchable',
            'disabled': true,
            'value': false
        };
        var12 = _closure1_slot5;
        var9.onValueChange = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[3] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun87958: for (var _fun87958_ip = 0;;) switch (_fun87958_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.label;
                var7 = var0.description;
                var6 = var0.required;
                var1 = var0.startChecked;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun87958_ip = 33;
                    continue _fun87958
                }
            case 31:
                var1 = false;
            case 33:
                var0 = function() { // Environment: var0
                    _fun87959: for (var _fun87959_ip = 0;;) switch (_fun87959_ip) {
                        case 0:
                            var4 = arguments[0];
                            var5 = undefined;
                            if (!(var4 === var5)) {
                                _fun87959_ip = 13;
                                continue _fun87959
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
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 12;
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
    var _closure1_slot13 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot8;
        var1 = {};
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'heading-lg/bold',
            'children': 'Inline Checkbox'
        };
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var8 = _closure1_slot6;
        var7 = _closure1_slot13;
        var6 = {
            'label': 'Checkbox label',
            'description': 'This is a description',
            'startChecked': true
        };
        var6 = var8.bind(var0)(var7, var6);
        var4[1] = var6;
        var8 = _closure1_slot6;
        var6 = {};
        var9 = 'Trust google.com links from now on';
        var6.label = var9;
        var6 = var8.bind(var0)(var7, var6);
        var4[2] = var6;
        var6 = _closure1_slot6;
        var5 = {
            'label': 'I agree to the Terms of Service',
            'required': true
        };
        var5 = var6.bind(var0)(var7, var5);
        var4[3] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot8;
        var1 = {};
        var7 = _closure1_slot6;
        var10 = _closure1_slot0;
        var13 = _closure1_slot1;
        var5 = 7;
        var4 = var13[var5];
        var0 = undefined;
        var4 = var10.bind(var0)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'heading-lg/bold',
            'children': 'Checkbox'
        };
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var5 = var13[var5];
        var5 = var10.bind(var0)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/normal',
            'children': 'Select one or more options from a short list of options'
        };
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot7;
        var5 = 10;
        var5 = var13[var5];
        var5 = var10.bind(var0)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var8 = 'Who can send you a friend request?';
        var5.title = var8;
        var14 = _closure1_slot6;
        var9 = 13;
        var8 = var13[var9];
        var8 = var10.bind(var0)(var8);
        var11 = var8.TableCheckboxRow;
        var8 = {
            'label': 'Everyone',
            'subLabel': 'Anyone can send you a friend request',
            'checked': false
        };
        var15 = _closure1_slot5;
        var8.onPress = var15;
        var11 = var14.bind(var0)(var11, var8);
        var8 = new Array(3);
        var8[0] = var11;
        var15 = _closure1_slot6;
        var11 = var13[var9];
        var11 = var10.bind(var0)(var11);
        var14 = var11.TableCheckboxRow;
        var11 = {
            'label': 'Friends of Friends',
            'subLabel': 'Anyone who is friends with your friends can send you a friend request',
            'checked': true
        };
        var16 = _closure1_slot5;
        var11.onPress = var16;
        var11 = var15.bind(var0)(var14, var11);
        var8[1] = var11;
        var11 = _closure1_slot6;
        var9 = var13[var9];
        var9 = var10.bind(var0)(var9);
        var10 = var9.TableCheckboxRow;
        var9 = {
            'label': 'Server Members',
            'subLabel': 'Anyone who is in a server with you can send you a friend request',
            'checked': true
        };
        var12 = _closure1_slot5;
        var9.onPress = var12;
        var9 = var11.bind(var0)(var10, var9);
        var8[2] = var9;
        var5.children = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = _closure1_slot6;
        var13 = _closure1_slot0;
        var15 = _closure1_slot1;
        var0 = 7;
        var4 = var15[var0];
        var0 = undefined;
        var4 = var13.bind(var0)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'heading-lg/bold',
            'children': 'Slider'
        };
        var5 = var6.bind(var0)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var5 = 14;
        var5 = var15[var5];
        var5 = var13.bind(var0)(var5);
        var6 = var5.TableRow;
        var5 = {
            'start': true,
            'end': true,
            'label': 'Volume'
        };
        var10 = _closure1_slot6;
        var8 = 15;
        var8 = var15[var8];
        var8 = var13.bind(var0)(var8);
        var9 = var8.Slider;
        var8 = {};
        var16 = _closure1_slot6;
        var12 = 16;
        var12 = var15[var12];
        var12 = var13.bind(var0)(var12);
        var14 = var12.VoiceXIcon;
        var12 = {};
        var12 = var16.bind(var0)(var14, var12);
        var8.startIcon = var12;
        var14 = _closure1_slot6;
        var12 = 17;
        var12 = var15[var12];
        var12 = var13.bind(var0)(var12);
        var13 = var12.VoiceNormalIcon;
        var12 = {};
        var12 = var14.bind(var0)(var13, var12);
        var8.endIcon = var12;
        var11 = _closure1_slot5;
        var8.onValueChange = var11;
        var8 = var10.bind(var0)(var9, var8);
        var5.subLabel = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
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
    var3 = var3.NOOP;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'paddingBottom': 32
    };
    var3.container = var8;
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xl;
    var8.borderRadius = var9;
    var3.sample = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function() {
        _fun87964: for (var _fun87964_ip = 0;;) switch (_fun87964_ip) {
            case 0:
                var4 = arguments[0];
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun87964_ip = 13;
                    continue _fun87964
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
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemFormPrimitives.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot7;
        var5 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 18;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var9 = 24;
        var4.spacing = var9;
        var7 = var7.container;
        var4.style = var7;
        var10 = _closure1_slot6;
        var9 = _closure1_slot11;
        var7 = {};
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(5);
        var7[0] = var9;
        var11 = _closure1_slot6;
        var10 = _closure1_slot12;
        var9 = {};
        var9 = var11.bind(var3)(var10, var9);
        var7[1] = var9;
        var11 = _closure1_slot6;
        var10 = _closure1_slot15;
        var9 = {};
        var9 = var11.bind(var3)(var10, var9);
        var7[2] = var9;
        var11 = _closure1_slot6;
        var10 = _closure1_slot14;
        var9 = {};
        var9 = var11.bind(var3)(var10, var9);
        var7[3] = var9;
        var10 = _closure1_slot6;
        var9 = _closure1_slot16;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var7[4] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 3900, 5384, 5383, 5325, 5378, 5401, 8732, 4861, 11361, 8433, 4826, 4039, 2]);