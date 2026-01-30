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
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() { // Original name: breadcrumbsIntegration, environment: var0
        _fun12761: for (var _fun12761_ip = 0;;) switch (_fun12761_ip) {
            case 0:
                var3 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var10 = 0;
                if (!(var1 > var10)) {
                    _fun12761_ip = 21;
                    continue _fun12761
                }
            case 13:
                var1 = arguments[var10];
                if (!(var3 === var1)) {
                    _fun12761_ip = 25;
                    continue _fun12761
                }
            case 21:
                var6 = {};
                _fun12761_ip = 29;
                continue _fun12761;
            case 25:
                var6 = arguments[var10];
            case 29:
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var2 = var0.Object;
                var1 = var2.assign;
                var0 = {
                    'xhr': true,
                    'console': true,
                    'sentry': true
                };
                var2 = var1.bind(var2)(var0, var6);
                var1 = {};
                var0 = var6.fetch;
                var7 = null;
                var8 = var6;
                if (!(var7 !== var0)) {
                    _fun12761_ip = 90;
                    continue _fun12761
                }
            case 86:
                if (!(var3 === var0)) {
                    _fun12761_ip = 126;
                    continue _fun12761
                }
            case 90:
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isWeb;
                var6 = var6.bind(var9)();
                var6 = !var6;
                var0 = !var6;
            case 126:
                var1.fetch = var0;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isWeb;
                var6 = var6.bind(var9)();
                var9 = !var6;
                var6 = !var9;
                if (var9) {
                    _fun12761_ip = 196;
                    continue _fun12761
                }
            case 170:
                var11 = var8.dom;
                var9 = var7 === var11;
                if (var9) {
                    _fun12761_ip = 187;
                    continue _fun12761
                }
            case 183:
                var9 = var3 === var11;
            case 187:
                if (var9) {
                    _fun12761_ip = 193;
                    continue _fun12761
                }
            case 190:
                var9 = var11;
            case 193:
                var6 = var9;
            case 196:
                var1.dom = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isWeb;
                var6 = var6.bind(var9)();
                var9 = !var6;
                var6 = !var9;
                if (var9) {
                    _fun12761_ip = 263;
                    continue _fun12761
                }
            case 237:
                var8 = var8.history;
                var7 = var7 === var8;
                if (var7) {
                    _fun12761_ip = 254;
                    continue _fun12761
                }
            case 250:
                var7 = var3 === var8;
            case 254:
                if (var7) {
                    _fun12761_ip = 260;
                    continue _fun12761
                }
            case 257:
                var7 = var8;
            case 260:
                var6 = var7;
            case 263:
                var1.history = var6;
                var2 = var4.bind(var5)(var2, var1);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.breadcrumbsIntegration;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.breadcrumbsIntegration = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 1021]);