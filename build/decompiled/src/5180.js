// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun46284: for (var _fun46284_ip = 0;;) switch (_fun46284_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = var6.length;
                var3 = global;
                var0 = var3.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var13 = var5;
                var0 = new var14[var0](var13, var12);
                var1 = var0 instanceof Object ? var0 : var1;
                var2 = 0;
                var7 = var6[var2];
                var8 = 'object';
                var7 = typeof var7;
                var0 = false;
                if (!(var8 === var7)) {
                    _fun46284_ip = 63;
                    continue _fun46284
                }
            case 61:
                var0 = true;
            case 63:
                var7 = var2 < var5;
                var2 = 0;
                if (!var7) {
                    _fun46284_ip = 123;
                    continue _fun46284
                }
            case 72:
                if (var0) {
                    _fun46284_ip = 85;
                    continue _fun46284
                }
            case 75:
                var7 = var2 % var4;
                var7 = var6[var7];
                _fun46284_ip = 112;
                continue _fun46284;
            case 85:
                var11 = var3.Object;
                var10 = var11.assign;
                var8 = var2 % var4;
                var9 = var6[var8];
                var8 = {};
                var7 = var10.bind(var11)(var8, var9);
            case 112:
                var1[var2] = var7;
                var2 = var2 + 1;
                if (var2 < var5) {
                    _fun46284_ip = 72;
                    continue _fun46284
                }
            case 123:
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
        }
    };
    var1.useDataMultiplier = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);