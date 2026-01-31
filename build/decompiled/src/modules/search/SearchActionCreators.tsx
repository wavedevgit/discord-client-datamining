// modules/search/SearchActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getGuildIdForSearchMessageSuccessDispatch, environment: var3
        _fun71814: for (var _fun71814_ip = 0;;) switch (_fun71814_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot3;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun71814_ip = 19;
                    continue _fun71814
                }
            case 16:
                var0 = var1;
            case 19:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.FAVORITES;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: fetchTabMessages, environment: var3
        _fun71815: for (var _fun71815_ip = 0;;) switch (_fun71815_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.searchContext;
                var _closure2_slot0 = var9;
                var6 = var1.searchTabs;
                var8 = var1.searchQueryString;
                var13 = var1.pagination;
                var12 = var1.trackExactTotalHits;
                var2 = var1.getId;
                var _closure2_slot1 = var2;
                var14 = var1.getLimit;
                var5 = var1.onFetchStart;
                var2 = var1.onFetchSuccess;
                var _closure2_slot2 = var2;
                var15 = var1.searchMode;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var17 = 1;
                var7 = var2[var17];
                var10 = var4.bind(var3)(var7);
                var7 = var10.tokenizeQuery;
                var11 = var7.bind(var10)(var8);
                var7 = var2[var17];
                var10 = var4.bind(var3)(var7);
                var7 = var10.getSearchQueryFromTokens;
                var11 = var7.bind(var10)(var11);
                var7 = function(arg0) { // Original name: fixSearchQueryPinned, environment: var0
                    _fun71816: for (var _fun71816_ip = 0;;) switch (_fun71816_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = global;
                            var3 = var0.Array;
                            var2 = var3.isArray;
                            var0 = var1.pinned;
                            var0 = var2.bind(var3)(var0);
                            if (!var0) {
                                _fun71816_ip = 62;
                                continue _fun71816
                            }
                        case 30:
                            var3 = var1.pinned;
                            var2 = var3.some;
                            var0 = function(arg0) { // Environment: var0
                                var1 = true;
                                var0 = arg0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            var1.pinned = var0;
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var7.bind(var3)(var11);
                var7 = var2[var17];
                var10 = var4.bind(var3)(var7);
                var7 = var10.searchModeToSearchQueryParams;
                var10 = var7.bind(var10)(var15);
                var7 = {};
                var20 = var7;
                var19 = var11;
                var11 = copyDataProperties(var20, var19);
                var20 = var7;
                var19 = var10;
                var10 = copyDataProperties(var20, var19);
                var2 = var2[var17];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getGuildIdFromSearchContext;
                var11 = var2.bind(var4)(var9);
                var _closure2_slot3 = var11;
                var2 = null;
                if (!(var2 != var11)) {
                    _fun71815_ip = 250;
                    continue _fun71815
                }
            case 221:
                var10 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var17];
                var10 = var10.bind(var3)(var4);
                var4 = var10.setIncludeNSFW;
                var4 = var4.bind(var10)(var7, var11);
            case 250:
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 2;
                var4 = var15[var4];
                var11 = var10.bind(var3)(var4);
                var10 = var11.create;
                var4 = {};
                var16 = _closure1_slot0;
                var15 = var15[var17];
                var16 = var16.bind(var3)(var15);
                var15 = var16.getSearchContextId;
                var15 = var15.bind(var16)(var9);
                var4.id = var15;
                var4.searchContext = var9;
                var4.searchQuery = var7;
                var4.searchTabs = var6;
                var4.getLimit = var14;
                var4.pagination = var13;
                var4.trackExactTotalHits = var12;
                var4 = var10.bind(var11)(var4);
                if (!(var2 != var5)) {
                    _fun71815_ip = 366;
                    continue _fun71815
                }
            case 344:
                var2 = {};
                var2.searchContext = var9;
                var2.searchQueryString = var8;
                var2.searchQuery = var7;
                var2 = var5.bind(var3)(var2);
            case 366:
                var5 = var6.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var2);
                _closure2_slot4 = var5;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'SEARCH_MESSAGES_START';
                var1.type = var6;
                var1.ids = var5;
                var1 = var2.bind(var3)(var1);
                var3 = var4.fetch;
                var2 = function(arg0) { // Environment: var0
                    _fun71819: for (var _fun71819_ip = 0;;) switch (_fun71819_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.body;
                            var _closure3_slot0 = var0;
                            var1 = global;
                            var2 = var1.Object;
                            var1 = var2.entries;
                            var0 = var0.tabs;
                            var3 = var1.bind(var2)(var0);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var2 = var5.dispatch;
                            var1 = {};
                            var7 = 'SEARCH_MESSAGES_SUCCESS';
                            var1.type = var7;
                            var8 = _closure1_slot4;
                            var7 = _closure2_slot3;
                            var7 = var8.bind(var0)(var7);
                            var1.guildId = var7;
                            var7 = var3.map;
                            var6 = function(arg0) { // Environment: var6
                                _fun71820: for (var _fun71820_ip = 0;;) switch (_fun71820_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = var4[Symbol.iterator];
                                        var4 = var0().next;
                                        var3 = var4().value;
                                        var1 = var0;
                                        var7 = undefined;
                                        var2 = var1 === var7;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun71820_ip = 27;
                                            continue _fun71820
                                        }
                                    case 24:
                                        var1 = var3;
                                    case 27:
                                        var3 = undefined;
                                        if (var2) {
                                            _fun71820_ip = 57;
                                            continue _fun71820
                                        }
                                    case 32:
                                        var5 = var4().value;
                                        var4 = var0;
                                        var4 = var4 === var7;
                                        var3 = undefined;
                                        var2 = var4;
                                        if (var4) {
                                            _fun71820_ip = 57;
                                            continue _fun71820
                                        }
                                    case 51:
                                        var3 = var5;
                                        var2 = var4;
                                    case 57:
                                        if (var2) {
                                            _fun71820_ip = 63;
                                            continue _fun71820
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = _closure2_slot1;
                                        var1 = var0.bind(var7)(var1);
                                        var5 = var3.cursor;
                                        var0 = {};
                                        var0.id = var1;
                                        var2 = _closure3_slot0;
                                        var2 = var2.analytics_id;
                                        var0.analyticsId = var2;
                                        var2 = var3.total_results;
                                        var0.totalResults = var2;
                                        var2 = null;
                                        if (!(var2 != var5)) {
                                            _fun71820_ip = 160;
                                            continue _fun71820
                                        }
                                    case 121:
                                        var6 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var4 = 4;
                                        var4 = var8[var4];
                                        var6 = var6.bind(var7)(var4);
                                        var4 = var6.isEmpty;
                                        var6 = var4.bind(var6)(var5);
                                        var4 = null;
                                        if (var6) {
                                            _fun71820_ip = 163;
                                            continue _fun71820
                                        }
                                    case 160:
                                        var4 = var5;
                                    case 163:
                                        var0.cursor = var4;
                                        var4 = var3.messages;
                                        var0.messages = var4;
                                        var4 = var3.channels;
                                        if (!(var2 == var4)) {
                                            _fun71820_ip = 192;
                                            continue _fun71820
                                        }
                                    case 188:
                                        var4 = new Array(0);
                                    case 192:
                                        var0.channels = var4;
                                        var4 = var3.threads;
                                        if (!(var2 == var4)) {
                                            _fun71820_ip = 211;
                                            continue _fun71820
                                        }
                                    case 207:
                                        var4 = new Array(0);
                                    case 211:
                                        var0.threads = var4;
                                        var4 = var3.members;
                                        if (!(var2 == var4)) {
                                            _fun71820_ip = 230;
                                            continue _fun71820
                                        }
                                    case 226:
                                        var4 = new Array(0);
                                    case 230:
                                        var3 = var4.map;
                                        var2 = function(arg0) { // Environment: var2
                                            var1 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var0 = 5;
                                            var0 = var2[var0];
                                            var2 = undefined;
                                            var1 = var1.bind(var2)(var0);
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var2 = var3.bind(var4)(var2);
                                        var0.members = var2;
                                        var1 = _closure3_slot0;
                                        var2 = var1.doing_deep_historical_index;
                                        var0.doingHistoricalIndex = var2;
                                        var1 = var1.documents_indexed;
                                        var0.documentsIndexed = var1;
                                        return var0;
                                }
                            };
                            var6 = var7.bind(var3)(var6);
                            var1.data = var6;
                            var1 = var2.bind(var5)(var1);
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71819_ip = 160;
                                continue _fun71819
                            }
                        case 135:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1.searchContext = var4;
                            var1.tabEntries = var3;
                            var1 = var2.bind(var0)(var1);
                        case 160:
                            return var0;
                    }
                };
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SEARCH_MESSAGES_INDEXING';
                    var1.type = var4;
                    var4 = _closure2_slot4;
                    var1.ids = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SEARCH_MESSAGES_FAILURE';
                    var1.type = var4;
                    var4 = _closure2_slot4;
                    var1.ids = var4;
                    var4 = arg0;
                    var1.error = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = true;
                return var0;
        }
    };
    var1.fetchTabMessages = var6;
    var6 = function(arg0) { // Original name: fetchMessages, environment: var3
        _fun71824: for (var _fun71824_ip = 0;;) switch (_fun71824_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var8 = var0.searchQueryString;
                var11 = var0.pagination;
                var14 = var0.searchMode;
                var7 = var0.searchEverywhere;
                var4 = var0.onFetchStart;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 1;
                var6 = var3[var5];
                var12 = var10.bind(var0)(var6);
                var6 = var12.tokenizeQuery;
                var15 = var6.bind(var12)(var8);
                var6 = {};
                var12 = var3[var5];
                var13 = var10.bind(var0)(var12);
                var12 = var13.getSearchQueryFromTokens;
                var17 = var12.bind(var13)(var15);
                var18 = var6;
                var12 = copyDataProperties(var18, var17);
                var12 = var3[var5];
                var13 = var10.bind(var0)(var12);
                var12 = var13.searchModeToSearchQueryParams;
                var17 = var12.bind(var13)(var14);
                var18 = var6;
                var12 = copyDataProperties(var18, var17);
                var12 = var11.offset;
                var11 = 'offset';
                var6[var11] = var12;
                var3 = var3[var5];
                var10 = var10.bind(var0)(var3);
                var3 = var10.getGuildIdFromSearchContext;
                var12 = var3.bind(var10)(var9);
                var _closure2_slot0 = var12;
                var3 = null;
                if (!(var3 != var12)) {
                    _fun71824_ip = 213;
                    continue _fun71824
                }
            case 184:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var5];
                var11 = var11.bind(var0)(var10);
                var10 = var11.setIncludeNSFW;
                var10 = var10.bind(var11)(var6, var12);
            case 213:
                if (!var7) {
                    _fun71824_ip = 226;
                    continue _fun71824
                }
            case 216:
                var7 = true;
                var6.search_everywhere = var7;
            case 226:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = var11[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var7.getSearchContextId;
                var7 = var5.bind(var7)(var9);
                _closure2_slot1 = var7;
                var10 = _closure1_slot1;
                var5 = 6;
                var5 = var11[var5];
                var11 = var10.bind(var0)(var5);
                var10 = var11.create;
                var5 = {};
                var5.id = var7;
                var12 = var9.type;
                var5.searchType = var12;
                var5.searchQuery = var6;
                var5 = var10.bind(var11)(var5);
                if (!(var3 != var4)) {
                    _fun71824_ip = 331;
                    continue _fun71824
                }
            case 309:
                var3 = {};
                var3.searchContext = var9;
                var3.searchQueryString = var8;
                var3.searchQuery = var6;
                var3 = var4.bind(var0)(var3);
            case 331:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'SEARCH_MESSAGES_START';
                var2.type = var6;
                var6 = new Array(1);
                var6[0] = var7;
                var2.ids = var6;
                var2 = var3.bind(var4)(var2);
                var4 = var5.fetch;
                var3 = function(arg0) { // Environment: var1
                    _fun71825: for (var _fun71825_ip = 0;;) switch (_fun71825_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'SEARCH_MESSAGES_SUCCESS';
                            var1.type = var5;
                            var7 = _closure1_slot4;
                            var5 = _closure2_slot0;
                            var5 = var7.bind(var0)(var5);
                            var1.guildId = var5;
                            var5 = {};
                            var4 = _closure2_slot1;
                            var5.id = var4;
                            var4 = var6.body;
                            var4 = var4.analytics_id;
                            var5.analyticsId = var4;
                            var4 = var6.body;
                            var4 = var4.total_results;
                            var5.totalResults = var4;
                            var4 = var6.body;
                            var4 = var4.messages;
                            var5.messages = var4;
                            var4 = var6.body;
                            var7 = var4.threads;
                            var4 = null;
                            if (!(var4 == var7)) {
                                _fun71825_ip = 142;
                                continue _fun71825
                            }
                        case 138:
                            var7 = new Array(0);
                        case 142:
                            var5.threads = var7;
                            var7 = var6.body;
                            var9 = var7.members;
                            if (!(var4 == var9)) {
                                _fun71825_ip = 166;
                                continue _fun71825
                            }
                        case 162:
                            var9 = new Array(0);
                        case 166:
                            var8 = var9.map;
                            var7 = function(arg0) { // Environment: var7
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var7 = var8.bind(var9)(var7);
                            var5.members = var7;
                            var7 = var6.body;
                            var7 = var7.doing_deep_historical_index;
                            var5.doingHistoricalIndex = var7;
                            var7 = var6.body;
                            var7 = var7.documents_indexed;
                            var5.documentsIndexed = var7;
                            var6 = var6.body;
                            var6 = var6.channels;
                            if (!(var4 == var6)) {
                                _fun71825_ip = 241;
                                continue _fun71825
                            }
                        case 237:
                            var6 = new Array(0);
                        case 241:
                            var5.channels = var6;
                            var5.cursor = var4;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var1.data = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SEARCH_MESSAGES_INDEXING';
                    var1.type = var4;
                    var5 = _closure2_slot1;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.ids = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SEARCH_MESSAGES_FAILURE';
                    var1.type = var4;
                    var5 = _closure2_slot1;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.ids = var4;
                    var4 = arg0;
                    var1.error = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var1.fetchMessages = var6;
    var6 = function() { // Original name: clearSearchRecentMessages, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SEARCH_RECENT_MESSAGES_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearSearchRecentMessages = var6;
    var6 = function() { // Original name: clearAllSearchMesssages, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SEARCH_MESSAGES_CLEAR_ALL';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearAllSearchMesssages = var6;
    var6 = function(arg0) { // Original name: clearSearchMessages, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SEARCH_MESSAGES_CLEAR';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearSearchMessages = var6;
    var6 = function(arg0) { // Original name: initializeAutocomplete, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SEARCH_AUTOCOMPLETE_INITIALIZE';
        var1.type = var4;
        var4 = arg0;
        var1.searchContext = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.initializeAutocomplete = var6;
    var6 = function(arg0) { // Original name: updateAutocompleteQuery, environment: var3
        _fun71833: for (var _fun71833_ip = 0;;) switch (_fun71833_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.searchContext;
                var5 = var0.tokens;
                var1 = var0.queryString;
                var4 = var0.cursorScope;
                var0 = var1.trim;
                var0 = var0.bind(var1)();
                var1 = var0.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun71833_ip = 89;
                    continue _fun71833
                }
            case 48:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.FrecencyUserSettingsActionCreators;
                var0 = var1.loadIfNecessary;
                var0 = var0.bind(var1)();
            case 89:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE';
                var1.type = var7;
                var1.searchContext = var6;
                var1.tokens = var5;
                var1.cursorScope = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateAutocompleteQuery = var6;
    var3 = function() { // Original name: markSearchTokensRefreshed, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SEARCH_TOKENS_REFRESHED';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.markSearchTokensRefreshed = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/SearchActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 8927, 8935, 806, 22, 6448, 8938, 1355, 2]);