// modules/threads/ThreadMessageStore.tsx
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
        _fun53547: for (var _fun53547_ip = 0;;) switch (_fun53547_ip) {
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
                _fun53547_ip = 74;
                continue _fun53547;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun53550: for (var _fun53550_ip = 0;;) switch (_fun53550_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53550_ip = 46;
                    continue _fun53550
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53550_ip = 55;
                    continue _fun53550
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53550_ip = 343;
                    continue _fun53550
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53550_ip = 323;
                    continue _fun53550
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53550_ip = 283;
                    continue _fun53550
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53550_ip = 270;
                    continue _fun53550
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
                    _fun53550_ip = 163;
                    continue _fun53550
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53550_ip = 179;
                    continue _fun53550
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53550_ip = 249;
                    continue _fun53550
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53550_ip = 249;
                    continue _fun53550
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53550_ip = 234;
                    continue _fun53550
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53550_ip = 247;
                    continue _fun53550
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53550_ip = 265;
                continue _fun53550;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53550_ip = 283;
                continue _fun53550;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53550_ip = 323;
                    continue _fun53550
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
                    _fun53550_ip = 330;
                    continue _fun53550
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53551: for (var _fun53551_ip = 0;;) switch (_fun53551_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53551_ip = 56;
                                continue _fun53551
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
                            _fun53551_ip = 67;
                            continue _fun53551;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun53552: for (var _fun53552_ip = 0;;) switch (_fun53552_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53552_ip = 23;
                    continue _fun53552
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53552_ip = 33;
                    continue _fun53552
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
                    _fun53552_ip = 70;
                    continue _fun53552
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53552_ip = 55;
                    continue _fun53552
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun53553: for (var _fun53553_ip = 0;;) switch (_fun53553_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot8;
                var3 = var4.has;
                var2 = var0.type;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun53553_ip = 142;
                    continue _fun53553
                }
            case 28:
                var3 = _closure1_slot23;
                var4 = var0.id;
                var2 = _closure1_slot17;
                var2 = var4 in var2;
                if (var2) {
                    _fun53553_ip = 118;
                    continue _fun53553
                }
            case 48:
                var5 = _closure1_slot17;
                var4 = var0.id;
                var2 = {};
                var6 = var0.guild_id;
                var2.guildId = var6;
                var6 = var0.parent_id;
                var2.parentId = var6;
                var8 = var0.messageCount;
                var6 = null;
                var9 = var6 != var8;
                var7 = 0;
                if (!var9) {
                    _fun53553_ip = 99;
                    continue _fun53553
                }
            case 96:
                var7 = var8;
            case 99:
                var2.count = var7;
                var2.mostRecentRawMessage = var6;
                var2.mostRecentMessage = var6;
                var5[var4] = var2;
            case 118:
                var1 = _closure1_slot17;
                var0 = var0.id;
                var2 = var1[var0];
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var0);
            case 142:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun53554: for (var _fun53554_ip = 0;;) switch (_fun53554_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot18;
                var1 = var2.parentId;
                var1 = var3[var1];
                var3 = null;
                var4 = var3 != var1;
                var3 = 0;
                if (!var4) {
                    _fun53554_ip = 34;
                    continue _fun53554
                }
            case 31:
                var3 = var1;
            case 34:
                var1 = 1;
                var3 = var3 + var1;
                var1 = _closure1_slot18;
                var0 = var2.parentId;
                var1[var0] = var3;
                var1 = arg1;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun53555: for (var _fun53555_ip = 0;;) switch (_fun53555_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.threads;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun53555_ip = 32;
                    continue _fun53555
                }
            case 15:
                var3 = var4.forEach;
                var2 = _closure1_slot26;
                var2 = var3.bind(var4)(var2);
            case 32:
                var2 = var1.threadMessages;
                if (!(var0 != var2)) {
                    _fun53555_ip = 59;
                    continue _fun53555
                }
            case 42:
                var1 = var2.forEach;
                var0 = _closure1_slot25;
                var0 = var1.bind(var2)(var0);
            case 59:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun53556: for (var _fun53556_ip = 0;;) switch (_fun53556_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = var2.type;
                var3 = _closure1_slot15;
                var3 = var3.THREAD_STARTER_MESSAGE;
                if (!(var4 !== var3)) {
                    _fun53556_ip = 73;
                    continue _fun53556
                }
            case 31:
                var4 = _closure1_slot12;
                var3 = var4.getChannel;
                var2 = var2.channel_id;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun53556_ip = 73;
                    continue _fun53556
                }
            case 56:
                var2 = _closure1_slot22;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var1.mostRecentRawMessage = var0;
                    var0 = null;
                    var1.mostRecentMessage = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var1)(var3, var0);
            case 73:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot22;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun53559: for (var _fun53559_ip = 0;;) switch (_fun53559_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var2 = var0.messageCount;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun53559_ip = 38;
                        continue _fun53559
                    }
                case 22:
                    var2 = _closure2_slot0;
                    var2 = var2.messageCount;
                    var1.count = var2;
                case 38:
                    var5 = var1.mostRecentRawMessage;
                    if (!(var0 == var5)) {
                        _fun53559_ip = 54;
                        continue _fun53559
                    }
                case 48:
                    var5 = var1.mostRecentMessage;
                case 54:
                    var2 = _closure2_slot0;
                    var2 = var2.lastMessageId;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun53559_ip = 99;
                        continue _fun53559
                    }
                case 71:
                    var6 = var0 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun53559_ip = 85;
                        continue _fun53559
                    }
                case 80:
                    var4 = var5.id;
                case 85:
                    var3 = _closure2_slot0;
                    var3 = var3.lastMessageId;
                    var2 = var4 !== var3;
                case 99:
                    if (!var2) {
                        _fun53559_ip = 114;
                        continue _fun53559
                    }
                case 102:
                    var1.mostRecentRawMessage = var0;
                    var1.mostRecentMessage = var0;
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun53560: for (var _fun53560_ip = 0;;) switch (_fun53560_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun53560_ip = 66;
                    continue _fun53560
                }
            case 9:
                var4 = var2.id;
                var3 = _closure1_slot17;
                var3 = var4 in var3;
                if (var3) {
                    _fun53560_ip = 66;
                    continue _fun53560
                }
            case 28:
                var4 = _closure1_slot12;
                var3 = var4.getChannel;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                if (!(var1 != var2)) {
                    _fun53560_ip = 66;
                    continue _fun53560
                }
            case 51:
                var1 = _closure1_slot26;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var0 = true;
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = _closure1_slot27;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.messages;
            var2 = var0.threads;
            var1 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot27;
                    var0 = arg0;
                    var1 = var0.thread;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var1 = var2.forEach;
            var0 = _closure1_slot27;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var9 = function() {
        _fun53567: for (var _fun53567_ip = 0;;) switch (_fun53567_ip) {
            case 0:
                var7 = _closure1_slot17;
                var0 = undefined;
                var2 = null;
                var1 = undefined;
                for (var3 in var7)
                    case 21: {
                        case 30: var13 = var3;
                        var9 = _closure1_slot17;
                        var10 = var9[var13];
                        if (var2 == var10) {
                            _fun53567_ip = 21;
                            continue _fun53567
                        }
                        case 45: var9 = var10.mostRecentMessage;
                        if (var2 == var9) {
                            _fun53567_ip = 21;
                            continue _fun53567
                        }
                        case 55: var12 = _closure1_slot13;
                        var11 = var12.getMessage;
                        var9 = var10.mostRecentMessage;
                        var9 = var9.id;
                        var9 = var11.bind(var12)(var13, var9);
                        var1 = var9;
                        if (var2 == var9) {
                            _fun53567_ip = 21;
                            continue _fun53567
                        }
                        case 89: var10.mostRecentMessage = var9;
                        var1 = var9;
                        _fun53567_ip = 21;
                        continue _fun53567;
                    }
            case 100:
                return var0;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var7);
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
    var12 = var7.ALL_CHANNEL_TYPES;
    var _closure1_slot8 = var12;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MessageTypes;
    var _closure1_slot15 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var17 = var7;
    var1 = new var17[var1](var16);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot16 = var1;
    var1 = {};
    var _closure1_slot17 = var1;
    var1 = {};
    var _closure1_slot18 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53569: for (var _fun53569_ip = 0;;) switch (_fun53569_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53569_ip = 69;
                        continue _fun53569
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53569_ip = 105;
                    continue _fun53569;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot12;
            var0 = _closure1_slot13;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var6 = function arg0() {
            _fun53571: for (var _fun53571_ip = 0;;) switch (_fun53571_ip) {
                case 0:
                    var1 = _closure1_slot17;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun53571_ip = 31;
                        continue _fun53571
                    }
                case 25:
                    var1 = var2.count;
                case 31:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun53571_ip = 43;
                        continue _fun53571
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMostRecentMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun53572: for (var _fun53572_ip = 0;;) switch (_fun53572_ip) {
                case 0:
                    var6 = arg0;
                    var0 = _closure1_slot17;
                    var1 = var0[var6];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun53572_ip = 151;
                        continue _fun53572
                    }
                case 23:
                    var2 = var1.mostRecentMessage;
                    var2 = var0 == var2;
                    if (!var2) {
                        _fun53572_ip = 46;
                        continue _fun53572
                    }
                case 36:
                    var4 = var1.mostRecentRawMessage;
                    var2 = var0 != var4;
                case 46:
                    if (!var2) {
                        _fun53572_ip = 131;
                        continue _fun53572
                    }
                case 49:
                    var5 = _closure1_slot13;
                    var4 = var5.getMessage;
                    var2 = var1.mostRecentRawMessage;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var6, var2);
                    if (!(var0 == var2)) {
                        _fun53572_ip = 119;
                        continue _fun53572
                    }
                case 80:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.createMessageRecord;
                    var3 = var1.mostRecentRawMessage;
                    var2 = var4.bind(var5)(var3);
                case 119:
                    var1.mostRecentMessage = var2;
                    var1.mostRecentRawMessage = var0;
                case 131:
                    var2 = var1.mostRecentMessage;
                    var3 = var0 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun53572_ip = 149;
                        continue _fun53572
                    }
                case 146:
                    var1 = var2;
                case 149:
                    return var1;
                case 151:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getChannelThreadsVersion';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot18;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getInitialOverlayState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ThreadMessageStore';
    var7.displayName = var1;
    var1 = 16;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var12 = function arg0() {
        var1 = {};
        _closure1_slot18 = var1;
        var2 = _closure1_slot16;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = arg0;
        var2 = var1.guilds;
        var1 = var2.forEach;
        var0 = _closure1_slot24;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var12;
    var12 = function arg0() {
        _fun53576: for (var _fun53576_ip = 0;;) switch (_fun53576_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.threadMessages;
                var0 = {};
                var16 = var0;
                var15 = var8;
                var1 = copyDataProperties(var16, var15);
                _closure1_slot17 = var0;
                var6 = var0;
                var1 = 'author';
                var0 = null;
                for (var2 in var6)
                    case 45: {
                        case 54: var9 = var2;
                        var10 = var8[var9];
                        var11 = var10.mostRecentMessage;
                        if (var0 == var11) {
                            _fun53576_ip = 45;
                            continue _fun53576
                        }
                        case 71: var10 = var8[var9];
                        var12 = _closure1_slot10;
                        var9 = {};
                        var16 = var9;
                        var15 = var11;
                        var13 = copyDataProperties(var16, var15);
                        var14 = _closure1_slot11;
                        var16 = var11.author;
                        var13 = var14.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var14
                            }
                        });
                        var17 = var13;
                        var11 = new var17[var14](var16, var15);
                        var11 = var11 instanceof Object ? var11 : var13;
                        var9[var1] = var11;
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var17 = var11;
                        var16 = var9;
                        var9 = new var17[var12](var16, var15);
                        var9 = var9 instanceof Object ? var9 : var11;
                        var10.mostRecentMessage = var9;
                        _fun53576_ip = 45;
                        continue _fun53576;
                    }
            case 157:
                var0 = undefined;
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var1 = _closure1_slot24;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 12;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.omitBy;
            var3 = _closure1_slot17;
            var1 = function(arg0) { // Environment: var1
                _fun53580: for (var _fun53580_ip = 0;;) switch (_fun53580_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.guildId;
                        var0 = _closure3_slot0;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun53580_ip = 39;
                            continue _fun53580
                        }
                    case 22:
                        var2 = _closure1_slot18;
                        var1 = var1.parentId;
                        var1 = delete var2[var1];
                    case 39:
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot17 = var1;
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_DELETE = var12;
    var1.THREAD_CREATE = var11;
    var1.THREAD_UPDATE = var11;
    var11 = function arg0() {
        _fun53581: for (var _fun53581_ip = 0;;) switch (_fun53581_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.threads;
                var2 = var0.mostRecentMessages;
                var1 = var3.forEach;
                var0 = _closure1_slot26;
                var0 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun53581_ip = 55;
                    continue _fun53581
                }
            case 38:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun53582: for (var _fun53582_ip = 0;;) switch (_fun53582_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot12;
                            var3 = var5.getChannel;
                            var2 = var4.channel_id;
                            var3 = var3.bind(var5)(var2);
                            var2 = null;
                            var2 = var2 != var3;
                            if (!var2) {
                                _fun53582_ip = 59;
                                continue _fun53582
                            }
                        case 40:
                            var5 = var4.type;
                            var4 = _closure1_slot15;
                            var4 = var4.THREAD_STARTER_MESSAGE;
                            var2 = var5 !== var4;
                        case 59:
                            if (!var2) {
                                _fun53582_ip = 79;
                                continue _fun53582
                            }
                        case 62:
                            var2 = _closure1_slot22;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var1.mostRecentRawMessage = var0;
                                var0 = null;
                                var1.mostRecentMessage = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var3, var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_LIST_SYNC = var11;
    var1.LOAD_THREADS_SUCCESS = var10;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var10;
    var1.RELATIONSHIP_ADD = var9;
    var1.RELATIONSHIP_UPDATE = var9;
    var1.RELATIONSHIP_REMOVE = var9;
    var1.SEARCH_MESSAGES_SUCCESS = var8;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var1 = _closure1_slot17;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = function arg0() {
            var2 = arg0;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 12;
            var4 = var4[var0];
            var0 = undefined;
            var6 = var5.bind(var0)(var4);
            var5 = var6.omitBy;
            var4 = _closure1_slot17;
            var3 = function(arg0) { // Environment: var3
                var0 = arg0;
                var1 = var0.parentId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot17 = var3;
            var1 = _closure1_slot18;
            var1 = delete var1[var2];
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        _fun53588: for (var _fun53588_ip = 0;;) switch (_fun53588_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.message;
                var _closure2_slot0 = var6;
                var2 = var1.optimistic;
                var0 = var1.isPushNotification;
                var1 = var1.sendMessageOptions;
                if (var2) {
                    _fun53588_ip = 231;
                    continue _fun53588
                }
            case 38:
                if (var0) {
                    _fun53588_ip = 231;
                    continue _fun53588
                }
            case 44:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun53588_ip = 231;
                    continue _fun53588
                }
            case 53:
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var1 = var6.channel_id;
                var5 = var4.bind(var5)(var1);
                var1 = var0 == var5;
                if (var1) {
                    _fun53588_ip = 104;
                    continue _fun53588
                }
            case 82:
                var7 = _closure1_slot9;
                var4 = var7.has;
                var0 = var5.type;
                var0 = var4.bind(var7)(var0);
                var1 = !var0;
            case 104:
                var0 = !var1;
                if (var1) {
                    _fun53588_ip = 229;
                    continue _fun53588
                }
            case 110:
                var4 = var6.type;
                var1 = _closure1_slot15;
                var1 = var1.THREAD_STARTER_MESSAGE;
                var4 = var4 !== var1;
                if (!var4) {
                    _fun53588_ip = 198;
                    continue _fun53588
                }
            case 132:
                var1 = var5.isForumPost;
                var1 = var1.bind(var5)();
                var1 = !var1;
                if (var1) {
                    _fun53588_ip = 195;
                    continue _fun53588
                }
            case 148:
                var7 = var6.id;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 13;
                var8 = var8[var6];
                var6 = undefined;
                var9 = var9.bind(var6)(var8);
                var8 = var9.castChannelIdAsMessageId;
                var6 = var5.id;
                var6 = var8.bind(var9)(var6);
                var1 = var7 !== var6;
            case 195:
                var4 = var1;
            case 198:
                var1 = !var4;
                var1 = !var1;
                if (!var4) {
                    _fun53588_ip = 226;
                    continue _fun53588
                }
            case 207:
                var4 = _closure1_slot22;
                var2 = undefined;
                var3 = function(arg0) { // Environment: var3
                    var1 = arg0;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.min;
                    var2 = var1.count;
                    var0 = 1;
                    var2 = var2 + var0;
                    var0 = _closure1_slot14;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.count = var0;
                    var0 = _closure2_slot0;
                    var1.mostRecentRawMessage = var0;
                    var0 = null;
                    var1.mostRecentMessage = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var2)(var5, var3);
                var1 = undefined;
            case 226:
                var0 = var1;
            case 229:
                return var0;
            case 231:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function arg0() {
        _fun53590: for (var _fun53590_ip = 0;;) switch (_fun53590_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.message;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot17;
                var0 = var4.channel_id;
                var3 = var3[var0];
                var6 = null;
                var7 = var6 == var3;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun53590_ip = 49;
                    continue _fun53590
                }
            case 43:
                var5 = var3.mostRecentRawMessage;
            case 49:
                if (!(var6 == var5)) {
                    _fun53590_ip = 71;
                    continue _fun53590
                }
            case 53:
                var8 = var6 == var3;
                var7 = undefined;
                if (var8) {
                    _fun53590_ip = 68;
                    continue _fun53590
                }
            case 62:
                var7 = var3.mostRecentMessage;
            case 68:
                var5 = var7;
            case 71:
                if (!(var6 != var3)) {
                    _fun53590_ip = 110;
                    continue _fun53590
                }
            case 75:
                if (!(var6 != var5)) {
                    _fun53590_ip = 110;
                    continue _fun53590
                }
            case 79:
                var5 = var5.id;
                var4 = var4.id;
                if (!(var5 === var4)) {
                    _fun53590_ip = 110;
                    continue _fun53590
                }
            case 93:
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53591: for (var _fun53591_ip = 0;;) switch (_fun53591_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.mostRecentMessage;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun53591_ip = 71;
                                continue _fun53591
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.updateMessageRecord;
                            var3 = var1.mostRecentMessage;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var5)(var3, var0);
                            var1.mostRecentMessage = var0;
                        case 71:
                            var0 = var1.mostRecentRawMessage;
                            if (!(var2 != var0)) {
                                _fun53591_ip = 137;
                                continue _fun53591
                            }
                        case 81:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.updateServerMessage;
                            var2 = var1.mostRecentRawMessage;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.mostRecentRawMessage = var0;
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 110:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var8;
    var8 = function arg0() {
        _fun53592: for (var _fun53592_ip = 0;;) switch (_fun53592_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.id;
                var _closure2_slot0 = var6;
                var7 = var0.channelId;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var3 = _closure1_slot17;
                var3 = var3[var7];
                var4 = null;
                if (!(var4 != var3)) {
                    _fun53592_ip = 123;
                    continue _fun53592
                }
            case 46:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 13;
                var4 = var8[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.castChannelIdAsMessageId;
                var4 = var4.bind(var5)(var7);
                var4 = var4 !== var6;
                _closure2_slot1 = var4;
                var5 = _closure1_slot16;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                var4 = !var4;
                _closure2_slot2 = var4;
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53593: for (var _fun53593_ip = 0;;) switch (_fun53593_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.mostRecentRawMessage;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun53593_ip = 21;
                                continue _fun53593
                            }
                        case 15:
                            var3 = var2.mostRecentMessage;
                        case 21:
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun53593_ip = 44;
                                continue _fun53593
                            }
                        case 28:
                            var4 = var3.id;
                            var3 = _closure2_slot0;
                            var1 = var4 === var3;
                        case 44:
                            if (!var1) {
                                _fun53593_ip = 59;
                                continue _fun53593
                            }
                        case 47:
                            var2.mostRecentMessage = var0;
                            var2.mostRecentRawMessage = var0;
                        case 59:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun53593_ip = 76;
                                continue _fun53593
                            }
                        case 69:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun53593_ip = 84;
                                continue _fun53593
                            }
                        case 76:
                            var1 = var2.count;
                            _fun53593_ip = 118;
                            continue _fun53593;
                        case 84:
                            var3 = global;
                            var6 = var3.Math;
                            var5 = var6.max;
                            var4 = var2.count;
                            var3 = 1;
                            var4 = var4 - var3;
                            var3 = 0;
                            var1 = var5.bind(var6)(var4, var3);
                        case 118:
                            var2.count = var1;
                            var2 = _closure1_slot16;
                            var1 = var2.add;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 123:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var8;
    var8 = function arg0() {
        _fun53594: for (var _fun53594_ip = 0;;) switch (_fun53594_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.ids;
                var _closure2_slot0 = var6;
                var4 = var0.channelId;
                var _closure2_slot1 = var4;
                var0 = undefined;
                var _closure2_slot2 = var0;
                var3 = _closure1_slot17;
                var3 = var3[var4];
                var4 = null;
                if (!(var4 != var3)) {
                    _fun53594_ip = 94;
                    continue _fun53594
                }
            case 47:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var1
                    _fun53595: for (var _fun53595_ip = 0;;) switch (_fun53595_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.castChannelIdAsMessageId;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0 !== var3;
                            var2 = _closure1_slot16;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            var1 = !var1;
                            if (!var0) {
                                _fun53595_ip = 73;
                                continue _fun53595
                            }
                        case 70:
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                _closure2_slot2 = var5;
                var4 = 0;
                if (!(var5 > var4)) {
                    _fun53594_ip = 92;
                    continue _fun53594
                }
            case 77:
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53596: for (var _fun53596_ip = 0;;) switch (_fun53596_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.mostRecentRawMessage;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun53596_ip = 21;
                                continue _fun53596
                            }
                        case 15:
                            var3 = var2.mostRecentMessage;
                        case 21:
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun53596_ip = 50;
                                continue _fun53596
                            }
                        case 28:
                            var5 = _closure2_slot0;
                            var4 = var5.includes;
                            var3 = var3.id;
                            var1 = var4.bind(var5)(var3);
                        case 50:
                            if (!var1) {
                                _fun53596_ip = 65;
                                continue _fun53596
                            }
                        case 53:
                            var2.mostRecentMessage = var0;
                            var2.mostRecentRawMessage = var0;
                        case 65:
                            var3 = var2.count;
                            var1 = _closure2_slot2;
                            var1 = var3 - var1;
                            var2.count = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot16;
                                var1 = var2.add;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
            case 92:
                return var0;
            case 94:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE_BULK = var8;
    var3 = function arg0() {
        _fun53598: for (var _fun53598_ip = 0;;) switch (_fun53598_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot20;
                var0 = var4.messages;
                var1 = undefined;
                var8 = var5.bind(var1)(var0);
                var6 = var8.bind(var1)();
                var5 = var6.done;
                var7 = var6;
                var6 = false;
                var0 = false;
                if (var5) {
                    _fun53598_ip = 95;
                    continue _fun53598
                }
            case 48:
                var9 = _closure1_slot27;
                var5 = var7.value;
                var5 = var5.thread;
                var9 = var9.bind(var1)(var5);
                if (var9) {
                    _fun53598_ip = 74;
                    continue _fun53598
                }
            case 71:
                var9 = var6;
            case 74:
                var10 = var8.bind(var1)();
                var5 = var10.done;
                var6 = var9;
                var7 = var10;
                var0 = var6;
                if (!var5) {
                    _fun53598_ip = 48;
                    continue _fun53598
                }
            case 95:
                var5 = var4.isAfter;
                if (var5) {
                    _fun53598_ip = 188;
                    continue _fun53598
                }
            case 104:
                var5 = var4.isBefore;
                if (var5) {
                    _fun53598_ip = 188;
                    continue _fun53598
                }
            case 113:
                var5 = var4.hasMoreAfter;
                if (var5) {
                    _fun53598_ip = 188;
                    continue _fun53598
                }
            case 122:
                var6 = _closure1_slot12;
                var5 = var6.getChannel;
                var4 = var4.channelId;
                var4 = var5.bind(var6)(var4);
                var5 = null;
                if (!(var5 != var4)) {
                    _fun53598_ip = 186;
                    continue _fun53598
                }
            case 147:
                var7 = _closure1_slot9;
                var6 = var7.has;
                var5 = var4.type;
                var5 = var6.bind(var7)(var5);
                if (!var5) {
                    _fun53598_ip = 186;
                    continue _fun53598
                }
            case 169:
                var3 = _closure1_slot22;
                var2 = function(arg0) { // Environment: var2
                    _fun53599: for (var _fun53599_ip = 0;;) switch (_fun53599_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var0.messages;
                            var2 = var0.length;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun53599_ip = 141;
                                continue _fun53599
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var2 = var2.messages;
                            var5 = var2[var0];
                            var2 = null;
                            var6 = var2 != var5;
                            var3 = null;
                            if (!var6) {
                                _fun53599_ip = 55;
                                continue _fun53599
                            }
                        case 52:
                            var3 = var5;
                        case 55:
                            var4 = _closure2_slot0;
                            var4 = var4.messages;
                            var6 = var4.length;
                            var5 = _closure1_slot14;
                            if (!(!(var6 >= var5))) {
                                _fun53599_ip = 89;
                                continue _fun53599
                            }
                        case 81:
                            var5 = var1.count;
                            _fun53599_ip = 93;
                            continue _fun53599;
                        case 89:
                            var5 = _closure1_slot14;
                        case 93:
                            var1.count = var5;
                            var6 = var2 == var3;
                            var5 = undefined;
                            if (var6) {
                                _fun53599_ip = 113;
                                continue _fun53599
                            }
                        case 108:
                            var5 = var3.type;
                        case 113:
                            var4 = _closure1_slot15;
                            var4 = var4.THREAD_STARTER_MESSAGE;
                            if (!(var5 !== var4)) {
                                _fun53599_ip = 161;
                                continue _fun53599
                            }
                        case 127:
                            var1.mostRecentRawMessage = var3;
                            var1.mostRecentMessage = var2;
                            _fun53599_ip = 161;
                            continue _fun53599;
                        case 141:
                            var2 = null;
                            var1.mostRecentRawMessage = var2;
                            var1.mostRecentMessage = var2;
                            var1.count = var0;
                        case 161:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            case 186:
                return var0;
            case 188:
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 3101, 1628, 1372, 4249, 1233, 660, 22, 21, 3972, 566, 806, 2]);