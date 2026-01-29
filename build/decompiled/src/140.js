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
    var0 = function(arg0, arg1) { // Original name: getElementSibling, environment: var0
        _fun2286: for (var _fun2286_ip = 0;;) switch (_fun2286_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.parentNode;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun2286_ip = 220;
                    continue _fun2286
                }
            case 18:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.getChildNodes;
                var2 = var1.bind(var2)(var5);
                var1 = var2.indexOf;
                var1 = var1.bind(var2)(var3);
                var5 = -1;
                if (!(var5 !== var1)) {
                    _fun2286_ip = 218;
                    continue _fun2286
                }
            case 77:
                var7 = 'next';
                var3 = arg1;
                if (!(var7 === var3)) {
                    _fun2286_ip = 91;
                    continue _fun2286
                }
            case 88:
                var5 = 1;
            case 91:
                var7 = var1 + var5;
                var1 = _closure1_slot2;
                if (!(var0 == var1)) {
                    _fun2286_ip = 132;
                    continue _fun2286
                }
            case 103:
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var1 = var8[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.default;
                var _closure1_slot2 = var1;
            case 132:
                var3 = var2[var7];
                var1 = var7;
                if (!(var0 != var3)) {
                    _fun2286_ip = 200;
                    continue _fun2286
                }
            case 143:
                var4 = var2[var7];
                var3 = _closure1_slot2;
                var3 = var4 instanceof var3;
                var4 = var7;
                var1 = var4;
                if (var3) {
                    _fun2286_ip = 200;
                    continue _fun2286
                }
            case 164:
                var7 = var4 + var5;
                var3 = var2[var7];
                var1 = var7;
                if (!(var0 != var3)) {
                    _fun2286_ip = 200;
                    continue _fun2286
                }
            case 179:
                var8 = var2[var7];
                var3 = _closure1_slot2;
                var3 = var8 instanceof var3;
                var4 = var7;
                var1 = var4;
                if (!var3) {
                    _fun2286_ip = 164;
                    continue _fun2286
                }
            case 200:
                var2 = var2[var1];
                var3 = var0 != var2;
                var1 = null;
                if (!var3) {
                    _fun2286_ip = 216;
                    continue _fun2286
                }
            case 213:
                var1 = var2;
            case 216:
                return var1;
            case 218:
                return var0;
            case 220:
                return var0;
        }
    };
    var1.getElementSibling = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [134, 139]);