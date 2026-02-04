// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94848: for (var _fun94848_ip = 0;;) switch (_fun94848_ip) {
        case 0:
            var1 = new Array(0);
            var6 = 256;
            var5 = 8;
            var4 = 3988292384.0;
            var3 = 1;
            var2 = 0;
        case 30:
            var10 = var2;
            var9 = 0;
        case 35:
            var8 = var3 & var10;
            var11 = var10 >>> var3;
            if (var8) {
                _fun94848_ip = 51;
                continue _fun94848
            }
        case 46:
            var8 = var11;
            _fun94848_ip = 55;
            continue _fun94848;
        case 51:
            var8 = var4 ^ var11;
        case 55:
            var9 = var9 + 1;
            var10 = var8;
            if (var9 < var5) {
                _fun94848_ip = 35;
                continue _fun94848
            }
        case 65:
            var1[var2] = var8;
            var2 = var2 + 1;
            if (var2 < var6) {
                _fun94848_ip = 30;
                continue _fun94848
            }
        case 76:
            var _closure1_slot0 = var1;
            var1 = function arg0, arg1, arg2, arg3() {
                _fun94849: for (var _fun94849_ip = 0;;) switch (_fun94849_ip) {
                    case 0:
                        var7 = arg1;
                        var6 = arg3;
                        var5 = _closure1_slot0;
                        var0 = arg2;
                        var4 = var6 + var0;
                        var1 = arg0;
                        var0 = -1;
                        var1 = var1 ^ var0;
                        var3 = 255;
                        var2 = 8;
                        var0 = var1;
                        if (!(var6 < var4)) {
                            _fun94849_ip = 80;
                            continue _fun94849
                        }
                    case 46:
                        var8 = var7[var6];
                        var8 = var1 ^ var8;
                        var8 = var3 & var8;
                        var9 = var5[var8];
                        var8 = var1 >>> var2;
                        var1 = var8 ^ var9;
                        var6 = var6 + 1;
                        var0 = var1;
                        if (var6 < var4) {
                            _fun94849_ip = 46;
                            continue _fun94849
                        }
                    case 80:
                        var0 = ~var0;
                        return var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);