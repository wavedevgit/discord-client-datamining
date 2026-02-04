// modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun68695: for (var _fun68695_ip = 0;;) switch (_fun68695_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.emojiId;
                var0 = null;
                var1 = var0 == var4;
                var3 = undefined;
                var0 = undefined;
                if (var1) {
                    _fun68695_ip = 75;
                    continue _fun68695
                }
            case 22:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getEmojiURL;
                var1 = {};
                var1.id = var4;
                var4 = false;
                var1.animated = var4;
                var4 = arg1;
                var1.size = var4;
                var0 = var2.bind(var3)(var1);
            case 75:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1417, 2]);