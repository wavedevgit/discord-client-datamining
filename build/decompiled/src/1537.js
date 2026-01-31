// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.memo;
    var3 = function(arg0) { // Original name: StaticContainer, environment: var1
        var0 = arg0;
        var0 = var0.children;
        return var0;
    };
    var1 = function(arg0, arg1) { // Environment: var1
        _fun17452: for (var _fun17452_ip = 0;;) switch (_fun17452_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var4 = var8;
                var5 = var7;
                var3 = undefined;
                var6 = undefined;
                var1 = global;
                var2 = var1.Object;
                var0 = var2.keys;
                var0 = var0.bind(var2)(var8);
                var2 = var1.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var7);
                var2 = var0.length;
                var1 = var1.length;
                if (!(var2 === var1)) {
                    _fun17452_ip = 133;
                    continue _fun17452
                }
            case 64:
                var2 = var0;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var0 = 'children';
            case 74:
                var7 = var2().value;
                var8 = var1;
                if (!(var8 !== var3)) {
                    _fun17452_ip = 129;
                    continue _fun17452
                }
            case 85: // try_start_0
                var6 = var7;
                if (!(var0 !== var7)) {
                    _fun17452_ip = 113;
                    continue _fun17452
                }
            case 92:
                var7 = var4;
                var9 = var6;
                var8 = var7[var9];
                var7 = var5;
                var7 = var7[var9];
                if (!(var8 === var7)) {
                    _fun17452_ip = 115;
                    continue _fun17452
                }
            case 113: // try_end0
                _fun17452_ip = 74;
                continue _fun17452;
            case 115:
                var1.return();
                var0 = false;
                return var0;
            case 122: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 129:
                var0 = true;
                return var0;
            case 133:
                var0 = false;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var3, var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);