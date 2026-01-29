// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: hashDelete, environment: var0
        _fun31507: for (var _fun31507_ip = 0;;) switch (_fun31507_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (!var0) {
                    _fun31507_ip = 28;
                    continue _fun31507
                }
            case 18:
                var1 = var2.__data__;
                var0 = delete var1[var3];
            case 28:
                var3 = var2.size;
                var1 = 0;
                if (!var0) {
                    _fun31507_ip = 41;
                    continue _fun31507
                }
            case 38:
                var1 = 1;
            case 41:
                var1 = var3 - var1;
                var2.size = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);