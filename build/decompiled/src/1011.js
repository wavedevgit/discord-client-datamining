// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun10351: for (var _fun10351_ip = 0;;) switch (_fun10351_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var3 = var2.bind(var5)(var0);
                var2 = var3.normalize;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 !== var4)) {
                    _fun10351_ip = 95;
                    continue _fun10351
                }
            case 45:
                var2 = 'object';
                var0 = typeof var4;
                if (!(var2 === var0)) {
                    _fun10351_ip = 95;
                    continue _fun10351
                }
            case 56:
                var0 = global;
                var3 = var0.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun10351_ip = 95;
                    continue _fun10351
                }
            case 77:
                var3 = var4.constructor;
                var2 = var0.Object;
                var0 = var4;
                if (!(var3 !== var2)) {
                    _fun10351_ip = 112;
                    continue _fun10351
                }
            case 95:
                var3 = _closure1_slot2;
                var2 = {};
                var1 = 'value';
                var0 = var3.bind(var5)(var2, var1, var4);
            case 112:
                return var0;
        }
    };
    var2.convertToNormalizedObject = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 817]);