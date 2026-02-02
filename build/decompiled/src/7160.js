// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0() {
        _fun58788: for (var _fun58788_ip = 0;;) switch (_fun58788_ip) {
            case 0:
                var14 = arg0;
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var0 = {};
                var1 = var14.length;
                var10 = 0;
                var1 = var10 < var1;
                var9 = 1;
                var8 = global;
                var7 = '%';
                var6 = -1;
                var5 = 34;
                var4 = ';';
                var3 = '=';
                var2 = 0;
                if (!var1) {
                    _fun58788_ip = 303;
                    continue _fun58788
                }
            case 56:
                var1 = var14.indexOf;
                var15 = var1.bind(var14)(var3, var2);
                var17 = var2;
                if (!(var6 !== var15)) {
                    _fun58788_ip = 303;
                    continue _fun58788
                }
            case 78:
                var1 = var14.indexOf;
                var1 = var1.bind(var14)(var4, var17);
                if (!(var6 !== var1)) {
                    _fun58788_ip = 123;
                    continue _fun58788
                }
            case 94:
                if (!(var1 < var15)) {
                    _fun58788_ip = 128;
                    continue _fun58788
                }
            case 98:
                var18 = var14.lastIndexOf;
                var16 = var15 - var9;
                var16 = var18.bind(var14)(var4, var16);
                var2 = var16 + var9;
                _fun58788_ip = 291;
                continue _fun58788;
            case 123:
                var1 = var14.length;
            case 128:
                var16 = var14.slice;
                var17 = var16.bind(var14)(var17, var15);
                var16 = var17.trim;
                var17 = var16.bind(var17)();
                var12 = var17;
                var16 = var0;
                var16 = var16[var17];
                if (!(var11 === var16)) {
                    _fun58788_ip = 287;
                    continue _fun58788
                }
            case 166:
                var16 = var14.slice;
                var15 = var15 + var9;
                var16 = var16.bind(var14)(var15, var1);
                var15 = var16.trim;
                var16 = var15.bind(var16)();
                var13 = var16;
                var15 = var16.charCodeAt;
                var15 = var15.bind(var16)(var10);
                if (!(var5 === var15)) {
                    _fun58788_ip = 223;
                    continue _fun58788
                }
            case 209:
                var16 = var13;
                var15 = var16.slice;
                var13 = var15.bind(var16)(var9, var6);
            case 223: // try_start_0
                var17 = var0;
                var16 = var12;
                var18 = var13;
                var15 = var18.indexOf;
                var15 = var15.bind(var18)(var7);
                if (!(var6 === var15)) {
                    _fun58788_ip = 252;
                    continue _fun58788
                }
            case 247:
                var15 = var13;
                _fun58788_ip = 266;
                continue _fun58788;
            case 252:
                var19 = var8.decodeURIComponent;
                var18 = var13;
                var15 = var19.bind(var11)(var18);
            case 266:
                var17[var16] = var15;
            case 270: // try_end0
                _fun58788_ip = 287;
                continue _fun58788;
            case 272: // catch_target0
                CatchBlockStart(arg_register = 15);
                var17 = var0;
                var16 = var12;
                var15 = var13;
                var17[var16] = var15;
            case 287:
                var2 = var1 + var9;
            case 291:
                var1 = var14.length;
                if (var2 < var1) {
                    _fun58788_ip = 56;
                    continue _fun58788
                }
            case 303:
                return var0;
        }
    };
    var1.parseCookie = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);