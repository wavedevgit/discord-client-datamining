// modules/auth/native/components/utils/useIdentityRegistrationStep.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.setRegistrationErrors;
    var _closure1_slot6 = var6;
    var6 = var3.updateRegistrationOptions;
    var _closure1_slot7 = var6;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.authStateToRegisterTransitionStep;
    var _closure1_slot9 = var6;
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot10 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AbortCodes;
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/useIdentityRegistrationStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useIdentityRegistrationStep, environment: var1
        _fun100664: for (var _fun100664_ip = 0;;) switch (_fun100664_ip) {
            case 0:
                var18 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var18;
                var _closure2_slot1 = var1;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var13 = undefined;
                var4 = var10.bind(var13)(var2);
                var2 = var4.useNavigation;
                var16 = var2.bind(var4)();
                var _closure2_slot2 = var16;
                var15 = _closure1_slot5;
                var4 = var15.useContext;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var13)(var2);
                var2 = var2.TrackRegistrationContext;
                var17 = var4.bind(var15)(var2);
                var _closure2_slot3 = var17;
                var2 = var15.useState;
                var12 = '';
                var2 = var2.bind(var15)(var12);
                var7 = _closure1_slot4;
                var6 = 2;
                var2 = var7.bind(var13)(var2, var6);
                var5 = 0;
                var9 = var2[var5];
                var _closure2_slot4 = var9;
                var4 = 1;
                var8 = var2[var4];
                var2 = var15.useRef;
                var2 = var2.bind(var15)(var12);
                var _closure2_slot5 = var2;
                var2 = var15.useState;
                var2 = var2.bind(var15)(var12);
                var2 = var7.bind(var13)(var2, var6);
                var7 = var2[var5];
                var _closure2_slot6 = var7;
                var2 = var2[var4];
                var _closure2_slot7 = var2;
                var5 = var15.useCallback;
                var4 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure2_slot7;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot5;
                    var1 = arg1;
                    var2.current = var1;
                    return var0;
                };
                var2 = new Array(0);
                var6 = var5.bind(var15)(var4, var2);
                var4 = _closure1_slot8;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var12 = var4.bind(var13)(var2);
                var _closure2_slot8 = var12;
                var5 = var15.useMemo;
                var4 = new Array(1);
                var4[0] = var12;
                var2 = function() { // Environment: var0
                    _fun100667: for (var _fun100667_ip = 0;;) switch (_fun100667_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var3 = var0.error_code;
                            var2 = _closure1_slot12;
                            var2 = var2.PHONE_CARRIER_TYPE_NOT_MOBILE;
                            if (!(var3 !== var2)) {
                                _fun100667_ip = 58;
                                continue _fun100667
                            }
                        case 30:
                            var1 = _closure2_slot8;
                            var2 = var1.error_code;
                            var1 = _closure1_slot12;
                            var1 = var1.INVALID_PHONE_NUMBER;
                            if (!(var2 !== var1)) {
                                _fun100667_ip = 58;
                                continue _fun100667
                            }
                        case 54:
                            var1 = undefined;
                            return var1;
                        case 58:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 8;
                            var1 = var5[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.F8UYVY;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var5 = var5.bind(var15)(var2, var4);
                var14 = var15.useCallback;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun100670: for (var _fun100670_ip = 0;;) switch (_fun100670_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun100670_ip = 792;
                                        continue _fun100670
                                    }
                                case 12:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = undefined;
                                    var14 = undefined;
                                    var _closure5_slot1 = var1;
                                    var7 = undefined;
                                    var6 = undefined;
                                    var5 = undefined;
                                    var8 = _closure2_slot5;
                                    var9 = var8.current;
                                    var8 = _closure2_slot6;
                                    var11 = var9 + var8;
                                    var14 = var11;
                                    _closure5_slot1 = var11;
                                    var10 = _closure1_slot7;
                                    var9 = {};
                                    var9.email = var1;
                                    var9.phone = var11;
                                    var9 = var10.bind(var1)(var9);
                                    var10 = _closure1_slot9;
                                    var9 = _closure2_slot0;
                                    var7 = var10.bind(var1)(var9);
                                case 97: // try_start_0
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var9 = 9;
                                    var9 = var11[var9];
                                    var11 = var10.bind(var1)(var9);
                                    var10 = var11.registerPhone;
                                    var9 = {};
                                    var12 = var14;
                                    var9.phone = var12;
                                    var9 = var10.bind(var11)(var9);
                                    SaveGenerator(address = 142);
                                case 140:
                                    return var9;
                                case 142:
                                    ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun100670_ip = 401;
                                        continue _fun100670
                                    }
                                case 151:
                                    var11 = _closure2_slot3;
                                    var10 = {};
                                    var12 = var7;
                                    var10.step = var12;
                                    var12 = _closure1_slot10;
                                    var12 = var12.PHONE_VERIFICATION;
                                    var10.toStep = var12;
                                    var12 = _closure1_slot11;
                                    var12 = var12.SUCCESS;
                                    var10.actionType = var12;
                                    var10 = var11.bind(var1)(var10);
                                case 200: // try_end0
                                    var13 = _closure2_slot2;
                                    var12 = var13.push;
                                    var16 = _closure1_slot0;
                                    var19 = _closure1_slot2;
                                    var10 = 13;
                                    var10 = var19[var10];
                                    var10 = var16.bind(var1)(var10);
                                    var10 = var10.AuthStates;
                                    var11 = var10.VERIFY_PHONE;
                                    var10 = {};
                                    var15 = 8;
                                    var17 = var19[var15];
                                    var17 = var16.bind(var1)(var17);
                                    var20 = var17.intl;
                                    var18 = var20.string;
                                    var17 = var19[var15];
                                    var17 = var16.bind(var1)(var17);
                                    var17 = var17.t;
                                    var17 = var17.h7hdQh;
                                    var17 = var18.bind(var20)(var17);
                                    var10.title = var17;
                                    var17 = var19[var15];
                                    var17 = var16.bind(var1)(var17);
                                    var18 = var17.intl;
                                    var17 = var18.formatToPlainString;
                                    var15 = var19[var15];
                                    var15 = var16.bind(var1)(var15);
                                    var15 = var15.t;
                                    var16 = var15.e5WzVa;
                                    var15 = {};
                                    var15.phone = var14;
                                    var15 = var17.bind(var18)(var16, var15);
                                    var10.description = var15;
                                    var10.phone = var14;
                                    var14 = _closure2_slot0;
                                    var10.sourceState = var14;
                                    var14 = function(arg0) { // Original name: onPhoneTokenReceived, environment: var2
                                        var2 = _closure1_slot7;
                                        var1 = {};
                                        var0 = undefined;
                                        var1.email = var0;
                                        var3 = _closure5_slot1;
                                        var1.phone = var3;
                                        var3 = arg0;
                                        var1.phoneToken = var3;
                                        var1 = var2.bind(var0)(var1);
                                        var7 = _closure2_slot3;
                                        var6 = {};
                                        var2 = _closure1_slot10;
                                        var2 = var2.PHONE_VERIFICATION;
                                        var6.step = var2;
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var2 = 14;
                                        var4 = var5[var2];
                                        var10 = var3.bind(var0)(var4);
                                        var9 = var10.getNextRegistrationTransitionStep;
                                        var4 = _closure2_slot0;
                                        var9 = var9.bind(var10)(var4);
                                        var6.toStep = var9;
                                        var8 = _closure1_slot11;
                                        var8 = var8.SUCCESS;
                                        var6.actionType = var8;
                                        var6 = var7.bind(var0)(var6);
                                        var2 = var5[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getNextAuthState;
                                        var3 = var2.bind(var3)(var4);
                                        var2 = _closure2_slot2;
                                        var1 = var2.replace;
                                        var1 = var1.bind(var2)(var3);
                                        return var0;
                                    };
                                    var10.onPhoneTokenReceived = var14;
                                    var14 = function() { // Original name: onBail, environment: var2
                                        var3 = _closure2_slot7;
                                        var0 = undefined;
                                        var2 = '';
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure2_slot2;
                                        var1 = var2.pop;
                                        var1 = var1.bind(var2)();
                                        var1 = _closure5_slot0;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var10.onBail = var14;
                                    var10 = var12.bind(var13)(var11, var10);
                                    return var1;
                                case 401:
                                    return var9;
                                case 404: // catch_target0
                                    CatchBlockStart(arg_register = 10);
                                    var4 = var10;
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var9 = 10;
                                    var9 = var12[var9];
                                    var9 = var11.bind(var1)(var9);
                                    var9 = var9.CaptchaCancelError;
                                    var9 = var10 instanceof var9;
                                    if (var9) {
                                        _fun100670_ip = 789;
                                        continue _fun100670
                                    }
                                case 445:
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var9 = 11;
                                    var9 = var11[var9];
                                    var10 = var10.bind(var1)(var9);
                                    var9 = var10.getAuthenticationErrorsFromAPIError;
                                    var10 = var9.bind(var10)(var4);
                                    var6 = var10;
                                    var4 = _closure1_slot6;
                                    var4 = var4.bind(var1)(var10);
                                    var4 = global;
                                    var9 = var4.Object;
                                    var4 = var9.keys;
                                    var9 = var4.bind(var9)(var10);
                                    var4 = var9.filter;
                                    var2 = function(arg0) { // Environment: var2
                                        var2 = ['phone'];
                                        var1 = var2.includes;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var2 = var4.bind(var9)(var2);
                                    var5 = var2;
                                    var2 = var2.length;
                                    var9 = 0;
                                    if (!(var2 > var9)) {
                                        _fun100670_ip = 555;
                                        continue _fun100670
                                    }
                                case 537:
                                    var2 = var6;
                                    var4 = var2.error_code;
                                    var2 = null;
                                    if (!(var2 == var4)) {
                                        _fun100670_ip = 683;
                                        continue _fun100670
                                    }
                                case 555:
                                    var10 = var6;
                                    var10 = var10.error_code;
                                    var11 = null;
                                    var10 = var11 != var10;
                                    var4 = var10;
                                    if (!var10) {
                                        _fun100670_ip = 588;
                                        continue _fun100670
                                    }
                                case 576:
                                    var10 = var6;
                                    var10 = var10.message;
                                    var4 = var11 != var10;
                                case 588:
                                    var2 = var4;
                                    if (!var4) {
                                        _fun100670_ip = 681;
                                        continue _fun100670
                                    }
                                case 594:
                                    var10 = _closure2_slot3;
                                    var4 = {};
                                    var11 = var7;
                                    var4.step = var11;
                                    var11 = _closure1_slot11;
                                    var11 = var11.RESPONSE_ERROR;
                                    var4.actionType = var11;
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var11 = 12;
                                    var11 = var13[var11];
                                    var13 = var12.bind(var1)(var11);
                                    var12 = var13.getCommonErrorDetails;
                                    var11 = var6;
                                    var11 = var11.error_code;
                                    var12 = var12.bind(var13)(var11);
                                    var11 = new Array(1);
                                    var11[0] = var12;
                                    var4.details = var11;
                                    var2 = var10.bind(var1)(var4);
                                case 681:
                                    _fun100670_ip = 784;
                                    continue _fun100670;
                                case 683:
                                    var4 = _closure2_slot3;
                                    var3 = {};
                                    var3.step = var7;
                                    var7 = _closure1_slot11;
                                    var7 = var7.RESPONSE_ERROR;
                                    var3.actionType = var7;
                                    var22 = var5;
                                    var5 = new Array(1);
                                    var23 = var5;
                                    var21 = 0;
                                    var7 = arraySpread(var23, var22, var21);
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var8 = 12;
                                    var8 = var10[var8];
                                    var9 = var9.bind(var1)(var8);
                                    var8 = var9.getCommonErrorDetails;
                                    var6 = var6.error_code;
                                    var6 = var8.bind(var9)(var6);
                                    var5[var7] = var6;
                                    var6 = 1;
                                    var6 = var7 + var6;
                                    var3.details = var5;
                                    var2 = var4.bind(var1)(var3);
                                case 784:
                                    var2 = undefined;
                                    return var2;
                                case 789:
                                    return var1;
                                case 792:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var4 = var2.bind(var13)();
                var2 = new Array(4);
                var2[0] = var18;
                var2[1] = var7;
                var2[2] = var17;
                var2[3] = var16;
                var4 = var14.bind(var15)(var4, var2);
                var2 = 15;
                var2 = var11[var2];
                var2 = var10.bind(var13)(var2);
                var2 = var2.PhoneOrEmailSelectorForceMode;
                var2 = var2.PHONE;
                if (!(var1 !== var2)) {
                    _fun100664_ip = 352;
                    continue _fun100664
                }
            case 320:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 16;
                var2 = var11[var2];
                var10 = var10.bind(var13)(var2);
                var2 = 'email';
                var2 = var10.bind(var13)(var2, var12);
                _fun100664_ip = 382;
                continue _fun100664;
            case 352:
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 16;
                var10 = var14[var10];
                var11 = var11.bind(var13)(var10);
                var10 = 'phone';
                var2 = var11.bind(var13)(var10, var12);
            case 382:
                var _closure2_slot9 = var2;
                var11 = _closure1_slot5;
                var10 = var11.useMemo;
                var3 = new Array(4);
                var3[0] = var1;
                var3[1] = var7;
                var3[2] = var9;
                var3[3] = var2;
                var1 = function() { // Environment: var0
                    _fun100675: for (var _fun100675_ip = 0;;) switch (_fun100675_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.PhoneOrEmailSelectorForceMode;
                            var0 = var0.PHONE;
                            if (!(var2 !== var0)) {
                                _fun100675_ip = 54;
                                continue _fun100675
                            }
                        case 48:
                            var4 = _closure2_slot4;
                            _fun100675_ip = 58;
                            continue _fun100675;
                        case 54:
                            var4 = _closure2_slot6;
                        case 58:
                            var2 = null;
                            var0 = var2 == var4;
                            if (var0) {
                                _fun100675_ip = 75;
                                continue _fun100675
                            }
                        case 67:
                            var3 = '';
                            var0 = var3 === var4;
                        case 75:
                            if (var0) {
                                _fun100675_ip = 86;
                                continue _fun100675
                            }
                        case 78:
                            var1 = _closure2_slot9;
                            var0 = var2 != var1;
                        case 86:
                            return var0;
                    }
                };
                var3 = var10.bind(var11)(var1, var3);
                var10 = var11.useCallback;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    _fun100676: for (var _fun100676_ip = 0;;) switch (_fun100676_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var0 = var3[var0];
                            var5 = undefined;
                            var3 = var2.bind(var5)(var0);
                            var2 = var3.isEmail;
                            var0 = _closure2_slot4;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            if (var2) {
                                _fun100676_ip = 105;
                                continue _fun100676
                            }
                        case 48:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 8;
                            var2 = var6[var1];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.nr0MVZ;
                            var0 = var2.bind(var3)(var1);
                        case 105:
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var0, var1);
                var0 = {};
                var0.loginEmail = var9;
                var0.setLoginEmail = var8;
                var0.loginPhone = var7;
                var0.updateLoginPhone = var6;
                var0.identityErrorMessage = var5;
                var0.registerAndVerifyPhone = var4;
                var0.preventSubmitIdentity = var3;
                var0.identityError = var2;
                var0.validateEmail = var1;
                return var0;
        }
    };
    var2.useIdentityRegistrationStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 13043, 13044, 660, 1469, 13041, 1234, 13055, 5215, 7446, 13052, 670, 13042, 7448, 7449, 5854, 2]);