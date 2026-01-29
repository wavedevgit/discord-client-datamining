// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function(arg0, arg1, arg2) { // Original name: _construct, environment: var1
        _fun2469: for (var _fun2469_ip = 0;;) switch (_fun2469_ip) {
            case 0:
                var7 = arg0;
                var2 = arg2;
                var4 = undefined;
                var0 = undefined;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun2469_ip = 138;
                    continue _fun2469
                }
            case 39:
                var6 = [null];
                var8 = var6.push;
                var5 = var8.apply;
                var1 = arg1;
                var1 = var5.bind(var8)(var6, var1);
                var5 = var7.bind;
                var1 = var5.apply;
                var1 = var1.bind(var5)(var7, var6);
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var5;
                var1 = new var11[var1](var10);
                var1 = var1 instanceof Object ? var1 : var5;
                if (!var2) {
                    _fun2469_ip = 136;
                    continue _fun2469
                }
            case 105:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = var2.prototype;
                var2 = var3.bind(var4)(var1, var2);
            case 136:
                return var1;
            case 138:
                var1 = global;
                var1 = var1.Reflect;
                var3 = var1.construct;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = null;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [165, 19]);