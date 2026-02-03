// modules/media_channel/MediaPostThumbnailUtils.tsx
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
    var3 = 'modules/media_channel/MediaPostThumbnailUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 4;
    var2.MAX_THUMBNAIL_COUNT = var3;
    var3 = function arg0() {
        _fun38803: for (var _fun38803_ip = 0;;) switch (_fun38803_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun38803_ip = 29;
                    continue _fun38803
                }
            case 9:
                var1 = var0.thumbnail;
                var3 = var0.image;
                if (!(var2 == var1)) {
                    _fun38803_ip = 50;
                    continue _fun38803
                }
            case 25:
                if (!(var2 == var3)) {
                    _fun38803_ip = 33;
                    continue _fun38803
                }
            case 29:
                var0 = undefined;
                return var0;
            case 33:
                var0 = var3.proxy_url;
                if (!(var2 == var0)) {
                    _fun38803_ip = 48;
                    continue _fun38803
                }
            case 43:
                var0 = var3.url;
            case 48:
                return var0;
            case 50:
                var0 = var1.proxy_url;
                if (!(var2 == var0)) {
                    _fun38803_ip = 65;
                    continue _fun38803
                }
            case 60:
                var0 = var1.url;
            case 65:
                return var0;
        }
    };
    var2.getEmbedPreviewImageUrl = var3;
    var3 = function arg0() {
        _fun38804: for (var _fun38804_ip = 0;;) switch (_fun38804_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var1 = var1[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var1);
                var1 = var5.isAnimatedImageUrl;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun38804_ip = 75;
                    continue _fun38804
                }
            case 41:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var1 = var1.bind(var2)(var0);
                var0 = var1.isVideoUrl;
                var1 = var0.bind(var1)(var4);
                var0 = var4;
                if (!var1) {
                    _fun38804_ip = 104;
                    continue _fun38804
                }
            case 75:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '?format=webp';
                var0 = var3.bind(var2)(var4, var1);
            case 104:
                return var0;
        }
    };
    var2.getBackgroundImageUrl = var3;
    var1 = function arg0() {
        _fun38805: for (var _fun38805_ip = 0;;) switch (_fun38805_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun38805_ip = 13;
                    continue _fun38805
                }
            case 9:
                var2 = undefined;
                return var2;
            case 13:
                var3 = var0.url;
                var5 = var0.proxy_url;
                var0 = var3;
                if (!(var1 != var3)) {
                    _fun38805_ip = 111;
                    continue _fun38805
                }
            case 31:
                var0 = var3;
                if (!(var1 != var5)) {
                    _fun38805_ip = 111;
                    continue _fun38805
                }
            case 38:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isVideoUrl;
                var2 = var1.bind(var2)(var3);
                var1 = var5;
                if (!var2) {
                    _fun38805_ip = 108;
                    continue _fun38805
                }
            case 79:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '?format=webp';
                var1 = var4.bind(var3)(var5, var2);
            case 108:
                var0 = var1;
            case 111:
                return var0;
        }
    };
    var2.getThumbnailImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3980, 2]);