// modules/phone/PhoneActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot6 = var1;
    var1 = {};
    var3 = 'user_action_required';
    var1.USER_ACTION_REQUIRED = var3;
    var3 = 'user_settings_update';
    var1.USER_SETTINGS_UPDATE = var3;
    var3 = 'guild_phone_required';
    var1.GUILD_PHONE_REQUIRED = var3;
    var3 = 'mfa_phone_update';
    var1.MFA_PHONE_UPDATE = var3;
    var3 = 'contact_sync';
    var1.CONTACT_SYNC = var3;
    var3 = {};
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PHONE_SET_COUNTRY_CODE';
        var1.type = var4;
        var4 = arg0;
        var1.countryCode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.setCountryCode = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.password = var4;
        var4 = arg1;
        var3.change_phone_reason = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.removePhone = var7;
    var7 = function arg0() {
        _fun60910: for (var _fun60910_ip = 0;;) switch (_fun60910_ip) {
            case 0:
                var3 = {};
                var1 = _closure1_slot4;
                var0 = var1.getFingerprint;
                var0 = var0.bind(var1)();
                var1 = null;
                var1 = var1 != var0;
                if (!var1) {
                    _fun60910_ip = 36;
                    continue _fun60910
                }
            case 28:
                var2 = '';
                var1 = var2 !== var0;
            case 36:
                if (!var1) {
                    _fun60910_ip = 45;
                    continue _fun60910
                }
            case 39:
                var3['X-Fingerprint'] = var0;
            case 45:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var4 = _closure1_slot6;
                var4 = var4.RESEND_PHONE;
                var0.url = var4;
                var0.headers = var3;
                var3 = {};
                var4 = arg0;
                var3.phone = var4;
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.resendCode = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.phone = var4;
        var4 = arg1;
        var3.change_phone_reason = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.beginAddPhone = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.phone_token = var4;
        var4 = arg1;
        var3.password = var4;
        var4 = arg2;
        var3.change_phone_reason = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.addPhone = var7;
    var7 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE_VERIFY_NO_PASSWORD;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.code = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.addPhoneWithoutPassword = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE_REVERIFY;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.phone = var4;
        var4 = arg1;
        var3.change_phone_reason = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.beginReverifyPhone = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.PHONE_REVERIFY;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.phone_token = var4;
        var4 = arg1;
        var3.password = var4;
        var4 = arg2;
        var3.change_phone_reason = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.reverifyPhone = var7;
    var7 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot6;
        var3 = var3.VERIFY_PHONE_FOR_TICKET;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.token = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validatePhoneForSupport = var7;
    var4 = function arg0, arg1() {
        _fun60917: for (var _fun60917_ip = 0;;) switch (_fun60917_ip) {
            case 0:
                var3 = arguments[2];
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun60917_ip = 30;
                    continue _fun60917
                }
            case 28:
                var3 = true;
            case 30:
                var _closure2_slot2 = var3;
                if (!(var2 === var1)) {
                    _fun60917_ip = 40;
                    continue _fun60917
                }
            case 38:
                var2 = false;
            case 40:
                var _closure2_slot3 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60919: for (var _fun60919_ip = 0;;) switch (_fun60919_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60919_ip = 283;
                                    continue _fun60919
                                }
                            case 10:
                                var7 = {};
                                var2 = _closure1_slot4;
                                var1 = var2.getFingerprint;
                                var1 = var1.bind(var2)();
                                var2 = null;
                                var2 = var2 != var1;
                                if (!var2) {
                                    _fun60919_ip = 46;
                                    continue _fun60919
                                }
                            case 38:
                                var3 = '';
                                var2 = var3 !== var1;
                            case 46:
                                if (!var2) {
                                    _fun60919_ip = 55;
                                    continue _fun60919
                                }
                            case 49:
                                var7['X-Fingerprint'] = var1;
                            case 55:
                                var1 = _closure2_slot3;
                                if (!var1) {
                                    _fun60919_ip = 75;
                                    continue _fun60919
                                }
                            case 65:
                                var1 = '';
                                var7.authorization = var1;
                            case 75:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var1 = 6;
                                var1 = var10[var1];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var1);
                                var3 = var6.post;
                                var1 = {};
                                var8 = _closure1_slot6;
                                var8 = var8.VERIFY_PHONE;
                                var1.url = var8;
                                var1.headers = var7;
                                var7 = {};
                                var8 = _closure2_slot0;
                                var7.phone = var8;
                                var8 = _closure2_slot1;
                                var7.code = var8;
                                var1.body = var7;
                                var7 = true;
                                var1.oldFormErrors = var7;
                                var7 = {};
                                var9 = _closure1_slot0;
                                var8 = 7;
                                var8 = var10[var8];
                                var8 = var9.bind(var4)(var8);
                                var8 = var8.NetworkActionNames;
                                var8 = var8.USER_VERIFY_PHONE;
                                var7.event = var8;
                                var1.trackedActionData = var7;
                                var7 = false;
                                var1.rejectWithError = var7;
                                var1 = var3.bind(var6)(var1);
                                SaveGenerator(address = 209);
                            case 207:
                                return var1;
                            case 209:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun60919_ip = 280;
                                    continue _fun60919
                                }
                            case 215:
                                var2 = _closure2_slot2;
                                if (!var2) {
                                    _fun60919_ip = 272;
                                    continue _fun60919
                                }
                            case 222:
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 4;
                                var2 = var6[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var6 = 'MODAL_POP';
                                var2.type = var6;
                                var5 = _closure1_slot5;
                                var2.key = var5;
                                var2 = var3.bind(var4)(var2);
                            case 272:
                                var2 = var1.body;
                                return var2;
                            case 280:
                                return var1;
                            case 283:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.verifyPhone = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/PhoneActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ChangePhoneReason = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 7517, 660, 806, 507, 4491, 481, 2]);