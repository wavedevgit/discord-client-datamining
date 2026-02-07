// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun35233: for (var _fun35233_ip = 0;;) switch (_fun35233_ip) {
        case 0:
            var1 = exports;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var4 = function arg0() {
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.logger;
                    var1 = var2.warn;
                    var0 = 'RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.';
                    var0 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    return var0;
                };
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 0;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.logger;
                var2.logger = var4;
                var2.defaultReturnValue = var3;
                var0.__closure = var2;
                var2 = 6450550757460.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot2;
                var0.__initData = var1;
                return var0;
            };
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var1, var0, var3);
            var0 = {};
            var3 = "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}";
            var0.code = var3;
            var _closure1_slot2 = var0;
            var0 = arg0;
            var0 = var0.RNScreensTurboModule;
            if (var0) {
                _fun35233_ip = 135;
                continue _fun35233
            }
        case 84:
            var2 = {};
            var3 = undefined;
            var5 = {
                'topScreenId': 4294967295,
                'belowTopScreenId': 4294967295,
                'canStartTransition': false
            };
            var5 = var4.bind(var3)(var5);
            var2.startTransition = var5;
            var5 = var4.bind(var3)();
            var2.updateTransition = var5;
            var3 = var4.bind(var3)();
            var2.finishTransition = var3;
            var0 = var2;
        case 135:
            var1.RNScreensTurboModule = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3726]);