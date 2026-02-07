// modules/gateway/EntityVersionsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun113528: for (var _fun113528_ip = 0;;) switch (_fun113528_ip) {
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
                _fun113528_ip = 76;
                continue _fun113528;
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
    var0 = function arg0() {
        _fun113531: for (var _fun113531_ip = 0;;) switch (_fun113531_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot11;
                var4 = var5.getGuild;
                var0 = var3.guild_id;
                var4 = var4.bind(var5)(var0);
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var10 = undefined;
                if (var5) {
                    _fun113531_ip = 49;
                    continue _fun113531
                }
            case 44:
                var10 = var4.name;
            case 49:
                var5 = _closure1_slot13;
                var4 = var5.fileOnly;
                var14 = var3.guild_id;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var15 = 'received deleted guild entities (id: ';
                var13 = ', name: ';
                var11 = ')';
                var12 = var10;
                var3 = var15[var8](var14, var13, var12, var11, var10);
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.Emitter;
                var2 = var3.batched;
                var1 = function() { // Environment: var1
                    _fun113532: for (var _fun113532_ip = 0;;) switch (_fun113532_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var2 = var2.channels;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun113532_ip = 79;
                                continue _fun113532
                            }
                        case 21:
                            var2 = _closure2_slot0;
                            var6 = var2.guild_id;
                            var4 = global;
                            var5 = var4.Set;
                            var8 = var2.channels;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var9 = var4;
                            var2 = new var9[var5](var8, var7);
                            var5 = var2 instanceof Object ? var2 : var4;
                            var4 = function arg0, arg1() {
                                var8 = arg0;
                                var2 = arg1;
                                var _closure4_slot0 = var8;
                                var _closure4_slot1 = var2;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 17;
                                var3 = var3[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var3);
                                var5 = var6.keys;
                                var7 = _closure1_slot9;
                                var3 = var7.getMutableBasicGuildChannelsForGuild;
                                var3 = var3.bind(var7)(var8);
                                var3 = var5.bind(var6)(var3);
                                var6 = _closure1_slot13;
                                var5 = var6.fileOnly;
                                var4 = {};
                                var4.channelIdsInMemory = var3;
                                var4.channelIdsFromServer = var2;
                                var2 = 'syncChannels';
                                var2 = var5.bind(var6)(var2, var4);
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun113534: for (var _fun113534_ip = 0;;) switch (_fun113534_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var1 = _closure4_slot1;
                                            var0 = var1.has;
                                            var0 = var0.bind(var1)(var5);
                                            if (var0) {
                                                _fun113534_ip = 91;
                                                continue _fun113534
                                            }
                                        case 23:
                                            var1 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var0 = 12;
                                            var0 = var2[var0];
                                            var4 = undefined;
                                            var2 = var1.bind(var4)(var0);
                                            var1 = var2.dispatch;
                                            var0 = {};
                                            var3 = 'CHANNEL_DELETE';
                                            var0.type = var3;
                                            var3 = {};
                                            var6 = _closure4_slot0;
                                            var3.guild_id = var6;
                                            var3.id = var5;
                                            var3.parent_id = var4;
                                            var0.channel = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 91:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = undefined;
                            var2 = var4.bind(var2)(var6, var5);
                        case 79:
                            var2 = _closure2_slot0;
                            var2 = var2.roles;
                            if (!(var3 != var2)) {
                                _fun113532_ip = 151;
                                continue _fun113532
                            }
                        case 93:
                            var2 = _closure2_slot0;
                            var6 = var2.guild_id;
                            var4 = global;
                            var5 = var4.Set;
                            var8 = var2.roles;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var9 = var4;
                            var2 = new var9[var5](var8, var7);
                            var5 = var2 instanceof Object ? var2 : var4;
                            var4 = function arg0, arg1() {
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 17;
                                var3 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.keys;
                                var5 = _closure1_slot10;
                                var2 = var5.getUnsafeMutableRoles;
                                var2 = var2.bind(var5)(var6);
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun113536: for (var _fun113536_ip = 0;;) switch (_fun113536_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = _closure4_slot1;
                                            var0 = var1.has;
                                            var0 = var0.bind(var1)(var3);
                                            if (var0) {
                                                _fun113536_ip = 81;
                                                continue _fun113536
                                            }
                                        case 23:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var0 = 12;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.dispatch;
                                            var0 = {};
                                            var5 = 'GUILD_ROLE_DELETE';
                                            var0.type = var5;
                                            var4 = _closure4_slot0;
                                            var0.guildId = var4;
                                            var0.roleId = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 81:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = undefined;
                            var2 = var4.bind(var2)(var6, var5);
                        case 151:
                            var2 = _closure2_slot0;
                            var2 = var2.emojis;
                            if (!(var3 != var2)) {
                                _fun113532_ip = 223;
                                continue _fun113532
                            }
                        case 165:
                            var2 = _closure2_slot0;
                            var6 = var2.guild_id;
                            var4 = global;
                            var5 = var4.Set;
                            var8 = var2.emojis;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var9 = var4;
                            var2 = new var9[var5](var8, var7);
                            var5 = var2 instanceof Object ? var2 : var4;
                            var4 = function arg0, arg1() {
                                _fun113537: for (var _fun113537_ip = 0;;) switch (_fun113537_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = arg1;
                                        var _closure4_slot0 = var0;
                                        var3 = _closure1_slot7;
                                        var1 = var3.getGuildEmoji;
                                        var1 = var1.bind(var3)(var4);
                                        var3 = var1.filter;
                                        var2 = function(arg0) { // Environment: var2
                                            var2 = _closure4_slot0;
                                            var1 = var2.has;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var1.length;
                                        var1 = var3.length;
                                        if (!(var2 !== var1)) {
                                            _fun113537_ip = 112;
                                            continue _fun113537
                                        }
                                    case 61:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 12;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.dispatch;
                                        var0 = {};
                                        var5 = 'GUILD_EMOJIS_UPDATE';
                                        var0.type = var5;
                                        var0.guildId = var4;
                                        var0.emojis = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 112:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = undefined;
                            var2 = var4.bind(var2)(var6, var5);
                        case 223:
                            var2 = _closure2_slot0;
                            var2 = var2.stickers;
                            if (!(var3 != var2)) {
                                _fun113532_ip = 295;
                                continue _fun113532
                            }
                        case 237:
                            var1 = _closure2_slot0;
                            var3 = var1.guild_id;
                            var2 = global;
                            var4 = var2.Set;
                            var8 = var1.stickers;
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var9 = var2;
                            var1 = new var9[var4](var8, var7);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = function arg0, arg1() {
                                _fun113539: for (var _fun113539_ip = 0;;) switch (_fun113539_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = arg1;
                                        var _closure4_slot0 = var0;
                                        var3 = _closure1_slot8;
                                        var1 = var3.getStickersByGuildId;
                                        var1 = var1.bind(var3)(var4);
                                        var3 = null;
                                        if (!(var3 == var1)) {
                                            _fun113539_ip = 40;
                                            continue _fun113539
                                        }
                                    case 36:
                                        var1 = new Array(0);
                                    case 40:
                                        var3 = var1.filter;
                                        var2 = function(arg0) { // Environment: var2
                                            var2 = _closure4_slot0;
                                            var1 = var2.has;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var1.length;
                                        var1 = var3.length;
                                        if (!(var2 !== var1)) {
                                            _fun113539_ip = 122;
                                            continue _fun113539
                                        }
                                    case 71:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 12;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.dispatch;
                                        var0 = {};
                                        var5 = 'GUILD_STICKERS_UPDATE';
                                        var0.type = var5;
                                        var0.guildId = var4;
                                        var0.stickers = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 122:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3, var2);
                        case 295:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getAll;
        var3 = var1.bind(var2)();
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot18;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun113544: for (var _fun113544_ip = 0;;) switch (_fun113544_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var1 = var0.unableToSyncDeletes;
                if (!var1) {
                    _fun113544_ip = 36;
                    continue _fun113544
                }
            case 17:
                var2 = _closure1_slot18;
                var1 = var0.id;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var4 = var0.Math;
        var3 = var4.ceil;
        var5 = var0.Math;
        var2 = var5.random;
        var5 = var2.bind(var5)();
        var2 = 2000;
        var2 = var2 * var5;
        var3 = var3.bind(var4)(var2);
        var2 = var0.setTimeout;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = function arg0() {
                _fun113547: for (var _fun113547_ip = 0;;) switch (_fun113547_ip) {
                    case 0:
                        var7 = arg0;
                        var2 = _closure1_slot11;
                        var0 = var2.getGuild;
                        var2 = var0.bind(var2)(var7);
                        var8 = null;
                        var3 = var8 == var2;
                        var0 = undefined;
                        var12 = undefined;
                        if (var3) {
                            _fun113547_ip = 40;
                            continue _fun113547
                        }
                    case 35:
                        var12 = var2.name;
                    case 40:
                        var5 = _closure1_slot13;
                        var4 = var5.fileOnly;
                        var2 = global;
                        var3 = var2.HermesInternal;
                        var11 = var3.concat;
                        var18 = 'requesting deleted guild entities (id: ';
                        var16 = ', name: ';
                        var14 = ')';
                        var17 = var7;
                        var15 = var12;
                        var3 = var18[var11](var17, var16, var15, var14, var13);
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure1_slot19;
                        var5 = var2.Object;
                        var4 = var5.keys;
                        var6 = _closure1_slot9;
                        var2 = var6.getMutableBasicGuildChannelsForGuild;
                        var2 = var2.bind(var6)(var7);
                        var2 = var4.bind(var5)(var2);
                        var6 = var3.bind(var0)(var2);
                        var4 = _closure1_slot10;
                        var2 = var4.getSortedRoles;
                        var5 = var2.bind(var4)(var7);
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var9
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var5 = var3.bind(var0)(var2);
                        var4 = _closure1_slot7;
                        var2 = var4.getGuildEmoji;
                        var10 = var2.bind(var4)(var7);
                        var4 = var10.map;
                        var2 = function(arg0) { // Environment: var9
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var2 = var4.bind(var10)(var2);
                        var4 = var3.bind(var0)(var2);
                        var10 = _closure1_slot8;
                        var2 = var10.getStickersByGuildId;
                        var11 = var2.bind(var10)(var7);
                        var10 = var8 == var11;
                        var2 = undefined;
                        if (var10) {
                            _fun113547_ip = 249;
                            continue _fun113547
                        }
                    case 232:
                        var10 = var11.map;
                        var9 = function(arg0) { // Environment: var9
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var2 = var10.bind(var11)(var9);
                    case 249:
                        if (!(var8 == var2)) {
                            _fun113547_ip = 257;
                            continue _fun113547
                        }
                    case 253:
                        var2 = new Array(0);
                    case 257:
                        var13 = var3.bind(var0)(var2);
                        var2 = _closure1_slot12;
                        var1 = var2.getSocket;
                        var2 = var1.bind(var2)();
                        var1 = var2.getDeletedEntityIdsNotMatchingHash;
                        var18 = var2;
                        var17 = var7;
                        var16 = var6;
                        var15 = var5;
                        var14 = var4;
                        var1 = var18[var1](var17, var16, var15, var14, var13, var12);
                        return var0;
                }
            };
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.v3;
        var0 = var3.sort;
        var4 = var0.bind(var3)();
        var3 = var4.join;
        var0 = ',';
        var0 = var3.bind(var4)(var0);
        var1 = var1.bind(var2)(var0);
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var4[var3];
    var7 = var5.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var10 = 'EntityVersionsManager';
    var11 = var6;
    var3 = new var11[var7](var10, var9);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot13 = var3;
    var3 = 13;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113553: for (var _fun113553_ip = 0;;) switch (_fun113553_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113553_ip = 84;
                        continue _fun113553
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113553_ip = 118;
                    continue _fun113553;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot17;
                    var1.GUILD_CREATE = var3;
                    var2 = _closure1_slot15;
                    var1.DELETED_ENTITY_IDS = var2;
                    var0.actions = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 12;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = _closure1_slot16;
            var1 = 'CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 12;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = _closure1_slot16;
            var1 = 'CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
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
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/EntityVersionsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4739, 5645, 1372, 1676, 1410, 3475, 3, 806, 4299, 566, 12276, 1215, 21, 2]);