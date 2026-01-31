// modules/search/native/stores/SearchGuildChannelTabStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun105261: for (var _fun105261_ip = 0;;) switch (_fun105261_ip) {
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
                _fun105261_ip = 76;
                continue _fun105261;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var7 = var4.bind(var0)(var7);
    var8 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot8 = var8;
    var7 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AutocompleterResultTypes;
    var _closure1_slot11 = var7;
    var7 = new Array(0);
    var _closure1_slot12 = var7;
    var7 = new Array(0);
    var _closure1_slot13 = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot7;
        var2 = function() { // Original name: GuildChannelSearchManager, environment: var4
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.count = var1;
            var1 = new Array(0);
            var2.textChannels = var1;
            var1 = new Array(0);
            var2.voiceChannels = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'search';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun105266: for (var _fun105266_ip = 0;;) switch (_fun105266_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var6 = var7[var4];
                    var0 = undefined;
                    var10 = var5.bind(var0)(var6);
                    var9 = var10.getBoosterMap;
                    var6 = _closure1_slot11;
                    var8 = var6.TEXT_CHANNEL;
                    var16 = var9.bind(var10)(var8);
                    var8 = var7[var4];
                    var9 = var5.bind(var0)(var8);
                    var8 = var9.getBoosterMap;
                    var6 = var6.VOICE_CHANNEL;
                    var11 = var8.bind(var9)(var6);
                    var14 = {
                        'query': null,
                        'guildId': null,
                        'limit': 1000,
                        'allowEmptyQueries': true,
                        'allowSnowflake': true,
                        'fuzzy': false
                    };
                    var14.query = var1;
                    var6 = arg1;
                    var14.guildId = var6;
                    var6 = function() { // Original name: filter, environment: var3
                        var0 = true;
                        return var0;
                    };
                    var14.filter = var6;
                    var8 = _closure1_slot1;
                    var6 = var7[var4];
                    var15 = var8.bind(var0)(var6);
                    var9 = var15.queryChannels;
                    var6 = {};
                    var18 = var6;
                    var17 = var14;
                    var10 = copyDataProperties(var18, var17);
                    var10 = _closure1_slot9;
                    var13 = 'type';
                    var6[var13] = var10;
                    var10 = 'boosters';
                    var6[var10] = var16;
                    var6 = var9.bind(var15)(var6);
                    var4 = var7[var4];
                    var9 = var8.bind(var0)(var4);
                    var8 = var9.queryChannels;
                    var4 = {};
                    var18 = var4;
                    var17 = var14;
                    var14 = copyDataProperties(var18, var17);
                    var12 = _closure1_slot8;
                    var4[var13] = var12;
                    var4[var10] = var11;
                    var9 = var8.bind(var9)(var4);
                    var8 = var9.map;
                    var4 = function(arg0) { // Environment: var3
                        var0 = {};
                        var1 = arg0;
                        var1 = var1.record;
                        var0.channel = var1;
                        return var0;
                    };
                    var4 = var8.bind(var9)(var4);
                    var2.voiceChannels = var4;
                    var4 = 9;
                    var4 = var7[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.chain;
                    var6 = var4.bind(var5)(var6);
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var3
                        _fun105269: for (var _fun105269_ip = 0;;) switch (_fun105269_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = {};
                                var1 = var2.record;
                                var0.channel = var1;
                                var4 = _closure1_slot10;
                                var3 = var4.lastMessageId;
                                var1 = var2.record;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1);
                                var3 = null;
                                if (!(var3 == var1)) {
                                    _fun105269_ip = 62;
                                    continue _fun105269
                                }
                            case 50:
                                var2 = var2.record;
                                var1 = var2.lastMessageId;
                            case 62:
                                var0.lastMessageId = var1;
                                return var0;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.sort;
                    var3 = function(arg0, arg1) { // Environment: var3
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.compare;
                        var0 = arg1;
                        var1 = var0.lastMessageId;
                        var0 = arg0;
                        var0 = var0.lastMessageId;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.value;
                    var3 = var3.bind(var4)();
                    var2.textChannels = var3;
                    var3 = var1.length;
                    var1 = 0;
                    if (!(!(var3 > var1))) {
                        _fun105266_ip = 341;
                        continue _fun105266
                    }
                case 331:
                    var1 = null;
                    var2.count = var1;
                    _fun105266_ip = 373;
                    continue _fun105266;
                case 341:
                    var1 = var2.textChannels;
                    var3 = var1.length;
                    var1 = var2.voiceChannels;
                    var1 = var1.length;
                    var1 = var3 + var1;
                    var2.count = var1;
                case 373:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'getTextChannels';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.textChannels;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getVoiceChannels';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.voiceChannels;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getCount';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.count;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7 = var7.bind(var0)();
    var _closure1_slot14 = var7;
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
    var _closure1_slot15 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: SearchGuildChannelTabStore, environment: var5
            _fun105275: for (var _fun105275_ip = 0;;) switch (_fun105275_ip) {
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
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun105275_ip = 69;
                        continue _fun105275
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun105275_ip = 105;
                    continue _fun105275;
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
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot10;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getTextChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun105277: for (var _fun105277_ip = 0;;) switch (_fun105277_ip) {
                case 0:
                    var3 = _closure1_slot15;
                    var2 = var3.get;
                    var0 = arg0;
                    var4 = var2.bind(var3)(var0);
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun105277_ip = 41;
                        continue _fun105277
                    }
                case 31:
                    var3 = var4.getTextChannels;
                    var0 = var3.bind(var4)();
                case 41:
                    if (!(var2 == var0)) {
                        _fun105277_ip = 49;
                        continue _fun105277
                    }
                case 45:
                    var0 = _closure1_slot12;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getVoiceChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun105278: for (var _fun105278_ip = 0;;) switch (_fun105278_ip) {
                case 0:
                    var3 = _closure1_slot15;
                    var2 = var3.get;
                    var0 = arg0;
                    var4 = var2.bind(var3)(var0);
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun105278_ip = 41;
                        continue _fun105278
                    }
                case 31:
                    var3 = var4.getVoiceChannels;
                    var0 = var3.bind(var4)();
                case 41:
                    if (!(var2 == var0)) {
                        _fun105278_ip = 49;
                        continue _fun105278
                    }
                case 45:
                    var0 = _closure1_slot13;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun105279: for (var _fun105279_ip = 0;;) switch (_fun105279_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun105279_ip = 41;
                        continue _fun105279
                    }
                case 31:
                    var2 = var3.getCount;
                    var1 = var2.bind(var3)();
                case 41:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun105279_ip = 53;
                        continue _fun105279
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SearchGuildChannelTabStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleSearchGuildChannelTabSearch, environment: var3
        _fun105280: for (var _fun105280_ip = 0;;) switch (_fun105280_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.id;
                var3 = var0.guildId;
                var2 = var0.searchQueryString;
                var4 = _closure1_slot15;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                var4 = null;
                if (!(var4 == var1)) {
                    _fun105280_ip = 66;
                    continue _fun105280
                }
            case 42:
                var4 = _closure1_slot14;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var6;
                var4 = new var9[var4](var8);
                var1 = var4 instanceof Object ? var4 : var6;
            case 66:
                var4 = _closure1_slot15;
                var0 = var4.set;
                var0 = var0.bind(var4)(var5, var1);
                var0 = var1.search;
                var0 = var0.bind(var1)(var2, var3);
                var0 = undefined;
                return var0;
        }
    };
    var1.SEARCH_GUILD_CHANNEL_TAB_SEARCH = var8;
    var3 = function(arg0) { // Original name: handleSearchGuildChannelTabCleanup, environment: var3
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot15;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.SEARCH_GUILD_CHANNEL_TAB_CLEANUP = var3;
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
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchGuildChannelTabStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1662, 3906, 5561, 5553, 22, 21, 566, 806, 2]);