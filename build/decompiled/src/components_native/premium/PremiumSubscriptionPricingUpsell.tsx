// components_native/premium/PremiumSubscriptionPricingUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CurrencyCodes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SubscriptionPlans;
    var _closure1_slot12 = var6;
    var6 = var3.SubscriptionPlanInfo;
    var _closure1_slot13 = var6;
    var6 = var3.PremiumTypes;
    var _closure1_slot14 = var6;
    var6 = var3.SubscriptionIntervalTypes;
    var _closure1_slot15 = var6;
    var6 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot16 = var6;
    var3 = var3.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot18 = var6;
    var6 = var3.Fragment;
    var _closure1_slot19 = var6;
    var3 = var3.jsxs;
    var _closure1_slot20 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var3.title = var8;
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.pricingSection = var8;
    var8 = {};
    var9 = 'line-through';
    var8.textDecorationLine = var9;
    var3.originalPrice = var8;
    var8 = {
        'lineHeight': 20,
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.cardText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = function() {
        _fun83057: for (var _fun83057_ip = 0;;) switch (_fun83057_ip) {
            case 0:
                var1 = _closure1_slot21;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var _closure2_slot0 = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 12;
                var1 = var8[var5];
                var9 = var7.bind(var3)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var15
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var6.bind(var9)(var2, var1);
                var2 = _closure1_slot1;
                var6 = 13;
                var1 = var8[var6];
                var2 = var2.bind(var3)(var1);
                var1 = var2.hasBoostDiscount;
                var2 = var1.bind(var2)(var9);
                var1 = var8[var5];
                var12 = var7.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var15
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var18 = var11.bind(var12)(var10, var1);
                var1 = 14;
                var1 = var8[var1];
                var10 = var7.bind(var3)(var1);
                var1 = var10.useSubscriptionPlansLoaded;
                var1 = var1.bind(var10)();
                var10 = var8[var5];
                var13 = var7.bind(var3)(var10);
                var12 = var13.useStateFromStores;
                var10 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var15
                    var1 = _closure1_slot9;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var12.bind(var13)(var11, var10);
                var _closure2_slot1 = var10;
                var10 = var8[var5];
                var13 = var7.bind(var3)(var10);
                var12 = var13.useStateFromStores;
                var10 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var15
                    _fun83061: for (var _fun83061_ip = 0;;) switch (_fun83061_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun83061_ip = 45;
                                continue _fun83061
                            }
                        case 18:
                            var3 = _closure1_slot8;
                            var2 = var3.get;
                            var1 = _closure2_slot1;
                            var1 = var1.planId;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11, var10);
                var14 = _closure1_slot4;
                var13 = var14.useEffect;
                var12 = function() { // Environment: var15
                    _fun83062: for (var _fun83062_ip = 0;;) switch (_fun83062_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.isReady;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun83062_ip = 62;
                                continue _fun83062
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.loadProducts;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = new Array(0);
                var10 = var13.bind(var14)(var12, var10);
                var5 = var8[var5];
                var10 = var7.bind(var3)(var5);
                var8 = var10.useStateFromStoresArray;
                var5 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var15
                    var3 = _closure1_slot10;
                    var2 = var3.getProduct;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var0 = var6[var1];
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.ProductIds;
                    var0 = var0.PREMIUM_GUILD_1_MONTHLY;
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(5);
                    var0[0] = var2;
                    var7 = var3.getProduct;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ProductIds;
                    var2 = var2.PREMIUM_TIER_2_MONTHLY;
                    var2 = var7.bind(var3)(var2);
                    var0[1] = var2;
                    var7 = var3.getProduct;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ProductIds;
                    var2 = var2.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY;
                    var2 = var7.bind(var3)(var2);
                    var0[2] = var2;
                    var7 = var3.getProduct;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ProductIds;
                    var2 = var2.PREMIUM_TIER_2_YEARLY;
                    var2 = var7.bind(var3)(var2);
                    var0[3] = var2;
                    var2 = var3.getProduct;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.ProductIds;
                    var1 = var1.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY;
                    var1 = var2.bind(var3)(var1);
                    var0[4] = var1;
                    return var0;
                };
                var8 = var8.bind(var10)(var7, var5);
                var7 = _closure1_slot3;
                var5 = 5;
                var8 = var7.bind(var3)(var8, var5);
                var13 = 0;
                var14 = var8[var13];
                var5 = 1;
                var20 = var8[var5];
                var5 = 2;
                var10 = var8[var5];
                var5 = 3;
                var7 = var8[var5];
                var5 = 4;
                var8 = var8[var5];
                var5 = null;
                if (!(var5 == var11)) {
                    _fun83057_ip = 376;
                    continue _fun83057
                }
            case 358:
                var16 = _closure1_slot13;
                var12 = _closure1_slot12;
                var12 = var12.PREMIUM_MONTH_GUILD;
                var11 = var16[var12];
            case 376:
                var12 = var11.interval;
                var11 = var11.intervalCount;
                if (!var1) {
                    _fun83057_ip = 1744;
                    continue _fun83057
                }
            case 394:
                var16 = _closure1_slot10;
                var1 = var16.isReady;
                var1 = var1.bind(var16)();
                if (!var1) {
                    _fun83057_ip = 1744;
                    continue _fun83057
                }
            case 414:
                if (!(var5 != var14)) {
                    _fun83057_ip = 1744;
                    continue _fun83057
                }
            case 421:
                var1 = var5 == var14;
                var19 = undefined;
                if (var1) {
                    _fun83057_ip = 446;
                    continue _fun83057
                }
            case 430:
                var16 = var14.currencyCode;
                var1 = var16.toLowerCase;
                var19 = var1.bind(var16)();
            case 446:
                var16 = var5 == var14;
                var1 = undefined;
                if (var16) {
                    _fun83057_ip = 461;
                    continue _fun83057
                }
            case 455:
                var1 = var14.price;
            case 461:
                var14 = _closure1_slot15;
                var14 = var14.YEAR;
                if (!(var12 !== var14)) {
                    _fun83057_ip = 557;
                    continue _fun83057
                }
            case 475:
                var16 = var1;
                var14 = var16;
                if (!var2) {
                    _fun83057_ip = 597;
                    continue _fun83057
                }
            case 484:
                var16 = var1;
                var14 = var16;
                if (!(var5 != var14)) {
                    _fun83057_ip = 597;
                    continue _fun83057
                }
            case 494:
                var21 = var5 == var10;
                var17 = undefined;
                if (var21) {
                    _fun83057_ip = 509;
                    continue _fun83057
                }
            case 503:
                var17 = var10.price;
            case 509:
                var21 = var5 != var17;
                var10 = 0;
                if (!var21) {
                    _fun83057_ip = 521;
                    continue _fun83057
                }
            case 518:
                var10 = var17;
            case 521:
                var21 = var5 == var20;
                var17 = undefined;
                if (var21) {
                    _fun83057_ip = 536;
                    continue _fun83057
                }
            case 530:
                var17 = var20.price;
            case 536:
                var20 = var5 != var17;
                var13 = 0;
                if (!var20) {
                    _fun83057_ip = 548;
                    continue _fun83057
                }
            case 545:
                var13 = var17;
            case 548:
                var16 = var10 - var13;
                var14 = var1;
                _fun83057_ip = 597;
                continue _fun83057;
            case 557:
                var10 = var5 != var8;
                var1 = null;
                if (!var10) {
                    _fun83057_ip = 591;
                    continue _fun83057
                }
            case 566:
                var10 = var5 != var7;
                var1 = null;
                if (!var10) {
                    _fun83057_ip = 591;
                    continue _fun83057
                }
            case 575:
                var8 = var8.price;
                var7 = var7.price;
                var1 = var8 - var7;
            case 591:
                var16 = var1;
                var14 = var16;
            case 597:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 19;
                var1 = var1[var8];
                var7 = var7.bind(var3)(var1);
                var1 = var7.isAndroid;
                var1 = var1.bind(var7)();
                if (!var1) {
                    _fun83057_ip = 634;
                    continue _fun83057
                }
            case 630:
                var1 = var5 != var16;
            case 634:
                var10 = var16;
                if (!var1) {
                    _fun83057_ip = 682;
                    continue _fun83057
                }
            case 640:
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 20;
                var1 = var13[var1];
                var13 = var7.bind(var3)(var1);
                var7 = var13.convertToMajorCurrencyUnits;
                var1 = _closure1_slot11;
                var1 = var1.USD;
                var10 = var7.bind(var13)(var16, var1);
            case 682:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var7 = var7.bind(var3)(var1);
                var1 = var7.isAndroid;
                var7 = var1.bind(var7)();
                if (!var7) {
                    _fun83057_ip = 716;
                    continue _fun83057
                }
            case 712:
                var7 = var5 != var14;
            case 716:
                var1 = var14;
                if (!var7) {
                    _fun83057_ip = 764;
                    continue _fun83057
                }
            case 722:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 20;
                var7 = var13[var7];
                var13 = var8.bind(var3)(var7);
                var8 = var13.convertToMajorCurrencyUnits;
                var7 = _closure1_slot11;
                var7 = var7.USD;
                var1 = var8.bind(var13)(var14, var7);
            case 764:
                var7 = var5 != var10;
                var16 = '...';
                var17 = var16;
                if (!var7) {
                    _fun83057_ip = 844;
                    continue _fun83057
                }
            case 780:
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = 21;
                var8 = var20[var7];
                var13 = var14.bind(var3)(var8);
                var8 = var13.formatRate;
                var7 = var20[var7];
                var20 = var14.bind(var3)(var7);
                var14 = var20.formatPrice;
                var7 = {};
                var21 = false;
                var7.convertToMajorUnits = var21;
                var7 = var14.bind(var20)(var10, var19, var7);
                var17 = var8.bind(var13)(var7, var12, var11);
            case 844:
                var _closure2_slot2 = var17;
                var5 = var5 != var1;
                if (!var5) {
                    _fun83057_ip = 919;
                    continue _fun83057
                }
            case 855:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 21;
                var7 = var14[var5];
                var8 = var13.bind(var3)(var7);
                var7 = var8.formatRate;
                var5 = var14[var5];
                var14 = var13.bind(var3)(var5);
                var13 = var14.formatPrice;
                var5 = {};
                var20 = false;
                var5.convertToMajorUnits = var20;
                var5 = var13.bind(var14)(var1, var19, var5);
                var16 = var7.bind(var8)(var5, var12, var11);
            case 919:
                var _closure2_slot3 = var16;
                var8 = _closure1_slot18;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 18;
                var5 = var5[var7];
                var5 = var11.bind(var3)(var5);
                var5 = var5.Text;
                if (!(var10 === var1)) {
                    _fun83057_ip = 1050;
                    continue _fun83057
                }
            case 956:
                var1 = {};
                var10 = var4.cardText;
                var1.style = var10;
                var10 = 'text-md/medium';
                var1.variant = var10;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 22;
                var12 = var14[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.Mmf63F;
                var10 = {};
                var10.price = var17;
                var10 = var12.bind(var13)(var11, var10);
                var1.children = var10;
                _fun83057_ip = 1224;
                continue _fun83057;
            case 1050:
                var10 = {};
                var11 = var4.cardText;
                var10.style = var11;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 22;
                var13 = var19[var11];
                var13 = var12.bind(var3)(var13);
                var21 = var13.intl;
                var20 = var21.formatToPlainString;
                var13 = var19[var11];
                var13 = var12.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.lEIwDw;
                var13 = {};
                var13.price = var17;
                var13.originalPrice = var16;
                var13 = var20.bind(var21)(var14, var13);
                var10.accessibilityLabel = var13;
                var13 = 'text-md/medium';
                var10.variant = var13;
                var13 = var19[var11];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var19[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.eRSsbf;
                var11 = {};
                var11.price = var17;
                var11.originalPrice = var16;
                var15 = function arg0, arg1() {
                    _fun83065: for (var _fun83065_ip = 0;;) switch (_fun83065_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun83065_ip = 98;
                                continue _fun83065
                            }
                        case 17:
                            var5 = _closure1_slot18;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-muted'
                            };
                            var1 = _closure2_slot0;
                            var1 = var1.originalPrice;
                            var2.style = var1;
                            var1 = arg0;
                            var2.children = var1;
                            var1 = arg1;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 98:
                            return var0;
                    }
                };
                var11.originalPriceHook = var15;
                var11 = var13.bind(var14)(var12, var11);
                var10.children = var11;
                var1 = var10;
            case 1224:
                var8 = var8.bind(var3)(var5, var1);
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var5 = var5.bind(var3)(var1);
                var1 = var5.hasFreeBoosts;
                var1 = var1.bind(var5)(var9);
                if (!var1) {
                    _fun83057_ip = 1309;
                    continue _fun83057
                }
            case 1261:
                if (!var2) {
                    _fun83057_ip = 1309;
                    continue _fun83057
                }
            case 1264:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var10 = var5.bind(var3)(var1);
                var5 = var10.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var5.bind(var10)(var9, var1);
                if (var1) {
                    _fun83057_ip = 1551;
                    continue _fun83057
                }
            case 1309:
                var1 = var8;
                if (!var2) {
                    _fun83057_ip = 1546;
                    continue _fun83057
                }
            case 1318:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var6 = var5.bind(var3)(var2);
                var5 = var6.isPremium;
                var2 = _closure1_slot14;
                var2 = var2.TIER_1;
                var2 = var5.bind(var6)(var9, var2);
                var1 = var8;
                if (!var2) {
                    _fun83057_ip = 1546;
                    continue _fun83057
                }
            case 1366:
                var6 = _closure1_slot20;
                var5 = _closure1_slot19;
                var2 = {};
                var11 = _closure1_slot18;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = var19[var7];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var12 = var4.cardText;
                var9.style = var12;
                var12 = 'text-md/medium';
                var9.variant = var12;
                var12 = 22;
                var13 = var19[var12];
                var13 = var17.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.format;
                var12 = var19[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.XVMAKU;
                var12 = {};
                var16 = 23;
                var16 = var19[var16];
                var19 = var17.bind(var3)(var16);
                var17 = var19.formatPercent;
                var20 = _closure1_slot17;
                var16 = 100;
                var16 = var20 / var16;
                var16 = var17.bind(var19)(var18, var16);
                var12.discountPercent = var16;
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var8;
                var2.children = var9;
                var1 = var6.bind(var3)(var5, var2);
            case 1546:
                _fun83057_ip = 1742;
                continue _fun83057;
            case 1551:
                var6 = _closure1_slot20;
                var5 = _closure1_slot19;
                var2 = {};
                var10 = _closure1_slot18;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = var17[var7];
                var7 = var16.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {};
                var11 = var4.cardText;
                var7.style = var11;
                var11 = 'text-md/medium';
                var7.variant = var11;
                var11 = 22;
                var12 = var17[var11];
                var12 = var16.bind(var3)(var12);
                var14 = var12.intl;
                var13 = var14.format;
                var11 = var17[var11];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11["ZikTt+"];
                var11 = {};
                var15 = _closure1_slot16;
                var11.freeSubscriptionCount = var15;
                var15 = 23;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.formatPercent;
                var19 = _closure1_slot17;
                var15 = 100;
                var15 = var19 / var15;
                var15 = var16.bind(var17)(var18, var15);
                var11.discountPercent = var15;
                var11 = var13.bind(var14)(var12, var11);
                var7.children = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2.children = var7;
                var1 = var6.bind(var3)(var5, var2);
            case 1742:
                return var1;
            case 1744:
                var2 = _closure1_slot18;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'children': '...'
                };
                var4 = var4.cardText;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumSubscriptionPricingUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun83066: for (var _fun83066_ip = 0;;) switch (_fun83066_ip) {
            case 0:
                var0 = _closure1_slot21;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 14;
                var0 = var13[var0];
                var1 = var12.bind(var3)(var0);
                var0 = var1.useSubscriptionPlansLoaded;
                var7 = var0.bind(var1)();
                var2 = _closure1_slot20;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.pricingSection;
                var0.style = var4;
                var8 = _closure1_slot18;
                var4 = 18;
                var4 = var13[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var9.title;
                var4.style = var9;
                var9 = 22;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["3x1PFE"];
                var9 = var10.bind(var11)(var9);
                var4.children = var9;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun83066_ip = 197;
                    continue _fun83066
                }
            case 181:
                var8 = _closure1_slot18;
                var7 = _closure1_slot22;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 197:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1685, 1621, 3116, 3117, 4611, 660, 1623, 33, 1297, 566, 3109, 7302, 806, 7050, 4608, 3941, 478, 4609, 4606, 1234, 1604, 2]);