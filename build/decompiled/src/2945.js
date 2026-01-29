// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun23822: for (var _fun23822_ip = 0;;) switch (_fun23822_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23822_ip = 18;
                    continue _fun23822
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23822_ip = 27;
                    continue _fun23822
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
    var0 = function(arg0, arg1) { // Original name: setMonth, environment: var3
        var5 = undefined;
        var0 = undefined;
        var1 = _closure1_slot3;
        var3 = var1.default;
        var0 = arguments;
        var1 = var0;
        var0 = 2;
        var0 = var3.bind(var5)(var0, var1);
        var0 = _closure1_slot1;
        var1 = var0.default;
        var0 = arg0;
        var0 = var1.bind(var5)(var0);
        var1 = _closure1_slot0;
        var3 = var1.default;
        var1 = arg1;
        var3 = var3.bind(var5)(var1);
        var1 = var0.getFullYear;
        var10 = var1.bind(var0)();
        var1 = var0.getDate;
        var6 = var1.bind(var0)();
        var1 = global;
        var4 = var1.Date;
        var7 = var4.prototype;
        var7 = Object.create(var7, {
            constructor: {
                value: var4
            }
        });
        var15 = var7;
        var14 = 0;
        var4 = new var15[var4](var14, var13);
        var4 = var4 instanceof Object ? var4 : var7;
        var9 = var4.setFullYear;
        var7 = 15;
        var7 = var9.bind(var4)(var10, var3, var7);
        var7 = var4.setHours;
        var15 = var4;
        var14 = 0;
        var13 = 0;
        var12 = 0;
        var11 = 0;
        var7 = var15[var7](var14, var13, var12, var11, var10);
        var2 = _closure1_slot2;
        var2 = var2.default;
        var5 = var2.bind(var5)(var4);
        var2 = var0.setMonth;
        var4 = var1.Math;
        var1 = var4.min;
        var1 = var1.bind(var4)(var6, var5);
        var1 = var2.bind(var0)(var3, var1);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2536, 2532, 2797, 2533]);