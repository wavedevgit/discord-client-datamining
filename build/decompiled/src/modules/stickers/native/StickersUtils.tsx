// modules/stickers/native/StickersUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useStickerPickerStore;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildNSFWContentLevel;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickersUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStickerPackCategories;
        var2 = arg0;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var2 = var3.getCurrentUser;
        var4 = var2.bind(var3)();
        var _closure2_slot1 = var4;
        var3 = _closure1_slot5;
        var2 = var3.getGuilds;
        var6 = var2.bind(var3)();
        var _closure2_slot2 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.stickers;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun74535: for (var _fun74535_ip = 0;;) switch (_fun74535_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure2_slot2;
                        var1 = var0.id;
                        var3 = var2[var1];
                        var1 = var0.type;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 8;
                        var5 = var5[var0];
                        var0 = undefined;
                        var0 = var6.bind(var0)(var5);
                        var0 = var0.StickerCategoryTypes;
                        var0 = var0.GUILD;
                        var0 = var1 !== var0;
                        if (var0) {
                            _fun74535_ip = 94;
                            continue _fun74535
                        }
                    case 68:
                        var5 = _closure2_slot1;
                        var1 = null;
                        var1 = var1 != var5;
                        if (!var1) {
                            _fun74535_ip = 91;
                            continue _fun74535
                        }
                    case 81:
                        var4 = _closure2_slot1;
                        var1 = var4.nsfwAllowed;
                    case 91:
                        var0 = var1;
                    case 94:
                        if (var0) {
                            _fun74535_ip = 103;
                            continue _fun74535
                        }
                    case 97:
                        var1 = null;
                        var0 = var1 == var3;
                    case 103:
                        if (var0) {
                            _fun74535_ip = 152;
                            continue _fun74535
                        }
                    case 106:
                        var4 = var3.nsfwLevel;
                        var1 = _closure1_slot8;
                        var1 = var1.AGE_RESTRICTED;
                        var1 = var4 !== var1;
                        if (!var1) {
                            _fun74535_ip = 149;
                            continue _fun74535
                        }
                    case 129:
                        var3 = var3.nsfwLevel;
                        var2 = _closure1_slot8;
                        var2 = var2.EXPLICIT;
                        var1 = var3 !== var2;
                    case 149:
                        var0 = var1;
                    case 152:
                        var0 = !var0;
                        var0 = !var0;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun74536: for (var _fun74536_ip = 0;;) switch (_fun74536_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 8;
                        var2 = var2[var6];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.StickerCategoryTypes;
                        var2 = var2.FAVORITE;
                        if (!(var3 !== var2)) {
                            _fun74536_ip = 89;
                            continue _fun74536
                        }
                    case 49:
                        var3 = var1.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.StickerCategoryTypes;
                        var2 = var2.RECENT;
                        if (!(var3 !== var2)) {
                            _fun74536_ip = 89;
                            continue _fun74536
                        }
                    case 87:
                        return var1;
                    case 89:
                        var3 = var1.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.StickerCategoryTypes;
                        var2 = var2.FAVORITE;
                        if (!(var3 !== var2)) {
                            _fun74536_ip = 149;
                            continue _fun74536
                        }
                    case 127:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        _fun74536_ip = 169;
                        continue _fun74536;
                    case 149:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 9;
                        var0 = var5[var0];
                        var2 = var3.bind(var4)(var0);
                    case 169:
                        var0 = {};
                        var8 = var0;
                        var7 = var1;
                        var1 = copyDataProperties(var8, var7);
                        var1 = 'icon';
                        var0[var1] = var2;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useStickerCategories = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var13 = var0.hash;
        var12 = var0.url;
        var11 = var0.width;
        var10 = var0.height;
        var9 = var0.frames;
        var8 = var0.callback;
        var0 = _closure1_slot4;
        var1 = var0.NativeLottieUtils;
        var0 = var1.preload;
        var14 = var1;
        var0 = var14[var0](var13, var12, var11, var10, var9, var8, var7);
        var0 = undefined;
        return var0;
    };
    var2.preloadSticker = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = _closure1_slot4;
        var2 = var0.NativeLottieUtils;
        var1 = var2.dropPreload;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.dropPreloadedSticker = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot7;
        var0 = var2.getState;
        var3 = var0.bind(var2)();
        var2 = var3.setPackToScrollTo;
        var0 = arg1;
        var0 = var2.bind(var3)(var0);
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            _fun74540: for (var _fun74540_ip = 0;;) switch (_fun74540_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.current;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun74540_ip = 86;
                        continue _fun74540
                    }
                case 18:
                    var1 = var2.openCustomKeyboard;
                    var0 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.EXPRESSION;
                    var0.type = var4;
                    var3 = _closure1_slot9;
                    var3 = var3.STICKER;
                    var0.context = var3;
                    var0 = var1.bind(var2)(var0);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = 1;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.openStickerPickerToPackId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 1621, 9395, 660, 1565, 9392, 4219, 8601, 9396, 1567, 2]);