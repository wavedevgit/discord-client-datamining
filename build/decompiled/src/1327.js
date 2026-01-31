// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.lowerCamelCase = var0;
    var1 = function arg0() {
        _fun14914: for (var _fun14914_ip = 0;;) switch (_fun14914_ip) {
            case 0:
                var8 = arg0;
                var2 = new Array(0);
                var0 = var8.length;
                var7 = 0;
                var0 = var7 < var0;
                var4 = '_';
                var3 = false;
                var1 = 0;
                if (!var0) {
                    _fun14914_ip = 183;
                    continue _fun14914
                }
            case 32:
                var0 = var8.charAt;
                var11 = var0.bind(var8)(var1);
                var10 = var4 == var11;
                var0 = var1;
                var9 = true;
                if (var10) {
                    _fun14914_ip = 165;
                    continue _fun14914
                }
            case 55:
                var12 = /\d/;
                var10 = var12.test;
                var10 = var10.bind(var12)(var11);
                if (var10) {
                    _fun14914_ip = 153;
                    continue _fun14914
                }
            case 82:
                if (var3) {
                    _fun14914_ip = 129;
                    continue _fun14914
                }
            case 85:
                if (!(var7 != var0)) {
                    _fun14914_ip = 104;
                    continue _fun14914
                }
            case 89:
                var10 = var2.push;
                var10 = var10.bind(var2)(var11);
                var9 = var3;
                _fun14914_ip = 165;
                continue _fun14914;
            case 104:
                var12 = var2.push;
                var10 = var11.toLowerCase;
                var10 = var10.bind(var11)();
                var10 = var12.bind(var2)(var10);
                var9 = var3;
                _fun14914_ip = 165;
                continue _fun14914;
            case 129:
                var12 = var2.push;
                var10 = var11.toUpperCase;
                var10 = var10.bind(var11)();
                var10 = var12.bind(var2)(var10);
                var9 = false;
                _fun14914_ip = 165;
                continue _fun14914;
            case 153:
                var10 = var2.push;
                var10 = var10.bind(var2)(var11);
                var9 = true;
            case 165:
                var1 = var0 + 1;
                var0 = var8.length;
                var3 = var9;
                if (var1 < var0) {
                    _fun14914_ip = 32;
                    continue _fun14914
                }
            case 183:
                var1 = var2.join;
                var0 = '';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.lowerCamelCase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);