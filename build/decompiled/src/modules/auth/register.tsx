// modules/auth/register.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun100357: for (var _fun100357_ip = 0;;) switch (_fun100357_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100357_ip = 195;
                            continue _fun100357
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var1 = 6;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot8;
                        var4 = var4.SCORE_PASSWORD;
                        var1.url = var4;
                        var4 = {};
                        var4.password = var6;
                        var1.body = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 7;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.PASSWORD_VALIDATE;
                        var4.event = var5;
                        var1.trackedActionData = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 126);
                    case 124:
                        return var1;
                    case 126:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun100357_ip = 140;
                            continue _fun100357
                        }
                    case 132:
                        var2 = var1.body;
                    case 137: // try_end0
                        return var2;
                    case 140:
                        return var1;
                    case 143: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var3;
                        var1 = new var10[var1](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 195:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun100360: for (var _fun100360_ip = 0;;) switch (_fun100360_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100360_ip = 248;
                            continue _fun100360
                        }
                    case 10:
                        var1 = arg0;
                        var9 = var1.phone;
                        var5 = undefined;
                        SaveGenerator(address = 25);
                    case 23:
                        return var5;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun100360_ip = 245;
                            continue _fun100360
                        }
                    case 34: // try_start_0
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var3 = 6;
                        var3 = var10[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.post;
                        var3 = {};
                        var7 = _closure1_slot8;
                        var7 = var7.REGISTER_PHONE;
                        var3.url = var7;
                        var7 = {};
                        var7.phone = var9;
                        var3.body = var7;
                        var7 = {};
                        var9 = _closure1_slot0;
                        var8 = 7;
                        var8 = var10[var8];
                        var8 = var9.bind(var5)(var8);
                        var8 = var8.NetworkActionNames;
                        var8 = var8.USER_REGISTER_PHONE;
                        var7.event = var8;
                        var3.trackedActionData = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address = 145);
                    case 143:
                        return var3;
                    case 145:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun100360_ip = 154;
                            continue _fun100360
                        }
                    case 151: // try_end0
                        return var3;
                    case 154:
                        return var3;
                    case 157: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var2 = var6;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 9;
                        var4 = var8[var4];
                        var4 = var7.bind(var5)(var4);
                        var4 = var4.CaptchaCancelError;
                        var4 = var6 instanceof var4;
                        if (var4) {
                            _fun100360_ip = 243;
                            continue _fun100360
                        }
                    case 198:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 8;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var11 = var2;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = var4;
                        var3 = new var12[var5](var11, var10);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 243:
                        throw var2;
                    case 245:
                        return var1;
                    case 248:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun100361: for (var _fun100361_ip = 0;;) switch (_fun100361_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.email;
                var13 = var1.phoneToken;
                var18 = var1.username;
                var17 = var1.globalName;
                var14 = var1.consent;
                var15 = var1.password;
                var11 = var1.guildTemplateCode;
                var16 = var1.birthday;
                var10 = var1.invite;
                var6 = undefined;
                if (!(var10 === var6)) {
                    _fun100361_ip = 66;
                    continue _fun100361
                }
            case 64:
                var10 = null;
            case 66:
                var12 = var1.giftCodeSKUId;
                if (!(var12 === var6)) {
                    _fun100361_ip = 78;
                    continue _fun100361
                }
            case 76:
                var12 = null;
            case 78:
                var7 = var1.promoEmailConsent;
                if (!(var7 === var6)) {
                    _fun100361_ip = 90;
                    continue _fun100361
                }
            case 88:
                var7 = null;
            case 90:
                var9 = var1.usedUsernameSuggestion;
                if (!(var9 === var6)) {
                    _fun100361_ip = 104;
                    continue _fun100361
                }
            case 102:
                var9 = null;
            case 104:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 10;
                var1 = var3[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'REGISTER';
                var1.type = var4;
                var1 = var2.bind(var3)(var1);
                var8 = null;
                if (!(var8 != var16)) {
                    _fun100361_ip = 402;
                    continue _fun100361
                }
            case 156:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 11;
                var1 = var4[var1];
                var3 = var2.bind(var6)(var1);
                var1 = _closure1_slot7;
                var1 = var1.REGISTER;
                var1 = var3.bind(var6)(var16, var1);
                var3 = 5;
                var1 = var4[var3];
                var22 = var2.bind(var6)(var1);
                var21 = var22.track;
                var1 = _closure1_slot6;
                var20 = var1.AGE_GATE_ACTION;
                var1 = {};
                var23 = _closure1_slot10;
                var23 = var23.REGISTER;
                var1.source = var23;
                var23 = _closure1_slot9;
                var23 = var23.AGE_GATE_SUBMITTED;
                var1.action = var23;
                var1 = var21.bind(var22)(var20, var1);
                var1 = 4;
                var1 = var4[var1];
                var1 = var2.bind(var6)(var1);
                var4 = var1.bind(var6)();
                var2 = var4.diff;
                var1 = 'years';
                var21 = var2.bind(var4)(var16, var1);
                var1 = 13;
                if (!(!(var21 < var1))) {
                    _fun100361_ip = 402;
                    continue _fun100361
                }
            case 294:
                if (!(var21 >= var1)) {
                    _fun100361_ip = 314;
                    continue _fun100361
                }
            case 298:
                var1 = 17;
                var1 = var21 <= var1;
                var20 = '13-17';
                if (var1) {
                    _fun100361_ip = 355;
                    continue _fun100361
                }
            case 314:
                var1 = 18;
                var2 = var21 >= var1;
                var4 = '23+';
                var1 = var4;
                if (!var2) {
                    _fun100361_ip = 352;
                    continue _fun100361
                }
            case 333:
                var2 = 22;
                var2 = var21 <= var2;
                var1 = var4;
                if (!var2) {
                    _fun100361_ip = 352;
                    continue _fun100361
                }
            case 346:
                var1 = '18-22';
            case 352:
                var20 = var1;
            case 355:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var4 = var2.bind(var6)(var1);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.USER_AGE_SUBMITTED;
                var1 = {};
                var1.age_bucket = var20;
                var1 = var3.bind(var4)(var2, var1);
            case 402:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.post;
                var1 = {};
                var4 = _closure1_slot8;
                var4 = var4.REGISTER;
                var1.url = var4;
                var4 = {};
                var21 = _closure1_slot5;
                var20 = var21.getFingerprint;
                var20 = var20.bind(var21)();
                var4.fingerprint = var20;
                var4.email = var19;
                var4.username = var18;
                var4.global_name = var17;
                var4.password = var15;
                var4.invite = var10;
                var4.consent = var14;
                var4.phone_token = var13;
                var14 = var8 == var16;
                var13 = undefined;
                if (var14) {
                    _fun100361_ip = 524;
                    continue _fun100361
                }
            case 508:
                var15 = var16.format;
                var14 = 'YYYY-MM-DD';
                var13 = var15.bind(var16)(var14);
            case 524:
                var4.date_of_birth = var13;
                var4.gift_code_sku_id = var12;
                var4.guild_template_code = var11;
                var12 = var8 == var7;
                var11 = undefined;
                if (var12) {
                    _fun100361_ip = 554;
                    continue _fun100361
                }
            case 548:
                var11 = var7.checked;
            case 554:
                var4.promotional_email_opt_in = var11;
                var1.body = var4;
                var4 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var5 = 7;
                var5 = var12[var5];
                var5 = var11.bind(var6)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.USER_REGISTER;
                var4.event = var5;
                var5 = {};
                var5.invite_code = var10;
                var5.used_username_suggestion = var9;
                var10 = var8 == var7;
                var9 = undefined;
                if (var10) {
                    _fun100361_ip = 631;
                    continue _fun100361
                }
            case 625:
                var9 = var7.checked;
            case 631:
                var5.promotional_email_opt_in = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun100361_ip = 651;
                    continue _fun100361
                }
            case 645:
                var6 = var7.preChecked;
            case 651:
                var5.promotional_email_pre_checked = var6;
                var6 = true;
                var5.was_unique_username = var6;
                var4.properties = var5;
                var1.trackedActionData = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var4 = var6.dispatch;
                    var1 = {};
                    var7 = 'REGISTER_SUCCESS';
                    var1.type = var7;
                    var7 = arg0;
                    var7 = var7.body;
                    var7 = var7.token;
                    var1.token = var7;
                    var1 = var4.bind(var6)(var1);
                    var1 = 5;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.AGE_GATE_ACTION;
                    var1 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.REGISTER;
                    var1.source = var6;
                    var5 = _closure1_slot9;
                    var5 = var5.AGE_GATE_SUCCESS;
                    var1.action = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    _fun100363: for (var _fun100363_ip = 0;;) switch (_fun100363_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 9;
                            var1 = var4[var1];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.CaptchaCancelError;
                            var1 = var0 instanceof var1;
                            if (var1) {
                                _fun100363_ip = 480;
                                continue _fun100363
                            }
                        case 44:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 8;
                            var1 = var4[var1];
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var3;
                            var10 = var0;
                            var1 = new var11[var1](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var3 = var1.getFieldErrors;
                            var7 = 'date_of_birth';
                            var4 = var3.bind(var1)(var7);
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun100363_ip = 149;
                                continue _fun100363
                            }
                        case 108:
                            var4 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 12;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            var4 = var6.preventUnderageRegistration;
                            var3 = _closure1_slot10;
                            var3 = var3.REGISTER;
                            var3 = var4.bind(var6)(var3);
                        case 149:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var3 = 5;
                            var3 = var6[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot6;
                            var3 = var2.REGISTER_SUBMIT_ERRORED;
                            var2 = {};
                            var6 = true;
                            var2.is_unique_username_registration = var6;
                            var8 = var1.getFirstFieldErrorMessage;
                            var6 = 'email';
                            var6 = var8.bind(var1)(var6);
                            var2.email_error_reason = var6;
                            var8 = var1.getFirstFieldErrorMessage;
                            var6 = 'phone_token';
                            var6 = var8.bind(var1)(var6);
                            var2.phone_error_reason = var6;
                            var8 = var1.getFirstFieldErrorMessage;
                            var6 = 'password';
                            var6 = var8.bind(var1)(var6);
                            var2.password_error_reason = var6;
                            var8 = var1.getFirstFieldErrorMessage;
                            var6 = 'username';
                            var6 = var8.bind(var1)(var6);
                            var2.username_error_reason = var6;
                            var8 = var1.getFirstFieldErrorMessage;
                            var6 = 'global_name';
                            var6 = var8.bind(var1)(var6);
                            var2.global_name_error_reason = var6;
                            var6 = var1.getFirstFieldErrorMessage;
                            var6 = var6.bind(var1)(var7);
                            var2.date_of_birth_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'promotional_email_opt_in';
                            var6 = var7.bind(var1)(var6);
                            var2.promotional_email_opt_in_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'fingerprint';
                            var6 = var7.bind(var1)(var6);
                            var2.fingerprint_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'invite';
                            var6 = var7.bind(var1)(var6);
                            var2.invite_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'gift_code_sku_id';
                            var6 = var7.bind(var1)(var6);
                            var2.gift_code_sku_id_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'guild_template_code';
                            var6 = var7.bind(var1)(var6);
                            var2.guild_template_code_error_reason = var6;
                            var7 = var1.getFirstFieldErrorMessage;
                            var6 = 'consent';
                            var6 = var7.bind(var1)(var6);
                            var2.consent_error_reason = var6;
                            var6 = var1.getAnyErrorMessage;
                            var6 = var6.bind(var1)();
                            var2.generic_error_reason = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            throw var1;
                        case 480:
                            throw var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot7 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AgeGateAnalyticAction;
    var _closure1_slot9 = var7;
    var4 = var4.AgeGateSource;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/register.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun100364: for (var _fun100364_ip = 0;;) switch (_fun100364_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.invite;
                var2 = undefined;
                if (!(var5 === var2)) {
                    _fun100364_ip = 17;
                    continue _fun100364
                }
            case 15:
                var5 = null;
            case 17:
                var4 = var3.giftCodeSKUId;
                if (!(var4 === var2)) {
                    _fun100364_ip = 29;
                    continue _fun100364
                }
            case 27:
                var4 = null;
            case 29:
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.invite = var0;
                var1.giftCodeSKUId = var0;
                var9 = {};
                var8 = var3;
                var7 = var1;
                var8 = copyDataProperties(var9, var8, var7);
                var1 = _closure1_slot13;
                var0 = {};
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'invite';
                var0[var3] = var5;
                var3 = 'giftCodeSKUId';
                var0[var3] = var4;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.scorePassword = var4;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.registerPhone = var3;
    var2.registerFull = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 660, 1219, 3045, 795, 4525, 481, 3352, 5259, 806, 13065, 13066, 2]);