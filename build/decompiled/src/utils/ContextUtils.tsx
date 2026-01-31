// utils/ContextUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ContextUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: createDefinedContext, environment: var1
        var2 = function() { // Original name: useContext, environment: var1
            _fun74689: for (var _fun74689_ip = 0;;) switch (_fun74689_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = var2.useContext;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun74689_ip = 33;
                        continue _fun74689
                    }
                case 31:
                    return var0;
                case 33:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Context was used outside of defined provider.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = var4.createContext;
        var0 = undefined;
        var3 = var3.bind(var4)(var0);
        var _closure2_slot0 = var3;
        var0 = new Array(3);
        var0[0] = var3;
        var0[1] = var2;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.children;
                var3 = _closure1_slot1;
                var1 = _closure2_slot0;
                var2 = var1.Provider;
                var1 = {};
                var4 = _closure3_slot0;
                var1.value = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            return var0;
        };
        var0[2] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 2]);