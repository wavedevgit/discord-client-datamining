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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2.lastUpdateTime = var1;
            var1 = {
                'x': 0,
                'y': 0
            };
            var2.velocity = var1;
            var1 = null;
            var2.timeoutId = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'computeVelocity';
        var0.key = var1;
        var1 = function arg0, arg1, arg2, arg3() {
            _fun45943: for (var _fun45943_ip = 0;;) switch (_fun45943_ip) {
                case 0:
                    var7 = arg2;
                    var6 = arg3;
                    var2 = this;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var2;
                    var0 = var2.cleanUp;
                    var0 = var0.bind(var2)();
                    var3 = global;
                    var4 = var3.Date;
                    var0 = var4.now;
                    var0 = var0.bind(var4)();
                    var5 = arg0;
                    var4 = arg1;
                    var5 = var5 - var4;
                    var10 = var3.Math;
                    var9 = var10.max;
                    var4 = var2.lastUpdateTime;
                    var8 = var0 - var4;
                    var4 = 1;
                    var4 = var9.bind(var10)(var4, var8);
                    var5 = var5 / var4;
                    var2.lastUpdateTime = var0;
                    var8 = var2.velocity;
                    var0 = 0;
                    if (!var7) {
                        _fun45943_ip = 110;
                        continue _fun45943
                    }
                case 107:
                    var0 = var5;
                case 110:
                    var8.x = var0;
                    var0 = var2.velocity;
                    var4 = 0;
                    if (var7) {
                        _fun45943_ip = 130;
                        continue _fun45943
                    }
                case 127:
                    var4 = var5;
                case 130:
                    var0.y = var4;
                    var5 = var2.velocity;
                    var0 = undefined;
                    var4 = false;
                    var4 = var6.bind(var0)(var5, var4);
                    var4 = var3.setTimeout;
                    var3 = function() { // Environment: var1
                        var0 = _closure3_slot1;
                        var2 = var0.cleanUp;
                        var2 = var2.bind(var0)();
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var2 = var2.bind(var3)();
                        var0.lastUpdateTime = var2;
                        var2 = var0.velocity;
                        var3 = 0;
                        var2.x = var3;
                        var2 = var0.velocity;
                        var2.y = var3;
                        var3 = _closure3_slot0;
                        var2 = var0.velocity;
                        var0 = undefined;
                        var1 = true;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = 100;
                    var1 = var4.bind(var0)(var3, var1);
                    var2.timeoutId = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'cleanUp';
        var0.key = var5;
        var4 = function() {
            _fun45945: for (var _fun45945_ip = 0;;) switch (_fun45945_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.timeoutId;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun45945_ip = 42;
                        continue _fun45945
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.timeoutId;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.timeoutId = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.VelocityTracker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114]);