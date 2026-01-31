// modules/premium/premium_group/PremiumGroupActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchPremiumGroupMembership, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59198: for (var _fun59198_ip = 0;;) switch (_fun59198_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59198_ip = 362;
                            continue _fun59198
                        }
                    case 10:
                        var3 = undefined;
                        var5 = undefined;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 4;
                        var2 = var2[var4];
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_START';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                    case 59: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var6.bind(var3)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.get;
                        var2 = {};
                        var8 = _closure1_slot6;
                        var8 = var8.PREMIUM_GROUP_MEMBERSHIP;
                        var2.url = var8;
                        var8 = true;
                        var2.rejectWithError = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 120);
                    case 118:
                        return var2;
                    case 120:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun59198_ip = 313;
                            continue _fun59198
                        }
                    case 129:
                        var7 = var2.body;
                        var5 = var7;
                        var6 = null;
                        if (!(var6 == var7)) {
                            _fun59198_ip = 187;
                            continue _fun59198
                        }
                    case 143:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND';
                        var6.type = var9;
                        var6 = var7.bind(var8)(var6);
                        _fun59198_ip = 310;
                        continue _fun59198;
                    case 187:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = {};
                        var10 = var5;
                        var11 = var10.subscription_id;
                        var9.subscriptionId = var11;
                        var11 = var10.member_type;
                        var9.memberType = var11;
                        var11 = var10.subscription_status;
                        var9.subscriptionStatus = var11;
                        var11 = global;
                        var12 = var11.Date;
                        var13 = var10.current_period_end;
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var14 = var11;
                        var10 = new var14[var12](var13, var12);
                        var10 = var10 instanceof Object ? var10 : var11;
                        var9.currentPeriodEnd = var10;
                        var6.membership = var9;
                        var6 = var7.bind(var8)(var6);
                    case 310: // try_end0
                        return var5;
                    case 313:
                        return var2;
                    case 316: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = null;
                        return var1;
                    case 362:
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
    var0 = function() { // Original name: _fetchEligibleUsers, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun59201: for (var _fun59201_ip = 0;;) switch (_fun59201_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59201_ip = 245;
                            continue _fun59201
                        }
                    case 15:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var7 = _closure1_slot6;
                        var6 = var7.BILLING_SUBSCRIPTION_ELIGIBLE_USERS;
                        var4 = arg0;
                        var4 = var6.bind(var7)(var4);
                        var1.url = var4;
                        var6 = {};
                        var4 = arg1;
                        var6.index = var4;
                        var7 = null;
                        var9 = var7 != var8;
                        var4 = 10;
                        if (!var9) {
                            _fun59201_ip = 98;
                            continue _fun59201
                        }
                    case 95:
                        var4 = var8;
                    case 98:
                        var6.limit = var4;
                        var4 = arg2;
                        var6.search_query = var4;
                        var4 = true;
                        var6.include_ineligible = var4;
                        var1.query = var6;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 137);
                    case 135:
                        return var1;
                    case 137:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59201_ip = 242;
                            continue _fun59201
                        }
                    case 143:
                        var2 = var1.body;
                        var9 = var2.users;
                        var3 = var2.next_index;
                        var8 = var2.ineligible_users;
                        var2 = {};
                        var6 = var9.map;
                        var4 = function(arg0) { // Environment: var5
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var4 = _closure1_slot4;
                            var0 = var4.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = arg0;
                            var7 = var1;
                            var0 = new var7[var4](var6, var5);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var0 = {};
                            var4 = true;
                            var0.eligible = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var11 = var6.bind(var9)(var4);
                        var4 = new Array(0);
                        var10 = 0;
                        var12 = var4;
                        var6 = arraySpread(var12, var11, var10);
                        if (!(var7 == var8)) {
                            _fun59201_ip = 204;
                            continue _fun59201
                        }
                    case 200:
                        var8 = new Array(0);
                    case 204:
                        var7 = var8.map;
                        var5 = function(arg0) { // Environment: var5
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var4 = _closure1_slot4;
                            var0 = var4.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = arg0;
                            var7 = var1;
                            var0 = new var7[var4](var6, var5);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var0 = {};
                            var4 = false;
                            var0.eligible = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var11 = var7.bind(var8)(var5);
                        var12 = var4;
                        var10 = var6;
                        var5 = arraySpread(var12, var11, var10);
                        var2.users = var4;
                        var2.nextIndex = var3;
                        return var2;
                    case 242:
                        return var1;
                    case 245:
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
    var0 = function() { // Original name: _inviteUsersToSubscriptionGroup, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59206: for (var _fun59206_ip = 0;;) switch (_fun59206_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59206_ip = 284;
                            continue _fun59206
                        }
                    case 10:
                        var8 = arg0;
                        var9 = arg1;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 4;
                        var2 = var2[var4];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.dispatch;
                        var2 = {};
                        var7 = 'PREMIUM_GROUP_INVITE_USERS_START';
                        var2.type = var7;
                        var2 = var5.bind(var6)(var2);
                    case 63: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.post;
                        var2 = {};
                        var11 = _closure1_slot6;
                        var10 = var11.BILLING_SUBSCRIPTION_INVITES;
                        var7 = var8;
                        var7 = var10.bind(var11)(var7);
                        var2.url = var7;
                        var7 = {};
                        var7.user_ids = var9;
                        var2.body = var7;
                        var7 = true;
                        var2.rejectWithError = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 144);
                    case 142:
                        return var2;
                    case 144:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun59206_ip = 235;
                            continue _fun59206
                        }
                    case 150:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'PREMIUM_GROUP_INVITE_USERS_SUCCESS';
                        var5.type = var9;
                        var5.subscriptionId = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = {};
                        var6 = var2.body;
                        var6 = var6.invited_users;
                        var5.invitedUsers = var6;
                        var6 = var2.body;
                        var6 = var6.ineligible_users;
                        var5.ineligibleUsers = var6;
                    case 232: // try_end0
                        return var5;
                    case 235:
                        return var2;
                    case 238: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'PREMIUM_GROUP_INVITE_USERS_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = null;
                        return var1;
                    case 284:
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
    var0 = function() { // Original name: _removeUserFromSubscriptionGroup, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun59209: for (var _fun59209_ip = 0;;) switch (_fun59209_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59209_ip = 234;
                            continue _fun59209
                        }
                    case 10:
                        var8 = arg0;
                        var7 = arg1;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 4;
                        var1 = var1[var5];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var9 = 'PREMIUM_GROUP_REMOVE_MEMBER_START';
                        var1.type = var9;
                        var1 = var3.bind(var6)(var1);
                    case 63: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.del;
                        var1 = {};
                        var11 = _closure1_slot6;
                        var10 = var11.BILLING_SUBSCRIPTION_REMOVE_USER;
                        var9 = var8;
                        var7 = var10.bind(var11)(var9, var7);
                        var1.url = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 134);
                    case 132:
                        return var1;
                    case 134:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59209_ip = 187;
                            continue _fun59209
                        }
                    case 140:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS';
                        var3.type = var9;
                        var3.subscriptionId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 184: // try_end0
                        return var1;
                    case 187:
                        return var1;
                    case 190: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'PREMIUM_GROUP_REMOVE_MEMBER_FAILURE';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 234:
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
    var0 = function() { // Original name: _fetchSubscriptionGroupMembers, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59212: for (var _fun59212_ip = 0;;) switch (_fun59212_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59212_ip = 387;
                            continue _fun59212
                        }
                    case 12:
                        var7 = arg0;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 4;
                        var2 = var2[var4];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.dispatch;
                        var2 = {};
                        var8 = 'PREMIUM_GROUP_MEMBERS_FETCH_START';
                        var2.type = var8;
                        var2 = var5.bind(var6)(var2);
                    case 62: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.get;
                        var2 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.BILLING_SUBSCRIPTION_MEMBERS;
                        var7 = var8.bind(var9)(var7);
                        var2.url = var7;
                        var7 = true;
                        var2.rejectWithError = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 128);
                    case 126:
                        return var2;
                    case 128:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun59212_ip = 336;
                            continue _fun59212
                        }
                    case 137:
                        var7 = var2.body;
                        var6 = var7.map;
                        var5 = _closure1_slot5;
                        var5 = var5.createFromServer;
                        var5 = var6.bind(var7)(var5);
                        var7 = var5.find;
                        var6 = function(arg0) { // Environment: var10
                            var1 = arg0;
                            var0 = var1.isPrimary;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var11 = var7.bind(var5)(var6);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var8 = 6;
                        var8 = var6[var8];
                        var12 = var7.bind(var3)(var8);
                        var8 = null;
                        var9 = var8 != var11;
                        var8 = 'Primary member not found in premium group';
                        var8 = var12.bind(var3)(var9, var8);
                        var6 = var6[var4];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = {};
                        var11 = var11.user;
                        var9.primary = var11;
                        var12 = var5.filter;
                        var11 = function(arg0) { // Environment: var10
                            var1 = arg0;
                            var0 = var1.isMember;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var13 = var12.bind(var5)(var11);
                        var12 = var13.map;
                        var11 = function(arg0) { // Environment: var10
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var11 = var12.bind(var13)(var11);
                        var9.members = var11;
                        var12 = var5.filter;
                        var11 = function(arg0) { // Environment: var10
                            var1 = arg0;
                            var0 = var1.isInvited;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var12 = var12.bind(var5)(var11);
                        var11 = var12.map;
                        var10 = function(arg0) { // Environment: var10
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var10 = var11.bind(var12)(var10);
                        var9.invitedUsers = var10;
                        var6.members = var9;
                        var6 = var7.bind(var8)(var6);
                    case 333: // try_end0
                        return var5;
                    case 336:
                        return var2;
                    case 339: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'PREMIUM_GROUP_MEMBERS_FETCH_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = new Array(0);
                        return var1;
                    case 387:
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
    var0 = function() { // Original name: _acceptSubscriptionGroupInvite, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59220: for (var _fun59220_ip = 0;;) switch (_fun59220_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59220_ip = 250;
                            continue _fun59220
                        }
                    case 13:
                        var9 = arg0;
                        var8 = arg1;
                        var5 = var10;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 4;
                        var1 = var1[var6];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var1);
                        var3 = var7.dispatch;
                        var1 = {};
                        var11 = 'PREMIUM_GROUP_ACCEPT_INVITE_START';
                        var1.type = var11;
                        var1.subscriptionGroupMemberId = var10;
                        var1 = var3.bind(var7)(var1);
                    case 74: // try_start_0
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 5;
                        var1 = var7[var1];
                        var1 = var3.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var3 = var7.patch;
                        var1 = {};
                        var11 = _closure1_slot6;
                        var10 = var11.BILLING_SUBSCRIPTION_INVITE;
                        var8 = var10.bind(var11)(var9, var8);
                        var1.url = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 142);
                    case 140:
                        return var1;
                    case 142:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59220_ip = 198;
                            continue _fun59220
                        }
                    case 148:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var8 = var7.bind(var4)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var9 = 'PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS';
                        var3.type = var9;
                        var9 = var5;
                        var3.subscriptionGroupMemberId = var9;
                        var3 = var7.bind(var8)(var3);
                    case 195: // try_end0
                        return var1;
                    case 198:
                        return var1;
                    case 201: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'PREMIUM_GROUP_ACCEPT_INVITE_FAIL';
                        var2.type = var6;
                        var2.subscriptionGroupMemberId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 250:
                        return var0;
                }
            };
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
    var0 = function() { // Original name: _removeSubscriptionGroupInvite, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59223: for (var _fun59223_ip = 0;;) switch (_fun59223_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59223_ip = 300;
                            continue _fun59223
                        }
                    case 13:
                        var5 = arg0;
                        var11 = arg1;
                        var9 = var12;
                        var6 = undefined;
                        var7 = undefined;
                        var8 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 4;
                        var3 = var3[var4];
                        var10 = var8.bind(var6)(var3);
                        var8 = var10.dispatch;
                        var3 = {};
                        var13 = 'PREMIUM_GROUP_REMOVE_INVITE_START';
                        var3.type = var13;
                        var3.subscriptionGroupMemberId = var12;
                        var3 = var8.bind(var10)(var3);
                    case 76: // try_start_0
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 5;
                        var3 = var10[var3];
                        var3 = var8.bind(var6)(var3);
                        var10 = var3.HTTP;
                        var8 = var10.del;
                        var3 = {};
                        var14 = _closure1_slot6;
                        var13 = var14.BILLING_SUBSCRIPTION_INVITE;
                        var12 = var5;
                        var11 = var13.bind(var14)(var12, var11);
                        var3.url = var11;
                        var11 = true;
                        var3.rejectWithError = var11;
                        var3 = var8.bind(var10)(var3);
                        SaveGenerator(address = 147);
                    case 145:
                        return var3;
                    case 147:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun59223_ip = 211;
                            continue _fun59223
                        }
                    case 153:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var4];
                        var11 = var10.bind(var6)(var8);
                        var10 = var11.dispatch;
                        var8 = {};
                        var12 = 'PREMIUM_GROUP_REMOVE_INVITE_SUCCESS';
                        var8.type = var12;
                        var12 = var5;
                        var8.subscriptionId = var12;
                        var12 = var9;
                        var8.subscriptionGroupMemberId = var12;
                        var8 = var10.bind(var11)(var8);
                    case 208: // try_end0
                        return var3;
                    case 211:
                        return var3;
                    case 214: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var1 = var8;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var6)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var10 = 'PREMIUM_GROUP_REMOVE_INVITE_FAILURE';
                        var2.type = var10;
                        var2.subscriptionGroupMemberId = var9;
                        var9 = var8.body;
                        var7 = var9;
                        var8 = null;
                        var8 = var8 == var9;
                        var6 = undefined;
                        if (var8) {
                            _fun59223_ip = 282;
                            continue _fun59223
                        }
                    case 277:
                        var6 = var7.code;
                    case 282:
                        var2.errorCode = var6;
                        var2.subscriptionId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 300:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _fetchPremiumGroupInvites, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59226: for (var _fun59226_ip = 0;;) switch (_fun59226_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59226_ip = 222;
                            continue _fun59226
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 4;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'PREMIUM_GROUP_INVITES_FETCH_START';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                    case 57: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var7 = _closure1_slot6;
                        var7 = var7.PREMIUM_GROUP_INVITES;
                        var3.url = var7;
                        var7 = true;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 118);
                    case 116:
                        return var3;
                    case 118:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun59226_ip = 175;
                            continue _fun59226
                        }
                    case 124:
                        var8 = var3.body;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'PREMIUM_GROUP_INVITES_FETCH_SUCCESS';
                        var5.type = var9;
                        var5.invites = var8;
                        var5 = var6.bind(var7)(var5);
                    case 173: // try_end0
                        _fun59226_ip = 219;
                        continue _fun59226;
                    case 175:
                        return var3;
                    case 178: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'PREMIUM_GROUP_INVITES_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 219:
                        return var1;
                    case 222:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _fetchPremiumGroupInvite, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59229: for (var _fun59229_ip = 0;;) switch (_fun59229_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59229_ip = 294;
                            continue _fun59229
                        }
                    case 13:
                        var7 = var10;
                        var1 = undefined;
                        var6 = undefined;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 4;
                        var3 = var3[var4];
                        var9 = var5.bind(var1)(var3);
                        var5 = var9.dispatch;
                        var3 = {};
                        var11 = 'PREMIUM_GROUP_INVITE_FETCH_START';
                        var3.type = var11;
                        var3.subscriptionGroupMemberId = var10;
                        var3 = var5.bind(var9)(var3);
                    case 70: // try_start_0
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 5;
                        var3 = var9[var3];
                        var3 = var5.bind(var1)(var3);
                        var9 = var3.HTTP;
                        var5 = var9.get;
                        var3 = {};
                        var12 = _closure1_slot6;
                        var11 = var12.PREMIUM_GROUP_INVITE;
                        var10 = var7;
                        var10 = var11.bind(var12)(var10);
                        var3.url = var10;
                        var10 = true;
                        var3.rejectWithError = var10;
                        var3 = var5.bind(var9)(var3);
                        SaveGenerator(address = 139);
                    case 137:
                        return var3;
                    case 139:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun59229_ip = 204;
                            continue _fun59229
                        }
                    case 145:
                        var11 = var3.body;
                        var9 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var10 = var9.bind(var1)(var5);
                        var9 = var10.dispatch;
                        var5 = {};
                        var12 = 'PREMIUM_GROUP_INVITE_FETCH_SUCCESS';
                        var5.type = var12;
                        var12 = var7;
                        var5.subscriptionGroupMemberId = var12;
                        var5.invite = var11;
                        var5 = var9.bind(var10)(var5);
                    case 202: // try_end0
                        _fun59229_ip = 291;
                        continue _fun59229;
                    case 204:
                        return var3;
                    case 207: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var8 = var5;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var9 = 'PREMIUM_GROUP_INVITE_FETCH_FAIL';
                        var2.type = var9;
                        var2.subscriptionGroupMemberId = var7;
                        var7 = null;
                        var9 = var7 == var5;
                        var5 = undefined;
                        if (var9) {
                            _fun59229_ip = 267;
                            continue _fun59229
                        }
                    case 262:
                        var5 = var8.status;
                    case 267:
                        var6 = var5;
                        var7 = var7 != var5;
                        var5 = 0;
                        if (!var7) {
                            _fun59229_ip = 282;
                            continue _fun59229
                        }
                    case 279:
                        var5 = var6;
                    case 282:
                        var2.status = var5;
                        var2 = var3.bind(var4)(var2);
                    case 291:
                        return var1;
                    case 294:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/PremiumGroupActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: fetchPremiumGroupMembership, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPremiumGroupMembership = var3;
    var3 = function() { // Original name: fetchEligibleUsers, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchEligibleUsers = var3;
    var3 = function() { // Original name: inviteUsersToSubscriptionGroup, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.inviteUsersToSubscriptionGroup = var3;
    var3 = function() { // Original name: removeUserFromSubscriptionGroup, environment: var1
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removeUserFromSubscriptionGroup = var3;
    var3 = function() { // Original name: fetchSubscriptionGroupMembers, environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSubscriptionGroupMembers = var3;
    var3 = function() { // Original name: acceptSubscriptionGroupInvite, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.acceptSubscriptionGroupInvite = var3;
    var3 = function() { // Original name: removeSubscriptionGroupInvite, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removeSubscriptionGroupInvite = var3;
    var3 = function() { // Original name: fetchPremiumGroupInvites, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPremiumGroupInvites = var3;
    var1 = function() { // Original name: fetchPremiumGroupInvite, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPremiumGroupInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1620, 7244, 660, 806, 507, 44, 2]);