// actions/HubActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 2;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot4;
        var3 = var3.HUB_WAITLIST_SIGNUP;
        var0.url = var3;
        var3 = {};
        var5 = arg0;
        var3.email = var5;
        var5 = arg1;
        var3.school = var5;
        var0.body = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 3;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.HUB_WAITLIST_SIGNUP;
        var3.event = var4;
        var4 = function arg0() {
            _fun80921: for (var _fun80921_ip = 0;;) switch (_fun80921_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var3 = var0 == var1;
                    var2 = undefined;
                    var4 = undefined;
                    if (var3) {
                        _fun80921_ip = 38;
                        continue _fun80921
                    }
                case 16:
                    var1 = var1.body;
                    var3 = var0 == var1;
                    var4 = undefined;
                    if (var3) {
                        _fun80921_ip = 38;
                        continue _fun80921
                    }
                case 30:
                    var4 = var1.email_domain;
                case 38:
                    var0 = var0 != var4;
                    var3 = false;
                    if (!var0) {
                        _fun80921_ip = 88;
                        continue _fun80921
                    }
                case 47:
                    var1 = var4.split;
                    var0 = '.';
                    var4 = var1.bind(var4)(var0);
                    var1 = var4.indexOf;
                    var0 = 'edu';
                    var1 = var1.bind(var4)(var0);
                    var0 = -1;
                    var3 = var0 !== var1;
                case 88:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.exact;
                    var0 = {};
                    var0.is_edu_email = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var3.properties = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.signup = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80924: for (var _fun80924_ip = 0;;) switch (_fun80924_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80924_ip = 189;
                            continue _fun80924
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.HUB_EMAIL_VERIFY_SEND;
                        var1.url = var4;
                        var4 = {};
                        var9 = _closure2_slot0;
                        var4.email = var9;
                        var9 = _closure2_slot2;
                        var4.guild_id = var9;
                        var6 = _closure2_slot1;
                        var4.allow_multiple_guilds = var6;
                        var6 = true;
                        var4.use_verification_code = var6;
                        var1.body = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.HUB_EMAIL_VERIFY_SEND;
                        var4.event = var5;
                        var5 = function arg0() {
                            _fun80925: for (var _fun80925_ip = 0;;) switch (_fun80925_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = null;
                                    var4 = var1 == var0;
                                    var2 = undefined;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun80925_ip = 36;
                                        continue _fun80925
                                    }
                                case 16:
                                    var0 = var0.body;
                                    var1 = var1 == var0;
                                    var3 = undefined;
                                    if (var1) {
                                        _fun80925_ip = 36;
                                        continue _fun80925
                                    }
                                case 30:
                                    var3 = var0.has_matching_guild;
                                case 36:
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 4;
                                    var0 = var4[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.exact;
                                    var0 = {};
                                    var0.has_matching_guild = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var4.properties = var5;
                        var1.trackedActionData = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 172);
                    case 170:
                        return var1;
                    case 172:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun80924_ip = 186;
                            continue _fun80924
                        }
                    case 178:
                        var2 = var1.body;
                        return var2;
                    case 186:
                        return var1;
                    case 189:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.sendVerificationEmail = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80928: for (var _fun80928_ip = 0;;) switch (_fun80928_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80928_ip = 289;
                            continue _fun80928
                        }
                    case 10:
                        var1 = undefined;
                        var4 = undefined;
                        var2 = _closure2_slot0;
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun80928_ip = 286;
                            continue _fun80928
                        }
                    case 30: // try_start_0
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 2;
                        var2 = var11[var2];
                        var7 = var5.bind(var1)(var2);
                        var5 = var7.post;
                        var2 = {};
                        var8 = _closure1_slot4;
                        var8 = var8.HUB_EMAIL_VERIFY;
                        var2.url = var8;
                        var8 = {};
                        var9 = _closure2_slot0;
                        var8.token = var9;
                        var2.body = var8;
                        var8 = {};
                        var10 = _closure1_slot0;
                        var9 = 3;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.NetworkActionNames;
                        var9 = var9.HUB_EMAIL_VERIFY;
                        var8.event = var9;
                        var2.trackedActionData = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address = 145);
                    case 143:
                        return var2;
                    case 145:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun80928_ip = 226;
                            continue _fun80928
                        }
                    case 151:
                        var5 = var2.body;
                        var5 = var5.guild;
                        var4 = var5;
                        var5 = var6 == var5;
                        var6 = undefined;
                        if (var5) {
                            _fun80928_ip = 178;
                            continue _fun80928
                        }
                    case 173:
                        var6 = var4.id;
                    case 178:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'HUB_VERIFY_EMAIL_SUCCESS';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 224: // try_end0
                        _fun80928_ip = 286;
                        continue _fun80928;
                    case 226:
                        return var2;
                    case 229: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'HUB_VERIFY_EMAIL_FAILURE';
                        var2.type = var6;
                        var5 = var5.body;
                        var2.errors = var5;
                        var2 = var3.bind(var4)(var2);
                    case 286:
                        return var1;
                    case 289:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.verify = var6;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80931: for (var _fun80931_ip = 0;;) switch (_fun80931_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80931_ip = 315;
                            continue _fun80931
                        }
                    case 10:
                        var4 = undefined;
                        var5 = undefined;
                        var2 = undefined;
                        var1 = _closure2_slot0;
                        var7 = null;
                        if (!(var7 == var1)) {
                            _fun80931_ip = 32;
                            continue _fun80931
                        }
                    case 29:
                        return var4;
                    case 32: // try_start_0
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var1 = 2;
                        var1 = var12[var1];
                        var8 = var6.bind(var4)(var1);
                        var6 = var8.post;
                        var1 = {};
                        var9 = _closure1_slot4;
                        var9 = var9.HUB_EMAIL_VERIFY_CODE;
                        var1.url = var9;
                        var9 = {};
                        var11 = _closure2_slot0;
                        var9.code = var11;
                        var11 = _closure2_slot1;
                        var9.guild_id = var11;
                        var10 = _closure2_slot2;
                        var9.email = var10;
                        var1.body = var9;
                        var9 = {};
                        var11 = _closure1_slot0;
                        var10 = 3;
                        var10 = var12[var10];
                        var10 = var11.bind(var4)(var10);
                        var10 = var10.NetworkActionNames;
                        var10 = var10.HUB_EMAIL_VERIFY;
                        var9.event = var10;
                        var1.trackedActionData = var9;
                        var9 = false;
                        var1.rejectWithError = var9;
                        var1 = var6.bind(var8)(var1);
                        SaveGenerator(address = 163);
                    case 161:
                        return var1;
                    case 163:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun80931_ip = 253;
                            continue _fun80931
                        }
                    case 169:
                        var2 = var1;
                        var6 = var1.body;
                        var6 = var6.guild;
                        var5 = var6;
                        var6 = var7 == var6;
                        var7 = undefined;
                        if (var6) {
                            _fun80931_ip = 199;
                            continue _fun80931
                        }
                    case 194:
                        var7 = var5.id;
                    case 199:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var8 = 'HUB_VERIFY_EMAIL_SUCCESS';
                        var3.type = var8;
                        var3.guildId = var7;
                        var3 = var5.bind(var6)(var3);
                        var2 = var2.body;
                    case 250: // try_end0
                        return var2;
                    case 253:
                        return var1;
                    case 256: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'HUB_VERIFY_EMAIL_FAILURE';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.errors = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 315:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.verifyCode = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/HubActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 4525, 481, 1385, 806, 2]);