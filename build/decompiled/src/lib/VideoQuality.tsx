// lib/VideoQuality.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun93826: for (var _fun93826_ip = 0;;) switch (_fun93826_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93826_ip = 46;
                    continue _fun93826
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93826_ip = 55;
                    continue _fun93826
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93826_ip = 345;
                    continue _fun93826
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93826_ip = 323;
                    continue _fun93826
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93826_ip = 283;
                    continue _fun93826
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93826_ip = 270;
                    continue _fun93826
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
                    _fun93826_ip = 163;
                    continue _fun93826
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93826_ip = 179;
                    continue _fun93826
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93826_ip = 249;
                    continue _fun93826
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93826_ip = 249;
                    continue _fun93826
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93826_ip = 234;
                    continue _fun93826
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93826_ip = 247;
                    continue _fun93826
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93826_ip = 265;
                continue _fun93826;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93826_ip = 283;
                continue _fun93826;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93826_ip = 323;
                    continue _fun93826
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
                    _fun93826_ip = 330;
                    continue _fun93826
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93827: for (var _fun93827_ip = 0;;) switch (_fun93827_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93827_ip = 56;
                                continue _fun93827
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
                            _fun93827_ip = 67;
                            continue _fun93827;
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
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun93828: for (var _fun93828_ip = 0;;) switch (_fun93828_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93828_ip = 23;
                    continue _fun93828
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93828_ip = 33;
                    continue _fun93828
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
                    _fun93828_ip = 70;
                    continue _fun93828
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93828_ip = 55;
                    continue _fun93828
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun93829: for (var _fun93829_ip = 0;;) switch (_fun93829_ip) {
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
                _fun93829_ip = 76;
                continue _fun93829;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0) { // Original name: round, environment: var1
        _fun93832: for (var _fun93832_ip = 0;;) switch (_fun93832_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun93832_ip = 14;
                    continue _fun93832
                }
            case 12:
                var0 = 0;
            case 14:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun93832_ip = 38;
                    continue _fun93832
                }
            case 20:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.round;
                var0 = var1.bind(var2)(var3);
            case 38:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'fps-update';
    var3.FpsUpdate = var4;
    var _closure1_slot8 = var3;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: VideoQuality, environment: var5
            _fun93834: for (var _fun93834_ip = 0;;) switch (_fun93834_ip) {
                case 0:
                    var7 = arguments[1];
                    var5 = this;
                    var3 = undefined;
                    if (!(var7 === var3)) {
                        _fun93834_ip = 43;
                        continue _fun93834
                    }
                case 14:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var7 = var0.TimeStampProducer;
                case 43:
                    var _closure3_slot0 = var3;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var0 = var0.bind(var3)(var5, var4);
                    var0 = _closure1_slot6;
                    var11 = var0.bind(var3)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun93834_ip = 104;
                        continue _fun93834
                    }
                case 91:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var5, var3);
                    _fun93834_ip = 142;
                    continue _fun93834;
                case 104:
                    var6 = global;
                    var10 = var6.Reflect;
                    var9 = var10.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var5);
                    var8 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var9.bind(var10)(var11, var6, var8);
                case 142:
                    var0 = var4.bind(var3)(var5, var0);
                    _closure3_slot0 = var0;
                    var4 = arg0;
                    var0.connection = var4;
                    var0.timestampProducer = var7;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 6;
                    var5 = var4[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var6;
                    var5 = new var15[var5](var14);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.networkQuality = var5;
                    var5 = 0;
                    var0.pausedCount = var5;
                    var0.simulcastQualityChanges = var5;
                    var0.cameraToggles = var5;
                    var0.callUserIdsCount = var5;
                    var0.numWindowOcclusionChanges = var5;
                    var6 = {};
                    var0.outboundStats = var6;
                    var6 = {};
                    var0.inboundStats = var6;
                    var0.symmetricCodecUpdates = var5;
                    var0.asymmetricCodecUpdates = var5;
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var6;
                    var5 = new var15[var5](var14);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.statCollectionPausedUsers = var5;
                    var2 = function(arg0) { // Environment: var2
                        _fun93835: for (var _fun93835_ip = 0;;) switch (_fun93835_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun93835_ip = 128;
                                    continue _fun93835
                                }
                            case 9:
                                var2 = _closure3_slot0;
                                var3 = var2.timestampProducer;
                                var2 = var3.now;
                                var3 = var2.bind(var3)();
                                var2 = _closure3_slot0;
                                var5 = var2.networkQuality;
                                var2 = var5.incrementNetworkStats;
                                var2 = var2.bind(var5)(var3);
                                var5 = _closure3_slot0;
                                var2 = var5.updateSystemResourceStats;
                                var2 = var2.bind(var5)();
                                var5 = _closure3_slot0;
                                var2 = var5.updateVideoEffectStats;
                                var2 = var2.bind(var5)(var4);
                                if (!(var1 != var4)) {
                                    _fun93835_ip = 128;
                                    continue _fun93835
                                }
                            case 89:
                                var1 = _closure3_slot0;
                                var2 = var1.connection;
                                var1 = var2.getStreamParameters;
                                var2 = var1.bind(var2)();
                                var1 = _closure3_slot0;
                                var0 = var1.receivedStats;
                                var0 = var0.bind(var1)(var3, var4, var2);
                            case 128:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.sampleStats = var2;
                    var2 = _closure1_slot0;
                    var1 = 5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var6 = var5.prototype;
                    var8 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.paused = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.zeroReceivers = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.videoStopped = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.videoEffectDuration = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.hqSimulcastStreamEncoded = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.lqSimulcastStreamEncoded = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.bothSimulcastStreamsEncoded = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.hqSimulcastStreamWatched = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.lqSimulcastStreamWatched = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.hqSimulcastStreamEligible = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.lqSimulcastStreamEligible = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.windowOccluded = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.videoStoppedForOcclusion = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.bandwidthLimitedFramerate = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.bandwidthLimitedResolution = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.cameraDuration = var5;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.DurationEnabled;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var8;
                    var14 = false;
                    var13 = var7;
                    var5 = new var15[var5](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var8;
                    var0.cameraOpportunityDuration = var5;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.DurationEnabled;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var5;
                    var14 = false;
                    var13 = var7;
                    var1 = new var15[var1](var14, var13, var12);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var0.cameraSendDuration = var1;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.Histogram;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var1 = new var15[var1](var14);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.videoEntropy = var1;
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
        var0 = 'addUserToStatsCollectionPausedSet';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.statCollectionPausedUsers;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(29);
        var0[0] = var4;
        var4 = {};
        var6 = 'removeUserFromStatsCollectionPausedSet';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.statCollectionPausedUsers;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'start';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var2 = var1.timestampProducer;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.streamStart = var0;
            var4 = var1.connection;
            var3 = var4.on;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 8;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Stats;
            var1 = var1.sampleStats;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'setOutboundSsrc';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93839: for (var _fun93839_ip = 0;;) switch (_fun93839_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.outboundStats;
                    var3 = var1[var2];
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun93839_ip = 89;
                        continue _fun93839
                    }
                case 22:
                    var1 = var0.outboundStats;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.OutboundStats;
                    var6 = var0.timestampProducer;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var0 = new var7[var4](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var1[var2] = var0;
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getOrCreateInboundStats';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93840: for (var _fun93840_ip = 0;;) switch (_fun93840_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.inboundStats;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun93840_ip = 89;
                        continue _fun93840
                    }
                case 22:
                    var3 = var0.inboundStats;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.InboundStats;
                    var6 = var0.timestampProducer;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = var4;
                    var2 = new var7[var5](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3[var1] = var2;
                case 89:
                    var0 = var0.inboundStats;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'updateCallUserIdsCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var0 = this;
            var0.callUserIdsCount = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'setInboundUser';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.getOrCreateInboundStats;
            var0 = arg0;
            var4 = var1.bind(var2)(var0);
            var3 = var4.setVideoStopped;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.VideoStoppedReasons;
            var2 = var1.SenderStopped;
            var5 = 0;
            var1 = arg1;
            var1 = var5 === var1;
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setUserVideoDisabled';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun93843: for (var _fun93843_ip = 0;;) switch (_fun93843_ip) {
                case 0:
                    var3 = arg1;
                    var1 = this;
                    var2 = var1.getOrCreateInboundStats;
                    var0 = arg0;
                    var2 = var2.bind(var1)(var0);
                    var5 = var2.setVideoStopped;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.VideoStoppedReasons;
                    var4 = var4.ClientSideDisableVideo;
                    var4 = var5.bind(var2)(var3, var4);
                    var3 = !var3;
                    if (!var3) {
                        _fun93843_ip = 92;
                        continue _fun93843
                    }
                case 75:
                    var4 = var2.statsWindow;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var5 > var4;
                case 92:
                    if (!var3) {
                        _fun93843_ip = 117;
                        continue _fun93843
                    }
                case 95:
                    var4 = var2.statsWindow;
                    var5 = 0;
                    var4 = var4[var5];
                    var4 = var4.packets;
                    var3 = var5 === var4;
                case 117:
                    if (!var3) {
                        _fun93843_ip = 141;
                        continue _fun93843
                    }
                case 120:
                    var3 = var1.timestampProducer;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2.startTime = var1;
                case 141:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'setOcclusionIncomingVideoEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.videoStoppedForOcclusion;
            var0 = arg0;
            var0 = !var0;
            var1.value = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'setWindowOcclusionState';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93845: for (var _fun93845_ip = 0;;) switch (_fun93845_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.windowOccluded;
                    var2 = var2.value;
                    if (!(var1 !== var2)) {
                        _fun93845_ip = 36;
                        continue _fun93845
                    }
                case 21:
                    var2 = var0.numWindowOcclusionChanges;
                    var2 = var2 + 1;
                    var0.numWindowOcclusionChanges = var2;
                case 36:
                    var0 = var0.windowOccluded;
                    var0.value = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'pause';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun93846: for (var _fun93846_ip = 0;;) switch (_fun93846_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.paused;
                    var0 = var0.value;
                    if (var0) {
                        _fun93846_ip = 34;
                        continue _fun93846
                    }
                case 19:
                    var0 = var3.pausedCount;
                    var0 = var0 + 1;
                    var3.pausedCount = var0;
                case 34:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var6 = var5[var2];
                    var0 = undefined;
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.forEach;
                    var7 = var3.outboundStats;
                    var6 = function(arg0) { // Environment: var1
                        var1 = new Array(0);
                        var0 = arg0;
                        var0.statsWindow = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var2 = var5[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.forEach;
                    var2 = var3.inboundStats;
                    var1 = function(arg0) { // Environment: var1
                        var1 = new Array(0);
                        var0 = arg0;
                        var0.statsWindow = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var2, var1);
                    var2 = var3.updateSendState;
                    var1 = {};
                    var4 = true;
                    var1.paused = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'resume';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.updateSendState;
            var0 = {};
            var3 = false;
            var0.paused = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'stop';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var5 = var2.connection;
            var4 = var5.off;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var3 = var1.Stats;
            var1 = var2.sampleStats;
            var1 = var4.bind(var5)(var3, var1);
            var3 = var2.timestampProducer;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2.streamEnd = var1;
            var1 = var2.removeAllListeners;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'setViewedSimulcastQuality';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93851: for (var _fun93851_ip = 0;;) switch (_fun93851_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.hqSimulcastStreamWatched;
                    var2 = var2.value;
                    var2 = var0 !== var2;
                    if (!var2) {
                        _fun93851_ip = 72;
                        continue _fun93851
                    }
                case 24:
                    var4 = var1.hqSimulcastStreamWatched;
                    var3 = var4.totalDuration;
                    var3 = var3.bind(var4)();
                    var5 = 0;
                    var3 = var3 > var5;
                    if (var3) {
                        _fun93851_ip = 69;
                        continue _fun93851
                    }
                case 49:
                    var6 = var1.lqSimulcastStreamWatched;
                    var4 = var6.totalDuration;
                    var4 = var4.bind(var6)();
                    var3 = var4 > var5;
                case 69:
                    var2 = var3;
                case 72:
                    if (!var2) {
                        _fun93851_ip = 90;
                        continue _fun93851
                    }
                case 75:
                    var2 = var1.simulcastQualityChanges;
                    var2 = var2 + 1;
                    var1.simulcastQualityChanges = var2;
                case 90:
                    var2 = var1.hqSimulcastStreamWatched;
                    var2.value = var0;
                    var1 = var1.lqSimulcastStreamWatched;
                    var0 = !var0;
                    var1.value = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'setEligibleSimulcastQuality';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var1 = this;
            var2 = var1.hqSimulcastStreamEligible;
            var2.value = var0;
            var1 = var1.lqSimulcastStreamEligible;
            var0 = !var0;
            var1.value = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getNetworkStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.networkQuality;
            var0 = var1.getStats;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getEncoderUsageStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun93854: for (var _fun93854_ip = 0;;) switch (_fun93854_ip) {
                case 0:
                    var14 = this;
                    var13 = global;
                    var0 = var13.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var20 = var1;
                    var0 = new var20[var0](var19);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var11 = var14.outboundStats;
                    var6 = undefined;
                    for (var8 in var11)
                        case 53: {
                            case 65: var5 = var8;
                            var1 = var13.Map;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var20 = var2;
                            var1 = new var20[var1](var19);
                            var4 = var1 instanceof Object ? var1 : var2;
                            var2 = _closure1_slot9;
                            var1 = var14.outboundStats;
                            var3 = var1[var5];
                            var1 = var3.getCodecsUsed;
                            var1 = var1.bind(var3)();
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.bind(var6)();
                            var1 = var2.done;
                            if (var1) {
                                _fun93854_ip = 53;
                                continue _fun93854
                            }
                            case 135: var15 = var2.value;
                            var1 = var15.toUpperCase;
                            var16 = var1.bind(var15)();
                            var15 = var4.set;
                            var17 = _closure1_slot12;
                            var1 = var14.outboundStats;
                            var1 = var1[var5];
                            var1 = var1.codecBuckets;
                            var1 = var1[var16];
                            var1 = var17.bind(var6)(var1);
                            var1 = var15.bind(var4)(var16, var1);
                            var15 = var0.set;
                            var1 = var13.parseInt;
                            var1 = var1.bind(var6)(var5);
                            var1 = var15.bind(var0)(var1, var4);
                            var15 = var3.bind(var6)();
                            var1 = var15.done;
                            var2 = var15;
                            if (var1) {
                                _fun93854_ip = 53;
                                continue _fun93854
                            }
                            case 230: _fun93854_ip = 135;
                            continue _fun93854;
                        }
                case 232:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getDecoderUsageStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun93855: for (var _fun93855_ip = 0;;) switch (_fun93855_ip) {
                case 0:
                    var14 = this;
                    var13 = global;
                    var0 = var13.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var20 = var1;
                    var0 = new var20[var0](var19);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var11 = var14.inboundStats;
                    var6 = undefined;
                    for (var8 in var11)
                        case 53: {
                            case 65: var5 = var8;
                            var1 = var13.Map;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var20 = var2;
                            var1 = new var20[var1](var19);
                            var4 = var1 instanceof Object ? var1 : var2;
                            var2 = _closure1_slot9;
                            var1 = var14.inboundStats;
                            var3 = var1[var5];
                            var1 = var3.getCodecsUsed;
                            var1 = var1.bind(var3)();
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.bind(var6)();
                            var1 = var2.done;
                            if (var1) {
                                _fun93855_ip = 53;
                                continue _fun93855
                            }
                            case 135: var15 = var2.value;
                            var1 = var15.toUpperCase;
                            var16 = var1.bind(var15)();
                            var15 = var4.set;
                            var17 = _closure1_slot12;
                            var1 = var14.inboundStats;
                            var1 = var1[var5];
                            var1 = var1.codecBuckets;
                            var1 = var1[var16];
                            var1 = var17.bind(var6)(var1);
                            var1 = var15.bind(var4)(var16, var1);
                            var1 = var0.set;
                            var1 = var1.bind(var0)(var5, var4);
                            var15 = var3.bind(var6)();
                            var1 = var15.done;
                            var2 = var15;
                            if (var1) {
                                _fun93855_ip = 53;
                                continue _fun93855
                            }
                            case 219: _fun93855_ip = 135;
                            continue _fun93855;
                        }
                case 221:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getCodecUsageStats';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun93856: for (var _fun93856_ip = 0;;) switch (_fun93856_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var2 = var1.asymmetricCodecUpdates;
                    var0 = var1.symmetricCodecUpdates;
                    var2 = var2 > var0;
                    var0 = global;
                    var0 = var0.Map;
                    var4 = var0.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var0
                        }
                    });
                    var16 = var4;
                    var0 = new var16[var0](var15);
                    var4 = var0 instanceof Object ? var0 : var4;
                    var0 = 'sender';
                    if (!(var0 !== var3)) {
                        _fun93856_ip = 485;
                        continue _fun93856
                    }
                case 64:
                    var0 = 'streamer';
                    if (!(var0 !== var3)) {
                        _fun93856_ip = 485;
                        continue _fun93856
                    }
                case 77:
                    var0 = var1.getDecoderUsageStats;
                    var3 = var0.bind(var1)();
                    var0 = var3.has;
                    var0 = var0.bind(var3)(var5);
                    var7 = var4;
                    if (!var0) {
                        _fun93856_ip = 115;
                        continue _fun93856
                    }
                case 105:
                    var0 = var3.get;
                    var7 = var0.bind(var3)(var5);
                case 115:
                    var0 = {};
                    var0.codec_asymmetric_session = var2;
                    var6 = var7.get;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var11 = 9;
                    var3 = var3[var11];
                    var10 = undefined;
                    var3 = var8.bind(var10)(var3);
                    var3 = var3.CodecTypes;
                    var3 = var3.H264;
                    var9 = var6.bind(var7)(var3);
                    var6 = null;
                    var12 = var6 != var9;
                    var8 = var7;
                    var7 = 0;
                    if (!var12) {
                        _fun93856_ip = 186;
                        continue _fun93856
                    }
                case 183:
                    var7 = var9;
                case 186:
                    var0.codec_h264_decode_duration_sec = var7;
                    var9 = var8.get;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.CodecTypes;
                    var7 = var7.H265;
                    var9 = var9.bind(var8)(var7);
                    var12 = var6 != var9;
                    var7 = 0;
                    if (!var12) {
                        _fun93856_ip = 244;
                        continue _fun93856
                    }
                case 241:
                    var7 = var9;
                case 244:
                    var0.codec_h265_decode_duration_sec = var7;
                    var9 = var8.get;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.CodecTypes;
                    var7 = var7.VP8;
                    var9 = var9.bind(var8)(var7);
                    var12 = var6 != var9;
                    var7 = 0;
                    if (!var12) {
                        _fun93856_ip = 302;
                        continue _fun93856
                    }
                case 299:
                    var7 = var9;
                case 302:
                    var0.codec_vp8_decode_duration_sec = var7;
                    var9 = var8.get;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.CodecTypes;
                    var7 = var7.VP9;
                    var9 = var9.bind(var8)(var7);
                    var12 = var6 != var9;
                    var7 = 0;
                    if (!var12) {
                        _fun93856_ip = 360;
                        continue _fun93856
                    }
                case 357:
                    var7 = var9;
                case 360:
                    var0.codec_vp9_decode_duration_sec = var7;
                    var9 = var8.get;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.CodecTypes;
                    var7 = var7.AV1;
                    var9 = var9.bind(var8)(var7);
                    var12 = var6 != var9;
                    var7 = 0;
                    if (!var12) {
                        _fun93856_ip = 418;
                        continue _fun93856
                    }
                case 415:
                    var7 = var9;
                case 418:
                    var0.codec_av1_decode_duration_sec = var7;
                    var7 = var8.get;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.CodecTypes;
                    var5 = var5.UNKNOWN;
                    var5 = var7.bind(var8)(var5);
                    var6 = var6 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun93856_ip = 476;
                        continue _fun93856
                    }
                case 473:
                    var3 = var5;
                case 476:
                    var0.codec_unknown_decode_duration_sec = var3;
                    return var0;
                case 485:
                    var0 = var1.getEncoderUsageStats;
                    var5 = var0.bind(var1)();
                    var0 = var5.size;
                    var1 = 0;
                    if (!(var0 > var1)) {
                        _fun93856_ip = 554;
                        continue _fun93856
                    }
                case 508:
                    var0 = var5.keys;
                    var14 = var0.bind(var5)();
                    var3 = new Array(0);
                    var15 = var3;
                    var13 = 0;
                    var0 = arraySpread(var15, var14, var13);
                    var0 = var3.sort;
                    var0 = var0.bind(var3)();
                    var3 = var0[var1];
                    var0 = var5.get;
                    var4 = var0.bind(var5)(var3);
                case 554:
                    var0 = {};
                    var0.codec_asymmetric_session = var2;
                    var5 = var4.get;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 9;
                    var3 = var3[var8];
                    var7 = undefined;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CodecTypes;
                    var3 = var3.H264;
                    var6 = var5.bind(var4)(var3);
                    var3 = null;
                    var9 = var3 != var6;
                    var5 = var4;
                    var4 = 0;
                    if (!var9) {
                        _fun93856_ip = 625;
                        continue _fun93856
                    }
                case 622:
                    var4 = var6;
                case 625:
                    var0.codec_h264_encode_duration_sec = var4;
                    var6 = var5.get;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var9.bind(var7)(var4);
                    var4 = var4.CodecTypes;
                    var4 = var4.H265;
                    var6 = var6.bind(var5)(var4);
                    var9 = var3 != var6;
                    var4 = 0;
                    if (!var9) {
                        _fun93856_ip = 683;
                        continue _fun93856
                    }
                case 680:
                    var4 = var6;
                case 683:
                    var0.codec_h265_encode_duration_sec = var4;
                    var6 = var5.get;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var9.bind(var7)(var4);
                    var4 = var4.CodecTypes;
                    var4 = var4.VP8;
                    var6 = var6.bind(var5)(var4);
                    var9 = var3 != var6;
                    var4 = 0;
                    if (!var9) {
                        _fun93856_ip = 741;
                        continue _fun93856
                    }
                case 738:
                    var4 = var6;
                case 741:
                    var0.codec_vp8_encode_duration_sec = var4;
                    var6 = var5.get;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var9.bind(var7)(var4);
                    var4 = var4.CodecTypes;
                    var4 = var4.VP9;
                    var6 = var6.bind(var5)(var4);
                    var9 = var3 != var6;
                    var4 = 0;
                    if (!var9) {
                        _fun93856_ip = 799;
                        continue _fun93856
                    }
                case 796:
                    var4 = var6;
                case 799:
                    var0.codec_vp9_encode_duration_sec = var4;
                    var6 = var5.get;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var9.bind(var7)(var4);
                    var4 = var4.CodecTypes;
                    var4 = var4.AV1;
                    var6 = var6.bind(var5)(var4);
                    var9 = var3 != var6;
                    var4 = 0;
                    if (!var9) {
                        _fun93856_ip = 857;
                        continue _fun93856
                    }
                case 854:
                    var4 = var6;
                case 857:
                    var0.codec_av1_encode_duration_sec = var4;
                    var4 = var5.get;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.CodecTypes;
                    var2 = var2.UNKNOWN;
                    var2 = var4.bind(var5)(var2);
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun93856_ip = 915;
                        continue _fun93856
                    }
                case 912:
                    var1 = var2;
                case 915:
                    var0.codec_unknown_encode_duration_sec = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getCameraDurationStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = {};
            var2 = global;
            var5 = var2.Math;
            var4 = var5.round;
            var6 = var1.cameraDuration;
            var3 = var6.totalDurationSeconds;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var0.camera_enabled_duration = var3;
            var5 = var2.Math;
            var4 = var5.round;
            var6 = var1.cameraOpportunityDuration;
            var3 = var6.totalDurationSeconds;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var0.camera_send_opportunity_duration = var3;
            var4 = var2.Math;
            var3 = var4.round;
            var5 = var1.cameraSendDuration;
            var2 = var5.totalDurationSeconds;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var0.camera_send_duration = var2;
            var1 = var1.cameraToggles;
            var0.num_camera_on_toggles = var1;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getOutboundStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var _closure3_slot0 = var2;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.forEach;
            var2 = var2.outboundStats;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun93859: for (var _fun93859_ip = 0;;) switch (_fun93859_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var0 = _closure3_slot0;
                        var2 = var0.connection;
                        var7 = null;
                        var1 = var7 == var2;
                        var0 = undefined;
                        var3 = undefined;
                        if (var1) {
                            _fun93859_ip = 48;
                            continue _fun93859
                        }
                    case 38:
                        var1 = var2.getStreamParameters;
                        var3 = var1.bind(var2)();
                    case 48:
                        var1 = var3.length;
                        var12 = 1;
                        if (!(var1 > var12)) {
                            _fun93859_ip = 77;
                            continue _fun93859
                        }
                    case 60:
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var14
                            _fun93860: for (var _fun93860_ip = 0;;) switch (_fun93860_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = global;
                                    var4 = var0.parseInt;
                                    var3 = _closure4_slot0;
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var1.ssrc;
                                    if (!(var4 === var3)) {
                                        _fun93860_ip = 60;
                                        continue _fun93860
                                    }
                                case 35:
                                    var3 = var1.quality;
                                    var1 = null;
                                    var4 = var1 != var3;
                                    var1 = 50;
                                    if (!var4) {
                                        _fun93860_ip = 56;
                                        continue _fun93860
                                    }
                                case 53:
                                    var1 = var3;
                                case 56:
                                    var _closure4_slot1 = var1;
                                case 60:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 77:
                        var4 = [1, 5, 10, 25, 50, 75];
                        var3 = [1, 5, 10, 25, 50, 75, 99];
                        var2 = var6.vmafHistogram;
                        var1 = var2.getReport;
                        var13 = var1.bind(var2)(var4);
                        var2 = var6.psnrHistogram;
                        var1 = var2.getReport;
                        var11 = var1.bind(var2)(var4);
                        var2 = var6.targetBitrateHistogram;
                        var1 = var2.getReport;
                        var15 = var1.bind(var2)(var3);
                        var2 = var6.outboundBandwidthSurplus;
                        var1 = var2.getReport;
                        var4 = var1.bind(var2)(var3);
                        var10 = _closure3_slot0;
                        var2 = var10.videoEntropy;
                        var1 = var2.getReport;
                        var5 = var1.bind(var2)(var3);
                        var2 = var6.aggregationDuration;
                        var1 = 1000;
                        var18 = var2 / var1;
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var1 = {};
                        var8 = var10.getStats;
                        var23 = var8.bind(var10)(var6);
                        var24 = var1;
                        var8 = copyDataProperties(var24, var23);
                        var10 = 0;
                        var8 = var18 > var10;
                        var17 = 0;
                        if (!var8) {
                            _fun93859_ip = 282;
                            continue _fun93859
                        }
                    case 242:
                        var16 = global;
                        var20 = var16.Math;
                        var19 = var20.round;
                        var21 = var6.targetFrames;
                        var22 = var7 != var21;
                        var16 = 0;
                        if (!var22) {
                            _fun93859_ip = 273;
                            continue _fun93859
                        }
                    case 270:
                        var16 = var21;
                    case 273:
                        var16 = var16 / var18;
                        var17 = var19.bind(var20)(var16);
                    case 282:
                        var16 = 'target_fps';
                        var1[var16] = var17;
                        var17 = 0;
                        if (!var8) {
                            _fun93859_ip = 345;
                            continue _fun93859
                        }
                    case 298:
                        var16 = global;
                        var20 = var16.Math;
                        var19 = var20.round;
                        var16 = var6.targetBytesNetwork;
                        var22 = var7 != var16;
                        var21 = 0;
                        if (!var22) {
                            _fun93859_ip = 329;
                            continue _fun93859
                        }
                    case 326:
                        var21 = var16;
                    case 329:
                        var16 = 8;
                        var16 = var16 * var21;
                        var16 = var16 / var18;
                        var17 = var19.bind(var20)(var16);
                    case 345:
                        var16 = 'target_bitrate_network';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 381;
                            continue _fun93859
                        }
                    case 371:
                        var16 = var15.percentiles;
                        var17 = var16[var12];
                    case 381:
                        var16 = 'target_bitrate_network_percentile1';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 420;
                            continue _fun93859
                        }
                    case 407:
                        var19 = var15.percentiles;
                        var16 = 5;
                        var17 = var19[var16];
                    case 420:
                        var16 = 'target_bitrate_network_percentile5';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 459;
                            continue _fun93859
                        }
                    case 446:
                        var19 = var15.percentiles;
                        var16 = 10;
                        var17 = var19[var16];
                    case 459:
                        var16 = 'target_bitrate_network_percentile10';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 498;
                            continue _fun93859
                        }
                    case 485:
                        var19 = var15.percentiles;
                        var16 = 25;
                        var17 = var19[var16];
                    case 498:
                        var16 = 'target_bitrate_network_percentile25';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 537;
                            continue _fun93859
                        }
                    case 524:
                        var19 = var15.percentiles;
                        var16 = 50;
                        var17 = var19[var16];
                    case 537:
                        var16 = 'target_bitrate_network_percentile50';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var16 = var16 > var10;
                        var17 = null;
                        if (!var16) {
                            _fun93859_ip = 576;
                            continue _fun93859
                        }
                    case 563:
                        var19 = var15.percentiles;
                        var16 = 75;
                        var17 = var19[var16];
                    case 576:
                        var16 = 'target_bitrate_network_percentile75';
                        var1[var16] = var17;
                        var16 = var15.count;
                        var17 = var16 > var10;
                        var16 = null;
                        if (!var17) {
                            _fun93859_ip = 615;
                            continue _fun93859
                        }
                    case 602:
                        var17 = var15.percentiles;
                        var15 = 99;
                        var16 = var17[var15];
                    case 615:
                        var15 = 'target_bitrate_network_percentile99';
                        var1[var15] = var16;
                        var16 = 0;
                        if (!var8) {
                            _fun93859_ip = 678;
                            continue _fun93859
                        }
                    case 631:
                        var15 = global;
                        var19 = var15.Math;
                        var17 = var19.round;
                        var15 = var6.targetBytesMax;
                        var21 = var7 != var15;
                        var20 = 0;
                        if (!var21) {
                            _fun93859_ip = 662;
                            continue _fun93859
                        }
                    case 659:
                        var20 = var15;
                    case 662:
                        var15 = 8;
                        var15 = var15 * var20;
                        var15 = var15 / var18;
                        var16 = var17.bind(var19)(var15);
                    case 678:
                        var15 = 'target_bitrate_max';
                        var1[var15] = var16;
                        var15 = 0;
                        if (!var8) {
                            _fun93859_ip = 741;
                            continue _fun93859
                        }
                    case 694:
                        var8 = global;
                        var17 = var8.Math;
                        var16 = var17.round;
                        var8 = var6.outboundBytesAvailable;
                        var20 = var7 != var8;
                        var19 = 0;
                        if (!var20) {
                            _fun93859_ip = 725;
                            continue _fun93859
                        }
                    case 722:
                        var19 = var8;
                    case 725:
                        var8 = 8;
                        var8 = var8 * var19;
                        var8 = var8 / var18;
                        var15 = var16.bind(var17)(var8);
                    case 741:
                        var8 = 'outbound_bandwidth_estimate';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 777;
                            continue _fun93859
                        }
                    case 767:
                        var8 = var4.percentiles;
                        var15 = var8[var12];
                    case 777:
                        var8 = 'outbound_bandwidth_surplus_percentile1';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 816;
                            continue _fun93859
                        }
                    case 803:
                        var16 = var4.percentiles;
                        var8 = 5;
                        var15 = var16[var8];
                    case 816:
                        var8 = 'outbound_bandwidth_surplus_percentile5';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 855;
                            continue _fun93859
                        }
                    case 842:
                        var16 = var4.percentiles;
                        var8 = 10;
                        var15 = var16[var8];
                    case 855:
                        var8 = 'outbound_bandwidth_surplus_percentile10';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 894;
                            continue _fun93859
                        }
                    case 881:
                        var16 = var4.percentiles;
                        var8 = 25;
                        var15 = var16[var8];
                    case 894:
                        var8 = 'outbound_bandwidth_surplus_percentile25';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 933;
                            continue _fun93859
                        }
                    case 920:
                        var16 = var4.percentiles;
                        var8 = 50;
                        var15 = var16[var8];
                    case 933:
                        var8 = 'outbound_bandwidth_surplus_percentile50';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var8 = var8 > var10;
                        var15 = null;
                        if (!var8) {
                            _fun93859_ip = 972;
                            continue _fun93859
                        }
                    case 959:
                        var16 = var4.percentiles;
                        var8 = 75;
                        var15 = var16[var8];
                    case 972:
                        var8 = 'outbound_bandwidth_surplus_percentile75';
                        var1[var8] = var15;
                        var8 = var4.count;
                        var15 = var8 > var10;
                        var8 = null;
                        if (!var15) {
                            _fun93859_ip = 1011;
                            continue _fun93859
                        }
                    case 998:
                        var15 = var4.percentiles;
                        var4 = 99;
                        var8 = var15[var4];
                    case 1011:
                        var4 = 'outbound_bandwidth_surplus_percentile99';
                        var1[var4] = var8;
                        var16 = _closure1_slot12;
                        var19 = var6.encoderBuckets;
                        var18 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var8 = 9;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.NVIDIA_CUDA;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_nvidia_cuda';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.NVIDIA_DIRECT_3D;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_nvidia_direct3d';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.OPENH264;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_openh264';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.VIDEOTOOLBOX;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_videotoolbox';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.AMD_DIRECT_3D;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_amd_direct3d';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.AMD_VAAPI;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_amd_vaapi';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.INTEL;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_intel';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.INTEL_DIRECT_3D;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_intel_direct3d';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.VP8_LIBVPX;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_vp8_libvpx';
                        var1[var17] = var19;
                        var19 = var6.encoderBuckets;
                        var17 = var15[var8];
                        var17 = var18.bind(var0)(var17);
                        var17 = var17.Encoders;
                        var17 = var17.UNCATEGORIZED;
                        var17 = var19[var17];
                        var19 = var16.bind(var0)(var17);
                        var17 = 'duration_encoder_uncategorized';
                        var1[var17] = var19;
                        var17 = var6.encoderBuckets;
                        var15 = var15[var8];
                        var15 = var18.bind(var0)(var15);
                        var15 = var15.Encoders;
                        var15 = var15.UNKNOWN;
                        var15 = var17[var15];
                        var16 = var16.bind(var0)(var15);
                        var15 = 'duration_encoder_unknown';
                        var1[var15] = var16;
                        var15 = _closure4_slot1;
                        var14 = 'quality';
                        var1[var14] = var15;
                        var15 = var6.averageEncodeTime;
                        var14 = 'average_encode_time_ms';
                        var1[var14] = var15;
                        var14 = var6.vmafScoreNum;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1618;
                            continue _fun93859
                        }
                    case 1602:
                        var16 = var6.vmafScoreSum;
                        var14 = var6.vmafScoreNum;
                        var15 = var16 / var14;
                    case 1618:
                        var14 = 'average_encoder_vmaf_score';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1654;
                            continue _fun93859
                        }
                    case 1644:
                        var14 = var13.percentiles;
                        var15 = var14[var12];
                    case 1654:
                        var14 = 'encoder_vmaf_score_percentile1';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1693;
                            continue _fun93859
                        }
                    case 1680:
                        var16 = var13.percentiles;
                        var14 = 5;
                        var15 = var16[var14];
                    case 1693:
                        var14 = 'encoder_vmaf_score_percentile5';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1732;
                            continue _fun93859
                        }
                    case 1719:
                        var16 = var13.percentiles;
                        var14 = 10;
                        var15 = var16[var14];
                    case 1732:
                        var14 = 'encoder_vmaf_score_percentile10';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1771;
                            continue _fun93859
                        }
                    case 1758:
                        var16 = var13.percentiles;
                        var14 = 25;
                        var15 = var16[var14];
                    case 1771:
                        var14 = 'encoder_vmaf_score_percentile25';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var14 = var14 > var10;
                        var15 = null;
                        if (!var14) {
                            _fun93859_ip = 1810;
                            continue _fun93859
                        }
                    case 1797:
                        var16 = var13.percentiles;
                        var14 = 50;
                        var15 = var16[var14];
                    case 1810:
                        var14 = 'encoder_vmaf_score_percentile50';
                        var1[var14] = var15;
                        var14 = var13.count;
                        var15 = var14 > var10;
                        var14 = null;
                        if (!var15) {
                            _fun93859_ip = 1849;
                            continue _fun93859
                        }
                    case 1836:
                        var15 = var13.percentiles;
                        var13 = 75;
                        var14 = var15[var13];
                    case 1849:
                        var13 = 'encoder_vmaf_score_percentile75';
                        var1[var13] = var14;
                        var13 = var6.psnrDbNum;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 1891;
                            continue _fun93859
                        }
                    case 1875:
                        var15 = var6.psnrDbSum;
                        var13 = var6.psnrDbNum;
                        var14 = var15 / var13;
                    case 1891:
                        var13 = 'average_encoder_psnr_db';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 1927;
                            continue _fun93859
                        }
                    case 1917:
                        var13 = var11.percentiles;
                        var14 = var13[var12];
                    case 1927:
                        var13 = 'encoder_psnr_db_percentile1';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 1966;
                            continue _fun93859
                        }
                    case 1953:
                        var15 = var11.percentiles;
                        var13 = 5;
                        var14 = var15[var13];
                    case 1966:
                        var13 = 'encoder_psnr_db_percentile5';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 2005;
                            continue _fun93859
                        }
                    case 1992:
                        var15 = var11.percentiles;
                        var13 = 10;
                        var14 = var15[var13];
                    case 2005:
                        var13 = 'encoder_psnr_db_percentile10';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 2044;
                            continue _fun93859
                        }
                    case 2031:
                        var15 = var11.percentiles;
                        var13 = 25;
                        var14 = var15[var13];
                    case 2044:
                        var13 = 'encoder_psnr_db_percentile25';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var13 = var13 > var10;
                        var14 = null;
                        if (!var13) {
                            _fun93859_ip = 2083;
                            continue _fun93859
                        }
                    case 2070:
                        var15 = var11.percentiles;
                        var13 = 50;
                        var14 = var15[var13];
                    case 2083:
                        var13 = 'encoder_psnr_db_percentile50';
                        var1[var13] = var14;
                        var13 = var11.count;
                        var14 = var13 > var10;
                        var13 = null;
                        if (!var14) {
                            _fun93859_ip = 2122;
                            continue _fun93859
                        }
                    case 2109:
                        var14 = var11.percentiles;
                        var11 = 75;
                        var13 = var14[var11];
                    case 2122:
                        var11 = 'encoder_psnr_db_percentile75';
                        var1[var11] = var13;
                        var11 = var6.outboundSinkWantNum;
                        var11 = var11 > var10;
                        var13 = null;
                        if (!var11) {
                            _fun93859_ip = 2164;
                            continue _fun93859
                        }
                    case 2148:
                        var14 = var6.outboundSinkWantSum;
                        var11 = var6.outboundSinkWantNum;
                        var13 = var14 / var11;
                    case 2164:
                        var11 = 'average_outbound_want';
                        var1[var11] = var13;
                        var13 = var6.framesDroppedRateLimiter;
                        var11 = 'frames_dropped_rate_limiter';
                        var1[var11] = var13;
                        var13 = var6.framesDroppedEncoderQueue;
                        var11 = 'frames_dropped_encoder_queue';
                        var1[var11] = var13;
                        var13 = var6.framesDroppedCongestionWindow;
                        var11 = 'frames_dropped_congestion_window';
                        var1[var11] = var13;
                        var13 = var6.framesDroppedEncoder;
                        var11 = 'frames_dropped_encoder';
                        var1[var11] = var13;
                        var11 = _closure1_slot12;
                        var9 = _closure3_slot0;
                        var14 = var9.hqSimulcastStreamEncoded;
                        var13 = var14.totalDurationSeconds;
                        var13 = var13.bind(var14)();
                        var14 = var11.bind(var0)(var13);
                        var13 = 'duration_hq_simulcast_stream_encoded';
                        var1[var13] = var14;
                        var14 = var9.lqSimulcastStreamEncoded;
                        var13 = var14.totalDurationSeconds;
                        var13 = var13.bind(var14)();
                        var14 = var11.bind(var0)(var13);
                        var13 = 'duration_lq_simulcast_stream_encoded';
                        var1[var13] = var14;
                        var14 = var9.bothSimulcastStreamsEncoded;
                        var13 = var14.totalDurationSeconds;
                        var13 = var13.bind(var14)();
                        var14 = var11.bind(var0)(var13);
                        var13 = 'duration_both_simulcast_streams_encoded';
                        var1[var13] = var14;
                        var14 = var9.bandwidthLimitedFramerate;
                        var13 = var14.totalDurationSeconds;
                        var13 = var13.bind(var14)();
                        var14 = var11.bind(var0)(var13);
                        var13 = 'duration_fps_bandwidth_limited';
                        var1[var13] = var14;
                        var13 = var9.bandwidthLimitedResolution;
                        var9 = var13.totalDurationSeconds;
                        var9 = var9.bind(var13)();
                        var11 = var11.bind(var0)(var9);
                        var9 = 'duration_resolution_bandwidth_limited';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2436;
                            continue _fun93859
                        }
                    case 2426:
                        var9 = var5.percentiles;
                        var11 = var9[var12];
                    case 2436:
                        var9 = 'video_entropy_percentile1';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2475;
                            continue _fun93859
                        }
                    case 2462:
                        var12 = var5.percentiles;
                        var9 = 5;
                        var11 = var12[var9];
                    case 2475:
                        var9 = 'video_entropy_percentile5';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2514;
                            continue _fun93859
                        }
                    case 2501:
                        var12 = var5.percentiles;
                        var9 = 10;
                        var11 = var12[var9];
                    case 2514:
                        var9 = 'video_entropy_percentile10';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2553;
                            continue _fun93859
                        }
                    case 2540:
                        var12 = var5.percentiles;
                        var9 = 25;
                        var11 = var12[var9];
                    case 2553:
                        var9 = 'video_entropy_percentile25';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2592;
                            continue _fun93859
                        }
                    case 2579:
                        var12 = var5.percentiles;
                        var9 = 50;
                        var11 = var12[var9];
                    case 2592:
                        var9 = 'video_entropy_percentile50';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var11 = null;
                        if (!var9) {
                            _fun93859_ip = 2631;
                            continue _fun93859
                        }
                    case 2618:
                        var12 = var5.percentiles;
                        var9 = 75;
                        var11 = var12[var9];
                    case 2631:
                        var9 = 'video_entropy_percentile75';
                        var1[var9] = var11;
                        var9 = var5.count;
                        var9 = var9 > var10;
                        var7 = null;
                        if (!var9) {
                            _fun93859_ip = 2670;
                            continue _fun93859
                        }
                    case 2657:
                        var9 = var5.percentiles;
                        var5 = 99;
                        var7 = var9[var5];
                    case 2670:
                        var5 = 'video_entropy_percentile99';
                        var1[var5] = var7;
                        var5 = _closure1_slot12;
                        var10 = var6.encoderBuckets;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var9 = var4[var8];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.Encoders;
                        var9 = var9.EXYNOS;
                        var9 = var10[var9];
                        var10 = var5.bind(var0)(var9);
                        var9 = 'duration_encoder_exynos';
                        var1[var9] = var10;
                        var10 = var6.encoderBuckets;
                        var9 = var4[var8];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.Encoders;
                        var9 = var9.QUALCOMM;
                        var9 = var10[var9];
                        var10 = var5.bind(var0)(var9);
                        var9 = 'duration_encoder_qualcomm';
                        var1[var9] = var10;
                        var10 = var6.encoderBuckets;
                        var9 = var4[var8];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.Encoders;
                        var9 = var9.MEDIATEK;
                        var9 = var10[var9];
                        var10 = var5.bind(var0)(var9);
                        var9 = 'duration_encoder_mediatek';
                        var1[var9] = var10;
                        var10 = var6.encoderBuckets;
                        var9 = var4[var8];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.Encoders;
                        var9 = var9.WMF_SW;
                        var9 = var10[var9];
                        var10 = var5.bind(var0)(var9);
                        var9 = 'duration_encoder_wmf_sw';
                        var1[var9] = var10;
                        var10 = var6.encoderBuckets;
                        var9 = var4[var8];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.Encoders;
                        var9 = var9.WMF_HW;
                        var9 = var10[var9];
                        var10 = var5.bind(var0)(var9);
                        var9 = 'duration_encoder_wmf_hw';
                        var1[var9] = var10;
                        var6 = var6.encoderBuckets;
                        var4 = var4[var8];
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.Encoders;
                        var4 = var4.WMF_DIRECT_3D;
                        var4 = var6[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = 'duration_encoder_wmf_direct3d';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getInboundStats';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.getStats;
            var3 = var2.inboundStats;
            var0 = arg0;
            var0 = var3[var0];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'destroyUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.inboundStats;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getInboundParticipants';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.keys;
            var0 = this;
            var0 = var0.inboundStats;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'updateSendState';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93864: for (var _fun93864_ip = 0;;) switch (_fun93864_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var1.paused;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun93864_ip = 36;
                        continue _fun93864
                    }
                case 18:
                    var4 = var0.paused;
                    var2 = var1.paused;
                    var4.value = var2;
                case 36:
                    var2 = var1.receivers;
                    if (!(var3 != var2)) {
                        _fun93864_ip = 70;
                        continue _fun93864
                    }
                case 46:
                    var2 = var0.zeroReceivers;
                    var3 = var1.receivers;
                    var1 = 0;
                    var1 = var1 === var3;
                    var2.value = var1;
                case 70:
                    var1 = var0.paused;
                    var2 = var1.value;
                    if (var2) {
                        _fun93864_ip = 95;
                        continue _fun93864
                    }
                case 84:
                    var1 = var0.zeroReceivers;
                    var2 = var1.value;
                case 95:
                    var1 = var0.videoStopped;
                    var1 = var1.value;
                    var3 = var0.videoStopped;
                    var3.value = var2;
                    if (!(var2 !== var1)) {
                        _fun93864_ip = 173;
                        continue _fun93864
                    }
                case 122:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.forEach;
                    var1 = var0.outboundStats;
                    var0 = function(arg0) { // Environment: var0
                        var0 = new Array(0);
                        var1 = arg0;
                        var1.statsWindow = var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 173:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getStats';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun93866: for (var _fun93866_ip = 0;;) switch (_fun93866_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun93866_ip = 3332;
                        continue _fun93866
                    }
                case 15:
                    var28 = global;
                    var4 = var28.Number;
                    var1 = var3.streamStart;
                    var37 = undefined;
                    var5 = var4.bind(var37)(var1);
                    var1 = var3.streamEnd;
                    if (!(var0 == var1)) {
                        _fun93866_ip = 67;
                        continue _fun93866
                    }
                case 46:
                    var4 = var3.timestampProducer;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var4 = var1 - var5;
                    _fun93866_ip = 77;
                    continue _fun93866;
                case 67:
                    var1 = var3.streamEnd;
                    var4 = var1 - var5;
                case 77:
                    var6 = var28.Math;
                    var5 = var6.max;
                    var1 = var2.aggregationDuration;
                    var21 = 0;
                    var1 = var5.bind(var6)(var1, var21);
                    var5 = 1000;
                    var30 = var1 / var5;
                    var7 = [1, 5, 10, 25, 50, 75];
                    var6 = var2.fpsHistogram;
                    var1 = var6.getReport;
                    var8 = var1.bind(var6)(var7);
                    var9 = var2.bitrateHistogram;
                    var6 = var9.getReport;
                    var1 = [1, 5, 10, 25, 50, 75, 99];
                    var14 = var6.bind(var9)(var1);
                    var6 = var2.resolutionHistogram;
                    var1 = var6.getReport;
                    var15 = var1.bind(var6)(var7);
                    var7 = var2.inboundBitrateEstimateHistogram;
                    var6 = var7.getReport;
                    var1 = [1, 5, 10, 25, 50, 75, 99];
                    var7 = var6.bind(var7)(var1);
                    var9 = var2.localWantHistogram;
                    var6 = var9.getReport;
                    var1 = [1, 5, 10, 25, 50, 75, 90, 95];
                    var6 = var6.bind(var9)(var1);
                    var9 = var2.systemResources;
                    var1 = var9.getStats;
                    var1 = var1.bind(var9)();
                    var27 = {};
                    var10 = var28.Math;
                    var9 = var10.floor;
                    var4 = var4 / var5;
                    var4 = var9.bind(var10)(var4);
                    var27.duration = var4;
                    var13 = _closure1_slot12;
                    var4 = var13.bind(var37)(var30);
                    var27.duration_aggregation = var4;
                    var9 = var2.videoStoppedDuration;
                    var4 = var9.asSeconds;
                    var4 = var4.bind(var9)();
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stopped_receiving = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 8000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_8mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 7000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_7mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 6000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_6mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 5000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_5mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 4000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_4mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 3000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_3mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 2000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_2mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 1500000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_1_5mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 1000000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_1mbps = var4;
                    var9 = var2.bitrateBuckets;
                    var4 = 500000;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_under_0_5mbps = var4;
                    var4 = var2.bitrateBuckets;
                    var4 = var4[var21];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_stream_at_0mbps = var4;
                    var9 = var2.fpsBuckets;
                    var4 = 60;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_60 = var4;
                    var9 = var2.fpsBuckets;
                    var4 = 55;
                    var4 = var9[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_55 = var4;
                    var4 = var2.fpsBuckets;
                    var9 = 50;
                    var4 = var4[var9];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_50 = var4;
                    var10 = var2.fpsBuckets;
                    var4 = 45;
                    var4 = var10[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_45 = var4;
                    var10 = var2.fpsBuckets;
                    var4 = 40;
                    var4 = var10[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_40 = var4;
                    var10 = var2.fpsBuckets;
                    var4 = 35;
                    var4 = var10[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_35 = var4;
                    var10 = var2.fpsBuckets;
                    var4 = 30;
                    var4 = var10[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_30 = var4;
                    var4 = var2.fpsBuckets;
                    var10 = 25;
                    var4 = var4[var10];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_25 = var4;
                    var11 = var2.fpsBuckets;
                    var4 = 20;
                    var4 = var11[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_20 = var4;
                    var11 = var2.fpsBuckets;
                    var4 = 15;
                    var4 = var11[var4];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_15 = var4;
                    var4 = var2.fpsBuckets;
                    var11 = 10;
                    var4 = var4[var11];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_10 = var4;
                    var4 = var2.fpsBuckets;
                    var12 = 5;
                    var4 = var4[var12];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_under_5 = var4;
                    var4 = var2.fpsBuckets;
                    var4 = var4[var21];
                    var4 = var13.bind(var37)(var4);
                    var27.duration_fps_at_0 = var4;
                    var4 = var2.intervalTotal;
                    var13 = var4 > var21;
                    var4 = 0;
                    if (!var13) {
                        _fun93866_ip = 1000;
                        continue _fun93866
                    }
                case 968:
                    var17 = var28.Math;
                    var16 = var17.round;
                    var18 = var2.resolutionTotal;
                    var13 = var2.intervalTotal;
                    var13 = var18 / var13;
                    var4 = var16.bind(var17)(var13);
                case 1000:
                    var27.avg_resolution = var4;
                    var4 = var2.intervalTotal;
                    var13 = var4 > var21;
                    var4 = 0;
                    if (!var13) {
                        _fun93866_ip = 1052;
                        continue _fun93866
                    }
                case 1020:
                    var17 = var28.Math;
                    var16 = var17.round;
                    var18 = var2.minorResolutionTotal;
                    var13 = var2.intervalTotal;
                    var13 = var18 / var13;
                    var4 = var16.bind(var17)(var13);
                case 1052:
                    var27.avg_minor_resolution = var4;
                    var4 = var2.intervalTotal;
                    var13 = var4 > var21;
                    var4 = 0;
                    if (!var13) {
                        _fun93866_ip = 1106;
                        continue _fun93866
                    }
                case 1074:
                    var17 = var28.Math;
                    var16 = var17.round;
                    var18 = var2.majorResolutionTotal;
                    var13 = var2.intervalTotal;
                    var13 = var18 / var13;
                    var4 = var16.bind(var17)(var13);
                case 1106:
                    var27.avg_major_resolution = var4;
                    var4 = _closure1_slot12;
                    var16 = var2.resolutionBuckets;
                    var13 = 720;
                    var13 = var16[var13];
                    var13 = var4.bind(var37)(var13);
                    var27.duration_resolution_under_720 = var13;
                    var16 = var2.resolutionBuckets;
                    var13 = 480;
                    var13 = var16[var13];
                    var13 = var4.bind(var37)(var13);
                    var27.duration_resolution_under_480 = var13;
                    var16 = var2.resolutionBuckets;
                    var13 = 360;
                    var13 = var16[var13];
                    var13 = var4.bind(var37)(var13);
                    var27.duration_resolution_under_360 = var13;
                    var13 = var3.pausedCount;
                    var27.num_pauses = var13;
                    var16 = var3.paused;
                    var13 = var16.totalDuration;
                    var13 = var13.bind(var16)();
                    var13 = var13 / var5;
                    var13 = var4.bind(var37)(var13);
                    var27.duration_paused = var13;
                    var16 = var3.zeroReceivers;
                    var13 = var16.totalDuration;
                    var13 = var13.bind(var16)();
                    var13 = var13 / var5;
                    var13 = var4.bind(var37)(var13);
                    var27.duration_zero_receivers = var13;
                    var16 = var3.videoStopped;
                    var13 = var16.totalDuration;
                    var13 = var13.bind(var16)();
                    var13 = var13 / var5;
                    var13 = var4.bind(var37)(var13);
                    var27.duration_video_stopped = var13;
                    var16 = var3.hqSimulcastStreamWatched;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_hq_simulcast_stream_watched = var13;
                    var16 = var3.lqSimulcastStreamWatched;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_lq_simulcast_stream_watched = var13;
                    var16 = var3.hqSimulcastStreamEligible;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_hq_simulcast_stream_eligible = var13;
                    var16 = var3.lqSimulcastStreamEligible;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_lq_simulcast_stream_eligible = var13;
                    var13 = var3.simulcastQualityChanges;
                    var27.num_quality_changes = var13;
                    var16 = var3.windowOccluded;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_window_occluded = var13;
                    var16 = var3.videoStoppedForOcclusion;
                    var13 = var16.totalDurationSeconds;
                    var13 = var13.bind(var16)();
                    var13 = var4.bind(var37)(var13);
                    var27.duration_incoming_video_stopped_for_occlusion = var13;
                    var13 = var3.numWindowOcclusionChanges;
                    var27.num_window_occlusion_changes = var13;
                    var16 = var8.percentiles;
                    var13 = 1;
                    var16 = var16[var13];
                    var27.fps_percentile1 = var16;
                    var16 = var8.percentiles;
                    var16 = var16[var12];
                    var27.fps_percentile5 = var16;
                    var16 = var8.percentiles;
                    var16 = var16[var11];
                    var27.fps_percentile10 = var16;
                    var16 = var8.percentiles;
                    var16 = var16[var10];
                    var27.fps_percentile25 = var16;
                    var16 = var8.percentiles;
                    var16 = var16[var9];
                    var27.fps_percentile50 = var16;
                    var16 = var8.percentiles;
                    var8 = 75;
                    var16 = var16[var8];
                    var27.fps_percentile75 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var13];
                    var27.bitrate_percentile1 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var12];
                    var27.bitrate_percentile5 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var11];
                    var27.bitrate_percentile10 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var10];
                    var27.bitrate_percentile25 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var9];
                    var27.bitrate_percentile50 = var16;
                    var16 = var14.percentiles;
                    var16 = var16[var8];
                    var27.bitrate_percentile75 = var16;
                    var16 = var14.percentiles;
                    var14 = 99;
                    var16 = var16[var14];
                    var27.bitrate_percentile99 = var16;
                    var16 = var15.percentiles;
                    var16 = var16[var13];
                    var27.resolution_percentile1 = var16;
                    var16 = var15.percentiles;
                    var16 = var16[var12];
                    var27.resolution_percentile5 = var16;
                    var16 = var15.percentiles;
                    var16 = var16[var11];
                    var27.resolution_percentile10 = var16;
                    var16 = var15.percentiles;
                    var16 = var16[var10];
                    var27.resolution_percentile25 = var16;
                    var16 = var15.percentiles;
                    var16 = var16[var9];
                    var27.resolution_percentile50 = var16;
                    var15 = var15.percentiles;
                    var15 = var15[var8];
                    var27.resolution_percentile75 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var13];
                    var27.inbound_bitrate_estimate_percentile1 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var12];
                    var27.inbound_bitrate_estimate_percentile5 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var11];
                    var27.inbound_bitrate_estimate_percentile10 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var10];
                    var27.inbound_bitrate_estimate_percentile25 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var9];
                    var27.inbound_bitrate_estimate_percentile50 = var15;
                    var15 = var7.percentiles;
                    var15 = var15[var8];
                    var27.inbound_bitrate_estimate_percentile75 = var15;
                    var7 = var7.percentiles;
                    var7 = var7[var14];
                    var27.inbound_bitrate_estimate_percentile99 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var13];
                    var27.local_want_percentile1 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var12];
                    var27.local_want_percentile5 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var11];
                    var27.local_want_percentile10 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var10];
                    var27.local_want_percentile25 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var9];
                    var27.local_want_percentile50 = var7;
                    var7 = var6.percentiles;
                    var7 = var7[var8];
                    var27.local_want_percentile75 = var7;
                    var8 = var6.percentiles;
                    var7 = 90;
                    var7 = var8[var7];
                    var27.local_want_percentile90 = var7;
                    var8 = var6.percentiles;
                    var7 = 95;
                    var7 = var8[var7];
                    var27.local_want_percentile95 = var7;
                    var6 = var6.mean;
                    var27.average_local_want = var6;
                    var6 = var3.videoEffectDuration;
                    var3 = var6.totalDuration;
                    var3 = var3.bind(var6)();
                    var3 = var3 / var5;
                    var3 = var4.bind(var37)(var3);
                    var27.duration_video_effect = var3;
                    var3 = var2.cryptorMaxAttempts;
                    var27.cryptor_max_attempts = var3;
                    var7 = var2.decoderBuckets;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var38 = 9;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.FFMPEG;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_ffmpeg = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.DAV1D;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_dav1d = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.VP8_LIBVPX;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_vp8_libvpx = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.ELECTRON;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_electron = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.VIDEOTOOLBOX;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_videotoolbox = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.UNCATEGORIZED;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_uncategorized = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.UNKNOWN;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_unknown = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.EXYNOS;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_exynos = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.WEBRTC;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_webrtc = var5;
                    var7 = var2.decoderBuckets;
                    var5 = var3[var38];
                    var5 = var6.bind(var37)(var5);
                    var5 = var5.Decoders;
                    var5 = var5.QUALCOMM;
                    var5 = var7[var5];
                    var5 = var4.bind(var37)(var5);
                    var27.duration_decoder_qualcomm = var5;
                    var5 = var2.decoderBuckets;
                    var3 = var3[var38];
                    var3 = var6.bind(var37)(var3);
                    var3 = var3.Decoders;
                    var3 = var3.MEDIATEK;
                    var3 = var5[var3];
                    var3 = var4.bind(var37)(var3);
                    var27.duration_decoder_mediatek = var3;
                    var42 = var27;
                    var41 = var1;
                    var1 = copyDataProperties(var42, var41);
                    var3 = var2.aggregatedProperties;
                    var26 = var3.bytes;
                    var20 = var3.framesDropped;
                    var22 = var3.framesCodecError;
                    var31 = var3.framesCodec;
                    var23 = var3.framesNetwork;
                    var24 = var3.packets;
                    var25 = var3.packetsLost;
                    var19 = var3.nackCount;
                    var18 = var3.pliCount;
                    var17 = var3.qpSum;
                    var34 = var3.pauseCount;
                    var32 = var3.freezeCount;
                    var33 = var3.totalPausesDuration;
                    var29 = var3.totalFreezesDuration;
                    var1 = var3.totalFramesDuration;
                    var16 = var3.keyframes;
                    var15 = var3.passthroughCount;
                    var14 = var3.cryptorSuccessCount;
                    var13 = var3.cryptorFailureCount;
                    var12 = var3.cryptorDuration;
                    var11 = var3.cryptorAttempts;
                    var10 = var3.cryptorMissingKeyCount;
                    var9 = var3.cryptorInvalidNonceCount;
                    var7 = var3.qualityDecodeErrors;
                    var6 = var3.qualityDecoderReboots;
                    var5 = var3.qualityScoreErrors;
                    var4 = var3.qualityFrameDrops;
                    var3 = var3.qualitySizeMismatches;
                    var8 = var0 != var13;
                    var36 = 0;
                    if (!var8) {
                        _fun93866_ip = 2833;
                        continue _fun93866
                    }
                case 2830:
                    var36 = var13;
                case 2833:
                    var39 = var2.cryptorFailureBeforeSuccessCount;
                    var40 = var0 != var39;
                    var8 = 0;
                    if (!var40) {
                        _fun93866_ip = 2851;
                        continue _fun93866
                    }
                case 2848:
                    var8 = var39;
                case 2851:
                    var8 = var36 - var8;
                    var36 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    var35 = var35[var38];
                    var35 = var36.bind(var37)(var35);
                    var35 = var35.OutboundStats;
                    var35 = var2 instanceof var35;
                    if (var35) {
                        _fun93866_ip = 2927;
                        continue _fun93866
                    }
                case 2885:
                    var27.receiver_freeze_count = var32;
                    var27.receiver_total_freezes_duration = var29;
                    var27.receiver_total_frames_duration = var1;
                    var27.receiver_pause_count = var34;
                    var27.receiver_total_pauses_duration = var33;
                    _fun93866_ip = 2951;
                    continue _fun93866;
                case 2927:
                    var27.sender_freeze_count = var32;
                    var27.sender_total_freezes_duration = var29;
                    var27.sender_total_frames_duration = var1;
                case 2951:
                    var1 = {};
                    var42 = var1;
                    var41 = var27;
                    var27 = copyDataProperties(var42, var41);
                    var29 = var30 > var21;
                    var32 = 0;
                    if (!var29) {
                        _fun93866_ip = 3011;
                        continue _fun93866
                    }
                case 2972:
                    var34 = var28.Math;
                    var33 = var34.round;
                    var27 = var0 != var26;
                    var35 = 0;
                    if (!var27) {
                        _fun93866_ip = 2995;
                        continue _fun93866
                    }
                case 2992:
                    var35 = var26;
                case 2995:
                    var27 = 8;
                    var27 = var27 * var35;
                    var27 = var27 / var30;
                    var32 = var33.bind(var34)(var27);
                case 3011:
                    var27 = 'avg_bitrate';
                    var1[var27] = var32;
                    var27 = 0;
                    if (!var29) {
                        _fun93866_ip = 3057;
                        continue _fun93866
                    }
                case 3025:
                    var29 = var28.Math;
                    var28 = var29.round;
                    var32 = var0 != var31;
                    var21 = 0;
                    if (!var32) {
                        _fun93866_ip = 3048;
                        continue _fun93866
                    }
                case 3045:
                    var21 = var31;
                case 3048:
                    var21 = var21 / var30;
                    var27 = var28.bind(var29)(var21);
                case 3057:
                    var21 = 'avg_fps';
                    var1[var21] = var27;
                    var21 = 'num_bytes';
                    var1[var21] = var26;
                    var21 = 'num_packets_lost';
                    var1[var21] = var25;
                    var21 = 'num_packets';
                    var1[var21] = var24;
                    var21 = 'num_frames';
                    var1[var21] = var23;
                    var21 = 'num_frames_codec_error';
                    var1[var21] = var22;
                    var21 = var2.timeToFirstFrame;
                    var2 = 'time_to_first_frame_ms';
                    var1[var2] = var21;
                    var2 = 'num_frames_dropped';
                    var1[var2] = var20;
                    var2 = 'num_nacks';
                    var1[var2] = var19;
                    var2 = 'num_plis';
                    var1[var2] = var18;
                    var2 = 'qp_sum';
                    var1[var2] = var17;
                    var2 = 'num_keyframes';
                    var1[var2] = var16;
                    var2 = 'cryptor_passthrough_count';
                    var1[var2] = var15;
                    var2 = 'cryptor_success_count';
                    var1[var2] = var14;
                    var2 = 'cryptor_failure_count';
                    var1[var2] = var13;
                    var2 = 'cryptor_duration';
                    var1[var2] = var12;
                    var2 = 'cryptor_attempts';
                    var1[var2] = var11;
                    var2 = 'cryptor_missing_key_count';
                    var1[var2] = var10;
                    var2 = 'cryptor_invalid_nonce_count';
                    var1[var2] = var9;
                    var2 = 'cryptor_failure_after_success_count';
                    var1[var2] = var8;
                    var2 = 'encoder_quality_decode_errors';
                    var1[var2] = var7;
                    var2 = 'encoder_quality_decoder_reboots';
                    var1[var2] = var6;
                    var2 = 'encoder_quality_score_errors';
                    var1[var2] = var5;
                    var2 = 'encoder_quality_frame_drops';
                    var1[var2] = var4;
                    var2 = 'encoder_quality_size_mismatches';
                    var1[var2] = var3;
                    return var1;
                case 3332:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'receivedStats';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun93867: for (var _fun93867_ip = 0;;) switch (_fun93867_ip) {
                case 0:
                    var6 = arg1;
                    var12 = arg2;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var _closure3_slot2 = var12;
                    var4 = var6.transport;
                    var _closure3_slot3 = var4;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var5 = var5[var0];
                    var0 = undefined;
                    var7 = var7.bind(var0)(var5);
                    var5 = var7.isWeb;
                    var5 = var5.bind(var7)();
                    var13 = 1;
                    var11 = var13;
                    if (var5) {
                        _fun93867_ip = 117;
                        continue _fun93867
                    }
                case 80:
                    var7 = var4.receiverReports;
                    var4 = null;
                    var8 = var4 == var7;
                    var5 = undefined;
                    if (var8) {
                        _fun93867_ip = 102;
                        continue _fun93867
                    }
                case 97:
                    var5 = var7.length;
                case 102:
                    var7 = var4 != var5;
                    var4 = 0;
                    if (!var7) {
                        _fun93867_ip = 114;
                        continue _fun93867
                    }
                case 111:
                    var4 = var5;
                case 114:
                    var11 = var4;
                case 117:
                    var4 = global;
                    var5 = var4.Set;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var18 = var7;
                    var5 = new var18[var5](var17);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var _closure3_slot4 = var5;
                    var4 = var4.Set;
                    var7 = var4.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var4
                        }
                    });
                    var18 = var7;
                    var4 = new var18[var4](var17);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var _closure3_slot5 = var4;
                    var8 = var2.updateSendState;
                    var7 = {};
                    var7.receivers = var11;
                    var7 = var8.bind(var2)(var7);
                    var7 = var2.cameraDuration;
                    var8 = var7.value;
                    var9 = var2.cameraDuration;
                    var7 = var2.connection;
                    var10 = var7.context;
                    var15 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var14 = 8;
                    var7 = var7[var14];
                    var7 = var15.bind(var0)(var7);
                    var7 = var7.MediaEngineContextTypes;
                    var7 = var7.DEFAULT;
                    var7 = var10 === var7;
                    if (!var7) {
                        _fun93867_ip = 276;
                        continue _fun93867
                    }
                case 264:
                    var15 = var6.camera;
                    var10 = null;
                    var7 = var10 != var15;
                case 276:
                    var9.value = var7;
                    var9 = var2.cameraOpportunityDuration;
                    var7 = var2.connection;
                    var10 = var7.context;
                    var15 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var14];
                    var7 = var15.bind(var0)(var7);
                    var7 = var7.MediaEngineContextTypes;
                    var7 = var7.DEFAULT;
                    var7 = var10 === var7;
                    if (!var7) {
                        _fun93867_ip = 347;
                        continue _fun93867
                    }
                case 335:
                    var15 = var6.camera;
                    var10 = null;
                    var7 = var10 != var15;
                case 347:
                    if (!var7) {
                        _fun93867_ip = 360;
                        continue _fun93867
                    }
                case 350:
                    var10 = var2.callUserIdsCount;
                    var7 = var10 > var13;
                case 360:
                    var9.value = var7;
                    var9 = var2.cameraSendDuration;
                    var7 = var2.connection;
                    var10 = var7.context;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var14];
                    var7 = var13.bind(var0)(var7);
                    var7 = var7.MediaEngineContextTypes;
                    var7 = var7.DEFAULT;
                    var7 = var10 === var7;
                    if (!var7) {
                        _fun93867_ip = 431;
                        continue _fun93867
                    }
                case 419:
                    var13 = var6.camera;
                    var10 = null;
                    var7 = var10 != var13;
                case 431:
                    if (!var7) {
                        _fun93867_ip = 440;
                        continue _fun93867
                    }
                case 434:
                    var10 = 0;
                    var7 = var11 > var10;
                case 440:
                    var9.value = var7;
                    var7 = var2.cameraDuration;
                    var7 = var7.value;
                    if (!var7) {
                        _fun93867_ip = 463;
                        continue _fun93867
                    }
                case 460:
                    var7 = !var8;
                case 463:
                    if (!var7) {
                        _fun93867_ip = 481;
                        continue _fun93867
                    }
                case 466:
                    var7 = var2.cameraToggles;
                    var7 = var7 + 1;
                    var2.cameraToggles = var7;
                case 481:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var10 = 10;
                    var7 = var7[var10];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.max;
                    var11 = var12.map;
                    var7 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.quality;
                        return var0;
                    };
                    var7 = var11.bind(var12)(var7);
                    var7 = var8.bind(var9)(var7);
                    var _closure3_slot6 = var7;
                    var7 = var6.rtp;
                    var9 = var7.outbound;
                    var8 = var9.filter;
                    var7 = function(arg0) { // Environment: var3
                        _fun93869: for (var _fun93869_ip = 0;;) switch (_fun93869_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.type;
                                var0 = 'video';
                                var0 = var0 === var1;
                                if (!var0) {
                                    _fun93869_ip = 40;
                                    continue _fun93869
                                }
                            case 19:
                                var2 = null;
                                var4 = var2 == var3;
                                var1 = undefined;
                                if (var4) {
                                    _fun93869_ip = 36;
                                    continue _fun93869
                                }
                            case 30:
                                var1 = var3.videoEntropy;
                            case 36:
                                var0 = var2 != var1;
                            case 40:
                                return var0;
                        }
                    };
                    var8 = var8.bind(var9)(var7);
                    var7 = 0;
                    var9 = var8[var7];
                    var8 = null;
                    var11 = var8 == var9;
                    var8 = undefined;
                    if (var11) {
                        _fun93867_ip = 584;
                        continue _fun93867
                    }
                case 578:
                    var8 = var9.videoEntropy;
                case 584:
                    var _closure3_slot7 = var8;
                    var8 = var6.rtp;
                    var11 = var8.outbound;
                    var9 = var11.filter;
                    var8 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'video';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var11 = var9.bind(var11)(var8);
                    var9 = var11.forEach;
                    var8 = function(arg0) { // Environment: var3
                        _fun93871: for (var _fun93871_ip = 0;;) switch (_fun93871_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun93871_ip = 1058;
                                    continue _fun93871
                                }
                            case 14:
                                var10 = var2.ssrc;
                                var _closure4_slot0 = var10;
                                var4 = _closure3_slot0;
                                var4 = var4.outboundStats;
                                var4 = var4[var10];
                                if (!(var0 == var4)) {
                                    _fun93871_ip = 119;
                                    continue _fun93871
                                }
                            case 45:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 9;
                                var6 = var6[var5];
                                var5 = undefined;
                                var5 = var7.bind(var5)(var6);
                                var8 = var5.OutboundStats;
                                var6 = _closure3_slot0;
                                var17 = var6.timestampProducer;
                                var7 = var8.prototype;
                                var7 = Object.create(var7, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var18 = var7;
                                var5 = new var18[var8](var17, var16);
                                var5 = var5 instanceof Object ? var5 : var7;
                                var6 = var6.outboundStats;
                                var6[var10] = var5;
                                var4 = var5;
                            case 119:
                                var5 = var4.timeToFirstFrame;
                                var5 = var0 == var5;
                                if (!var5) {
                                    _fun93871_ip = 172;
                                    continue _fun93871
                                }
                            case 132:
                                var6 = var2.framesEncoded;
                                var8 = 0;
                                var6 = var6 > var8;
                                if (var6) {
                                    _fun93871_ip = 169;
                                    continue _fun93871
                                }
                            case 147:
                                var9 = var2.frameRateInput;
                                var11 = var0 != var9;
                                var7 = 0;
                                if (!var11) {
                                    _fun93871_ip = 165;
                                    continue _fun93871
                                }
                            case 162:
                                var7 = var9;
                            case 165:
                                var6 = var7 > var8;
                            case 169:
                                var5 = var6;
                            case 172:
                                if (!var5) {
                                    _fun93871_ip = 216;
                                    continue _fun93871
                                }
                            case 175:
                                var5 = global;
                                var8 = var5.Math;
                                var7 = var8.max;
                                var6 = _closure3_slot1;
                                var5 = var4.startTime;
                                var6 = var6 - var5;
                                var5 = 0;
                                var5 = var7.bind(var8)(var5, var6);
                                var4.timeToFirstFrame = var5;
                            case 216:
                                var5 = _closure3_slot7;
                                var5 = var0 != var5;
                                if (!var5) {
                                    _fun93871_ip = 237;
                                    continue _fun93871
                                }
                            case 227:
                                var7 = _closure3_slot7;
                                var6 = 0;
                                var5 = var7 >= var6;
                            case 237:
                                if (!var5) {
                                    _fun93871_ip = 265;
                                    continue _fun93871
                                }
                            case 240:
                                var5 = _closure3_slot0;
                                var7 = var5.videoEntropy;
                                var6 = var7.addSample;
                                var5 = _closure3_slot7;
                                var5 = var6.bind(var7)(var5);
                            case 265:
                                var6 = _closure3_slot2;
                                var5 = var6.find;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.ssrc;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var3);
                                var5 = _closure3_slot0;
                                var5 = var5.connection;
                                var9 = var5.context;
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var6 = 8;
                                var7 = var7[var6];
                                var6 = undefined;
                                var7 = var8.bind(var6)(var7);
                                var7 = var7.MediaEngineContextTypes;
                                var7 = var7.STREAM;
                                var8 = true;
                                if (!(var9 === var7)) {
                                    _fun93871_ip = 453;
                                    continue _fun93871
                                }
                            case 344:
                                var7 = _closure3_slot0;
                                var9 = var7.connection;
                                var7 = var9.getRemoteVideoSinkWants;
                                var9 = var7.bind(var9)(var10);
                                var7 = var0 != var9;
                                if (!var7) {
                                    _fun93871_ip = 378;
                                    continue _fun93871
                                }
                            case 372:
                                var10 = 0;
                                var7 = var10 !== var9;
                            case 378:
                                if (var7) {
                                    _fun93871_ip = 404;
                                    continue _fun93871
                                }
                            case 381:
                                var10 = var0 == var3;
                                var11 = undefined;
                                if (var10) {
                                    _fun93871_ip = 396;
                                    continue _fun93871
                                }
                            case 390:
                                var11 = var3.quality;
                            case 396:
                                var10 = _closure3_slot6;
                                var7 = var11 !== var10;
                            case 404:
                                var10 = var9;
                                if (var7) {
                                    _fun93871_ip = 435;
                                    continue _fun93871
                                }
                            case 410:
                                var7 = _closure3_slot0;
                                var11 = var7.connection;
                                var9 = var11.getRemoteVideoSinkWants;
                                var7 = 'any';
                                var10 = var9.bind(var11)(var7);
                            case 435:
                                var11 = var0 != var10;
                                var9 = 0;
                                var7 = 0;
                                if (!var11) {
                                    _fun93871_ip = 449;
                                    continue _fun93871
                                }
                            case 446:
                                var7 = var10;
                            case 449:
                                var8 = var7 > var9;
                            case 453:
                                var7 = _closure3_slot0;
                                var7 = var7.videoStopped;
                                var7 = var7.value;
                                if (var7) {
                                    _fun93871_ip = 474;
                                    continue _fun93871
                                }
                            case 471:
                                var7 = !var8;
                            case 474:
                                var8 = var4.isVideoStopped;
                                if (!(var7 !== var8)) {
                                    _fun93871_ip = 528;
                                    continue _fun93871
                                }
                            case 484:
                                var9 = var4.setVideoStopped;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 9;
                                var8 = var11[var8];
                                var8 = var10.bind(var6)(var8);
                                var8 = var8.VideoStoppedReasons;
                                var8 = var8.SenderStopped;
                                var8 = var9.bind(var4)(var7, var8);
                            case 528:
                                if (var7) {
                                    _fun93871_ip = 1058;
                                    continue _fun93871
                                }
                            case 534:
                                var10 = var4.appendAndIncrementStats;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 9;
                                var7 = var9[var5];
                                var7 = var8.bind(var6)(var7);
                                var12 = var7.RawVideoStats;
                                var11 = var12.parseOutboundStats;
                                var7 = _closure3_slot1;
                                var7 = var11.bind(var12)(var2, var7);
                                var7 = var10.bind(var4)(var7);
                                var7 = var4.encoderCodec;
                                var5 = var9[var5];
                                var5 = var8.bind(var6)(var5);
                                var5 = var5.CodecTypes;
                                var5 = var5.UNKNOWN;
                                if (!(var7 !== var5)) {
                                    _fun93871_ip = 640;
                                    continue _fun93871
                                }
                            case 620:
                                var8 = _closure3_slot4;
                                var7 = var8.add;
                                var5 = var4.encoderCodec;
                                var5 = var7.bind(var8)(var5);
                            case 640:
                                var5 = var0 == var3;
                                var8 = undefined;
                                if (var5) {
                                    _fun93871_ip = 655;
                                    continue _fun93871
                                }
                            case 649:
                                var8 = var3.maxBitrate;
                            case 655:
                                var7 = var4.appendTargetRates;
                                var5 = var0 == var3;
                                var6 = undefined;
                                if (var5) {
                                    _fun93871_ip = 676;
                                    continue _fun93871
                                }
                            case 670:
                                var6 = var3.maxFrameRate;
                            case 676:
                                var5 = var2.bitrateTarget;
                                if (!(var0 == var5)) {
                                    _fun93871_ip = 739;
                                    continue _fun93871
                                }
                            case 686:
                                var3 = global;
                                var11 = var3.Math;
                                var10 = var11.min;
                                var3 = _closure3_slot3;
                                var12 = var3.availableOutgoingBitrate;
                                var13 = var0 != var12;
                                var3 = 0;
                                if (!var13) {
                                    _fun93871_ip = 721;
                                    continue _fun93871
                                }
                            case 718:
                                var3 = var12;
                            case 721:
                                var12 = var0 != var8;
                                var9 = 0;
                                if (!var12) {
                                    _fun93871_ip = 733;
                                    continue _fun93871
                                }
                            case 730:
                                var9 = var8;
                            case 733:
                                var5 = var10.bind(var11)(var3, var9);
                            case 739:
                                var3 = _closure3_slot3;
                                var14 = var3.availableOutgoingBitrate;
                                var18 = var4;
                                var17 = var6;
                                var16 = var5;
                                var15 = var8;
                                var3 = var18[var7](var17, var16, var15, var14, var13);
                                var5 = var2.averageEncodeTime;
                                var6 = var0 != var5;
                                var3 = 0;
                                if (!var6) {
                                    _fun93871_ip = 783;
                                    continue _fun93871
                                }
                            case 780:
                                var3 = var5;
                            case 783:
                                var4.averageEncodeTime = var3;
                                var5 = var2.framesDroppedRateLimiter;
                                var6 = var0 != var5;
                                var3 = null;
                                if (!var6) {
                                    _fun93871_ip = 807;
                                    continue _fun93871
                                }
                            case 804:
                                var3 = var5;
                            case 807:
                                var4.framesDroppedRateLimiter = var3;
                                var5 = var2.framesDroppedEncoderQueue;
                                var6 = var0 != var5;
                                var3 = null;
                                if (!var6) {
                                    _fun93871_ip = 831;
                                    continue _fun93871
                                }
                            case 828:
                                var3 = var5;
                            case 831:
                                var4.framesDroppedEncoderQueue = var3;
                                var5 = var2.framesDroppedCongestionWindow;
                                var6 = var0 != var5;
                                var3 = null;
                                if (!var6) {
                                    _fun93871_ip = 855;
                                    continue _fun93871
                                }
                            case 852:
                                var3 = var5;
                            case 855:
                                var4.framesDroppedCongestionWindow = var3;
                                var5 = var2.framesDroppedEncoder;
                                var6 = var0 != var5;
                                var3 = null;
                                if (!var6) {
                                    _fun93871_ip = 879;
                                    continue _fun93871
                                }
                            case 876:
                                var3 = var5;
                            case 879:
                                var4.framesDroppedEncoder = var3;
                                var3 = _closure3_slot0;
                                var4 = var3.hqSimulcastStreamEncoded;
                                var5 = var2.hqSimulcastStreamEncoded;
                                var3 = var0 != var5;
                                if (!var3) {
                                    _fun93871_ip = 911;
                                    continue _fun93871
                                }
                            case 908:
                                var3 = var5;
                            case 911:
                                var4.value = var3;
                                var3 = _closure3_slot0;
                                var4 = var3.lqSimulcastStreamEncoded;
                                var5 = var2.lqSimulcastStreamEncoded;
                                var3 = var0 != var5;
                                if (!var3) {
                                    _fun93871_ip = 943;
                                    continue _fun93871
                                }
                            case 940:
                                var3 = var5;
                            case 943:
                                var4.value = var3;
                                var3 = _closure3_slot0;
                                var4 = var3.bothSimulcastStreamsEncoded;
                                var3 = var3.hqSimulcastStreamEncoded;
                                var3 = var3.value;
                                if (!var3) {
                                    _fun93871_ip = 988;
                                    continue _fun93871
                                }
                            case 973:
                                var5 = _closure3_slot0;
                                var5 = var5.lqSimulcastStreamEncoded;
                                var3 = var5.value;
                            case 988:
                                var4.value = var3;
                                var3 = _closure3_slot0;
                                var4 = var3.bandwidthLimitedResolution;
                                var5 = var2.bandwidthLimitedResolution;
                                var3 = var0 != var5;
                                if (!var3) {
                                    _fun93871_ip = 1020;
                                    continue _fun93871
                                }
                            case 1017:
                                var3 = var5;
                            case 1020:
                                var4.value = var3;
                                var1 = _closure3_slot0;
                                var1 = var1.bandwidthLimitedFramerate;
                                var2 = var2.bandwidthLimitedFrameRate;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun93871_ip = 1052;
                                    continue _fun93871
                                }
                            case 1049:
                                var0 = var2;
                            case 1052:
                                var1.value = var0;
                            case 1058:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = var9.bind(var11)(var8);
                    var8 = var2.paused;
                    var8 = var8.value;
                    if (var8) {
                        _fun93867_ip = 695;
                        continue _fun93867
                    }
                case 648:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.forEach;
                    var6 = var6.rtp;
                    var6 = var6.inbound;
                    var3 = function(arg0, arg1) { // Environment: var3
                        _fun93873: for (var _fun93873_ip = 0;;) switch (_fun93873_ip) {
                            case 0:
                                var2 = arg0;
                                var13 = arg1;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'video';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var3 = var1.bind(var2)(var0);
                                var5 = null;
                                if (!(var5 != var3)) {
                                    _fun93873_ip = 388;
                                    continue _fun93873
                                }
                            case 34:
                                var1 = _closure3_slot0;
                                var1 = var1.inboundStats;
                                var1 = var1[var13];
                                if (!(var5 == var1)) {
                                    _fun93873_ip = 129;
                                    continue _fun93873
                                }
                            case 55:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 9;
                                var4 = var4[var2];
                                var2 = undefined;
                                var2 = var6.bind(var2)(var4);
                                var7 = var2.InboundStats;
                                var4 = _closure3_slot0;
                                var17 = var4.timestampProducer;
                                var6 = var7.prototype;
                                var6 = Object.create(var6, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var18 = var6;
                                var2 = new var18[var7](var17, var16);
                                var2 = var2 instanceof Object ? var2 : var6;
                                var4 = var4.inboundStats;
                                var4[var13] = var2;
                                var1 = var2;
                            case 129:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var9 = 9;
                                var4 = var4[var9];
                                var8 = undefined;
                                var4 = var6.bind(var8)(var4);
                                var7 = var4.RawVideoStats;
                                var6 = var7.parseInboundStats;
                                var4 = _closure3_slot1;
                                var6 = var6.bind(var7)(var3, var4);
                                var4 = _closure3_slot0;
                                var7 = var4.statCollectionPausedUsers;
                                var4 = var7.has;
                                var4 = var4.bind(var7)(var13);
                                if (var4) {
                                    _fun93873_ip = 229;
                                    continue _fun93873
                                }
                            case 201:
                                var4 = var1.appendAndIncrementStats;
                                var4 = var4.bind(var1)(var6);
                                var7 = var1.appendTransportStats;
                                var4 = _closure3_slot3;
                                var4 = var7.bind(var1)(var4);
                            case 229:
                                var7 = var6.packets;
                                var4 = 0;
                                if (!(var7 > var4)) {
                                    _fun93873_ip = 283;
                                    continue _fun93873
                                }
                            case 241:
                                var12 = _closure3_slot0;
                                var11 = var12.emit;
                                var7 = _closure1_slot8;
                                var17 = var7.FpsUpdate;
                                var15 = var6.framesCodec;
                                var14 = var6.timestamp;
                                var18 = var12;
                                var16 = var13;
                                var6 = var18[var11](var17, var16, var15, var14, var13);
                            case 283:
                                var6 = var1.decoderCodec;
                                var7 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var9];
                                var2 = var7.bind(var8)(var2);
                                var2 = var2.CodecTypes;
                                var2 = var2.UNKNOWN;
                                if (!(var6 !== var2)) {
                                    _fun93873_ip = 342;
                                    continue _fun93873
                                }
                            case 322:
                                var7 = _closure3_slot5;
                                var6 = var7.add;
                                var2 = var1.decoderCodec;
                                var2 = var6.bind(var7)(var2);
                            case 342:
                                var2 = var1.timeToFirstFrame;
                                var2 = var5 == var2;
                                if (!var2) {
                                    _fun93873_ip = 365;
                                    continue _fun93873
                                }
                            case 355:
                                var3 = var3.framesDecoded;
                                var2 = var3 > var4;
                            case 365:
                                if (!var2) {
                                    _fun93873_ip = 388;
                                    continue _fun93873
                                }
                            case 368:
                                var2 = _closure3_slot1;
                                var0 = var1.startTime;
                                var0 = var2 - var0;
                                var1.timeToFirstFrame = var0;
                            case 388:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var8.bind(var9)(var6, var3);
                case 695:
                    var3 = var5.size;
                    var3 = var7 !== var3;
                    if (!var3) {
                        _fun93867_ip = 716;
                        continue _fun93867
                    }
                case 707:
                    var6 = var4.size;
                    var3 = var7 !== var6;
                case 716:
                    if (!var3) {
                        _fun93867_ip = 786;
                        continue _fun93867
                    }
                case 719:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var1 = var6[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.areSetsEqual;
                    var1 = var1.bind(var3)(var5, var4);
                    if (var1) {
                        _fun93867_ip = 771;
                        continue _fun93867
                    }
                case 754:
                    var1 = var2.asymmetricCodecUpdates;
                    var1 = var1 + 1;
                    var2.asymmetricCodecUpdates = var1;
                    _fun93867_ip = 786;
                    continue _fun93867;
                case 771:
                    var1 = var2.symmetricCodecUpdates;
                    var1 = var1 + 1;
                    var2.symmetricCodecUpdates = var1;
                case 786:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'updateSystemResourceStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun93875: for (var _fun93875_ip = 0;;) switch (_fun93875_ip) {
                case 0:
                    var5 = this;
                    var3 = var5.outboundStats;
                    for (var0 in var3)
                        case 17: {
                            case 26: var7 = var0;
                            var6 = var5.outboundStats;
                            var7 = var6[var7];
                            var6 = var7.addSystemResources;
                            var6 = var6.bind(var7)();
                            _fun93875_ip = 17;
                            continue _fun93875;
                        }
                case 51:
                    var3 = var5.inboundStats;
                    for (var0 in var3)
                        case 65: {
                            case 74: var7 = var0;
                            var6 = var5.inboundStats;
                            var7 = var6[var7];
                            var6 = var7.addSystemResources;
                            var6 = var6.bind(var7)();
                            _fun93875_ip = 65;
                            continue _fun93875;
                        }
                case 99:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'updateVideoEffectStats';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun93876: for (var _fun93876_ip = 0;;) switch (_fun93876_ip) {
                case 0:
                    var1 = arg0;
                    var4 = null;
                    var2 = var4 == var1;
                    var0 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun93876_ip = 47;
                        continue _fun93876
                    }
                case 16:
                    var1 = var1.rtp;
                    var5 = var1.outbound;
                    var2 = var5.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'video';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var2.bind(var5)(var1);
                case 47:
                    var1 = this;
                    var2 = var1.videoEffectDuration;
                    var1 = var4 == var3;
                    var5 = undefined;
                    if (var1) {
                        _fun93876_ip = 70;
                        continue _fun93876
                    }
                case 65:
                    var5 = var3.type;
                case 70:
                    var1 = 'video';
                    var1 = var1 === var5;
                    if (!var1) {
                        _fun93876_ip = 90;
                        continue _fun93876
                    }
                case 81:
                    var3 = var3.filter;
                    var1 = var4 != var3;
                case 90:
                    var2.value = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[28] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VideoQuality.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VideoQualityEvent = var3;
    var2.VideoQuality = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3488, 12210, 12212, 3592, 12224, 22, 21, 478, 1413, 3666, 2]);