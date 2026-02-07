// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useCallback;
    var _closure1_slot2 = var4;
    var4 = var3.useEffect;
    var _closure1_slot3 = var4;
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var0 = global;
            var0 = var0.Set;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot0 = var5;
        var6 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var5;
        var0 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var1 = _closure2_slot0;
                var2 = var1.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = var2.clearTimeout;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = var6.bind(var4)(var0, var3);
        var0 = {};
        var3 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0, arg1) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = var4.setTimeout;
            var2 = function() { // Environment: var0
                var3 = _closure2_slot0;
                var2 = var3.delete;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = arg1;
            var2 = var3.bind(var4)(var2, var1);
            var _closure3_slot1 = var2;
            var1 = _closure2_slot0;
            var0 = var1.add;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.setTimeout = var1;
        return var0;
    };
    var2.useUnmountAwareTimeout = var3;
    var1 = function() {
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var0 = global;
            var0 = var0.Set;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot0 = var5;
        var6 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var5;
        var0 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var1 = _closure2_slot0;
                var2 = var1.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.cancelAnimationFrame;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = var6.bind(var4)(var0, var3);
        var0 = {};
        var3 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = var3.requestAnimationFrame;
            var1 = function(arg0) { // Environment: var0
                var3 = _closure2_slot0;
                var2 = var3.delete;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var _closure3_slot1 = var2;
            var1 = _closure2_slot0;
            var0 = var1.add;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.requestAnimationFrame = var1;
        return var0;
    };
    var2.useUnmountAwareAnimationFrame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 31]);