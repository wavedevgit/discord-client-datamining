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
        _fun103242: for (var _fun103242_ip = 0;;) switch (_fun103242_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.sku;
                var _closure2_slot0 = var7;
                var11 = var1.showGradient;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun103242_ip = 29;
                    continue _fun103242
                }
            case 27:
                var11 = true;
            case 29:
                var1 = _closure1_slot9;
                var6 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var8 = var2.bind(var4)(var1);
                var3 = var8.useStateFromStores;
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
                var12 = var3.bind(var8)(var2, var1);
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var7;
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
                    _fun103242_ip = 715;
                    continue _fun103242
                }
            case 129:
                var3 = var1.type;
                var2 = 'bundle';
                if (!(var2 !== var3)) {
                    _fun103242_ip = 516;
                    continue _fun103242
                }
            case 145:
                var2 = var1.item;
                var3 = var2.type;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 12;
                var2 = var2[var8];
                var2 = var7.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.AVATAR_DECORATION;
                if (!(var2 !== var3)) {
                    _fun103242_ip = 430;
                    continue _fun103242
                }
            case 194:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var7.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.PROFILE_EFFECT;
                if (!(var2 !== var3)) {
                    _fun103242_ip = 341;
                    continue _fun103242
                }
            case 227:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var7.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.NAMEPLATE;
                if (!(var2 !== var3)) {
                    _fun103242_ip = 262;
                    continue _fun103242
                }
            case 260:
                return var0;
            case 262:
                var7 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var8 = var6.container;
                var2.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 15;
                var8 = var13[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var13 = var1.item;
                var8.item = var13;
                var13 = false;
                var8.isPurchased = var13;
                var8 = var10.bind(var4)(var9, var8);
                var2.children = var8;
                var2 = var7.bind(var4)(var3, var2);
                return var2;
            case 341:
                var7 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var8 = var6.container;
                var2.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 14;
                var8 = var13[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var13 = var1.item;
                var8.item = var13;
                var13 = false;
                var8.isPurchased = var13;
                var8.isDarkTheme = var12;
                var8.showGradient = var11;
                var8 = var10.bind(var4)(var9, var8);
                var2.children = var8;
                var2 = var7.bind(var4)(var3, var2);
                return var2;
            case 430:
                var7 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var8 = var6.container;
                var2.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 13;
                var8 = var11[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {
                    'isPurchased': false,
                    'item': null,
                    'size': 100
                };
                var11 = var1.item;
                var8.item = var11;
                var8 = var10.bind(var4)(var9, var8);
                var2.children = var8;
                var2 = var7.bind(var4)(var3, var2);
                return var2;
            case 516:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var7 = var3.bind(var4)(var2);
                var3 = var7.isValidCollectiblesBundleItems;
                var2 = var1.items;
                var2 = var3.bind(var7)(var2);
                if (var2) {
                    _fun103242_ip = 557;
                    continue _fun103242
                }
            case 555:
                return var0;
            case 557:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 10;
                var2 = var9[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.ItemsSortingHat;
                var15 = var1.items;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = var2;
                var1 = new var16[var3](var15, var14);
                var8 = var1 instanceof Object ? var1 : var2;
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var5 = 11;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var9 = false;
                var5.isPurchased = var9;
                var9 = var8.firstAvatarDecoration;
                var5.deco = var9;
                var9 = var8.firstProfileEffect;
                var5.pfx = var9;
                var8 = var8.firstNameplate;
                var5.nameplate = var8;
                var8 = 'small';
                var5.size = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 715:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = var3.SKUProductLines;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
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
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/skus/native/SKUPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103246: for (var _fun103246_ip = 0;;) switch (_fun103246_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.sku;
                var4 = var0.showGradient;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun103246_ip = 23;
                    continue _fun103246
                }
            case 21:
                var4 = true;
            case 23:
                var2 = var5.productLine;
                var1 = _closure1_slot7;
                var1 = var1.COLLECTIBLES;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 194;
                    continue _fun103246
                }
            case 49:
                var1 = _closure1_slot7;
                var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 176;
                    continue _fun103246
                }
            case 63:
                var1 = _closure1_slot7;
                var1 = var1.APPLICATION;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 172;
                    continue _fun103246
                }
            case 77:
                var1 = _closure1_slot7;
                var1 = var1.BOOST;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 172;
                    continue _fun103246
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_ROLE;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 172;
                    continue _fun103246
                }
            case 105:
                var1 = _closure1_slot7;
                var1 = var1.PREMIUM;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 172;
                    continue _fun103246
                }
            case 119:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_PRODUCT;
                if (!(var1 !== var2)) {
                    _fun103246_ip = 172;
                    continue _fun103246
                }
            case 133:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.assertNever;
                var1 = var5.productLine;
                var1 = var2.bind(var6)(var1);
                return var3;
            case 172:
                var1 = null;
                return var1;
            case 176:
                var6 = _closure1_slot8;
                var2 = _closure1_slot11;
                var1 = {};
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 194:
                var2 = _closure1_slot8;
                var1 = _closure1_slot10;
                var0 = {};
                var0.sku = var5;
                var0.showGradient = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4622, 3196, 660, 33, 1297, 566, 3206, 11330, 6906, 6922, 3493, 6935, 6923, 9519, 1304, 2]);