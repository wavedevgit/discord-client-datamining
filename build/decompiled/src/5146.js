// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: JSFPSMonitor, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = 0;
            var2.startTime = var3;
            var2.frameCount = var3;
            var4 = {
                'frameCount': 0,
                'startTime': 0
            };
            var2.timeWindow = var4;
            var4 = global;
            var4 = var4.Number;
            var4 = var4.MAX_SAFE_INTEGER;
            var2.minFPS = var4;
            var2.maxFPS = var3;
            var2.averageFPS = var3;
            var2.clearAnimationNumber = var3;
            var1 = function() { // Environment: var1
                _fun46183: for (var _fun46183_ip = 0;;) switch (_fun46183_ip) {
                    case 0:
                        var5 = _closure3_slot0;
                        var1 = var5.frameCount;
                        var1 = var1 + 1;
                        var5.frameCount = var1;
                        var1 = global;
                        var3 = var1.Date;
                        var2 = var3.now;
                        var3 = var2.bind(var3)();
                        var2 = var5.startTime;
                        var2 = var3 - var2;
                        var3 = 1000;
                        var7 = var2 / var3;
                        var4 = 0;
                        var2 = 0;
                        if (!(var7 > var2)) {
                            _fun46183_ip = 81;
                            continue _fun46183
                        }
                    case 67:
                        var6 = _closure3_slot0;
                        var6 = var6.frameCount;
                        var2 = var6 / var7;
                    case 81:
                        var5.averageFPS = var2;
                        var2 = _closure3_slot0;
                        var6 = var2.timeWindow;
                        var5 = var6.frameCount;
                        var5 = var5 + 1;
                        var6.frameCount = var5;
                        var6 = var1.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var2 = var2.timeWindow;
                        var2 = var2.startTime;
                        var2 = var5 - var2;
                        var5 = var2 / var3;
                        var2 = 1;
                        if (!(var5 >= var2)) {
                            _fun46183_ip = 271;
                            continue _fun46183
                        }
                    case 154:
                        var2 = _closure3_slot0;
                        var3 = var2.timeWindow;
                        var3 = var3.frameCount;
                        var7 = var3 / var5;
                        var6 = var1.Math;
                        var5 = var6.min;
                        var3 = var2.minFPS;
                        var3 = var5.bind(var6)(var3, var7);
                        var2.minFPS = var3;
                        var6 = var1.Math;
                        var5 = var6.max;
                        var3 = var2.maxFPS;
                        var3 = var5.bind(var6)(var3, var7);
                        var2.maxFPS = var3;
                        var3 = var2.timeWindow;
                        var3.frameCount = var4;
                        var2 = var2.timeWindow;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var2.startTime = var1;
                    case 271:
                        var1 = _closure3_slot0;
                        var0 = var1.measureLoop;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var2.updateLoopCompute = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'measureLoop';
        var0.key = var1;
        var1 = function() { // Original name: measureLoop, environment: var4
            var2 = this;
            var0 = global;
            var3 = var0.requestAnimationFrame;
            var1 = var2.updateLoopCompute;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var2.clearAnimationNumber = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'startTracking';
        var0.key = var5;
        var5 = function() { // Original name: startTracking, environment: var4
            _fun46185: for (var _fun46185_ip = 0;;) switch (_fun46185_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.startTime;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun46185_ip = 79;
                        continue _fun46185
                    }
                case 15:
                    var0 = global;
                    var3 = var0.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1.startTime = var2;
                    var2 = var1.timeWindow;
                    var3 = var0.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var2.startTime = var0;
                    var0 = var1.measureLoop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                case 79:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = 'This FPS Monitor has already been run, please create a new instance';
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'stopAndGetData';
        var0.key = var5;
        var4 = function() { // Original name: stopAndGetData, environment: var4
            _fun46186: for (var _fun46186_ip = 0;;) switch (_fun46186_ip) {
                case 0:
                    var1 = this;
                    var0 = global;
                    var3 = var0.cancelAnimationFrame;
                    var2 = var1.clearAnimationNumber;
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var2 = var1.minFPS;
                    var0 = var0.Number;
                    var0 = var0.MAX_SAFE_INTEGER;
                    if (!(var2 === var0)) {
                        _fun46186_ip = 70;
                        continue _fun46186
                    }
                case 46:
                    var0 = var1.averageFPS;
                    var1.minFPS = var0;
                    var0 = var1.averageFPS;
                    var1.maxFPS = var0;
                case 70:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 2;
                    var4 = var6[var2];
                    var9 = var3.bind(var5)(var4);
                    var8 = var9.roundToDecimalPlaces;
                    var7 = var1.minFPS;
                    var4 = 1;
                    var7 = var8.bind(var9)(var7, var4);
                    var0.minFPS = var7;
                    var7 = var6[var2];
                    var9 = var3.bind(var5)(var7);
                    var8 = var9.roundToDecimalPlaces;
                    var7 = var1.maxFPS;
                    var7 = var8.bind(var9)(var7, var4);
                    var0.maxFPS = var7;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.roundToDecimalPlaces;
                    var1 = var1.averageFPS;
                    var1 = var2.bind(var3)(var1, var4);
                    var0.averageFPS = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.JSFPSMonitor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5065, 5066, 5147]);