// modules/libdiscore/libdiscoreExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun93924: for (var _fun93924_ip = 0;;) switch (_fun93924_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun93924_ip = 51;
                    continue _fun93924
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun93924_ip = 92;
                continue _fun93924;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun93924_ip = 71;
                    continue _fun93924
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot4;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun93925: for (var _fun93925_ip = 0;;) switch (_fun93925_ip) {
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
                _fun93925_ip = 76;
                continue _fun93925;
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
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var9[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var6 = new Array(0);
    var _closure1_slot8 = var6;
    var4 = var3.Symbol;
    var3 = 'unknown';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function(arg0) { // Original name: LibdiscoreCachedExperiment, environment: var4
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var4.bind(var0)(var3, var2);
            var2 = arg0;
            var3.id = var2;
            var2 = null;
            var3.inner = var2;
            var2 = _closure1_slot9;
            var3.cachedConfig = var2;
            var2 = _closure1_slot8;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getEnabledFeatureName';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun93930: for (var _fun93930_ip = 0;;) switch (_fun93930_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getCachedConfig;
                    var1 = var0.bind(var2)();
                    var3 = undefined;
                    var0 = null;
                    if (!(var3 !== var1)) {
                        _fun93930_ip = 77;
                        continue _fun93930
                    }
                case 21:
                    var5 = var1.treatmentId;
                    var3 = 0;
                    var3 = var5 <= var3;
                    var0 = null;
                    if (var3) {
                        _fun93930_ip = 77;
                        continue _fun93930
                    }
                case 38:
                    var5 = var2.id;
                    var4 = var1.treatmentId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ':';
                    var0 = var3.bind(var2)(var5, var1, var4);
                case 77:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'getCachedConfig';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun93931: for (var _fun93931_ip = 0;;) switch (_fun93931_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.cachedConfig;
                    var2 = _closure1_slot9;
                    if (!(var3 === var2)) {
                        _fun93931_ip = 112;
                        continue _fun93931
                    }
                case 20:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 5;
                    var2 = var2[var4];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.isLibdiscoreInitialized;
                    var2 = var2.bind(var5)();
                    if (var2) {
                        _fun93931_ip = 63;
                        continue _fun93931
                    }
                case 55:
                    var0.cachedConfig = var3;
                    _fun93931_ip = 112;
                    continue _fun93931;
                case 63:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.getExperimentCacher;
                    var3 = var1.bind(var2)();
                    var2 = var3.getConfig;
                    var1 = var0.id;
                    var1 = var2.bind(var3)(var1);
                    var0.cachedConfig = var1;
                case 112:
                    var0 = var0.cachedConfig;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setExperiment';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = arg0;
            var0 = this;
            var0.inner = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getCurrentConfig';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun93933: for (var _fun93933_ip = 0;;) switch (_fun93933_ip) {
                case 0:
                    var1 = this;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var0 = var3[var0];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var0);
                    var2 = var1.inner;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 'experiment must be set before calling getCurrentConfig';
                    var0 = var3.bind(var4)(var2, var0);
                    var2 = var1.inner;
                    var0 = 'getCurrentConfig';
                    var0 = var0 in var2;
                    var3 = var1.inner;
                    if (var0) {
                        _fun93933_ip = 98;
                        continue _fun93933
                    }
                case 75:
                    var1 = var3.getConfig;
                    var0 = {};
                    var2 = 'default';
                    var0.location = var2;
                    var0 = var1.bind(var3)(var0);
                    _fun93933_ip = 119;
                    continue _fun93933;
                case 98:
                    var2 = var3.getCurrentConfig;
                    var1 = {};
                    var4 = 'default';
                    var1.location = var4;
                    var0 = var2.bind(var3)(var1);
                case 119:
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: LibdiscoreWrapperSimpleExperiment, environment: var5
            var4 = this;
            var1 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot10;
            var0 = new Array(1);
            var5 = arg0;
            var0[0] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            var1 = arg1;
            var0.label = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'getLabel';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.label;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getTreatments';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = {};
            var0 = 0;
            var1.treatmentId = var0;
            var0 = new Array(2);
            var0[0] = var1;
            var1 = {};
            var2 = 1;
            var1.treatmentId = var2;
            var0[1] = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCachedEnabled';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun93938: for (var _fun93938_ip = 0;;) switch (_fun93938_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getCachedConfig;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun93938_ip = 35;
                        continue _fun93938
                    }
                case 22:
                    var2 = var1.treatmentId;
                    var1 = 1;
                    var0 = var1 === var2;
                case 35:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var3.bind(var0)(var5);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: LibdiscoreTelemetryExperiment, environment: var5
            var5 = this;
            var1 = 0;
            var9 = 0;
            var6 = copyRestArgs(var9);
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot10;
            var0 = new Array(0);
            var9 = var0;
            var8 = var6;
            var7 = 0;
            var6 = arraySpread(var9, var8, var7);
            var0 = var2.bind(var3)(var5, var4, var0);
            var2 = 5;
            var0.MAX_EMISSIONS_PER_APP_LAUNCH = var2;
            var0.emissionsCount = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'getLabel';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = 'libdiscore Telemetry';
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getTreatments';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = {};
            var0 = 0;
            var1.treatmentId = var0;
            var0 = new Array(4);
            var0[0] = var1;
            var1 = {};
            var2 = 1;
            var1.treatmentId = var2;
            var0[1] = var1;
            var1 = {};
            var2 = 2;
            var1.treatmentId = var2;
            var0[2] = var1;
            var1 = {};
            var2 = 3;
            var1.treatmentId = var2;
            var0[3] = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMetricsSampleRate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun93943: for (var _fun93943_ip = 0;;) switch (_fun93943_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getCachedConfig;
                    var0 = var0.bind(var1)();
                    var1 = null;
                    var1 = var1 == var0;
                    var2 = undefined;
                    if (var1) {
                        _fun93943_ip = 30;
                        continue _fun93943
                    }
                case 24:
                    var2 = var0.treatmentId;
                case 30:
                    var0 = 1;
                    if (!(var0 !== var2)) {
                        _fun93943_ip = 69;
                        continue _fun93943
                    }
                case 37:
                    var1 = 2;
                    if (!(var1 !== var2)) {
                        _fun93943_ip = 57;
                        continue _fun93943
                    }
                case 44:
                    var1 = 3;
                    if (!(var1 !== var2)) {
                        _fun93943_ip = 55;
                        continue _fun93943
                    }
                case 51:
                    var1 = 0;
                    return var1;
                case 55:
                    return var0;
                case 57:
                    var0 = 0.05;
                    return var0;
                case 69:
                    var0 = 0.01;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'didEmit';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.emissionsCount;
            var0 = var0 + 1;
            var1.emissionsCount = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'shouldCollectMetrics';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun93945: for (var _fun93945_ip = 0;;) switch (_fun93945_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getMetricsSampleRate;
                    var4 = var0.bind(var2)();
                    var0 = 0;
                    var0 = var0 !== var4;
                    if (!var0) {
                        _fun93945_ip = 84;
                        continue _fun93945
                    }
                case 24:
                    var1 = 1;
                    var1 = var1 === var4;
                    if (var1) {
                        _fun93945_ip = 81;
                        continue _fun93945
                    }
                case 34:
                    var3 = var2.emissionsCount;
                    var2 = var2.MAX_EMISSIONS_PER_APP_LAUNCH;
                    var3 = var3 >= var2;
                    var2 = !var3;
                    if (var3) {
                        _fun93945_ip = 78;
                        continue _fun93945
                    }
                case 56:
                    var3 = global;
                    var5 = var3.Math;
                    var3 = var5.random;
                    var3 = var3.bind(var5)();
                    var2 = var3 < var4;
                case 78:
                    var1 = var2;
                case 81:
                    var0 = var1;
                case 84:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var5);
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var13 = '2025-09-libdiscore-telemetry';
    var14 = var3;
    var1 = new var14[var7](var13, var12);
    var3 = var1 instanceof Object ? var1 : var3;
    var1 = var4.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var13 = '2025-11-defer-load-late-lazy-cache';
    var12 = 'Allow react to render before lazy cache is loaded';
    var14 = var7;
    var1 = new var14[var4](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/libdiscore/libdiscoreExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var2.ALL_LIBDISCORE_EXPERIMENTS = var6;
    var2.LibdiscoreCachedExperiment = var5;
    var2.LibdiscoreWrapperSimpleExperiment = var4;
    var2.TelemetryExperiment = var3;
    var2.DelayLoadLateLazyCacheHoldoutExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 4082, 44, 2]);