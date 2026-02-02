// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = module;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun94339: for (var _fun94339_ip = 0;;) switch (_fun94339_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var0 = arg2;
                var1 = var5.addEventListener;
                var1 = !var1;
                var4 = var2;
                if (!var1) {
                    _fun94339_ip = 32;
                    continue _fun94339
                }
            case 24:
                var1 = 'on';
                var4 = var1 + var2;
            case 32:
                var3 = var5.addEventListener;
                if (var3) {
                    _fun94339_ip = 47;
                    continue _fun94339
                }
            case 41:
                var3 = var5.attachEvent;
            case 47:
                var2 = var3.call;
                var6 = arg3;
                var10 = var3;
                var9 = var5;
                var8 = var4;
                var7 = var0;
                var1 = var10[var2](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var1.exports = var3;
    var2 = var1.exports;
    var2.on = var3;
    var1 = var1.exports;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun94340: for (var _fun94340_ip = 0;;) switch (_fun94340_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var0 = arg2;
                var1 = var5.removeEventListener;
                var1 = !var1;
                var4 = var2;
                if (!var1) {
                    _fun94340_ip = 32;
                    continue _fun94340
                }
            case 24:
                var1 = 'on';
                var4 = var1 + var2;
            case 32:
                var3 = var5.removeEventListener;
                if (var3) {
                    _fun94340_ip = 47;
                    continue _fun94340
                }
            case 41:
                var3 = var5.detachEvent;
            case 47:
                var2 = var3.call;
                var6 = arg3;
                var10 = var3;
                var9 = var5;
                var8 = var4;
                var7 = var0;
                var1 = var10[var2](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var1.off = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);