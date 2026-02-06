// modules/skus/native/SKUPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103269: for (var _fun103269_ip = 0;;) switch (_fun103269_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.sku;
                var _closure2_slot0 = var5;
                var8 = var1.backgroundColor;
                var _closure2_slot1 = var8;
                var1 = _closure1_slot11;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
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
                var14 = var3.bind(var6)(var2, var1);
                var6 = _closure1_slot3;
                var3 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var0
                    _fun103271: for (var _fun103271_ip = 0;;) switch (_fun103271_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun103271_ip = 137;
                                continue _fun103271
                            }
                        case 16:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var1 = var6[var3];
                            var4 = undefined;
                            var1 = var5.bind(var4)(var1);
                            var2 = _closure2_slot1;
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
                var10 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun103269_ip = 887;
                    continue _fun103269
                }
            case 156:
                var3 = var1.type;
                var2 = 'bundle';
                if (!(var2 !== var3)) {
                    _fun103269_ip = 543;
                    continue _fun103269
                }
            case 172:
                var2 = var1.item;
                var3 = var2.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 14;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.AVATAR_DECORATION;
                if (!(var2 !== var3)) {
                    _fun103269_ip = 457;
                    continue _fun103269
                }
            case 221:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.PROFILE_EFFECT;
                if (!(var2 !== var3)) {
                    _fun103269_ip = 368;
                    continue _fun103269
                }
            case 254:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.NAMEPLATE;
                if (!(var2 !== var3)) {
                    _fun103269_ip = 289;
                    continue _fun103269
                }
            case 287:
                return var0;
            case 289:
                var5 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var12.container;
                var2.style = var6;
                var9 = _closure1_slot9;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 17;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var13 = var1.item;
                var6.item = var13;
                var13 = false;
                var6.isPurchased = var13;
                var6 = var9.bind(var4)(var7, var6);
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 368:
                var5 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var12.container;
                var2.style = var6;
                var9 = _closure1_slot9;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 16;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var13 = var1.item;
                var6.item = var13;
                var13 = false;
                var6.isPurchased = var13;
                var6.isDarkTheme = var14;
                var6.showGradient = var13;
                var6 = var9.bind(var4)(var7, var6);
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 457:
                var5 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var12.container;
                var2.style = var6;
                var9 = _closure1_slot9;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 15;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {
                    'isPurchased': false,
                    'item': null,
                    'size': 100
                };
                var13 = var1.item;
                var6.item = var13;
                var6 = var9.bind(var4)(var7, var6);
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 543:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.isValidCollectiblesBundleItems;
                var2 = var1.items;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun103269_ip = 584;
                    continue _fun103269
                }
            case 582:
                return var0;
            case 584:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.ItemsSortingHat;
                var17 = var1.items;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var18 = var2;
                var1 = new var18[var3](var17, var16);
                var14 = var1 instanceof Object ? var1 : var2;
                var3 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var12.container;
                var1.style = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var0 != var8;
                var8 = undefined;
                if (!var9) {
                    _fun103269_ip = 679;
                    continue _fun103269
                }
            case 673:
                var8 = var12.bundleOffset;
            case 679:
                var5.style = var8;
                var13 = _closure1_slot9;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 12;
                var8 = var15[var8];
                var9 = var9.bind(var4)(var8);
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
                var8 = var13.bind(var4)(var9, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var0 != var10;
                if (!var6) {
                    _fun103269_ip = 871;
                    continue _fun103269
                }
            case 788:
                var9 = _closure1_slot9;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 13;
                var7 = var13[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var12 = var12.gradient;
                var7.style = var12;
                var12 = _closure1_slot8;
                var12 = var12.START;
                var7.start = var12;
                var11 = _closure1_slot8;
                var11 = var11.END;
                var7.end = var11;
                var7.colors = var10;
                var10 = 'none';
                var7.pointerEvents = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 871:
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 887:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.transformSKUToCollectiblesItem;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SKUProductLines;
    var _closure1_slot7 = var6;
    var3 = var3.VerticalGradient;
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
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {};
    var12 = var9.absoluteFillObject;
    var13 = var8;
    var9 = copyDataProperties(var13, var12);
    var10 = '60%';
    var9 = 'top';
    var8[var9] = var10;
    var3.gradient = var8;
    var8 = {};
    var9 = 20;
    var8.marginTop = var9;
    var3.bundleOffset = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/skus/native/SKUPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103274: for (var _fun103274_ip = 0;;) switch (_fun103274_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.sku;
                var0 = var0.backgroundColor;
                var3 = var4.productLine;
                var2 = _closure1_slot7;
                var2 = var2.COLLECTIBLES;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 189;
                    continue _fun103274
                }
            case 40:
                var2 = _closure1_slot7;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 169;
                    continue _fun103274
                }
            case 54:
                var2 = _closure1_slot7;
                var2 = var2.APPLICATION;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 165;
                    continue _fun103274
                }
            case 68:
                var2 = _closure1_slot7;
                var2 = var2.BOOST;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 165;
                    continue _fun103274
                }
            case 82:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_ROLE;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 165;
                    continue _fun103274
                }
            case 96:
                var2 = _closure1_slot7;
                var2 = var2.PREMIUM;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 165;
                    continue _fun103274
                }
            case 110:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_PRODUCT;
                if (!(var2 !== var3)) {
                    _fun103274_ip = 165;
                    continue _fun103274
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
                var5 = _closure1_slot13;
                var3 = undefined;
                var2 = {};
                var2 = var6.bind(var3)(var5, var2);
                return var2;
            case 189:
                var3 = _closure1_slot9;
                var2 = _closure1_slot12;
                var1 = {};
                var1.sku = var4;
                var1.backgroundColor = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4623, 3198, 660, 33, 1297, 566, 3208, 669, 11333, 6911, 6927, 4099, 3495, 6940, 6928, 9526, 1304, 2]);