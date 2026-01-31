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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0() {
        _fun12006: for (var _fun12006_ip = 0;;) switch (_fun12006_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var2 = var0[var5];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getActiveSpan;
                var2 = var2.bind(var3)();
                var _closure2_slot0 = var2;
                if (!(var2 !== var4)) {
                    _fun12006_ip = 152;
                    continue _fun12006
                }
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var5];
                var6 = var2.bind(var0)(var3);
                var3 = var6.getCurrentScope;
                var3 = var3.bind(var6)();
                var _closure2_slot1 = var3;
                var6 = global;
                var9 = var6.Proxy;
                var11 = var4.end;
                var6 = {};
                var7 = function arg0, arg1, arg2() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3._INTERNAL_setSpanForScope;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = global;
                    var4 = var0.Reflect;
                    var3 = var4.apply;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var6.apply = var7;
                var7 = var9.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = var7;
                var10 = var6;
                var6 = new var12[var9](var11, var10, var9);
                var6 = var6 instanceof Object ? var6 : var7;
                var4.end = var6;
                var1 = var1[var5];
                var2 = var2.bind(var0)(var1);
                var1 = var2._INTERNAL_setSpanForScope;
                var1 = var1.bind(var2)(var3, var4);
            case 152:
                return var0;
        }
    };
    var1.setActiveSpanInBrowser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);