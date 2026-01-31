// modules/search/native/components/tabs/hooks/useVisibleSearchTabs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.join;
        var0 = '-';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var8 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var8);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchTabs;
    var _closure1_slot11 = var7;
    var7 = var3.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot12 = var7;
    var3 = var3.SEARCH_TYPE_TO_SEARCH_RESULT_TABS;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = this;
        var _closure2_slot0 = var2;
        var1 = var0.searchContext;
        var6 = var0.isInitialSearchQuery;
        var5 = var0.hasUserAddedTags;
        var4 = var0.isTagsEmpty;
        var9 = _closure1_slot4;
        var8 = _closure1_slot17;
        var0 = undefined;
        var8 = var9.bind(var0)(var2, var8);
        var8 = null;
        var2.visibleTabCounts = var8;
        var8 = false;
        var2.isInitialSearchQuery = var8;
        var8 = function() { // Environment: var7
            var0 = _closure2_slot0;
            var0 = var0.candidateTabs;
            return var0;
        };
        var2.getCandidateTabs = var8;
        var8 = function() { // Environment: var7
            var0 = _closure2_slot0;
            var0 = var0.visibleTabs;
            return var0;
        };
        var2.getVisibleTabs = var8;
        var8 = function() { // Environment: var7
            var0 = _closure2_slot0;
            var0 = var0.visibleTabCounts;
            return var0;
        };
        var2.getVisibleTabCounts = var8;
        var8 = function(arg0) { // Environment: var7
            _fun106894: for (var _fun106894_ip = 0;;) switch (_fun106894_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.isInitialSearchQuery;
                    var3 = var0.hasUserAddedTags;
                    var _closure3_slot0 = var3;
                    var0 = var0.isTagsEmpty;
                    var _closure3_slot1 = var0;
                    if (var2) {
                        _fun106894_ip = 65;
                        continue _fun106894
                    }
                case 37:
                    var3 = _closure1_slot13;
                    var2 = _closure2_slot0;
                    var2 = var2.searchContext;
                    var2 = var2.type;
                    var3 = var3[var2];
                    _fun106894_ip = 91;
                    continue _fun106894;
                case 65:
                    var4 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var2 = var2.searchContext;
                    var2 = var2.type;
                    var3 = var4[var2];
                case 91:
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun106895: for (var _fun106895_ip = 0;;) switch (_fun106895_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure2_slot0;
                                var0 = var0.searchContext;
                                var3 = var0.type;
                                var2 = _closure1_slot14;
                                var2 = var2.THREAD;
                                if (!(var3 === var2)) {
                                    _fun106895_ip = 134;
                                    continue _fun106895
                                }
                            case 38:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 11;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.getCurrentConfig;
                                var2 = {};
                                var5 = 'computeCandidateTabs';
                                var2.location = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.enabled;
                                if (var2) {
                                    _fun106895_ip = 134;
                                    continue _fun106895
                                }
                            case 89:
                                var2 = _closure1_slot11;
                                var4 = var2.MEMBERS;
                                var3 = new Array(2);
                                var3[0] = var4;
                                var2 = var2.PINS;
                                var3[1] = var2;
                                var2 = var3.includes;
                                var2 = var2.bind(var3)(var1);
                                if (var2) {
                                    _fun106895_ip = 134;
                                    continue _fun106895
                                }
                            case 130:
                                var2 = false;
                                return var2;
                            case 134:
                                var2 = _closure1_slot11;
                                var2 = var2.MEMBERS;
                                if (!(var2 !== var1)) {
                                    _fun106895_ip = 203;
                                    continue _fun106895
                                }
                            case 148:
                                var2 = _closure1_slot11;
                                var2 = var2.RECENT;
                                if (!(var2 !== var1)) {
                                    _fun106895_ip = 194;
                                    continue _fun106895
                                }
                            case 162:
                                var2 = _closure1_slot11;
                                var2 = var2.GUILD_CHANNELS;
                                if (!(var2 !== var1)) {
                                    _fun106895_ip = 194;
                                    continue _fun106895
                                }
                            case 176:
                                var0 = _closure1_slot11;
                                var0 = var0.PEOPLE;
                                if (!(var0 !== var1)) {
                                    _fun106895_ip = 194;
                                    continue _fun106895
                                }
                            case 190:
                                var0 = true;
                                return var0;
                            case 194:
                                var0 = _closure3_slot1;
                                return var0;
                            case 203:
                                var0 = _closure3_slot0;
                                var0 = !var0;
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var5 = _closure1_slot16;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var2);
                    var0 = _closure2_slot0;
                    var0 = var0.candidateTabs;
                    var0 = var5.bind(var4)(var0);
                    var0 = var3 !== var0;
                    if (!var0) {
                        _fun106894_ip = 156;
                        continue _fun106894
                    }
                case 144:
                    var1 = _closure2_slot0;
                    var1.candidateTabs = var2;
                    var0 = true;
                case 156:
                    return var0;
            }
        };
        var2.computeCandidateTabs = var8;
        var8 = function(arg0) { // Environment: var7
            _fun106896: for (var _fun106896_ip = 0;;) switch (_fun106896_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.nextTabs;
                    var2 = var0.nextTabCounts;
                    var6 = _closure1_slot16;
                    var3 = undefined;
                    var5 = var6.bind(var3)(var4);
                    var0 = _closure2_slot0;
                    var0 = var0.visibleTabs;
                    var3 = var6.bind(var3)(var0);
                    var0 = false;
                    if (!(var5 !== var3)) {
                        _fun106896_ip = 65;
                        continue _fun106896
                    }
                case 53:
                    var3 = _closure2_slot0;
                    var3.visibleTabs = var4;
                    var0 = true;
                case 65:
                    var3 = _closure2_slot0;
                    var3 = var3.visibleTabCounts;
                    if (!(var2 !== var3)) {
                        _fun106896_ip = 91;
                        continue _fun106896
                    }
                case 79:
                    var1 = _closure2_slot0;
                    var1.visibleTabCounts = var2;
                    var0 = true;
                case 91:
                    return var0;
            }
        };
        var2.updateVisibleTabs = var8;
        var7 = function(arg0) { // Environment: var7
            _fun106897: for (var _fun106897_ip = 0;;) switch (_fun106897_ip) {
                case 0:
                    var1 = arg0;
                    var4 = var1.isInitialSearchQuery;
                    var0 = var1.isPendingSearchResults;
                    var6 = var1.searchTabCounts;
                    var _closure3_slot0 = var6;
                    var1 = undefined;
                    var _closure3_slot1 = var1;
                    var2 = _closure2_slot0;
                    if (var4) {
                        _fun106897_ip = 210;
                        continue _fun106897
                    }
                case 46:
                    if (var0) {
                        _fun106897_ip = 142;
                        continue _fun106897
                    }
                case 49:
                    var5 = var2.candidateTabs;
                    var4 = var5.every;
                    var0 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var4.bind(var5)(var0);
                    var4 = !var0;
                    var0 = !var4;
                    if (var4) {
                        _fun106897_ip = 140;
                        continue _fun106897
                    }
                case 82:
                    var5 = _closure2_slot0;
                    var1 = false;
                    var5.isInitialSearchQuery = var1;
                    var4 = var5.updateVisibleTabs;
                    var1 = {};
                    var9 = var5.candidateTabs;
                    var8 = var9.filter;
                    var7 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = 0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var7 = var8.bind(var9)(var7);
                    var1.nextTabs = var7;
                    var1.nextTabCounts = var6;
                    var0 = var4.bind(var5)(var1);
                case 140:
                    return var0;
                case 142:
                    var0 = var2.isInitialSearchQuery;
                    _closure3_slot1 = var0;
                    var0 = false;
                    var2.isInitialSearchQuery = var0;
                    var1 = var2.updateVisibleTabs;
                    var0 = {};
                    var5 = var2.candidateTabs;
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var3
                        _fun106898: for (var _fun106898_ip = 0;;) switch (_fun106898_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                if (var0) {
                                    _fun106898_ip = 36;
                                    continue _fun106898
                                }
                            case 10:
                                var1 = _closure2_slot0;
                                var3 = var1.visibleTabs;
                                var2 = var3.includes;
                                var1 = arg0;
                                var0 = var2.bind(var3)(var1);
                            case 36:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.nextTabs = var3;
                    var3 = null;
                    var0.nextTabCounts = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 210:
                    var0 = true;
                    var2.isInitialSearchQuery = var0;
                    var1 = var2.updateVisibleTabs;
                    var0 = {};
                    var3 = var2.candidateTabs;
                    var0.nextTabs = var3;
                    var3 = null;
                    var0.nextTabCounts = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var2.computeVisibleTabs = var7;
        var2.searchContext = var1;
        var3 = _closure1_slot12;
        var1 = var1.type;
        var1 = var3[var1];
        var2.candidateTabs = var1;
        var3 = var2.computeCandidateTabs;
        var1 = {};
        var1.isInitialSearchQuery = var6;
        var1.hasUserAddedTags = var5;
        var1.isTagsEmpty = var4;
        var1 = var3.bind(var2)(var1);
        var11 = var2.candidateTabs;
        var1 = new Array(0);
        var10 = 0;
        var12 = var1;
        var3 = arraySpread(var12, var11, var10);
        var2.visibleTabs = var1;
        return var0;
    };
    var _closure1_slot17 = var3;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/hooks/useVisibleSearchTabs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot5;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot15;
            var0 = {};
            var5 = _closure2_slot0;
            var0.searchContext = var5;
            var4 = _closure1_slot10;
            var6 = var4.getState;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = var1.isInitialSearchQuery;
                var0 = var0.bind(var1)();
                return var0;
            };
            var3 = var6.bind(var4)(var5, var3);
            var0.isInitialSearchQuery = var3;
            var6 = var4.getState;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = var1.hasUserAddedTags;
                var0 = var0.bind(var1)();
                return var0;
            };
            var3 = var6.bind(var4)(var5, var3);
            var0.hasUserAddedTags = var3;
            var3 = var4.getState;
            var1 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = var1.isTagsEmpty;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var3.bind(var4)(var5, var1);
            var0.isTagsEmpty = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var9 = var1;
            var8 = var0;
            var0 = new var9[var2](var8, var7);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var8 = var3.bind(var5)(var1, var2);
        var _closure2_slot1 = var8;
        var2 = var5.useState;
        var1 = var8.getCandidateTabs;
        var1 = var1.bind(var8)();
        var1 = var2.bind(var5)(var1);
        var12 = _closure1_slot3;
        var10 = undefined;
        var11 = 2;
        var2 = var12.bind(var10)(var1, var11);
        var1 = 0;
        var3 = var2[var1];
        var _closure2_slot2 = var3;
        var9 = 1;
        var2 = var2[var9];
        var _closure2_slot3 = var2;
        var6 = var5.useState;
        var2 = var8.getVisibleTabs;
        var2 = var2.bind(var8)();
        var2 = var6.bind(var5)(var2);
        var6 = var12.bind(var10)(var2, var11);
        var2 = var6[var1];
        var6 = var6[var9];
        var _closure2_slot4 = var6;
        var13 = var5.useState;
        var6 = null;
        var6 = var13.bind(var5)(var6);
        var6 = var12.bind(var10)(var6, var11);
        var1 = var6[var1];
        var6 = var6[var9];
        var _closure2_slot5 = var6;
        var11 = var5.useEffect;
        var9 = new Array(1);
        var9[0] = var8;
        var6 = function() { // Environment: var0
            var4 = _closure2_slot3;
            var3 = _closure2_slot1;
            var0 = var3.getCandidateTabs;
            var2 = var0.bind(var3)();
            var0 = undefined;
            var2 = var4.bind(var0)(var2);
            var4 = _closure2_slot4;
            var2 = var3.getVisibleTabs;
            var2 = var2.bind(var3)();
            var2 = var4.bind(var0)(var2);
            var2 = _closure2_slot5;
            var1 = var3.getVisibleTabCounts;
            var1 = var1.bind(var3)();
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var11.bind(var5)(var6, var9);
        var11 = var5.useEffect;
        var9 = new Array(2);
        var9[0] = var8;
        var9[1] = var7;
        var6 = function() { // Environment: var0
            var5 = _closure1_slot10;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.shallow;
            var2.equalityFn = var1;
            var1 = true;
            var2.fireImmediately = var1;
            var10 = function(arg0) { // Environment: var0
                var2 = arg0;
                var0 = {};
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                var0.isInitialSearchQuery = var1;
                var1 = var2.isAutocompleteVisible;
                var1 = var1.bind(var2)();
                var0.isAutocompleteVisible = var1;
                var1 = var2.hasUserAddedTags;
                var1 = var1.bind(var2)();
                var0.hasUserAddedTags = var1;
                var1 = var2.isTagsEmpty;
                var1 = var1.bind(var2)();
                var0.isTagsEmpty = var1;
                return var0;
            };
            var9 = function(arg0) { // Environment: var0
                _fun106909: for (var _fun106909_ip = 0;;) switch (_fun106909_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun106909_ip = 99;
                            continue _fun106909
                        }
                    case 9:
                        var6 = var1.isInitialSearchQuery;
                        var0 = var1.isAutocompleteVisible;
                        var5 = var1.hasUserAddedTags;
                        var4 = var1.isTagsEmpty;
                        if (var0) {
                            _fun106909_ip = 99;
                            continue _fun106909
                        }
                    case 36:
                        var3 = _closure2_slot1;
                        var2 = var3.computeCandidateTabs;
                        var1 = {};
                        var1.isInitialSearchQuery = var6;
                        var1.hasUserAddedTags = var5;
                        var1.isTagsEmpty = var4;
                        var1 = var2.bind(var3)(var1);
                        if (!var1) {
                            _fun106909_ip = 99;
                            continue _fun106909
                        }
                    case 74:
                        var2 = _closure2_slot3;
                        var1 = _closure2_slot1;
                        var0 = var1.getCandidateTabs;
                        var1 = var0.bind(var1)();
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 99:
                        var0 = undefined;
                        return var0;
                }
            };
            var12 = var5;
            var11 = var3;
            var8 = var2;
            var0 = var12[var4](var11, var10, var9, var8, var7);
            return var0;
        };
        var6 = var11.bind(var5)(var6, var9);
        var11 = var5.useMemo;
        var9 = new Array(1);
        var9[0] = var3;
        var6 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Set;
            var3 = _closure2_slot2;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var15 = var11.bind(var5)(var6, var9);
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var6 = 13;
        var6 = var12[var6];
        var14 = var9.bind(var10)(var6);
        var13 = var14.useAutoSearchGuildChannelTab;
        var16 = var15.has;
        var6 = _closure1_slot11;
        var11 = var6.GUILD_CHANNELS;
        var11 = var16.bind(var15)(var11);
        var11 = !var11;
        var11 = var13.bind(var14)(var7, var11);
        var11 = 14;
        var11 = var12[var11];
        var14 = var9.bind(var10)(var11);
        var13 = var14.useAutoSearchMembersTab;
        var16 = var15.has;
        var11 = var6.MEMBERS;
        var11 = var16.bind(var15)(var11);
        var11 = !var11;
        var11 = var13.bind(var14)(var7, var11);
        var11 = 15;
        var11 = var12[var11];
        var13 = var9.bind(var10)(var11);
        var11 = var13.useAutoSearchPeopleTab;
        var14 = var15.has;
        var6 = var6.PEOPLE;
        var6 = var14.bind(var15)(var6);
        var6 = !var6;
        var6 = var11.bind(var13)(var7, var6);
        var13 = _closure1_slot10;
        var11 = var13.useState;
        var6 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getSearchResultsQuery;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11 = var11.bind(var13)(var7, var6);
        var _closure2_slot6 = var11;
        var6 = var5.useRef;
        var6 = var6.bind(var5)(var11);
        var _closure2_slot7 = var6;
        var14 = var5.useEffect;
        var13 = new Array(1);
        var13[0] = var11;
        var6 = function() { // Environment: var0
            var1 = _closure2_slot7;
            var0 = _closure2_slot6;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var6 = var14.bind(var5)(var6, var13);
        var6 = 16;
        var6 = var12[var6];
        var10 = var9.bind(var10)(var6);
        var9 = var10.useStateFromStoresObject;
        var12 = _closure1_slot6;
        var6 = new Array(4);
        var6[0] = var12;
        var12 = _closure1_slot8;
        var6[1] = var12;
        var12 = _closure1_slot7;
        var6[2] = var12;
        var4 = _closure1_slot9;
        var6[3] = var4;
        var4 = new Array(3);
        var4[0] = var11;
        var4[1] = var7;
        var4[2] = var3;
        var3 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 17;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.getSearchContextId;
            var0 = _closure2_slot0;
            var0 = var3.bind(var4)(var0);
            var _closure3_slot0 = var0;
            var0 = {};
            var _closure3_slot1 = var0;
            var3 = _closure2_slot2;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun106914: for (var _fun106914_ip = 0;;) switch (_fun106914_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot11;
                        var0 = var0.MEMBERS;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 268;
                            continue _fun106914
                        }
                    case 23:
                        var0 = _closure1_slot11;
                        var0 = var0.GUILD_CHANNELS;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 236;
                            continue _fun106914
                        }
                    case 40:
                        var0 = _closure1_slot11;
                        var0 = var0.PEOPLE;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 204;
                            continue _fun106914
                        }
                    case 57:
                        var0 = _closure1_slot11;
                        var0 = var0.MESSAGES;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 130;
                            continue _fun106914
                        }
                    case 71:
                        var0 = _closure1_slot11;
                        var0 = var0.PINS;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 130;
                            continue _fun106914
                        }
                    case 85:
                        var0 = _closure1_slot11;
                        var0 = var0.MEDIA;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 130;
                            continue _fun106914
                        }
                    case 99:
                        var0 = _closure1_slot11;
                        var0 = var0.LINKS;
                        if (!(var0 !== var2)) {
                            _fun106914_ip = 130;
                            continue _fun106914
                        }
                    case 113:
                        var0 = _closure1_slot11;
                        var0 = var0.FILES;
                        if (!(var0 === var2)) {
                            _fun106914_ip = 298;
                            continue _fun106914
                        }
                    case 130:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var1);
                        var4 = var5.getSearchTabFetchId;
                        var1 = _closure2_slot0;
                        var0 = _closure2_slot6;
                        var5 = var4.bind(var5)(var1, var2, var0);
                        var1 = _closure3_slot1;
                        var4 = _closure1_slot6;
                        var0 = var4.getTotalCount;
                        var0 = var0.bind(var4)(var5);
                        var1[var2] = var0;
                        _fun106914_ip = 298;
                        continue _fun106914;
                    case 204:
                        var1 = _closure3_slot1;
                        var5 = _closure1_slot9;
                        var4 = var5.getCount;
                        var0 = _closure3_slot0;
                        var0 = var4.bind(var5)(var0);
                        var1[var2] = var0;
                        _fun106914_ip = 298;
                        continue _fun106914;
                    case 236:
                        var1 = _closure3_slot1;
                        var5 = _closure1_slot7;
                        var4 = var5.getCount;
                        var0 = _closure3_slot0;
                        var0 = var4.bind(var5)(var0);
                        var1[var2] = var0;
                        _fun106914_ip = 298;
                        continue _fun106914;
                    case 268:
                        var1 = _closure3_slot1;
                        var4 = _closure1_slot8;
                        var3 = var4.getCount;
                        var0 = _closure3_slot0;
                        var0 = var3.bind(var4)(var0);
                        var1[var2] = var0;
                    case 298:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var6 = var9.bind(var10)(var6, var3, var4);
        var _closure2_slot8 = var6;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot10;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.shallow;
            var2.equalityFn = var1;
            var1 = true;
            var2.fireImmediately = var1;
            var10 = function(arg0) { // Environment: var0
                var2 = arg0;
                var0 = {};
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                var0.isInitialSearchQuery = var1;
                var1 = var2.getSearchResultsQuery;
                var3 = var1.bind(var2)();
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                var1 = var3 !== var1;
                var0.isPendingSearchResults = var1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                var0.searchResultsQuery = var1;
                var1 = var2.isAutocompleteVisible;
                var1 = var1.bind(var2)();
                var0.isAutocompleteVisible = var1;
                return var0;
            };
            var9 = function(arg0) { // Environment: var0
                _fun106917: for (var _fun106917_ip = 0;;) switch (_fun106917_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun106917_ip = 141;
                            continue _fun106917
                        }
                    case 12:
                        var5 = var0.isInitialSearchQuery;
                        var4 = var0.isPendingSearchResults;
                        var6 = var0.searchResultsQuery;
                        var0 = var0.isAutocompleteVisible;
                        if (var0) {
                            _fun106917_ip = 141;
                            continue _fun106917
                        }
                    case 39:
                        var3 = _closure2_slot1;
                        var2 = var3.computeVisibleTabs;
                        var1 = {};
                        var1.isInitialSearchQuery = var5;
                        if (var4) {
                            _fun106917_ip = 75;
                            continue _fun106917
                        }
                    case 62:
                        var5 = _closure2_slot7;
                        var5 = var5.current;
                        var4 = var5 !== var6;
                    case 75:
                        var1.isPendingSearchResults = var4;
                        var4 = _closure2_slot8;
                        var1.searchTabCounts = var4;
                        var1 = var2.bind(var3)(var1);
                        if (!var1) {
                            _fun106917_ip = 141;
                            continue _fun106917
                        }
                    case 97:
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot1;
                        var1 = var3.getVisibleTabs;
                        var1 = var1.bind(var3)();
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = _closure2_slot5;
                        var0 = var3.getVisibleTabCounts;
                        var0 = var0.bind(var3)();
                        var0 = var1.bind(var2)(var0);
                    case 141:
                        var0 = undefined;
                        return var0;
                }
            };
            var12 = var5;
            var11 = var3;
            var8 = var2;
            var0 = var12[var4](var11, var10, var9, var8, var7);
            return var0;
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var0.visibleTabs = var2;
        var0.visibleTabCounts = var1;
        return var0;
    };
    var2.useVisibleSearchTabs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 7, 6, 31, 4190, 13678, 13738, 13733, 8925, 8861, 660, 8920, 3035, 13779, 13780, 13781, 566, 8927, 2]);