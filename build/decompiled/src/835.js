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
        _fun8858: for (var _fun8858_ip = 0;;) switch (_fun8858_ip) {
            case 0:
                var2 = arg0;
                var3 = typeof var2;
                var0 = 'boolean';
                if (!(var0 !== var3)) {
                    _fun8858_ip = 101;
                    continue _fun8858
                }
            case 14:
                var0 = 'string';
                var1 = var2;
                if (!(var0 === var3)) {
                    _fun8858_ip = 40;
                    continue _fun8858
                }
            case 25:
                var0 = global;
                var3 = var0.parseFloat;
                var0 = undefined;
                var1 = var3.bind(var0)(var2);
            case 40:
                var4 = undefined;
                var5 = 'number';
                var3 = typeof var1;
                var0 = undefined;
                if (!(var5 === var3)) {
                    _fun8858_ip = 99;
                    continue _fun8858
                }
            case 55:
                var3 = global;
                var3 = var3.isNaN;
                var3 = var3.bind(var4)(var1);
                var0 = undefined;
                if (var3) {
                    _fun8858_ip = 99;
                    continue _fun8858
                }
            case 73:
                var3 = 0;
                var3 = var1 < var3;
                var0 = undefined;
                if (var3) {
                    _fun8858_ip = 99;
                    continue _fun8858
                }
            case 84:
                var3 = 1;
                var3 = var1 > var3;
                var0 = undefined;
                if (var3) {
                    _fun8858_ip = 99;
                    continue _fun8858
                }
            case 96:
                var0 = var1;
            case 99:
                return var0;
            case 101:
                var0 = global;
                var1 = var0.Number;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.parseSampleRate = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);