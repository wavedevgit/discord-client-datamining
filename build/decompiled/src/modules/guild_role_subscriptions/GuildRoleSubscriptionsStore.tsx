// modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun24505: for (var _fun24505_ip = 0;;) switch (_fun24505_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun24505_ip = 74;
                continue _fun24505;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun24508: for (var _fun24508_ip = 0;;) switch (_fun24508_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun24508_ip = 46;
                    continue _fun24508
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun24508_ip = 55;
                    continue _fun24508
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun24508_ip = 343;
                    continue _fun24508
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun24508_ip = 323;
                    continue _fun24508
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun24508_ip = 283;
                    continue _fun24508
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun24508_ip = 270;
                    continue _fun24508
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
                    _fun24508_ip = 163;
                    continue _fun24508
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun24508_ip = 179;
                    continue _fun24508
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun24508_ip = 249;
                    continue _fun24508
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun24508_ip = 249;
                    continue _fun24508
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun24508_ip = 234;
                    continue _fun24508
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun24508_ip = 247;
                    continue _fun24508
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun24508_ip = 265;
                continue _fun24508;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun24508_ip = 283;
                continue _fun24508;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun24508_ip = 323;
                    continue _fun24508
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
                    _fun24508_ip = 330;
                    continue _fun24508
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun24509: for (var _fun24509_ip = 0;;) switch (_fun24509_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun24509_ip = 56;
                                continue _fun24509
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
                            _fun24509_ip = 67;
                            continue _fun24509;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun24510: for (var _fun24510_ip = 0;;) switch (_fun24510_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun24510_ip = 23;
                    continue _fun24510
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun24510_ip = 33;
                    continue _fun24510
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
                    _fun24510_ip = 70;
                    continue _fun24510
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun24510_ip = 55;
                    continue _fun24510
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'guild:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'subscription_listing:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'application:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'plan:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot9;
        var1 = var2.values;
        var4 = _closure1_slot22;
        var3 = undefined;
        var0 = arg0;
        var0 = var4.bind(var3)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun24516: for (var _fun24516_ip = 0;;) switch (_fun24516_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = var0.id;
                var1 = var2.bind(var3)(var1, var0);
                var5 = _closure1_slot17;
                var3 = var5.set;
                var2 = var0.guild_id;
                var1 = var0.application_id;
                var1 = var3.bind(var5)(var2, var1);
                var2 = _closure1_slot20;
                var1 = var0.subscription_listings;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun24516_ip = 72;
                    continue _fun24516
                }
            case 68:
                var1 = new Array(0);
            case 72:
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun24516_ip = 120;
                    continue _fun24516
                }
            case 91:
                var5 = _closure1_slot28;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun24516_ip = 91;
                    continue _fun24516
                }
            case 120:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot10;
        var1 = var2.set;
        var0 = var3.id;
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var11 = 0;
    var1 = var6[var11];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 2;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.DefaultCreatorMonetizationRestrictions;
    var _closure1_slot7 = var1;
    var1 = {};
    var1.NOT_FETCHED = var11;
    var8 = 'NOT_FETCHED';
    var1[var11] = var8;
    var1.FETCHING = var10;
    var8 = 'FETCHING';
    var1[var10] = var8;
    var1.FETCHED = var9;
    var8 = 'FETCHED';
    var1[var9] = var8;
    var _closure1_slot8 = var1;
    var8 = 6;
    var9 = var6[var8];
    var9 = var5.bind(var0)(var9);
    var12 = var9.SecondaryIndexMap;
    var9 = var12.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var12
        }
    });
    var15 = function(arg0) { // Environment: var4
        var2 = arg0;
        var4 = _closure1_slot22;
        var3 = var2.guild_id;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var0 = new Array(1);
        var0[0] = var3;
        var3 = var2.subscription_listings_ids;
        var2 = var3.map;
        var1 = _closure1_slot23;
        var6 = var2.bind(var3)(var1);
        var5 = 1;
        var7 = var0;
        var1 = arraySpread(var7, var6, var5);
        return var0;
    };
    var14 = function(arg0) { // Environment: var4
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var16 = var10;
    var9 = new var16[var12](var15, var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot9 = var9;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var11 = var8.SecondaryIndexMap;
    var8 = var11.prototype;
    var9 = Object.create(var8, {
        constructor: {
            value: var11
        }
    });
    var15 = function(arg0) { // Environment: var4
        var1 = arg0;
        var4 = _closure1_slot24;
        var0 = var1.application_id;
        var3 = undefined;
        var4 = var4.bind(var3)(var0);
        var0 = new Array(2);
        var0[0] = var4;
        var2 = _closure1_slot25;
        var4 = var1.subscription_plans;
        var1 = 0;
        var1 = var4[var1];
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var0[1] = var1;
        return var0;
    };
    var14 = function(arg0) { // Environment: var4
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var16 = var9;
    var8 = new var16[var11](var15, var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = var3.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var16 = var9;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var8 = {};
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var8 = {};
    var _closure1_slot16 = var8;
    var3 = var3.Map;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var16 = var8;
    var3 = new var16[var3](var15);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot17 = var3;
    var3 = new Array(0);
    var _closure1_slot18 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun24523: for (var _fun24523_ip = 0;;) switch (_fun24523_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun24523_ip = 69;
                        continue _fun24523
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun24523_ip = 105;
                    continue _fun24523;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getSubscriptionGroupListingsForGuildFetchState';
        var4.key = var0;
        var0 = function arg0() {
            _fun24524: for (var _fun24524_ip = 0;;) switch (_fun24524_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun24524_ip = 30;
                        continue _fun24524
                    }
                case 20:
                    var1 = _closure1_slot8;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'getDidFetchListingForSubscriptionPlanId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSubscriptionGroupListing';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot9;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSubscriptionGroupListingsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot26;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSubscriptionGroupListingForSubscriptionListing';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot9;
            var2 = var3.values;
            var5 = _closure1_slot23;
            var4 = undefined;
            var1 = arg0;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var0 = var3[var0];
            var3 = var2.bind(var4)(var0);
            var2 = var1.length;
            var0 = 1;
            var2 = var2 <= var0;
            var0 = 'Found multiple group listings for listing';
            var0 = var3.bind(var4)(var2, var0);
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSubscriptionListing';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSubscriptionListingsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun24530: for (var _fun24530_ip = 0;;) switch (_fun24530_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getSubscriptionGroupListingsForGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var5 = undefined;
                    var4 = undefined;
                    if (var2) {
                        _fun24530_ip = 42;
                        continue _fun24530
                    }
                case 36:
                    var4 = var1.application_id;
                case 42:
                    if (!(var0 == var4)) {
                        _fun24530_ip = 55;
                        continue _fun24530
                    }
                case 46:
                    var0 = _closure1_slot18;
                    _fun24530_ip = 81;
                    continue _fun24530;
                case 55:
                    var3 = _closure1_slot10;
                    var2 = var3.values;
                    var1 = _closure1_slot24;
                    var1 = var1.bind(var5)(var4);
                    var0 = var2.bind(var3)(var1);
                case 81:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSubscriptionListingForPlan';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot10;
            var2 = var3.values;
            var5 = _closure1_slot25;
            var4 = undefined;
            var1 = arg0;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var0 = var3[var0];
            var3 = var2.bind(var4)(var0);
            var2 = var1.length;
            var0 = 1;
            var2 = var2 <= var0;
            var0 = 'Found multiple listings for plan';
            var0 = var3.bind(var4)(var2, var0);
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getSubscriptionSettings';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot13;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getSubscriptionTrial';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot14;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getMonetizationRestrictions';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot15;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getMonetizationRestrictionsFetchState';
        var4.key = var6;
        var6 = function arg0() {
            _fun24535: for (var _fun24535_ip = 0;;) switch (_fun24535_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun24535_ip = 30;
                        continue _fun24535
                    }
                case 20:
                    var1 = _closure1_slot8;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getApplicationIdForGuild';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot17;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'GuildRoleSubscriptionsStore';
    var8.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var15 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var2 = _closure1_slot9;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot10;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = {};
        _closure1_slot11 = var1;
        var2 = _closure1_slot12;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = {};
        _closure1_slot13 = var1;
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot15 = var1;
        var1 = {};
        _closure1_slot16 = var1;
        var1 = _closure1_slot17;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.settings;
        var1 = _closure1_slot13;
        var0 = var2.guild_id;
        var1[var0] = var2;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS = var9;
    var9 = function arg0() {
        _fun24539: for (var _fun24539_ip = 0;;) switch (_fun24539_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = _closure1_slot11;
                var0 = _closure1_slot8;
                var0 = var0.FETCHING;
                var1[var3] = var0;
                var2 = _closure1_slot20;
                var1 = _closure1_slot26;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun24539_ip = 161;
                    continue _fun24539
                }
            case 61:
                var1 = var2.value;
                var7 = _closure1_slot9;
                var6 = var7.delete;
                var5 = var1.id;
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot20;
                var1 = var1.subscription_listings_ids;
                var6 = var5.bind(var0)(var1);
                var5 = var6.bind(var0)();
                var1 = var5.done;
                if (var1) {
                    _fun24539_ip = 146;
                    continue _fun24539
                }
            case 112:
                var8 = var5.value;
                var7 = _closure1_slot10;
                var1 = var7.delete;
                var1 = var1.bind(var7)(var8);
                var7 = var6.bind(var0)();
                var1 = var7.done;
                var5 = var7;
                if (!var1) {
                    _fun24539_ip = 112;
                    continue _fun24539
                }
            case 146:
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun24539_ip = 61;
                    continue _fun24539
                }
            case 161:
                return var0;
        }
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS = var9;
    var9 = function arg0() {
        _fun24540: for (var _fun24540_ip = 0;;) switch (_fun24540_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var6 = var0.groupListings;
                var3 = var0.settings;
                var2 = var0.subscriptionTrials;
                var1 = _closure1_slot11;
                var0 = _closure1_slot8;
                var0 = var0.FETCHED;
                var1[var5] = var0;
                var1 = _closure1_slot20;
                var0 = undefined;
                var7 = var1.bind(var0)(var6);
                var6 = var7.bind(var0)();
                var1 = var6.done;
                if (var1) {
                    _fun24540_ip = 99;
                    continue _fun24540
                }
            case 70:
                var8 = _closure1_slot27;
                var1 = var6.value;
                var1 = var8.bind(var0)(var1);
                var8 = var7.bind(var0)();
                var1 = var8.done;
                var6 = var8;
                if (!var1) {
                    _fun24540_ip = 70;
                    continue _fun24540
                }
            case 99:
                var1 = _closure1_slot13;
                var1[var5] = var3;
                var1 = _closure1_slot20;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun24540_ip = 161;
                    continue _fun24540
                }
            case 128:
                var6 = var2.value;
                var5 = _closure1_slot14;
                var1 = var6.id;
                var5[var1] = var6;
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun24540_ip = 128;
                    continue _fun24540
                }
            case 161:
                return var0;
        }
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot11;
        var0 = _closure1_slot8;
        var0 = var0.FETCHED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.listing;
        var1 = _closure1_slot27;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.groupListingId;
        var1 = _closure1_slot9;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.planId;
        var1 = _closure1_slot12;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.groupListing;
        var1 = _closure1_slot27;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.listing;
        var2 = var0.groupListing;
        var3 = _closure1_slot28;
        var0 = undefined;
        var3 = var3.bind(var0)(var4);
        var1 = _closure1_slot27;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.listing;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.listingId;
        var1 = _closure1_slot10;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.subscriptionTrial;
        var1 = _closure1_slot14;
        var0 = var2.id;
        var1[var0] = var2;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot16;
        var0 = _closure1_slot8;
        var0 = var0.FETCHING;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = var0.restrictions;
        var1 = _closure1_slot15;
        var1[var2] = var3;
        var1 = _closure1_slot16;
        var0 = _closure1_slot8;
        var0 = var0.FETCHED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = _closure1_slot16;
        var1 = _closure1_slot8;
        var1 = var1.FETCHED;
        var3[var2] = var1;
        var1 = _closure1_slot15;
        var0 = _closure1_slot7;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE = var9;
    var4 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot16;
        var0 = _closure1_slot8;
        var0 = var0.NOT_FETCHED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var16 = var4;
    var14 = var3;
    var3 = new var16[var8](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3045, 3046, 44, 566, 806, 2]);