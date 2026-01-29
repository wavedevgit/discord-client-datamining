// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29023: for (var _fun29023_ip = 0;;) switch (_fun29023_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var2);
            var3 = '%Promise.resolve%';
            var2 = true;
            var4 = var4.bind(var0)(var3, var2);
            var2 = var4;
            if (!var2) {
                _fun29023_ip = 66;
                continue _fun29023
            }
        case 49:
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var2 = var3.bind(var0)(var4);
        case 66:
            var _closure1_slot2 = var2;
            var2 = function(arg0, arg1) { // Original name: PromiseResolve, environment: var1
                _fun29024: for (var _fun29024_ip = 0;;) switch (_fun29024_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        if (var1) {
                            _fun29024_ip = 60;
                            continue _fun29024
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = 'This environment does not support Promises.';
                        var6 = var2;
                        var1 = new var6[var3](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 60:
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 1403, 539]);