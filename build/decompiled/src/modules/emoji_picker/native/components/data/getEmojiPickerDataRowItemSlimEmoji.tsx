// modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.EmojiPickerItemType;
        var3 = var3.EMOJI_ROW_SLIM;
        var0.type = var3;
        var4 = var1.emojis;
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var2
            _fun74005: for (var _fun74005_ip = 0;;) switch (_fun74005_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 1;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.EmojiTypes;
                    var0 = var0.UNICODE;
                    if (!(var2 !== var0)) {
                        _fun74005_ip = 225;
                        continue _fun74005
                    }
                case 52:
                    var0 = _closure2_slot0;
                    var3 = var0.emojisDisabled;
                    var2 = var3.has;
                    var0 = var1.id;
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.animated;
                    if (!var2) {
                        _fun74005_ip = 92;
                        continue _fun74005
                    }
                case 89:
                    if (var0) {
                        _fun74005_ip = 189;
                        continue _fun74005
                    }
                case 92:
                    var2 = var1.animated;
                    if (var2) {
                        _fun74005_ip = 157;
                        continue _fun74005
                    }
                case 101:
                    if (var0) {
                        _fun74005_ip = 126;
                        continue _fun74005
                    }
                case 104:
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.name;
                    var0.name = var2;
                    _fun74005_ip = 155;
                    continue _fun74005;
                case 126:
                    var2 = {};
                    var3 = var1.id;
                    var2.id = var3;
                    var3 = var1.name;
                    var2.name = var3;
                    var3 = true;
                    var2.disabled = var3;
                    var0 = var2;
                case 155:
                    _fun74005_ip = 187;
                    continue _fun74005;
                case 157:
                    var2 = {};
                    var3 = var1.id;
                    var2.id = var3;
                    var3 = var1.name;
                    var2.name = var3;
                    var3 = true;
                    var2.animated = var3;
                    var0 = var2;
                case 187:
                    _fun74005_ip = 223;
                    continue _fun74005;
                case 189:
                    var2 = {};
                    var3 = var1.id;
                    var2.id = var3;
                    var3 = var1.name;
                    var2.name = var3;
                    var3 = true;
                    var2.animated = var3;
                    var2.disabled = var3;
                    var0 = var2;
                case 223:
                    return var0;
                case 225:
                    var0 = {};
                    var2 = var1.name;
                    var0.name = var2;
                    var1 = var1.surrogates;
                    var0.surrogates = var1;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var0.emojis = var2;
        var2 = var1.isSectionNitroLocked;
        var1 = true;
        var1 = var1 === var2;
        var0.isSectionNitroLocked = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9285, 3098, 2]);