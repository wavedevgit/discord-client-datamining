// modules/quests/types/v2/Video.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.url;
        var0.url = var2;
        var2 = var1.width;
        var0.width = var2;
        var2 = var1.height;
        var0.height = var2;
        var2 = var1.thumbnail;
        var0.thumbnail = var2;
        var2 = var1.caption;
        var0.caption = var2;
        var1 = var1.transcript;
        var0.transcript = var1;
        return var0;
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/types/v2/Video.tsx';
    var4 = var5.bind(var6)(var4);
    var2.videoAssetFromServer = var3;
    var3 = function arg0() {
        _fun46757: for (var _fun46757_ip = 0;;) switch (_fun46757_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = var1.video;
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var0.video = var4;
                var4 = var1.video_low_res;
                var5 = null;
                if (!(var5 != var4)) {
                    _fun46757_ip = 63;
                    continue _fun46757
                }
            case 42:
                var6 = _closure1_slot0;
                var4 = var1.video_low_res;
                var4 = var6.bind(var3)(var4);
                var0.videoLowRes = var4;
            case 63:
                var4 = var1.video_hls;
                if (!(var5 != var4)) {
                    _fun46757_ip = 94;
                    continue _fun46757
                }
            case 73:
                var2 = _closure1_slot0;
                var1 = var1.video_hls;
                var1 = var2.bind(var3)(var1);
                var0.videoHls = var1;
            case 94:
                return var0;
        }
    };
    var2.desktopVideoAssetsFromServer = var3;
    var3 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.video_title;
        var0.videoTitle = var1;
        return var0;
    };
    var2.desktopVideoMessagesFromServer = var3;
    var3 = function arg0() {
        _fun46759: for (var _fun46759_ip = 0;;) switch (_fun46759_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = var1.video;
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var0.video = var4;
                var4 = var1.video_low_res;
                var5 = null;
                if (!(var5 != var4)) {
                    _fun46759_ip = 63;
                    continue _fun46759
                }
            case 42:
                var6 = _closure1_slot0;
                var4 = var1.video_low_res;
                var4 = var6.bind(var3)(var4);
                var0.videoLowRes = var4;
            case 63:
                var4 = var1.video_hls;
                if (!(var5 != var4)) {
                    _fun46759_ip = 94;
                    continue _fun46759
                }
            case 73:
                var2 = _closure1_slot0;
                var1 = var1.video_hls;
                var1 = var2.bind(var3)(var1);
                var0.videoHls = var1;
            case 94:
                return var0;
        }
    };
    var2.mobileVideoAssetsFromServer = var3;
    var1 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.video_title;
        var0.videoTitle = var1;
        return var0;
    };
    var2.mobileVideoMessagesFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);