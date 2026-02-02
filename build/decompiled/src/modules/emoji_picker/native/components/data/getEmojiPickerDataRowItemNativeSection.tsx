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
        _fun73889: for (var _fun73889_ip = 0;;) switch (_fun73889_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.label;
                var4 = var0.guildId;
                var3 = var0.emojiCount;
                var6 = var0.emojisDisabled;
                var1 = var0.isSectionNitroLocked;
                var8 = undefined;
                if (!(var1 === var8)) {
                    _fun73889_ip = 39;
                    continue _fun73889
                }
            case 37:
                var1 = false;
            case 39:
                if (var1) {
                    _fun73889_ip = 62;
                    continue _fun73889
                }
            case 42:
                var0 = global;
                var2 = var0.Array;
                var0 = var2.from;
                var2 = var0.bind(var2)(var6);
                _fun73889_ip = 66;
                continue _fun73889;
            case 62:
                var2 = new Array(0);
            case 66:
                var0 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 0;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.EmojiPickerItemType;
                var6 = var6.NATIVE_SECTION;
                var0.type = var6;
                var0.title = var5;
                var0.guildId = var4;
                var0.emojiCount = var3;
                var0.emojisDisabled = var2;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [9253, 2]);