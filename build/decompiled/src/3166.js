// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function arg0() {
        _fun27463: for (var _fun27463_ip = 0;;) switch (_fun27463_ip) {
            case 0:
                var2 = arg0;
                var5 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var2;
                var1 = arguments.length;
                var3 = 1;
                if (!(var1 > var3)) {
                    _fun27463_ip = 31;
                    continue _fun27463
                }
            case 23:
                var1 = arguments[var3];
                if (!(var5 === var1)) {
                    _fun27463_ip = 40;
                    continue _fun27463
                }
            case 31:
                var1 = _closure1_slot3;
                _fun27463_ip = 44;
                continue _fun27463;
            case 40:
                var1 = arguments[var3];
            case 44:
                var _closure2_slot1 = var1;
                var5 = _closure1_slot2;
                var4 = var5.useSyncExternalStore;
                var3 = var2.subscribe;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = var1.getState;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = var1.getInitialState;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var2, var0);
                var2 = _closure1_slot2;
                var1 = var2.useDebugValue;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot3 = var4;
    var4 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.createStore;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var _closure2_slot0 = var3;
        var0 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var1 = global;
        var2 = var1.Object;
        var1 = var2.assign;
        var1 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun27469: for (var _fun27469_ip = 0;;) switch (_fun27469_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot4;
                if (var3) {
                    _fun27469_ip = 18;
                    continue _fun27469
                }
            case 13:
                var0 = var2;
                _fun27469_ip = 25;
                continue _fun27469;
            case 18:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 25:
                return var0;
        }
    };
    var2.create = var3;
    var2.useStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3165]);