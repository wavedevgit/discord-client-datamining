// modules/guild_member_verification/GuildJoinRequestActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.createChannelRecordFromServer;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.joinRequestFromServer;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.AbortCodes;
    var _closure1_slot7 = var3;
    var1 = var1.Endpoints;
    var _closure1_slot8 = var1;
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60044: for (var _fun60044_ip = 0;;) switch (_fun60044_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60044_ip = 157;
                            continue _fun60044
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot8;
                        var7 = var8.GUILD_JOIN_REQUEST_BY_ID;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60044_ip = 154;
                            continue _fun60044
                        }
                    case 90:
                        var5 = _closure1_slot6;
                        var3 = var1.body;
                        var5 = var5.bind(var4)(var3);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.joinRequest = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 154:
                        return var1;
                    case 157:
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
    var15 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60048: for (var _fun60048_ip = 0;;) switch (_fun60048_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60048_ip = 528;
                            continue _fun60048
                        }
                    case 13:
                        var10 = var1.guildId;
                        var3 = var1.status;
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun60048_ip = 64;
                            continue _fun60048
                        }
                    case 29:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 7;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.GuildJoinRequestApplicationStatuses;
                        var3 = var6.SUBMITTED;
                    case 64:
                        var14 = var3;
                        var16 = var1.before;
                        var15 = var1.after;
                        var3 = var1.limit;
                        if (!(var3 === var2)) {
                            _fun60048_ip = 117;
                            continue _fun60048
                        }
                    case 88:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 7;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var3 = var6.MAX_RESULTS_PER_PAGE;
                    case 117:
                        var11 = var3;
                        var3 = var1.force;
                        if (!(var3 === var2)) {
                            _fun60048_ip = 132;
                            continue _fun60048
                        }
                    case 130:
                        var3 = false;
                    case 132:
                        var7 = undefined;
                        var5 = undefined;
                        var12 = undefined;
                        SaveGenerator(address = 142);
                    case 140:
                        return var2;
                    case 142:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun60048_ip = 525;
                            continue _fun60048
                        }
                    case 151:
                        if (var3) {
                            _fun60048_ip = 178;
                            continue _fun60048
                        }
                    case 154:
                        var8 = _closure1_slot5;
                        var6 = var8.hasFetched;
                        var4 = var10;
                        var4 = var6.bind(var8)(var4);
                        var3 = !var4;
                    case 178:
                        var8 = _closure1_slot5;
                        var6 = var8.isFetching;
                        var6 = var6.bind(var8)();
                        if (var6) {
                            _fun60048_ip = 522;
                            continue _fun60048
                        }
                    case 201:
                        if (!var3) {
                            _fun60048_ip = 522;
                            continue _fun60048
                        }
                    case 207:
                        var8 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 6;
                        var3 = var3[var6];
                        var9 = var8.bind(var2)(var3);
                        var8 = var9.dispatch;
                        var3 = {};
                        var13 = 'GUILD_JOIN_REQUESTS_FETCH_START';
                        var3.type = var13;
                        var3 = var8.bind(var9)(var3);
                    case 249: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 5;
                        var3 = var9[var3];
                        var3 = var8.bind(var2)(var3);
                        var9 = var3.HTTP;
                        var8 = var9.get;
                        var3 = {};
                        var18 = _closure1_slot8;
                        var17 = var18.GUILD_JOIN_REQUESTS;
                        var13 = var10;
                        var13 = var17.bind(var18)(var13);
                        var3.url = var13;
                        var13 = {};
                        var17 = var14;
                        var13.status = var17;
                        var17 = var11;
                        var13.limit = var17;
                        var13.before = var16;
                        var13.after = var15;
                        var3.query = var13;
                        var13 = false;
                        var3.rejectWithError = var13;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address = 349);
                    case 347:
                        return var3;
                    case 349:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun60048_ip = 476;
                            continue _fun60048
                        }
                    case 355:
                        var5 = var3;
                        var8 = var3.body;
                        var12 = var8.total;
                        var8 = var3.body;
                        var9 = var8.guild_join_requests;
                        var7 = var9;
                        var8 = null;
                        if (!(var8 == var9)) {
                            _fun60048_ip = 395;
                            continue _fun60048
                        }
                    case 389:
                        var9 = new Array(0);
                        _fun60048_ip = 398;
                        continue _fun60048;
                    case 395:
                        var9 = var7;
                    case 398:
                        var8 = var9.map;
                        var7 = _closure1_slot6;
                        var13 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var15 = 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS';
                        var7.type = var15;
                        var7.status = var14;
                        var7.requests = var13;
                        var7.total = var12;
                        var7.limit = var11;
                        var7.guildId = var10;
                        var7 = var8.bind(var9)(var7);
                    case 473: // try_end0
                        return var5;
                    case 476:
                        return var3;
                    case 479: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'GUILD_JOIN_REQUESTS_FETCH_FAILURE';
                        var4.type = var7;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
                    case 522:
                        return var2;
                    case 525:
                        return var1;
                    case 528:
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
    var14 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60052: for (var _fun60052_ip = 0;;) switch (_fun60052_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60052_ip = 154;
                            continue _fun60052
                        }
                    case 10:
                        var5 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.del;
                        var1 = {};
                        var9 = _closure1_slot8;
                        var8 = var9.GUILD_MEMBER_REQUEST_TO_JOIN;
                        var7 = var5;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60052_ip = 147;
                            continue _fun60052
                        }
                    case 94:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'USER_GUILD_JOIN_REQUEST_UPDATE',
                            'guildId': null,
                            'request': null
                        };
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 144: // try_end0
                        return var1;
                    case 147:
                        return var1;
                    case 150: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        throw var1;
                    case 154:
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
    var12 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun60056: for (var _fun60056_ip = 0;;) switch (_fun60056_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60056_ip = 344;
                            continue _fun60056
                        }
                    case 10:
                        var5 = arg0;
                        var6 = arg1;
                    case 16: // try_start_0 // try_start_1
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var3 = var7.post;
                        var1 = {};
                        var11 = _closure1_slot8;
                        var10 = var11.GUILD_JOIN_REQUEST_ACK;
                        var9 = var5;
                        var8 = var6;
                        var8 = var10.bind(var11)(var9, var8);
                        var1.url = var8;
                        var8 = false;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 95);
                    case 93:
                        return var1;
                    case 95:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60056_ip = 160;
                            continue _fun60056
                        }
                    case 101: // try_end0 // try_end1
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var8 = var7.bind(var4)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var9 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                        var3.type = var9;
                        var9 = var6;
                        var3.id = var9;
                        var9 = var5;
                        var3.guildId = var9;
                        var3 = var7.bind(var8)(var3);
                        return var1;
                    case 160:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                        var2.type = var7;
                        var7 = var6;
                        var2.id = var7;
                        var7 = var5;
                        var2.guildId = var7;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 219: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 221: // try_end2
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                        var2.type = var7;
                        var7 = var6;
                        var2.id = var7;
                        var7 = var5;
                        var2.guildId = var7;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 285: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                        var2.type = var7;
                        var2.id = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 344:
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
    var13 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun60060: for (var _fun60060_ip = 0;;) switch (_fun60060_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var9 = arguments[3];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60060_ip = 306;
                            continue _fun60060
                        }
                    case 16:
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun60060_ip = 57;
                            continue _fun60060
                        }
                    case 22:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.GuildJoinRequestApplicationStatuses;
                        var9 = var1.APPROVED;
                    case 57:
                        SaveGenerator(address = 61);
                    case 59:
                        return var3;
                    case 61:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60060_ip = 303;
                            continue _fun60060
                        }
                    case 70:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var10 = var5.bind(var3)(var2);
                        var8 = var10.trackMemberApplicationAction;
                        var2 = {};
                        var2.guildId = var7;
                        var2.actionType = var9;
                        var11 = arg1;
                        var2.applicationUserId = var11;
                        var2 = var8.bind(var10)(var2);
                        var2 = 5;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.patch;
                        var2 = {};
                        var11 = _closure1_slot8;
                        var10 = var11.GUILD_JOIN_REQUEST_ID;
                        var8 = arg2;
                        var8 = var10.bind(var11)(var7, var8);
                        var2.url = var8;
                        var8 = {};
                        var8.action = var9;
                        var9 = arguments[4];
                        var8.rejection_reason = var9;
                        var2.body = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var6 = var5.bind(var6)(var2);
                        var5 = var6.catch;
                        var2 = function(arg0) { // Environment: var2
                            _fun60061: for (var _fun60061_ip = 0;;) switch (_fun60061_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2;
                                    if (!var0) {
                                        _fun60061_ip = 14;
                                        continue _fun60061
                                    }
                                case 9:
                                    var0 = var2.body;
                                case 14:
                                    if (!var0) {
                                        _fun60061_ip = 44;
                                        continue _fun60061
                                    }
                                case 17:
                                    var1 = var2.body;
                                    var3 = var1.code;
                                    var1 = _closure1_slot7;
                                    var1 = var1.REQUEST_TO_JOIN_USER_INELIGIBLE;
                                    var0 = var3 === var1;
                                case 44:
                                    if (!var0) {
                                        _fun60061_ip = 195;
                                        continue _fun60061
                                    }
                                case 50:
                                    var1 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var0 = 9;
                                    var0 = var9[var0];
                                    var8 = undefined;
                                    var3 = var1.bind(var8)(var0);
                                    var1 = var3.show;
                                    var0 = {};
                                    var7 = _closure1_slot0;
                                    var4 = 10;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var10 = var5.intl;
                                    var6 = var10.string;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var5 = var5.t;
                                    var5 = var5.DxJj4e;
                                    var5 = var6.bind(var10)(var5);
                                    var0.title = var5;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.t;
                                    var4 = var4.rSAOk9;
                                    var4 = var5.bind(var6)(var4);
                                    var0.body = var4;
                                    var0 = var1.bind(var3)(var0);
                                case 195:
                                    var0 = global;
                                    var1 = var0.Promise;
                                    var0 = var1.reject;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 222);
                    case 220:
                        return var2;
                    case 222:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun60060_ip = 300;
                            continue _fun60060
                        }
                    case 228:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GUILD_JOIN_REQUEST_UPDATE';
                        var4.type = var8;
                        var4.guildId = var7;
                        var7 = var2.body;
                        var7 = var7.application_status;
                        var4.status = var7;
                        var7 = var2.body;
                        var4.request = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 300:
                        return var2;
                    case 303:
                        return var1;
                    case 306:
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
    var11 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun60065: for (var _fun60065_ip = 0;;) switch (_fun60065_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60065_ip = 165;
                            continue _fun60065
                        }
                    case 16:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var3 = var7.patch;
                        var1 = {};
                        var9 = _closure1_slot8;
                        var8 = var9.GUILD_JOIN_REQUESTS;
                        var8 = var8.bind(var9)(var6);
                        var1.url = var8;
                        var8 = {};
                        var8.action = var5;
                        var1.body = var8;
                        var8 = false;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 98);
                    case 96:
                        return var1;
                    case 98:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60065_ip = 162;
                            continue _fun60065
                        }
                    case 104:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'GUILD_JOIN_REQUESTS_BULK_ACTION';
                        var2.type = var7;
                        var2.guildId = var6;
                        var2.action = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.body;
                        return var2;
                    case 162:
                        return var1;
                    case 165:
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
    var10 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60069: for (var _fun60069_ip = 0;;) switch (_fun60069_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60069_ip = 160;
                            continue _fun60069
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var9 = _closure1_slot8;
                        var8 = var9.GUILD_MEMBER_REQUEST_TO_JOIN;
                        var7 = var6;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60069_ip = 153;
                            continue _fun60069
                        }
                    case 94:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3.request = var2;
                        var3 = var4.bind(var5)(var3);
                    case 150: // try_end0
                        return var2;
                    case 153:
                        return var1;
                    case 156: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        throw var1;
                    case 160:
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
    var9 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun60073: for (var _fun60073_ip = 0;;) switch (_fun60073_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60073_ip = 140;
                            continue _fun60073
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot8;
                        var6 = var6.USER_JOIN_REQUEST_GUILDS;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun60073_ip = 137;
                            continue _fun60073
                        }
                    case 82:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 6;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'USER_JOIN_REQUEST_GUILDS_FETCH';
                        var3.type = var6;
                        var6 = var1.body;
                        var3.guilds = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 137:
                        return var1;
                    case 140:
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
    var8 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60077: for (var _fun60077_ip = 0;;) switch (_fun60077_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60077_ip = 224;
                            continue _fun60077
                        }
                    case 13:
                        var6 = undefined;
                        if (!(var5 === var6)) {
                            _fun60077_ip = 21;
                            continue _fun60077
                        }
                    case 19:
                        var5 = true;
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var6;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60077_ip = 221;
                            continue _fun60077
                        }
                    case 34:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var3.bind(var6)(var2);
                        var7 = var2.HTTP;
                        var3 = var7.post;
                        var2 = {};
                        var10 = _closure1_slot8;
                        var9 = var10.GUILD_JOIN_REQUEST_INTERVIEW;
                        var8 = arg0;
                        var8 = var9.bind(var10)(var8);
                        var2.url = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address = 107);
                    case 105:
                        return var2;
                    case 107:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60077_ip = 218;
                            continue _fun60077
                        }
                    case 113:
                        var7 = _closure1_slot4;
                        var3 = var2.body;
                        var3 = var7.bind(var6)(var3);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 6;
                        var7 = var9[var7];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'CHANNEL_CREATE';
                        var7.type = var10;
                        var7.channel = var3;
                        var7 = var8.bind(var9)(var7);
                        if (!var5) {
                            _fun60077_ip = 210;
                            continue _fun60077
                        }
                    case 174:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.selectPrivateChannel;
                        var4 = var3.id;
                        var4 = var5.bind(var6)(var4);
                    case 210:
                        var3 = var3.id;
                        return var3;
                    case 218:
                        return var2;
                    case 221:
                        return var1;
                    case 224:
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
    var6 = var1.bind(var0)();
    var1 = function() { // Environment: var7
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun60081: for (var _fun60081_ip = 0;;) switch (_fun60081_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60081_ip = 223;
                            continue _fun60081
                        }
                    case 10:
                        var5 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var9 = _closure1_slot8;
                        var8 = var9.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN;
                        var7 = var5;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60081_ip = 161;
                            continue _fun60081
                        }
                    case 93:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH';
                        var2.type = var6;
                        var6 = var5;
                        var2.guildId = var6;
                        var6 = var1.body;
                        var6 = var6.cooldown;
                        var2.cooldown = var6;
                        var2 = var3.bind(var4)(var2);
                    case 158: // try_end0
                        return var1;
                    case 161:
                        return var1;
                    case 164: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                            'guildId': null,
                            'cooldown': null
                        };
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 223:
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
    var3 = var1.bind(var0)();
    var1 = {};
    var1.fetchGuildJoinRequest = var15;
    var1.fetchGuildJoinRequests = var14;
    var1.ackUserGuildJoinRequest = var13;
    var1.removeGuildJoinRequest = var12;
    var1.updateGuildJoinRequest = var11;
    var1.actionAllPendingJoinRequests = var10;
    var1.resetGuildJoinRequest = var9;
    var1.fetchRequestToJoinGuilds = var8;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.applicationTab = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setSelectedApplicationTab = var8;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.sortOrder = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setSelectedSortOrder = var8;
    var7 = function arg0, arg1() {
        _fun60085: for (var _fun60085_ip = 0;;) switch (_fun60085_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun60085_ip = 75;
                    continue _fun60085
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.trackMemberApplicationViewed;
                var0 = {};
                var0.guildId = var5;
                var3 = var4.applicationStatus;
                var0.applicationStatus = var3;
                var3 = var4.userId;
                var0.applicationUserId = var3;
                var0 = var1.bind(var2)(var0);
            case 75:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'GUILD_JOIN_REQUESTS_SET_SELECTED';
                var1.type = var6;
                var1.guildId = var5;
                var1.request = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.setSelectedGuildJoinRequest = var7;
    var1.createOrEnterJoinRequestInterview = var6;
    var1.fetchJoinRequestCooldown = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/GuildJoinRequestActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1376, 6551, 3216, 660, 507, 806, 3218, 6660, 4003, 1234, 4232, 2]);