// modules/media_engine/MediaEngineStatsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun31839: for (var _fun31839_ip = 0;;) switch (_fun31839_ip) {
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
                _fun31839_ip = 74;
                continue _fun31839;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun31842: for (var _fun31842_ip = 0;;) switch (_fun31842_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun31842_ip = 46;
                    continue _fun31842
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun31842_ip = 55;
                    continue _fun31842
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun31842_ip = 343;
                    continue _fun31842
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun31842_ip = 323;
                    continue _fun31842
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun31842_ip = 283;
                    continue _fun31842
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun31842_ip = 270;
                    continue _fun31842
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
                    _fun31842_ip = 163;
                    continue _fun31842
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun31842_ip = 179;
                    continue _fun31842
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun31842_ip = 249;
                    continue _fun31842
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun31842_ip = 249;
                    continue _fun31842
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun31842_ip = 234;
                    continue _fun31842
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun31842_ip = 247;
                    continue _fun31842
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun31842_ip = 265;
                continue _fun31842;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun31842_ip = 283;
                continue _fun31842;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun31842_ip = 323;
                    continue _fun31842
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
                    _fun31842_ip = 330;
                    continue _fun31842
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun31843: for (var _fun31843_ip = 0;;) switch (_fun31843_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun31843_ip = 56;
                                continue _fun31843
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
                            _fun31843_ip = 67;
                            continue _fun31843;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun31844: for (var _fun31844_ip = 0;;) switch (_fun31844_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun31844_ip = 23;
                    continue _fun31844
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun31844_ip = 33;
                    continue _fun31844
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
                    _fun31844_ip = 70;
                    continue _fun31844
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31844_ip = 55;
                    continue _fun31844
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var1 = 'packetsSent';
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun31846: for (var _fun31846_ip = 0;;) switch (_fun31846_ip) {
            case 0:
                var0 = arg2;
                var4 = arg3;
                var11 = arg4;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'video';
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var9 = null;
                if (!(var9 == var0)) {
                    _fun31846_ip = 57;
                    continue _fun31846
                }
            case 32:
                var2 = {
                    'packetsSentOrReceived': 0,
                    'packetsLost': 0,
                    'packetLossRate': 0,
                    'frameRate': 0,
                    'resolution': 0,
                    'entropy': 0,
                    'numDatapoints': 0,
                    'frameRateAggregated': 0,
                    'resolutionAggregated': 0,
                    'entropyAggregated': 0
                };
                var4 = arg0;
                var2.minVersion = var4;
                var0 = var2;
            case 57:
                if (!(var9 != var3)) {
                    _fun31846_ip = 804;
                    continue _fun31846
                }
            case 64:
                var2 = _closure1_slot15;
                var5 = undefined;
                var2 = var2.bind(var5)(var3);
                if (var2) {
                    _fun31846_ip = 101;
                    continue _fun31846
                }
            case 81:
                var2 = var3.packetsReceived;
                var7 = var9 != var2;
                var4 = 0;
                if (!var7) {
                    _fun31846_ip = 99;
                    continue _fun31846
                }
            case 96:
                var4 = var2;
            case 99:
                _fun31846_ip = 122;
                continue _fun31846;
            case 101:
                var7 = var3.packetsSent;
                var8 = var9 != var7;
                var2 = 0;
                if (!var8) {
                    _fun31846_ip = 119;
                    continue _fun31846
                }
            case 116:
                var2 = var7;
            case 119:
                var4 = var2;
            case 122:
                var2 = _closure1_slot15;
                var2 = var2.bind(var5)(var3);
                var10 = var3.packetsLost;
                var12 = var9 != var10;
                if (var2) {
                    _fun31846_ip = 154;
                    continue _fun31846
                }
            case 144:
                var2 = 0;
                if (!var12) {
                    _fun31846_ip = 152;
                    continue _fun31846
                }
            case 149:
                var2 = var10;
            case 152:
                _fun31846_ip = 165;
                continue _fun31846;
            case 154:
                var8 = 0;
                if (!var12) {
                    _fun31846_ip = 162;
                    continue _fun31846
                }
            case 159:
                var8 = var10;
            case 162:
                var2 = var8;
            case 165:
                var8 = _closure1_slot15;
                var8 = var8.bind(var5)(var3);
                if (var8) {
                    _fun31846_ip = 197;
                    continue _fun31846
                }
            case 177:
                var8 = var3.frameRateDecode;
                var10 = var9 != var8;
                var13 = 0;
                if (!var10) {
                    _fun31846_ip = 195;
                    continue _fun31846
                }
            case 192:
                var13 = var8;
            case 195:
                _fun31846_ip = 218;
                continue _fun31846;
            case 197:
                var10 = var3.frameRateEncode;
                var12 = var9 != var10;
                var8 = 0;
                if (!var12) {
                    _fun31846_ip = 215;
                    continue _fun31846
                }
            case 212:
                var8 = var10;
            case 215:
                var13 = var8;
            case 218:
                var10 = var3.resolution;
                var12 = var9 == var10;
                var8 = undefined;
                if (var12) {
                    _fun31846_ip = 238;
                    continue _fun31846
                }
            case 233:
                var8 = var10.height;
            case 238:
                var10 = var9 != var8;
                var12 = 0;
                if (!var10) {
                    _fun31846_ip = 250;
                    continue _fun31846
                }
            case 247:
                var12 = var8;
            case 250:
                var8 = _closure1_slot15;
                var8 = var8.bind(var5)(var3);
                var10 = 0;
                if (!var8) {
                    _fun31846_ip = 282;
                    continue _fun31846
                }
            case 264:
                var3 = var3.videoEntropy;
                var8 = var9 != var3;
                var10 = 0;
                if (!var8) {
                    _fun31846_ip = 282;
                    continue _fun31846
                }
            case 279:
                var10 = var3;
            case 282:
                var8 = var0.numDatapoints;
                var3 = 1;
                var8 = var8 + var3;
                var0.numDatapoints = var8;
                var8 = var0.frameRateAggregated;
                var8 = var8 + var13;
                var0.frameRateAggregated = var8;
                var8 = var0.resolutionAggregated;
                var8 = var8 + var12;
                var0.resolutionAggregated = var8;
                var8 = var0.entropyAggregated;
                var8 = var8 + var10;
                var0.entropyAggregated = var8;
                var8 = var9 == var11;
                var10 = undefined;
                if (var8) {
                    _fun31846_ip = 373;
                    continue _fun31846
                }
            case 358:
                var8 = var11.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'video';
                    var0 = var0 === var1;
                    return var0;
                };
                var10 = var8.bind(var11)(var1);
            case 373:
                if (!(var9 != var10)) {
                    _fun31846_ip = 390;
                    continue _fun31846
                }
            case 377:
                var8 = var0.minVersion;
                var1 = arg1;
                if (!(!(var1 >= var8))) {
                    _fun31846_ip = 407;
                    continue _fun31846
                }
            case 390:
                var0.packetsSentOrReceived = var4;
                var0.packetsLost = var2;
                _fun31846_ip = 704;
                continue _fun31846;
            case 407:
                var1 = var0.numDatapoints;
                var1 = var1 - var3;
                var0.numDatapoints = var1;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)(var10);
                if (var1) {
                    _fun31846_ip = 455;
                    continue _fun31846
                }
            case 435:
                var1 = var10.packetsReceived;
                var8 = var9 != var1;
                var3 = 0;
                if (!var8) {
                    _fun31846_ip = 453;
                    continue _fun31846
                }
            case 450:
                var3 = var1;
            case 453:
                _fun31846_ip = 476;
                continue _fun31846;
            case 455:
                var8 = var10.packetsSent;
                var11 = var9 != var8;
                var1 = 0;
                if (!var11) {
                    _fun31846_ip = 473;
                    continue _fun31846
                }
            case 470:
                var1 = var8;
            case 473:
                var3 = var1;
            case 476:
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)(var10);
                var11 = var10.packetsLost;
                var12 = var9 != var11;
                if (var1) {
                    _fun31846_ip = 508;
                    continue _fun31846
                }
            case 498:
                var1 = 0;
                if (!var12) {
                    _fun31846_ip = 506;
                    continue _fun31846
                }
            case 503:
                var1 = var11;
            case 506:
                _fun31846_ip = 519;
                continue _fun31846;
            case 508:
                var8 = 0;
                if (!var12) {
                    _fun31846_ip = 516;
                    continue _fun31846
                }
            case 513:
                var8 = var11;
            case 516:
                var1 = var8;
            case 519:
                var8 = _closure1_slot15;
                var8 = var8.bind(var5)(var10);
                if (var8) {
                    _fun31846_ip = 551;
                    continue _fun31846
                }
            case 531:
                var11 = var10.frameRateDecode;
                var12 = var9 != var11;
                var8 = 0;
                if (!var12) {
                    _fun31846_ip = 549;
                    continue _fun31846
                }
            case 546:
                var8 = var11;
            case 549:
                _fun31846_ip = 572;
                continue _fun31846;
            case 551:
                var12 = var10.frameRateEncode;
                var13 = var9 != var12;
                var11 = 0;
                if (!var13) {
                    _fun31846_ip = 569;
                    continue _fun31846
                }
            case 566:
                var11 = var12;
            case 569:
                var8 = var11;
            case 572:
                var6 = _closure1_slot15;
                var11 = var6.bind(var5)(var10);
                var6 = 0;
                if (!var11) {
                    _fun31846_ip = 604;
                    continue _fun31846
                }
            case 586:
                var11 = var10.videoEntropy;
                var12 = var9 != var11;
                var6 = 0;
                if (!var12) {
                    _fun31846_ip = 604;
                    continue _fun31846
                }
            case 601:
                var6 = var11;
            case 604:
                var10 = var10.resolution;
                var11 = var9 == var10;
                var5 = undefined;
                if (var11) {
                    _fun31846_ip = 624;
                    continue _fun31846
                }
            case 619:
                var5 = var10.height;
            case 624:
                var9 = var9 != var5;
                var7 = 0;
                if (!var9) {
                    _fun31846_ip = 636;
                    continue _fun31846
                }
            case 633:
                var7 = var5;
            case 636:
                var5 = var0.frameRateAggregated;
                var5 = var5 - var8;
                var0.frameRateAggregated = var5;
                var5 = var0.resolutionAggregated;
                var5 = var5 - var7;
                var0.resolutionAggregated = var5;
                var5 = var0.entropyAggregated;
                var5 = var5 - var6;
                var0.entropyAggregated = var5;
                var3 = var4 - var3;
                var0.packetsSentOrReceived = var3;
                var1 = var2 - var1;
                var0.packetsLost = var1;
            case 704:
                var2 = var0.frameRateAggregated;
                var1 = var0.numDatapoints;
                var1 = var2 / var1;
                var0.frameRate = var1;
                var2 = var0.resolutionAggregated;
                var1 = var0.numDatapoints;
                var1 = var2 / var1;
                var0.resolution = var1;
                var2 = var0.entropyAggregated;
                var1 = var0.numDatapoints;
                var1 = var2 / var1;
                var0.entropy = var1;
                var2 = var0.packetsLost;
                var3 = var0.packetsSentOrReceived;
                var1 = var0.packetsLost;
                var1 = var3 + var1;
                var1 = var2 / var1;
                var0.packetLossRate = var1;
                return var0;
            case 804:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun31849: for (var _fun31849_ip = 0;;) switch (_fun31849_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var0 = var10[var9];
                var6 = null;
                if (!(var6 == var0)) {
                    _fun31849_ip = 28;
                    continue _fun31849
                }
            case 22:
                var0 = {};
                var10[var9] = var0;
            case 28:
                var1 = _closure1_slot7;
                var0 = var1.getId;
                var3 = var0.bind(var1)();
                var2 = var10[var9];
                var15 = _closure1_slot16;
                var14 = var8.version;
                var4 = var6 == var7;
                var0 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun31849_ip = 76;
                    continue _fun31849
                }
            case 70:
                var1 = var7.version;
            case 76:
                var11 = var6 != var1;
                var4 = 0;
                var13 = 0;
                if (!var11) {
                    _fun31849_ip = 90;
                    continue _fun31849
                }
            case 87:
                var13 = var1;
            case 90:
                var1 = var10[var9];
                var12 = var1[var3];
                var1 = var8.stats;
                var1 = var1.rtp;
                var11 = var1.outbound;
                var16 = var6 == var7;
                var1 = undefined;
                if (var16) {
                    _fun31849_ip = 143;
                    continue _fun31849
                }
            case 125:
                var16 = var7.stats;
                var16 = var16.rtp;
                var1 = var16.outbound;
            case 143:
                var24 = undefined;
                var23 = var14;
                var22 = var13;
                var21 = var12;
                var20 = var11;
                var19 = var1;
                var1 = var24[var15](var23, var22, var21, var20, var19, var18);
                var2[var3] = var1;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var8.stats;
                var1 = var1.rtp;
                var1 = var1.inbound;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var1 = var4 < var1;
                var2 = 0;
                if (!var1) {
                    _fun31849_ip = 367;
                    continue _fun31849
                }
            case 221:
                var12 = var3[var2];
                var11 = var10[var9];
                var17 = _closure1_slot16;
                var16 = var8.version;
                var13 = var6 == var7;
                var1 = undefined;
                if (var13) {
                    _fun31849_ip = 254;
                    continue _fun31849
                }
            case 248:
                var1 = var7.version;
            case 254:
                var13 = var6 != var1;
                var15 = 0;
                if (!var13) {
                    _fun31849_ip = 266;
                    continue _fun31849
                }
            case 263:
                var15 = var1;
            case 266:
                var1 = var10[var9];
                var14 = var1[var12];
                var1 = var8.stats;
                var1 = var1.rtp;
                var1 = var1.inbound;
                var13 = var1[var12];
                var18 = var6 == var7;
                var1 = undefined;
                if (var18) {
                    _fun31849_ip = 327;
                    continue _fun31849
                }
            case 305:
                var18 = var7.stats;
                var18 = var18.rtp;
                var18 = var18.inbound;
                var1 = var18[var12];
            case 327:
                var24 = undefined;
                var23 = var16;
                var22 = var15;
                var21 = var14;
                var20 = var13;
                var19 = var1;
                var1 = var24[var17](var23, var22, var21, var20, var19, var18);
                var11[var12] = var1;
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun31849_ip = 221;
                    continue _fun31849
                }
            case 367:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun31850: for (var _fun31850_ip = 0;;) switch (_fun31850_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = _closure1_slot10;
                var6 = var0[var3];
                var5 = null;
                var7 = var5 == var6;
                var0 = undefined;
                var4 = undefined;
                if (var7) {
                    _fun31850_ip = 34;
                    continue _fun31850
                }
            case 30:
                var4 = var6[var2];
            case 34:
                if (!(var5 != var4)) {
                    _fun31850_ip = 50;
                    continue _fun31850
                }
            case 38:
                var4 = _closure1_slot10;
                var4 = var4[var3];
                var4 = delete var4[var2];
            case 50:
                var4 = _closure1_slot11;
                var6 = var4[var3];
                var7 = var5 == var6;
                var4 = undefined;
                if (var7) {
                    _fun31850_ip = 71;
                    continue _fun31850
                }
            case 67:
                var4 = var6[var2];
            case 71:
                if (!(var5 != var4)) {
                    _fun31850_ip = 87;
                    continue _fun31850
                }
            case 75:
                var1 = _closure1_slot11;
                var1 = var1[var3];
                var1 = delete var1[var2];
            case 87:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun31851: for (var _fun31851_ip = 0;;) switch (_fun31851_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun31851_ip = 68;
                    continue _fun31851
                }
            case 12:
                var1 = _closure1_slot9;
                var3 = var1[var2];
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun31851_ip = 66;
                    continue _fun31851
                }
            case 32:
                var2 = var3.length;
                var2 = var2 <= var4;
                var1 = null;
                if (var2) {
                    _fun31851_ip = 66;
                    continue _fun31851
                }
            case 46:
                var2 = var3.length;
                var4 = var2 - var4;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
            case 66:
                return var1;
            case 68:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
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
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun31853: for (var _fun31853_ip = 0;;) switch (_fun31853_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31853_ip = 69;
                        continue _fun31853
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31853_ip = 105;
                    continue _fun31853;
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
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getConnectionStats';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = arg0;
            var0 = 0;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastConnectionStats';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = arg0;
            var0 = 1;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getStatsHistory';
        var4.key = var6;
        var6 = function arg0() {
            _fun31857: for (var _fun31857_ip = 0;;) switch (_fun31857_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun31857_ip = 30;
                        continue _fun31857
                    }
                case 9:
                    var0 = _closure1_slot9;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun31857_ip = 28;
                        continue _fun31857
                    }
                case 24:
                    var0 = new Array(0);
                case 28:
                    _fun31857_ip = 34;
                    continue _fun31857;
                case 30:
                    var0 = new Array(0);
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAccumulatedPerformanceStats';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun31858: for (var _fun31858_ip = 0;;) switch (_fun31858_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = null;
                    if (var2) {
                        _fun31858_ip = 76;
                        continue _fun31858
                    }
                case 14:
                    var4 = 'long';
                    var2 = arg2;
                    if (!(var4 !== var2)) {
                        _fun31858_ip = 34;
                        continue _fun31858
                    }
                case 25:
                    var2 = _closure1_slot11;
                    _fun31858_ip = 41;
                    continue _fun31858;
                case 34:
                    var2 = _closure1_slot10;
                case 41:
                    var4 = var2[var3];
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun31858_ip = 61;
                        continue _fun31858
                    }
                case 54:
                    var3 = arg1;
                    var2 = var4[var3];
                case 61:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun31858_ip = 73;
                        continue _fun31858
                    }
                case 70:
                    var1 = var2;
                case 73:
                    var0 = var1;
                case 76:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'MediaEngineStatsStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun31859: for (var _fun31859_ip = 0;;) switch (_fun31859_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.connectionStats;
                var11 = {};
                var1 = _closure1_slot13;
                var0 = undefined;
                var9 = var1.bind(var0)(var2);
                var2 = var9.bind(var0)();
                var1 = var2.done;
                var8 = 15;
                var7 = null;
                var6 = 30;
                var5 = 0;
                var4 = var2;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun31859_ip = 258;
                    continue _fun31859
                }
            case 57:
                var16 = var4.value;
                var15 = var16.mediaEngineConnectionId;
                var1 = var15.length;
                if (!(var5 !== var1)) {
                    _fun31859_ip = 240;
                    continue _fun31859
                }
            case 80:
                var11[var15] = var16;
                var1 = _closure1_slot9;
                var1 = var15 in var1;
                if (var1) {
                    _fun31859_ip = 107;
                    continue _fun31859
                }
            case 95:
                var12 = _closure1_slot9;
                var1 = new Array(0);
                var12[var15] = var1;
            case 107:
                var1 = _closure1_slot9;
                var12 = var1[var15];
                var1 = var12.push;
                var1 = var1.bind(var12)(var16);
                var1 = _closure1_slot9;
                var1 = var1[var15];
                var1 = var1.length;
                var12 = var1 > var6;
                var1 = undefined;
                if (!var12) {
                    _fun31859_ip = 165;
                    continue _fun31859
                }
            case 147:
                var12 = _closure1_slot9;
                var13 = var12[var15];
                var12 = var13.shift;
                var1 = var12.bind(var13)();
            case 165:
                var17 = _closure1_slot17;
                var14 = _closure1_slot11;
                var12 = _closure1_slot19;
                var12 = var12.bind(var0)(var15, var8);
                var18 = var7 != var12;
                var13 = undefined;
                if (!var18) {
                    _fun31859_ip = 195;
                    continue _fun31859
                }
            case 192:
                var13 = var12;
            case 195:
                var23 = undefined;
                var22 = var14;
                var21 = var15;
                var20 = var16;
                var19 = var13;
                var13 = var23[var17](var22, var21, var20, var19, var18);
                var14 = _closure1_slot17;
                var22 = _closure1_slot10;
                var21 = var15;
                var20 = var16;
                var19 = var1;
                var13 = var23[var14](var22, var21, var20, var19, var18);
                var3 = var12;
                var2 = var1;
            case 240:
                var12 = var9.bind(var0)();
                var1 = var12.done;
                var4 = var12;
                if (!var1) {
                    _fun31859_ip = 57;
                    continue _fun31859
                }
            case 258:
                return var0;
        }
    };
    var1.MEDIA_ENGINE_CONNECTION_STATS = var8;
    var8 = function arg0() {
        _fun31860: for (var _fun31860_ip = 0;;) switch (_fun31860_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.mediaEngineConnectionId;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun31860_ip = 42;
                    continue _fun31860
                }
            case 15:
                var2 = _closure1_slot9;
                var2 = delete var2[var1];
                var2 = _closure1_slot10;
                var2 = delete var2[var1];
                var0 = _closure1_slot11;
                var0 = delete var0[var1];
            case 42:
                var0 = undefined;
                return var0;
        }
    };
    var1.MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET = var8;
    var8 = function arg0() {
        _fun31861: for (var _fun31861_ip = 0;;) switch (_fun31861_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.streamKey;
                var0 = var0.paused;
                if (var0) {
                    _fun31861_ip = 116;
                    continue _fun31861
                }
            case 18:
                var2 = _closure1_slot8;
                var0 = var2.getRTCConnection;
                var6 = var0.bind(var2)(var5);
                var2 = null;
                var4 = var2 == var6;
                var0 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun31861_ip = 59;
                    continue _fun31861
                }
            case 49:
                var4 = var6.getMediaEngineConnectionId;
                var3 = var4.bind(var6)();
            case 59:
                if (!(var2 != var3)) {
                    _fun31861_ip = 112;
                    continue _fun31861
                }
            case 63:
                var2 = _closure1_slot18;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.decodeStreamKey;
                var1 = var1.bind(var4)(var5);
                var1 = var1.ownerId;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 112:
                var0 = false;
                return var0;
            case 116:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_UPDATE = var8;
    var3 = function arg0() {
        _fun31862: for (var _fun31862_ip = 0;;) switch (_fun31862_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var2 = var0.mediaEngineConnectionId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun31862_ip = 37;
                    continue _fun31862
                }
            case 20:
                var1 = _closure1_slot18;
                var0 = undefined;
                var1 = var1.bind(var0)(var2, var3);
                return var0;
            case 37:
                var0 = false;
                return var0;
        }
    };
    var1.RTC_CONNECTION_VIDEO = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/MediaEngineStatsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3609, 3505, 566, 806, 2]);