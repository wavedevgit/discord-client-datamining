// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun51506: for (var _fun51506_ip = 0;;) switch (_fun51506_ip) {
            case 0:
                var5 = arg0;
                var1 = !var5;
                if (var1) {
                    _fun51506_ip = 20;
                    continue _fun51506
                }
            case 9:
                var2 = 'string';
                var0 = typeof var5;
                var1 = var2 === var0;
            case 20:
                var0 = !var1;
                if (var1) {
                    _fun51506_ip = 159;
                    continue _fun51506
                }
            case 29:
                var4 = global;
                var1 = var4.Array;
                var1 = var5 instanceof var1;
                if (var1) {
                    _fun51506_ip = 60;
                    continue _fun51506
                }
            case 44:
                var3 = var4.Array;
                var2 = var3.isArray;
                var1 = var2.bind(var3)(var5);
            case 60:
                if (var1) {
                    _fun51506_ip = 156;
                    continue _fun51506
                }
            case 63:
                var3 = var5.length;
                var2 = 0;
                var2 = var3 >= var2;
                if (!var2) {
                    _fun51506_ip = 153;
                    continue _fun51506
                }
            case 77:
                var6 = var5.splice;
                var3 = var4.Function;
                var3 = var6 instanceof var3;
                if (var3) {
                    _fun51506_ip = 150;
                    continue _fun51506
                }
            case 96:
                var7 = var4.Object;
                var6 = var7.getOwnPropertyDescriptor;
                var8 = var5.length;
                var4 = 1;
                var4 = var8 - var4;
                var4 = var6.bind(var7)(var5, var4);
                if (!var4) {
                    _fun51506_ip = 147;
                    continue _fun51506
                }
            case 129:
                var5 = var5.constructor;
                var6 = var5.name;
                var5 = 'String';
                var4 = var5 !== var6;
            case 147:
                var3 = var4;
            case 150:
                var2 = var3;
            case 153:
                var1 = var2;
            case 156:
                var0 = var1;
            case 159:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);