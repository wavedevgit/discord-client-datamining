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
    var4 = var3.bind(var0)(var4);
    var3 = var4.createContext;
    var4 = var4.useContext;
    var _closure1_slot0 = var4;
    var3 = var3.bind(var0)(var0);
    var _closure1_slot1 = var3;
    var2.ToolbarContext = var3;
    var1 = function() {
        _fun68636: for (var _fun68636_ip = 0;;) switch (_fun68636_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                if (var0) {
                    _fun68636_ip = 57;
                    continue _fun68636
                }
            case 21:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'KeyboardToolbar.* component must be used inside <KeyboardToolbar>';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 57:
                return var0;
        }
    };
    var2.useToolbarContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);