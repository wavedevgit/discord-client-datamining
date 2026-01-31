// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.Map;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot0 = var2;
    var2 = function arg0() {
        _fun2829: for (var _fun2829_ip = 0;;) switch (_fun2829_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 == var4)) {
                    _fun2829_ip = 46;
                    continue _fun2829
                }
            case 26:
                var5 = _closure1_slot0;
                var2 = var5.set;
                var1 = 1;
                var1 = var2.bind(var5)(var3, var1);
                _fun2829_ip = 68;
                continue _fun2829;
            case 46:
                var2 = _closure1_slot0;
                var1 = var2.set;
                var0 = 1;
                var0 = var4 + var0;
                var0 = var1.bind(var2)(var3, var0);
            case 68:
                var0 = undefined;
                return var0;
        }
    };
    var1.register = var2;
    var2 = function arg0() {
        _fun2830: for (var _fun2830_ip = 0;;) switch (_fun2830_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = var3.get;
                var5 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun2830_ip = 68;
                    continue _fun2830
                }
            case 26:
                var1 = 1;
                if (!(!(var5 <= var1))) {
                    _fun2830_ip = 54;
                    continue _fun2830
                }
            case 33:
                var4 = _closure1_slot0;
                var3 = var4.set;
                var1 = var5 - var1;
                var1 = var3.bind(var4)(var2, var1);
                _fun2830_ip = 68;
                continue _fun2830;
            case 54:
                var1 = _closure1_slot0;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 68:
                var0 = undefined;
                return var0;
        }
    };
    var1.unregister = var2;
    var0 = function arg0() {
        _fun2831: for (var _fun2831_ip = 0;;) switch (_fun2831_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun2831_ip = 25;
                    continue _fun2831
                }
            case 23:
                var0 = false;
            case 25:
                return var0;
        }
    };
    var1.has = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);