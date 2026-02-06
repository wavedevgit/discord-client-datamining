// modules/gif_picker/native/GIFPickerUtils.tsx
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
        var3 = var3.bind(var0)(var6);
        var _closure1_slot3 = var3;
        var3 = 1;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var3 = var3.GIFPickerResultTypes;
        var _closure1_slot4 = var3;
        var3 = /(https?:\\/\\ / )( ? !media( ? : \d + ) ? \.)( ? : [ ^ .] + \.) * giphy\.com / ;
    var _closure1_slot5 = var3; var3 = /(tenor\.com)/;
    var _closure1_slot6 = var3; var3 = /-(?:.(?!-))+$/;
    var _closure1_slot7 = var3; var3 = function arg0, arg1() {
        _fun74404: for (var _fun74404_ip = 0;;) switch (_fun74404_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.toURLSafe;
                var1 = var0.bind(var1)(var3);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun74404_ip = 233;
                    continue _fun74404
                }
            case 51:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 3;
                var0 = var0[var7];
                var2 = var2.bind(var5)(var0);
                var0 = var2.isExternalProxiedAttachmentUrl;
                var0 = var0.bind(var2)(var1);
                if (var0) {
                    _fun74404_ip = 116;
                    continue _fun74404
                }
            case 85:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var2 = var2.bind(var5)(var0);
                var0 = var2.isAttachmentUrl;
                var0 = var0.bind(var2)(var1);
                if (!var0) {
                    _fun74404_ip = 233;
                    continue _fun74404
                }
            case 116:
                var2 = var1.pathname;
                var0 = var2.toLowerCase;
                var7 = var0.bind(var2)();
                var2 = var7.endsWith;
                var0 = '.webp';
                var7 = var2.bind(var7)(var0);
                var2 = var1.pathname;
                var0 = var2.toLowerCase;
                var9 = var0.bind(var2)();
                var2 = var9.endsWith;
                var0 = '.avif';
                var0 = var2.bind(var9)(var0);
                var9 = var1.pathname;
                var2 = var9.toLowerCase;
                var10 = var2.bind(var9)();
                var9 = var10.endsWith;
                var2 = '.gif';
                var2 = var9.bind(var10)(var2);
                if (var7) {
                    _fun74404_ip = 383;
                    continue _fun74404
                }
            case 221:
                if (var0) {
                    _fun74404_ip = 383;
                    continue _fun74404
                }
            case 227:
                if (var2) {
                    _fun74404_ip = 383;
                    continue _fun74404
                }
            case 233:
                var9 = _closure1_slot5;
                var7 = var9.test;
                var7 = var7.bind(var9)(var8);
                if (var7) {
                    _fun74404_ip = 298;
                    continue _fun74404
                }
            case 250:
                var9 = _closure1_slot6;
                var7 = var9.test;
                var7 = var7.bind(var9)(var8);
                if (!var7) {
                    _fun74404_ip = 296;
                    continue _fun74404
                }
            case 267:
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var9 = '';
                var7 = '.gif';
                var3 = var10.bind(var9)(var8, var7);
            case 296:
                _fun74404_ip = 381;
                continue _fun74404;
            case 298:
                var7 = _closure1_slot7;
                var6 = var7.exec;
                var8 = var6.bind(var7)(var8);
                var6 = var4 == var8;
                var7 = undefined;
                if (var6) {
                    _fun74404_ip = 350;
                    continue _fun74404
                }
            case 322:
                var6 = 0;
                var6 = var8[var6];
                var4 = var4 == var6;
                var7 = undefined;
                if (var4) {
                    _fun74404_ip = 350;
                    continue _fun74404
                }
            case 337:
                var5 = var6.slice;
                var4 = 1;
                var7 = var5.bind(var6)(var4);
            case 350:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var5 = 'https://media.giphy.com/media/';
                var4 = '/giphy.gif';
                var3 = var6.bind(var5)(var7, var4);
            case 381:
                return var3;
            case 383:
                if (var0) {
                    _fun74404_ip = 389;
                    continue _fun74404
                }
            case 386:
                var0 = var2;
            case 389:
                if (!var0) {
                    _fun74404_ip = 419;
                    continue _fun74404
                }
            case 392:
                var4 = var1.searchParams;
                var3 = var4.set;
                var2 = 'format';
                var0 = 'webp';
                var0 = var3.bind(var4)(var2, var0);
            case 419:
                var4 = var1.searchParams;
                var3 = var4.set;
                var2 = 'animated';
                var0 = 'true';
                var0 = var3.bind(var4)(var2, var0);
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot8 = var3; var3 = 6; var3 = var5[var3]; var5 = var4.bind(var0)(var3); var4 = var5.fileFinishedImporting; var3 = 'modules/gif_picker/native/GIFPickerUtils.tsx'; var3 = var4.bind(var5)(var3); var3 = 56; var2.GIF_HEADER_HEIGHT = var3; var1 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useSortedFavoriteGIFs;
        var2 = _closure1_slot8;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var2;
        var0 = function() { // Environment: var0
            _fun74406: for (var _fun74406_ip = 0;;) switch (_fun74406_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.length;
                    var3 = 0;
                    var1 = var0 > var3;
                    var8 = undefined;
                    var0 = undefined;
                    if (!var1) {
                        _fun74406_ip = 138;
                        continue _fun74406
                    }
                case 25:
                    var1 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.FAVORITES;
                    var1.type = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 5;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.k8fFjp;
                    var4 = var5.bind(var6)(var4);
                    var1.name = var4;
                    var2 = _closure2_slot0;
                    var4 = var2[var3];
                    var4 = var4.src;
                    var1.src = var4;
                    var2 = var2[var3];
                    var2 = var2.format;
                    var1.format = var2;
                    var0 = var1;
                case 138:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.favorites = var2;
        var0.favoritesCategory = var1;
        return var0;
    }; var2.useFavoriteGIFsMobile = var1; var1 = 180; var2.GIF_PICKER_ITEM_ESIMTATED_HEIGHT = var1; var1 = 8; var2.GIF_PICKER_GUTTER_SPACING = var1; var1 = 20; var2.DEFAULT_CATEGORY_ROWS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1457, 8475, 9233, 1234, 2]);