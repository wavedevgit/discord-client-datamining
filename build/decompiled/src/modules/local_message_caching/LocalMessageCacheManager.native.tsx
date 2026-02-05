// modules/local_message_caching/LocalMessageCacheManager.native.tsx
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
        _fun99811: for (var _fun99811_ip = 0;;) switch (_fun99811_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun99811_ip = 46;
                    continue _fun99811
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun99811_ip = 55;
                    continue _fun99811
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun99811_ip = 345;
                    continue _fun99811
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun99811_ip = 323;
                    continue _fun99811
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun99811_ip = 283;
                    continue _fun99811
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun99811_ip = 270;
                    continue _fun99811
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
                    _fun99811_ip = 163;
                    continue _fun99811
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun99811_ip = 179;
                    continue _fun99811
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun99811_ip = 249;
                    continue _fun99811
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun99811_ip = 249;
                    continue _fun99811
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun99811_ip = 234;
                    continue _fun99811
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun99811_ip = 247;
                    continue _fun99811
                }
            case 234:
                var8 = _closure1_slot35;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun99811_ip = 265;
                continue _fun99811;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun99811_ip = 283;
                continue _fun99811;
            case 270:
                var6 = _closure1_slot35;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun99811_ip = 323;
                    continue _fun99811
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
                    _fun99811_ip = 330;
                    continue _fun99811
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun99812: for (var _fun99812_ip = 0;;) switch (_fun99812_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun99812_ip = 56;
                                continue _fun99812
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
                            _fun99812_ip = 67;
                            continue _fun99812;
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
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1() {
        _fun99813: for (var _fun99813_ip = 0;;) switch (_fun99813_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun99813_ip = 23;
                    continue _fun99813
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun99813_ip = 33;
                    continue _fun99813
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
                    _fun99813_ip = 70;
                    continue _fun99813
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun99813_ip = 55;
                    continue _fun99813
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        _fun99814: for (var _fun99814_ip = 0;;) switch (_fun99814_ip) {
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
                _fun99814_ip = 76;
                continue _fun99814;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot36 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot36 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var10 = 5;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageStates;
    var _closure1_slot15 = var3;
    var8 = 14;
    var3 = var5[var8];
    var9 = var4.bind(var0)(var3);
    var3 = var9.createLock;
    var3 = var3.bind(var9)();
    var _closure1_slot16 = var3;
    var3 = 15;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = var11.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var11
        }
    });
    var14 = 'LocalMessageCacheManager';
    var15 = var9;
    var3 = new var15[var11](var14, var13);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot17 = var3;
    var3 = 16;
    var9 = var5[var3];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var10 * var9;
    var _closure1_slot18 = var9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.DAY;
    var3 = var8 * var3;
    var _closure1_slot19 = var3;
    var3 = function() {
        _fun99817: for (var _fun99817_ip = 0;;) switch (_fun99817_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.Storage;
                var1 = var2.get;
                var0 = 'LocalMessageCacheManagerMessageCacheKey';
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun99817_ip = 55;
                    continue _fun99817
                }
            case 53:
                var0 = {};
            case 55:
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var3 = function arg0() {
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot21 = var3;
    var3 = function arg0, arg1() {
        _fun99819: for (var _fun99819_ip = 0;;) switch (_fun99819_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var9 = _closure1_slot17;
                var8 = var9.verbose;
                var6 = null;
                var0 = var6 == var5;
                var3 = undefined;
                var7 = undefined;
                if (var0) {
                    _fun99819_ip = 37;
                    continue _fun99819
                }
            case 32:
                var7 = var5.id;
            case 37:
                var0 = var6 == var5;
                var4 = undefined;
                if (var0) {
                    _fun99819_ip = 51;
                    continue _fun99819
                }
            case 46:
                var4 = var5.channel_id;
            case 51:
                var0 = '_writeMessage';
                var0 = var8.bind(var9)(var0, var7, var4);
                var0 = _closure1_slot20;
                var0 = var0.bind(var3)();
                if (!(var6 == var5)) {
                    _fun99819_ip = 82;
                    continue _fun99819
                }
            case 76:
                var4 = delete var0[var2];
                _fun99819_ip = 167;
                continue _fun99819;
            case 82:
                var4 = {};
                var12 = var4;
                var11 = var5;
                var7 = copyDataProperties(var12, var11);
                var5 = var5.content;
                var7 = var6 != var5;
                var6 = '';
                if (!var7) {
                    _fun99819_ip = 113;
                    continue _fun99819
                }
            case 110:
                var6 = var5;
            case 113:
                var5 = 'content';
                var4[var5] = var6;
                var0[var2] = var4;
                var7 = _closure1_slot17;
                var6 = var7.verbose;
                var4 = var0[var2];
                var5 = var4.id;
                var2 = var0[var2];
                var4 = var2.channel_id;
                var2 = '_writeMessage after write';
                var2 = var6.bind(var7)(var2, var5, var4);
            case 167:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'LocalMessageCacheManagerMessageCacheKey';
                var1 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var3 = function arg0() {
        _fun99820: for (var _fun99820_ip = 0;;) switch (_fun99820_ip) {
            case 0:
                var10 = arg0;
                var0 = _closure1_slot20;
                var1 = undefined;
                var3 = var0.bind(var1)();
                var0 = global;
                var2 = var0.Object;
                var0 = var2.entries;
                var8 = var0.bind(var2)(var3);
                var0 = var8.length;
                var7 = 0;
                var0 = var7 < var0;
                var6 = 2;
                var5 = 1;
                var4 = null;
                var3 = 0;
                if (!var0) {
                    _fun99820_ip = 117;
                    continue _fun99820
                }
            case 59:
                var2 = var8[var3];
                var0 = _closure1_slot10;
                var2 = var0.bind(var1)(var2, var6);
                var0 = var2[var7];
                var2 = var2[var5];
                var11 = var2.file;
                var12 = var4 == var11;
                var2 = undefined;
                if (var12) {
                    _fun99820_ip = 101;
                    continue _fun99820
                }
            case 96:
                var2 = var11.id;
            case 101:
                if (!(var2 !== var10)) {
                    _fun99820_ip = 119;
                    continue _fun99820
                }
            case 105:
                var3 = var3 + 1;
                var2 = var8.length;
                if (var3 < var2) {
                    _fun99820_ip = 59;
                    continue _fun99820
                }
            case 117:
                return var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot23 = var3;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.key;
        var _closure2_slot0 = var1;
        var1 = var2.message;
        var3 = var2.file;
        var _closure2_slot1 = var3;
        var2 = var2.sendMessageOptions;
        var _closure2_slot2 = var2;
        var2 = var1.content;
        var _closure2_slot3 = var2;
        var2 = var1.id;
        var _closure2_slot4 = var2;
        var2 = var1.channel_id;
        var _closure2_slot5 = var2;
        var2 = var1.tts;
        var _closure2_slot6 = var2;
        var2 = var1.nonce;
        var _closure2_slot7 = var2;
        var2 = var1.timestamp;
        var _closure2_slot8 = var2;
        var2 = var1.type;
        var _closure2_slot9 = var2;
        var2 = var1.flags;
        var _closure2_slot10 = var2;
        var1 = var1.state;
        var _closure2_slot11 = var1;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function() { // Environment: var0
            _fun99822: for (var _fun99822_ip = 0;;) switch (_fun99822_ip) {
                case 0:
                    var1 = _closure1_slot21;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var1.bind(var0)(var3);
                    var2 = _closure1_slot22;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1.content = var6;
                    var6 = _closure2_slot9;
                    var1.type = var6;
                    var6 = _closure2_slot11;
                    var8 = null;
                    if (!(var8 == var6)) {
                        _fun99822_ip = 65;
                        continue _fun99822
                    }
                case 53:
                    var4 = _closure1_slot15;
                    var4 = var4.SENDING;
                    _fun99822_ip = 69;
                    continue _fun99822;
                case 65:
                    var4 = _closure2_slot11;
                case 69:
                    var1.state = var4;
                    var4 = _closure2_slot5;
                    var1.channel_id = var4;
                    var4 = _closure2_slot6;
                    var1.tts = var4;
                    var4 = _closure2_slot4;
                    var1.id = var4;
                    var4 = _closure2_slot7;
                    var1.nonce = var4;
                    var4 = _closure2_slot8;
                    var6 = 'string';
                    var4 = typeof var4;
                    if (!(var6 !== var4)) {
                        _fun99822_ip = 138;
                        continue _fun99822
                    }
                case 122:
                    var6 = _closure2_slot8;
                    var4 = var6.toISOString;
                    var4 = var4.bind(var6)();
                    _fun99822_ip = 142;
                    continue _fun99822;
                case 138:
                    var4 = _closure2_slot8;
                case 142:
                    var1.timestamp = var4;
                    var4 = _closure2_slot10;
                    var1.flags = var4;
                    var4 = _closure2_slot1;
                    if (!(var8 == var4)) {
                        _fun99822_ip = 180;
                        continue _fun99822
                    }
                case 163:
                    var6 = var8 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun99822_ip = 178;
                        continue _fun99822
                    }
                case 172:
                    var4 = var5.file;
                case 178:
                    _fun99822_ip = 184;
                    continue _fun99822;
                case 180:
                    var4 = _closure2_slot1;
                case 184:
                    var1.file = var4;
                    var4 = _closure2_slot2;
                    if (!(var8 == var4)) {
                        _fun99822_ip = 214;
                        continue _fun99822
                    }
                case 197:
                    var6 = var8 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun99822_ip = 212;
                        continue _fun99822
                    }
                case 206:
                    var4 = var5.sendMessageOptions;
                case 212:
                    _fun99822_ip = 245;
                    continue _fun99822;
                case 214:
                    var5 = {};
                    var6 = _closure2_slot2;
                    if (!(var8 == var6)) {
                        _fun99822_ip = 228;
                        continue _fun99822
                    }
                case 224:
                    var6 = {};
                    _fun99822_ip = 232;
                    continue _fun99822;
                case 228:
                    var6 = _closure2_slot2;
                case 232:
                    var10 = var5;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var4 = var5;
                case 245:
                    var1.sendMessageOptions = var4;
                    var1 = var2.bind(var0)(var3, var1);
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot24 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot22;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = null;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot25 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function() { // Environment: var0
            _fun99826: for (var _fun99826_ip = 0;;) switch (_fun99826_ip) {
                case 0:
                    var9 = _closure2_slot0;
                    var2 = _closure1_slot20;
                    var0 = undefined;
                    var4 = var2.bind(var0)();
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var8 = var2.bind(var3)(var4);
                    var2 = var8.length;
                    var7 = 0;
                    var2 = var7 < var2;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    if (!var2) {
                        _fun99826_ip = 111;
                        continue _fun99826
                    }
                case 63:
                    var10 = var8[var4];
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var0)(var10, var6);
                    var3 = var2[var7];
                    var2 = var2[var5];
                    var2 = var2.id;
                    if (!(var2 !== var9)) {
                        _fun99826_ip = 111;
                        continue _fun99826
                    }
                case 94:
                    var4 = var4 + 1;
                    var2 = var8.length;
                    var2 = var4 < var2;
                    var3 = undefined;
                    if (var2) {
                        _fun99826_ip = 63;
                        continue _fun99826
                    }
                case 111:
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun99826_ip = 127;
                        continue _fun99826
                    }
                case 117:
                    var1 = _closure1_slot22;
                    var1 = var1.bind(var0)(var3, var2);
                case 127:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot26 = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function() { // Environment: var0
            _fun99828: for (var _fun99828_ip = 0;;) switch (_fun99828_ip) {
                case 0:
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun99828_ip = 64;
                        continue _fun99828
                    }
                case 27:
                    var3 = {};
                    var6 = var3;
                    var5 = var4;
                    var4 = copyDataProperties(var6, var5);
                    var5 = _closure2_slot1;
                    var6 = var3;
                    var4 = copyDataProperties(var6, var5);
                    var2 = _closure1_slot22;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1, var3);
                case 64:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot27 = var3;
    var3 = function() {
        var2 = _closure1_slot16;
        var1 = _closure1_slot20;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot28 = var3;
    var3 = function arg0, arg1() {
        _fun99830: for (var _fun99830_ip = 0;;) switch (_fun99830_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun99830_ip = 13;
                    continue _fun99830
                }
            case 9:
                var0 = false;
                return var0;
            case 13:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 18;
                var4 = var5[var1];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var4 = var4.bind(var2)();
                var1 = var5[var1];
                var1 = var6.bind(var2)(var1);
                var3 = var1.bind(var2)(var3);
                var1 = _closure1_slot0;
                var0 = 19;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.isWithinInterval;
                var0 = arg1;
                var0 = var1.bind(var2)(var4, var3, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var3;
    var3 = function arg0() {
        _fun99831: for (var _fun99831_ip = 0;;) switch (_fun99831_ip) {
            case 0:
                var4 = arg0;
                var9 = var4.channel_id;
                var11 = var4.content;
                var3 = var4.tts;
                var10 = var4.state;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 20;
                var5 = var7[var0];
                var0 = undefined;
                var8 = var6.bind(var0)(var5);
                var5 = {};
                var5.channelId = var9;
                var5.content = var11;
                var5.tts = var3;
                var3 = _closure1_slot15;
                var11 = var3.SEND_FAILED;
                var5.state = var11;
                var8 = var8.bind(var0)(var5);
                var _closure2_slot0 = var8;
                var5 = var4.timestamp;
                var8.timestamp = var5;
                var4 = var4.file;
                var _closure2_slot1 = var4;
                var5 = 21;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.receiveMessage;
                var5 = {};
                var3 = var3.SENDING;
                var3 = var10 === var3;
                var5.isHydratingExpiredPendingMessage = var3;
                var14 = true;
                var17 = var7;
                var16 = var9;
                var15 = var8;
                var13 = var5;
                var3 = var17[var6](var16, var15, var14, var13, var12);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun99831_ip = 208;
                    continue _fun99831
                }
            case 170:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 22;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.restoreFailedUpload;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 208:
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun99835: for (var _fun99835_ip = 0;;) switch (_fun99835_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun99835_ip = 204;
                            continue _fun99835
                        }
                    case 13:
                        var5 = var8.channel_id;
                        var4 = var8.file;
                        var7 = var8.sendMessageOptions;
                        var3 = _closure1_slot13;
                        var1 = var3.getChannel;
                        var6 = var1.bind(var3)(var5);
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun99835_ip = 199;
                            continue _fun99835
                        }
                    case 56:
                        var9 = var3 == var4;
                        var5 = undefined;
                        var1 = undefined;
                        if (var9) {
                            _fun99835_ip = 72;
                            continue _fun99835
                        }
                    case 67:
                        var1 = var4.items;
                    case 72:
                        var3 = var3 != var1;
                        var4 = undefined;
                        if (!var3) {
                            _fun99835_ip = 84;
                            continue _fun99835
                        }
                    case 81:
                        var4 = var1;
                    case 84:
                        var9 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var3 = 25;
                        var3 = var1[var3];
                        var9 = var9.bind(var5)(var3);
                        var3 = 24;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var9.bind(var5)(var3, var1);
                        SaveGenerator(address = 126);
                    case 124:
                        return var1;
                    case 126:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun99835_ip = 196;
                            continue _fun99835
                        }
                    case 132:
                        var3 = var1.default;
                        var9 = _closure1_slot11;
                        var2 = {};
                        var13 = var2;
                        var12 = var8;
                        var8 = copyDataProperties(var13, var12);
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var14 = var8;
                        var13 = var2;
                        var2 = new var14[var9](var13, var12);
                        var12 = var2 instanceof Object ? var2 : var8;
                        var14 = undefined;
                        var13 = var6;
                        var11 = var4;
                        var10 = var7;
                        var2 = var14[var3](var13, var12, var11, var10, var9);
                        var2 = true;
                        return var2;
                    case 196:
                        return var1;
                    case 199:
                        var1 = false;
                        return var1;
                    case 204:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot31 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun99839: for (var _fun99839_ip = 0;;) switch (_fun99839_ip) {
                    case 0:
                        StartGenerator();
                        var18 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun99839_ip = 457;
                            continue _fun99839
                        }
                    case 13:
                        var1 = _closure1_slot28;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 30);
                    case 28:
                        return var1;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun99839_ip = 454;
                            continue _fun99839
                        }
                    case 39:
                        var5 = _closure1_slot17;
                        var4 = var5.verbose;
                        var12 = global;
                        var6 = var12.Object;
                        var3 = var6.keys;
                        var3 = var3.bind(var6)(var1);
                        var8 = var3.length;
                        var3 = var12.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'rehydrateFailedMessages with ';
                        var3 = ' messagess';
                        var3 = var7.bind(var6)(var8, var3);
                        var3 = var4.bind(var5)(var3);
                        var15 = var1;
                        var10 = 'sending message with data ';
                        var9 = 'failed message with data ';
                        var8 = 'dropping stale message, timestamp ';
                        var7 = null;
                        var6 = undefined;
                        var5 = undefined;
                        for (var11 in var15)
                            case 144: {
                                case 156: var19 = var11;
                                var4 = var1[var19];
                                var3 = var4.channel_id;
                                if (var3 !== var18) {
                                    _fun99839_ip = 144;
                                    continue _fun99839
                                }
                                case 172: var3 = _closure1_slot25;
                                var3 = var3.bind(var2)(var19);
                                var20 = _closure1_slot14;
                                var19 = var20.getMessage;
                                var3 = var4.id;
                                var3 = var19.bind(var20)(var18, var3);
                                if (var7 != var3) {
                                    _fun99839_ip = 144;
                                    continue _fun99839
                                }
                                case 206: var20 = var4.timestamp;
                                var19 = var4.state;
                                var21 = _closure1_slot29;
                                var3 = _closure1_slot19;
                                var3 = var21.bind(var2)(var20, var3);
                                if (var3) {
                                    _fun99839_ip = 273;
                                    continue _fun99839
                                }
                                case 234: var22 = _closure1_slot17;
                                var21 = var22.verbose;
                                var3 = var12.HermesInternal;
                                var3 = var3.concat;
                                var3 = var3.bind(var8)(var20);
                                var3 = var21.bind(var22)(var3);
                                var6 = var20;
                                var5 = var19;
                                _fun99839_ip = 144;
                                continue _fun99839;
                                case 273: var3 = _closure1_slot15;
                                var3 = var3.SENDING;
                                if (!(var19 === var3)) {
                                    _fun99839_ip = 304;
                                    continue _fun99839
                                }
                                case 287: var21 = _closure1_slot29;
                                var3 = _closure1_slot18;
                                var3 = var21.bind(var2)(var20, var3);
                                if (var3) {
                                    _fun99839_ip = 372;
                                    continue _fun99839
                                }
                                case 304: var22 = _closure1_slot17;
                                var21 = var22.info;
                                var23 = var12.JSON;
                                var3 = var23.stringify;
                                var23 = var3.bind(var23)(var4);
                                var3 = var12.HermesInternal;
                                var3 = var3.concat;
                                var3 = var3.bind(var9)(var23);
                                var3 = var21.bind(var22)(var3);
                                var3 = _closure1_slot30;
                                var3 = var3.bind(var2)(var4);
                                var6 = var20;
                                var5 = var19;
                                _fun99839_ip = 144;
                                continue _fun99839;
                                case 372: var22 = _closure1_slot17;
                                var21 = var22.verbose;
                                var23 = var12.JSON;
                                var3 = var23.stringify;
                                var23 = var3.bind(var23)(var4);
                                var3 = var12.HermesInternal;
                                var3 = var3.concat;
                                var3 = var3.bind(var10)(var23);
                                var3 = var21.bind(var22)(var3);
                                var3 = _closure1_slot31;
                                var3 = var3.bind(var2)(var4);
                                SaveGenerator(address = 433);
                                case 431: return var3;
                                case 433: ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                var6 = var20;
                                var5 = var19;
                                if (!var4) {
                                    _fun99839_ip = 144;
                                    continue _fun99839
                                }
                                case 448: return var3;
                            }
                    case 451:
                        return var2;
                    case 454:
                        return var1;
                    case 457:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot32 = var3;
    var3 = 'loadedChannels';
    var3 = var7.bind(var0)(var3);
    var _closure1_slot33 = var3;
    var3 = 28;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun99842: for (var _fun99842_ip = 0;;) switch (_fun99842_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5, var4);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot36;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun99842_ip = 86;
                        continue _fun99842
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun99842_ip = 120;
                    continue _fun99842;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var8 = global;
                    var7 = var8.Object;
                    var6 = var7.defineProperty;
                    var5 = _closure1_slot33;
                    var4 = {};
                    var9 = true;
                    var4.writable = var9;
                    var8 = var8.Set;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = var9;
                    var8 = new var14[var8](var13);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4.value = var8;
                    var4 = var6.bind(var7)(var0, var5, var4);
                    var4 = _closure1_slot9;
                    var2 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun99844: for (var _fun99844_ip = 0;;) switch (_fun99844_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun99844_ip = 403;
                                        continue _fun99844
                                    }
                                case 12:
                                    var2 = undefined;
                                    var _closure5_slot0 = var2;
                                    var1 = _closure1_slot28;
                                    var1 = var1.bind(var2)();
                                    SaveGenerator(address = 33);
                                case 31:
                                    return var1;
                                case 33:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun99844_ip = 400;
                                        continue _fun99844
                                    }
                                case 42:
                                    var11 = function*(arg0) { // Original name: _loop, environment: var12
                                        var0 = function*(arg0) { // Original name: ?anon_0__loop, environment: var0
                                            _fun99846: for (var _fun99846_ip = 0;;) switch (_fun99846_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun99846_ip = 70;
                                                        continue _fun99846
                                                    }
                                                case 9:
                                                    var2 = arg0;
                                                    var _closure7_slot0 = var2;
                                                    var3 = _closure5_slot0;
                                                    var2 = _closure1_slot15;
                                                    var2 = var2.SENDING;
                                                    if (!(var3 === var2)) {
                                                        _fun99846_ip = 65;
                                                        continue _fun99846
                                                    }
                                                case 40:
                                                    var2 = global;
                                                    var4 = var2.setTimeout;
                                                    var3 = undefined;
                                                    var2 = function() { // Environment: var1
                                                        var2 = _closure1_slot1;
                                                        var1 = _closure1_slot2;
                                                        var0 = 26;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var3 = var2.bind(var0)(var1);
                                                        var2 = var3.fetchMessages;
                                                        var1 = {};
                                                        var4 = _closure7_slot0;
                                                        var1.channelId = var4;
                                                        var1 = var2.bind(var3)(var1);
                                                        return var0;
                                                    };
                                                    var1 = 0;
                                                    var1 = var4.bind(var3)(var2, var1);
                                                case 65:
                                                    var1 = undefined;
                                                    return var1;
                                                case 70:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var10 = global;
                                    var4 = var10.Object;
                                    var3 = var4.values;
                                    var9 = var3.bind(var4)(var1);
                                    var3 = var9.length;
                                    var8 = 0;
                                    var3 = var8 < var3;
                                    var7 = 'iterator is not an object';
                                    var6 = 'iterator.throw() did not return an object';
                                    var5 = 'throw';
                                    var4 = 'iterator.next() did not return an object';
                                    if (!var3) {
                                        _fun99844_ip = 397;
                                        continue _fun99844
                                    }
                                case 106:
                                    var13 = var9[var8];
                                    var3 = var13.channel_id;
                                    var13 = var13.state;
                                    _closure5_slot0 = var13;
                                    var13 = var11.bind(var2)(var3);
                                    var3 = var10.Symbol;
                                    var3 = var3.iterator;
                                    var3 = var13[var3];
                                    var14 = var3.bind(var13)();
                                    var22 = var14;
                                    var21 = var7;
                                    var3 = ensureObject(var22, var21);
                                    var19 = var14.next;
                                    var18 = undefined;
                                case 166:
                                    var13 = var18;
                                    var13 = var19.bind(var14)(var13);
                                    var22 = var13;
                                    var21 = var4;
                                    var15 = ensureObject(var22, var21);
                                    var3 = var13;
                                    var15 = var13.done;
                                    if (var15) {
                                        _fun99844_ip = 377;
                                        continue _fun99844
                                    }
                                case 198: // try_start_0
                                    var15 = generatorSetDelegated();
                                    SaveGenerator(address = 253);
                                case 204:
                                    return var13;
                                case 206: // try_end0 // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 15);
                                    var22 = var14;
                                    var21 = var5;
                                    var13 = getMethod(var22, var21);
                                    if (!(var13 !== var2)) {
                                        _fun99844_ip = 336;
                                        continue _fun99844
                                    }
                                case 222:
                                    var13 = var13.bind(var14)(var15);
                                    var22 = var13;
                                    var21 = var6;
                                    var15 = ensureObject(var22, var21);
                                    var15 = var13.done;
                                    if (var15) {
                                        _fun99844_ip = 331;
                                        continue _fun99844
                                    }
                                case 245:
                                    var15 = generatorSetDelegated();
                                    SaveGenerator(address = 253);
                                case 251:
                                    return var13;
                                case 253: // try_start_1
                                    ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 17);
                                    var18 = var15;
                                    var16 = var17;
                                    if (!var16) {
                                        _fun99844_ip = 166;
                                        continue _fun99844
                                    }
                                case 265:
                                    var18 = var15;
                                case 268: // try_end1
                                    var21 = 'return';
                                    var22 = var14;
                                    var20 = getMethod(var22, var21);
                                    if (!(var20 !== var2)) {
                                        _fun99844_ip = 328;
                                        continue _fun99844
                                    }
                                case 283:
                                    var16 = var18;
                                    var16 = var20.bind(var14)(var16);
                                    var21 = 'iterator.return() did not return an object';
                                    var22 = var16;
                                    var20 = ensureObject(var22, var21);
                                    var20 = var16.done;
                                    if (var20) {
                                        _fun99844_ip = 320;
                                        continue _fun99844
                                    }
                                case 312:
                                    var20 = generatorSetDelegated();
                                    SaveGenerator(address = 253);
                                case 318:
                                    return var16;
                                case 320:
                                    var16 = var16.value;
                                    return var16;
                                case 328:
                                    return var15;
                                case 331:
                                    var3 = var13;
                                    _fun99844_ip = 377;
                                    continue _fun99844;
                                case 336:
                                    var21 = 'return';
                                    var22 = var14;
                                    var13 = getMethod(var22, var21);
                                    if (!(var13 !== var2)) {
                                        _fun99844_ip = 365;
                                        continue _fun99844
                                    }
                                case 351:
                                    var22 = var13.bind(var14)();
                                    var21 = 'iterator.return() did not return an object';
                                    var13 = ensureObject(var22, var21);
                                case 365:
                                    var22 = 'yield* delegate must have a .throw() method';
                                    var13 = throwTypeError(var22);
                                    throw var2;
                                case 377:
                                    var3 = var3.value;
                                    var8 = var8 + 1;
                                    var3 = var9.length;
                                    if (var8 < var3) {
                                        _fun99844_ip = 106;
                                        continue _fun99844
                                    }
                                case 397:
                                    return var2;
                                case 400:
                                    return var1;
                                case 403:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var4.bind(var3)(var2);
                    var0.handlePostConnectionOpen = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.id;
                        var1 = _closure1_slot26;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.handleMessageDelete = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot16;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.Storage;
                            var1 = var2.remove;
                            var0 = 'LocalMessageCacheManagerMessageCacheKey';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.handleLogout = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun99851: for (var _fun99851_ip = 0;;) switch (_fun99851_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.message;
                                var3 = var0.sendMessageOptions;
                                var1 = var4.author;
                                var2 = null;
                                var5 = var2 == var1;
                                var0 = undefined;
                                var6 = undefined;
                                if (var5) {
                                    _fun99851_ip = 38;
                                    continue _fun99851
                                }
                            case 33:
                                var6 = var1.id;
                            case 38:
                                var7 = _closure1_slot12;
                                var5 = var7.getId;
                                var5 = var5.bind(var7)();
                                if (!(var6 === var5)) {
                                    _fun99851_ip = 190;
                                    continue _fun99851
                                }
                            case 62:
                                var5 = var4.nonce;
                                if (!(var2 == var5)) {
                                    _fun99851_ip = 77;
                                    continue _fun99851
                                }
                            case 72:
                                var5 = var4.id;
                            case 77:
                                var6 = var4.state;
                                var2 = _closure1_slot15;
                                var2 = var2.SENDING;
                                if (!(var6 !== var2)) {
                                    _fun99851_ip = 126;
                                    continue _fun99851
                                }
                            case 96:
                                var6 = var4.state;
                                var2 = _closure1_slot15;
                                var2 = var2.SEND_FAILED;
                                if (!(var6 !== var2)) {
                                    _fun99851_ip = 126;
                                    continue _fun99851
                                }
                            case 115:
                                var2 = _closure1_slot25;
                                var2 = var2.bind(var0)(var5);
                                _fun99851_ip = 190;
                                continue _fun99851;
                            case 126:
                                var7 = _closure1_slot8;
                                var2 = _closure3_slot0;
                                var6 = _closure1_slot33;
                                var2 = var7.bind(var0)(var2, var6);
                                var7 = var2[var6];
                                var6 = var7.add;
                                var2 = var4.channel_id;
                                var2 = var6.bind(var7)(var2);
                                var2 = _closure1_slot24;
                                var1 = {};
                                var1.key = var5;
                                var1.message = var4;
                                var1.sendMessageOptions = var3;
                                var1 = var2.bind(var0)(var1);
                            case 190:
                                return var0;
                        }
                    };
                    var0.handleMessageCreate = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.channelId;
                        var1 = _closure3_slot0;
                        var0 = var1.handleChannelLoaded;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLoadMessagesSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun99853: for (var _fun99853_ip = 0;;) switch (_fun99853_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.privateChannels;
                                var0 = var0.initialGuildChannels;
                                var5 = new Array(2);
                                var5[0] = var1;
                                var5[1] = var0;
                                var0 = var5.length;
                                var4 = 0;
                                var1 = var4 < var0;
                                var0 = undefined;
                                if (!var1) {
                                    _fun99853_ip = 126;
                                    continue _fun99853
                                }
                            case 49:
                                var6 = _closure1_slot34;
                                var1 = var5[var4];
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.bind(var0)();
                                var1 = var6.done;
                                if (var1) {
                                    _fun99853_ip = 114;
                                    continue _fun99853
                                }
                            case 74:
                                var1 = var6.value;
                                var9 = var1.id;
                                var8 = _closure3_slot0;
                                var1 = var8.handleChannelLoaded;
                                var1 = var1.bind(var8)(var9);
                                var8 = var7.bind(var0)();
                                var1 = var8.done;
                                var6 = var8;
                                if (!var1) {
                                    _fun99853_ip = 74;
                                    continue _fun99853
                                }
                            case 114:
                                var4 = var4 + 1;
                                var1 = var5.length;
                                if (var4 < var1) {
                                    _fun99853_ip = 49;
                                    continue _fun99853
                                }
                            case 126:
                                return var0;
                        }
                    };
                    var0.handleCacheLoaded = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun99856: for (var _fun99856_ip = 0;;) switch (_fun99856_ip) {
                                    case 0:
                                        StartGenerator();
                                        var3 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun99856_ip = 88;
                                            continue _fun99856
                                        }
                                    case 10:
                                        var6 = _closure1_slot8;
                                        var4 = _closure3_slot0;
                                        var5 = _closure1_slot33;
                                        var1 = undefined;
                                        var4 = var6.bind(var1)(var4, var5);
                                        var5 = var4[var5];
                                        var4 = var5.has;
                                        var4 = var4.bind(var5)(var3);
                                        if (var4) {
                                            _fun99856_ip = 85;
                                            continue _fun99856
                                        }
                                    case 53:
                                        var4 = var5.add;
                                        var4 = var4.bind(var5)(var3);
                                        var2 = _closure1_slot32;
                                        var2 = var2.bind(var1)(var3);
                                        SaveGenerator(address = 76);
                                    case 74:
                                        return var2;
                                    case 76:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                        if (!var3) {
                                            _fun99856_ip = 85;
                                            continue _fun99856
                                        }
                                    case 82:
                                        return var2;
                                    case 85:
                                        return var1;
                                    case 88:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var2 = var2.bind(var3)();
                    var0.handleChannelLoaded = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun99858: for (var _fun99858_ip = 0;;) switch (_fun99858_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.message;
                                var0 = var0.file;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun99858_ip = 64;
                                    continue _fun99858
                                }
                            case 20:
                                var4 = var3.nonce;
                                if (!(var1 == var4)) {
                                    _fun99858_ip = 35;
                                    continue _fun99858
                                }
                            case 30:
                                var4 = var3.id;
                            case 35:
                                var2 = _closure1_slot24;
                                var1 = {};
                                var1.key = var4;
                                var1.message = var3;
                                var1.file = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 64:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleFileUploadStart = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.file;
                        var _closure4_slot0 = var0;
                        var2 = _closure1_slot16;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            _fun99860: for (var _fun99860_ip = 0;;) switch (_fun99860_ip) {
                                case 0:
                                    var3 = _closure1_slot23;
                                    var0 = _closure4_slot0;
                                    var2 = var0.id;
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun99860_ip = 53;
                                        continue _fun99860
                                    }
                                case 32:
                                    var2 = _closure1_slot27;
                                    var1 = {};
                                    var4 = _closure4_slot0;
                                    var1.file = var4;
                                    var1 = var2.bind(var0)(var3, var1);
                                case 53:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.handleUploadProgress = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun99861: for (var _fun99861_ip = 0;;) switch (_fun99861_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.aborted;
                                var2 = var0.file;
                                var0 = undefined;
                                var _closure4_slot0 = var0;
                                if (!var3) {
                                    _fun99861_ip = 49;
                                    continue _fun99861
                                }
                            case 26:
                                _closure4_slot0 = var2;
                                var2 = _closure1_slot16;
                                var1 = function() { // Environment: var1
                                    _fun99862: for (var _fun99862_ip = 0;;) switch (_fun99862_ip) {
                                        case 0:
                                            var3 = _closure1_slot23;
                                            var0 = _closure4_slot0;
                                            var2 = var0.id;
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun99862_ip = 42;
                                                continue _fun99862
                                            }
                                        case 32:
                                            var1 = _closure1_slot22;
                                            var1 = var1.bind(var0)(var3, var2);
                                        case 42:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var0)(var1);
                            case 49:
                                return var0;
                        }
                    };
                    var0.handleUploadComplete = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.file;
                        var3 = var1.messageId;
                        var2 = _closure1_slot27;
                        var1 = {};
                        var1.file = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var0.handleRestoreFailedUpload = var2;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.messageId;
                        var2 = _closure1_slot27;
                        var1 = {};
                        var0 = _closure1_slot15;
                        var0 = var0.SEND_FAILED;
                        var1.state = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var0.handleTextMessageFailed = var1;
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
        var0 = '_terminate';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 22;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLogout;
            var5 = 'LOGOUT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessageCreate;
            var5 = 'MESSAGE_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleTextMessageFailed;
            var5 = 'MESSAGE_SEND_FAILED';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleFileUploadStart;
            var5 = 'UPLOAD_START';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessageDelete;
            var5 = 'MESSAGE_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRestoreFailedUpload;
            var5 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleUploadComplete;
            var5 = 'UPLOAD_COMPLETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleUploadProgress;
            var5 = 'UPLOAD_PROGRESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLoadMessagesSuccess;
            var5 = 'LOAD_MESSAGES_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleCacheLoaded;
            var5 = 'CACHE_LOADED';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_initialize';
        var4.key = var6;
        var5 = function() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot17;
            var4 = var5.verbose;
            var0 = 'cache manager initialize';
            var0 = var4.bind(var5)(var0);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 22;
            var7 = var6[var4];
            var0 = undefined;
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleLogout;
            var7 = 'LOGOUT';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleMessageCreate;
            var7 = 'MESSAGE_CREATE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleTextMessageFailed;
            var7 = 'MESSAGE_SEND_FAILED';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleFileUploadStart;
            var7 = 'UPLOAD_START';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleMessageDelete;
            var7 = 'MESSAGE_DELETE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleRestoreFailedUpload;
            var7 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleUploadComplete;
            var7 = 'UPLOAD_COMPLETE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var0)(var7);
            var9 = var10.subscribe;
            var8 = var3.handleUploadProgress;
            var7 = 'UPLOAD_PROGRESS';
            var7 = var9.bind(var10)(var7, var8);
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.subscribe;
            var4 = var3.handlePostConnectionOpen;
            var3 = 'POST_CONNECTION_OPEN';
            var3 = var5.bind(var6)(var3, var4);
            var2 = _closure1_slot9;
            var1 = function*() { // Environment: var1
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun99868: for (var _fun99868_ip = 0;;) switch (_fun99868_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun99868_ip = 432;
                                continue _fun99868
                            }
                        case 10:
                            var1 = _closure1_slot28;
                            var3 = undefined;
                            var1 = var1.bind(var3)();
                            SaveGenerator(address = 27);
                        case 25:
                            return var1;
                        case 27:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun99868_ip = 429;
                                continue _fun99868
                            }
                        case 36:
                            var6 = _closure1_slot17;
                            var4 = var6.verbose;
                            var16 = global;
                            var7 = var16.Object;
                            var2 = var7.keys;
                            var2 = var2.bind(var7)(var1);
                            var9 = var2.length;
                            var2 = var16.HermesInternal;
                            var8 = var2.concat;
                            var7 = 'initialized with ';
                            var2 = ' messages in local cache';
                            var2 = var8.bind(var7)(var9, var2);
                            var2 = var4.bind(var6)(var2);
                            var4 = var16.Object;
                            var2 = var4.values;
                            var15 = var2.bind(var4)(var1);
                            var2 = var15.length;
                            var14 = 0;
                            var2 = var14 < var2;
                            var13 = 'manually invoking handleChannelLoaded';
                            var12 = 'rehydrating cached messages ';
                            var11 = ' {ready: ';
                            var10 = ', cached: ';
                            var9 = '}';
                            var8 = 27;
                            var7 = null;
                            if (!var2) {
                                _fun99868_ip = 346;
                                continue _fun99868
                            }
                        case 174:
                            var2 = var15[var14];
                            var17 = var2.channel_id;
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var6 = var6.bind(var3)(var2);
                            var2 = var6.get;
                            var6 = var2.bind(var6)(var17);
                            if (!(var7 == var6)) {
                                _fun99868_ip = 228;
                                continue _fun99868
                            }
                        case 214:
                            var6 = {
                                'ready': false,
                                'cached': false
                            };
                        case 228:
                            var2 = var6.ready;
                            var22 = var6.cached;
                            var19 = _closure1_slot17;
                            var18 = var19.verbose;
                            var6 = var16.HermesInternal;
                            var6 = var6.concat;
                            var27 = var12;
                            var26 = var17;
                            var25 = var11;
                            var24 = var2;
                            var23 = var10;
                            var21 = var9;
                            var6 = var27[var6](var26, var25, var24, var23, var22, var21, var20);
                            var6 = var18.bind(var19)(var6);
                            if (!var2) {
                                _fun99868_ip = 331;
                                continue _fun99868
                            }
                        case 291:
                            var6 = _closure1_slot17;
                            var2 = var6.verbose;
                            var2 = var2.bind(var6)(var13);
                            var6 = _closure3_slot0;
                            var2 = var6.handleChannelLoaded;
                            var2 = var2.bind(var6)(var17);
                            SaveGenerator(address = 325);
                        case 323:
                            return var2;
                        case 325:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                            if (var6) {
                                _fun99868_ip = 426;
                                continue _fun99868
                            }
                        case 331:
                            var14 = var14 + 1;
                            var6 = var15.length;
                            if (var14 < var6) {
                                _fun99868_ip = 174;
                                continue _fun99868
                            }
                        case 346:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 22;
                            var8 = var7[var5];
                            var11 = var6.bind(var3)(var8);
                            var10 = var11.subscribe;
                            var4 = _closure3_slot0;
                            var9 = var4.handleLoadMessagesSuccess;
                            var8 = 'LOAD_MESSAGES_SUCCESS';
                            var8 = var10.bind(var11)(var8, var9);
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.subscribe;
                            var5 = var4.handleCacheLoaded;
                            var4 = 'CACHE_LOADED';
                            var4 = var6.bind(var7)(var4, var5);
                            return var3;
                        case 426:
                            return var2;
                        case 429:
                            return var1;
                        case 432:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            var1 = var1.bind(var0)();
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
    var15 = var3;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/local_message_caching/LocalMessageCacheManager.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 99, 100, 5, 57, 3101, 1216, 1372, 4249, 660, 13017, 3, 667, 587, 3045, 3132, 6563, 6546, 806, 10056, 9651, 1307, 8468, 4250, 4017, 2]);