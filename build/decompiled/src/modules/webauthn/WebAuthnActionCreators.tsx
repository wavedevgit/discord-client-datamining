// modules/webauthn/WebAuthnActionCreators.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41286: for (var _fun41286_ip = 0;;) switch (_fun41286_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41286_ip = 134;
                            continue _fun41286
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.WEBAUTHN_CONDITIONAL_UI_CHALLENGE;
                        var1.url = var4;
                        var4 = {};
                        var5 = '';
                        var4.authorization = var5;
                        var1.headers = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41286_ip = 131;
                            continue _fun41286
                        }
                    case 99:
                        var3 = var1.body;
                        var2 = {};
                        var4 = var3.challenge;
                        var2.challenge = var4;
                        var3 = var3.ticket;
                        var2.ticket = var3;
                        return var2;
                    case 131:
                        return var1;
                    case 134:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41289: for (var _fun41289_ip = 0;;) switch (_fun41289_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41289_ip = 115;
                            continue _fun41289
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.WEBAUTHN_PASSWORDLESS_CHALLENGE;
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41289_ip = 112;
                            continue _fun41289
                        }
                    case 80:
                        var3 = var1.body;
                        var2 = {};
                        var4 = var3.challenge;
                        var2.challenge = var4;
                        var3 = var3.ticket;
                        var2.ticket = var3;
                        return var2;
                    case 112:
                        return var1;
                    case 115:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41292: for (var _fun41292_ip = 0;;) switch (_fun41292_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41292_ip = 120;
                            continue _fun41292
                        }
                    case 12:
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.del;
                        var2 = {};
                        var7 = _closure1_slot4;
                        var6 = var7.MFA_WEBAUTHN_CREDENTIAL;
                        var5 = var5.id;
                        var5 = var6.bind(var7)(var5);
                        var2.url = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.then;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'AUTHENTICATOR_DELETE';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.credential = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 108);
                    case 106:
                        return var1;
                    case 108:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41292_ip = 117;
                            continue _fun41292
                        }
                    case 114:
                        return var1;
                    case 117:
                        return var1;
                    case 120:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41296: for (var _fun41296_ip = 0;;) switch (_fun41296_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41296_ip = 249;
                            continue _fun41296
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.patch;
                        var1 = {};
                        var8 = _closure1_slot4;
                        var7 = var8.MFA_WEBAUTHN_CREDENTIAL;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = {};
                        var7 = arg1;
                        var6.name = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 98);
                    case 96:
                        return var1;
                    case 98:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun41296_ip = 246;
                            continue _fun41296
                        }
                    case 107:
                        var4 = var1.body;
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun41296_ip = 243;
                            continue _fun41296
                        }
                    case 121:
                        var4 = var1.body;
                        var6 = var4.last_used;
                        var6 = var5 == var6;
                        var5 = null;
                        if (var6) {
                            _fun41296_ip = 175;
                            continue _fun41296
                        }
                    case 141:
                        var6 = global;
                        var8 = var6.Date;
                        var10 = var4.last_used;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var11 = var7;
                        var6 = new var11[var8](var10, var9);
                        var5 = var6 instanceof Object ? var6 : var7;
                    case 175:
                        var6 = {};
                        var10 = var6;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        var4 = 'last_used';
                        var6[var4] = var5;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'AUTHENTICATOR_UPDATE';
                        var3.type = var7;
                        var3.credential = var6;
                        var3 = var4.bind(var5)(var3);
                    case 243:
                        return var2;
                    case 246:
                        return var1;
                    case 249:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41299: for (var _fun41299_ip = 0;;) switch (_fun41299_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41299_ip = 121;
                            continue _fun41299
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.MFA_WEBAUTHN_CREDENTIALS;
                        var1.url = var4;
                        var4 = {};
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41299_ip = 118;
                            continue _fun41299
                        }
                    case 86:
                        var3 = var1.body;
                        var2 = {};
                        var4 = var3.ticket;
                        var2.ticket = var4;
                        var3 = var3.challenge;
                        var2.challenge = var3;
                        return var2;
                    case 118:
                        return var1;
                    case 121:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun41302: for (var _fun41302_ip = 0;;) switch (_fun41302_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41302_ip = 252;
                            continue _fun41302
                        }
                    case 10:
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 4;
                        var1 = var9[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.post;
                        var1 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.MFA_WEBAUTHN_CREDENTIALS;
                        var1.url = var6;
                        var6 = {};
                        var7 = arg0;
                        var6.name = var7;
                        var7 = arg1;
                        var6.ticket = var7;
                        var7 = arg2;
                        var6.credential = var7;
                        var1.body = var6;
                        var6 = {};
                        var8 = _closure1_slot0;
                        var7 = 5;
                        var7 = var9[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.NetworkActionNames;
                        var7 = var7.WEBAUTHN_REGISTER;
                        var6.event = var7;
                        var1.trackedActionData = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun41302_ip = 249;
                            continue _fun41302
                        }
                    case 147:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var6 = var5[var3];
                        var8 = var4.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'AUTHENTICATOR_CREATE';
                        var6.type = var9;
                        var9 = var1.body;
                        var6.credential = var9;
                        var6 = var7.bind(var8)(var6);
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'MFA_ENABLE_SUCCESS';
                        var3.type = var6;
                        var6 = var1.body;
                        var6 = var6.backup_codes;
                        var3.codes = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 249:
                        return var1;
                    case 252:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/WebAuthnActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchWebAuthnConditionalChallenge = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchWebAuthnPasswordlessChallenge = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot4;
        var4 = var4.MFA_WEBAUTHN_CREDENTIALS;
        var1.url = var4;
        var4 = true;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            _fun41306: for (var _fun41306_ip = 0;;) switch (_fun41306_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.body;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun41306_ip = 88;
                        continue _fun41306
                    }
                case 14:
                    var2 = var0.body;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun41307: for (var _fun41307_ip = 0;;) switch (_fun41307_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.last_used;
                                var2 = null;
                                var0 = var2 == var0;
                                if (var0) {
                                    _fun41307_ip = 52;
                                    continue _fun41307
                                }
                            case 18:
                                var0 = global;
                                var4 = var0.Date;
                                var6 = var1.last_used;
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var7 = var3;
                                var0 = new var7[var4](var6, var5);
                                var2 = var0 instanceof Object ? var0 : var3;
                            case 52:
                                var0 = {};
                                var6 = var0;
                                var5 = var1;
                                var1 = copyDataProperties(var6, var5);
                                var1 = 'last_used';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var3 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'MFA_WEBAUTHN_CREDENTIALS_LOADED';
                    var0.type = var4;
                    var0.credentials = var3;
                    var0 = var1.bind(var2)(var0);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchWebAuthnCredentials = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {};
        var7 = _closure1_slot4;
        var6 = var7.MFA_WEBAUTHN_CREDENTIAL;
        var5 = var5.id;
        var5 = var6.bind(var7)(var5);
        var2.url = var5;
        var5 = true;
        var2.rejectWithError = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'AUTHENTICATOR_DELETE';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.credential = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deleteWebAuthnCredential = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteWebAuthnCredentialAsync = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.editWebAuthnCredential = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startRegisterWebAuthnCredential = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.finishRegisterWebAuthnCredential = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WEBAUTHN_TRIGGER_REGISTER';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.triggerWebAuthnRegister = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WEBAUTHN_CLEAR_REGISTER_TRIGGER';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearWebAuthnRegisterTrigger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 4525, 648, 2]);