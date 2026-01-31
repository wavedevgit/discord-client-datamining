// modules/auth/native/components/utils/useWithPostLoginRouting.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LoginStates;
    var _closure1_slot7 = var6;
    var3 = var3.AuthStates;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/useWithPostLoginRouting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useWithPostLoginRouting, environment: var1
        var8 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot5;
        var0 = var4.useState;
        var6 = var0.bind(var4)();
        var5 = _closure1_slot4;
        var0 = undefined;
        var3 = 2;
        var6 = var5.bind(var0)(var6, var3);
        var3 = 0;
        var5 = var6[var3];
        var _closure2_slot2 = var5;
        var3 = 1;
        var3 = var6[var3];
        var _closure2_slot3 = var3;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 5;
        var3 = var9[var3];
        var9 = var6.bind(var0)(var3);
        var6 = var9.useStateFromStoresObject;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var0 = {};
            var2 = _closure1_slot6;
            var1 = var2.getLoginStatus;
            var1 = var1.bind(var2)();
            var0.loginStatus = var1;
            return var0;
        };
        var2 = var6.bind(var9)(var3, var2);
        var6 = var2.loginStatus;
        var _closure2_slot4 = var6;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun60773: for (var _fun60773_ip = 0;;) switch (_fun60773_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var1 = var1.LOGGING_IN;
                    if (!(var2 !== var1)) {
                        _fun60773_ip = 64;
                        continue _fun60773
                    }
                case 26:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var1 = var1.FORGOT_PASSWORD;
                    if (!(var2 !== var1)) {
                        _fun60773_ip = 64;
                        continue _fun60773
                    }
                case 44:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun60773_ip = 698;
                    continue _fun60773;
                case 64:
                    var2 = _closure2_slot4;
                    var1 = _closure1_slot7;
                    var1 = var1.MFA_STEP;
                    if (!(var1 !== var2)) {
                        _fun60773_ip = 198;
                        continue _fun60773
                    }
                case 82:
                    var1 = _closure1_slot7;
                    var1 = var1.ACCOUNT_SCHEDULED_FOR_DELETION;
                    if (!(var1 !== var2)) {
                        _fun60773_ip = 160;
                        continue _fun60773
                    }
                case 96:
                    var1 = _closure1_slot7;
                    var1 = var1.ACCOUNT_DISABLED;
                    if (!(var1 !== var2)) {
                        _fun60773_ip = 160;
                        continue _fun60773
                    }
                case 110:
                    var1 = _closure1_slot7;
                    var1 = var1.LOGIN_AGE_GATE;
                    if (!(var1 === var2)) {
                        _fun60773_ip = 222;
                        continue _fun60773
                    }
                case 124:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var1 = _closure1_slot8;
                    var2 = var1.AGE_GATE_UNDERAGE;
                    var1 = {};
                    var6 = true;
                    var1.existingUser = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun60773_ip = 222;
                    continue _fun60773;
                case 160:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var1 = _closure1_slot8;
                    var2 = var1.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.handleLogin = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun60773_ip = 222;
                    continue _fun60773;
                case 198:
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = _closure1_slot8;
                    var1 = var1.MFA;
                    var1 = var2.bind(var3)(var1);
                case 222:
                    var2 = _closure2_slot4;
                    var1 = _closure1_slot7;
                    var1 = var1.PASSWORD_RECOVERY_PHONE_VERIFICATION;
                    if (!(var1 !== var2)) {
                        _fun60773_ip = 498;
                        continue _fun60773
                    }
                case 243:
                    var1 = _closure1_slot7;
                    var1 = var1.PHONE_IP_AUTHORIZATION;
                    if (!(var1 === var2)) {
                        _fun60773_ip = 683;
                        continue _fun60773
                    }
                case 260:
                    var8 = _closure1_slot6;
                    var1 = var8.getCredentials;
                    var1 = var1.bind(var8)();
                    var2 = var1.login;
                    var _closure3_slot0 = var2;
                    var1 = var1.password;
                    var _closure3_slot1 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var1 = _closure1_slot8;
                    var2 = var1.VERIFY_PHONE;
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 6;
                    var10 = var13[var6];
                    var9 = undefined;
                    var10 = var12.bind(var9)(var10);
                    var14 = var10.intl;
                    var11 = var14.string;
                    var10 = var13[var6];
                    var10 = var12.bind(var9)(var10);
                    var10 = var10.t;
                    var10 = var10.w55Oco;
                    var10 = var11.bind(var14)(var10);
                    var1.title = var10;
                    var10 = var13[var6];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6["0/ALaJ"];
                    var6 = var10.bind(var11)(var6);
                    var1.description = var6;
                    var6 = var8.getCredentials;
                    var6 = var6.bind(var8)();
                    var6 = var6.login;
                    var1.phone = var6;
                    var8 = _closure1_slot3;
                    var6 = function*(arg0) { // Environment: var5
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun60777: for (var _fun60777_ip = 0;;) switch (_fun60777_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun60777_ip = 143;
                                        continue _fun60777
                                    }
                                case 10:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.authorizeIPAddress;
                                    var1 = arg0;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 53);
                                case 51:
                                    return var1;
                                case 53:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun60777_ip = 140;
                                        continue _fun60777
                                    }
                                case 59:
                                    var5 = _closure2_slot0;
                                    var4 = var5.getState;
                                    var4 = var4.bind(var5)();
                                    var6 = var4.routes;
                                    var5 = var6.findIndex;
                                    var4 = function(arg0) { // Environment: var4
                                        var0 = arg0;
                                        var1 = var0.name;
                                        var0 = _closure1_slot8;
                                        var0 = var0.LOGIN;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var5 = var5.bind(var6)(var4);
                                    var4 = 0;
                                    if (!(!(var5 >= var4))) {
                                        _fun60777_ip = 122;
                                        continue _fun60777
                                    }
                                case 106:
                                    var6 = _closure2_slot0;
                                    var4 = var6.pop;
                                    var4 = var4.bind(var6)();
                                    _fun60777_ip = 137;
                                    continue _fun60777;
                                case 122:
                                    var4 = _closure2_slot0;
                                    var3 = var4.pop;
                                    var3 = var3.bind(var4)(var5);
                                case 137:
                                    return var2;
                                case 140:
                                    return var1;
                                case 143:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var _closure3_slot2 = var6;
                    var6 = function() { // Environment: var5
                        var0 = undefined;
                        var3 = _closure3_slot2;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1.onPhoneTokenReceived = var6;
                    var6 = function(arg0) { // Original name: onClose, environment: var5
                        _fun60780: for (var _fun60780_ip = 0;;) switch (_fun60780_ip) {
                            case 0:
                                var0 = arg0;
                                if (var0) {
                                    _fun60780_ip = 43;
                                    continue _fun60780
                                }
                            case 6:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.loginReset;
                                var0 = var0.bind(var1)();
                                _fun60780_ip = 97;
                                continue _fun60780;
                            case 43:
                                var2 = _closure3_slot1;
                                var1 = null;
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun60780_ip = 71;
                                    continue _fun60780
                                }
                            case 59:
                                var3 = _closure3_slot1;
                                var2 = '';
                                var1 = var2 !== var3;
                            case 71:
                                if (!var1) {
                                    _fun60780_ip = 97;
                                    continue _fun60780
                                }
                            case 74:
                                var3 = _closure2_slot1;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onClose = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun60773_ip = 683;
                    continue _fun60773;
                case 498:
                    var2 = _closure1_slot6;
                    var1 = var2.getCredentials;
                    var1 = var1.bind(var2)();
                    var6 = var1.login;
                    var4 = _closure2_slot0;
                    var3 = var4.replace;
                    var1 = _closure1_slot8;
                    var2 = var1.VERIFY_PHONE;
                    var1 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 6;
                    var8 = var12[var7];
                    var10 = undefined;
                    var8 = var11.bind(var10)(var8);
                    var13 = var8.intl;
                    var9 = var13.string;
                    var8 = var12[var7];
                    var8 = var11.bind(var10)(var8);
                    var8 = var8.t;
                    var8 = var8["+xqy3d"];
                    var8 = var9.bind(var13)(var8);
                    var1.title = var8;
                    var8 = var12[var7];
                    var8 = var11.bind(var10)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var12[var7];
                    var7 = var11.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.myKyqh;
                    var7 = var8.bind(var9)(var7);
                    var1.description = var7;
                    var1.phone = var6;
                    var6 = function(arg0) { // Original name: onPhoneTokenReceived, environment: var5
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 7;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = arg0;
                        var5 = var3.bind(var0)(var2);
                        var4 = _closure2_slot0;
                        var3 = var4.replace;
                        var1 = _closure1_slot8;
                        var2 = var1.EXTERNAL_LINK;
                        var1 = {};
                        var1.externalURL = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1.onPhoneTokenReceived = var6;
                    var5 = function() { // Original name: onClose, environment: var5
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.loginReset;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onClose = var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 683:
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 698:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1216, 660, 566, 1234, 7489, 4521, 2]);