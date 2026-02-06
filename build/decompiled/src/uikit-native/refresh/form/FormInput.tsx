// uikit-native/refresh/form/FormInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.KeyboardThemes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'paddingVertical': 13,
        'paddingHorizontal': 15
    };
    var3.inputViewContainer = var9;
    var9 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_PLACEHOLDER_TEXT_DEFAULT;
    var9.color = var12;
    var3.placeholderText = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var9.color = var10;
    var3.inputText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun48085: for (var _fun48085_ip = 0;;) switch (_fun48085_ip) {
            case 0:
                var9 = arg0;
                var19 = var9.onChange;
                var18 = var9.keyboardAppearance;
                var4 = var9.keyboardType;
                var26 = var9.style;
                var23 = var9.inputTextStyle;
                var8 = var9.value;
                var29 = var9.title;
                var5 = undefined;
                if (!(var29 === var5)) {
                    _fun48085_ip = 54;
                    continue _fun48085
                }
            case 50:
                var29 = '';
            case 54:
                var22 = var9.helpText;
                if (!(var22 === var5)) {
                    _fun48085_ip = 68;
                    continue _fun48085
                }
            case 64:
                var22 = '';
            case 68:
                var6 = var9.error;
                var15 = var9.placeholder;
                if (!(var15 === var5)) {
                    _fun48085_ip = 87;
                    continue _fun48085
                }
            case 83:
                var15 = '';
            case 87:
                var20 = var9.secureTextEntry;
                if (!(var20 === var5)) {
                    _fun48085_ip = 99;
                    continue _fun48085
                }
            case 97:
                var20 = false;
            case 99:
                var13 = var9.disabled;
                if (!(var13 === var5)) {
                    _fun48085_ip = 110;
                    continue _fun48085
                }
            case 108:
                var13 = false;
            case 110:
                var21 = var9.multiline;
                if (!(var21 === var5)) {
                    _fun48085_ip = 122;
                    continue _fun48085
                }
            case 120:
                var21 = false;
            case 122:
                var12 = var9.autoFocus;
                if (!(var12 === var5)) {
                    _fun48085_ip = 134;
                    continue _fun48085
                }
            case 132:
                var12 = false;
            case 134:
                var28 = var9.numberOfLines;
                if (!(var28 === var5)) {
                    _fun48085_ip = 147;
                    continue _fun48085
                }
            case 144:
                var28 = 1;
            case 147:
                var3 = var9.clearButtonVisibility;
                var11 = var9.autoCapitalize;
                var10 = var9.autoCorrect;
                var27 = var9.showBorder;
                if (!(var27 === var5)) {
                    _fun48085_ip = 208;
                    continue _fun48085
                }
            case 175:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var1 = var1.bind(var5)(var0);
                var0 = var1.isAndroid;
                var27 = var0.bind(var1)();
            case 208:
                var25 = var9.showCharactersRemaining;
                if (!(var25 === var5)) {
                    _fun48085_ip = 220;
                    continue _fun48085
                }
            case 218:
                var25 = false;
            case 220:
                var17 = var9.enableAndroidSanitizedInputWorkaround;
                if (!(var17 === var5)) {
                    _fun48085_ip = 232;
                    continue _fun48085
                }
            case 230:
                var17 = false;
            case 232:
                var14 = var9.allowRedesignTextInput;
                if (!(var14 === var5)) {
                    _fun48085_ip = 244;
                    continue _fun48085
                }
            case 242:
                var14 = true;
            case 244:
                var1 = {
                    'onChange': 0,
                    'keyboardAppearance': 0,
                    'keyboardType': 0,
                    'style': 0,
                    'inputTextStyle': 0,
                    'value': 0,
                    'title': 0,
                    'helpText': 0,
                    'error': 0,
                    'placeholder': 0,
                    'secureTextEntry': 0,
                    'disabled': 0,
                    'multiline': 0,
                    'autoFocus': 0,
                    'numberOfLines': 0,
                    'clearButtonVisibility': 0,
                    'autoCapitalize': 0,
                    'autoCorrect': 0,
                    'showBorder': 0,
                    'showCharactersRemaining': 0,
                    'enableAndroidSanitizedInputWorkaround': 0,
                    'allowRedesignTextInput': 0
                };
                var7 = null;
                var35 = var1;
                var34 = null;
                var0 = silentSetPrototypeOf(var35, var34);
                var35 = {};
                var34 = var9;
                var33 = var1;
                var9 = copyDataProperties(var35, var34, var33);
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var0 = _closure1_slot6;
                var16 = var0.bind(var5)();
                var24 = _closure1_slot0;
                var30 = _closure1_slot2;
                var0 = 6;
                var0 = var30[var0];
                var24 = var24.bind(var5)(var0);
                var0 = var24.useThemeContext;
                var0 = var0.bind(var24)();
                var30 = var0.theme;
                if (!(var7 == var18)) {
                    _fun48085_ip = 399;
                    continue _fun48085
                }
            case 344:
                var24 = _closure1_slot0;
                var31 = _closure1_slot2;
                var0 = 7;
                var0 = var31[var0];
                var24 = var24.bind(var5)(var0);
                var0 = var24.isThemeDark;
                var0 = var0.bind(var24)(var30);
                var24 = _closure1_slot4;
                if (var0) {
                    _fun48085_ip = 390;
                    continue _fun48085
                }
            case 382:
                var0 = var24.LIGHT;
                _fun48085_ip = 396;
                continue _fun48085;
            case 390:
                var0 = var24.DARK;
            case 396:
                var18 = var0;
            case 399:
                var30 = _closure1_slot3;
                var24 = var30.useContext;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var0 = 8;
                var0 = var32[var0];
                var0 = var31.bind(var5)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var24.bind(var30)(var0);
                if (!var0) {
                    _fun48085_ip = 446;
                    continue _fun48085
                }
            case 443:
                var0 = var14;
            case 446:
                _closure2_slot0 = var0;
                var24 = !var17;
                if (var24) {
                    _fun48085_ip = 489;
                    continue _fun48085
                }
            case 456:
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var14 = 5;
                var14 = var31[var14];
                var30 = var30.bind(var5)(var14);
                var14 = var30.isAndroid;
                var14 = var14.bind(var30)();
                var24 = !var14;
            case 489:
                var14 = !var24;
                if (!var24) {
                    _fun48085_ip = 498;
                    continue _fun48085
                }
            case 495:
                var14 = var20;
            case 498:
                if (!var17) {
                    _fun48085_ip = 540;
                    continue _fun48085
                }
            case 501:
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = 5;
                var17 = var24[var17];
                var20 = var20.bind(var5)(var17);
                var17 = var20.isAndroid;
                var20 = var17.bind(var20)();
                var17 = 'visible-password';
                if (var20) {
                    _fun48085_ip = 543;
                    continue _fun48085
                }
            case 540:
                var17 = var4;
            case 543:
                var31 = _closure1_slot3;
                var4 = var31.useRef;
                var20 = var4.bind(var31)(var7);
                _closure2_slot1 = var20;
                var4 = var31.useRef;
                var30 = var4.bind(var31)(var7);
                _closure2_slot2 = var30;
                var24 = var31.useImperativeHandle;
                var4 = arg1;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var2 = function() {
                        _fun48087: for (var _fun48087_ip = 0;;) switch (_fun48087_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48087_ip = 16;
                                    continue _fun48087
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48087_ip = 20;
                                continue _fun48087;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var2 = var0.current;
                                var0 = null;
                                var0 = var0 == var2;
                                var1 = undefined;
                                if (var0) {
                                    _fun48087_ip = 46;
                                    continue _fun48087
                                }
                            case 36:
                                var0 = var2.isFocused;
                                var1 = var0.bind(var2)();
                            case 46:
                                var0 = true;
                                var0 = var0 === var1;
                                return var0;
                        }
                    };
                    var0.isFocused = var2;
                    var2 = function() {
                        _fun48088: for (var _fun48088_ip = 0;;) switch (_fun48088_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48088_ip = 16;
                                    continue _fun48088
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48088_ip = 20;
                                continue _fun48088;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48088_ip = 41;
                                    continue _fun48088
                                }
                            case 31:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.focus = var2;
                    var2 = function() {
                        _fun48089: for (var _fun48089_ip = 0;;) switch (_fun48089_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48089_ip = 16;
                                    continue _fun48089
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48089_ip = 20;
                                continue _fun48089;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48089_ip = 41;
                                    continue _fun48089
                                }
                            case 31:
                                var0 = var1.blur;
                                var0 = var0.bind(var1)();
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.blur = var2;
                    var2 = function arg0() {
                        _fun48090: for (var _fun48090_ip = 0;;) switch (_fun48090_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48090_ip = 16;
                                    continue _fun48090
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48090_ip = 20;
                                continue _fun48090;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48090_ip = 45;
                                    continue _fun48090
                                }
                            case 31:
                                var1 = var2.setText;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setText = var2;
                    var2 = function() {
                        _fun48091: for (var _fun48091_ip = 0;;) switch (_fun48091_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48091_ip = 16;
                                    continue _fun48091
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48091_ip = 20;
                                continue _fun48091;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var3 = var0.current;
                                var0 = null;
                                var2 = var0 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun48091_ip = 46;
                                    continue _fun48091
                                }
                            case 36:
                                var2 = var3.getText;
                                var1 = var2.bind(var3)();
                            case 46:
                                var2 = var0 != var1;
                                var0 = '';
                                if (!var2) {
                                    _fun48091_ip = 60;
                                    continue _fun48091
                                }
                            case 57:
                                var0 = var1;
                            case 60:
                                return var0;
                        }
                    };
                    var0.getText = var2;
                    var2 = function arg0() {
                        _fun48092: for (var _fun48092_ip = 0;;) switch (_fun48092_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48092_ip = 16;
                                    continue _fun48092
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48092_ip = 20;
                                continue _fun48092;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48092_ip = 45;
                                    continue _fun48092
                                }
                            case 31:
                                var1 = var2.measure;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measure = var2;
                    var2 = function arg0() {
                        _fun48093: for (var _fun48093_ip = 0;;) switch (_fun48093_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48093_ip = 16;
                                    continue _fun48093
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48093_ip = 20;
                                continue _fun48093;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48093_ip = 45;
                                    continue _fun48093
                                }
                            case 31:
                                var1 = var2.measureInWindow;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureInWindow = var2;
                    var1 = function arg0, arg1, arg2() {
                        _fun48094: for (var _fun48094_ip = 0;;) switch (_fun48094_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                if (var0) {
                                    _fun48094_ip = 16;
                                    continue _fun48094
                                }
                            case 10:
                                var0 = _closure2_slot2;
                                _fun48094_ip = 20;
                                continue _fun48094;
                            case 16:
                                var0 = _closure2_slot1;
                            case 20:
                                var4 = var0.current;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun48094_ip = 53;
                                    continue _fun48094
                                }
                            case 31:
                                var3 = var4.measureLayout;
                                var2 = arg0;
                                var1 = arg1;
                                var0 = arg2;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 53:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureLayout = var1;
                    return var0;
                };
                var2 = var24.bind(var31)(var4, var2);
                var4 = _closure1_slot5;
                if (var0) {
                    _fun48085_ip = 890;
                    continue _fun48085
                }
            case 605:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var24 = 11;
                var0 = var0[var24];
                var2 = var2.bind(var5)(var0);
                var0 = {};
                var0.ref = var30;
                var30 = var16.inputText;
                var30 = var30.color;
                var0.inputTextColor = var30;
                var0.multiline = var21;
                var30 = var9.returnKeyType;
                if (!(var7 == var30)) {
                    _fun48085_ip = 675;
                    continue _fun48085
                }
            case 662:
                var30 = 'done';
                if (!var21) {
                    _fun48085_ip = 673;
                    continue _fun48085
                }
            case 669:
                var30 = 'default';
            case 673:
                _fun48085_ip = 681;
                continue _fun48085;
            case 675:
                var30 = var9.returnKeyType;
            case 681:
                var0.returnKeyType = var30;
                var0.onChangeText = var19;
                var0.keyboardAppearance = var18;
                var0.keyboardType = var17;
                var30 = var16.placeholderText;
                var30 = var30.color;
                var0.placeholderTextColor = var30;
                var0.title = var29;
                var0.helpText = var22;
                var30 = var7 != var6;
                var22 = '';
                var29 = var22;
                if (!var30) {
                    _fun48085_ip = 743;
                    continue _fun48085
                }
            case 740:
                var29 = var6;
            case 743:
                var0.error = var29;
                var0.placeholder = var15;
                var0.secureTextEntry = var14;
                var0.disabled = var13;
                var0.autoFocus = var12;
                var0.numberOfLines = var28;
                var0.autoCapitalize = var11;
                var0.autoCorrect = var10;
                var0.showBorder = var27;
                var0.showCharactersRemaining = var25;
                var27 = var16.inputViewContainer;
                var25 = new Array(2);
                var25[0] = var27;
                var25[1] = var26;
                var0.style = var25;
                var0.inputTextStyle = var23;
                var23 = var7 != var8;
                if (!var23) {
                    _fun48085_ip = 828;
                    continue _fun48085
                }
            case 825:
                var22 = var8;
            case 828:
                var0.value = var22;
                if (!var21) {
                    _fun48085_ip = 864;
                    continue _fun48085
                }
            case 835:
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var24];
                var22 = var23.bind(var5)(var22);
                var22 = var22.ClearButtonVisibility;
                var3 = var22.NEVER;
            case 864:
                var0.clearButtonVisibility = var3;
                var35 = var0;
                var34 = var9;
                var3 = copyDataProperties(var35, var34);
                var0 = var4.bind(var5)(var2, var0);
                _fun48085_ip = 1201;
                continue _fun48085;
            case 890:
                var3 = _closure1_slot0;
                var22 = _closure1_slot2;
                if (var21) {
                    _fun48085_ip = 1048;
                    continue _fun48085
                }
            case 904:
                var1 = 10;
                var1 = var22[var1];
                var1 = var3.bind(var5)(var1);
                var2 = var1.TextInput;
                var1 = {};
                var1.ref = var20;
                var23 = 'done';
                if (!var21) {
                    _fun48085_ip = 939;
                    continue _fun48085
                }
            case 935:
                var23 = 'default';
            case 939:
                var1.returnKeyType = var23;
                var1.onChange = var19;
                var1.keyboardAppearance = var18;
                var1.keyboardType = var17;
                var23 = var16.placeholderText;
                var23 = var23.color;
                var1.placeholderTextColor = var23;
                var1.placeholder = var15;
                var1.secureTextEntry = var14;
                var1.isDisabled = var13;
                var1.autoFocus = var12;
                var1.autoCapitalize = var11;
                var1.autoCorrect = var10;
                var23 = var9.onEndEditing;
                var1.onEndEditing = var23;
                var24 = var7 != var8;
                var23 = undefined;
                if (!var24) {
                    _fun48085_ip = 1028;
                    continue _fun48085
                }
            case 1025:
                var23 = var8;
            case 1028:
                var1.value = var23;
                var1.errorMessage = var6;
                var1 = var4.bind(var5)(var2, var1);
                _fun48085_ip = 1198;
                continue _fun48085;
            case 1048:
                var2 = 9;
                var2 = var22[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.TextArea;
                var2 = {};
                var2.ref = var20;
                var20 = 'done';
                if (!var21) {
                    _fun48085_ip = 1083;
                    continue _fun48085
                }
            case 1079:
                var20 = 'default';
            case 1083:
                var2.returnKeyType = var20;
                var2.onChange = var19;
                var2.keyboardAppearance = var18;
                var2.keyboardType = var17;
                var16 = var16.placeholderText;
                var16 = var16.color;
                var2.placeholderTextColor = var16;
                var2.placeholder = var15;
                var2.secureTextEntry = var14;
                var2.isDisabled = var13;
                var2.autoFocus = var12;
                var2.autoCapitalize = var11;
                var2.autoCorrect = var10;
                var10 = var9.maxLength;
                var2.maxLength = var10;
                var9 = var9.onEndEditing;
                var2.onEndEditing = var9;
                var9 = var7 != var8;
                var7 = undefined;
                if (!var9) {
                    _fun48085_ip = 1183;
                    continue _fun48085
                }
            case 1180:
                var7 = var8;
            case 1183:
                var2.value = var7;
                var2.errorMessage = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1198:
                var0 = var1;
            case 1201:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 478, 3161, 3208, 4900, 5393, 5406, 5412, 2]);