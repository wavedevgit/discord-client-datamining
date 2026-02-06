// modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun59684: for (var _fun59684_ip = 0;;) switch (_fun59684_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.badge;
                var6 = var0.isUsersBadge;
                var16 = var0.premiumSince;
                var0 = _closure1_slot12;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useMobileTenureBadgeImages;
                var0 = var0.bind(var1)(var3);
                var9 = null;
                var1 = var9 == var0;
                var13 = undefined;
                if (var1) {
                    _fun59684_ip = 82;
                    continue _fun59684
                }
            case 76:
                var13 = var0.small;
            case 82:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var0 = var5.getTieredTenureBadgeData;
                var19 = var0.bind(var5)(var3);
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.getTenureBadgeRequirementString;
                var5 = var9 == var19;
                var0 = undefined;
                if (var5) {
                    _fun59684_ip = 146;
                    continue _fun59684
                }
            case 140:
                var0 = var19.tenureReqNumMonths;
            case 146:
                var15 = var1.bind(var2)(var3, var0);
                var1 = var9 == var19;
                var0 = null;
                if (var1) {
                    _fun59684_ip = 588;
                    continue _fun59684
                }
            case 164:
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var12.badgeContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var6;
                if (!var6) {
                    _fun59684_ip = 200;
                    continue _fun59684
                }
            case 194:
                var7 = var12.usersBadgeContainer;
            case 200:
                var5[1] = var7;
                var1.style = var5;
                var11 = _closure1_slot10;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 11;
                var5 = var10[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var14 = 'contain';
                var5.resizeMode = var14;
                var5.source = var13;
                var7 = var11.bind(var4)(var7, var5);
                var5 = new Array(4);
                var5[0] = var7;
                var18 = _closure1_slot10;
                var11 = _closure1_slot0;
                var7 = 12;
                var13 = var10[var7];
                var13 = var11.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.badgeName;
                var13.style = var14;
                var14 = 13;
                var20 = var10[var14];
                var20 = var11.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19.nameUnformatted;
                var19 = var20.bind(var21)(var19);
                var13.children = var19;
                var13 = var18.bind(var4)(var17, var13);
                var5[1] = var13;
                var13 = _closure1_slot10;
                var10 = var10[var7];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var12.badgeRequirement;
                var10.style = var17;
                var10.children = var15;
                var10 = var13.bind(var4)(var11, var10);
                var5[2] = var10;
                if (!var6) {
                    _fun59684_ip = 423;
                    continue _fun59684
                }
            case 419:
                var6 = var9 != var16;
            case 423:
                if (!var6) {
                    _fun59684_ip = 574;
                    continue _fun59684
                }
            case 429:
                var9 = _closure1_slot10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = var10[var7];
                var7 = var11.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var12 = var12.badgePremiumSince;
                var7.style = var12;
                var12 = var10[var14];
                var12 = var11.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var10 = var10[var14];
                var10 = var11.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10.Hu4jfi;
                var10 = {};
                var14 = global;
                var14 = var14.Date;
                var15 = var14.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var14
                    }
                });
                var24 = var15;
                var23 = var16;
                var14 = new var24[var14](var23, var22);
                var14 = var14 instanceof Object ? var14 : var15;
                var10.date = var14;
                var10 = var12.bind(var13)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 574:
                var5[3] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 588:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot6 = var6;
    var3 = var3.TieredTenureBadge;
    var _closure1_slot7 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPages;
    var _closure1_slot8 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 24;
    var8 = {
        'paddingHorizontal': 24,
        'alignItems': 'center'
    };
    var3.headerContainer = var8;
    var11 = 8;
    var8 = {
        'marginTop': 8,
        'paddingHorizontal': 12,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
        'paddingHorizontal': 24,
        'marginTop': 16
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'width': '100%',
        'height': 160,
        'gap': 8,
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginTop': 24
    };
    var3.rowContainer = var8;
    var8 = {};
    var12 = 186;
    var8.height = var12;
    var3.rowContainerWithUsersBadge = var8;
    var8 = {
        'minWidth': 110,
        'height': '100%',
        'paddingTop': 16,
        'alignItems': 'center',
        'paddingHorizontal': 8
    };
    var3.badgeContainer = var8;
    var8 = {};
    var12 = 7;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var14;
    var14 = 1.2;
    var8.borderWidth = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_STRONG;
    var8.borderColor = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.usersBadgeContainer = var8;
    var8 = {};
    var8.marginTop = var11;
    var3.badgeName = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.badgeRequirement = var8;
    var8 = {
        'width': 90,
        'marginTop': 4,
        'textAlign': 'center'
    };
    var3.badgePremiumSince = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59685: for (var _fun59685_ip = 0;;) switch (_fun59685_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userId;
                var _closure2_slot0 = var1;
                var11 = var0.shouldShowCTA;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun59685_ip = 28;
                    continue _fun59685
                }
            case 26:
                var11 = true;
            case 28:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot12;
                var7 = var0.bind(var3)();
                _closure2_slot1 = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var2 = var10[var0];
                var5 = var9.bind(var3)(var2);
                var2 = var5.useTieredTenureBadgeDataForUser;
                var2 = var2.bind(var5)(var1);
                _closure2_slot2 = var2;
                var0 = var10[var0];
                var5 = var9.bind(var3)(var0);
                var0 = var5.usePremiumSinceForUser;
                var0 = var0.bind(var5)(var1);
                _closure2_slot3 = var0;
                var0 = 15;
                var0 = var10[var0];
                var12 = var9.bind(var3)(var0);
                var6 = var12.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var6.bind(var12)(var5, var0);
                var6 = 16;
                var0 = var10[var6];
                var13 = var9.bind(var3)(var0);
                var12 = var13.isPremium;
                var0 = _closure1_slot6;
                var0 = var0.TIER_2;
                var0 = var12.bind(var13)(var5, var0);
                var6 = var10[var6];
                var12 = var9.bind(var3)(var6);
                var9 = var12.isPremiumAtLeast;
                var10 = null;
                var13 = var10 == var5;
                var6 = undefined;
                if (var13) {
                    _fun59685_ip = 220;
                    continue _fun59685
                }
            case 214:
                var6 = var5.premiumType;
            case 220:
                var5 = _closure1_slot6;
                var5 = var5.TIER_0;
                var18 = var9.bind(var12)(var6, var5);
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 17;
                var5 = var13[var5];
                var9 = var6.bind(var3)(var5);
                var6 = {};
                var12 = _closure1_slot0;
                var5 = 18;
                var14 = var13[var5];
                var14 = var12.bind(var3)(var14);
                var14 = var14.ImpressionTypes;
                var14 = var14.HALFSHEET;
                var6.type = var14;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.ImpressionNames;
                var5 = var5.TIERED_TENURE_BADGE_MODAL;
                var6.name = var5;
                var5 = {};
                var13 = var10 == var2;
                var12 = undefined;
                if (var13) {
                    _fun59685_ip = 331;
                    continue _fun59685
                }
            case 326:
                var12 = var2.id;
            case 331:
                var5.badge = var12;
                var5.premium_type = var0;
                var5.viewed_user_id = var1;
                var6.properties = var5;
                var5 = {};
                var13 = var10 == var2;
                var12 = undefined;
                if (var13) {
                    _fun59685_ip = 367;
                    continue _fun59685
                }
            case 362:
                var12 = var2.id;
            case 367:
                var12 = var10 == var12;
                var5.disableTrack = var12;
                var12 = var10 == var2;
                var10 = undefined;
                if (var12) {
                    _fun59685_ip = 390;
                    continue _fun59685
                }
            case 385:
                var10 = var2.id;
            case 390:
                var2 = new Array(1);
                var2[0] = var10;
                var2 = var9.bind(var3)(var6, var5, var2);
                var2 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 19;
                var5 = var16[var5];
                var5 = var2.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var13 = var5.bottom;
                var9 = _closure1_slot3;
                var6 = var9.useCallback;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var8
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 20;
                    var2 = var5[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var3 = var6.openUserSettings;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.PREMIUM;
                    var2.screen = var7;
                    var2 = var3.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var1 = 21;
                    var3 = var5[var1];
                    var7 = var2.bind(var0)(var3);
                    var6 = var7.hideActionSheet;
                    var3 = 'TIERED_TENURE_BADGE_ACTION_SHEET';
                    var3 = var6.bind(var7)(var3);
                    var1 = var5[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hideActionSheet;
                    var1 = 22;
                    var1 = var5[var1];
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.getUserProfileActionSheetKey;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15 = var6.bind(var9)(var1, var5);
                var1 = 23;
                var1 = var16[var1];
                var6 = var2.bind(var3)(var1);
                var1 = _closure1_slot8;
                var28 = var1.TIERED_TENURE_BADGES_ACTION_SHEET;
                var30 = false;
                var27 = 'replaceTopSheet';
                var31 = undefined;
                var29 = var15;
                var1 = var31[var6](var30, var29, var28, var27, var26);
                var17 = var1.loading;
                var6 = var1.onPress;
                var5 = var9.useMemo;
                var2 = function() { // Environment: var8
                    _fun59688: for (var _fun59688_ip = 0;;) switch (_fun59688_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.values;
                            var0 = _closure1_slot7;
                            var4 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            var1 = var4.length;
                            var3 = 0;
                            var1 = var3 < var1;
                            var2 = 3;
                            if (!var1) {
                                _fun59688_ip = 83;
                                continue _fun59688
                            }
                        case 46:
                            var6 = var0.push;
                            var1 = var4.slice;
                            var5 = var3 + var2;
                            var1 = var1.bind(var4)(var3, var5);
                            var1 = var6.bind(var0)(var1);
                            var1 = var4.length;
                            var3 = var5;
                            if (var3 < var1) {
                                _fun59688_ip = 46;
                                continue _fun59688
                            }
                        case 83:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var10 = var5.bind(var9)(var2, var1);
                var5 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var9 = var7.headerContainer;
                var1.style = var9;
                var14 = _closure1_slot10;
                var12 = _closure1_slot0;
                var9 = 12;
                var9 = var16[var9];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var7.title;
                var9.style = var16;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = 13;
                var21 = var16[var20];
                var21 = var19.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var19 = var16.t;
                if (var0) {
                    _fun59685_ip = 662;
                    continue _fun59685
                }
            case 647:
                var16 = var19.RtGeFS;
                var16 = var21.bind(var22)(var16);
                _fun59685_ip = 675;
                continue _fun59685;
            case 662:
                var19 = var19.Og62j7;
                var16 = var21.bind(var22)(var19);
            case 675:
                var9.children = var16;
                var12 = var14.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var16 = _closure1_slot10;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 24;
                var12 = var19[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.TextWithIOSLinkWorkaround;
                var12 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var19 = var7.subtitle;
                var12.style = var19;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var19 = var21[var20];
                var19 = var24.bind(var3)(var19);
                var23 = var19.intl;
                if (var0) {
                    _fun59685_ip = 814;
                    continue _fun59685
                }
            case 772:
                var25 = var23.format;
                var19 = var21[var20];
                var19 = var24.bind(var3)(var19);
                var19 = var19.t;
                var22 = var19["bF+q7R"];
                var19 = {};
                var19.learnMoreHook = var15;
                var19 = var25.bind(var23)(var22, var19);
                _fun59685_ip = 846;
                continue _fun59685;
            case 814:
                var22 = var23.string;
                var21 = var21[var20];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.IdAP91;
                var19 = var22.bind(var23)(var21);
            case 846:
                var12.children = var19;
                var12 = var16.bind(var3)(var14, var12);
                var9[1] = var12;
                var1.children = var9;
                var9 = var5.bind(var3)(var2, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var5 = {};
                var14 = var7.footer;
                var12 = new Array(2);
                var12[0] = var14;
                var14 = {};
                var14.paddingBottom = var13;
                var12[1] = var14;
                var5.style = var12;
                var14 = _closure1_slot10;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 25;
                var12 = var16[var12];
                var12 = var19.bind(var3)(var12);
                var12 = var12.Button;
                if (var0) {
                    _fun59685_ip = 1054;
                    continue _fun59685
                }
            case 942:
                var0 = {
                    'variant': 'experimental_premium-primary',
                    'shiny': true
                };
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var20];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var20];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                if (var18) {
                    _fun59685_ip = 1013;
                    continue _fun59685
                }
            case 1000:
                var18 = var21.pj0XBN;
                var18 = var22.bind(var23)(var18);
                _fun59685_ip = 1026;
                continue _fun59685;
            case 1013:
                var21 = var21.IJI7yk;
                var18 = var22.bind(var23)(var21);
            case 1026:
                var0.text = var18;
                var0.loading = var17;
                var0.onPress = var6;
                var0 = var14.bind(var3)(var12, var0);
                var5.children = var0;
                var0 = var5;
                _fun59685_ip = 1131;
                continue _fun59685;
            case 1054:
                var6 = {};
                var17 = 'experimental_premium-primary';
                var6.variant = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.hvVgAZ;
                var16 = var17.bind(var18)(var16);
                var6.text = var16;
                var6.onPress = var15;
                var6 = var14.bind(var3)(var12, var6);
                var5.children = var6;
                var0 = var5;
            case 1131:
                var6 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var5 = undefined;
                if (!var11) {
                    _fun59685_ip = 1189;
                    continue _fun59685
                }
            case 1186:
                var5 = var6;
            case 1189:
                var0.footer = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 27;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var11 = var7.container;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = {};
                var12 = 64;
                var12 = var13 + var12;
                var11.paddingBottom = var12;
                var7[1] = var11;
                var4.contentContainerStyle = var7;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun59689: for (var _fun59689_ip = 0;;) switch (_fun59689_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = var5.some;
                            var1 = function(arg0) { // Environment: var0
                                _fun59690: for (var _fun59690_ip = 0;;) switch (_fun59690_ip) {
                                    case 0:
                                        var2 = _closure2_slot2;
                                        var1 = null;
                                        var2 = var1 == var2;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun59690_ip = 27;
                                            continue _fun59690
                                        }
                                    case 18:
                                        var0 = _closure2_slot2;
                                        var1 = var0.id;
                                    case 27:
                                        var0 = arg0;
                                        var0 = var0 === var1;
                                        return var0;
                                }
                            };
                            var6 = var2.bind(var5)(var1);
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var1 = _closure2_slot1;
                            var8 = var1.rowContainer;
                            var1 = new Array(2);
                            var1[0] = var8;
                            if (!var6) {
                                _fun59689_ip = 68;
                                continue _fun59689
                            }
                        case 58:
                            var7 = _closure2_slot1;
                            var6 = var7.rowContainerWithUsersBadge;
                        case 68:
                            var1[1] = var6;
                            var2.style = var1;
                            var1 = var5.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun59691: for (var _fun59691_ip = 0;;) switch (_fun59691_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var2 = _closure2_slot2;
                                        var1 = null;
                                        var1 = var1 == var2;
                                        var4 = undefined;
                                        var5 = undefined;
                                        if (var1) {
                                            _fun59691_ip = 32;
                                            continue _fun59691
                                        }
                                    case 23:
                                        var1 = _closure2_slot2;
                                        var5 = var1.id;
                                    case 32:
                                        var3 = _closure1_slot10;
                                        var2 = _closure1_slot13;
                                        var1 = {};
                                        var1.badge = var6;
                                        var5 = var6 === var5;
                                        var1.isUsersBadge = var5;
                                        var0 = _closure2_slot3;
                                        var1.premiumSince = var0;
                                        var0 = arg1;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var5)(var0);
                            var2.children = var0;
                            var1 = undefined;
                            var0 = arg1;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'TIERED_TENURE_BADGE_ACTION_SHEET';
    var2.TIERED_TENURE_BADGE_ACTION_SHEET_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 1623, 660, 33, 1297, 671, 7350, 7349, 7376, 4705, 3943, 1234, 7347, 566, 1638, 5217, 481, 1568, 5930, 3280, 7377, 7657, 5337, 4085, 4934, 4936, 2]);