// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.Map;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot1 = var2;
    var0 = function(arg0) { // Original name: unstable_hasComponent, environment: var0
        _fun1357: for (var _fun1357_ip = 0;;) switch (_fun1357_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot1;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun1357_ip = 105;
                    continue _fun1357
                }
            case 26:
                var1 = _closure1_slot0;
                var1 = var1.__nativeComponentRegistry__hasComponent;
                if (var1) {
                    _fun1357_ip = 72;
                    continue _fun1357
                }
            case 39:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var3 = "unstable_hasComponent('";
                var1 = "'): Global function is not registered";
                var1 = var5.bind(var3)(var4, var1);
                throw var1;
            case 72:
                var3 = _closure1_slot0;
                var1 = var3.__nativeComponentRegistry__hasComponent;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot1;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 105:
                return var0;
        }
    };
    var1.unstable_hasComponent = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);