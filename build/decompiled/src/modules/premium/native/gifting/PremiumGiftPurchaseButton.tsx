// modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: RewardPreview, environment: var1
        _fun75223: for (var _fun75223_ip = 0;;) switch (_fun75223_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.collectiblesItem;
                var18 = var0.currentUser;
                var10 = var0.gradientColors;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.insets;
                var1 = _closure1_slot16;
                var0 = var0.bottom;
                var9 = var1.bind(var4)(var0);
                var0 = _closure1_slot7;
                var0 = var0.bind(var4)(var19);
                if (var0) {
                    _fun75223_ip = 418;
                    continue _fun75223
                }
            case 85:
                var0 = _closure1_slot6;
                var1 = var0.bind(var4)(var19);
                var0 = null;
                if (!var1) {
                    _fun75223_ip = 413;
                    continue _fun75223
                }
            case 102:
                var3 = _closure1_slot15;
                var2 = _closure1_slot14;
                var1 = {};
                var8 = _closure1_slot13;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 16;
                var5 = var15[var5];
                var7 = var12.bind(var4)(var5);
                var5 = {};
                var11 = var9.selectedRewardBannerGradient;
                var5.style = var11;
                var11 = _closure1_slot12;
                var11 = var11.START;
                var5.start = var11;
                var11 = _closure1_slot12;
                var11 = var11.END;
                var5.end = var11;
                var5.colors = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var10 = _closure1_slot13;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var9.singleAvatarContainer;
                var7.style = var11;
                var13 = _closure1_slot13;
                var11 = 17;
                var11 = var15[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var14 = _closure1_slot0;
                var16 = 13;
                var16 = var15[var16];
                var16 = var14.bind(var4)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.NORMAL;
                var11.size = var16;
                var16 = var19.asset;
                var11.asset = var16;
                var11 = var13.bind(var4)(var12, var11);
                var7.children = var11;
                var7 = var10.bind(var4)(var8, var7);
                var5[1] = var7;
                var10 = _closure1_slot13;
                var7 = 14;
                var7 = var15[var7];
                var7 = var14.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'white'
                };
                var11 = var9.selectedRewardText;
                var7.style = var11;
                var11 = 15;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.Rh4oem;
                var11 = var12.bind(var13)(var11);
                var7.children = var11;
                var7 = var10.bind(var4)(var8, var7);
                var5[2] = var7;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 413:
                _fun75223_ip = 755;
                continue _fun75223;
            case 418:
                var3 = _closure1_slot15;
                var2 = _closure1_slot14;
                var1 = {};
                var8 = _closure1_slot13;
                var7 = _closure1_slot5;
                var5 = {};
                var10 = var9.nameplateWrapper;
                var5.style = var10;
                var15 = _closure1_slot13;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 11;
                var10 = var13[var10];
                var11 = var14.bind(var4)(var10);
                var10 = {
                    'nameplate': null,
                    'fullOpacity': true,
                    'animate': true
                };
                var12 = _closure1_slot0;
                var16 = 12;
                var16 = var13[var16];
                var17 = var12.bind(var4)(var16);
                var16 = var17.getNameplateDataFromRecord;
                var16 = var16.bind(var17)(var19);
                var10.nameplate = var16;
                var16 = true;
                var10 = var15.bind(var4)(var11, var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var10 = _closure1_slot13;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var9.singleAvatarContainer;
                var7.style = var11;
                var15 = _closure1_slot13;
                var17 = 13;
                var11 = var13[var17];
                var14 = var14.bind(var4)(var11);
                var11 = {};
                var11.user = var18;
                var11.guildId = var4;
                var17 = var13[var17];
                var17 = var12.bind(var4)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.SMALL;
                var11.size = var17;
                var11['aria-hidden'] = var16;
                var11 = var15.bind(var4)(var14, var11);
                var7.children = var11;
                var7 = var10.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot13;
                var6 = 14;
                var6 = var13[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = var9.selectedRewardText;
                var6.style = var9;
                var9 = 'text-xs/medium';
                var6.variant = var9;
                var9 = 15;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.Rh4oem;
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 755:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var7 = var3.StyleSheet;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isAvatarDecorationRecord;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isNameplateRecord;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot11 = var6;
    var3 = var3.HorizontalGradient;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.Fragment;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 9;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.paddingTop = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var8 = var6.PX_12;
        var6 = arg0;
        var6 = var8 + var6;
        var1.paddingBottom = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.paddingHorizontal = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.gap = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.shadows;
        var9 = var6.SHADOW_TOP_HIGH;
        var10 = var1;
        var6 = copyDataProperties(var10, var9);
        var0.container = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'height': 52,
            'borderRadius': null,
            'overflow': 'hidden'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderRadius = var6;
        var0.chooseRewardContainer = var1;
        var1 = {};
        var6 = 1;
        var1.flex = var6;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.marginStart = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var1.marginEnd = var8;
        var0.chooseRewardText = var1;
        var1 = {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'opacity': 1
        };
        var0.backgroundImage = var1;
        var1 = {
            'width': 58,
            'height': 58
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var1.marginStart = var8;
        var0.inAppFlowImage = var1;
        var1 = {
            'flexDirection': 'row',
            'paddingRight': 15,
            'justifyContent': 'center',
            'alignItems': 'center',
            'marginLeft': 5
        };
        var0.singleAvatarContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var1.gap = var8;
        var0.selectedRewardRow = var1;
        var1 = {
            'flex': 1,
            'flexDirection': 'row',
            'alignItems': 'center',
            'height': 52
        };
        var0.selectedRewardBannerContainer = var1;
        var1 = {};
        var7 = _closure1_slot4;
        var9 = var7.absoluteFillObject;
        var10 = var1;
        var7 = copyDataProperties(var10, var9);
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var8 = var7.sm;
        var7 = 'borderRadius';
        var1[var7] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_4;
        var7 = 'top';
        var1[var7] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_4;
        var7 = 'bottom';
        var1[var7] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_4;
        var7 = 'start';
        var1[var7] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_4;
        var7 = 'end';
        var1[var7] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_12;
        var7 = 'marginStart';
        var1[var7] = var8;
        var0.selectedRewardBannerGradient = var1;
        var1 = {};
        var1.flex = var6;
        var0.selectedRewardText = var1;
        var1 = {
            'position': 'absolute',
            'left': 0,
            'right': 0,
            'top': 0,
            'bottom': 0,
            'borderRadius': null,
            'overflow': 'hidden'
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.sm;
        var1.borderRadius = var2;
        var0.nameplateWrapper = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumGiftPurchaseButton, environment: var1
        _fun75225: for (var _fun75225_ip = 0;;) switch (_fun75225_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.defaultSelection;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.insets;
                var1 = _closure1_slot16;
                var0 = var0.bottom;
                var21 = var1.bind(var3)(var0);
                var2 = _closure1_slot0;
                var0 = 18;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var0 = 19;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useNativeGiftContext;
                var1 = var0.bind(var1)();
                var0 = var1.onPurchase;
                var _closure2_slot2 = var0;
                var10 = var1.isPurchasing;
                var8 = var1.productId;
                var0 = var1.allRewards;
                var _closure2_slot3 = var0;
                var11 = var1.claimableRewards;
                var _closure2_slot4 = var11;
                var14 = var1.selectedGiftingPromotionReward;
                var _closure2_slot5 = var14;
                var0 = var1.setSelectedGiftingPromotionReward;
                var _closure2_slot6 = var0;
                var1 = var1.setCurrentAnalyticsStep;
                var _closure2_slot7 = var1;
                var1 = 20;
                var6 = var4[var1];
                var13 = var2.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var9
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var25 = var12.bind(var13)(var7, var6);
                var6 = 21;
                var6 = var4[var6];
                var7 = var2.bind(var3)(var6);
                var6 = var7.useCanPurchaseIAP;
                var8 = var6.bind(var7)(var8);
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    _fun75227: for (var _fun75227_ip = 0;;) switch (_fun75227_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getMarketingComponentByType;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 22;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.MarketingComponentType;
                            var0 = var0.GIFT_CUSTOMIZATION_BANNER;
                            var1 = var1.bind(var2)(var0);
                            var4 = null;
                            var2 = var4 == var1;
                            var0 = null;
                            if (var2) {
                                _fun75227_ip = 109;
                                continue _fun75227
                            }
                        case 63:
                            var2 = var1.properties;
                            var2 = var2.properties;
                            var3 = var2.oneofKind;
                            var2 = 'giftCustomizationBanner';
                            var0 = null;
                            if (!(var2 === var3)) {
                                _fun75227_ip = 109;
                                continue _fun75227
                            }
                        case 91:
                            var1 = var1.properties;
                            var1 = var1.properties;
                            var0 = var1.giftCustomizationBanner;
                        case 109:
                            return var0;
                    }
                };
                var18 = var4.bind(var6)(var2, var1);
                var13 = null;
                var4 = var13 != var11;
                if (!var4) {
                    _fun75225_ip = 332;
                    continue _fun75225
                }
            case 321:
                var2 = var11.length;
                var1 = 0;
                var4 = var2 > var1;
            case 332:
                _closure2_slot8 = var4;
                var19 = var13 != var11;
                if (!var19) {
                    _fun75225_ip = 355;
                    continue _fun75225
                }
            case 343:
                var2 = var11.length;
                var1 = 1;
                var19 = var1 === var2;
            case 355:
                _closure2_slot9 = var19;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var16 = var1.bind(var3)();
                var6 = var16;
                if (!var16) {
                    _fun75225_ip = 393;
                    continue _fun75225
                }
            case 389:
                var6 = var13 == var14;
            case 393:
                _closure2_slot10 = var6;
                var1 = function(arg0) { // Original name: navigateToRewardSelection, environment: var9
                    _fun75228: for (var _fun75228_ip = 0;;) switch (_fun75228_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot8;
                            if (!var0) {
                                _fun75228_ip = 187;
                                continue _fun75228
                            }
                        case 16:
                            var2 = _closure2_slot7;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 24;
                            var1 = var6[var1];
                            var7 = undefined;
                            var1 = var3.bind(var7)(var1);
                            var1 = var1.PaymentFlowStep;
                            var1 = var1.REWARD_SKU_SELECT;
                            var1 = var2.bind(var7)(var1);
                            var6 = null;
                            if (!(var6 == var4)) {
                                _fun75228_ip = 72;
                                continue _fun75228
                            }
                        case 68:
                            var4 = _closure2_slot0;
                        case 72:
                            var3 = _closure2_slot1;
                            var2 = var3.navigate;
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 25;
                            var0 = var8[var0];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.PremiumGiftScreens;
                            var1 = var0.REWARD_SELECT;
                            var0 = {};
                            var0.defaultHighlightedReward = var4;
                            var4 = _closure2_slot3;
                            if (!(var6 == var4)) {
                                _fun75228_ip = 135;
                                continue _fun75228
                            }
                        case 129:
                            var4 = new Array(0);
                            _fun75228_ip = 139;
                            continue _fun75228;
                        case 135:
                            var4 = _closure2_slot3;
                        case 139:
                            var0.allRewards = var4;
                            var4 = _closure2_slot4;
                            if (!(var6 == var4)) {
                                _fun75228_ip = 158;
                                continue _fun75228
                            }
                        case 152:
                            var4 = new Array(0);
                            _fun75228_ip = 162;
                            continue _fun75228;
                        case 158:
                            var4 = _closure2_slot4;
                        case 162:
                            var0.claimableRewards = var4;
                            var4 = function(arg0) { // Original name: onSelect, environment: var4
                                _fun75229: for (var _fun75229_ip = 0;;) switch (_fun75229_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure1_slot8;
                                        var0 = var2.getCurrentUser;
                                        var8 = var0.bind(var2)();
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 26;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var6 = var3.bind(var0)(var2);
                                        var5 = var6.track;
                                        var2 = _closure1_slot10;
                                        var3 = var2.GIFT_PROMOTION_REWARD_SELECTED;
                                        var2 = {};
                                        var7 = null;
                                        var9 = var7 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun75229_ip = 74;
                                            continue _fun75229
                                        }
                                    case 69:
                                        var7 = var8.id;
                                    case 74:
                                        var2.user_id = var7;
                                        var2.reward_sku_id = var4;
                                        var2 = var5.bind(var6)(var3, var2);
                                        var3 = _closure2_slot6;
                                        var3 = var3.bind(var0)(var4);
                                        var3 = _closure2_slot1;
                                        var2 = var3.navigate;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 25;
                                        var1 = var5[var1];
                                        var1 = var4.bind(var0)(var1);
                                        var1 = var1.PremiumGiftScreens;
                                        var1 = var1.CUSTOMIZATION;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var0.onSelect = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 187:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot11 = var1;
                var7 = _closure1_slot3;
                var2 = var7.useEffect;
                var1 = new Array(3);
                var1[0] = var19;
                var1[1] = var11;
                var1[2] = var0;
                var0 = function() { // Environment: var9
                    _fun75230: for (var _fun75230_ip = 0;;) switch (_fun75230_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun75230_ip = 31;
                                continue _fun75230
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot4;
                            var0 = 0;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var0 = var13 == var18;
                var20 = undefined;
                if (var0) {
                    _fun75225_ip = 475;
                    continue _fun75225
                }
            case 455:
                var0 = var18.gradient;
                var1 = var13 == var0;
                var20 = undefined;
                if (var1) {
                    _fun75225_ip = 475;
                    continue _fun75225
                }
            case 470:
                var20 = var0.colors;
            case 475:
                if (!(var13 == var20)) {
                    _fun75225_ip = 483;
                    continue _fun75225
                }
            case 479:
                var20 = new Array(0);
            case 483:
                var0 = var20.length;
                var1 = 0;
                var24 = var20;
                if (!(!(var0 > var1))) {
                    _fun75225_ip = 587;
                    continue _fun75225
                }
            case 497:
                var7 = global;
                var15 = var7.String;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 9;
                var0 = var12[var2];
                var0 = var11.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BRAND;
                var15 = var15.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var15;
                var7 = var7.String;
                var2 = var12[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                var2 = var7.bind(var3)(var2);
                var0[1] = var2;
                var24 = var0;
            case 587:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 27;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useFetchCollectiblesProduct;
                var0 = var0.bind(var2)(var14);
                var0 = var0.product;
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var15 = 15;
                var7 = var2[var15];
                var7 = var11.bind(var3)(var7);
                var12 = var7.intl;
                var7 = var12.string;
                var2 = var2[var15];
                var2 = var11.bind(var3)(var2);
                var2 = var2.t;
                if (var6) {
                    _fun75225_ip = 684;
                    continue _fun75225
                }
            case 671:
                var11 = var2.ouo4FK;
                var11 = var7.bind(var12)(var11);
                _fun75225_ip = 697;
                continue _fun75225;
            case 684:
                var2 = var2["gNZY/B"];
                var11 = var7.bind(var12)(var2);
            case 697:
                var12 = 'active';
                if (!var6) {
                    _fun75225_ip = 708;
                    continue _fun75225
                }
            case 704:
                var12 = 'primary';
            case 708:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var17 = 28;
                var2 = var2[var17];
                var22 = var7.bind(var3)(var2);
                var7 = var22.useThemeAndReducedMotionAwareAssetUrl;
                var23 = var13 == var18;
                var2 = undefined;
                if (var23) {
                    _fun75225_ip = 749;
                    continue _fun75225
                }
            case 743:
                var2 = var18.mobileBackgroundAsset;
            case 749:
                var29 = var7.bind(var22)(var2);
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var17];
                var17 = var7.bind(var3)(var2);
                var7 = var17.useThemeAndReducedMotionAwareAssetUrl;
                var22 = var13 == var18;
                var2 = undefined;
                if (var22) {
                    _fun75225_ip = 792;
                    continue _fun75225
                }
            case 786:
                var2 = var18.asset;
            case 792:
                var30 = var7.bind(var17)(var2);
                var2 = var13 == var0;
                var26 = undefined;
                if (var2) {
                    _fun75225_ip = 816;
                    continue _fun75225
                }
            case 806:
                var0 = var0.items;
                var26 = var0[var1];
            case 816:
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = var21.container;
                var0.style = var7;
                var7 = var6;
                if (!var7) {
                    _fun75225_ip = 844;
                    continue _fun75225
                }
            case 841:
                var7 = var4;
            case 844:
                if (!var7) {
                    _fun75225_ip = 1187;
                    continue _fun75225
                }
            case 850:
                var18 = _closure1_slot15;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var4 = 16;
                var4 = var22[var4];
                var17 = var17.bind(var3)(var4);
                var4 = {};
                var22 = var21.chooseRewardContainer;
                var4.style = var22;
                var22 = _closure1_slot12;
                var22 = var22.START;
                var4.start = var22;
                var22 = _closure1_slot12;
                var22 = var22.END;
                var4.end = var22;
                var4.colors = var20;
                var22 = var13 != var29;
                if (!var22) {
                    _fun75225_ip = 985;
                    continue _fun75225
                }
            case 925:
                var27 = _closure1_slot13;
                var23 = _closure1_slot1;
                var28 = _closure1_slot2;
                var20 = 29;
                var20 = var28[var20];
                var23 = var23.bind(var3)(var20);
                var20 = {};
                var28 = var21.backgroundImage;
                var20.style = var28;
                var28 = 'cover';
                var20.resizeMode = var28;
                var28 = {};
                var28.uri = var29;
                var20.source = var28;
                var22 = var27.bind(var3)(var23, var20);
            case 985:
                var20 = new Array(3);
                var20[0] = var22;
                var22 = var13 != var30;
                if (!var22) {
                    _fun75225_ip = 1060;
                    continue _fun75225
                }
            case 1000:
                var28 = _closure1_slot13;
                var27 = _closure1_slot1;
                var29 = _closure1_slot2;
                var23 = 29;
                var23 = var29[var23];
                var27 = var27.bind(var3)(var23);
                var23 = {};
                var29 = var21.inAppFlowImage;
                var23.style = var29;
                var29 = 'contain';
                var23.resizeMode = var29;
                var29 = {};
                var29.uri = var30;
                var23.source = var29;
                var22 = var28.bind(var3)(var27, var23);
            case 1060:
                var20[1] = var22;
                var27 = _closure1_slot13;
                var31 = _closure1_slot0;
                var28 = _closure1_slot2;
                var22 = 14;
                var22 = var28[var22];
                var22 = var31.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'white'
                };
                var29 = var21.chooseRewardText;
                var22.style = var29;
                var29 = var28[var15];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var28[var15];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.cMiNit;
                var28 = var29.bind(var30)(var28);
                var22.children = var28;
                var22 = var27.bind(var3)(var23, var22);
                var20[2] = var22;
                var4.children = var20;
                var7 = var18.bind(var3)(var17, var4);
            case 1187:
                var4 = new Array(4);
                var4[0] = var7;
                var7 = var13 != var26;
                if (!var7) {
                    _fun75225_ip = 1205;
                    continue _fun75225
                }
            case 1202:
                var7 = var16;
            case 1205:
                if (!var7) {
                    _fun75225_ip = 1212;
                    continue _fun75225
                }
            case 1208:
                var7 = var13 != var14;
            case 1212:
                if (!var7) {
                    _fun75225_ip = 1481;
                    continue _fun75225
                }
            case 1218:
                var16 = _closure1_slot15;
                var14 = _closure1_slot5;
                var13 = {};
                var17 = var21.selectedRewardRow;
                var13.style = var17;
                var20 = _closure1_slot13;
                var18 = _closure1_slot5;
                var17 = {};
                var21 = var21.selectedRewardBannerContainer;
                var17.style = var21;
                var23 = _closure1_slot13;
                var22 = _closure1_slot17;
                var21 = {};
                var21.collectiblesItem = var26;
                var21.currentUser = var25;
                var21.gradientColors = var24;
                var21 = var23.bind(var3)(var22, var21);
                var17.children = var21;
                var18 = var20.bind(var3)(var18, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = !var19;
                if (var19) {
                    _fun75225_ip = 1467;
                    continue _fun75225
                }
            case 1316:
                var21 = _closure1_slot13;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 30;
                var19 = var22[var19];
                var19 = var25.bind(var3)(var19);
                var20 = var19.IconButton;
                var19 = {
                    'variant': 'tertiary',
                    'size': 'sm'
                };
                var27 = 'sm';
                var26 = _closure1_slot13;
                var23 = 31;
                var23 = var22[var23];
                var23 = var25.bind(var3)(var23);
                var24 = var23.PencilIcon;
                var23 = {};
                var23.size = var27;
                var23 = var26.bind(var3)(var24, var23);
                var19.icon = var23;
                var23 = var22[var15];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var15];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.bt75uw;
                var22 = var23.bind(var24)(var22);
                var19.accessibilityLabel = var22;
                var22 = function() { // Original name: onPress, environment: var9
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var19.onPress = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 1467:
                var17[1] = var18;
                var13.children = var17;
                var7 = var16.bind(var3)(var14, var13);
            case 1481:
                var4[1] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun75225_ip = 1637;
                    continue _fun75225
                }
            case 1494:
                var14 = _closure1_slot13;
                var16 = _closure1_slot0;
                var21 = _closure1_slot2;
                var7 = 32;
                var7 = var21[var7];
                var7 = var16.bind(var3)(var7);
                var13 = var7.TextWithIOSLinkWorkaround;
                var7 = {};
                var17 = 'text-sm/normal';
                var7.variant = var17;
                var17 = var21[var15];
                var17 = var16.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.format;
                var15 = var21[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.hYoGUM;
                var15 = {};
                var20 = _closure1_slot1;
                var19 = 33;
                var19 = var21[var19];
                var21 = var20.bind(var3)(var19);
                var20 = var21.getArticleURL;
                var19 = _closure1_slot11;
                var19 = var19.PAID_TERMS;
                var19 = var20.bind(var21)(var19);
                var15.paidURL = var19;
                var15 = var17.bind(var18)(var16, var15);
                var7.children = var15;
                var6 = var14.bind(var3)(var13, var7);
            case 1637:
                var4[2] = var6;
                var7 = _closure1_slot13;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 34;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.loading = var10;
                var5.variant = var12;
                var5.text = var11;
                var8 = !var8;
                if (var8) {
                    _fun75225_ip = 1695;
                    continue _fun75225
                }
            case 1692:
                var8 = var10;
            case 1695:
                var5.disabled = var8;
                var8 = undefined;
                if (var10) {
                    _fun75225_ip = 1711;
                    continue _fun75225
                }
            case 1704:
                var8 = function() { // Environment: var9
                    _fun75232: for (var _fun75232_ip = 0;;) switch (_fun75232_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 35;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot10;
                            if (!var2) {
                                _fun75232_ip = 52;
                                continue _fun75232
                            }
                        case 45:
                            var2 = _closure2_slot8;
                            if (var2) {
                                _fun75232_ip = 72;
                                continue _fun75232
                            }
                        case 52:
                            var3 = _closure2_slot2;
                            var2 = function() { // Environment: var2
                                var3 = _closure2_slot1;
                                var2 = var3.navigate;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.PremiumGiftScreens;
                                var1 = var1.SUCCESS;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var0)(var2);
                            _fun75232_ip = 80;
                            continue _fun75232;
                        case 72:
                            var1 = _closure2_slot11;
                            var1 = var1.bind(var0)();
                        case 80:
                            return var0;
                    }
                };
            case 1711:
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4564, 4566, 1613, 7037, 660, 33, 1297, 671, 4855, 6876, 1634, 5413, 4838, 1234, 4057, 9480, 1469, 9366, 566, 7123, 9387, 9390, 7065, 9364, 795, 6843, 9388, 4666, 7471, 7476, 5293, 1675, 4043, 3677, 2]);