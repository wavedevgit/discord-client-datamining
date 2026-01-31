// modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun117479: for (var _fun117479_ip = 0;;) switch (_fun117479_ip) {
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
            case 72: // try_end0
                _fun117479_ip = 76;
                continue _fun117479;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot12 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun117483: for (var _fun117483_ip = 0;;) switch (_fun117483_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var7 = var7.bind(var2)(var4, var3);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun117483_ip = 86;
                        continue _fun117483
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117483_ip = 120;
                    continue _fun117483;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var2)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var3.bind(var2)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.POST_CONNECTION_OPEN = var4;
                    var0.actions = var3;
                    var3 = global;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var4;
                    var3 = new var13[var3](var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.queue = var3;
                    var3 = false;
                    var0.isFetchEnabled = var3;
                    var3 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = true;
                        var0.isFetchEnabled = var1;
                        var2 = var0.queue;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun117486: for (var _fun117486_ip = 0;;) switch (_fun117486_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = _closure1_slot11;
                                    if (!(var3 !== var0)) {
                                        _fun117486_ip = 41;
                                        continue _fun117486
                                    }
                                case 14:
                                    var2 = _closure3_slot0;
                                    var1 = var2.fetchCategoryFeaturedGuilds;
                                    var0 = {};
                                    var0.categoryId = var3;
                                    var0 = var1.bind(var2)(var0);
                                    _fun117486_ip = 58;
                                    continue _fun117486;
                                case 41:
                                    var1 = _closure3_slot0;
                                    var0 = var1.fetchFeaturedGuilds;
                                    var0 = var0.bind(var1)();
                                case 58:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleConnectionOpen = var3;
                    var3 = function() { // Environment: var1
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun117489: for (var _fun117489_ip = 0;;) switch (_fun117489_ip) {
                                    case 0:
                                        StartGenerator();
                                        var4 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun117489_ip = 566;
                                            continue _fun117489
                                        }
                                    case 13:
                                        var2 = _closure3_slot0;
                                        var2 = var2.isFetchEnabled;
                                        if (var2) {
                                            _fun117489_ip = 61;
                                            continue _fun117489
                                        }
                                    case 29:
                                        var1 = _closure3_slot0;
                                        var3 = var1.queue;
                                        var2 = var3.add;
                                        var1 = _closure1_slot11;
                                        var1 = var2.bind(var3)(var1);
                                        _fun117489_ip = 561;
                                        continue _fun117489;
                                    case 61:
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var3 = undefined;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun117489_ip = 80;
                                            continue _fun117489
                                        }
                                    case 74:
                                        var1 = var4.forceRefresh;
                                    case 80:
                                        var2 = var2 != var1;
                                        if (!var2) {
                                            _fun117489_ip = 90;
                                            continue _fun117489
                                        }
                                    case 87:
                                        var2 = var1;
                                    case 90:
                                        var6 = _closure1_slot10;
                                        var5 = var6.getLastFetchTimestamp;
                                        var4 = {};
                                        var7 = _closure1_slot11;
                                        var4.categoryId = var7;
                                        var5 = var5.bind(var6)(var4);
                                        if (var2) {
                                            _fun117489_ip = 159;
                                            continue _fun117489
                                        }
                                    case 122:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var2 = 9;
                                        var2 = var6[var2];
                                        var4 = var4.bind(var3)(var2);
                                        var2 = var4.isStaleFeaturedGuilds;
                                        var2 = var2.bind(var4)(var5);
                                        if (!var2) {
                                            _fun117489_ip = 561;
                                            continue _fun117489
                                        }
                                    case 159:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot3;
                                        var2 = 10;
                                        var4 = var4[var2];
                                        var6 = var5.bind(var3)(var4);
                                        var5 = var6.dispatch;
                                        var4 = {
                                            'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                                            'categoryId': null,
                                            'reset': true
                                        };
                                        var7 = _closure1_slot11;
                                        var4.categoryId = var7;
                                        var7 = true;
                                        var4 = var5.bind(var6)(var4);
                                    case 215: // try_start_0
                                        var12 = _closure1_slot0;
                                        var13 = _closure1_slot3;
                                        var4 = 11;
                                        var4 = var13[var4];
                                        var4 = var12.bind(var3)(var4);
                                        var6 = var4.HTTP;
                                        var5 = var6.get;
                                        var4 = {};
                                        var8 = _closure1_slot12;
                                        var8 = var8.GUILD_DISCOVERY;
                                        var4.url = var8;
                                        var9 = _closure1_slot1;
                                        var8 = 12;
                                        var8 = var13[var8];
                                        var10 = var9.bind(var3)(var8);
                                        var9 = var10.stringify;
                                        var8 = {};
                                        var11 = 0;
                                        var8.offset = var11;
                                        var11 = 13;
                                        var11 = var13[var11];
                                        var11 = var12.bind(var3)(var11);
                                        var11 = var11.GlobalDiscoveryServersLimits;
                                        var11 = var11.FEATURED_DEFAULT_LIMIT;
                                        var8.limit = var11;
                                        var8 = var9.bind(var10)(var8);
                                        var4.query = var8;
                                        var4.oldFormErrors = var7;
                                        var7 = false;
                                        var4.rejectWithError = var7;
                                        var4 = var5.bind(var6)(var4);
                                        SaveGenerator(address = 350);
                                    case 348:
                                        return var4;
                                    case 350:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun117489_ip = 470;
                                            continue _fun117489
                                        }
                                    case 356:
                                        var5 = var4.body;
                                        var8 = var5.total;
                                        var5 = var4.body;
                                        var9 = var5.guilds;
                                        var7 = var9.map;
                                        var10 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var6 = 9;
                                        var6 = var5[var6];
                                        var6 = var10.bind(var3)(var6);
                                        var6 = var6.fromDiscoverableGuildServer;
                                        var9 = var7.bind(var9)(var6);
                                        var6 = _closure1_slot1;
                                        var5 = var5[var2];
                                        var7 = var6.bind(var3)(var5);
                                        var6 = var7.dispatch;
                                        var5 = {};
                                        var10 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                                        var5.type = var10;
                                        var10 = _closure1_slot11;
                                        var5.categoryId = var10;
                                        var5.guilds = var9;
                                        var5.total = var8;
                                        var5 = var6.bind(var7)(var5);
                                    case 468: // try_end0
                                        _fun117489_ip = 561;
                                        continue _fun117489;
                                    case 470:
                                        return var4;
                                    case 473: // catch_target0
                                        CatchBlockStart(arg_register = 8);
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var2 = var5[var2];
                                        var7 = var4.bind(var3)(var2);
                                        var6 = var7.dispatch;
                                        var2 = {};
                                        var4 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                                        var2.type = var4;
                                        var4 = _closure1_slot11;
                                        var2.categoryId = var4;
                                        var2.error = var8;
                                        var2 = var6.bind(var7)(var2);
                                        var2 = _closure1_slot2;
                                        var1 = 14;
                                        var1 = var5[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.trackGuildDiscoveryGetFeaturedGuildsFailed;
                                        var1 = {};
                                        var1.categoryId = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 561:
                                        var1 = undefined;
                                        return var1;
                                    case 566:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var3 = var3.bind(var2)();
                    var0.fetchFeaturedGuilds = var3;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun117493: for (var _fun117493_ip = 0;;) switch (_fun117493_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun117493_ip = 541;
                                            continue _fun117493
                                        }
                                    case 13:
                                        var6 = var1.categoryId;
                                        var4 = var1.forceRefresh;
                                        var2 = undefined;
                                        if (!(var4 === var2)) {
                                            _fun117493_ip = 33;
                                            continue _fun117493
                                        }
                                    case 31:
                                        var4 = false;
                                    case 33:
                                        SaveGenerator(address = 37);
                                    case 35:
                                        return var2;
                                    case 37:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun117493_ip = 538;
                                            continue _fun117493
                                        }
                                    case 46:
                                        var5 = _closure3_slot0;
                                        var5 = var5.isFetchEnabled;
                                        if (var5) {
                                            _fun117493_ip = 90;
                                            continue _fun117493
                                        }
                                    case 62:
                                        var3 = _closure3_slot0;
                                        var7 = var3.queue;
                                        var5 = var7.add;
                                        var3 = var6;
                                        var3 = var5.bind(var7)(var3);
                                        _fun117493_ip = 535;
                                        continue _fun117493;
                                    case 90:
                                        var8 = _closure1_slot10;
                                        var7 = var8.getLastFetchTimestamp;
                                        var5 = {};
                                        var9 = var6;
                                        var5.categoryId = var9;
                                        var7 = var7.bind(var8)(var5);
                                        if (var4) {
                                            _fun117493_ip = 158;
                                            continue _fun117493
                                        }
                                    case 121:
                                        var5 = _closure1_slot0;
                                        var8 = _closure1_slot3;
                                        var4 = 9;
                                        var4 = var8[var4];
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.isStaleFeaturedGuilds;
                                        var4 = var4.bind(var5)(var7);
                                        if (!var4) {
                                            _fun117493_ip = 535;
                                            continue _fun117493
                                        }
                                    case 158:
                                        var7 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var4 = 10;
                                        var5 = var5[var4];
                                        var8 = var7.bind(var2)(var5);
                                        var7 = var8.dispatch;
                                        var5 = {
                                            'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                                            'categoryId': null,
                                            'reset': true
                                        };
                                        var9 = var6;
                                        var5.categoryId = var9;
                                        var9 = true;
                                        var5 = var7.bind(var8)(var5);
                                    case 213: // try_start_0
                                        var7 = _closure1_slot0;
                                        var12 = _closure1_slot3;
                                        var5 = 11;
                                        var5 = var12[var5];
                                        var5 = var7.bind(var2)(var5);
                                        var8 = var5.HTTP;
                                        var7 = var8.get;
                                        var5 = {};
                                        var10 = _closure1_slot12;
                                        var10 = var10.GUILD_DISCOVERY;
                                        var5.url = var10;
                                        var11 = _closure1_slot1;
                                        var10 = 12;
                                        var10 = var12[var10];
                                        var12 = var11.bind(var2)(var10);
                                        var11 = var12.stringify;
                                        var10 = {};
                                        var14 = var6;
                                        var13 = new Array(1);
                                        var13[0] = var14;
                                        var10.categories = var13;
                                        var10 = var11.bind(var12)(var10);
                                        var5.query = var10;
                                        var5.oldFormErrors = var9;
                                        var9 = false;
                                        var5.rejectWithError = var9;
                                        var5 = var7.bind(var8)(var5);
                                        SaveGenerator(address = 329);
                                    case 327:
                                        return var5;
                                    case 329:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun117493_ip = 448;
                                            continue _fun117493
                                        }
                                    case 335:
                                        var7 = var5.body;
                                        var10 = var7.total;
                                        var7 = var5.body;
                                        var11 = var7.guilds;
                                        var9 = var11.map;
                                        var12 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var8 = 9;
                                        var8 = var7[var8];
                                        var8 = var12.bind(var2)(var8);
                                        var8 = var8.fromDiscoverableGuildServer;
                                        var11 = var9.bind(var11)(var8);
                                        var8 = _closure1_slot1;
                                        var7 = var7[var4];
                                        var9 = var8.bind(var2)(var7);
                                        var8 = var9.dispatch;
                                        var7 = {};
                                        var12 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                                        var7.type = var12;
                                        var12 = var6;
                                        var7.categoryId = var12;
                                        var7.guilds = var11;
                                        var7.total = var10;
                                        var7 = var8.bind(var9)(var7);
                                    case 446: // try_end0
                                        _fun117493_ip = 535;
                                        continue _fun117493;
                                    case 448:
                                        return var5;
                                    case 451: // catch_target0
                                        CatchBlockStart(arg_register = 9);
                                        var7 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var4 = var5[var4];
                                        var8 = var7.bind(var2)(var4);
                                        var7 = var8.dispatch;
                                        var4 = {};
                                        var10 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                                        var4.type = var10;
                                        var4.categoryId = var6;
                                        var4.error = var9;
                                        var4 = var7.bind(var8)(var4);
                                        var4 = _closure1_slot2;
                                        var3 = 14;
                                        var3 = var5[var3];
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.trackGuildDiscoveryGetFeaturedGuildsFailed;
                                        var3 = {};
                                        var3.categoryId = var6;
                                        var3 = var4.bind(var5)(var3);
                                    case 535:
                                        return var2;
                                    case 538:
                                        return var1;
                                    case 541:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = var1.bind(var2)();
                    var0.fetchCategoryFeaturedGuilds = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot9;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot5;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 15, 17, 18, 12427, 8116, 660, 14932, 806, 507, 1454, 14933, 5576, 4263, 2]);