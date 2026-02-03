// stores/views/SortedVoiceStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function() {
        _fun31276: for (var _fun31276_ip = 0;;) switch (_fun31276_ip) {
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
                _fun31276_ip = 74;
                continue _fun31276;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun31279: for (var _fun31279_ip = 0;;) switch (_fun31279_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun31279_ip = 46;
                    continue _fun31279
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun31279_ip = 55;
                    continue _fun31279
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun31279_ip = 343;
                    continue _fun31279
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun31279_ip = 323;
                    continue _fun31279
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun31279_ip = 283;
                    continue _fun31279
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun31279_ip = 270;
                    continue _fun31279
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
                    _fun31279_ip = 163;
                    continue _fun31279
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun31279_ip = 179;
                    continue _fun31279
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun31279_ip = 249;
                    continue _fun31279
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun31279_ip = 249;
                    continue _fun31279
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun31279_ip = 234;
                    continue _fun31279
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun31279_ip = 247;
                    continue _fun31279
                }
            case 234:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun31279_ip = 265;
                continue _fun31279;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun31279_ip = 283;
                continue _fun31279;
            case 270:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun31279_ip = 323;
                    continue _fun31279
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
                    _fun31279_ip = 330;
                    continue _fun31279
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun31280: for (var _fun31280_ip = 0;;) switch (_fun31280_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun31280_ip = 56;
                                continue _fun31280
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
                            _fun31280_ip = 67;
                            continue _fun31280;
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
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun31281: for (var _fun31281_ip = 0;;) switch (_fun31281_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun31281_ip = 23;
                    continue _fun31281
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun31281_ip = 33;
                    continue _fun31281
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
                    _fun31281_ip = 70;
                    continue _fun31281
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31281_ip = 55;
                    continue _fun31281
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun31282: for (var _fun31282_ip = 0;;) switch (_fun31282_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot16;
                var0 = var0[var3];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun31282_ip = 58;
                    continue _fun31282
                }
            case 20:
                var1 = _closure1_slot17;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var4;
                var5 = var3;
                var1 = new var6[var1](var5, var4);
                var1 = var1 instanceof Object ? var1 : var4;
                var2 = _closure1_slot16;
                var2[var3] = var1;
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot11;
        var2 = var3.getMember;
        var0 = arg1;
        var1 = var0.id;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var4 = function arg0, arg1, arg2() {
        _fun31284: for (var _fun31284_ip = 0;;) switch (_fun31284_ip) {
            case 0:
                var6 = arg1;
                var0 = {};
                var0.member = var6;
                var4 = _closure1_slot24;
                var5 = null;
                var7 = var5 == var6;
                var3 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun31284_ip = 36;
                    continue _fun31284
                }
            case 30:
                var2 = var6.nick;
            case 36:
                if (!(var5 == var2)) {
                    _fun31284_ip = 74;
                    continue _fun31284
                }
            case 40:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.getName;
                var1 = arg2;
                var2 = var5.bind(var6)(var1);
            case 74:
                var1 = arg0;
                var1 = var4.bind(var3)(var1, var2);
                var0.comparator = var1;
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var3 = function arg0, arg1() {
        _fun31285: for (var _fun31285_ip = 0;;) switch (_fun31285_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = var0.selfStream;
                var5 = '\x01';
                if (!var1) {
                    _fun31285_ip = 27;
                    continue _fun31285
                }
            case 21:
                var5 = '\x00';
            case 27:
                var1 = var2.toLowerCase;
                var8 = var1.bind(var2)();
                var6 = var0.userId;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var10 = '';
                var7 = '\x00';
                var9 = var5;
                var0 = var10[var2](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun31286: for (var _fun31286_ip = 0;;) switch (_fun31286_ip) {
            case 0:
                var8 = arg0;
                var11 = arg2;
                var4 = arg3;
                var2 = _closure1_slot12;
                var1 = var2.getUser;
                var2 = var1.bind(var2)(var11);
                var3 = null;
                var1 = var3 == var2;
                var7 = var2;
                if (!(var3 == var7)) {
                    _fun31286_ip = 111;
                    continue _fun31286
                }
            case 40:
                var6 = _closure1_slot8;
                var2 = {};
                var2.id = var11;
                var5 = '...';
                var2.username = var5;
                var10 = var11.slice;
                var9 = -5;
                var5 = -1;
                var5 = var10.bind(var11)(var9, var5);
                var2.discriminator = var5;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var5;
                var14 = var2;
                var2 = new var15[var6](var14, var13);
                var7 = var2 instanceof Object ? var2 : var5;
            case 111:
                var5 = _closure1_slot23;
                var6 = _closure1_slot22;
                var2 = undefined;
                var0 = arg1;
                var0 = var6.bind(var2)(var0, var7);
                var5 = var5.bind(var2)(var8, var0, var7);
                var6 = var5.member;
                var0 = {};
                var0.voiceState = var8;
                var0.user = var7;
                var0.member = var6;
                var5 = var5.comparator;
                var0.comparator = var5;
                var7 = var3 == var6;
                var5 = undefined;
                if (var7) {
                    _fun31286_ip = 185;
                    continue _fun31286
                }
            case 179:
                var5 = var6.nick;
            case 185:
                var0.nick = var5;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun31286_ip = 205;
                    continue _fun31286
                }
            case 199:
                var2 = var4.connectedOn;
            case 205:
                if (!(var3 == var2)) {
                    _fun31286_ip = 226;
                    continue _fun31286
                }
            case 209:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var2 = var3.bind(var4)();
            case 226:
                var0.connectedOn = var2;
                if (!var1) {
                    _fun31286_ip = 242;
                    continue _fun31286
                }
            case 234:
                var1 = true;
                var0._isPlaceholder = var1;
            case 242:
                return var0;
        }
    };
    var _closure1_slot25 = var1;
    var0 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.reduce;
        var2 = _closure1_slot16;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun31288: for (var _fun31288_ip = 0;;) switch (_fun31288_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var0 = var2.updateUsers;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31288_ip = 22;
                        continue _fun31288
                    }
                case 19:
                    var0 = var1;
                case 22:
                    return var0;
            }
        };
        var0 = false;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var2 = {};
        _closure1_slot16 = var2;
        var3 = _closure1_slot13;
        var2 = var3.getAllVoiceStates;
        var4 = var2.bind(var3)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 15;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var _closure3_slot0 = var4;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure2_slot0;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun31291: for (var _fun31291_ip = 0;;) switch (_fun31291_ip) {
                    case 0:
                        var2 = _closure1_slot21;
                        var4 = _closure3_slot0;
                        var3 = null;
                        if (!(var3 == var4)) {
                            _fun31291_ip = 26;
                            continue _fun31291
                        }
                    case 20:
                        var1 = _closure1_slot14;
                        _fun31291_ip = 30;
                        continue _fun31291;
                    case 26:
                        var1 = _closure3_slot0;
                    case 30:
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateVoiceState;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var6);
    var0 = 0;
    var6 = var9[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.ME;
    var _closure1_slot14 = var6;
    var11 = var5.Object;
    var6 = var11.freeze;
    var5 = new Array(0);
    var5 = var6.bind(var11)(var5);
    var _closure1_slot15 = var5;
    var6 = {};
    var _closure1_slot16 = var6;
    var6 = function() { // Environment: var7
        var3 = _closure1_slot7;
        var2 = function arg0() {
            var2 = this;
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = global;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2._pending = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.SecondaryIndexMap;
            var3 = var5.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var7 = function(arg0) { // Environment: var1
                _fun31294: for (var _fun31294_ip = 0;;) switch (_fun31294_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.voiceState;
                        var2 = var0.channelId;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun31294_ip = 26;
                            continue _fun31294
                        }
                    case 20:
                        var0 = new Array(0);
                        _fun31294_ip = 37;
                        continue _fun31294;
                    case 26:
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0 = var1;
                    case 37:
                        return var0;
                }
            };
            var6 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.comparator;
                return var0;
            };
            var8 = var3;
            var1 = new var8[var5](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._voiceStates = var1;
            var1 = arg0;
            var2.guildId = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateVoiceState';
        var0.key = var1;
        var1 = function arg0() {
            _fun31296: for (var _fun31296_ip = 0;;) switch (_fun31296_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0._pending;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun31296_ip = 314;
                        continue _fun31296
                    }
                case 21:
                    var6 = _closure1_slot13;
                    var5 = var6.getVoiceState;
                    var4 = var0.guildId;
                    var7 = var5.bind(var6)(var4, var2);
                    var5 = var0._voiceStates;
                    var4 = var5.get;
                    var6 = var4.bind(var5)(var2);
                    var5 = _closure1_slot12;
                    var4 = var5.getUser;
                    var5 = var4.bind(var5)(var2);
                    if (!(var3 != var7)) {
                        _fun31296_ip = 84;
                        continue _fun31296
                    }
                case 80:
                    if (!(var3 == var5)) {
                        _fun31296_ip = 108;
                        continue _fun31296
                    }
                case 84:
                    if (!(var3 != var6)) {
                        _fun31296_ip = 125;
                        continue _fun31296
                    }
                case 88:
                    var8 = var0._voiceStates;
                    var4 = var8.delete;
                    var4 = var4.bind(var8)(var2);
                    var4 = true;
                    return var4;
                case 108:
                    if (!(var3 != var6)) {
                        _fun31296_ip = 275;
                        continue _fun31296
                    }
                case 115:
                    var4 = var6.voiceState;
                    if (!(var4 === var7)) {
                        _fun31296_ip = 129;
                        continue _fun31296
                    }
                case 125:
                    var4 = false;
                    return var4;
                case 129:
                    var8 = _closure1_slot22;
                    var4 = var0.guildId;
                    var9 = undefined;
                    var10 = var8.bind(var9)(var4, var5);
                    var4 = var3 == var10;
                    var8 = undefined;
                    if (var4) {
                        _fun31296_ip = 161;
                        continue _fun31296
                    }
                case 155:
                    var8 = var10.nick;
                case 161:
                    if (!(var3 == var8)) {
                        _fun31296_ip = 196;
                        continue _fun31296
                    }
                case 165:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 12;
                    var3 = var11[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.getName;
                    var8 = var3.bind(var4)(var5);
                case 196:
                    var5 = var0._voiceStates;
                    var4 = var5.set;
                    var3 = {};
                    var14 = var3;
                    var13 = var6;
                    var6 = copyDataProperties(var14, var13);
                    var6 = 'member';
                    var3[var6] = var10;
                    var6 = _closure1_slot24;
                    var9 = var6.bind(var9)(var7, var8);
                    var6 = 'comparator';
                    var3[var6] = var9;
                    var6 = 'nick';
                    var3[var6] = var8;
                    var6 = 'voiceState';
                    var3[var6] = var7;
                    var3 = var4.bind(var5)(var2, var3);
                    var3 = true;
                    return var3;
                case 275:
                    var4 = var0._voiceStates;
                    var3 = var4.set;
                    var6 = _closure1_slot25;
                    var5 = var0.guildId;
                    var1 = undefined;
                    var1 = var6.bind(var1)(var7, var5, var2);
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = true;
                    return var1;
                case 314:
                    var1 = var0._pending;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateMember';
        var0.key = var5;
        var5 = function arg0() {
            _fun31297: for (var _fun31297_ip = 0;;) switch (_fun31297_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0._pending;
                    var7 = null;
                    if (!(var7 == var1)) {
                        _fun31297_ip = 262;
                        continue _fun31297
                    }
                case 21:
                    var3 = var0._voiceStates;
                    var1 = var3.get;
                    var8 = var1.bind(var3)(var2);
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var4 = var3.bind(var4)(var2);
                    if (!(var7 != var8)) {
                        _fun31297_ip = 160;
                        continue _fun31297
                    }
                case 59:
                    if (!(var7 != var4)) {
                        _fun31297_ip = 160;
                        continue _fun31297
                    }
                case 63:
                    var5 = _closure1_slot22;
                    var3 = var0.guildId;
                    var6 = undefined;
                    var5 = var5.bind(var6)(var3, var4);
                    var3 = var7 == var5;
                    var9 = undefined;
                    if (var3) {
                        _fun31297_ip = 95;
                        continue _fun31297
                    }
                case 89:
                    var9 = var5.nick;
                case 95:
                    var10 = var8.member;
                    var11 = var7 == var10;
                    var3 = undefined;
                    if (var11) {
                        _fun31297_ip = 116;
                        continue _fun31297
                    }
                case 110:
                    var3 = var10.nick;
                case 116:
                    if (!(var9 === var3)) {
                        _fun31297_ip = 164;
                        continue _fun31297
                    }
                case 120:
                    var3 = var7 == var5;
                    var9 = undefined;
                    if (var3) {
                        _fun31297_ip = 135;
                        continue _fun31297
                    }
                case 129:
                    var9 = var5.avatar;
                case 135:
                    var10 = var8.member;
                    var11 = var7 == var10;
                    var3 = undefined;
                    if (var11) {
                        _fun31297_ip = 156;
                        continue _fun31297
                    }
                case 150:
                    var3 = var10.avatar;
                case 156:
                    if (!(var9 === var3)) {
                        _fun31297_ip = 164;
                        continue _fun31297
                    }
                case 160:
                    var3 = false;
                    return var3;
                case 164:
                    var3 = _closure1_slot23;
                    var1 = var8.voiceState;
                    var1 = var3.bind(var6)(var1, var5, var4);
                    var9 = var1.comparator;
                    var4 = var0._voiceStates;
                    var3 = var4.set;
                    var1 = {};
                    var14 = var1;
                    var13 = var8;
                    var8 = copyDataProperties(var14, var13);
                    var8 = 'member';
                    var1[var8] = var5;
                    var8 = 'comparator';
                    var1[var8] = var9;
                    var7 = var7 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun31297_ip = 243;
                        continue _fun31297
                    }
                case 237:
                    var6 = var5.nick;
                case 243:
                    var5 = 'nick';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = true;
                    return var1;
                case 262:
                    var1 = var0._pending;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateUsers';
        var0.key = var5;
        var5 = function() {
            _fun31298: for (var _fun31298_ip = 0;;) switch (_fun31298_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = var2._pending;
                    var0 = null;
                    var0 = var0 == var3;
                    if (!var0) {
                        _fun31298_ip = 58;
                        continue _fun31298
                    }
                case 24:
                    var3 = var2._voiceStates;
                    var2 = var3.values;
                    var4 = var2.bind(var3)();
                    var3 = var4.reduce;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun31299: for (var _fun31299_ip = 0;;) switch (_fun31299_ip) {
                            case 0:
                                var3 = arg0;
                                var9 = arg1;
                                var2 = _closure1_slot12;
                                var1 = var2.getUser;
                                var0 = var9.user;
                                var0 = var0.id;
                                var1 = var1.bind(var2)(var0);
                                var2 = null;
                                var0 = var3;
                                if (!(var2 != var1)) {
                                    _fun31299_ip = 115;
                                    continue _fun31299
                                }
                            case 43:
                                var2 = var9.user;
                                var0 = var3;
                                if (!(var2 !== var1)) {
                                    _fun31299_ip = 115;
                                    continue _fun31299
                                }
                            case 55:
                                var5 = _closure3_slot0;
                                var4 = var5._voiceStates;
                                var3 = var4.set;
                                var2 = var1.id;
                                var8 = _closure1_slot25;
                                var13 = var9.voiceState;
                                var12 = var5.guildId;
                                var11 = var1.id;
                                var14 = undefined;
                                var10 = var9;
                                var1 = var14[var8](var13, var12, var11, var10, var9);
                                var1 = var3.bind(var4)(var2, var1);
                                var0 = true;
                            case 115:
                                return var0;
                        }
                    };
                    var1 = false;
                    var0 = var3.bind(var4)(var2, var1);
                case 58:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getUserIds';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.processPending;
            var1 = var1.bind(var0)();
            var1 = var0._voiceStates;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getVoiceStates';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.processPending;
            var1 = var1.bind(var0)();
            var1 = var0._voiceStates;
            var0 = var1.indexes;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getVoiceStatesForChannel';
        var0.key = var5;
        var5 = function arg0() {
            _fun31302: for (var _fun31302_ip = 0;;) switch (_fun31302_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.processPending;
                    var1 = var1.bind(var0)();
                    var2 = var0._voiceStates;
                    var1 = var2.values;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun31302_ip = 50;
                        continue _fun31302
                    }
                case 43:
                    var0 = _closure1_slot15;
                case 50:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'countVoiceStatesForChannel';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.processPending;
            var1 = var1.bind(var0)();
            var2 = var0._voiceStates;
            var1 = var2.size;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getVersion';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.processPending;
            var1 = var1.bind(var0)();
            var0 = var0._voiceStates;
            var0 = var0.version;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'processPending';
        var0.key = var5;
        var4 = function() {
            _fun31305: for (var _fun31305_ip = 0;;) switch (_fun31305_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var2 = var3._pending;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun31305_ip = 50;
                        continue _fun31305
                    }
                case 21:
                    var2 = var3._pending;
                    var1 = undefined;
                    var3._pending = var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.updateVoiceState;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var _closure1_slot17 = var6;
    var6 = 16;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var11 = var6.Store;
    var6 = function(arg0) { // Environment: var7
        var3 = function() {
            _fun31308: for (var _fun31308_ip = 0;;) switch (_fun31308_ip) {
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
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31308_ip = 69;
                        continue _fun31308
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31308_ip = 105;
                    continue _fun31308;
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
        var0 = function() {
            var4 = this;
            var2 = _closure1_slot27;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var8 = var4.waitFor;
            var13 = _closure1_slot9;
            var12 = _closure1_slot10;
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var5 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot26;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getVoiceStates';
        var4.key = var6;
        var6 = function arg0() {
            _fun31310: for (var _fun31310_ip = 0;;) switch (_fun31310_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot21;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun31310_ip = 20;
                        continue _fun31310
                    }
                case 16:
                    var2 = _closure1_slot14;
                case 20:
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    var0 = var1.getVoiceStates;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAllVoiceStates';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getVoiceStatesForChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun31312: for (var _fun31312_ip = 0;;) switch (_fun31312_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.getGuildId;
                    var1 = var1.bind(var0)();
                    var2 = var0.id;
                    var3 = _closure1_slot21;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun31312_ip = 35;
                        continue _fun31312
                    }
                case 31:
                    var1 = _closure1_slot14;
                case 35:
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.getVoiceStatesForChannel;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getVoiceStatesForChannelAlt';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31313: for (var _fun31313_ip = 0;;) switch (_fun31313_ip) {
                case 0:
                    var2 = arg1;
                    var1 = _closure1_slot21;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun31313_ip = 20;
                        continue _fun31313
                    }
                case 16:
                    var2 = _closure1_slot14;
                case 20:
                    var0 = undefined;
                    var2 = var1.bind(var0)(var2);
                    var1 = var2.getVoiceStatesForChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'countVoiceStatesForChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun31314: for (var _fun31314_ip = 0;;) switch (_fun31314_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot10;
                    var1 = var3.getChannel;
                    var3 = var1.bind(var3)(var2);
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun31314_ip = 68;
                        continue _fun31314
                    }
                case 26:
                    var1 = var3.getGuildId;
                    var1 = var1.bind(var3)();
                    var3 = _closure1_slot21;
                    if (!(var4 == var1)) {
                        _fun31314_ip = 48;
                        continue _fun31314
                    }
                case 44:
                    var1 = _closure1_slot14;
                case 48:
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.countVoiceStatesForChannel;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                case 68:
                    var0 = 0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getVoiceStateVersion';
        var4.key = var6;
        var5 = function arg0() {
            _fun31315: for (var _fun31315_ip = 0;;) switch (_fun31315_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot21;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun31315_ip = 20;
                        continue _fun31315
                    }
                case 16:
                    var2 = _closure1_slot14;
                case 20:
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    var0 = var1.getVersion;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var11 = var6.bind(var0)(var11);
    var6 = 'SortedVoiceStateStore';
    var11.displayName = var6;
    var6 = 17;
    var6 = var9[var6];
    var15 = var10.bind(var0)(var6);
    var6 = {};
    var12 = function() {
        var0 = {};
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var6.CONNECTION_OPEN = var12;
    var12 = function() {
        var1 = _closure1_slot27;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6.OVERLAY_INITIALIZE = var12;
    var12 = function arg0() {
        _fun31318: for (var _fun31318_ip = 0;;) switch (_fun31318_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var2 = _closure1_slot9;
                var0 = var2.getId;
                var3 = var0.bind(var2)();
                var5 = null;
                var0 = var5 != var3;
                if (!var0) {
                    _fun31318_ip = 64;
                    continue _fun31318
                }
            case 34:
                var2 = _closure1_slot21;
                if (!(var5 == var4)) {
                    _fun31318_ip = 46;
                    continue _fun31318
                }
            case 42:
                var4 = _closure1_slot14;
            case 46:
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var1 = var2.updateVoiceState;
                var0 = var1.bind(var2)(var3);
            case 64:
                return var0;
        }
    };
    var6.VOICE_CHANNEL_SELECT = var12;
    var12 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun31320: for (var _fun31320_ip = 0;;) switch (_fun31320_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var4 = var0.guildId;
                    var3 = var0.userId;
                    var2 = _closure1_slot21;
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun31320_ip = 33;
                        continue _fun31320
                    }
                case 29:
                    var4 = _closure1_slot14;
                case 33:
                    var0 = undefined;
                    var2 = var2.bind(var0)(var4);
                    var0 = var2.updateVoiceState;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun31320_ip = 57;
                        continue _fun31320
                    }
                case 54:
                    var0 = var1;
                case 57:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6.VOICE_STATE_UPDATES = var12;
    var12 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.user;
        var2 = _closure1_slot21;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var1 = var2.updateMember;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.GUILD_MEMBER_UPDATE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = _closure1_slot16;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var6.GUILD_CREATE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = _closure1_slot16;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var6.GUILD_DELETE = var12;
    var7 = function arg0() {
        _fun31324: for (var _fun31324_ip = 0;;) switch (_fun31324_ip) {
            case 0:
                var8 = arg0;
                var0 = global;
                var4 = var0.Set;
                var2 = _closure1_slot16;
                var1 = var8.guildId;
                var5 = var2[var1];
                var1 = null;
                var3 = var1 == var5;
                var6 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun31324_ip = 50;
                    continue _fun31324
                }
            case 40:
                var3 = var5.getUserIds;
                var2 = var3.bind(var5)();
            case 50:
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var14 = var2;
                var2 = new var15[var4](var14, var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var4 = var0.Set;
                var9 = var8.voiceStates;
                var3 = var1 == var9;
                var1 = undefined;
                if (var3) {
                    _fun31324_ip = 111;
                    continue _fun31324
                }
            case 94:
                var5 = var9.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.userId;
                    return var0;
                };
                var1 = var5.bind(var9)(var3);
            case 111:
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var14 = var1;
                var1 = new var15[var4](var14, var13);
                var9 = var1 instanceof Object ? var1 : var3;
                var4 = var0.Set;
                var14 = var8.removedVoiceStateUsers;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var1 = new var15[var4](var14, var13);
                var5 = var1 instanceof Object ? var1 : var3;
                var1 = _closure1_slot19;
                var4 = var0.Set;
                var0 = new Array(0);
                var12 = 0;
                var14 = var0;
                var13 = var2;
                var12 = arraySpread(var14, var13, var12);
                var14 = var0;
                var13 = var9;
                var3 = arraySpread(var14, var13, var12);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var14 = var0;
                var0 = new var15[var4](var14, var13);
                var0 = var0 instanceof Object ? var0 : var3;
                var9 = var1.bind(var6)(var0);
                var3 = var9.bind(var6)();
                var1 = var3.done;
                var4 = var3;
                var3 = false;
                var0 = false;
                if (var1) {
                    _fun31324_ip = 306;
                    continue _fun31324
                }
            case 249:
                var11 = var4.value;
                var10 = _closure1_slot21;
                var1 = var8.guildId;
                var10 = var10.bind(var6)(var1);
                var1 = var10.updateVoiceState;
                var10 = var1.bind(var10)(var11);
                if (var10) {
                    _fun31324_ip = 285;
                    continue _fun31324
                }
            case 282:
                var10 = var3;
            case 285:
                var11 = var9.bind(var6)();
                var1 = var11.done;
                var3 = var10;
                var4 = var11;
                var0 = var3;
                if (!var1) {
                    _fun31324_ip = 249;
                    continue _fun31324
                }
            case 306:
                var1 = _closure1_slot19;
                var4 = var1.bind(var6)(var2);
                var2 = var4.bind(var6)();
                var1 = var2.done;
                var3 = var0;
                var0 = var3;
                if (var1) {
                    _fun31324_ip = 409;
                    continue _fun31324
                }
            case 333:
                var11 = var2.value;
                var1 = var5.has;
                var1 = var1.bind(var5)(var11);
                var9 = var3;
                if (var1) {
                    _fun31324_ip = 388;
                    continue _fun31324
                }
            case 354:
                var10 = _closure1_slot21;
                var1 = var8.guildId;
                var10 = var10.bind(var6)(var1);
                var1 = var10.updateMember;
                var1 = var1.bind(var10)(var11);
                if (var1) {
                    _fun31324_ip = 385;
                    continue _fun31324
                }
            case 382:
                var1 = var3;
            case 385:
                var9 = var1;
            case 388:
                var10 = var4.bind(var6)();
                var1 = var10.done;
                var3 = var9;
                var2 = var10;
                var0 = var3;
                if (!var1) {
                    _fun31324_ip = 333;
                    continue _fun31324
                }
            case 409:
                return var0;
        }
    };
    var6.PASSIVE_UPDATE_V2 = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var16 = var7;
    var14 = var6;
    var6 = new var16[var11](var15, var14, var13);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 18;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/views/SortedVoiceStateStore.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.NO_VOICE_STATES = var5;
    var2.makeMemberAndComparator = var4;
    var2.getComparator = var3;
    var2.makeSortedVoiceState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1628, 1216, 1372, 1681, 1621, 3521, 660, 3236, 3087, 22, 21, 566, 806, 2]);