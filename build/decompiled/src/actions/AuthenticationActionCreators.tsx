// actions/AuthenticationActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0() {
        var3 = {};
        var0 = 'LOGOUT';
        var3.type = var0;
        var4 = arg0;
        var5 = var3;
        var0 = copyDataProperties(var5, var4);
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var3 = var1.bind(var2)(var3);
        var2 = var3.catch;
        var1 = function(arg0) { // Environment: var1
            _fun41035: for (var _fun41035_ip = 0;;) switch (_fun41035_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot16;
                    var2 = var3.error;
                    var1 = 'Error while dispatching LOGOUT';
                    var1 = var2.bind(var3)(var1, var0);
                    var1 = global;
                    var1 = var1.window;
                    var2 = var1.DiscordErrors;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun41035_ip = 58;
                        continue _fun41035
                    }
                case 47:
                    var1 = var2.softCrash;
                    var1 = var1.bind(var2)(var0);
                case 58:
                    throw var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun41036: for (var _fun41036_ip = 0;;) switch (_fun41036_ip) {
            case 0:
                var6 = arguments[1];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun41036_ip = 22;
                    continue _fun41036
                }
            case 9:
                var1 = _closure1_slot13;
                var6 = var1.DEFAULT_LOGGED_OUT;
            case 22:
                var2 = _closure1_slot19;
                var2 = var2.bind(var0)();
                var2 = null;
                if (!(var2 != var6)) {
                    _fun41036_ip = 191;
                    continue _fun41036
                }
            case 42:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 8;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getRootNavigationRef;
                var3 = var3.bind(var4)();
                if (!(var2 == var3)) {
                    _fun41036_ip = 119;
                    continue _fun41036
                }
            case 76:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 9;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.transitionTo;
                var2 = {};
                var7 = arg0;
                var2.source = var7;
                var2 = var4.bind(var5)(var6, var2);
                _fun41036_ip = 191;
                continue _fun41036;
            case 119:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.popAll;
                var1 = var1.bind(var2)();
                var2 = var3.reset;
                var1 = {};
                var4 = 0;
                var1.index = var4;
                var5 = {};
                var4 = 'auth';
                var5.name = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var1.routes = var4;
                var1 = var2.bind(var3)(var1);
            case 191:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.setPromoEmailConsentState;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.Endpoints;
    var _closure1_slot9 = var7;
    var7 = var1.DEVICE_TOKEN;
    var _closure1_slot10 = var7;
    var7 = var1.DEVICE_VOIP_TOKEN;
    var _closure1_slot11 = var7;
    var7 = var1.AbortCodes;
    var _closure1_slot12 = var7;
    var1 = var1.Routes;
    var _closure1_slot13 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot14 = var7;
    var1 = var1.getDevicePushProvider;
    var _closure1_slot15 = var1;
    var1 = 6;
    var1 = var6[var1];
    var7 = var3.bind(var0)(var1);
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var11 = 'AuthenticationActionCreators';
    var12 = var3;
    var1 = new var12[var7](var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot16 = var1;
    var1 = null;
    var _closure1_slot17 = var1;
    var1 = {};
    var3 = 'MFA';
    var1.MFA = var3;
    var3 = 'SUCCESS';
    var1.SUCCESS = var3;
    var _closure1_slot18 = var1;
    var3 = {};
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'START_SESSION';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.token = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.startSession = var7;
    var7 = function arg0() {
        _fun41039: for (var _fun41039_ip = 0;;) switch (_fun41039_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var _closure2_slot0 = var2;
                var15 = var1.login;
                var _closure2_slot1 = var15;
                var14 = var1.password;
                var _closure2_slot2 = var14;
                var13 = var1.undelete;
                var12 = var1.source;
                var11 = var1.giftCodeSKUId;
                var8 = var1.invite;
                var4 = var1.isMultiAccount;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 7;
                var1 = var10[var1];
                var7 = undefined;
                var9 = var2.bind(var7)(var1);
                var3 = var9.dispatch;
                var5 = true;
                var1 = {
                    'type': 'LOGIN',
                    'isPasswordAttempt': true
                };
                var1 = var3.bind(var9)(var1);
                var1 = 11;
                var1 = var10[var1];
                var3 = var2.bind(var7)(var1);
                var2 = var3.post;
                var1 = {};
                var9 = _closure1_slot9;
                var9 = var9.LOGIN;
                var1.url = var9;
                var9 = {};
                var9.login = var15;
                var9.password = var14;
                var9.undelete = var13;
                var9.login_source = var12;
                var9.gift_code_sku_id = var11;
                var1.body = var9;
                var9 = 2;
                var1.retries = var9;
                var1.oldFormErrors = var5;
                var5 = {};
                var9 = _closure1_slot0;
                var6 = 12;
                var6 = var10[var6];
                var6 = var9.bind(var7)(var6);
                var6 = var6.NetworkActionNames;
                var6 = var6.USER_LOGIN;
                var5.event = var6;
                var6 = {};
                var9 = null;
                var9 = var9 == var8;
                if (var9) {
                    _fun41039_ip = 245;
                    continue _fun41039
                }
            case 240:
                var7 = var8.code;
            case 245:
                var6.invite_code = var7;
                var6.is_multi_account = var4;
                var5.properties = var6;
                var1.trackedActionData = var5;
                if (var4) {
                    _fun41039_ip = 274;
                    continue _fun41039
                }
            case 270:
                var4 = {};
                _fun41039_ip = 295;
                continue _fun41039;
            case 274:
                var5 = {};
                var6 = {};
                var7 = '';
                var6.authorization = var7;
                var5.headers = var6;
                var4 = var5;
            case 295:
                var17 = var1;
                var16 = var4;
                var4 = copyDataProperties(var17, var16);
                var5 = false;
                var4 = 'rejectWithError';
                var1[var4] = var5;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun41040: for (var _fun41040_ip = 0;;) switch (_fun41040_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.body;
                            var2 = var0.mfa;
                            var8 = var0.sms;
                            var7 = var0.webauthn;
                            var9 = var0.ticket;
                            var11 = var0.token;
                            var5 = var0.backup;
                            var15 = var0.user_id;
                            var14 = var0.required_actions;
                            var6 = var0.totp;
                            var4 = var0.login_instance_id;
                            var12 = _closure1_slot1;
                            var0 = _closure1_slot3;
                            var3 = 7;
                            var10 = var0[var3];
                            var0 = undefined;
                            var13 = var12.bind(var0)(var10);
                            var12 = var13.dispatch;
                            var10 = {};
                            var16 = 'LOGIN_ATTEMPTED';
                            var10.type = var16;
                            var10.user_id = var15;
                            var10.required_actions = var14;
                            var10 = var12.bind(var13)(var10);
                            if (var2) {
                                _fun41040_ip = 197;
                                continue _fun41040
                            }
                        case 126:
                            var10 = _closure2_slot3;
                            if (var10) {
                                _fun41040_ip = 180;
                                continue _fun41040
                            }
                        case 136:
                            var12 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var10 = var10[var3];
                            var13 = var12.bind(var0)(var10);
                            var12 = var13.dispatch;
                            var10 = {};
                            var14 = 'LOGIN_SUCCESS';
                            var10.type = var14;
                            var10.token = var11;
                            var10 = var12.bind(var13)(var10);
                            _fun41040_ip = 264;
                            continue _fun41040;
                        case 180:
                            var10 = _closure2_slot0;
                            var2 = var10.switchAccountToken;
                            var2 = var2.bind(var10)(var11);
                            _fun41040_ip = 264;
                            continue _fun41040;
                        case 197:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var10 = 'LOGIN_MFA_STEP';
                            var1.type = var10;
                            var1.ticket = var9;
                            var1.sms = var8;
                            var1.webauthn = var7;
                            var1.totp = var6;
                            var1.backup = var5;
                            var1.loginInstanceId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 264:
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var0
                    _fun41041: for (var _fun41041_ip = 0;;) switch (_fun41041_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 13;
                            var0 = var3[var0];
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.V6OrEarlierAPIError;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var14 = var2;
                            var13 = var5;
                            var0 = new var14[var0](var13, var12);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var2 = var5.body;
                            var6 = null;
                            if (!(var6 != var2)) {
                                _fun41041_ip = 95;
                                continue _fun41041
                            }
                        case 68:
                            var3 = var5.body;
                            var7 = var6 == var3;
                            var2 = undefined;
                            if (var7) {
                                _fun41041_ip = 88;
                                continue _fun41041
                            }
                        case 82:
                            var2 = var3.suspended_user_token;
                        case 88:
                            if (!(var6 == var2)) {
                                _fun41041_ip = 464;
                                continue _fun41041
                            }
                        case 95:
                            var2 = var5.body;
                            var7 = var6 == var2;
                            var3 = undefined;
                            if (var7) {
                                _fun41041_ip = 114;
                                continue _fun41041
                            }
                        case 109:
                            var3 = var2.code;
                        case 114:
                            var2 = _closure1_slot12;
                            var2 = var2.ACCOUNT_SCHEDULED_FOR_DELETION;
                            if (!(var3 === var2)) {
                                _fun41041_ip = 154;
                                continue _fun41041
                            }
                        case 128:
                            var2 = _closure2_slot2;
                            if (!(var6 != var2)) {
                                _fun41041_ip = 154;
                                continue _fun41041
                            }
                        case 139:
                            var7 = _closure2_slot2;
                            var2 = '';
                            if (!(var2 === var7)) {
                                _fun41041_ip = 397;
                                continue _fun41041
                            }
                        case 154:
                            var2 = _closure1_slot12;
                            var2 = var2.ACCOUNT_DISABLED;
                            if (!(var3 === var2)) {
                                _fun41041_ip = 194;
                                continue _fun41041
                            }
                        case 168:
                            var2 = _closure2_slot2;
                            if (!(var6 != var2)) {
                                _fun41041_ip = 194;
                                continue _fun41041
                            }
                        case 179:
                            var7 = _closure2_slot2;
                            var2 = '';
                            if (!(var2 === var7)) {
                                _fun41041_ip = 330;
                                continue _fun41041
                            }
                        case 194:
                            var2 = _closure1_slot12;
                            var2 = var2.PHONE_VERIFICATION_REQUIRED;
                            if (!(var3 !== var2)) {
                                _fun41041_ip = 257;
                                continue _fun41041
                            }
                        case 208:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 7;
                            var2 = var7[var2];
                            var7 = var3.bind(var4)(var2);
                            var3 = var7.dispatch;
                            var2 = {};
                            var8 = 'LOGIN_FAILURE';
                            var2.type = var8;
                            var2.error = var0;
                            var2 = var3.bind(var7)(var2);
                            _fun41041_ip = 462;
                            continue _fun41041;
                        case 257:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 7;
                            var2 = var7[var2];
                            var7 = var3.bind(var4)(var2);
                            var3 = var7.dispatch;
                            var2 = {};
                            var8 = 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED';
                            var2.type = var8;
                            var8 = {};
                            var12 = _closure2_slot1;
                            var8.login = var12;
                            var11 = _closure2_slot2;
                            var8.password = var11;
                            var2.credentials = var8;
                            var2 = var3.bind(var7)(var2);
                            _fun41041_ip = 462;
                            continue _fun41041;
                        case 330:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 7;
                            var2 = var7[var2];
                            var7 = var3.bind(var4)(var2);
                            var3 = var7.dispatch;
                            var2 = {};
                            var8 = 'LOGIN_ACCOUNT_DISABLED';
                            var2.type = var8;
                            var8 = {};
                            var11 = _closure2_slot1;
                            var8.login = var11;
                            var10 = _closure2_slot2;
                            var8.password = var10;
                            var2.credentials = var8;
                            var2 = var3.bind(var7)(var2);
                            _fun41041_ip = 462;
                            continue _fun41041;
                        case 397:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 7;
                            var2 = var7[var2];
                            var7 = var3.bind(var4)(var2);
                            var3 = var7.dispatch;
                            var2 = {};
                            var8 = 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION';
                            var2.type = var8;
                            var8 = {};
                            var10 = _closure2_slot1;
                            var8.login = var10;
                            var9 = _closure2_slot2;
                            var8.password = var9;
                            var2.credentials = var8;
                            var2 = var3.bind(var7)(var2);
                        case 462:
                            throw var0;
                        case 464:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var7 = 'LOGIN_SUSPENDED_USER';
                            var1.type = var7;
                            var5 = var5.body;
                            var6 = var6 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun41041_ip = 519;
                                continue _fun41041
                            }
                        case 513:
                            var4 = var5.suspended_user_token;
                        case 519:
                            var1.suspendedUserToken = var4;
                            var1 = var2.bind(var3)(var1);
                            throw var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3.login = var7;
    var7 = function arg0() {
        _fun41042: for (var _fun41042_ip = 0;;) switch (_fun41042_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var _closure2_slot0 = var2;
                var11 = var1.code;
                var10 = var1.ticket;
                var9 = var1.source;
                var8 = var1.giftCodeSKUId;
                var2 = var1.isMultiAccount;
                var _closure2_slot1 = var2;
                var13 = var1.mfaType;
                var6 = var1.loginInstanceId;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 11;
                var1 = var3[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var1);
                var2 = var3.post;
                var1 = {
                    'url': null,
                    'body': null,
                    'retries': 2,
                    'oldFormErrors': true,
                    'trackedActionData': null,
                    'rejectWithError': false
                };
                var12 = _closure1_slot9;
                var4 = var12.LOGIN_MFA;
                var4 = var4.bind(var12)(var13);
                var1.url = var4;
                var4 = {};
                var4.code = var11;
                var4.ticket = var10;
                var4.login_source = var9;
                var4.gift_code_sku_id = var8;
                var8 = null;
                if (!(var8 == var6)) {
                    _fun41042_ip = 163;
                    continue _fun41042
                }
            case 149:
                var9 = _closure1_slot7;
                var8 = var9.getLoginInstanceId;
                var6 = var8.bind(var9)();
            case 163:
                var4.login_instance_id = var6;
                var1.body = var4;
                var4 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 12;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.USER_LOGIN_MFA;
                var4.event = var5;
                var1.trackedActionData = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun41043: for (var _fun41043_ip = 0;;) switch (_fun41043_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun41043_ip = 76;
                                continue _fun41043
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'LOGIN_SUCCESS';
                            var2.type = var5;
                            var5 = var0.body;
                            var5 = var5.token;
                            var2.token = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun41043_ip = 102;
                            continue _fun41043;
                        case 76:
                            var2 = _closure2_slot0;
                            var1 = var2.switchAccountToken;
                            var0 = var0.body;
                            var0 = var0.token;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    _fun41044: for (var _fun41044_ip = 0;;) switch (_fun41044_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.body;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun41044_ip = 92;
                                continue _fun41044
                            }
                        case 14:
                            var1 = var0.body;
                            var1 = var1.suspended_user_token;
                            if (!(var2 != var1)) {
                                _fun41044_ip = 92;
                                continue _fun41044
                            }
                        case 29:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.dispatch;
                            var3 = {};
                            var6 = 'LOGIN_SUSPENDED_USER';
                            var3.type = var6;
                            var6 = var0.body;
                            var6 = var6.suspended_user_token;
                            var3.suspendedUserToken = var6;
                            var3 = var4.bind(var5)(var3);
                            return var1;
                        case 92:
                            var1 = var0.body;
                            var3 = var2 == var1;
                            var2 = undefined;
                            if (var3) {
                                _fun41044_ip = 111;
                                continue _fun41044
                            }
                        case 106:
                            var2 = var1.code;
                        case 111:
                            var1 = _closure1_slot12;
                            var1 = var1.MFA_INVALID_CODE;
                            if (!(var2 !== var1)) {
                                _fun41044_ip = 130;
                                continue _fun41044
                            }
                        case 128:
                            throw var0;
                        case 130:
                            var1 = global;
                            var2 = var1.Error;
                            var0 = var0.body;
                            var7 = var0.message;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.loginMFAv2 = var7;
    var7 = function arg0() {
        _fun41045: for (var _fun41045_ip = 0;;) switch (_fun41045_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var _closure2_slot0 = var2;
                var2 = var1.authenticateFunc;
                var _closure2_slot1 = var2;
                var3 = var1.conditionalMediationAbortController;
                var2 = var1.source;
                var _closure2_slot2 = var2;
                var1 = var1.giftCodeSKUId;
                var _closure2_slot3 = var1;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun41045_ip = 72;
                    continue _fun41045
                }
            case 55:
                var2 = var3.abort;
                var1 = 'Starting non-conditional mediation';
                var1 = var2.bind(var3)(var1);
            case 72:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 7;
                var2 = var4[var2];
                var3 = undefined;
                var6 = var5.bind(var3)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var7 = 'PASSWORDLESS_START';
                var2.type = var7;
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot0;
                var1 = 14;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchWebAuthnPasswordlessChallenge;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var3 = var1.challenge;
                    var1 = var1.ticket;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot0;
                        var1 = var2.loginWebAuthn;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var0.ticket = var4;
                        var4 = arg0;
                        var0.credential = var4;
                        var4 = _closure2_slot2;
                        var0.source = var4;
                        var3 = _closure2_slot3;
                        var0.giftCodeSKUId = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'PASSWORDLESS_FAILURE';
                    var1.type = var4;
                    var1.error = var0;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.authenticatePasswordless = var7;
    var7 = function arg0() {
        var1 = arg0;
        var10 = var1.ticket;
        var11 = var1.credential;
        var9 = var1.source;
        var6 = var1.giftCodeSKUId;
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var1 = 11;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.WEBAUTHN_CONDITIONAL_UI_LOGIN;
        var1.url = var4;
        var4 = {};
        var4.credential = var11;
        var4.ticket = var10;
        var4.source = var9;
        var4.giftCodeSKUId = var6;
        var1.body = var4;
        var4 = 1;
        var1.retries = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_LOGIN_PASSWORDLESS;
        var4.event = var5;
        var1.trackedActionData = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var4 = var0.token;
            var9 = var0.user_id;
            var8 = var0.required_actions;
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 7;
            var5 = var3[var1];
            var0 = undefined;
            var7 = var2.bind(var0)(var5);
            var6 = var7.dispatch;
            var5 = {};
            var10 = 'LOGIN_ATTEMPTED';
            var5.type = var10;
            var5.user_id = var9;
            var5.required_actions = var8;
            var5 = var6.bind(var7)(var5);
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'LOGIN_SUCCESS';
            var1.type = var5;
            var1.token = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function(arg0) { // Environment: var0
            _fun41051: for (var _fun41051_ip = 0;;) switch (_fun41051_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.body;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun41051_ip = 92;
                        continue _fun41051
                    }
                case 14:
                    var1 = var0.body;
                    var1 = var1.suspended_user_token;
                    if (!(var2 != var1)) {
                        _fun41051_ip = 92;
                        continue _fun41051
                    }
                case 29:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'LOGIN_SUSPENDED_USER';
                    var2.type = var5;
                    var5 = var0.body;
                    var5 = var5.suspended_user_token;
                    var2.suspendedUserToken = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 92:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'PASSWORDLESS_FAILURE';
                    var1.type = var4;
                    var1.error = var0;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.loginWebAuthn = var7;
    var7 = function arg0() {
        _fun41052: for (var _fun41052_ip = 0;;) switch (_fun41052_ip) {
            case 0:
                var1 = arguments[1];
                var2 = this;
                var _closure2_slot0 = var2;
                var2 = arg0;
                var _closure2_slot1 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun41052_ip = 27;
                    continue _fun41052
                }
            case 25:
                var1 = true;
            case 27:
                var _closure2_slot2 = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 7;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'LOGIN';
                var1.type = var4;
                var1 = var2.bind(var3)(var1);
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var2 = var0.setImmediate;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun41054: for (var _fun41054_ip = 0;;) switch (_fun41054_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.dispatch;
                                var2 = {};
                                var1 = 'LOGIN_SUCCESS';
                                var2.type = var1;
                                var5 = _closure2_slot1;
                                var2.token = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure2_slot2;
                                if (!var2) {
                                    _fun41054_ip = 83;
                                    continue _fun41054
                                }
                            case 64:
                                var3 = _closure2_slot0;
                                var2 = var3.startSession;
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var3)(var1);
                            case 83:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var3.loginToken = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41057: for (var _fun41057_ip = 0;;) switch (_fun41057_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41057_ip = 366;
                            continue _fun41057
                        }
                    case 10:
                        var7 = undefined;
                        var4 = undefined;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var2 = 7;
                        var1 = var1[var2];
                        var6 = var3.bind(var7)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var8 = 'LOGIN';
                        var1.type = var8;
                        var1 = var3.bind(var6)(var1);
                    case 57: // try_start_0
                        var3 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var1 = 11;
                        var1 = var13[var1];
                        var8 = var3.bind(var7)(var1);
                        var6 = var8.post;
                        var1 = {};
                        var3 = _closure1_slot9;
                        var3 = var3.ONE_TIME_LOGIN;
                        var1.url = var3;
                        var9 = {};
                        var10 = _closure2_slot0;
                        var9.ticket = var10;
                        var1.body = var9;
                        var9 = true;
                        var1.oldFormErrors = var9;
                        var10 = {};
                        var12 = _closure1_slot0;
                        var11 = 12;
                        var11 = var13[var11];
                        var11 = var12.bind(var7)(var11);
                        var11 = var11.NetworkActionNames;
                        var11 = var11.USER_ONE_TIME_LOGIN;
                        var10.event = var11;
                        var1.trackedActionData = var10;
                        var1.rejectWithError = var9;
                        var1 = var6.bind(var8)(var1);
                        SaveGenerator(address = 177);
                    case 175:
                        return var1;
                    case 177:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun41057_ip = 273;
                            continue _fun41057
                        }
                    case 183:
                        var6 = var1.body;
                        var6 = var6.token;
                        var4 = var6;
                        if (var6) {
                            _fun41057_ip = 236;
                            continue _fun41057
                        }
                    case 200:
                        var6 = global;
                        var9 = var6.Error;
                        var6 = var9.prototype;
                        var8 = Object.create(var6, {
                            constructor: {
                                value: var9
                            }
                        });
                        var15 = 'No token in response';
                        var16 = var8;
                        var6 = new var16[var9](var15, var14);
                        var6 = var6 instanceof Object ? var6 : var8;
                        throw var6;
                    case 236:
                        var9 = _closure2_slot1;
                        var8 = var9.loginToken;
                        var6 = var4;
                        var3 = false;
                        var3 = var8.bind(var9)(var6, var3);
                        SaveGenerator(address = 261);
                    case 259:
                        return var3;
                    case 261:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun41057_ip = 270;
                            continue _fun41057
                        }
                    case 267: // try_end0
                        return var4;
                    case 270:
                        return var3;
                    case 273:
                        return var1;
                    case 276: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = var8[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'LOGIN_FAILURE';
                        var2.type = var6;
                        var6 = _closure1_slot0;
                        var5 = 13;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.V6OrEarlierAPIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = var6;
                        var15 = var1;
                        var5 = new var16[var5](var15, var14);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 366:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.oneTimeLogin = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'LOGIN_RESET';
        var1.type = var4;
        var4 = arg0;
        var1.isMultiAccount = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.loginReset = var7;
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'LOGIN_STATUS_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.loginStatusReset = var7;
    var7 = function arg0() {
        var2 = _closure1_slot19;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.logoutInternal = var7;
    var7 = function arg0() {
        _fun41061: for (var _fun41061_ip = 0;;) switch (_fun41061_ip) {
            case 0:
                var6 = arg0;
                var1 = arguments[1];
                var10 = arguments[2];
                var _closure2_slot0 = var6;
                var11 = undefined;
                if (!(var1 === var11)) {
                    _fun41061_ip = 34;
                    continue _fun41061
                }
            case 21:
                var2 = _closure1_slot13;
                var1 = var2.DEFAULT_LOGGED_OUT;
            case 34:
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var10;
                var2 = _closure1_slot1;
                var9 = _closure1_slot3;
                var1 = 11;
                var1 = var9[var1];
                var3 = var2.bind(var11)(var1);
                var2 = var3.post;
                var1 = {};
                var4 = _closure1_slot9;
                var4 = var4.LOGOUT;
                var1.url = var4;
                var4 = {};
                var5 = _closure1_slot15;
                var5 = var5.bind(var11)();
                var4.provider = var5;
                var7 = _closure1_slot0;
                var5 = 15;
                var12 = var9[var5];
                var12 = var7.bind(var11)(var12);
                var14 = var12.Storage;
                var13 = var14.get;
                var12 = _closure1_slot10;
                var12 = var13.bind(var14)(var12);
                var4.token = var12;
                var12 = _closure1_slot14;
                var4.voip_provider = var12;
                var5 = var9[var5];
                var5 = var7.bind(var11)(var5);
                var13 = var5.Storage;
                var12 = var13.get;
                var5 = _closure1_slot11;
                var5 = var12.bind(var13)(var5);
                var4.voip_token = var5;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = {};
                var5 = 12;
                var5 = var9[var5];
                var5 = var7.bind(var11)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.USER_LOGOUT;
                var4.event = var5;
                var5 = {};
                var5.logout_source = var6;
                var4.properties = var5;
                var1.trackedActionData = var4;
                var7 = null;
                var4 = var7 != var10;
                if (!var4) {
                    _fun41061_ip = 322;
                    continue _fun41061
                }
            case 260:
                var5 = {};
                var6 = {};
                var9 = _closure1_slot2;
                var12 = _closure1_slot3;
                var8 = 16;
                var8 = var12[var8];
                var9 = var9.bind(var11)(var8);
                var8 = var9.getToken;
                var8 = var8.bind(var9)(var10);
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun41061_ip = 309;
                    continue _fun41061
                }
            case 306:
                var7 = var8;
            case 309:
                var6.authorization = var7;
                var5.headers = var6;
                var4 = var5;
            case 322:
                var16 = var1;
                var15 = var4;
                var4 = copyDataProperties(var16, var15);
                var5 = false;
                var4 = 'rejectWithError';
                var1[var4] = var5;
                var2 = var2.bind(var3)(var1);
                var1 = var2.finally;
                var0 = function() { // Environment: var0
                    _fun41062: for (var _fun41062_ip = 0;;) switch (_fun41062_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun41062_ip = 41;
                                continue _fun41062
                            }
                        case 16:
                            var3 = _closure2_slot2;
                            var4 = _closure1_slot7;
                            var2 = var4.getId;
                            var2 = var2.bind(var4)();
                            var1 = var3 !== var2;
                        case 41:
                            if (var1) {
                                _fun41062_ip = 67;
                                continue _fun41062
                            }
                        case 44:
                            var3 = _closure1_slot20;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.logout = var7;
    var7 = function arg0() {
        _fun41063: for (var _fun41063_ip = 0;;) switch (_fun41063_ip) {
            case 0:
                var4 = arg0;
                var7 = arguments[1];
                var3 = this;
                var _closure2_slot0 = var4;
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun41063_ip = 23;
                    continue _fun41063
                }
            case 21:
                var7 = true;
            case 23:
                var5 = _closure1_slot7;
                var2 = var5.getToken;
                var2 = var2.bind(var5)();
                var9 = _closure1_slot16;
                var8 = var9.log;
                var5 = {};
                var10 = null;
                var10 = var10 != var2;
                var5.wasLoggedIn = var10;
                var2 = var4 !== var2;
                var5.tokenHasChanged = var2;
                var2 = 'Switching accounts';
                var2 = var8.bind(var9)(var2, var5);
                var5 = _closure1_slot19;
                var1 = {};
                var2 = true;
                var1.isSwitchingAccount = var2;
                var1.goHomeAfterSwitching = var7;
                var1 = var5.bind(var6)(var1);
                var1 = var3.loginToken;
                var2 = var1.bind(var3)(var4, var2);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var0 = var2.getToken;
                    var2 = var0.bind(var2)();
                    var0 = _closure2_slot0;
                    var0 = var0 === var2;
                    var4 = _closure1_slot16;
                    var3 = var4.log;
                    var2 = {};
                    var2.isCorrectToken = var0;
                    var1 = 'Switched accounts finished';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.switchAccountToken = var7;
    var7 = function arg0() {
        _fun41065: for (var _fun41065_ip = 0;;) switch (_fun41065_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun41065_ip = 31;
                    continue _fun41065
                }
            case 18:
                var2 = _closure1_slot13;
                var1 = var2.DEFAULT_LOGGED_OUT;
            case 31:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var4 = _closure1_slot9;
                var4 = var4.ME;
                var1.url = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot20;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.verifySSOToken = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41069: for (var _fun41069_ip = 0;;) switch (_fun41069_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41069_ip = 209;
                            continue _fun41069
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var1 = 11;
                        var1 = var9[var1];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.post;
                        var1 = {};
                        var6 = _closure1_slot9;
                        var6 = var6.VERIFY;
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure2_slot0;
                        var6.token = var7;
                        var1.body = var6;
                        var6 = {};
                        var8 = _closure1_slot0;
                        var7 = 12;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.NetworkActionNames;
                        var7 = var7.USER_VERIFY;
                        var6.event = var7;
                        var1.trackedActionData = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 130);
                    case 128:
                        return var1;
                    case 130:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41069_ip = 206;
                            continue _fun41069
                        }
                    case 136:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 7;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'LOGIN_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var5 = var5.token;
                        var2.token = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.body;
                        var2 = var2.user_id;
                        return var2;
                    case 206:
                        return var1;
                    case 209:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.verify = var7;
    var7 = function arg0() {
        var1 = _closure1_slot1;
        var7 = _closure1_slot3;
        var0 = 11;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot9;
        var3 = var3.AUTHORIZE_PAYMENT;
        var0.url = var3;
        var3 = {};
        var5 = arg0;
        var3.token = var5;
        var0.body = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 12;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.AUTHORIZE_PAYMENT;
        var3.event = var4;
        var0.trackedActionData = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.authorizePayment = var7;
    var7 = function arg0() {
        var1 = _closure1_slot1;
        var7 = _closure1_slot3;
        var0 = 11;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot9;
        var3 = var3.AUTHORIZE_IP;
        var0.url = var3;
        var3 = {};
        var5 = arg0;
        var3.token = var5;
        var0.body = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 12;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.AUTHORIZE_IP;
        var3.event = var4;
        var0.trackedActionData = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.authorizeIPAddress = var7;
    var7 = function() {
        var1 = _closure1_slot1;
        var7 = _closure1_slot3;
        var0 = 11;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot9;
        var3 = var3.VERIFY_RESEND;
        var0.url = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 12;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.USER_VERIFY_RESEND;
        var3.event = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.verifyResend = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41075: for (var _fun41075_ip = 0;;) switch (_fun41075_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41075_ip = 567;
                            continue _fun41075
                        }
                    case 10:
                        var4 = undefined;
                        var13 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var12 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var5 = 7;
                        var2 = var1[var5];
                        var14 = var12.bind(var4)(var2);
                        var12 = var14.dispatch;
                        var2 = {};
                        var15 = 'LOGIN';
                        var2.type = var15;
                        var2 = var12.bind(var14)(var2);
                        var2 = {};
                        var14 = _closure2_slot0;
                        var2.token = var14;
                        var14 = _closure2_slot1;
                        var2.password = var14;
                        var12 = _closure2_slot2;
                        var2.source = var12;
                        var13 = var2;
                        var2 = _closure1_slot0;
                        var14 = 15;
                        var1 = var1[var14];
                        var1 = var2.bind(var4)(var1);
                        var12 = var1.Storage;
                        var2 = var12.get;
                        var1 = _closure1_slot10;
                        var2 = var2.bind(var12)(var1);
                        var1 = _closure1_slot15;
                        var15 = var1.bind(var4)();
                        var12 = null;
                        var1 = var12 != var15;
                        if (!var1) {
                            _fun41075_ip = 160;
                            continue _fun41075
                        }
                    case 156:
                        var1 = var12 != var2;
                    case 160:
                        if (!var1) {
                            _fun41075_ip = 178;
                            continue _fun41075
                        }
                    case 163:
                        var1 = var13;
                        var1.push_provider = var15;
                        var1.push_token = var2;
                    case 178:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var14];
                        var1 = var2.bind(var4)(var1);
                        var14 = var1.Storage;
                        var2 = var14.get;
                        var1 = _closure1_slot11;
                        var2 = var2.bind(var14)(var1);
                        var1 = _closure1_slot14;
                        var1 = var12 != var1;
                        if (!var1) {
                            _fun41075_ip = 230;
                            continue _fun41075
                        }
                    case 226:
                        var1 = var12 != var2;
                    case 230:
                        if (!var1) {
                            _fun41075_ip = 252;
                            continue _fun41075
                        }
                    case 233:
                        var1 = var13;
                        var12 = _closure1_slot14;
                        var1.push_voip_provider = var12;
                        var1.push_voip_token = var2;
                    case 252: // try_start_0
                        var2 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var1 = 11;
                        var1 = var16[var1];
                        var12 = var2.bind(var4)(var1);
                        var2 = var12.post;
                        var1 = {};
                        var14 = _closure1_slot9;
                        var14 = var14.RESET_PASSWORD;
                        var1.url = var14;
                        var1.body = var13;
                        var13 = true;
                        var1.oldFormErrors = var13;
                        var13 = {};
                        var15 = _closure1_slot0;
                        var14 = 12;
                        var14 = var16[var14];
                        var14 = var15.bind(var4)(var14);
                        var14 = var14.NetworkActionNames;
                        var14 = var14.USER_RESET_PASSWORD;
                        var13.event = var14;
                        var1.trackedActionData = var13;
                        var13 = false;
                        var1.rejectWithError = var13;
                        var1 = var2.bind(var12)(var1);
                        SaveGenerator(address = 360);
                    case 358:
                        return var1;
                    case 360:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41075_ip = 474;
                            continue _fun41075
                        }
                    case 366:
                        var2 = var1.body;
                        var12 = var2.mfa;
                        var11 = var2.sms;
                        var10 = var2.webauthn;
                        var9 = var2.ticket;
                        var8 = var2.token;
                        var7 = var2.backup;
                        var6 = var2.totp;
                        var2 = {};
                        var13 = _closure1_slot18;
                        if (var12) {
                            _fun41075_ip = 430;
                            continue _fun41075
                        }
                    case 422:
                        var12 = var13.SUCCESS;
                        _fun41075_ip = 436;
                        continue _fun41075;
                    case 430:
                        var12 = var13.MFA;
                    case 436:
                        var2.result = var12;
                        var2.sms = var11;
                        var2.webauthn = var10;
                        var2.ticket = var9;
                        var2.token = var8;
                        var2.backup = var7;
                        var2.totp = var6;
                    case 471: // try_end0
                        return var2;
                    case 474:
                        return var1;
                    case 477: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var1 = var2[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.V6OrEarlierAPIError;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var18 = var6;
                        var17 = var7;
                        var1 = new var18[var1](var17, var16);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var3 = _closure1_slot1;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'LOGIN_FAILURE';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 567:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.resetPassword = var7;
    var7 = function arg0() {
        var1 = arg0;
        var2 = var1.method;
        var _closure2_slot0 = var2;
        var2 = var1.code;
        var _closure2_slot1 = var2;
        var2 = var1.ticket;
        var _closure2_slot2 = var2;
        var2 = var1.password;
        var _closure2_slot3 = var2;
        var2 = var1.token;
        var _closure2_slot4 = var2;
        var1 = var1.source;
        var _closure2_slot5 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41078: for (var _fun41078_ip = 0;;) switch (_fun41078_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41078_ip = 245;
                            continue _fun41078
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var1 = 7;
                        var1 = var9[var1];
                        var8 = undefined;
                        var4 = var2.bind(var8)(var1);
                        var3 = var4.dispatch;
                        var1 = {};
                        var5 = 'LOGIN_MFA';
                        var1.type = var5;
                        var1 = var3.bind(var4)(var1);
                        var1 = 11;
                        var1 = var9[var1];
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.RESET_PASSWORD;
                        var1.url = var4;
                        var4 = {};
                        var7 = _closure2_slot1;
                        var4.code = var7;
                        var7 = _closure2_slot2;
                        var4.ticket = var7;
                        var7 = _closure2_slot3;
                        var4.password = var7;
                        var7 = _closure2_slot4;
                        var4.token = var7;
                        var7 = _closure2_slot5;
                        var4.source = var7;
                        var5 = _closure2_slot0;
                        var4.method = var5;
                        var1.body = var4;
                        var4 = true;
                        var1.oldFormErrors = var4;
                        var5 = {};
                        var7 = _closure1_slot0;
                        var6 = 12;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.NetworkActionNames;
                        var6 = var6.USER_RESET_PASSWORD;
                        var5.event = var6;
                        var6 = {};
                        var6.mfa = var4;
                        var5.properties = var6;
                        var1.trackedActionData = var5;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 222);
                    case 220:
                        return var1;
                    case 222:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41078_ip = 242;
                            continue _fun41078
                        }
                    case 228:
                        var2 = var1.body;
                        var2 = var2.token;
                        return var2;
                    case 242:
                        return var1;
                    case 245:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.resetPasswordMFAv2 = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41081: for (var _fun41081_ip = 0;;) switch (_fun41081_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41081_ip = 416;
                            continue _fun41081
                        }
                    case 10:
                        var3 = undefined;
                        var2 = undefined;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var4 = 7;
                        var5 = var5[var4];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'FORGOT_PASSWORD_REQUEST';
                        var5.type = var8;
                        var5 = var6.bind(var7)(var5);
                    case 57: // try_start_0
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var5 = 11;
                        var5 = var11[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.post;
                        var5 = {};
                        var8 = _closure1_slot9;
                        var8 = var8.FORGOT_PASSWORD;
                        var5.url = var8;
                        var8 = {};
                        var9 = _closure2_slot0;
                        var8.login = var9;
                        var5.body = var8;
                        var8 = true;
                        var5.oldFormErrors = var8;
                        var8 = {};
                        var10 = _closure1_slot0;
                        var9 = 12;
                        var9 = var11[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.NetworkActionNames;
                        var9 = var9.FORGOT_PASSWORD;
                        var8.event = var9;
                        var5.trackedActionData = var8;
                        var8 = false;
                        var5.rejectWithError = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 179);
                    case 177:
                        return var5;
                    case 179:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun41081_ip = 236;
                            continue _fun41081
                        }
                    case 185:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var4];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'FORGOT_PASSWORD_SENT';
                        var6.type = var9;
                        var6 = var7.bind(var8)(var6);
                        var6 = var5.body;
                        var6 = var6.method;
                    case 233: // try_end0
                        return var6;
                    case 236:
                        return var5;
                    case 239: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var5 = 13;
                        var5 = var8[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.V6OrEarlierAPIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = var6;
                        var12 = var7;
                        var5 = new var13[var5](var12, var11);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2 = var5;
                        var6 = var5.code;
                        var5 = _closure1_slot12;
                        var5 = var5.PHONE_VERIFICATION_REQUIRED;
                        if (!(var6 !== var5)) {
                            _fun41081_ip = 355;
                            continue _fun41081
                        }
                    case 312:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var4];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'LOGIN_FAILURE';
                        var5.type = var8;
                        var5.error = var2;
                        var5 = var6.bind(var7)(var5);
                        throw var2;
                    case 355:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var1 = var1[var4];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION';
                        var1.type = var4;
                        var4 = {};
                        var5 = _closure2_slot0;
                        var4.login = var5;
                        var1.credentials = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 416:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.forgotPassword = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FINGERPRINT';
        var1.type = var4;
        var4 = arg0;
        var1.fingerprint = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.setFingerprint = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EXPERIMENTS_FETCH';
        var1.type = var4;
        var4 = arg0;
        var1.withGuildExperiments = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.getExperiments = var7;
    var7 = function() {
        _fun41084: for (var _fun41084_ip = 0;;) switch (_fun41084_ip) {
            case 0:
                var3 = _closure1_slot17;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun41084_ip = 152;
                    continue _fun41084
                }
            case 18:
                var2 = global;
                var5 = var2.clearTimeout;
                var3 = _closure1_slot4;
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var5 = var2.setTimeout;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'SET_CONSENT_REQUIRED',
                        'consentRequired': true
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = 5000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure1_slot4 = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 17;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {
                    'url': null,
                    'retries': 2,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var5 = _closure1_slot9;
                var5 = var5.AUTH_LOCATION_METADATA;
                var2.url = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var0
                    _fun41086: for (var _fun41086_ip = 0;;) switch (_fun41086_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = global;
                            var4 = var0.clearTimeout;
                            var3 = _closure1_slot4;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = _closure1_slot8;
                            var3 = var4.getAuthenticationConsentRequired;
                            var3 = var3.bind(var4)();
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun41086_ip = 133;
                                continue _fun41086
                            }
                        case 45:
                            var5 = var4 == var2;
                            var3 = undefined;
                            if (var5) {
                                _fun41086_ip = 76;
                                continue _fun41086
                            }
                        case 54:
                            var5 = var2.body;
                            var6 = var4 == var5;
                            var3 = undefined;
                            if (var6) {
                                _fun41086_ip = 76;
                                continue _fun41086
                            }
                        case 68:
                            var3 = var5.consent_required;
                        case 76:
                            var7 = var4 == var3;
                            if (var7) {
                                _fun41086_ip = 86;
                                continue _fun41086
                            }
                        case 83:
                            var7 = var3;
                        case 86:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var3 = 7;
                            var3 = var6[var3];
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.dispatch;
                            var3 = {};
                            var8 = 'SET_CONSENT_REQUIRED';
                            var3.type = var8;
                            var3.consentRequired = var7;
                            var3 = var5.bind(var6)(var3);
                        case 133:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var3 = 7;
                            var3 = var6[var3];
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.dispatch;
                            var3 = {};
                            var7 = 'SET_LOCATION_METADATA';
                            var3.type = var7;
                            var7 = var4 == var2;
                            var8 = undefined;
                            if (var7) {
                                _fun41086_ip = 197;
                                continue _fun41086
                            }
                        case 177:
                            var7 = var2.body;
                            var9 = var4 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun41086_ip = 197;
                                continue _fun41086
                            }
                        case 191:
                            var8 = var7.country_code;
                        case 197:
                            var9 = var4 != var8;
                            var7 = undefined;
                            if (!var9) {
                                _fun41086_ip = 209;
                                continue _fun41086
                            }
                        case 206:
                            var7 = var8;
                        case 209:
                            var3.countryCode = var7;
                            var3 = var5.bind(var6)(var3);
                            _closure1_slot17 = var4;
                            var5 = var4 == var2;
                            var3 = undefined;
                            if (var5) {
                                _fun41086_ip = 252;
                                continue _fun41086
                            }
                        case 232:
                            var5 = var2.body;
                            var6 = var4 == var5;
                            var3 = undefined;
                            if (var6) {
                                _fun41086_ip = 252;
                                continue _fun41086
                            }
                        case 246:
                            var3 = var5.promotional_email_opt_in;
                        case 252:
                            if (!(var4 != var3)) {
                                _fun41086_ip = 311;
                                continue _fun41086
                            }
                        case 256:
                            var2 = var2.body;
                            var3 = var2.promotional_email_opt_in;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var4 = var3.required;
                            var1.required = var4;
                            var4 = var3.pre_checked;
                            var1.checked = var4;
                            var3 = var3.pre_checked;
                            var1.preChecked = var3;
                            var1 = var2.bind(var0)(var1);
                        case 311:
                            return var0;
                    }
                };
                var0 = function() { // Environment: var0
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var1 = _closure1_slot4;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 7;
                    var1 = var4[var1];
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.dispatch;
                    var1 = {
                        'type': 'SET_CONSENT_REQUIRED',
                        'consentRequired': true
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = null;
                    _closure1_slot17 = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0);
                _closure1_slot17 = var0;
                _fun41084_ip = 156;
                continue _fun41084;
            case 152:
                var0 = _closure1_slot17;
            case 156:
                return var0;
        }
    };
    var3.getLocationMetadata = var7;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLOSE_SUSPENDED_USER';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.closeSuspendedUser = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/AuthenticationActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PasswordResetResult = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4522, 1216, 4523, 660, 4524, 3, 806, 3879, 1220, 4525, 4489, 481, 3309, 4529, 587, 804, 507, 2]);