// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun2443: for (var _fun2443_ip = 0;;) switch (_fun2443_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot3;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot2;
                var0 = _closure1_slot9;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun2443_ip = 51;
                    continue _fun2443
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun2443_ip = 92;
                continue _fun2443;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun2443_ip = 71;
                    continue _fun2443
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot3;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun2444: for (var _fun2444_ip = 0;;) switch (_fun2444_ip) {
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
                _fun2444_ip = 74;
                continue _fun2444;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var6[var3];
    var8 = var4.bind(var0)(var3);
    var7 = 'detail';
    var3 = var8.bind(var0)(var7);
    var _closure1_slot6 = var3;
    var4 = 7;
    var3 = var6[var4];
    var3 = var5.bind(var0)(var3);
    var9 = var3.PerformanceEntry;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: PerformanceMark, environment: var0
            _fun2448: for (var _fun2448_ip = 0;;) switch (_fun2448_ip) {
                case 0:
                    var1 = arg1;
                    var6 = this;
                    var0 = _closure1_slot0;
                    var5 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var6, var5);
                    var2 = _closure1_slot8;
                    var7 = {};
                    var0 = arg0;
                    var7.name = var0;
                    var0 = 'mark';
                    var7.entryType = var0;
                    var8 = null;
                    var9 = var8 == var1;
                    var0 = undefined;
                    if (var9) {
                        _fun2448_ip = 67;
                        continue _fun2448
                    }
                case 61:
                    var0 = var1.startTime;
                case 67:
                    if (!(var8 == var0)) {
                        _fun2448_ip = 88;
                        continue _fun2448
                    }
                case 71:
                    var8 = global;
                    var9 = var8.performance;
                    var8 = var9.now;
                    var0 = var8.bind(var9)();
                case 88:
                    var7.startTime = var0;
                    var0 = 0;
                    var7.duration = var0;
                    var0 = new Array(1);
                    var0[0] = var7;
                    var0 = var2.bind(var4)(var6, var5, var0);
                    var2 = global;
                    var7 = var2.Object;
                    var6 = var7.defineProperty;
                    var5 = _closure1_slot6;
                    var2 = {};
                    var8 = true;
                    var2.writable = var8;
                    var2.value = var4;
                    var2 = var6.bind(var7)(var0, var5, var2);
                    if (!var1) {
                        _fun2448_ip = 178;
                        continue _fun2448
                    }
                case 154:
                    var2 = _closure1_slot5;
                    var3 = _closure1_slot6;
                    var2 = var2.bind(var4)(var0, var3);
                    var1 = var1.detail;
                    var2[var3] = var1;
                case 178:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'detail';
        var4.key = var5;
        var0 = function() { // Original name: get, environment: var0
            var3 = _closure1_slot5;
            var1 = _closure1_slot6;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var0 = var0[var1];
            return var0;
        };
        var4.get = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var9);
    var7 = var8.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PerformanceEntry;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: PerformanceMeasure, environment: var0
            _fun2451: for (var _fun2451_ip = 0;;) switch (_fun2451_ip) {
                case 0:
                    var1 = arg1;
                    var6 = this;
                    var0 = _closure1_slot0;
                    var5 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var6, var5);
                    var2 = _closure1_slot8;
                    var7 = {};
                    var0 = arg0;
                    var7.name = var0;
                    var0 = 'measure';
                    var7.entryType = var0;
                    var0 = var1.startTime;
                    var7.startTime = var0;
                    var0 = var1.duration;
                    var7.duration = var0;
                    var0 = new Array(1);
                    var0[0] = var7;
                    var0 = var2.bind(var4)(var6, var5, var0);
                    var2 = global;
                    var7 = var2.Object;
                    var6 = var7.defineProperty;
                    var5 = _closure1_slot7;
                    var2 = {};
                    var8 = true;
                    var2.writable = var8;
                    var2.value = var4;
                    var2 = var6.bind(var7)(var0, var5, var2);
                    if (!var1) {
                        _fun2451_ip = 149;
                        continue _fun2451
                    }
                case 125:
                    var2 = _closure1_slot5;
                    var3 = _closure1_slot7;
                    var2 = var2.bind(var4)(var0, var3);
                    var1 = var1.detail;
                    var2[var3] = var1;
                case 149:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'detail';
        var4.key = var5;
        var0 = function() { // Original name: get, environment: var0
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var0 = var0[var1];
            return var0;
        };
        var4.get = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var2.PerformanceMark = var3;
    var2.PerformanceMeasure = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 99, 100, 155]);