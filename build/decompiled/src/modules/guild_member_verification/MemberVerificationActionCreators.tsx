// modules/guild_member_verification/MemberVerificationActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot10 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot8 = var7;
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59919: for (var _fun59919_ip = 0;;) switch (_fun59919_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59919_ip = 492;
                            continue _fun59919
                        }
                    case 13:
                        var5 = arg0;
                        var1 = undefined;
                        var12 = undefined;
                        var10 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var11 = null;
                        if (!(var11 == var2)) {
                            _fun59919_ip = 53;
                            continue _fun59919
                        }
                    case 32:
                        var8 = _closure1_slot6;
                        var7 = var8.getInviteKeyForGuildId;
                        var3 = var5;
                        var2 = var7.bind(var8)(var3);
                    case 53:
                        var12 = var2;
                        var7 = _closure1_slot7;
                        var3 = var7.getCurrentUser;
                        var13 = var3.bind(var7)();
                        var9 = _closure1_slot5;
                        var8 = var9.isMember;
                        var7 = var5;
                        var14 = var11 == var13;
                        var3 = undefined;
                        if (var14) {
                            _fun59919_ip = 99;
                            continue _fun59919
                        }
                    case 94:
                        var3 = var13.id;
                    case 99:
                        var3 = var8.bind(var9)(var7, var3);
                        var10 = !var3;
                    case 108: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var3 = var7.bind(var1)(var3);
                        var8 = var3.HTTP;
                        var7 = var8.get;
                        var3 = {};
                        var14 = _closure1_slot9;
                        var13 = var14.GUILD_MEMBER_VERIFICATION;
                        var9 = var5;
                        var9 = var13.bind(var14)(var9);
                        var3.url = var9;
                        var9 = {};
                        var9.with_guild = var10;
                        var10 = var12;
                        var13 = var11 != var10;
                        var10 = undefined;
                        if (!var13) {
                            _fun59919_ip = 212;
                            continue _fun59919
                        }
                    case 181:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var13 = 7;
                        var13 = var15[var13];
                        var14 = var14.bind(var1)(var13);
                        var13 = var14.parseInviteCodeFromInviteKey;
                        var10 = var13.bind(var14)(var12);
                    case 212:
                        var9.invite_code = var10;
                        var3.query = var9;
                        var9 = true;
                        var3.oldFormErrors = var9;
                        var9 = false;
                        var3.rejectWithError = var9;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address = 244);
                    case 242:
                        return var3;
                    case 244:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun59919_ip = 438;
                            continue _fun59919
                        }
                    case 253:
                        var4 = var3;
                        var7 = var3.body;
                        if (!(var11 != var7)) {
                            _fun59919_ip = 436;
                            continue _fun59919
                        }
                    case 268:
                        var7 = var4;
                        var12 = var7.body;
                        var6 = var12;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 8;
                        var7 = var9[var7];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                        var7.type = var10;
                        var10 = var5;
                        var7.guildId = var10;
                        var10 = {};
                        var13 = var12.version;
                        var10.version = var13;
                        var13 = var12.description;
                        var10.description = var13;
                        var13 = var12.form_fields;
                        var10.formFields = var13;
                        var13 = var12.guild;
                        var10.guild = var13;
                        var12 = var12.profile;
                        var12 = var11 != var12;
                        var11 = null;
                        if (!var12) {
                            _fun59919_ip = 418;
                            continue _fun59919
                        }
                    case 378:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 9;
                        var12 = var14[var12];
                        var14 = var13.bind(var1)(var12);
                        var13 = var14.buildGuildProfileFromServer;
                        var12 = var6;
                        var12 = var12.profile;
                        var11 = var13.bind(var14)(var12);
                    case 418:
                        var10.profile = var11;
                        var7.form = var10;
                        var7 = var8.bind(var9)(var7);
                    case 433: // try_end0
                        return var6;
                    case 436: // try_start_1
                        throw var4;
                    case 438: // try_end1
                        return var3;
                    case 441: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'MEMBER_VERIFICATION_FORM_FETCH_FAIL';
                        var2.type = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 492:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var11 = var3.bind(var0)();
    var3 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2, arg3) { // Environment: var0
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun59923: for (var _fun59923_ip = 0;;) switch (_fun59923_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59923_ip = 222;
                            continue _fun59923
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.patch;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.GUILD_MEMBER_VERIFICATION;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = {};
                        var8 = arg1;
                        var7.form_fields = var8;
                        var8 = arg2;
                        var7.enabled = var8;
                        var8 = arg3;
                        var7.bulk_action = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 123);
                    case 121:
                        return var1;
                    case 123:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59923_ip = 219;
                            continue _fun59923
                        }
                    case 129:
                        var7 = var1.body;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                        var3.type = var8;
                        var3.guildId = var6;
                        var6 = {};
                        var8 = var7.version;
                        var6.version = var8;
                        var8 = var7.description;
                        var6.description = var8;
                        var7 = var7.form_fields;
                        var6.formFields = var7;
                        var3.form = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 219:
                        return var1;
                    case 222:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var10 = var3.bind(var0)();
    var3 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59927: for (var _fun59927_ip = 0;;) switch (_fun59927_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59927_ip = 204;
                            continue _fun59927
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.patch;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.GUILD_MEMBER_VERIFICATION;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = {};
                        var8 = arg1;
                        var7.description = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 105);
                    case 103:
                        return var1;
                    case 105:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59927_ip = 201;
                            continue _fun59927
                        }
                    case 111:
                        var7 = var1.body;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                        var3.type = var8;
                        var3.guildId = var6;
                        var6 = {};
                        var8 = var7.version;
                        var6.version = var8;
                        var8 = var7.description;
                        var6.description = var8;
                        var7 = var7.form_fields;
                        var6.formFields = var7;
                        var3.form = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 201:
                        return var1;
                    case 204:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var9 = var3.bind(var0)();
    var3 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59931: for (var _fun59931_ip = 0;;) switch (_fun59931_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59931_ip = 114;
                            continue _fun59931
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.patch;
                        var1 = {};
                        var7 = _closure1_slot9;
                        var6 = var7.GUILD_MEMBER_VERIFICATION;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = {};
                        var6 = arg1;
                        var5.enabled = var6;
                        var1.body = var5;
                        var5 = true;
                        var1.oldFormErrors = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59931_ip = 111;
                            continue _fun59931
                        }
                    case 108:
                        return var2;
                    case 111:
                        return var1;
                    case 114:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var8 = var3.bind(var0)();
    var3 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59935: for (var _fun59935_ip = 0;;) switch (_fun59935_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59935_ip = 958;
                            continue _fun59935
                        }
                    case 18:
                        var3 = var2;
                        var _closure4_slot0 = var2;
                        var13 = arg1;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun59935_ip = 37;
                            continue _fun59935
                        }
                    case 34:
                        var1 = 200;
                    case 37:
                        var11 = var1;
                        var6 = undefined;
                        var10 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 50);
                    case 48:
                        return var2;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59935_ip = 955;
                            continue _fun59935
                        }
                    case 59:
                        var14 = _closure1_slot4;
                        var12 = var14.isFullServerPreview;
                        var5 = var3;
                        var5 = var12.bind(var14)(var5);
                        if (var5) {
                            _fun59935_ip = 901;
                            continue _fun59935
                        }
                    case 86: // try_start_0
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var5 = 6;
                        var5 = var14[var5];
                        var5 = var12.bind(var2)(var5);
                        var14 = var5.HTTP;
                        var12 = var14.put;
                        var5 = {};
                        var17 = _closure1_slot9;
                        var16 = var17.GUILD_MEMBER_REQUEST_TO_JOIN;
                        var15 = var3;
                        var15 = var16.bind(var17)(var15);
                        var5.url = var15;
                        var15 = {};
                        var16 = var13;
                        var17 = var16.version;
                        var15.version = var17;
                        var16 = var16.formFields;
                        var15.form_fields = var16;
                        var5.body = var15;
                        var15 = false;
                        var5.rejectWithError = var15;
                        var5 = var12.bind(var14)(var5);
                        SaveGenerator(address = 187);
                    case 185:
                        return var5;
                    case 187:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 12);
                        if (var12) {
                            _fun59935_ip = 335;
                            continue _fun59935
                        }
                    case 196:
                        var17 = var5.body;
                        var8 = var17;
                        var14 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var12 = 8;
                        var12 = var16[var12];
                        var15 = var14.bind(var2)(var12);
                        var14 = var15.dispatch;
                        var12 = {};
                        var18 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                        var12.type = var18;
                        var18 = var3;
                        var12.guildId = var18;
                        var12.request = var17;
                        var12 = var14.bind(var15)(var12);
                        var15 = _closure1_slot0;
                        var14 = 11;
                        var14 = var16[var14];
                        var15 = var15.bind(var2)(var14);
                        var14 = var15.hasNonTermsFormField;
                        var13 = var13.formFields;
                        var13 = var14.bind(var15)(var13);
                        var12 = var13;
                        if (!var13) {
                            _fun59935_ip = 310;
                            continue _fun59935
                        }
                    case 297:
                        var14 = var11;
                        var13 = -1;
                        var12 = var13 !== var14;
                    case 310:
                        if (!var12) {
                            _fun59935_ip = 332;
                            continue _fun59935
                        }
                    case 313:
                        var12 = global;
                        var12 = var12.setTimeout;
                        var9 = function() { // Environment: var9
                            var2 = _closure1_slot10;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var9 = var12.bind(var2)(var9, var11);
                    case 332: // try_end0
                        return var8;
                    case 335:
                        return var5;
                    case 338: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var7 = var5;
                        var8 = var5.status;
                        var5 = 429;
                        if (!(var5 !== var8)) {
                            _fun59935_ip = 623;
                            continue _fun59935
                        }
                    case 361:
                        var5 = 403;
                        if (!(var5 !== var8)) {
                            _fun59935_ip = 543;
                            continue _fun59935
                        }
                    case 374:
                        var5 = {};
                        var11 = var7;
                        var20 = var5;
                        var19 = var11;
                        var8 = copyDataProperties(var20, var19);
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 15;
                        var8 = var12[var8];
                        var8 = var9.bind(var2)(var8);
                        var8 = var8.APIError;
                        var9 = var8.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var8
                            }
                        });
                        var21 = var9;
                        var20 = var11;
                        var8 = new var21[var8](var20, var19);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var10 = var8;
                        var9 = null;
                        var11 = var9 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun59935_ip = 465;
                            continue _fun59935
                        }
                    case 452:
                        var11 = var10;
                        var10 = var11.getAnyErrorMessage;
                        var8 = var10.bind(var11)();
                    case 465:
                        var6 = var8;
                        if (!(var9 == var8)) {
                            _fun59935_ip = 529;
                            continue _fun59935
                        }
                    case 472:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 14;
                        var9 = var12[var8];
                        var9 = var11.bind(var2)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8.R0RpRX;
                        var8 = var9.bind(var10)(var8);
                        _fun59935_ip = 532;
                        continue _fun59935;
                    case 529:
                        var8 = var6;
                    case 532:
                        var6 = 'message';
                        var5[var6] = var8;
                        throw var5;
                    case 543:
                        var5 = {};
                        var19 = var7;
                        var20 = var5;
                        var6 = copyDataProperties(var20, var19);
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 14;
                        var8 = var11[var6];
                        var8 = var10.bind(var2)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var6 = var11[var6];
                        var6 = var10.bind(var2)(var6);
                        var6 = var6.t;
                        var6 = var6["8T1rxN"];
                        var8 = var8.bind(var9)(var6);
                        var6 = 'message';
                        var5[var6] = var8;
                        throw var5;
                    case 623:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 12;
                        var5 = var10[var5];
                        var6 = var9.bind(var2)(var5);
                        var5 = var6.closeContextMenu;
                        var5 = var5.bind(var6)();
                        var6 = _closure1_slot1;
                        var5 = 13;
                        var5 = var10[var5];
                        var11 = var6.bind(var2)(var5);
                        var8 = var11.show;
                        var5 = {};
                        var6 = 14;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var14 = var12.intl;
                        var13 = var14.string;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var12 = var12.t;
                        var12 = var12.MmIrpf;
                        var12 = var13.bind(var14)(var12);
                        var5.title = var12;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var14 = var12.intl;
                        var13 = var14.string;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var12 = var12.t;
                        var12 = var12.yjpDQ3;
                        var12 = var13.bind(var14)(var12);
                        var5.body = var12;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var14 = var12.intl;
                        var13 = var14.string;
                        var12 = var10[var6];
                        var12 = var9.bind(var2)(var12);
                        var12 = var12.t;
                        var12 = var12.XNGT1O;
                        var12 = var13.bind(var14)(var12);
                        var5.confirmText = var12;
                        var5 = var8.bind(var11)(var5);
                        var5 = {};
                        var19 = var7;
                        var20 = var5;
                        var7 = copyDataProperties(var20, var19);
                        var7 = var10[var6];
                        var7 = var9.bind(var2)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.t;
                        var6 = var6.yjpDQ3;
                        var7 = var7.bind(var8)(var6);
                        var6 = 'message';
                        var5[var6] = var7;
                        throw var5;
                    case 901:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.updateImpersonatedData;
                        var4 = var3;
                        var3 = {};
                        var7 = {};
                        var8 = false;
                        var7.isPending = var8;
                        var3.memberOptions = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 955:
                        return var1;
                    case 958:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var7 = var3.bind(var0)();
    var3 = {};
    var3.fetchVerificationForm = var11;
    var3.updateVerificationForm = var10;
    var10 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MEMBER_VERIFICATION_FORM_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = {};
        var5 = arg1;
        var4.formFields = var5;
        var1.form = var4;
        var4 = true;
        var1.isLocalUpdate = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.updateVerificationFormFieldsLocal = var10;
    var3.updateVerificationFormDescription = var9;
    var9 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MEMBER_VERIFICATION_FORM_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = {};
        var5 = arg1;
        var4.description = var5;
        var1.form = var4;
        var4 = true;
        var1.isLocalUpdate = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.updateVerificationFormDescriptionLocal = var9;
    var3.enableVerificationForm = var8;
    var3.submitVerificationForm = var7;
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.clearCoachmark = var7;
    var4 = function arg0() {
        var0 = arg0;
        var8 = var0.guild;
        var10 = var0.guildJoinRequest;
        var9 = var0.guildJoinRequestUser;
        var7 = var0.reason;
        var6 = var0.reasonOther;
        var5 = var0.responses;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.GUILD_MEMBER_APPLICATION_REPORTED;
        var1 = {};
        var10 = var10.joinRequestId;
        var1.application_id = var10;
        var9 = var9.id;
        var1.applicant_id = var9;
        var8 = var8.id;
        var1.guild_id = var8;
        var1.reason = var7;
        var1.reason_other = var6;
        var1.responses = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var3.reportApplication = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/MemberVerificationActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = -1;
    var2.DISABLE_JOIN_REQUEST_COACHMARK = var3;
    var2.showCoachmark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1664, 1672, 3282, 1613, 660, 507, 3283, 806, 7341, 4655, 3175, 7394, 3962, 1234, 3309, 795, 2]);