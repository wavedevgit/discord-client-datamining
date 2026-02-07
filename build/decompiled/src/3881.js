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
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var5 = var3.useEffect;
    var _closure1_slot0 = var5;
    var3 = var3.useRef;
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var10 = var4;
    var3 = new var10[var3](var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun35021: for (var _fun35021_ip = 0;;) switch (_fun35021_ip) {
            case 0:
                var6 = arg0;
                var4 = undefined;
                var2 = undefined;
                var _closure2_slot0 = var6;
                var3 = arguments.length;
                var0 = 1;
                var3 = var3 > var0;
                if (!var3) {
                    _fun35021_ip = 34;
                    continue _fun35021
                }
            case 26:
                var5 = arguments[var0];
                var3 = var4 !== var5;
            case 34:
                var5 = !var3;
                if (!var3) {
                    _fun35021_ip = 44;
                    continue _fun35021
                }
            case 40:
                var5 = arguments[var0];
            case 44:
                var3 = _closure1_slot1;
                var0 = {};
                var7 = function arg0() {
                    var1 = arg0;
                    var4 = _closure1_slot2;
                    var3 = var4.manageStateFrameCallback;
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var2 = var2.callbackId;
                    var2 = var3.bind(var4)(var2, var1);
                    var0 = _closure2_slot1;
                    var0 = var0.current;
                    var0.isActive = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.setActive = var7;
                var0.isActive = var5;
                var7 = -1;
                var0.callbackId = var7;
                var0 = var3.bind(var4)(var0);
                var _closure2_slot1 = var0;
                var3 = _closure1_slot0;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var5 = _closure1_slot2;
                    var4 = var5.registerFrameCallback;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var3.callbackId = var2;
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = var3.setActive;
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var1 = var1.isActive;
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot2;
                        var2 = var3.unregisterFrameCallback;
                        var1 = _closure3_slot0;
                        var0 = var1.callbackId;
                        var0 = var2.bind(var3)(var0);
                        var0 = -1;
                        var1.callbackId = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0 = var0.current;
                return var0;
        }
    };
    var2.useFrameCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3882]);