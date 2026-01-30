// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function() { // Original name: _nonIterableRest, environment: var1
        var0 = global;
        var2 = var0.TypeError;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
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