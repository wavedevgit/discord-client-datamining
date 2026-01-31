// lib/LifecycleManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: LifecycleManager, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.isInitialized = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun37055: for (var _fun37055_ip = 0;;) switch (_fun37055_ip) {
                case 0:
                    var2 = this;
                    var7 = 0;
                    var3 = copyRestArgs(var7);
                    var0 = var2.isInitialized;
                    if (var0) {
                        _fun37055_ip = 61;
                        continue _fun37055
                    }
                case 18:
                    var0 = true;
                    var2.isInitialized = var0;
                    var1 = var2._initialize;
                    var0 = new Array(0);
                    var7 = var0;
                    var6 = var3;
                    var5 = 0;
                    var3 = arraySpread(var7, var6, var5);
                    var7 = var1;
                    var6 = var0;
                    var5 = var2;
                    var0 = apply(var7, var6, var5);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun37056: for (var _fun37056_ip = 0;;) switch (_fun37056_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun37056_ip = 30;
                        continue _fun37056
                    }
                case 12:
                    var0 = false;
                    var1.isInitialized = var0;
                    var0 = var1._terminate;
                    var0 = var0.bind(var1)();
                case 30:
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
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/LifecycleManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);