// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function arg0, arg1() {
        _fun45651: for (var _fun45651_ip = 0;;) switch (_fun45651_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun45651_ip = 165;
                    continue _fun45651
                }
            case 15:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var0 = var0[var4];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)(var6, var5);
                var1 = global;
                var2 = var1.Object;
                var2 = var2.getOwnPropertySymbols;
                if (!var2) {
                    _fun45651_ip = 163;
                    continue _fun45651
                }
            case 62:
                var2 = var1.Object;
                var1 = var2.getOwnPropertySymbols;
                var3 = var1.bind(var2)(var6);
                var1 = var3.length;
                var1 = var4 < var1;
                var2 = -1;
                var4 = 0;
                if (!var1) {
                    _fun45651_ip = 163;
                    continue _fun45651
                }
            case 99:
                var7 = var3[var4];
                var1 = var5.indexOf;
                var1 = var1.bind(var5)(var7);
                var1 = var2 === var1;
                if (!var1) {
                    _fun45651_ip = 140;
                    continue _fun45651
                }
            case 121:
                var8 = {};
                var9 = var8.propertyIsEnumerable;
                var8 = var9.call;
                var1 = var8.bind(var9)(var6, var7);
            case 140:
                if (!var1) {
                    _fun45651_ip = 151;
                    continue _fun45651
                }
            case 143:
                var1 = var6[var7];
                var0[var7] = var1;
            case 151:
                var4 = var4 + 1;
                var1 = var3.length;
                if (var4 < var1) {
                    _fun45651_ip = 99;
                    continue _fun45651
                }
            case 163:
                return var0;
            case 165:
                var0 = {};
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5101]);