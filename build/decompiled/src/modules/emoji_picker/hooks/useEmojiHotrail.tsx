// modules/emoji_picker/hooks/useEmojiHotrail.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var1 = function arg0() {
        _fun57480: for (var _fun57480_ip = 0;;) switch (_fun57480_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.topEmojis;
                var3 = var0.newlyAddedEmojis;
                var1 = var0.rowSize;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun57480_ip = 34;
                    continue _fun57480
                }
            case 27:
                var1 = _closure1_slot1;
            case 34:
                var2 = var4.slice;
                var0 = var3.length;
                var1 = var1 - var0;
                var0 = 0;
                var2 = var2.bind(var4)(var0, var1);
                var0 = {};
                var0.visibleTopEmojis = var2;
                var0.visibleNewlyAddedEmojis = var3;
                var1 = var2.concat;
                var1 = var1.bind(var2)(var3);
                var0.allEmojis = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EMOJI_ROW_SIZE;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/hooks/useEmojiHotrail.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getEmojiHotrail = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4744, 2]);