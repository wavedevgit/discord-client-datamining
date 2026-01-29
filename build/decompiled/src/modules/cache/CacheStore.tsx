// modules/cache/CacheStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun39784: for (var _fun39784_ip = 0;;) switch (_fun39784_ip) {
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
                _fun39784_ip = 74;
                continue _fun39784;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var9 = function(arg0) { // Original name: handleClearCaches, environment: var4
        _fun39787: for (var _fun39787_ip = 0;;) switch (_fun39787_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot18;
                var1 = var4.log;
                var0 = 'Clearing cache store';
                var0 = var1.bind(var4)(var0);
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                _closure1_slot21 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var6 = var5[var1];
                var0 = undefined;
                var6 = var4.bind(var0)(var6);
                var8 = var6.Storage;
                var7 = var8.remove;
                var6 = _closure1_slot15;
                var6 = var7.bind(var8)(var6);
                var6 = var5[var1];
                var6 = var4.bind(var0)(var6);
                var8 = var6.Storage;
                var7 = var8.remove;
                var6 = _closure1_slot16;
                var6 = var7.bind(var8)(var6);
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var5 = var1.Storage;
                var4 = var5.remove;
                var1 = _closure1_slot17;
                var1 = var4.bind(var5)(var1);
                var1 = 'no-cache';
                _closure1_slot20 = var1;
                var4 = var3.type;
                var1 = 'CLEAR_CACHES';
                var1 = var1 === var4;
                if (!var1) {
                    _fun39787_ip = 182;
                    continue _fun39787
                }
            case 176:
                var1 = var3.preventWritingCachesAgainThisSession;
            case 182:
                if (!var1) {
                    _fun39787_ip = 191;
                    continue _fun39787
                }
            case 185:
                var1 = true;
                _closure1_slot19 = var1;
            case 191:
                return var0;
        }
    };
    var0 = function() { // Original name: _loadChannelHistory, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun39790: for (var _fun39790_ip = 0;;) switch (_fun39790_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var6 = arg1;
                        var11 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39790_ip = 467;
                            continue _fun39790
                        }
                    case 19:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var4 = var1.bind(var3)();
                        var10 = null;
                        if (!(var10 != var8)) {
                            _fun39790_ip = 49;
                            continue _fun39790
                        }
                    case 42:
                        if (!(var10 == var11)) {
                            _fun39790_ip = 181;
                            continue _fun39790
                        }
                    case 49:
                        var5 = _closure1_slot18;
                        var3 = var5.verbose;
                        var1 = var2.HermesInternal;
                        var12 = var1.concat;
                        var23 = 'skipped loaded messages (channel: ';
                        var21 = ', database: ';
                        var19 = ').';
                        var22 = var11;
                        var20 = var8;
                        var1 = var23[var12](var22, var21, var20, var19, var18);
                        var1 = var3.bind(var5)(var1);
                        var3 = var2.performance;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var3 = var1 - var4;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var3 = {
                            'guildId': null,
                            'channelId': null
                        };
                        var5 = new Array(0);
                        var3.users = var5;
                        var5 = new Array(0);
                        var3.members = var5;
                        var5 = new Array(0);
                        var3.messages = var5;
                        var1[1] = var3;
                        return var1;
                    case 181:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 15;
                        var1 = var7[var1];
                        var12 = undefined;
                        var7 = var3.bind(var12)(var1);
                        var3 = var7.startupLoad;
                        var19 = _closure1_slot14;
                        var23 = var7;
                        var22 = var8;
                        var21 = var6;
                        var20 = var11;
                        var1 = var23[var3](var22, var21, var20, var19, var18);
                        SaveGenerator(address = 238);
                    case 236:
                        return var1;
                    case 238:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39790_ip = 464;
                            continue _fun39790
                        }
                    case 247:
                        var8 = _closure1_slot18;
                        var7 = var8.verbose;
                        var3 = var1.messages;
                        var22 = var3.length;
                        var3 = var2.HermesInternal;
                        var15 = var3.concat;
                        var23 = 'loaded ';
                        var21 = ' messages (guild: ';
                        var19 = ', channel: ';
                        var17 = ').';
                        var20 = var6;
                        var18 = var11;
                        var3 = var23[var15](var22, var21, var20, var19, var18, var17, var16);
                        var3 = var7.bind(var8)(var3);
                        var3 = {};
                        var3.guildId = var6;
                        var3.channelId = var11;
                        var6 = var1.users;
                        var3.users = var6;
                        var6 = var1.members;
                        var3.members = var6;
                        var6 = var1.messages;
                        var3.messages = var6;
                        var8 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var6 = 16;
                        var7 = var13[var6];
                        var9 = var8.bind(var12)(var7);
                        var8 = var9.recordChannelFetchedLocal;
                        var7 = _closure1_slot0;
                        var6 = var13[var6];
                        var6 = var7.bind(var12)(var6);
                        var21 = var6.INITIAL_MESSAGE_FETCH_KEY;
                        var18 = _closure1_slot14;
                        var17 = var1.messages;
                        var23 = var9;
                        var22 = var11;
                        var20 = null;
                        var19 = null;
                        var5 = var23[var8](var22, var21, var20, var19, var18, var17, var16);
                        var5 = var2.performance;
                        var2 = var5.now;
                        var2 = var2.bind(var5)();
                        var4 = var2 - var4;
                        var2 = new Array(2);
                        var2[0] = var4;
                        var2[1] = var3;
                        return var2;
                    case 464:
                        return var1;
                    case 467:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: _loadEarlyCache, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun39793: for (var _fun39793_ip = 0;;) switch (_fun39793_ip) {
                    case 0:
                        StartGenerator();
                        var16 = arg0;
                        var19 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39793_ip = 1473;
                            continue _fun39793
                        }
                    case 18:
                        var _closure4_slot0 = var16;
                        var _closure4_slot1 = var19;
                        var15 = undefined;
                        var _closure4_slot2 = var15;
                        var _closure4_slot3 = var15;
                        var _closure4_slot4 = var15;
                        var _closure4_slot5 = var15;
                        var _closure4_slot6 = var15;
                        var _closure4_slot7 = var15;
                        var _closure4_slot8 = var15;
                        var _closure4_slot9 = var15;
                        var _closure4_slot10 = var15;
                        var _closure4_slot11 = var15;
                        var _closure4_slot12 = var15;
                        var4 = _closure1_slot18;
                        var3 = var4.verbose;
                        var1 = 'loading early cache';
                        var1 = var3.bind(var4)(var1);
                        var3 = _closure1_slot10;
                        var1 = var3.getSocket;
                        var3 = var1.bind(var3)();
                        _closure4_slot2 = var3;
                        var1 = var3.connect;
                        var1 = var1.bind(var3)();
                        var3 = _closure1_slot13;
                        var1 = var3.getGuildId;
                        var1 = var1.bind(var3)();
                        var7 = null;
                        var3 = var7 != var1;
                        var43 = null;
                        if (!var3) {
                            _fun39793_ip = 152;
                            continue _fun39793
                        }
                    case 149:
                        var43 = var1;
                    case 152:
                        _closure4_slot3 = var43;
                        var3 = _closure1_slot12;
                        var1 = var3.getChannelId;
                        var1 = var1.bind(var3)();
                        var3 = var7 != var1;
                        var42 = null;
                        if (!var3) {
                            _fun39793_ip = 182;
                            continue _fun39793
                        }
                    case 179:
                        var42 = var1;
                    case 182:
                        _closure4_slot4 = var42;
                        var4 = global;
                        var3 = var4.performance;
                        var1 = var3.now;
                        var9 = var1.bind(var3)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 17;
                        var6 = var5[var1];
                        var6 = var3.bind(var15)(var6);
                        var11 = var6.loadCachedMessages;
                        var10 = var11.measureAsyncWithoutNesting;
                        var6 = function() { // Environment: var8
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot3;
                            var2 = _closure4_slot4;
                            var1 = function() { // Original name: loadChannelHistory, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot27;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var4, var3, var2);
                            return var0;
                        };
                        var17 = var10.bind(var11)(var6);
                        var6 = var5[var1];
                        var6 = var3.bind(var15)(var6);
                        var11 = var6.fetchGuildCache;
                        var10 = var11.measureAsync;
                        var6 = function() { // Environment: var8
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var1 = function() { // Original name: loadInitialGuilds, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot29;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3, var2);
                            return var0;
                        };
                        var14 = var10.bind(var11)(var6);
                        var1 = var5[var1];
                        var1 = var3.bind(var15)(var1);
                        var5 = var1.fetchGuildCache;
                        var3 = var5.measureAsync;
                        var1 = function() { // Environment: var8
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var1 = function() { // Original name: loadInitialGuildChannels, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot30;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3, var2);
                            return var0;
                        };
                        var13 = var3.bind(var5)(var1);
                        if (!(var7 == var16)) {
                            _fun39793_ip = 334;
                            continue _fun39793
                        }
                    case 311:
                        var5 = var4.Promise;
                        var3 = var5.resolve;
                        var1 = new Array(0);
                        var12 = var3.bind(var5)(var1);
                        _fun39793_ip = 382;
                        continue _fun39793;
                    case 334:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 18;
                        var1 = var5[var1];
                        var10 = var3.bind(var15)(var1);
                        var6 = var10.timeAsync;
                        var5 = '💾';
                        var3 = 'cache: private_channels';
                        var1 = function() { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var0 = null;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var12 = var6.bind(var10)(var5, var3, var1);
                    case 382:
                        if (!(var7 != var16)) {
                            _fun39793_ip = 436;
                            continue _fun39793
                        }
                    case 386:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 18;
                        var1 = var5[var1];
                        var10 = var3.bind(var15)(var1);
                        var6 = var10.timeAsync;
                        var5 = '💾';
                        var3 = 'cache: user_settings';
                        var1 = function() { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getAll;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var11 = var6.bind(var10)(var5, var3, var1);
                        _fun39793_ip = 455;
                        continue _fun39793;
                    case 436:
                        var5 = var4.Promise;
                        var3 = var5.resolve;
                        var1 = {};
                        var11 = var3.bind(var5)(var1);
                    case 455:
                        if (!(var7 != var16)) {
                            _fun39793_ip = 509;
                            continue _fun39793
                        }
                    case 459:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 18;
                        var1 = var5[var1];
                        var10 = var3.bind(var15)(var1);
                        var6 = var10.timeAsync;
                        var5 = '💾';
                        var3 = 'cache: read_states';
                        var1 = function() { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getAll;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10 = var6.bind(var10)(var5, var3, var1);
                        _fun39793_ip = 530;
                        continue _fun39793;
                    case 509:
                        var5 = var4.Promise;
                        var3 = var5.resolve;
                        var1 = new Array(0);
                        var10 = var3.bind(var5)(var1);
                    case 530:
                        if (!(var7 != var16)) {
                            _fun39793_ip = 584;
                            continue _fun39793
                        }
                    case 534:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 18;
                        var1 = var5[var1];
                        var18 = var3.bind(var15)(var1);
                        var6 = var18.timeAsync;
                        var5 = '💾';
                        var3 = 'cache: user_guild_settings';
                        var1 = function() { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getAll;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var6.bind(var18)(var5, var3, var1);
                        _fun39793_ip = 605;
                        continue _fun39793;
                    case 584:
                        var5 = var4.Promise;
                        var3 = var5.resolve;
                        var1 = new Array(0);
                        var6 = var3.bind(var5)(var1);
                    case 605:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 23;
                        var18 = var5[var1];
                        var21 = var3.bind(var15)(var18);
                        var20 = 'AllCacheStores';
                        var18 = function() { // Environment: var8
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 24;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var18 = var21.bind(var15)(var20, var18);
                        var1 = var5[var1];
                        var5 = var3.bind(var15)(var1);
                        var3 = 'MobileAppDatabaseManager';
                        var1 = function() { // Environment: var8
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 25;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = var5.bind(var15)(var3, var1);
                        var5 = var4.Promise;
                        var3 = var5.all;
                        var1 = new Array(7);
                        var1[0] = var17;
                        var1[1] = var14;
                        var1[2] = var13;
                        var1[3] = var12;
                        var1[4] = var11;
                        var1[5] = var10;
                        var1[6] = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 721);
                    case 719:
                        return var1;
                    case 721:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39793_ip = 1470;
                            continue _fun39793
                        }
                    case 730:
                        var5 = _closure1_slot3;
                        var3 = 7;
                        var10 = var5.bind(var15)(var1, var3);
                        var11 = _closure1_slot3;
                        var6 = 0;
                        var5 = var10[var6];
                        var3 = 2;
                        var11 = var11.bind(var15)(var5, var3);
                        var75 = var11[var6];
                        var5 = 1;
                        var13 = var11[var5];
                        _closure4_slot5 = var13;
                        var5 = var10[var5];
                        _closure4_slot6 = var5;
                        var12 = var10[var3];
                        _closure4_slot7 = var12;
                        var3 = 3;
                        var3 = var10[var3];
                        _closure4_slot8 = var3;
                        var5 = 4;
                        var14 = var10[var5];
                        _closure4_slot9 = var14;
                        var5 = 5;
                        var11 = var10[var5];
                        _closure4_slot10 = var11;
                        var5 = 6;
                        var10 = var10[var5];
                        _closure4_slot11 = var10;
                        var17 = var4.performance;
                        var5 = var17.now;
                        var5 = var5.bind(var17)();
                        var77 = var5 - var9;
                        var17 = _closure1_slot18;
                        var9 = var17.verbose;
                        var5 = var4.HermesInternal;
                        var21 = var5.concat;
                        var78 = 'cache loaded in ';
                        var76 = 'ms (channel_history ';
                        var74 = 'ms)';
                        var5 = var78[var21](var77, var76, var75, var74, var73);
                        var5 = var9.bind(var17)(var5);
                        if (!(var7 == var13)) {
                            _fun39793_ip = 981;
                            continue _fun39793
                        }
                    case 908:
                        var9 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var5 = 28;
                        var5 = var17[var5];
                        var9 = var9.bind(var15)(var5);
                        var5 = 'database:history_cache_null';
                        var5 = var9.bind(var15)(var5);
                        var17 = _closure1_slot18;
                        var9 = var17.verbose;
                        var5 = 'finished without dispatching CACHE_LOADED';
                        var5 = var9.bind(var17)(var5);
                        var5 = new Array(3);
                        var9 = false;
                        var5[0] = var9;
                        var5[1] = var7;
                        var5[2] = var6;
                        return var5;
                    case 981:
                        var9 = var4.Object;
                        var6 = var9.fromEntries;
                        var18 = var13.members;
                        var17 = var18.map;
                        var5 = function(arg0) { // Environment: var8
                            var1 = arg0;
                            var2 = var1.userId;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                        };
                        var5 = var17.bind(var18)(var5);
                        var5 = var6.bind(var9)(var5);
                        _closure4_slot12 = var5;
                        var5 = var12.guildId;
                        var6 = var7 != var5;
                        if (!var6) {
                            _fun39793_ip = 1045;
                            continue _fun39793
                        }
                    case 1035:
                        var5 = var12.channels;
                        var6 = var7 != var5;
                    case 1045:
                        var5 = var12.guildId;
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var9 = 26;
                        var9 = var18[var9];
                        var9 = var17.bind(var15)(var9);
                        var17 = var9.Emitter;
                        var9 = var17.batched;
                        var8 = function() { // Environment: var8
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var5 = var4[var2];
                            var0 = undefined;
                            var9 = var3.bind(var0)(var5);
                            var8 = var9.time;
                            var5 = '💾';
                            var7 = 'Dispatch Mini Cache';
                            var6 = function() { // Environment: var1
                                _fun39808: for (var _fun39808_ip = 0;;) switch (_fun39808_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 27;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.dispatch;
                                        var0 = {};
                                        var3 = 'CACHE_LOADED';
                                        var0.type = var3;
                                        var4 = _closure4_slot6;
                                        var0.guilds = var4;
                                        var4 = _closure4_slot8;
                                        var0.privateChannels = var4;
                                        var4 = _closure4_slot7;
                                        var4 = var4.channels;
                                        var5 = null;
                                        if (!(var5 == var4)) {
                                            _fun39808_ip = 81;
                                            continue _fun39808
                                        }
                                    case 77:
                                        var4 = new Array(0);
                                    case 81:
                                        var0.initialGuildChannels = var4;
                                        var4 = _closure4_slot5;
                                        var9 = var4.users;
                                        var4 = new Array(0);
                                        var8 = 0;
                                        var10 = var4;
                                        var6 = arraySpread(var10, var9, var8);
                                        var0.users = var4;
                                        var4 = _closure4_slot5;
                                        var4 = var4.channelId;
                                        if (!(var5 != var4)) {
                                            _fun39808_ip = 155;
                                            continue _fun39808
                                        }
                                    case 127:
                                        var4 = {};
                                        var6 = _closure4_slot5;
                                        var7 = var6.channelId;
                                        var6 = _closure4_slot5;
                                        var6 = var6.messages;
                                        var4[var7] = var6;
                                        _fun39808_ip = 157;
                                        continue _fun39808;
                                    case 155:
                                        var4 = {};
                                    case 157:
                                        var0.messages = var4;
                                        var4 = _closure4_slot5;
                                        var4 = var4.guildId;
                                        if (!(var5 != var4)) {
                                            _fun39808_ip = 197;
                                            continue _fun39808
                                        }
                                    case 175:
                                        var4 = {};
                                        var5 = _closure4_slot5;
                                        var6 = var5.guildId;
                                        var5 = _closure4_slot12;
                                        var4[var6] = var5;
                                        _fun39808_ip = 199;
                                        continue _fun39808;
                                    case 197:
                                        var4 = {};
                                    case 199:
                                        var0.guildMembers = var4;
                                        var4 = _closure4_slot9;
                                        var0.userSettings = var4;
                                        var4 = _closure4_slot11;
                                        var0.userGuildSettings = var4;
                                        var3 = _closure4_slot10;
                                        var0.readStates = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var6 = var8.bind(var9)(var5, var7, var6);
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.time;
                            var2 = 'socket.processFirstQueuedDispatch()';
                            var1 = function() { // Environment: var1
                                var0 = _closure4_slot2;
                                var2 = var0.dispatcher;
                                var1 = var2.processFirstQueuedDispatch;
                                var0 = global;
                                var4 = var0.Set;
                                var0 = var4.prototype;
                                var3 = Object.create(var0, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var5 = ['INITIAL_GUILD'];
                                var6 = var3;
                                var0 = new var6[var4](var5, var4);
                                var0 = var0 instanceof Object ? var0 : var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var5, var2, var1);
                            return var0;
                        };
                        var8 = var9.bind(var17)(var8);
                        var9 = _closure1_slot18;
                        var8 = var9.verbose;
                        var18 = var4.JSON;
                        var17 = var18.stringify;
                        var41 = var17.bind(var18)(var19);
                        var40 = var7 != var16;
                        var17 = var7 == var16;
                        var39 = undefined;
                        if (var17) {
                            _fun39793_ip = 1137;
                            continue _fun39793
                        }
                    case 1132:
                        var39 = var16.name;
                    case 1137:
                        var38 = var3.length;
                        var37 = var13.guildId;
                        var36 = var13.channelId;
                        var16 = var13.messages;
                        var35 = var16.length;
                        var16 = var13.members;
                        var34 = var16.length;
                        var13 = var13.users;
                        var33 = var13.length;
                        var12 = var12.channels;
                        var13 = var7 == var12;
                        var32 = undefined;
                        if (var13) {
                            _fun39793_ip = 1205;
                            continue _fun39793
                        }
                    case 1200:
                        var32 = var12.length;
                    case 1205:
                        var13 = var4.Object;
                        var12 = var13.keys;
                        var12 = var12.bind(var13)(var14);
                        var49 = var12.length;
                        var47 = var11.length;
                        var45 = var10.length;
                        var4 = var4.HermesInternal;
                        var28 = var4.concat;
                        var78 = 'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ';
                        var77 = arg1;
                        var76 = '\n          selected_guild: ';
                        var74 = '\n          selected_channel: ';
                        var72 = '\n          navigation_state: ';
                        var70 = '\n          database: ';
                        var68 = '\n            name: ';
                        var66 = '\n        data:\n          database:\n            private_channels: ';
                        var64 = '\n            channel_history:\n              guild: ';
                        var62 = '\n              channel: ';
                        var60 = '\n              messages: ';
                        var58 = '\n                members: ';
                        var56 = '\n                users: ';
                        var54 = '\n            initial_guild:\n              id: ';
                        var52 = '\n              channels: ';
                        var50 = '\n            user_settings: ';
                        var48 = '\n            read_states: ';
                        var46 = '\n            user_guild_settings: ';
                        var44 = '\n      )';
                        var75 = var43;
                        var73 = var42;
                        var71 = var41;
                        var69 = var40;
                        var67 = var39;
                        var65 = var38;
                        var63 = var37;
                        var61 = var36;
                        var59 = var35;
                        var57 = var34;
                        var55 = var33;
                        var53 = var5;
                        var51 = var32;
                        var4 = var78[var28](var77, var76, var75, var74, var73, var72, var71, var70, var69, var68, var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43);
                        var4 = var8.bind(var9)(var4);
                        var8 = _closure1_slot18;
                        var4 = var8.verbose;
                        var2 = 'finished dispatching CACHE_LOADED';
                        var2 = var4.bind(var8)(var2);
                        var2 = new Array(3);
                        var4 = true;
                        var2[0] = var4;
                        var4 = null;
                        if (!var6) {
                            _fun39793_ip = 1454;
                            continue _fun39793
                        }
                    case 1442:
                        var6 = var7 != var5;
                        var4 = null;
                        if (!var6) {
                            _fun39793_ip = 1454;
                            continue _fun39793
                        }
                    case 1451:
                        var4 = var5;
                    case 1454:
                        var2[1] = var4;
                        var3 = var3.length;
                        var2[2] = var3;
                        return var2;
                    case 1470:
                        return var1;
                    case 1473:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() { // Original name: _loadInitialGuilds, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun39812: for (var _fun39812_ip = 0;;) switch (_fun39812_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var6 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39812_ip = 345;
                            continue _fun39812
                        }
                    case 18:
                        var _closure4_slot0 = var2;
                        var5 = undefined;
                        var _closure4_slot1 = var5;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun39812_ip = 338;
                            continue _fun39812
                        }
                    case 37:
                        var4 = var6.page;
                        var2 = 'private-channels';
                        if (!(var2 !== var4)) {
                            _fun39812_ip = 97;
                            continue _fun39812
                        }
                    case 53:
                        var2 = 'guild-channels';
                        if (!(var2 !== var4)) {
                            _fun39812_ip = 97;
                            continue _fun39812
                        }
                    case 63:
                        var2 = 'other';
                        if (!(var2 === var4)) {
                            _fun39812_ip = 106;
                            continue _fun39812
                        }
                    case 71:
                        var4 = var6.guildId;
                        var2 = '@me';
                        if (!(var2 === var4)) {
                            _fun39812_ip = 106;
                            continue _fun39812
                        }
                    case 86:
                        var2 = true;
                        _closure1_slot25 = var2;
                        _fun39812_ip = 106;
                        continue _fun39812;
                    case 97:
                        var2 = true;
                        _closure1_slot25 = var2;
                    case 106:
                        var4 = _closure1_slot25;
                        if (var4) {
                            _fun39812_ip = 275;
                            continue _fun39812
                        }
                    case 119:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 31;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.getCommittedVersions;
                        var4 = var4.bind(var7)();
                        SaveGenerator(address = 153);
                    case 151:
                        return var4;
                    case 153:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39812_ip = 272;
                            continue _fun39812
                        }
                    case 159:
                        var7 = var4.initial_guild_id;
                        if (!(var3 == var7)) {
                            _fun39812_ip = 174;
                            continue _fun39812
                        }
                    case 169:
                        var7 = var6.guildId;
                    case 174:
                        _closure4_slot1 = var7;
                        if (!(var3 != var7)) {
                            _fun39812_ip = 265;
                            continue _fun39812
                        }
                    case 182:
                        var6 = '@me';
                        if (!(var6 !== var7)) {
                            _fun39812_ip = 265;
                            continue _fun39812
                        }
                    case 192:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 29;
                        var6 = var8[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.tryLoadAsync;
                        var6 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 30;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getOneAsync;
                            var1 = _closure4_slot0;
                            var0 = _closure4_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address = 232);
                    case 230:
                        return var6;
                    case 232:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39812_ip = 262;
                            continue _fun39812
                        }
                    case 238:
                        if (!(var3 == var6)) {
                            _fun39812_ip = 248;
                            continue _fun39812
                        }
                    case 242:
                        var7 = new Array(0);
                        _fun39812_ip = 259;
                        continue _fun39812;
                    case 248:
                        var8 = new Array(1);
                        var8[0] = var6;
                        var7 = var8;
                    case 259:
                        return var7;
                    case 262:
                        return var6;
                    case 265:
                        var6 = new Array(0);
                        return var6;
                    case 272:
                        return var4;
                    case 275:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 29;
                        var2 = var6[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.tryLoadAsync;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.timeAsync;
                            var2 = '💾';
                            var1 = 'cache: guilds';
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 30;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getAsync;
                                var0 = _closure4_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 315);
                    case 313:
                        return var1;
                    case 315:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun39812_ip = 335;
                            continue _fun39812
                        }
                    case 321:
                        var2 = var1;
                        if (!(var3 == var2)) {
                            _fun39812_ip = 332;
                            continue _fun39812
                        }
                    case 328:
                        var2 = new Array(0);
                    case 332:
                        return var2;
                    case 335:
                        return var1;
                    case 338:
                        var1 = new Array(0);
                        return var1;
                    case 345:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() { // Original name: _loadInitialGuildChannels, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun39818: for (var _fun39818_ip = 0;;) switch (_fun39818_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39818_ip = 322;
                            continue _fun39818
                        }
                    case 18:
                        var _closure4_slot0 = var10;
                        var7 = undefined;
                        var _closure4_slot1 = var7;
                        var4 = null;
                        if (!(var4 != var10)) {
                            _fun39818_ip = 286;
                            continue _fun39818
                        }
                    case 37:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 31;
                        var1 = var8[var1];
                        var6 = var6.bind(var7)(var1);
                        var1 = var6.getCommittedVersions;
                        var1 = var1.bind(var6)();
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun39818_ip = 283;
                            continue _fun39818
                        }
                    case 83:
                        var9 = var1.initial_guild_id;
                        var6 = var4 == var9;
                        if (!var6) {
                            _fun39818_ip = 112;
                            continue _fun39818
                        }
                    case 96:
                        var11 = var5.page;
                        var8 = 'guild-channels';
                        var6 = var8 === var11;
                    case 112:
                        if (!var6) {
                            _fun39818_ip = 120;
                            continue _fun39818
                        }
                    case 115:
                        var9 = var5.guildId;
                    case 120:
                        if (!(var4 != var10)) {
                            _fun39818_ip = 195;
                            continue _fun39818
                        }
                    case 124:
                        if (!(var4 != var9)) {
                            _fun39818_ip = 195;
                            continue _fun39818
                        }
                    case 128:
                        _closure4_slot1 = var9;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 29;
                        var5 = var8[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.tryLoadAsync;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var0 = _closure4_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 174);
                    case 172:
                        return var3;
                    case 174:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun39818_ip = 192;
                            continue _fun39818
                        }
                    case 180:
                        var4.channels = var3;
                        var4.guildId = var9;
                        return var4;
                    case 192:
                        return var3;
                    case 195:
                        var5 = _closure1_slot18;
                        var4 = var5.verbose;
                        var2 = global;
                        var3 = var2.HermesInternal;
                        var8 = var3.concat;
                        var16 = 'skipped loading initial guild (guild: ';
                        var14 = ', database: ';
                        var12 = ')';
                        var15 = var9;
                        var13 = var10;
                        var3 = var16[var8](var15, var14, var13, var12, var11);
                        var3 = var4.bind(var5)(var3);
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var2 = {
                            'channels': null,
                            'guildId': null
                        };
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 283:
                        return var1;
                    case 286:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = {
                            'channels': null,
                            'guildId': null
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 322:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: _loadLateLazyCache, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun39822: for (var _fun39822_ip = 0;;) switch (_fun39822_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39822_ip = 643;
                            continue _fun39822
                        }
                    case 15:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var3;
                        var1 = arg3;
                        var _closure4_slot3 = var1;
                        var4 = undefined;
                        var _closure4_slot4 = var4;
                        var _closure4_slot5 = var4;
                        var _closure4_slot6 = var4;
                        var _closure4_slot7 = var4;
                        var _closure4_slot8 = var4;
                        var7 = _closure1_slot18;
                        var2 = var7.verbose;
                        var1 = 'loading late lazy cache';
                        var1 = var2.bind(var7)(var1);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var9 = 17;
                        var1 = var1[var9];
                        var1 = var2.bind(var4)(var1);
                        var7 = var1.fetchLazyCache;
                        var2 = var7.measureAsync;
                        var1 = function() { // Environment: var5
                            var0 = global;
                            var2 = var0.Promise;
                            var1 = var2.all;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 29;
                            var0 = var7[var4];
                            var5 = undefined;
                            var9 = var6.bind(var5)(var0);
                            var8 = var9.tryLoadAsync;
                            var0 = function() { // Environment: var3
                                _fun39824: for (var _fun39824_ip = 0;;) switch (_fun39824_ip) {
                                    case 0:
                                        var1 = _closure4_slot0;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun39824_ip = 36;
                                            continue _fun39824
                                        }
                                    case 13:
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.resolve;
                                        var0 = true;
                                        var0 = var1.bind(var2)(var0);
                                        _fun39824_ip = 91;
                                        continue _fun39824;
                                    case 36:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 18;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var5 = var3.bind(var1)(var2);
                                        var4 = var5.timeAsync;
                                        var3 = '💾';
                                        var2 = 'cache: cache_version';
                                        var1 = function() { // Environment: var1
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 32;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.okAsync;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var4.bind(var5)(var3, var2, var1);
                                    case 91:
                                        return var0;
                                }
                            };
                            var8 = var8.bind(var9)(var0);
                            var0 = new Array(3);
                            var0[0] = var8;
                            var8 = var7[var4];
                            var10 = var6.bind(var5)(var8);
                            var9 = var10.tryLoadAsync;
                            var8 = function() { // Environment: var3
                                _fun39826: for (var _fun39826_ip = 0;;) switch (_fun39826_ip) {
                                    case 0:
                                        var1 = _closure4_slot0;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun39826_ip = 77;
                                            continue _fun39826
                                        }
                                    case 13:
                                        var1 = _closure1_slot25;
                                        if (var1) {
                                            _fun39826_ip = 77;
                                            continue _fun39826
                                        }
                                    case 23:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 18;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.timeAsync;
                                        var2 = '💾';
                                        var1 = 'cache: lazy guilds';
                                        var0 = function() { // Environment: var0
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 30;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.getAsync;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                        _fun39826_ip = 100;
                                        continue _fun39826;
                                    case 77:
                                        var1 = global;
                                        var3 = var1.Promise;
                                        var2 = var3.resolve;
                                        var1 = new Array(0);
                                        var0 = var2.bind(var3)(var1);
                                    case 100:
                                        return var0;
                                }
                            };
                            var8 = var9.bind(var10)(var8);
                            var0[1] = var8;
                            var4 = var7[var4];
                            var5 = var6.bind(var5)(var4);
                            var4 = var5.tryLoadAsync;
                            var3 = function() { // Environment: var3
                                _fun39828: for (var _fun39828_ip = 0;;) switch (_fun39828_ip) {
                                    case 0:
                                        var1 = _closure4_slot0;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun39828_ip = 63;
                                            continue _fun39828
                                        }
                                    case 13:
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.resolve;
                                        var0 = {};
                                        var3 = new Array(0);
                                        var0.all = var3;
                                        var3 = new Array(0);
                                        var0.stale = var3;
                                        var3 = new Array(0);
                                        var0.channels = var3;
                                        var0 = var1.bind(var2)(var0);
                                        _fun39828_ip = 118;
                                        continue _fun39828;
                                    case 63:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 18;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var5 = var3.bind(var1)(var2);
                                        var4 = var5.timeAsync;
                                        var3 = '💾';
                                        var2 = 'cache: basic_channels';
                                        var1 = function() { // Environment: var1
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 33;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.getAsync;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var4.bind(var5)(var3, var2, var1);
                                    case 118:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                            var0[2] = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var7)(var1);
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun39822_ip = 640;
                            continue _fun39822
                        }
                    case 141:
                        var7 = _closure1_slot3;
                        var2 = 3;
                        var7 = var7.bind(var4)(var1, var2);
                        var2 = 0;
                        var2 = var7[var2];
                        _closure4_slot4 = var2;
                        var2 = 1;
                        var12 = var7[var2];
                        _closure4_slot5 = var12;
                        var2 = 2;
                        var8 = var7[var2];
                        _closure4_slot6 = var8;
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var10 = var2.fetchStaleChannels;
                        var7 = var10.measureAsync;
                        var2 = function() { // Environment: var5
                            _fun39830: for (var _fun39830_ip = 0;;) switch (_fun39830_ip) {
                                case 0:
                                    var1 = _closure4_slot0;
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun39830_ip = 42;
                                        continue _fun39830
                                    }
                                case 13:
                                    var1 = _closure4_slot6;
                                    if (!(var2 != var1)) {
                                        _fun39830_ip = 42;
                                        continue _fun39830
                                    }
                                case 21:
                                    var0 = _closure4_slot6;
                                    var0 = var0.stale;
                                    var1 = var0.length;
                                    var0 = 0;
                                    if (!(!(var1 > var0))) {
                                        _fun39830_ip = 67;
                                        continue _fun39830
                                    }
                                case 42:
                                    var0 = global;
                                    var2 = var0.Promise;
                                    var1 = var2.resolve;
                                    var0 = new Array(0);
                                    var0 = var1.bind(var2)(var0);
                                    _fun39830_ip = 110;
                                    continue _fun39830;
                                case 67:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 29;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.tryLoadAsync;
                                    var1 = function() { // Environment: var1
                                        var3 = _closure4_slot0;
                                        var0 = _closure4_slot6;
                                        var2 = var0.stale;
                                        var1 = function(arg0, arg1) { // Original name: loadGuildChannels, environment: var0
                                            var4 = arg1;
                                            var1 = arg0;
                                            var _closure7_slot0 = var1;
                                            var5 = _closure1_slot18;
                                            var3 = var5.verbose;
                                            var10 = var4.length;
                                            var2 = var4.join;
                                            var1 = ', ';
                                            var12 = var2.bind(var4)(var1);
                                            var1 = global;
                                            var2 = var1.HermesInternal;
                                            var8 = var2.concat;
                                            var15 = 'loading stale guild channels (count: ';
                                            var13 = ', ids: ';
                                            var11 = ')';
                                            var14 = var10;
                                            var2 = var15[var8](var14, var13, var12, var11, var10);
                                            var2 = var3.bind(var5)(var2);
                                            var2 = var1.Promise;
                                            var1 = var2.all;
                                            var3 = var4.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var4 = arg0;
                                                var _closure8_slot0 = var4;
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var1 = 19;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var3 = var3.bind(var1)(var2);
                                                var2 = var3.getAsync;
                                                var1 = _closure7_slot0;
                                                var2 = var2.bind(var3)(var1, var4);
                                                var1 = var2.then;
                                                var0 = function(arg0) { // Environment: var0
                                                    var1 = _closure8_slot0;
                                                    var0 = new Array(2);
                                                    var0[0] = var1;
                                                    var1 = arg0;
                                                    var0[1] = var1;
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var0 = var3.bind(var4)(var0);
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var3, var2);
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 110:
                                    return var0;
                            }
                        };
                        var2 = var7.bind(var10)(var2);
                        SaveGenerator(address = 229);
                    case 227:
                        return var2;
                    case 229:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39822_ip = 637;
                            continue _fun39822
                        }
                    case 238:
                        _closure4_slot7 = var2;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 34;
                        var7 = var11[var7];
                        var10 = var10.bind(var4)(var7);
                        var7 = var10.isTTIAutomationEnabled;
                        var7 = var7.bind(var10)();
                        if (var7) {
                            _fun39822_ip = 405;
                            continue _fun39822
                        }
                    case 278:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 36;
                        var7 = var11[var7];
                        var7 = var10.bind(var4)(var7);
                        var10 = var7.DelayLoadLateLazyCacheHoldoutExperiment;
                        var7 = var10.getCachedEnabled;
                        var7 = var7.bind(var10)();
                        var11 = _closure1_slot18;
                        var10 = var11.verbose;
                        if (var7) {
                            _fun39822_ip = 389;
                            continue _fun39822
                        }
                    case 329:
                        var7 = 'loadLateLazyCache: yielding to react';
                        var7 = var10.bind(var11)(var7);
                        var7 = global;
                        var14 = var7.Promise;
                        var7 = var14.prototype;
                        var13 = Object.create(var7, {
                            constructor: {
                                value: var14
                            }
                        });
                        var16 = function(arg0) { // Environment: var5
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var17 = var13;
                        var7 = new var17[var14](var16, var15);
                        var7 = var7 instanceof Object ? var7 : var13;
                        SaveGenerator(address = 377);
                    case 375:
                        return var7;
                    case 377:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 13);
                        if (!var13) {
                            _fun39822_ip = 566;
                            continue _fun39822
                        }
                    case 386:
                        return var7;
                    case 389:
                        var7 = 'loadLateLazyCache: not yielding to react';
                        var7 = var10.bind(var11)(var7);
                        _fun39822_ip = 566;
                        continue _fun39822;
                    case 405:
                        var7 = null;
                        if (!(var7 != var3)) {
                            _fun39822_ip = 482;
                            continue _fun39822
                        }
                    case 411:
                        var10 = var7 == var12;
                        var3 = undefined;
                        if (var10) {
                            _fun39822_ip = 436;
                            continue _fun39822
                        }
                    case 420:
                        var11 = var12.some;
                        var10 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot2;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var11.bind(var12)(var10);
                    case 436:
                        if (var3) {
                            _fun39822_ip = 505;
                            continue _fun39822
                        }
                    case 439:
                        var10 = var7 == var8;
                        var3 = undefined;
                        if (var10) {
                            _fun39822_ip = 479;
                            continue _fun39822
                        }
                    case 448:
                        var10 = var8.all;
                        var7 = var7 == var10;
                        var3 = undefined;
                        if (var7) {
                            _fun39822_ip = 479;
                            continue _fun39822
                        }
                    case 463:
                        var8 = var10.some;
                        var7 = function(arg0) { // Environment: var5
                            _fun39836: for (var _fun39836_ip = 0;;) switch (_fun39836_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1[Symbol.iterator];
                                    var1 = var0().next;
                                    var3 = var1().value;
                                    var2 = var0;
                                    var1 = undefined;
                                    var2 = var2 === var1;
                                    if (var2) {
                                        _fun39836_ip = 25;
                                        continue _fun39836
                                    }
                                case 22:
                                    var1 = var3;
                                case 25:
                                    if (var2) {
                                        _fun39836_ip = 31;
                                        continue _fun39836
                                    }
                                case 28:
                                    var0.return();
                                case 31:
                                    var0 = _closure4_slot2;
                                    var0 = var1 === var0;
                                    return var0;
                            }
                        };
                        var3 = var8.bind(var10)(var7);
                    case 479:
                        if (var3) {
                            _fun39822_ip = 505;
                            continue _fun39822
                        }
                    case 482:
                        var8 = _closure1_slot18;
                        var7 = var8.verbose;
                        var3 = 'loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)';
                        var3 = var7.bind(var8)(var3);
                        _fun39822_ip = 566;
                        continue _fun39822;
                    case 505:
                        var8 = _closure1_slot18;
                        var7 = var8.verbose;
                        var3 = 'loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)';
                        var3 = var7.bind(var8)(var3);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 35;
                        var3 = var8[var3];
                        var7 = var7.bind(var4)(var3);
                        var3 = var7.waitSafelyForPostTTI;
                        var3 = var3.bind(var7)();
                        SaveGenerator(address = 560);
                    case 558:
                        return var3;
                    case 560:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39822_ip = 634;
                            continue _fun39822
                        }
                    case 566:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var4)(var7);
                        var8 = var7.loadLazyCache;
                        var7 = var8.recordStart;
                        var7 = var7.bind(var8)();
                        var8 = _closure1_slot10;
                        var7 = var8.getSocket;
                        var7 = var7.bind(var8)();
                        _closure4_slot8 = var7;
                        var6 = _closure1_slot32;
                        var5 = function() { // Environment: var5
                            _fun39838: for (var _fun39838_ip = 0;;) switch (_fun39838_ip) {
                                case 0:
                                    var0 = global;
                                    var2 = var0.performance;
                                    var1 = var2.now;
                                    var11 = var1.bind(var2)();
                                    var2 = _closure4_slot4;
                                    var1 = false;
                                    if (!(var1 !== var2)) {
                                        _fun39838_ip = 1252;
                                        continue _fun39838
                                    }
                                case 35:
                                    var1 = _closure4_slot5;
                                    var7 = null;
                                    if (!(var7 != var1)) {
                                        _fun39838_ip = 1056;
                                        continue _fun39838
                                    }
                                case 48:
                                    var1 = _closure4_slot6;
                                    if (!(var7 != var1)) {
                                        _fun39838_ip = 1056;
                                        continue _fun39838
                                    }
                                case 59:
                                    var1 = _closure4_slot7;
                                    if (!(var7 != var1)) {
                                        _fun39838_ip = 1056;
                                        continue _fun39838
                                    }
                                case 70:
                                    var1 = _closure4_slot4;
                                    if (!(var7 == var1)) {
                                        _fun39838_ip = 118;
                                        continue _fun39838
                                    }
                                case 78:
                                    var1 = _closure4_slot5;
                                    var1 = var1.length;
                                    var2 = 0;
                                    if (!(!(var1 > var2))) {
                                        _fun39838_ip = 931;
                                        continue _fun39838
                                    }
                                case 96:
                                    var1 = _closure4_slot6;
                                    var1 = var1.all;
                                    var1 = var1.length;
                                    if (!(!(var1 > var2))) {
                                        _fun39838_ip = 931;
                                        continue _fun39838
                                    }
                                case 118:
                                    var2 = _closure1_slot23;
                                    if (var2) {
                                        _fun39838_ip = 842;
                                        continue _fun39838
                                    }
                                case 131:
                                    var5 = _closure4_slot8;
                                    var4 = var5.addAnalytics;
                                    var2 = {};
                                    var10 = true;
                                    var2.hadCacheAtStartup = var10;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = {};
                                    var4 = 'CACHE_LOADED_LAZY';
                                    var2.type = var4;
                                    var4 = _closure4_slot5;
                                    var2.guilds = var4;
                                    var4 = _closure4_slot7;
                                    var2.guildChannels = var4;
                                    var4 = _closure4_slot6;
                                    var4 = var4.channels;
                                    var2.basicGuildChannels = var4;
                                    var4 = _closure4_slot2;
                                    var2.initialGuildId = var4;
                                    var _closure5_slot0 = var2;
                                    var8 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var5 = 17;
                                    var9 = var4[var5];
                                    var2 = undefined;
                                    var9 = var8.bind(var2)(var9);
                                    var13 = var9.deserializeCache;
                                    var12 = var13.measure;
                                    var9 = function() { // Environment: var3
                                        _fun39839: for (var _fun39839_ip = 0;;) switch (_fun39839_ip) {
                                            case 0:
                                                var0 = _closure5_slot0;
                                                var1 = var0.channels;
                                                var2 = null;
                                                if (!(var2 != var1)) {
                                                    _fun39839_ip = 55;
                                                    continue _fun39839
                                                }
                                            case 19:
                                                var3 = _closure1_slot1;
                                                var4 = _closure1_slot2;
                                                var1 = 14;
                                                var1 = var4[var1];
                                                var4 = undefined;
                                                var3 = var3.bind(var4)(var1);
                                                var1 = var0.channels;
                                                var1 = var3.bind(var4)(var1);
                                            case 55:
                                                var1 = var0.privateChannels;
                                                if (!(var2 != var1)) {
                                                    _fun39839_ip = 101;
                                                    continue _fun39839
                                                }
                                            case 65:
                                                var3 = _closure1_slot1;
                                                var4 = _closure1_slot2;
                                                var1 = 14;
                                                var1 = var4[var1];
                                                var4 = undefined;
                                                var3 = var3.bind(var4)(var1);
                                                var1 = var0.privateChannels;
                                                var1 = var3.bind(var4)(var1);
                                            case 101:
                                                var1 = var0.guildChannels;
                                                if (!(var2 != var1)) {
                                                    _fun39839_ip = 153;
                                                    continue _fun39839
                                                }
                                            case 111:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 14;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var2 = var3.bind(var1)(var2);
                                                var1 = var2.deserializeChannelEntries;
                                                var0 = var0.guildChannels;
                                                var0 = var1.bind(var2)(var0);
                                            case 153:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var9 = var12.bind(var13)(var9);
                                    var4 = var4[var5];
                                    var4 = var8.bind(var2)(var4);
                                    var9 = var4.dispatchLazyCache;
                                    var8 = var9.measure;
                                    var4 = function() { // Environment: var3
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 27;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.dispatch;
                                        var0 = _closure5_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var4 = var8.bind(var9)(var4);
                                    var9 = _closure1_slot18;
                                    var8 = var9.verbose;
                                    var12 = var0.performance;
                                    var4 = var12.now;
                                    var4 = var4.bind(var12)();
                                    var13 = var4 - var11;
                                    var4 = var0.HermesInternal;
                                    var12 = var4.concat;
                                    var11 = 'late lazy cache loaded (ok: true, took: ';
                                    var4 = 'ms)';
                                    var4 = var12.bind(var11)(var13, var4);
                                    var4 = var8.bind(var9)(var4);
                                    var9 = _closure4_slot8;
                                    var8 = var9.addAnalytics;
                                    var4 = {};
                                    var4.usedCacheAtStartup = var10;
                                    var4 = var8.bind(var9)(var4);
                                    var10 = _closure4_slot7;
                                    var9 = var10.reduce;
                                    var8 = function(arg0, arg1) { // Environment: var3
                                        _fun39841: for (var _fun39841_ip = 0;;) switch (_fun39841_ip) {
                                            case 0:
                                                var3 = arg1;
                                                var1 = var3[Symbol.iterator];
                                                var3 = var1().next;
                                                var0 = var3().value;
                                                var0 = var1;
                                                var5 = undefined;
                                                var2 = var0 === var5;
                                                var0 = undefined;
                                                if (var2) {
                                                    _fun39841_ip = 49;
                                                    continue _fun39841
                                                }
                                            case 24:
                                                var4 = var3().value;
                                                var3 = var1;
                                                var3 = var3 === var5;
                                                var0 = undefined;
                                                var2 = var3;
                                                if (var3) {
                                                    _fun39841_ip = 49;
                                                    continue _fun39841
                                                }
                                            case 43:
                                                var0 = var4;
                                                var2 = var3;
                                            case 49:
                                                if (var2) {
                                                    _fun39841_ip = 55;
                                                    continue _fun39841
                                                }
                                            case 52:
                                                var1.return();
                                            case 55:
                                                var1 = var0.length;
                                                var0 = arg0;
                                                var0 = var0 + var1;
                                                return var0;
                                        }
                                    };
                                    var4 = 0;
                                    var9 = var9.bind(var10)(var8, var4);
                                    var8 = _closure4_slot7;
                                    var8 = var8.length;
                                    var10 = _closure4_slot6;
                                    var12 = var10.all;
                                    var11 = var12.reduce;
                                    var10 = function(arg0, arg1) { // Environment: var3
                                        _fun39842: for (var _fun39842_ip = 0;;) switch (_fun39842_ip) {
                                            case 0:
                                                var3 = arg1;
                                                var1 = var3[Symbol.iterator];
                                                var3 = var1().next;
                                                var0 = var3().value;
                                                var0 = var1;
                                                var5 = undefined;
                                                var2 = var0 === var5;
                                                var0 = undefined;
                                                if (var2) {
                                                    _fun39842_ip = 49;
                                                    continue _fun39842
                                                }
                                            case 24:
                                                var4 = var3().value;
                                                var3 = var1;
                                                var3 = var3 === var5;
                                                var0 = undefined;
                                                var2 = var3;
                                                if (var3) {
                                                    _fun39842_ip = 49;
                                                    continue _fun39842
                                                }
                                            case 43:
                                                var0 = var4;
                                                var2 = var3;
                                            case 49:
                                                if (var2) {
                                                    _fun39842_ip = 55;
                                                    continue _fun39842
                                                }
                                            case 52:
                                                var1.return();
                                            case 55:
                                                var1 = var0.length;
                                                var0 = arg0;
                                                var0 = var0 + var1;
                                                return var0;
                                        }
                                    };
                                    var11 = var11.bind(var12)(var10, var4);
                                    var10 = _closure4_slot6;
                                    var12 = var10.channels;
                                    var10 = var12.reduce;
                                    var3 = function(arg0, arg1) { // Environment: var3
                                        _fun39843: for (var _fun39843_ip = 0;;) switch (_fun39843_ip) {
                                            case 0:
                                                var3 = arg1;
                                                var1 = var3[Symbol.iterator];
                                                var3 = var1().next;
                                                var0 = var3().value;
                                                var0 = var1;
                                                var5 = undefined;
                                                var2 = var0 === var5;
                                                var0 = undefined;
                                                if (var2) {
                                                    _fun39843_ip = 49;
                                                    continue _fun39843
                                                }
                                            case 24:
                                                var4 = var3().value;
                                                var3 = var1;
                                                var3 = var3 === var5;
                                                var0 = undefined;
                                                var2 = var3;
                                                if (var3) {
                                                    _fun39843_ip = 49;
                                                    continue _fun39843
                                                }
                                            case 43:
                                                var0 = var4;
                                                var2 = var3;
                                            case 49:
                                                if (var2) {
                                                    _fun39843_ip = 55;
                                                    continue _fun39843
                                                }
                                            case 52:
                                                var1.return();
                                            case 55:
                                                var1 = var0.length;
                                                var0 = arg0;
                                                var0 = var0 + var1;
                                                return var0;
                                        }
                                    };
                                    var36 = var10.bind(var12)(var3, var4);
                                    var10 = var11 - var36;
                                    var3 = _closure4_slot6;
                                    var3 = var3.stale;
                                    var3 = var3.length;
                                    var35 = '';
                                    if (!(var4 !== var3)) {
                                        _fun39838_ip = 534;
                                        continue _fun39838
                                    }
                                case 486:
                                    var3 = _closure4_slot6;
                                    var12 = var3.stale;
                                    var4 = var12.join;
                                    var3 = ', ';
                                    var12 = var4.bind(var12)(var3);
                                    var3 = var0.HermesInternal;
                                    var4 = var3.concat;
                                    var3 = ' · ';
                                    var35 = var4.bind(var3)(var12);
                                case 534:
                                    var12 = _closure1_slot18;
                                    var4 = var12.verbose;
                                    var34 = _closure4_slot1;
                                    var33 = _closure4_slot2;
                                    var3 = _closure4_slot0;
                                    var32 = var7 != var3;
                                    var31 = _closure4_slot4;
                                    var3 = var7 == var3;
                                    var30 = undefined;
                                    if (var3) {
                                        _fun39838_ip = 582;
                                        continue _fun39838
                                    }
                                case 573:
                                    var3 = _closure4_slot0;
                                    var30 = var3.name;
                                case 582:
                                    var3 = _closure4_slot5;
                                    var54 = var3.length;
                                    var3 = _closure4_slot6;
                                    var3 = var3.channels;
                                    var50 = var3.length;
                                    var3 = _closure4_slot6;
                                    var3 = var3.stale;
                                    var46 = var3.length;
                                    var3 = _closure4_slot7;
                                    var38 = var3.length;
                                    var3 = var0.HermesInternal;
                                    var25 = var3.concat;
                                    var65 = 'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ';
                                    var63 = '\n          initial_guild: ';
                                    var61 = '\n          database: ';
                                    var59 = '\n            ok: ';
                                    var57 = '\n            name: ';
                                    var55 = '\n        data:\n          database:\n            guilds: ';
                                    var53 = '\n            basic_channels:\n              total: ';
                                    var17 = ' (';
                                    var49 = ' guilds)\n              stale: ';
                                    var45 = ' guilds';
                                    var43 = ')\n              unstale: ';
                                    var41 = '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ';
                                    var37 = ' guilds)\n      )';
                                    var64 = var34;
                                    var62 = var33;
                                    var60 = var32;
                                    var58 = var31;
                                    var56 = var30;
                                    var52 = var11;
                                    var51 = var17;
                                    var48 = var10;
                                    var47 = var17;
                                    var44 = var35;
                                    var42 = var36;
                                    var40 = var9;
                                    var39 = var17;
                                    var3 = var65[var25](var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36);
                                    var3 = var4.bind(var12)(var3);
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var5];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.setCacheInfo;
                                    var3 = {};
                                    var12 = _closure4_slot5;
                                    var12 = var12.length;
                                    var3.guilds = var12;
                                    var12 = _closure4_slot3;
                                    var3.privateChannels = var12;
                                    var3.basicChannels = var11;
                                    var3.basicChannelsStale = var10;
                                    var3.fullChannels = var9;
                                    var3.fullChannelGuilds = var8;
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 842:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 28;
                                    var5 = var4[var2];
                                    var2 = undefined;
                                    var8 = var3.bind(var2)(var5);
                                    var5 = 'already_connected';
                                    var5 = var8.bind(var2)(var5);
                                    var8 = _closure1_slot18;
                                    var5 = var8.log;
                                    var1 = 'Skipping lazy cache; already connected.';
                                    var1 = var5.bind(var8)(var1);
                                    var1 = 27;
                                    var1 = var4[var1];
                                    var3 = var3.bind(var2)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'CACHE_LOADED_LAZY_NO_CACHE';
                                    var1.type = var4;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                case 931:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 28;
                                    var5 = var4[var2];
                                    var2 = undefined;
                                    var8 = var3.bind(var2)(var5);
                                    var5 = 'database:versionless';
                                    var5 = var8.bind(var2)(var5);
                                    var8 = _closure1_slot18;
                                    var5 = var8.log;
                                    var1 = 'kv_cache was not ok (null version with values)';
                                    var1 = var5.bind(var8)(var1);
                                    var1 = 27;
                                    var5 = var4[var1];
                                    var9 = var3.bind(var2)(var5);
                                    var8 = var9.dispatch;
                                    var5 = {
                                        'type': 'CLEAR_CACHES',
                                        'reason': 'database:versionless'
                                    };
                                    var5 = var8.bind(var9)(var5);
                                    var1 = var4[var1];
                                    var3 = var3.bind(var2)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'CACHE_LOADED_LAZY_NO_CACHE';
                                    var1.type = var4;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                case 1056:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 28;
                                    var5 = var3[var1];
                                    var1 = undefined;
                                    var8 = var2.bind(var1)(var5);
                                    var5 = 'database:load_failed';
                                    var5 = var8.bind(var1)(var5);
                                    var5 = _closure1_slot18;
                                    var4 = var5.log;
                                    var8 = _closure4_slot0;
                                    var64 = var7 != var8;
                                    var8 = _closure4_slot6;
                                    var62 = var7 != var8;
                                    var8 = _closure4_slot7;
                                    var60 = var7 != var8;
                                    var6 = _closure4_slot5;
                                    var58 = var7 != var6;
                                    var0 = var0.HermesInternal;
                                    var10 = var0.concat;
                                    var65 = "couldn't load database item (\n          database: ";
                                    var63 = '\n          basic_channels: ';
                                    var61 = '\n          guild_channels: ';
                                    var59 = '\n          guilds: ';
                                    var57 = '\n        )';
                                    var0 = var65[var10](var64, var63, var62, var61, var60, var59, var58, var57, var56);
                                    var0 = var4.bind(var5)(var0);
                                    var0 = 27;
                                    var4 = var3[var0];
                                    var6 = var2.bind(var1)(var4);
                                    var5 = var6.dispatch;
                                    var4 = {
                                        'type': 'CLEAR_CACHES',
                                        'reason': 'database:load_failed'
                                    };
                                    var4 = var5.bind(var6)(var4);
                                    var0 = var3[var0];
                                    var2 = var2.bind(var1)(var0);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var3 = 'CACHE_LOADED_LAZY_NO_CACHE';
                                    var0.type = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                case 1252:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var0 = 28;
                                    var0 = var3[var0];
                                    var1 = undefined;
                                    var4 = var2.bind(var1)(var0);
                                    var0 = 'database:not_ok';
                                    var0 = var4.bind(var1)(var0);
                                    var0 = 27;
                                    var4 = var3[var0];
                                    var6 = var2.bind(var1)(var4);
                                    var5 = var6.dispatch;
                                    var4 = {
                                        'type': 'CLEAR_CACHES',
                                        'reason': 'database:not_ok'
                                    };
                                    var4 = var5.bind(var6)(var4);
                                    var0 = var3[var0];
                                    var2 = var2.bind(var1)(var0);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var3 = 'CACHE_LOADED_LAZY_NO_CACHE';
                                    var0.type = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var6.bind(var4)(var5);
                        return var4;
                    case 634:
                        return var3;
                    case 637:
                        return var2;
                    case 640:
                        return var1;
                    case 643:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: resumeFluxAndSocket, environment: var4
        _fun39844: for (var _fun39844_ip = 0;;) switch (_fun39844_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot10;
                var0 = var3.getSocket;
                var0 = var0.bind(var3)();
                var _closure2_slot1 = var0;
                var0 = false;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 26;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var5 = var3.Emitter;
                var4 = var5.batched;
                var3 = function() { // Environment: var2
                    _fun39845: for (var _fun39845_ip = 0;;) switch (_fun39845_ip) {
                        case 0: // try_start_0
                            var1 = _closure2_slot0;
                            var3 = undefined;
                            var1 = var1.bind(var3)();
                            var1 = _closure2_slot1;
                            var2 = var1.dispatcher;
                            var1 = var2.hasStuffToDispatchNow;
                            var2 = var1.bind(var2)();
                            if (var2) {
                                _fun39845_ip = 86;
                                continue _fun39845
                            }
                        case 41:
                            var5 = _closure1_slot18;
                            var4 = var5.verbose;
                            var2 = 'Unpausing Dispatch Queue';
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot1;
                            var4 = var2.dispatcher;
                            var2 = var4.unpauseDispatchQueue;
                            var2 = var2.bind(var4)();
                        case 82: // try_end0
                            var2 = undefined;
                            return var2;
                        case 86: // try_start_1
                            var2 = true;
                            _closure2_slot2 = var2;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 17;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var4 = var2.loadLazyCache;
                            var2 = var4.recordEnd;
                            var2 = var2.bind(var4)();
                            var4 = _closure1_slot18;
                            var2 = var4.verbose;
                            var1 = 'Processing First Queued Dispatch';
                            var1 = var2.bind(var4)(var1);
                            var0 = _closure2_slot1;
                            var4 = var0.dispatcher;
                            var2 = var4.processFirstQueuedDispatch;
                            var0 = global;
                            var6 = var0.Set;
                            var1 = var6.prototype;
                            var5 = Object.create(var1, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var8 = ['READY', 'INITIAL_GUILD'];
                            var9 = var5;
                            var1 = new var9[var6](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var2.bind(var4)(var1);
                            var2 = var0.setTimeout;
                            var1 = function() { // Environment: var0
                                var2 = _closure1_slot18;
                                var1 = var2.verbose;
                                var0 = 'Unpausing Dispatch Queue';
                                var0 = var1.bind(var2)(var0);
                                var0 = _closure2_slot1;
                                var1 = var0.dispatcher;
                                var0 = var1.unpauseDispatchQueue;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var0 = 100;
                            var0 = var2.bind(var3)(var1, var0);
                        case 230: // try_end1
                            _fun39845_ip = 321;
                            continue _fun39845;
                        case 232: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 4);
                            var3 = _closure1_slot18;
                            var2 = var3.warn;
                            var1 = 'Lazy cache has encountered error';
                            var1 = var2.bind(var3)(var1, var4);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'RESET_SOCKET';
                            var0.type = var3;
                            var3 = {};
                            var3.error = var4;
                            var4 = 'LazyCache';
                            var3.action = var4;
                            var0.args = var3;
                            var0 = var1.bind(var2)(var0);
                        case 321:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot2;
                if (var2) {
                    _fun39844_ip = 123;
                    continue _fun39844
                }
            case 87:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.loadLazyCache;
                var1 = var2.recordEnd;
                var1 = var1.bind(var2)();
            case 123:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var3);
    var10 = 0;
    var3 = var6[var10];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot14 = var8;
    var8 = var3.CACHE_STORE_KEY;
    var _closure1_slot15 = var8;
    var8 = var3.CACHE_STORE_LAZY_KEY;
    var _closure1_slot16 = var8;
    var3 = var3.CACHE_STORE_CHANNELS_LAZY_KEY;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var6[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var11 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var3 = 'CacheStore';
    var15 = var11;
    var14 = var3;
    var8 = new var15[var8](var14, var13);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot18 = var8;
    var8 = false;
    var _closure1_slot19 = var8;
    var11 = 'initializing';
    var _closure1_slot20 = var11;
    var _closure1_slot21 = var10;
    var _closure1_slot22 = var8;
    var _closure1_slot23 = var8;
    var _closure1_slot24 = var8;
    var _closure1_slot25 = var8;
    var8 = 26;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var10 = var8.Store;
    var8 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: CacheStoreClass, environment: var5
            _fun39848: for (var _fun39848_ip = 0;;) switch (_fun39848_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot1;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39848_ip = 69;
                        continue _fun39848
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39848_ip = 105;
                    continue _fun39848;
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
        var _closure2_slot1 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var5 = this;
            var4 = var5.waitFor;
            var9 = _closure1_slot11;
            var8 = _closure1_slot10;
            var7 = _closure1_slot12;
            var6 = _closure1_slot13;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var7 = 'hasCache';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'getLazyCacheStatus';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'lastWriteTime';
        var4.key = var7;
        var7 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.get = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'canWriteCaches';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun39853: for (var _fun39853_ip = 0;;) switch (_fun39853_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 37;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun39853_ip = 62;
                        continue _fun39853
                    }
                case 38:
                    var3 = _closure1_slot18;
                    var1 = var3.log;
                    var0 = 'Not writing cache because not authenticated';
                    var0 = var1.bind(var3)(var0);
                    var0 = false;
                    _fun39853_ip = 140;
                    continue _fun39853;
                case 62:
                    var1 = _closure1_slot19;
                    if (var1) {
                        _fun39853_ip = 115;
                        continue _fun39853
                    }
                case 69:
                    var1 = arg0;
                    var3 = !var1;
                    if (!var3) {
                        _fun39853_ip = 85;
                        continue _fun39853
                    }
                case 78:
                    var1 = _closure1_slot24;
                    var3 = !var1;
                case 85:
                    var1 = !var3;
                    if (!var3) {
                        _fun39853_ip = 113;
                        continue _fun39853
                    }
                case 91:
                    var5 = _closure1_slot18;
                    var4 = var5.log;
                    var3 = 'Not writing cache because never connected';
                    var3 = var4.bind(var5)(var3);
                    var1 = false;
                case 113:
                    _fun39853_ip = 137;
                    continue _fun39853;
                case 115:
                    var4 = _closure1_slot18;
                    var3 = var4.log;
                    var2 = 'Not writing cache because caches cleared';
                    var2 = var3.bind(var4)(var2);
                    var1 = false;
                case 137:
                    var0 = var1;
                case 140:
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'loadCacheAsync';
        var4.key = var7;
        var7 = _closure1_slot9;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun39855: for (var _fun39855_ip = 0;;) switch (_fun39855_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39855_ip = 488;
                            continue _fun39855
                        }
                    case 12:
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var4 = undefined;
                        var2 = undefined;
                        var8 = undefined;
                        var _closure4_slot1 = var4;
                        var9 = undefined;
                        var _closure4_slot2 = var4;
                        var7 = undefined;
                        var6 = undefined;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 38;
                        var5 = var11[var5];
                        var11 = var10.bind(var4)(var5);
                        var10 = var11.callOnce;
                        var5 = arg1;
                        var2 = var10.bind(var11)(var5);
                        var10 = _closure1_slot20;
                        var5 = 'initializing';
                        if (!(var5 === var10)) {
                            _fun39855_ip = 427;
                            continue _fun39855
                        }
                    case 93: // try_start_0
                        var10 = _closure1_slot11;
                        var5 = var10.getId;
                        var13 = var5.bind(var10)();
                        var8 = var13;
                        _closure4_slot1 = var13;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 39;
                        var5 = var11[var5];
                        var12 = var10.bind(var4)(var5);
                        var5 = var12.carefullyOpenDatabase;
                        var5 = var5.bind(var12)(var13);
                        var9 = var5;
                        _closure4_slot2 = var5;
                        var5 = 17;
                        var5 = var11[var5];
                        var5 = var10.bind(var4)(var5);
                        var11 = var5.loadMiniCache;
                        var10 = var11.measureAsync;
                        var5 = function() { // Environment: var1
                            var4 = _closure4_slot2;
                            var3 = _closure4_slot1;
                            var2 = _closure4_slot0;
                            var1 = function() { // Original name: loadEarlyCache, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot28;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var4, var3, var2);
                            return var0;
                        };
                        var5 = var10.bind(var11)(var5);
                        SaveGenerator(address = 190);
                    case 188:
                        return var5;
                    case 190:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 10);
                        if (var10) {
                            _fun39855_ip = 302;
                            continue _fun39855
                        }
                    case 196:
                        var11 = _closure1_slot3;
                        var10 = 3;
                        var12 = var11.bind(var4)(var5, var10);
                        var10 = 0;
                        var10 = var12[var10];
                        var11 = 1;
                        var7 = var12[var11];
                        var11 = 2;
                        var6 = var12[var11];
                        var11 = var2;
                        var11 = var11.bind(var4)();
                        if (var10) {
                            _fun39855_ip = 261;
                            continue _fun39855
                        }
                    case 239:
                        var10 = function() { // Original name: dontLoadLateLazyCache, environment: var1
                            var2 = _closure1_slot32;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 27;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.dispatch;
                                var0 = {};
                                var3 = 'CACHE_LOADED_LAZY_NO_CACHE';
                                var0.type = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                            var0 = global;
                            var1 = var0.Promise;
                            var0 = var1.resolve;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var10 = var10.bind(var4)();
                        SaveGenerator(address = 252);
                    case 250:
                        return var10;
                    case 252:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (!var11) {
                            _fun39855_ip = 294;
                            continue _fun39855
                        }
                    case 258: // try_end0
                        return var10;
                    case 261: // try_start_1
                        var17 = var9;
                        var16 = var8;
                        var15 = var7;
                        var14 = var6;
                        var6 = function() { // Original name: loadLateLazyCache, environment: var1
                            var0 = undefined;
                            var3 = _closure1_slot31;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var18 = undefined;
                        var6 = var18[var6](var17, var16, var15, var14, var13);
                        SaveGenerator(address = 288);
                    case 286:
                        return var6;
                    case 288:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39855_ip = 299;
                            continue _fun39855
                        }
                    case 294: // try_end1
                        _fun39855_ip = 424;
                        continue _fun39855;
                    case 299:
                        return var6;
                    case 302:
                        return var5;
                    case 305: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 9);
                        var8 = _closure1_slot18;
                        var7 = var8.error;
                        var6 = var9.stack;
                        var5 = 'clearing cache. exception encountered while loading cache.';
                        var5 = var7.bind(var8)(var5, var9, var6);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 28;
                        var5 = var7[var5];
                        var8 = var6.bind(var4)(var5);
                        var5 = 'cache:exception';
                        var5 = var8.bind(var4)(var5);
                        var5 = var2;
                        var5 = var5.bind(var4)();
                        var5 = 27;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'RESET_SOCKET';
                        var5.type = var8;
                        var8 = {};
                        var8.error = var9;
                        var9 = 'loadCacheAsync';
                        var8.action = var9;
                        var5.args = var8;
                        var5 = var6.bind(var7)(var5);
                    case 424:
                        return var4;
                    case 427:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 28;
                        var3 = var6[var3];
                        var5 = var5.bind(var4)(var3);
                        var3 = 'cache:lazy_cache_not_initializing';
                        var3 = var5.bind(var4)(var3);
                        var2 = var2.bind(var4)();
                        var2 = global;
                        var3 = var2.setTimeout;
                        var2 = function() { // Environment: var1
                            _fun39856: for (var _fun39856_ip = 0;;) switch (_fun39856_ip) {
                                case 0:
                                    var1 = _closure1_slot10;
                                    var0 = var1.getSocket;
                                    var2 = var0.bind(var1)();
                                    var1 = null;
                                    var4 = var1 == var2;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun39856_ip = 53;
                                        continue _fun39856
                                    }
                                case 28:
                                    var2 = var2.dispatcher;
                                    var1 = var1 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun39856_ip = 53;
                                        continue _fun39856
                                    }
                                case 43:
                                    var1 = var2.unpauseDispatchQueue;
                                    var0 = var1.bind(var2)();
                                case 53:
                                    return var0;
                            }
                        };
                        var1 = 0;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    case 488:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: loadCacheAsync, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var10);
    var8.displayName = var3;
    var3 = 27;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function() { // Original name: handleConnectionOpen, environment: var4
        var0 = true;
        _closure1_slot23 = var0;
        _closure1_slot24 = var0;
        var0 = false;
        return var0;
    };
    var3.CONNECTION_OPEN = var10;
    var3.LOGOUT = var9;
    var10 = function() { // Original name: handleConnectionClose, environment: var4
        var0 = false;
        _closure1_slot23 = var0;
        var1 = true;
        _closure1_slot24 = var1;
        return var0;
    };
    var3.CONNECTION_CLOSED = var10;
    var10 = function() { // Original name: handleCacheLoaded, environment: var4
        var0 = true;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CACHE_LOADED = var10;
    var10 = function() { // Original name: handleCacheLoadedLazy, environment: var4
        var0 = true;
        _closure1_slot22 = var0;
        var0 = 'cache-loaded';
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CACHE_LOADED_LAZY = var10;
    var10 = function() { // Original name: handleCacheLoadedLazyNoCache, environment: var4
        var0 = 'no-cache';
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CACHE_LOADED_LAZY_NO_CACHE = var10;
    var3.CLEAR_CACHES = var9;
    var4 = function() { // Original name: saveCaches, environment: var4
        var3 = _closure1_slot18;
        var2 = var3.verbose;
        var0 = 'Writing cache now';
        var0 = var2.bind(var3)(var0);
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot21 = var0;
        var0 = true;
        _closure1_slot22 = var0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 13;
        var5 = var4[var2];
        var0 = undefined;
        var5 = var3.bind(var0)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = _closure1_slot15;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var5 = var3.bind(var0)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = _closure1_slot17;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var1 = _closure1_slot16;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.WRITE_CACHES = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/cache/CacheStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ENABLE_CACHE_STORE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 5, 3433, 1216, 1661, 3172, 660, 3, 587, 1658, 4323, 4337, 14, 20, 1657, 4338, 4339, 4340, 4341, 4342, 12197, 566, 806, 12210, 1656, 12203, 12209, 12207, 12201, 3879, 12211, 12212, 3162, 12213, 1653, 2]);