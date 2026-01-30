// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var0 = function(arg0) { // Original name: getPossibleEventMessages, environment: var0
        _fun9354: for (var _fun9354_ip = 0;;) switch (_fun9354_ip) {
            case 0:
                var3 = arg0;
                var2 = var3;
                var1 = undefined;
                var0 = new Array(0);
                var3 = var3.message;
                if (!var3) {
                    _fun9354_ip = 41;
                    continue _fun9354
                }
            case 20:
                var5 = var0;
                var4 = var5.push;
                var3 = var2;
                var3 = var3.message;
                var3 = var4.bind(var5)(var3);
            case 41: // try_start_0
                var3 = var2.exception;
                var3 = var3.values;
                var2 = var2.exception;
                var2 = var2.values;
                var4 = var2.length;
                var2 = 1;
                var2 = var4 - var2;
                var4 = var3[var2];
                var1 = var4;
                var3 = null;
                var3 = var3 != var4;
                var2 = var3;
                if (!var3) {
                    _fun9354_ip = 102;
                    continue _fun9354
                }
            case 94:
                var3 = var1;
                var2 = var3.value;
            case 102:
                if (!var2) {
                    _fun9354_ip = 187;
                    continue _fun9354
                }
            case 105:
                var5 = var0;
                var4 = var5.push;
                var2 = var1;
                var3 = var2.value;
                var3 = var4.bind(var5)(var3);
                var2 = var2.type;
                if (!var2) {
                    _fun9354_ip = 187;
                    continue _fun9354
                }
            case 134:
                var3 = var0;
                var2 = var3.push;
                var7 = var1.type;
                var6 = var1.value;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = '';
                var1 = ': ';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
            case 187: // try_end0
                _fun9354_ip = 191;
                continue _fun9354;
            case 189: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 191:
                return var0;
        }
    };
    var1.getPossibleEventMessages = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);