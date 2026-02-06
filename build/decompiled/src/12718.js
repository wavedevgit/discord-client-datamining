// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
        _fun96987: for (var _fun96987_ip = 0;;) switch (_fun96987_ip) {
            case 0:
                var3 = arg3;
                var0 = arg0;
                var2 = arg1;
                var1 = arg2;
                var11 = var3;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun96987_ip = 24;
                    continue _fun96987
                }
            case 22:
                var11 = {};
            case 24:
                var3 = var11;
                var4 = var3.enumerable;
                var3 = var3.name;
                if (!(var6 === var3)) {
                    _fun96987_ip = 46;
                    continue _fun96987
                }
            case 41:
                var9 = var2;
                _fun96987_ip = 54;
                continue _fun96987;
            case 46:
                var3 = var11;
                var9 = var3.name;
            case 54:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 0;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var1;
                var5 = var7.bind(var6)(var5);
                if (!var5) {
                    _fun96987_ip = 120;
                    continue _fun96987
                }
            case 87:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 1;
                var5 = var8[var5];
                var8 = var7.bind(var6)(var5);
                var7 = var1;
                var5 = var11;
                var5 = var8.bind(var6)(var7, var9, var5);
            case 120:
                var5 = var11;
                var5 = var5.global;
                if (var5) {
                    _fun96987_ip = 283;
                    continue _fun96987
                }
            case 135: // try_start_0
                var5 = var11;
                var8 = var5.unsafe;
                var7 = var0;
                var5 = var2;
                if (var8) {
                    _fun96987_ip = 161;
                    continue _fun96987
                }
            case 155:
                var8 = delete var7[var5];
                _fun96987_ip = 170;
                continue _fun96987;
            case 161:
                var5 = var7[var5];
                if (!var5) {
                    _fun96987_ip = 170;
                    continue _fun96987
                }
            case 168:
                var4 = true;
            case 170: // try_end0
                _fun96987_ip = 174;
                continue _fun96987;
            case 172: // catch_target0
                CatchBlockStart(arg_register = 5);
            case 174:
                var5 = var4;
                if (var5) {
                    _fun96987_ip = 268;
                    continue _fun96987
                }
            case 180:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 3;
                var5 = var8[var5];
                var10 = var7.bind(var6)(var5);
                var9 = var10.f;
                var8 = var0;
                var7 = var2;
                var5 = {};
                var12 = var1;
                var5.value = var12;
                var12 = false;
                var5.enumerable = var12;
                var12 = var11.nonConfigurable;
                var12 = !var12;
                var5.configurable = var12;
                var11 = var11.nonWritable;
                var11 = !var11;
                var5.writable = var11;
                var5 = var9.bind(var10)(var8, var7, var5);
                _fun96987_ip = 327;
                continue _fun96987;
            case 268:
                var8 = var0;
                var7 = var2;
                var5 = var1;
                var8[var7] = var5;
                _fun96987_ip = 327;
                continue _fun96987;
            case 283:
                if (var4) {
                    _fun96987_ip = 320;
                    continue _fun96987
                }
            case 286:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var5 = var4.bind(var6)(var3);
                var4 = var2;
                var3 = var1;
                var3 = var5.bind(var6)(var4, var3);
                _fun96987_ip = 327;
                continue _fun96987;
            case 320:
                var3 = var0;
                var3[var2] = var1;
            case 327:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12687, 12719, 12662, 12715]);