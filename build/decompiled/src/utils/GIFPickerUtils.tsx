// utils/GIFPickerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var4 = function arg0() {
        var1 = 'Klipy';
        var0 = arg0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.SearchTypes;
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GIFPickerUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isKlipyProvider = var4;
    var2.shouldUseAnimatedWebPThumbnail = var3;
    var3 = function arg0() {
        _fun73335: for (var _fun73335_ip = 0;;) switch (_fun73335_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot2;
                var2 = var1.providerName;
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                if (!var2) {
                    _fun73335_ip = 38;
                    continue _fun73335
                }
            case 26:
                var1 = var1.thumbnail;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun73335_ip = 40;
                    continue _fun73335
                }
            case 38:
                return var0;
            case 40:
                var0 = var1.proxyURL;
                if (!(var2 == var0)) {
                    _fun73335_ip = 55;
                    continue _fun73335
                }
            case 50:
                var0 = var1.url;
            case 55:
                if (!(var2 == var0)) {
                    _fun73335_ip = 64;
                    continue _fun73335
                }
            case 59:
                var0 = var1.uri;
            case 64:
                return var0;
        }
    };
    var2.getGIFThumbnailForFavorite = var3;
    var1 = function arg0, arg1, arg2() {
        _fun73336: for (var _fun73336_ip = 0;;) switch (_fun73336_ip) {
            case 0:
                var5 = arg1;
                var0 = arg2;
                var2 = null;
                if (!(var2 == var5)) {
                    _fun73336_ip = 16;
                    continue _fun73336
                }
            case 12:
                var1 = {};
                _fun73336_ip = 29;
                continue _fun73336;
            case 16:
                var3 = {};
                var4 = 1;
                var3[var5] = var4;
                var1 = var3;
            case 29:
                if (!(var2 == var0)) {
                    _fun73336_ip = 35;
                    continue _fun73336
                }
            case 33:
                var0 = {};
            case 35:
                var10 = var0.offset;
                var6 = var0.limit;
                var3 = var0.results;
                var4 = var0.totalResults;
                var0 = {};
                var5 = _closure1_slot0;
                var5 = var5.GIF;
                var0.search_type = var5;
                var5 = arg0;
                var0.load_id = var5;
                var0.limit = var6;
                var0.offset = var10;
                var8 = var2 != var6;
                var7 = 1;
                var5 = var7;
                if (!var8) {
                    _fun73336_ip = 145;
                    continue _fun73336
                }
            case 108:
                var8 = var2 != var10;
                var5 = var7;
                if (!var8) {
                    _fun73336_ip = 145;
                    continue _fun73336
                }
            case 118:
                var8 = global;
                var9 = var8.Math;
                var8 = var9.floor;
                var6 = var10 / var6;
                var6 = var8.bind(var9)(var6);
                var5 = var6 + var7;
            case 145:
                var0.page = var5;
                var0.total_results = var4;
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun73336_ip = 167;
                    continue _fun73336
                }
            case 164:
                var2 = var3;
            case 167:
                var0.page_results = var2;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var1);
                var2 = var2.length;
                var0.num_modifiers = var2;
                var0.modifiers = var1;
                return var0;
        }
    };
    var2.calculateAnalyticsMetadata = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);