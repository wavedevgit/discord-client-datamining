// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun49486: for (var _fun49486_ip = 0;;) switch (_fun49486_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var5 = var0.length;
                var4 = var1.length;
                if (!(!(var4 > var5))) {
                    _fun49486_ip = 105;
                    continue _fun49486
                }
            case 20:
                if (!(var4 !== var5)) {
                    _fun49486_ip = 99;
                    continue _fun49486
                }
            case 24:
                var2 = 0;
                var6 = var2 < var4;
                var3 = 0;
                if (!var6) {
                    _fun49486_ip = 95;
                    continue _fun49486
                }
            case 35:
                var6 = var1.charCodeAt;
                var8 = var6.bind(var1)(var3);
                var7 = var3;
                if (!(var2 < var5)) {
                    _fun49486_ip = 81;
                    continue _fun49486
                }
            case 53:
                var10 = var0.charCodeAt;
                var9 = parseFloat(var2);
                var6 = var9 + 1;
                var9 = var10.bind(var0)(var9);
                if (!(var9 !== var8)) {
                    _fun49486_ip = 85;
                    continue _fun49486
                }
            case 74:
                var2 = var6;
                if (var2 < var5) {
                    _fun49486_ip = 53;
                    continue _fun49486
                }
            case 81:
                var8 = false;
                return var8;
            case 85:
                var3 = var7 + 1;
                var2 = var6;
                if (var3 < var4) {
                    _fun49486_ip = 35;
                    continue _fun49486
                }
            case 95:
                var2 = true;
                return var2;
            case 99:
                var0 = var1 === var0;
                return var0;
            case 105:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);