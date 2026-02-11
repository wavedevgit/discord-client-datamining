// modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun74553: for (var _fun74553_ip = 0;;) switch (_fun74553_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.label;
                var5 = var0.guildId;
                var4 = var0.emojiCount;
                var3 = var0.emojisDisabled;
                var7 = var0.emojisHidden;
                var1 = var0.isSectionNitroLocked;
                var9 = undefined;
                if (!(var1 === var9)) {
                    _fun74553_ip = 45;
                    continue _fun74553
                }
            case 43:
                var1 = false;
            case 45:
                if (var1) {
                    _fun74553_ip = 68;
                    continue _fun74553
                }
            case 48:
                var0 = global;
                var2 = var0.Array;
                var0 = var2.from;
                var3 = var0.bind(var2)(var3);
                _fun74553_ip = 72;
                continue _fun74553;
            case 68:
                var3 = new Array(0);
            case 72:
                var0 = global;
                var2 = var0.Array;
                var0 = var2.from;
                var2 = var0.bind(var2)(var7);
                var0 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 0;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.EmojiPickerItemType;
                var7 = var7.NATIVE_SECTION;
                var0.type = var7;
                var0.title = var6;
                var0.guildId = var5;
                var0.emojiCount = var4;
                var0.emojisDisabled = var3;
                var0.emojisHidden = var2;
                var0.isSectionNitroLocked = var1;
                var1 = arg1;
                var0.hasPremiumInlineRoadblockHeader = var1;
                var1 = arg2;
                var0.hasPremiumInlineRoadblockFooter = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9366, 2]);