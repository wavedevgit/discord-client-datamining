// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // Original name: invariant, environment: var0
        _fun1299: for (var _fun1299_ip = 0;;) switch (_fun1299_ip) {
            case 0:
                var5 = arg1;
                var0 = undefined;
                var2 = arg0;
                if (var2) {
                    _fun1299_ip = 196;
                    continue _fun1299
                }
            case 16:
                if (!(var0 !== var5)) {
                    _fun1299_ip = 151;
                    continue _fun1299
                }
            case 23:
                var2 = new Array(6);
                var3 = arg2;
                var2[0] = var3;
                var3 = arg3;
                var2[1] = var3;
                var3 = arg4;
                var2[2] = var3;
                var3 = arg5;
                var2[3] = var3;
                var3 = arg6;
                var2[4] = var3;
                var3 = arg7;
                var2[5] = var3;
                var _closure2_slot0 = var2;
                var2 = 0;
                var _closure2_slot1 = var2;
                var2 = global;
                var3 = var2.Error;
                var4 = var5.replace;
                var2 = /%s/g;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = parseFloat(var0);
                    var2 = var0 + 1;
                    _closure2_slot1 = var2;
                    var0 = var1[var0];
                    return var0;
                };
                var7 = var4.bind(var5)(var2, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = 'Invariant Violation';
                var1.name = var2;
                _fun1299_ip = 185;
                continue _fun1299;
            case 151:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = 'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.';
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
            case 185:
                var2 = 1;
                var1.framesToPop = var2;
                throw var1;
            case 196:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);