// actions/UserActionCreators.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun57005: for (var _fun57005_ip = 0;;) switch (_fun57005_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57005_ip = 789;
                            continue _fun57005
                        }
                    case 13:
                        var7 = arg0;
                        var11 = undefined;
                        if (!(var1 === var11)) {
                            _fun57005_ip = 24;
                            continue _fun57005
                        }
                    case 22:
                        var1 = {};
                    case 24:
                        var22 = var1.type;
                        var19 = var1.withMutualGuilds;
                        var20 = var1.withMutualFriendsCount;
                        var21 = var1.withMutualFriends;
                        var6 = var1.guildId;
                        var18 = var1.connectionsRoleId;
                        var17 = var1.joinRequestId;
                        var15 = var1.abortSignal;
                        var10 = arguments[2];
                        var8 = undefined;
                        var14 = undefined;
                        SaveGenerator(address = 81);
                    case 79:
                        return var11;
                    case 81:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57005_ip = 786;
                            continue _fun57005
                        }
                    case 90:
                        var4 = global;
                        var5 = var4.Date;
                        var3 = var5.now;
                        var8 = var3.bind(var5)();
                        var12 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 6;
                        var5 = var5[var3];
                        var13 = var12.bind(var11)(var5);
                        var12 = var13.dispatch;
                        var5 = {};
                        var16 = 'USER_PROFILE_FETCH_START';
                        var5.type = var16;
                        var16 = var7;
                        var5.userId = var16;
                        var16 = var6;
                        var5.guildId = var16;
                        var16 = var21;
                        var5.withMutualFriends = var16;
                        var5 = var12.bind(var13)(var5);
                    case 174: // try_start_0
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 5;
                        var5 = var13[var5];
                        var5 = var12.bind(var11)(var5);
                        var13 = var5.HTTP;
                        var12 = var13.get;
                        var5 = {};
                        var24 = _closure1_slot6;
                        var23 = var24.USER_PROFILE;
                        var16 = var7;
                        var16 = var23.bind(var24)(var16);
                        var5.url = var16;
                        var16 = {};
                        var16.type = var22;
                        var16.with_mutual_guilds = var19;
                        var19 = var21;
                        var16.with_mutual_friends = var19;
                        var19 = var20;
                        if (!var20) {
                            _fun57005_ip = 278;
                            continue _fun57005
                        }
                    case 257:
                        var23 = var21;
                        var22 = null;
                        var22 = var22 == var23;
                        var20 = var22;
                        if (var22) {
                            _fun57005_ip = 275;
                            continue _fun57005
                        }
                    case 272:
                        var20 = !var21;
                    case 275:
                        var19 = var20;
                    case 278:
                        var16.with_mutual_friends_count = var19;
                        var19 = var6;
                        var16.guild_id = var19;
                        var16.connections_role_id = var18;
                        var16.join_request_id = var17;
                        var5.query = var16;
                        var5.signal = var15;
                        var15 = true;
                        var5.rejectWithError = var15;
                        var5 = var12.bind(var13)(var5);
                        SaveGenerator(address = 329);
                    case 327:
                        return var5;
                    case 329:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 12);
                        if (var12) {
                            _fun57005_ip = 568;
                            continue _fun57005
                        }
                    case 338:
                        var14 = var5;
                        var12 = var10;
                        var13 = null;
                        if (!(var13 != var12)) {
                            _fun57005_ip = 370;
                            continue _fun57005
                        }
                    case 350:
                        var15 = var10;
                        var10 = var14;
                        var12 = var10.body;
                        var10 = var6;
                        var10 = var15.bind(var11)(var12, var10);
                    case 370:
                        var12 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var15 = var10[var3];
                        var18 = var12.bind(var11)(var15);
                        var17 = var18.dispatch;
                        var15 = {};
                        var16 = 'USER_UPDATE';
                        var15.type = var16;
                        var16 = var14;
                        var19 = var16.body;
                        var19 = var19.user;
                        var15.user = var19;
                        var15 = var17.bind(var18)(var15);
                        var10 = var10[var3];
                        var15 = var12.bind(var11)(var10);
                        var12 = var15.dispatch;
                        var10 = {};
                        var17 = 'USER_PROFILE_FETCH_SUCCESS';
                        var10.type = var17;
                        var16 = var16.body;
                        var10.userProfile = var16;
                        var16 = var8;
                        var10.fetchStartedAt = var16;
                        var10 = var12.bind(var15)(var10);
                        var12 = var6;
                        var12 = var13 != var12;
                        var10 = var12;
                        if (!var12) {
                            _fun57005_ip = 502;
                            continue _fun57005
                        }
                    case 484:
                        var12 = var14;
                        var12 = var12.body;
                        var12 = var12.guild_member;
                        var10 = var13 != var12;
                    case 502:
                        if (!var10) {
                            _fun57005_ip = 565;
                            continue _fun57005
                        }
                    case 505:
                        var12 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var3];
                        var13 = var12.bind(var11)(var10);
                        var12 = var13.dispatch;
                        var10 = {};
                        var15 = 'GUILD_MEMBER_PROFILE_UPDATE';
                        var10.type = var15;
                        var15 = var6;
                        var10.guildId = var15;
                        var14 = var14.body;
                        var14 = var14.guild_member;
                        var10.guildMember = var14;
                        var10 = var12.bind(var13)(var10);
                    case 565: // try_end0
                        return var11;
                    case 568:
                        return var5;
                    case 571: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var2 = var10;
                        var12 = null;
                        var10 = var12 != var10;
                        var5 = var10;
                        if (!var10) {
                            _fun57005_ip = 612;
                            continue _fun57005
                        }
                    case 588:
                        var10 = var2;
                        var13 = var12 == var10;
                        var10 = undefined;
                        if (var13) {
                            _fun57005_ip = 608;
                            continue _fun57005
                        }
                    case 600:
                        var13 = var2;
                        var10 = var13.body;
                    case 608:
                        var5 = var12 != var10;
                    case 612:
                        if (!var5) {
                            _fun57005_ip = 682;
                            continue _fun57005
                        }
                    case 615:
                        var10 = _closure1_slot7;
                        var5 = var10.warn;
                        var12 = var2;
                        var13 = var12.body;
                        var15 = var13.code;
                        var12 = var12.body;
                        var14 = var12.message;
                        var4 = var4.HermesInternal;
                        var13 = var4.concat;
                        var12 = 'fetchProfile error: ';
                        var4 = ' - ';
                        var4 = var13.bind(var12)(var15, var4, var14);
                        var4 = var5.bind(var10)(var4);
                    case 682:
                        var4 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = var12[var3];
                        var5 = var4.bind(var11)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var10 = 'USER_PROFILE_FETCH_FAILURE';
                        var3.type = var10;
                        var10 = _closure1_slot0;
                        var9 = 10;
                        var9 = var12[var9];
                        var9 = var10.bind(var11)(var9);
                        var9 = var9.APIError;
                        var10 = var9.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var9
                            }
                        });
                        var28 = var10;
                        var27 = var2;
                        var9 = new var28[var9](var27, var26);
                        var9 = var9 instanceof Object ? var9 : var10;
                        var3.apiError = var9;
                        var3.fetchStartedAt = var8;
                        var3.userId = var7;
                        var3.guildId = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 786:
                        return var1;
                    case 789:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun57008: for (var _fun57008_ip = 0;;) switch (_fun57008_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57008_ip = 361;
                            continue _fun57008
                        }
                    case 13:
                        var5 = var10;
                        var9 = arg1;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 6;
                        var3 = var3[var6];
                        var4 = undefined;
                        var8 = var7.bind(var4)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var11 = 'MUTUAL_FRIENDS_FETCH_START';
                        var3.type = var11;
                        var3.userId = var10;
                        var3 = var7.bind(var8)(var3);
                    case 70: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 5;
                        var3 = var8[var3];
                        var3 = var7.bind(var4)(var3);
                        var8 = var3.HTTP;
                        var7 = var8.get;
                        var3 = {};
                        var12 = _closure1_slot6;
                        var11 = var12.USER_RELATIONSHIPS;
                        var10 = var5;
                        var10 = var11.bind(var12)(var10);
                        var3.url = var10;
                        var10 = true;
                        var3.oldFormErrors = var10;
                        var3.signal = var9;
                        var9 = false;
                        var3.rejectWithError = var9;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address = 151);
                    case 149:
                        return var3;
                    case 151:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun57008_ip = 216;
                            continue _fun57008
                        }
                    case 157:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'MUTUAL_FRIENDS_FETCH_SUCCESS';
                        var7.type = var10;
                        var10 = var5;
                        var7.userId = var10;
                        var10 = var3.body;
                        var7.mutualFriends = var10;
                        var7 = var8.bind(var9)(var7);
                    case 213: // try_end0
                        return var4;
                    case 216:
                        return var3;
                    case 219: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = var3;
                        var7 = null;
                        var8 = var7 == var3;
                        var3 = undefined;
                        if (var8) {
                            _fun57008_ip = 243;
                            continue _fun57008
                        }
                    case 235:
                        var8 = var1;
                        var3 = var8.body;
                    case 243:
                        if (!(var7 != var3)) {
                            _fun57008_ip = 316;
                            continue _fun57008
                        }
                    case 247:
                        var8 = _closure1_slot7;
                        var7 = var8.warn;
                        var3 = var1;
                        var9 = var3.body;
                        var12 = var9.code;
                        var3 = var3.body;
                        var11 = var3.message;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var10 = var3.concat;
                        var9 = 'fetchMutualFriends error: ';
                        var3 = ' - ';
                        var3 = var10.bind(var9)(var12, var3, var11);
                        var3 = var7.bind(var8)(var3);
                    case 316:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'MUTUAL_FRIENDS_FETCH_FAILURE';
                        var2.type = var6;
                        var2.userId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 361:
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'UserProfileModalActionCreators';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/UserActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun57009: for (var _fun57009_ip = 0;;) switch (_fun57009_ip) {
            case 0:
                var1 = arguments[0];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun57009_ip = 13;
                    continue _fun57009
                }
            case 11:
                var1 = {};
            case 13:
                var _closure2_slot0 = var3;
                var1 = var1.withAnalyticsToken;
                var5 = var3 !== var1;
                if (!var5) {
                    _fun57009_ip = 35;
                    continue _fun57009
                }
            case 32:
                var5 = var1;
            case 35:
                _closure2_slot0 = var5;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.ME;
                var1.url = var4;
                var4 = {};
                var4.with_analytics_token = var5;
                var1.query = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun57010: for (var _fun57010_ip = 0;;) switch (_fun57010_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 6;
                            var2 = var4[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'CURRENT_USER_UPDATE';
                            var2.type = var6;
                            var6 = var0.body;
                            var2.user = var6;
                            var6 = _closure2_slot0;
                            if (!var6) {
                                _fun57010_ip = 73;
                                continue _fun57010
                            }
                        case 62:
                            var6 = var0.body;
                            var5 = var6.analytics_token;
                        case 73:
                            var2.analyticsToken = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure1_slot4;
                            var7 = var0.body;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.fetchCurrentUser = var3;
    var3 = function() {
        _fun57011: for (var _fun57011_ip = 0;;) switch (_fun57011_ip) {
            case 0:
                var6 = arguments[0];
                var5 = arguments[1];
                var9 = undefined;
                if (!(var6 === var9)) {
                    _fun57011_ip = 16;
                    continue _fun57011
                }
            case 14:
                var6 = true;
            case 16:
                if (!(var5 === var9)) {
                    _fun57011_ip = 22;
                    continue _fun57011
                }
            case 20:
                var5 = true;
            case 22:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var3 = var2.bind(var9)(var1);
                var2 = var3.patch;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.USER_AGREEMENTS;
                var1.url = var4;
                var4 = {};
                var8 = _closure1_slot0;
                var7 = 8;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.NetworkActionNames;
                var7 = var7.USER_ACCEPT_AGREEMENTS;
                var4.event = var7;
                var1.trackedActionData = var4;
                var4 = {};
                var4.terms = var6;
                var4.privacy = var5;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    var0 = true;
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var0 = false;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.acceptAgreements = var3;
    var3 = function arg0, arg1() {
        _fun57014: for (var _fun57014_ip = 0;;) switch (_fun57014_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot5;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var4 = null;
                var5 = var4 != var0;
                var4 = 'setFlag: user cannot be undefined';
                var4 = var6.bind(var2)(var5, var4);
                var0 = var0.flags;
                var4 = arg1;
                if (var4) {
                    _fun57014_ip = 79;
                    continue _fun57014
                }
            case 70:
                var4 = ~var1;
                var4 = var0 & var4;
                _fun57014_ip = 83;
                continue _fun57014;
            case 79:
                var4 = var0 | var1;
            case 83:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.patch;
                var0 = {};
                var3 = _closure1_slot6;
                var3 = var3.ME;
                var0.url = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = {};
                var3.flags = var4;
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.setFlag = var3;
    var3 = function arg0() {
        _fun57015: for (var _fun57015_ip = 0;;) switch (_fun57015_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot5;
                var1 = var2.getUser;
                var3 = var1.bind(var2)(var7);
                var1 = null;
                if (!(var1 == var3)) {
                    _fun57015_ip = 118;
                    continue _fun57015
                }
            case 33:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var4 = var1.HTTP;
                var2 = var4.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': false
                };
                var6 = _closure1_slot6;
                var5 = var6.USER;
                var5 = var5.bind(var6)(var7);
                var1.url = var5;
                var2 = var2.bind(var4)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'USER_UPDATE';
                    var1.type = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var1.user = var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot5;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun57015_ip = 137;
                continue _fun57015;
            case 118:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)(var3);
            case 137:
                return var0;
        }
    };
    var2.getUser = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_UPDATE';
        var2.type = var5;
        var2.user = var0;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot5;
        var1 = var2.getUser;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.insertStaticUser = var3;
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
    var2.fetchProfile = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMutualFriends = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1620, 1613, 660, 3, 507, 806, 4521, 648, 44, 3341, 2]);