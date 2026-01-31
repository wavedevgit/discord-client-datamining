// modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingTop': 28,
        'paddingBottom': 12,
        'paddingHorizontal': 32
    };
    var3.body = var8;
    var8 = {
        'height': 360,
        'width': 216,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.profileEffect = var8;
    var11 = '100%';
    var8 = {
        'height': '100%',
        'width': '100%',
        'resizeMode': 'contain'
    };
    var3.sampleProfile = var8;
    var8 = {};
    var8.width = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.paddingTop = var11;
    var3.nameplateContainer = var8;
    var8 = {
        'width': '100%',
        'alignItems': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.paddingTop = var9;
    var3.bundleContainer = var8;
    var8 = {
        'marginTop': 32,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.message = var8;
    var8 = {};
    var9 = 24;
    var8.paddingHorizontal = var9;
    var3.footer = var8;
    var8 = {};
    var9 = 20;
    var8.marginTop = var9;
    var3.gameItemCard = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56805: for (var _fun56805_ip = 0;;) switch (_fun56805_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.giftCode;
                var _closure2_slot0 = var7;
                var0 = var0.user;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot8;
                var9 = var0.bind(var3)();
                var _closure2_slot2 = var9;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var0 = 7;
                var0 = var5[var0];
                var6 = var4.bind(var3)(var0);
                var2 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot5;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var2.bind(var6)(var1, var0);
                var0 = 8;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var1 = var2.useGetOrFetchSubscriptionPlan;
                var0 = var7.subscriptionPlanId;
                var21 = var1.bind(var2)(var0);
                var0 = 9;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var1 = var2.useGetOrFetchApplication;
                var0 = var7.applicationId;
                var23 = var1.bind(var2)(var0);
                var0 = 10;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var1 = var2.useFetchCollectiblesProduct;
                var0 = 11;
                var0 = var5[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.isCollectiblesGiftCode;
                var4 = var0.bind(var4)(var7);
                var15 = null;
                var0 = null;
                if (!var4) {
                    _fun56805_ip = 242;
                    continue _fun56805
                }
            case 236:
                var0 = var7.skuId;
            case 242:
                var4 = true;
                var0 = var1.bind(var2)(var0, var4);
                var6 = var0.product;
                var0 = var15 == var6;
                var8 = undefined;
                if (var0) {
                    _fun56805_ip = 276;
                    continue _fun56805
                }
            case 265:
                var1 = var6.items;
                var0 = 0;
                var8 = var1[var0];
            case 276:
                _closure2_slot4 = var8;
                var0 = var15 == var6;
                var5 = undefined;
                if (var0) {
                    _fun56805_ip = 294;
                    continue _fun56805
                }
            case 289:
                var5 = var6.type;
            case 294:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var20 = 12;
                var0 = var2[var20];
                var0 = var1.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.BUNDLE;
                var13 = var5 === var0;
                _closure2_slot5 = var13;
                var0 = 13;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useShopProductItems;
                var0 = var6;
                if (!(var15 == var6)) {
                    _fun56805_ip = 372;
                    continue _fun56805
                }
            case 359:
                var5 = {};
                var11 = new Array(0);
                var5.items = var11;
                var0 = var5;
            case 372:
                var0 = var1.bind(var2)(var0);
                var26 = var0.firstAvatarDecoration;
                var25 = var0.firstProfileEffect;
                var22 = var0.firstNameplate;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useHandleUseNow;
                var0 = {};
                var5 = var6;
                if (!(var15 == var5)) {
                    _fun56805_ip = 485;
                    continue _fun56805
                }
            case 430:
                var11 = {};
                var14 = '';
                var11.skuId = var14;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var20];
                var14 = var16.bind(var3)(var14);
                var14 = var14.CollectiblesItemType;
                var14 = var14.BUNDLE;
                var11.type = var14;
                var14 = new Array(0);
                var11.items = var14;
                var5 = var11;
            case 485:
                var0.product = var5;
                var0 = var1.bind(var2)(var0);
                var1 = var0.handleUseNow;
                _closure2_slot6 = var1;
                var16 = var0.isApplying;
                var14 = var13;
                if (!var13) {
                    _fun56805_ip = 521;
                    continue _fun56805
                }
            case 517:
                var14 = var15 != var6;
            case 521:
                if (!var14) {
                    _fun56805_ip = 528;
                    continue _fun56805
                }
            case 524:
                var14 = var15 != var26;
            case 528:
                if (!var14) {
                    _fun56805_ip = 535;
                    continue _fun56805
                }
            case 531:
                var14 = var15 != var25;
            case 535:
                _closure2_slot7 = var14;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var0.bottom = var4;
                var4 = var9.container;
                var0.style = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var11 = var9.body;
                var4.contentContainerStyle = var11;
                var27 = false;
                var4.alwaysBounceVertical = var27;
                if (!(var15 == var8)) {
                    _fun56805_ip = 618;
                    continue _fun56805
                }
            case 611:
                if (!(var15 == var23)) {
                    _fun56805_ip = 908;
                    continue _fun56805
                }
            case 618:
                if (!var13) {
                    _fun56805_ip = 636;
                    continue _fun56805
                }
            case 621:
                if (!(var15 != var6)) {
                    _fun56805_ip = 636;
                    continue _fun56805
                }
            case 625:
                if (!(var15 != var26)) {
                    _fun56805_ip = 636;
                    continue _fun56805
                }
            case 629:
                if (!(var15 == var25)) {
                    _fun56805_ip = 817;
                    continue _fun56805
                }
            case 636:
                var19 = _closure1_slot0;
                var6 = _closure1_slot2;
                var11 = 20;
                var11 = var6[var11];
                var17 = var19.bind(var3)(var11);
                var11 = var17.match;
                var28 = var11.bind(var17)(var8);
                var18 = var28.with;
                var17 = {};
                var11 = var6[var20];
                var11 = var19.bind(var3)(var11);
                var11 = var11.CollectiblesItemType;
                var11 = var11.AVATAR_DECORATION;
                var17.type = var11;
                var11 = function(arg0) { // Environment: var10
                    _fun56807: for (var _fun56807_ip = 0;;) switch (_fun56807_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var6 = 21;
                            var0 = var0[var6];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure2_slot1;
                            var11 = null;
                            var8 = var11 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun56807_ip = 119;
                                continue _fun56807
                            }
                        case 49:
                            var10 = _closure2_slot1;
                            var9 = var10.getAvatarSource;
                            var12 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var8 = 22;
                            var8 = var7[var8];
                            var8 = var12.bind(var2)(var8);
                            var8 = var8.AVATAR_SIZE_MAP;
                            var7 = var7[var6];
                            var7 = var12.bind(var2)(var7);
                            var7 = var7.AvatarSizes;
                            var7 = var7.GIFT_SUCCESS;
                            var8 = var8[var7];
                            var7 = true;
                            var5 = var9.bind(var10)(var11, var7, var8);
                        case 119:
                            var0.source = var5;
                            var5 = arg0;
                            var0.avatarDecoration = var5;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.AvatarSizes;
                            var4 = var4.GIFT_SUCCESS;
                            var0.size = var4;
                            var4 = true;
                            var0.animate = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var28 = var18.bind(var28)(var17, var11);
                var18 = var28.with;
                var17 = {};
                var11 = var6[var20];
                var11 = var19.bind(var3)(var11);
                var11 = var11.CollectiblesItemType;
                var11 = var11.PROFILE_EFFECT;
                var17.type = var11;
                var11 = function(arg0) { // Environment: var10
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot3;
                    var1 = {};
                    var9 = _closure2_slot2;
                    var4 = var9.profileEffect;
                    var1.style = var4;
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 23;
                    var4 = var8[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var4);
                    var4 = {};
                    var10 = 24;
                    var10 = var8[var10];
                    var10 = var6.bind(var0)(var10);
                    var4.source = var10;
                    var9 = var9.sampleProfile;
                    var4.style = var9;
                    var9 = true;
                    var4.disableColor = var9;
                    var5 = var7.bind(var0)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = 25;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = {};
                    var8 = arg0;
                    var8 = var8.skuId;
                    var5.skuId = var8;
                    var8 = 0;
                    var5.bannerAdjustment = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var18 = var18.bind(var28)(var17, var11);
                var17 = var18.with;
                var11 = {};
                var6 = var6[var20];
                var6 = var19.bind(var3)(var6);
                var6 = var6.CollectiblesItemType;
                var6 = var6.NAMEPLATE;
                var11.type = var6;
                var6 = function(arg0) { // Environment: var10
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot3;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.nameplateContainer;
                    var1.style = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 26;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.NameplatePreview;
                    var4 = {};
                    var6 = _closure2_slot1;
                    var4.user = var6;
                    var6 = arg0;
                    var4.nameplate = var6;
                    var4 = var3.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var17 = var17.bind(var18)(var11, var6);
                var11 = var17.otherwise;
                var6 = function() { // Environment: var10
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 27;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.giftStyle;
                    var0.giftStyle = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var11 = var11.bind(var17)(var6);
                _fun56805_ip = 903;
                continue _fun56805;
            case 817:
                var18 = _closure1_slot6;
                var17 = _closure1_slot3;
                var6 = {};
                var19 = var9.bundleContainer;
                var6.style = var19;
                var20 = _closure1_slot1;
                var28 = _closure1_slot2;
                var19 = 19;
                var19 = var28[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.isPurchased = var27;
                var19.deco = var26;
                var19.pfx = var25;
                var19.nameplate = var22;
                var22 = 'large';
                var19.size = var22;
                var19 = var18.bind(var3)(var20, var19);
                var6.children = var19;
                var11 = var18.bind(var3)(var17, var6);
            case 903:
                _fun56805_ip = 1083;
                continue _fun56805;
            case 908:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 16;
                var6 = var18[var6];
                var17 = var17.bind(var3)(var6);
                var6 = var17.isGameItemSKU;
                var6 = var6.bind(var17)(var24);
                var19 = _closure1_slot6;
                if (var6) {
                    _fun56805_ip = 1021;
                    continue _fun56805
                }
            case 946:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var18 = 18;
                var6 = var22[var18];
                var17 = var17.bind(var3)(var6);
                var6 = {};
                var6.game = var23;
                var20 = _closure1_slot0;
                var18 = var22[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.GameIconSizes;
                var18 = var18.LARGE;
                var6.size = var18;
                var18 = var7.skuId;
                var6.skuId = var18;
                var6 = var19.bind(var3)(var17, var6);
                _fun56805_ip = 1080;
                continue _fun56805;
            case 1021:
                var18 = _closure1_slot3;
                var17 = {};
                var20 = var9.gameItemCard;
                var17.style = var20;
                var22 = _closure1_slot1;
                var25 = _closure1_slot2;
                var20 = 17;
                var20 = var25[var20];
                var22 = var22.bind(var3)(var20);
                var20 = {};
                var20.sku = var24;
                var20 = var19.bind(var3)(var22, var20);
                var17.children = var20;
                var6 = var19.bind(var3)(var18, var17);
            case 1080:
                var11 = var6;
            case 1083:
                var6 = new Array(3);
                var6[0] = var11;
                if (!(var15 != var24)) {
                    _fun56805_ip = 1506;
                    continue _fun56805
                }
            case 1098:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 16;
                var11 = var18[var11];
                var17 = var17.bind(var3)(var11);
                var11 = var17.isGameItemSKU;
                var11 = var11.bind(var17)(var24);
                if (var11) {
                    _fun56805_ip = 1395;
                    continue _fun56805
                }
            case 1135:
                var11 = var7.isSubscription;
                if (!var11) {
                    _fun56805_ip = 1151;
                    continue _fun56805
                }
            case 1144:
                if (!(var15 == var21)) {
                    _fun56805_ip = 1273;
                    continue _fun56805
                }
            case 1151:
                var17 = var15 != var8;
                var11 = undefined;
                if (!var17) {
                    _fun56805_ip = 1271;
                    continue _fun56805
                }
            case 1160:
                var19 = _closure1_slot6;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var17 = 28;
                var17 = var27[var17];
                var17 = var26.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var9.header;
                var17.style = var20;
                var20 = 29;
                var22 = var27[var20];
                var22 = var26.bind(var3)(var22);
                var25 = var22.intl;
                var22 = var25.string;
                var20 = var27[var20];
                var20 = var26.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.IMffmm;
                var20 = var22.bind(var25)(var20);
                var17.children = var20;
                var11 = var19.bind(var3)(var18, var17);
            case 1271:
                _fun56805_ip = 1393;
                continue _fun56805;
            case 1273:
                var19 = _closure1_slot6;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var17 = 28;
                var17 = var27[var17];
                var17 = var22.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var20 = 'heading-xl/bold';
                var17.variant = var20;
                var20 = var9.header;
                var17.style = var20;
                var20 = 29;
                var25 = var27[var20];
                var25 = var22.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.format;
                var20 = var27[var20];
                var20 = var22.bind(var3)(var20);
                var20 = var20.t;
                var22 = var20["1C2BG/"];
                var20 = {};
                var27 = var24.name;
                var20.skuName = var27;
                var20 = var25.bind(var26)(var22, var20);
                var17.children = var20;
                var11 = var19.bind(var3)(var18, var17);
            case 1393:
                _fun56805_ip = 1504;
                continue _fun56805;
            case 1395:
                var19 = _closure1_slot6;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var17 = 28;
                var17 = var27[var17];
                var17 = var26.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var20 = 'heading-xl/bold';
                var17.variant = var20;
                var20 = var9.header;
                var17.style = var20;
                var20 = 29;
                var22 = var27[var20];
                var22 = var26.bind(var3)(var22);
                var25 = var22.intl;
                var22 = var25.string;
                var20 = var27[var20];
                var20 = var26.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["5glWta"];
                var20 = var22.bind(var25)(var20);
                var17.children = var20;
                var11 = var19.bind(var3)(var18, var17);
            case 1504:
                _fun56805_ip = 1613;
                continue _fun56805;
            case 1506:
                var19 = _closure1_slot6;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var17 = 28;
                var17 = var27[var17];
                var17 = var26.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var20 = 'heading-xl/bold';
                var17.variant = var20;
                var20 = var9.header;
                var17.style = var20;
                var20 = 29;
                var22 = var27[var20];
                var22 = var26.bind(var3)(var22);
                var25 = var22.intl;
                var22 = var25.string;
                var20 = var27[var20];
                var20 = var26.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["+BNMcF"];
                var20 = var22.bind(var25)(var20);
                var17.children = var20;
                var11 = var19.bind(var3)(var18, var17);
            case 1613:
                var6[1] = var11;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 16;
                var11 = var18[var11];
                var17 = var17.bind(var3)(var11);
                var11 = var17.isGameItemSKU;
                var11 = var11.bind(var17)(var24);
                if (!var11) {
                    _fun56805_ip = 1658;
                    continue _fun56805
                }
            case 1651:
                if (!(var15 == var23)) {
                    _fun56805_ip = 1967;
                    continue _fun56805
                }
            case 1658:
                var7 = var7.isSubscription;
                if (!var7) {
                    _fun56805_ip = 1674;
                    continue _fun56805
                }
            case 1667:
                if (!(var15 == var21)) {
                    _fun56805_ip = 1881;
                    continue _fun56805
                }
            case 1674:
                var17 = _closure1_slot6;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 28;
                var7 = var18[var7];
                var7 = var11.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {};
                var18 = 'text-md/medium';
                var7.variant = var18;
                var18 = var9.message;
                var7.style = var18;
                if (!(var15 != var8)) {
                    _fun56805_ip = 1744;
                    continue _fun56805
                }
            case 1726:
                var19 = var15 == var24;
                var18 = undefined;
                if (var19) {
                    _fun56805_ip = 1740;
                    continue _fun56805
                }
            case 1735:
                var18 = var24.name;
            case 1740:
                if (!(var15 == var18)) {
                    _fun56805_ip = 1801;
                    continue _fun56805
                }
            case 1744:
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var18 = 29;
                var19 = var25[var18];
                var19 = var22.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var25[var18];
                var18 = var22.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["5ayf7w"];
                var18 = var19.bind(var20)(var18);
                _fun56805_ip = 1869;
                continue _fun56805;
            case 1801:
                var20 = _closure1_slot0;
                var26 = _closure1_slot2;
                var19 = 29;
                var22 = var26[var19];
                var22 = var20.bind(var3)(var22);
                var25 = var22.intl;
                var22 = var25.formatToPlainString;
                var19 = var26[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["4kp0AB"];
                var19 = {};
                var26 = var24.name;
                var19.itemName = var26;
                var18 = var22.bind(var25)(var20, var19);
            case 1869:
                var7.children = var18;
                var7 = var17.bind(var3)(var11, var7);
                _fun56805_ip = 1962;
                continue _fun56805;
            case 1881:
                var18 = _closure1_slot6;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 28;
                var11 = var22[var11];
                var11 = var20.bind(var3)(var11);
                var17 = var11.Text;
                var11 = {};
                var19 = 'text-md/medium';
                var11.variant = var19;
                var19 = var9.message;
                var11.style = var19;
                var19 = 30;
                var19 = var22[var19];
                var20 = var20.bind(var3)(var19);
                var19 = var20.getSubscriptionGiftSuccessText;
                var19 = var19.bind(var20)(var21);
                var11.children = var19;
                var7 = var18.bind(var3)(var17, var11);
            case 1962:
                _fun56805_ip = 2120;
                continue _fun56805;
            case 1967:
                var18 = _closure1_slot6;
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var11 = 28;
                var11 = var25[var11];
                var11 = var20.bind(var3)(var11);
                var17 = var11.Text;
                var11 = {};
                var19 = 'text-md/medium';
                var11.variant = var19;
                var19 = var9.message;
                var11.style = var19;
                var19 = 29;
                var21 = var25[var19];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.formatToPlainString;
                var19 = var25[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.W2znvX;
                var19 = {};
                var26 = var15 == var24;
                var25 = undefined;
                if (var26) {
                    _fun56805_ip = 2075;
                    continue _fun56805
                }
            case 2070:
                var25 = var24.name;
            case 2075:
                var26 = var15 != var25;
                var24 = '';
                if (!var26) {
                    _fun56805_ip = 2089;
                    continue _fun56805
                }
            case 2086:
                var24 = var25;
            case 2089:
                var19.skuName = var24;
                var23 = var23.name;
                var19.applicationName = var23;
                var19 = var21.bind(var22)(var20, var19);
                var11.children = var19;
                var7 = var18.bind(var3)(var17, var11);
            case 2120:
                var6[2] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var9.footer;
                var5.style = var9;
                var17 = _closure1_slot1;
                var9 = _closure1_slot2;
                var11 = 31;
                var9 = var9[var11];
                var9 = var17.bind(var3)(var9);
                if (!(var15 != var8)) {
                    _fun56805_ip = 2342;
                    continue _fun56805
                }
            case 2189:
                var8 = {};
                var20 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = 29;
                var18 = var15[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var15[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.MAS7uK;
                var17 = var18.bind(var19)(var17);
                var8.text = var17;
                var17 = _closure1_slot1;
                var18 = var15[var11];
                var18 = var17.bind(var3)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var8.size = var18;
                var15 = var15[var11];
                var15 = var17.bind(var3)(var15);
                var15 = var15.Colors;
                var15 = var15.BRAND;
                var8.color = var15;
                var15 = var13;
                if (!var13) {
                    _fun56805_ip = 2313;
                    continue _fun56805
                }
            case 2310:
                var15 = var16;
            case 2313:
                var8.loading = var15;
                if (!var13) {
                    _fun56805_ip = 2324;
                    continue _fun56805
                }
            case 2321:
                var13 = !var14;
            case 2324:
                var8.disabled = var13;
                var10 = function() {
                    _fun56811: for (var _fun56811_ip = 0;;) switch (_fun56811_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun56811_ip = 22;
                                continue _fun56811
                            }
                        case 12:
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun56811_ip = 232;
                                continue _fun56811
                            }
                        case 22:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 20;
                            var3 = var6[var3];
                            var5 = undefined;
                            var7 = var9.bind(var5)(var3);
                            var4 = var7.match;
                            var3 = _closure2_slot4;
                            var10 = var4.bind(var7)(var3);
                            var7 = var10.with;
                            var4 = {};
                            var8 = 12;
                            var3 = var6[var8];
                            var3 = var9.bind(var5)(var3);
                            var3 = var3.CollectiblesItemType;
                            var3 = var3.AVATAR_DECORATION;
                            var4.type = var3;
                            var3 = function(arg0) { // Environment: var2
                                var4 = _closure2_slot3;
                                var3 = var4.push;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 33;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.GiftCodeModalScreens;
                                var2 = var1.USE_AVATAR_DECORATION;
                                var1 = {};
                                var5 = arg0;
                                var1.avatarDecoration = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var10 = var7.bind(var10)(var4, var3);
                            var7 = var10.with;
                            var4 = {};
                            var3 = var6[var8];
                            var3 = var9.bind(var5)(var3);
                            var3 = var3.CollectiblesItemType;
                            var3 = var3.PROFILE_EFFECT;
                            var4.type = var3;
                            var3 = function(arg0) { // Environment: var2
                                var4 = _closure2_slot3;
                                var3 = var4.push;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 33;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.GiftCodeModalScreens;
                                var2 = var1.USE_PROFILE_EFFECT;
                                var1 = {};
                                var5 = arg0;
                                var1.profileEffect = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var7 = var7.bind(var10)(var4, var3);
                            var4 = var7.with;
                            var3 = {};
                            var8 = var6[var8];
                            var8 = var9.bind(var5)(var8);
                            var8 = var8.CollectiblesItemType;
                            var8 = var8.NAMEPLATE;
                            var3.type = var8;
                            var2 = function(arg0) { // Environment: var2
                                var4 = _closure2_slot3;
                                var3 = var4.push;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 33;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.GiftCodeModalScreens;
                                var2 = var1.USE_NAMEPLATE;
                                var1 = {};
                                var5 = arg0;
                                var1.nameplate = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var3 = var4.bind(var7)(var3, var2);
                            var2 = var3.otherwise;
                            var4 = _closure1_slot1;
                            var1 = 32;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.pop;
                            var1 = var2.bind(var3)(var1);
                            _fun56811_ip = 242;
                            continue _fun56811;
                        case 232:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 242:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onPress = var10;
                _fun56805_ip = 2482;
                continue _fun56805;
            case 2342:
                var10 = {};
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 29;
                var15 = var13[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["NX+WJN"];
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var12 = _closure1_slot1;
                var14 = var13[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.Sizes;
                var14 = var14.MEDIUM;
                var10.size = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.BRAND;
                var10.color = var11;
                var11 = 32;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.pop;
                var10.onPress = var11;
                var8 = var10;
            case 2482:
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3458, 33, 1297, 671, 1469, 566, 6839, 6841, 6842, 4563, 3452, 6843, 6901, 4697, 3453, 6851, 6854, 6859, 3418, 5414, 5416, 4045, 6878, 6863, 6879, 6886, 3900, 1234, 3307, 4836, 4525, 6836, 2]);