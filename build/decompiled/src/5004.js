// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44974: for (var _fun44974_ip = 0;;) switch (_fun44974_ip) {
        case 0:
            var2 = exports;
            var5 = global;
            var4 = var5.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var1 = dependencyMap;
            var0 = 0;
            var3 = var1[var0];
            var1 = metroImportDefault;
            var0 = undefined;
            var3 = var1.bind(var0)(var3);
            var1 = var5.window;
            var6 = 'undefined';
            var1 = typeof var1;
            var4 = var6 === var1;
            if (var4) {
                _fun44974_ip = 89;
                continue _fun44974
            }
        case 73:
            var1 = var5.window;
            var1 = var1.document;
            var4 = var0 === var1;
        case 89:
            if (var4) {
                _fun44974_ip = 114;
                continue _fun44974
            }
        case 92:
            var1 = var5.window;
            var1 = var1.document;
            var1 = var1.createElement;
            var4 = var0 === var1;
        case 114:
            var1 = var5.navigator;
            var1 = typeof var1;
            var1 = var6 !== var1;
            if (!var1) {
                _fun44974_ip = 150;
                continue _fun44974
            }
        case 130:
            var5 = var5.navigator;
            var6 = var5.product;
            var5 = 'ReactNative';
            var1 = var5 === var6;
        case 150:
            if (!var4) {
                _fun44974_ip = 163;
                continue _fun44974
            }
        case 153:
            if (var1) {
                _fun44974_ip = 163;
                continue _fun44974
            }
        case 156:
            var1 = var3.useEffect;
            _fun44974_ip = 169;
            continue _fun44974;
        case 163:
            var1 = var3.useLayoutEffect;
        case 169:
            var2.useIsomorphicLayoutEffect = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);