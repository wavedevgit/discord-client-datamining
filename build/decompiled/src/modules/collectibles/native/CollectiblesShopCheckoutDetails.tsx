// modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ProfileEffectAssetPreview, environment: var1
        _fun86603: for (var _fun86603_ip = 0;;) switch (_fun86603_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var1 = _closure1_slot12;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useProfileEffectPreset;
                var0 = var0.skuId;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun86603_ip = 233;
                    continue _fun86603
                }
            case 67:
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun86603_ip = 81;
                    continue _fun86603
                }
            case 76:
                var1 = var2.config;
            case 81:
                if (!(var0 == var1)) {
                    _fun86603_ip = 87;
                    continue _fun86603
                }
            case 85:
                var1 = {};
            case 87:
                var12 = var1.accessibilityLabel;
                var11 = var1.thumbnailPreviewSrc;
                var9 = var1.title;
                var3 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = {};
                var8 = _closure1_slot7;
                var7 = _closure1_slot5;
                var5 = {};
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 7;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var5.source = var13;
                var5.alt = var12;
                var12 = var10.profileEffectBackground;
                var5.style = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var10.profileEffect;
                var6.style = var10;
                var10 = {};
                var10.uri = var11;
                var6.source = var10;
                var6.alt = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 233:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: NameplateAssetPreview, environment: var1
        var0 = arg0;
        var5 = var0.item;
        var1 = _closure1_slot13;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var1 = var6[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.getNameplateDataFromRecord;
        var5 = var1.bind(var2)(var5);
        var2 = _closure1_slot7;
        var1 = _closure1_slot1;
        var0 = 9;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'nameplate': null,
            'fullOpacity': true,
            'isSquarePreview': true
        };
        var0.nameplate = var5;
        var4 = var4.nameplate;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: CollectibleProductPreview, environment: var1
        _fun86605: for (var _fun86605_ip = 0;;) switch (_fun86605_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.product;
                var2 = var0.recipientUser;
                var1 = var9.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                var8 = 55;
                if (!(var1 === var0)) {
                    _fun86605_ip = 67;
                    continue _fun86605
                }
            case 64:
                var8 = 42;
            case 67:
                var0 = null;
                var0 = var0 == var2;
                var7 = undefined;
                if (var0) {
                    _fun86605_ip = 93;
                    continue _fun86605
                }
            case 78:
                var1 = var2.getAvatarSource;
                var0 = false;
                var7 = var1.bind(var2)(var3, var0, var8);
            case 93:
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = {
                    'height': 55,
                    'width': null,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var5.width = var8;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot17;
                var4 = {};
                var4.product = var9;
                var4.width = var8;
                var4.userAvatarSource = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: CollectibleProductPreviewContent, environment: var1
        _fun86606: for (var _fun86606_ip = 0;;) switch (_fun86606_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.product;
                var7 = var0.width;
                var6 = var0.userAvatarSource;
                var1 = _closure1_slot10;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.FractionalPremiumSKUsSets;
                var5 = var1.ALL;
                var2 = var5.has;
                var1 = var8.skuId;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun86606_ip = 421;
                    continue _fun86606
                }
            case 87:
                var2 = var8.skuId;
                var1 = _closure1_slot6;
                var1 = var1.ORB_PROFILE_BADGE;
                if (!(var2 !== var1)) {
                    _fun86606_ip = 355;
                    continue _fun86606
                }
            case 110:
                var2 = var8.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 10;
                var1 = var1[var9];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun86606_ip = 290;
                    continue _fun86606
                }
            case 154:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun86606_ip = 257;
                    continue _fun86606
                }
            case 187:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun86606_ip = 224;
                    continue _fun86606
                }
            case 220:
                var1 = null;
                return var1;
            case 224:
                var5 = _closure1_slot7;
                var2 = _closure1_slot15;
                var1 = {};
                var10 = var8.items;
                var9 = 0;
                var9 = var10[var9];
                var1.item = var9;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 257:
                var5 = _closure1_slot7;
                var2 = _closure1_slot14;
                var1 = {};
                var10 = var8.items;
                var9 = 0;
                var9 = var10[var9];
                var1.item = var9;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 290:
                var5 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = var8.items;
                var8 = 0;
                var8 = var9[var8];
                var1.item = var8;
                var1.size = var7;
                var1.avatarSource = var6;
                var6 = false;
                var1.animate = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 355:
                var5 = _closure1_slot7;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var2 = var8.bind(var3)(var1);
                var1 = {};
                var6 = {};
                var7 = 14;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var6.uri = var7;
                var1.source = var6;
                var6 = var4.externalProductImage;
                var1.style = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 421:
                var2 = _closure1_slot7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var1 = var7.bind(var3)(var0);
                var0 = {};
                var5 = {};
                var6 = 13;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var5.uri = var6;
                var0.source = var5;
                var4 = var4.externalProductImage;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: ProductDetails, environment: var1
        _fun86607: for (var _fun86607_ip = 0;;) switch (_fun86607_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.product;
                var _closure2_slot0 = var8;
                var10 = var1.recipientUser;
                var1 = _closure1_slot10;
                var4 = undefined;
                var6 = var1.bind(var4)();
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var7 = var8.type;
                var1 = new Array(2);
                var1[0] = var7;
                var7 = var8.skuId;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun86608: for (var _fun86608_ip = 0;;) switch (_fun86608_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var1 = var1.FractionalPremiumSKUsSets;
                            var5 = var1.ALL;
                            var3 = var5.has;
                            var2 = _closure2_slot0;
                            var2 = var2.skuId;
                            var2 = var3.bind(var5)(var2);
                            if (var2) {
                                _fun86608_ip = 441;
                                continue _fun86608
                            }
                        case 66:
                            var2 = _closure2_slot0;
                            var3 = var2.skuId;
                            var2 = _closure1_slot6;
                            var2 = var2.ORB_PROFILE_BADGE;
                            if (!(var3 !== var2)) {
                                _fun86608_ip = 382;
                                continue _fun86608
                            }
                        case 93:
                            var1 = _closure2_slot0;
                            var2 = var1.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 10;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.CollectiblesItemType;
                            var1 = var1.AVATAR_DECORATION;
                            if (!(var1 !== var2)) {
                                _fun86608_ip = 325;
                                continue _fun86608
                            }
                        case 141:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.CollectiblesItemType;
                            var1 = var1.PROFILE_EFFECT;
                            if (!(var1 !== var2)) {
                                _fun86608_ip = 268;
                                continue _fun86608
                            }
                        case 174:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.CollectiblesItemType;
                            var1 = var1.NAMEPLATE;
                            if (!(var1 !== var2)) {
                                _fun86608_ip = 211;
                                continue _fun86608
                            }
                        case 207:
                            var1 = null;
                            return var1;
                        case 211:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.x5CoXR;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 268:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.wR5wOo;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 325:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["7v0T9P"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 382:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["0+rBWT"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 441:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 16;
                            var1 = var5[var0];
                            var1 = var3.bind(var4)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0.DFMPWS;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var15 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var15)) {
                    _fun86607_ip = 292;
                    continue _fun86607
                }
            case 88:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = var6.productDetails;
                var0.style = var3;
                var9 = _closure1_slot7;
                var7 = _closure1_slot16;
                var3 = {};
                var3.product = var8;
                var3.recipientUser = var10;
                var7 = var9.bind(var4)(var7, var3);
                var3 = new Array(2);
                var3[0] = var7;
                var10 = _closure1_slot9;
                var9 = _closure1_slot4;
                var7 = {};
                var11 = var6.productDetailsTextContainer;
                var7.style = var11;
                var17 = _closure1_slot7;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 17;
                var11 = var16[var12];
                var11 = var13.bind(var4)(var11);
                var14 = var11.Text;
                var11 = {};
                var18 = 'text-md/semibold';
                var11.variant = var18;
                var18 = var8.name;
                var11.children = var18;
                var14 = var17.bind(var4)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot7;
                var12 = var16[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {};
                var16 = 'text-sm/medium';
                var12.variant = var16;
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var7.children = var11;
                var7 = var10.bind(var4)(var9, var7);
                var3[1] = var7;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun86607_ip = 376;
                continue _fun86607;
            case 292:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.productDetails;
                var1.style = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 17;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-md/semibold';
                var5.variant = var9;
                var8 = var8.name;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 376:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: ProductPriceAmountTag, environment: var1
        _fun86609: for (var _fun86609_ip = 0;;) switch (_fun86609_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.product;
                var _closure2_slot0 = var7;
                var6 = var0.isPremiumUser;
                var _closure2_slot1 = var6;
                var0 = var0.useOrbPrice;
                var _closure2_slot2 = var0;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var6;
                var3[2] = var0;
                var2 = function() { // Environment: var2
                    _fun86610: for (var _fun86610_ip = 0;;) switch (_fun86610_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            if (var0) {
                                _fun86610_ip = 65;
                                continue _fun86610
                            }
                        case 21:
                            var0 = 19;
                            var0 = var3[var0];
                            var1 = undefined;
                            var8 = var4.bind(var1)(var0);
                            var7 = var8.getFormattedPriceForCollectiblesProduct;
                            var5 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var0 = true;
                            var0 = var7.bind(var8)(var5, var2, var0);
                            var2 = undefined;
                            var1 = var0;
                            _fun86610_ip = 112;
                            continue _fun86610;
                        case 65:
                            var0 = 18;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.getProductOrbPrice;
                            var3 = {};
                            var7 = _closure2_slot0;
                            var3.product = var7;
                            var6 = _closure2_slot1;
                            var3.isPremiumUser = var6;
                            var2 = var4.bind(var5)(var3);
                            var1 = undefined;
                        case 112:
                            var0 = {};
                            var0.orbPrice = var2;
                            var0.priceText = var1;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var6 = var2.orbPrice;
                var5 = var2.priceText;
                var4 = _closure1_slot7;
                if (var0) {
                    _fun86609_ip = 144;
                    continue _fun86609
                }
            case 95:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 17;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.Text;
                var0 = {};
                var7 = 'text-md/semibold';
                var0.variant = var7;
                var0.children = var5;
                var0 = var4.bind(var3)(var2, var0);
                _fun86609_ip = 196;
                continue _fun86609;
            case 144:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun86609_ip = 185;
                    continue _fun86609
                }
            case 179:
                var5 = var6.amount;
            case 185:
                var1.orbAmount = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 196:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'width': 45,
        'height': 45
    };
    var6.externalProductImage = var9;
    var11 = {};
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11.borderRadius = var12;
    var12 = 'column';
    var11.flexDirection = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var11.backgroundColor = var12;
    var6.productPreviewContainer = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11.paddingVertical = var12;
    var6.productDetailsContainer = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var11.gap = var12;
    var6.productDetails = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var11.gap = var12;
    var6.productDetailsTextContainer = var11;
    var11 = {
        'height': 36,
        'backgroundColor': null,
        'justifyContent': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11.borderBottomLeftRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11.borderBottomRightRadius = var12;
    var6.errorContainer = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun86611: for (var _fun86611_ip = 0;;) switch (_fun86611_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var2 = 2;
                var1.borderWidth = var2;
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 5;
                var4 = var2[var5];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var6 = var4.colors;
                var4 = arg0;
                if (var4) {
                    _fun86611_ip = 56;
                    continue _fun86611
                }
            case 48:
                var4 = var6.BORDER_FEEDBACK_CRITICAL;
                _fun86611_ip = 62;
                continue _fun86611;
            case 56:
                var4 = var6.BACKGROUND_BRAND;
            case 62:
                var1.borderColor = var4;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var2)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_16;
                var1.marginHorizontal = var3;
                var1.backgroundColor = var2;
                var0.giftProductPreviewContainer = var1;
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var11.borderRadius = var12;
    var6.profileEffect = var11;
    var11 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'objectFit': 'cover'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var11.borderRadius = var12;
    var6.profileEffectBackground = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.nameplate = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CollectiblesShopCheckoutDetails, environment: var1
        _fun86612: for (var _fun86612_ip = 0;;) switch (_fun86612_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.product;
                var14 = var0.recipientUser;
                var6 = var0.isValidRecipient;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun86612_ip = 29;
                    continue _fun86612
                }
            case 27:
                var6 = false;
            case 29:
                var15 = var0.useOrbPrice;
                if (!(var15 === var3)) {
                    _fun86612_ip = 41;
                    continue _fun86612
                }
            case 39:
                var15 = false;
            case 41:
                var5 = var0.isGift;
                if (!(var5 === var3)) {
                    _fun86612_ip = 53;
                    continue _fun86612
                }
            case 51:
                var5 = false;
            case 53:
                var0 = _closure1_slot10;
                var10 = var0.bind(var3)();
                var0 = _closure1_slot11;
                var8 = var0.bind(var3)(var6);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 21;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCurrentUser;
                var2 = var0.bind(var1)();
                var1 = _closure1_slot1;
                var0 = 22;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.canUseCollectibles;
                var16 = var0.bind(var1)(var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var10.productPreviewContainer;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5;
                if (!var5) {
                    _fun86612_ip = 166;
                    continue _fun86612
                }
            case 160:
                var7 = var8.giftProductPreviewContainer;
            case 166:
                var4[1] = var7;
                var0.style = var4;
                var8 = _closure1_slot9;
                var7 = _closure1_slot4;
                var4 = {};
                var11 = var10.productDetailsContainer;
                var4.style = var11;
                var13 = _closure1_slot7;
                var12 = _closure1_slot18;
                var11 = {};
                var11.product = var17;
                var11.recipientUser = var14;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot19;
                var12 = {};
                var12.product = var17;
                var12.isPremiumUser = var16;
                var12.useOrbPrice = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var4.children = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun86612_ip = 287;
                    continue _fun86612
                }
            case 284:
                var5 = !var6;
            case 287:
                if (!var5) {
                    _fun86612_ip = 425;
                    continue _fun86612
                }
            case 293:
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.errorContainer;
                var6.style = var10;
                var11 = _closure1_slot7;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 17;
                var9 = var16[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-feedback-critical'
                };
                var12 = 16;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["3YfczA"];
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 425:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3242, 33, 1297, 671, 6871, 10130, 1634, 6875, 3452, 1617, 4667, 11162, 11163, 6872, 1234, 3900, 4577, 11164, 11167, 9444, 3068, 2]);