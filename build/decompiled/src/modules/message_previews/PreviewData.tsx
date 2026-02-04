// modules/message_previews/PreviewData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun85183: for (var _fun85183_ip = 0;;) switch (_fun85183_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun85183_ip = 46;
                    continue _fun85183
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun85183_ip = 55;
                    continue _fun85183
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun85183_ip = 345;
                    continue _fun85183
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun85183_ip = 323;
                    continue _fun85183
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun85183_ip = 283;
                    continue _fun85183
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun85183_ip = 270;
                    continue _fun85183
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
                    _fun85183_ip = 163;
                    continue _fun85183
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun85183_ip = 179;
                    continue _fun85183
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun85183_ip = 249;
                    continue _fun85183
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun85183_ip = 249;
                    continue _fun85183
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun85183_ip = 234;
                    continue _fun85183
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun85183_ip = 247;
                    continue _fun85183
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun85183_ip = 265;
                continue _fun85183;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun85183_ip = 283;
                continue _fun85183;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun85183_ip = 323;
                    continue _fun85183
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
                    _fun85183_ip = 330;
                    continue _fun85183
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun85184: for (var _fun85184_ip = 0;;) switch (_fun85184_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun85184_ip = 56;
                                continue _fun85184
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
                            _fun85184_ip = 67;
                            continue _fun85184;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun85185: for (var _fun85185_ip = 0;;) switch (_fun85185_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun85185_ip = 23;
                    continue _fun85185
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun85185_ip = 33;
                    continue _fun85185
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
                    _fun85185_ip = 70;
                    continue _fun85185
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun85185_ip = 55;
                    continue _fun85185
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = true;
            var2.localNeeded = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.messages = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isLatest';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var1 = arg1;
            var3 = this;
            var2 = var3.messageGeneration;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'messageGeneration';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun85189: for (var _fun85189_ip = 0;;) switch (_fun85189_ip) {
                case 0:
                    var6 = arg0;
                    var2 = arg1;
                    var3 = this;
                    var1 = var3.messages;
                    var0 = var1.get;
                    var7 = var0.bind(var1)(var6);
                    var4 = null;
                    var1 = var4 == var7;
                    var0 = -inf;
                    if (var1) {
                        _fun85189_ip = 147;
                        continue _fun85189
                    }
                case 44:
                    var1 = var7.generation;
                    if (!(var1 !== var2)) {
                        _fun85189_ip = 95;
                        continue _fun85189
                    }
                case 54:
                    var1 = var7.message;
                    if (!(var4 != var1)) {
                        _fun85189_ip = 95;
                        continue _fun85189
                    }
                case 63:
                    var1 = var7.message;
                    var4 = var1.id;
                    var5 = _closure1_slot6;
                    var1 = var5.lastMessageId;
                    var1 = var1.bind(var5)(var6);
                    if (!(var4 !== var1)) {
                        _fun85189_ip = 103;
                        continue _fun85189
                    }
                case 95:
                    var1 = var7.generation;
                    _fun85189_ip = 144;
                    continue _fun85189;
                case 103:
                    var5 = var3.messages;
                    var4 = var5.set;
                    var3 = {};
                    var9 = var3;
                    var8 = var7;
                    var7 = copyDataProperties(var9, var8);
                    var7 = 'generation';
                    var3[var7] = var2;
                    var3 = var4.bind(var5)(var6, var3);
                    var1 = var2;
                case 144:
                    var0 = var1;
                case 147:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'messageId';
        var0.key = var5;
        var5 = function arg0() {
            _fun85190: for (var _fun85190_ip = 0;;) switch (_fun85190_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.messages;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun85190_ip = 52;
                        continue _fun85190
                    }
                case 33:
                    var2 = var2.message;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun85190_ip = 52;
                        continue _fun85190
                    }
                case 47:
                    var1 = var2.id;
                case 52:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun85190_ip = 64;
                        continue _fun85190
                    }
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'messageRecord';
        var0.key = var5;
        var5 = function arg0() {
            _fun85191: for (var _fun85191_ip = 0;;) switch (_fun85191_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.messages;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun85191_ip = 40;
                        continue _fun85191
                    }
                case 31:
                    var3 = var2.message;
                    var1 = var0 == var3;
                case 40:
                    if (var1) {
                        _fun85191_ip = 59;
                        continue _fun85191
                    }
                case 43:
                    var4 = var2.message;
                    var3 = _closure1_slot5;
                    var1 = var4 instanceof var3;
                case 59:
                    if (var1) {
                        _fun85191_ip = 109;
                        continue _fun85191
                    }
                case 62:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.createMessageRecord;
                    var1 = var2.message;
                    var1 = var3.bind(var4)(var1);
                    var2.message = var1;
                case 109:
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun85191_ip = 123;
                        continue _fun85191
                    }
                case 118:
                    var1 = var2.message;
                case 123:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun85191_ip = 135;
                        continue _fun85191
                    }
                case 132:
                    var0 = var1;
                case 135:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.messages;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            var3 = var0.messages;
            var2 = var3.set;
            var1 = {};
            var0 = arg1;
            var1.message = var0;
            var0 = arg2;
            var1.generation = var0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'putNew';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun85194: for (var _fun85194_ip = 0;;) switch (_fun85194_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var1 = var2.messages;
                    var0 = var1.get;
                    var5 = var0.bind(var1)(var4);
                    var1 = null;
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun85194_ip = 120;
                        continue _fun85194
                    }
                case 34:
                    var8 = var3.id;
                    var6 = var1 == var5;
                    var9 = undefined;
                    var7 = undefined;
                    if (var6) {
                        _fun85194_ip = 69;
                        continue _fun85194
                    }
                case 50:
                    var5 = var5.message;
                    var6 = var1 == var5;
                    var7 = undefined;
                    if (var6) {
                        _fun85194_ip = 69;
                        continue _fun85194
                    }
                case 64:
                    var7 = var5.id;
                case 69:
                    var1 = var1 == var7;
                    if (var1) {
                        _fun85194_ip = 117;
                        continue _fun85194
                    }
                case 76:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var5 = var10[var5];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.compare;
                    var6 = var5.bind(var6)(var8, var7);
                    var5 = 0;
                    var1 = var6 > var5;
                case 117:
                    var0 = var1;
                case 120:
                    if (!var0) {
                        _fun85194_ip = 139;
                        continue _fun85194
                    }
                case 123:
                    var1 = var2.put;
                    var0 = arg2;
                    var0 = var1.bind(var2)(var4, var3, var0);
                case 139:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'putMany';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun85195: for (var _fun85195_ip = 0;;) switch (_fun85195_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var2 = _closure1_slot7;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun85195_ip = 73;
                        continue _fun85195
                    }
                case 35:
                    var7 = var2.value;
                    var6 = var4.put;
                    var1 = var7.channel_id;
                    var1 = var6.bind(var4)(var1, var7, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun85195_ip = 35;
                        continue _fun85195
                    }
                case 73:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function arg0() {
            _fun85196: for (var _fun85196_ip = 0;;) switch (_fun85196_ip) {
                case 0:
                    var7 = arg0;
                    var0 = this;
                    var1 = var7.id;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun85196_ip = 205;
                        continue _fun85196
                    }
                case 20:
                    var1 = var7.channel_id;
                    if (!(var5 != var1)) {
                        _fun85196_ip = 205;
                        continue _fun85196
                    }
                case 32:
                    var3 = var7.channel_id;
                    var2 = var0.messages;
                    var1 = var2.get;
                    var4 = var1.bind(var2)(var3);
                    var1 = var5 == var4;
                    var6 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun85196_ip = 83;
                        continue _fun85196
                    }
                case 64:
                    var1 = var4.message;
                    var5 = var5 == var1;
                    var2 = undefined;
                    if (var5) {
                        _fun85196_ip = 83;
                        continue _fun85196
                    }
                case 78:
                    var2 = var1.id;
                case 83:
                    var1 = var7.id;
                    if (!(var2 === var1)) {
                        _fun85196_ip = 205;
                        continue _fun85196
                    }
                case 92:
                    var5 = var4.message;
                    var1 = _closure1_slot5;
                    var1 = var5 instanceof var1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 4;
                    var2 = var8[var2];
                    var6 = var5.bind(var6)(var2);
                    if (var1) {
                        _fun85196_ip = 150;
                        continue _fun85196
                    }
                case 131:
                    var2 = var6.updateServerMessage;
                    var1 = var4.message;
                    var5 = var2.bind(var6)(var1, var7);
                    _fun85196_ip = 167;
                    continue _fun85196;
                case 150:
                    var2 = var6.updateMessageRecord;
                    var1 = var4.message;
                    var5 = var2.bind(var6)(var1, var7);
                case 167:
                    var2 = var0.messages;
                    var1 = var2.set;
                    var0 = {};
                    var10 = var0;
                    var9 = var4;
                    var4 = copyDataProperties(var10, var9);
                    var4 = 'message';
                    var0[var4] = var5;
                    var0 = var1.bind(var2)(var3, var0);
                case 205:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var4 = function arg0() {
            var0 = this;
            var2 = var0.messages;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_previews/PreviewData.tsx';
    var3 = var4.bind(var5)(var3);
    var2.PreviewData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3101, 3947, 3972, 21, 2]);