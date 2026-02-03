// utils/callOnce.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'utils/callOnce.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = false;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun93285: for (var _fun93285_ip = 0;;) switch (_fun93285_ip) {
                case 0:
                    var7 = 0;
                    var1 = copyRestArgs(var7);
                    var2 = _closure2_slot2;
                    if (var2) {
                        _fun93285_ip = 58;
                        continue _fun93285
                    }
                case 16:
                    var2 = true;
                    _closure2_slot2 = var2;
                    var3 = _closure2_slot0;
                    var2 = new Array(0);
                    var7 = var2;
                    var6 = var1;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    var _closure2_slot1 = var1;
                case 58:
                    var0 = _closure2_slot1;
                    return var0;
            }
        };
        return var0;
    };
    var2.callOnce = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);