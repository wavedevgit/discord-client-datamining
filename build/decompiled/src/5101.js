// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function arg0, arg1() {
        _fun45653: for (var _fun45653_ip = 0;;) switch (_fun45653_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var0 = null;
                if (!(var0 != var8)) {
                    _fun45653_ip = 92;
                    continue _fun45653
                }
            case 12:
                var0 = {};
                var5 = var8;
                var1 = -1;
                for (var2 in var5)
                    case 31: {
                        case 40: var10 = var2;
                        var9 = {};
                        var11 = var9.hasOwnProperty;
                        var9 = var11.call;
                        var9 = var9.bind(var11)(var8, var10);
                        if (!var9) {
                            _fun45653_ip = 31;
                            continue _fun45653
                        }
                        case 65: var9 = var7.indexOf;
                        var9 = var9.bind(var7)(var10);
                        if (var1 !== var9) {
                            _fun45653_ip = 31;
                            continue _fun45653
                        }
                        case 80: var9 = var8[var10];
                        var0[var10] = var9;
                        _fun45653_ip = 31;
                        continue _fun45653;
                    }
            case 90:
                return var0;
            case 92:
                var0 = {};
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);