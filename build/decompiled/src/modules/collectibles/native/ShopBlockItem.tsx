// modules/collectibles/native/ShopBlockItem.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginBottom = var11;
    var3.heroContainer = var8;
    var8 = {};
    var11 = '100%';
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.featuredContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'height': '100%'
    };
    var3.feedContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ShopBlockItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun88537: for (var _fun88537_ip = 0;;) switch (_fun88537_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.block;
                var _closure2_slot0 = var10;
                var13 = var0.screen;
                var9 = var0.preferVCPrice;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 6;
                var1 = var0[var2];
                var14 = var4.bind(var3)(var1);
                var11 = var14.useStateFromStores;
                var1 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var5 = function() { // Environment: var12
                    var0 = _closure1_slot5;
                    var0 = var0.categories;
                    return var0;
                };
                var14 = var11.bind(var14)(var6, var5);
                var _closure2_slot1 = var14;
                var2 = var0[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var0 = _closure1_slot5;
                    var0 = var0.products;
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var _closure2_slot2 = var1;
                var2 = 7;
                var2 = var0[var2];
                var5 = var4.bind(var3)(var2);
                var2 = var5.useCardLayout;
                var2 = var2.bind(var5)();
                var5 = var2.columns;
                var11 = _closure1_slot3;
                var6 = var11.useMemo;
                var2 = new Array(3);
                var2[0] = var10;
                var14 = var14.size;
                var2[1] = var14;
                var1 = var1.size;
                var2[2] = var1;
                var1 = function() { // Environment: var12
                    _fun88540: for (var _fun88540_ip = 0;;) switch (_fun88540_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.type;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 8;
                            var2 = var2[var5];
                            var4 = undefined;
                            var2 = var6.bind(var4)(var2);
                            var2 = var2.ShopBlockType;
                            var2 = var2.HERO;
                            if (!(var3 !== var2)) {
                                _fun88540_ip = 182;
                                continue _fun88540
                            }
                        case 56:
                            var2 = _closure2_slot0;
                            var2 = var2.type;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.ShopBlockType;
                            var0 = var0.REWARD_HERO;
                            if (!(var2 !== var0)) {
                                _fun88540_ip = 146;
                                continue _fun88540
                            }
                        case 98:
                            var0 = _closure2_slot1;
                            var5 = var0.size;
                            var0 = _closure2_slot2;
                            var4 = var0.size;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var0 = '-';
                            var0 = var3.bind(var2)(var5, var0, var4);
                            _fun88540_ip = 180;
                            continue _fun88540;
                        case 146:
                            var2 = _closure2_slot0;
                            var4 = var2.categoryStoreListingId;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'reward-hero-';
                            var0 = var3.bind(var2)(var4);
                        case 180:
                            _fun88540_ip = 216;
                            continue _fun88540;
                        case 182:
                            var1 = _closure2_slot0;
                            var3 = var1.categoryStoreListingId;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'hero-';
                            var0 = var2.bind(var1)(var3);
                        case 216:
                            return var0;
                    }
                };
                var6 = var6.bind(var11)(var1, var2);
                var1 = var10.type;
                var2 = 8;
                var0 = var0[var2];
                var0 = var4.bind(var3)(var0);
                var0 = var0.ShopBlockType;
                var0 = var0.HERO;
                if (!(var0 !== var1)) {
                    _fun88537_ip = 594;
                    continue _fun88537
                }
            case 245:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var4.bind(var3)(var0);
                var0 = var0.ShopBlockType;
                var0 = var0.FEATURED;
                if (!(var0 !== var1)) {
                    _fun88537_ip = 482;
                    continue _fun88537
                }
            case 281:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var4.bind(var3)(var0);
                var0 = var0.ShopBlockType;
                var0 = var0.FEED;
                if (!(var0 !== var1)) {
                    _fun88537_ip = 380;
                    continue _fun88537
                }
            case 314:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var4.bind(var3)(var0);
                var0 = var0.ShopBlockType;
                var0 = var0.SHELF;
                if (!(var0 !== var1)) {
                    _fun88537_ip = 376;
                    continue _fun88537
                }
            case 347:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ShopBlockType;
                var0 = var0.WIDE_BANNER;
            case 376:
                var0 = null;
                return var0;
            case 380:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 10;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.CollectiblesAnalyticsProvider;
                var0 = {};
                var4 = {};
                var11 = 'popular picks';
                var4.pageSection = var11;
                var0.newValue = var4;
                var11 = _closure1_slot1;
                var4 = 13;
                var4 = var14[var4];
                var11 = var11.bind(var3)(var4);
                var4 = {};
                var4.feedBlock = var10;
                var4.screen = var13;
                var4.preferVCPrice = var9;
                var4 = var2.bind(var3)(var11, var4, var6);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 482:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.CollectiblesAnalyticsProvider;
                var0 = {};
                var4 = {};
                var11 = 'featured_block';
                var4.pageSection = var11;
                var0.newValue = var4;
                var11 = _closure1_slot4;
                var4 = {};
                var13 = var8.featuredContainer;
                var4.style = var13;
                var14 = var10.subblocks;
                var13 = var14.map;
                var12 = function(arg0, arg1) { // Environment: var12
                    var5 = arg0;
                    var3 = _closure1_slot5;
                    var2 = var3.getCategoryByStoreListingId;
                    var0 = var5.categoryStoreListingId;
                    var0 = var2.bind(var3)(var0);
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.featuredCategory = var5;
                    var1.category = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var12 = var13.bind(var14)(var12);
                var4.children = var12;
                var4 = var2.bind(var3)(var11, var4, var6);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 594:
                var2 = _closure1_slot5;
                var1 = var2.getCategory;
                var0 = var10.categorySkuId;
                var0 = var1.bind(var2)(var0);
                var2 = null;
                var1 = var2 != var0;
                if (!var1) {
                    _fun88537_ip = 630;
                    continue _fun88537
                }
            case 624:
                var1 = var0.isOrbsExclusive;
            case 630:
                if (var1) {
                    _fun88537_ip = 664;
                    continue _fun88537
                }
            case 633:
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var1 = var11[var1];
                var1 = var4.bind(var3)(var1);
                var14 = var1.COLLECTIBLES_SHOP_CARD_HEIGHT;
                _fun88537_ip = 831;
                continue _fun88537;
            case 664:
                var1 = global;
                var4 = var1.Math;
                var1 = var4.ceil;
                var0 = var0.products;
                var0 = var0.length;
                var0 = var0 / var5;
                var5 = var1.bind(var4)(var0);
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 9;
                var1 = var11[var0];
                var1 = var4.bind(var3)(var1);
                var1 = var1.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var1 = var1 * var5;
                var0 = var11[var0];
                var0 = var4.bind(var3)(var0);
                var4 = var0.COLLECTIBLES_SHOP_CARD_GAP;
                var0 = 1;
                var0 = var5 - var0;
                var0 = var4 * var0;
                var1 = var1 + var0;
                var0 = var10.mobileProductsTitle;
                var2 = var2 != var0;
                var0 = 0;
                if (!var2) {
                    _fun88537_ip = 827;
                    continue _fun88537
                }
            case 773:
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 5;
                var4 = var11[var2];
                var4 = var5.bind(var3)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_24;
                var2 = var11[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_16;
                var0 = var4 + var2;
            case 827:
                var14 = var1 + var0;
            case 831:
                var2 = _closure1_slot6;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 10;
                var0 = var11[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.CollectiblesAnalyticsProvider;
                var0 = {};
                var4 = {};
                var5 = 'top 4';
                var4.pageSection = var5;
                var0.newValue = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var12 = var8.heroContainer;
                var8 = new Array(2);
                var8[0] = var12;
                var12 = {};
                var13 = 275;
                var14 = var13 + var14;
                var13 = 9;
                var13 = var11[var13];
                var13 = var15.bind(var3)(var13);
                var15 = var13.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var13 = 0.5;
                var13 = var13 * var15;
                var13 = var14 - var13;
                var12.height = var13;
                var8[1] = var12;
                var4.style = var8;
                var8 = _closure1_slot1;
                var7 = 11;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.heroBlock = var10;
                var7.preferVCPrice = var9;
                var7 = var2.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var2.bind(var3)(var5, var4, var6);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4555, 33, 1297, 671, 566, 11429, 3275, 11252, 11310, 11430, 11438, 11439, 2]);