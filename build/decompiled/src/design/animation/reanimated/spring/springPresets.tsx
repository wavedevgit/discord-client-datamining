// design/animation/reanimated/spring/springPresets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'design/animation/reanimated/spring/springPresets.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = {
        'mass': 1,
        'damping': 27,
        'stiffness': 300
    };
    var2.SUBTLE_SPRING = var1;
    var1 = {
        'mass': 1,
        'overshootClamping': true,
        'damping': 27,
        'stiffness': 300
    };
    var2.ON_PRESS_SPRING = var1;
    var1 = {
        'mass': 1,
        'damping': 30,
        'stiffness': 380
    };
    var2.springSlow = var1;
    var1 = {
        'mass': 0.35,
        'damping': 13,
        'stiffness': 250
    };
    var2.springUnclamped = var1;
    var1 = {
        'mass': 0.3,
        'damping': 13,
        'stiffness': 250
    };
    var2.springUnclampedBounce = var1;
    var1 = {
        'mass': 0.35,
        'damping': 13,
        'stiffness': 250,
        'overshootClamping': true
    };
    var2.springStandard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);