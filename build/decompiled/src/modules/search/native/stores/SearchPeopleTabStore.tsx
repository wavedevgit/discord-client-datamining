// modules/search/native/stores/SearchPeopleTabStore.tsx
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
        _fun105641: for (var _fun105641_ip = 0;;) switch (_fun105641_ip) {
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
                _fun105641_ip = 76;
                continue _fun105641;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = new Array(0);
    var _closure1_slot10 = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot7;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = null;
            var2.count = var4;
            var4 = '';
            var2.searchQueryString = var4;
            var4 = new Array(0);
            var2.groupDMs = var4;
            var4 = {};
            var2.userIndexes = var4;
            var4 = new Array(0);
            var2.results = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.UserSearch;
            var3 = var5.prototype;
            var4 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var7 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.processResults;
                var0 = var0.bind(var1)();
                return var0;
            };
            var8 = var4;
            var3 = new var8[var5](var7, var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.userSearch = var3;
            var4 = var2.userSearch;
            var3 = var4.subscribe;
            var2 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.processResults;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'teardown';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.userSearch;
            var0 = var1.unsubscribe;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'search';
        var0.key = var5;
        var5 = function arg0() {
            _fun105649: for (var _fun105649_ip = 0;;) switch (_fun105649_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var2.toLowerCase;
                    var2 = var0.bind(var2)();
                    var0 = var2.trim;
                    var3 = var0.bind(var2)();
                    var1.searchQueryString = var3;
                    var0 = '';
                    if (!(var0 !== var3)) {
                        _fun105649_ip = 106;
                        continue _fun105649
                    }
                case 40:
                    var2 = var1.userSearch;
                    var0 = var2.filter;
                    var0 = var0.bind(var2)(var3);
                    var1.userIndexes = var0;
                    var4 = var1.userSearch;
                    var2 = var4.fetch;
                    var0 = true;
                    var0 = var2.bind(var4)(var3, var0);
                    var2 = function arg0() {
                        _fun105650: for (var _fun105650_ip = 0;;) switch (_fun105650_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.toLocaleLowerCase;
                                var2 = var1.bind(var2)();
                                var1 = var2.trim;
                                var1 = var1.bind(var2)();
                                var _closure4_slot0 = var1;
                                var2 = var1.length;
                                var1 = 0;
                                if (!(var1 !== var2)) {
                                    _fun105650_ip = 214;
                                    continue _fun105650
                                }
                            case 43:
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 7;
                                var2 = var6[var2];
                                var5 = undefined;
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.chain;
                                var7 = _closure1_slot8;
                                var2 = var7.getMutablePrivateChannels;
                                var2 = var2.bind(var7)();
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.values;
                                var3 = var2.bind(var3)();
                                var2 = var3.filter;
                                var4 = _closure1_slot0;
                                var1 = 8;
                                var1 = var6[var1];
                                var1 = var4.bind(var5)(var1);
                                var1 = var1.filterGroupDMs;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var0 = new Array(3);
                                    var0[0] = var1;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 8;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.matchGroupDM;
                                    var3 = _closure4_slot0;
                                    var3 = var4.bind(var5)(var1, var3);
                                    var0[1] = var3;
                                    var3 = _closure1_slot9;
                                    var2 = var3.getScoreWithoutFetchingLatest;
                                    var1 = var1.id;
                                    var1 = var2.bind(var3)(var1);
                                    var0[2] = var1;
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    _fun105652: for (var _fun105652_ip = 0;;) switch (_fun105652_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = var3[Symbol.iterator];
                                            var3 = var0().next;
                                            var1 = var3().value;
                                            var1 = var0;
                                            var5 = undefined;
                                            var2 = var1 === var5;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun105652_ip = 49;
                                                continue _fun105652
                                            }
                                        case 24:
                                            var4 = var3().value;
                                            var3 = var0;
                                            var3 = var3 === var5;
                                            var1 = undefined;
                                            var2 = var3;
                                            if (var3) {
                                                _fun105652_ip = 49;
                                                continue _fun105652
                                            }
                                        case 43:
                                            var1 = var4;
                                            var2 = var3;
                                        case 49:
                                            if (var2) {
                                                _fun105652_ip = 55;
                                                continue _fun105652
                                            }
                                        case 52:
                                            var0.return();
                                        case 55:
                                            var0 = 0;
                                            var0 = var1 > var0;
                                            return var0;
                                    }
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.sort;
                                var1 = function(arg0, arg1) { // Environment: var0
                                    _fun105653: for (var _fun105653_ip = 0;;) switch (_fun105653_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = arg1;
                                            var0 = 1;
                                            var1 = var2[var0];
                                            var0 = var3[var0];
                                            var0 = var1 - var0;
                                            var1 = 0;
                                            if (!(var1 === var0)) {
                                                _fun105653_ip = 42;
                                                continue _fun105653
                                            }
                                        case 27:
                                            var1 = 2;
                                            var2 = var2[var1];
                                            var1 = var3[var1];
                                            var0 = var2 - var1;
                                        case 42:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    _fun105654: for (var _fun105654_ip = 0;;) switch (_fun105654_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0[Symbol.iterator];
                                            var0 = var1().next;
                                            var3 = var0().value;
                                            var2 = var1;
                                            var0 = undefined;
                                            var2 = var2 === var0;
                                            if (var2) {
                                                _fun105654_ip = 25;
                                                continue _fun105654
                                            }
                                        case 22:
                                            var0 = var3;
                                        case 25:
                                            if (var2) {
                                                _fun105654_ip = 31;
                                                continue _fun105654
                                            }
                                        case 28:
                                            var1.return();
                                        case 31:
                                            return var0;
                                    }
                                };
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.value;
                                var0 = var0.bind(var1)();
                                _fun105650_ip = 218;
                                continue _fun105650;
                            case 214:
                                var0 = new Array(0);
                            case 218:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3);
                    var1.groupDMs = var0;
                    _fun105649_ip = 116;
                    continue _fun105649;
                case 106:
                    var0 = var1.processResults;
                    var0 = var0.bind(var1)();
                case 116:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'processResults';
        var0.key = var5;
        var5 = function() {
            _fun105655: for (var _fun105655_ip = 0;;) switch (_fun105655_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.userSearch;
                    var1 = var2.filter;
                    var0 = var3.searchQueryString;
                    var0 = var1.bind(var2)(var0);
                    var3.userIndexes = var0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var2);
                    var5 = var6.parseUserSearchResults;
                    var2 = {
                        'data': null,
                        'withGuildMembers': true,
                        'withAffinitySuggestions': true,
                        'withFriends': true,
                        'withFriendSuggestions': false,
                        'withFriendRequests': false,
                        'withFriendRequestsIncoming': false,
                        'withFriendRequestsOutgoing': false,
                        'excludeCurrentUser': true
                    };
                    var7 = var3.userIndexes;
                    var2.data = var7;
                    var8 = var5.bind(var6)(var2);
                    var2 = var3.groupDMs;
                    var5 = var2.length;
                    var6 = 0;
                    var2 = var8;
                    if (!(var5 > var6)) {
                        _fun105655_ip = 326;
                        continue _fun105655
                    }
                case 118:
                    var7 = var3.searchQueryString;
                    var5 = '';
                    var2 = var8;
                    if (!(var5 !== var7)) {
                        _fun105655_ip = 326;
                        continue _fun105655
                    }
                case 138:
                    var7 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 10;
                    var9 = var12[var5];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var12[var5];
                    var5 = var11.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.qGlQrW;
                    var5 = var9.bind(var10)(var5);
                    var7.title = var5;
                    var5 = var3.groupDMs;
                    var7.items = var5;
                    var9 = var8.findIndex;
                    var5 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var1 = var0.title;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 10;
                        var2 = var6[var0];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        var3 = var2.intl;
                        var2 = var3.string;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.t;
                        var0 = var0.y29JXs;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 === var0;
                        return var0;
                    };
                    var11 = var9.bind(var8)(var5);
                    var5 = -1;
                    if (!(var5 !== var11)) {
                        _fun105655_ip = 295;
                        continue _fun105655
                    }
                case 237:
                    var5 = var8.slice;
                    var14 = var5.bind(var8)(var6, var11);
                    var5 = new Array(1);
                    var15 = var5;
                    var13 = 0;
                    var10 = arraySpread(var15, var14, var13);
                    var5[var10] = var7;
                    var9 = 1;
                    var13 = var10 + var9;
                    var9 = var8.slice;
                    var14 = var9.bind(var8)(var11);
                    var15 = var5;
                    var9 = arraySpread(var15, var14, var13);
                    var2 = var5;
                    _fun105655_ip = 326;
                    continue _fun105655;
                case 295:
                    var5 = new Array(1);
                    var15 = var5;
                    var14 = var8;
                    var13 = 0;
                    var8 = arraySpread(var15, var14, var13);
                    var5[var8] = var7;
                    var7 = 1;
                    var7 = var8 + var7;
                    var2 = var5;
                case 326:
                    var5 = var3.searchQueryString;
                    var5 = var5.length;
                    if (!(!(var5 > var6))) {
                        _fun105655_ip = 351;
                        continue _fun105655
                    }
                case 341:
                    var5 = null;
                    var3.count = var5;
                    _fun105655_ip = 376;
                    continue _fun105655;
                case 351:
                    var5 = var2.reduce;
                    var4 = function(arg0, arg1) { // Environment: var4
                        var0 = arg1;
                        var0 = var0.items;
                        var1 = var0.length;
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                    };
                    var4 = var5.bind(var2)(var4, var6);
                    var3.count = var4;
                case 376:
                    var3.results = var2;
                    var2 = _closure1_slot13;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getResults';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.results;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getCount';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0.count;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7 = var7.bind(var0)();
    var _closure1_slot11 = var7;
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
    var _closure1_slot12 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun105661: for (var _fun105661_ip = 0;;) switch (_fun105661_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun105661_ip = 69;
                        continue _fun105661
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun105661_ip = 105;
                    continue _fun105661;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getResults';
        var4.key = var6;
        var6 = function arg0() {
            _fun105663: for (var _fun105663_ip = 0;;) switch (_fun105663_ip) {
                case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.get;
                    var0 = arg0;
                    var4 = var2.bind(var3)(var0);
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun105663_ip = 41;
                        continue _fun105663
                    }
                case 31:
                    var3 = var4.getResults;
                    var0 = var3.bind(var4)();
                case 41:
                    if (!(var2 == var0)) {
                        _fun105663_ip = 49;
                        continue _fun105663
                    }
                case 45:
                    var0 = _closure1_slot10;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var5 = function arg0() {
            _fun105664: for (var _fun105664_ip = 0;;) switch (_fun105664_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun105664_ip = 41;
                        continue _fun105664
                    }
                case 31:
                    var2 = var3.getCount;
                    var1 = var2.bind(var3)();
                case 41:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun105664_ip = 53;
                        continue _fun105664
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'SearchPeopleTabStore';
    var8.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function arg0() {
        _fun105665: for (var _fun105665_ip = 0;;) switch (_fun105665_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.id;
                var2 = var0.searchQueryString;
                var3 = _closure1_slot12;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun105665_ip = 61;
                    continue _fun105665
                }
            case 37:
                var3 = _closure1_slot11;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var5;
                var3 = new var8[var3](var7);
                var1 = var3 instanceof Object ? var3 : var5;
            case 61:
                var3 = _closure1_slot12;
                var0 = var3.set;
                var0 = var0.bind(var3)(var4, var1);
                var0 = var1.search;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.SEARCH_PEOPLE_TAB_SEARCH = var6;
    var6 = function arg0() {
        _fun105666: for (var _fun105666_ip = 0;;) switch (_fun105666_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var3 = _closure1_slot12;
                var1 = var3.get;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun105666_ip = 41;
                    continue _fun105666
                }
            case 31:
                var1 = var3.teardown;
                var1 = var1.bind(var3)();
            case 41:
                var1 = _closure1_slot12;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.SEARCH_PEOPLE_TAB_CLEANUP = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var13 = var6;
    var11 = var1;
    var1 = new var13[var8](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot13 = var1;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchPeopleTabStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1372, 5560, 22, 13734, 11251, 1234, 566, 806, 2]);