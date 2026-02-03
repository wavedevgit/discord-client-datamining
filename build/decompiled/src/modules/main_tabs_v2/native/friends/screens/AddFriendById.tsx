// modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = {};
        var1 = '';
        var0.validatedText = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["6p7Mhh"];
        var1 = var2.bind(var3)(var1);
        var0.hint = var1;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.errorMessage;
        var1 = _closure1_slot13;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/medium',
            'color': 'text-feedback-critical'
        };
        var7 = var6.inputAccessoryText;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.errorStateText;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var15.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var7 = var3.Keyboard;
    var _closure1_slot6 = var7;
    var3 = var3.Platform;
    var8 = 3;
    var3 = var5[var8];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PLACEHOLDER_TAG;
    var _closure1_slot8 = var7;
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.jsxs;
    var _closure1_slot11 = var7;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var7 = var12.createStyles;
    var3 = {};
    var13 = {
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 16
    };
    var14 = 7;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWER;
    var13.backgroundColor = var16;
    var3.container = var13;
    var13 = {};
    var16 = 'stretch';
    var13.alignSelf = var16;
    var3.textInputContainer = var13;
    var13 = {
        'alignSelf': 'stretch',
        'height': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 8
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var13.borderRadius = var16;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_NORMAL;
    var13.backgroundColor = var16;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var13.borderColor = var16;
    var3.textInputWrapper = var13;
    var13 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'fontSize': 16,
        'lineHeight': 20,
        'paddingTop': 0,
        'paddingBottom': 2,
        'paddingStart': 0,
        'paddingEnd': 0
    };
    var3.textInput = var13;
    var13 = {};
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var13.color = var16;
    var3.placeholderText = var13;
    var13 = {
        'position': 'absolute',
        'top': 8,
        'left': 8,
        'bottom': 8,
        'borderWidth': 0,
        'textAlign': 'left'
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var13.color = var16;
    var3.inputTextHint = var13;
    var13 = {
        'fontSize': 12,
        'lineHeight': 16,
        'marginVertical': 8
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_SUBTLE;
    var13.color = var16;
    var3.inputAccessoryText = var13;
    var13 = {};
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13.marginBottom = var16;
    var3.redesignInputAccessoryText = var13;
    var13 = {};
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13.marginTop = var16;
    var3.redesignFooterText = var13;
    var13 = {};
    var13.marginTop = var11;
    var3.inputHeaderText = var13;
    var13 = {};
    var13.flexGrow = var9;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var13.minHeight = var16;
    var3.redesignGrow = var13;
    var13 = {
        'color': null,
        'marginTop': 4,
        'marginBottom': 16
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_400;
    var13.color = var16;
    var3.errorStateText = var13;
    var13 = {
        'alignSelf': 'center',
        'paddingTop': 50
    };
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var13.color = var14;
    var3.activityIndicator = var13;
    var13 = {
        'marginTop': 8,
        'flexGrow': 0
    };
    var3.submitButton = var13;
    var3 = var7.bind(var12)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var3.SUCCESS = var11;
    var7 = 'SUCCESS';
    var3[var11] = var7;
    var3.ERROR = var10;
    var7 = 'ERROR';
    var3[var10] = var7;
    var3.LOADING = var9;
    var7 = 'LOADING';
    var3[var9] = var7;
    var3.NONE = var8;
    var7 = 'NONE';
    var3[var8] = var7;
    var _closure1_slot14 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun96220: for (var _fun96220_ip = 0;;) switch (_fun96220_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.textState;
                var19 = var1.onChangeText;
                var18 = var1.onSelectionChange;
                var17 = var1.onKeyPress;
                var16 = var1.onSubmitEditing;
                var7 = var1.onFocus;
                var5 = var1.username;
                var _closure2_slot0 = var5;
                var0 = var1.discriminator;
                var _closure2_slot1 = var0;
                var21 = var1.validationState;
                var13 = var1.autoFocus;
                var11 = var1.headerText;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun96220_ip = 154;
                    continue _fun96220
                }
            case 84:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var4 = var9[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.YegTF2;
                var4 = var4.bind(var6)(var2);
                var2 = var4.toUpperCase;
                var11 = var2.bind(var4)();
            case 154:
                var23 = var1.headerTextStyle;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot13;
                var12 = var1.bind(var3)();
                _closure2_slot2 = var12;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var14
                    _fun96221: for (var _fun96221_ip = 0;;) switch (_fun96221_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.copy;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot1;
                            var5 = null;
                            var8 = var5 != var6;
                            var6 = '';
                            var5 = var6;
                            if (!var8) {
                                _fun96221_ip = 95;
                                continue _fun96221
                            }
                        case 58:
                            var8 = _closure2_slot1;
                            var5 = var6;
                            if (!(var5 !== var8)) {
                                _fun96221_ip = 95;
                                continue _fun96221
                            }
                        case 69:
                            var9 = _closure2_slot1;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var8 = var2.concat;
                            var2 = '#';
                            var5 = var8.bind(var2)(var9);
                        case 95:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var2 = var2.concat;
                            var2 = var2.bind(var6)(var7, var5);
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentUsernameCopied;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                _closure2_slot3 = var0;
                var1 = var21.status;
                var0 = _closure1_slot14;
                var0 = var0.ERROR;
                var9 = undefined;
                if (!(var1 === var0)) {
                    _fun96220_ip = 247;
                    continue _fun96220
                }
            case 242:
                var9 = var21.message;
            case 247:
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var12.textInputContainer;
                var0.style = var4;
                var10 = _closure1_slot10;
                var24 = _closure1_slot0;
                var20 = _closure1_slot2;
                var5 = 9;
                var4 = var20[var5];
                var4 = var24.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var25 = var12.redesignInputAccessoryText;
                var22 = new Array(3);
                var22[0] = var25;
                var25 = var12.inputHeaderText;
                var22[1] = var25;
                var22[2] = var23;
                var4.style = var22;
                var4.children = var11;
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var11 = _closure1_slot10;
                var8 = 12;
                var8 = var20[var8];
                var8 = var24.bind(var3)(var8);
                var10 = var8.TextField;
                var8 = {};
                var22 = arg1;
                var8.ref = var22;
                var15 = var15.validatedText;
                var8.value = var15;
                var15 = 8;
                var22 = var20[var15];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var20 = var20[var15];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.qRaqel;
                var20 = var22.bind(var23)(var20);
                var8.accessibilityLabel = var20;
                var23 = var21.status;
                var20 = _closure1_slot14;
                var22 = var20.ERROR;
                var20 = undefined;
                if (!(var23 === var22)) {
                    _fun96220_ip = 481;
                    continue _fun96220
                }
            case 475:
                var20 = var21.a11yMessage;
            case 481:
                var8.accessibilityHint = var20;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var21 = var20[var15];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var15];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.qRaqel;
                var20 = var21.bind(var22)(var20);
                var8.placeholder = var20;
                var20 = var12.placeholderText;
                var20 = var20.color;
                var8.placeholderTextColor = var20;
                var8.onChange = var19;
                var8.onSelectionChange = var18;
                var8.onKeyPress = var17;
                var8.onSubmitEditing = var16;
                var16 = 'none';
                var8.autoCapitalize = var16;
                var16 = 'send';
                var8.returnKeyType = var16;
                var16 = 'twitter';
                var8.keyboardType = var16;
                var16 = false;
                var8.autoCorrect = var16;
                var16 = true;
                var8.blurOnSubmit = var16;
                var16 = 37;
                var8.maxLength = var16;
                var8.autoFocus = var13;
                var8.onFocus = var7;
                var7 = null;
                var16 = var7 != var9;
                var13 = undefined;
                if (!var16) {
                    _fun96220_ip = 653;
                    continue _fun96220
                }
            case 649:
                var13 = 'error';
            case 653:
                var8.status = var13;
                var8 = var11.bind(var3)(var10, var8);
                var4[1] = var8;
                if (!(var7 == var9)) {
                    _fun96220_ip = 799;
                    continue _fun96220
                }
            case 674:
                var8 = _closure1_slot10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = var10[var5];
                var5 = var11.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var12 = var12.redesignFooterText;
                var5.style = var12;
                var12 = var10[var15];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10["x++KN9"];
                var10 = {};
                var14 = function arg0, arg1() {
                    _fun96222: for (var _fun96222_ip = 0;;) switch (_fun96222_ip) {
                        case 0:
                            var4 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {
                                'style': null,
                                'variant': 'text-xs/semibold',
                                'color': 'text-default'
                            };
                            var0 = _closure2_slot2;
                            var5 = var0.redesignFooterText;
                            var0 = new Array(1);
                            var0[0] = var5;
                            var1.style = var0;
                            var0 = _closure2_slot3;
                            var1.onLongPress = var0;
                            var5 = _closure2_slot0;
                            var0 = new Array(2);
                            var0[0] = var5;
                            var8 = _closure2_slot1;
                            var7 = '';
                            var5 = undefined;
                            if (!(var7 !== var8)) {
                                _fun96222_ip = 136;
                                continue _fun96222
                            }
                        case 110:
                            var8 = _closure2_slot1;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = '#';
                            var5 = var7.bind(var6)(var8);
                        case 136:
                            var0[1] = var5;
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var10.usernameHook = var14;
                var10 = var12.bind(var13)(var11, var10);
                var5.children = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun96220_ip = 820;
                continue _fun96220;
            case 799:
                var8 = _closure1_slot10;
                var7 = _closure1_slot17;
                var6 = {};
                var6.errorMessage = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 820:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun96223: for (var _fun96223_ip = 0;;) switch (_fun96223_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.style;
                var22 = var0.onFocus;
                var18 = var0.autoFocusInput;
                var17 = var0.headerText;
                var16 = var0.headerTextStyle;
                var2 = var0.sourcePage;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot13;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var7 = _closure1_slot4;
                var0 = var7.useRef;
                var12 = 0;
                var0 = var0.bind(var7)(var12);
                var _closure2_slot1 = var0;
                var0 = var7.useRef;
                var19 = '';
                var0 = var0.bind(var7)(var19);
                var _closure2_slot2 = var0;
                var1 = var7.useState;
                var0 = function() { // Environment: var24
                    var1 = _closure1_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0 = var1.bind(var7)(var0);
                var5 = _closure1_slot3;
                var4 = 2;
                var0 = var5.bind(var3)(var0, var4);
                var26 = var0[var12];
                var _closure2_slot3 = var26;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var6 = var7.useState;
                var0 = {};
                var9 = _closure1_slot14;
                var9 = var9.NONE;
                var0.status = var9;
                var0 = var6.bind(var7)(var0);
                var0 = var5.bind(var3)(var0, var4);
                var9 = var0[var12];
                var _closure2_slot5 = var9;
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 13;
                var0 = var6[var0];
                var10 = var5.bind(var3)(var0);
                var6 = var10.useStateFromStores;
                var0 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var24
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var6.bind(var10)(var5, var0);
                var10 = var7.useCallback;
                var6 = function(arg0) { // Environment: var24
                    _fun96226: for (var _fun96226_ip = 0;;) switch (_fun96226_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure2_slot4;
                            var0 = var4.length;
                            var6 = 0;
                            if (!(!(var0 <= var6))) {
                                _fun96226_ip = 123;
                                continue _fun96226
                            }
                        case 21:
                            var2 = var4.split;
                            var0 = '#';
                            var8 = var2.bind(var4)(var0);
                            var7 = _closure1_slot3;
                            var5 = undefined;
                            var0 = 2;
                            var0 = var7.bind(var5)(var8, var0);
                            var8 = 1;
                            var7 = var0[var8];
                            var9 = null;
                            var5 = var9 != var7;
                            var0 = '';
                            if (!var5) {
                                _fun96226_ip = 109;
                                continue _fun96226
                            }
                        case 73:
                            var5 = _closure1_slot8;
                            var2 = var5.slice;
                            var9 = var9 != var7;
                            var6 = 0;
                            if (!var9) {
                                _fun96226_ip = 100;
                                continue _fun96226
                            }
                        case 91:
                            var7 = var7.length;
                            var6 = var7 + var8;
                        case 100:
                            var2 = var2.bind(var5)(var6);
                            var0 = var4 + var2;
                        case 109:
                            var2 = {};
                            var2.validatedText = var4;
                            var2.hint = var0;
                            _fun96226_ip = 136;
                            continue _fun96226;
                        case 123:
                            var4 = _closure1_slot16;
                            var0 = undefined;
                            var2 = var4.bind(var0)();
                        case 136:
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot6;
                            var1 = {};
                            var3 = _closure1_slot14;
                            var3 = var3.NONE;
                            var1.status = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var5 = new Array(0);
                var25 = var10.bind(var7)(var6, var5);
                var10 = function() {
                    _fun96227: for (var _fun96227_ip = 0;;) switch (_fun96227_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = var2.validatedText;
                            var2 = var3.trim;
                            var4 = var2.bind(var3)();
                            var _closure3_slot0 = var4;
                            var3 = var4.length;
                            var2 = 0;
                            if (!(!(var3 <= var2))) {
                                _fun96227_ip = 318;
                                continue _fun96227
                            }
                        case 43:
                            var3 = var4.includes;
                            var2 = '#';
                            var2 = var3.bind(var4)(var2);
                            var2 = !var2;
                            if (!var2) {
                                _fun96227_ip = 78;
                                continue _fun96227
                            }
                        case 63:
                            var5 = var4.startsWith;
                            var3 = '@';
                            var2 = var5.bind(var4)(var3);
                        case 78:
                            var6 = var4;
                            if (!var2) {
                                _fun96227_ip = 105;
                                continue _fun96227
                            }
                        case 84:
                            var3 = var4.substring;
                            var2 = 1;
                            var2 = var3.bind(var4)(var2);
                            _closure3_slot0 = var2;
                            var6 = var2;
                        case 105:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.validateDiscordTag;
                            var3 = var3.bind(var5)(var6);
                            var5 = null;
                            var9 = var6;
                            if (!(var5 == var3)) {
                                _fun96227_ip = 289;
                                continue _fun96227
                            }
                        case 153:
                            var6 = _closure2_slot6;
                            var5 = {};
                            var7 = _closure1_slot14;
                            var7 = var7.LOADING;
                            var5.status = var7;
                            var5 = var6.bind(var2)(var5);
                            var6 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 15;
                            var5 = var10[var8];
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.sendRequest;
                            var5 = {};
                            var5.discordTag = var9;
                            var9 = {};
                            var11 = 'Search - Add Friend Search';
                            var9.location = var11;
                            var5.context = var9;
                            var9 = _closure1_slot0;
                            var8 = var10[var8];
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.RelationshipErrorUXConfig;
                            var8 = var8.SHOW_ONLY_IF_ACTION_NEEDED;
                            var5.errorUxConfig = var8;
                            var7 = var6.bind(var7)(var5);
                            var6 = var7.then;
                            var5 = function() { // Environment: var1
                                var4 = _closure2_slot4;
                                var3 = _closure1_slot16;
                                var0 = undefined;
                                var3 = var3.bind(var0)();
                                var3 = var4.bind(var0)(var3);
                                var5 = _closure2_slot6;
                                var2 = {};
                                var3 = _closure1_slot14;
                                var3 = var3.SUCCESS;
                                var2.status = var3;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var6 = 8;
                                var7 = var4[var6];
                                var7 = var3.bind(var0)(var7);
                                var9 = var7.intl;
                                var8 = var9.format;
                                var6 = var4[var6];
                                var6 = var3.bind(var0)(var6);
                                var6 = var6.t;
                                var7 = var6.Rtl1Ep;
                                var6 = {};
                                var10 = _closure3_slot0;
                                var6.discordTag = var10;
                                var6 = var8.bind(var9)(var7, var6);
                                var2.message = var6;
                                var2 = var5.bind(var0)(var2);
                                var2 = 11;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.presentAddedFriendToast;
                                var2 = var2.bind(var3)();
                                var2 = _closure1_slot6;
                                var1 = var2.dismiss;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1 = function(arg0) { // Environment: var1
                                _fun96229: for (var _fun96229_ip = 0;;) switch (_fun96229_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var2 = _closure2_slot6;
                                        var1 = {};
                                        var0 = _closure1_slot14;
                                        var0 = var0.ERROR;
                                        var1.status = var0;
                                        var5 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var7 = 14;
                                        var3 = var0[var7];
                                        var0 = undefined;
                                        var12 = var5.bind(var0)(var3);
                                        var11 = var12.humanizeAbortCode;
                                        var8 = null;
                                        var5 = var8 == var9;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun96229_ip = 87;
                                            continue _fun96229
                                        }
                                    case 68:
                                        var5 = var9.body;
                                        var6 = var8 == var5;
                                        var3 = undefined;
                                        if (var6) {
                                            _fun96229_ip = 87;
                                            continue _fun96229
                                        }
                                    case 82:
                                        var3 = var5.code;
                                    case 87:
                                        var5 = var8 != var3;
                                        var6 = -1;
                                        var10 = var6;
                                        if (!var5) {
                                            _fun96229_ip = 106;
                                            continue _fun96229
                                        }
                                    case 103:
                                        var10 = var3;
                                    case 106:
                                        var5 = _closure3_slot0;
                                        var5 = var11.bind(var12)(var10, var5);
                                        var1.message = var5;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var7];
                                        var5 = var5.bind(var0)(var4);
                                        var4 = var5.humanizeAbortCodeForA11y;
                                        var10 = var8 == var9;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun96229_ip = 174;
                                            continue _fun96229
                                        }
                                    case 155:
                                        var9 = var9.body;
                                        var10 = var8 == var9;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun96229_ip = 174;
                                            continue _fun96229
                                        }
                                    case 169:
                                        var7 = var9.code;
                                    case 174:
                                        var8 = var8 != var7;
                                        if (!var8) {
                                            _fun96229_ip = 184;
                                            continue _fun96229
                                        }
                                    case 181:
                                        var6 = var7;
                                    case 184:
                                        var3 = _closure3_slot0;
                                        var3 = var4.bind(var5)(var6, var3);
                                        var1.a11yMessage = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1 = var6.bind(var7)(var5, var1);
                            _fun96227_ip = 318;
                            continue _fun96227;
                        case 289:
                            var1 = _closure2_slot6;
                            var0 = {};
                            var4 = _closure1_slot14;
                            var4 = var4.ERROR;
                            var0.status = var4;
                            var0.message = var3;
                            var0 = var1.bind(var2)(var0);
                        case 318:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var24
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.FRIEND_ADD_VIEWED;
                    var1 = {};
                    var5 = 'Id';
                    var1.friend_add_type = var5;
                    var5 = _closure2_slot0;
                    var1.source_page = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var5);
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var9;
                var2 = function() { // Environment: var24
                    _fun96231: for (var _fun96231_ip = 0;;) switch (_fun96231_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var3 = var1.status;
                            var2 = _closure1_slot14;
                            var2 = var2.ERROR;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun96231_ip = 48;
                                continue _fun96231
                            }
                        case 32:
                            var3 = _closure2_slot5;
                            var4 = var3.a11yMessage;
                            var3 = null;
                            var2 = var3 != var4;
                        case 48:
                            if (!var2) {
                                _fun96231_ip = 100;
                                continue _fun96231
                            }
                        case 51:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.AccessibilityAnnouncer;
                            var1 = var2.announce;
                            var0 = _closure2_slot5;
                            var0 = var0.a11yMessage;
                            var0 = var1.bind(var2)(var0);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                var5 = var26.validatedText;
                var2 = var5.trim;
                var2 = var2.bind(var5)();
                var11 = var2.length;
                var21 = null;
                if (!(var21 != var0)) {
                    _fun96223_ip = 363;
                    continue _fun96223
                }
            case 350:
                var2 = var0.hasUniqueUsername;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun96223_ip = 406;
                    continue _fun96223
                }
            case 363:
                var2 = var21 == var0;
                var5 = undefined;
                if (var2) {
                    _fun96223_ip = 377;
                    continue _fun96223
                }
            case 372:
                var5 = var0.username;
            case 377:
                var2 = new Array(2);
                var2[0] = var5;
                var6 = var21 == var0;
                var5 = undefined;
                if (var6) {
                    _fun96223_ip = 400;
                    continue _fun96223
                }
            case 394:
                var5 = var0.discriminator;
            case 400:
                var2[1] = var5;
                _fun96223_ip = 435;
                continue _fun96223;
            case 406:
                var6 = var21 == var0;
                var5 = undefined;
                if (var6) {
                    _fun96223_ip = 420;
                    continue _fun96223
                }
            case 415:
                var5 = var0.username;
            case 420:
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var21;
                var2 = var0;
            case 435:
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var4);
                var23 = var0[var12];
                var20 = var0[var1];
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var15 = var13.container;
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var14;
                var4.style = var7;
                var15 = _closure1_slot10;
                var14 = _closure1_slot15;
                var7 = {};
                var7.textState = var26;
                var7.onChangeText = var25;
                var25 = function arg0() {
                    _fun96232: for (var _fun96232_ip = 0;;) switch (_fun96232_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.selection;
                            var1 = var0.start;
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (!(var1 !== var2)) {
                                _fun96232_ip = 46;
                                continue _fun96232
                            }
                        case 36:
                            var0 = _closure2_slot1;
                            var0.current = var1;
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7.onSelectionChange = var25;
                var24 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.key;
                    var0 = _closure2_slot2;
                    var0.current = var1;
                    var0 = undefined;
                    return var0;
                };
                var7.onKeyPress = var24;
                var7.onSubmitEditing = var10;
                var7.onFocus = var22;
                var24 = var21 != var23;
                var22 = var19;
                if (!var24) {
                    _fun96223_ip = 561;
                    continue _fun96223
                }
            case 558:
                var22 = var23;
            case 561:
                var7.username = var22;
                var21 = var21 != var20;
                if (!var21) {
                    _fun96223_ip = 575;
                    continue _fun96223
                }
            case 572:
                var19 = var20;
            case 575:
                var7.discriminator = var19;
                var7.validationState = var9;
                var7.autoFocus = var18;
                var7.headerText = var17;
                var7.headerTextStyle = var16;
                var16 = arg1;
                var7.ref = var16;
                var7 = var15.bind(var3)(var14, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var13 = var13.redesignGrow;
                var5.style = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 18;
                var5 = var17[var5];
                var5 = var16.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var13 = 'lg';
                var5.size = var13;
                var13 = 8;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["PMsq/b"];
                var13 = var14.bind(var15)(var13);
                var5.text = var13;
                var11 = var11 <= var12;
                var5.disabled = var11;
                var5.onPress = var10;
                var9 = var9.status;
                var8 = _closure1_slot14;
                var8 = var8.LOADING;
                var8 = var9 === var8;
                var5.loading = var8;
                var8 = false;
                var5.grow = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 660, 33, 1297, 671, 1234, 3941, 5291, 3147, 5402, 566, 8023, 8019, 795, 3160, 4084, 2]);