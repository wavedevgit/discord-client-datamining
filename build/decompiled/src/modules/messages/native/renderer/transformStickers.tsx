// modules/messages/native/renderer/transformStickers.tsx
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
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformStickers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: transformStickers, environment: var1
        var1 = arg0;
        var3 = var1.message;
        var2 = var1.animateStickersSetting;
        var _closure2_slot0 = var2;
        var1 = var1.isUserInteracting;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.getMessageStickers;
        var2 = var1.bind(var2)(var3);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun92909: for (var _fun92909_ip = 0;;) switch (_fun92909_ip) {
                case 0:
                    var9 = arg0;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var8 = 0;
                    var0 = var0[var8];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var0);
                    var3 = var4.shouldAnimateSticker;
                    var2 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2, var0);
                    var0 = {};
                    var12 = var0;
                    var11 = var9;
                    var2 = copyDataProperties(var12, var11);
                    var2 = var9.id;
                    var6 = null;
                    var10 = var6 != var2;
                    var4 = '';
                    var7 = var4;
                    if (!var10) {
                        _fun92909_ip = 86;
                        continue _fun92909
                    }
                case 83:
                    var7 = var2;
                case 86:
                    var2 = 'asset';
                    var0[var2] = var7;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var8 = var7.bind(var5)(var2);
                    var7 = var8.getStickerAssetUrl;
                    var2 = {};
                    var10 = !var3;
                    var2.isPreview = var10;
                    var2 = var7.bind(var8)(var9, var2);
                    var6 = var6 != var2;
                    if (!var6) {
                        _fun92909_ip = 144;
                        continue _fun92909
                    }
                case 141:
                    var4 = var2;
                case 144:
                    var2 = 'url';
                    var0[var2] = var4;
                    var4 = 160;
                    var2 = 'width';
                    var0[var2] = var4;
                    var2 = 'height';
                    var0[var2] = var4;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 1;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.NativeLottieRenderMode;
                    if (var3) {
                        _fun92909_ip = 211;
                        continue _fun92909
                    }
                case 203:
                    var3 = var2.STILL;
                    _fun92909_ip = 217;
                    continue _fun92909;
                case 211:
                    var3 = var2.LOOP;
                case 217:
                    var2 = 'renderMode';
                    var0[var2] = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
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
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3952, 6658, 1234, 2]);