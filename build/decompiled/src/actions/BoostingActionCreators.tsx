// actions/BoostingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _fetchAppliedGuildBoostsForGuild, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55509: for (var _fun55509_ip = 0;;) switch (_fun55509_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55509_ip = 171;
                            continue _fun55509
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var8 = _closure1_slot7;
                        var7 = var8.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55509_ip = 168;
                            continue _fun55509
                        }
                    case 94:
                        var7 = var1.body;
                        var4 = var7.map;
                        var2 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot4;
                            var1 = var2.createFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var4.bind(var7)(var2);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3.appliedBoosts = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 168:
                        return var1;
                    case 171:
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
    var0 = function() { // Original name: _fetchAppliedGuildBoostsForUser, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun55513: for (var _fun55513_ip = 0;;) switch (_fun55513_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55513_ip = 199;
                            continue _fun55513
                        }
                    case 13:
                        var6 = undefined;
                        if (!(var9 === var6)) {
                            _fun55513_ip = 21;
                            continue _fun55513
                        }
                    case 19:
                        var9 = false;
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var6;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55513_ip = 196;
                            continue _fun55513
                        }
                    case 34:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.get;
                        var2 = {};
                        var7 = _closure1_slot7;
                        var7 = var7.USER_APPLIED_GUILD_BOOSTS;
                        var2.url = var7;
                        var7 = true;
                        var2.oldFormErrors = var7;
                        var8 = {};
                        var8.paused = var9;
                        var2.query = var8;
                        var2.rejectWithError = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 115);
                    case 113:
                        return var2;
                    case 115:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun55513_ip = 193;
                            continue _fun55513
                        }
                    case 121:
                        var7 = var2.body;
                        var5 = var7.map;
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot4;
                            var1 = var2.createFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var5.bind(var7)(var3);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 6;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'USER_APPLIED_BOOSTS_FETCH_SUCCESS';
                        var4.type = var7;
                        var4.appliedGuildBoosts = var3;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 193:
                        return var2;
                    case 196:
                        return var1;
                    case 199:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var3 = function() { // Original name: fetchGuildBoostSlots, environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = function() { // Original name: _fetchGuildBoostSlots, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun55518: for (var _fun55518_ip = 0;;) switch (_fun55518_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55518_ip = 196;
                            continue _fun55518
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 6;
                        var1 = var4[var6];
                        var5 = undefined;
                        var7 = var2.bind(var5)(var1);
                        var2 = var7.dispatch;
                        var1 = {};
                        var8 = 'GUILD_BOOST_SLOTS_FETCH';
                        var1.type = var8;
                        var1 = var2.bind(var7)(var1);
                        var2 = _closure1_slot0;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var7 = _closure1_slot7;
                        var7 = var7.USER_GUILD_BOOST_SLOTS;
                        var1.url = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 118);
                    case 116:
                        return var1;
                    case 118:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55518_ip = 193;
                            continue _fun55518
                        }
                    case 124:
                        var7 = var1.body;
                        var4 = var7.map;
                        var2 = function(arg0) { // Environment: var2
                            var3 = arg0;
                            var2 = _closure1_slot5;
                            var1 = var2.createFromServer;
                            var5 = _closure1_slot6;
                            var4 = var5.getSubscriptionById;
                            var0 = var3.subscription_id;
                            var0 = var4.bind(var5)(var0);
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var2 = var4.bind(var7)(var2);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_BOOST_SLOTS_FETCH_SUCCESS';
                        var3.type = var6;
                        var3.guildBoostSlots = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 193:
                        return var1;
                    case 196:
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
    var0 = function() { // Original name: _fetchAppliedBoostsCooldown, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun55522: for (var _fun55522_ip = 0;;) switch (_fun55522_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55522_ip = 280;
                            continue _fun55522
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var6 = undefined;
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var7 = _closure1_slot7;
                        var7 = var7.APPLIED_GUILD_BOOST_COOLDOWN;
                        var2.url = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 80);
                    case 78:
                        return var2;
                    case 80:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun55522_ip = 147;
                            continue _fun55522
                        }
                    case 86:
                        var3 = var2.body;
                        var3 = var3.ends_at;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 6;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS';
                        var4.type = var7;
                        var4.endsAt = var3;
                        var4 = var5.bind(var6)(var4);
                    case 144: // try_end0
                        return var3;
                    case 147:
                        return var2;
                    case 150: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var1 = var2;
                        var3 = var2.status;
                        var2 = 404;
                        if (!(var2 !== var3)) {
                            _fun55522_ip = 226;
                            continue _fun55522
                        }
                    case 170:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var3 = var2.AppliedGuildBoostError;
                        var8 = var1;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var9 = var2;
                        var1 = new var9[var3](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 226:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var1 = null;
                        var2 = {
                            'type': 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS',
                            'endsAt': null
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 280:
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
    var0 = function() { // Original name: _applyToGuild, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun55525: for (var _fun55525_ip = 0;;) switch (_fun55525_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55525_ip = 433;
                            continue _fun55525
                        }
                    case 13:
                        var9 = arg0;
                        var11 = arg1;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun55525_ip = 27;
                            continue _fun55525
                        }
                    case 25:
                        var1 = false;
                    case 27:
                        var10 = var1;
                        var7 = undefined;
                        SaveGenerator(address = 36);
                    case 34:
                        return var5;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55525_ip = 430;
                            continue _fun55525
                        }
                    case 45:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 6;
                        var2 = var2[var6];
                        var8 = var3.bind(var5)(var2);
                        var3 = var8.dispatch;
                        var2 = {};
                        var12 = 'GUILD_APPLY_BOOST_START';
                        var2.type = var12;
                        var2 = var3.bind(var8)(var2);
                    case 90: // try_start_0
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var2 = var3.bind(var5)(var2);
                        var8 = var2.HTTP;
                        var3 = var8.put;
                        var2 = {};
                        var13 = _closure1_slot7;
                        var12 = var13.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                        var9 = var12.bind(var13)(var9);
                        var2.url = var9;
                        var9 = {};
                        var9.user_premium_guild_subscription_slot_ids = var11;
                        var9.disable_powerup_auto_apply = var10;
                        var2.body = var9;
                        var9 = true;
                        var2.oldFormErrors = var9;
                        var9 = false;
                        var2.rejectWithError = var9;
                        var2 = var3.bind(var8)(var2);
                        SaveGenerator(address = 184);
                    case 182:
                        return var2;
                    case 184:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun55525_ip = 335;
                            continue _fun55525
                        }
                    case 193:
                        var7 = var2;
                        var3 = global;
                        var9 = var3.Array;
                        var8 = var9.isArray;
                        var3 = var2.body;
                        var3 = var8.bind(var9)(var3);
                        if (var3) {
                            _fun55525_ip = 255;
                            continue _fun55525
                        }
                    case 222:
                        var9 = _closure1_slot4;
                        var8 = var9.createFromServer;
                        var3 = var7;
                        var3 = var3.body;
                        var8 = var8.bind(var9)(var3);
                        var3 = new Array(1);
                        var3[0] = var8;
                        _fun55525_ip = 280;
                        continue _fun55525;
                    case 255:
                        var9 = var7.body;
                        var8 = var9.map;
                        var7 = _closure1_slot4;
                        var7 = var7.createFromServer;
                        var3 = var8.bind(var9)(var7);
                    case 280:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GUILD_APPLY_BOOST_SUCCESS';
                        var7.type = var10;
                        var7.appliedGuildBoost = var3;
                        var7 = var8.bind(var9)(var7);
                        var7 = _closure1_slot10;
                        var7 = var7.bind(var5)();
                    case 332: // try_end0
                        return var3;
                    case 335:
                        return var2;
                    case 338: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var2 = var3[var2];
                        var2 = var7.bind(var5)(var2);
                        var2 = var2.AppliedGuildBoostError;
                        var7 = var2.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var2
                            }
                        });
                        var15 = var7;
                        var14 = var8;
                        var2 = new var15[var2](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var7;
                        var4 = _closure1_slot1;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_APPLY_BOOST_FAIL';
                        var3.type = var6;
                        var3.error = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 430:
                        return var1;
                    case 433:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() { // Original name: _unapplyFromGuild, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun55528: for (var _fun55528_ip = 0;;) switch (_fun55528_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55528_ip = 297;
                            continue _fun55528
                        }
                    case 10:
                        var7 = arg0;
                        var8 = arg1;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 6;
                        var1 = var1[var5];
                        var4 = undefined;
                        var6 = var2.bind(var4)(var1);
                        var2 = var6.dispatch;
                        var1 = {};
                        var9 = 'GUILD_UNAPPLY_BOOST_START';
                        var1.type = var9;
                        var1 = var2.bind(var6)(var1);
                    case 63: // try_start_0
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var2 = var6.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var11 = _closure1_slot7;
                        var10 = var11.APPLIED_GUILD_BOOST;
                        var9 = var7;
                        var7 = var8;
                        var7 = var10.bind(var11)(var9, var7);
                        var1.url = var7;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55528_ip = 202;
                            continue _fun55528
                        }
                    case 147:
                        var2 = _closure1_slot10;
                        var2 = var2.bind(var4)();
                    case 155: // try_end0
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var9 = 'GUILD_UNAPPLY_BOOST_SUCCESS';
                        var2.type = var9;
                        var2.boostId = var8;
                        var2 = var6.bind(var7)(var2);
                        return var4;
                    case 202:
                        return var1;
                    case 205: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.AppliedGuildBoostError;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var14 = var6;
                        var13 = var7;
                        var1 = new var14[var1](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var3 = _closure1_slot1;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_UNAPPLY_BOOST_FAIL';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 297:
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
    var0 = function() { // Original name: _cancelGuildBoostSlot, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55531: for (var _fun55531_ip = 0;;) switch (_fun55531_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55531_ip = 195;
                            continue _fun55531
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var8 = _closure1_slot7;
                        var7 = var8.USER_GUILD_BOOST_SLOT_CANCEL;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55531_ip = 192;
                            continue _fun55531
                        }
                    case 95:
                        var7 = _closure1_slot5;
                        var6 = var7.createFromServer;
                        var4 = var1.body;
                        var9 = _closure1_slot6;
                        var8 = var9.getSubscriptionById;
                        var2 = var1.body;
                        var2 = var2.subscription_id;
                        var2 = var8.bind(var9)(var2);
                        var2 = var6.bind(var7)(var4, var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                        var3.type = var6;
                        var3.guildBoostSlot = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 192:
                        return var1;
                    case 195:
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
    var0 = function() { // Original name: _uncancelGuildBoostSlot, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55534: for (var _fun55534_ip = 0;;) switch (_fun55534_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55534_ip = 195;
                            continue _fun55534
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var8 = _closure1_slot7;
                        var7 = var8.USER_GUILD_BOOST_SLOT_UNCANCEL;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55534_ip = 192;
                            continue _fun55534
                        }
                    case 95:
                        var7 = _closure1_slot5;
                        var6 = var7.createFromServer;
                        var4 = var1.body;
                        var9 = _closure1_slot6;
                        var8 = var9.getSubscriptionById;
                        var2 = var1.body;
                        var2 = var2.subscription_id;
                        var2 = var8.bind(var9)(var2);
                        var2 = var6.bind(var7)(var4, var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                        var3.type = var6;
                        var3.guildBoostSlot = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 192:
                        return var1;
                    case 195:
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/BoostingActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: fetchAppliedGuildBoostsForGuild, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAppliedGuildBoostsForGuild = var4;
    var4 = function() { // Original name: fetchAppliedGuildBoostsForUser, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAppliedGuildBoostsForUser = var4;
    var2.fetchGuildBoostSlots = var3;
    var3 = function() { // Original name: fetchAppliedBoostsCooldown, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAppliedBoostsCooldown = var3;
    var3 = function() { // Original name: applyToGuild, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.applyToGuild = var3;
    var3 = function() { // Original name: unapplyFromGuild, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.unapplyFromGuild = var3;
    var3 = function() { // Original name: cancelGuildBoostSlot, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.cancelGuildBoostSlot = var3;
    var1 = function() { // Original name: uncancelGuildBoostSlot, environment: var1
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.uncancelGuildBoostSlot = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6669, 6670, 3076, 660, 507, 806, 3309, 2]);