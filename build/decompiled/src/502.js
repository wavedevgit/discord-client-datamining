// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6435: for (var _fun6435_ip = 0;;) switch (_fun6435_ip) {
        case 0:
            var1 = exports;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var1, var0, var2);
            var0 = {};
            var2 = var3.crypto;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if (!var2) {
                _fun6435_ip = 69;
                continue _fun6435
            }
        case 57:
            var4 = var3.crypto;
            var2 = var4.randomUUID;
        case 69:
            if (!var2) {
                _fun6435_ip = 100;
                continue _fun6435
            }
        case 72:
            var4 = var3.crypto;
            var5 = var4.randomUUID;
            var4 = var5.bind;
            var3 = var3.crypto;
            var2 = var4.bind(var5)(var3);
        case 100:
            var0.randomUUID = var2;
            var1.default = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);