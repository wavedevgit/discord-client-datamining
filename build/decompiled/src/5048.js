// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useCallback;
    var _closure1_slot0 = var4;
    var4 = var3.useEffect;
    var _closure1_slot1 = var4;
    var4 = var3.useLayoutEffect;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var3 = undefined;
        var2 = var2.bind(var3)(var3);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot2;
        var2 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var4.bind(var3)(var2);
        var5 = _closure1_slot1;
        var4 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var1 = _closure2_slot1;
                var0 = undefined;
                var1.current = var0;
                return var0;
            };
            return var0;
        };
        var2 = new Array(0);
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot0;
        var1 = function() { // Environment: var0
            _fun45422: for (var _fun45422_ip = 0;;) switch (_fun45422_ip) {
                case 0:
                    var3 = undefined;
                    var2 = arguments.length;
                    var1 = global;
                    var1 = var1.Array;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var8 = var4;
                    var7 = var2;
                    var1 = new var8[var1](var7, var6);
                    var4 = var1 instanceof Object ? var1 : var4;
                    var1 = 0;
                    var5 = var1 < var2;
                    if (!var5) {
                        _fun45422_ip = 60;
                        continue _fun45422
                    }
                case 45:
                    var5 = arguments[var1];
                    var4[var1] = var5;
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun45422_ip = 45;
                        continue _fun45422
                    }
                case 60:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 == var3;
                    var0 = undefined;
                    if (var2) {
                        _fun45422_ip = 103;
                        continue _fun45422
                    }
                case 83:
                    var3 = _closure2_slot1;
                    var2 = var3.current;
                    var1 = var2.apply;
                    var0 = var1.bind(var2)(var3, var4);
                case 103:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useStableCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);