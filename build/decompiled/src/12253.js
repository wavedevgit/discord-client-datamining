// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun94006: for (var _fun94006_ip = 0;;) switch (_fun94006_ip) {
            case 0:
                var6 = undefined;
                var7 = undefined;
                var0 = arg0;
                var3 = arg1;
                var2 = undefined;
                var4 = arguments.length;
                var5 = 2;
                var4 = var4 > var5;
                if (!var4) {
                    _fun94006_ip = 33;
                    continue _fun94006
                }
            case 25:
                var8 = arguments[var5];
                var4 = var6 !== var8;
            case 33:
                if (!var4) {
                    _fun94006_ip = 40;
                    continue _fun94006
                }
            case 36:
                var4 = arguments[var5];
            case 40:
                var2 = var4;
                var8 = var0;
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = 0;
                var5 = var5[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var8 instanceof var5;
                if (var5) {
                    _fun94006_ip = 131;
                    continue _fun94006
                }
            case 75: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var11 = var0;
                var10 = var3;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = var4;
                var3 = new var12[var6](var11, var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
            case 118: // try_end0
                return var3;
            case 120: // catch_target0
                CatchBlockStart(arg_register = 1);
                if (var2) {
                    _fun94006_ip = 129;
                    continue _fun94006
                }
            case 125:
                var2 = null;
                return var2;
            case 129:
                throw var1;
            case 131:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12254]);