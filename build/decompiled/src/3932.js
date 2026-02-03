// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContext;
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun35452: for (var _fun35452_ip = 0;;) switch (_fun35452_ip) {
            case 0:
                var2 = _closure1_slot2;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.PortalStateContext;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun35452_ip = 62;
                    continue _fun35452
                }
            case 46:
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun35452_ip = 60;
                    continue _fun35452
                }
            case 56:
                var0 = new Array(0);
            case 60:
                return var0;
            case 62:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.";
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.usePortalState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3929]);