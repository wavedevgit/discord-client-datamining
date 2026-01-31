// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot3 = var3;
    var1 = function() {
        _fun12686: for (var _fun12686_ip = 0;;) switch (_fun12686_ip) {
            case 0:
                var3 = undefined;
                var4 = undefined;
                var0 = arguments.length;
                var1 = 0;
                if (!(var0 > var1)) {
                    _fun12686_ip = 23;
                    continue _fun12686
                }
            case 15:
                var0 = arguments[var1];
                if (!(var3 === var0)) {
                    _fun12686_ip = 27;
                    continue _fun12686
                }
            case 23:
                var0 = {};
                _fun12686_ip = 31;
                continue _fun12686;
            case 27:
                var0 = arguments[var1];
            case 31:
                var1 = var0.minimumStallThresholdMs;
                var0 = 50;
                if (!(var3 !== var1)) {
                    _fun12686_ip = 47;
                    continue _fun12686
                }
            case 44:
                var0 = var1;
            case 47:
                var _closure2_slot0 = var0;
                var0 = global;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var1;
                var _closure2_slot1 = var0;
                var1 = {
                    'isTracking': false,
                    'timeout': null,
                    'isBackground': false,
                    'lastIntervalMs': 0,
                    'totalStallTime': 0,
                    'stallCount': 0
                };
                var5 = null;
                var0 = function arg0() {
                    _fun12687: for (var _fun12687_ip = 0;;) switch (_fun12687_ip) {
                        case 0:
                            var1 = 'active';
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun12687_ip = 72;
                                continue _fun12687
                            }
                        case 11:
                            var2 = _closure2_slot2;
                            var1 = true;
                            var2.isBackground = var1;
                            var1 = _closure2_slot2;
                            var2 = var1.timeout;
                            var1 = null;
                            if (!(var1 !== var2)) {
                                _fun12687_ip = 172;
                                continue _fun12687
                            }
                        case 45:
                            var1 = global;
                            var2 = var1.clearTimeout;
                            var0 = _closure2_slot2;
                            var1 = var0.timeout;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun12687_ip = 172;
                            continue _fun12687;
                        case 72:
                            var2 = _closure2_slot2;
                            var1 = false;
                            var2.isBackground = var1;
                            var1 = _closure2_slot2;
                            var2 = var1.timeout;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun12687_ip = 172;
                                continue _fun12687
                            }
                        case 103:
                            var2 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.timestampInSeconds;
                            var3 = var1.bind(var3)();
                            var1 = 1000;
                            var1 = var1 * var3;
                            var2.lastIntervalMs = var1;
                            var1 = _closure2_slot2;
                            var0 = var1.iteration;
                            var0 = var0.bind(var1)();
                        case 172:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.backgroundEventListener = var0;
                var0 = function() {
                    _fun12688: for (var _fun12688_ip = 0;;) switch (_fun12688_ip) {
                        case 0:
                            var0 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var14 = undefined;
                            var15 = undefined;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var10 = 2;
                            var1 = var1[var10];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.timestampInSeconds;
                            var2 = var1.bind(var2)();
                            var1 = 1000;
                            var3 = var1 * var2;
                            var2 = _closure2_slot2;
                            var2 = var2.lastIntervalMs;
                            var2 = var3 - var2;
                            var5 = _closure2_slot0;
                            var4 = 50;
                            var5 = var4 + var5;
                            if (!(var2 >= var5)) {
                                _fun12688_ip = 322;
                                continue _fun12688
                            }
                        case 88:
                            var6 = var2 - var4;
                            var13 = var6;
                            var5 = _closure2_slot2;
                            var2 = var5.stallCount;
                            var9 = 1;
                            var2 = var2 + var9;
                            var5.stallCount = var2;
                            var5 = _closure2_slot2;
                            var2 = var5.totalStallTime;
                            var2 = var2 + var6;
                            var5.totalStallTime = var2;
                            var5 = _closure2_slot1;
                            var2 = var5.entries;
                            var2 = var2.bind(var5)();
                            var8 = var2;
                            var5 = var8[Symbol.iterator];
                            var8 = var5().next;
                            var7 = global;
                            var6 = 0;
                            var2 = null;
                        case 164:
                            var17 = var8().value;
                            var16 = var5;
                            if (!(var16 !== var0)) {
                                _fun12688_ip = 322;
                                continue _fun12688
                            }
                        case 178: // try_start_0
                            var16 = _closure1_slot2;
                            var16 = var16.bind(var0)(var17, var10);
                            var14 = var16[var6];
                            var16 = var16[var9];
                            var15 = var16;
                            var19 = var7.Math;
                            var18 = var19.max;
                            var16 = var16.longestStallTime;
                            var12 = var16;
                            var17 = 0;
                            if (!(var2 !== var16)) {
                                _fun12688_ip = 237;
                                continue _fun12688
                            }
                        case 225:
                            var16 = var12;
                            var17 = 0;
                            if (!(var0 !== var16)) {
                                _fun12688_ip = 237;
                                continue _fun12688
                            }
                        case 234:
                            var17 = var12;
                        case 237:
                            var16 = var13;
                            var23 = var18.bind(var19)(var17, var16);
                            var19 = _closure2_slot1;
                            var18 = var19.set;
                            var17 = var14;
                            var22 = var7.Object;
                            var21 = var22.assign;
                            var25 = var7.Object;
                            var24 = var25.assign;
                            var20 = var15;
                            var16 = {};
                            var20 = var24.bind(var25)(var16, var20);
                            var16 = {};
                            var16.longestStallTime = var23;
                            var16 = var21.bind(var22)(var20, var16);
                            var16 = var18.bind(var19)(var17, var16);
                        case 310: // try_end0
                            _fun12688_ip = 164;
                            continue _fun12688;
                        case 315: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var5.return();
                            throw var2;
                        case 322:
                            var2 = _closure2_slot2;
                            var2.lastIntervalMs = var3;
                            var2 = _closure2_slot2;
                            var2 = var2.isTracking;
                            if (!var2) {
                                _fun12688_ip = 358;
                                continue _fun12688
                            }
                        case 345:
                            var3 = _closure2_slot2;
                            var3 = var3.isBackground;
                            var2 = !var3;
                        case 358:
                            if (!var2) {
                                _fun12688_ip = 395;
                                continue _fun12688
                            }
                        case 361:
                            var2 = _closure2_slot2;
                            var3 = global;
                            var3 = var3.setTimeout;
                            var1 = _closure2_slot2;
                            var1 = var1.iteration;
                            var1 = var3.bind(var0)(var1, var4);
                            var2.timeout = var1;
                        case 395:
                            return var0;
                    }
                };
                var1.iteration = var0;
                var _closure2_slot2 = var1;
                var0 = function arg0() {
                    _fun12689: for (var _fun12689_ip = 0;;) switch (_fun12689_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isRootSpan;
                            var2 = var2.bind(var3)(var6);
                            if (!var2) {
                                _fun12689_ip = 161;
                                continue _fun12689
                            }
                        case 42:
                            var4 = _closure2_slot1;
                            var3 = var4.has;
                            var3 = var3.bind(var4)(var6);
                            if (var3) {
                                _fun12689_ip = 119;
                                continue _fun12689
                            }
                        case 62:
                            var3 = _closure2_slot8;
                            var3 = var3.bind(var0)();
                            var5 = _closure2_slot1;
                            var4 = var5.set;
                            var3 = {
                                'longestStallTime': 0,
                                'atTimestamp': null
                            };
                            var7 = _closure2_slot7;
                            var7 = var7.bind(var0)(var6);
                            var3.atStart = var7;
                            var3 = var4.bind(var5)(var6, var3);
                            var2 = _closure2_slot11;
                            var2 = var2.bind(var0)();
                            _fun12689_ip = 161;
                            continue _fun12689;
                        case 119:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.error;
                            var1 = '[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.';
                            var1 = var2.bind(var3)(var1);
                        case 161:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var0 = function arg0() {
                    _fun12690: for (var _fun12690_ip = 0;;) switch (_fun12690_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isRootSpan;
                            var1 = var1.bind(var3)(var6);
                            if (var1) {
                                _fun12690_ip = 56;
                                continue _fun12690
                            }
                        case 45:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)(var6);
                            return var1;
                        case 56:
                            var4 = _closure2_slot1;
                            var1 = var4.get;
                            var5 = var1.bind(var4)(var6);
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var8 = 2;
                            var4 = var1[var8];
                            var9 = var7.bind(var0)(var4);
                            if (var5) {
                                _fun12690_ip = 141;
                                continue _fun12690
                            }
                        case 93:
                            var11 = var9.debug;
                            var10 = var11.log;
                            var4 = '[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.';
                            var4 = var10.bind(var11)(var4);
                            var10 = _closure2_slot1;
                            var4 = var10.delete;
                            var4 = var4.bind(var10)(var6);
                            var4 = _closure2_slot9;
                            var4 = var4.bind(var0)();
                            var4 = undefined;
                            return var4;
                        case 141:
                            var4 = var9.spanToJSON;
                            var4 = var4.bind(var9)(var6);
                            var12 = var4.timestamp;
                            var4 = 4;
                            var1 = var1[var4];
                            var7 = var7.bind(var0)(var1);
                            var1 = var7.isNearToNow;
                            var1 = var1.bind(var7)(var12);
                            if (var1) {
                                _fun12690_ip = 338;
                                continue _fun12690
                            }
                        case 187:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var7 = var7.bind(var0)(var1);
                            var1 = var7.getLatestChildSpanEndTimestamp;
                            var1 = var1.bind(var7)(var6);
                            if (!(var1 !== var12)) {
                                _fun12690_ip = 258;
                                continue _fun12690
                            }
                        case 219:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var8];
                            var7 = var9.bind(var0)(var7);
                            var10 = var7.debug;
                            var9 = var10.log;
                            var7 = '[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).';
                            var7 = var9.bind(var10)(var7);
                        case 258:
                            var7 = var5.atTimestamp;
                            if (var7) {
                                _fun12690_ip = 306;
                                continue _fun12690
                            }
                        case 267:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var8];
                            var7 = var9.bind(var0)(var7);
                            var10 = var7.debug;
                            var9 = var10.log;
                            var7 = '[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.';
                            var7 = var9.bind(var10)(var7);
                        case 306:
                            var7 = var1 === var12;
                            if (!var7) {
                                _fun12690_ip = 319;
                                continue _fun12690
                            }
                        case 313:
                            var7 = var5.atTimestamp;
                        case 319:
                            var1 = undefined;
                            if (!var7) {
                                _fun12690_ip = 347;
                                continue _fun12690
                            }
                        case 324:
                            var7 = var5.atTimestamp;
                            var1 = var7.stats;
                            _fun12690_ip = 347;
                            continue _fun12690;
                        case 338:
                            var7 = _closure2_slot7;
                            var1 = var7.bind(var0)(var6);
                        case 347:
                            var9 = _closure2_slot1;
                            var7 = var9.delete;
                            var7 = var7.bind(var9)(var6);
                            var3 = _closure2_slot9;
                            var3 = var3.bind(var0)();
                            if (var1) {
                                _fun12690_ip = 455;
                                continue _fun12690
                            }
                        case 372:
                            if (!(var0 !== var12)) {
                                _fun12690_ip = 709;
                                continue _fun12690
                            }
                        case 379:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var9 = var3[var8];
                            var9 = var7.bind(var0)(var9);
                            var11 = var9.debug;
                            var10 = var11.log;
                            var3 = var3[var8];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.timestampInSeconds;
                            var13 = var3.bind(var7)();
                            var17 = '[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.';
                            var16 = 'endTimestamp';
                            var14 = 'now';
                            var18 = var11;
                            var15 = var12;
                            var3 = var18[var10](var17, var16, var15, var14, var13, var12);
                            _fun12690_ip = 709;
                            continue _fun12690;
                        case 455:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = var7[var4];
                            var12 = var3.bind(var0)(var2);
                            var11 = var12.setSpanMeasurement;
                            var2 = 5;
                            var8 = var7[var2];
                            var8 = var3.bind(var0)(var8);
                            var16 = var8.STALL_COUNT;
                            var8 = var1.stall_count;
                            var9 = var8.value;
                            var8 = var5.atStart;
                            var8 = var8.stall_count;
                            var8 = var8.value;
                            var15 = var9 - var8;
                            var8 = var5.atStart;
                            var8 = var8.stall_count;
                            var14 = var8.unit;
                            var18 = var12;
                            var17 = var6;
                            var8 = var18[var11](var17, var16, var15, var14, var13);
                            var8 = var7[var4];
                            var11 = var3.bind(var0)(var8);
                            var10 = var11.setSpanMeasurement;
                            var8 = var7[var2];
                            var8 = var3.bind(var0)(var8);
                            var16 = var8.STALL_TOTAL_TIME;
                            var8 = var1.stall_total_time;
                            var12 = var8.value;
                            var8 = var5.atStart;
                            var8 = var8.stall_total_time;
                            var8 = var8.value;
                            var15 = var12 - var8;
                            var5 = var5.atStart;
                            var5 = var5.stall_total_time;
                            var14 = var5.unit;
                            var18 = var11;
                            var17 = var6;
                            var5 = var18[var10](var17, var16, var15, var14, var13);
                            var4 = var7[var4];
                            var5 = var3.bind(var0)(var4);
                            var4 = var5.setSpanMeasurement;
                            var2 = var7[var2];
                            var2 = var3.bind(var0)(var2);
                            var16 = var2.STALL_LONGEST_TIME;
                            var2 = var1.stall_longest_time;
                            var15 = var2.value;
                            var1 = var1.stall_longest_time;
                            var14 = var1.unit;
                            var18 = var5;
                            var17 = var6;
                            var1 = var18[var4](var17, var16, var15, var14, var13);
                        case 709:
                            return var0;
                    }
                };
                var _closure2_slot4 = var0;
                var0 = function arg0() {
                    _fun12691: for (var _fun12691_ip = 0;;) switch (_fun12691_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var3 = var5[var1];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var3);
                            var3 = var6.getRootSpan;
                            var3 = var3.bind(var6)(var4);
                            var1 = var5[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.spanToJSON;
                            var1 = var1.bind(var2)(var4);
                            var2 = var1.timestamp;
                            if (!var2) {
                                _fun12691_ip = 81;
                                continue _fun12691
                            }
                        case 68:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)(var3, var2);
                        case 81:
                            return var0;
                    }
                };
                var _closure2_slot5 = var0;
                var0 = function arg0, arg1() {
                    _fun12692: for (var _fun12692_ip = 0;;) switch (_fun12692_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = arg1;
                            var2 = _closure2_slot1;
                            var0 = var2.get;
                            var8 = var0.bind(var2)(var3);
                            if (!var8) {
                                _fun12692_ip = 312;
                                continue _fun12692
                            }
                        case 29:
                            var0 = global;
                            var10 = var0.Math;
                            var9 = var10.abs;
                            var11 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var7 = 2;
                            var4 = var4[var7];
                            var6 = undefined;
                            var11 = var11.bind(var6)(var4);
                            var4 = var11.timestampInSeconds;
                            var4 = var4.bind(var11)();
                            var4 = var4 - var5;
                            var9 = var9.bind(var10)(var4);
                            var4 = 0.02;
                            if (!(!(var9 > var4))) {
                                _fun12692_ip = 185;
                                continue _fun12692
                            }
                        case 101:
                            var10 = _closure2_slot1;
                            var9 = var10.set;
                            var13 = var0.Object;
                            var12 = var13.assign;
                            var14 = var0.Object;
                            var11 = var14.assign;
                            var4 = {};
                            var11 = var11.bind(var14)(var4, var8);
                            var4 = {};
                            var14 = {};
                            var14.timestamp = var5;
                            var15 = _closure2_slot7;
                            var15 = var15.bind(var6)(var3);
                            var14.stats = var15;
                            var4.atTimestamp = var14;
                            var4 = var12.bind(var13)(var11, var4);
                            var4 = var9.bind(var10)(var3, var4);
                            _fun12692_ip = 312;
                            continue _fun12692;
                        case 185:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var7];
                            var2 = var4.bind(var6)(var2);
                            var6 = var2.debug;
                            var4 = var6.log;
                            var2 = '[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.';
                            var2 = var4.bind(var6)(var2);
                            var2 = var8.atTimestamp;
                            if (!var2) {
                                _fun12692_ip = 249;
                                continue _fun12692
                            }
                        case 233:
                            var4 = var8.atTimestamp;
                            var4 = var4.timestamp;
                            var2 = var4 < var5;
                        case 249:
                            if (!var2) {
                                _fun12692_ip = 312;
                                continue _fun12692
                            }
                        case 252:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var6 = var0.Object;
                            var5 = var6.assign;
                            var7 = var0.Object;
                            var4 = var7.assign;
                            var0 = {};
                            var4 = var4.bind(var7)(var0, var8);
                            var0 = {};
                            var7 = null;
                            var0.atTimestamp = var7;
                            var0 = var5.bind(var6)(var4, var0);
                            var0 = var1.bind(var2)(var3, var0);
                        case 312:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot6 = var0;
                var0 = function arg0() {
                    _fun12693: for (var _fun12693_ip = 0;;) switch (_fun12693_ip) {
                        case 0:
                            var0 = {};
                            var1 = {};
                            var2 = _closure2_slot2;
                            var2 = var2.stallCount;
                            var1.value = var2;
                            var2 = 'none';
                            var1.unit = var2;
                            var0.stall_count = var1;
                            var1 = {};
                            var2 = _closure2_slot2;
                            var2 = var2.totalStallTime;
                            var1.value = var2;
                            var2 = 'millisecond';
                            var1.unit = var2;
                            var0.stall_total_time = var1;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var4 = var5.get;
                            var3 = arg0;
                            var3 = var4.bind(var5)(var3);
                            var5 = undefined;
                            var7 = null;
                            var4 = undefined;
                            if (!(var7 !== var3)) {
                                _fun12693_ip = 106;
                                continue _fun12693
                            }
                        case 94:
                            var4 = undefined;
                            if (!(var4 !== var3)) {
                                _fun12693_ip = 106;
                                continue _fun12693
                            }
                        case 100:
                            var4 = var3.longestStallTime;
                        case 106:
                            var3 = 0;
                            if (!(var7 !== var4)) {
                                _fun12693_ip = 121;
                                continue _fun12693
                            }
                        case 112:
                            var3 = 0;
                            if (!(var5 !== var4)) {
                                _fun12693_ip = 121;
                                continue _fun12693
                            }
                        case 118:
                            var3 = var4;
                        case 121:
                            var1.value = var3;
                            var1.unit = var2;
                            var0.stall_longest_time = var1;
                            return var0;
                    }
                };
                var _closure2_slot7 = var0;
                var0 = function() {
                    _fun12694: for (var _fun12694_ip = 0;;) switch (_fun12694_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = var1.isTracking;
                            if (var1) {
                                _fun12694_ip = 116;
                                continue _fun12694
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = true;
                            var2.isTracking = var1;
                            var2 = _closure2_slot2;
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.floor;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var1 = var5.timestampInSeconds;
                            var5 = var1.bind(var5)();
                            var1 = 1000;
                            var1 = var1 * var5;
                            var1 = var3.bind(var4)(var1);
                            var2.lastIntervalMs = var1;
                            var1 = _closure2_slot2;
                            var0 = var1.iteration;
                            var0 = var0.bind(var1)();
                        case 116:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot8 = var0;
                var0 = function() {
                    _fun12695: for (var _fun12695_ip = 0;;) switch (_fun12695_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.size;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun12695_ip = 91;
                                continue _fun12695
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = false;
                            var2.isTracking = var1;
                            var1 = _closure2_slot2;
                            var1 = var1.timeout;
                            var2 = null;
                            if (!(var2 !== var1)) {
                                _fun12695_ip = 81;
                                continue _fun12695
                            }
                        case 46:
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var1 = _closure2_slot2;
                            var3 = var1.timeout;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = _closure2_slot2;
                            var1.timeout = var2;
                        case 81:
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 91:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot9 = var0;
                var0 = function() {
                    var1 = _closure2_slot2;
                    var2 = 0;
                    var1.stallCount = var2;
                    var1 = _closure2_slot2;
                    var1.totalStallTime = var2;
                    var1 = _closure2_slot2;
                    var1.lastIntervalMs = var2;
                    var1 = _closure2_slot1;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot10 = var0;
                var0 = function() {
                    _fun12697: for (var _fun12697_ip = 0;;) switch (_fun12697_ip) {
                        case 0:
                            var0 = undefined;
                            var5 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                            var1 = _closure2_slot1;
                            var1 = var1.size;
                            var2 = 10;
                            if (!(var1 > var2)) {
                                _fun12697_ip = 126;
                                continue _fun12697
                            }
                        case 27:
                            var5 = 0;
                            var1 = _closure2_slot1;
                            var1 = var1.size;
                            var6 = var1 - var2;
                            var2 = _closure2_slot1;
                            var1 = var2.keys;
                            var1 = var1.bind(var2)();
                            var3 = var1;
                            var2 = var3[Symbol.iterator];
                            var3 = var2().next;
                            var1 = 1;
                        case 64:
                            var8 = var3().value;
                            var9 = var2;
                            if (!(var9 !== var0)) {
                                _fun12697_ip = 126;
                                continue _fun12697
                            }
                        case 75: // try_start_0
                            var7 = var8;
                            var9 = var5;
                            var8 = var6;
                            if (!(!(var9 >= var8))) {
                                _fun12697_ip = 114;
                                continue _fun12697
                            }
                        case 88:
                            var8 = var5;
                            var5 = var8 + var1;
                            var10 = _closure2_slot1;
                            var9 = var10.delete;
                            var8 = var7;
                            var8 = var9.bind(var10)(var8);
                        case 112: // try_end0
                            _fun12697_ip = 64;
                            continue _fun12697;
                        case 114:
                            var2.return();
                            _fun12697_ip = 126;
                            continue _fun12697;
                        case 119: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 126:
                            return var0;
                    }
                };
                var _closure2_slot11 = var0;
                var4 = _closure1_slot3;
                var4 = var5 == var4;
                var3 = undefined;
                if (var4) {
                    _fun12686_ip = 226;
                    continue _fun12686
                }
            case 216:
                var4 = _closure1_slot3;
                var3 = var4.isAvailable;
            case 226:
                if (!var3) {
                    _fun12686_ip = 255;
                    continue _fun12686
                }
            case 229:
                var5 = _closure1_slot3;
                var4 = var5.addEventListener;
                var3 = var1.backgroundEventListener;
                var0 = 'change';
                var0 = var4.bind(var5)(var0, var3);
            case 255:
                var0 = {};
                var3 = 'StallTracking';
                var0.name = var3;
                var2 = function arg0() {
                    var3 = arg0;
                    var4 = var3.on;
                    var2 = _closure2_slot3;
                    var1 = 'spanStart';
                    var1 = var4.bind(var3)(var1, var2);
                    var2 = var3.on;
                    var1 = _closure2_slot4;
                    var0 = 'spanEnd';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var0.setup = var2;
                var0._internalState = var1;
                return var0;
        }
    };
    var2.stallTrackingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 817, 1118, 1155, 1158]);