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
    var0 = function(arg0) { // Original name: flatten, environment: var0
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var3 = function(arg0) { // Original name: flattenHelper, environment: var1
            var2 = arg0;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun58491: for (var _fun58491_ip = 0;;) switch (_fun58491_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = global;
                        var1 = var0.Array;
                        var0 = var1.isArray;
                        var1 = var0.bind(var1)(var2);
                        if (var1) {
                            _fun58491_ip = 43;
                            continue _fun58491
                        }
                    case 27:
                        var3 = _closure2_slot0;
                        var1 = var3.push;
                        var1 = var1.bind(var3)(var2);
                        _fun58491_ip = 54;
                        continue _fun58491;
                    case 43:
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 54:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var _closure2_slot1 = var3;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        return var0;
    };
    var1.flatten = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);