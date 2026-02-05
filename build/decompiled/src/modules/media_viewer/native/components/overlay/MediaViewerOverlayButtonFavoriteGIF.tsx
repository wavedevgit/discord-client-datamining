// modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun73283: for (var _fun73283_ip = 0;;) switch (_fun73283_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.source;
                var _closure2_slot0 = var1;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var0 = var1.isGIFV;
                if (var0) {
                    _fun73283_ip = 41;
                    continue _fun73283
                }
            case 33:
                var11 = var1.sourceURI;
                _fun73283_ip = 47;
                continue _fun73283;
            case 41:
                var11 = var1.embedURI;
            case 47:
                var0 = null;
                if (!(var0 == var11)) {
                    _fun73283_ip = 58;
                    continue _fun73283
                }
            case 53:
                var11 = var1.uri;
            case 58:
                _closure2_slot1 = var11;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var8 = var3.bind(var4)(var5);
                var6 = var8.useIsFavoriteGIF;
                var5 = 3;
                var5 = var7[var5];
                var10 = var3.bind(var4)(var5);
                var5 = var10.gifUrlKey;
                var5 = var5.bind(var10)(var11);
                var5 = var6.bind(var8)(var5);
                _closure2_slot2 = var5;
                var10 = _closure1_slot3;
                var8 = var10.useCallback;
                var6 = new Array(8);
                var6[0] = var5;
                var12 = var1.embedProviderName;
                var6[1] = var12;
                var12 = var1.height;
                var6[2] = var12;
                var12 = var1.isGIFV;
                var6[3] = var12;
                var12 = var1.thumbnail;
                var6[4] = var12;
                var12 = var1.uri;
                var6[5] = var12;
                var12 = var1.width;
                var6[6] = var12;
                var6[7] = var11;
                var2 = function() { // Environment: var2
                    _fun73284: for (var _fun73284_ip = 0;;) switch (_fun73284_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            if (var2) {
                                _fun73284_ip = 321;
                                continue _fun73284
                            }
                        case 24:
                            var2 = 7;
                            var2 = var6[var2];
                            var9 = undefined;
                            var4 = var5.bind(var9)(var2);
                            var3 = var4.getGIFThumbnailForFavorite;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var8 = var7.embedProviderName;
                            var2.providerName = var8;
                            var8 = var7.thumbnail;
                            var2.thumbnail = var8;
                            var8 = var3.bind(var4)(var2);
                            var2 = 3;
                            var2 = var6[var2];
                            var4 = var5.bind(var9)(var2);
                            var3 = var4.addFavoriteGIF;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var2.url = var10;
                            var10 = var7.uri;
                            var2.src = var10;
                            var2.gifSrc = var8;
                            var8 = var7.width;
                            var2.width = var8;
                            var8 = var7.height;
                            var2.height = var8;
                            var7 = var7.isGIFV;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 8;
                            var8 = var11[var8];
                            var8 = var10.bind(var9)(var8);
                            var8 = var8.GIFType;
                            if (var7) {
                                _fun73284_ip = 181;
                                continue _fun73284
                            }
                        case 173:
                            var7 = var8.IMAGE;
                            _fun73284_ip = 187;
                            continue _fun73284;
                        case 181:
                            var7 = var8.VIDEO;
                        case 187:
                            var2.format = var7;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 4;
                            var2 = var10[var2];
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var7 = 'ADDED_TO_FAVORITES';
                            var2.key = var7;
                            var8 = _closure1_slot0;
                            var7 = 5;
                            var11 = var10[var7];
                            var11 = var8.bind(var9)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var7 = var10[var7];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.t;
                            var7 = var7.okQonm;
                            var7 = var11.bind(var12)(var7);
                            var2.content = var7;
                            var7 = 6;
                            var7 = var10[var7];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.GifIcon;
                            var2.IconComponent = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun73284_ip = 462;
                            continue _fun73284;
                        case 321:
                            var2 = 3;
                            var2 = var6[var2];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var2);
                            var2 = var3.removeFavoriteGIF;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var0 = var6[var0];
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var3 = 'REMOVED_FROM_FAVORITES';
                            var0.key = var3;
                            var3 = 5;
                            var7 = var6[var3];
                            var7 = var5.bind(var4)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var3 = var6[var3];
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.t;
                            var3 = var3.in1rga;
                            var3 = var7.bind(var8)(var3);
                            var0.content = var3;
                            var3 = 6;
                            var3 = var6[var3];
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.GifIcon;
                            var0.IconComponent = var3;
                            var0 = var1.bind(var2)(var0);
                        case 462:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var10)(var2, var6);
                var2 = 9;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAnimatedImageSource;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun73283_ip = 254;
                    continue _fun73283
                }
            case 240:
                var1 = var1.isGIFV;
                var0 = null;
                if (!var1) {
                    _fun73283_ip = 489;
                    continue _fun73283
                }
            case 254:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 5;
                var10 = var12[var7];
                var10 = var8.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var12[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.t;
                if (var5) {
                    _fun73283_ip = 340;
                    continue _fun73283
                }
            case 327:
                var7 = var8.nIH0v8;
                var7 = var10.bind(var11)(var7);
                _fun73283_ip = 351;
                continue _fun73283;
            case 340:
                var8 = var8["5/NS74"];
                var7 = var10.bind(var11)(var8);
            case 351:
                var1.accessibilityLabel = var7;
                var1.onPress = var6;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                if (var5) {
                    _fun73283_ip = 414;
                    continue _fun73283
                }
            case 374:
                var5 = 13;
                var5 = var11[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.StarOutlineIcon;
                var5 = {
                    'color': 'interactive-text-default',
                    'size': 'md'
                };
                var5 = var8.bind(var4)(var6, var5);
                _fun73283_ip = 479;
                continue _fun73283;
            case 414:
                var6 = 11;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.StarIcon;
                var6 = {};
                var10 = _closure1_slot1;
                var9 = 12;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.YELLOW_300;
                var6.color = var9;
                var9 = 'md';
                var6.size = var9;
                var5 = var8.bind(var4)(var7, var6);
            case 479:
                var1.icon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 489:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9227, 9228, 3148, 1234, 9234, 9233, 1343, 8877, 9225, 8596, 671, 8598, 2]);