// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22708: for (var _fun22708_ip = 0;;) switch (_fun22708_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22708_ip = 18;
                    continue _fun22708
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22708_ip = 27;
                    continue _fun22708
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun22709: for (var _fun22709_ip = 0;;) switch (_fun22709_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var8 = undefined;
                var1 = undefined;
                var2 = _closure1_slot3;
                var2 = var2.default;
                var1 = arguments;
                var6 = 1;
                var1 = var2.bind(var8)(var6, var1);
                if (var0) {
                    _fun22709_ip = 38;
                    continue _fun22709
                }
            case 36:
                var0 = {};
            case 38:
                var1 = _closure1_slot2;
                var2 = var1.default;
                var1 = var0.start;
                var2 = var2.bind(var8)(var1);
                var1 = _closure1_slot2;
                var1 = var1.default;
                var0 = var0.end;
                var1 = var1.bind(var8)(var0);
                var0 = var1.getTime;
                var4 = var0.bind(var1)();
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                if (!(!(var0 <= var4))) {
                    _fun22709_ip = 136;
                    continue _fun22709
                }
            case 100:
                var0 = global;
                var5 = var0.RangeError;
                var0 = var5.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = 'Invalid interval';
                var12 = var4;
                var0 = new var12[var5](var11, var10);
                var0 = var0 instanceof Object ? var0 : var4;
                throw var0;
            case 136:
                var0 = _closure1_slot1;
                var0 = var0.default;
                var2 = var0.bind(var8)(var2, var3);
                var0 = _closure1_slot1;
                var0 = var0.default;
                var1 = var0.bind(var8)(var1, var3);
                var0 = var2.setHours;
                var5 = 15;
                var0 = var0.bind(var2)(var5);
                var0 = var1.setHours;
                var0 = var0.bind(var1)(var5);
                var0 = var1.getTime;
                var4 = var0.bind(var1)();
                var0 = new Array(0);
                var1 = var2.getTime;
                var1 = var1.bind(var2)();
                var3 = 0;
                if (!(var1 <= var4)) {
                    _fun22709_ip = 299;
                    continue _fun22709
                }
            case 221:
                var1 = var2.setHours;
                var1 = var1.bind(var2)(var3);
                var9 = var0.push;
                var1 = _closure1_slot2;
                var1 = var1.default;
                var1 = var1.bind(var8)(var2);
                var1 = var9.bind(var0)(var1);
                var1 = _closure1_slot0;
                var1 = var1.default;
                var9 = var1.bind(var8)(var2, var6);
                var1 = var9.setHours;
                var1 = var1.bind(var9)(var5);
                var1 = var9.getTime;
                var1 = var1.bind(var9)();
                var2 = var9;
                if (var1 <= var4) {
                    _fun22709_ip = 221;
                    continue _fun22709
                }
            case 299:
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2732, 2723, 2564, 2565]);