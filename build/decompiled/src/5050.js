// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot2 = var3;
    var1 = function() { // Original name: useBottomSheetContentSizeSetter, environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 1;
        var0 = var4[var0];
        var4 = undefined;
        var3 = var3.bind(var4)(var0);
        var0 = var3.useBottomSheetInternal;
        var0 = var0.bind(var3)();
        var6 = var0.enableDynamicSizing;
        var _closure2_slot0 = var6;
        var5 = var0.animatedContentHeight;
        var _closure2_slot1 = var5;
        var0 = {};
        var3 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun45412: for (var _fun45412_ip = 0;;) switch (_fun45412_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun45412_ip = 27;
                        continue _fun45412
                    }
                case 10:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.setContentSize = var1;
        return var0;
    };
    var2.useBottomSheetContentSizeSetter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4901]);