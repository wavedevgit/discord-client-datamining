// modules/stickers/native/Sticker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function(arg0, arg1, arg2) { // Original name: getStickerAssetUrl, environment: var3
        _fun74333: for (var _fun74333_ip = 0;;) switch (_fun74333_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var8 = arg2;
                var2 = var3.format_type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 4;
                var1 = var1[var6];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.StickerFormat;
                var1 = var1.LOTTIE;
                if (!(var2 !== var1)) {
                    _fun74333_ip = 209;
                    continue _fun74333
                }
            case 59:
                var2 = var3.format_type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var5.bind(var4)(var1);
                var1 = var1.StickerFormat;
                var1 = var1.APNG;
                if (!(var2 !== var1)) {
                    _fun74333_ip = 161;
                    continue _fun74333
                }
            case 98:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var5 = var2.bind(var4)(var1);
                var2 = var5.getStickerAssetUrl;
                var1 = {};
                var6 = !var8;
                var1.isPreview = var6;
                var9 = _closure1_slot3;
                var6 = var9.getPixelSizeForLayoutSize;
                var6 = var6.bind(var9)(var7);
                var1.size = var6;
                var1 = var2.bind(var5)(var3, var1);
                _fun74333_ip = 207;
                continue _fun74333;
            case 161:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.getStickerAssetUrl;
                var2 = {};
                var8 = !var8;
                var2.isPreview = var8;
                var2.size = var7;
                var1 = var5.bind(var6)(var3, var2);
            case 207:
                _fun74333_ip = 240;
                continue _fun74333;
            case 209:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getStickerAssetUrl;
                var1 = var0.bind(var2)(var3);
            case 240:
                var0 = null;
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun74333_ip = 256;
                    continue _fun74333
                }
            case 253:
                var0 = var1;
            case 256:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PixelRatio;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/Sticker.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: _default, environment: var3
        _fun74334: for (var _fun74334_ip = 0;;) switch (_fun74334_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.sticker;
                var9 = var0.size;
                var5 = var0.animated;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun74334_ip = 28;
                    continue _fun74334
                }
            case 26:
                var5 = true;
            case 28:
                var0 = var0.opaque;
                if (!(var0 === var3)) {
                    _fun74334_ip = 40;
                    continue _fun74334
                }
            case 38:
                var0 = true;
            case 40:
                var7 = 0.3;
                if (!var0) {
                    _fun74334_ip = 56;
                    continue _fun74334
                }
            case 53:
                var7 = 1;
            case 56:
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)(var10, var9, var5);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 6;
                var4 = var0[var1];
                var4 = var2.bind(var3)(var4);
                var12 = var4.intl;
                var8 = var12.formatToPlainString;
                var1 = var0[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var4 = var1.rk6pOw;
                var1 = {};
                var13 = var10.name;
                var1.stickerName = var13;
                var4 = var8.bind(var12)(var4, var1);
                var1 = var10.format_type;
                var8 = 4;
                var0 = var0[var8];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.LOTTIE;
                if (!(var1 !== var0)) {
                    _fun74334_ip = 566;
                    continue _fun74334
                }
            case 175:
                var1 = var10.format_type;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.APNG;
                if (!(var1 === var0)) {
                    _fun74334_ip = 407;
                    continue _fun74334
                }
            case 217:
                var0 = 'type';
                var0 = var0 in var10;
                if (!var0) {
                    _fun74334_ip = 265;
                    continue _fun74334
                }
            case 228:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isGuildSticker;
                var0 = var0.bind(var1)(var10);
                if (!var0) {
                    _fun74334_ip = 407;
                    continue _fun74334
                }
            case 265:
                var8 = {};
                var0 = {};
                var0.height = var9;
                var0.width = var9;
                var0.opacity = var7;
                var8.style = var0;
                var8.url = var11;
                var14 = var10.id;
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 5;
                var0 = var12[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getStickerExtensionFromFormatType;
                var0 = var10.format_type;
                var13 = var1.bind(var2)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '.';
                var0 = var2.bind(var1)(var14, var0, var13);
                var8.name = var0;
                var8.accessibilityLabel = var4;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var17 = var0;
                var16 = var8;
                var8 = copyDataProperties(var17, var16);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 407:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 9;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = 'contain';
                var0.resizeMode = var8;
                var8 = {};
                var8.height = var9;
                var8.width = var9;
                var8.opacity = var7;
                var0.style = var8;
                var12 = _closure1_slot0;
                var8 = 10;
                var8 = var13[var8];
                var13 = var12.bind(var3)(var8);
                var12 = var13.isThemeDark;
                var8 = _closure1_slot4;
                var8 = var8.theme;
                var8 = var12.bind(var13)(var8);
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var8) {
                    _fun74334_ip = 521;
                    continue _fun74334
                }
            case 507:
                var8 = 12;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                _fun74334_ip = 533;
                continue _fun74334;
            case 521:
                var12 = 11;
                var12 = var14[var12];
                var8 = var13.bind(var3)(var12);
            case 533:
                var0.placeholder = var8;
                var8 = {};
                var8.uri = var11;
                var0.source = var8;
                var8 = true;
                var0.accessible = var8;
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 566:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = 7;
                var0 = var0[var8];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.url = var11;
                var11 = var10.id;
                var10 = null;
                var12 = var10 != var11;
                var10 = '';
                if (!var12) {
                    _fun74334_ip = 617;
                    continue _fun74334
                }
            case 614:
                var10 = var11;
            case 617:
                var0.asset = var10;
                var0.width = var9;
                var0.height = var9;
                var0.opacity = var7;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var3)(var6);
                var6 = var6.NativeLottieRenderMode;
                if (var5) {
                    _fun74334_ip = 668;
                    continue _fun74334
                }
            case 660:
                var5 = var6.STILL;
                _fun74334_ip = 674;
                continue _fun74334;
            case 668:
                var5 = var6.LOOP;
            case 674:
                var0.renderMode = var5;
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getStickerAssetUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 33, 4183, 3958, 1234, 6662, 7587, 4667, 3165, 5732, 5733, 2]);