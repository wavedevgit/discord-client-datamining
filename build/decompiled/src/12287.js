// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun94137: for (var _fun94137_ip = 0;;) switch (_fun94137_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = arg2;
            case 9: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var7 = var1;
                var6 = var2;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var3;
                var2 = new var8[var5](var7, var6, var5);
                var1 = var2 instanceof Object ? var2 : var3;
            case 59: // try_end0
                var2 = var1;
                var1 = var2.test;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12285]);