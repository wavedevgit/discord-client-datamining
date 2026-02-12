// modules/user_settings/native/design_system/UserSettingsDesignSystemTextInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var8 = function arg0() {
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
    var _closure1_slot51 = var8;
    var10 = function arg0() {
        _fun87152: for (var _fun87152_ip = 0;;) switch (_fun87152_ip) {
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
                    _fun87152_ip = 65;
                    continue _fun87152
                }
            case 39:
                var8 = var9.includes;
                var6 = ' ';
                var6 = var8.bind(var9)(var6);
                var1 = var7;
                if (!var6) {
                    _fun87152_ip = 65;
                    continue _fun87152
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
                    _fun87152_ip = 169;
                    continue _fun87152
                }
            case 163:
                var6 = "Username can't contain spaces";
            case 169:
                var5 = 'errorMessage';
                var0[var5] = var6;
                var5 = function arg0() {
                    _fun87153: for (var _fun87153_ip = 0;;) switch (_fun87153_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var3.includes;
                            var0 = ' ';
                            var0 = var1.bind(var3)(var0);
                            var1 = 'default';
                            if (!var0) {
                                _fun87153_ip = 37;
                                continue _fun87153
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
    var0 = function() {
        var3 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 12;
        var0 = var9[var10];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = _closure1_slot9;
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.Stack;
        var5 = {};
        var9 = {};
        var9.padding = var10;
        var5.style = var9;
        var8 = _closure1_slot10;
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 12;
        var0 = var9[var10];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = _closure1_slot11;
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.Stack;
        var5 = {};
        var9 = {};
        var9.padding = var10;
        var5.style = var9;
        var8 = _closure1_slot12;
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot53 = var0;
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
    var3 = var15.bind(var0)(var3);
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
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var11 = var3.jsxs;
    var _closure1_slot7 = var11;
    var3 = 4;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var9 = var12.createStyles;
    var3 = {};
    var13 = {};
    var6 = 16;
    var13.padding = var6;
    var3.container = var13;
    var13 = {};
    var14 = 5;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var16;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var13.borderRadius = var14;
    var3.sample = var13;
    var3 = var9.bind(var12)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var9 = var5[var3];
    var9 = var4.bind(var0)(var9);
    var12 = var9.BottomSheetTitleHeader;
    var9 = {};
    var13 = 'Ghost Input - Centered';
    var9.title = var13;
    var9 = var7.bind(var0)(var12, var9);
    var _closure1_slot9 = var9;
    var9 = {};
    var12 = {
        'placeholder': '@wumpus',
        'description': 'You can use up to 16 alpha-numeric characters'
    };
    var12 = var7.bind(var0)(var10, var12);
    var9.children = var12;
    var9 = var7.bind(var0)(var8, var9);
    var _closure1_slot10 = var9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.BottomSheetTitleHeader;
    var3 = {};
    var12 = 'Ghost Input - Left Aligned';
    var3.title = var12;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var9 = {
        'placeholder': '@wumpus',
        'description': 'You can use up to 16 alpha-numeric characters',
        'isCentered': false,
        'size': 'md'
    };
    var9 = var7.bind(var0)(var10, var9);
    var3.children = var9;
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var10 = 8;
    var9 = var5[var10];
    var9 = var4.bind(var0)(var9);
    var12 = var9.TextInput;
    var9 = {
        'label': 'Input Label',
        'placeholder': 'Placeholder text',
        'description': 'Descriptions give context for the input.',
        'errorMessage': 'Error messages communicate invalid states.'
    };
    var9 = var7.bind(var0)(var12, var9);
    var12 = new Array(4);
    var12[0] = var9;
    var9 = 13;
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var14 = var13.TextArea;
    var13 = {
        'label': 'Text Area',
        'maxLength': 100,
        'placeholder': 'Multiline inputs use TextArea'
    };
    var13 = var7.bind(var0)(var14, var13);
    var12[1] = var13;
    var13 = var5[var10];
    var13 = var4.bind(var0)(var13);
    var14 = var13.TextInput;
    var13 = {
        'label': 'Password',
        'secureTextEntry': true,
        'placeholder': 'Password',
        'isClearable': true
    };
    var13 = var7.bind(var0)(var14, var13);
    var12[2] = var13;
    var13 = var5[var10];
    var13 = var4.bind(var0)(var13);
    var14 = var13.TextInput;
    var13 = {
        'label': 'Required Field',
        'placeholder': 'Placeholder',
        'description': 'Required inputs are indicated with an asterisk.',
        'required': true
    };
    var13 = var7.bind(var0)(var14, var13);
    var12[3] = var13;
    var3.children = var12;
    var3 = var11.bind(var0)(var8, var3);
    var _closure1_slot13 = var3;
    var3 = 14;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var13 = var12.Text;
    var12 = {
        'variant': 'heading-lg/bold',
        'children': 'Sizing'
    };
    var12 = var7.bind(var0)(var13, var12);
    var _closure1_slot14 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var13 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant.'
    };
    var12 = var7.bind(var0)(var13, var12);
    var _closure1_slot15 = var12;
    var12 = {};
    var13 = var5[var10];
    var13 = var4.bind(var0)(var13);
    var15 = var13.TextInput;
    var13 = 'sm';
    var14 = {
        'label': 'Small',
        'size': 'sm'
    };
    var15 = var7.bind(var0)(var15, var14);
    var14 = new Array(3);
    var14[0] = var15;
    var15 = var5[var10];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TextInput;
    var15 = {
        'label': 'Medium',
        'size': 'md'
    };
    var15 = var7.bind(var0)(var16, var15);
    var14[1] = var15;
    var15 = var5[var10];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TextInput;
    var15 = {};
    var17 = 'Large (default)';
    var15.label = var17;
    var15 = var7.bind(var0)(var16, var15);
    var14[2] = var15;
    var12.children = var14;
    var12 = var11.bind(var0)(var8, var12);
    var _closure1_slot16 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'heading-lg/bold',
        'children': 'Attachments'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot17 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence.'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot18 = var12;
    var12 = {};
    var14 = var5[var10];
    var14 = var4.bind(var0)(var14);
    var15 = var14.TextInput;
    var14 = {};
    var16 = 'Leading icon';
    var14.label = var16;
    var17 = 15;
    var16 = var5[var17];
    var16 = var4.bind(var0)(var16);
    var16 = var16.TextIcon;
    var14.leadingIcon = var16;
    var15 = var7.bind(var0)(var15, var14);
    var14 = new Array(4);
    var14[0] = var15;
    var15 = var5[var10];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TextInput;
    var15 = {};
    var18 = 'Trailing icon';
    var15.label = var18;
    var17 = var5[var17];
    var17 = var4.bind(var0)(var17);
    var17 = var17.TextIcon;
    var15.trailingIcon = var17;
    var15 = var7.bind(var0)(var16, var15);
    var14[1] = var15;
    var15 = var5[var10];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TextInput;
    var15 = {
        'label': 'Leading text',
        'leadingText': 'To:'
    };
    var15 = var7.bind(var0)(var16, var15);
    var14[2] = var15;
    var15 = var5[var10];
    var15 = var4.bind(var0)(var15);
    var16 = var15.TextInput;
    var15 = {
        'label': 'Combination',
        'leadingText': 'To:'
    };
    var17 = 9;
    var17 = var5[var17];
    var17 = var4.bind(var0)(var17);
    var17 = var17.AtIcon;
    var15.trailingIcon = var17;
    var15 = var7.bind(var0)(var16, var15);
    var14[3] = var15;
    var12.children = var14;
    var12 = var11.bind(var0)(var8, var12);
    var _closure1_slot19 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing.'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot20 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'heading-lg/bold',
        'children': 'Pressable Attachments'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot21 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it.'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot22 = var12;
    var12 = {};
    var15 = function() {
        _fun87156: for (var _fun87156_ip = 0;;) switch (_fun87156_ip) {
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
                    _fun87156_ip = 147;
                    continue _fun87156
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
                    _fun87158: for (var _fun87158_ip = 0;;) switch (_fun87158_ip) {
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
                                _fun87158_ip = 48;
                                continue _fun87158
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
    var14 = {};
    var14 = var7.bind(var0)(var15, var14);
    var12.children = var14;
    var12 = var7.bind(var0)(var8, var12);
    var _closure1_slot23 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself.'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot24 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'heading-lg/bold',
        'children': 'Rounding'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot25 = var12;
    var12 = var5[var3];
    var12 = var4.bind(var0)(var12);
    var14 = var12.Text;
    var12 = {
        'variant': 'text-md/normal',
        'children': 'All inputs except TextArea can use the isRound prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton.'
    };
    var12 = var7.bind(var0)(var14, var12);
    var _closure1_slot26 = var12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var12 = var6.SearchField;
    var6 = {
        'size': 'md',
        'isRound': true
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot27 = var6;
    var6 = 17;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var12 = var6.SettingsIcon;
    var6 = {};
    var6.size = var13;
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot28 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Error States'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot29 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var12 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'The status prop communicates the overall state of the input. Setting status to "error" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status.'
    };
    var6 = var7.bind(var0)(var12, var6);
    var _closure1_slot30 = var6;
    var6 = {};
    var13 = {};
    var12 = 'a space';
    var13.defaultValue = var12;
    var12 = function arg0() {
        _fun87150: for (var _fun87150_ip = 0;;) switch (_fun87150_ip) {
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
                    _fun87150_ip = 65;
                    continue _fun87150
                }
            case 39:
                var8 = var9.includes;
                var3 = ' ';
                var3 = var8.bind(var9)(var3);
                var0 = var7;
                if (!var3) {
                    _fun87150_ip = 65;
                    continue _fun87150
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
                    _fun87150_ip = 169;
                    continue _fun87150
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
                    _fun87151: for (var _fun87151_ip = 0;;) switch (_fun87151_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var3.includes;
                            var0 = ' ';
                            var0 = var1.bind(var3)(var0);
                            var1 = 'default';
                            if (!var0) {
                                _fun87151_ip = 37;
                                continue _fun87151
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
    var13 = var7.bind(var0)(var12, var13);
    var12 = new Array(2);
    var12[0] = var13;
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var14 = var13.TextArea;
    var13 = {
        'label': 'About me',
        'maxLength': 100,
        'placeholder': 'Long form text use TextArea',
        'errorMessage': 'This is an example of a multiline error message to showcase the icon alignment to this text'
    };
    var13 = var7.bind(var0)(var14, var13);
    var12[1] = var13;
    var6.children = var12;
    var6 = var11.bind(var0)(var8, var6);
    var _closure1_slot31 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Clearable'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot32 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Inputs can use the isClearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot33 = var6;
    var6 = {};
    var11 = 18;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var12 = var11.TextField;
    var11 = {
        'defaultValue': 'Clear this text',
        'isClearable': true
    };
    var11 = var7.bind(var0)(var12, var11);
    var6.children = var11;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot34 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Certain input types automatically control the isClearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot35 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Disableable'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot36 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot37 = var6;
    var6 = {};
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.TextInput;
    var10 = {
        'defaultValue': "Can't edit this value",
        'isDisabled': true
    };
    var10 = var7.bind(var0)(var11, var10);
    var6.children = var10;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot38 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var10 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'The isDisabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed.'
    };
    var6 = var7.bind(var0)(var10, var6);
    var _closure1_slot39 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var10 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Max Length'
    };
    var6 = var7.bind(var0)(var10, var6);
    var _closure1_slot40 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var10 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up."
    };
    var6 = var7.bind(var0)(var10, var6);
    var _closure1_slot41 = var6;
    var6 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var10 = var9.TextArea;
    var9 = {
        'label': 'Limited length',
        'maxLength': 124
    };
    var9 = var7.bind(var0)(var10, var9);
    var6.children = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot42 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length.'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot43 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Ghost Inputs'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot44 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'GhostInput is a minimal version of TextInput with no container shape. These should be used sparingly, only in cases where a single input is the primary focus of the surrounding area.'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot45 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'GhostInputs can also appear left-aligned by setting `isCentered` to false.'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot46 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Split Text Input'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot47 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-md/normal',
        'children': 'SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value.'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot48 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Data Types'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot49 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'text-md/normal',
        'children': 'Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented.'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot50 = var3;
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
        var14 = _closure1_slot0;
        var16 = _closure1_slot2;
        var4 = 7;
        var4 = var16[var4];
        var4 = var14.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var9 = 24;
        var4.spacing = var9;
        var7 = var7.container;
        var4.style = var7;
        var9 = _closure1_slot13;
        var7 = new Array(40);
        var7[0] = var9;
        var9 = _closure1_slot14;
        var7[1] = var9;
        var9 = _closure1_slot15;
        var7[2] = var9;
        var9 = _closure1_slot16;
        var7[3] = var9;
        var9 = _closure1_slot17;
        var7[4] = var9;
        var9 = _closure1_slot18;
        var7[5] = var9;
        var9 = _closure1_slot19;
        var7[6] = var9;
        var9 = _closure1_slot20;
        var7[7] = var9;
        var9 = _closure1_slot21;
        var7[8] = var9;
        var9 = _closure1_slot22;
        var7[9] = var9;
        var9 = _closure1_slot23;
        var7[10] = var9;
        var9 = _closure1_slot24;
        var7[11] = var9;
        var9 = _closure1_slot25;
        var7[12] = var9;
        var9 = _closure1_slot26;
        var7[13] = var9;
        var10 = _closure1_slot6;
        var11 = _closure1_slot51;
        var9 = {};
        var17 = _closure1_slot7;
        var12 = 19;
        var12 = var16[var12];
        var12 = var14.bind(var3)(var12);
        var13 = var12.Input;
        var12 = {};
        var19 = _closure1_slot27;
        var18 = new Array(2);
        var18[0] = var19;
        var21 = _closure1_slot6;
        var19 = 20;
        var19 = var16[var19];
        var19 = var14.bind(var3)(var19);
        var20 = var19.IconButton;
        var19 = {};
        var22 = _closure1_slot28;
        var19.icon = var22;
        var22 = 'Settings';
        var19.accessibilityLabel = var22;
        var22 = function() {
            var0 = null;
            return var0;
        };
        var19.onPress = var22;
        var22 = 'tertiary';
        var19.variant = var22;
        var19 = var21.bind(var3)(var20, var19);
        var18[1] = var19;
        var12.children = var18;
        var12 = var17.bind(var3)(var13, var12);
        var9.children = var12;
        var9 = var10.bind(var3)(var11, var9);
        var7[14] = var9;
        var9 = _closure1_slot29;
        var7[15] = var9;
        var9 = _closure1_slot30;
        var7[16] = var9;
        var9 = _closure1_slot31;
        var7[17] = var9;
        var9 = _closure1_slot32;
        var7[18] = var9;
        var9 = _closure1_slot33;
        var7[19] = var9;
        var9 = _closure1_slot34;
        var7[20] = var9;
        var9 = _closure1_slot35;
        var7[21] = var9;
        var9 = _closure1_slot36;
        var7[22] = var9;
        var9 = _closure1_slot37;
        var7[23] = var9;
        var9 = _closure1_slot38;
        var7[24] = var9;
        var9 = _closure1_slot39;
        var7[25] = var9;
        var9 = _closure1_slot40;
        var7[26] = var9;
        var9 = _closure1_slot41;
        var7[27] = var9;
        var9 = _closure1_slot42;
        var7[28] = var9;
        var9 = _closure1_slot43;
        var7[29] = var9;
        var9 = _closure1_slot44;
        var7[30] = var9;
        var9 = _closure1_slot45;
        var7[31] = var9;
        var10 = _closure1_slot6;
        var9 = {};
        var12 = 21;
        var13 = var16[var12];
        var13 = var14.bind(var3)(var13);
        var17 = var13.Button;
        var13 = {};
        var18 = function() {
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
                var0 = _closure1_slot52;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'ghost-input-sheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var13.onPress = var18;
        var18 = 'Show example';
        var13.text = var18;
        var13 = var10.bind(var3)(var17, var13);
        var9.children = var13;
        var9 = var10.bind(var3)(var11, var9);
        var7[32] = var9;
        var9 = _closure1_slot46;
        var7[33] = var9;
        var10 = _closure1_slot6;
        var9 = {};
        var12 = var16[var12];
        var12 = var14.bind(var3)(var12);
        var13 = var12.Button;
        var12 = {};
        var15 = function() {
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
                var0 = _closure1_slot53;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'ghost-input-sheet-left';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var12.onPress = var15;
        var15 = 'Show left-aligned example';
        var12.text = var15;
        var12 = var10.bind(var3)(var13, var12);
        var9.children = var12;
        var9 = var10.bind(var3)(var11, var9);
        var7[34] = var9;
        var9 = _closure1_slot47;
        var7[35] = var9;
        var9 = _closure1_slot48;
        var7[36] = var9;
        var10 = _closure1_slot7;
        var9 = {};
        var18 = _closure1_slot6;
        var13 = 23;
        var12 = var16[var13];
        var12 = var14.bind(var3)(var12);
        var15 = var12.SplitTextInput;
        var12 = {
            'label': 'Small',
            'size': 'sm',
            'placeholder': 'Placeholder',
            'leadingText': 'Click'
        };
        var19 = {};
        var17 = 'Foo';
        var19.accessibilityLabel = var17;
        var12.leadingPressableProps = var19;
        var15 = var18.bind(var3)(var15, var12);
        var12 = new Array(3);
        var12[0] = var15;
        var19 = _closure1_slot6;
        var15 = var16[var13];
        var15 = var14.bind(var3)(var15);
        var18 = var15.SplitTextInput;
        var15 = {
            'label': 'Medium',
            'size': 'md',
            'placeholder': 'Placeholder',
            'leadingText': 'Me'
        };
        var20 = {};
        var20.accessibilityLabel = var17;
        var15.leadingPressableProps = var20;
        var15 = var19.bind(var3)(var18, var15);
        var12[1] = var15;
        var15 = _closure1_slot6;
        var13 = var16[var13];
        var13 = var14.bind(var3)(var13);
        var14 = var13.SplitTextInput;
        var13 = {
            'label': 'Large',
            'size': 'lg',
            'placeholder': 'Placeholder',
            'leadingText': 'Here'
        };
        var16 = {};
        var16.accessibilityLabel = var17;
        var13.leadingPressableProps = var16;
        var13 = var15.bind(var3)(var14, var13);
        var12[2] = var13;
        var9.children = var12;
        var9 = var10.bind(var3)(var11, var9);
        var7[37] = var9;
        var9 = _closure1_slot49;
        var7[38] = var9;
        var8 = _closure1_slot50;
        var7[39] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4878, 4086, 5464, 4830, 11225, 5237, 4907, 5451, 3938, 4822, 7107, 5434, 5465, 5452, 7585, 4090, 3279, 7867, 2]);