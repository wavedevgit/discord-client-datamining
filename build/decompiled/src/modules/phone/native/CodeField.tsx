// modules/phone/native/CodeField.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun61719: for (var _fun61719_ip = 0;;) switch (_fun61719_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.loading;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun61719_ip = 19;
                    continue _fun61719
                }
            case 17:
                var16 = false;
            case 19:
                var10 = var0.error;
                var13 = var0.count;
                if (!(var13 === var3)) {
                    _fun61719_ip = 37;
                    continue _fun61719
                }
            case 34:
                var13 = 6;
            case 37:
                var15 = var0.codeType;
                if (!(var15 === var3)) {
                    _fun61719_ip = 60;
                    continue _fun61719
                }
            case 47:
                var1 = _closure1_slot9;
                var15 = var1.NUMERIC;
            case 60:
                var _closure2_slot0 = var15;
                var1 = var0.onCodeEntered;
                var _closure2_slot1 = var1;
                var12 = var0.disabled;
                var11 = var0.code;
                var _closure2_slot2 = var11;
                var0 = var0.setCode;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot10;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.singleInputWrapper;
                var0.style = var4;
                var6 = _closure1_slot7;
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var4 = var18.bind(var3)(var4);
                var5 = var4.TextInput;
                var4 = {};
                var4.errorMessage = var10;
                var4.value = var11;
                var10 = 'characters';
                var4.autoCapitalize = var10;
                var4.maxLength = var13;
                var19 = 10;
                var10 = var7[var19];
                var10 = var18.bind(var3)(var10);
                var17 = var10.intl;
                var10 = var17.string;
                var7 = var7[var19];
                var7 = var18.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["ysthA+"];
                var7 = var10.bind(var17)(var7);
                var4.accessibilityLabel = var7;
                var7 = 'oneTimeCode';
                var4.textContentType = var7;
                var7 = _closure1_slot9;
                var10 = var7.NUMERIC;
                var7 = 'default';
                if (!(var15 === var10)) {
                    _fun61719_ip = 274;
                    continue _fun61719
                }
            case 268:
                var7 = 'number-pad';
            case 274:
                var4.keyboardType = var7;
                var7 = function arg0() {
                    _fun61720: for (var _fun61720_ip = 0;;) switch (_fun61720_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot9;
                            var1 = var1.NUMERIC;
                            if (!(var2 !== var1)) {
                                _fun61720_ip = 43;
                                continue _fun61720
                            }
                        case 27:
                            var3 = /[^A-Z0-9]/g;
                            _fun61720_ip = 57;
                            continue _fun61720;
                        case 43:
                            var3 = /\D/g;
                        case 57:
                            var2 = var4.replace;
                            var1 = '';
                            var2 = var2.bind(var4)(var3, var1);
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var4.onChange = var7;
                var4.isDisabled = var12;
                var7 = true;
                var4.isClearable = var7;
                var4.autoFocus = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var9.singleInputButton;
                var5.style = var9;
                var10 = _closure1_slot7;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 11;
                var8 = var15[var8];
                var8 = var18.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'loading': null,
                    'variant': 'primary',
                    'size': 'lg'
                };
                var8.loading = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["13ofGu"];
                var15 = var16.bind(var17)(var15);
                var8.text = var15;
                var14 = function() {
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var14;
                var11 = var11.length;
                var11 = var11 !== var13;
                if (var11) {
                    _fun61719_ip = 462;
                    continue _fun61719
                }
            case 459:
                var11 = var12;
            case 462:
                var8.disabled = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun61722: for (var _fun61722_ip = 0;;) switch (_fun61722_ip) {
            case 0:
                var0 = arg0;
                var26 = var0.title;
                var16 = var0.description;
                var24 = var0.error;
                var22 = var0.onCodeEntered;
                var25 = var0.loading;
                var3 = undefined;
                if (!(var25 === var3)) {
                    _fun61722_ip = 38;
                    continue _fun61722
                }
            case 36:
                var25 = false;
            case 38:
                var23 = var0.count;
                if (!(var23 === var3)) {
                    _fun61722_ip = 51;
                    continue _fun61722
                }
            case 48:
                var23 = 6;
            case 51:
                var21 = var0.codeType;
                if (!(var21 === var3)) {
                    _fun61722_ip = 74;
                    continue _fun61722
                }
            case 61:
                var1 = _closure1_slot9;
                var21 = var1.NUMERIC;
            case 74:
                var11 = var0.actions;
                var8 = var0.footer;
                var6 = var0.backgroundStyle;
                var20 = var0.disabled;
                var0 = _closure1_slot10;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = '';
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var19 = var1[var0];
                var0 = 1;
                var18 = var1[var0];
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = var15.background;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = var15.backgroundFlex;
                var0.contentContainerStyle = var4;
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var4 = false;
                var0.alwaysBounceVertical = var4;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var4 = {};
                var9 = var15.container;
                var4.style = var9;
                var17 = _closure1_slot7;
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var12 = 12;
                var10 = var9[var12];
                var10 = var13.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = var15.title;
                var10.style = var27;
                var10.children = var26;
                var14 = var17.bind(var3)(var14, var10);
                var10 = new Array(4);
                var10[0] = var14;
                var14 = _closure1_slot7;
                var12 = var9[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var17 = var15.subtitle;
                var12.style = var17;
                var12.children = var16;
                var12 = var14.bind(var3)(var13, var12);
                var10[1] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot5;
                var12 = {};
                var15 = var15.inputContainer;
                var12.style = var15;
                var17 = _closure1_slot7;
                var16 = _closure1_slot11;
                var15 = {};
                var15.loading = var25;
                var15.error = var24;
                var15.count = var23;
                var15.onCodeEntered = var22;
                var15.codeType = var21;
                var15.disabled = var20;
                var15.code = var19;
                var15.setCode = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var10[2] = var12;
                var10[3] = var11;
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var5 = 13;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var4 = var6[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.View;
    var _closure1_slot5 = var4;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var14 = var3.Fonts;
    var13 = 4;
    var3 = var6[var13];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = 'numeric';
    var3.NUMERIC = var4;
    var4 = 'alphanumeric';
    var3.ALPHANUMERIC = var4;
    var _closure1_slot9 = var3;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var4.flex = var11;
    var7.viewWrapper = var4;
    var10 = {};
    var4 = 6;
    var15 = var6[var4];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var15;
    var10.flex = var11;
    var7.background = var10;
    var10 = {
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var7.backgroundFlex = var10;
    var10 = {};
    var11 = 16;
    var10.padding = var11;
    var7.container = var10;
    var15 = 'center';
    var10 = {
        'height': 190,
        'alignSelf': 'center',
        'resizeMode': 'contain'
    };
    var7.image = var10;
    var10 = {};
    var10.textAlign = var15;
    var7.title = var10;
    var10 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var7.subtitle = var10;
    var10 = {
        'color': null,
        'textAlign': 'center',
        'marginTop': 8
    };
    var11 = var6[var4];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var10.color = var11;
    var7.bodyError = var10;
    var11 = '100%';
    var10 = {
        'marginTop': 20,
        'width': '100%',
        'alignItems': 'center'
    };
    var7.inputContainer = var10;
    var10 = {
        'maxWidth': 336,
        'width': '100%',
        'flexDirection': 'row',
        'justifyContent': 'space-around'
    };
    var7.codeContainer = var10;
    var10 = {};
    var10.width = var13;
    var7.spacer = var10;
    var10 = {
        'borderWidth': 1,
        'borderRadius': 5,
        'alignItems': 'center'
    };
    var16 = var6[var4];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var16;
    var16 = var6[var4];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var10.borderColor = var16;
    var7.inputWrapper = var10;
    var10 = {};
    var16 = var6[var4];
    var16 = var12.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_400;
    var10.borderColor = var16;
    var7.inputWrapperError = var10;
    var10 = {};
    var10.textAlign = var15;
    var7.input = var10;
    var10 = {};
    var15 = 7;
    var15 = var6[var15];
    var15 = var12.bind(var0)(var15);
    var14 = var14.PRIMARY_MEDIUM;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var4 = var4.colors;
    var12 = var4.TEXT_DEFAULT;
    var4 = 14;
    var18 = var15.bind(var0)(var14, var12, var4);
    var19 = var10;
    var12 = copyDataProperties(var19, var18);
    var12 = 'marginHorizontal';
    var10[var12] = var13;
    var7.actionSeparator = var10;
    var10 = {};
    var10.width = var11;
    var7.singleInputWrapper = var10;
    var10 = {};
    var11 = 42;
    var10.height = var11;
    var7.singleInput = var10;
    var10 = {
        'marginTop': 8,
        'justifyContent': 'flex-end'
    };
    var7.singleInputButton = var10;
    var10 = {};
    var11 = 70;
    var10.paddingBottom = var11;
    var7.bottomSpace = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/native/CodeField.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun61723: for (var _fun61723_ip = 0;;) switch (_fun61723_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot10;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = var5.disableKeyboardAvoidingView;
                var3 = _closure1_slot7;
                if (var0) {
                    _fun61723_ip = 99;
                    continue _fun61723
                }
            case 29:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 13;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var6 = var6.viewWrapper;
                var0.style = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var11 = var6;
                var10 = var5;
                var9 = copyDataProperties(var11, var10);
                var6 = var8.bind(var4)(var7, var6);
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun61723_ip = 121;
                continue _fun61723;
            case 99:
                var2 = _closure1_slot12;
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var0 = var3.bind(var4)(var2, var1);
            case 121:
                return var0;
        }
    };
    var2.default = var4;
    var2.CodeType = var3;
    var1 = function arg0() {
        _fun61724: for (var _fun61724_ip = 0;;) switch (_fun61724_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.hasError;
                var _closure2_slot0 = var2;
                var9 = var0.onCodeEntered;
                var _closure2_slot1 = var9;
                var6 = var0.count;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun61724_ip = 40;
                    continue _fun61724
                }
            case 37:
                var6 = 6;
            case 40:
                var _closure2_slot2 = var6;
                var0 = var0.codeType;
                if (!(var0 === var3)) {
                    _fun61724_ip = 67;
                    continue _fun61724
                }
            case 54:
                var2 = _closure1_slot9;
                var0 = var2.NUMERIC;
            case 67:
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var2 = _closure1_slot10;
                var5 = var2.bind(var3)();
                _closure2_slot4 = var5;
                var8 = _closure1_slot4;
                var4 = var8.useState;
                var7 = global;
                var2 = var7.Array;
                var11 = var2.bind(var3)(var6);
                var10 = var11.fill;
                var2 = '';
                var2 = var10.bind(var11)(var2);
                var8 = var4.bind(var8)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var10 = var4.bind(var3)(var8, var2);
                var2 = 0;
                var4 = var10[var2];
                _closure2_slot5 = var4;
                var8 = 1;
                var8 = var10[var8];
                _closure2_slot6 = var8;
                var10 = _closure1_slot4;
                var8 = var10.useRef;
                var7 = var7.Array;
                var12 = var7.bind(var3)(var6);
                var11 = var12.fill;
                var7 = null;
                var7 = var11.bind(var12)(var7);
                var7 = var8.bind(var10)(var7);
                _closure2_slot7 = var7;
                var8 = _closure1_slot4;
                var7 = var8.useRef;
                var7 = var7.bind(var8)(var9);
                _closure2_slot8 = var7;
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var7 = function() { // Environment: var1
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var1
                    _fun61726: for (var _fun61726_ip = 0;;) switch (_fun61726_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = function arg0() {
                                var2 = arg0;
                                var1 = var2.every;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var0 = var1.trim;
                                    var1 = var0.bind(var1)();
                                    var0 = '';
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            if (!var2) {
                                _fun61726_ip = 56;
                                continue _fun61726
                            }
                        case 24:
                            var3 = _closure2_slot8;
                            var2 = var3.current;
                            var5 = _closure2_slot5;
                            var4 = var5.join;
                            var1 = '';
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4, var7);
                var4 = new Array(0);
                _closure2_slot9 = var4;
                var1 = function arg0() {
                    _fun61729: for (var _fun61729_ip = 0;;) switch (_fun61729_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var1 = _closure2_slot2;
                            var0 = 2;
                            var0 = var1 / var0;
                            if (!(var6 === var0)) {
                                _fun61729_ip = 81;
                                continue _fun61729
                            }
                        case 27:
                            var2 = _closure2_slot9;
                            var1 = var2.push;
                            var7 = _closure1_slot7;
                            var5 = _closure1_slot5;
                            var4 = {};
                            var0 = _closure2_slot4;
                            var0 = var0.spacer;
                            var4.style = var0;
                            var3 = undefined;
                            var0 = 'spacer';
                            var0 = var7.bind(var3)(var5, var4, var0);
                            var0 = var1.bind(var2)(var0);
                        case 81:
                            var3 = _closure2_slot9;
                            var2 = var3.push;
                            var5 = _closure1_slot7;
                            var4 = _closure1_slot5;
                            var1 = {};
                            var0 = _closure2_slot4;
                            var7 = var0.inputWrapper;
                            var0 = new Array(2);
                            var0[0] = var7;
                            var8 = _closure2_slot0;
                            var7 = null;
                            if (!var8) {
                                _fun61729_ip = 140;
                                continue _fun61729
                            }
                        case 130:
                            var8 = _closure2_slot4;
                            var7 = var8.inputWrapperError;
                        case 140:
                            var0[1] = var7;
                            var1.style = var0;
                            var9 = _closure1_slot7;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 8;
                            var7 = var7[var0];
                            var0 = undefined;
                            var7 = var8.bind(var0)(var7);
                            var8 = var7.TextInput;
                            var7 = {};
                            var13 = function arg0() {
                                var0 = _closure2_slot7;
                                var2 = var0.current;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var2[var1] = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var7.ref = var13;
                            var14 = {};
                            var13 = 42;
                            var14.height = var13;
                            var15 = _closure2_slot2;
                            var13 = 252;
                            var13 = var13 / var15;
                            var14.width = var13;
                            var13 = new Array(2);
                            var13[0] = var14;
                            var14 = _closure2_slot4;
                            var14 = var14.input;
                            var13[1] = var14;
                            var7.style = var13;
                            var14 = _closure2_slot3;
                            var12 = _closure1_slot9;
                            var13 = var12.NUMERIC;
                            var12 = 'default';
                            if (!(var14 === var13)) {
                                _fun61729_ip = 269;
                                continue _fun61729
                            }
                        case 263:
                            var12 = 'phone-pad';
                        case 269:
                            var7.keyboardType = var12;
                            var12 = 0;
                            var12 = var12 === var6;
                            var7.autoFocus = var12;
                            var12 = _closure2_slot5;
                            var12 = var12[var6];
                            var7.value = var12;
                            var12 = function arg0() {
                                var3 = _closure3_slot0;
                                var2 = function arg0, arg1() {
                                    _fun61732: for (var _fun61732_ip = 0;;) switch (_fun61732_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = arg1;
                                            var0 = var0.nativeEvent;
                                            var1 = var0.key;
                                            var0 = 'Backspace';
                                            if (!(var0 === var1)) {
                                                _fun61732_ip = 120;
                                                continue _fun61732
                                            }
                                        case 27:
                                            var0 = _closure2_slot5;
                                            var0 = var0[var2];
                                            var6 = '';
                                            if (!(var6 === var0)) {
                                                _fun61732_ip = 159;
                                                continue _fun61732
                                            }
                                        case 46:
                                            var5 = _closure2_slot6;
                                            var10 = _closure2_slot5;
                                            var0 = 1;
                                            var3 = var2 - var0;
                                            var4 = new Array(0);
                                            var9 = 0;
                                            var11 = var4;
                                            var7 = arraySpread(var11, var10, var9);
                                            var4[var3] = var6;
                                            var3 = undefined;
                                            var3 = var5.bind(var3)(var4);
                                            var1 = _closure2_slot7;
                                            var1 = var1.current;
                                            var0 = var2 - var0;
                                            var1 = var1[var0];
                                            var0 = null;
                                            if (!(var0 != var1)) {
                                                _fun61732_ip = 159;
                                                continue _fun61732
                                            }
                                        case 108:
                                            var0 = var1.focus;
                                            var0 = var0.bind(var1)();
                                            _fun61732_ip = 159;
                                            continue _fun61732;
                                        case 120:
                                            var0 = _closure2_slot7;
                                            var1 = var0.current;
                                            var0 = 1;
                                            var0 = var2 + var0;
                                            var1 = var1[var0];
                                            var0 = null;
                                            if (!(var0 != var1)) {
                                                _fun61732_ip = 159;
                                                continue _fun61732
                                            }
                                        case 149:
                                            var0 = var1.focus;
                                            var0 = var0.bind(var1)();
                                        case 159:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var3, var1);
                                return var0;
                            };
                            var7.onKeyPress = var12;
                            var10 = function arg0() {
                                _fun61733: for (var _fun61733_ip = 0;;) switch (_fun61733_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var5 = _closure3_slot0;
                                        var4 = 0;
                                        var2 = var3[var4];
                                        var1 = _closure2_slot5;
                                        var1 = var1[var5];
                                        var6 = var3;
                                        if (!(var2 === var1)) {
                                            _fun61733_ip = 47;
                                            continue _fun61733
                                        }
                                    case 34:
                                        var2 = var3.slice;
                                        var1 = 1;
                                        var6 = var2.bind(var3)(var1);
                                    case 47:
                                        var3 = var6.replace;
                                        var1 = '-';
                                        var2 = '';
                                        var3 = var3.bind(var6)(var1, var2);
                                        var1 = var3.trim;
                                        var3 = var1.bind(var3)();
                                        var1 = var3.toUpperCase;
                                        var1 = var1.bind(var3)();
                                        var3 = var1.split;
                                        var6 = var3.bind(var1)(var2);
                                        if (!(var2 === var1)) {
                                            _fun61733_ip = 110;
                                            continue _fun61733
                                        }
                                    case 100:
                                        var6 = [''];
                                    case 110:
                                        var8 = _closure2_slot5;
                                        var3 = new Array(0);
                                        var9 = var3;
                                        var7 = 0;
                                        var1 = arraySpread(var9, var8, var7);
                                        var2 = var3.splice;
                                        var1 = new Array(2);
                                        var1[0] = var5;
                                        var5 = 1;
                                        var1[1] = var5;
                                        var7 = 2;
                                        var9 = var1;
                                        var8 = var6;
                                        var5 = arraySpread(var9, var8, var7);
                                        var9 = var2;
                                        var8 = var1;
                                        var7 = var3;
                                        var1 = apply(var9, var8, var7);
                                        var2 = _closure2_slot6;
                                        var1 = var3.slice;
                                        var0 = _closure2_slot2;
                                        var1 = var1.bind(var3)(var4, var0);
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var7.onChangeText = var10;
                            var10 = {};
                            var12 = _closure2_slot5;
                            var12 = var12[var6];
                            var12 = var12.length;
                            var10.start = var12;
                            var11 = _closure2_slot5;
                            var11 = var11[var6];
                            var11 = var11.length;
                            var10.end = var11;
                            var7.selection = var10;
                            var10 = 'characters';
                            var7.autoCapitalize = var10;
                            var10 = false;
                            var7.autoCorrect = var10;
                            var7 = var9.bind(var0)(var8, var7);
                            var1.children = var7;
                            var1 = var5.bind(var0)(var4, var1, var6);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var2 < var6;
                if (!var7) {
                    _fun61724_ip = 325;
                    continue _fun61724
                }
            case 313:
                var7 = var1.bind(var3)(var2);
                var2 = var2 + 1;
                if (var2 < var6) {
                    _fun61724_ip = 313;
                    continue _fun61724
                }
            case 325:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.codeContainer;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.CodeBlocks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 4682, 4878, 5453, 1234, 4084, 3942, 5823, 2]);