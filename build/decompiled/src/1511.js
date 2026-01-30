// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Environment: var0
        _fun17246: for (var _fun17246_ip = 0;;) switch (_fun17246_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var3 = 'string';
                var0 = typeof var1;
                if (!(var3 === var0)) {
                    _fun17246_ip = 122;
                    continue _fun17246
                }
            case 17:
                var0 = typeof var2;
                if (!(var3 === var0)) {
                    _fun17246_ip = 122;
                    continue _fun17246
                }
            case 24:
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun17246_ip = 112;
                    continue _fun17246
                }
            case 32:
                var0 = var1.indexOf;
                var4 = var0.bind(var1)(var2);
                var0 = -1;
                if (!(var0 !== var4)) {
                    _fun17246_ip = 99;
                    continue _fun17246
                }
            case 53:
                var3 = var1.slice;
                var0 = 0;
                var3 = var3.bind(var1)(var0, var4);
                var0 = new Array(2);
                var0[0] = var3;
                var3 = var1.slice;
                var2 = var2.length;
                var2 = var4 + var2;
                var2 = var3.bind(var1)(var2);
                var0[1] = var2;
                _fun17246_ip = 110;
                continue _fun17246;
            case 99:
                var2 = new Array(1);
                var2[0] = var1;
                var0 = var2;
            case 110:
                return var0;
            case 112:
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            case 122:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'Expected the arguments to be of type `string`';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);