// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun45892: for (var _fun45892_ip = 0;;) switch (_fun45892_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var0 = var10.length;
                var6 = 1;
                var5 = var0 - var6;
                var1 = -1;
                var3 = global;
                var2 = 2;
                var0 = var1;
                var4 = 0;
                if (!(var4 <= var5)) {
                    _fun45892_ip = 190;
                    continue _fun45892
                }
            case 47:
                var13 = var3.Math;
                var12 = var13.floor;
                var11 = var4 + var5;
                var11 = var11 / var2;
                var14 = var12.bind(var13)(var11);
                var11 = var10[var14];
                if (var8) {
                    _fun45892_ip = 86;
                    continue _fun45892
                }
            case 79:
                var16 = var11.y;
                _fun45892_ip = 91;
                continue _fun45892;
            case 86:
                var16 = var11.x;
            case 91:
                if (var8) {
                    _fun45892_ip = 101;
                    continue _fun45892
                }
            case 94:
                var15 = var11.height;
                _fun45892_ip = 106;
                continue _fun45892;
            case 101:
                var15 = var11.width;
            case 106:
                if (var7) {
                    _fun45892_ip = 137;
                    continue _fun45892
                }
            case 109:
                if (!(!(var16 <= var9))) {
                    _fun45892_ip = 125;
                    continue _fun45892
                }
            case 113:
                var11 = var14 - var6;
                var12 = var4;
                var13 = var1;
                _fun45892_ip = 171;
                continue _fun45892;
            case 125:
                var12 = var14 + var6;
                var11 = var5;
                var13 = var14;
                _fun45892_ip = 171;
                continue _fun45892;
            case 137:
                if (!(!(var16 >= var9))) {
                    _fun45892_ip = 161;
                    continue _fun45892
                }
            case 141:
                var15 = var16 + var15;
                if (!(!(var15 > var9))) {
                    _fun45892_ip = 161;
                    continue _fun45892
                }
            case 149:
                var12 = var14 + var6;
                var11 = var5;
                var13 = var1;
                _fun45892_ip = 171;
                continue _fun45892;
            case 161:
                var11 = var14 - var6;
                var12 = var4;
                var13 = var14;
            case 171:
                var4 = var12;
                var5 = var11;
                var1 = var13;
                var0 = var1;
                if (var4 <= var5) {
                    _fun45892_ip = 47;
                    continue _fun45892
                }
            case 190:
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0, arg1, arg2() {
        var5 = _closure1_slot0;
        var10 = undefined;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var6 = true;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.findFirstVisibleIndex = var2;
    var0 = function arg0, arg1, arg2() {
        var5 = _closure1_slot0;
        var10 = undefined;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var6 = false;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.findLastVisibleIndex = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);