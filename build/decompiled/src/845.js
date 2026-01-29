// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var0 = var0.Symbol;
    var3 = var0.toStringTag;
    var0 = {};
    var6 = 'Module';
    var0.value = var6;
    var0 = var4.bind(var5)(var1, var3, var0);
    var0 = function(arg0, arg1) { // Original name: merge, environment: var2
        _fun8948: for (var _fun8948_ip = 0;;) switch (_fun8948_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var12 = undefined;
                var3 = undefined;
                var4 = arguments.length;
                var2 = 2;
                var4 = var4 > var2;
                var11 = var2;
                if (!var4) {
                    _fun8948_ip = 41;
                    continue _fun8948
                }
            case 26:
                var4 = arguments[var2];
                var11 = var2;
                if (!(var12 !== var4)) {
                    _fun8948_ip = 41;
                    continue _fun8948
                }
            case 37:
                var11 = arguments[var2];
            case 41:
                if (!var0) {
                    _fun8948_ip = 214;
                    continue _fun8948
                }
            case 47:
                var3 = 'object';
                var2 = typeof var0;
                if (!(var3 === var2)) {
                    _fun8948_ip = 214;
                    continue _fun8948
                }
            case 61:
                var3 = 0;
                if (!(!(var11 <= var3))) {
                    _fun8948_ip = 214;
                    continue _fun8948
                }
            case 70:
                if (!var1) {
                    _fun8948_ip = 100;
                    continue _fun8948
                }
            case 73:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.keys;
                var2 = var2.bind(var4)(var0);
                var2 = var2.length;
                if (!(var3 !== var2)) {
                    _fun8948_ip = 212;
                    continue _fun8948
                }
            case 100:
                var10 = global;
                var4 = var10.Object;
                var3 = var4.assign;
                var2 = {};
                var2 = var3.bind(var4)(var2, var1);
                var8 = var0;
                var3 = 1;
                for (var5 in var8)
                    case 138: {
                        case 147: var14 = var5;
                        var13 = var10.Object;
                        var13 = var13.prototype;
                        var15 = var13.hasOwnProperty;
                        var13 = var15.call;
                        var13 = var13.bind(var15)(var0, var14);
                        if (!var13) {
                            _fun8948_ip = 138;
                            continue _fun8948
                        }
                        case 181: var17 = _closure1_slot0;
                        var16 = var2[var14];
                        var15 = var0[var14];
                        var13 = var11 - var3;
                        var13 = var17.bind(var12)(var16, var15, var13);
                        var2[var14] = var13;
                        _fun8948_ip = 138;
                        continue _fun8948;
                    }
            case 210:
                return var2;
            case 212:
                return var1;
            case 214:
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var1.merge = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);