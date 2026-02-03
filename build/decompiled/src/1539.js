// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.render;
        var1 = var0.children;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot0;
        var1 = var2.useRef;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot0 = var1;
        var1.current = var3;
        var3 = var2.useEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = null;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var2.useRef;
        var0 = function(arg0) { // Environment: var0
            _fun17460: for (var _fun17460_ip = 0;;) switch (_fun17460_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.children;
                    var1 = _closure2_slot0;
                    var4 = var1.current;
                    var1 = null;
                    if (!(var1 !== var4)) {
                        _fun17460_ip = 58;
                        continue _fun17460
                    }
                case 26:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = {};
                    var1.render = var4;
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                case 58:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = 'The returned component must be rendered in the same render phase as the hook.';
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = var0.current;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33]);