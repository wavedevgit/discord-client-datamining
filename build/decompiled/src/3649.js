// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = global;
    var1 = var1.Object;
    var1 = var1.prototype;
    var1 = var1.hasOwnProperty;
    var _closure1_slot0 = var1;
    var1 = function arg0() {
        _fun32645: for (var _fun32645_ip = 0;;) switch (_fun32645_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.length;
                var0 = var1.constructor;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var3;
                var7 = var2;
                var0 = new var8[var0](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                if (!var2) {
                    _fun32645_ip = 56;
                    continue _fun32645
                }
            case 39:
                var3 = 0;
                var3 = var1[var3];
                var4 = 'string';
                var3 = typeof var3;
                var2 = var4 === var3;
            case 56:
                if (!var2) {
                    _fun32645_ip = 81;
                    continue _fun32645
                }
            case 59:
                var5 = _closure1_slot0;
                var4 = var5.call;
                var3 = 'index';
                var2 = var4.bind(var5)(var1, var3);
            case 81:
                if (!var2) {
                    _fun32645_ip = 107;
                    continue _fun32645
                }
            case 84:
                var2 = var1.index;
                var0.index = var2;
                var1 = var1.input;
                var0.input = var1;
            case 107:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);