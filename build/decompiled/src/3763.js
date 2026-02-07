// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var8 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var3 = function() {
        _fun33593: for (var _fun33593_ip = 0;;) switch (_fun33593_ip) {
            case 0:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 0;
                var0 = var0[var4];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isWeb;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun33593_ip = 57;
                    continue _fun33593
                }
            case 37:
                var0 = _closure1_slot0;
                var0 = var0._REANIMATED_IS_REDUCED_MOTION;
                var0 = !var0;
                var0 = !var0;
                _fun33593_ip = 127;
                continue _fun33593;
            case 57:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isWindowAvailable;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun33593_ip = 124;
                    continue _fun33593
                }
            case 93:
                var2 = global;
                var4 = var2.window;
                var3 = var4.matchMedia;
                var2 = '(prefers-reduced-motion: reduce)';
                var2 = var3.bind(var4)(var2);
                var1 = var2.matches;
            case 124:
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var1);
    var0 = undefined;
    var7 = var3.bind(var0)();
    var1 = {};
    var1.jsValue = var7;
    var5 = 1;
    var5 = var8[var5];
    var6 = var6.bind(var0)(var5);
    var5 = var6.makeMutable;
    var5 = var5.bind(var6)(var7);
    var1.uiValue = var5;
    var5 = function arg0() {
        var1 = arg0;
        var2 = _closure1_slot3;
        var2.jsValue = var1;
        var0 = _closure1_slot3;
        var0 = var0.uiValue;
        var0.value = var1;
        var0 = undefined;
        return var0;
    };
    var1.setEnabled = var5;
    var _closure1_slot3 = var1;
    var2.isReducedMotionEnabledInSystem = var3;
    var2.ReducedMotionManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3725, 3759]);