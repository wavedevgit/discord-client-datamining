// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function() { // Original name: reportPageLoaded, environment: var0
        _fun12002: for (var _fun12002_ip = 0;;) switch (_fun12002_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun12002_ip = 21;
                    continue _fun12002
                }
            case 13:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun12002_ip = 53;
                    continue _fun12002
                }
            case 21:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var1];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getClient;
                var3 = var3.bind(var4)();
                _fun12002_ip = 57;
                continue _fun12002;
            case 53:
                var3 = arguments[var1];
            case 57:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun12002_ip = 80;
                    continue _fun12002
                }
            case 63:
                var2 = var3.emit;
                var1 = 'endPageloadSpan';
                var1 = var2.bind(var3)(var1);
            case 80:
                return var0;
        }
    };
    var1.reportPageLoaded = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);