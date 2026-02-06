// modules/user_settings/native/premium_marketing/UserSettingsPremiumGifting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var15 = 1;
    var6 = var5[var15];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var13 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.UserSettingsSections;
    var _closure1_slot10 = var7;
    var14 = var3.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var3 = var3.AnalyticsPages;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PremiumTypes;
    var _closure1_slot12 = var7;
    var3 = var3.SubscriptionPlans;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var7 = var3.jsxs;
    var _closure1_slot15 = var7;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var15;
    var3.giftingSettingsContainer = var9;
    var9 = {
        'alignSelf': 'center',
        'position': 'absolute',
        'top': 0
    };
    var3.topBackground = var9;
    var9 = {
        'alignSelf': 'center',
        'position': 'absolute',
        'bottom': 0
    };
    var3.bottomBackground = var9;
    var9 = {};
    var9.paddingHorizontal = var10;
    var3.hint = var9;
    var9 = {};
    var10 = 50;
    var9.marginBottom = var10;
    var3.subscriptionHeader = var9;
    var9 = {};
    var9.flex = var15;
    var11 = 8;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.inventorySectionWrapper = var9;
    var9 = {
        'flex': 1,
        'paddingTop': 36,
        'paddingBottom': 16
    };
    var10 = 16;
    var16 = var5[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var16;
    var3.giftPurchaseSectionWrapper = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingVertical': 16
    };
    var13 = var13.hairlineWidth;
    var9.borderWidth = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var9.borderColor = var13;
    var3.emptyGiftLinks = var9;
    var9 = {};
    var13 = 18;
    var9.marginRight = var13;
    var3.emptyImage = var9;
    var9 = {};
    var16 = 20;
    var9.lineHeight = var16;
    var3.emptyGiftHeader = var9;
    var9 = {};
    var9.flex = var15;
    var3.emptyGiftDescription = var9;
    var9 = {};
    var9.marginTop = var11;
    var3.emptyGiftInformation = var9;
    var9 = {
        'lineHeight': 16,
        'textTransform': 'uppercase'
    };
    var9.marginHorizontal = var14;
    var3.title = var9;
    var9 = {
        'marginTop': 12,
        'fontSize': 14,
        'fontWeight': '400'
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var9.color = var14;
    var3.subtitle = var9;
    var9 = {
        'paddingTop': 28,
        'paddingBottom': 8
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var14;
    var3.titleWrapper = var9;
    var9 = {};
    var9.lineHeight = var13;
    var3.cardText = var9;
    var9 = {};
    var9.marginTop = var10;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var11;
    var3.ctaButton = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.tierCard = var9;
    var9 = {
        'marginTop': 8,
        'height': 40
    };
    var3.giftPurchaseButton = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.buttonWrapper = var9;
    var9 = {};
    var11 = 32;
    var9.marginTop = var11;
    var3.loading = var9;
    var9 = {};
    var9.marginHorizontal = var10;
    var3.warningMargins = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun83109: for (var _fun83109_ip = 0;;) switch (_fun83109_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var33 = var0.recipientUserId;
                var30 = var0.analyticsLocation;
                var4 = undefined;
                if (!(var30 === var4)) {
                    _fun83109_ip = 49;
                    continue _fun83109
                }
            case 26:
                var0 = {};
                var1 = _closure1_slot11;
                var1 = var1.GIFTING_SETTINGS;
                var0.page = var1;
                var30 = var0;
            case 49:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var36 = function() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 22;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.setSection;
                    var1 = _closure1_slot10;
                    var3 = var1.PREMIUM_GIFTING;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackUserSettingsPaneViewed;
                    var2 = {};
                    var5 = var1.PREMIUM_GIFTING;
                    var2.destinationPane = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = var1.PREMIUM;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = _closure1_slot17;
                var5 = var0.bind(var4)();
                _closure2_slot0 = var5;
                var11 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var0 = var11.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = 10;
                var0 = var3[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                _closure2_slot1 = var0;
                var0 = 11;
                var0 = var3[var0];
                var0 = var11.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var9 = var0.bottom;
                var0 = 12;
                var0 = var3[var0];
                var10 = var2.bind(var4)(var0);
                var6 = var10.useStateFromStoresArray;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var1 = _closure1_slot9;
                    var0 = var1.getGiftable;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var6.bind(var10)(var1, var0);
                _closure2_slot2 = var0;
                var6 = _closure1_slot4;
                var10 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.groupBy;
                    var1 = _closure2_slot2;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.makeComboId;
                        var2 = var0.skuId;
                        var1 = var0.subscriptionPlanId;
                        var0 = var0.giftStyle;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var10.bind(var6)(var0, var1);
                _closure2_slot3 = var0;
                var0 = 15;
                var0 = var3[var0];
                var13 = var11.bind(var4)(var0);
                var12 = var13.useExperiment;
                var1 = {};
                var0 = '458d7b_1';
                var1.location = var0;
                var0 = {};
                var10 = false;
                var0.autoTrackExposure = var10;
                var0 = var12.bind(var13)(var1, var0);
                var0 = var0.paymentsBlocked;
                var1 = 16;
                var1 = var3[var1];
                var12 = var2.bind(var4)(var1);
                var1 = var12.useOutboundPromotions;
                var1 = var1.bind(var12)();
                var15 = var1.promotionsLoaded;
                var12 = var1.activeOutboundPromotions;
                _closure2_slot4 = var12;
                var12 = var1.claimedEndedOutboundPromotions;
                _closure2_slot5 = var12;
                var12 = var1.claimedOutboundPromotionCodeMap;
                _closure2_slot6 = var12;
                var1 = var1.addClaimedOutboundPromotionCode;
                _closure2_slot7 = var1;
                var1 = 17;
                var1 = var3[var1];
                var1 = var11.bind(var4)(var1);
                var14 = var1.bind(var4)();
                var1 = var6.useState;
                var11 = var1.bind(var6)(var10);
                var10 = _closure1_slot3;
                var1 = 2;
                var10 = var10.bind(var4)(var11, var1);
                var1 = 0;
                var17 = var10[var1];
                var1 = 1;
                var1 = var10[var1];
                _closure2_slot8 = var1;
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useSubscriptionPlansLoaded;
                var13 = var1.bind(var2)();
                var3 = var6.useEffect;
                var2 = function() { // Environment: var16
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 20;
                        var2 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.fetchGiftableEntitlements;
                        var5 = var2.bind(var4)();
                        var4 = var5.then;
                        var2 = function() { // Environment: var2
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 21;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.init;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var6)(var2, var1);
                if (var0) {
                    _fun83109_ip = 1706;
                    continue _fun83109
                }
            case 488:
                var2 = _closure1_slot15;
                var1 = _closure1_slot7;
                var0 = {};
                var3 = var5.giftingSettingsContainer;
                var0.style = var3;
                var10 = _closure1_slot14;
                var6 = _closure1_slot1;
                var18 = _closure1_slot2;
                var3 = 35;
                var3 = var18[var3];
                var6 = var6.bind(var4)(var3);
                var3 = {};
                var6 = var10.bind(var4)(var6, var3);
                var3 = new Array(2);
                var3[0] = var6;
                var10 = _closure1_slot8;
                var6 = {};
                var6.ref = var8;
                var11 = {};
                var11.bottom = var9;
                var6.contentInset = var11;
                var12 = _closure1_slot0;
                var11 = 36;
                var11 = var18[var11];
                var12 = var12.bind(var4)(var11);
                var11 = var12.isThemeDark;
                var12 = var11.bind(var12)(var14);
                var14 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 8;
                var11 = var18[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                if (var12) {
                    _fun83109_ip = 632;
                    continue _fun83109
                }
            case 624:
                var19 = var11.PRIMARY_500;
                _fun83109_ip = 638;
                continue _fun83109;
            case 632:
                var19 = var11.WHITE;
            case 638:
                var14 = _closure1_slot14;
                var12 = _closure1_slot7;
                var11 = {};
                if (!var17) {
                    _fun83109_ip = 657;
                    continue _fun83109
                }
            case 651:
                if (!var15) {
                    _fun83109_ip = 657;
                    continue _fun83109
                }
            case 654:
                if (var13) {
                    _fun83109_ip = 689;
                    continue _fun83109
                }
            case 657:
                var18 = _closure1_slot14;
                var17 = _closure1_slot5;
                var15 = {};
                var20 = var5.loading;
                var15.style = var20;
                var15.color = var19;
                var15 = var18.bind(var4)(var17, var15);
                _fun83109_ip = 700;
                continue _fun83109;
            case 689:
                var16 = function() {
                    _fun83111: for (var _fun83111_ip = 0;;) switch (_fun83111_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.keys;
                            var0 = _closure2_slot3;
                            var13 = var1.bind(var2)(var0);
                            var0 = var13.length;
                            var7 = 0;
                            if (!(var7 === var0)) {
                                _fun83111_ip = 67;
                                continue _fun83111
                            }
                        case 38:
                            var0 = _closure2_slot4;
                            var0 = var0.length;
                            if (!(var7 === var0)) {
                                _fun83111_ip = 67;
                                continue _fun83111
                            }
                        case 51:
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            if (!(var7 !== var0)) {
                                _fun83111_ip = 596;
                                continue _fun83111
                            }
                        case 67:
                            var3 = _closure1_slot15;
                            var2 = _closure1_slot7;
                            var1 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.inventorySectionWrapper;
                            var1.style = var0;
                            var0 = _closure2_slot4;
                            var4 = var0.length;
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var0 = var4 + var0;
                            var6 = null;
                            if (!(var0 > var7)) {
                                _fun83111_ip = 352;
                                continue _fun83111
                            }
                        case 125:
                            var11 = _closure1_slot15;
                            var9 = _closure1_slot16;
                            var8 = {};
                            var16 = _closure1_slot14;
                            var15 = _closure1_slot7;
                            var14 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.titleWrapper;
                            var14.style = var0;
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var0 = 25;
                            var17 = var23[var0];
                            var0 = undefined;
                            var17 = var22.bind(var0)(var17);
                            var18 = var17.Text;
                            var17 = {
                                'style': null,
                                'accessibilityRole': 'header',
                                'variant': 'text-xs/bold',
                                'color': 'text-default'
                            };
                            var19 = _closure2_slot0;
                            var19 = var19.title;
                            var17.style = var19;
                            var19 = 26;
                            var20 = var23[var19];
                            var20 = var22.bind(var0)(var20);
                            var21 = var20.intl;
                            var20 = var21.string;
                            var19 = var23[var19];
                            var19 = var22.bind(var0)(var19);
                            var19 = var19.t;
                            var19 = var19.wFsj3B;
                            var19 = var20.bind(var21)(var19);
                            var17.children = var19;
                            var17 = var16.bind(var0)(var18, var17);
                            var14.children = var17;
                            var15 = var16.bind(var0)(var15, var14);
                            var14 = new Array(3);
                            var14[0] = var15;
                            var17 = _closure2_slot5;
                            var16 = var17.map;
                            var15 = function(arg0) { // Environment: var10
                                var0 = arg0;
                                var5 = var0.code;
                                var0 = var0.promotion;
                                var4 = _closure1_slot14;
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 27;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.outboundPromotion = var0;
                                var1.code = var5;
                                var5 = _closure2_slot7;
                                var1.addClaimedOutboundPromotionCode = var5;
                                var0 = var0.id;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var15 = var16.bind(var17)(var15);
                            var14[1] = var15;
                            var17 = _closure2_slot4;
                            var16 = var17.map;
                            var15 = function(arg0) { // Environment: var10
                                var0 = arg0;
                                var4 = _closure1_slot14;
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 27;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.outboundPromotion = var0;
                                var7 = _closure2_slot6;
                                var6 = var0.id;
                                var6 = var7[var6];
                                var1.code = var6;
                                var5 = _closure2_slot7;
                                var1.addClaimedOutboundPromotionCode = var5;
                                var0 = var0.id;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var15 = var16.bind(var17)(var15);
                            var14[2] = var15;
                            var8.children = var14;
                            var6 = var11.bind(var0)(var9, var8);
                        case 352:
                            var0 = new Array(2);
                            var0[0] = var6;
                            var6 = var13.length;
                            var6 = var6 > var7;
                            var4 = null;
                            if (!var6) {
                                _fun83111_ip = 575;
                                continue _fun83111
                            }
                        case 377:
                            var8 = _closure1_slot15;
                            var7 = _closure1_slot16;
                            var6 = {};
                            var14 = _closure1_slot14;
                            var11 = _closure1_slot7;
                            var9 = {};
                            var15 = _closure2_slot0;
                            var15 = var15.titleWrapper;
                            var9.style = var15;
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var5 = 25;
                            var15 = var21[var5];
                            var5 = undefined;
                            var15 = var20.bind(var5)(var15);
                            var16 = var15.Text;
                            var15 = {
                                'style': null,
                                'accessibilityRole': 'header',
                                'variant': 'text-xs/bold',
                                'color': 'text-default'
                            };
                            var17 = _closure2_slot0;
                            var17 = var17.title;
                            var15.style = var17;
                            var17 = 26;
                            var18 = var21[var17];
                            var18 = var20.bind(var5)(var18);
                            var19 = var18.intl;
                            var18 = var19.string;
                            var17 = var21[var17];
                            var17 = var20.bind(var5)(var17);
                            var17 = var17.t;
                            var17 = var17["9KeUbY"];
                            var17 = var18.bind(var19)(var17);
                            var15.children = var17;
                            var15 = var14.bind(var5)(var16, var15);
                            var9.children = var15;
                            var11 = var14.bind(var5)(var11, var9);
                            var9 = new Array(2);
                            var9[0] = var11;
                            var11 = var13.map;
                            var10 = function(arg0) { // Environment: var10
                                var4 = arg0;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 14;
                                var1 = var8[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.parseComboId;
                                var1 = var1.bind(var2)(var4);
                                var7 = var1.skuId;
                                var6 = var1.subscriptionPlanId;
                                var5 = var1.giftStyle;
                                var2 = _closure1_slot14;
                                var1 = _closure1_slot1;
                                var0 = 28;
                                var0 = var8[var0];
                                var1 = var1.bind(var3)(var0);
                                var0 = {};
                                var0.skuId = var7;
                                var0.subscriptionPlanId = var6;
                                var6 = _closure2_slot3;
                                var6 = var6[var4];
                                var0.entitlements = var6;
                                var0.giftStyle = var5;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                            };
                            var10 = var11.bind(var13)(var10);
                            var9[1] = var10;
                            var6.children = var9;
                            var4 = var8.bind(var5)(var7, var6);
                        case 575:
                            var0[1] = var4;
                            var1.children = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            _fun83111_ip = 955;
                            continue _fun83111;
                        case 596:
                            var4 = _closure1_slot15;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var1 = var1.emptyGiftLinks;
                            var2.style = var1;
                            var10 = _closure1_slot14;
                            var6 = _closure1_slot6;
                            var5 = {};
                            var1 = _closure2_slot0;
                            var1 = var1.emptyImage;
                            var5.style = var1;
                            var9 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var1 = 24;
                            var8 = var15[var1];
                            var1 = undefined;
                            var8 = var9.bind(var1)(var8);
                            var5.source = var8;
                            var6 = var10.bind(var1)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = {};
                            var8 = _closure2_slot0;
                            var8 = var8.emptyGiftDescription;
                            var6.style = var8;
                            var8 = true;
                            var6.accessible = var8;
                            var14 = _closure1_slot0;
                            var8 = 25;
                            var7 = var15[var8];
                            var7 = var14.bind(var1)(var7);
                            var9 = var7.Text;
                            var7 = {
                                'style': null,
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var11 = _closure2_slot0;
                            var11 = var11.emptyGiftHeader;
                            var7.style = var11;
                            var11 = 26;
                            var13 = var15[var11];
                            var13 = var14.bind(var1)(var13);
                            var17 = var13.intl;
                            var16 = var17.string;
                            var13 = var15[var11];
                            var13 = var14.bind(var1)(var13);
                            var13 = var13.t;
                            var13 = var13.B1qgZn;
                            var13 = var16.bind(var17)(var13);
                            var7.children = var13;
                            var9 = var10.bind(var1)(var9, var7);
                            var7 = new Array(2);
                            var7[0] = var9;
                            var8 = var15[var8];
                            var8 = var14.bind(var1)(var8);
                            var9 = var8.Text;
                            var8 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var12 = _closure2_slot0;
                            var12 = var12.emptyGiftInformation;
                            var8.style = var12;
                            var12 = var15[var11];
                            var12 = var14.bind(var1)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var15[var11];
                            var11 = var14.bind(var1)(var11);
                            var11 = var11.t;
                            var11 = var11["OV/u0n"];
                            var11 = var12.bind(var13)(var11);
                            var8.children = var11;
                            var8 = var10.bind(var1)(var9, var8);
                            var7[1] = var8;
                            var6.children = var7;
                            var6 = var4.bind(var1)(var3, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 955:
                            return var0;
                    }
                };
                var15 = var16.bind(var4)();
            case 700:
                var11.children = var15;
                var12 = var14.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = null;
                if (!var13) {
                    _fun83109_ip = 1676;
                    continue _fun83109
                }
            case 726:
                var15 = _closure1_slot15;
                var14 = _closure1_slot7;
                var13 = {};
                var16 = var5.giftPurchaseSectionWrapper;
                var13.style = var16;
                var22 = _closure1_slot14;
                var29 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 25;
                var16 = var23[var16];
                var16 = var29.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-xs/bold',
                    'color': 'text-default'
                };
                var18 = var5.title;
                var16.style = var18;
                var27 = 26;
                var18 = var23[var27];
                var18 = var29.bind(var4)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var23[var27];
                var18 = var29.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["55Ccy0"];
                var18 = var19.bind(var20)(var18);
                var16.children = var18;
                var17 = var22.bind(var4)(var17, var16);
                var16 = new Array(4);
                var16[0] = var17;
                var21 = _closure1_slot1;
                var19 = 29;
                var17 = var23[var19];
                var18 = var21.bind(var4)(var17);
                var17 = {};
                var26 = _closure1_slot12;
                var20 = var26.TIER_2;
                var17.premiumType = var20;
                var20 = var5.tierCard;
                var17.style = var20;
                var25 = 30;
                var20 = var23[var25];
                var20 = var29.bind(var4)(var20);
                var24 = var20.TextWithIOSLinkWorkaround;
                var20 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var28 = var5.cardText;
                var20.style = var28;
                var28 = var23[var27];
                var28 = var29.bind(var4)(var28);
                var34 = var28.intl;
                var32 = var34.format;
                var28 = var23[var27];
                var28 = var29.bind(var4)(var28);
                var28 = var28.t;
                var31 = var28.thORji;
                var28 = {};
                var28.onClick = var36;
                var28 = var32.bind(var34)(var31, var28);
                var20.children = var28;
                var24 = var22.bind(var4)(var24, var20);
                var20 = new Array(2);
                var20[0] = var24;
                var24 = {};
                var28 = var5.buttonWrapper;
                var24.style = var28;
                var28 = 31;
                var31 = var23[var28];
                var35 = var21.bind(var4)(var31);
                var34 = {};
                var34.recipientUserId = var33;
                var31 = var5.giftPurchaseButton;
                var34.style = var31;
                var32 = 32;
                var31 = var23[var32];
                var31 = var21.bind(var4)(var31);
                var31 = var31.Colors;
                var31 = var31.GREEN;
                var34.color = var31;
                var31 = _closure1_slot13;
                var37 = var31.PREMIUM_YEAR_TIER_2;
                var34.planId = var37;
                var34.analyticsLocation = var30;
                var35 = var22.bind(var4)(var35, var34);
                var34 = new Array(2);
                var34[0] = var35;
                var35 = var23[var28];
                var37 = var21.bind(var4)(var35);
                var35 = {};
                var35.recipientUserId = var33;
                var38 = var5.giftPurchaseButton;
                var35.style = var38;
                var38 = var23[var32];
                var38 = var21.bind(var4)(var38);
                var38 = var38.Colors;
                var38 = var38.LIGHTGREY;
                var35.color = var38;
                var38 = var31.PREMIUM_MONTH_TIER_2;
                var35.planId = var38;
                var35.analyticsLocation = var30;
                var35 = var22.bind(var4)(var37, var35);
                var34[1] = var35;
                var24.children = var34;
                var24 = var15.bind(var4)(var14, var24);
                var20[1] = var24;
                var17.children = var20;
                var17 = var15.bind(var4)(var18, var17);
                var16[1] = var17;
                var20 = 33;
                var17 = var23[var20];
                var18 = var21.bind(var4)(var17);
                var17 = {};
                var24 = var5.warningMargins;
                var17.style = var24;
                var17 = var22.bind(var4)(var18, var17);
                var16[2] = var17;
                var18 = _closure1_slot16;
                var17 = {};
                var19 = var23[var19];
                var24 = var21.bind(var4)(var19);
                var19 = {};
                var26 = var26.TIER_0;
                var19.premiumType = var26;
                var26 = var5.tierCard;
                var19.style = var26;
                var25 = var23[var25];
                var25 = var29.bind(var4)(var25);
                var26 = var25.TextWithIOSLinkWorkaround;
                var25 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var34 = var5.cardText;
                var25.style = var34;
                var34 = var23[var27];
                var34 = var29.bind(var4)(var34);
                var35 = var34.intl;
                var34 = var35.format;
                var27 = var23[var27];
                var27 = var29.bind(var4)(var27);
                var27 = var27.t;
                var29 = var27.NmpnsP;
                var27 = {};
                var27.onClick = var36;
                var27 = var34.bind(var35)(var29, var27);
                var25.children = var27;
                var26 = var22.bind(var4)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = {};
                var27 = var5.buttonWrapper;
                var26.style = var27;
                var27 = var23[var28];
                var29 = var21.bind(var4)(var27);
                var27 = {};
                var27.recipientUserId = var33;
                var34 = var5.giftPurchaseButton;
                var27.style = var34;
                var34 = var23[var32];
                var34 = var21.bind(var4)(var34);
                var34 = var34.Colors;
                var34 = var34.GREEN;
                var27.color = var34;
                var34 = var31.PREMIUM_YEAR_TIER_0;
                var27.planId = var34;
                var27.analyticsLocation = var30;
                var29 = var22.bind(var4)(var29, var27);
                var27 = new Array(2);
                var27[0] = var29;
                var28 = var23[var28];
                var29 = var21.bind(var4)(var28);
                var28 = {};
                var28.recipientUserId = var33;
                var33 = var5.giftPurchaseButton;
                var28.style = var33;
                var32 = var23[var32];
                var32 = var21.bind(var4)(var32);
                var32 = var32.Colors;
                var32 = var32.LIGHTGREY;
                var28.color = var32;
                var31 = var31.PREMIUM_MONTH_TIER_0;
                var28.planId = var31;
                var28.analyticsLocation = var30;
                var28 = var22.bind(var4)(var29, var28);
                var27[1] = var28;
                var26.children = var27;
                var26 = var15.bind(var4)(var14, var26);
                var25[1] = var26;
                var19.children = var25;
                var24 = var15.bind(var4)(var24, var19);
                var19 = new Array(2);
                var19[0] = var24;
                var20 = var23[var20];
                var21 = var21.bind(var4)(var20);
                var20 = {};
                var23 = var5.warningMargins;
                var20.style = var23;
                var20 = var22.bind(var4)(var21, var20);
                var19[1] = var20;
                var17.children = var19;
                var17 = var15.bind(var4)(var18, var17);
                var16[3] = var17;
                var13.children = var16;
                var12 = var15.bind(var4)(var14, var13);
            case 1676:
                var11[1] = var12;
                var6.children = var11;
                var6 = var2.bind(var4)(var10, var6);
                var3[1] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun83109_ip = 1802;
                continue _fun83109;
            case 1706:
                var3 = _closure1_slot14;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var5.giftingSettingsContainer;
                var1.style = var5;
                var6 = _closure1_slot8;
                var5 = {};
                var5.ref = var8;
                var8 = {};
                var10 = 40;
                var8.top = var10;
                var8.bottom = var9;
                var5.contentInset = var8;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 34;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7 = var3.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1802:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/UserSettingsPremiumGifting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4653, 660, 1623, 33, 1297, 671, 7074, 1469, 1568, 566, 22, 3350, 6895, 7121, 3248, 7326, 806, 4654, 7075, 7251, 7252, 10694, 3943, 1234, 10695, 10701, 10716, 5337, 10719, 4876, 10721, 6901, 7577, 3208, 2]);