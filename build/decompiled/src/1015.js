// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var1 = 0;
    var4 = var3[var1];
    var0 = undefined;
    var5 = var2.bind(var0)(var4);
    var4 = module;
    var4.exports = var5;
    var1 = var3[var1];
    var1 = var2.bind(var0)(var1);
    var2 = var1.prototype;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun10375: for (var _fun10375_ip = 0;;) switch (_fun10375_ip) {
            case 0:
                var5 = this;
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var4 = var5;
                if (!var2) {
                    _fun10375_ip = 34;
                    continue _fun10375
                }
            case 16:
                var3 = var5.then;
                var2 = var3.apply;
                var1 = arguments;
                var4 = var2.bind(var3)(var5, var1);
            case 34:
                var3 = var4.then;
                var2 = null;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        throw var0;
                    };
                    var1 = 0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.done = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1016]);