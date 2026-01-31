// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: isKeyable, environment: var0
        _fun31547: for (var _fun31547_ip = 0;;) switch (_fun31547_ip) {
            case 0:
                var2 = arg0;
                var1 = typeof var2;
                var0 = 'string';
                if (!(var0 !== var1)) {
                    _fun31547_ip = 46;
                    continue _fun31547
                }
            case 14:
                var0 = 'number';
                if (!(var0 !== var1)) {
                    _fun31547_ip = 46;
                    continue _fun31547
                }
            case 22:
                var0 = 'symbol';
                if (!(var0 !== var1)) {
                    _fun31547_ip = 46;
                    continue _fun31547
                }
            case 30:
                var0 = 'boolean';
                if (!(var0 !== var1)) {
                    _fun31547_ip = 46;
                    continue _fun31547
                }
            case 38:
                var0 = null;
                var0 = var0 === var2;
                _fun31547_ip = 54;
                continue _fun31547;
            case 46:
                var1 = '__proto__';
                var0 = var1 !== var2;
            case 54:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);