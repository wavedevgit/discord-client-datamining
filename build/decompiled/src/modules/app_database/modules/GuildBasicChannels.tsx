// modules/app_database/modules/GuildBasicChannels.tsx
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
    var0 = function arg0, arg1() {
        _fun93164: for (var _fun93164_ip = 0;;) switch (_fun93164_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93164_ip = 46;
                    continue _fun93164
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93164_ip = 55;
                    continue _fun93164
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93164_ip = 345;
                    continue _fun93164
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93164_ip = 323;
                    continue _fun93164
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93164_ip = 283;
                    continue _fun93164
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93164_ip = 270;
                    continue _fun93164
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun93164_ip = 163;
                    continue _fun93164
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93164_ip = 179;
                    continue _fun93164
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93164_ip = 249;
                    continue _fun93164
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93164_ip = 249;
                    continue _fun93164
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93164_ip = 234;
                    continue _fun93164
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93164_ip = 247;
                    continue _fun93164
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93164_ip = 265;
                continue _fun93164;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93164_ip = 283;
                continue _fun93164;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93164_ip = 323;
                    continue _fun93164
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun93164_ip = 330;
                    continue _fun93164
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93165: for (var _fun93165_ip = 0;;) switch (_fun93165_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93165_ip = 56;
                                continue _fun93165
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun93165_ip = 67;
                            continue _fun93165;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun93166: for (var _fun93166_ip = 0;;) switch (_fun93166_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93166_ip = 23;
                    continue _fun93166
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93166_ip = 33;
                    continue _fun93166
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun93166_ip = 70;
                    continue _fun93166
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93166_ip = 55;
                    continue _fun93166
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun93167: for (var _fun93167_ip = 0;;) switch (_fun93167_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                var0 = var0 == var5;
                if (var0) {
                    _fun93167_ip = 29;
                    continue _fun93167
                }
            case 15:
                var2 = var5.type;
                var1 = var4.type;
                var0 = var2 !== var1;
            case 29:
                if (var0) {
                    _fun93167_ip = 48;
                    continue _fun93167
                }
            case 32:
                var2 = var5.parent_id;
                var1 = var4.parent_id;
                var0 = var2 !== var1;
            case 48:
                if (var0) {
                    _fun93167_ip = 88;
                    continue _fun93167
                }
            case 51:
                var3 = _closure1_slot15;
                var2 = var3.computeBasicPermissions;
                var2 = var2.bind(var3)(var5);
                var3 = _closure1_slot15;
                var1 = var3.computeBasicPermissions;
                var1 = var1.bind(var3)(var4);
                var0 = var2 !== var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecordFromServer;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelLoader;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'GuildBasicChannels';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot17 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot6;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = null;
            var2.synced = var1;
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleBackgroundSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelUpdates;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_UPDATES = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildMemberUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_MEMBER_UPDATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_UPDATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_UPDATE = var4;
            var4 = function() {
                var1 = _closure3_slot0;
                var0 = var1.handlePostConnectionOpen;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.POST_CONNECTION_OPEN = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleWriteCaches;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.WRITE_CACHES = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'getAsync';
        var4.key = var1;
        var7 = _closure1_slot5;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93183: for (var _fun93183_ip = 0;;) switch (_fun93183_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93183_ip = 466;
                            continue _fun93183
                        }
                    case 15:
                        var11 = undefined;
                        var _closure4_slot0 = var11;
                        var2 = global;
                        var4 = var2.performance;
                        var1 = var4.now;
                        var12 = var1.bind(var4)();
                        var5 = var2.Promise;
                        var4 = var5.all;
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var7 = 13;
                        var1 = var10[var7];
                        var13 = var8.bind(var11)(var1);
                        var1 = var13.basicChannels;
                        var13 = var1.bind(var13)(var9);
                        var1 = var13.getKvEntries;
                        var13 = var1.bind(var13)();
                        var1 = new Array(2);
                        var1[0] = var13;
                        var7 = var10[var7];
                        var8 = var8.bind(var11)(var7);
                        var7 = var8.syncedBasicChannels;
                        var8 = var7.bind(var8)(var9);
                        var7 = var8.getKvEntries;
                        var7 = var7.bind(var8)();
                        var1[1] = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 145);
                    case 143:
                        return var1;
                    case 145:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun93183_ip = 463;
                            continue _fun93183
                        }
                    case 154:
                        var10 = _closure1_slot4;
                        var9 = 2;
                        var4 = var10.bind(var11)(var1, var9);
                        var8 = 0;
                        var5 = var4[var8];
                        var7 = 1;
                        var14 = var4[var7];
                        var13 = var2.performance;
                        var4 = var13.now;
                        var4 = var4.bind(var13)();
                        var16 = var4 - var12;
                        var13 = new Array(0);
                        var12 = new Array(0);
                        var4 = _closure1_slot18;
                        var15 = var4.bind(var11)(var14);
                        var14 = var15.bind(var11)();
                        var4 = var14.done;
                        if (var4) {
                            _fun93183_ip = 285;
                            continue _fun93183
                        }
                    case 228:
                        var17 = var14.value;
                        var4 = _closure1_slot4;
                        var4 = var4.bind(var11)(var17, var9);
                        var18 = var4[var8];
                        var4 = var4[var7];
                        var17 = var12;
                        if (!var4) {
                            _fun93183_ip = 260;
                            continue _fun93183
                        }
                    case 257:
                        var17 = var13;
                    case 260:
                        var4 = var17.push;
                        var4 = var4.bind(var17)(var18);
                        var17 = var15.bind(var11)();
                        var4 = var17.done;
                        var14 = var17;
                        if (!var4) {
                            _fun93183_ip = 228;
                            continue _fun93183
                        }
                    case 285:
                        var4 = new Array(2);
                        var4[0] = var13;
                        var4[1] = var12;
                        var4 = var10.bind(var11)(var4, var9);
                        var26 = var4[var8];
                        var4 = var4[var7];
                        var7 = var2.Set;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var27 = var8;
                        var7 = new var27[var7](var26, var25);
                        var8 = var7 instanceof Object ? var7 : var8;
                        _closure4_slot0 = var8;
                        var7 = this;
                        var7.synced = var8;
                        var7 = _closure1_slot17;
                        var6 = var7.verbose;
                        var24 = var5.length;
                        var22 = var8.size;
                        var20 = var4.length;
                        var2 = var2.HermesInternal;
                        var12 = var2.concat;
                        var27 = 'loaded in ';
                        var25 = 'ms (guilds: ';
                        var23 = ', synced: ';
                        var21 = ' unsynced: ';
                        var19 = ')';
                        var26 = var16;
                        var2 = var27[var12](var26, var25, var24, var23, var22, var21, var20, var19, var18);
                        var2 = var6.bind(var7)(var2);
                        var2 = {};
                        var2.all = var5;
                        var2.stale = var4;
                        var4 = var5.filter;
                        var3 = function(arg0) { // Environment: var3
                            _fun93184: for (var _fun93184_ip = 0;;) switch (_fun93184_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = var3[Symbol.iterator];
                                    var3 = var0().next;
                                    var5 = var3().value;
                                    var1 = var0;
                                    var4 = undefined;
                                    var1 = var1 === var4;
                                    var2 = undefined;
                                    if (var1) {
                                        _fun93184_ip = 27;
                                        continue _fun93184
                                    }
                                case 24:
                                    var2 = var5;
                                case 27:
                                    if (var1) {
                                        _fun93184_ip = 41;
                                        continue _fun93184
                                    }
                                case 30:
                                    var3 = var3().value;
                                    var3 = var0;
                                    var1 = var3 === var4;
                                case 41:
                                    if (var1) {
                                        _fun93184_ip = 47;
                                        continue _fun93184
                                    }
                                case 44:
                                    var0.return();
                                case 47:
                                    var1 = _closure4_slot0;
                                    var0 = var1.has;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var2.channels = var3;
                        return var2;
                    case 463:
                        return var1;
                    case 466:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var1)(var0);
        var _closure2_slot1 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleChannelCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93186: for (var _fun93186_ip = 0;;) switch (_fun93186_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.channel;
                    var2 = var1.guild_id;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun93186_ip = 47;
                        continue _fun93186
                    }
                case 22:
                    var2 = var3.unsync;
                    var0 = var0.channel;
                    var1 = var0.guild_id;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleChannelDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93187: for (var _fun93187_ip = 0;;) switch (_fun93187_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.channel;
                    var2 = var1.guild_id;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun93187_ip = 47;
                        continue _fun93187
                    }
                case 22:
                    var2 = var3.unsync;
                    var0 = var0.channel;
                    var1 = var0.guild_id;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleChannelUpdates';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93188: for (var _fun93188_ip = 0;;) switch (_fun93188_ip) {
                case 0:
                    var6 = arg1;
                    var5 = this;
                    var2 = _closure1_slot18;
                    var0 = arg0;
                    var3 = var0.channels;
                    var1 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.guild_id;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93188_ip = 130;
                        continue _fun93188
                    }
                case 60:
                    var1 = var2.value;
                    var8 = _closure1_slot20;
                    var10 = _closure1_slot11;
                    var9 = var10.getBasicChannel;
                    var7 = var1.id;
                    var7 = var9.bind(var10)(var7);
                    var7 = var8.bind(var0)(var7, var1);
                    if (!var7) {
                        _fun93188_ip = 115;
                        continue _fun93188
                    }
                case 98:
                    var7 = var5.unsync;
                    var1 = var1.guild_id;
                    var1 = var7.bind(var5)(var1, var6);
                case 115:
                    var7 = var3.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun93188_ip = 60;
                        continue _fun93188
                    }
                case 130:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleBackgroundSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93190: for (var _fun93190_ip = 0;;) switch (_fun93190_ip) {
                case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var _closure3_slot1 = var1;
                    var4 = function arg0() {
                        _fun93191: for (var _fun93191_ip = 0;;) switch (_fun93191_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = var1.data_mode;
                                var0 = 'unavailable';
                                if (!(var0 !== var2)) {
                                    _fun93191_ip = 170;
                                    continue _fun93191
                                }
                            case 26:
                                var0 = 'partial';
                                if (!(var0 !== var2)) {
                                    _fun93191_ip = 64;
                                    continue _fun93191
                                }
                            case 34:
                                var4 = _closure3_slot1;
                                var3 = var4.onGuildSync;
                                var2 = var1.id;
                                var0 = _closure3_slot0;
                                var0 = var3.bind(var4)(var2, var0);
                                _fun93191_ip = 170;
                                continue _fun93191;
                            case 64:
                                var5 = _closure3_slot1;
                                var4 = var5.onGuildUpdate;
                                var3 = var1.id;
                                var2 = var1.partial_updates;
                                var9 = var2.channels;
                                var6 = null;
                                var8 = var6 == var9;
                                var2 = undefined;
                                if (var8) {
                                    _fun93191_ip = 122;
                                    continue _fun93191
                                }
                            case 105:
                                var8 = var9.map;
                                var7 = function(arg0) { // Environment: var7
                                    var3 = _closure1_slot9;
                                    var0 = _closure4_slot0;
                                    var2 = var0.id;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var2 = var8.bind(var9)(var7);
                            case 122:
                                if (!(var6 == var2)) {
                                    _fun93191_ip = 130;
                                    continue _fun93191
                                }
                            case 126:
                                var2 = new Array(0);
                            case 130:
                                var1 = var1.partial_updates;
                                var1 = var1.deleted_channel_ids;
                                if (!(var6 == var1)) {
                                    _fun93191_ip = 150;
                                    continue _fun93191
                                }
                            case 146:
                                var1 = new Array(0);
                            case 150:
                                var10 = _closure3_slot0;
                                var14 = var5;
                                var13 = var3;
                                var12 = var2;
                                var11 = var1;
                                var0 = var14[var4](var13, var12, var11, var10, var9);
                            case 170:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = _closure1_slot18;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93190_ip = 83;
                        continue _fun93190
                    }
                case 58:
                    var1 = var2.value;
                    var1 = var4.bind(var0)(var1);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun93190_ip = 58;
                        continue _fun93190
                    }
                case 83:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93193: for (var _fun93193_ip = 0;;) switch (_fun93193_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var2 = _closure1_slot18;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93193_ip = 73;
                        continue _fun93193
                    }
                case 41:
                    var6 = var2.value;
                    var1 = var4.handleOneGuildCreate;
                    var1 = var1.bind(var4)(var6, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun93193_ip = 41;
                        continue _fun93193
                    }
                case 73:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handlePostConnectionOpen';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93195: for (var _fun93195_ip = 0;;) switch (_fun93195_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93195_ip = 592;
                            continue _fun93195
                        }
                    case 15:
                        var _closure4_slot0 = var3;
                        var1 = undefined;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var _closure4_slot1 = var3;
                        var6 = _closure1_slot8;
                        var5 = var6.lastTimeConnectedChanged;
                        var5 = var5.bind(var6)();
                        _closure4_slot2 = var5;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 13;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.database;
                        var5 = var5.bind(var6)();
                        _closure4_slot3 = var5;
                        var6 = var3.synced;
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 103:
                        if (!(var3 != var5)) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 110:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 14;
                        var3 = var6[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.isCacheEnabled;
                        var3 = var3.bind(var5)();
                        if (!var3) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 146:
                        var5 = _closure1_slot14;
                        var3 = var5.getGuildIds;
                        var3 = var3.bind(var5)();
                        var6 = var3.filter;
                        var5 = function(arg0) { // Environment: var4
                            var0 = _closure4_slot0;
                            var2 = var0.synced;
                            var1 = var2.has;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var5 = var6.bind(var3)(var5);
                        var7 = _closure1_slot17;
                        var6 = var7.verbose;
                        var10 = var5.length;
                        var13 = global;
                        var5 = var13.HermesInternal;
                        var9 = var5.concat;
                        var8 = 'scheduling basic_channel optimstic writes (guilds: ';
                        var5 = ')';
                        var5 = var9.bind(var8)(var10, var5);
                        var5 = var6.bind(var7)(var5);
                        var12 = function*(arg0) { // Original name: _loop2, environment: var4
                            var0 = function*(arg0) { // Original name: ?anon_0__loop2, environment: var0
                                _fun93198: for (var _fun93198_ip = 0;;) switch (_fun93198_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun93198_ip = 362;
                                            continue _fun93198
                                        }
                                    case 15:
                                        var3 = var1;
                                        var _closure6_slot0 = var1;
                                        var1 = _closure4_slot1;
                                        var2 = var1.synced;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun93198_ip = 357;
                                            continue _fun93198
                                        }
                                    case 44:
                                        var7 = _closure4_slot3;
                                        var8 = _closure1_slot1;
                                        var6 = _closure1_slot3;
                                        var2 = 13;
                                        var6 = var6[var2];
                                        var2 = undefined;
                                        var8 = var8.bind(var2)(var6);
                                        var6 = var8.database;
                                        var6 = var6.bind(var8)();
                                        if (!(var7 === var6)) {
                                            _fun93198_ip = 357;
                                            continue _fun93198
                                        }
                                    case 90:
                                        var7 = _closure4_slot2;
                                        var8 = _closure1_slot8;
                                        var6 = var8.lastTimeConnectedChanged;
                                        var6 = var6.bind(var8)();
                                        if (!(var7 === var6)) {
                                            _fun93198_ip = 357;
                                            continue _fun93198
                                        }
                                    case 115:
                                        var6 = _closure4_slot1;
                                        var8 = var6.synced;
                                        var7 = var8.has;
                                        var6 = var3;
                                        var6 = var7.bind(var8)(var6);
                                        if (var6) {
                                            _fun93198_ip = 351;
                                            continue _fun93198
                                        }
                                    case 144:
                                        var9 = _closure1_slot17;
                                        var8 = var9.verbose;
                                        var12 = var3;
                                        var6 = global;
                                        var7 = var6.HermesInternal;
                                        var11 = var7.concat;
                                        var10 = 'optimstically writing basic_channels (guild: ';
                                        var7 = ')';
                                        var7 = var11.bind(var10)(var12, var7);
                                        var7 = var8.bind(var9)(var7);
                                    case 191: // try_start_0
                                        var8 = _closure1_slot12;
                                        var7 = var8.loadGuildIds;
                                        var9 = var3;
                                        var3 = new Array(1);
                                        var3[0] = var9;
                                        var3 = var7.bind(var8)(var3);
                                        SaveGenerator(address = 221);
                                    case 219:
                                        return var3;
                                    case 221:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun93198_ip = 316;
                                            continue _fun93198
                                        }
                                    case 227:
                                        var9 = _closure4_slot3;
                                        var8 = var9.transaction;
                                        var7 = function(arg0) { // Environment: var5
                                            var3 = _closure4_slot1;
                                            var2 = var3.syncOne;
                                            var1 = _closure6_slot0;
                                            var0 = arg0;
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                        };
                                        var4 = 'handlePostConnectionOpen';
                                        var4 = var8.bind(var9)(var7, var4);
                                        SaveGenerator(address = 258);
                                    case 256:
                                        return var4;
                                    case 258:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun93198_ip = 313;
                                            continue _fun93198
                                        }
                                    case 264: // try_end0
                                        var7 = var6.Promise;
                                        var6 = var7.prototype;
                                        var6 = Object.create(var6, {
                                            constructor: {
                                                value: var7
                                            }
                                        });
                                        var14 = function(arg0) { // Environment: var5
                                            var0 = global;
                                            var3 = var0.setTimeout;
                                            var2 = undefined;
                                            var1 = arg0;
                                            var0 = 1000;
                                            var0 = var3.bind(var2)(var1, var0);
                                            return var0;
                                        };
                                        var15 = var6;
                                        var5 = new var15[var7](var14, var13);
                                        var5 = var5 instanceof Object ? var5 : var6;
                                        SaveGenerator(address = 301);
                                    case 299:
                                        return var5;
                                    case 301:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun93198_ip = 310;
                                            continue _fun93198
                                        }
                                    case 307:
                                        return var2;
                                    case 310:
                                        return var5;
                                    case 313:
                                        return var4;
                                    case 316:
                                        return var3;
                                    case 319: // catch_target0
                                        CatchBlockStart(arg_register = 5);
                                        var4 = _closure1_slot17;
                                        var3 = var4.warn;
                                        var1 = "couldn't optimstically write basic_channel:";
                                        var1 = var3.bind(var4)(var1, var5);
                                        var1 = {};
                                        var1.v = var2;
                                        return var1;
                                    case 351:
                                        var1 = 1;
                                        return var1;
                                    case 357:
                                        var1 = 0;
                                        return var1;
                                    case 362:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var2 = _closure1_slot18;
                        var11 = var2.bind(var1)(var3);
                        var3 = var11.bind(var1)();
                        var2 = var3.done;
                        var10 = 1;
                        var9 = 0;
                        var8 = 'iterator is not an object';
                        var7 = 'iterator.throw() did not return an object';
                        var6 = 'throw';
                        var5 = 'iterator.next() did not return an object';
                        var4 = var3;
                        if (var2) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 287:
                        var2 = var4.value;
                        var3 = var12.bind(var1)(var2);
                        var2 = var13.Symbol;
                        var2 = var2.iterator;
                        var2 = var3[var2];
                        var14 = var2.bind(var3)();
                        var22 = var14;
                        var21 = var8;
                        var2 = ensureObject(var22, var21);
                        var19 = var14.next;
                        var18 = undefined;
                    case 334:
                        var3 = var18;
                        var3 = var19.bind(var14)(var3);
                        var22 = var3;
                        var21 = var5;
                        var15 = ensureObject(var22, var21);
                        var2 = var3;
                        var15 = var3.done;
                        if (var15) {
                            _fun93195_ip = 545;
                            continue _fun93195
                        }
                    case 366: // try_start_0
                        var15 = generatorSetDelegated();
                        SaveGenerator(address = 421);
                    case 372:
                        return var3;
                    case 374: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 15);
                        var22 = var14;
                        var21 = var6;
                        var3 = getMethod(var22, var21);
                        if (!(var3 !== var1)) {
                            _fun93195_ip = 504;
                            continue _fun93195
                        }
                    case 390:
                        var3 = var3.bind(var14)(var15);
                        var22 = var3;
                        var21 = var7;
                        var15 = ensureObject(var22, var21);
                        var15 = var3.done;
                        if (var15) {
                            _fun93195_ip = 499;
                            continue _fun93195
                        }
                    case 413:
                        var15 = generatorSetDelegated();
                        SaveGenerator(address = 421);
                    case 419:
                        return var3;
                    case 421: // try_start_1
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 17);
                        var18 = var15;
                        var16 = var17;
                        if (!var16) {
                            _fun93195_ip = 334;
                            continue _fun93195
                        }
                    case 433:
                        var18 = var15;
                    case 436: // try_end1
                        var21 = 'return';
                        var22 = var14;
                        var20 = getMethod(var22, var21);
                        if (!(var20 !== var1)) {
                            _fun93195_ip = 496;
                            continue _fun93195
                        }
                    case 451:
                        var16 = var18;
                        var16 = var20.bind(var14)(var16);
                        var21 = 'iterator.return() did not return an object';
                        var22 = var16;
                        var20 = ensureObject(var22, var21);
                        var20 = var16.done;
                        if (var20) {
                            _fun93195_ip = 488;
                            continue _fun93195
                        }
                    case 480:
                        var20 = generatorSetDelegated();
                        SaveGenerator(address = 421);
                    case 486:
                        return var16;
                    case 488:
                        var16 = var16.value;
                        return var16;
                    case 496:
                        return var15;
                    case 499:
                        var2 = var3;
                        _fun93195_ip = 545;
                        continue _fun93195;
                    case 504:
                        var21 = 'return';
                        var22 = var14;
                        var3 = getMethod(var22, var21);
                        if (!(var3 !== var1)) {
                            _fun93195_ip = 533;
                            continue _fun93195
                        }
                    case 519:
                        var22 = var3.bind(var14)();
                        var21 = 'iterator.return() did not return an object';
                        var3 = ensureObject(var22, var21);
                    case 533:
                        var22 = 'yield* delegate must have a .throw() method';
                        var3 = throwTypeError(var22);
                        throw var1;
                    case 545:
                        var2 = var2.value;
                        if (!(var9 !== var2)) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 554:
                        if (!(var10 !== var2)) {
                            _fun93195_ip = 561;
                            continue _fun93195
                        }
                    case 558:
                        if (var2) {
                            _fun93195_ip = 581;
                            continue _fun93195
                        }
                    case 561:
                        var14 = var11.bind(var1)();
                        var3 = var14.done;
                        var4 = var14;
                        if (var3) {
                            _fun93195_ip = 589;
                            continue _fun93195
                        }
                    case 576:
                        _fun93195_ip = 287;
                        continue _fun93195;
                    case 581:
                        var2 = var2.v;
                        return var2;
                    case 589:
                        return var1;
                    case 592:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.handleOneGuildCreate;
            var0 = arg0;
            var1 = var0.guild;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleOneGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93203: for (var _fun93203_ip = 0;;) switch (_fun93203_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var1 = var0.id;
                    var0 = var0.channels;
                    var5 = var0.op;
                    var4 = 'full_sync';
                    if (!(var4 !== var5)) {
                        _fun93203_ip = 76;
                        continue _fun93203
                    }
                case 35:
                    var4 = 'update';
                    if (!(var4 === var5)) {
                        _fun93203_ip = 88;
                        continue _fun93203
                    }
                case 43:
                    var5 = var2.onGuildUpdate;
                    var8 = var0.writes;
                    var7 = var0.deletes;
                    var10 = var2;
                    var9 = var1;
                    var6 = var3;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    _fun93203_ip = 88;
                    continue _fun93203;
                case 76:
                    var0 = var2.onGuildSync;
                    var0 = var0.bind(var2)(var1, var3);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleGuildUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.unsync;
            var0 = arg0;
            var0 = var0.guild;
            var1 = var0.id;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93205: for (var _fun93205_ip = 0;;) switch (_fun93205_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.guild;
                    var2 = var1.unavailable;
                    var1 = true;
                    if (!(var1 !== var2)) {
                        _fun93205_ip = 47;
                        continue _fun93205
                    }
                case 23:
                    var2 = var3.delete;
                    var0 = var0.guild;
                    var1 = var0.id;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleGuildRoleUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93206: for (var _fun93206_ip = 0;;) switch (_fun93206_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = var0.role;
                    var7 = _closure1_slot13;
                    var6 = var7.getRole;
                    var2 = var0.guildId;
                    var1 = var4.id;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun93206_ip = 116;
                        continue _fun93206
                    }
                case 50:
                    var9 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var7 = 15;
                    var5 = var10[var7];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var5);
                    var5 = var6.equals;
                    var7 = var10[var7];
                    var8 = var9.bind(var8)(var7);
                    var7 = var8.deserialize;
                    var4 = var4.permissions;
                    var4 = var7.bind(var8)(var4);
                    var2 = var2.permissions;
                    var1 = var5.bind(var6)(var4, var2);
                case 116:
                    if (var1) {
                        _fun93206_ip = 139;
                        continue _fun93206
                    }
                case 119:
                    var2 = var3.unsync;
                    var1 = var0.guildId;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 139:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'handleGuildMemberUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93207: for (var _fun93207_ip = 0;;) switch (_fun93207_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.user;
                    var2 = var1.id;
                    var4 = _closure1_slot10;
                    var1 = var4.getId;
                    var1 = var1.bind(var4)();
                    if (!(var2 === var1)) {
                        _fun93207_ip = 57;
                        continue _fun93207
                    }
                case 37:
                    var2 = var3.unsync;
                    var1 = var0.guildId;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleWriteCaches';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var1 = var2.sync;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var1 = null;
            var0 = this;
            var0.synced = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'onGuildUpdate';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun93210: for (var _fun93210_ip = 0;;) switch (_fun93210_ip) {
                case 0:
                    var4 = arg1;
                    var3 = this;
                    var0 = arg2;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    if (var0) {
                        _fun93210_ip = 43;
                        continue _fun93210
                    }
                case 23:
                    var2 = var4.some;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = _closure1_slot20;
                        var4 = _closure1_slot11;
                        var1 = var4.getBasicChannel;
                        var0 = var3.id;
                        var1 = var1.bind(var4)(var0);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1, var3);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1);
                case 43:
                    if (!var0) {
                        _fun93210_ip = 64;
                        continue _fun93210
                    }
                case 46:
                    var2 = var3.unsync;
                    var1 = arg0;
                    var0 = arg3;
                    var0 = var2.bind(var3)(var1, var0);
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'onGuildSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.unsync;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'delete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = arg0;
            var4 = arg1;
            var1 = this;
            var0 = var1.unsync;
            var0 = var0.bind(var1)(var3, var4);
            var2 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 13;
            var6 = var5[var1];
            var0 = undefined;
            var7 = var2.bind(var0)(var6);
            var6 = var7.basicChannelsTransaction;
            var7 = var6.bind(var7)(var4);
            var6 = var7.delete;
            var6 = var6.bind(var7)(var3);
            var1 = var5[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.syncedBasicChannelsTransaction;
            var2 = var1.bind(var2)(var4);
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'unsync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93214: for (var _fun93214_ip = 0;;) switch (_fun93214_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var0 = this;
                    var1 = var0.synced;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93214_ip = 31;
                        continue _fun93214
                    }
                case 21:
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var3);
                case 31:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 13;
                    var7 = var6[var2];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var7);
                    var7 = var8.basicChannelsTransaction;
                    var8 = var7.bind(var8)(var5);
                    var7 = var8.delete;
                    var7 = var7.bind(var8)(var3);
                    var2 = var6[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.syncedBasicChannelsTransaction;
                    var5 = var2.bind(var4)(var5);
                    var4 = var5.put;
                    var2 = false;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure1_slot16;
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'sync';
        var4.key = var6;
        var6 = function arg0() {
            _fun93215: for (var _fun93215_ip = 0;;) switch (_fun93215_ip) {
                case 0:
                    var9 = arg0;
                    var8 = this;
                    var3 = _closure1_slot17;
                    var1 = var3.verbose;
                    var0 = 'Starting to write all basic channels';
                    var0 = var1.bind(var3)(var0);
                    var1 = global;
                    var3 = var1.performance;
                    var0 = var3.now;
                    var5 = var0.bind(var3)();
                    var4 = {
                        'written': 0,
                        'skipped': 0
                    };
                    var6 = _closure1_slot18;
                    var3 = _closure1_slot14;
                    var0 = var3.getGuildIds;
                    var3 = var0.bind(var3)();
                    var0 = undefined;
                    var7 = var6.bind(var0)(var3);
                    var6 = var7.bind(var0)();
                    var3 = var6.done;
                    if (var3) {
                        _fun93215_ip = 165;
                        continue _fun93215
                    }
                case 98:
                    var10 = var6.value;
                    var3 = var8.syncOne;
                    var3 = var3.bind(var8)(var10, var9);
                    if (var3) {
                        _fun93215_ip = 135;
                        continue _fun93215
                    }
                case 118:
                    var3 = var4.skipped;
                    var3 = var3 + 1;
                    var4.skipped = var3;
                    _fun93215_ip = 150;
                    continue _fun93215;
                case 135:
                    var3 = var4.written;
                    var3 = var3 + 1;
                    var4.written = var3;
                case 150:
                    var10 = var7.bind(var0)();
                    var3 = var10.done;
                    var6 = var10;
                    if (!var3) {
                        _fun93215_ip = 98;
                        continue _fun93215
                    }
                case 165:
                    var6 = var1.performance;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var14 = var3 - var5;
                    var3 = _closure1_slot17;
                    var2 = var3.verbose;
                    var16 = var4.written;
                    var12 = var4.skipped;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var17 = '';
                    var15 = ' basic_channel guilds submitted (took: ';
                    var13 = 'ms, skipped: ';
                    var11 = ' guilds)';
                    var1 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'syncOne';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun93216: for (var _fun93216_ip = 0;;) switch (_fun93216_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var5 = this;
                    var2 = _closure1_slot14;
                    var0 = var2.getGuild;
                    var0 = var0.bind(var2)(var4);
                    var2 = null;
                    var0 = var2 == var0;
                    if (var0) {
                        _fun93216_ip = 61;
                        continue _fun93216
                    }
                case 35:
                    var8 = var5.synced;
                    var6 = var2 != var8;
                    if (!var6) {
                        _fun93216_ip = 58;
                        continue _fun93216
                    }
                case 48:
                    var7 = var8.has;
                    var6 = var7.bind(var8)(var4);
                case 58:
                    var0 = var6;
                case 61:
                    var0 = !var0;
                    if (!var0) {
                        _fun93216_ip = 182;
                        continue _fun93216
                    }
                case 67:
                    var5 = var5.synced;
                    if (!(var2 != var5)) {
                        _fun93216_ip = 87;
                        continue _fun93216
                    }
                case 77:
                    var2 = var5.add;
                    var2 = var2.bind(var5)(var4);
                case 87:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 13;
                    var7 = var6[var1];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.basicChannelsTransaction;
                    var9 = var7.bind(var8)(var3);
                    var8 = var9.put;
                    var7 = function arg0() {
                        var2 = _closure1_slot11;
                        var1 = var2.getMutableGuildChannelsForGuild;
                        var0 = arg0;
                        var2 = var1.bind(var2)(var0);
                        var0 = global;
                        var1 = var0.Object;
                        var0 = var1.values;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var5 = arg0;
                            var0 = {};
                            var1 = var5.id;
                            var0.id = var1;
                            var1 = var5.type;
                            var0.type = var1;
                            var1 = var5.guild_id;
                            var0.guild_id = var1;
                            var1 = var5.parent_id;
                            var0.parent_id = var1;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 16;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.asBasicFlag;
                            var4 = _closure1_slot15;
                            var1 = var4.computePermissions;
                            var1 = var1.bind(var4)(var5);
                            var1 = var2.bind(var3)(var1);
                            var0.basicPermissions = var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var7.bind(var2)(var4);
                    var7 = var8.bind(var9)(var4, var7);
                    var1 = var6[var1];
                    var2 = var5.bind(var2)(var1);
                    var1 = var2.syncedBasicChannelsTransaction;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.put;
                    var1 = true;
                    var2 = var2.bind(var3)(var4, var1);
                    var0 = true;
                case 182:
                    return var0;
            }
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/GuildBasicChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 3476, 1376, 1216, 1372, 1674, 1410, 3093, 1373, 3, 1646, 12228, 484, 3101, 2]);