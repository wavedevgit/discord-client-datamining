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
        _fun98025: for (var _fun98025_ip = 0;;) switch (_fun98025_ip) {
            case 0:
                var4 = arg0;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                var5 = undefined;
                var0 = undefined;
            case 13: // try_start_0
                var6 = var4;
                if (var6) {
                    _fun98025_ip = 23;
                    continue _fun98025
                }
            case 19: // try_end0
                var6 = null;
                return var6;
            case 23: // try_start_1
                var6 = var4;
                var6 = var6.reactNativeVersion;
                if (var6) {
                    _fun98025_ip = 39;
                    continue _fun98025
                }
            case 35: // try_end1
                var6 = null;
                return var6;
            case 39: // try_start_2
                var6 = var4;
                var4 = var6.reactNativeVersion;
                var4 = var4.major;
                var3 = var4;
                var7 = var6.reactNativeVersion;
                var2 = var7.minor;
                var7 = var6.reactNativeVersion;
                var1 = var7.patch;
                var6 = var6.reactNativeVersion;
                var5 = var6.prerelease;
                var6 = 'number';
                var4 = typeof var4;
                if (!(var6 === var4)) {
                    _fun98025_ip = 221;
                    continue _fun98025
                }
            case 104:
                var6 = new Array(0);
                var0 = var6;
                var4 = var6.push;
                var15 = var3;
                var13 = var2;
                var11 = var1;
                var1 = global;
                var2 = var1.HermesInternal;
                var7 = var2.concat;
                var2 = '';
                var3 = '.';
                var16 = var2;
                var14 = var3;
                var12 = var3;
                var3 = var16[var7](var15, var14, var13, var12, var11, var10);
                var3 = var4.bind(var6)(var3);
                var3 = var5;
                if (!var3) {
                    _fun98025_ip = 206;
                    continue _fun98025
                }
            case 170:
                var4 = var0;
                var3 = var4.push;
                var6 = var5;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = '-';
                var1 = var5.bind(var1)(var6);
                var1 = var3.bind(var4)(var1);
            case 206:
                var1 = var0;
                var0 = var1.join;
                var0 = var0.bind(var1)(var2);
            case 219: // try_end2
                return var0;
            case 221:
                var0 = null;
                return var0;
            case 225: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var1.getReactNativeVersionWithModules = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);