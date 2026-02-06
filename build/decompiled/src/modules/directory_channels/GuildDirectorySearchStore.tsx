// modules/directory_channels/GuildDirectorySearchStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun71506: for (var _fun71506_ip = 0;;) switch (_fun71506_ip) {
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
                _fun71506_ip = 76;
                continue _fun71506;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = new Array(0);
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun71510: for (var _fun71510_ip = 0;;) switch (_fun71510_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71510_ip = 69;
                        continue _fun71510
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71510_ip = 105;
                    continue _fun71510;
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
        var0 = 'getSearchState';
        var4.key = var0;
        var0 = function arg0() {
            _fun71511: for (var _fun71511_ip = 0;;) switch (_fun71511_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun71511_ip = 34;
                        continue _fun71511
                    }
                case 20:
                    var0 = {
                        'mostRecentQuery': '',
                        'fetching': false
                    };
                case 34:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSearchResults';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun71512: for (var _fun71512_ip = 0;;) switch (_fun71512_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var4 = var2[var0];
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun71512_ip = 47;
                        continue _fun71512
                    }
                case 25:
                    var3 = arg1;
                    var3 = var4[var3];
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun71512_ip = 47;
                        continue _fun71512
                    }
                case 41:
                    var0 = var3.results;
                case 47:
                    if (!(var2 == var0)) {
                        _fun71512_ip = 55;
                        continue _fun71512
                    }
                case 51:
                    var0 = _closure1_slot7;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldFetch';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun71513: for (var _fun71513_ip = 0;;) switch (_fun71513_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    var1 = var0 == var3;
                    var2 = undefined;
                    if (var1) {
                        _fun71513_ip = 47;
                        continue _fun71513
                    }
                case 25:
                    var1 = arg1;
                    var1 = var3[var1];
                    var3 = var0 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun71513_ip = 47;
                        continue _fun71513
                    }
                case 41:
                    var2 = var1.lastSearchedAt;
                case 47:
                    var0 = var0 == var2;
                    if (var0) {
                        _fun71513_ip = 85;
                        continue _fun71513
                    }
                case 54:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2 = var1 - var2;
                    var1 = 120000;
                    var0 = var2 > var1;
                case 85:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildDirectorySearchStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var3 = var0.query;
        var1 = _closure1_slot8;
        var0 = {};
        var4 = true;
        var0.fetching = var4;
        var0.mostRecentQuery = var3;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_SEARCH_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var5 = var0.query;
        var4 = var0.results;
        var6 = _closure1_slot8;
        var2 = {};
        var9 = var6[var3];
        var10 = var2;
        var7 = copyDataProperties(var10, var9);
        var8 = false;
        var7 = 'fetching';
        var2[var7] = var8;
        var6[var3] = var2;
        var8 = new Array(0);
        var _closure2_slot0 = var8;
        var2 = var4.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildDirectoryEntryFromServer;
            var1 = arg0;
            var3 = var2.bind(var3)(var1);
            var2 = _closure2_slot0;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var1 = var2.bind(var4)(var1);
        var2 = _closure1_slot9;
        var1 = {};
        var9 = var2[var3];
        var10 = var1;
        var4 = copyDataProperties(var10, var9);
        var4 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 5;
        var6 = var6[var0];
        var0 = undefined;
        var7 = var7.bind(var0)(var6);
        var6 = var7.orderByTotalMemberCount;
        var6 = var6.bind(var7)(var8);
        var4.results = var6;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var6 = var6.bind(var7)();
        var4.lastSearchedAt = var6;
        var1[var5] = var4;
        var2[var3] = var1;
        return var0;
    };
    var1.GUILD_DIRECTORY_SEARCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot8;
        var0 = {};
        var5 = var1[var2];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var4 = false;
        var3 = 'fetching';
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_SEARCH_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot8;
        var0 = {
            'fetching': false,
            'mostRecentQuery': ''
        };
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_SEARCH_CLEAR = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var3 = var0.query;
        var1 = _closure1_slot8;
        var0 = {};
        var4 = false;
        var0.fetching = var4;
        var0.mostRecentQuery = var3;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_CACHED_SEARCH = var8;
    var3 = function arg0() {
        _fun71520: for (var _fun71520_ip = 0;;) switch (_fun71520_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot8;
                var5 = var0[var3];
                var2 = null;
                var7 = var2 == var5;
                var0 = undefined;
                var6 = undefined;
                if (var7) {
                    _fun71520_ip = 49;
                    continue _fun71520
                }
            case 43:
                var6 = var5.mostRecentQuery;
            case 49:
                if (!(var2 != var6)) {
                    _fun71520_ip = 153;
                    continue _fun71520
                }
            case 53:
                var5 = _closure1_slot9;
                var5 = var5[var3];
                var6 = var5[var6];
                if (!(var2 != var6)) {
                    _fun71520_ip = 153;
                    continue _fun71520
                }
            case 69:
                var5 = var6.results;
                var2 = var5.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.guildId;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var7 = var2.bind(var5)(var1);
                var2 = _closure1_slot9;
                var1 = {};
                var8 = var2[var3];
                var9 = var1;
                var5 = copyDataProperties(var9, var8);
                var4 = _closure1_slot8;
                var4 = var4[var3];
                var5 = var4.mostRecentQuery;
                var4 = {};
                var9 = var4;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = 'results';
                var4[var6] = var7;
                var1[var5] = var4;
                var2[var3] = var1;
            case 153:
                return var0;
        }
    };
    var1.GUILD_DIRECTORY_ENTRY_DELETE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/GuildDirectorySearchStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8956, 566, 806, 2]);