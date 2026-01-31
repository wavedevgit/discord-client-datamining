// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        var0 = {};
        var _closure2_slot0 = var0;
        var2 = arg0;
        var3 = var2.supportedCommands;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var _closure3_slot0 = var2;
            var1 = _closure2_slot0;
            var0 = function(arg0) { // Environment: var0
                _fun1616: for (var _fun1616_ip = 0;;) switch (_fun1616_ip) {
                    case 0:
                        var0 = undefined;
                        var6 = undefined;
                        var4 = arguments.length;
                        var1 = global;
                        var7 = var1.Array;
                        var2 = 1;
                        var5 = var4 > var2;
                        var3 = 0;
                        var1 = 0;
                        if (!var5) {
                            _fun1616_ip = 33;
                            continue _fun1616
                        }
                    case 29:
                        var1 = var4 - var2;
                    case 33:
                        var5 = var7.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = var5;
                        var11 = var1;
                        var1 = new var12[var7](var11, var10);
                        var5 = var1 instanceof Object ? var1 : var5;
                        var7 = var2 < var4;
                        var1 = var2;
                        if (!var7) {
                            _fun1616_ip = 85;
                            continue _fun1616
                        }
                    case 66:
                        var8 = var1 - var2;
                        var7 = arguments[var1];
                        var5[var8] = var7;
                        var1 = var1 + 1;
                        if (var1 < var4) {
                            _fun1616_ip = 66;
                            continue _fun1616
                        }
                    case 85:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.dispatchCommand;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2, var5);
                        return var0;
                }
            };
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [117]);