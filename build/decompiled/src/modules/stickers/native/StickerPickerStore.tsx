// modules/stickers/native/StickerPickerStore.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.create;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = null;
        var0.packToScrollTo = var2;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.batchUpdates;
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun74509: for (var _fun74509_ip = 0;;) switch (_fun74509_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.packToScrollTo;
                            var1 = _closure3_slot0;
                            if (!(var3 !== var1)) {
                                _fun74509_ip = 34;
                                continue _fun74509
                            }
                        case 20:
                            var1 = {};
                            var2 = _closure3_slot0;
                            var1.packToScrollTo = var2;
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.setPackToScrollTo = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.useStickerPickerStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);