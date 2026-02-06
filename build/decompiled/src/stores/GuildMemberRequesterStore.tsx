// stores/GuildMemberRequesterStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun50464: for (var _fun50464_ip = 0;;) switch (_fun50464_ip) {
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
                _fun50464_ip = 74;
                continue _fun50464;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function arg0, arg1() {
        _fun50467: for (var _fun50467_ip = 0;;) switch (_fun50467_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50467_ip = 46;
                    continue _fun50467
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50467_ip = 55;
                    continue _fun50467
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50467_ip = 343;
                    continue _fun50467
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50467_ip = 323;
                    continue _fun50467
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50467_ip = 283;
                    continue _fun50467
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50467_ip = 270;
                    continue _fun50467
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
                    _fun50467_ip = 163;
                    continue _fun50467
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50467_ip = 179;
                    continue _fun50467
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50467_ip = 249;
                    continue _fun50467
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50467_ip = 249;
                    continue _fun50467
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50467_ip = 234;
                    continue _fun50467
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50467_ip = 247;
                    continue _fun50467
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50467_ip = 265;
                continue _fun50467;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50467_ip = 283;
                continue _fun50467;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50467_ip = 323;
                    continue _fun50467
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
                    _fun50467_ip = 330;
                    continue _fun50467
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50468: for (var _fun50468_ip = 0;;) switch (_fun50468_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50468_ip = 56;
                                continue _fun50468
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
                            _fun50468_ip = 67;
                            continue _fun50468;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun50469: for (var _fun50469_ip = 0;;) switch (_fun50469_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50469_ip = 23;
                    continue _fun50469
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50469_ip = 33;
                    continue _fun50469
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
                    _fun50469_ip = 70;
                    continue _fun50469
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50469_ip = 55;
                    continue _fun50469
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var9 = function() {
        var1 = _closure1_slot9;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var0 = function arg0, arg1() {
        var3 = _closure1_slot9;
        var2 = var3.request;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun50473: for (var _fun50473_ip = 0;;) switch (_fun50473_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.author;
                    var2 = var0.mentions;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun50473_ip = 48;
                        continue _fun50473
                    }
                case 21:
                    var5 = _closure1_slot13;
                    var4 = _closure2_slot0;
                    var3 = var1.id;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3);
                case 48:
                    if (!(var0 != var2)) {
                        _fun50473_ip = 69;
                        continue _fun50473
                    }
                case 52:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot13;
                        var2 = _closure2_slot0;
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        var0 = false;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot14 = var0;
    var7 = function arg0() {
        _fun50475: for (var _fun50475_ip = 0;;) switch (_fun50475_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.messages;
                var1 = _closure1_slot7;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var5 = null;
                var0 = var5 != var1;
                if (!var0) {
                    _fun50475_ip = 49;
                    continue _fun50475
                }
            case 40:
                var3 = var1.guild_id;
                var0 = var5 != var3;
            case 49:
                if (!var0) {
                    _fun50475_ip = 71;
                    continue _fun50475
                }
            case 52:
                var3 = _closure1_slot14;
                var2 = var1.guild_id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2, var4);
                var0 = false;
            case 71:
                return var0;
        }
    };
    var8 = function arg0() {
        _fun50476: for (var _fun50476_ip = 0;;) switch (_fun50476_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.guildId;
                var5 = var1.data;
                var2 = undefined;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun50476_ip = 67;
                    continue _fun50476
                }
            case 27:
                var1 = new Array(0);
                _closure2_slot0 = var1;
                var4 = var5.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.messages;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = var2.push;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var4.bind(var5)(var0);
                var0 = _closure1_slot14;
                var0 = var0.bind(var2)(var3, var1);
                var0 = false;
                return var0;
            case 67:
                var0 = false;
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var6 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var6 = 7;
    var6 = var4[var6];
    var11 = var5.bind(var0)(var6);
    var14 = var1.isMember;
    var1 = var11.prototype;
    var6 = Object.create(var1, {
        constructor: {
            value: var11
        }
    });
    var13 = function(arg0, arg1) { // Environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_MEMBERS_REQUEST';
        var1.type = var4;
        var4 = new Array(1);
        var5 = arg0;
        var4[0] = var5;
        var1.guildIds = var4;
        var4 = arg1;
        var1.userIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var15 = var6;
    var1 = new var15[var11](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot9 = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50482: for (var _fun50482_ip = 0;;) switch (_fun50482_ip) {
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
                        _fun50482_ip = 69;
                        continue _fun50482
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50482_ip = 105;
                    continue _fun50482;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'requestMember';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = _closure1_slot13;
            var0 = undefined;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getDebugState';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot9;
            var1 = var2.getDebugState;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GuildMemberRequesterStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var14 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_CLOSED = var9;
    var1.CONNECTION_OPEN = var9;
    var9 = function() {
        var1 = _closure1_slot9;
        var0 = var1.requestUnacknowledged;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var1.CONNECTION_RESUMED = var9;
    var9 = function arg0() {
        _fun50487: for (var _fun50487_ip = 0;;) switch (_fun50487_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chunks;
                var4 = function arg0() {
                    _fun50488: for (var _fun50488_ip = 0;;) switch (_fun50488_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var4 = var1.members;
                            var3 = var4.forEach;
                            var2 = function(arg0) { // Environment: var0
                                var3 = _closure1_slot9;
                                var2 = var3.acknowledge;
                                var0 = _closure3_slot0;
                                var1 = var0.guildId;
                                var0 = arg0;
                                var0 = var0.user;
                                var0 = var0.id;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var3 = var1.notFound;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun50488_ip = 63;
                                continue _fun50488
                            }
                        case 42:
                            var2 = var1.notFound;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var3 = _closure1_slot9;
                                var2 = var3.acknowledge;
                                var0 = _closure3_slot0;
                                var1 = var0.guildId;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = _closure1_slot11;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun50487_ip = 67;
                    continue _fun50487
                }
            case 42:
                var0 = var1.value;
                var0 = var4.bind(var3)(var0);
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun50487_ip = 42;
                    continue _fun50487
                }
            case 67:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var9;
    var1.SEARCH_MESSAGES_SUCCESS = var8;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var8;
    var1.LOCAL_MESSAGES_LOADED = var7;
    var1.LOAD_MESSAGES_SUCCESS = var7;
    var1.LOAD_MESSAGES_AROUND_SUCCESS = var7;
    var1.LOAD_RECENT_MENTIONS_SUCCESS = var7;
    var3 = function arg0() {
        _fun50491: for (var _fun50491_ip = 0;;) switch (_fun50491_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.pins;
                var3 = var0.channelId;
                var1 = _closure1_slot7;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var4 = null;
                var0 = var4 != var1;
                if (!var0) {
                    _fun50491_ip = 49;
                    continue _fun50491
                }
            case 40:
                var3 = var1.guild_id;
                var0 = var4 != var3;
            case 49:
                if (!var0) {
                    _fun50491_ip = 88;
                    continue _fun50491
                }
            case 52:
                var4 = _closure1_slot14;
                var3 = var1.guild_id;
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    return var0;
                };
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                var0 = false;
            case 88:
                return var0;
        }
    };
    var1.LOAD_PINNED_MESSAGES_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var6](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildMemberRequesterStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1681, 5668, 806, 566, 2]);