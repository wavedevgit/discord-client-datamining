// modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx
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
    var0 = function arg0, arg1() {
        _fun49665: for (var _fun49665_ip = 0;;) switch (_fun49665_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49665_ip = 46;
                    continue _fun49665
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49665_ip = 55;
                    continue _fun49665
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49665_ip = 343;
                    continue _fun49665
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49665_ip = 323;
                    continue _fun49665
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49665_ip = 283;
                    continue _fun49665
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49665_ip = 270;
                    continue _fun49665
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun49665_ip = 163;
                    continue _fun49665
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49665_ip = 179;
                    continue _fun49665
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49665_ip = 249;
                    continue _fun49665
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49665_ip = 249;
                    continue _fun49665
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49665_ip = 234;
                    continue _fun49665
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49665_ip = 247;
                    continue _fun49665
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49665_ip = 265;
                continue _fun49665;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49665_ip = 283;
                continue _fun49665;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49665_ip = 323;
                    continue _fun49665
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun49665_ip = 330;
                    continue _fun49665
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49666: for (var _fun49666_ip = 0;;) switch (_fun49666_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49666_ip = 56;
                                continue _fun49666
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun49666_ip = 67;
                            continue _fun49666;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun49667: for (var _fun49667_ip = 0;;) switch (_fun49667_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49667_ip = 23;
                    continue _fun49667
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49667_ip = 33;
                    continue _fun49667
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun49667_ip = 70;
                    continue _fun49667
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49667_ip = 55;
                    continue _fun49667
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49670: for (var _fun49670_ip = 0;;) switch (_fun49670_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49670_ip = 109;
                            continue _fun49670
                        }
                    case 7:
                        var4 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.getGuildRoleSubscriptionsSettings;
                        var1 = arg0;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49670_ip = 106;
                            continue _fun49670
                        }
                    case 56:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                        var3.type = var6;
                        var3.settings = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 106:
                        return var1;
                    case 109:
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
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49673: for (var _fun49673_ip = 0;;) switch (_fun49673_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49673_ip = 113;
                            continue _fun49673
                        }
                    case 7:
                        var4 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var1);
                        var5 = var6.updateGuildRoleSubscriptionsSettings;
                        var4 = arg0;
                        var1 = arg1;
                        var1 = var5.bind(var6)(var4, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49673_ip = 110;
                            continue _fun49673
                        }
                    case 60:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                        var3.type = var6;
                        var3.settings = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 110:
                        return var1;
                    case 113:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49676: for (var _fun49676_ip = 0;;) switch (_fun49676_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49676_ip = 637;
                            continue _fun49676
                        }
                    case 13:
                        var6 = arg0;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun49676_ip = 24;
                            continue _fun49676
                        }
                    case 22:
                        var1 = {};
                    case 24:
                        var4 = var1.includeSoftDeleted;
                        if (!(var4 === var2)) {
                            _fun49676_ip = 36;
                            continue _fun49676
                        }
                    case 34:
                        var4 = true;
                    case 36:
                        var24 = var4;
                        var23 = var1.countryCode;
                        var13 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var14 = undefined;
                        var15 = undefined;
                        var16 = undefined;
                        var17 = undefined;
                        SaveGenerator(address = 65);
                    case 63:
                        return var2;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49676_ip = 634;
                            continue _fun49676
                        }
                    case 74:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var5 = 4;
                        var4 = var4[var5];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var9 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS';
                        var4.type = var9;
                        var9 = var6;
                        var4.guildId = var9;
                        var4 = var7.bind(var8)(var4);
                    case 126: // try_start_0
                        var4 = global;
                        var9 = var4.Promise;
                        var7 = var9.all;
                        var19 = _closure1_slot2;
                        var20 = _closure1_slot3;
                        var8 = 3;
                        var4 = var20[var8];
                        var22 = var19.bind(var2)(var4);
                        var18 = var22.getGuildRoleSubscriptionGroupListingsForGuild;
                        var21 = var6;
                        var4 = {};
                        var4.includeSoftDeleted = var24;
                        var4.countryCode = var23;
                        var18 = var18.bind(var22)(var21, var4);
                        var4 = new Array(4);
                        var4[0] = var18;
                        var18 = var20[var8];
                        var22 = var19.bind(var2)(var18);
                        var18 = var22.getGuildRoleSubscriptionsSettings;
                        var18 = var18.bind(var22)(var21);
                        var4[1] = var18;
                        var18 = var20[var8];
                        var19 = var19.bind(var2)(var18);
                        var18 = var19.getGuildRoleSubscriptionTrials;
                        var18 = var18.bind(var19)(var21);
                        var4[2] = var18;
                        var19 = _closure1_slot0;
                        var18 = 5;
                        var18 = var20[var18];
                        var19 = var19.bind(var2)(var18);
                        var18 = var19.fetchSubscriptions;
                        var18 = var18.bind(var19)();
                        var4[3] = var18;
                        var4 = var7.bind(var9)(var4);
                        SaveGenerator(address = 282);
                    case 280:
                        return var4;
                    case 282:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun49676_ip = 583;
                            continue _fun49676
                        }
                    case 291:
                        var7 = _closure1_slot4;
                        var9 = var7.bind(var2)(var4, var8);
                        var7 = 0;
                        var8 = var9[var7];
                        var12 = var8;
                        var7 = 1;
                        var11 = var9[var7];
                        var7 = 2;
                        var10 = var9[var7];
                        var7 = _closure1_slot7;
                        var7 = var7.bind(var2)(var8);
                        var14 = var7;
                        var7 = var7.bind(var2)();
                        var13 = var7;
                        var7 = var7.done;
                        var9 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                        var8 = null;
                        if (var7) {
                            _fun49676_ip = 520;
                            continue _fun49676
                        }
                    case 362:
                        var18 = _closure1_slot7;
                        var7 = var13;
                        var7 = var7.value;
                        var7 = var7.subscription_listings;
                        var17 = var7;
                        if (!(var8 == var7)) {
                            _fun49676_ip = 393;
                            continue _fun49676
                        }
                    case 387:
                        var7 = new Array(0);
                        _fun49676_ip = 396;
                        continue _fun49676;
                    case 393:
                        var7 = var17;
                    case 396:
                        var7 = var18.bind(var2)(var7);
                        var16 = var7;
                        var7 = var7.bind(var2)();
                        var15 = var7;
                        var7 = var7.done;
                        if (var7) {
                            _fun49676_ip = 499;
                            continue _fun49676
                        }
                    case 419:
                        var7 = var15;
                        var20 = var7.value;
                        var18 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var5];
                        var19 = var18.bind(var2)(var7);
                        var18 = var19.dispatch;
                        var7 = {};
                        var7.type = var9;
                        var21 = var20.id;
                        var7.skuId = var21;
                        var20 = var20.subscription_plans;
                        var7.subscriptionPlans = var20;
                        var7 = var18.bind(var19)(var7);
                        var7 = var16;
                        var7 = var7.bind(var2)();
                        var15 = var7;
                        var7 = var7.done;
                        if (!var7) {
                            _fun49676_ip = 419;
                            continue _fun49676
                        }
                    case 499:
                        var7 = var14;
                        var7 = var7.bind(var2)();
                        var13 = var7;
                        var7 = var7.done;
                        if (!var7) {
                            _fun49676_ip = 362;
                            continue _fun49676
                        }
                    case 520:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var13 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                        var7.type = var13;
                        var13 = var6;
                        var7.guildId = var13;
                        var7.groupListings = var12;
                        var7.settings = var11;
                        var7.subscriptionTrials = var10;
                        var7 = var8.bind(var9)(var7);
                    case 581: // try_end0
                        _fun49676_ip = 631;
                        continue _fun49676;
                    case 583:
                        return var4;
                    case 586: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 631:
                        return var2;
                    case 634:
                        return var1;
                    case 637:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49679: for (var _fun49679_ip = 0;;) switch (_fun49679_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49679_ip = 113;
                            continue _fun49679
                        }
                    case 7:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var5 = var6.createGuildRoleSubscriptionGroupListing;
                        var3 = arg0;
                        var1 = arg1;
                        var1 = var5.bind(var6)(var3, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49679_ip = 110;
                            continue _fun49679
                        }
                    case 60:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                        var2.type = var5;
                        var2.listing = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 110:
                        return var1;
                    case 113:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49682: for (var _fun49682_ip = 0;;) switch (_fun49682_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49682_ip = 117;
                            continue _fun49682
                        }
                    case 7:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var1);
                        var6 = var7.updateGuildRoleSubscriptionGroupListing;
                        var5 = arg0;
                        var3 = arg1;
                        var1 = arg2;
                        var1 = var6.bind(var7)(var5, var3, var1);
                        SaveGenerator(address = 58);
                    case 56:
                        return var1;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49682_ip = 114;
                            continue _fun49682
                        }
                    case 64:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                        var2.type = var5;
                        var2.listing = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 114:
                        return var1;
                    case 117:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49685: for (var _fun49685_ip = 0;;) switch (_fun49685_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49685_ip = 115;
                            continue _fun49685
                        }
                    case 10:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.deleteGuildRoleSubscriptionGroupListing;
                        var1 = arg0;
                        var1 = var3.bind(var6)(var1, var5);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49685_ip = 112;
                            continue _fun49685
                        }
                    case 60:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 4;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING';
                        var2.type = var6;
                        var2.groupListingId = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = true;
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
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49688: for (var _fun49688_ip = 0;;) switch (_fun49688_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49688_ip = 295;
                            continue _fun49688
                        }
                    case 13:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var5 = 4;
                        var1 = var4[var5];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var7 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                        var1.type = var7;
                        var1.planId = var11;
                        var1 = var3.bind(var6)(var1);
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.getGuildRoleSubscriptionGroupForSubscriptionPlan;
                        var1 = var1.bind(var3)(var11);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49688_ip = 292;
                            continue _fun49688
                        }
                    case 105:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                        var3.type = var6;
                        var3.groupListing = var1;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot7;
                        var3 = var1.subscription_listings;
                        var5 = null;
                        if (!(var5 == var3)) {
                            _fun49688_ip = 169;
                            continue _fun49688
                        }
                    case 165:
                        var3 = new Array(0);
                    case 169:
                        var9 = var4.bind(var2)(var3);
                        var4 = var9.bind(var2)();
                        var3 = var4.done;
                        var8 = 6;
                        var6 = 0;
                        var5 = var4;
                        if (var3) {
                            _fun49688_ip = 289;
                            continue _fun49688
                        }
                    case 194:
                        var3 = var5.value;
                        var4 = var3.subscription_plans;
                        var4 = var4[var6];
                        var4 = var4.id;
                        if (!(var4 === var11)) {
                            _fun49688_ip = 269;
                            continue _fun49688
                        }
                    case 218:
                        var12 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var4 = var4[var8];
                        var12 = var12.bind(var2)(var4);
                        var4 = var12.fetchSubscriptionPlansForSKU;
                        var16 = var3.id;
                        var17 = var12;
                        var15 = undefined;
                        var14 = undefined;
                        var13 = true;
                        var3 = var17[var4](var16, var15, var14, var13, var12);
                        SaveGenerator(address = 263);
                    case 261:
                        return var3;
                    case 263:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49688_ip = 286;
                            continue _fun49688
                        }
                    case 269:
                        var12 = var9.bind(var2)();
                        var4 = var12.done;
                        var5 = var12;
                        if (var4) {
                            _fun49688_ip = 289;
                            continue _fun49688
                        }
                    case 284:
                        _fun49688_ip = 194;
                        continue _fun49688;
                    case 286:
                        return var3;
                    case 289:
                        return var2;
                    case 292:
                        return var1;
                    case 295:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49691: for (var _fun49691_ip = 0;;) switch (_fun49691_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49691_ip = 117;
                            continue _fun49691
                        }
                    case 10:
                        var4 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var5 = var7.deleteGuildRoleSubscriptionListing;
                        var4 = arg0;
                        var1 = arg1;
                        var1 = var5.bind(var7)(var4, var1, var6);
                        SaveGenerator(address = 58);
                    case 56:
                        return var1;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49691_ip = 114;
                            continue _fun49691
                        }
                    case 64:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING';
                        var3.type = var7;
                        var3.listingId = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 114:
                        return var1;
                    case 117:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49694: for (var _fun49694_ip = 0;;) switch (_fun49694_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49694_ip = 117;
                            continue _fun49694
                        }
                    case 7:
                        var4 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var6 = var7.archiveGuildRoleSubscriptionListing;
                        var5 = arg0;
                        var4 = arg1;
                        var1 = arg2;
                        var1 = var6.bind(var7)(var5, var4, var1);
                        SaveGenerator(address = 58);
                    case 56:
                        return var1;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49694_ip = 114;
                            continue _fun49694
                        }
                    case 64:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                        var3.type = var6;
                        var3.listing = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 114:
                        return var1;
                    case 117:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49697: for (var _fun49697_ip = 0;;) switch (_fun49697_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49697_ip = 117;
                            continue _fun49697
                        }
                    case 7:
                        var4 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var6 = var7.updateGuildRoleSubscriptionsTrial;
                        var5 = arg0;
                        var4 = arg1;
                        var1 = arg2;
                        var1 = var6.bind(var7)(var5, var4, var1);
                        SaveGenerator(address = 58);
                    case 56:
                        return var1;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49697_ip = 114;
                            continue _fun49697
                        }
                    case 64:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL';
                        var3.type = var6;
                        var3.subscriptionTrial = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 114:
                        return var1;
                    case 117:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49701: for (var _fun49701_ip = 0;;) switch (_fun49701_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49701_ip = 139;
                            continue _fun49701
                        }
                    case 13:
                        var5 = undefined;
                        if (!(var8 === var5)) {
                            _fun49701_ip = 21;
                            continue _fun49701
                        }
                    case 19:
                        var8 = {};
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var5;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49701_ip = 136;
                            continue _fun49701
                        }
                    case 31:
                        var4 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var2 = 3;
                        var2 = var6[var2];
                        var7 = var4.bind(var5)(var2);
                        var6 = var7.getGuildRoleSubscriptionGroupListing;
                        var4 = arg0;
                        var2 = arg1;
                        var2 = var6.bind(var7)(var4, var2, var8);
                        SaveGenerator(address = 77);
                    case 75:
                        return var2;
                    case 77:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49701_ip = 133;
                            continue _fun49701
                        }
                    case 83:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 4;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                        var3.type = var6;
                        var3.listing = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 133:
                        return var2;
                    case 136:
                        return var1;
                    case 139:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49704: for (var _fun49704_ip = 0;;) switch (_fun49704_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49704_ip = 321;
                            continue _fun49704
                        }
                    case 13:
                        var9 = var1.guildId;
                        var8 = var1.groupListingId;
                        var7 = var1.data;
                        var12 = var1.analyticsContext;
                        var5 = var1.onBeforeDispatchNewListing;
                        var6 = undefined;
                        SaveGenerator(address = 47);
                    case 45:
                        return var6;
                    case 47:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49704_ip = 318;
                            continue _fun49704
                        }
                    case 56:
                        var3 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var2 = 3;
                        var2 = var10[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.createGuildRoleSubscriptionListing;
                        var2 = var2.bind(var3)(var9, var8, var7);
                        SaveGenerator(address = 96);
                    case 94:
                        return var2;
                    case 96:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49704_ip = 315;
                            continue _fun49704
                        }
                    case 105:
                        var7 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var3 = 7;
                        var3 = var14[var3];
                        var11 = var7.bind(var6)(var3);
                        var10 = var11.track;
                        var3 = _closure1_slot6;
                        var7 = var3.ROLE_SUBSCRIPTION_LISTING_CREATED;
                        var3 = {};
                        var13 = var2.id;
                        var3.role_subscription_listing_id = var13;
                        var3.role_subscription_group_listing_id = var8;
                        var13 = var12.templateCategory;
                        var3.template_name = var13;
                        var12 = var12.hasChangeFromTemplate;
                        var3.has_change_from_template = var12;
                        var13 = _closure1_slot0;
                        var12 = 8;
                        var12 = var14[var12];
                        var13 = var13.bind(var6)(var12);
                        var12 = var13.collectGuildAnalyticsMetadata;
                        var16 = var12.bind(var13)(var9);
                        var17 = var3;
                        var12 = copyDataProperties(var17, var16);
                        var3 = var10.bind(var11)(var7, var3);
                        var7 = _closure1_slot19;
                        var3 = {};
                        var10 = true;
                        var3.includeArchivedListings = var10;
                        var3 = var7.bind(var6)(var9, var8, var3);
                        SaveGenerator(address = 245);
                    case 243:
                        return var3;
                    case 245:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun49704_ip = 312;
                            continue _fun49704
                        }
                    case 251:
                        var7 = null;
                        if (!(var7 != var5)) {
                            _fun49704_ip = 262;
                            continue _fun49704
                        }
                    case 257:
                        var5 = var5.bind(var6)(var2);
                    case 262:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 4;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                        var4.type = var7;
                        var4.listing = var2;
                        var4 = var5.bind(var6)(var4);
                        return var2;
                    case 312:
                        return var3;
                    case 315:
                        return var2;
                    case 318:
                        return var1;
                    case 321:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49707: for (var _fun49707_ip = 0;;) switch (_fun49707_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49707_ip = 197;
                            continue _fun49707
                        }
                    case 13:
                        var7 = var1.guildId;
                        var9 = var1.listingId;
                        var6 = var1.groupListingId;
                        var8 = var1.data;
                        var5 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var5;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49707_ip = 194;
                            continue _fun49707
                        }
                    case 50:
                        var4 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var2 = 3;
                        var2 = var10[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.updateGuildRoleSubscriptionListing;
                        var15 = var4;
                        var14 = var7;
                        var13 = var6;
                        var12 = var9;
                        var11 = var8;
                        var2 = var15[var2](var14, var13, var12, var11, var10);
                        SaveGenerator(address = 102);
                    case 100:
                        return var2;
                    case 102:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49707_ip = 191;
                            continue _fun49707
                        }
                    case 108:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 4;
                        var4 = var9[var4];
                        var9 = var8.bind(var5)(var4);
                        var8 = var9.dispatch;
                        var4 = {};
                        var10 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                        var4.type = var10;
                        var4.listing = var2;
                        var4 = var8.bind(var9)(var4);
                        var4 = _closure1_slot19;
                        var3 = {};
                        var8 = true;
                        var3.includeArchivedListings = var8;
                        var3 = var4.bind(var5)(var7, var6, var3);
                        SaveGenerator(address = 179);
                    case 177:
                        return var3;
                    case 179:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49707_ip = 188;
                            continue _fun49707
                        }
                    case 185:
                        return var2;
                    case 188:
                        return var3;
                    case 191:
                        return var2;
                    case 194:
                        return var1;
                    case 197:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49710: for (var _fun49710_ip = 0;;) switch (_fun49710_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49710_ip = 469;
                            continue _fun49710
                        }
                    case 13:
                        var7 = arg0;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun49710_ip = 24;
                            continue _fun49710
                        }
                    case 22:
                        var1 = {};
                    case 24:
                        var12 = var1.signal;
                        var5 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        SaveGenerator(address = 40);
                    case 38:
                        return var3;
                    case 40:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49710_ip = 466;
                            continue _fun49710
                        }
                    case 49:
                        var5 = false;
                        var13 = 0;
                        var11 = 3;
                        var10 = 9;
                        var9 = 1;
                        var8 = 10;
                    case 68: // try_start_0
                        var2 = var12;
                        var18 = null;
                        if (!(var18 != var2)) {
                            _fun49710_ip = 92;
                            continue _fun49710
                        }
                    case 77:
                        var2 = var12;
                        var2 = var2.aborted;
                        if (var2) {
                            _fun49710_ip = 267;
                            continue _fun49710
                        }
                    case 92:
                        var15 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var16 = 4;
                        var6 = var2[var16];
                        var19 = var15.bind(var3)(var6);
                        var15 = var19.dispatch;
                        var6 = {};
                        var17 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS';
                        var6.type = var17;
                        var17 = var7;
                        var6.guildId = var17;
                        var6 = var15.bind(var19)(var6);
                        var6 = _closure1_slot2;
                        var2 = var2[var11];
                        var15 = var6.bind(var3)(var2);
                        var6 = var15.getGuildMonetizationRestrictions;
                        var2 = {};
                        var19 = var12;
                        var2.signal = var19;
                        var2 = var6.bind(var15)(var17, var2);
                        SaveGenerator(address = 180);
                    case 178:
                        return var2;
                    case 180:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun49710_ip = 264;
                            continue _fun49710
                        }
                    case 186:
                        var17 = var2.restrictions;
                        var14 = var17;
                        var15 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var16];
                        var16 = var15.bind(var3)(var6);
                        var15 = var16.dispatch;
                        var6 = {};
                        var19 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
                        var6.type = var19;
                        var19 = var7;
                        var6.guildId = var19;
                        if (!(var18 == var17)) {
                            _fun49710_ip = 244;
                            continue _fun49710
                        }
                    case 238:
                        var17 = new Array(0);
                        _fun49710_ip = 247;
                        continue _fun49710;
                    case 244:
                        var17 = var14;
                    case 247:
                        var6.restrictions = var17;
                        var6 = var15.bind(var16)(var6);
                        var5 = true;
                    case 259: // try_end0
                        _fun49710_ip = 413;
                        continue _fun49710;
                    case 264:
                        return var2;
                    case 267: // try_start_1
                        var6 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var2 = 4;
                        var2 = var15[var2];
                        var15 = var6.bind(var3)(var2);
                        var6 = var15.dispatch;
                        var2 = {};
                        var16 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED';
                        var2.type = var16;
                        var16 = var7;
                        var2.guildId = var16;
                        var2 = var6.bind(var15)(var2);
                    case 316: // try_end1
                        var2 = undefined;
                        return var2;
                    case 321: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var15 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var6 = var2[var10];
                        var15 = var15.bind(var3)(var6);
                        var6 = var15.sleep;
                        var16 = var13;
                        var16 = var16 + var9;
                        var17 = _closure1_slot1;
                        var2 = var2[var8];
                        var2 = var17.bind(var3)(var2);
                        var2 = var2.Millis;
                        var2 = var2.SECOND;
                        var2 = var16 * var2;
                        var2 = var6.bind(var15)(var2);
                        SaveGenerator(address = 391);
                    case 389:
                        return var2;
                    case 391:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun49710_ip = 463;
                            continue _fun49710
                        }
                    case 397:
                        var6 = var13;
                        var6 = var6 + 1;
                        var13 = var6;
                        if (var6 < var11) {
                            _fun49710_ip = 68;
                            continue _fun49710
                        }
                    case 413:
                        if (var5) {
                            _fun49710_ip = 460;
                            continue _fun49710
                        }
                    case 416:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var4 = 4;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE';
                        var4.type = var8;
                        var4.guildId = var7;
                        var4 = var5.bind(var6)(var4);
                    case 460:
                        return var3;
                    case 463:
                        return var2;
                    case 466:
                        return var1;
                    case 469:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSubscriptionsSettings = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateSubscriptionsSettings = var4;
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
    var2.fetchAllSubscriptionListingsDataForGuild = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createSubscriptionGroupListing = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateSubscriptionGroupListing = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteSubscriptionGroupListing = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSubscriptionListingForPlan = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteSubscriptionListing = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.archiveSubscriptionListing = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateSubscriptionTrial = var4;
    var2.fetchGuildRoleSubscriptionGroupListing = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createSubscriptionListing = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateSubscriptionListing = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMonetizationRestrictions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 660, 5589, 806, 3404, 5590, 795, 4268, 3490, 667, 2]);