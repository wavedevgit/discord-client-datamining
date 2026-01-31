// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var1);
    var0 = 0;
    var4 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var4 = var1.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var1 = 1;
    var5 = var5[var1];
    var1 = require;
    var1 = var1.bind(var0)(var5);
    var1 = var1.jsx;
    var _closure1_slot1 = var1;
    var1 = var4.createContext;
    var1 = var1.bind(var4)(var0);
    var _closure1_slot2 = var1;
    var3 = function(arg0) { // Original name: EnsureSingleNavigator, environment: var3
        var0 = arg0;
        var0 = var0.children;
        var5 = _closure1_slot0;
        var3 = var5.useRef;
        var3 = var3.bind(var5)();
        var _closure2_slot0 = var3;
        var4 = var5.useMemo;
        var3 = function() { // Environment: var2
            var0 = {};
            var2 = function(arg0) { // Original name: register, environment: var1
                _fun17152: for (var _fun17152_ip = 0;;) switch (_fun17152_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure2_slot0;
                        var3 = var0.current;
                        var0 = undefined;
                        if (!(var0 !== var3)) {
                            _fun17152_ip = 25;
                            continue _fun17152
                        }
                    case 21:
                        if (!(var2 === var3)) {
                            _fun17152_ip = 37;
                            continue _fun17152
                        }
                    case 25:
                        var1 = _closure2_slot0;
                        var1.current = var2;
                        return var0;
                    case 37:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = 'Another navigator is already registered for this container. You likely have multiple navigators under a single "NavigationContainer" or "Screen". Make sure each navigator is under a separate "Screen" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.';
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var0.register = var2;
            var1 = function(arg0) { // Original name: unregister, environment: var1
                _fun17153: for (var _fun17153_ip = 0;;) switch (_fun17153_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = arg0;
                        if (!(var1 === var2)) {
                            _fun17153_ip = 31;
                            continue _fun17153
                        }
                    case 19:
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1.current = var0;
                    case 31:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.unregister = var1;
            return var0;
        };
        var2 = new Array(0);
        var4 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var2 = var1.Provider;
        var1 = {};
        var1.value = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var3;
    var2.SingleNavigatorContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33]);