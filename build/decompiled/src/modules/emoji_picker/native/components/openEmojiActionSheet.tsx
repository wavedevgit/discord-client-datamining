// modules/emoji_picker/native/components/openEmojiActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/openEmojiActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74718: for (var _fun74718_ip = 0;;) switch (_fun74718_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.uniqueName;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun74718_ip = 29;
                    continue _fun74718
                }
            case 15:
                var1 = var2.uniqueName;
                var0 = '';
                if (!(var0 === var1)) {
                    _fun74718_ip = 36;
                    continue _fun74718
                }
            case 29:
                var4 = var2.name;
                _fun74718_ip = 42;
                continue _fun74718;
            case 36:
                var4 = var2.uniqueName;
            case 42:
                var0 = var2.id;
                if (!(var3 == var0)) {
                    _fun74718_ip = 60;
                    continue _fun74718
                }
            case 51:
                var0 = var2.surrogates;
                if (!(var3 == var0)) {
                    _fun74718_ip = 165;
                    continue _fun74718
                }
            case 60:
                var1 = {};
                var0 = var2.id;
                var1.id = var0;
                var1.alt = var4;
                var0 = var2.id;
                if (!(var3 == var0)) {
                    _fun74718_ip = 92;
                    continue _fun74718
                }
            case 85:
                var0 = var2.url;
                _fun74718_ip = 158;
                continue _fun74718;
            case 92:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.getEmojiURL;
                var3 = {};
                var8 = var2.id;
                var3.id = var8;
                var8 = var2.animated;
                var3.animated = var8;
                var7 = _closure1_slot3;
                var3.size = var7;
                var0 = var5.bind(var6)(var3);
            case 158:
                var1.src = var0;
                _fun74718_ip = 207;
                continue _fun74718;
            case 165:
                var0 = {};
                var2 = var2.surrogates;
                var0.surrogate = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var2 = var3.bind(var2)(var4, var2);
                var0.content = var2;
                var1 = var0;
            case 207:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var5 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var5);
                var5 = var6.dismissGlobalKeyboard;
                var5 = var5.bind(var6)();
                var5 = _closure1_slot1;
                var3 = 3;
                var3 = var2[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.openLazy;
                var3 = 5;
                var3 = var2[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var12 = var4.bind(var0)(var3, var2);
                var3 = {};
                var3.emojiNode = var1;
                var11 = 'MessageEmojiActionSheet';
                var9 = 'stack';
                var13 = var6;
                var10 = var3;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var2.openEmojiActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1624, 1417, 1582, 3279, 9399, 1307, 2]);