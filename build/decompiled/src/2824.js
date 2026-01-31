// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22887: for (var _fun22887_ip = 0;;) switch (_fun22887_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var1, var0, var2);
            var0 = function(arg0, arg1, arg2) { // Original name: intlFormat, environment: var3
                _fun22888: for (var _fun22888_ip = 0;;) switch (_fun22888_ip) {
                    case 0:
                        var0 = arg1;
                        var2 = arg2;
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot0;
                        var5 = var3.default;
                        var1 = arguments;
                        var3 = var1;
                        var1 = 1;
                        var1 = var5.bind(var4)(var1, var3);
                        var5 = var4 !== var0;
                        if (!var5) {
                            _fun22888_ip = 54;
                            continue _fun22888
                        }
                    case 43:
                        var1 = 'locale';
                        var1 = var1 in var0;
                        var5 = !var1;
                    case 54:
                        var1 = var0;
                        var3 = undefined;
                        if (!var5) {
                            _fun22888_ip = 68;
                            continue _fun22888
                        }
                    case 62:
                        var1 = var2;
                        var3 = var0;
                    case 68:
                        var0 = global;
                        var0 = var0.Intl;
                        var2 = var0.DateTimeFormat;
                        var5 = null;
                        var0 = undefined;
                        if (!(var5 !== var1)) {
                            _fun22888_ip = 102;
                            continue _fun22888
                        }
                    case 90:
                        var0 = undefined;
                        if (!(var0 !== var1)) {
                            _fun22888_ip = 102;
                            continue _fun22888
                        }
                    case 96:
                        var0 = var1.locale;
                    case 102:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var8 = var1;
                        var7 = var0;
                        var6 = var3;
                        var0 = new var8[var2](var7, var6, var5);
                        var2 = var0 instanceof Object ? var0 : var1;
                        var1 = var2.format;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var1.default = var0;
            var2 = arg6;
            var0 = 0;
            var4 = var2[var0];
            var2 = arg1;
            var0 = undefined;
            var5 = var2.bind(var0)(var4);
            if (!var5) {
                _fun22887_ip = 82;
                continue _fun22887
            }
        case 70:
            var4 = var5.__esModule;
            var2 = var5;
            if (var4) {
                _fun22887_ip = 91;
                continue _fun22887
            }
        case 82:
            var4 = {};
            var4.default = var5;
            var2 = var4;
        case 91:
            var _closure1_slot0 = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2533]);