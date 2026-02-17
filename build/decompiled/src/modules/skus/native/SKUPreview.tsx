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
        _fun87802: for (var _fun87802_ip = 0;;) switch (_fun87802_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.collectiblesItemData;
                var1 = _closure1_slot9;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var7 = var2.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
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
                var11 = var5.bind(var7)(var2, var1);
                var2 = var0.type;
                var1 = 'bundle';
                if (!(var1 !== var2)) {
                    _fun87802_ip = 463;
                    continue _fun87802
                }
            case 90:
                var1 = var0.item;
                var2 = var1.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 12;
                var1 = var1[var7];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun87802_ip = 377;
                    continue _fun87802
                }
            case 139:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun87802_ip = 288;
                    continue _fun87802
                }
            case 172:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun87802_ip = 209;
                    continue _fun87802
                }
            case 205:
                var1 = null;
                return var1;
            case 209:
                var5 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var6.container;
                var1.style = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 15;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var10 = var0.item;
                var7.item = var10;
                var10 = false;
                var7.isPurchased = var10;
                var7 = var9.bind(var3)(var8, var7);
                var1.children = var7;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 288:
                var5 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var6.container;
                var1.style = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 14;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var10 = var0.item;
                var7.item = var10;
                var10 = false;
                var7.isPurchased = var10;
                var7.isDarkTheme = var11;
                var7.showGradient = var10;
                var7 = var9.bind(var3)(var8, var7);
                var1.children = var7;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 377:
                var5 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var6.container;
                var1.style = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 13;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {
                    'isPurchased': false,
                    'item': null,
                    'size': 100
                };
                var10 = var0.item;
                var7.item = var10;
                var7 = var9.bind(var3)(var8, var7);
                var1.children = var7;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 463:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.isValidCollectiblesBundleItems;
                var1 = var0.items;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun87802_ip = 506;
                    continue _fun87802
                }
            case 502:
                var1 = null;
                return var1;
            case 506:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ItemsSortingHat;
                var14 = var0.items;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var1;
                var0 = new var15[var2](var14, var13);
                var7 = var0 instanceof Object ? var0 : var1;
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var9 = var6.container;
                var5 = new Array(2);
                var5[0] = var9;
                var6 = var6.bundleContainer;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot8;
                var5 = _closure1_slot1;
                var4 = 11;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var8 = false;
                var4.isPurchased = var8;
                var8 = var7.firstAvatarDecoration;
                var4.deco = var8;
                var8 = var7.firstProfileEffect;
                var4.pfx = var8;
                var7 = var7.firstNameplate;
                var4.nameplate = var7;
                var7 = 'small';
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = function arg0() {
        _fun87804: for (var _fun87804_ip = 0;;) switch (_fun87804_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.sku;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var0, var1);
                var0 = null;
                var3 = var0 == var1;
                if (var3) {
                    _fun87804_ip = 80;
                    continue _fun87804
                }
            case 57:
                var4 = _closure1_slot8;
                var3 = _closure1_slot10;
                var2 = {};
                var2.collectiblesItemData = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 80:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var4 = var4.SKUProductLines;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
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
    var10 = 20;
    var9.paddingTop = var10;
    var4.bundleContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/native/SKUPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun87807: for (var _fun87807_ip = 0;;) switch (_fun87807_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.sku;
                var3 = var0.productLine;
                var2 = _closure1_slot7;
                var2 = var2.COLLECTIBLES;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 184;
                    continue _fun87807
                }
            case 35:
                var2 = _closure1_slot7;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 164;
                    continue _fun87807
                }
            case 49:
                var2 = _closure1_slot7;
                var2 = var2.APPLICATION;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 160;
                    continue _fun87807
                }
            case 63:
                var2 = _closure1_slot7;
                var2 = var2.BOOST;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 160;
                    continue _fun87807
                }
            case 77:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_ROLE;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 160;
                    continue _fun87807
                }
            case 91:
                var2 = _closure1_slot7;
                var2 = var2.PREMIUM;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 160;
                    continue _fun87807
                }
            case 105:
                var2 = _closure1_slot7;
                var2 = var2.GUILD_PRODUCT;
                if (!(var2 !== var3)) {
                    _fun87807_ip = 160;
                    continue _fun87807
                }
            case 119:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.assertNever;
                var3 = var0.productLine;
                var3 = var4.bind(var5)(var3);
                return var2;
            case 160:
                var2 = null;
                return var2;
            case 164:
                var5 = _closure1_slot8;
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = {};
                var2 = var5.bind(var3)(var4, var2);
                return var2;
            case 184:
                var3 = _closure1_slot8;
                var2 = _closure1_slot11;
                var1 = {};
                var1.sku = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.CollectiblesPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4627, 3203, 660, 33, 1297, 566, 3212, 11340, 6968, 6984, 1644, 6998, 6986, 9523, 1304, 2]);