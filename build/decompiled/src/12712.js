// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.default = var0;
    var1 = function() {
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = {};
            var2 = function arg0, arg1, arg2() {
                _fun97624: for (var _fun97624_ip = 0;;) switch (_fun97624_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = var0;
                        if (!var1) {
                            _fun97624_ip = 14;
                            continue _fun97624
                        }
                    case 9:
                        var1 = var0.status;
                    case 14:
                        if (!var1) {
                            _fun97624_ip = 33;
                            continue _fun97624
                        }
                    case 17:
                        var2 = var0.status;
                        var3 = 'number';
                        var2 = typeof var2;
                        var1 = var3 === var2;
                    case 33:
                        if (!var1) {
                            _fun97624_ip = 48;
                            continue _fun97624
                        }
                    case 36:
                        var3 = var0.status;
                        var2 = 200;
                        var1 = var3 >= var2;
                    case 48:
                        if (!var1) {
                            _fun97624_ip = 66;
                            continue _fun97624
                        }
                    case 51:
                        var3 = var0.status;
                        var2 = 299;
                        var1 = var3 <= var2;
                    case 66:
                        var4 = !var1;
                        var3 = _closure3_slot0;
                        var2 = var3.send;
                        var1 = {};
                        var5 = arg0;
                        var1.request = var5;
                        var1.response = var0;
                        var0 = arg2;
                        var1.duration = var0;
                        var0 = 'api.response';
                        var0 = var2.bind(var3)(var0, var1, var4);
                        var0 = undefined;
                        return var0;
                }
            };
            var1.apiResponse = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);