// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7009: for (var _fun7009_ip = 0;;) switch (_fun7009_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var0 = global;
            var0 = var0.Object;
            var0 = var0.prototype;
            var2 = var0.hasOwnProperty;
            var _closure1_slot0 = var2;
            var0 = var0.toString;
            var _closure1_slot1 = var0;
            var3 = 0;
            var2 = var5[var3];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var2 = undefined;
            if (!var6) {
                _fun7009_ip = 73;
                continue _fun7009
            }
        case 58:
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var2 = var3.toStringTag;
        case 73:
            var _closure1_slot2 = var2;
            var2 = function(arg0) { // Original name: getRawTag, environment: var1
                _fun7010: for (var _fun7010_ip = 0;;) switch (_fun7010_ip) {
                    case 0:
                        var7 = arg0;
                        var3 = var7;
                        var8 = undefined;
                        var4 = undefined;
                        var1 = undefined;
                        var5 = undefined;
                        var0 = undefined;
                        var10 = _closure1_slot0;
                        var9 = var10.call;
                        var6 = _closure1_slot2;
                        var4 = var9.bind(var10)(var7, var6);
                        var6 = _closure1_slot2;
                        var1 = var7[var6];
                    case 46: // try_start_0
                        var7 = var3;
                        var6 = _closure1_slot2;
                        var7[var6] = var8;
                        var5 = true;
                    case 59: // try_end0
                        _fun7010_ip = 63;
                        continue _fun7010;
                    case 61: // catch_target0
                        CatchBlockStart(arg_register = 6);
                    case 63:
                        var8 = _closure1_slot1;
                        var7 = var8.call;
                        var6 = var3;
                        var0 = var7.bind(var8)(var6);
                        if (!var5) {
                            _fun7010_ip = 100;
                            continue _fun7010
                        }
                    case 83:
                        var2 = _closure1_slot2;
                        if (var4) {
                            _fun7010_ip = 96;
                            continue _fun7010
                        }
                    case 90:
                        var4 = delete var3[var2];
                        _fun7010_ip = 100;
                        continue _fun7010;
                    case 96:
                        var3[var2] = var1;
                    case 100:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [600]);