// modules/search/native/stores/SearchMemberTabStore.tsx
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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun105728: for (var _fun105728_ip = 0;;) switch (_fun105728_ip) {
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
                _fun105728_ip = 76;
                continue _fun105728;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Permissions;
    var _closure1_slot10 = var7;
    var7 = new Array(0);
    var _closure1_slot11 = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot8;
        var2 = function() { // Original name: GuildMemberSearchManager, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot7;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var1, var4);
            var4 = null;
            var1.count = var4;
            var5 = false;
            var1.isFetching = var5;
            var5 = '';
            var1.searchQueryString = var5;
            var1.targetChannelId = var4;
            var4 = new Array(0);
            var1.results = var4;
            var2 = function(arg0, arg1) { // Environment: var2
                _fun105733: for (var _fun105733_ip = 0;;) switch (_fun105733_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = _closure3_slot0;
                        var1 = var0.searchQueryString;
                        var0 = arg1;
                        if (!(var0 === var1)) {
                            _fun105733_ip = 158;
                            continue _fun105733
                        }
                    case 28:
                        var3 = _closure3_slot0;
                        var0 = false;
                        var3.isFetching = var0;
                        var1 = new Array(0);
                        var _closure4_slot0 = var1;
                        var8 = _closure1_slot9;
                        var7 = var8.getChannel;
                        var5 = var3.targetChannelId;
                        var5 = var7.bind(var8)(var5);
                        var _closure4_slot1 = var5;
                        var5 = var6.forEach;
                        var4 = function(arg0) { // Environment: var4
                            _fun105734: for (var _fun105734_ip = 0;;) switch (_fun105734_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = var3.type;
                                    var4 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 7;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var4.bind(var0)(var1);
                                    var1 = var1.AutocompleterResultTypes;
                                    var1 = var1.USER;
                                    if (!(var2 === var1)) {
                                        _fun105734_ip = 147;
                                        continue _fun105734
                                    }
                                case 49:
                                    var4 = _closure4_slot1;
                                    var2 = null;
                                    if (!(var2 != var4)) {
                                        _fun105734_ip = 133;
                                        continue _fun105734
                                    }
                                case 62:
                                    var4 = _closure1_slot2;
                                    var5 = _closure1_slot3;
                                    var2 = 8;
                                    var2 = var5[var2];
                                    var5 = var4.bind(var0)(var2);
                                    var4 = var5.can;
                                    var2 = {};
                                    var6 = _closure1_slot10;
                                    var6 = var6.VIEW_CHANNEL;
                                    var2.permission = var6;
                                    var6 = var3.record;
                                    var2.user = var6;
                                    var6 = _closure4_slot1;
                                    var2.context = var6;
                                    var2 = var4.bind(var5)(var2);
                                    if (var2) {
                                        _fun105734_ip = 133;
                                        continue _fun105734
                                    }
                                case 131:
                                    return var0;
                                case 133:
                                    var2 = _closure4_slot0;
                                    var1 = var2.push;
                                    var1 = var1.bind(var2)(var3);
                                case 147:
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        var3.results = var1;
                        var3 = var3.searchQueryString;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(!(var4 > var3))) {
                            _fun105733_ip = 129;
                            continue _fun105733
                        }
                    case 115:
                        var4 = _closure3_slot0;
                        var3 = null;
                        var4.count = var3;
                        _fun105733_ip = 144;
                        continue _fun105733;
                    case 129:
                        var2 = _closure3_slot0;
                        var1 = var1.length;
                        var2.count = var1;
                    case 144:
                        var1 = _closure1_slot14;
                        var0 = var1.emitChange;
                        var0 = var0.bind(var1)();
                    case 158:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.onAutocompleterResultsChange = var2;
            var6 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 7;
            var5 = var4[var2];
            var6 = var6.bind(var0)(var5);
            var5 = var1.onAutocompleterResultsChange;
            var3 = _closure1_slot0;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            var2 = var2.AutocompleterResultTypes;
            var2 = var2.USER;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = var6.prototype;
            var3 = Object.create(var2, {
                constructor: {
                    value: var6
                }
            });
            var7 = 50;
            var10 = var3;
            var9 = var5;
            var8 = var4;
            var2 = new var10[var6](var9, var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            var1.autocompleter = var2;
            var2 = var1.autocompleter;
            var1 = var2.createSearchContext;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setAutocompleteOptions';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.autocompleter;
            var1 = var2.setOptions;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'teardown';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.autocompleter;
            var0 = var1.clean;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'search';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            var2 = arg2;
            var1 = this;
            var0 = arg1;
            var1.targetChannelId = var0;
            var0 = true;
            var1.isFetching = var0;
            var0 = var2.toLowerCase;
            var2 = var0.bind(var2)();
            var0 = var2.trim;
            var3 = var0.bind(var2)();
            var1.searchQueryString = var3;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var5 = var6.requestMembers;
            var4 = arg0;
            var2 = 50;
            var2 = var5.bind(var6)(var4, var3, var2);
            var2 = var1.autocompleter;
            var1 = var2.search;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getResults';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.results;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getCount';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.count;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getIsFetching';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.isFetching;
            return var0;
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7 = var7.bind(var0)();
    var _closure1_slot12 = var7;
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
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: SearchGuildMemberTabStoreImpl, environment: var5
            _fun105742: for (var _fun105742_ip = 0;;) switch (_fun105742_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun105742_ip = 69;
                        continue _fun105742
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun105742_ip = 105;
                    continue _fun105742;
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
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getResults';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun105744: for (var _fun105744_ip = 0;;) switch (_fun105744_ip) {
                case 0:
                    var3 = _closure1_slot13;
                    var2 = var3.get;
                    var0 = arg0;
                    var4 = var2.bind(var3)(var0);
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun105744_ip = 41;
                        continue _fun105744
                    }
                case 31:
                    var3 = var4.getResults;
                    var0 = var3.bind(var4)();
                case 41:
                    if (!(var2 == var0)) {
                        _fun105744_ip = 49;
                        continue _fun105744
                    }
                case 45:
                    var0 = _closure1_slot11;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun105745: for (var _fun105745_ip = 0;;) switch (_fun105745_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun105745_ip = 41;
                        continue _fun105745
                    }
                case 31:
                    var2 = var3.getCount;
                    var1 = var2.bind(var3)();
                case 41:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun105745_ip = 53;
                        continue _fun105745
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsFetching';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun105746: for (var _fun105746_ip = 0;;) switch (_fun105746_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun105746_ip = 41;
                        continue _fun105746
                    }
                case 31:
                    var2 = var3.getIsFetching;
                    var1 = var2.bind(var3)();
                case 41:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun105746_ip = 51;
                        continue _fun105746
                    }
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'SearchGuildMemberTabStore';
    var8.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0) { // Original name: handleSearchGuildMemberTabSearch, environment: var3
        _fun105747: for (var _fun105747_ip = 0;;) switch (_fun105747_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.id;
                var5 = var0.guildId;
                var4 = var0.channelId;
                var9 = var0.threadId;
                var3 = var0.searchQueryString;
                var2 = _closure1_slot13;
                var0 = var2.get;
                var2 = var0.bind(var2)(var7);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun105747_ip = 77;
                    continue _fun105747
                }
            case 53:
                var6 = _closure1_slot12;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var8;
                var6 = new var14[var6](var13);
                var2 = var6 instanceof Object ? var6 : var8;
            case 77:
                var6 = _closure1_slot13;
                var1 = var6.set;
                var1 = var1.bind(var6)(var7, var2);
                var6 = var2.setAutocompleteOptions;
                var1 = {
                    'frecencyBoosters': true,
                    'allowSnowflake': true
                };
                var8 = true;
                var7 = {};
                var7.guild = var5;
                var7.strict = var8;
                var10 = var0 != var9;
                var0 = undefined;
                var8 = undefined;
                if (!var10) {
                    _fun105747_ip = 141;
                    continue _fun105747
                }
            case 138:
                var8 = var9;
            case 141:
                var7.thread = var8;
                var1.userFilters = var7;
                var1 = var6.bind(var2)(var1);
                var1 = var2.search;
                var1 = var1.bind(var2)(var5, var4, var3);
                return var0;
        }
    };
    var1.SEARCH_GUILD_MEMBER_TAB_SEARCH = var6;
    var6 = function(arg0) { // Original name: handleSearchGuildMemberTabCleanup, environment: var3
        _fun105748: for (var _fun105748_ip = 0;;) switch (_fun105748_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var3 = _closure1_slot13;
                var1 = var3.get;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun105748_ip = 41;
                    continue _fun105748
                }
            case 31:
                var1 = var3.teardown;
                var1 = var1.bind(var3)();
            case 41:
                var1 = _closure1_slot13;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.SEARCH_GUILD_MEMBER_TAB_CLEANUP = var6;
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
    var _closure1_slot14 = var1;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchMemberTabStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1372, 660, 6587, 3055, 5566, 566, 806, 2]);