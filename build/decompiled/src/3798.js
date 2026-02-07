// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33927: for (var _fun33927_ip = 0;;) switch (_fun33927_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var3 = dependencyMap;
            var0 = 0;
            var4 = var3[var0];
            var3 = require;
            var0 = undefined;
            var4 = var3.bind(var0)(var4);
            var3 = var4.isWeb;
            var4 = var3.bind(var4)();
            var3 = 1;
            if (!var4) {
                _fun33927_ip = 82;
                continue _fun33927
            }
        case 72:
            var3 = 0.05;
        case 82:
            var4 = {};
            var5 = 'function isValidRubberBandConfig_Pnpm_utilsTs1(config){return!!config.rubberBandEffect&&Array.isArray(config.clamp)&&config.clamp.length===2;}';
            var4.code = var5;
            var _closure1_slot0 = var4;
            var1 = function() { // Environment: var1
                var0 = function arg0() {
                    _fun33929: for (var _fun33929_ip = 0;;) switch (_fun33929_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.rubberBandEffect;
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun33929_ip = 42;
                                continue _fun33929
                            }
                        case 18:
                            var2 = global;
                            var4 = var2.Array;
                            var3 = var4.isArray;
                            var2 = var1.clamp;
                            var0 = var3.bind(var4)(var2);
                        case 42:
                            if (!var0) {
                                _fun33929_ip = 63;
                                continue _fun33929
                            }
                        case 45:
                            var1 = var1.clamp;
                            var2 = var1.length;
                            var1 = 2;
                            var0 = var1 === var2;
                        case 63:
                            return var0;
                    }
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 5674674993606.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot0;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var2.VELOCITY_EPS = var3;
            var3 = 0.1;
            var2.SLOPE_FACTOR = var3;
            var2.isValidRubberBandConfig = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3725]);