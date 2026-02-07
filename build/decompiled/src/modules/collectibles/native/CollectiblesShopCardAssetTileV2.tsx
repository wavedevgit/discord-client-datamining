// modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden',
        'height': '100%',
        'width': '100%'
    };
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var3.assetContainer = var9;
    var9 = {
        'position': 'absolute',
        'opacity': 1,
        'color': null,
        'fontWeight': 'bold'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_STRONG;
    var9.color = var10;
    var3.overlayIcon = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'zIndex': 2,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '75%'
    };
    var3.overlayContainer = var9;
    var9 = {
        'width': 80,
        'height': 80,
        'resizeMode': 'contain'
    };
    var3.externalProductImage = var9;
    var9 = {};
    var10 = 0.4;
    var9.opacity = var10;
    var3.externalProductPurchased = var9;
    var9 = {};
    var9.opacity = var10;
    var3.externalProductDisabled = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var6.overlayContainer;
        var0.style = var5;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 7;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.CheckmarkLargeBoldIcon;
        var4 = {};
        var7 = 'lg';
        var4.size = var7;
        var6 = var6.overlayIcon;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var6.overlayContainer;
        var0.style = var5;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 8;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.LockIcon;
        var4 = {};
        var7 = 'lg';
        var4.size = var7;
        var6 = var6.overlayIcon;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun88050: for (var _fun88050_ip = 0;;) switch (_fun88050_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.product;
                var9 = var0.isDarkTheme;
                var7 = var0.isPurchased;
                var10 = var0.isDisabled;
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 9;
                var4 = var2[var3];
                var3 = undefined;
                var5 = var11.bind(var3)(var4);
                var4 = var5.useShopProductItems;
                var4 = var4.bind(var5)(var1);
                var5 = var4.firstProfileEffect;
                var6 = var4.firstAvatarDecoration;
                var4 = var4.firstNameplate;
                var8 = _closure1_slot8;
                var12 = var8.bind(var3)();
                var8 = var1.type;
                var14 = 10;
                var2 = var2[var14];
                var2 = var11.bind(var3)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.BUNDLE;
                if (!(var8 === var2)) {
                    _fun88050_ip = 159;
                    continue _fun88050
                }
            case 122:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var2 = var11[var2];
                var8 = var8.bind(var3)(var2);
                var2 = var8.isValidCollectiblesBundle;
                var2 = var2.bind(var8)(var1);
                if (var2) {
                    _fun88050_ip = 795;
                    continue _fun88050
                }
            case 159:
                var11 = _closure1_slot3;
                var8 = var1.items;
                var2 = 1;
                var8 = var11.bind(var3)(var8, var2);
                var2 = 0;
                var13 = var8[var2];
                var8 = var1.skuId;
                var2 = _closure1_slot5;
                var2 = var2.ORB_PROFILE_BADGE;
                if (!(var8 !== var2)) {
                    _fun88050_ip = 675;
                    continue _fun88050
                }
            case 206:
                var2 = var1.skuId;
                var1 = _closure1_slot5;
                var1 = var1.FRACTIONAL_PREMIUM;
                if (!(var2 !== var1)) {
                    _fun88050_ip = 542;
                    continue _fun88050
                }
            case 229:
                var1 = null;
                var2 = var1 == var13;
                var8 = undefined;
                if (var2) {
                    _fun88050_ip = 245;
                    continue _fun88050
                }
            case 240:
                var8 = var13.type;
            case 245:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var14];
                var2 = var11.bind(var3)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.AVATAR_DECORATION;
                if (!(var2 !== var8)) {
                    _fun88050_ip = 466;
                    continue _fun88050
                }
            case 281:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var14];
                var2 = var11.bind(var3)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.PROFILE_EFFECT;
                if (!(var2 !== var8)) {
                    _fun88050_ip = 418;
                    continue _fun88050
                }
            case 314:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var14];
                var2 = var11.bind(var3)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.NAMEPLATE;
                if (!(var2 !== var8)) {
                    _fun88050_ip = 349;
                    continue _fun88050
                }
            case 347:
                return var1;
            case 349:
                var8 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var12.overlayContainer;
                var1.style = var11;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 18;
                var11 = var15[var11];
                var14 = var14.bind(var3)(var11);
                var11 = {};
                var11.item = var13;
                var11.isPurchased = var7;
                var11 = var8.bind(var3)(var14, var11);
                var1.children = var11;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 418:
                var8 = _closure1_slot6;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 17;
                var1 = var11[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.item = var13;
                var1.isPurchased = var7;
                var1.isDarkTheme = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 466:
                var8 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var9 = var12.overlayContainer;
                var1.style = var9;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 16;
                var9 = var14[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var9.isPurchased = var7;
                var9.item = var13;
                var13 = 100;
                var9.size = var13;
                var9 = var8.bind(var3)(var11, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 542:
                var8 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var12.overlayContainer;
                var9 = new Array(3);
                var9[0] = var11;
                var11 = var7;
                if (!var7) {
                    _fun88050_ip = 578;
                    continue _fun88050
                }
            case 572:
                var11 = var12.externalProductPurchased;
            case 578:
                var9[1] = var11;
                if (!var10) {
                    _fun88050_ip = 591;
                    continue _fun88050
                }
            case 585:
                var10 = var12.externalProductDisabled;
            case 591:
                var9[2] = var10;
                var1.style = var9;
                var11 = _closure1_slot6;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 13;
                var9 = var16[var9];
                var10 = var15.bind(var3)(var9);
                var9 = {};
                var13 = {};
                var14 = 15;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var13.uri = var14;
                var9.source = var13;
                var13 = var12.externalProductImage;
                var9.style = var13;
                var9 = var11.bind(var3)(var10, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 675:
                var8 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var10 = var12.overlayContainer;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var7;
                if (!var10) {
                    _fun88050_ip = 711;
                    continue _fun88050
                }
            case 705:
                var10 = var12.externalProductPurchased;
            case 711:
                var9[1] = var10;
                var1.style = var9;
                var11 = _closure1_slot6;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 13;
                var9 = var16[var9];
                var10 = var15.bind(var3)(var9);
                var9 = {};
                var13 = {};
                var14 = 14;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var13.uri = var14;
                var9.source = var13;
                var12 = var12.externalProductImage;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 795:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.isPurchased = var7;
                var0.deco = var6;
                var0.pfx = var5;
                var0.nameplate = var4;
                var4 = 'small';
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun88051: for (var _fun88051_ip = 0;;) switch (_fun88051_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var10 = var0.solidBackground;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun88051_ip = 22;
                    continue _fun88051
                }
            case 20:
                var10 = false;
            case 22:
                var1 = _closure1_slot8;
                var5 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 19;
                var2 = var13[var1];
                var6 = var7.bind(var3)(var2);
                var2 = var6.hexToRgbaString;
                var1 = var13[var1];
                var9 = var7.bind(var3)(var1);
                var8 = var9.hexWithOpacity;
                var1 = 20;
                var1 = var13[var1];
                var11 = var7.bind(var3)(var1);
                var7 = var11.useToken;
                var12 = _closure1_slot1;
                var1 = 6;
                var1 = var13[var1];
                var1 = var12.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOW;
                var7 = var7.bind(var11)(var1);
                var1 = 0.8;
                if (!var10) {
                    _fun88051_ip = 140;
                    continue _fun88051
                }
            case 137:
                var1 = 1;
            case 140:
                var1 = var8.bind(var9)(var7, var1);
                var7 = var2.bind(var6)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var5.assetContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.backgroundColor = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun88052: for (var _fun88052_ip = 0;;) switch (_fun88052_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.product;
                var10 = var0.isDarkTheme;
                var7 = var0.isPurchased;
                var4 = var0.solidBackground;
                var5 = var0.isDisabled;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 21;
                var0 = var9[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.useDefaultVariantIndex;
                var2 = var0.bind(var2)(var8);
                var0 = 22;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSelectedProduct;
                var11 = var0.bind(var1)(var8, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot12;
                var0 = {};
                var0.solidBackground = var4;
                var9 = _closure1_slot6;
                var8 = _closure1_slot11;
                var4 = {};
                var4.product = var11;
                var4.isDarkTheme = var10;
                var4.isPurchased = var7;
                var4.isDisabled = var5;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var8 = var7;
                if (!var8) {
                    _fun88052_ip = 174;
                    continue _fun88052
                }
            case 158:
                var11 = _closure1_slot6;
                var10 = _closure1_slot9;
                var9 = {};
                var8 = var11.bind(var3)(var10, var9);
            case 174:
                var4[1] = var8;
                if (!var5) {
                    _fun88052_ip = 184;
                    continue _fun88052
                }
            case 181:
                var5 = !var7;
            case 184:
                if (!var5) {
                    _fun88052_ip = 203;
                    continue _fun88052
                }
            case 187:
                var8 = _closure1_slot6;
                var7 = _closure1_slot10;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 203:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3284, 33, 1297, 671, 8355, 4860, 6955, 3494, 11359, 6971, 4704, 11324, 11323, 6984, 6972, 9571, 3241, 3153, 11353, 4613, 2]);