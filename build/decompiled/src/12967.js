// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        _fun99586: for (var _fun99586_ip = 0;;) switch (_fun99586_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 1;
                var0 = var1 - var0;
                var2 = var4[var0];
                var1 = '/';
                var0 = var4;
                if (!(var1 === var2)) {
                    _fun99586_ip = 49;
                    continue _fun99586
                }
            case 30:
                var3 = var4.slice;
                var2 = 0;
                var1 = -1;
                var0 = var3.bind(var4)(var2, var1);
            case 49:
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1() {
        _fun99587: for (var _fun99587_ip = 0;;) switch (_fun99587_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var2;
                if (!var2) {
                    _fun99587_ip = 22;
                    continue _fun99587
                }
            case 12:
                var0 = var2.getDsn;
                var1 = var0.bind(var2)();
            case 22:
                var5 = var2;
                if (!var5) {
                    _fun99587_ip = 44;
                    continue _fun99587
                }
            case 28:
                var0 = var2.getOptions;
                var0 = var0.bind(var2)();
                var5 = var0.tunnel;
            case 44:
                var2 = !var1;
                var0 = !var2;
                if (var2) {
                    _fun99587_ip = 69;
                    continue _fun99587
                }
            case 53:
                var2 = var3.includes;
                var1 = var1.host;
                var0 = var2.bind(var3)(var1);
            case 69:
                if (var0) {
                    _fun99587_ip = 103;
                    continue _fun99587
                }
            case 72:
                var1 = false;
                if (!var5) {
                    _fun99587_ip = 100;
                    continue _fun99587
                }
            case 77:
                var4 = _closure1_slot0;
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var4.bind(var2)(var5);
                var1 = var3 === var2;
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var1.isSentryRequestUrl = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);