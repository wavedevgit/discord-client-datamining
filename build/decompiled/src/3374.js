// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun29071: for (var _fun29071_ip = 0;;) switch (_fun29071_ip) {
            case 0:
                var5 = arg0;
                var2 = var5;
                var0 = true;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var4 = false;
                var3 = false;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 !== var5)) {
                    _fun29071_ip = 35;
                    continue _fun29071
                }
            case 33:
                return var4;
            case 35: // try_start_0
                var7 = var2;
                var5 = var7.call;
                var4 = 'f';
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun29072: for (var _fun29072_ip = 0;;) switch (_fun29072_ip) {
                        case 0:
                            var1 = 'object';
                            var0 = arg2;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun29072_ip = 23;
                                continue _fun29072
                            }
                        case 14:
                            var0 = false;
                            _closure2_slot0 = var0;
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var7)(var4, var2);
                var6 = var7.call;
                var5 = [null];
                var4 = function() { // Environment: var1
                    var2 = 'string';
                    var0 = this;
                    var0 = typeof var0;
                    var0 = var2 === var0;
                    _closure2_slot1 = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = 'x';
                var2 = var6.bind(var7)(var5, var4, var2);
            case 89: // try_end0
                _fun29071_ip = 95;
                continue _fun29071;
            case 91: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3 = true;
            case 95:
                var2 = !var3;
                if (var3) {
                    _fun29071_ip = 105;
                    continue _fun29071
                }
            case 101:
                var2 = _closure2_slot0;
            case 105:
                var0 = var2;
                if (!var2) {
                    _fun29071_ip = 115;
                    continue _fun29071
                }
            case 111:
                var0 = _closure2_slot1;
            case 115:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);