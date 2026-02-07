// modules/search/managers/SearchTabsFetchManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun72563: for (var _fun72563_ip = 0;;) switch (_fun72563_ip) {
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
                _fun72563_ip = 76;
                continue _fun72563;
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
    var0 = ['include_nsfw', 'channel_id'];
    var _closure1_slot2 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot9 = var6;
    var6 = var3.SEARCH_QUERY_BY_SEARCH_FILTER;
    var _closure1_slot10 = var6;
    var3 = var3.SEARCH_QUERY_DEFAULT_FILTERS;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AbstractSearchFetchManager;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun72567: for (var _fun72567_ip = 0;;) switch (_fun72567_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72567_ip = 69;
                        continue _fun72567
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun72567_ip = 105;
                    continue _fun72567;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'createRequestPayload';
        var4.key = var0;
        var0 = function arg0() {
            var0 = arg0;
            var8 = var0.searchQuery;
            var3 = var0.searchTabs;
            var2 = var0.getLimit;
            var _closure3_slot0 = var2;
            var2 = var0.pagination;
            var _closure3_slot1 = var2;
            var2 = var0.trackExactTotalHits;
            var5 = var8.include_nsfw;
            var4 = var8.channel_id;
            var7 = _closure1_slot3;
            var6 = _closure1_slot2;
            var0 = undefined;
            var0 = var7.bind(var0)(var8, var6);
            var _closure3_slot2 = var0;
            var0 = {};
            var0.include_nsfw = var5;
            var0.channel_ids = var4;
            var4 = {};
            var0.tabs = var4;
            var0.track_exact_total_hits = var2;
            var _closure3_slot3 = var0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun72569: for (var _fun72569_ip = 0;;) switch (_fun72569_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var5 = var1.bind(var0)(var3);
                        var1 = _closure1_slot9;
                        var2 = var1[var3];
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun72569_ip = 38;
                            continue _fun72569
                        }
                    case 34:
                        var6 = {};
                        _fun72569_ip = 46;
                        continue _fun72569;
                    case 38:
                        var1 = _closure1_slot10;
                        var6 = var1[var2];
                    case 46:
                        var1 = _closure3_slot3;
                        var2 = var1.tabs;
                        var1 = {};
                        var8 = _closure1_slot11;
                        var9 = var1;
                        var7 = copyDataProperties(var9, var8);
                        var9 = var1;
                        var8 = var6;
                        var6 = copyDataProperties(var9, var8);
                        var8 = _closure3_slot2;
                        var9 = var1;
                        var6 = copyDataProperties(var9, var8);
                        var8 = _closure3_slot1;
                        var9 = var1;
                        var4 = copyDataProperties(var9, var8);
                        var4 = 'limit';
                        var1[var4] = var5;
                        var2[var3] = var1;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'createWithPayload';
        var4.key = var6;
        var6 = function arg0() {
            _fun72570: for (var _fun72570_ip = 0;;) switch (_fun72570_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = var1.searchContext;
                    var5 = var1.searchQuery;
                    var8 = var1.searchTabs;
                    var7 = var1.getLimit;
                    var6 = var1.pagination;
                    var4 = var1.trackExactTotalHits;
                    var2 = var3.createRequestPayload;
                    var1 = {};
                    var1.searchQuery = var5;
                    var1.searchTabs = var8;
                    var1.getLimit = var7;
                    var1.pagination = var6;
                    var1.trackExactTotalHits = var4;
                    var4 = var2.bind(var3)(var1);
                    var3 = var0.type;
                    var2 = _closure1_slot12;
                    var2 = var2.GUILD;
                    if (!(var2 !== var3)) {
                        _fun72570_ip = 361;
                        continue _fun72570
                    }
                case 107:
                    var2 = _closure1_slot12;
                    var2 = var2.GUILD_CHANNEL;
                    if (!(var2 !== var3)) {
                        _fun72570_ip = 361;
                        continue _fun72570
                    }
                case 124:
                    var2 = _closure1_slot12;
                    var2 = var2.THREAD;
                    if (!(var2 !== var3)) {
                        _fun72570_ip = 361;
                        continue _fun72570
                    }
                case 141:
                    var2 = _closure1_slot12;
                    var2 = var2.CHANNEL;
                    if (!(var2 !== var3)) {
                        _fun72570_ip = 295;
                        continue _fun72570
                    }
                case 158:
                    var2 = _closure1_slot12;
                    var2 = var2.DMS;
                    if (!(var2 !== var3)) {
                        _fun72570_ip = 229;
                        continue _fun72570
                    }
                case 172:
                    var2 = global;
                    var6 = var2.Error;
                    var7 = var0.type;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '[SearchFetchManager] Unsupported search context type: ';
                    var13 = var3.bind(var2)(var7);
                    var3 = var6.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var6](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 229:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var7 = var2.SearchTabFetcherImpl;
                    var13 = var0.type;
                    var12 = var0.type;
                    var3 = var7.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var14 = var3;
                    var11 = var5;
                    var10 = var4;
                    var2 = new var14[var7](var13, var12, var11, var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
                case 295:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var7 = var2.SearchTabFetcherImpl;
                    var13 = var0.channelId;
                    var12 = var0.type;
                    var3 = var7.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var14 = var3;
                    var11 = var5;
                    var10 = var4;
                    var2 = new var14[var7](var13, var12, var11, var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
                case 361:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.SearchTabFetcherImpl;
                    var13 = var0.guildId;
                    var12 = var0.type;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var1;
                    var11 = var5;
                    var10 = var4;
                    var0 = new var14[var3](var13, var12, var11, var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var5 = function arg0() {
            var0 = arg0;
            var3 = this;
            var2 = var0.id;
            var9 = var0.searchContext;
            var8 = var0.searchQuery;
            var7 = var0.searchTabs;
            var6 = var0.getLimit;
            var5 = var0.pagination;
            var4 = var0.trackExactTotalHits;
            var0 = var3.cancel;
            var0 = var0.bind(var3)(var2);
            var1 = var3.createWithPayload;
            var0 = {};
            var0.searchContext = var9;
            var0.searchQuery = var8;
            var0.searchTabs = var7;
            var0.getLimit = var6;
            var0.pagination = var5;
            var0.trackExactTotalHits = var4;
            var0 = var1.bind(var3)(var0);
            var1 = var3.set;
            var1 = var1.bind(var3)(var2, var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/managers/SearchTabsFetchManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 8985, 660, 9060, 9061, 2]);