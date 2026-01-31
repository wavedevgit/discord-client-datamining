// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0() {
        _fun1457: for (var _fun1457_ip = 0;;) switch (_fun1457_ip) {
            case 0:
                var0 = arg0;
                var3 = typeof var0;
                var2 = 'number';
                if (!(var2 !== var3)) {
                    _fun1457_ip = 179;
                    continue _fun1457
                }
            case 19:
                var2 = 'string';
                if (!(var2 === var3)) {
                    _fun1457_ip = 175;
                    continue _fun1457
                }
            case 30:
                var3 = var0.split;
                var2 = '/';
                var4 = var3.bind(var0)(var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.trim;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var3.bind(var4)(var2);
                var3 = var6.includes;
                var2 = 'auto';
                var2 = var3.bind(var6)(var2);
                if (var2) {
                    _fun1457_ip = 175;
                    continue _fun1457
                }
            case 76:
                var2 = var6.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.Number;
                    var1 = var2.isNaN;
                    var4 = var0.Number;
                    var3 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var3)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var6)(var1);
                if (var1) {
                    _fun1457_ip = 175;
                    continue _fun1457
                }
            case 95:
                var2 = var6.length;
                var1 = 2;
                if (!(var1 !== var2)) {
                    _fun1457_ip = 130;
                    continue _fun1457
                }
            case 107:
                var1 = global;
                var3 = var1.Number;
                var1 = 0;
                var2 = var6[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun1457_ip = 173;
                continue _fun1457;
            case 130:
                var2 = global;
                var4 = var2.Number;
                var3 = 0;
                var3 = var6[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var4 = var2.Number;
                var2 = 1;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var1 = var3 / var2;
            case 173:
                return var1;
            case 175:
                var1 = undefined;
                return var1;
            case 179:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);