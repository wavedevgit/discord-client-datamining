// modules/app_database/DatabaseDaos.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun18384: for (var _fun18384_ip = 0;;) switch (_fun18384_ip) {
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
                _fun18384_ip = 74;
                continue _fun18384;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: makeDao, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun18388: for (var _fun18388_ip = 0;;) switch (_fun18388_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun18388_ip = 59;
                        continue _fun18388
                    }
                case 9:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.database;
                    var5 = _closure1_slot8;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var3 = var2.bind(var4)(var1);
                case 59:
                    var1 = var0 == var3;
                    var0 = null;
                    if (var1) {
                        _fun18388_ip = 82;
                        continue _fun18388
                    }
                case 68:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 82:
                    return var0;
            }
        };
        return var0;
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
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var7 = 6;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.TableId;
    var1 = var1.KvCache;
    var8 = new Array(2);
    var8[0] = var1;
    var1 = 'guild_basic_channels';
    var8[1] = var1;
    var1 = new Array(2);
    var1[0] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.TableId;
    var8 = var7.KvCache;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = 'basic_channels_stale';
    var7[1] = var8;
    var1[1] = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Store;
    var3 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: DatabaseDaos, environment: var0
            _fun18390: for (var _fun18390_ip = 0;;) switch (_fun18390_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun18390_ip = 86;
                        continue _fun18390
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun18390_ip = 120;
                    continue _fun18390;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = function(arg0) { // Environment: var1
                        _fun18391: for (var _fun18391_ip = 0;;) switch (_fun18391_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var0 = var1.database;
                                var4 = null;
                                if (!(var4 == var2)) {
                                    _fun18391_ip = 54;
                                    continue _fun18391
                                }
                            case 40:
                                var4 = _closure1_slot8;
                                var3 = var4.getId;
                                var2 = var3.bind(var4)();
                            case 54:
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var0.database = var3;
                    var3 = _closure1_slot10;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.GuildEntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guild_channels';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.channels = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.GuildDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guild_channels_temp';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.channelsTemp = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'basic_channels';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.basicChannels = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'basic_channels_synced';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.syncedBasicChannels = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'cache';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.cache = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'force_resync_version';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.forceResyncVersion = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.GuildEntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guild_emojis';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.emojis = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guilds';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.guilds = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guilds_requiring_deleted_ids_sync';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.guildsRequiringDeletedIdsSync = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guilds_requiring_channel_sync';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.guildsRequiringChannelSync = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.MessageDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.Messages;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'messages';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.messages = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.GuildEntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guild_stickers';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.stickers = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'guild_versions';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.guildVersions = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'non_guild_versions';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.nonGuildVersions = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'user_settings';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.userSettings = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'read_states';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.readStates = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.Dao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'user_guild_settings';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.userGuildSettings = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var4 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var4);
                        var4 = var4.EntityDao;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.TableId;
                        var6 = var0.KvCache;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'user_search_items';
                        var5 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.userSearchItems = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.channels;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.channelsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.channelsTemp;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.channelsTempTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.basicChannels;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.basicChannelsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.syncedBasicChannels;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.syncedBasicChannelsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.cache;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.cacheTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.forceResyncVersion;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.forceResyncVersionTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.emojis;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.emojisTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.guilds;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.guildsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.messages;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.messagesTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.stickers;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.stickersTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.guildVersions;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.guildVersionsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.nonGuildVersions;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.nonGuildVersionsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.userSettings;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.userSettingsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.readStates;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.readStatesTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.userGuildSettings;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.userGuildSettingsTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.guildsRequiringDeletedIdsSync;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.guildsRequiringDeletedIdsSyncTransaction = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.guildsRequiringChannelSync;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.guildsRequiringChannelSyncTransaction = var2;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.userSearchItems;
                        var0 = var2.database;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.upgradeTransaction;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var0.userSearchItemsTransaction = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'initialize';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 9;
    var3 = var6[var3];
    var11 = var4.bind(var0)(var3);
    var3 = var8.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var10 = {};
    var12 = var4;
    var3 = new var12[var8](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/DatabaseDaos.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DEPRECATED_KEYSPACES = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1638, 1653, 566, 806, 2]);