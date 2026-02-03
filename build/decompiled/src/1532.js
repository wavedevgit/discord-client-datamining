// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.navigation;
        var _closure2_slot0 = var2;
        var7 = var0.focusedListeners;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot2;
        var5 = var4.useContext;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var5.bind(var4)(var3);
        var6 = var3.addListener;
        var _closure2_slot2 = var6;
        var5 = var4.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun17408: for (var _fun17408_ip = 0;;) switch (_fun17408_ip) {
                case 0:
                    var2 = arg0;
                    var3 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = _closure2_slot0;
                    var0 = var4.isFocused;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun17408_ip = 41;
                        continue _fun17408
                    }
                case 29:
                    var0 = {
                        'handled': false,
                        'result': null
                    };
                    return var0;
                case 41:
                    var7 = _closure2_slot1;
                    var0 = var7;
                    var4 = var0[Symbol.iterator];
                    var0 = var4().next;
                case 51:
                    var8 = var0().value;
                    var7 = var4;
                    if (!(var7 !== var3)) {
                        _fun17408_ip = 114;
                        continue _fun17408
                    }
                case 62: // try_start_0
                    var7 = var2;
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.handled;
                    var6 = var7;
                    var5 = var8.result;
                    if (var7) {
                        _fun17408_ip = 90;
                        continue _fun17408
                    }
                case 88: // try_end0
                    _fun17408_ip = 51;
                    continue _fun17408;
                case 90: // try_start_1
                    var0 = {};
                    var0.handled = var6;
                    var0.result = var5;
                case 102: // try_end1
                    var4.return();
                    return var0;
                case 107: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 0);
                    var4.return();
                    throw var0;
                case 114:
                    var0 = {};
                    var4 = true;
                    var0.handled = var4;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0.result = var1;
                    return var0;
            }
        };
        var5 = var5.bind(var4)(var2, var3);
        var _closure2_slot3 = var5;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun17409: for (var _fun17409_ip = 0;;) switch (_fun17409_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var2 = var0 == var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun17409_ip = 38;
                        continue _fun17409
                    }
                case 20:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = 'focus';
                    var0 = var3.bind(var4)(var1, var2);
                case 38:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1491]);