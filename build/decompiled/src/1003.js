// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var2 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var2 = var0 instanceof Object ? var0 : var1;
            var1 = var2.encode;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot2 = var2;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Uint8Array;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var1);
        var1 = var3.utf8ToBytes;
        var0 = arg0;
        var4 = var1.bind(var3)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot3 = var0;
    var3 = function() {
        _fun10336: for (var _fun10336_ip = 0;;) switch (_fun10336_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var2 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var2 = var5.getSentryCarrier;
                var2 = var2.bind(var5)();
                var5 = 1;
                var3 = var3[var5];
                var3 = var4.bind(var0)(var3);
                var3 = var3.RN_GLOBAL_OBJ;
                var3 = var3.TextEncoder;
                if (var3) {
                    _fun10336_ip = 73;
                    continue _fun10336
                }
            case 61:
                var3 = _closure1_slot3;
                var2.encodePolyfill = var3;
                _fun10336_ip = 117;
                continue _fun10336;
            case 73:
                var3 = _closure1_slot2;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var0)(var1);
                var1 = var1.RN_GLOBAL_OBJ;
                var1 = var1.TextEncoder;
                var1 = var3.bind(var0)(var1);
                var2.encodePolyfill = var1;
            case 117:
                return var0;
        }
    };
    var1.useEncodePolyfill = var3;
    var1.globalEncodeFactory = var2;
    var1.encodePolyfill = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1002, 816, 1004]);