// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = ['ref', 'styleAttr', 'indeterminate', 'animating'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function arg0() {
        _fun1263: for (var _fun1263_ip = 0;;) switch (_fun1263_ip) {
            case 0:
                var5 = arg0;
                var8 = var5.ref;
                var0 = var5.styleAttr;
                var10 = 'Normal';
                var3 = undefined;
                if (!(var3 !== var0)) {
                    _fun1263_ip = 29;
                    continue _fun1263
                }
            case 26:
                var10 = var0;
            case 29:
                var0 = var5.indeterminate;
                var9 = var3 === var0;
                if (var9) {
                    _fun1263_ip = 45;
                    continue _fun1263
                }
            case 42:
                var9 = var0;
            case 45:
                var1 = var5.animating;
                var0 = var3 === var1;
                if (var0) {
                    _fun1263_ip = 61;
                    continue _fun1263
                }
            case 58:
                var0 = var1;
            case 61:
                var4 = _closure1_slot3;
                var2 = _closure1_slot2;
                var7 = var4.bind(var3)(var5, var2);
                var2 = _closure1_slot4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.styleAttr = var10;
                var4.indeterminate = var9;
                var4.animating = var0;
                var0 = {};
                var0.ref = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 33, 31, 36]);