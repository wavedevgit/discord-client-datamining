// design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var4 = var1.onFocus;
        var _closure2_slot0 = var4;
        var5 = var1.onBlur;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var6.bind(var2)(var3);
        var3 = var6.useBottomSheetInternal;
        var2 = true;
        var6 = var3.bind(var6)(var2);
        var _closure2_slot2 = var6;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun48135: for (var _fun48135_ip = 0;;) switch (_fun48135_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun48135_ip = 39;
                        continue _fun48135
                    }
                case 15:
                    var0 = {};
                    var3 = function arg0() {
                        _fun48136: for (var _fun48136_ip = 0;;) switch (_fun48136_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var3 = var1.shouldHandleKeyboardEvents;
                                var2 = var3.set;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun48136_ip = 49;
                                    continue _fun48136
                                }
                            case 35:
                                var2 = _closure2_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 49:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onFocus = var3;
                    var1 = function arg0() {
                        _fun48137: for (var _fun48137_ip = 0;;) switch (_fun48137_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var3 = var1.shouldHandleKeyboardEvents;
                                var2 = var3.set;
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun48137_ip = 49;
                                    continue _fun48137
                                }
                            case 35:
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 49:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onBlur = var1;
                    _fun48135_ip = 62;
                    continue _fun48135;
                case 39:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.onFocus = var3;
                    var2 = _closure2_slot1;
                    var1.onBlur = var2;
                    var0 = var1;
                case 62:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4933, 2]);