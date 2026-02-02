// modules/phone/native/FormPhoneOrEmail.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun60921: for (var _fun60921_ip = 0;;) switch (_fun60921_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.show;
                var2 = var0.alpha2;
                var7 = var0.countryCode;
                var13 = var0.onPress;
                var0 = _closure1_slot7;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var0 = null;
                var3 = var0 != var2;
                var6 = '';
                var5 = var6;
                if (!var3) {
                    _fun60921_ip = 58;
                    continue _fun60921
                }
            case 55:
                var5 = var2;
            case 58:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ' ';
                var16 = var3.bind(var6)(var5, var2, var7);
                var0 = null;
                if (!var1) {
                    _fun60921_ip = 381;
                    continue _fun60921
                }
            case 92:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var12.selectorOuterContainer;
                var1.style = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var12.selectorContainer;
                var5.style = var8;
                var11 = _closure1_slot5;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 5;
                var8 = var17[var8];
                var8 = var14.bind(var4)(var8);
                var10 = var8.PressableOpacity;
                var8 = {};
                var8.onPress = var13;
                var13 = var12.selectorPressable;
                var8.style = var13;
                var13 = {};
                var15 = true;
                var13.borderless = var15;
                var8.androidRippleConfig = var13;
                var13 = 'button';
                var8.accessibilityRole = var13;
                var8.accessibilityLabel = var16;
                var13 = 6;
                var15 = var17[var13];
                var15 = var14.bind(var4)(var15);
                var18 = var15.intl;
                var15 = var18.string;
                var13 = var17[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.GwAW3k;
                var13 = var15.bind(var18)(var13);
                var8.accessibilityHint = var13;
                var15 = _closure1_slot5;
                var13 = 7;
                var13 = var17[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var12.selectorText;
                var13.style = var17;
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var8.children = var13;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot5;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var12.separator;
                var9.style = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 381:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {};
    var10 = 8;
    var3.marginBottom = var10;
    var6.label = var3;
    var3 = {
        'flexGrow': 1,
        'marginBottom': 8
    };
    var6.input = var3;
    var3 = {};
    var3.marginBottom = var10;
    var6.error = var3;
    var3 = {};
    var3.marginBottom = var10;
    var6.hint = var3;
    var3 = {};
    var10 = 'hidden';
    var3.overflow = var10;
    var6.selectorOuterContainer = var3;
    var3 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var6.selectorContainer = var3;
    var3 = {};
    var10 = 'center';
    var3.justifyContent = var10;
    var6.selectorPressable = var3;
    var3 = {};
    var3.alignSelf = var10;
    var6.selectorText = var3;
    var10 = {
        'borderLeftWidth': 1,
        'borderLeftColor': null,
        'marginHorizontal': 12,
        'marginVertical': 4294967292
    };
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.INTERACTIVE_BACKGROUND_SELECTED;
    var10.borderLeftColor = var3;
    var3 = 12;
    var6.separator = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot7 = var6;
    var6 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60922: for (var _fun60922_ip = 0;;) switch (_fun60922_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.style;
                var15 = var3.textInputStyle;
                var14 = var3.label;
                var13 = var3.error;
                var20 = var3.value;
                var9 = var3.hint;
                var0 = var3.onChangeText;
                var _closure2_slot0 = var0;
                var0 = var3.alpha2;
                var _closure2_slot1 = var0;
                var0 = var3.countryCode;
                var _closure2_slot2 = var0;
                var1 = var3.onPressCountrySelector;
                var _closure2_slot3 = var1;
                var16 = var3.forceMode;
                var _closure2_slot4 = var16;
                var2 = {
                    'style': 0,
                    'textInputStyle': 0,
                    'label': 0,
                    'error': 0,
                    'value': 0,
                    'hint': 0,
                    'onChangeText': 0,
                    'alpha2': 0,
                    'countryCode': 0,
                    'onPressCountrySelector': 0,
                    'forceMode': 0
                };
                var5 = null;
                var24 = var2;
                var23 = null;
                var1 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var3;
                var22 = var2;
                var21 = copyDataProperties(var24, var23, var22);
                var18 = function arg0() {
                    _fun60923: for (var _fun60923_ip = 0;;) switch (_fun60923_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.shouldShowCountryCodeSelector;
                            var2 = _closure2_slot4;
                            var4 = var4.bind(var5)(var2, var3);
                            var2 = '';
                            if (!var4) {
                                _fun60923_ip = 58;
                                continue _fun60923
                            }
                        case 54:
                            var2 = _closure2_slot2;
                        case 58:
                            var5 = _closure2_slot0;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun60923_ip = 78;
                                continue _fun60923
                            }
                        case 68:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var3, var2);
                        case 78:
                            return var0;
                    }
                };
                var1 = _closure1_slot7;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var17 = 8;
                var1 = var1[var17];
                var2 = var2.bind(var3)(var1);
                var1 = var2.shouldShowCountryCodeSelector;
                var1 = var1.bind(var2)(var16, var20);
                var _closure2_slot5 = var1;
                var2 = {};
                var2.handleChangeText = var18;
                var2.value = var20;
                var _closure2_slot6 = var2;
                var7 = _closure1_slot3;
                var1 = var7.useRef;
                var1 = var1.bind(var7)(var2);
                var _closure2_slot7 = var1;
                var2 = var7.useEffect;
                var1 = function() { // Environment: var19
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot6;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var7)(var1);
                var2 = var7.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var19
                    var0 = _closure2_slot7;
                    var0 = var0.current;
                    var2 = var0.value;
                    var1 = var0.handleChangeText;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var4 = var5 != var14;
                var7 = null;
                if (!var4) {
                    _fun60922_ip = 318;
                    continue _fun60922
                }
            case 273:
                var11 = _closure1_slot5;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 9;
                var4 = var12[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var12 = var10.label;
                var4.style = var12;
                var4.children = var14;
                var7 = var11.bind(var3)(var8, var4);
            case 318:
                var4 = new Array(4);
                var4[0] = var7;
                var11 = _closure1_slot5;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 10;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var24 = var7;
                var23 = var21;
                var21 = copyDataProperties(var24, var23);
                var21 = function() {
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var4 = _closure2_slot5;
                    var1.show = var4;
                    var4 = _closure2_slot1;
                    var1.alpha2 = var4;
                    var4 = _closure2_slot2;
                    var1.countryCode = var4;
                    var0 = _closure2_slot3;
                    var1.onPress = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var19 = 'renderLeadingComponent';
                var7[var19] = var21;
                var21 = var5 != var13;
                var19 = 'error';
                var7[var19] = var21;
                var21 = arg1;
                var19 = 'ref';
                var7[var19] = var21;
                var19 = 'value';
                var7[var19] = var20;
                var20 = var10.input;
                var19 = new Array(2);
                var19[0] = var20;
                var19[1] = var15;
                var15 = 'style';
                var7[var15] = var19;
                var15 = 'onChangeText';
                var7[var15] = var18;
                var15 = _closure1_slot0;
                var12 = var12[var17];
                var12 = var15.bind(var3)(var12);
                var12 = var12.PhoneOrEmailSelectorForceMode;
                var12 = var12.PHONE;
                var15 = 'emailAddress';
                if (!(var16 === var12)) {
                    _fun60922_ip = 487;
                    continue _fun60922
                }
            case 481:
                var15 = 'telephoneNumber';
            case 487:
                var12 = 'textContentType';
                var7[var12] = var15;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var17];
                var12 = var15.bind(var3)(var12);
                var12 = var12.PhoneOrEmailSelectorForceMode;
                var12 = var12.PHONE;
                var15 = 'email-address';
                if (!(var16 === var12)) {
                    _fun60922_ip = 541;
                    continue _fun60922
                }
            case 535:
                var15 = 'phone-pad';
            case 541:
                var12 = 'keyboardType';
                var7[var12] = var15;
                var12 = 'accessibilityLabel';
                var7[var12] = var14;
                var12 = 'accessibilityHint';
                var7[var12] = var9;
                var7 = var11.bind(var3)(var8, var7);
                var4[1] = var7;
                var8 = var5 != var13;
                var7 = null;
                if (!var8) {
                    _fun60922_ip = 632;
                    continue _fun60922
                }
            case 587:
                var12 = _closure1_slot5;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 11;
                var8 = var14[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var14 = var10.error;
                var8.style = var14;
                var8.children = var13;
                var7 = var12.bind(var3)(var11, var8);
            case 632:
                var4[2] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun60922_ip = 710;
                    continue _fun60922
                }
            case 645:
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 7;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var10 = var10.hint;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 710:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/phone/native/FormPhoneOrEmail.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4867, 1234, 3902, 7452, 5847, 5848, 5850, 2]);