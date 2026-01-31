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
    var0 = function(arg0, arg1) { // Original name: getDistanceForDirection, environment: var0
        _fun51199: for (var _fun51199_ip = 0;;) switch (_fun51199_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)(var4);
                var3 = 'vertical';
                if (!(var3 !== var4)) {
                    _fun51199_ip = 84;
                    continue _fun51199
                }
            case 43:
                var3 = 'vertical-inverted';
                if (!(var3 !== var4)) {
                    _fun51199_ip = 84;
                    continue _fun51199
                }
            case 53:
                var3 = 'horizontal';
                if (!(var3 !== var4)) {
                    _fun51199_ip = 73;
                    continue _fun51199
                }
            case 61:
                var3 = 'horizontal-inverted';
                if (!(var3 !== var4)) {
                    _fun51199_ip = 73;
                    continue _fun51199
                }
            case 71:
                return var2;
            case 73:
                var2 = var0.width;
                var2 = var2 * var1;
                return var2;
            case 84:
                var0 = var0.height;
                var0 = var0 * var1;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5788]);