// stores/VoiceStateStore.tsx
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
        _fun31118: for (var _fun31118_ip = 0;;) switch (_fun31118_ip) {
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
                _fun31118_ip = 74;
                continue _fun31118;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun31121: for (var _fun31121_ip = 0;;) switch (_fun31121_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun31121_ip = 46;
                    continue _fun31121
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun31121_ip = 55;
                    continue _fun31121
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun31121_ip = 343;
                    continue _fun31121
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun31121_ip = 323;
                    continue _fun31121
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun31121_ip = 283;
                    continue _fun31121
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun31121_ip = 270;
                    continue _fun31121
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
                    _fun31121_ip = 163;
                    continue _fun31121
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun31121_ip = 179;
                    continue _fun31121
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun31121_ip = 249;
                    continue _fun31121
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun31121_ip = 249;
                    continue _fun31121
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun31121_ip = 234;
                    continue _fun31121
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun31121_ip = 247;
                    continue _fun31121
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun31121_ip = 265;
                continue _fun31121;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun31121_ip = 283;
                continue _fun31121;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun31121_ip = 323;
                    continue _fun31121
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
                    _fun31121_ip = 330;
                    continue _fun31121
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun31122: for (var _fun31122_ip = 0;;) switch (_fun31122_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun31122_ip = 56;
                                continue _fun31122
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
                            _fun31122_ip = 67;
                            continue _fun31122;
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
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun31123: for (var _fun31123_ip = 0;;) switch (_fun31123_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun31123_ip = 23;
                    continue _fun31123
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun31123_ip = 33;
                    continue _fun31123
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
                    _fun31123_ip = 70;
                    continue _fun31123
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31123_ip = 55;
                    continue _fun31123
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun31125: for (var _fun31125_ip = 0;;) switch (_fun31125_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var3[var2];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun31125_ip = 25;
                    continue _fun31125
                }
            case 16:
                var1 = {};
                var3[var2] = var1;
                var0 = var1;
            case 25:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun31126: for (var _fun31126_ip = 0;;) switch (_fun31126_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot16;
                var2 = _closure1_slot12;
                var4 = var3[var2];
                var2 = null;
                if (!(var2 == var4)) {
                    _fun31126_ip = 32;
                    continue _fun31126
                }
            case 30:
                var4 = {};
            case 32:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.each;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun31127: for (var _fun31127_ip = 0;;) switch (_fun31127_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.channelId;
                            var0 = _closure2_slot0;
                            if (!(var1 === var0)) {
                                _fun31127_ip = 49;
                                continue _fun31127
                            }
                        case 19:
                            var4 = _closure1_slot30;
                            var3 = _closure1_slot12;
                            var2 = undefined;
                            var1 = arg1;
                            var0 = function() { // Environment: var0
                                var0 = null;
                                return var0;
                            };
                            var0 = var4.bind(var2)(var3, var1, var0);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun31129: for (var _fun31129_ip = 0;;) switch (_fun31129_ip) {
            case 0:
                var2 = _closure1_slot18;
                var1 = var2.get;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun31129_ip = 54;
                    continue _fun31129
                }
            case 26:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var4 = var2;
                var1 = new var4[var1](var3);
                var0 = var1 instanceof Object ? var1 : var2;
            case 54:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun31130: for (var _fun31130_ip = 0;;) switch (_fun31130_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var3 = _closure1_slot27;
                var2 = _closure1_slot16;
                var6 = null;
                var1 = var7;
                if (!(var6 == var7)) {
                    _fun31130_ip = 30;
                    continue _fun31130
                }
            case 26:
                var1 = _closure1_slot12;
            case 30:
                var4 = undefined;
                var1 = var3.bind(var4)(var2, var1);
                var2 = var1[var5];
                var3 = arg2;
                var3 = var3.bind(var4)(var2);
                if (!(var2 !== var3)) {
                    _fun31130_ip = 493;
                    continue _fun31130
                }
            case 57:
                if (!(var6 != var2)) {
                    _fun31130_ip = 272;
                    continue _fun31130
                }
            case 64:
                var8 = delete var1[var5];
                var8 = var2.channelId;
                if (!(var6 != var8)) {
                    _fun31130_ip = 119;
                    continue _fun31130
                }
            case 77:
                var10 = _closure1_slot27;
                var9 = _closure1_slot19;
                var8 = var2.channelId;
                var8 = var10.bind(var4)(var9, var8);
                var8 = delete var8[var5];
                var9 = _closure1_slot20;
                var8 = var2.channelId;
                var8 = var10.bind(var4)(var9, var8);
                var8 = delete var8[var5];
            case 119:
                var8 = var2.sessionId;
                if (!(var6 != var8)) {
                    _fun31130_ip = 153;
                    continue _fun31130
                }
            case 129:
                var9 = _closure1_slot27;
                var8 = _closure1_slot21;
                var9 = var9.bind(var4)(var8, var5);
                var8 = var2.sessionId;
                var8 = delete var9[var8];
            case 153:
                var9 = var7;
                if (!(var6 == var7)) {
                    _fun31130_ip = 164;
                    continue _fun31130
                }
            case 160:
                var9 = _closure1_slot12;
            case 164:
                var8 = _closure1_slot29;
                var11 = var8.bind(var4)(var9);
                var8 = var11.has;
                var8 = var8.bind(var11)(var5);
                var10 = var9;
                if (!var8) {
                    _fun31130_ip = 272;
                    continue _fun31130
                }
            case 189:
                var8 = global;
                var8 = var8.Set;
                var9 = var8.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = var9;
                var13 = var11;
                var8 = new var14[var8](var13, var12);
                var11 = var8 instanceof Object ? var8 : var9;
                var8 = var11.delete;
                var8 = var8.bind(var11)(var5);
                var9 = var11.size;
                var8 = 0;
                if (!(var8 !== var9)) {
                    _fun31130_ip = 258;
                    continue _fun31130
                }
            case 241:
                var9 = _closure1_slot18;
                var8 = var9.set;
                var8 = var8.bind(var9)(var10, var11);
                _fun31130_ip = 272;
                continue _fun31130;
            case 258:
                var9 = _closure1_slot18;
                var8 = var9.delete;
                var8 = var8.bind(var9)(var10);
            case 272:
                if (!(var6 != var3)) {
                    _fun31130_ip = 473;
                    continue _fun31130
                }
            case 279:
                var1[var5] = var3;
                var1 = var3.channelId;
                if (!(var6 != var1)) {
                    _fun31130_ip = 439;
                    continue _fun31130
                }
            case 295:
                var9 = _closure1_slot27;
                var8 = _closure1_slot19;
                var1 = var3.channelId;
                var1 = var9.bind(var4)(var8, var1);
                var1[var5] = var3;
                var1 = var3.selfVideo;
                if (!var1) {
                    _fun31130_ip = 439;
                    continue _fun31130
                }
            case 327:
                var9 = _closure1_slot27;
                var8 = _closure1_slot20;
                var1 = var3.channelId;
                var1 = var9.bind(var4)(var8, var1);
                var1[var5] = var3;
                if (!(var6 == var7)) {
                    _fun31130_ip = 358;
                    continue _fun31130
                }
            case 354:
                var7 = _closure1_slot12;
            case 358:
                var1 = _closure1_slot29;
                var8 = var1.bind(var4)(var7);
                var1 = var8.has;
                var1 = var1.bind(var8)(var5);
                var9 = var7;
                if (var1) {
                    _fun31130_ip = 439;
                    continue _fun31130
                }
            case 383:
                var1 = global;
                var1 = var1.Set;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var14 = var7;
                var13 = var8;
                var1 = new var14[var1](var13, var12);
                var8 = var1 instanceof Object ? var1 : var7;
                var1 = var8.add;
                var1 = var1.bind(var8)(var5);
                var7 = _closure1_slot18;
                var1 = var7.set;
                var1 = var1.bind(var7)(var9, var8);
            case 439:
                var1 = var3.sessionId;
                if (!(var6 != var1)) {
                    _fun31130_ip = 473;
                    continue _fun31130
                }
            case 449:
                var1 = _closure1_slot27;
                var0 = _closure1_slot21;
                var1 = var1.bind(var4)(var0, var5);
                var0 = var3.sessionId;
                var1[var0] = var3;
            case 473:
                var0 = new Array(3);
                var1 = true;
                var0[0] = var1;
                var0[1] = var3;
                var0[2] = var2;
                _fun31130_ip = 514;
                continue _fun31130;
            case 493:
                var1 = new Array(3);
                var4 = false;
                var1[0] = var4;
                var1[1] = var3;
                var1[2] = var2;
                var0 = var1;
            case 514:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot30;
        var3 = var1.userId;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun31132: for (var _fun31132_ip = 0;;) switch (_fun31132_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot0;
                    var2 = var0.channelId;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun31132_ip = 207;
                        continue _fun31132
                    }
                case 24:
                    var3 = {};
                    var1 = _closure2_slot0;
                    var2 = var1.channelId;
                    var3.channelId = var2;
                    var2 = var1.deaf;
                    var3.deaf = var2;
                    var2 = var1.mute;
                    var3.mute = var2;
                    var2 = var1.requestToSpeakTimestamp;
                    var3.requestToSpeakTimestamp = var2;
                    var2 = var1.selfDeaf;
                    var3.selfDeaf = var2;
                    var2 = var1.selfMute;
                    var3.selfMute = var2;
                    var2 = var1.selfStream;
                    var3.selfStream = var2;
                    var2 = var1.selfVideo;
                    var3.selfVideo = var2;
                    var2 = var1.sessionId;
                    var3.sessionId = var2;
                    var2 = var1.suppress;
                    var3.suppress = var2;
                    var2 = var1.userId;
                    var3.userId = var2;
                    var1 = var1.discoverable;
                    var3.discoverable = var1;
                    if (!(var0 == var4)) {
                        _fun31132_ip = 194;
                        continue _fun31132
                    }
                case 162:
                    var1 = _closure1_slot11;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var5 = var3;
                    var1 = new var6[var1](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    _fun31132_ip = 205;
                    continue _fun31132;
                case 194:
                    var2 = var4.merge;
                    var1 = var2.bind(var4)(var3);
                case 205:
                    return var1;
                case 207:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var _closure1_slot31 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.guild;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 9;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.forEach;
        var7 = _closure1_slot16;
        var4 = var1.id;
        var4 = var7[var4];
        var3 = function(arg0) { // Environment: var3
            var4 = _closure1_slot30;
            var0 = _closure2_slot0;
            var3 = var0.id;
            var0 = arg0;
            var2 = var0.userId;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var0 = null;
                return var0;
            };
            var1 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var3 = var5.bind(var6)(var4, var3);
        var2 = _closure1_slot16;
        var1 = var1.id;
        var1 = delete var2[var1];
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var7 = 0;
    var9 = var5[var7];
    var0 = undefined;
    var9 = var6.bind(var0)(var9);
    var _closure1_slot5 = var9;
    var9 = 1;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var9 = 2;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 3;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot10 = var9;
    var9 = 6;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ME;
    var _closure1_slot12 = var9;
    var9 = 8;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.VoicePlatforms;
    var _closure1_slot13 = var9;
    var _closure1_slot14 = var7;
    var _closure1_slot15 = var7;
    var7 = {};
    var _closure1_slot16 = var7;
    var7 = var1.Set;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot17 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot18 = var1;
    var1 = {};
    var _closure1_slot19 = var1;
    var1 = {};
    var _closure1_slot20 = var1;
    var1 = {};
    var _closure1_slot21 = var1;
    var1 = {};
    var _closure1_slot22 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun31137: for (var _fun31137_ip = 0;;) switch (_fun31137_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31137_ip = 69;
                        continue _fun31137
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31137_ip = 105;
                    continue _fun31137;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
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
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'getAllVoiceStates';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'getVoiceStateVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getVoiceStates';
        var4.key = var6;
        var6 = function arg0() {
            _fun31140: for (var _fun31140_ip = 0;;) switch (_fun31140_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot27;
                    var1 = _closure1_slot16;
                    var4 = null;
                    if (!(var4 == var3)) {
                        _fun31140_ip = 24;
                        continue _fun31140
                    }
                case 20:
                    var3 = _closure1_slot12;
                case 24:
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getVoiceStatesForChannel';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot27;
            var2 = _closure1_slot19;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getVideoVoiceStatesForChannel';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot27;
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getVoiceState';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var1 = var2.getVoiceStates;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = arg1;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getDiscoverableVoiceState';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31144: for (var _fun31144_ip = 0;;) switch (_fun31144_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getVoiceState;
                    var1 = arg0;
                    var0 = arg1;
                    var1 = var2.bind(var3)(var1, var0);
                    var4 = null;
                    var2 = var4 == var1;
                    var0 = null;
                    if (var2) {
                        _fun31144_ip = 49;
                        continue _fun31144
                    }
                case 32:
                    var3 = var1.discoverable;
                    var2 = false;
                    var0 = null;
                    if (!(var2 !== var3)) {
                        _fun31144_ip = 49;
                        continue _fun31144
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getVoiceStateForChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun31145: for (var _fun31145_ip = 0;;) switch (_fun31145_ip) {
                case 0:
                    var2 = arguments[1];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun31145_ip = 16;
                        continue _fun31145
                    }
                case 9:
                    var2 = _closure1_slot3;
                case 16:
                    var4 = _closure1_slot27;
                    var3 = _closure1_slot19;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var3, var1);
                    var3 = null;
                    var3 = var3 == var1;
                    var0 = undefined;
                    if (var3) {
                        _fun31145_ip = 51;
                        continue _fun31145
                    }
                case 47:
                    var0 = var1[var2];
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getVoiceStateForUser';
        var4.key = var6;
        var6 = function arg0() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var5 = _closure1_slot27;
            var4 = _closure1_slot21;
            var3 = undefined;
            var0 = arg0;
            var0 = var5.bind(var3)(var4, var0);
            var1 = var1.bind(var2)(var0);
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getDiscoverableVoiceStateForUser';
        var4.key = var6;
        var6 = function arg0() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var5 = _closure1_slot27;
            var4 = _closure1_slot21;
            var3 = undefined;
            var0 = arg0;
            var0 = var5.bind(var3)(var4, var0);
            var2 = var1.bind(var2)(var0);
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.discoverable;
                var0 = false;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getVoiceStateForSession';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31149: for (var _fun31149_ip = 0;;) switch (_fun31149_ip) {
                case 0:
                    var3 = arg1;
                    var4 = null;
                    var1 = var4 != var3;
                    var0 = null;
                    if (!var1) {
                        _fun31149_ip = 50;
                        continue _fun31149
                    }
                case 14:
                    var6 = _closure1_slot27;
                    var5 = _closure1_slot21;
                    var1 = undefined;
                    var2 = arg0;
                    var2 = var6.bind(var1)(var5, var2);
                    var4 = var4 == var2;
                    if (var4) {
                        _fun31149_ip = 47;
                        continue _fun31149
                    }
                case 43:
                    var1 = var2[var3];
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getUserVoiceChannelId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31150: for (var _fun31150_ip = 0;;) switch (_fun31150_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getVoiceState;
                    var1 = arg0;
                    var0 = arg1;
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun31150_ip = 37;
                        continue _fun31150
                    }
                case 32:
                    var0 = var1.channelId;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getCurrentClientVoiceChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun31151: for (var _fun31151_ip = 0;;) switch (_fun31151_ip) {
                case 0:
                    var4 = this;
                    var3 = var4.getVoiceState;
                    var1 = _closure1_slot3;
                    var0 = arg0;
                    var1 = var3.bind(var4)(var0, var1);
                    var4 = null;
                    var3 = var4 != var1;
                    var0 = null;
                    if (!var3) {
                        _fun31151_ip = 70;
                        continue _fun31151
                    }
                case 36:
                    var3 = _closure1_slot4;
                    var3 = var4 != var3;
                    var0 = null;
                    if (!var3) {
                        _fun31151_ip = 70;
                        continue _fun31151
                    }
                case 49:
                    var3 = var1.sessionId;
                    var2 = _closure1_slot4;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun31151_ip = 70;
                        continue _fun31151
                    }
                case 65:
                    var0 = var1.channelId;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getUsersWithVideo';
        var4.key = var6;
        var6 = function arg0() {
            _fun31152: for (var _fun31152_ip = 0;;) switch (_fun31152_ip) {
                case 0:
                    var3 = _closure1_slot18;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun31152_ip = 30;
                        continue _fun31152
                    }
                case 26:
                    var0 = _closure1_slot17;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'isCurrentClientInVoiceChannel';
        var4.key = var6;
        var6 = function() {
            _fun31153: for (var _fun31153_ip = 0;;) switch (_fun31153_ip) {
                case 0:
                    var0 = _closure1_slot4;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun31153_ip = 49;
                        continue _fun31153
                    }
                case 16:
                    var4 = _closure1_slot21;
                    var1 = _closure1_slot3;
                    var4 = var4[var1];
                    var5 = var2 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun31153_ip = 45;
                        continue _fun31153
                    }
                case 37:
                    var3 = _closure1_slot4;
                    var1 = var4[var3];
                case 45:
                    var0 = var2 != var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isInChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun31154: for (var _fun31154_ip = 0;;) switch (_fun31154_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun31154_ip = 22;
                        continue _fun31154
                    }
                case 15:
                    var2 = _closure1_slot3;
                case 22:
                    var5 = null;
                    if (!(var5 != var3)) {
                        _fun31154_ip = 94;
                        continue _fun31154
                    }
                case 28:
                    var0 = var1.getVoiceStateForChannel;
                    var4 = var0.bind(var1)(var3, var2);
                    var0 = var5 != var4;
                    if (!var0) {
                        _fun31154_ip = 92;
                        continue _fun31154
                    }
                case 47:
                    var1 = _closure1_slot3;
                    var1 = var2 !== var1;
                    if (var1) {
                        _fun31154_ip = 89;
                        continue _fun31154
                    }
                case 61:
                    var2 = _closure1_slot4;
                    var2 = var5 != var2;
                    if (!var2) {
                        _fun31154_ip = 86;
                        continue _fun31154
                    }
                case 72:
                    var4 = var4.sessionId;
                    var3 = _closure1_slot4;
                    var2 = var4 === var3;
                case 86:
                    var1 = var2;
                case 89:
                    var0 = var1;
                case 92:
                    return var0;
                case 94:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'hasVideo';
        var4.key = var6;
        var6 = function arg0() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var5 = _closure1_slot27;
            var4 = _closure1_slot20;
            var3 = undefined;
            var0 = arg0;
            var0 = var5.bind(var3)(var4, var0);
            var0 = var1.bind(var2)(var0);
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getVoicePlatformForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31156: for (var _fun31156_ip = 0;;) switch (_fun31156_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var0 = _closure1_slot4;
                    var6 = null;
                    var0 = var6 != var0;
                    if (!var0) {
                        _fun31156_ip = 68;
                        continue _fun31156
                    }
                case 22:
                    var3 = _closure1_slot21;
                    var1 = _closure1_slot3;
                    var8 = var3[var1];
                    var3 = var6 == var8;
                    var1 = undefined;
                    if (var3) {
                        _fun31156_ip = 65;
                        continue _fun31156
                    }
                case 43:
                    var3 = _closure1_slot4;
                    var3 = var8[var3];
                    var6 = var6 == var3;
                    var1 = undefined;
                    if (var6) {
                        _fun31156_ip = 65;
                        continue _fun31156
                    }
                case 60:
                    var1 = var3.channelId;
                case 65:
                    var0 = var1;
                case 68:
                    var1 = _closure1_slot3;
                    if (!(var4 === var1)) {
                        _fun31156_ip = 80;
                        continue _fun31156
                    }
                case 76:
                    if (!(var5 !== var0)) {
                        _fun31156_ip = 102;
                        continue _fun31156
                    }
                case 80:
                    var1 = _closure1_slot22;
                    var3 = _closure1_slot26;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var4, var5);
                    var0 = var1[var0];
                    _fun31156_ip = 158;
                    continue _fun31156;
                case 102:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = var3.isMetaQuest;
                    var1 = var1.bind(var3)();
                    var2 = _closure1_slot13;
                    if (var1) {
                        _fun31156_ip = 149;
                        continue _fun31156
                    }
                case 141:
                    var1 = var2.MOBILE;
                    _fun31156_ip = 155;
                    continue _fun31156;
                case 149:
                    var1 = var2.QUEST;
                case 155:
                    var0 = var1;
                case 158:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'userHasBeenMovedVersion';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var5;
        var0[18] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VoiceStateStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        _fun31158: for (var _fun31158_ip = 0;;) switch (_fun31158_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.user;
                var2 = var0.sessionId;
                var4 = _closure1_slot3;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun31158_ip = 43;
                    continue _fun31158
                }
            case 30:
                var5 = _closure1_slot3;
                var4 = var3.id;
                var0 = var5 !== var4;
            case 43:
                if (!var0) {
                    _fun31158_ip = 84;
                    continue _fun31158
                }
            case 46:
                var4 = {};
                _closure1_slot16 = var4;
                var4 = {};
                _closure1_slot19 = var4;
                var4 = {};
                _closure1_slot21 = var4;
                var4 = {};
                _closure1_slot20 = var4;
                var5 = _closure1_slot18;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
            case 84:
                var3 = var3.id;
                var _closure1_slot3 = var3;
                var _closure1_slot4 = var2;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function() {
        var1 = {};
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot19 = var1;
        var1 = {};
        _closure1_slot21 = var1;
        var1 = {};
        _closure1_slot20 = var1;
        var1 = _closure1_slot18;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var9 = function arg0() {
        _fun31160: for (var _fun31160_ip = 0;;) switch (_fun31160_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.voiceStates;
                var3 = var0.user;
                var2 = var0.sessionId;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var4 = {};
                _closure1_slot16 = var4;
                var4 = {};
                _closure1_slot19 = var4;
                var4 = {};
                _closure1_slot21 = var4;
                var4 = {};
                _closure1_slot20 = var4;
                var10 = global;
                var5 = var10.Object;
                var4 = var5.entries;
                var9 = var4.bind(var5)(var6);
                var4 = var9.length;
                var8 = 0;
                var4 = var8 < var4;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if (!var4) {
                    _fun31160_ip = 217;
                    continue _fun31160
                }
            case 100:
                var12 = var9[var5];
                var4 = _closure1_slot10;
                var4 = var4.bind(var0)(var12, var7);
                var12 = var4[var8];
                _closure2_slot0 = var12;
                var13 = var4[var6];
                var14 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot30;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot11;
                        var3 = _closure3_slot0;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var12 = var10.Object;
                var4 = var12.entries;
                var13 = var4.bind(var12)(var13);
                var4 = var13.length;
                var4 = var8 < var4;
                var12 = 0;
                if (!var4) {
                    _fun31160_ip = 205;
                    continue _fun31160
                }
            case 162:
                var15 = var13[var12];
                var4 = _closure1_slot10;
                var4 = var4.bind(var0)(var15, var7);
                var15 = var4[var8];
                _closure2_slot1 = var15;
                var4 = var4[var6];
                var4 = var14.bind(var0)(var4);
                var12 = var12 + 1;
                var4 = var13.length;
                if (var12 < var4) {
                    _fun31160_ip = 162;
                    continue _fun31160
                }
            case 205:
                var5 = var5 + 1;
                var4 = var9.length;
                if (var5 < var4) {
                    _fun31160_ip = 100;
                    continue _fun31160
                }
            case 217:
                var3 = var3.id;
                _closure1_slot3 = var3;
                _closure1_slot4 = var2;
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var5 = var0.guildId;
        var0 = var0.channelId;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot30;
        var2 = _closure1_slot3;
        var3 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun31164: for (var _fun31164_ip = 0;;) switch (_fun31164_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    var1 = var0 == var4;
                    var0 = undefined;
                    if (var1) {
                        _fun31164_ip = 36;
                        continue _fun31164
                    }
                case 14:
                    var3 = var4.set;
                    var2 = _closure2_slot0;
                    var1 = 'channelId';
                    var0 = var3.bind(var4)(var1, var2);
                case 36:
                    return var0;
            }
        };
        var2 = var4.bind(var3)(var5, var2, var1);
        var1 = _closure1_slot10;
        var0 = 1;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var0 = var1[var0];
        return var0;
    };
    var1.VOICE_CHANNEL_SELECT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun31166: for (var _fun31166_ip = 0;;) switch (_fun31166_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var4 = _closure1_slot31;
                    var3 = var1.guildId;
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3, var1);
                    var4 = _closure1_slot10;
                    var3 = 3;
                    var7 = var4.bind(var6)(var5, var3);
                    var3 = 0;
                    var6 = var7[var3];
                    var3 = 1;
                    var4 = var7[var3];
                    var5 = 2;
                    var5 = var7[var5];
                    if (!var6) {
                        _fun31166_ip = 139;
                        continue _fun31166
                    }
                case 62:
                    var6 = var1.sessionId;
                    var1 = _closure1_slot4;
                    var1 = var6 === var1;
                    if (!var1) {
                        _fun31166_ip = 85;
                        continue _fun31166
                    }
                case 79:
                    var6 = null;
                    var1 = var6 != var4;
                case 85:
                    if (!var1) {
                        _fun31166_ip = 94;
                        continue _fun31166
                    }
                case 88:
                    var6 = null;
                    var1 = var6 != var5;
                case 94:
                    if (!var1) {
                        _fun31166_ip = 111;
                        continue _fun31166
                    }
                case 97:
                    var5 = var5.channelId;
                    var4 = var4.channelId;
                    var1 = var5 !== var4;
                case 111:
                    if (!var1) {
                        _fun31166_ip = 126;
                        continue _fun31166
                    }
                case 114:
                    var1 = _closure1_slot14;
                    var1 = var1 + var3;
                    _closure1_slot14 = var1;
                case 126:
                    var1 = _closure1_slot15;
                    var1 = var1 + 1;
                    _closure1_slot15 = var1;
                    var0 = true;
                case 139:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var9;
    var1.GUILD_DELETE = var8;
    var1.GUILD_CREATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot28;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CALL_DELETE = var8;
    var8 = function arg0() {
        _fun31169: for (var _fun31169_ip = 0;;) switch (_fun31169_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot24;
                var0 = var7.voiceStates;
                var6 = undefined;
                var10 = var1.bind(var6)(var0);
                var3 = var10.bind(var6)();
                var1 = var3.done;
                var9 = 1;
                var5 = 0;
                var4 = var3;
                var3 = false;
                var0 = false;
                if (var1) {
                    _fun31169_ip = 107;
                    continue _fun31169
                }
            case 49:
                var12 = var4.value;
                var11 = _closure1_slot31;
                var1 = var7.guildId;
                var11 = var11.bind(var6)(var1, var12);
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)(var11, var9);
                var1 = var1[var5];
                if (var3) {
                    _fun31169_ip = 89;
                    continue _fun31169
                }
            case 86:
                var3 = var1;
            case 89:
                var12 = var10.bind(var6)();
                var1 = var12.done;
                var4 = var12;
                var0 = var3;
                if (!var1) {
                    _fun31169_ip = 49;
                    continue _fun31169
                }
            case 107:
                var3 = _closure1_slot24;
                var1 = var7.removedVoiceStateUsers;
                var5 = var3.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var1 = var3.done;
                if (var1) {
                    _fun31169_ip = 177;
                    continue _fun31169
                }
            case 134:
                var11 = var3.value;
                var10 = _closure1_slot30;
                var9 = var7.guildId;
                var1 = function() { // Environment: var8
                    var0 = null;
                    return var0;
                };
                var1 = var10.bind(var6)(var9, var11, var1);
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var3 = var9;
                var0 = true;
                if (!var1) {
                    _fun31169_ip = 134;
                    continue _fun31169
                }
            case 177:
                if (!var0) {
                    _fun31169_ip = 191;
                    continue _fun31169
                }
            case 180:
                var1 = _closure1_slot15;
                var1 = var1 + 1;
                _closure1_slot15 = var1;
            case 191:
                return var0;
        }
    };
    var1.PASSIVE_UPDATE_V2 = var8;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.userId;
        var4 = var0.channelId;
        var3 = var0.platform;
        var2 = _closure1_slot22;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var5, var4);
        var2[var1] = var3;
        return var0;
    };
    var1.RTC_CONNECTION_PLATFORM = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/VoiceStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3513, 660, 3514, 22, 3515, 566, 806, 2]);