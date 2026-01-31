// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var1;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = new Array(0);
    var _closure1_slot2 = var0;
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var1);
    var5 = var6.addListener;
    var4 = 'hardwareBackPress';
    var1 = function() { // Environment: var3
        _fun3296: for (var _fun3296_ip = 0;;) switch (_fun3296_ip) {
            case 0:
                var1 = _closure1_slot2;
                var2 = var1.length;
                var1 = 1;
                var3 = var2 - var1;
                var2 = 0;
                var1 = null;
                if (!(var3 >= var2)) {
                    _fun3296_ip = 63;
                    continue _fun3296
                }
            case 27:
                var4 = _closure1_slot2;
                var6 = var4[var3];
                if (!(var1 != var6)) {
                    _fun3296_ip = 56;
                    continue _fun3296
                }
            case 39:
                var5 = var6.call;
                var4 = _closure1_slot2;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun3296_ip = 81;
                    continue _fun3296
                }
            case 56:
                var3 = var3 - 1;
                if (var3 >= var2) {
                    _fun3296_ip = 27;
                    continue _fun3296
                }
            case 63:
                var1 = _closure1_slot3;
                var0 = var1.exitApp;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var1 = var5.bind(var6)(var4, var1);
    var1 = {};
    var4 = function() {
        _fun3297: for (var _fun3297_ip = 0;;) switch (_fun3297_ip) {
            case 0:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 1;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                if (!var2) {
                    _fun3297_ip = 55;
                    continue _fun3297
                }
            case 28:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var2 = var2.bind(var0)(var1);
                var1 = var2.invokeDefaultBackPressHandler;
                var1 = var1.bind(var2)();
            case 55:
                return var0;
        }
    };
    var1.exitApp = var4;
    var4 = function arg0, arg1() {
        _fun3298: for (var _fun3298_ip = 0;;) switch (_fun3298_ip) {
            case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot2;
                var2 = var4.indexOf;
                var4 = var2.bind(var4)(var3);
                var2 = -1;
                if (!(var2 === var4)) {
                    _fun3298_ip = 51;
                    continue _fun3298
                }
            case 37:
                var2 = _closure1_slot2;
                var0 = var2.push;
                var0 = var0.bind(var2)(var3);
            case 51:
                var0 = {};
                var1 = function() {
                    _fun3299: for (var _fun3299_ip = 0;;) switch (_fun3299_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var2 = var3.indexOf;
                            var1 = _closure2_slot0;
                            var3 = var2.bind(var3)(var1);
                            var1 = -1;
                            if (!(var1 !== var3)) {
                                _fun3299_ip = 54;
                                continue _fun3299
                            }
                        case 35:
                            var2 = _closure1_slot2;
                            var1 = var2.splice;
                            var0 = 1;
                            var0 = var1.bind(var2)(var3, var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.remove = var1;
                return var0;
        }
    };
    var1.addEventListener = var4;
    var _closure1_slot3 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [101, 247]);