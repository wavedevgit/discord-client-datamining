// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() {
        _fun10197: for (var _fun10197_ip = 0;;) switch (_fun10197_ip) {
            case 0:
                var0 = _closure1_slot2;
                var3 = undefined;
                if (!(var3 === var0)) {
                    _fun10197_ip = 98;
                    continue _fun10197
                }
            case 13:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getConstants;
                var0 = var0.bind(var2)();
                var2 = var0.scriptURL;
                var3 = var2.match;
                var0 = /^https?:\\/\\ / .* ? \\ //;
                    var3 = var3.bind(var2)(var0);
                var4 = null;
                if (!var3) {
                    _fun10197_ip = 82;
                    continue _fun10197
                }
            case 78:
                var4 = var3[var5];
            case 82:
                var _closure1_slot2 = var4;
                var0 = null;
                if (!var3) {
                    _fun10197_ip = 94;
                    continue _fun10197
                }
            case 91:
                var0 = var2;
            case 94:
                var _closure1_slot3 = var0;
            case 98:
                var0 = {};
                var3 = _closure1_slot2;
                var2 = null;
                var4 = var2 != var3;
                var3 = 'http://localhost:8081/';
                if (!var4) {
                    _fun10197_ip = 123;
                    continue _fun10197
                }
            case 119:
                var3 = _closure1_slot2;
            case 123:
                var0.url = var3;
                var3 = _closure1_slot3;
                var0.fullBundleUrl = var3;
                var1 = _closure1_slot2;
                var1 = var2 !== var1;
                var0.bundleLoadedFromServer = var1;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [91]);