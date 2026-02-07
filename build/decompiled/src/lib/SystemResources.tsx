// lib/SystemResources.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot3;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var6 = var4[var3];
            var6 = var5.bind(var0)(var6);
            var6 = var6.Histogram;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var2.cpuHistogram = var6;
            var3 = var4[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.Histogram;
            var5 = var3.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var3
                }
            });
            var10 = var5;
            var3 = new var10[var3](var9);
            var3 = var3 instanceof Object ? var3 : var5;
            var2.memoryHistogram = var3;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var3 = var3.bind(var0)(var1);
            var1 = var3.getCumulativeCPUUsage;
            var1 = var1.bind(var3)();
            var2.startCPU = var1;
            var1 = var2.startCPU;
            var2.lastCPU = var1;
            var1 = null;
            var2.lastBattery = var1;
            return var0;
        };
        var _closure2_slot3 = var2;
        var4 = {};
        var1 = 'getStats';
        var4.key = var1;
        var1 = function() {
            _fun94262: for (var _fun94262_ip = 0;;) switch (_fun94262_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.cpuHistogram;
                    var1 = var2.getReport;
                    var8 = var1.bind(var2)();
                    var2 = var0.memoryHistogram;
                    var1 = var2.getReport;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getCumulativeCPUUsage;
                    var4 = var2.bind(var3)();
                    var2 = var0.startCPU;
                    var9 = null;
                    var3 = var9 == var2;
                    var2 = undefined;
                    if (var3) {
                        _fun94262_ip = 161;
                        continue _fun94262
                    }
                case 87:
                    var3 = var9 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun94262_ip = 161;
                        continue _fun94262
                    }
                case 96:
                    var5 = var4.usage;
                    var3 = var0.startCPU;
                    var3 = var3.usage;
                    var5 = var5 - var3;
                    var3 = 100;
                    var3 = var3 * var5;
                    var4 = var4.sampleTime;
                    var0 = var0.startCPU;
                    var0 = var0.sampleTime;
                    var4 = var4 - var0;
                    var0 = 1000;
                    var0 = var4 / var0;
                    var2 = var3 / var0;
                case 161:
                    var0 = {};
                    var3 = var8.percentiles;
                    var7 = 25;
                    var3 = var3[var7];
                    var0.client_performance_cpu_percentile25 = var3;
                    var3 = var8.percentiles;
                    var6 = 50;
                    var3 = var3[var6];
                    var0.client_performance_cpu_percentile50 = var3;
                    var3 = var8.percentiles;
                    var5 = 75;
                    var3 = var3[var5];
                    var0.client_performance_cpu_percentile75 = var3;
                    var3 = var8.percentiles;
                    var4 = 90;
                    var3 = var3[var4];
                    var0.client_performance_cpu_percentile90 = var3;
                    var10 = var8.percentiles;
                    var3 = 95;
                    var10 = var10[var3];
                    var0.client_performance_cpu_percentile95 = var10;
                    if (!(var9 == var2)) {
                        _fun94262_ip = 273;
                        continue _fun94262
                    }
                case 267:
                    var2 = var8.mean;
                case 273:
                    var0.client_performance_cpu_mean = var2;
                    var2 = var1.percentiles;
                    var2 = var2[var7];
                    var0.client_performance_memory_percentile25 = var2;
                    var2 = var1.percentiles;
                    var2 = var2[var6];
                    var0.client_performance_memory_percentile50 = var2;
                    var2 = var1.percentiles;
                    var2 = var2[var5];
                    var0.client_performance_memory_percentile75 = var2;
                    var2 = var1.percentiles;
                    var2 = var2[var4];
                    var0.client_performance_memory_percentile90 = var2;
                    var2 = var1.percentiles;
                    var2 = var2[var3];
                    var0.client_performance_memory_percentile95 = var2;
                    var2 = var1.min;
                    var0.client_performance_memory_min = var2;
                    var2 = var1.max;
                    var0.client_performance_memory_max = var2;
                    var1 = var1.mean;
                    var0.client_performance_memory_mean = var1;
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(5);
        var1[0] = var4;
        var4 = {};
        var6 = 'takeSample';
        var4.key = var6;
        var6 = function() {
            _fun94263: for (var _fun94263_ip = 0;;) switch (_fun94263_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 4;
                    var4 = var2[var7];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var4);
                    var4 = var6.getCumulativeCPUUsage;
                    var4 = var4.bind(var6)();
                    var2 = var2[var7];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getCurrentMemoryUsageKB;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun94263_ip = 116;
                        continue _fun94263
                    }
                case 63:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getCurrentCPUUsagePercent;
                    var7 = var5.bind(var6)();
                    if (!(var2 != var7)) {
                        _fun94263_ip = 234;
                        continue _fun94263
                    }
                case 97:
                    var6 = var1.cpuHistogram;
                    var5 = var6.addSample;
                    var5 = var5.bind(var6)(var7);
                    _fun94263_ip = 234;
                    continue _fun94263;
                case 116:
                    var5 = var1.lastCPU;
                    var7 = var2 != var5;
                    var5 = true;
                    if (!var7) {
                        _fun94263_ip = 225;
                        continue _fun94263
                    }
                case 131:
                    var8 = var4.sampleTime;
                    var7 = var1.lastCPU;
                    var7 = var7.sampleTime;
                    var10 = var8 - var7;
                    var5 = false;
                    var7 = 1;
                    if (!(var10 >= var7)) {
                        _fun94263_ip = 225;
                        continue _fun94263
                    }
                case 162:
                    var8 = var4.usage;
                    var7 = var1.lastCPU;
                    var7 = var7.usage;
                    var11 = var8 - var7;
                    var9 = var1.cpuHistogram;
                    var8 = var9.addSample;
                    var7 = 1000;
                    var7 = var10 / var7;
                    var11 = var11 / var7;
                    var7 = 100;
                    var7 = var11 * var7;
                    var7 = var8.bind(var9)(var7, var10);
                    var5 = true;
                case 225:
                    if (!var5) {
                        _fun94263_ip = 234;
                        continue _fun94263
                    }
                case 228:
                    var1.lastCPU = var4;
                case 234:
                    if (!(var2 != var3)) {
                        _fun94263_ip = 255;
                        continue _fun94263
                    }
                case 238:
                    var2 = var1.memoryHistogram;
                    var1 = var2.addSample;
                    var1 = var1.bind(var2)(var3);
                case 255:
                    return var0;
            }
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'getCurrentBattery';
        var4.key = var6;
        var7 = _closure1_slot3;
        var0 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94265: for (var _fun94265_ip = 0;;) switch (_fun94265_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94265_ip = 81;
                            continue _fun94265
                        }
                    case 7: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getDeviceState;
                        var1 = {};
                        var4 = false;
                        var1.fallback = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun94265_ip = 71;
                            continue _fun94265
                        }
                    case 62:
                        var2 = var1.batteryLevel;
                    case 68: // try_end0
                        return var2;
                    case 71:
                        return var1;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = null;
                        return var1;
                    case 81:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot2 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'setLastBattery';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94268: for (var _fun94268_ip = 0;;) switch (_fun94268_ip) {
                    case 0:
                        StartGenerator();
                        var2 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94268_ip = 44;
                            continue _fun94268
                        }
                    case 10:
                        var1 = var2.getCurrentBattery;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun94268_ip = 41;
                            continue _fun94268
                        }
                    case 30:
                        var2.lastBattery = var1;
                        var2 = undefined;
                        return var2;
                    case 41:
                        return var1;
                    case 44:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = 'getBatteryLevelStats';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94271: for (var _fun94271_ip = 0;;) switch (_fun94271_ip) {
                    case 0:
                        StartGenerator();
                        var5 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94271_ip = 148;
                            continue _fun94271
                        }
                    case 13:
                        var1 = var5.getCurrentBattery;
                        var1 = var1.bind(var5)();
                        SaveGenerator(address = 27);
                    case 25:
                        return var1;
                    case 27:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun94271_ip = 145;
                            continue _fun94271
                        }
                    case 33:
                        var2 = var5.lastBattery;
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun94271_ip = 116;
                            continue _fun94271
                        }
                    case 45:
                        if (!(var4 != var1)) {
                            _fun94271_ip = 116;
                            continue _fun94271
                        }
                    case 49:
                        var2 = {};
                        var3 = var5.lastBattery;
                        var2.startBattery = var3;
                        var2.currentBattery = var1;
                        var3 = global;
                        var8 = var3.Math;
                        var7 = var8.round;
                        var3 = var5.lastBattery;
                        var3 = var1 - var3;
                        var6 = 1000;
                        var3 = var6 * var3;
                        var3 = var7.bind(var8)(var3);
                        var3 = var3 / var6;
                        var2.batteryUsageRounded = var3;
                        _fun94271_ip = 142;
                        continue _fun94271;
                    case 116:
                        var3 = {};
                        var5 = var5.lastBattery;
                        var3.startBattery = var5;
                        var3.currentBattery = var1;
                        var3.batteryUsageRounded = var4;
                        var2 = var3;
                    case 142:
                        return var2;
                    case 145:
                        return var1;
                    case 148:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var1[4] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/SystemResources.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 12325, 12290, 12331, 2]);