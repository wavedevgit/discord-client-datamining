// modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var6 = var3.ImageBackground;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'shadowColor': '#000',
        'shadowOffset': null,
        'shadowOpacity': 0.3,
        'shadowRadius': 8,
        'elevation': 8
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var8.borderRadius = var9;
    var9 = {
        'width': 0,
        'height': 4
    };
    var8.shadowOffset = var9;
    var3.cardContainer = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.cardImageBackground = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'resizeMode': 'cover'
    };
    var3.cardImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56866: for (var _fun56866_ip = 0;;) switch (_fun56866_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.sku;
                var _closure2_slot0 = var0;
                var12 = var2.size;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun56866_ip = 29;
                    continue _fun56866
                }
            case 26:
                var12 = 220;
            case 29:
                var7 = var2.containerStyle;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot7;
                var11 = var2.bind(var4)();
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getCardImageURL;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var5.bind(var6)(var2, var3);
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getCardBackgroundImageURL;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var5.bind(var6)(var2, var3);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useDominantColorFromImage;
                var5 = null;
                var8 = var5 == var14;
                var2 = undefined;
                if (var8) {
                    _fun56866_ip = 148;
                    continue _fun56866
                }
            case 139:
                var8 = var14.toString;
                var2 = var8.bind(var14)();
            case 148:
                var8 = var3.bind(var6)(var2);
                _closure2_slot1 = var8;
                var6 = _closure1_slot3;
                var3 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun56869: for (var _fun56869_ip = 0;;) switch (_fun56869_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun56869_ip = 186;
                                continue _fun56869
                            }
                        case 16:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 7;
                            var0 = var5[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var0);
                            var0 = _closure2_slot1;
                            var7 = var6.bind(var3)(var0);
                            var6 = var7.brighten;
                            var0 = 20;
                            var7 = var6.bind(var7)(var0);
                            var6 = var7.saturate;
                            var0 = 30;
                            var7 = var6.bind(var7)(var0);
                            var6 = var7.setAlpha;
                            var0 = 0.8;
                            var6 = var6.bind(var7)(var0);
                            var0 = var6.toRgbString;
                            var6 = var0.bind(var6)();
                            var0 = new Array(2);
                            var0[0] = var6;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var1 = _closure2_slot1;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.saturate;
                            var1 = 50;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.setAlpha;
                            var1 = 0.9;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.toRgbString;
                            var1 = var1.bind(var2)();
                            var0[1] = var1;
                            _fun56869_ip = 257;
                            continue _fun56869;
                        case 186:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 4;
                            var1 = var5[var2];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.colors;
                            var6 = var1.BACKGROUND_SURFACE_HIGH;
                            var1 = new Array(2);
                            var1[0] = var6;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.colors;
                            var2 = var2.BACKGROUND_BASE_LOWEST;
                            var1[1] = var2;
                            var0 = var1;
                        case 257:
                            return var0;
                    }
                };
                var8 = var3.bind(var6)(var1, var2);
                var1 = var5 == var0;
                var0 = null;
                if (var1) {
                    _fun56866_ip = 507;
                    continue _fun56866
                }
            case 197:
                var1 = var5 == var14;
                var0 = null;
                if (var1) {
                    _fun56866_ip = 507;
                    continue _fun56866
                }
            case 209:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var1 = {};
                var10 = var11.cardContainer;
                var6 = new Array(3);
                var6[0] = var10;
                var10 = {};
                var10.width = var12;
                var10.height = var12;
                var6[1] = var10;
                var6[2] = var7;
                var1.style = var6;
                if (!(var5 == var13)) {
                    _fun56866_ip = 391;
                    continue _fun56866
                }
            case 262:
                var7 = _closure1_slot6;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 9;
                var5 = var12[var5];
                var6 = var10.bind(var4)(var5);
                var5 = {};
                var5.colors = var8;
                var8 = {
                    'x': 0,
                    'y': 0
                };
                var5.start = var8;
                var8 = {
                    'x': 1,
                    'y': 1
                };
                var5.end = var8;
                var8 = var11.cardImageBackground;
                var5.style = var8;
                var8 = 8;
                var8 = var12[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var12 = {};
                var15 = var14.toString;
                var15 = var15.bind(var14)();
                var12.uri = var15;
                var8.source = var12;
                var12 = var11.cardImage;
                var8.style = var12;
                var8 = var7.bind(var4)(var10, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                _fun56866_ip = 497;
                continue _fun56866;
            case 391:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = {};
                var12 = var13.toString;
                var12 = var12.bind(var13)();
                var10.uri = var12;
                var6.source = var10;
                var10 = var11.cardImageBackground;
                var6.style = var10;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 8;
                var9 = var12[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var12 = {};
                var13 = var14.toString;
                var13 = var13.bind(var14)();
                var12.uri = var13;
                var9.source = var12;
                var11 = var11.cardImage;
                var9.style = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var4)(var7, var6);
            case 497:
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 507:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3494, 6915, 4624, 4704, 4098, 2]);