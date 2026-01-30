// utils/native/ImageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var0 = function(arg0) { // Original name: clampDimension, environment: var7
        _fun16911: for (var _fun16911_ip = 0;;) switch (_fun16911_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot6;
                if (!(var0 > var2)) {
                    _fun16911_ip = 18;
                    continue _fun16911
                }
            case 14:
                var0 = _closure1_slot6;
            case 18:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var4 = function(arg0) { // Original name: getSrcWithWidthAndHeight, environment: var7
        _fun16912: for (var _fun16912_ip = 0;;) switch (_fun16912_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.src;
                var9 = var0.sourceWidth;
                var10 = var0.sourceHeight;
                var8 = var0.targetWidth;
                var11 = var0.targetHeight;
                var4 = var0.format;
                var6 = undefined;
                if (!(var4 === var6)) {
                    _fun16912_ip = 46;
                    continue _fun16912
                }
            case 44:
                var4 = null;
            case 46:
                var0 = var0.animated;
                if (!(var0 === var6)) {
                    _fun16912_ip = 58;
                    continue _fun16912
                }
            case 56:
                var0 = false;
            case 58:
                var1 = var2.split;
                var3 = '?';
                var5 = var1.bind(var2)(var3);
                var2 = _closure1_slot3;
                var14 = 2;
                var7 = var2.bind(var6)(var5, var14);
                var2 = 0;
                var5 = var7[var2];
                var12 = 1;
                var16 = var7[var12];
                var13 = new Array(2);
                var13[0] = var5;
                var15 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 4;
                var5 = var5[var7];
                var15 = var15.bind(var6)(var5);
                var5 = var15.parse;
                var5 = var5.bind(var15)(var16);
                var13[1] = var5;
                var5 = _closure1_slot3;
                var5 = var5.bind(var6)(var13, var14);
                var2 = var5[var2];
                var5 = var5[var12];
                var13 = _closure1_slot8;
                var12 = var13.test;
                var12 = var12.bind(var13)(var2);
                if (var12) {
                    _fun16912_ip = 193;
                    continue _fun16912
                }
            case 179:
                var12 = null;
                if (!(var12 != var4)) {
                    _fun16912_ip = 205;
                    continue _fun16912
                }
            case 185:
                var5.format = var4;
                _fun16912_ip = 205;
                continue _fun16912;
            case 193:
                var4 = 'webp';
                var5.format = var4;
            case 205:
                var4 = _closure1_slot9;
                var8 = var4.bind(var6)(var8);
                var4 = var4.bind(var6)(var11);
                var9 = var8 === var9;
                if (!var9) {
                    _fun16912_ip = 230;
                    continue _fun16912
                }
            case 226:
                var9 = var4 === var10;
            case 230:
                if (var9) {
                    _fun16912_ip = 251;
                    continue _fun16912
                }
            case 233:
                var8 = var8 | 0;
                var5.width = var8;
                var4 = var4 | 0;
                var5.height = var4;
            case 251:
                if (!var0) {
                    _fun16912_ip = 262;
                    continue _fun16912
                }
            case 254:
                var0 = true;
                var5.animated = var0;
            case 262:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.isEmpty;
                var4 = var0.bind(var4)(var5);
                var0 = var2;
                if (var4) {
                    _fun16912_ip = 335;
                    continue _fun16912
                }
            case 299:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var4 = var4.bind(var6)(var1);
                var1 = var4.stringify;
                var1 = var1.bind(var4)(var5);
                var1 = var3 + var1;
                var0 = var2 + var1;
            case 335:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: getMobileOptimizedSrc, environment: var7
        _fun16913: for (var _fun16913_ip = 0;;) switch (_fun16913_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arg2;
                var3 = arguments[3];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun16913_ip = 20;
                    continue _fun16913
                }
            case 18:
                var3 = null;
            case 20:
                var4 = _closure1_slot7;
                var1 = var4.test;
                var1 = var1.bind(var4)(var8);
                var9 = 1;
                var5 = var9;
                if (!var1) {
                    _fun16913_ip = 56;
                    continue _fun16913
                }
            case 46:
                var5 = 0.3;
            case 56:
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 3;
                var1 = var10[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getWindowDimensions;
                var4 = var1.bind(var4)();
                var11 = _closure1_slot5;
                var10 = var11.getPixelSizeForLayoutSize;
                var1 = var4.width;
                var1 = var10.bind(var11)(var1);
                var1 = var1 * var5;
                var11 = _closure1_slot5;
                var10 = var11.getPixelSizeForLayoutSize;
                var12 = var4.height;
                var4 = 2;
                var4 = var12 / var4;
                var4 = var10.bind(var11)(var4);
                var4 = var4 * var5;
                if (!(!(var7 > var6))) {
                    _fun16913_ip = 151;
                    continue _fun16913
                }
            case 145:
                var5 = var4 / var6;
                _fun16913_ip = 155;
                continue _fun16913;
            case 151:
                var5 = var1 / var7;
            case 155:
                var10 = global;
                var4 = var10.Math;
                var1 = var4.min;
                var1 = var1.bind(var4)(var5, var9);
                var5 = var7;
                var4 = var6;
                if (!(var1 < var9)) {
                    _fun16913_ip = 226;
                    continue _fun16913
                }
            case 184:
                var12 = var10.Math;
                var11 = var12.ceil;
                var9 = var7 * var1;
                var5 = var11.bind(var12)(var9);
                var11 = var10.Math;
                var10 = var11.ceil;
                var1 = var6 * var1;
                var4 = var10.bind(var11)(var1);
            case 226:
                var1 = _closure1_slot10;
                var0 = {};
                var0.src = var8;
                var0.sourceWidth = var7;
                var0.sourceHeight = var6;
                var0.targetWidth = var5;
                var0.targetHeight = var4;
                var0.format = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1 = function(arg0) { // Original name: getPaletteForAvatarMobile, environment: var7
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.ensureAvatarSource;
        var1 = 7;
        var1 = var6[var1];
        var5 = var5.bind(var4)(var1);
        var4 = var5.makeSource;
        var1 = arg0;
        var1 = var4.bind(var5)(var1);
        var2 = var2.bind(var3)(var1);
        var0 = _closure1_slot4;
        var1 = var0.ImageManager;
        var0 = var1.getDominantColors;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var8 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var10[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var6 = var5.NativeModules;
    var _closure1_slot4 = var6;
    var5 = var5.PixelRatio;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot6 = var5;
    var6 = /\.(gif)$/i;
    var _closure1_slot7 = var6;
    var5 = /\.(avif)$/i;
    var _closure1_slot8 = var5;
    var7 = {};
    var7.getMobileOptimizedSrc = var3;
    var7.getPaletteForAvatarMobile = var1;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/native/ImageUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var2.GIF_RE = var6;
    var2.AVIF_RE = var5;
    var2.getSrcWithWidthAndHeight = var4;
    var2.getMobileOptimizedSrc = var3;
    var2.getPaletteForAvatarMobile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 660, 1464, 1454, 22, 1418, 1417, 2]);