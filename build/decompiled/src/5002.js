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
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.useCallback;
    var _closure1_slot2 = var3;
    var1 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var1;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun44960: for (var _fun44960_ip = 0;;) switch (_fun44960_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun44960_ip = 110;
                        continue _fun44960
                    }
                case 9:
                    var1 = _closure2_slot0;
                    var1.viewRef = var2;
                    var2 = var1.previousViewTag;
                    var1 = -1;
                    if (!(var1 === var2)) {
                        _fun44960_ip = 84;
                        continue _fun44960
                    }
                case 38:
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 1;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = var2.viewRef;
                    var1 = var3.bind(var4)(var1);
                    var2.previousViewTag = var1;
                case 84:
                    var1 = _closure2_slot0;
                    var1 = var1.firstRender;
                    if (var1) {
                        _fun44960_ip = 110;
                        continue _fun44960
                    }
                case 97:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                case 110:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var2.useViewRefHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4982]);