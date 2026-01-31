// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48110: for (var _fun48110_ip = 0;;) switch (_fun48110_ip) {
        case 0:
            var2 = exports;
            var4 = global;
            var5 = var4.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = undefined;
            var2.constants = var0;
            var3 = dependencyMap;
            var1 = 0;
            var3 = var3[var1];
            var1 = require;
            var3 = var1.bind(var0)(var3);
            var1 = {
                'SLIDER_DEFAULT_INITIAL_VALUE': 0,
                'MARGIN_HORIZONTAL_PADDING': 0.05,
                'STEP_NUMBER_TEXT_FONT_SMALL': 8,
                'STEP_NUMBER_TEXT_FONT_BIG': 12
            };
            var5 = var4.Number;
            var5 = var5.MIN_SAFE_INTEGER;
            var1.LIMIT_MIN_VALUE = var5;
            var4 = var4.Number;
            var4 = var4.MAX_SAFE_INTEGER;
            var1.LIMIT_MAX_VALUE = var4;
            var3 = var3.Platform;
            var5 = var3.OS;
            var3 = 1000;
            var4 = 'android';
            if (!(var4 === var5)) {
                _fun48110_ip = 137;
                continue _fun48110
            }
        case 134:
            var3 = 128;
        case 137:
            var1.DEFAULT_STEP_RESOLUTION = var3;
            var2.constants = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);