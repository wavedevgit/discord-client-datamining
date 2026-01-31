// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22410: for (var _fun22410_ip = 0;;) switch (_fun22410_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22410_ip = 18;
                    continue _fun22410
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22410_ip = 27;
                    continue _fun22410
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
    var0 = function(arg0, arg1) { // Original name: addDays, environment: var3
        _fun22411: for (var _fun22411_ip = 0;;) switch (_fun22411_ip) {
            case 0:
                var3 = undefined;
                var1 = undefined;
                var2 = _closure1_slot2;
                var4 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 2;
                var1 = var4.bind(var3)(var1, var2);
                var1 = _closure1_slot1;
                var2 = var1.default;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var0 = _closure1_slot0;
                var2 = var0.default;
                var0 = arg1;
                var4 = var2.bind(var3)(var0);
                var0 = global;
                var2 = var0.isNaN;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun22411_ip = 112;
                    continue _fun22411
                }
            case 80:
                if (var4) {
                    _fun22411_ip = 85;
                    continue _fun22411
                }
            case 83:
                return var1;
            case 85:
                var3 = var1.setDate;
                var2 = var1.getDate;
                var2 = var2.bind(var1)();
                var2 = var2 + var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            case 112:
                var2 = var0.Date;
                var6 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2536, 2532, 2533]);