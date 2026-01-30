// modules/checkpoint/useCheckpointSlidesToRender.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var3 = var3.CHECKPOINT_STEPS_TO_SLIDE;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/useCheckpointSlidesToRender.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCheckpointSlidesToRender, environment: var1
        _fun87030: for (var _fun87030_ip = 0;;) switch (_fun87030_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun87030_ip = 95;
                    continue _fun87030
                }
            case 16:
                var3 = var4.length;
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun87030_ip = 95;
                    continue _fun87030
                }
            case 28:
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var3;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure2_slot0 = var1;
                var3 = var4.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.add;
                    var3 = _closure1_slot0;
                    var0 = arg0;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                var0 = new Array(0);
                var7 = var0;
                var6 = var1;
                var5 = 0;
                var1 = arraySpread(var7, var6, var5);
                return var0;
            case 95:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9123, 2]);