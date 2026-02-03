// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
    var _closure1_slot0 = var0;
    var2 = function arg0() {
        _fun58896: for (var _fun58896_ip = 0;;) switch (_fun58896_ip) {
            case 0:
                var2 = arg0;
                var0 = 'warning';
                var1 = 'warn';
                if (!(var1 !== var2)) {
                    _fun58896_ip = 45;
                    continue _fun58896
                }
            case 15:
                var3 = _closure1_slot0;
                var1 = var3.includes;
                var3 = var1.bind(var3)(var2);
                var1 = 'log';
                if (!var3) {
                    _fun58896_ip = 42;
                    continue _fun58896
                }
            case 39:
                var1 = var2;
            case 42:
                var0 = var1;
            case 45:
                return var0;
        }
    };
    var1.severityLevelFromString = var2;
    var1.validSeverityLevels = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);