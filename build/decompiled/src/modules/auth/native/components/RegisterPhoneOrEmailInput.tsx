// modules/auth/native/components/RegisterPhoneOrEmailInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.setRegistrationErrors;
    var _closure1_slot5 = var6;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterPhoneOrEmailInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100369: for (var _fun100369_ip = 0;;) switch (_fun100369_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.loginPhone;
                var _closure2_slot0 = var13;
                var19 = var0.loginEmail;
                var _closure2_slot1 = var19;
                var20 = var0.setLoginPhone;
                var _closure2_slot2 = var20;
                var9 = var0.setLoginEmail;
                var _closure2_slot3 = var9;
                var8 = var0.inputMode;
                var _closure2_slot4 = var8;
                var14 = var0.onSubmit;
                var5 = var0.inputError;
                var10 = var0.submitBehavior;
                var12 = var0.autoFocus;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 4;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigation;
                var7 = var0.bind(var1)();
                var _closure2_slot5 = var7;
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var4 = null;
                var18 = var0.bind(var1)(var4);
                var _closure2_slot6 = var18;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.inputRef = var18;
                var11 = var4 != var12;
                if (!var11) {
                    _fun100369_ip = 183;
                    continue _fun100369
                }
            case 180:
                var11 = var12;
            case 183:
                var0.enabled = var11;
                var0 = var1.bind(var3)(var0);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 6;
                var11 = var0[var11];
                var16 = var1.bind(var3)(var11);
                var15 = var16.useStateFromStores;
                var11 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() { // Environment: var2
                    var1 = _closure1_slot4;
                    var0 = var1.getCountryCode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var15.bind(var16)(var12, var11);
                var16 = var17.code;
                var12 = _closure1_slot6;
                var11 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var11 = var12.bind(var3)(var11);
                _closure2_slot7 = var11;
                var12 = _closure1_slot3;
                var21 = var12.useCallback;
                var15 = new Array(1);
                var15[0] = var11;
                var11 = function(arg0) { // Environment: var2
                    _fun100372: for (var _fun100372_ip = 0;;) switch (_fun100372_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot7;
                            var3 = var2[var0];
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun100372_ip = 51;
                                continue _fun100372
                            }
                        case 20:
                            var2 = {};
                            var4 = _closure2_slot7;
                            var5 = var2;
                            var1 = copyDataProperties(var5, var4);
                            var0 = delete var2[var0];
                            var1 = _closure1_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var21.bind(var12)(var11, var15);
                _closure2_slot8 = var21;
                var15 = var12.useCallback;
                var11 = new Array(4);
                var11[0] = var8;
                var11[1] = var21;
                var11[2] = var20;
                var11[3] = var9;
                var9 = function(arg0, arg1) { // Environment: var2
                    _fun100373: for (var _fun100373_ip = 0;;) switch (_fun100373_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure2_slot4;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.PhoneOrEmailSelectorForceMode;
                            var2 = var2.PHONE;
                            if (!(var4 !== var2)) {
                                _fun100373_ip = 75;
                                continue _fun100373
                            }
                        case 51:
                            var4 = _closure2_slot8;
                            var2 = 'email';
                            var2 = var4.bind(var0)(var2);
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)(var3);
                            _fun100373_ip = 101;
                            continue _fun100373;
                        case 75:
                            var4 = _closure2_slot8;
                            var2 = 'phone';
                            var2 = var4.bind(var0)(var2);
                            var2 = _closure2_slot2;
                            var1 = arg1;
                            var1 = var2.bind(var0)(var3, var1);
                        case 101:
                            return var0;
                    }
                };
                var15 = var15.bind(var12)(var9, var11);
                var11 = var12.useCallback;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var2
                    var3 = _closure2_slot5;
                    var2 = var3.push;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.AuthStates;
                    var1 = var1.COUNTRY_SELECT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11 = var11.bind(var12)(var7, var9);
                var7 = var12.useRef;
                var7 = var7.bind(var12)(var8);
                _closure2_slot9 = var7;
                var9 = var12.useLayoutEffect;
                var7 = new Array(3);
                var7[0] = var8;
                var7[1] = var19;
                var7[2] = var13;
                var2 = function() { // Environment: var2
                    _fun100375: for (var _fun100375_ip = 0;;) switch (_fun100375_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = _closure2_slot4;
                            if (!(var2 !== var1)) {
                                _fun100375_ip = 137;
                                continue _fun100375
                            }
                        case 20:
                            var1 = _closure2_slot9;
                            var2 = _closure2_slot4;
                            var1.current = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.PhoneOrEmailSelectorForceMode;
                            var1 = var1.PHONE;
                            if (!(var2 !== var1)) {
                                _fun100375_ip = 107;
                                continue _fun100375
                            }
                        case 75:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun100375_ip = 137;
                                continue _fun100375
                            }
                        case 90:
                            var2 = var3.setText;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            _fun100375_ip = 137;
                            continue _fun100375;
                        case 107:
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun100375_ip = 137;
                                continue _fun100375
                            }
                        case 122:
                            var1 = var2.setText;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var12)(var2, var7);
                var9 = 7;
                var0 = var0[var9];
                var0 = var1.bind(var3)(var0);
                var0 = var0.PhoneOrEmailSelectorForceMode;
                var0 = var0.PHONE;
                if (!(var8 !== var0)) {
                    _fun100369_ip = 499;
                    continue _fun100369
                }
            case 442:
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var1 = var12[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var12[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.dI4d4S;
                var12 = var1.bind(var2)(var0);
                _fun100369_ip = 554;
                continue _fun100369;
            case 499:
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 9;
                var1 = var13[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var13[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["eJnn0+"];
                var12 = var1.bind(var2)(var0);
            case 554:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var1.bind(var3)(var0);
                var0 = var0.PhoneOrEmailSelectorForceMode;
                var0 = var0.PHONE;
                if (!(var8 !== var0)) {
                    _fun100369_ip = 646;
                    continue _fun100369
                }
            case 587:
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 9;
                var1 = var13[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var13[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.a17rBk;
                var13 = var1.bind(var2)(var0);
                _fun100369_ip = 703;
                continue _fun100369;
            case 646:
                var7 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = 9;
                var1 = var19[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var19[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.wpJ1dT;
                var13 = var1.bind(var2)(var0);
            case 703:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var18;
                var17 = var17.alpha2;
                var0.alpha2 = var17;
                var0.countryCode = var16;
                var0.onChange = var15;
                var0.onSubmitEditing = var14;
                var0.placeholder = var12;
                var14 = 'next';
                var0.returnKeyType = var14;
                var14 = 'none';
                var0.autoCapitalize = var14;
                var0.accessibilityHint = var13;
                var0.label = var12;
                var0.errorMessage = var5;
                var0.onPressCountrySelector = var11;
                var0.forceMode = var8;
                var0.submitBehavior = var10;
                var10 = _closure1_slot0;
                var7 = var7[var9];
                var7 = var10.bind(var3)(var7);
                var7 = var7.PhoneOrEmailSelectorForceMode;
                var10 = var7.PHONE;
                var7 = 'email';
                if (!(var8 === var10)) {
                    _fun100369_ip = 848;
                    continue _fun100369
                }
            case 844:
                var7 = 'tel';
            case 848:
                var0.autoComplete = var7;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var6 = var6.PhoneOrEmailSelectorForceMode;
                var7 = var6.PHONE;
                var6 = 'email-address';
                if (!(var8 === var7)) {
                    _fun100369_ip = 898;
                    continue _fun100369
                }
            case 892:
                var6 = 'number-pad';
            case 898:
                var0.keyboardType = var6;
                var6 = true;
                var0.isClearable = var6;
                var5 = var4 != var5;
                var4 = undefined;
                if (!var5) {
                    _fun100369_ip = 923;
                    continue _fun100369
                }
            case 919:
                var4 = 'error';
            case 923:
                var0.status = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RegisterPhoneOrEmailInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7478, 13050, 33, 1469, 13068, 566, 7488, 670, 1234, 7534, 2]);