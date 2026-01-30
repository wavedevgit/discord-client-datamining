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
    var0 = function(arg0) { // Original name: isHardCrash, environment: var0
        _fun10343: for (var _fun10343_ip = 0;;) switch (_fun10343_ip) {
            case 0:
                var1 = arg0;
                var4 = undefined;
                var5 = undefined;
                var2 = 'string';
                var0 = typeof var1;
                if (!(var2 !== var0)) {
                    _fun10343_ip = 57;
                    continue _fun10343
                }
            case 18:
                var0 = 'exception';
                var0 = var0 in var1;
                if (!var0) {
                    _fun10343_ip = 57;
                    continue _fun10343
                }
            case 29:
                var2 = var1.exception;
                var3 = null;
                var0 = undefined;
                if (!(var3 !== var2)) {
                    _fun10343_ip = 54;
                    continue _fun10343
                }
            case 43:
                var0 = undefined;
                if (!(var0 !== var2)) {
                    _fun10343_ip = 54;
                    continue _fun10343
                }
            case 49:
                var0 = var2.values;
            case 54:
                if (var0) {
                    _fun10343_ip = 63;
                    continue _fun10343
                }
            case 57:
                var0 = new Array(0);
                _fun10343_ip = 74;
                continue _fun10343;
            case 63:
                var1 = var1.exception;
                var0 = var1.values;
            case 74:
                var3 = var0;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
                var1 = 'onerror';
                var0 = false;
            case 86:
                var6 = var3().value;
                var7 = var2;
                if (!(var7 !== var4)) {
                    _fun10343_ip = 162;
                    continue _fun10343
                }
            case 97: // try_start_0
                var5 = var6;
                var6 = var6.mechanism;
                if (!var6) {
                    _fun10343_ip = 146;
                    continue _fun10343
                }
            case 109:
                var6 = var5;
                var6 = var6.mechanism;
                var6 = var6.handled;
                if (!(var0 === var6)) {
                    _fun10343_ip = 146;
                    continue _fun10343
                }
            case 128:
                var6 = var5;
                var6 = var6.mechanism;
                var6 = var6.type;
                if (!(var1 !== var6)) {
                    _fun10343_ip = 148;
                    continue _fun10343
                }
            case 146: // try_end0
                _fun10343_ip = 86;
                continue _fun10343;
            case 148:
                var2.return();
                var1 = true;
                return var1;
            case 155: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 162:
                return var0;
        }
    };
    var1.isHardCrash = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);