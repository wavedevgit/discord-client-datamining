// modules/skus/native/SKUPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun87820: for (var _fun87820_ip = 0;;) switch (_fun87820_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.collectiblesItemData;
                var8 = var2.backgroundColor;
                var _closure2_slot0 = var8;
                var2 = _closure1_slot11;
                var3 = undefined;
                var11 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot6;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var5.bind(var6)(var4, var2);
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun87822: for (var _fun87822_ip = 0;;) switch (_fun87822_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun87822_ip = 137;
                                continue _fun87822
                            }
                        case 16:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var1 = var6[var3];
                            var4 = undefined;
                            var1 = var5.bind(var4)(var1);
                            var2 = _closure2_slot0;
                            var8 = var1.bind(var4)(var2);
                            var7 = var8.alpha;
                            var1 = 0;
                            var7 = var7.bind(var8)(var1);
                            var1 = var7.css;
                            var7 = var1.bind(var7)();
                            var1 = new Array(3);
                            var1[0] = var7;
                            var3 = var6[var3];
                            var3 = var5.bind(var4)(var3);
                            var5 = var3.bind(var4)(var2);
                            var4 = var5.alpha;
                            var3 = 0.6;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.css;
                            var3 = var3.bind(var4)();
                            var1[1] = var3;
                            var1[2] = var2;
                            var0 = var1;
                        case 137:
                            return var0;
                    }
                };
                var9 = var4.bind(var5)(var1, var2);
                var2 = var0.type;
                var1 = 'bundle';
                if (!(var1 !== var2)) {
                    _fun87820_ip = 502;
                    continue _fun87820
                }
            case 129:
                var1 = var0.item;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 14;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun87820_ip = 416;
                    continue _fun87820
                }
            case 178:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun87820_ip = 327;
                    continue _fun87820
                }
            case 211:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun87820_ip = 248;
                    continue _fun87820
                }
            case 244:
                var1 = null;
                return var1;
            case 248:
                var4 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var11.container;
                var1.style = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 17;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var0.item;
                var5.item = var12;
                var12 = false;
                var5.isPurchased = var12;
                var5 = var7.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 327:
                var4 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var11.container;
                var1.style = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 16;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var0.item;
                var5.item = var12;
                var12 = false;
                var5.isPurchased = var12;
                var5.isDarkTheme = var13;
                var5.showGradient = var12;
                var5 = var7.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 416:
                var4 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var11.container;
                var1.style = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 15;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'isPurchased': false,
                    'item': null,
                    'size': 100
                };
                var12 = var0.item;
                var5.item = var12;
                var5 = var7.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 502:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.isValidCollectiblesBundleItems;
                var1 = var0.items;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun87820_ip = 545;
                    continue _fun87820
                }
            case 541:
                var1 = null;
                return var1;
            case 545:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ItemsSortingHat;
                var17 = var0.items;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var14 = var0 instanceof Object ? var0 : var1;
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var4 = {};
                var5 = null;
                var12 = var5 != var8;
                var8 = undefined;
                if (!var12) {
                    _fun87820_ip = 642;
                    continue _fun87820
                }
            case 636:
                var8 = var11.bundleOffset;
            case 642:
                var4.style = var8;
                var13 = _closure1_slot9;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 12;
                var8 = var15[var8];
                var12 = var12.bind(var3)(var8);
                var8 = {};
                var15 = false;
                var8.isPurchased = var15;
                var15 = var14.firstAvatarDecoration;
                var8.deco = var15;
                var15 = var14.firstProfileEffect;
                var8.pfx = var15;
                var14 = var14.firstNameplate;
                var8.nameplate = var14;
                var14 = 'small';
                var8.size = var14;
                var8 = var13.bind(var3)(var12, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5 != var9;
                if (!var5) {
                    _fun87820_ip = 834;
                    continue _fun87820
                }
            case 751:
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 13;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var11 = var11.gradient;
                var6.style = var11;
                var11 = _closure1_slot8;
                var11 = var11.START;
                var6.start = var11;
                var10 = _closure1_slot8;
                var10 = var10.END;
                var6.end = var10;
                var6.colors = var9;
                var9 = 'none';
                var6.pointerEvents = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 834:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = function arg0() {
        _fun87823: for (var _fun87823_ip = 0;;) switch (_fun87823_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.sku;
                var _closure2_slot0 = var6;
                var1 = var1.backgroundColor;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var4.bind(var5)(var0, var3);
                var0 = null;
                var3 = var0 == var5;
                if (var3) {
                    _fun87823_ip = 89;
                    continue _fun87823
                }
            case 62:
                var4 = _closure1_slot9;
                var3 = _closure1_slot12;
                var2 = {};
                var2.collectiblesItemData = var5;
                var2.backgroundColor = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 89:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var10 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.transformSKUToCollectiblesItem;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SKUProductLines;
    var _closure1_slot7 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.container = var9;
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = '60%';
    var10 = 'top';
    var9[var10] = var11;
    var4.gradient = var9;
    var9 = {};
    var10 = 20;
    var9.marginTop = var10;
    var4.bundleOffset = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/native/SKUPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun87826: for (var _fun87826_ip = 0;;) switch (_fun87826_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.sku;
                var0 = var0.backgroundColor;
                var3 = var4.productLine;
                var2 = _closure1_slot7;
                var2 = var2.COLLECTIBLES;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 189;
                    continue _fun87826
                }
            case 40:
                var2 = _closure1_slot7;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 169;
                    continue _fun87826
                }
            case 54:
                var2 = _closure1_slot7;
                var2 = var2.APPLICATION;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 165;
                    continue _fun87826
                }
            case 68:
                var2 = _closure1_slot7;
                var2 = var2.BOOST;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 165;
                    continue _fun87826
                }
            case 82:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_ROLE;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 165;
                    continue _fun87826
                }
            case 96:
                var2 = _closure1_slot7;
                var2 = var2.PREMIUM;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 165;
                    continue _fun87826
                }
            case 110:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_PRODUCT;
                if (!(var2 !== var3)) {
                    _fun87826_ip = 165;
                    continue _fun87826
                }
            case 124:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var3);
                var5 = var6.assertNever;
                var3 = var4.productLine;
                var3 = var5.bind(var6)(var3);
                return var2;
            case 165:
                var2 = null;
                return var2;
            case 169:
                var6 = _closure1_slot9;
                var5 = _closure1_slot14;
                var3 = undefined;
                var2 = {};
                var2 = var6.bind(var3)(var5, var2);
                return var2;
            case 189:
                var3 = _closure1_slot9;
                var2 = _closure1_slot13;
                var1 = {};
                var1.sku = var4;
                var1.backgroundColor = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.CollectiblesPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4622, 3198, 660, 33, 1297, 566, 3207, 669, 11359, 6955, 6971, 4098, 3494, 6984, 6972, 9571, 1304, 2]);