// modules/rtc/SecureFramesVerifiedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun66481: for (var _fun66481_ip = 0;;) switch (_fun66481_ip) {
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
                _fun66481_ip = 76;
                continue _fun66481;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun66484: for (var _fun66484_ip = 0;;) switch (_fun66484_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun66484_ip = 46;
                    continue _fun66484
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun66484_ip = 55;
                    continue _fun66484
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun66484_ip = 345;
                    continue _fun66484
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun66484_ip = 323;
                    continue _fun66484
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun66484_ip = 283;
                    continue _fun66484
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun66484_ip = 270;
                    continue _fun66484
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
                    _fun66484_ip = 163;
                    continue _fun66484
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun66484_ip = 179;
                    continue _fun66484
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun66484_ip = 249;
                    continue _fun66484
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun66484_ip = 249;
                    continue _fun66484
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun66484_ip = 234;
                    continue _fun66484
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun66484_ip = 247;
                    continue _fun66484
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun66484_ip = 265;
                continue _fun66484;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun66484_ip = 283;
                continue _fun66484;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun66484_ip = 323;
                    continue _fun66484
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
                    _fun66484_ip = 330;
                    continue _fun66484
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun66485: for (var _fun66485_ip = 0;;) switch (_fun66485_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun66485_ip = 56;
                                continue _fun66485
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
                            _fun66485_ip = 67;
                            continue _fun66485;
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
        _fun66486: for (var _fun66486_ip = 0;;) switch (_fun66486_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun66486_ip = 23;
                    continue _fun66486
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun66486_ip = 33;
                    continue _fun66486
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
                    _fun66486_ip = 70;
                    continue _fun66486
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun66486_ip = 55;
                    continue _fun66486
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var1 = _closure1_slot9;
        var0 = var1.getAllActiveStreamKeys;
        var3 = var0.bind(var1)();
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun66488: for (var _fun66488_ip = 0;;) switch (_fun66488_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.decodeStreamKey;
                    var2 = var2.bind(var3)(var5);
                    var4 = var2.ownerId;
                    var3 = _closure1_slot13;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var2 = true;
                    var4 = var2 === var3;
                    var3 = _closure1_slot14;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var5);
                    var2 = var2 !== var4;
                    var3 = _closure1_slot14;
                    var0 = var3.set;
                    var0 = var0.bind(var3)(var5, var4);
                    var0 = !var2;
                    var0 = !var0;
                    if (var2) {
                        _fun66488_ip = 113;
                        continue _fun66488
                    }
                case 110:
                    var0 = var1;
                case 113:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun66489: for (var _fun66489_ip = 0;;) switch (_fun66489_ip) {
            case 0:
                var1 = _closure1_slot8;
                var0 = var1.getUserIds;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!(var0 == var1)) {
                    _fun66489_ip = 51;
                    continue _fun66489
                }
            case 23:
                var0 = global;
                var0 = var0.Set;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var3;
                var0 = new var12[var0](var11);
                var1 = var0 instanceof Object ? var0 : var3;
            case 51:
                var3 = _closure1_slot7;
                var0 = var3.getId;
                var8 = var0.bind(var3)();
                var0 = _closure1_slot18;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var1 = var6.bind(var7)();
                var0 = var1.done;
                var5 = true;
                var3 = var1;
                var1 = true;
                if (var0) {
                    _fun66489_ip = 141;
                    continue _fun66489
                }
            case 95:
                var10 = var3.value;
                if (!(var8 !== var10)) {
                    _fun66489_ip = 124;
                    continue _fun66489
                }
            case 104:
                var9 = _closure1_slot13;
                var0 = var9.get;
                var0 = var0.bind(var9)(var10);
                var1 = false;
                if (!(var5 === var0)) {
                    _fun66489_ip = 141;
                    continue _fun66489
                }
            case 124:
                var9 = var6.bind(var7)();
                var0 = var9.done;
                var3 = var9;
                var1 = true;
                if (!var0) {
                    _fun66489_ip = 95;
                    continue _fun66489
                }
            case 141:
                var0 = _closure1_slot15;
                _closure1_slot15 = var1;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var3 = function arg0() {
        _fun66490: for (var _fun66490_ip = 0;;) switch (_fun66490_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.userId;
                var2 = _closure1_slot7;
                var0 = var2.getId;
                var0 = var0.bind(var2)();
                if (!(var0 !== var6)) {
                    _fun66490_ip = 252;
                    continue _fun66490
                }
            case 32:
                var2 = _closure1_slot8;
                var0 = var2.getSecureFramesRosterMapEntry;
                var4 = var0.bind(var2)(var6);
                var0 = null;
                var2 = var0 == var4;
                var0 = false;
                if (var2) {
                    _fun66490_ip = 220;
                    continue _fun66490
                }
            case 61:
                var2 = global;
                var2 = var2.Uint8Array;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var3;
                var9 = var4;
                var2 = new var10[var2](var9, var8);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot11;
                var2 = var3.isKeyVerified;
                var5 = var2.bind(var3)(var6, var4);
                if (var5) {
                    _fun66490_ip = 127;
                    continue _fun66490
                }
            case 111:
                var3 = _closure1_slot10;
                var2 = var3.isKeyVerified;
                var5 = var2.bind(var3)(var6, var4);
            case 127:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getIsSecureFramesKeyInconsistent;
                var7 = _closure1_slot8;
                var2 = new Array(2);
                var2[0] = var7;
                var7 = _closure1_slot9;
                var2[1] = var7;
                var2 = var3.bind(var4)(var6, var2);
                if (!var5) {
                    _fun66490_ip = 187;
                    continue _fun66490
                }
            case 184:
                var5 = !var2;
            case 187:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var2 = var2.bind(var3)(var6);
                var0 = var5 !== var2;
                var4 = _closure1_slot13;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
            case 220:
                var2 = _closure1_slot20;
                var3 = undefined;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun66490_ip = 244;
                    continue _fun66490
                }
            case 241:
                var0 = var2;
            case 244:
                if (var0) {
                    _fun66490_ip = 250;
                    continue _fun66490
                }
            case 247:
                var0 = var1;
            case 250:
                return var0;
            case 252:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var9 = function() {
        var2 = _closure1_slot13;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot14;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = false;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var9;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.RTCConnectionStates;
    var _closure1_slot12 = var7;
    var7 = var1.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot13 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot14 = var1;
    var1 = false;
    var _closure1_slot15 = var1;
    var1 = null;
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun66493: for (var _fun66493_ip = 0;;) switch (_fun66493_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66493_ip = 69;
                        continue _fun66493
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66493_ip = 105;
                    continue _fun66493;
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
            var6 = this;
            var5 = var6.waitFor;
            var11 = _closure1_slot7;
            var10 = _closure1_slot8;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var7 = _closure1_slot11;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'isCallVerified';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isStreamVerified';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isUserVerified';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot13;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SecureFramesVerifiedStore';
    var7.displayName = var1;
    var1 = 15;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var9;
    var9 = function arg0() {
        _fun66498: for (var _fun66498_ip = 0;;) switch (_fun66498_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var2 = _closure1_slot16;
                if (!(var1 !== var2)) {
                    _fun66498_ip = 35;
                    continue _fun66498
                }
            case 19:
                _closure1_slot16 = var1;
                var1 = _closure1_slot23;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 35:
                var0 = false;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var9;
    var9 = function arg0() {
        _fun66499: for (var _fun66499_ip = 0;;) switch (_fun66499_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.streamKey;
                var2 = var0.state;
                var3 = var0.context;
                var0 = _closure1_slot12;
                var0 = var0.DISCONNECTED;
                if (!(var2 === var0)) {
                    _fun66499_ip = 150;
                    continue _fun66499
                }
            case 36:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 13;
                var0 = var0[var6];
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var0 = var0.MediaEngineContextTypes;
                var0 = var0.STREAM;
                if (!(var0 !== var3)) {
                    _fun66499_ip = 117;
                    continue _fun66499
                }
            case 74:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var2)(var0);
                var0 = var0.MediaEngineContextTypes;
                var0 = var0.DEFAULT;
                if (!(var0 === var3)) {
                    _fun66499_ip = 115;
                    continue _fun66499
                }
            case 107:
                var0 = _closure1_slot23;
                var0 = var0.bind(var2)();
            case 115:
                return var2;
            case 117:
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun66499_ip = 148;
                    continue _fun66499
                }
            case 126:
                var4 = _closure1_slot14;
                var3 = var4.delete;
                var3 = var3.bind(var4)(var5);
                var1 = _closure1_slot21;
                var0 = var1.bind(var2)();
            case 148:
                return var0;
            case 150:
                var0 = false;
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var9;
    var8 = function arg0() {
        _fun66500: for (var _fun66500_ip = 0;;) switch (_fun66500_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.userIds;
                var3 = _closure1_slot7;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var _closure2_slot0 = var2;
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun66501: for (var _fun66501_ip = 0;;) switch (_fun66501_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var3 = _closure2_slot0;
                            var0 = var2;
                            if (!(var3 !== var1)) {
                                _fun66501_ip = 55;
                                continue _fun66501
                            }
                        case 20:
                            var4 = _closure1_slot22;
                            var3 = {};
                            var3.userId = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var3 = !var1;
                            var1 = !var3;
                            if (!var3) {
                                _fun66501_ip = 52;
                                continue _fun66501
                            }
                        case 49:
                            var1 = var2;
                        case 52:
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var0 = false;
                var0 = var3.bind(var4)(var2, var0);
                var2 = _closure1_slot20;
                var3 = undefined;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun66500_ip = 77;
                    continue _fun66500
                }
            case 74:
                var0 = var2;
            case 77:
                if (var0) {
                    _fun66500_ip = 83;
                    continue _fun66500
                }
            case 80:
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var1.RTC_CONNECTION_ROSTER_MAP_UPDATE = var8;
    var1.SECURE_FRAMES_TRANSIENT_KEY_CREATE = var3;
    var1.SECURE_FRAMES_TRANSIENT_KEY_DELETE = var3;
    var1.SECURE_FRAMES_VERIFIED_KEY_CREATE = var3;
    var1.SECURE_FRAMES_VERIFIED_KEY_DELETE = var3;
    var1.SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/SecureFramesVerifiedStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3477, 3568, 8206, 8207, 660, 8223, 3464, 3592, 566, 806, 2]);