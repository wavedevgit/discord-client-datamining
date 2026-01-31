// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function(arg0) { // Original name: _readOnlyError, environment: var1
        var0 = global;
        var2 = var0.TypeError;
        var1 = '"';
        var0 = arg0;
        var3 = var1 + var0;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var0 = '" is read-only';
        var4 = var3 + var0;
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);