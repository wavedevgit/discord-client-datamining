// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: captureMetric, environment: var0
        _fun9825: for (var _fun9825_ip = 0;;) switch (_fun9825_ip) {
            case 0:
                var6 = arg3;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4._INTERNAL_captureMetric;
                var2 = {};
                var1 = arg0;
                var2.type = var1;
                var1 = arg1;
                var2.name = var1;
                var1 = arg2;
                var2.value = var1;
                var5 = null;
                var7 = var5 == var6;
                var1 = undefined;
                if (var7) {
                    _fun9825_ip = 73;
                    continue _fun9825
                }
            case 67:
                var1 = var6.unit;
            case 73:
                var2.unit = var1;
                var7 = var5 == var6;
                var1 = undefined;
                if (var7) {
                    _fun9825_ip = 93;
                    continue _fun9825
                }
            case 87:
                var1 = var6.attributes;
            case 93:
                var2.attributes = var1;
                var1 = {};
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun9825_ip = 115;
                    continue _fun9825
                }
            case 109:
                var5 = var6.scope;
            case 115:
                var1.scope = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function(arg0) { // Original name: count, environment: var0
        _fun9826: for (var _fun9826_ip = 0;;) switch (_fun9826_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var5 = _closure1_slot2;
                var3 = arguments.length;
                var1 = 1;
                var3 = var3 > var1;
                var4 = var1;
                if (!var3) {
                    _fun9826_ip = 42;
                    continue _fun9826
                }
            case 27:
                var3 = arguments[var1];
                var4 = var1;
                if (!(var0 !== var3)) {
                    _fun9826_ip = 42;
                    continue _fun9826
                }
            case 38:
                var4 = arguments[var1];
            case 42:
                var3 = arguments.length;
                var1 = 2;
                var6 = var3 > var1;
                var3 = undefined;
                if (!var6) {
                    _fun9826_ip = 61;
                    continue _fun9826
                }
            case 57:
                var3 = arguments[var1];
            case 61:
                var10 = 'counter';
                var9 = arg0;
                var11 = undefined;
                var8 = var4;
                var7 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var1.count = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: distribution, environment: var0
        var5 = _closure1_slot2;
        var0 = undefined;
        var9 = 'distribution';
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = undefined;
        var1 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.distribution = var2;
    var0 = function(arg0, arg1, arg2) { // Original name: gauge, environment: var0
        var5 = _closure1_slot2;
        var0 = undefined;
        var9 = 'gauge';
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = undefined;
        var1 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.gauge = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [879]);