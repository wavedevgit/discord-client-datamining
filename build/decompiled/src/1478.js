// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function() {
        _fun16988: for (var _fun16988_ip = 0;;) switch (_fun16988_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var1 = 0;
                var3 = var0 > var1;
                var5 = 21;
                var0 = var5;
                if (!var3) {
                    _fun16988_ip = 37;
                    continue _fun16988
                }
            case 22:
                var3 = arguments[var1];
                var0 = var5;
                if (!(var4 !== var3)) {
                    _fun16988_ip = 37;
                    continue _fun16988
                }
            case 33:
                var0 = arguments[var1];
            case 37:
                var1 = var0 | 0;
                var6 = var1 - 1;
                var2 = '';
                var5 = global;
                var4 = 64;
                var3 = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
                var0 = var2;
                if (!var1) {
                    _fun16988_ip = 107;
                    continue _fun16988
                }
            case 64:
                var7 = var5.Math;
                var1 = var7.random;
                var1 = var1.bind(var7)();
                var1 = var4 * var1;
                var1 = var1 | 0;
                var1 = var3[var1];
                var2 = var2 + var1;
                var1 = parseFloat(var6);
                var6 = var1 - 1;
                var0 = var2;
                if (var1) {
                    _fun16988_ip = 64;
                    continue _fun16988
                }
            case 107:
                return var0;
        }
    };
    var1.nanoid = var2;
    var0 = function arg0() {
        _fun16989: for (var _fun16989_ip = 0;;) switch (_fun16989_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arguments.length;
                var2 = 1;
                var4 = var1 > var2;
                var6 = 21;
                var1 = var6;
                if (!var4) {
                    _fun16989_ip = 47;
                    continue _fun16989
                }
            case 32:
                var4 = arguments[var2];
                var1 = var6;
                if (!(var5 !== var4)) {
                    _fun16989_ip = 47;
                    continue _fun16989
                }
            case 43:
                var1 = arguments[var2];
            case 47:
                var _closure2_slot1 = var1;
                var0 = function() { // Environment: var0
                    _fun16990: for (var _fun16990_ip = 0;;) switch (_fun16990_ip) {
                        case 0:
                            var3 = undefined;
                            var2 = undefined;
                            var0 = arguments.length;
                            var1 = 0;
                            if (!(var0 > var1)) {
                                _fun16990_ip = 21;
                                continue _fun16990
                            }
                        case 13:
                            var0 = arguments[var1];
                            if (!(var3 === var0)) {
                                _fun16990_ip = 30;
                                continue _fun16990
                            }
                        case 21:
                            var0 = _closure2_slot1;
                            _fun16990_ip = 34;
                            continue _fun16990;
                        case 30:
                            var0 = arguments[var1];
                        case 34:
                            var1 = var0 | 0;
                            var5 = var1 - 1;
                            var2 = '';
                            var3 = global;
                            var0 = var2;
                            if (!var1) {
                                _fun16990_ip = 107;
                                continue _fun16990
                            }
                        case 55:
                            var6 = _closure2_slot0;
                            var7 = var3.Math;
                            var1 = var7.random;
                            var7 = var1.bind(var7)();
                            var1 = var6.length;
                            var1 = var7 * var1;
                            var1 = var1 | 0;
                            var1 = var6[var1];
                            var2 = var2 + var1;
                            var1 = parseFloat(var5);
                            var5 = var1 - 1;
                            var0 = var2;
                            if (var1) {
                                _fun16990_ip = 55;
                                continue _fun16990
                            }
                        case 107:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var1.customAlphabet = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);