// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = exports;
    var1 = global;
    var4 = var1.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var1 = true;
    var2.value = var1;
    var1 = '__esModule';
    var1 = var3.bind(var4)(var0, var1, var2);
    var1 = function(arg0) { // Original name: buildFormatLongFn, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun19192: for (var _fun19192_ip = 0;;) switch (_fun19192_ip) {
                case 0:
                    var3 = undefined;
                    var2 = undefined;
                    var0 = arguments.length;
                    var1 = 0;
                    if (!(var0 > var1)) {
                        _fun19192_ip = 21;
                        continue _fun19192
                    }
                case 13:
                    var0 = arguments[var1];
                    if (!(var3 === var0)) {
                        _fun19192_ip = 25;
                        continue _fun19192
                    }
                case 21:
                    var0 = {};
                    _fun19192_ip = 29;
                    continue _fun19192;
                case 25:
                    var0 = arguments[var1];
                case 29:
                    var1 = var0.width;
                    if (var1) {
                        _fun19192_ip = 52;
                        continue _fun19192
                    }
                case 37:
                    var1 = _closure2_slot0;
                    var2 = var1.defaultWidth;
                    _fun19192_ip = 70;
                    continue _fun19192;
                case 52:
                    var1 = global;
                    var1 = var1.String;
                    var0 = var0.width;
                    var2 = var1.bind(var3)(var0);
                case 70:
                    var0 = _closure2_slot0;
                    var0 = var0.formats;
                    var0 = var0[var2];
                    if (var0) {
                        _fun19192_ip = 110;
                        continue _fun19192
                    }
                case 90:
                    var1 = _closure2_slot0;
                    var2 = var1.formats;
                    var1 = var1.defaultWidth;
                    var0 = var2[var1];
                case 110:
                    return var0;
            }
        };
        return var0;
    };
    var0.default = var1;
    var1 = var0.default;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);