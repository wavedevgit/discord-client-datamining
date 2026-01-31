// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var1 = function() { // Original name: useRegisterNavigator, environment: var1
        _fun17363: for (var _fun17363_ip = 0;;) switch (_fun17363_ip) {
            case 0:
                var6 = _closure1_slot3;
                var3 = var6.useState;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.nanoid;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var3.bind(var6)(var0);
                var4 = _closure1_slot2;
                var3 = undefined;
                var0 = 1;
                var4 = var4.bind(var3)(var5, var0);
                var0 = 0;
                var0 = var4[var0];
                var _closure2_slot0 = var0;
                var5 = var6.useContext;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.SingleNavigatorContext;
                var5 = var5.bind(var6)(var4);
                var _closure2_slot1 = var5;
                if (!(var3 !== var5)) {
                    _fun17363_ip = 128;
                    continue _fun17363
                }
            case 94:
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var5;
                var2[1] = var0;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var3 = var2.register;
                    var2 = var2.unregister;
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            case 128:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = "Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.";
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1478, 1495]);