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
    var0 = function(arg0) { // Original name: getHostFromUrl, environment: var0
        _fun97705: for (var _fun97705_ip = 0;;) switch (_fun97705_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /^(?:https?:\\/\\ / ) ? (\[
            [ ^ \]
        ] + \] | [ ^ \/:\s]+)(?::\d+)?(?:[\/?#]|$)/;
            var2 = var1.bind(var2)(var0);
            var0 = null;
            var1 = var0 == var2;
            var0 = undefined;
            if (var1) {
                _fun97705_ip = 46;
                continue _fun97705
            }
            case 39:
            var1 = 1;
            var0 = var2[var1];
            case 46:
            var2 = 'string';
            var1 = typeof var0;
            if (!(var2 === var1)) {
                _fun97705_ip = 59;
                continue _fun97705
            }
            case 57:
            return var0;
            case 59:
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Invalid URL - host not found';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        }
    };
    var1.getHostFromUrl = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);