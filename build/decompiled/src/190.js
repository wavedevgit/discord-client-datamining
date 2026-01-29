// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: isNativeFunction, environment: var0
        _fun2650: for (var _fun2650_ip = 0;;) switch (_fun2650_ip) {
            case 0:
                var2 = arg0;
                var1 = 'function';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun2650_ip = 53;
                    continue _fun2650
                }
            case 17:
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = var3.indexOf;
                var1 = '[native code]';
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                var0 = var2 > var1;
            case 53:
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.isNativeFunction = var2;
    var0 = function(arg0, arg1) { // Original name: hasNativeConstructor, environment: var0
        _fun2651: for (var _fun2651_ip = 0;;) switch (_fun2651_ip) {
            case 0:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.getPrototypeOf;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var3 = var0.constructor;
                var1 = var3.name;
                var0 = arg1;
                var0 = var1 === var0;
                if (!var0) {
                    _fun2651_ip = 56;
                    continue _fun2651
                }
            case 42:
                var2 = _closure1_slot0;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 56:
                return var0;
        }
    };
    var1.hasNativeConstructor = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);