// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2() {
        _fun73076: for (var _fun73076_ip = 0;;) switch (_fun73076_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun73076_ip = 55;
                    continue _fun73076
                }
            case 27:
                var1 = global;
                var3 = var1.setTimeout;
                var2 = undefined;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 55:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Expected a function';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);