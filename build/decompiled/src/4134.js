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
    var0 = {
        'BIG_ENDIAN': 19789,
        'LITTLE_ENDIAN': 18761
    };
    var2 = function(arg0, arg1) { // Original name: getByteOrder, environment: var2
        _fun37914: for (var _fun37914_ip = 0;;) switch (_fun37914_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var3.getUint16;
                var1 = var0.bind(var3)(var2);
                var0 = 18761;
                if (!(var1 !== var0)) {
                    _fun37914_ip = 86;
                    continue _fun37914
                }
            case 27:
                var1 = var3.getUint16;
                var2 = var1.bind(var3)(var2);
                var1 = 19789;
                if (!(var2 !== var1)) {
                    _fun37914_ip = 84;
                    continue _fun37914
                }
            case 48:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = 'Illegal byte order value. Faulty image.';
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 84:
                return var1;
            case 86:
                return var0;
        }
    };
    var0.getByteOrder = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);