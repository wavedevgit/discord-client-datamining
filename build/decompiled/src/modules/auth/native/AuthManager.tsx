// modules/auth/native/AuthManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun100502: for (var _fun100502_ip = 0;;) switch (_fun100502_ip) {
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
            case 72: // try_end0
                _fun100502_ip = 76;
                continue _fun100502;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.NativeModules;
    var _closure1_slot9 = var7;
    var3 = var3.Keyboard;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PermissionStateType;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationAuthorizationStatus;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NewUserTypes;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'register';
    var3.REGISTER = var7;
    var7 = 'login';
    var3.LOGIN = var7;
    var _closure1_slot15 = var3;
    var3 = null;
    var _closure1_slot16 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun100506: for (var _fun100506_ip = 0;;) switch (_fun100506_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun100506_ip = 86;
                        continue _fun100506
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun100506_ip = 120;
                    continue _fun100506;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot15;
                        var0 = var0.REGISTER;
                        _closure1_slot16 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleRegister = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot15;
                        var0 = var0.LOGIN;
                        _closure1_slot16 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLogin = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun100511: for (var _fun100511_ip = 0;;) switch (_fun100511_ip) {
                                    case 0:
                                        StartGenerator();
                                        var2 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun100511_ip = 159;
                                            continue _fun100511
                                        }
                                    case 13:
                                        var3 = _closure1_slot10;
                                        var1 = var3.dismiss;
                                        var1 = var1.bind(var3)();
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 11;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var3 = var5.bind(var1)(var3);
                                        var3 = var3.bind(var1)();
                                        if (var3) {
                                            _fun100511_ip = 152;
                                            continue _fun100511
                                        }
                                    case 59:
                                        var3 = _closure1_slot9;
                                        var5 = var3.NativePermissionManager;
                                        var3 = var5.getNotificationAuthorizationStatus;
                                        var3 = var3.bind(var5)();
                                        SaveGenerator(address = 83);
                                    case 81:
                                        return var3;
                                    case 83:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun100511_ip = 149;
                                            continue _fun100511
                                        }
                                    case 89:
                                        var5 = _closure1_slot13;
                                        var5 = var5.UNDETERMINED;
                                        if (!(var3 !== var5)) {
                                            _fun100511_ip = 109;
                                            continue _fun100511
                                        }
                                    case 103:
                                        var5 = var2.bind(var1)();
                                        _fun100511_ip = 156;
                                        continue _fun100511;
                                    case 109:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 12;
                                        var4 = var6[var4];
                                        var6 = var5.bind(var1)(var4);
                                        var5 = var6.showPushNotificationPromptModal;
                                        var4 = {};
                                        var4.onComplete = var2;
                                        var4 = var5.bind(var6)(var4);
                                        _fun100511_ip = 156;
                                        continue _fun100511;
                                    case 149:
                                        return var3;
                                    case 152:
                                        var2 = var2.bind(var1)();
                                    case 156:
                                        return var1;
                                    case 159:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var2 = var2.bind(var3)();
                    var0.handlePushNotificationOptIn = var2;
                    var2 = function() { // Environment: var1
                        _fun100513: for (var _fun100513_ip = 0;;) switch (_fun100513_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isIOS;
                                var2 = var2.bind(var3)();
                                if (!var2) {
                                    _fun100513_ip = 79;
                                    continue _fun100513
                                }
                            case 38:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 14;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.setPushPermissionState;
                                var1 = _closure1_slot11;
                                var1 = var1.PROMPT_SEEN;
                                var1 = var2.bind(var3)(var1);
                            case 79:
                                var2 = _closure3_slot0;
                                var1 = var2.handleRegisterComplete;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.handleRegisterWithConnection = var2;
                    var2 = function() { // Environment: var1
                        _fun100514: for (var _fun100514_ip = 0;;) switch (_fun100514_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 15;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.hasDeferredInvite;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun100514_ip = 79;
                                    continue _fun100514
                                }
                            case 38:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 16;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.setNewUser;
                                var2 = _closure1_slot14;
                                var2 = var2.ORGANIC_REGISTERED;
                                var2 = var3.bind(var4)(var2);
                            case 79:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 17;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.startOnboarding;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.handleRegisterComplete = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handlePushNotificationOptIn;
                        var0 = function() { // Environment: var0
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 18;
                            var2 = var3[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var5 = var6.transitionTo;
                            var2 = _closure1_slot12;
                            var4 = var2.ME;
                            var2 = {};
                            var7 = true;
                            var2.navigationReplace = var7;
                            var2 = var5.bind(var6)(var4, var2);
                            var2 = _closure1_slot1;
                            var1 = 19;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'DEFERRED_INVITE_SHOW';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLoginWithConnection = var2;
                    var2 = function() { // Environment: var1
                        _fun100517: for (var _fun100517_ip = 0;;) switch (_fun100517_ip) {
                            case 0:
                                var2 = _closure1_slot16;
                                var0 = _closure1_slot15;
                                var0 = var0.REGISTER;
                                if (!(var0 !== var2)) {
                                    _fun100517_ip = 139;
                                    continue _fun100517
                                }
                            case 21:
                                var0 = _closure1_slot15;
                                var0 = var0.LOGIN;
                                if (!(var0 !== var2)) {
                                    _fun100517_ip = 90;
                                    continue _fun100517
                                }
                            case 35:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 18;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.transitionTo;
                                var0 = _closure1_slot12;
                                var2 = var0.ME;
                                var0 = {};
                                var5 = true;
                                var0.navigationReplace = var5;
                                var0 = var3.bind(var4)(var2, var0);
                                _fun100517_ip = 186;
                                continue _fun100517;
                            case 90:
                                var2 = _closure3_slot0;
                                var0 = var2.handleLoginWithConnection;
                                var0 = var0.bind(var2)();
                                var0 = _closure1_slot9;
                                var3 = var0.DCDSKAdNetworkManager;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun100517_ip = 186;
                                    continue _fun100517
                                }
                            case 123:
                                var2 = var3.updateConversionValue;
                                var0 = 10;
                                var0 = var2.bind(var3)(var0);
                                _fun100517_ip = 186;
                                continue _fun100517;
                            case 139:
                                var2 = _closure3_slot0;
                                var0 = var2.handleRegisterWithConnection;
                                var0 = var0.bind(var2)();
                                var0 = _closure1_slot9;
                                var3 = var0.DCDSKAdNetworkManager;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun100517_ip = 186;
                                    continue _fun100517
                                }
                            case 172:
                                var2 = var3.updateConversionValue;
                                var0 = 1;
                                var0 = var2.bind(var3)(var0);
                            case 186:
                                var0 = null;
                                _closure1_slot16 = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConnectionOpen = var2;
                    var1 = function() { // Environment: var1
                        _fun100518: for (var _fun100518_ip = 0;;) switch (_fun100518_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 20;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.deleteAllInteractions;
                                var2 = var2.bind(var3)();
                                var1 = _closure1_slot9;
                                var2 = var1.DCDShortcutManager;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun100518_ip = 63;
                                    continue _fun100518
                                }
                            case 53:
                                var1 = var2.handleLogout;
                                var1 = var1.bind(var2)();
                            case 63:
                                return var0;
                        }
                    };
                    var0.handleLogout = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleConnectionOpen;
            var5 = 'CONNECTION_OPEN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleLogin;
            var5 = 'LOGIN_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRegister;
            var5 = 'REGISTER_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = var1.handleLogout;
            var1 = 'LOGOUT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleConnectionOpen;
            var5 = 'CONNECTION_OPEN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLogin;
            var5 = 'LOGIN_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRegister;
            var5 = 'REGISTER_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleLogout;
            var1 = 'LOGOUT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/AuthManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 27, 10922, 660, 3975, 10217, 1368, 13049, 478, 10925, 8291, 10221, 10214, 1220, 806, 6514, 3979, 2]);