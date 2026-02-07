// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.useState;
    var _closure1_slot3 = var4;
    var3 = var3.useCallback;
    var _closure1_slot4 = var3;
    var1 = function arg0() {
        var3 = _closure1_slot3;
        var4 = undefined;
        var0 = arg0;
        var3 = var3.bind(var4)(var0);
        var0 = _closure1_slot2;
        var6 = 2;
        var5 = var0.bind(var4)(var3, var6);
        var0 = 0;
        var3 = var5[var0];
        var0 = 1;
        var0 = var5[var0];
        var _closure2_slot0 = var0;
        var5 = _closure1_slot0;
        var0 = _closure1_slot1;
        var0 = var0[var6];
        var5 = var5.bind(var4)(var0);
        var0 = var5.useRecyclerViewContext;
        var5 = var0.bind(var5)();
        var _closure2_slot1 = var5;
        var0 = new Array(2);
        var0[0] = var3;
        var3 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun45686: for (var _fun45686_ip = 0;;) switch (_fun45686_ip) {
                case 0:
                    var2 = arg1;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var3 = function(arg0) { // Environment: var3
                        _fun45687: for (var _fun45687_ip = 0;;) switch (_fun45687_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = 'function';
                                var0 = typeof var0;
                                if (!(var2 !== var0)) {
                                    _fun45687_ip = 24;
                                    continue _fun45687
                                }
                            case 18:
                                var0 = _closure3_slot0;
                                _fun45687_ip = 38;
                                continue _fun45687;
                            case 24:
                                var3 = _closure3_slot0;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = var3.bind(var2)(var1);
                            case 38:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var0)(var3);
                    if (var2) {
                        _fun45686_ip = 44;
                        continue _fun45686
                    }
                case 34:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var4;
                case 44:
                    if (var2) {
                        _fun45686_ip = 61;
                        continue _fun45686
                    }
                case 47:
                    var2 = _closure2_slot1;
                    var1 = var2.layout;
                    var1 = var1.bind(var2)();
                case 61:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0[1] = var1;
        return var0;
    };
    var2.useLayoutState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 31, 5121]);