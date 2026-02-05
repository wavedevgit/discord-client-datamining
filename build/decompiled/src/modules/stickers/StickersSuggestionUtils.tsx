// modules/stickers/StickersSuggestionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
    var _closure1_slot0 = var0;
    var0 = /(\n|\t|\s)/g;
    var _closure1_slot1 = var0;
    var3 = function arg0() {
        var4 = arg0;
        var3 = var4.replace;
        var2 = _closure1_slot0;
        var1 = '';
        var3 = var3.bind(var4)(var2, var1);
        var2 = var3.replace;
        var1 = _closure1_slot1;
        var0 = ' ';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot2 = var3;
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersSuggestionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.removePunctuation = var3;
    var1 = function(arg0) { // Environment: var1
        _fun38537: for (var _fun38537_ip = 0;;) switch (_fun38537_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun38537_ip = 51;
                    continue _fun38537
                }
            case 9:
                var1 = _closure1_slot2;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var0 = var1.trim;
                var2 = var0.bind(var1)();
                var1 = var2.split;
                var0 = ' ';
                var0 = var1.bind(var2)(var0);
                _fun38537_ip = 55;
                continue _fun38537;
            case 51:
                var0 = new Array(0);
            case 55:
                return var0;
        }
    };
    var2.getQueriesFromUserInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);