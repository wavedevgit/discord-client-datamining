// modules/messages/native/renderer/system_messages/transformSticker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun55680: for (var _fun55680_ip = 0;;) switch (_fun55680_ip) {
            case 0:
                var9 = arg0;
                var3 = arg1;
                var0 = {};
                var12 = var0;
                var11 = var9;
                var1 = copyDataProperties(var12, var11);
                var1 = var9.id;
                var6 = null;
                var5 = var6 != var1;
                var4 = '';
                var2 = var4;
                if (!var5) {
                    _fun55680_ip = 42;
                    continue _fun55680
                }
            case 39:
                var2 = var1;
            case 42:
                var1 = 'asset';
                var0[var1] = var2;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var5 = undefined;
                var8 = var7.bind(var5)(var2);
                var7 = var8.getStickerAssetUrl;
                var2 = {};
                var10 = !var3;
                var2.isPreview = var10;
                var2 = var7.bind(var8)(var9, var2);
                var6 = var6 != var2;
                if (!var6) {
                    _fun55680_ip = 108;
                    continue _fun55680
                }
            case 105:
                var4 = var2;
            case 108:
                var2 = 'url';
                var0[var2] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.NativeLottieRenderMode;
                if (var3) {
                    _fun55680_ip = 154;
                    continue _fun55680
                }
            case 146:
                var3 = var2.STILL;
                _fun55680_ip = 160;
                continue _fun55680;
            case 154:
                var3 = var2.LOOP;
            case 160:
                var2 = 'renderMode';
                var0[var2] = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var8 = var2.intl;
                var7 = var8.formatToPlainString;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.rk6pOw;
                var2 = {};
                var9 = var9.name;
                var2.stickerName = var9;
                var3 = var7.bind(var8)(var3, var2);
                var2 = 'accessibilityLabel';
                var0[var2] = var3;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.GCEruV;
                var2 = var2.bind(var3)(var1);
                var1 = 'accessibilityHint';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StickerAnimationSettings;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/transformSticker.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var4 = var1.sticker;
        var _closure2_slot0 = var4;
        var5 = var1.isStickerReplyEnabled;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var3);
        var3 = var2.AnimateStickers;
        var2 = var3.useSetting;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot3;
        var2 = var2.ALWAYS_ANIMATE;
        var6 = var3 === var2;
        var _closure2_slot2 = var6;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun55682: for (var _fun55682_ip = 0;;) switch (_fun55682_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    var0 = undefined;
                    if (!var2) {
                        _fun55682_ip = 35;
                        continue _fun55682
                    }
                case 14:
                    var3 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = var3.bind(var4)(var2, var1);
                case 35:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var4 = var1.AnimateStickers;
        var1 = var4.getSetting;
        var4 = var1.bind(var4)();
        var0 = _closure1_slot3;
        var0 = var0.ALWAYS_ANIMATE;
        var1 = arg0;
        var0 = var4 === var0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.transformSticker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1352, 3998, 6720, 1234, 1348, 2]);