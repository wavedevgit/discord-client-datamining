// modules/gif_picker/FavoriteGIFHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function() { // Original name: useFavoriteGIFs, environment: var1
        _fun72970: for (var _fun72970_ip = 0;;) switch (_fun72970_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.useFrecencySettings;
                var2 = var2.bind(var3)();
                var3 = var2.favoriteGifs;
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun72970_ip = 56;
                    continue _fun72970
                }
            case 50:
                var0 = var3.gifs;
            case 56:
                if (!(var2 == var0)) {
                    _fun72970_ip = 64;
                    continue _fun72970
                }
            case 60:
                var0 = _closure1_slot4;
            case 64:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/FavoriteGIFHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useFavoriteGIFs = var3;
    var3 = function(arg0) { // Original name: useSortedFavoriteGIFs, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = undefined;
        var5 = var3.bind(var2)();
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 2;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = _closure2_slot1;
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun72973: for (var _fun72973_ip = 0;;) switch (_fun72973_ip) {
                    case 0:
                        var1 = arg0;
                        var7 = arg1;
                        var0 = {};
                        var9 = var0;
                        var8 = var1;
                        var2 = copyDataProperties(var9, var8);
                        var2 = 'url';
                        var0[var2] = var7;
                        var2 = _closure2_slot0;
                        var3 = null;
                        var5 = var3 == var2;
                        var6 = undefined;
                        var2 = undefined;
                        if (var5) {
                            _fun72973_ip = 63;
                            continue _fun72973
                        }
                    case 47:
                        var5 = _closure2_slot0;
                        var4 = var1.src;
                        var2 = var5.bind(var6)(var4, var7);
                    case 63:
                        if (!(var3 == var2)) {
                            _fun72973_ip = 73;
                            continue _fun72973
                        }
                    case 67:
                        var2 = var1.src;
                    case 73:
                        var1 = 'src';
                        var0[var1] = var2;
                        return var0;
                }
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.sortBy;
            var0 = 'order';
            var1 = var1.bind(var2)(var0);
            var0 = var1.reverse;
            var1 = var0.bind(var1)();
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSortedFavoriteGIFs = var3;
    var3 = function() { // Original name: useShouldShowTooltipOnFavorite, environment: var1
        _fun72974: for (var _fun72974_ip = 0;;) switch (_fun72974_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var2 = var2.bind(var1)(var0);
                var0 = var2.useFrecencySettings;
                var0 = var0.bind(var2)();
                var2 = var0.favoriteGifs;
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun72974_ip = 56;
                    continue _fun72974
                }
            case 50:
                var1 = var2.hideTooltip;
            case 56:
                var0 = var0 != var1;
                if (!var0) {
                    _fun72974_ip = 66;
                    continue _fun72974
                }
            case 63:
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var2.useShouldShowTooltipOnFavorite = var3;
    var1 = function(arg0) { // Original name: useIsFavoriteGIF, environment: var1
        var1 = _closure1_slot5;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = arg0;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.useIsFavoriteGIF = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9034, 22, 2]);