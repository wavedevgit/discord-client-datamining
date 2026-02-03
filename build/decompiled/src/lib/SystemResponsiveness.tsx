// lib/SystemResponsiveness.tsx
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
        _fun93760: for (var _fun93760_ip = 0;;) switch (_fun93760_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93760_ip = 46;
                    continue _fun93760
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93760_ip = 55;
                    continue _fun93760
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93760_ip = 345;
                    continue _fun93760
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93760_ip = 323;
                    continue _fun93760
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93760_ip = 283;
                    continue _fun93760
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93760_ip = 270;
                    continue _fun93760
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
                    _fun93760_ip = 163;
                    continue _fun93760
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93760_ip = 179;
                    continue _fun93760
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 249;
                    continue _fun93760
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 249;
                    continue _fun93760
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 234;
                    continue _fun93760
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93760_ip = 247;
                    continue _fun93760
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93760_ip = 265;
                continue _fun93760;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93760_ip = 283;
                continue _fun93760;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93760_ip = 323;
                    continue _fun93760
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
                    _fun93760_ip = 330;
                    continue _fun93760
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93761: for (var _fun93761_ip = 0;;) switch (_fun93761_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93761_ip = 56;
                                continue _fun93761
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
                            _fun93761_ip = 67;
                            continue _fun93761;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun93762: for (var _fun93762_ip = 0;;) switch (_fun93762_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93762_ip = 23;
                    continue _fun93762
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93762_ip = 33;
                    continue _fun93762
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
                    _fun93762_ip = 70;
                    continue _fun93762
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93762_ip = 55;
                    continue _fun93762
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = arg0;
            var2.connection = var4;
            var3 = function(arg0) { // Environment: var3
                _fun93765: for (var _fun93765_ip = 0;;) switch (_fun93765_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun93765_ip = 66;
                            continue _fun93765
                        }
                    case 9:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.forEach;
                        var0 = var0.rtp;
                        var1 = var0.outbound;
                        var0 = function(arg0) { // Environment: var0
                            _fun93766: for (var _fun93766_ip = 0;;) switch (_fun93766_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.type;
                                    var1 = 'audio';
                                    if (!(var1 === var2)) {
                                        _fun93766_ip = 112;
                                        continue _fun93766
                                    }
                                case 16:
                                    var1 = _closure1_slot5;
                                    var0 = var0.pttQueueLatencyMicrosSamples;
                                    var2 = null;
                                    if (!(var2 == var0)) {
                                        _fun93766_ip = 39;
                                        continue _fun93766
                                    }
                                case 35:
                                    var0 = new Array(0);
                                case 39:
                                    var5 = undefined;
                                    var4 = var1.bind(var5)(var0);
                                    var1 = var4.bind(var5)();
                                    var0 = var1.done;
                                    var3 = 1000;
                                    if (var0) {
                                        _fun93766_ip = 112;
                                        continue _fun93766
                                    }
                                case 67:
                                    var0 = var1.value;
                                    var7 = var0 / var3;
                                    var0 = _closure3_slot0;
                                    var6 = var0.pttQueueLatencyHistogram;
                                    var0 = var6.addSample;
                                    var0 = var0.bind(var6)(var7);
                                    var6 = var4.bind(var5)();
                                    var0 = var6.done;
                                    var1 = var6;
                                    if (!var0) {
                                        _fun93766_ip = 67;
                                        continue _fun93766
                                    }
                                case 112:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                    case 66:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.sampleStats = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.Histogram;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.pttQueueLatencyHistogram = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var4 = var1.connection;
            var3 = var4.on;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Stats;
            var1 = var1.sampleStats;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var4 = var1.connection;
            var3 = var4.off;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Stats;
            var1 = var1.sampleStats;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getPttQueueLatencyStats';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var2 = var0.pttQueueLatencyHistogram;
            var1 = var2.getReport;
            var0 = [50, 95];
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var2 = var1.max;
            var0.ptt_queue_latency_max = var2;
            var2 = var1.mean;
            var0.ptt_queue_latency_mean = var2;
            var3 = var1.percentiles;
            var2 = 50;
            var2 = var3[var2];
            var0.ptt_queue_latency_p50 = var2;
            var3 = var1.percentiles;
            var2 = 95;
            var2 = var3[var2];
            var0.ptt_queue_latency_p95 = var2;
            var1 = var1.samples;
            var0.ptt_queue_latency_samples = var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/SystemResponsiveness.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 22, 12247, 3624, 2]);