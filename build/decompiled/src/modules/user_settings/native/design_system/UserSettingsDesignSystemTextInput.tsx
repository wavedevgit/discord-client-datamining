// modules/user_settings/native/design_system/UserSettingsDesignSystemTextInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.children;
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 6;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Card;
        var0 = {};
        var9 = 'low';
        var0.shadow = var9;
        var6 = var6.sample;
        var0.style = var6;
        var6 = _closure1_slot6;
        var4 = 7;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var8 = 24;
        var4.spacing = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun88782: for (var _fun88782_ip = 0;;) switch (_fun88782_ip) {
            case 0:
                var6 = arg0;
                var9 = var6.defaultValue;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = null;
                var3 = var0 != var9;
                var7 = 'default';
                var0 = var7;
                if (!var3) {
                    _fun88782_ip = 65;
                    continue _fun88782
                }
            case 39:
                var8 = var9.includes;
                var3 = ' ';
                var3 = var8.bind(var9)(var3);
                var0 = var7;
                if (!var3) {
                    _fun88782_ip = 65;
                    continue _fun88782
                }
            case 61:
                var0 = 'error';
            case 65:
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var3 = undefined;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var8 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TextInput;
                var0 = {};
                var11 = var0;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var6 = 'status';
                var0[var6] = var8;
                var6 = 'error';
                var7 = undefined;
                if (!(var6 === var8)) {
                    _fun88782_ip = 169;
                    continue _fun88782
                }
            case 163:
                var7 = "Username can't contain spaces";
            case 169:
                var6 = 'errorMessage';
                var0[var6] = var7;
                var7 = 'Username';
                var6 = 'label';
                var0[var6] = var7;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.AtIcon;
                var5 = 'leadingIcon';
                var0[var5] = var6;
                var5 = function arg0() {
                    _fun88783: for (var _fun88783_ip = 0;;) switch (_fun88783_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var3.includes;
                            var0 = ' ';
                            var0 = var1.bind(var3)(var0);
                            var1 = 'default';
                            if (!var0) {
                                _fun88783_ip = 37;
                                continue _fun88783
                            }
                        case 33:
                            var1 = 'error';
                        case 37:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = 'onChange';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun88784: for (var _fun88784_ip = 0;;) switch (_fun88784_ip) {
            case 0:
                var5 = arg0;
                var9 = var5.defaultValue;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var1 = null;
                var6 = var1 != var9;
                var7 = 'default';
                var1 = var7;
                if (!var6) {
                    _fun88784_ip = 65;
                    continue _fun88784
                }
            case 39:
                var8 = var9.includes;
                var6 = ' ';
                var6 = var8.bind(var9)(var6);
                var1 = var7;
                if (!var6) {
                    _fun88784_ip = 65;
                    continue _fun88784
                }
            case 61:
                var1 = 'error';
            case 65:
                var6 = var2.bind(var3)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var6, var1);
                var1 = 0;
                var7 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot0 = var1;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GhostInput;
                var0 = {};
                var11 = var0;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'status';
                var0[var5] = var7;
                var5 = 'error';
                var6 = undefined;
                if (!(var5 === var7)) {
                    _fun88784_ip = 169;
                    continue _fun88784
                }
            case 163:
                var6 = "Username can't contain spaces";
            case 169:
                var5 = 'errorMessage';
                var0[var5] = var6;
                var5 = function arg0() {
                    _fun88785: for (var _fun88785_ip = 0;;) switch (_fun88785_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var3.includes;
                            var0 = ' ';
                            var0 = var1.bind(var3)(var0);
                            var1 = 'default';
                            if (!var0) {
                                _fun88785_ip = 37;
                                continue _fun88785
                            }
                        case 33:
                            var1 = 'error';
                        case 37:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = 'onChange';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 11;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var7 = _closure1_slot6;
        var9 = 12;
        var4 = var8[var9];
        var4 = var6.bind(var2)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var10 = 'Ghost Input - Centered';
        var4.title = var10;
        var5 = var7.bind(var2)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var8[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.Stack;
        var5 = {};
        var8 = {};
        var8.padding = var9;
        var5.style = var8;
        var10 = _closure1_slot6;
        var9 = _closure1_slot9;
        var8 = {};
        var12 = _closure1_slot11;
        var11 = {
            'placeholder': '@wumpus',
            'description': 'You can use up to 16 alpha-numeric characters'
        };
        var11 = var10.bind(var2)(var12, var11);
        var8.children = var11;
        var8 = var10.bind(var2)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 11;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var7 = _closure1_slot6;
        var9 = 12;
        var4 = var8[var9];
        var4 = var6.bind(var2)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var10 = 'Ghost Input - Left Aligned';
        var4.title = var10;
        var5 = var7.bind(var2)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var8[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.Stack;
        var5 = {};
        var8 = {};
        var8.padding = var9;
        var5.style = var8;
        var10 = _closure1_slot6;
        var9 = _closure1_slot9;
        var8 = {};
        var12 = _closure1_slot11;
        var11 = {
            'placeholder': '@wumpus',
            'description': 'You can use up to 16 alpha-numeric characters',
            'isCentered': false,
            'size': 'md'
        };
        var11 = var10.bind(var2)(var12, var11);
        var8.children = var11;
        var8 = var10.bind(var2)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun88788: for (var _fun88788_ip = 0;;) switch (_fun88788_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = 'default';
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var3 = undefined;
                var7 = 2;
                var0 = var0.bind(var3)(var1, var7);
                var2 = 0;
                var9 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot0 = var0;
                var8 = _closure1_slot4;
                var6 = var8.useState;
                var0 = '';
                var6 = var6.bind(var8)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var6, var7);
                var6 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TextInput;
                var0 = {};
                var0.status = var9;
                var8 = 'error';
                var7 = undefined;
                if (!(var8 === var9)) {
                    _fun88788_ip = 147;
                    continue _fun88788
                }
            case 141:
                var7 = "Username can't contain spaces";
            case 147:
                var0.errorMessage = var7;
                var7 = 'Pressable Attachment';
                var0.label = var7;
                var0.value = var6;
                var6 = {};
                var7 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = 'You pressed the icon';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6.onPress = var7;
                var7 = 'Press';
                var6.accessibilityLabel = var7;
                var0.trailingPressableProps = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AtIcon;
                var0.trailingIcon = var5;
                var4 = function arg0() {
                    _fun88790: for (var _fun88790_ip = 0;;) switch (_fun88790_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var4);
                            var2 = _closure2_slot0;
                            var3 = var4.includes;
                            var1 = ' ';
                            var3 = var3.bind(var4)(var1);
                            var1 = 'default';
                            if (!var3) {
                                _fun88790_ip = 48;
                                continue _fun88790
                            }
                        case 44:
                            var1 = 'error';
                        case 48:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0.onChange = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.container = var8;
    var8 = {};
    var9 = 5;
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
    var _closure1_slot8 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemTextInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = _closure1_slot7;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 7;
        var4 = var11[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var8 = 24;
        var4.spacing = var8;
        var7 = var7.container;
        var4.style = var7;
        var8 = _closure1_slot7;
        var14 = _closure1_slot9;
        var7 = {};
        var15 = _closure1_slot6;
        var16 = 8;
        var12 = var11[var16];
        var12 = var9.bind(var3)(var12);
        var13 = var12.TextInput;
        var12 = {
            'label': 'Input Label',
            'placeholder': 'Placeholder text',
            'description': 'Descriptions give context for the input.',
            'errorMessage': 'Error messages communicate invalid states.'
        };
        var13 = var15.bind(var3)(var13, var12);
        var12 = new Array(4);
        var12[0] = var13;
        var19 = _closure1_slot6;
        var15 = 13;
        var13 = var11[var15];
        var13 = var9.bind(var3)(var13);
        var18 = var13.TextArea;
        var13 = {
            'label': 'Text Area',
            'maxLength': 100,
            'placeholder': 'Multiline inputs use TextArea'
        };
        var13 = var19.bind(var3)(var18, var13);
        var12[1] = var13;
        var19 = _closure1_slot6;
        var13 = var11[var16];
        var13 = var9.bind(var3)(var13);
        var18 = var13.TextInput;
        var13 = {
            'label': 'Password',
            'secureTextEntry': true,
            'placeholder': 'Password',
            'isClearable': true
        };
        var13 = var19.bind(var3)(var18, var13);
        var12[2] = var13;
        var19 = _closure1_slot6;
        var13 = var11[var16];
        var13 = var9.bind(var3)(var13);
        var18 = var13.TextInput;
        var13 = {
            'label': 'Required Field',
            'placeholder': 'Placeholder',
            'description': 'Required inputs are indicated with an asterisk.',
            'required': true
        };
        var13 = var19.bind(var3)(var18, var13);
        var12[3] = var13;
        var7.children = var12;
        var8 = var8.bind(var3)(var14, var7);
        var7 = new Array(40);
        var7[0] = var8;
        var18 = _closure1_slot6;
        var8 = 14;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Sizing'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[1] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[2] = var12;
        var13 = _closure1_slot7;
        var12 = {};
        var20 = _closure1_slot6;
        var18 = var11[var16];
        var18 = var9.bind(var3)(var18);
        var19 = var18.TextInput;
        var28 = 'sm';
        var18 = {
            'label': 'Small',
            'size': 'sm'
        };
        var19 = var20.bind(var3)(var19, var18);
        var18 = new Array(3);
        var18[0] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var16];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextInput;
        var19 = {
            'label': 'Medium',
            'size': 'md'
        };
        var19 = var21.bind(var3)(var20, var19);
        var18[1] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var16];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextInput;
        var19 = {};
        var22 = 'Large (default)';
        var19.label = var22;
        var19 = var21.bind(var3)(var20, var19);
        var18[2] = var19;
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[3] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Attachments'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[4] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[5] = var12;
        var13 = _closure1_slot7;
        var12 = {};
        var20 = _closure1_slot6;
        var18 = var11[var16];
        var18 = var9.bind(var3)(var18);
        var19 = var18.TextInput;
        var18 = {};
        var21 = 'Leading icon';
        var18.label = var21;
        var22 = 15;
        var21 = var11[var22];
        var21 = var9.bind(var3)(var21);
        var21 = var21.TextIcon;
        var18.leadingIcon = var21;
        var19 = var20.bind(var3)(var19, var18);
        var18 = new Array(4);
        var18[0] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var16];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextInput;
        var19 = {};
        var23 = 'Trailing icon';
        var19.label = var23;
        var22 = var11[var22];
        var22 = var9.bind(var3)(var22);
        var22 = var22.TextIcon;
        var19.trailingIcon = var22;
        var19 = var21.bind(var3)(var20, var19);
        var18[1] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var16];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextInput;
        var19 = {
            'label': 'Leading text',
            'leadingText': 'To:'
        };
        var19 = var21.bind(var3)(var20, var19);
        var18[2] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var16];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextInput;
        var19 = {
            'label': 'Combination',
            'leadingText': 'To:'
        };
        var22 = 9;
        var22 = var11[var22];
        var22 = var9.bind(var3)(var22);
        var22 = var22.AtIcon;
        var19.trailingIcon = var22;
        var19 = var21.bind(var3)(var20, var19);
        var18[3] = var19;
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[6] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[7] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Pressable Attachments'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[8] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[9] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var19 = _closure1_slot14;
        var18 = {};
        var18 = var13.bind(var3)(var19, var18);
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[10] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[11] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Rounding'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[12] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'All inputs except TextArea can use the isRound prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[13] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var20 = _closure1_slot7;
        var18 = 16;
        var18 = var11[var18];
        var18 = var9.bind(var3)(var18);
        var19 = var18.Input;
        var18 = {};
        var23 = _closure1_slot6;
        var21 = 17;
        var21 = var11[var21];
        var21 = var9.bind(var3)(var21);
        var22 = var21.SearchField;
        var21 = {
            'size': 'md',
            'isRound': true
        };
        var22 = var23.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var24 = _closure1_slot6;
        var22 = 18;
        var22 = var11[var22];
        var22 = var9.bind(var3)(var22);
        var23 = var22.IconButton;
        var22 = {};
        var27 = _closure1_slot6;
        var25 = 19;
        var25 = var11[var25];
        var25 = var9.bind(var3)(var25);
        var26 = var25.SettingsIcon;
        var25 = {};
        var25.size = var28;
        var25 = var27.bind(var3)(var26, var25);
        var22.icon = var25;
        var25 = 'Settings';
        var22.accessibilityLabel = var25;
        var25 = function() {
            var0 = null;
            return var0;
        };
        var22.onPress = var25;
        var25 = 'tertiary';
        var22.variant = var25;
        var22 = var24.bind(var3)(var23, var22);
        var21[1] = var22;
        var18.children = var21;
        var18 = var20.bind(var3)(var19, var18);
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[14] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Error States'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[15] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'The status prop communicates the overall state of the input. Setting status to "error" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[16] = var12;
        var13 = _closure1_slot7;
        var12 = {};
        var20 = _closure1_slot6;
        var19 = _closure1_slot10;
        var18 = {};
        var21 = 'a space';
        var18.defaultValue = var21;
        var19 = var20.bind(var3)(var19, var18);
        var18 = new Array(2);
        var18[0] = var19;
        var21 = _closure1_slot6;
        var19 = var11[var15];
        var19 = var9.bind(var3)(var19);
        var20 = var19.TextArea;
        var19 = {
            'label': 'About me',
            'maxLength': 100,
            'placeholder': 'Long form text use TextArea',
            'errorMessage': 'This is an example of a multiline error message to showcase the icon alignment to this text'
        };
        var19 = var21.bind(var3)(var20, var19);
        var18[1] = var19;
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[17] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Clearable'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[18] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Inputs can use the isClearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[19] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var18 = 20;
        var18 = var11[var18];
        var18 = var9.bind(var3)(var18);
        var19 = var18.TextField;
        var18 = {
            'defaultValue': 'Clear this text',
            'isClearable': true
        };
        var18 = var13.bind(var3)(var19, var18);
        var12.children = var18;
        var12 = var13.bind(var3)(var14, var12);
        var7[20] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Certain input types automatically control the isClearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[21] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Disableable'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[22] = var12;
        var18 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.'
        };
        var12 = var18.bind(var3)(var13, var12);
        var7[23] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var16 = var11[var16];
        var16 = var9.bind(var3)(var16);
        var18 = var16.TextInput;
        var16 = {
            'defaultValue': "Can't edit this value",
            'isDisabled': true
        };
        var16 = var13.bind(var3)(var18, var16);
        var12.children = var16;
        var12 = var13.bind(var3)(var14, var12);
        var7[24] = var12;
        var16 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.'
        };
        var12 = var16.bind(var3)(var13, var12);
        var7[25] = var12;
        var16 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Max Length'
        };
        var12 = var16.bind(var3)(var13, var12);
        var7[26] = var12;
        var16 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up."
        };
        var12 = var16.bind(var3)(var13, var12);
        var7[27] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var15 = var11[var15];
        var15 = var9.bind(var3)(var15);
        var16 = var15.TextArea;
        var15 = {
            'label': 'Limited length',
            'maxLength': 124
        };
        var15 = var13.bind(var3)(var16, var15);
        var12.children = var15;
        var12 = var13.bind(var3)(var14, var12);
        var7[28] = var12;
        var15 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length.'
        };
        var12 = var15.bind(var3)(var13, var12);
        var7[29] = var12;
        var15 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Ghost Inputs'
        };
        var12 = var15.bind(var3)(var13, var12);
        var7[30] = var12;
        var15 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'GhostInput is a minimal version of TextInput with no container shape. These should be used sparingly, only in cases where a single input is the primary focus of the surrounding area.'
        };
        var12 = var15.bind(var3)(var13, var12);
        var7[31] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var15 = 21;
        var16 = var11[var15];
        var16 = var9.bind(var3)(var16);
        var18 = var16.Button;
        var16 = {};
        var19 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.openLazy;
            var2 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = _closure1_slot12;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'ghost-input-sheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var16.onPress = var19;
        var19 = 'Show example';
        var16.text = var19;
        var16 = var13.bind(var3)(var18, var16);
        var12.children = var16;
        var12 = var13.bind(var3)(var14, var12);
        var7[32] = var12;
        var16 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'GhostInputs can also appear left-aligned by setting `isCentered` to false.'
        };
        var12 = var16.bind(var3)(var13, var12);
        var7[33] = var12;
        var13 = _closure1_slot6;
        var12 = {};
        var15 = var11[var15];
        var15 = var9.bind(var3)(var15);
        var16 = var15.Button;
        var15 = {};
        var17 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.openLazy;
            var2 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = _closure1_slot13;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'ghost-input-sheet-left';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var15.onPress = var17;
        var17 = 'Show left-aligned example';
        var15.text = var17;
        var15 = var13.bind(var3)(var16, var15);
        var12.children = var15;
        var12 = var13.bind(var3)(var14, var12);
        var7[34] = var12;
        var15 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Split Text Input'
        };
        var12 = var15.bind(var3)(var13, var12);
        var7[35] = var12;
        var15 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/normal',
            'children': 'SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value.'
        };
        var12 = var15.bind(var3)(var13, var12);
        var7[36] = var12;
        var13 = _closure1_slot7;
        var12 = {};
        var18 = _closure1_slot6;
        var16 = 23;
        var15 = var11[var16];
        var15 = var9.bind(var3)(var15);
        var17 = var15.SplitTextInput;
        var15 = {
            'label': 'Small',
            'size': 'sm',
            'placeholder': 'Placeholder',
            'leadingText': 'Click'
        };
        var19 = {};
        var20 = 'Foo';
        var19.accessibilityLabel = var20;
        var15.leadingPressableProps = var19;
        var17 = var18.bind(var3)(var17, var15);
        var15 = new Array(3);
        var15[0] = var17;
        var19 = _closure1_slot6;
        var17 = var11[var16];
        var17 = var9.bind(var3)(var17);
        var18 = var17.SplitTextInput;
        var17 = {
            'label': 'Medium',
            'size': 'md',
            'placeholder': 'Placeholder',
            'leadingText': 'Me'
        };
        var21 = {};
        var21.accessibilityLabel = var20;
        var17.leadingPressableProps = var21;
        var17 = var19.bind(var3)(var18, var17);
        var15[1] = var17;
        var18 = _closure1_slot6;
        var16 = var11[var16];
        var16 = var9.bind(var3)(var16);
        var17 = var16.SplitTextInput;
        var16 = {
            'label': 'Large',
            'size': 'lg',
            'placeholder': 'Placeholder',
            'leadingText': 'Here'
        };
        var19 = {};
        var19.accessibilityLabel = var20;
        var16.leadingPressableProps = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[2] = var16;
        var12.children = var15;
        var12 = var13.bind(var3)(var14, var12);
        var7[37] = var12;
        var14 = _closure1_slot6;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'heading-lg/bold',
            'children': 'Data Types'
        };
        var12 = var14.bind(var3)(var13, var12);
        var7[38] = var12;
        var10 = _closure1_slot6;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-md/normal',
            'children': 'Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented.'
        };
        var8 = var10.bind(var3)(var9, var8);
        var7[39] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4902, 4080, 5453, 4856, 11492, 4933, 5261, 5440, 3942, 4848, 5441, 7081, 7579, 5421, 5454, 4084, 3279, 7608, 2]);