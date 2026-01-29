// components_native/common/Alert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun35234: for (var _fun35234_ip = 0;;) switch (_fun35234_ip) {
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
                _fun35234_ip = 74;
                continue _fun35234;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var _closure1_slot9 = var8;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot10 = var6;
    var15 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var14 = 8;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.jsxs;
    var _closure1_slot14 = var6;
    var3 = var3.Fragment;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.createLegacyClassComponentStyles;
    var6 = {};
    var3 = {};
    var13 = 10;
    var11 = var5[var13];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var3.borderRadius = var11;
    var11 = 16;
    var3.padding = var11;
    var16 = var5[var13];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var16;
    var6.alert = var3;
    var3 = {};
    var3.marginBottom = var11;
    var16 = var5[var13];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_TEXT_HEADING_PRIMARY;
    var3.color = var16;
    var6.titleText = var3;
    var3 = {};
    var15 = var15.hairlineWidth;
    var3.height = var15;
    var15 = var5[var13];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var3.backgroundColor = var15;
    var6.divider = var3;
    var3 = {};
    var3.marginTop = var11;
    var11 = var5[var13];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_STRONG;
    var3.color = var11;
    var6.body = var3;
    var11 = {};
    var3 = 24;
    var11.marginTop = var3;
    var6.buttons = var11;
    var11 = {};
    var11.marginTop = var14;
    var6.cancelButton = var11;
    var11 = {
        'marginTop': 16,
        'alignSelf': 'center'
    };
    var6.secondaryConfirm = var11;
    var11 = {};
    var13 = var5[var13];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var11.borderRadius = var13;
    var6.gradient = var11;
    var6 = var7.bind(var9)(var6);
    var _closure1_slot16 = var6;
    var7 = var8.PureComponent;
    var6 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: Alert, environment: var5
            _fun35238: for (var _fun35238_ip = 0;;) switch (_fun35238_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun35238_ip = 86;
                        continue _fun35238
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun35238_ip = 120;
                    continue _fun35238;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot9;
                    var3 = var5.createRef;
                    var3 = var3.bind(var5)();
                    var0.alertRef = var3;
                    var3 = {};
                    var5 = false;
                    var3.confirming = var5;
                    var0.state = var3;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 11;
                    var3 = var5[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.getParser;
                    var3 = var3.bind(var6)();
                    var0.renderContent = var3;
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Timeout;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.timeout = var2;
                    var2 = function() { // Environment: var1
                        _fun35239: for (var _fun35239_ip = 0;;) switch (_fun35239_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.confirming;
                                if (var1) {
                                    _fun35239_ip = 125;
                                    continue _fun35239
                                }
                            case 21:
                                var3 = _closure3_slot0;
                                var0 = var3.props;
                                var2 = var0.onClose;
                                var1 = var0.onConfirm;
                                var0 = var0.autoCloseOnConfirm;
                                var5 = var3.setState;
                                var4 = {};
                                var6 = true;
                                var4.confirming = var6;
                                var4 = var5.bind(var3)(var4);
                                var6 = var3.timeout;
                                var5 = var6.start;
                                var4 = 500;
                                var3 = function() { // Environment: var3
                                    var2 = _closure3_slot0;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.confirming = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var4, var3);
                                if (!var0) {
                                    _fun35239_ip = 113;
                                    continue _fun35239
                                }
                            case 101:
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun35239_ip = 113;
                                    continue _fun35239
                                }
                            case 107:
                                var0 = undefined;
                                var0 = var2.bind(var0)();
                            case 113:
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun35239_ip = 125;
                                    continue _fun35239
                                }
                            case 119:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 125:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConfirm = var2;
                    var2 = function() { // Environment: var1
                        _fun35241: for (var _fun35241_ip = 0;;) switch (_fun35241_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.onClose;
                                var3 = var0.onCancel;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun35241_ip = 36;
                                    continue _fun35241
                                }
                            case 30:
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 36:
                                if (!(var0 != var1)) {
                                    _fun35241_ip = 46;
                                    continue _fun35241
                                }
                            case 40:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleCancel = var2;
                    var1 = function() { // Environment: var1
                        _fun35242: for (var _fun35242_ip = 0;;) switch (_fun35242_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var3 = var0.onClose;
                                var1 = var0.onConfirmSecondary;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun35242_ip = 36;
                                    continue _fun35242
                                }
                            case 30:
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 36:
                                if (!(var0 != var1)) {
                                    _fun35242_ip = 46;
                                    continue _fun35242
                                }
                            case 40:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSecondaryConfirm = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.setAccessibilityFocus;
            var1 = {};
            var4 = this;
            var4 = var4.alertRef;
            var1.ref = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.timeout;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35245: for (var _fun35245_ip = 0;;) switch (_fun35245_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var3 = var0.confirming;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun35245_ip = 54;
                        continue _fun35245
                    }
                case 20:
                    var1 = var2.timeout;
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    var1 = var2.setState;
                    var0 = {};
                    var0.confirming = var3;
                    var0 = var1.bind(var2)(var0);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderHeader';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35246: for (var _fun35246_ip = 0;;) switch (_fun35246_ip) {
                case 0:
                    var13 = this;
                    var1 = _closure1_slot16;
                    var0 = var13.context;
                    var4 = undefined;
                    var9 = var1.bind(var4)(var0);
                    var0 = var13.props;
                    var12 = var0.title;
                    var2 = null;
                    var1 = var2 == var12;
                    var0 = null;
                    if (var1) {
                        _fun35246_ip = 217;
                        continue _fun35246
                    }
                case 46:
                    var1 = '';
                    var0 = null;
                    if (!(var1 !== var12)) {
                        _fun35246_ip = 217;
                        continue _fun35246
                    }
                case 59:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot10;
                    var1 = {
                        'accessibilityRole': 'alert',
                        'accessible': true
                    };
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 14;
                    var5 = var10[var5];
                    var5 = var7.bind(var4)(var5);
                    var7 = var5.Text;
                    var5 = {
                        'accessibilityRole': 'header',
                        'variant': 'heading-md/extrabold',
                        'color': 'text-default'
                    };
                    var10 = var9.titleText;
                    var5.style = var10;
                    var14 = 'string';
                    var11 = typeof var12;
                    var10 = var12;
                    if (!(var14 === var11)) {
                        _fun35246_ip = 159;
                        continue _fun35246
                    }
                case 148:
                    var11 = var13.renderContent;
                    var10 = var11.bind(var13)(var12);
                case 159:
                    var5.children = var10;
                    var7 = var8.bind(var4)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot10;
                    var6 = {};
                    var9 = var9.divider;
                    var6.style = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 217:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderBody';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35247: for (var _fun35247_ip = 0;;) switch (_fun35247_ip) {
                case 0:
                    var10 = this;
                    var1 = _closure1_slot16;
                    var0 = var10.context;
                    var4 = undefined;
                    var7 = var1.bind(var4)(var0);
                    var0 = var10.props;
                    var9 = var0.body;
                    var0 = var0.children;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun35247_ip = 171;
                        continue _fun35247
                    }
                case 46:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var6 = {};
                    var8 = var10.props;
                    var8 = var8.contentHeight;
                    var6.maxHeight = var8;
                    var1.style = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 14;
                    var5 = var8[var5];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'maxFontSizeMultiplier': 1,
                        'variant': 'text-md/normal'
                    };
                    var7 = var7.body;
                    var5.style = var7;
                    var11 = 'string';
                    var8 = typeof var9;
                    var7 = var9;
                    if (!(var11 === var8)) {
                        _fun35247_ip = 151;
                        continue _fun35247
                    }
                case 140:
                    var8 = var10.renderContent;
                    var7 = var8.bind(var10)(var9);
                case 151:
                    var5.children = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 171:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'renderButtons';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35248: for (var _fun35248_ip = 0;;) switch (_fun35248_ip) {
                case 0:
                    var17 = this;
                    var1 = _closure1_slot16;
                    var0 = var17.context;
                    var4 = undefined;
                    var8 = var1.bind(var4)(var0);
                    var0 = var17.props;
                    var6 = var0.cancelText;
                    var16 = var0.confirmText;
                    if (!(var4 === var16)) {
                        _fun35248_ip = 98;
                        continue _fun35248
                    }
                case 43:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 15;
                    var2 = var9[var1];
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var9[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.BddRzS;
                    var16 = var2.bind(var3)(var1);
                case 98:
                    var15 = var0.confirmColor;
                    var19 = var0.secondaryConfirmText;
                    var1 = var0.noDefaultButtons;
                    var12 = var0.renderConfirmIcon;
                    var11 = var0.renderConfirmRightIcon;
                    var9 = var0.renderConfirmButton;
                    var14 = var0.isConfirmButtonDisabled;
                    var18 = var0.fillCancelText;
                    var0 = var17.state;
                    var13 = var0.confirming;
                    var0 = null;
                    if (var1) {
                        _fun35248_ip = 663;
                        continue _fun35248
                    }
                case 169:
                    var1 = var0 != var6;
                    var7 = undefined;
                    if (!var1) {
                        _fun35248_ip = 399;
                        continue _fun35248
                    }
                case 181:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.isThemeDark;
                    var1 = _closure1_slot12;
                    var1 = var1.theme;
                    var2 = var2.bind(var3)(var1);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var21 = 17;
                    var1 = var1[var21];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ButtonColors;
                    if (var2) {
                        _fun35248_ip = 259;
                        continue _fun35248
                    }
                case 251:
                    var10 = var1.GREY;
                    _fun35248_ip = 265;
                    continue _fun35248;
                case 259:
                    var10 = var1.TRANSPARENT;
                case 265:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var1 = var1[var21];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var22 = _closure1_slot1;
                    var20 = _closure1_slot3;
                    var20 = var20[var21];
                    var20 = var22.bind(var4)(var20);
                    var22 = var20.Looks;
                    if (var18) {
                        _fun35248_ip = 322;
                        continue _fun35248
                    }
                case 314:
                    var20 = var22.OUTLINED;
                    _fun35248_ip = 328;
                    continue _fun35248;
                case 322:
                    var20 = var22.FILLED;
                case 328:
                    var1.look = var20;
                    if (!var18) {
                        _fun35248_ip = 365;
                        continue _fun35248
                    }
                case 336:
                    var20 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var18 = var18[var21];
                    var18 = var20.bind(var4)(var18);
                    var18 = var18.ButtonColors;
                    var10 = var18.LIGHTGREY;
                case 365:
                    var1.color = var10;
                    var10 = var17.handleCancel;
                    var1.onPress = var10;
                    var1.text = var6;
                    var6 = var8.cancelButton;
                    var1.style = var6;
                    var7 = var3.bind(var4)(var2, var1);
                case 399:
                    var1 = var0 != var19;
                    var6 = undefined;
                    if (!var1) {
                        _fun35248_ip = 519;
                        continue _fun35248
                    }
                case 408:
                    var3 = _closure1_slot13;
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var1 = 18;
                    var1 = var20[var1];
                    var1 = var18.bind(var4)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var10 = 'button';
                    var1.accessibilityRole = var10;
                    var10 = var8.secondaryConfirm;
                    var1.style = var10;
                    var10 = var17.handleSecondaryConfirm;
                    var1.onPress = var10;
                    var10 = 14;
                    var10 = var20[var10];
                    var10 = var18.bind(var4)(var10);
                    var18 = var10.Text;
                    var10 = {
                        'variant': 'text-sm/semibold',
                        'color': 'text-link'
                    };
                    var10.children = var19;
                    var10 = var3.bind(var4)(var18, var10);
                    var1.children = var10;
                    var6 = var3.bind(var4)(var2, var1);
                case 519:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var8 = var8.buttons;
                    var1.style = var8;
                    var10 = var0 == var9;
                    var8 = undefined;
                    if (var10) {
                        _fun35248_ip = 552;
                        continue _fun35248
                    }
                case 548:
                    var8 = var9.bind(var4)();
                case 552:
                    if (!(var0 == var8)) {
                        _fun35248_ip = 635;
                        continue _fun35248
                    }
                case 556:
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var5 = 17;
                    var5 = var18[var5];
                    var9 = var9.bind(var4)(var5);
                    var5 = {};
                    var17 = var17.handleConfirm;
                    var5.onPress = var17;
                    var5.text = var16;
                    var5.color = var15;
                    var5.loading = var13;
                    var13 = var0 != var14;
                    if (!var13) {
                        _fun35248_ip = 615;
                        continue _fun35248
                    }
                case 612:
                    var13 = var14;
                case 615:
                    var5.disabled = var13;
                    var5.renderIcon = var12;
                    var5.renderRightIcon = var11;
                    var8 = var10.bind(var4)(var9, var5);
                case 635:
                    var5 = new Array(3);
                    var5[0] = var8;
                    var5[1] = var7;
                    var5[2] = var6;
                    var1.children = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                case 663:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'renderFooter';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35249: for (var _fun35249_ip = 0;;) switch (_fun35249_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.footer;
                    var0 = null;
                    var2 = var0 == var1;
                    if (var2) {
                        _fun35249_ip = 48;
                        continue _fun35249
                    }
                case 23:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var2.children = var1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var2);
                case 48:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun35250: for (var _fun35250_ip = 0;;) switch (_fun35250_ip) {
                case 0:
                    var14 = this;
                    var1 = _closure1_slot16;
                    var0 = var14.context;
                    var3 = undefined;
                    var12 = var1.bind(var3)(var0);
                    var0 = var14.props;
                    var13 = var0.style;
                    var10 = var0.width;
                    var6 = var0.isLandscape;
                    var15 = var0.onClose;
                    var7 = _closure1_slot14;
                    var1 = _closure1_slot15;
                    var0 = {};
                    var2 = _closure1_slot13;
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var8 = 19;
                    var8 = var4[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var11 = true;
                    var8.absolute = var11;
                    var11 = var12.gradient;
                    var8.componentStyles = var11;
                    var9 = var2.bind(var3)(var9, var8);
                    var8 = new Array(2);
                    var8[0] = var9;
                    var11 = _closure1_slot10;
                    var9 = {};
                    var16 = var14.alertRef;
                    var9.ref = var16;
                    var9.onAccessibilityEscape = var15;
                    var15 = var12.alert;
                    var12 = new Array(3);
                    var12[0] = var15;
                    var12[1] = var13;
                    var13 = {};
                    var13.width = var10;
                    var12[2] = var13;
                    var9.style = var12;
                    var12 = var14.renderHeader;
                    var13 = var12.bind(var14)();
                    var12 = new Array(4);
                    var12[0] = var13;
                    var13 = var14.renderBody;
                    var13 = var13.bind(var14)();
                    var12[1] = var13;
                    var13 = var14.renderButtons;
                    var13 = var13.bind(var14)();
                    var12[2] = var13;
                    var13 = var14.renderFooter;
                    var13 = var13.bind(var14)();
                    var12[3] = var13;
                    var9.children = var12;
                    var9 = var7.bind(var3)(var11, var9);
                    var8[1] = var9;
                    var0.children = var8;
                    var8 = var7.bind(var3)(var1, var0);
                    var1 = _closure1_slot0;
                    var0 = 20;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.RedesignCompat;
                    var0 = {};
                    var4 = var8;
                    if (!var6) {
                        _fun35250_ip = 319;
                        continue _fun35250
                    }
                case 288:
                    var7 = _closure1_slot13;
                    var6 = _closure1_slot11;
                    var5 = {};
                    var9 = {};
                    var9.maxHeight = var10;
                    var5.style = var9;
                    var5.children = var8;
                    var4 = var7.bind(var3)(var6, var5);
                case 319:
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var6.bind(var0)(var7);
    var _closure1_slot17 = var9;
    var6 = 21;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThemeContext;
    var9.contextType = var6;
    var7 = {};
    var6 = 17;
    var11 = var5[var6];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Colors;
    var11 = var11.BRAND;
    var7.confirmColor = var11;
    var7.autoCloseOnConfirm = var10;
    var9.defaultProps = var7;
    var7 = var8.memo;
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 22;
        var1 = var5[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var4 = _closure1_slot0;
        var2 = 23;
        var2 = var5[var2];
        var4 = var4.bind(var3)(var2);
        var2 = var4.useIsScreenLandscape;
        var4 = var2.bind(var4)();
        var2 = global;
        var7 = var2.Math;
        var6 = var7.min;
        var9 = var2.Math;
        var8 = var9.min;
        var5 = var1.width;
        var2 = var1.height;
        var5 = var8.bind(var9)(var5, var2);
        var2 = 0.9;
        var5 = var2 * var5;
        var2 = 500;
        var6 = var6.bind(var7)(var5, var2);
        var2 = var1.height;
        var1 = 0.7;
        var5 = var1 * var2;
        var2 = _closure1_slot13;
        var1 = _closure1_slot17;
        var0 = {};
        var0.width = var6;
        var0.contentHeight = var5;
        var0.isLandscape = var4;
        var10 = arg0;
        var11 = var0;
        var4 = copyDataProperties(var11, var10);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var7.bind(var8)(var1);
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ButtonColors;
    var1.Colors = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/Alert.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 3155, 33, 1297, 671, 3892, 3587, 4841, 3895, 1234, 3165, 4829, 4858, 8667, 4853, 3118, 1464, 5319, 2]);