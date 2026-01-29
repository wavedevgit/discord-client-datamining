// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: isObject, environment: var0
        _fun6925: for (var _fun6925_ip = 0;;) switch (_fun6925_ip) {
            case 0:
                var1 = arg0;
                var3 = typeof var1;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun6925_ip = 37;
                    continue _fun6925
                }
            case 15:
                var1 = 'object';
                var1 = var1 === var3;
                if (var1) {
                    _fun6925_ip = 34;
                    continue _fun6925
                }
            case 26:
                var2 = 'function';
                var1 = var2 === var3;
            case 34:
                var0 = var1;
            case 37:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);