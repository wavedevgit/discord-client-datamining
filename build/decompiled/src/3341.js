// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Environment: var0
        var0 = global;
        var2 = var0.encodeURIComponent;
        var1 = undefined;
        var0 = arg0;
        var3 = var2.bind(var1)(var0);
        var2 = var3.replace;
        var1 = /[!'()*]/g;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.charCodeAt;
            var0 = 0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.toString;
            var0 = 16;
            var1 = var1.bind(var2)(var0);
            var0 = var1.toUpperCase;
            var1 = var0.bind(var1)();
            var0 = '%';
            var0 = var0 + var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);