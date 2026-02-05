// uikit-native/InputView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun48172: for (var _fun48172_ip = 0;;) switch (_fun48172_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun48172_ip = 74;
                continue _fun48172;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = ['numberOfLines', 'disableConstantNumberOfLines', 'inputTextColor', 'placeholder', 'placeholderTextColor', 'editable', 'large', 'accessibilityHint', 'maxLength', 'inActionSheet', 'trailingButton', 'clearButtonVisibility', 'disabled', 'style', 'inputTextStyle', 'onChangeText', 'onFocus', 'value'];
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var14 = 5;
    var1 = var6[var14];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var4 = var6[var1];
    var1 = arg3;
    var4 = var1.bind(var0)(var4);
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.View;
    var _closure1_slot10 = var7;
    var7 = var1.Pressable;
    var _closure1_slot11 = var7;
    var7 = var1.TouchableWithoutFeedback;
    var _closure1_slot12 = var7;
    var1 = var1.Platform;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var13 = var1.Fonts;
    var _closure1_slot13 = var13;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.jsx;
    var _closure1_slot14 = var7;
    var1 = var1.jsxs;
    var _closure1_slot15 = var1;
    var10 = 10;
    var1 = var6[var10];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createLegacyClassComponentStyles;
    var1 = {};
    var9 = {};
    var12 = 0.5;
    var9.opacity = var12;
    var1.disabled = var9;
    var9 = {
        'minHeight': 16,
        'alignItems': 'center',
        'flexDirection': 'row',
        'marginBottom': 5,
        'flexWrap': 'wrap'
    };
    var1.topContainer = var9;
    var9 = {};
    var9.marginRight = var14;
    var1.inputViewTitle = var9;
    var9 = {};
    var9.fontSize = var10;
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var9.color = var12;
    var1.inputViewError = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9.backgroundColor = var12;
    var1.inputBorder = var9;
    var9 = {
        'fontSize': 16,
        'paddingBottom': 0,
        'paddingTop': 0,
        'textAlignVertical': 'top',
        'flex': 1
    };
    var12 = 12;
    var15 = var6[var12];
    var15 = var5.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var9.color = var15;
    var1.inputView = var9;
    var9 = {
        'marginTop': 8,
        'height': 2
    };
    var1.inputViewBorder = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.TRANSPARENT;
    var9.backgroundColor = var15;
    var1.inputViewBorderActive = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'position': 'relative'
    };
    var1.inputContainer = var9;
    var9 = {};
    var9.marginTop = var14;
    var1.bottomContainer = var9;
    var9 = {};
    var14 = 'flex-end';
    var9.alignSelf = var14;
    var13 = var13.CODE_BOLD;
    var9.fontFamily = var13;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.DARK_PRIMARY_400_LIGHT_PRIMARY_300;
    var9.color = var12;
    var1.charactersLength = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var12;
    var1.closeIcon = var9;
    var9 = {
        'position': 'absolute',
        'right': 6
    };
    var1.clearButton = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9.color = var10;
    var1.required = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot16 = var1;
    var1 = {};
    var7 = 'never';
    var1.NEVER = var7;
    var7 = 'with-content';
    var1.WITH_CONTENT = var7;
    var7 = 'always';
    var1.ALWAYS = var7;
    var _closure1_slot17 = var1;
    var4 = var4.PureComponent;
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            _fun48176: for (var _fun48176_ip = 0;;) switch (_fun48176_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var7 = var7.bind(var2)(var4, var3);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun48176_ip = 86;
                        continue _fun48176
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun48176_ip = 120;
                    continue _fun48176;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var2)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var3.bind(var2)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = false;
                    var3.active = var4;
                    var4 = var0.props;
                    var4 = var4.value;
                    var3.value = var4;
                    var4 = var0.props;
                    var4 = var4.value;
                    var3.valueProp = var4;
                    var0.state = var3;
                    var0._ref = var2;
                    var2 = function() { // Environment: var1
                        _fun48177: for (var _fun48177_ip = 0;;) switch (_fun48177_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.onFocus;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun48177_ip = 30;
                                    continue _fun48177
                                }
                            case 24:
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 30:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = true;
                                var0.active = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleFocus = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = false;
                        var0.active = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleBlur = var2;
                    var2 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1.value = var4;
                        var0 = function() { // Environment: var0
                            _fun48180: for (var _fun48180_ip = 0;;) switch (_fun48180_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    var0 = var0.props;
                                    var2 = var0.onChangeText;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun48180_ip = 38;
                                        continue _fun48180
                                    }
                                case 24:
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 38:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleChangeText = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleChangeText;
                        var0 = '';
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleClear = var2;
                    var2 = function() { // Environment: var1
                        _fun48182: for (var _fun48182_ip = 0;;) switch (_fun48182_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.onEnd;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun48182_ip = 45;
                                    continue _fun48182
                                }
                            case 24:
                                var0 = _closure3_slot0;
                                var0 = var0.state;
                                var1 = var0.value;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleEndEditing = var2;
                    var2 = function() { // Environment: var1
                        _fun48183: for (var _fun48183_ip = 0;;) switch (_fun48183_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.onNext;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48183_ip = 30;
                                    continue _fun48183
                                }
                            case 24:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSubmitEditing = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.state;
                        var0 = var0.value;
                        return var0;
                    };
                    var0.getText = var2;
                    var2 = function() { // Environment: var1
                        _fun48185: for (var _fun48185_ip = 0;;) switch (_fun48185_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var3 = var0._ref;
                                var0 = null;
                                var2 = var0 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun48185_ip = 34;
                                    continue _fun48185
                                }
                            case 24:
                                var2 = var3.isFocused;
                                var1 = var2.bind(var3)();
                            case 34:
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun48185_ip = 44;
                                    continue _fun48185
                                }
                            case 41:
                                var0 = var1;
                            case 44:
                                return var0;
                        }
                    };
                    var0.isFocused = var2;
                    var2 = function() { // Environment: var1
                        _fun48186: for (var _fun48186_ip = 0;;) switch (_fun48186_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0._ref;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48186_ip = 29;
                                    continue _fun48186
                                }
                            case 19:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 29:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.focus = var2;
                    var2 = function() { // Environment: var1
                        _fun48187: for (var _fun48187_ip = 0;;) switch (_fun48187_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0._ref;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48187_ip = 29;
                                    continue _fun48187
                                }
                            case 19:
                                var0 = var1.blur;
                                var0 = var0.bind(var1)();
                            case 29:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.blur = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun48188: for (var _fun48188_ip = 0;;) switch (_fun48188_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0._ref;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48188_ip = 39;
                                    continue _fun48188
                                }
                            case 19:
                                var1 = var2.setNativeProps;
                                var0 = {};
                                var3 = arg0;
                                var0.text = var3;
                                var0 = var1.bind(var2)(var0);
                            case 39:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setText = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1._ref = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.setRef = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun48190: for (var _fun48190_ip = 0;;) switch (_fun48190_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0._ref;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48190_ip = 33;
                                    continue _fun48190
                                }
                            case 19:
                                var1 = var2.measure;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 33:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measure = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun48191: for (var _fun48191_ip = 0;;) switch (_fun48191_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0._ref;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48191_ip = 33;
                                    continue _fun48191
                                }
                            case 19:
                                var1 = var2.measureInWindow;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 33:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureInWindow = var2;
                    var1 = function(arg0, arg1, arg2) { // Environment: var1
                        _fun48192: for (var _fun48192_ip = 0;;) switch (_fun48192_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var4 = var0._ref;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun48192_ip = 41;
                                    continue _fun48192
                                }
                            case 19:
                                var3 = var4.measureLayout;
                                var2 = arg0;
                                var1 = arg1;
                                var0 = arg2;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureLayout = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'renderBorder';
        var5.key = var1;
        var1 = function() {
            _fun48193: for (var _fun48193_ip = 0;;) switch (_fun48193_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot16;
                    var1 = var5.context;
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var1 = var5.props;
                    var2 = var1.showBorder;
                    var8 = var1.borderColor;
                    var1 = null;
                    if (var2) {
                        _fun48193_ip = 46;
                        continue _fun48193
                    }
                case 44:
                    return var1;
                case 46:
                    if (!(var1 == var8)) {
                        _fun48193_ip = 61;
                        continue _fun48193
                    }
                case 50:
                    var1 = var6.inputBorder;
                    var8 = var1.backgroundColor;
                case 61:
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var7 = var6.inputViewBorder;
                    var4 = new Array(3);
                    var4[0] = var7;
                    var7 = {};
                    var7.backgroundColor = var8;
                    var4[1] = var7;
                    var5 = var5.state;
                    var5 = var5.active;
                    if (!var5) {
                        _fun48193_ip = 115;
                        continue _fun48193
                    }
                case 109:
                    var5 = var6.inputViewBorderActive;
                case 115:
                    var4[2] = var5;
                    var0.style = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var6 = 'renderTopContainer';
        var5.key = var6;
        var6 = function() {
            _fun48194: for (var _fun48194_ip = 0;;) switch (_fun48194_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot16;
                    var1 = var0.context;
                    var3 = undefined;
                    var10 = var2.bind(var3)(var1);
                    var1 = var0.props;
                    var0 = var1.showTopContainer;
                    var15 = var1.error;
                    var9 = var1.title;
                    var11 = var1.errorStyles;
                    var13 = var1.errorProps;
                    var8 = var1.required;
                    var12 = var1.helpText;
                    var6 = null;
                    var1 = var6 != var15;
                    if (!var1) {
                        _fun48194_ip = 84;
                        continue _fun48194
                    }
                case 76:
                    var2 = '';
                    var1 = var2 !== var15;
                case 84:
                    var5 = undefined;
                    if (!var1) {
                        _fun48194_ip = 195;
                        continue _fun48194
                    }
                case 89:
                    var4 = _closure1_slot15;
                    var2 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 13;
                    var1 = var14[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var18 = var1;
                    var17 = var13;
                    var13 = copyDataProperties(var18, var17);
                    var14 = var10.inputViewError;
                    var13 = new Array(2);
                    var13[0] = var14;
                    var13[1] = var11;
                    var11 = 'style';
                    var1[var11] = var13;
                    var13 = ['('];
                    var13[1] = var15;
                    var11 = ')';
                    var13[2] = var11;
                    var11 = 'children';
                    var1[var11] = var13;
                    var5 = var4.bind(var3)(var2, var1);
                case 195:
                    var1 = var6 != var9;
                    if (!var1) {
                        _fun48194_ip = 210;
                        continue _fun48194
                    }
                case 202:
                    var2 = '';
                    var1 = var2 !== var9;
                case 210:
                    var11 = undefined;
                    if (!var1) {
                        _fun48194_ip = 318;
                        continue _fun48194
                    }
                case 215:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 14;
                    var1 = var13[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var13 = 'heading-md/semibold';
                    var1.variant = var13;
                    var16 = 'text-default';
                    var13 = var16;
                    if (!(var6 !== var15)) {
                        _fun48194_ip = 286;
                        continue _fun48194
                    }
                case 269:
                    var14 = '';
                    var13 = var16;
                    if (!(var14 !== var15)) {
                        _fun48194_ip = 286;
                        continue _fun48194
                    }
                case 280:
                    var13 = 'text-feedback-critical';
                case 286:
                    var1.color = var13;
                    var14 = var10.inputViewTitle;
                    var13 = new Array(1);
                    var13[0] = var14;
                    var1.style = var13;
                    var1.children = var9;
                    var11 = var4.bind(var3)(var2, var1);
                case 318:
                    var1 = var6 != var12;
                    if (!var1) {
                        _fun48194_ip = 333;
                        continue _fun48194
                    }
                case 325:
                    var2 = '';
                    var1 = var2 !== var12;
                case 333:
                    var9 = undefined;
                    if (!var1) {
                        _fun48194_ip = 389;
                        continue _fun48194
                    }
                case 338:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 14;
                    var1 = var13[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var13 = 'text-xs/medium';
                    var1.variant = var13;
                    var1.children = var12;
                    var9 = var4.bind(var3)(var2, var1);
                case 389:
                    if (var0) {
                        _fun48194_ip = 402;
                        continue _fun48194
                    }
                case 392:
                    if (!(var6 == var5)) {
                        _fun48194_ip = 402;
                        continue _fun48194
                    }
                case 396:
                    if (!(var6 == var11)) {
                        _fun48194_ip = 402;
                        continue _fun48194
                    }
                case 400:
                    return var3;
                case 402:
                    var2 = _closure1_slot15;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var4 = var10.topContainer;
                    var0.style = var4;
                    var4 = new Array(4);
                    var4[0] = var11;
                    var4[1] = var9;
                    var6 = var6 == var5;
                    if (!var6) {
                        _fun48194_ip = 444;
                        continue _fun48194
                    }
                case 441:
                    var6 = var8;
                case 444:
                    if (!var6) {
                        _fun48194_ip = 503;
                        continue _fun48194
                    }
                case 447:
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 13;
                    var7 = var11[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.LegacyText;
                    var7 = {};
                    var10 = var10.required;
                    var7.style = var10;
                    var10 = '*';
                    var7.children = var10;
                    var6 = var9.bind(var3)(var8, var7);
                case 503:
                    var4[2] = var6;
                    var4[3] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'renderBottomContainer';
        var5.key = var6;
        var6 = function() {
            _fun48195: for (var _fun48195_ip = 0;;) switch (_fun48195_ip) {
                case 0:
                    var9 = this;
                    var1 = _closure1_slot16;
                    var0 = var9.context;
                    var4 = undefined;
                    var7 = var1.bind(var4)(var0);
                    var0 = var9.props;
                    var1 = var0.showCharactersRemaining;
                    var8 = var0.maxLength;
                    var2 = null;
                    var0 = null;
                    if (!var1) {
                        _fun48195_ip = 246;
                        continue _fun48195
                    }
                case 49:
                    var1 = var2 != var8;
                    var0 = null;
                    if (!var1) {
                        _fun48195_ip = 246;
                        continue _fun48195
                    }
                case 61:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var6 = var7.bottomContainer;
                    var1.style = var6;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 13;
                    var5 = var13[var5];
                    var5 = var10.bind(var4)(var5);
                    var6 = var5.LegacyText;
                    var5 = {};
                    var11 = true;
                    var5.accessible = var11;
                    var7 = var7.charactersLength;
                    var5.style = var7;
                    var7 = 15;
                    var11 = var13[var7];
                    var11 = var10.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var7 = var13[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var10 = var7.fR1cof;
                    var7 = {};
                    var13 = var9.getText;
                    var13 = var13.bind(var9)();
                    var13 = var13.length;
                    var13 = var8 - var13;
                    var7.remainingCharacters = var13;
                    var7 = var11.bind(var12)(var10, var7);
                    var5.accessibilityLabel = var7;
                    var7 = var9.getText;
                    var7 = var7.bind(var9)();
                    var7 = var7.length;
                    var7 = var8 - var7;
                    var5.children = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 246:
                    return var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'renderTrailingButton';
        var5.key = var6;
        var6 = function() {
            _fun48196: for (var _fun48196_ip = 0;;) switch (_fun48196_ip) {
                case 0:
                    var10 = this;
                    var1 = _closure1_slot16;
                    var0 = var10.context;
                    var5 = undefined;
                    var11 = var1.bind(var5)(var0);
                    var1 = var10.props;
                    var0 = var1.trailingButton;
                    var3 = var1.clearButtonVisibility;
                    var7 = var1.clearButtonAccessibilityLabel;
                    var8 = null;
                    if (!(var8 == var0)) {
                        _fun48196_ip = 284;
                        continue _fun48196
                    }
                case 54:
                    var1 = _closure1_slot17;
                    var1 = var1.ALWAYS;
                    if (!(var3 !== var1)) {
                        _fun48196_ip = 116;
                        continue _fun48196
                    }
                case 68:
                    var1 = _closure1_slot17;
                    var2 = var1.WITH_CONTENT;
                    var1 = null;
                    if (!(var3 === var2)) {
                        _fun48196_ip = 281;
                        continue _fun48196
                    }
                case 87:
                    var2 = var10.state;
                    var2 = var2.value;
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var3 > var2;
                    var1 = null;
                    if (!var2) {
                        _fun48196_ip = 281;
                        continue _fun48196
                    }
                case 116:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot11;
                    var2 = {
                        'hitSlop': 16,
                        'style': null,
                        'onPress': null,
                        'accessible': true,
                        'accessibilityRole': 'button'
                    };
                    var9 = 16;
                    var11 = var11.clearButton;
                    var2.style = var11;
                    var10 = var10.handleClear;
                    var2.onPress = var10;
                    if (!(var8 == var7)) {
                        _fun48196_ip = 224;
                        continue _fun48196
                    }
                case 169:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 15;
                    var10 = var13[var8];
                    var10 = var12.bind(var5)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.VkKicb;
                    var7 = var10.bind(var11)(var8);
                case 224:
                    var2.accessibilityLabel = var7;
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var7.bind(var5)(var6);
                    var7 = var6.CircleXIcon;
                    var6 = {};
                    var9 = 'sm';
                    var6.size = var9;
                    var6 = var8.bind(var5)(var7, var6);
                    var2.children = var6;
                    var1 = var4.bind(var5)(var3, var2);
                case 281:
                    var0 = var1;
                case 284:
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'renderTextView';
        var5.key = var6;
        var6 = function() {
            _fun48197: for (var _fun48197_ip = 0;;) switch (_fun48197_ip) {
                case 0:
                    var12 = this;
                    var2 = _closure1_slot16;
                    var1 = var12.context;
                    var3 = undefined;
                    var13 = var2.bind(var3)(var1);
                    var1 = var12.state;
                    var11 = var1.value;
                    var17 = var12.props;
                    var19 = var17.numberOfLines;
                    var9 = var17.disableConstantNumberOfLines;
                    var18 = var17.inputTextColor;
                    var10 = var17.placeholder;
                    var8 = var17.placeholderTextColor;
                    var7 = var17.editable;
                    var14 = var17.large;
                    var2 = var17.accessibilityHint;
                    var6 = var17.maxLength;
                    var1 = var17.inActionSheet;
                    var4 = var17.trailingButton;
                    var4 = var17.clearButtonVisibility;
                    var15 = var17.disabled;
                    var4 = var17.style;
                    var5 = var17.inputTextStyle;
                    var4 = var17.onChangeText;
                    var4 = var17.onFocus;
                    var4 = var17.value;
                    var16 = _closure1_slot4;
                    var4 = _closure1_slot3;
                    var4 = var16.bind(var3)(var17, var4);
                    var16 = var13.inputView;
                    var13 = new Array(5);
                    var13[0] = var16;
                    var16 = {};
                    var17 = 21;
                    if (var9) {
                        _fun48197_ip = 203;
                        continue _fun48197
                    }
                case 180:
                    var9 = var17;
                    if (!var14) {
                        _fun48197_ip = 189;
                        continue _fun48197
                    }
                case 186:
                    var9 = 30;
                case 189:
                    var9 = var9 * var19;
                    var16.minHeight = var9;
                    var9 = var16;
                    _fun48197_ip = 221;
                    continue _fun48197;
                case 203:
                    if (!var14) {
                        _fun48197_ip = 209;
                        continue _fun48197
                    }
                case 206:
                    var17 = 30;
                case 209:
                    var17 = var17 * var19;
                    var16.maxHeight = var17;
                    var9 = var16;
                case 221:
                    var13[1] = var9;
                    var9 = null;
                    if (!(var9 == var18)) {
                        _fun48197_ip = 235;
                        continue _fun48197
                    }
                case 231:
                    var16 = {};
                    _fun48197_ip = 244;
                    continue _fun48197;
                case 235:
                    var17 = {};
                    var17.color = var18;
                    var16 = var17;
                case 244:
                    var13[2] = var16;
                    if (var14) {
                        _fun48197_ip = 255;
                        continue _fun48197
                    }
                case 251:
                    var14 = {};
                    _fun48197_ip = 283;
                    continue _fun48197;
                case 255:
                    var16 = {};
                    var17 = 25;
                    var16.fontSize = var17;
                    var17 = _closure1_slot13;
                    var17 = var17.PRIMARY_SEMIBOLD;
                    var16.fontFamily = var17;
                    var14 = var16;
                case 283:
                    var13[3] = var14;
                    var13[4] = var5;
                    if (!(var9 == var8)) {
                        _fun48197_ip = 382;
                        continue _fun48197
                    }
                case 295:
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 17;
                    var5 = var16[var5];
                    var16 = var14.bind(var3)(var5);
                    var14 = var16.isThemeDark;
                    var5 = var12.context;
                    var5 = var5.theme;
                    var5 = var14.bind(var16)(var5);
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 11;
                    var14 = var17[var14];
                    var14 = var16.bind(var3)(var14);
                    var14 = var14.unsafe_rawColors;
                    if (var5) {
                        _fun48197_ip = 373;
                        continue _fun48197
                    }
                case 365:
                    var5 = var14.PRIMARY_200;
                    _fun48197_ip = 379;
                    continue _fun48197;
                case 373:
                    var5 = var14.PRIMARY_500;
                case 379:
                    var8 = var5;
                case 382:
                    var14 = var9 != var6;
                    var5 = undefined;
                    if (!var14) {
                        _fun48197_ip = 456;
                        continue _fun48197
                    }
                case 391:
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var14 = 15;
                    var17 = var19[var14];
                    var17 = var16.bind(var3)(var17);
                    var18 = var17.intl;
                    var17 = var18.formatToPlainString;
                    var14 = var19[var14];
                    var14 = var16.bind(var3)(var14);
                    var14 = var14.t;
                    var16 = var14["+DFxLc"];
                    var14 = {};
                    var14.maxLength = var6;
                    var5 = var17.bind(var18)(var16, var14);
                case 456:
                    var14 = new Array(2);
                    var14[0] = var5;
                    var14[1] = var2;
                    var5 = var14.filter;
                    var2 = global;
                    var2 = var2.Boolean;
                    var14 = var5.bind(var14)(var2);
                    var5 = var14.join;
                    var2 = ',';
                    var5 = var5.bind(var14)(var2);
                    if (var1) {
                        _fun48197_ip = 531;
                        continue _fun48197
                    }
                case 503:
                    var2 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 13;
                    var1 = var14[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TextInput;
                    _fun48197_ip = 551;
                    continue _fun48197;
                case 531:
                    var14 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var1 = 18;
                    var1 = var16[var1];
                    var2 = var14.bind(var3)(var1);
                case 551:
                    var1 = _closure1_slot14;
                    var0 = {};
                    var14 = {};
                    var14.disabled = var15;
                    var0.accessibilityState = var14;
                    var0.style = var13;
                    var13 = var12.setRef;
                    var0.ref = var13;
                    var13 = var12.handleChangeText;
                    var0.onChangeText = var13;
                    var13 = var12.handleFocus;
                    var0.onFocus = var13;
                    var13 = var12.handleBlur;
                    var0.onBlur = var13;
                    var13 = var12.handleEndEditing;
                    var0.onEndEditing = var13;
                    var12 = var12.handleSubmitEditing;
                    var0.onSubmitEditing = var12;
                    var0.value = var11;
                    var11 = 'never';
                    var0.clearButtonMode = var11;
                    var11 = var9 != var10;
                    var9 = undefined;
                    if (!var11) {
                        _fun48197_ip = 664;
                        continue _fun48197
                    }
                case 661:
                    var9 = var10;
                case 664:
                    var0.placeholder = var9;
                    var0.placeholderTextColor = var8;
                    var0.editable = var7;
                    var0.maxLength = var6;
                    var0.accessibilityHint = var5;
                    var22 = var0;
                    var21 = var4;
                    var4 = copyDataProperties(var22, var21);
                    var0 = var1.bind(var3)(var2, var0);
                    return var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'render';
        var5.key = var6;
        var6 = function() {
            _fun48198: for (var _fun48198_ip = 0;;) switch (_fun48198_ip) {
                case 0:
                    var10 = this;
                    var1 = _closure1_slot16;
                    var0 = var10.context;
                    var3 = undefined;
                    var13 = var1.bind(var3)(var0);
                    var0 = var10.props;
                    var9 = var0.disabled;
                    var11 = var0.style;
                    var14 = var0.inputContainerStyle;
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot12;
                    var0 = {};
                    var4 = false;
                    var0.accessible = var4;
                    var4 = var10.focus;
                    var0.onPress = var4;
                    var6 = _closure1_slot15;
                    var5 = _closure1_slot10;
                    var4 = {};
                    var7 = new Array(2);
                    var7[0] = var11;
                    var11 = var9;
                    if (!var11) {
                        _fun48198_ip = 98;
                        continue _fun48198
                    }
                case 93:
                    var11 = var13.disabled;
                case 98:
                    var7[1] = var11;
                    var4.style = var7;
                    var7 = 'auto';
                    if (!var9) {
                        _fun48198_ip = 117;
                        continue _fun48198
                    }
                case 113:
                    var7 = 'none';
                case 117:
                    var4.pointerEvents = var7;
                    var7 = var10.renderTopContainer;
                    var9 = var7.bind(var10)();
                    var7 = new Array(5);
                    var7[0] = var9;
                    var12 = _closure1_slot15;
                    var11 = _closure1_slot10;
                    var9 = {};
                    var15 = var13.inputContainer;
                    var13 = new Array(2);
                    var13[0] = var15;
                    var13[1] = var14;
                    var9.style = var13;
                    var13 = var10.renderTextView;
                    var14 = var13.bind(var10)();
                    var13 = new Array(2);
                    var13[0] = var14;
                    var14 = var10.renderTrailingButton;
                    var14 = var14.bind(var10)();
                    var13[1] = var14;
                    var9.children = var13;
                    var9 = var12.bind(var3)(var11, var9);
                    var7[1] = var9;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var11 = 19;
                    var9 = var9[var11];
                    var12 = var12.bind(var3)(var9);
                    var9 = var12.isAndroid;
                    var9 = var9.bind(var12)();
                    if (!var9) {
                        _fun48198_ip = 267;
                        continue _fun48198
                    }
                case 257:
                    var12 = var10.renderBorder;
                    var9 = var12.bind(var10)();
                case 267:
                    var7[2] = var9;
                    var9 = var10.renderBottomContainer;
                    var9 = var9.bind(var10)();
                    var7[3] = var9;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.isAndroid;
                    var8 = var8.bind(var9)();
                    var8 = !var8;
                    if (!var8) {
                        _fun48198_ip = 330;
                        continue _fun48198
                    }
                case 320:
                    var9 = var10.renderBorder;
                    var8 = var9.bind(var10)();
                case 330:
                    var7[4] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var5.value = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'getDerivedStateFromProps';
        var5.key = var6;
        var0 = function arg0, arg1() {
            _fun48199: for (var _fun48199_ip = 0;;) switch (_fun48199_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    var2 = var0.value;
                    var0 = var1.value;
                    var1 = var1.valueProp;
                    if (!(var2 !== var1)) {
                        _fun48199_ip = 30;
                        continue _fun48199
                    }
                case 26:
                    if (!(var2 === var0)) {
                        _fun48199_ip = 39;
                        continue _fun48199
                    }
                case 30:
                    var0 = {};
                    var0.valueProp = var2;
                    _fun48199_ip = 53;
                    continue _fun48199;
                case 39:
                    var1 = {};
                    var1.value = var2;
                    var1.valueProp = var2;
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThemeContext;
    var3.contextType = var4;
    var4 = {
        'showBorder': true,
        'value': '',
        'returnKeyType': 'next',
        'disabled': false,
        'autoFocus': false,
        'multiline': false,
        'numberOfLines': 1,
        'showTopContainer': true,
        'showCharactersRemaining': false,
        'clearButtonVisibility': 'never',
        'inActionSheet': false
    };
    var3.defaultProps = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/InputView.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ClearButtonVisibility = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 660, 33, 1297, 671, 4874, 4878, 3941, 1234, 5377, 3206, 5412, 478, 3159, 2]);