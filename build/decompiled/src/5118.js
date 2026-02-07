// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            _fun45674: for (var _fun45674_ip = 0;;) switch (_fun45674_ip) {
                case 0:
                    var3 = arg1;
                    var1 = this;
                    var4 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var1, var2);
                    var2 = 0;
                    var1.nextIndex = var2;
                    var4 = global;
                    var7 = var4.Array;
                    var8 = var4.Math;
                    var6 = var8.max;
                    var4 = 1;
                    var5 = arg0;
                    var10 = var6.bind(var8)(var4, var5);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var11 = var6;
                    var5 = new var11[var7](var10, var9);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var1.inputValues = var5;
                    var5 = null;
                    var6 = var5 != var3;
                    var5 = 0;
                    if (!var6) {
                        _fun45674_ip = 107;
                        continue _fun45674
                    }
                case 104:
                    var5 = var3;
                case 107:
                    var1.currentAverage = var5;
                    if (!(var0 === var3)) {
                        _fun45674_ip = 119;
                        continue _fun45674
                    }
                case 117:
                    var4 = 0;
                case 119:
                    var1.currentCount = var4;
                    var4 = var1.currentCount;
                    var1.nextIndex = var4;
                    var1 = var1.inputValues;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'currentValue';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.currentAverage;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'addValue';
        var0.key = var5;
        var5 = function arg0() {
            _fun45676: for (var _fun45676_ip = 0;;) switch (_fun45676_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var0 = var2.getNextIndex;
                    var4 = var0.bind(var2)();
                    var0 = var2.inputValues;
                    var6 = var0[var4];
                    var0 = undefined;
                    if (!(var0 !== var6)) {
                        _fun45676_ip = 40;
                        continue _fun45676
                    }
                case 32:
                    var1 = var2.currentCount;
                    _fun45676_ip = 53;
                    continue _fun45676;
                case 40:
                    var7 = var2.currentCount;
                    var3 = 1;
                    var1 = var7 + var3;
                case 53:
                    var3 = var2.inputValues;
                    var3[var4] = var5;
                    var4 = var2.currentAverage;
                    var3 = var2.currentCount;
                    var3 = var3 / var1;
                    var4 = var4 * var3;
                    var3 = null;
                    var7 = var3 != var6;
                    var3 = 0;
                    if (!var7) {
                        _fun45676_ip = 97;
                        continue _fun45676
                    }
                case 94:
                    var3 = var6;
                case 97:
                    var3 = var5 - var3;
                    var3 = var3 / var1;
                    var3 = var4 + var3;
                    var2.currentAverage = var3;
                    var2.currentCount = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getNextIndex';
        var0.key = var5;
        var4 = function() {
            var2 = this;
            var0 = var2.nextIndex;
            var3 = var2.nextIndex;
            var1 = 1;
            var3 = var3 + var1;
            var1 = var2.inputValues;
            var1 = var1.length;
            var1 = var3 % var1;
            var2.nextIndex = var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.averageWindows = var1;
            var1 = arg0;
            var2.windowSize = var1;
            var1 = arg1;
            var2.defaultValue = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addValue';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun45680: for (var _fun45680_ip = 0;;) switch (_fun45680_ip) {
                case 0:
                    var4 = arg1;
                    var1 = this;
                    var2 = var1.averageWindows;
                    var0 = var2.get;
                    var2 = var0.bind(var2)(var4);
                    if (var2) {
                        _fun45680_ip = 78;
                        continue _fun45680
                    }
                case 25:
                    var5 = _closure1_slot2;
                    var7 = var1.windowSize;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var3;
                    var0 = new var8[var5](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var3 = var1.averageWindows;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var4, var0);
                    var2 = var0;
                case 78:
                    var1 = var2.addValue;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'getCurrentValue';
        var0.key = var5;
        var5 = function arg0() {
            _fun45681: for (var _fun45681_ip = 0;;) switch (_fun45681_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.averageWindows;
                    var1 = var3.get;
                    var0 = arg0;
                    var3 = var1.bind(var3)(var0);
                    var0 = null;
                    var4 = var0 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun45681_ip = 39;
                        continue _fun45681
                    }
                case 33:
                    var1 = var3.currentValue;
                case 39:
                    if (!(var0 == var1)) {
                        _fun45681_ip = 49;
                        continue _fun45681
                    }
                case 43:
                    var1 = var2.defaultValue;
                case 49:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun45681_ip = 61;
                        continue _fun45681
                    }
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.averageWindows;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.AverageWindow = var3;
    var2.MultiTypeAverageWindow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114]);