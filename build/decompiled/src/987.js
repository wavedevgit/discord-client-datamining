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
    var0 = function(arg0, arg1, arg2) { // Original name: replaceExports, environment: var0
        _fun10142: for (var _fun10142_ip = 0;;) switch (_fun10142_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var2 = var6;
                var4 = var5;
                var1 = arg2;
                var0 = undefined;
                var3 = undefined;
                var5 = var6[var5];
                var3 = var5;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun10142_ip = 173;
                    continue _fun10142
                }
            case 40: // try_start_0
                var7 = var2;
                var6 = var4;
                var5 = var1;
                var7[var6] = var5;
            case 53: // try_end0
                _fun10142_ip = 102;
                continue _fun10142;
            case 55: // catch_target0
                CatchBlockStart(arg_register = 5);
                var5 = global;
                var8 = var5.Object;
                var7 = var8.defineProperty;
                var6 = var2;
                var5 = var4;
                var4 = {
                    'value': null,
                    'writable': true,
                    'configurable': true,
                    'enumerable': true
                };
                var9 = var1;
                var4.value = var9;
                var4 = var7.bind(var8)(var6, var5, var4);
            case 102:
                var4 = var2;
                var4 = var4.default;
                if (!(var4 === var3)) {
                    _fun10142_ip = 173;
                    continue _fun10142
                }
            case 114: // try_start_1
                var4 = var2;
                var3 = var1;
                var4.default = var3;
            case 126: // try_end1
                _fun10142_ip = 173;
                continue _fun10142;
            case 128: // catch_target1
                CatchBlockStart(arg_register = 3);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.defineProperty;
                var3 = var2;
                var2 = {
                    'value': null,
                    'writable': true,
                    'configurable': true,
                    'enumerable': true
                };
                var2.value = var1;
                var1 = 'default';
                var1 = var4.bind(var5)(var3, var1, var2);
            case 173:
                return var0;
        }
    };
    var1.replaceExports = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);