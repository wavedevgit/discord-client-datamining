// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function(arg0) { // Original name: fromEntries, environment: var1
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun17195: for (var _fun17195_ip = 0;;) switch (_fun17195_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot0;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = 2;
                    var2 = var4.bind(var3)(var2, var1);
                    var1 = 0;
                    var4 = var2[var1];
                    var1 = 1;
                    var1 = var2[var1];
                    var2 = var0.hasOwnProperty;
                    var2 = var2.bind(var0)(var4);
                    if (var2) {
                        _fun17195_ip = 57;
                        continue _fun17195
                    }
                case 51:
                    var0[var4] = var1;
                    return var0;
                case 57:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = "A value for key '";
                    var0 = "' already exists in the object.";
                    var6 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);