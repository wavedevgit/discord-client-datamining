// modules/auth/native/components/VerifyPhone.tsx
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
    var3 = var3.doesRegistrationHaveIdentityType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.authStateToRegisterTransitionStep;
    var _closure1_slot7 = var6;
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot8 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Links;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/VerifyPhone.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.title;
        var12 = var0.description;
        var18 = var0.phone;
        var _closure2_slot0 = var18;
        var17 = var0.onPhoneTokenReceived;
        var _closure2_slot1 = var17;
        var1 = var0.onClose;
        var _closure2_slot2 = var1;
        var15 = var0.onBail;
        var _closure2_slot3 = var15;
        var10 = var0.sourceState;
        var14 = _closure1_slot5;
        var1 = var14.useState;
        var6 = false;
        var1 = var1.bind(var14)(var6);
        var9 = _closure1_slot4;
        var3 = undefined;
        var8 = 2;
        var1 = var9.bind(var3)(var1, var8);
        var5 = 0;
        var4 = var1[var5];
        var7 = 1;
        var1 = var1[var7];
        var _closure2_slot4 = var1;
        var11 = var14.useState;
        var1 = null;
        var1 = var11.bind(var14)(var1);
        var1 = var9.bind(var3)(var1, var8);
        var11 = var1[var5];
        var1 = var1[var7];
        var _closure2_slot5 = var1;
        var1 = var14.useState;
        var1 = var1.bind(var14)(var6);
        var1 = var9.bind(var3)(var1, var8);
        var5 = var1[var5];
        var1 = var1[var7];
        var _closure2_slot6 = var1;
        var1 = var14.useRef;
        var1 = var1.bind(var14)(var6);
        var _closure2_slot7 = var1;
        var6 = var14.useContext;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.TrackRegistrationContext;
        var16 = var6.bind(var14)(var1);
        var _closure2_slot8 = var16;
        var1 = _closure1_slot1;
        var6 = 8;
        var6 = var9[var6];
        var7 = var1.bind(var3)(var6);
        var6 = _closure1_slot7;
        var6 = var6.bind(var3)(var10);
        var6 = var7.bind(var3)(var6);
        var10 = var14.useEffect;
        var7 = new Array(1);
        var7[0] = var16;
        var6 = function() { // Environment: var2
            _fun100419: for (var _fun100419_ip = 0;;) switch (_fun100419_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun100419_ip = 60;
                        continue _fun100419
                    }
                case 16:
                    var2 = _closure2_slot8;
                    var1 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.PHONE_VERIFICATION;
                    var1.step = var4;
                    var3 = _closure1_slot9;
                    var3 = var3.VIEWED;
                    var1.actionType = var3;
                    var1 = var2.bind(var0)(var1);
                case 60:
                    return var0;
            }
        };
        var6 = var10.bind(var14)(var6, var7);
        var6 = 9;
        var6 = var9[var6];
        var7 = var1.bind(var3)(var6);
        var6 = function() { // Environment: var2
            var0 = function() { // Environment: var0
                _fun100421: for (var _fun100421_ip = 0;;) switch (_fun100421_ip) {
                    case 0:
                        var2 = _closure2_slot2;
                        var0 = null;
                        var2 = var0 == var2;
                        var3 = undefined;
                        var0 = undefined;
                        if (var2) {
                            _fun100421_ip = 38;
                            continue _fun100421
                        }
                    case 20:
                        var2 = _closure2_slot2;
                        var1 = _closure2_slot7;
                        var1 = var1.current;
                        var0 = var2.bind(var3)(var1);
                    case 38:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var3)(var6);
        var10 = var14.useCallback;
        var6 = function() { // Environment: var2
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun100424: for (var _fun100424_ip = 0;;) switch (_fun100424_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun100424_ip = 369;
                                continue _fun100424
                            }
                        case 10:
                            var3 = arg0;
                            var1 = undefined;
                            var5 = undefined;
                            var6 = _closure2_slot4;
                            var8 = true;
                            var6 = var6.bind(var1)(var8);
                        case 31: // try_start_0
                            var7 = _closure1_slot6;
                            var7 = var7.bind(var1)();
                            if (!var7) {
                                _fun100424_ip = 86;
                                continue _fun100424
                            }
                        case 45:
                            var9 = _closure2_slot8;
                            var7 = {};
                            var10 = _closure1_slot8;
                            var10 = var10.PHONE_VERIFICATION;
                            var7.step = var10;
                            var10 = _closure1_slot9;
                            var10 = var10.SUBMITTED;
                            var7.actionType = var10;
                            var7 = var9.bind(var1)(var7);
                        case 86:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 10;
                            var6 = var9[var6];
                            var10 = var7.bind(var1)(var6);
                            var9 = var10.verifyPhone;
                            var7 = _closure2_slot0;
                            var6 = var3;
                            var3 = false;
                            var3 = var9.bind(var10)(var7, var6, var3);
                            SaveGenerator(address = 132);
                        case 130:
                            return var3;
                        case 132:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                            if (var6) {
                                _fun100424_ip = 168;
                                continue _fun100424
                            }
                        case 138:
                            var7 = var3.token;
                            var6 = _closure2_slot7;
                            var6.current = var8;
                            var6 = _closure2_slot1;
                            var6 = var6.bind(var1)(var7);
                        case 163: // try_end0
                            _fun100424_ip = 366;
                            continue _fun100424;
                        case 168:
                            return var3;
                        case 171: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var6 = _closure2_slot4;
                            var3 = false;
                            var3 = var6.bind(var1)(var3);
                            var3 = _closure1_slot6;
                            var3 = var3.bind(var1)();
                            if (!var3) {
                                _fun100424_ip = 254;
                                continue _fun100424
                            }
                        case 198:
                            var6 = _closure2_slot8;
                            var3 = {};
                            var7 = _closure1_slot8;
                            var7 = var7.PHONE_VERIFICATION;
                            var3.step = var7;
                            var7 = _closure1_slot9;
                            var7 = var7.RESPONSE_ERROR;
                            var3.actionType = var7;
                            var7 = ['code'];
                            var3.details = var7;
                            var3 = var6.bind(var1)(var3);
                        case 254:
                            var3 = _closure2_slot5;
                            var6 = var4.body;
                            var5 = var6;
                            var4 = null;
                            var6 = var4 == var6;
                            var4 = undefined;
                            if (var6) {
                                _fun100424_ip = 282;
                                continue _fun100424
                            }
                        case 277:
                            var4 = var5.message;
                        case 282:
                            var2 = var4;
                            if (var4) {
                                _fun100424_ip = 361;
                                continue _fun100424
                            }
                        case 288:
                            var5 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 11;
                            var6 = var9[var4];
                            var6 = var5.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.format;
                            var4 = var9[var4];
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.t;
                            var5 = var4.aTVNes;
                            var4 = {};
                            var8 = _closure1_slot10;
                            var8 = var8.STATUS;
                            var4.statusPageURL = var8;
                            var2 = var6.bind(var7)(var5, var4);
                        case 361:
                            var2 = var3.bind(var1)(var2);
                        case 366:
                            return var1;
                        case 369:
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
        var7 = var6.bind(var3)();
        var6 = new Array(3);
        var6[0] = var18;
        var6[1] = var17;
        var6[2] = var16;
        var10 = var10.bind(var14)(var7, var6);
        var _closure2_slot9 = var10;
        var16 = var14.useCallback;
        var6 = function() { // Environment: var2
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun100428: for (var _fun100428_ip = 0;;) switch (_fun100428_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun100428_ip = 62;
                                continue _fun100428
                            }
                        case 7:
                            var4 = _closure2_slot6;
                            var2 = undefined;
                            var1 = true;
                            var1 = var4.bind(var2)(var1);
                            var4 = _closure2_slot9;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var1);
                            SaveGenerator(address = 39);
                        case 37:
                            return var1;
                        case 39:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun100428_ip = 59;
                                continue _fun100428
                            }
                        case 45:
                            var4 = _closure2_slot6;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
                        case 59:
                            return var1;
                        case 62:
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
        var7 = var6.bind(var3)();
        var6 = new Array(1);
        var6[0] = var10;
        var7 = var16.bind(var14)(var7, var6);
        var6 = 12;
        var6 = var9[var6];
        var6 = var1.bind(var3)(var6);
        var6 = var6.bind(var3)(var7);
        var7 = var14.useMemo;
        var6 = new Array(1);
        var6[0] = var15;
        var2 = function() { // Environment: var2
            _fun100430: for (var _fun100430_ip = 0;;) switch (_fun100430_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = null;
                    var1 = var0 != var1;
                    if (!var1) {
                        _fun100430_ip = 62;
                        continue _fun100430
                    }
                case 16:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1.onBail = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 62:
                    return var0;
            }
        };
        var6 = var7.bind(var14)(var2, var6);
        var2 = _closure1_slot11;
        var7 = 14;
        var0 = var9[var7];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.title = var13;
        var0.description = var12;
        var0.error = var11;
        var0.onCodeEntered = var10;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.CodeType;
        var7 = var7.NUMERIC;
        var0.codeType = var7;
        var0.footer = var6;
        var0.disabled = var5;
        var0.loading = var4;
        var4 = true;
        var0.disableKeyboardAvoidingView = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 13005, 13006, 660, 33, 13003, 13021, 4062, 7517, 1234, 7544, 13033, 7545, 2]);