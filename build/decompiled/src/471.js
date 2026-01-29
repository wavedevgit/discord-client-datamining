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
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.useRef;
    var _closure1_slot2 = var3;
    var1 = function(arg0, arg1) { // Original name: useAnimatedValue, environment: var1
        _fun6150: for (var _fun6150_ip = 0;;) switch (_fun6150_ip) {
            case 0:
                var0 = _closure1_slot2;
                var3 = undefined;
                var4 = null;
                var0 = var0.bind(var3)(var4);
                var2 = var0.current;
                if (!(var4 == var2)) {
                    _fun6150_ip = 83;
                    continue _fun6150
                }
            case 25:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var4 = var1.Value;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = arg0;
                var5 = arg1;
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                var0.current = var1;
            case 83:
                var0 = var0.current;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 391]);