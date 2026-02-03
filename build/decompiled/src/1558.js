// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var4.forwardRef;
    var1 = function arg0, arg1() {
        _fun17540: for (var _fun17540_ip = 0;;) switch (_fun17540_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var6 = var1.children;
                var9 = var1.location;
                var7 = _closure1_slot3;
                var5 = var7.useEffect;
                var3 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.error;
                    var0 = "'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.";
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var7)(var3, var1);
                var7 = {};
                var _closure2_slot0 = var7;
                if (!var2) {
                    _fun17540_ip = 92;
                    continue _fun17540
                }
            case 54:
                var1 = {};
                var0 = function() {
                    var0 = _closure2_slot0;
                    var0 = var0.options;
                    return var0;
                };
                var1.getCurrentOptions = var0;
                var3 = 'function';
                var0 = typeof var2;
                if (!(var3 !== var0)) {
                    _fun17540_ip = 85;
                    continue _fun17540
                }
            case 77:
                var2.current = var1;
                _fun17540_ip = 92;
                continue _fun17540;
            case 85:
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 92:
                var3 = _closure1_slot4;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var5.location = var9;
                var0.value = var5;
                var5 = _closure1_slot0;
                var4 = 3;
                var4 = var8[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.CurrentRenderContext;
                var5 = var4.Provider;
                var4 = {};
                var4.value = var7;
                var4.children = var6;
                var4 = var3.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1559, 1472]);