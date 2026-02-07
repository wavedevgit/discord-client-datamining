// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot3 = var4;
    var4 = var3.useMemo;
    var _closure1_slot4 = var4;
    var3 = var3.useState;
    var _closure1_slot5 = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var9 = _closure1_slot5;
        var5 = undefined;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.RecyclerViewManager;
            var3 = _closure2_slot0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var1 = var9.bind(var5)(var1);
        var8 = _closure1_slot2;
        var7 = 1;
        var1 = var8.bind(var5)(var1, var7);
        var4 = 0;
        var2 = var1[var4];
        var _closure2_slot1 = var2;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.VelocityTracker;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var1 = var9.bind(var5)(var1);
        var1 = var8.bind(var5)(var1, var7);
        var1 = var1[var4];
        var _closure2_slot2 = var1;
        var4 = var6.data;
        var7 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var1 = var2.updateProps;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var6 = var7.bind(var5)(var6, var8);
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = var1.processDataUpdate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4 = var7.bind(var5)(var4, var6);
        var4 = _closure1_slot3;
        var3 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = var1.restoreIfNeeded;
            var0 = var0.bind(var1)();
            var0 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var1 = var2.dispose;
                var1 = var1.bind(var2)();
                var1 = _closure2_slot2;
                var0 = var1.cleanUp;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var4.bind(var5)(var3, var0);
        var0 = {};
        var0.recyclerViewManager = var2;
        var0.velocityTracker = var1;
        return var0;
    };
    var2.useRecyclerViewManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 31, 5123, 5147]);