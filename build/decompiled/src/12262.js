// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: inc, environment: var0
        _fun94034: for (var _fun94034_ip = 0;;) switch (_fun94034_ip) {
            case 0:
                var5 = arg2;
                var4 = arg0;
                var2 = arg1;
                var3 = var5;
                var1 = arg3;
                var0 = arg4;
                var6 = 'string';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun94034_ip = 37;
                    continue _fun94034
                }
            case 29:
                var0 = var1;
                var1 = var3;
                var3 = undefined;
            case 37: // try_start_0
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 0;
                var6 = var10[var5];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var4;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var7 instanceof var5;
                if (var5) {
                    _fun94034_ip = 85;
                    continue _fun94034
                }
            case 80:
                var5 = var4;
                _fun94034_ip = 91;
                continue _fun94034;
            case 85:
                var5 = var4.version;
            case 91:
                var12 = var3;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var4;
                var13 = var5;
                var3 = new var14[var6](var13, var12, var11);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.inc;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = var0.version;
            case 136: // try_end0
                return var0;
            case 138: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12254]);