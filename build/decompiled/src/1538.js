// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function(arg0) { // Original name: useCurrentRender, environment: var1
        _fun17451: for (var _fun17451_ip = 0;;) switch (_fun17451_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var6 = var0.navigation;
                var3 = var0.descriptors;
                var5 = _closure1_slot2;
                var4 = var5.useContext;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var2 = var4.bind(var5)(var2);
                var4 = var2;
                if (!var4) {
                    _fun17451_ip = 76;
                    continue _fun17451
                }
            case 66:
                var5 = var6.isFocused;
                var4 = var5.bind(var6)();
            case 76:
                if (!var4) {
                    _fun17451_ip = 114;
                    continue _fun17451
                }
            case 79:
                var4 = var1.routes;
                var1 = var1.index;
                var1 = var4[var1];
                var1 = var1.key;
                var1 = var3[var1];
                var1 = var1.options;
                var2.options = var1;
            case 114:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1501]);