// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: keyMirror, environment: var0
        _fun61611: for (var _fun61611_ip = 0;;) switch (_fun61611_ip) {
            case 0:
                var7 = arg0;
                var1 = {};
                var0 = global;
                var2 = var0.Object;
                var2 = var7 instanceof var2;
                if (!var2) {
                    _fun61611_ip = 84;
                    continue _fun61611
                }
            case 20:
                var3 = var0.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var7);
                if (var2) {
                    _fun61611_ip = 84;
                    continue _fun61611
                }
            case 39:
                var5 = var7;
                for (var2 in var5)
                    case 50: {
                        case 59: var8 = var2;
                        var9 = var7.hasOwnProperty;
                        var9 = var9.bind(var7)(var8);
                        if (!var9) {
                            _fun61611_ip = 50;
                            continue _fun61611
                        }
                        case 76: var1[var8] = var8;
                        _fun61611_ip = 50;
                        continue _fun61611;
                    }
            case 82:
                return var1;
            case 84:
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'keyMirror(...): Argument must be an object.';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);