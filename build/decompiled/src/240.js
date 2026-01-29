// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: __fetchSegment, environment: var0
        var0 = arg2;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var5 = var2.default;
        var4 = var5.fetchSegment;
        var3 = arg0;
        var2 = arg1;
        var1 = function(arg0) { // Environment: var1
            _fun3259: for (var _fun3259_ip = 0;;) switch (_fun3259_ip) {
                case 0:
                    var0 = arg0;
                    if (var0) {
                        _fun3259_ip = 24;
                        continue _fun3259
                    }
                case 6:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = null;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                case 24:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = var0.message;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var0 = var0.code;
                    var2.code = var0;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var0 = arg0;
    var0.__fetchSegment = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [241]);