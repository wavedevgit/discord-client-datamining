// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = var3.bind(var0)(var4);
    var3 = var3.I18nManager;
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        _fun51307: for (var _fun51307_ip = 0;;) switch (_fun51307_ip) {
            case 0:
                var1 = arg0;
                var0 = 'vertical';
                if (!(var0 !== var1)) {
                    _fun51307_ip = 125;
                    continue _fun51307
                }
            case 11:
                var0 = 'vertical-inverted';
                if (!(var0 !== var1)) {
                    _fun51307_ip = 117;
                    continue _fun51307
                }
            case 21:
                var0 = 'horizontal';
                if (!(var0 !== var1)) {
                    _fun51307_ip = 80;
                    continue _fun51307
                }
            case 29:
                var0 = 'horizontal-inverted';
                if (!(var0 !== var1)) {
                    _fun51307_ip = 43;
                    continue _fun51307
                }
            case 39:
                var0 = undefined;
                return var0;
            case 43:
                var1 = _closure1_slot0;
                var0 = var1.getConstants;
                var0 = var0.bind(var1)();
                var1 = var0.isRTL;
                var0 = -1;
                if (!var1) {
                    _fun51307_ip = 78;
                    continue _fun51307
                }
            case 75:
                var0 = 1;
            case 78:
                return var0;
            case 80:
                var1 = _closure1_slot0;
                var0 = var1.getConstants;
                var0 = var0.bind(var1)();
                var1 = var0.isRTL;
                var0 = 1;
                if (!var1) {
                    _fun51307_ip = 115;
                    continue _fun51307
                }
            case 109:
                var0 = -1;
            case 115:
                return var0;
            case 117:
                var0 = -1;
                return var0;
            case 125:
                var0 = 1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);