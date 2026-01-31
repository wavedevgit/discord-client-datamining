// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22811: for (var _fun22811_ip = 0;;) switch (_fun22811_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22811_ip = 18;
                    continue _fun22811
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22811_ip = 27;
                    continue _fun22811
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
    var0 = function(arg0) { // Original name: getDaysInMonth, environment: var3
        var2 = undefined;
        var1 = undefined;
        var3 = _closure1_slot1;
        var3 = var3.default;
        var1 = arguments;
        var5 = 1;
        var1 = var3.bind(var2)(var5, var1);
        var0 = _closure1_slot0;
        var1 = var0.default;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = var1.getFullYear;
        var4 = var0.bind(var1)();
        var0 = var1.getMonth;
        var0 = var0.bind(var1)();
        var1 = global;
        var1 = var1.Date;
        var2 = var1.prototype;
        var3 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var2 = 0;
        var10 = var3;
        var9 = 0;
        var1 = new var10[var1](var9, var8);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.setFullYear;
        var0 = var0 + var5;
        var0 = var3.bind(var1)(var4, var0, var2);
        var0 = var1.setHours;
        var10 = var1;
        var9 = 0;
        var8 = 0;
        var7 = 0;
        var6 = 0;
        var0 = var10[var0](var9, var8, var7, var6, var5);
        var0 = var1.getDate;
        var0 = var0.bind(var1)();
        return var0;
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2532, 2533]);