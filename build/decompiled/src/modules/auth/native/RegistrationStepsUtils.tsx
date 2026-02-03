// modules/auth/native/RegistrationStepsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var10;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun100200: for (var _fun100200_ip = 0;;) switch (_fun100200_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var4 = arg1;
                        var5 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100200_ip = 131;
                            continue _fun100200
                        }
                    case 16:
                        var2 = _closure1_slot9;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var2 = _closure1_slot18;
                        var3 = var2.bind(var1)(var8);
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun100200_ip = 68;
                            continue _fun100200
                        }
                    case 44:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var1)(var8, var4, var5);
                        SaveGenerator(address = 59);
                    case 57:
                        return var2;
                    case 59:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (!var7) {
                            _fun100200_ip = 128;
                            continue _fun100200
                        }
                    case 65:
                        return var2;
                    case 68:
                        var2 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.bind(var1)(var8);
                        var2.step = var7;
                        var7 = _closure1_slot10;
                        var7 = var7.bind(var1)(var3);
                        var2.toStep = var7;
                        var6 = _closure1_slot13;
                        var6 = var6.SUCCESS;
                        var2.actionType = var6;
                        var2 = var5.bind(var1)(var2);
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var3);
                    case 128:
                        return var1;
                    case 131:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun100204: for (var _fun100204_ip = 0;;) switch (_fun100204_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100204_ip = 484;
                            continue _fun100204
                        }
                    case 10:
                        var7 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                        var1 = undefined;
                        var13 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var10 = _closure1_slot4;
                        var8 = var10.registrationUsernameSuggestion;
                        var14 = var8.bind(var10)();
                        var10 = _closure1_slot8;
                        var8 = var10.getState;
                        var8 = var8.bind(var10)();
                        var11 = var8.registrationOptions;
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 23;
                        var8 = var12[var8];
                        var10 = var10.bind(var1)(var8);
                        var8 = var10.isNullOrEmpty;
                        var10 = var8.bind(var10)(var14);
                        var8 = null;
                        var12 = null;
                        if (var10) {
                            _fun100204_ip = 111;
                            continue _fun100204
                        }
                    case 102:
                        var10 = var11.username;
                        var12 = var10 === var14;
                    case 111:
                        var10 = {};
                        var19 = var10;
                        var18 = var11;
                        var11 = copyDataProperties(var19, var18);
                        var11 = 'usedUsernameSuggestion';
                        var10[var11] = var12;
                        var13 = var10;
                        var11 = _closure1_slot5;
                        var10 = var11.getState;
                        var11 = var10.bind(var11)();
                        var10 = var11.required;
                        if (!var10) {
                            _fun100204_ip = 169;
                            continue _fun100204
                        }
                    case 160:
                        var10 = var13;
                        var10.promoEmailConsent = var11;
                    case 169:
                        var11 = _closure1_slot7;
                        var10 = true;
                        var10 = var11.bind(var1)(var10);
                        var11 = _closure1_slot6;
                        var10 = {};
                        var10 = var11.bind(var1)(var10);
                    case 191: // try_start_0
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 24;
                        var10 = var12[var10];
                        var12 = var11.bind(var1)(var10);
                        var11 = var12.registerFull;
                        var10 = var13;
                        var10 = var11.bind(var12)(var10);
                        SaveGenerator(address = 229);
                    case 227:
                        return var10;
                    case 229:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun100204_ip = 329;
                            continue _fun100204
                        }
                    case 235:
                        var12 = var4;
                        var11 = {};
                        var15 = _closure1_slot10;
                        var14 = var7;
                        var14 = var15.bind(var1)(var14);
                        var11.step = var14;
                        var14 = _closure1_slot13;
                        var14 = var14.SUCCESS;
                        var11.actionType = var14;
                        var11.overrideRegistrationOptions = var13;
                        var11 = var12.bind(var1)(var11);
                        var11 = {};
                        var14 = _closure1_slot11;
                        var14 = var14.REGISTER;
                        var11.step = var14;
                        var14 = _closure1_slot13;
                        var14 = var14.SUCCESS;
                        var11.actionType = var14;
                        var11.overrideRegistrationOptions = var13;
                        var11 = var12.bind(var1)(var11);
                    case 324: // try_end0
                        _fun100204_ip = 481;
                        continue _fun100204;
                    case 329:
                        return var10;
                    case 332: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var9 = var11;
                        var12 = _closure1_slot7;
                        var10 = false;
                        var10 = var12.bind(var1)(var10);
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 25;
                        var10 = var13[var10];
                        var10 = var12.bind(var1)(var10);
                        var10 = var10.APIError;
                        var10 = var11 instanceof var10;
                        if (var10) {
                            _fun100204_ip = 384;
                            continue _fun100204
                        }
                    case 381:
                        return var1;
                    case 384:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 26;
                        var10 = var12[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.getAuthenticationErrorsFromAPIError;
                        var10 = var10.bind(var11)(var9);
                        var3 = var10;
                        var9 = _closure1_slot6;
                        var9 = var9.bind(var1)(var10);
                        var9 = _closure1_slot10;
                        var7 = var9.bind(var1)(var7);
                        var2 = var7;
                        if (!(var8 != var7)) {
                            _fun100204_ip = 481;
                            continue _fun100204
                        }
                    case 443:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 27;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var19 = var5;
                        var18 = var4;
                        var17 = var3;
                        var16 = var2;
                        var20 = undefined;
                        var2 = var20[var6](var19, var18, var17, var16, var15);
                    case 481:
                        return var1;
                    case 484:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var10[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var6 = var10[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var6);
    var4 = 2;
    var4 = var10[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var4 = var4.usePromoEmailConsentStore;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var5 = var4.setRegistrationErrors;
    var _closure1_slot6 = var5;
    var5 = var4.setSubmitting;
    var _closure1_slot7 = var5;
    var5 = var4.useRegistrationUIStore;
    var _closure1_slot8 = var5;
    var4 = var4.clearRegistrationErrorMessage;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var5 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot10 = var5;
    var5 = var4.RegisterTransitionSteps;
    var _closure1_slot11 = var5;
    var5 = var4.RegistrationSteps;
    var _closure1_slot12 = var5;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var5 = var4.AuthStates;
    var _closure1_slot14 = var5;
    var4 = 7;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var6 = var5.WELCOME;
    var4 = new Array(5);
    var4[0] = var6;
    var6 = var5.REGISTER_IDENTITY;
    var4[1] = var6;
    var6 = var5.REGISTER_DISPLAY_NAME;
    var4[2] = var6;
    var6 = var5.REGISTER_ACCOUNT_INFORMATION;
    var4[3] = var6;
    var5 = var5.AGE_GATE;
    var4[4] = var5;
    var _closure1_slot16 = var4;
    var7 = function() {
        var0 = _closure1_slot16;
        return var0;
    };
    var _closure1_slot17 = var7;
    var6 = function arg0() {
        _fun100206: for (var _fun100206_ip = 0;;) switch (_fun100206_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var1 = var0.bind(var3)();
                var2 = var1.indexOf;
                var0 = arg0;
                var2 = var2.bind(var1)(var0);
                var0 = -1;
                if (!(var0 !== var2)) {
                    _fun100206_ip = 53;
                    continue _fun100206
                }
            case 37:
                var4 = var1.length;
                var0 = 1;
                var4 = var4 - var0;
                if (!(var2 === var4)) {
                    _fun100206_ip = 55;
                    continue _fun100206
                }
            case 53:
                return var3;
            case 55:
                var0 = var2 + var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function arg0() {
        _fun100207: for (var _fun100207_ip = 0;;) switch (_fun100207_ip) {
            case 0:
                var1 = _closure1_slot17;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var3 = var1.indexOf;
                var2 = arg0;
                var2 = var3.bind(var1)(var2);
                var3 = -1;
                if (!(var3 !== var2)) {
                    _fun100207_ip = 43;
                    continue _fun100207
                }
            case 37:
                var3 = 0;
                if (!(var3 === var2)) {
                    _fun100207_ip = 45;
                    continue _fun100207
                }
            case 43:
                return var0;
            case 45:
                var0 = 1;
                var0 = var2 - var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function arg0() {
        _fun100208: for (var _fun100208_ip = 0;;) switch (_fun100208_ip) {
            case 0:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = arg0;
                var1 = var3.bind(var2)(var1);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun100208_ip = 25;
                    continue _fun100208
                }
            case 23:
                return var2;
            case 25:
                var0 = _closure1_slot10;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var8 = 28;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/auth/native/RegistrationStepsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getRegistrationSteps = var7;
    var7 = function() {
        var0 = {};
        var1 = _closure1_slot14;
        var9 = var1.WELCOME;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true,
            'impressionName': null,
            'headerTitle': null,
            'headerShown': false
        };
        var10 = true;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 8;
        var4 = var8[var5];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var4 = var4.ImpressionNames;
        var4 = var4.USER_WELCOME;
        var2.impressionName = var4;
        var4 = _closure1_slot21;
        var2.headerTitle = var4;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 9;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.REGISTER_IDENTITY;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var11 = var8[var5];
        var11 = var7.bind(var6)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_REGISTRATION;
        var2.impressionName = var11;
        var11 = {};
        var13 = var8[var5];
        var13 = var7.bind(var6)(var13);
        var13 = var13.ImpressionGroups;
        var13 = var13.USER_REGISTRATION_FLOW;
        var11.impression_group = var13;
        var12 = _closure1_slot12;
        var13 = var12.IDENTITY;
        var11.step = var13;
        var2.impressionProperties = var11;
        var2.headerTitle = var4;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BackButtonWithTracking;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot20;
            var4 = _closure1_slot14;
            var4 = var4.REGISTER_IDENTITY;
            var5 = var5.bind(var2)(var4);
            var4 = 'destinationStep';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.headerLeft = var11;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 11;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.RegisterIdentity;
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.REGISTER_DISPLAY_NAME;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var11 = var8[var5];
        var11 = var7.bind(var6)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_REGISTRATION;
        var2.impressionName = var11;
        var11 = {};
        var13 = var8[var5];
        var13 = var7.bind(var6)(var13);
        var13 = var13.ImpressionGroups;
        var13 = var13.USER_REGISTRATION_FLOW;
        var11.impression_group = var13;
        var13 = var12.DISPLAY_NAME;
        var11.step = var13;
        var2.impressionProperties = var11;
        var2.headerTitle = var4;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BackButtonWithTracking;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot20;
            var4 = _closure1_slot14;
            var4 = var4.REGISTER_DISPLAY_NAME;
            var5 = var5.bind(var2)(var4);
            var4 = 'destinationStep';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.headerLeft = var11;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 12;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.REGISTER_ACCOUNT_INFORMATION;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var11 = var8[var5];
        var11 = var7.bind(var6)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_REGISTRATION;
        var2.impressionName = var11;
        var11 = {};
        var13 = var8[var5];
        var13 = var7.bind(var6)(var13);
        var13 = var13.ImpressionGroups;
        var13 = var13.USER_REGISTRATION_FLOW;
        var11.impression_group = var13;
        var12 = var12.ACCOUNT_INFORMATION;
        var11.step = var12;
        var2.impressionProperties = var11;
        var2.headerTitle = var4;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BackButtonWithTracking;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot20;
            var4 = _closure1_slot14;
            var4 = var4.REGISTER_ACCOUNT_INFORMATION;
            var5 = var5.bind(var2)(var4);
            var4 = 'destinationStep';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.headerLeft = var11;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 13;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.VERIFY_PHONE;
        var2 = {};
        var2.ignoreKeyboard = var10;
        var11 = var8[var5];
        var11 = var7.bind(var6)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_VERIFY_PHONE;
        var2.impressionName = var11;
        var11 = {};
        var12 = var8[var5];
        var12 = var7.bind(var6)(var12);
        var12 = var12.ImpressionGroups;
        var12 = var12.USER_REGISTRATION_FLOW;
        var11.impression_group = var12;
        var2.impressionProperties = var11;
        var2.headerTitle = var4;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BackButtonWithTracking;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var5 = copyDataProperties(var7, var6);
            var4 = _closure1_slot11;
            var5 = var4.ACCOUNT_IDENTITY;
            var4 = 'destinationStep';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.headerLeft = var11;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 14;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.LOGIN;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var11 = var8[var5];
        var11 = var7.bind(var6)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_LOGIN;
        var2.impressionName = var11;
        var11 = {};
        var12 = var8[var5];
        var12 = var7.bind(var6)(var12);
        var12 = var12.ImpressionGroups;
        var12 = var12.USER_LOGIN_FLOW;
        var11.impression_group = var12;
        var2.impressionProperties = var11;
        var2.headerTitle = var4;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 15;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.MFA;
        var2 = {
            'fullscreen': true,
            'ignoreKeyboard': true,
            'headerTitle': null,
            'headerShown': false
        };
        var2.headerTitle = var4;
        var11 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 16;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var2.headerTitle = var4;
        var11 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.COUNTRY_SELECT;
        var2 = {};
        var2.ignoreKeyboard = var10;
        var2.headerTitle = var4;
        var11 = function arg0, arg1() {
            var0 = arg1;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 18;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = function() {
                var1 = _closure3_slot0;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.onClose = var5;
            var4 = function arg0() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 19;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.setCountryCode;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.onCountrySelected = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var11;
        var0[var9] = var2;
        var9 = var1.EXTERNAL_LINK;
        var2 = {};
        var2.ignoreKeyboard = var10;
        var2.headerTitle = var4;
        var10 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 20;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var10;
        var0[var9] = var2;
        var9 = var1.AGE_GATE;
        var2 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var10 = var8[var5];
        var10 = var7.bind(var6)(var10);
        var10 = var10.ImpressionNames;
        var10 = var10.USER_AGE_GATE;
        var2.impressionName = var10;
        var2.headerTitle = var4;
        var10 = function arg0() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BackButtonWithTracking;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot20;
            var4 = _closure1_slot14;
            var4 = var4.AGE_GATE;
            var5 = var5.bind(var2)(var4);
            var4 = 'destinationStep';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.headerLeft = var10;
        var10 = function() {
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 21;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var10;
        var0[var9] = var2;
        var2 = var1.AGE_GATE_UNDERAGE;
        var1 = {
            'ignoreKeyboard': true,
            'fullscreen': true
        };
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.ImpressionNames;
        var5 = var5.USER_AGE_GATE_UNDERAGE;
        var1.impressionName = var5;
        var5 = function arg0() {
            var0 = arg0;
            var1 = var0.existingUser;
            var0 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ImpressionGroups;
            var2 = var2.USER_REGISTRATION_FLOW;
            var0.impression_group = var2;
            var0.existing_user = var1;
            return var0;
        };
        var1.impressionProperties = var5;
        var1.headerTitle = var4;
        var3 = function arg0, arg1() {
            var0 = arg1;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot15;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 22;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = function() {
                var1 = _closure3_slot0;
                var0 = var1.popToTop;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.onClose = var4;
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.getAllAuthScreens = var7;
    var2.getNextAuthState = var6;
    var2.getPreviousAuthState = var5;
    var2.getPreviousRegistrationTransitionStep = var4;
    var4 = function(arg0) { // Environment: var3
        _fun100231: for (var _fun100231_ip = 0;;) switch (_fun100231_ip) {
            case 0:
                var3 = _closure1_slot18;
                var2 = undefined;
                var1 = arg0;
                var1 = var3.bind(var2)(var1);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun100231_ip = 25;
                    continue _fun100231
                }
            case 23:
                return var2;
            case 25:
                var0 = _closure1_slot10;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.getNextRegistrationTransitionStep = var4;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleNextOrSubmitRegistration = var3;
    var2.handleRegistrationSubmit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 10355, 4558, 13050, 13051, 660, 33, 481, 13052, 13059, 13060, 13070, 13071, 13077, 7477, 13079, 13080, 7558, 7555, 13084, 13085, 13089, 1607, 13062, 3350, 7486, 13090, 2]);