// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: isLength, environment: var0
        _fun8334: for (var _fun8334_ip = 0;;) switch (_fun8334_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun8334_ip = 27;
                    continue _fun8334
                }
            case 17:
                var1 = -1;
                var0 = var2 > var1;
            case 27:
                if (!var0) {
                    _fun8334_ip = 43;
                    continue _fun8334
                }
            case 30:
                var1 = 1;
                var3 = var2 % var1;
                var1 = 0;
                var0 = var3 === var1;
            case 43:
                if (!var0) {
                    _fun8334_ip = 60;
                    continue _fun8334
                }
            case 46:
                var1 = 9007199254740991.0;
                var0 = var2 <= var1;
            case 60:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);