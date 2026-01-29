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
    var0 = function(arg0) { // Original name: getDaysInYear, environment: var3
        _fun22812: for (var _fun22812_ip = 0;;) switch (_fun22812_ip) {
            case 0:
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot2;
                var4 = var2.default;
                var0 = arguments;
                var2 = var0;
                var0 = 1;
                var0 = var4.bind(var3)(var0, var2);
                var0 = _closure1_slot0;
                var2 = var0.default;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = global;
                var5 = var0.String;
                var4 = var0.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var6;
                var8 = var2;
                var4 = new var9[var4](var8, var7);
                var4 = var4 instanceof Object ? var4 : var6;
                var5 = var5.bind(var3)(var4);
                var4 = 'Invalid Date';
                if (!(var4 !== var5)) {
                    _fun22812_ip = 130;
                    continue _fun22812
                }
            case 99:
                var1 = _closure1_slot1;
                var1 = var1.default;
                var2 = var1.bind(var3)(var2);
                var1 = 365;
                if (!var2) {
                    _fun22812_ip = 128;
                    continue _fun22812
                }
            case 122:
                var1 = 366;
            case 128:
                return var1;
            case 130:
                var0 = var0.NaN;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2532, 2799, 2533]);