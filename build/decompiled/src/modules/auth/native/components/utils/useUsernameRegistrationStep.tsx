// modules/auth/native/components/utils/useUsernameRegistrationStep.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.authStateToRegisterTransitionStep;
    var _closure1_slot7 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/useUsernameRegistrationStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100959: for (var _fun100959_ip = 0;;) switch (_fun100959_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot4;
                var7 = var5.useContext;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var9 = undefined;
                var3 = var4.bind(var9)(var3);
                var3 = var3.TrackRegistrationContext;
                var7 = var7.bind(var5)(var3);
                var _closure2_slot1 = var7;
                var3 = 6;
                var3 = var6[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.useNavigation;
                var11 = var3.bind(var4)();
                var _closure2_slot2 = var11;
                var4 = _closure1_slot6;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.registrationOptions;
                    return var0;
                };
                var3 = var4.bind(var9)(var3);
                var4 = var5.useState;
                var6 = var3.username;
                var10 = null;
                if (!(var10 == var6)) {
                    _fun100959_ip = 131;
                    continue _fun100959
                }
            case 117:
                var8 = _closure1_slot5;
                var3 = var8.registrationUsernameSuggestion;
                var6 = var3.bind(var8)();
            case 131:
                var8 = var10 != var6;
                var3 = '';
                if (!var8) {
                    _fun100959_ip = 145;
                    continue _fun100959
                }
            case 142:
                var3 = var6;
            case 145:
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot3;
                var3 = 2;
                var4 = var4.bind(var9)(var5, var3);
                var3 = 0;
                var6 = var4[var3];
                var _closure2_slot3 = var6;
                var3 = 1;
                var5 = var4[var3];
                var4 = _closure1_slot6;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var8 = var4.bind(var9)(var3);
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 7;
                var3 = var12[var3];
                var4 = var4.bind(var9)(var3);
                var3 = 'username';
                var8 = var4.bind(var9)(var3, var8);
                var4 = _closure1_slot0;
                var3 = 8;
                var3 = var12[var3];
                var12 = var4.bind(var9)(var3);
                var4 = var12.useUsernameStatus;
                var3 = true;
                var3 = var4.bind(var12)(var6, var3, var3);
                var _closure2_slot4 = var3;
                var4 = var3;
                if (!(var10 != var8)) {
                    _fun100959_ip = 317;
                    continue _fun100959
                }
            case 268:
                var3 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 9;
                var12 = var14[var12];
                var12 = var13.bind(var9)(var12);
                var12 = var12.NameValidationState;
                var12 = var12.ERROR;
                var3.type = var12;
                var3.message = var8;
                _closure2_slot4 = var3;
                var4 = var3;
            case 317:
                var8 = _closure1_slot4;
                var3 = var8.useCallback;
                var2 = new Array(4);
                var2[0] = var4;
                var2[1] = var11;
                var2[2] = var7;
                var2[3] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun100962: for (var _fun100962_ip = 0;;) switch (_fun100962_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun100962_ip = 25;
                                continue _fun100962
                            }
                        case 20:
                            var4 = var2.type;
                        case 25:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.NameValidationState;
                            var3 = var3.ERROR;
                            if (!(var4 === var3)) {
                                _fun100962_ip = 130;
                                continue _fun100962
                            }
                        case 64:
                            var4 = _closure2_slot1;
                            var3 = {};
                            var6 = _closure1_slot7;
                            var5 = _closure2_slot0;
                            var5 = var6.bind(var0)(var5);
                            var3.step = var5;
                            var5 = _closure1_slot8;
                            var5 = var5.INPUT_ERROR;
                            var3.actionType = var5;
                            var5 = _closure2_slot4;
                            var6 = var5.message;
                            var5 = new Array(1);
                            var5[0] = var6;
                            var3.details = var5;
                            var3 = var4.bind(var0)(var3);
                        case 130:
                            var3 = arg0;
                            if (var3) {
                                _fun100962_ip = 252;
                                continue _fun100962
                            }
                        case 136:
                            var8 = _closure2_slot1;
                            var7 = {};
                            var3 = _closure1_slot7;
                            var5 = _closure2_slot0;
                            var3 = var3.bind(var0)(var5);
                            var7.step = var3;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 10;
                            var9 = var6[var3];
                            var10 = var4.bind(var0)(var9);
                            var9 = var10.getNextRegistrationTransitionStep;
                            var9 = var9.bind(var10)(var5);
                            var7.toStep = var9;
                            var9 = _closure1_slot8;
                            var9 = var9.SUCCESS;
                            var7.actionType = var9;
                            var7 = var8.bind(var0)(var7);
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.getNextAuthState;
                            var5 = var3.bind(var4)(var5);
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var5);
                            _fun100962_ip = 297;
                            continue _fun100962;
                        case 252:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.handleRegistrationSubmit;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 297:
                            return var0;
                    }
                };
                var3 = var3.bind(var8)(var1, var2);
                var7 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var4;
                var1 = function() { // Environment: var0
                    _fun100963: for (var _fun100963_ip = 0;;) switch (_fun100963_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = null;
                            var0 = var2 == var0;
                            if (var0) {
                                _fun100963_ip = 28;
                                continue _fun100963
                            }
                        case 16:
                            var4 = _closure2_slot3;
                            var3 = '';
                            var0 = var3 === var4;
                        case 28:
                            if (var0) {
                                _fun100963_ip = 90;
                                continue _fun100963
                            }
                        case 31:
                            var1 = _closure2_slot4;
                            var3 = var2 == var1;
                            var4 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun100963_ip = 51;
                                continue _fun100963
                            }
                        case 46:
                            var2 = var1.type;
                        case 51:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 9;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.NameValidationState;
                            var1 = var1.ERROR;
                            var0 = var2 === var1;
                        case 90:
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var1, var2);
                var7 = var8.useCallback;
                var1 = new Array(3);
                var1[0] = var6;
                var12 = var10 == var4;
                var11 = undefined;
                if (var12) {
                    _fun100959_ip = 416;
                    continue _fun100959
                }
            case 411:
                var11 = var4.message;
            case 416:
                var1[1] = var11;
                var10 = var10 == var4;
                var9 = undefined;
                if (var10) {
                    _fun100959_ip = 434;
                    continue _fun100959
                }
            case 429:
                var9 = var4.type;
            case 434:
                var1[2] = var9;
                var0 = function() { // Environment: var0
                    _fun100964: for (var _fun100964_ip = 0;;) switch (_fun100964_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun100964_ip = 97;
                                continue _fun100964
                            }
                        case 13:
                            var3 = _closure2_slot3;
                            var2 = '';
                            if (!(var2 !== var3)) {
                                _fun100964_ip = 97;
                                continue _fun100964
                            }
                        case 25:
                            var2 = _closure2_slot4;
                            var4 = var0 == var2;
                            var5 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun100964_ip = 45;
                                continue _fun100964
                            }
                        case 40:
                            var3 = var2.type;
                        case 45:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 9;
                            var2 = var6[var2];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.NameValidationState;
                            var2 = var2.ERROR;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun100964_ip = 95;
                                continue _fun100964
                            }
                        case 86:
                            var1 = _closure2_slot4;
                            var0 = var1.message;
                        case 95:
                            _fun100964_ip = 159;
                            continue _fun100964;
                        case 97:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 11;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.GPfy3L;
                            var0 = var2.bind(var3)(var1);
                        case 159:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var0, var1);
                var0 = {};
                var0.username = var6;
                var0.setUsername = var5;
                var0.usernameStatus = var4;
                var0.transitionToNextStepOrSubmit = var3;
                var0.preventSubmitUsername = var2;
                var0.validateUsername = var1;
                return var0;
        }
    };
    var2.useUsernameRegistrationStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 10418, 13116, 13117, 13114, 1469, 7560, 10438, 10420, 13115, 1234, 2]);