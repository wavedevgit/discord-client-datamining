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
        var1 = arg0;
        var6 = var1.router;
        var _closure2_slot0 = var6;
        var8 = var1.getState;
        var _closure2_slot1 = var8;
        var4 = var1.key;
        var _closure2_slot2 = var4;
        var5 = var1.setState;
        var _closure2_slot3 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useContext;
        var9 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 1;
        var7 = var7[var1];
        var1 = undefined;
        var1 = var9.bind(var1)(var7);
        var1 = var2.bind(var3)(var1);
        var7 = var1.onRouteFocus;
        var _closure2_slot4 = var7;
        var2 = var3.useCallback;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun17395: for (var _fun17395_ip = 0;;) switch (_fun17395_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var5 = _closure2_slot0;
                    var4 = var5.getStateForRouteFocus;
                    var3 = arg0;
                    var3 = var4.bind(var5)(var2, var3);
                    if (!(var3 !== var2)) {
                        _fun17395_ip = 45;
                        continue _fun17395
                    }
                case 36:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var0)(var3);
                case 45:
                    var2 = _closure2_slot4;
                    var2 = var0 !== var2;
                    if (!var2) {
                        _fun17395_ip = 64;
                        continue _fun17395
                    }
                case 56:
                    var3 = _closure2_slot2;
                    var2 = var0 !== var3;
                case 64:
                    if (!var2) {
                        _fun17395_ip = 80;
                        continue _fun17395
                    }
                case 67:
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var0)(var1);
                case 80:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1491]);