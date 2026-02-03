// modules/auth/native/components/RegisterIdentity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun100309: for (var _fun100309_ip = 0;;) switch (_fun100309_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.inputMode;
                var _closure2_slot0 = var18;
                var2 = var1.setInputMode;
                var _closure2_slot1 = var2;
                var8 = var1.headerText;
                var11 = var1.controlComponent;
                var7 = var1.subheader;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var21 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot10;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun100313: for (var _fun100313_ip = 0;;) switch (_fun100313_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun100313_ip = 377;
                                        continue _fun100313
                                    }
                                case 10:
                                    var2 = _closure1_slot9;
                                    var4 = undefined;
                                    var1 = {};
                                    var1 = var2.bind(var4)(var1);
                                    var3 = _closure2_slot9;
                                    var1 = {};
                                    var6 = _closure1_slot12;
                                    var6 = var6.ACCOUNT_IDENTITY;
                                    var1.step = var6;
                                    var6 = _closure1_slot13;
                                    var6 = var6.SUBMITTED;
                                    var1.actionType = var6;
                                    var1 = var3.bind(var4)(var1);
                                    var3 = _closure2_slot0;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var1 = 16;
                                    var1 = var7[var1];
                                    var1 = var6.bind(var4)(var1);
                                    var1 = var1.PhoneOrEmailSelectorForceMode;
                                    var1 = var1.EMAIL;
                                    if (!(var3 !== var1)) {
                                        _fun100313_ip = 192;
                                        continue _fun100313
                                    }
                                case 110: // try_start_0
                                    var3 = _closure2_slot8;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                    var3 = _closure2_slot6;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure2_slot1;
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 16;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var1.PhoneOrEmailSelectorForceMode;
                                        var1 = var1.EMAIL;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 143);
                                case 141:
                                    return var1;
                                case 143:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun100313_ip = 163;
                                        continue _fun100313
                                    }
                                case 149: // try_end0
                                    var6 = _closure2_slot8;
                                    var3 = false;
                                    var3 = var6.bind(var4)(var3);
                                    return var4;
                                case 163:
                                    var6 = _closure2_slot8;
                                    var3 = false;
                                    var3 = var6.bind(var4)(var3);
                                    return var1;
                                case 177: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var6 = _closure2_slot8;
                                    var3 = false;
                                    var3 = var6.bind(var4)(var3);
                                    throw var1;
                                case 192:
                                    var3 = _closure1_slot10;
                                    var1 = {};
                                    var6 = _closure2_slot4;
                                    var1.email = var6;
                                    var1.phoneToken = var4;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot7;
                                    var7 = var1.bind(var4)();
                                    var1 = null;
                                    if (!(var1 == var7)) {
                                        _fun100313_ip = 300;
                                        continue _fun100313
                                    }
                                case 231:
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var6[var1];
                                    var9 = var3.bind(var4)(var1);
                                    var8 = var9.handleNextOrSubmitRegistration;
                                    var1 = 10;
                                    var1 = var6[var1];
                                    var1 = var3.bind(var4)(var1);
                                    var1 = var1.AuthStates;
                                    var6 = var1.REGISTER_IDENTITY;
                                    var3 = _closure2_slot2;
                                    var1 = _closure2_slot9;
                                    var1 = var8.bind(var9)(var6, var3, var1);
                                    var1 = undefined;
                                    _fun100313_ip = 374;
                                    continue _fun100313;
                                case 300:
                                    var6 = _closure1_slot9;
                                    var3 = {};
                                    var3.email = var7;
                                    var3 = var6.bind(var4)(var3);
                                    var3 = _closure2_slot9;
                                    var2 = {};
                                    var6 = _closure1_slot12;
                                    var6 = var6.ACCOUNT_IDENTITY;
                                    var2.step = var6;
                                    var5 = _closure1_slot13;
                                    var5 = var5.INPUT_ERROR;
                                    var2.actionType = var5;
                                    var5 = ['email'];
                                    var2.details = var5;
                                    var2 = var3.bind(var4)(var2);
                                    var1 = undefined;
                                case 374:
                                    return var1;
                                case 377:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot10 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot10 = var1;
                var1 = _closure1_slot16;
                var16 = var1.bind(var3)();
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var1 = 8;
                var1 = var26[var1];
                var2 = var25.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                _closure2_slot2 = var1;
                var2 = _closure1_slot11;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var4 = var2.bind(var3)(var1);
                var _closure2_slot3 = var4;
                var1 = 9;
                var1 = var26[var1];
                var6 = var25.bind(var3)(var1);
                var5 = var6.useIdentityRegistrationStep;
                var1 = 10;
                var2 = var26[var1];
                var2 = var25.bind(var3)(var2);
                var2 = var2.AuthStates;
                var2 = var2.REGISTER_IDENTITY;
                var5 = var5.bind(var6)(var2, var18);
                var24 = var5.loginEmail;
                _closure2_slot4 = var24;
                var19 = var5.setLoginEmail;
                var27 = var5.loginPhone;
                var23 = var5.updateLoginPhone;
                var2 = var5.identityErrorMessage;
                var _closure2_slot5 = var2;
                var6 = var5.registerAndVerifyPhone;
                _closure2_slot6 = var6;
                var20 = var5.preventSubmitIdentity;
                var17 = var5.identityError;
                var5 = var5.validateEmail;
                _closure2_slot7 = var5;
                var9 = _closure1_slot5;
                var6 = var9.useState;
                var5 = false;
                var9 = var6.bind(var9)(var5);
                var6 = _closure1_slot4;
                var5 = 2;
                var6 = var6.bind(var3)(var9, var5);
                var5 = 0;
                var22 = var6[var5];
                var5 = 1;
                var5 = var6[var5];
                _closure2_slot8 = var5;
                var9 = _closure1_slot5;
                var6 = var9.useContext;
                var5 = 11;
                var5 = var26[var5];
                var5 = var25.bind(var3)(var5);
                var5 = var5.TrackRegistrationContext;
                var5 = var6.bind(var9)(var5);
                _closure2_slot9 = var5;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var9 = var4.message;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun100316: for (var _fun100316_ip = 0;;) switch (_fun100316_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun100316_ip = 24;
                                continue _fun100316
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            var0 = var0.message;
                            _fun100316_ip = 28;
                            continue _fun100316;
                        case 24:
                            var0 = _closure2_slot5;
                        case 28:
                            return var0;
                    }
                };
                var15 = var5.bind(var6)(var2, var4);
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var26[var2];
                var4 = var5.bind(var3)(var2);
                var2 = var26[var1];
                var2 = var25.bind(var3)(var2);
                var2 = var2.AuthStates;
                var2 = var2.REGISTER_IDENTITY;
                var2 = var4.bind(var3)(var2);
                var2 = 13;
                var2 = var26[var2];
                var2 = var5.bind(var3)(var2);
                var4 = 14;
                var4 = var26[var4];
                var6 = var25.bind(var3)(var4);
                var4 = var6.getPreviousRegistrationTransitionStep;
                var1 = var26[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.AuthStates;
                var1 = var1.REGISTER_IDENTITY;
                var1 = var4.bind(var6)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = 15;
                var1 = var26[var1];
                var1 = var5.bind(var3)(var1);
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot9;
                    var1 = {};
                    var3 = _closure1_slot12;
                    var3 = var3.ACCOUNT_IDENTITY;
                    var1.step = var3;
                    var0 = _closure1_slot13;
                    var0 = var0.VIEWED;
                    var1.actionType = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var3)(var0);
                var2 = _closure1_slot14;
                var0 = 17;
                var0 = var26[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var4 = var16.page;
                var0.style = var4;
                var6 = _closure1_slot14;
                var4 = 18;
                var4 = var26[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.headerText = var8;
                var4.subHeader = var7;
                var9 = _closure1_slot15;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var16.container;
                var7.style = var10;
                var10 = var16.scrollContent;
                var7.contentContainerStyle = var10;
                var10 = 'handled';
                var7.keyboardShouldPersistTaps = var10;
                var10 = new Array(4);
                var10[0] = var11;
                var14 = _closure1_slot14;
                var11 = 19;
                var11 = var26[var11];
                var11 = var25.bind(var3)(var11);
                var13 = var11.RegisterPhoneOrEmailInput;
                var11 = {};
                var11.loginPhone = var27;
                var11.loginEmail = var24;
                var11.setLoginPhone = var23;
                var11.setLoginEmail = var19;
                var11.inputMode = var18;
                var11.onSubmit = var21;
                var11.inputError = var17;
                var17 = true;
                var11.autoFocus = var17;
                var11 = var14.bind(var3)(var13, var11);
                var10[1] = var11;
                var14 = _closure1_slot14;
                var13 = _closure1_slot6;
                var11 = {};
                var17 = var16.button;
                var11.style = var17;
                var19 = _closure1_slot14;
                var17 = 20;
                var17 = var26[var17];
                var17 = var25.bind(var3)(var17);
                var18 = var17.Button;
                var17 = {};
                var17.loading = var22;
                var22 = 'lg';
                var17.size = var22;
                var22 = 21;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.PDTjLN;
                var22 = var23.bind(var24)(var22);
                var17.text = var22;
                var17.onPress = var21;
                var17.disabled = var20;
                var17 = var19.bind(var3)(var18, var17);
                var11.children = var17;
                var11 = var14.bind(var3)(var13, var11);
                var10[2] = var11;
                var14 = null;
                var13 = var14 != var15;
                var11 = null;
                if (!var13) {
                    _fun100309_ip = 901;
                    continue _fun100309
                }
            case 845:
                var13 = '';
                var11 = null;
                if (!(var13 !== var15)) {
                    _fun100309_ip = 901;
                    continue _fun100309
                }
            case 855:
                var14 = _closure1_slot14;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 22;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = var16.errors;
                var12.style = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 901:
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.clearRegistrationErrorMessage;
    var _closure1_slot8 = var6;
    var6 = var3.setRegistrationErrors;
    var _closure1_slot9 = var6;
    var6 = var3.updateRegistrationOptions;
    var _closure1_slot10 = var6;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot12 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 24,
        'flex': 1
    };
    var3.container = var8;
    var8 = {};
    var8.flex = var10;
    var3.page = var8;
    var8 = {
        'width': '100%',
        'marginTop': 24
    };
    var3.button = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.errors = var8;
    var8 = {
        'paddingRight': 16,
        'marginTop': 16
    };
    var3.marketingOptInCheckbox = var8;
    var8 = {
        'height': 45,
        'marginBottom': 24
    };
    var3.segmentedControl = var8;
    var8 = {};
    var9 = 128;
    var8.paddingBottom = var9;
    var3.scrollContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterIdentity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot16;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 23;
        var1 = var8[var1];
        var4 = var7.bind(var3)(var1);
        var2 = var4.usePreferEmailMobileRegistrationExperiment;
        var1 = 'RegisterIdentity';
        var2 = var2.bind(var4)(var1);
        var _closure2_slot0 = var2;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var1 = function() { // Environment: var0
            _fun100319: for (var _fun100319_ip = 0;;) switch (_fun100319_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.PhoneOrEmailSelectorForceMode;
                    if (var0) {
                        _fun100319_ip = 49;
                        continue _fun100319
                    }
                case 41:
                    var0 = var1.PHONE;
                    _fun100319_ip = 55;
                    continue _fun100319;
                case 49:
                    var0 = var1.EMAIL;
                case 55:
                    return var0;
            }
        };
        var5 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var1 = 2;
        var4 = var4.bind(var3)(var5, var1);
        var1 = 0;
        var5 = var4[var1];
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot1 = var1;
        var11 = _closure1_slot5;
        var6 = var11.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            _fun100320: for (var _fun100320_ip = 0;;) switch (_fun100320_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 21;
                    var1 = var7[var2];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var4 = var1.intl;
                    var3 = var4.string;
                    var1 = var7[var2];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    if (var0) {
                        _fun100320_ip = 128;
                        continue _fun100320
                    }
                case 59:
                    var0 = var1.dEYpSt;
                    var8 = var3.bind(var4)(var0);
                    var0 = new Array(2);
                    var0[0] = var8;
                    var8 = var7[var2];
                    var8 = var6.bind(var5)(var8);
                    var10 = var8.intl;
                    var9 = var10.string;
                    var8 = var7[var2];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8["w/qqKK"];
                    var8 = var9.bind(var10)(var8);
                    var0[1] = var8;
                    _fun100320_ip = 198;
                    continue _fun100320;
                case 128:
                    var1 = var1["w/qqKK"];
                    var3 = var3.bind(var4)(var1);
                    var1 = new Array(2);
                    var1[0] = var3;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.dEYpSt;
                    var2 = var3.bind(var4)(var2);
                    var1[1] = var2;
                    var0 = var1;
                case 198:
                    return var0;
            }
        };
        var12 = var6.bind(var11)(var2, var4);
        var6 = _closure1_slot5;
        var4 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg0) { // Environment: var0
            _fun100321: for (var _fun100321_ip = 0;;) switch (_fun100321_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure2_slot1;
                    var4 = 0;
                    var1 = arg0;
                    if (!(var4 !== var1)) {
                        _fun100321_ip = 63;
                        continue _fun100321
                    }
                case 29:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.PhoneOrEmailSelectorForceMode;
                    var1 = var1.EMAIL;
                    _fun100321_ip = 95;
                    continue _fun100321;
                case 63:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.PhoneOrEmailSelectorForceMode;
                    var1 = var3.PHONE;
                case 95:
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var6 = var4.bind(var6)(var1, var2);
        var1 = 24;
        var1 = var8[var1];
        var4 = var7.bind(var3)(var1);
        var2 = var4.useSegmentedControlState;
        var1 = {
            'pageWidth': 0,
            'defaultIndex': 0
        };
        var1.onSetActiveIndex = var6;
        var11 = var12.map;
        var6 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var0.id = var1;
            var0.label = var1;
            var1 = null;
            var0.page = var1;
            return var0;
        };
        var6 = var11.bind(var12)(var6);
        var1.items = var6;
        var12 = var2.bind(var4)(var1);
        var _closure2_slot2 = var12;
        var4 = _closure1_slot5;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var12;
        var0 = function(arg0) { // Environment: var0
            _fun100323: for (var _fun100323_ip = 0;;) switch (_fun100323_ip) {
                case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setActiveIndex;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.PhoneOrEmailSelectorForceMode;
                    var5 = var1.PHONE;
                    var2 = 1;
                    var1 = arg0;
                    if (!(var1 === var5)) {
                        _fun100323_ip = 62;
                        continue _fun100323
                    }
                case 60:
                    var2 = 0;
                case 62:
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot14;
        var1 = _closure1_slot17;
        var0 = {};
        var0.inputMode = var5;
        var0.setInputMode = var4;
        var6 = _closure1_slot14;
        var5 = _closure1_slot6;
        var4 = {};
        var10 = var10.segmentedControl;
        var4.style = var10;
        var11 = _closure1_slot14;
        var9 = 25;
        var9 = var8[var9];
        var9 = var7.bind(var3)(var9);
        var10 = var9.SegmentedControl;
        var9 = {};
        var9.state = var12;
        var12 = 'handled';
        var9.keyboardShouldPersistTaps = var12;
        var9 = var11.bind(var3)(var10, var9);
        var4.children = var9;
        var4 = var6.bind(var3)(var5, var4);
        var0.controlComponent = var4;
        var4 = 21;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.WEdDgv;
        var4 = var5.bind(var6)(var4);
        var0.headerText = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.RegisterIdentity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 13050, 13051, 33, 1297, 1469, 13061, 670, 13048, 13065, 13066, 13049, 4103, 7488, 5772, 7528, 13067, 4084, 1234, 5886, 13069, 7795, 8188, 2]);