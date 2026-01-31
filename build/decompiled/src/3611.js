// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var1 = var1.Object;
    var1 = var1.create;
    var _closure1_slot2 = var1;
    var1 = function() { // Environment: var0
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun32449: for (var _fun32449_ip = 0;;) switch (_fun32449_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.bind(var1)(var2);
                    if (var3) {
                        _fun32449_ip = 39;
                        continue _fun32449
                    }
                case 35:
                    var3 = {};
                    return var3;
                case 39:
                    var3 = _closure1_slot2;
                    if (var3) {
                        _fun32449_ip = 87;
                        continue _fun32449
                    }
                case 46:
                    var4 = _closure2_slot0;
                    var4.prototype = var2;
                    var3 = var4.prototype;
                    var5 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var5;
                    var3 = new var7[var4](var6);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var4.prototype = var1;
                    return var3;
                case 87:
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        return var0;
    };
    var0 = undefined;
    var2 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [573]);