// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var0 = function arg0() {
        _fun9585: for (var _fun9585_ip = 0;;) switch (_fun9585_ip) {
            case 0:
                var2 = arg0;
                var0 = 'warning';
                var1 = 'warn';
                if (!(var1 !== var2)) {
                    _fun9585_ip = 48;
                    continue _fun9585
                }
            case 15:
                var3 = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
                var1 = var3.includes;
                var3 = var1.bind(var3)(var2);
                var1 = 'log';
                if (!var3) {
                    _fun9585_ip = 45;
                    continue _fun9585
                }
            case 42:
                var1 = var2;
            case 45:
                var0 = var1;
            case 48:
                return var0;
        }
    };
    var1.severityLevelFromString = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);