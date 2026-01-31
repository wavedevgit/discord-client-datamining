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
    var1 = function() {
        _fun17476: for (var _fun17476_ip = 0;;) switch (_fun17476_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.useContext;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var2.bind(var3)(var0);
                if (!(var1 !== var0)) {
                    _fun17476_ip = 46;
                    continue _fun17476
                }
            case 44:
                return var0;
            case 46:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = "Couldn't find a route object. Is your component inside a screen in a navigator?";
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1496]);