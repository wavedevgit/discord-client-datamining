// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
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
    var0 = function(arg0) { // Original name: processColor, environment: var0
        _fun1268: for (var _fun1268_ip = 0;;) switch (_fun1268_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun1268_ip = 137;
                    continue _fun1268
                }
            case 12:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 0;
                var5 = var3[var4];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.default;
                var6 = var5.bind(var6)(var0);
                if (!(var2 == var6)) {
                    _fun1268_ip = 52;
                    continue _fun1268
                }
            case 50:
                return var3;
            case 52:
                var5 = typeof var6;
                var7 = 'object';
                if (!(var7 === var5)) {
                    _fun1268_ip = 98;
                    continue _fun1268
                }
            case 63:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.processColorObject;
                var1 = var1.bind(var3)(var6);
                if (!(var2 == var1)) {
                    _fun1268_ip = 135;
                    continue _fun1268
                }
            case 98:
                var3 = 'number';
                var2 = null;
                if (!(var3 === var5)) {
                    _fun1268_ip = 133;
                    continue _fun1268
                }
            case 108:
                var3 = 24;
                var5 = var6 << var3;
                var3 = 8;
                var3 = var6 >>> var3;
                var3 = var5 | var3;
                var3 = var3 >>> var4;
                var2 = var3 | 0;
            case 133:
                return var2;
            case 135:
                return var1;
            case 137:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [39, 40]);