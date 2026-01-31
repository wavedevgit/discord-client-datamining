// modules/reply_nudge/ReplyNudgeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun67192: for (var _fun67192_ip = 0;;) switch (_fun67192_ip) {
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
                _fun67192_ip = 76;
                continue _fun67192;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun67195: for (var _fun67195_ip = 0;;) switch (_fun67195_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67195_ip = 46;
                    continue _fun67195
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun67195_ip = 55;
                    continue _fun67195
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun67195_ip = 345;
                    continue _fun67195
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun67195_ip = 323;
                    continue _fun67195
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun67195_ip = 283;
                    continue _fun67195
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun67195_ip = 270;
                    continue _fun67195
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
                    _fun67195_ip = 163;
                    continue _fun67195
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun67195_ip = 179;
                    continue _fun67195
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun67195_ip = 249;
                    continue _fun67195
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun67195_ip = 249;
                    continue _fun67195
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun67195_ip = 234;
                    continue _fun67195
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun67195_ip = 247;
                    continue _fun67195
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun67195_ip = 265;
                continue _fun67195;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun67195_ip = 283;
                continue _fun67195;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun67195_ip = 323;
                    continue _fun67195
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
                    _fun67195_ip = 330;
                    continue _fun67195
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun67196: for (var _fun67196_ip = 0;;) switch (_fun67196_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun67196_ip = 56;
                                continue _fun67196
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
                            _fun67196_ip = 67;
                            continue _fun67196;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun67197: for (var _fun67197_ip = 0;;) switch (_fun67197_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun67197_ip = 23;
                    continue _fun67197
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun67197_ip = 33;
                    continue _fun67197
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
                    _fun67197_ip = 70;
                    continue _fun67197
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun67197_ip = 55;
                    continue _fun67197
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun67198: for (var _fun67198_ip = 0;;) switch (_fun67198_ip) {
            case 0:
                var0 = arg1;
                var14 = var0.maxNudgeAge;
                var13 = var0.maxNudgeCount;
                var1 = global;
                var2 = var1.Date;
                var0 = var2.now;
                var12 = var0.bind(var2)();
                var0 = {};
                var4 = var1.Object;
                var3 = var4.entries;
                var2 = arg0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var2 = 1;
                    var0 = var0[var2];
                    var1 = var0.timestamp;
                    var0 = arg0;
                    var0 = var0[var2];
                    var0 = var0.timestamp;
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var2 = var4.length;
                var11 = 0;
                var3 = var11 < var2;
                var10 = undefined;
                var9 = 2;
                var8 = 1;
                var7 = null;
                var6 = 0;
                var5 = 0;
                if (!var3) {
                    _fun67198_ip = 219;
                    continue _fun67198
                }
            case 105:
                var15 = var4[var5];
                var3 = _closure1_slot7;
                var3 = var3.bind(var10)(var15, var9);
                var17 = var3[var11];
                var3 = var3[var8];
                var18 = var3.timestamp;
                var3 = var3.isActive;
                var15 = var6;
                if (!(var7 != var18)) {
                    _fun67198_ip = 204;
                    continue _fun67198
                }
            case 146:
                var19 = var12 - var18;
                var16 = _closure1_slot15;
                var15 = var6;
                if (!(var19 < var16)) {
                    _fun67198_ip = 204;
                    continue _fun67198
                }
            case 161:
                if (!var3) {
                    _fun67198_ip = 172;
                    continue _fun67198
                }
            case 164:
                var16 = var12 - var18;
                var3 = var16 < var14;
            case 172:
                if (!var3) {
                    _fun67198_ip = 179;
                    continue _fun67198
                }
            case 175:
                var3 = var6 < var13;
            case 179:
                var16 = {};
                var16.timestamp = var18;
                var16.isActive = var3;
                var0[var17] = var16;
                var15 = var6;
                if (!var3) {
                    _fun67198_ip = 204;
                    continue _fun67198
                }
            case 201:
                var15 = var6 + 1;
            case 204:
                var5 = var5 + 1;
                var3 = var4.length;
                var6 = var15;
                if (var5 < var3) {
                    _fun67198_ip = 105;
                    continue _fun67198
                }
            case 219:
                var3 = _closure1_slot16;
                var2 = var3.info;
                var5 = var4.length;
                var6 = var1.Object;
                var4 = var6.keys;
                var4 = var4.bind(var6)(var0);
                var4 = var4.length;
                var6 = var5 - var4;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Pruned ';
                var1 = ' expired nudges';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun67200: for (var _fun67200_ip = 0;;) switch (_fun67200_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot18;
                var0 = var3 in var0;
                if (!var0) {
                    _fun67200_ip = 61;
                    continue _fun67200
                }
            case 17:
                var1 = _closure1_slot18;
                var1 = var1[var3];
                var1 = var1.isActive;
                var4 = !var1;
                var1 = !var4;
                if (var4) {
                    _fun67200_ip = 58;
                    continue _fun67200
                }
            case 40:
                var2 = _closure1_slot18;
                var3 = var2[var3];
                var2 = false;
                var3.isActive = var2;
                var1 = undefined;
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        _fun67201: for (var _fun67201_ip = 0;;) switch (_fun67201_ip) {
            case 0:
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = _closure1_slot18;
                var7 = var2.bind(var3)(var1);
                var1 = var7.length;
                var6 = 0;
                var1 = var6 < var1;
                var5 = undefined;
                var4 = 2;
                var3 = 1;
                var2 = 0;
                if (!var1) {
                    _fun67201_ip = 107;
                    continue _fun67201
                }
            case 54:
                var9 = var7[var2];
                var1 = _closure1_slot7;
                var1 = var1.bind(var5)(var9, var4);
                var9 = var1[var6];
                var1 = var1[var3];
                var1 = var1.isActive;
                if (!var1) {
                    _fun67201_ip = 95;
                    continue _fun67201
                }
            case 85:
                var1 = var0.push;
                var1 = var1.bind(var0)(var9);
            case 95:
                var2 = var2 + 1;
                var1 = var7.length;
                if (var2 < var1) {
                    _fun67201_ip = 54;
                    continue _fun67201
                }
            case 107:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun67202: for (var _fun67202_ip = 0;;) switch (_fun67202_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot12;
                var0 = var3.getChannel;
                var5 = var0.bind(var3)(var1);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun67202_ip = 134;
                    continue _fun67202
                }
            case 26:
                var3 = var0 == var5;
                var6 = undefined;
                if (var3) {
                    _fun67202_ip = 45;
                    continue _fun67202
                }
            case 35:
                var3 = var5.isDM;
                var6 = var3.bind(var5)();
            case 45:
                var3 = true;
                if (!(var3 === var6)) {
                    _fun67202_ip = 105;
                    continue _fun67202
                }
            case 51:
                var3 = var5.getRecipientId;
                var6 = var3.bind(var5)();
                var5 = _closure1_slot9;
                var3 = var5.getUserAffinity;
                var3 = var3.bind(var5)(var6);
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun67202_ip = 91;
                    continue _fun67202
                }
            case 85:
                var4 = var3.dmProbability;
            case 91:
                var5 = var0 != var4;
                var3 = null;
                if (!var5) {
                    _fun67202_ip = 103;
                    continue _fun67202
                }
            case 100:
                var3 = var4;
            case 103:
                return var3;
            case 105:
                var6 = _closure1_slot16;
                var5 = var6.warn;
                var4 = {};
                var4.channelId = var1;
                var3 = 'getDMChannelAffinity: Channel is not a DM';
                var3 = var5.bind(var6)(var3, var4);
                return var0;
            case 134:
                var4 = _closure1_slot16;
                var3 = var4.warn;
                var2 = {};
                var2.channelId = var1;
                var1 = 'getDMChannelAffinity: Unable to find channel';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun67203: for (var _fun67203_ip = 0;;) switch (_fun67203_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 15;
                var0 = var5[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var6 = var0.ReplyNudgeExperiment;
                var4 = var6.getConfig;
                var0 = {};
                var7 = 'handleNudgeVisibilityChange';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var4 = var0.displayNudges;
                var7 = var0.maxNudgeAge;
                var6 = var0.maxNudgeCount;
                var0 = 16;
                var0 = var5[var0];
                var0 = var2.bind(var1)(var0);
                var2 = var0.EnableDmReplyNudgeReminders;
                var0 = var2.getSetting;
                var2 = var0.bind(var2)();
                var0 = false;
                var2 = var0 !== var2;
                if (!var2) {
                    _fun67203_ip = 112;
                    continue _fun67203
                }
            case 109:
                var2 = var4;
            case 112:
                var4 = _closure1_slot17;
                if (!(var4 !== var2)) {
                    _fun67203_ip = 199;
                    continue _fun67203
                }
            case 120:
                _closure1_slot17 = var2;
                if (!var2) {
                    _fun67203_ip = 197;
                    continue _fun67203
                }
            case 127:
                var5 = _closure1_slot23;
                var4 = _closure1_slot18;
                var2 = {};
                var2.maxNudgeAge = var7;
                var2.maxNudgeCount = var6;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot18 = var2;
                var2 = global;
                var5 = var2.Set;
                var2 = _closure1_slot25;
                var9 = var2.bind(var1)();
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var4;
                var2 = new var10[var5](var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                _closure1_slot19 = var2;
            case 197:
                return var1;
            case 199:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        _fun67204: for (var _fun67204_ip = 0;;) switch (_fun67204_ip) {
            case 0:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var0 = _closure1_slot18;
                var6 = var1.bind(var2)(var0);
                var0 = var6.length;
                var5 = 0;
                var1 = var5 < var0;
                var2 = false;
                var3 = null;
                var0 = false;
                if (!var1) {
                    _fun67204_ip = 93;
                    continue _fun67204
                }
            case 45:
                var8 = var6[var5];
                var9 = _closure1_slot14;
                var1 = var9.isChannelMuted;
                var1 = var1.bind(var9)(var3, var8);
                if (!var1) {
                    _fun67204_ip = 78;
                    continue _fun67204
                }
            case 68:
                var1 = _closure1_slot18;
                var1 = delete var1[var8];
                var2 = true;
            case 78:
                var5 = var5 + 1;
                var1 = var6.length;
                var0 = var2;
                if (var5 < var1) {
                    _fun67204_ip = 45;
                    continue _fun67204
                }
            case 93:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot15 = var1;
    var1 = 14;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = var8.prototype;
    var9 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var1 = 'ReplyNudgeStore';
    var13 = var9;
    var12 = var1;
    var8 = new var13[var8](var12, var11);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot16 = var8;
    var8 = false;
    var _closure1_slot17 = var8;
    var8 = {};
    var _closure1_slot18 = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot19 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var8 = var7.PersistedStore;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun67206: for (var _fun67206_ip = 0;;) switch (_fun67206_ip) {
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
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67206_ip = 69;
                        continue _fun67206
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67206_ip = 105;
                    continue _fun67206;
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
        var0 = function arg0() {
            _fun67207: for (var _fun67207_ip = 0;;) switch (_fun67207_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var1 = null;
                    var5 = var1 == var3;
                    var0 = undefined;
                    var2 = undefined;
                    if (var5) {
                        _fun67207_ip = 25;
                        continue _fun67207
                    }
                case 19:
                    var2 = var3.nudgedChannels;
                case 25:
                    if (!(var1 == var2)) {
                        _fun67207_ip = 31;
                        continue _fun67207
                    }
                case 29:
                    var2 = {};
                case 31:
                    _closure1_slot18 = var2;
                    var10 = var4.waitFor;
                    var2 = _closure1_slot8;
                    var16 = _closure1_slot11;
                    var15 = _closure1_slot12;
                    var14 = _closure1_slot13;
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot14;
                    var6 = _closure1_slot10;
                    var18 = var4;
                    var17 = var2;
                    var11 = var6;
                    var3 = var18[var10](var17, var16, var15, var14, var13, var12, var11, var10);
                    var5 = var4.syncWith;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var3[1] = var2;
                    var2 = _closure1_slot27;
                    var2 = var5.bind(var4)(var3, var2);
                    var3 = var4.syncWith;
                    var5 = _closure1_slot14;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = _closure1_slot28;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot18;
            var0.nudgedChannels = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getNudgeTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun67209: for (var _fun67209_ip = 0;;) switch (_fun67209_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot17;
                    var4 = null;
                    if (var0) {
                        _fun67209_ip = 17;
                        continue _fun67209
                    }
                case 15:
                    return var4;
                case 17:
                    var0 = _closure1_slot18;
                    var1 = var0[var3];
                    var5 = var4 == var1;
                    var0 = null;
                    if (var5) {
                        _fun67209_ip = 91;
                        continue _fun67209
                    }
                case 34:
                    var1 = var1.isActive;
                    if (var1) {
                        _fun67209_ip = 62;
                        continue _fun67209
                    }
                case 43:
                    var5 = _closure1_slot19;
                    var1 = var5.has;
                    var5 = var1.bind(var5)(var3);
                    var1 = null;
                    if (!var5) {
                        _fun67209_ip = 88;
                        continue _fun67209
                    }
                case 62:
                    var2 = _closure1_slot18;
                    var2 = var2[var3];
                    var2 = var2.timestamp;
                    var3 = var4 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun67209_ip = 88;
                        continue _fun67209
                    }
                case 85:
                    var1 = var2;
                case 88:
                    var0 = var1;
                case 91:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isChannelNudged';
        var4.key = var6;
        var5 = function arg0() {
            _fun67210: for (var _fun67210_ip = 0;;) switch (_fun67210_ip) {
                case 0:
                    var0 = arguments[1];
                    var2 = undefined;
                    if (!(var0 === var2)) {
                        _fun67210_ip = 11;
                        continue _fun67210
                    }
                case 9:
                    var0 = {};
                case 11:
                    var0 = var0.includeInvisible;
                    if (!(var0 === var2)) {
                        _fun67210_ip = 23;
                        continue _fun67210
                    }
                case 21:
                    var0 = false;
                case 23:
                    var3 = _closure1_slot17;
                    var3 = !var3;
                    if (!var3) {
                        _fun67210_ip = 39;
                        continue _fun67210
                    }
                case 36:
                    var3 = !var0;
                case 39:
                    var0 = !var3;
                    if (var3) {
                        _fun67210_ip = 79;
                        continue _fun67210
                    }
                case 45:
                    var3 = _closure1_slot18;
                    var1 = arg0;
                    var1 = var3[var1];
                    var3 = null;
                    var3 = var3 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun67210_ip = 73;
                        continue _fun67210
                    }
                case 67:
                    var2 = var1.isActive;
                case 73:
                    var1 = true;
                    var0 = var1 === var2;
                case 79:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var8);
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 18;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun67211: for (var _fun67211_ip = 0;;) switch (_fun67211_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var7 = var1.timestamp;
                var3 = _closure1_slot14;
                var2 = var3.isChannelMuted;
                var4 = null;
                var2 = var2.bind(var3)(var4, var0);
                if (var2) {
                    _fun67211_ip = 504;
                    continue _fun67211
                }
            case 41:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 15;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var6 = var2.ReplyNudgeExperiment;
                var5 = var6.getConfig;
                var2 = {};
                var8 = 'handleReplyNudgeSet';
                var2.location = var8;
                var2 = var5.bind(var6)(var2);
                var9 = var2.maxNudgeAge;
                var5 = var2.maxNudgeCount;
                var8 = _closure1_slot23;
                var6 = _closure1_slot18;
                var2 = {};
                var2.maxNudgeAge = var9;
                var2.maxNudgeCount = var5;
                var2 = var8.bind(var3)(var6, var2);
                _closure1_slot18 = var2;
                var2 = var0 in var2;
                if (var2) {
                    _fun67211_ip = 500;
                    continue _fun67211
                }
            case 144:
                var2 = _closure1_slot25;
                var6 = var2.bind(var3)();
                var2 = var6.length;
                if (!(var2 >= var5)) {
                    _fun67211_ip = 389;
                    continue _fun67211
                }
            case 164:
                var5 = var6.at;
                var2 = -1;
                var9 = var5.bind(var6)(var2);
                var2 = _closure1_slot21;
                var12 = var2.bind(var3)(var6);
                var8 = var12.bind(var3)();
                var2 = var8.done;
                var6 = inf;
                var11 = 'handleReplyNudgeSet: Nudge affinity is null';
                var10 = var8;
                var8 = var6;
                var5 = var9;
                var6 = var8;
                if (var2) {
                    _fun67211_ip = 323;
                    continue _fun67211
                }
            case 230:
                var15 = var10.value;
                var2 = _closure1_slot26;
                var2 = var2.bind(var3)(var15);
                if (!(var4 == var2)) {
                    _fun67211_ip = 280;
                    continue _fun67211
                }
            case 248:
                var16 = _closure1_slot16;
                var14 = var16.warn;
                var13 = {};
                var13.nudgedChannelId = var15;
                var13 = var14.bind(var16)(var11, var13);
                var14 = var9;
                var13 = var8;
                _fun67211_ip = 296;
                continue _fun67211;
            case 280:
                var14 = var9;
                var13 = var8;
                if (!(var2 < var8)) {
                    _fun67211_ip = 296;
                    continue _fun67211
                }
            case 290:
                var14 = var15;
                var13 = var2;
            case 296:
                var15 = var12.bind(var3)();
                var2 = var15.done;
                var9 = var14;
                var8 = var13;
                var10 = var15;
                var5 = var9;
                var6 = var8;
                if (!var2) {
                    _fun67211_ip = 230;
                    continue _fun67211
                }
            case 323:
                var2 = _closure1_slot26;
                var2 = var2.bind(var3)(var0);
                if (!(var4 != var2)) {
                    _fun67211_ip = 469;
                    continue _fun67211
                }
            case 339:
                if (!(!(var2 < var6))) {
                    _fun67211_ip = 427;
                    continue _fun67211
                }
            case 343:
                var10 = _closure1_slot16;
                var9 = var10.info;
                var8 = {};
                var8.channelId = var0;
                var8.lowestAffinity = var6;
                var8.newNudgeAffinity = var2;
                var4 = 'handleReplyNudgeSet: Evicting nudge with lowest affinity';
                var4 = var9.bind(var10)(var4, var8);
                var4 = _closure1_slot18;
                var4 = delete var4[var5];
            case 389:
                var5 = _closure1_slot18;
                var4 = {};
                var4.timestamp = var7;
                var7 = true;
                var4.isActive = var7;
                var5[var0] = var4;
                var5 = _closure1_slot19;
                var4 = var5.add;
                var4 = var4.bind(var5)(var0);
                return var3;
            case 427:
                var5 = _closure1_slot16;
                var4 = var5.info;
                var3 = {};
                var3.channelId = var0;
                var3.lowestAffinity = var6;
                var3.newNudgeAffinity = var2;
                var2 = 'handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.';
                var2 = var4.bind(var5)(var2, var3);
                var2 = false;
                return var2;
            case 469:
                var3 = _closure1_slot16;
                var2 = var3.warn;
                var1 = {};
                var1.channelId = var0;
                var0 = 'handleReplyNudgeSet: New nudge affinity is null';
                var0 = var2.bind(var3)(var0, var1);
                var0 = false;
                return var0;
            case 500:
                var0 = false;
                return var0;
            case 504:
                var0 = false;
                return var0;
        }
    };
    var1.REPLY_NUDGE_SET = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot24;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.REPLY_NUDGE_CLEAR = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.message;
        var2 = _closure1_slot24;
        var1 = var0.channel_id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function arg0() {
        _fun67214: for (var _fun67214_ip = 0;;) switch (_fun67214_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.userId;
                var4 = _closure1_slot11;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                var0 = var2 === var0;
                if (!var0) {
                    _fun67214_ip = 48;
                    continue _fun67214
                }
            case 37:
                var2 = _closure1_slot24;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 48:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD = var8;
    var8 = function() {
        _fun67215: for (var _fun67215_ip = 0;;) switch (_fun67215_ip) {
            case 0:
                var2 = _closure1_slot13;
                var0 = var2.getLastSelectedChannelId;
                var3 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun67215_ip = 37;
                    continue _fun67215
                }
            case 26:
                var2 = _closure1_slot24;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 37:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = _closure1_slot24;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot18 = var0;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot19 = var0;
        var0 = false;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1211, 6935, 1310, 1216, 1372, 1661, 4267, 8294, 3, 8295, 1348, 566, 806, 2]);