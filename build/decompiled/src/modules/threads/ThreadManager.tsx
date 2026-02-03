// modules/threads/ThreadManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun114266: for (var _fun114266_ip = 0;;) switch (_fun114266_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun114266_ip = 46;
                    continue _fun114266
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun114266_ip = 55;
                    continue _fun114266
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun114266_ip = 345;
                    continue _fun114266
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun114266_ip = 323;
                    continue _fun114266
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun114266_ip = 283;
                    continue _fun114266
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun114266_ip = 270;
                    continue _fun114266
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
                    _fun114266_ip = 163;
                    continue _fun114266
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun114266_ip = 179;
                    continue _fun114266
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun114266_ip = 249;
                    continue _fun114266
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun114266_ip = 249;
                    continue _fun114266
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun114266_ip = 234;
                    continue _fun114266
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun114266_ip = 247;
                    continue _fun114266
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun114266_ip = 265;
                continue _fun114266;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun114266_ip = 283;
                continue _fun114266;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun114266_ip = 323;
                    continue _fun114266
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
                    _fun114266_ip = 330;
                    continue _fun114266
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun114267: for (var _fun114267_ip = 0;;) switch (_fun114267_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun114267_ip = 56;
                                continue _fun114267
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
                            _fun114267_ip = 67;
                            continue _fun114267;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun114268: for (var _fun114268_ip = 0;;) switch (_fun114268_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun114268_ip = 23;
                    continue _fun114268
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun114268_ip = 33;
                    continue _fun114268
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
                    _fun114268_ip = 70;
                    continue _fun114268
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun114268_ip = 55;
                    continue _fun114268
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun114269: for (var _fun114269_ip = 0;;) switch (_fun114269_ip) {
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
                _fun114269_ip = 76;
                continue _fun114269;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = 10;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114273: for (var _fun114273_ip = 0;;) switch (_fun114273_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114273_ip = 84;
                        continue _fun114273
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun114273_ip = 118;
                    continue _fun114273;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleChannelDelete;
                    var1.CHANNEL_DELETE = var2;
                    var2 = var0.handleMessageCreate;
                    var1.MESSAGE_CREATE = var2;
                    var2 = var0.handleGuildDelete;
                    var1.GUILD_DELETE = var2;
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
        var0 = 'handleChannelDelete';
        var4.key = var0;
        var0 = function arg0() {
            _fun114274: for (var _fun114274_ip = 0;;) switch (_fun114274_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.channel;
                    var0 = undefined;
                    var _closure3_slot0 = var0;
                    var4 = var3.guild_id;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun114274_ip = 109;
                        continue _fun114274
                    }
                case 27:
                    var5 = _closure1_slot8;
                    var4 = var5.getAllThreadsForParent;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    _closure3_slot0 = var3;
                    var4 = var3.length;
                    var3 = 0;
                    if (!(var4 > var3)) {
                        _fun114274_ip = 109;
                        continue _fun114274
                    }
                case 65:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.Emitter;
                    var2 = var3.batched;
                    var1 = function() { // Environment: var1
                        _fun114275: for (var _fun114275_ip = 0;;) switch (_fun114275_ip) {
                            case 0:
                                var2 = _closure1_slot9;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var2 = var5.bind(var0)();
                                var1 = var2.done;
                                var4 = 8;
                                var3 = 'THREAD_DELETE';
                                if (var1) {
                                    _fun114275_ip = 97;
                                    continue _fun114275
                                }
                            case 40:
                                var9 = var2.value;
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var4];
                                var8 = var7.bind(var0)(var1);
                                var7 = var8.dispatch;
                                var1 = {};
                                var1.type = var3;
                                var1.channel = var9;
                                var1 = var7.bind(var8)(var1);
                                var7 = var5.bind(var0)();
                                var1 = var7.done;
                                var2 = var7;
                                if (!var1) {
                                    _fun114275_ip = 40;
                                    continue _fun114275
                                }
                            case 97:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 109:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleMessageCreate';
        var4.key = var6;
        var6 = function arg0() {
            _fun114276: for (var _fun114276_ip = 0;;) switch (_fun114276_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.channelId;
                    var0 = var0.message;
                    var3 = _closure1_slot8;
                    var1 = var3.getChannel;
                    var1 = var1.bind(var3)(var4);
                    var3 = var0.author;
                    var4 = null;
                    var6 = var4 == var3;
                    var0 = undefined;
                    var5 = undefined;
                    if (var6) {
                        _fun114276_ip = 54;
                        continue _fun114276
                    }
                case 49:
                    var5 = var3.id;
                case 54:
                    var6 = _closure1_slot7;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    if (!(var5 === var3)) {
                        _fun114276_ip = 238;
                        continue _fun114276
                    }
                case 75:
                    if (!(var4 != var1)) {
                        _fun114276_ip = 238;
                        continue _fun114276
                    }
                case 82:
                    var3 = var1.isActiveThread;
                    var3 = var3.bind(var1)();
                    if (!var3) {
                        _fun114276_ip = 238;
                        continue _fun114276
                    }
                case 98:
                    var3 = global;
                    var6 = var3.Date;
                    var7 = var1.threadMetadata;
                    var8 = var4 == var7;
                    var5 = undefined;
                    if (var8) {
                        _fun114276_ip = 127;
                        continue _fun114276
                    }
                case 121:
                    var5 = var7.archiveTimestamp;
                case 127:
                    var7 = var4 != var5;
                    var4 = 0;
                    if (!var7) {
                        _fun114276_ip = 139;
                        continue _fun114276
                    }
                case 136:
                    var4 = var5;
                case 139:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var5;
                    var9 = var4;
                    var4 = new var10[var6](var9, var8);
                    var5 = var4 instanceof Object ? var4 : var5;
                    var4 = var5.getTime;
                    var4 = var4.bind(var5)();
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var4 = var3 - var4;
                    var3 = 5000;
                    if (!(var4 < var3)) {
                        _fun114276_ip = 238;
                        continue _fun114276
                    }
                case 201:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 9;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.resort;
                    var1 = var1.parent_id;
                    var1 = var2.bind(var3)(var1);
                case 238:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var5 = function arg0() {
            _fun114277: for (var _fun114277_ip = 0;;) switch (_fun114277_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.guild;
                    var0 = undefined;
                    var _closure3_slot0 = var0;
                    var2 = var3.unavailable;
                    if (var2) {
                        _fun114277_ip = 107;
                        continue _fun114277
                    }
                case 25:
                    var5 = _closure1_slot8;
                    var4 = var5.getAllThreadsForGuild;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    _closure3_slot0 = var3;
                    var4 = var3.length;
                    var3 = 0;
                    if (!(var3 !== var4)) {
                        _fun114277_ip = 107;
                        continue _fun114277
                    }
                case 63:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.Emitter;
                    var2 = var3.batched;
                    var1 = function() { // Environment: var1
                        _fun114278: for (var _fun114278_ip = 0;;) switch (_fun114278_ip) {
                            case 0:
                                var2 = _closure1_slot9;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var2 = var5.bind(var0)();
                                var1 = var2.done;
                                var4 = 8;
                                var3 = 'THREAD_DELETE';
                                if (var1) {
                                    _fun114278_ip = 97;
                                    continue _fun114278
                                }
                            case 40:
                                var9 = var2.value;
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var4];
                                var8 = var7.bind(var0)(var1);
                                var7 = var8.dispatch;
                                var1 = {};
                                var1.type = var3;
                                var1.channel = var9;
                                var1 = var7.bind(var8)(var1);
                                var7 = var5.bind(var0)();
                                var1 = var7.done;
                                var2 = var7;
                                if (!var1) {
                                    _fun114278_ip = 40;
                                    continue _fun114278
                                }
                            case 97:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 107:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
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
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 566, 806, 8918, 4299, 2]);