// modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun95516: for (var _fun95516_ip = 0;;) switch (_fun95516_ip) {
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
                _fun95516_ip = 76;
                continue _fun95516;
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
    var0 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot7;
        var2 = new Array(6);
        var2[0] = var3;
        var3 = var0.query;
        var2[1] = var3;
        var3 = _closure1_slot8;
        var2[2] = var3;
        var3 = var0.categoryId;
        var2[3] = var3;
        var1 = _closure1_slot9;
        var2[4] = var1;
        var0 = var0.languageCode;
        var2[5] = var0;
        var1 = var2.join;
        var0 = '-';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun95520: for (var _fun95520_ip = 0;;) switch (_fun95520_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot14;
                var0 = undefined;
                var3 = var2.bind(var0)(var4);
                var2 = _closure1_slot10;
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun95520_ip = 77;
                    continue _fun95520
                }
            case 37:
                var5 = _closure1_slot12;
                var2 = {};
                var4 = var4.query;
                var2.query = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var7 = var2;
                var2 = new var8[var5](var7, var6);
                var0 = var2 instanceof Object ? var2 : var4;
            case 77:
                var2 = _closure1_slot10;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun95521: for (var _fun95521_ip = 0;;) switch (_fun95521_ip) {
            case 0:
                var2 = _closure1_slot14;
                var3 = undefined;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot10;
                var0 = var1.get;
                var2 = var0.bind(var1)(var2);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun95521_ip = 48;
                    continue _fun95521
                }
            case 40:
                var1 = arg1;
                var0 = var1.bind(var3)(var2);
            case 48:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.SEARCH_RESULTS_QUERY_PREFIX;
    var _closure1_slot7 = var8;
    var8 = var7.SEARCH_RESULTS_CATEGORY_PREFIX;
    var _closure1_slot8 = var8;
    var7 = var7.SEARCH_RESULTS_LANGUAGE_CODE_PREFIX;
    var _closure1_slot9 = var7;
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.query;
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = new Array(0);
            var2.guildIds = var3;
            var3 = null;
            var2.error = var3;
            var2.offset = var3;
            var2.total = var3;
            var4 = false;
            var2.isFetching = var4;
            var2.isInitialFetchComplete = var4;
            var2.lastFetchTimestamp = var3;
            var2.query = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handleSearchStart';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = null;
            var1.error = var0;
            var0 = true;
            var1.isFetching = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleSearchFailure';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = false;
            var2.isFetching = var0;
            var0 = true;
            var2.isInitialFetchComplete = var0;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.APIError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var5 = arg0;
            var6 = var3;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.error = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleSearchSuccess';
        var0.key = var5;
        var4 = function arg0() {
            _fun95526: for (var _fun95526_ip = 0;;) switch (_fun95526_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.total;
                    var5 = var0.guilds;
                    var0 = undefined;
                    var _closure3_slot0 = var0;
                    var4 = null;
                    var2.error = var4;
                    var6 = false;
                    var2.isFetching = var6;
                    var6 = true;
                    var2.isInitialFetchComplete = var6;
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var2.lastFetchTimestamp = var6;
                    if (!(var4 != var1)) {
                        _fun95526_ip = 83;
                        continue _fun95526
                    }
                case 77:
                    var2.total = var1;
                case 83:
                    var9 = var2.guildIds;
                    var1 = new Array(0);
                    var8 = 0;
                    var10 = var1;
                    var4 = arraySpread(var10, var9, var8);
                    _closure3_slot0 = var1;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var2.guildIds = var1;
                    var1 = var1.length;
                    var2.offset = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95529: for (var _fun95529_ip = 0;;) switch (_fun95529_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95529_ip = 69;
                        continue _fun95529
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95529_ip = 105;
                    continue _fun95529;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'getGuild';
        var4.key = var0;
        var0 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildIds';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.guildIds;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getIsFetching';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isFetching;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsInitialFetchComplete';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isInitialFetchComplete;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getOffset';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.offset;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getTotal';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.total;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLastFetchTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.lastFetchTimestamp;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.error;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getErrorMessage';
        var4.key = var6;
        var5 = function arg0() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                _fun95546: for (var _fun95546_ip = 0;;) switch (_fun95546_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.error;
                        var0 = null;
                        var1 = var0 == var2;
                        var0 = undefined;
                        if (var1) {
                            _fun95546_ip = 29;
                            continue _fun95546
                        }
                    case 19:
                        var1 = var2.getAnyErrorMessage;
                        var0 = var1.bind(var2)();
                    case 29:
                        return var0;
                }
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GlobalDiscoveryServersSearchResultsStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var2 = _closure1_slot10;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot11;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun95548: for (var _fun95548_ip = 0;;) switch (_fun95548_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.query;
                var4 = var0.categoryId;
                var3 = var0.languageCode;
                var2 = var0.reset;
                var7 = _closure1_slot14;
                var6 = {};
                var6.query = var5;
                var6.categoryId = var4;
                var6.languageCode = var3;
                var0 = undefined;
                var7 = var7.bind(var0)(var6);
                if (!var2) {
                    _fun95548_ip = 75;
                    continue _fun95548
                }
            case 61:
                var6 = _closure1_slot10;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var7);
            case 75:
                var2 = _closure1_slot15;
                var1 = {};
                var1.query = var5;
                var1.categoryId = var4;
                var1.languageCode = var3;
                var2 = var2.bind(var0)(var1);
                var1 = var2.handleSearchStart;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_START = var8;
    var8 = function arg0() {
        var1 = arg0;
        var6 = var1.query;
        var4 = var1.categoryId;
        var0 = var1.languageCode;
        var5 = var1.total;
        var3 = var1.guilds;
        var2 = _closure1_slot15;
        var1 = {};
        var1.query = var6;
        var1.categoryId = var4;
        var1.languageCode = var0;
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var2 = var4.handleSearchSuccess;
        var1 = {};
        var1.total = var5;
        var1.guilds = var3;
        var1 = var2.bind(var4)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = arg0;
            var2 = _closure1_slot11;
            var1 = var2.set;
            var0 = var3.id;
            var0 = var1.bind(var2)(var0, var3);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS = var8;
    var8 = function arg0() {
        var1 = arg0;
        var5 = var1.query;
        var4 = var1.categoryId;
        var0 = var1.languageCode;
        var3 = var1.error;
        var2 = _closure1_slot15;
        var1 = {};
        var1.query = var5;
        var1.categoryId = var4;
        var1.languageCode = var0;
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.handleSearchFailure;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE = var8;
    var8 = function arg0() {
        var1 = arg0;
        var4 = var1.ignoreQueries;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var5 = var2;
        var1 = new var5[var1](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot10;
        var1 = var2.forEach;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun95553: for (var _fun95553_ip = 0;;) switch (_fun95553_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.query;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun95553_ip = 61;
                        continue _fun95553
                    }
                case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = var0.query;
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun95553_ip = 61;
                        continue _fun95553
                    }
                case 41:
                    var2 = _closure1_slot10;
                    var1 = var2.delete;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR = var8;
    var3 = function arg0() {
        _fun95554: for (var _fun95554_ip = 0;;) switch (_fun95554_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.profile;
                var2 = _closure1_slot11;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var6 = null;
                if (!(var6 != var4)) {
                    _fun95554_ip = 118;
                    continue _fun95554
                }
            case 37:
                var2 = _closure1_slot11;
                var1 = var2.set;
                var0 = {};
                var10 = var0;
                var9 = var4;
                var7 = copyDataProperties(var10, var9);
                var8 = var5.memberCount;
                if (!(var6 == var8)) {
                    _fun95554_ip = 74;
                    continue _fun95554
                }
            case 68:
                var8 = var4.memberCount;
            case 74:
                var7 = 'memberCount';
                var0[var7] = var8;
                var5 = var5.onlineCount;
                if (!(var6 == var5)) {
                    _fun95554_ip = 99;
                    continue _fun95554
                }
            case 93:
                var5 = var4.presenceCount;
            case 99:
                var4 = 'presenceCount';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
            case 118:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_PROFILE_FETCH_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 8176, 3350, 566, 806, 2]);