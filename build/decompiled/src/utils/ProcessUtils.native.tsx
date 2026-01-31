// utils/ProcessUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun93319: for (var _fun93319_ip = 0;;) switch (_fun93319_ip) {
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
                _fun93319_ip = 76;
                continue _fun93319;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProcessUtils;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ProcessUtilsIOS, environment: var5
            _fun93323: for (var _fun93323_ip = 0;;) switch (_fun93323_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot3;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun93323_ip = 64;
                        continue _fun93323
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun93323_ip = 102;
                    continue _fun93323;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot5;
                    var6 = null;
                    var3 = var6 == var3;
                    var5 = undefined;
                    if (var3) {
                        _fun93323_ip = 137;
                        continue _fun93323
                    }
                case 127:
                    var2 = _closure1_slot5;
                    var5 = var2.SystemResourceManager;
                case 137:
                    var _closure3_slot1 = var5;
                    var2 = var6 == var5;
                    if (var2) {
                        _fun93323_ip = 158;
                        continue _fun93323
                    }
                case 148:
                    var3 = var5.getCpuCoreCount;
                    var2 = var6 == var3;
                case 158:
                    if (var2) {
                        _fun93323_ip = 179;
                        continue _fun93323
                    }
                case 161:
                    var3 = var5.getCpuCoreCount;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1.cpuCoreCount = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                case 179:
                    var2 = global;
                    var3 = var2.setInterval;
                    var2 = function() { // Environment: var1
                        _fun93325: for (var _fun93325_ip = 0;;) switch (_fun93325_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var4 = null;
                                var2 = var4 == var2;
                                if (var2) {
                                    _fun93325_ip = 32;
                                    continue _fun93325
                                }
                            case 18:
                                var3 = _closure3_slot1;
                                var3 = var3.getCurrentCpuUsagePercent;
                                var2 = var4 == var3;
                            case 32:
                                if (var2) {
                                    _fun93325_ip = 57;
                                    continue _fun93325
                                }
                            case 35:
                                var5 = _closure3_slot1;
                                var3 = var5.getCurrentCpuUsagePercent;
                                var2 = function(arg0) { // Environment: var0
                                    _fun93326: for (var _fun93326_ip = 0;;) switch (_fun93326_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure3_slot0;
                                            var0 = 0;
                                            var4 = var3 >= var0;
                                            var0 = undefined;
                                            var1 = undefined;
                                            if (!var4) {
                                                _fun93326_ip = 26;
                                                continue _fun93326
                                            }
                                        case 23:
                                            var1 = var3;
                                        case 26:
                                            var2.cpuPercentage = var1;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var5)(var2);
                            case 57:
                                var2 = _closure3_slot1;
                                var2 = var4 == var2;
                                if (var2) {
                                    _fun93325_ip = 82;
                                    continue _fun93325
                                }
                            case 68:
                                var3 = _closure3_slot1;
                                var3 = var3.getCumulativeCpuUsage;
                                var2 = var4 == var3;
                            case 82:
                                if (var2) {
                                    _fun93325_ip = 107;
                                    continue _fun93325
                                }
                            case 85:
                                var5 = _closure3_slot1;
                                var3 = var5.getCumulativeCpuUsage;
                                var2 = function(arg0) { // Environment: var0
                                    _fun93327: for (var _fun93327_ip = 0;;) switch (_fun93327_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = 0;
                                            if (!(var2 >= var0)) {
                                                _fun93327_ip = 51;
                                                continue _fun93327
                                            }
                                        case 9:
                                            var1 = _closure3_slot0;
                                            var0 = {};
                                            var0.usage = var2;
                                            var2 = global;
                                            var3 = var2.performance;
                                            var2 = var3.now;
                                            var2 = var2.bind(var3)();
                                            var0.sampleTime = var2;
                                            var1.cumulativeCpuUsage = var0;
                                        case 51:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var5)(var2);
                            case 107:
                                var2 = _closure3_slot1;
                                var2 = var4 == var2;
                                if (var2) {
                                    _fun93325_ip = 132;
                                    continue _fun93325
                                }
                            case 118:
                                var3 = _closure3_slot1;
                                var3 = var3.getCurrentMemoryUsageKb;
                                var2 = var4 == var3;
                            case 132:
                                if (var2) {
                                    _fun93325_ip = 157;
                                    continue _fun93325
                                }
                            case 135:
                                var2 = _closure3_slot1;
                                var1 = var2.getCurrentMemoryUsageKb;
                                var0 = function(arg0) { // Environment: var0
                                    _fun93328: for (var _fun93328_ip = 0;;) switch (_fun93328_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure3_slot0;
                                            var0 = 0;
                                            var4 = var3 >= var0;
                                            var0 = undefined;
                                            var1 = undefined;
                                            if (!var4) {
                                                _fun93328_ip = 26;
                                                continue _fun93328
                                            }
                                        case 23:
                                            var1 = var3;
                                        case 26:
                                            var2.memory = var1;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 157:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 1000;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getProcessUptime';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(26);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCumulativeCPUUsage';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.cumulativeCpuUsage;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCurrentCPUUsagePercent';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.cpuPercentage;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCurrentMemoryUsageKB';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.memory;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'enablePerfMemoryHooks';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'disablePerfMemoryHooks';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPerfAttributedMemory';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getPerfAttributedMemoryCallstacks';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getPerfAttributedMemoryStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'startCPUProfiling';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'stopCPUProfiling';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = null;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'enablePAMemoryProfiler';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'disablePAMemoryProfiler';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getPerfAttributedPAMemory';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getPerfAttributedPAMemoryCallstacks';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getPartitionAllocatorStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'enableProfilingV8Heap';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'disableProfilingV8Heap';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getProfilerV8MemoryCallstacks';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getMemoryUsageDetails';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = this;
            var1 = var1.memory;
            var0[0] = var1;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getMemoryUsageElectronRenderer';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getMemoryPrivateUsageElectronRenderer';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getMemoryUsageElectronRendererUsedHeapSize';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getMemoryHeapStats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getBlinkMemoryInfo';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getMemoryUsageElectronProcessTypeDetails';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var5;
        var0[25] = var4;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ProcessUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 12177, 2]);