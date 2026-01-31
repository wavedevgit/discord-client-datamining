// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function(arg0) { // Original name: _iterableToArray, environment: var1
        _fun1438: for (var _fun1438_ip = 0;;) switch (_fun1438_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                if (!(var3 !== var1)) {
                    _fun1438_ip = 43;
                    continue _fun1438
                }
            case 21:
                var1 = var0.Symbol;
                var1 = var1.iterator;
                var3 = var2[var1];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun1438_ip = 59;
                    continue _fun1438
                }
            case 43:
                var3 = var2["@@iterator"];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun1438_ip = 59;
                    continue _fun1438
                }
            case 55:
                var1 = undefined;
                return var1;
            case 59:
                var1 = var0.Array;
                var0 = var1.from;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);