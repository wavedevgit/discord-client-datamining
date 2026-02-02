// design/components/Sheet/native/useBottomSheetRef.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/useBottomSheetRef.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var2 = var4.useRef;
        var1 = null;
        var2 = var2.bind(var4)(var1);
        var _closure2_slot0 = var2;
        var3 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var2;
        var0 = function() { // Environment: var0
            _fun50741: for (var _fun50741_ip = 0;;) switch (_fun50741_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = var0.current;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun50741_ip = 28;
                        continue _fun50741
                    }
                case 18:
                    var0 = var1.closeActionSheet;
                    var0 = var0.bind(var1)();
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.bottomSheetRef = var2;
        var0.bottomSheetClose = var1;
        return var0;
    };
    var2.useBottomSheetRef = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);