// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function(arg0) { // Original name: useStoreWithEqualityFn, environment: var3
        _fun8564: for (var _fun8564_ip = 0;;) switch (_fun8564_ip) {
            case 0:
                var0 = arg0;
                var4 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var5 = 1;
                if (!(var1 > var5)) {
                    _fun8564_ip = 25;
                    continue _fun8564
                }
            case 17:
                var1 = arguments[var5];
                if (!(var4 === var1)) {
                    _fun8564_ip = 34;
                    continue _fun8564
                }
            case 25:
                var7 = _closure1_slot3;
                _fun8564_ip = 38;
                continue _fun8564;
            case 34:
                var7 = arguments[var5];
            case 38:
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var6 = undefined;
                if (!var3) {
                    _fun8564_ip = 57;
                    continue _fun8564
                }
            case 53:
                var6 = arguments[var1];
            case 57:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var3.bind(var4)(var2);
                var4 = var5.useSyncExternalStoreWithSelector;
                var12 = var0.subscribe;
                var11 = var0.getState;
                var10 = var0.getInitialState;
                var13 = var5;
                var9 = var7;
                var8 = var6;
                var0 = var13[var4](var12, var11, var10, var9, var8, var7);
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
    var4 = function(arg0) { // Original name: identity, environment: var3
        var0 = arg0;
        return var0;
    };
    var _closure1_slot3 = var4;
    var4 = function(arg0, arg1) { // Original name: createWithEqualityFnImpl, environment: var3
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.createStore;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var _closure2_slot1 = var3;
        var0 = function(arg0) { // Original name: useBoundStoreWithEqualityFn, environment: var0
            _fun8567: for (var _fun8567_ip = 0;;) switch (_fun8567_ip) {
                case 0:
                    var4 = undefined;
                    var5 = undefined;
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot1;
                    var6 = arguments.length;
                    var0 = 1;
                    if (!(var6 > var0)) {
                        _fun8567_ip = 36;
                        continue _fun8567
                    }
                case 28:
                    var6 = arguments[var0];
                    if (!(var4 === var6)) {
                        _fun8567_ip = 42;
                        continue _fun8567
                    }
                case 36:
                    var1 = _closure2_slot0;
                    _fun8567_ip = 46;
                    continue _fun8567;
                case 42:
                    var1 = arguments[var0];
                case 46:
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
            }
        };
        var1 = global;
        var2 = var1.Object;
        var1 = var2.assign;
        var1 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var _closure1_slot4 = var4;
    var3 = function(arg0, arg1) { // Original name: createWithEqualityFn, environment: var3
        _fun8568: for (var _fun8568_ip = 0;;) switch (_fun8568_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot4;
                if (var4) {
                    _fun8568_ip = 18;
                    continue _fun8568
                }
            case 13:
                var0 = var3;
                _fun8568_ip = 29;
                continue _fun8568;
            case 18:
                var2 = undefined;
                var1 = arg1;
                var0 = var3.bind(var2)(var4, var1);
            case 29:
                return var0;
        }
    };
    var2.createWithEqualityFn = var3;
    var2.useStoreWithEqualityFn = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 798, 630]);