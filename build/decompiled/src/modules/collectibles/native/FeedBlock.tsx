// modules/collectibles/native/FeedBlock.tsx
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
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'height': '100%'
    };
    var3.feedContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var3.feedTitle = var8;
    var8 = {
        'display': 'flex',
        'gap': null,
        'paddingTop': null,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingTop = var9;
    var3.feedFooter = var8;
    var8 = {
        'width': '100%',
        'resizeMode': 'cover'
    };
    var3.feedFooterImage = var8;
    var8 = {
        'width': '100%',
        'alignSelf': 'center',
        'resizeMode': 'contain',
        'height': 130
    };
    var3.feedFooterOrbImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/FeedBlock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88647: for (var _fun88647_ip = 0;;) switch (_fun88647_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.feedBlock;
                var _closure2_slot0 = var5;
                var4 = var1.screen;
                var7 = var1.preferVCPrice;
                var1 = _closure1_slot11;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 8;
                var2 = var17[var1];
                var9 = var22.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot7;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var6, var2);
                var6 = _closure1_slot1;
                var2 = 10;
                var2 = var17[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var _closure2_slot1 = var2;
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var10 = var5.rankedSkuIds;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.rankedSkuIds;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var6.bind(var8)(var2, var5);
                var2 = 11;
                var2 = var17[var2];
                var6 = var22.bind(var3)(var2);
                var5 = var6.useFilteredAndSortedProducts;
                var2 = {};
                var2.products = var8;
                var12 = 36;
                var2.maxProducts = var12;
                var2.screen = var4;
                var13 = var5.bind(var6)(var2);
                var18 = function() {
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 12;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 13;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var9 = var8.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var1.analyticsLocations = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
                    var1.analyticsSource = var5;
                    var4 = _closure1_slot8;
                    var4 = var4.SHOP_ALL;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = _closure1_slot8;
                var2 = var2.ORBS;
                var11 = var4 === var2;
                var1 = var17[var1];
                var4 = var22.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var5 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var10 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var14.feedContainer;
                var0.style = var4;
                var4 = {};
                var5 = var14.feedTitle;
                var4.style = var5;
                var15 = _closure1_slot9;
                var8 = 14;
                var5 = var17[var8];
                var5 = var22.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var19 = 'heading-lg/semibold';
                var5.variant = var19;
                var21 = 15;
                var19 = var17[var21];
                var19 = var22.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var17[var21];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.ivaAA7;
                var17 = var19.bind(var20)(var17);
                var5.children = var17;
                var6 = var15.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = !var11;
                if (var11) {
                    _fun88647_ip = 503;
                    continue _fun88647
                }
            case 395:
                var19 = _closure1_slot9;
                var24 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 16;
                var15 = var20[var15];
                var15 = var24.bind(var3)(var15);
                var17 = var15.Button;
                var15 = {};
                var15.onPress = var18;
                var22 = var20[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var20 = var20[var21];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.xFcotU;
                var20 = var22.bind(var23)(var20);
                var15.text = var20;
                var20 = 'primary';
                var15.variant = var20;
                var20 = 'md';
                var15.size = var20;
                var6 = var19.bind(var3)(var17, var15);
            case 503:
                var5[1] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var15 = _closure1_slot9;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var5 = 17;
                var5 = var17[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.products = var13;
                var5.loadingCardsNum = var12;
                var5.preferVCPrice = var7;
                var5 = var15.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var12 = var14.feedFooter;
                var5.style = var12;
                var20 = _closure1_slot0;
                var8 = var17[var8];
                var8 = var20.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {};
                var13 = 'text-lg/bold';
                var8.variant = var13;
                var13 = var17[var21];
                var13 = var20.bind(var3)(var13);
                var22 = var13.intl;
                var19 = var22.string;
                var13 = var17[var21];
                var13 = var20.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.Yr70c4;
                var13 = var19.bind(var22)(var13);
                var8.children = var13;
                var12 = var15.bind(var3)(var12, var8);
                var8 = new Array(3);
                var8[0] = var12;
                var12 = 16;
                var12 = var17[var12];
                var12 = var20.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var12.onPress = var18;
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.AfrvRD;
                var17 = var18.bind(var19)(var17);
                var12.text = var17;
                var17 = 'primary';
                var12.variant = var17;
                var17 = 'md';
                var12.size = var17;
                var12 = var15.bind(var3)(var13, var12);
                var8[1] = var12;
                var13 = _closure1_slot9;
                if (var11) {
                    _fun88647_ip = 885;
                    continue _fun88647
                }
            case 797:
                var11 = _closure1_slot4;
                var12 = {};
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                if (var9) {
                    _fun88647_ip = 845;
                    continue _fun88647
                }
            case 814:
                var9 = 22;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var12.source = var9;
                var9 = var14.feedFooterImage;
                var12.style = var9;
                var9 = var12;
                _fun88647_ip = 874;
                continue _fun88647;
            case 845:
                var15 = 21;
                var15 = var18[var15];
                var15 = var17.bind(var3)(var15);
                var12.source = var15;
                var15 = var14.feedFooterImage;
                var12.style = var15;
                var9 = var12;
            case 874:
                var9 = var13.bind(var3)(var11, var9);
                _fun88647_ip = 1049;
                continue _fun88647;
            case 885:
                if (var10) {
                    _fun88647_ip = 994;
                    continue _fun88647
                }
            case 888:
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 19;
                var10 = var17[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.VideoComponent;
                var10 = {
                    'source': null,
                    'style': null,
                    'resizeMode': 'contain',
                    'muted': true,
                    'pauseWhileAppInactive': true,
                    'paused': false,
                    'poster': null,
                    'preventsDisplaySleepDuringVideoPlayback': false
                };
                var12 = {};
                var15 = _closure1_slot1;
                var18 = 20;
                var18 = var17[var18];
                var18 = var15.bind(var3)(var18);
                var12.uri = var18;
                var10.source = var12;
                var12 = var14.feedFooterOrbImage;
                var10.style = var12;
                var12 = 18;
                var12 = var17[var12];
                var12 = var15.bind(var3)(var12);
                var10.poster = var12;
                var10 = var13.bind(var3)(var11, var10);
                _fun88647_ip = 1046;
                continue _fun88647;
            case 994:
                var12 = _closure1_slot4;
                var11 = {};
                var15 = {};
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 18;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var15.uri = var16;
                var11.source = var15;
                var14 = var14.feedFooterOrbImage;
                var11.style = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 1046:
                var9 = var10;
            case 1049:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3196, 3283, 33, 1297, 671, 566, 3206, 11482, 11473, 4597, 5579, 4876, 1234, 4084, 11486, 11490, 8856, 11491, 11492, 11493, 2]);