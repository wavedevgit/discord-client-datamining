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
    var2 = function arg0() {
        _fun34132: for (var _fun34132_ip = 0;;) switch (_fun34132_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun34132_ip = 36;
                    continue _fun34132
                }
            case 26:
                var0 = new Array(1);
                var0[0] = var3;
                return var0;
            case 36:
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var2 = function arg0() {
                    var2 = arg0;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun34134: for (var _fun34134_ip = 0;;) switch (_fun34134_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = global;
                                var1 = var0.Array;
                                var0 = var1.isArray;
                                var1 = var0.bind(var1)(var2);
                                if (var1) {
                                    _fun34134_ip = 43;
                                    continue _fun34134
                                }
                            case 27:
                                var3 = _closure2_slot0;
                                var1 = var3.push;
                                var1 = var1.bind(var3)(var2);
                                _fun34134_ip = 54;
                                continue _fun34134;
                            case 43:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot1 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var0;
        }
    };
    var1.flattenArray = var2;
    var0 = function arg0, arg1() {
        _fun34135: for (var _fun34135_ip = 0;;) switch (_fun34135_ip) {
            case 0:
                var3 = arg1;
                var2 = typeof var3;
                var0 = 'function';
                var0 = var0 === var2;
                if (var0) {
                    _fun34135_ip = 25;
                    continue _fun34135
                }
            case 17:
                var1 = 'object';
                var0 = var1 === var2;
            case 25:
                if (!var0) {
                    _fun34135_ip = 47;
                    continue _fun34135
                }
            case 28:
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun34135_ip = 44;
                    continue _fun34135
                }
            case 37:
                var2 = arg0;
                var1 = var2 in var3;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var1.has = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);