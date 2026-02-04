// modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun57423: for (var _fun57423_ip = 0;;) switch (_fun57423_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.emojiStoreInstance;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun57423_ip = 22;
                    continue _fun57423
                }
            case 15:
                var4 = _closure1_slot2;
            case 22:
                var3 = var0.guildId;
                var5 = var0.pickerIntention;
                var0 = {};
                var2 = _closure1_slot3;
                var2 = var2.REACTION;
                if (!(var5 === var2)) {
                    _fun57423_ip = 58;
                    continue _fun57423
                }
            case 52:
                var2 = _closure1_slot4;
                _fun57423_ip = 71;
                continue _fun57423;
            case 58:
                var6 = var4.getTopEmoji;
                var2 = var6.bind(var4)(var3);
            case 71:
                var0.topEmojis = var2;
                var2 = _closure1_slot3;
                var2 = var2.REACTION;
                if (!(var5 === var2)) {
                    _fun57423_ip = 96;
                    continue _fun57423
                }
            case 90:
                var1 = _closure1_slot4;
                _fun57423_ip = 109;
                continue _fun57423;
            case 96:
                var2 = var4.getNewlyAddedEmoji;
                var1 = var2.bind(var4)(var3);
            case 109:
                var0.newlyAddedEmojis = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot3 = var4;
    var4 = new Array(0);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = {};
            var0 = _closure1_slot2;
            var1.emojiStoreInstance = var0;
            var3 = _closure2_slot0;
            var1.guildId = var3;
            var0 = _closure2_slot1;
            var1.pickerIntention = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getTopAndNewlyAddedEmojis = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4737, 1624, 632, 2]);