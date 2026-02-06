// modules/user_profile/native/YouScreenUserProfileContent.tsx
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
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 8;
            var1 = var3[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var1 = var4.trackYouTabAvatarPress;
            var1 = var1.bind(var4)();
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.showYouAccountActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var5 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot10;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var6 = arg0;
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var4 = 'onPress';
        var0[var4] = var5;
        var5 = false;
        var4 = 'accessible';
        var0[var4] = var5;
        var5 = 'no';
        var4 = 'importantForAccessibility';
        var0[var4] = var5;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun103075: for (var _fun103075_ip = 0;;) switch (_fun103075_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.navigateToProfileCustomization;
                var _closure2_slot0 = var8;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = 12;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useUserProfileAnalyticsContext;
                var1 = var1.bind(var5)();
                var7 = var1.trackUserProfileAction;
                var _closure2_slot1 = var7;
                var9 = _closure1_slot4;
                var5 = var9.useRef;
                var1 = null;
                var11 = var5.bind(var9)(var1);
                var1 = 13;
                var1 = var4[var1];
                var9 = var2.bind(var3)(var1);
                var5 = var9.useIsDisplayNameStylesMobileEnabled;
                var1 = {};
                var10 = 'YouScreenUserProfileContent';
                var1.location = var10;
                var5 = var5.bind(var9)(var1);
                var1 = 14;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useSelectedDismissibleContent;
                if (var5) {
                    _fun103075_ip = 166;
                    continue _fun103075
                }
            case 160:
                var1 = new Array(0);
                _fun103075_ip = 209;
                continue _fun103075;
            case 166:
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 15;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.DismissibleContent;
                var10 = var9.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
                var9 = new Array(1);
                var9[0] = var10;
                var1 = var9;
            case 209:
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var4 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var2 = var4[var1];
                var1 = 1;
                var9 = var4[var1];
                _closure2_slot2 = var9;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 15;
                var1 = var20[var1];
                var1 = var19.bind(var3)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
                var10 = var2 === var1;
                _closure2_slot3 = var10;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var10;
                var1[3] = var9;
                var0 = function() { // Environment: var0
                    _fun103076: for (var _fun103076_ip = 0;;) switch (_fun103076_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var1 = {};
                            var0 = 'EDIT_PROFILE';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.trackYouTabEditProfilePress;
                            var3 = var3.bind(var4)();
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var0)();
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun103076_ip = 91;
                                continue _fun103076
                            }
                        case 72:
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot9;
                            var1 = var1.TAKE_ACTION;
                            var1 = var2.bind(var0)(var1);
                        case 91:
                            return var0;
                    }
                };
                var15 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot11;
                var0 = {};
                var8 = _closure1_slot10;
                var22 = _closure1_slot1;
                var4 = 16;
                var4 = var20[var4];
                var7 = var22.bind(var3)(var4);
                var4 = {};
                var12 = var12.primaryButtons;
                var4.style = var12;
                var14 = _closure1_slot10;
                var12 = 17;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var12.ref = var11;
                var16 = 'primary';
                var12.variant = var16;
                var18 = _closure1_slot10;
                var16 = 18;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var17 = var16.PencilIcon;
                var16 = {};
                var21 = 'sm';
                var16.size = var21;
                var21 = 19;
                var21 = var20[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.colors;
                var21 = var21.WHITE;
                var16.color = var21;
                var16 = var18.bind(var3)(var17, var16);
                var12.icon = var16;
                var16 = 20;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.AAjhgi;
                var16 = var17.bind(var18)(var16);
                var12.text = var16;
                var12.onPress = var15;
                var15 = true;
                var12.grow = var15;
                var12 = var14.bind(var3)(var13, var12);
                var4.secondaryButton = var12;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun103075_ip = 612;
                    continue _fun103075
                }
            case 565:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 21;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.targetRef = var11;
                var6.visible = var10;
                var6.markAsDismissed = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 612:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = arg3;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.Fragment;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 53;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103077: for (var _fun103077_ip = 0;;) switch (_fun103077_ip) {
            case 0:
                var1 = arg0;
                var32 = var1.user;
                var _closure2_slot0 = var32;
                var4 = var1.style;
                var25 = var1.navigateToProfileCustomization;
                var5 = var1.navigateToFriends;
                var _closure2_slot1 = var5;
                var33 = var1.navigateToPremium;
                var _closure2_slot2 = var33;
                var21 = var1.navigateToShop;
                var _closure2_slot3 = var21;
                var9 = var1.initialTab;
                var _closure2_slot4 = var9;
                var3 = undefined;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var20 = var1.bind(var3)();
                var _closure2_slot5 = var20;
                var11 = _closure1_slot0;
                var1 = 12;
                var1 = var7[var1];
                var2 = var11.bind(var3)(var1);
                var1 = var2.useUserProfileAnalyticsContext;
                var1 = var1.bind(var2)();
                var1 = var1.trackUserProfileAction;
                var _closure2_slot6 = var1;
                var2 = 22;
                var2 = var7[var2];
                var8 = var6.bind(var3)(var2);
                var2 = var32.id;
                var30 = var8.bind(var3)(var2);
                var _closure2_slot7 = var30;
                var2 = 23;
                var2 = var7[var2];
                var8 = var11.bind(var3)(var2);
                var2 = var8.useCustomStatusActivity;
                var35 = var2.bind(var8)();
                var _closure2_slot8 = var35;
                var2 = 24;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var28 = var2.bind(var3)(var30);
                var2 = 25;
                var2 = var7[var2];
                var2 = var11.bind(var3)(var2);
                var8 = var2.StatusSetting;
                var2 = var8.useSetting;
                var31 = var2.bind(var8)();
                var2 = 26;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = {};
                var2.user = var32;
                var2.displayProfile = var30;
                var2 = var6.bind(var3)(var2);
                var10 = var2.theme;
                var14 = var2.primaryColor;
                var13 = var2.secondaryColor;
                var29 = null;
                var24 = var29 != var14;
                var _closure2_slot9 = var24;
                var2 = 27;
                var2 = var7[var2];
                var8 = var11.bind(var3)(var2);
                var6 = var8.useUserProfileColors;
                var2 = {};
                var2.theme = var10;
                var2.primaryColor = var14;
                var2.secondaryColor = var13;
                var2 = var6.bind(var8)(var2);
                var10 = var2.gradientFallbackBackground;
                var27 = var2.containerBackground;
                var _closure2_slot10 = var27;
                var17 = var2.avatarBackground;
                var37 = var2.statusBackground;
                var _closure2_slot11 = var37;
                var6 = _closure1_slot4;
                var2 = var6.useRef;
                var36 = var2.bind(var6)(var29);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = {};
                    var0 = 'PRESS_SET_STATUS';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.showYouAccountActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var26 = var6.bind(var8)(var1, var2);
                var1 = 28;
                var1 = var7[var1];
                var6 = var11.bind(var3)(var1);
                var2 = var6.useIsEligibleForCustomStatusLabelsExperiment;
                var1 = {};
                var8 = 'YouScreenUserProfileContent';
                var1.location = var8;
                var6 = var2.bind(var6)(var1);
                var _closure2_slot12 = var6;
                var1 = 29;
                var1 = var7[var1];
                var12 = var11.bind(var3)(var1);
                var2 = var12.useVirtualCurrencyMobileEnabled;
                var1 = {};
                var1.location = var8;
                var1 = var2.bind(var12)(var1);
                var19 = var1.enabled;
                var _closure2_slot13 = var19;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var2 = var1.bind(var2)(var29);
                var1 = _closure1_slot3;
                var15 = 2;
                var1 = var1.bind(var3)(var2, var15);
                var40 = 0;
                var23 = var1[var40];
                var18 = 1;
                var1 = var1[var18];
                var _closure2_slot14 = var1;
                var1 = 30;
                var1 = var7[var1];
                var2 = var11.bind(var3)(var1);
                var1 = var2.useShouldShowExpiringTrialOfferCard;
                var22 = var1.bind(var2)();
                var _closure2_slot15 = var22;
                var1 = 31;
                var1 = var7[var1];
                var2 = var11.bind(var3)(var1);
                var1 = var2.useMobileWishlistOwnerExperiment;
                var1 = var1.bind(var2)(var8);
                var12 = var1.enabled;
                var _closure2_slot16 = var12;
                var1 = 32;
                var1 = var7[var1];
                var34 = var11.bind(var3)(var1);
                var8 = var34.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun103079: for (var _fun103079_ip = 0;;) switch (_fun103079_ip) {
                        case 0:
                            var2 = _closure2_slot16;
                            var0 = null;
                            if (!var2) {
                                _fun103079_ip = 39;
                                continue _fun103079
                            }
                        case 12:
                            var3 = _closure1_slot6;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var2 = var8.bind(var34)(var2, var1);
                var _closure2_slot17 = var2;
                var8 = _closure1_slot4;
                var1 = var8.useState;
                var8 = var1.bind(var8)(var40);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var8, var15);
                var8 = var1[var40];
                var1 = var1[var18];
                var _closure2_slot18 = var1;
                var38 = _closure1_slot4;
                var34 = var38.useCallback;
                var15 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = new Array(0);
                var15 = var34.bind(var38)(var15, var1);
                var1 = 33;
                var7 = var7[var1];
                var11 = var11.bind(var3)(var7);
                var7 = var11.useFocusEffect;
                var39 = _closure1_slot4;
                var38 = var39.useCallback;
                var34 = new Array(2);
                var34[0] = var35;
                var34[1] = var6;
                var6 = function() { // Environment: var0
                    _fun103081: for (var _fun103081_ip = 0;;) switch (_fun103081_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var1 = _closure2_slot8;
                            var3 = null;
                            var4 = var3 == var1;
                            var1 = null;
                            if (!var4) {
                                _fun103081_ip = 60;
                                continue _fun103081
                            }
                        case 22:
                            var0 = _closure2_slot12;
                            var1 = null;
                            if (!var0) {
                                _fun103081_ip = 60;
                                continue _fun103081
                            }
                        case 31:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 34;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var1 = var0.bind(var3)();
                        case 60:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var6 = var38.bind(var39)(var6, var34);
                var6 = var7.bind(var11)(var6);
                var6 = var29 != var23;
                var34 = undefined;
                if (!var6) {
                    _fun103077_ip = 781;
                    continue _fun103077
                }
            case 772:
                var6 = var23.label;
                var34 = var6.bind(var23)();
            case 781:
                var11 = _closure1_slot4;
                var7 = var11.useCallback;
                var6 = new Array(10);
                var6[0] = var27;
                var38 = var20.cards;
                var6[1] = var38;
                var6[2] = var33;
                var6[3] = var22;
                var6[4] = var21;
                var6[5] = var24;
                var6[6] = var19;
                var6[7] = var32;
                var6[8] = var30;
                var6[9] = var5;
                var5 = function() { // Environment: var0
                    _fun103082: for (var _fun103082_ip = 0;;) switch (_fun103082_ip) {
                        case 0:
                            var8 = {};
                            var0 = _closure2_slot10;
                            var8.backgroundColor = var0;
                            var3 = _closure1_slot12;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var0 = _closure2_slot5;
                            var0 = var0.cards;
                            var1.style = var0;
                            var7 = _closure1_slot10;
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 35;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var4);
                            var4 = {};
                            var9 = _closure2_slot2;
                            var4.navigateToPremium = var9;
                            var4.style = var8;
                            var6 = var7.bind(var0)(var6, var4);
                            var4 = new Array(10);
                            var4[0] = var6;
                            var6 = _closure2_slot15;
                            var6 = !var6;
                            if (!var6) {
                                _fun103082_ip = 164;
                                continue _fun103082
                            }
                        case 105:
                            var10 = _closure1_slot10;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 36;
                            var7 = var11[var7];
                            var9 = var9.bind(var0)(var7);
                            var7 = {};
                            var11 = _closure2_slot2;
                            var7.navigateToPremium = var11;
                            var11 = _closure2_slot3;
                            var7.navigateToShop = var11;
                            var11 = _closure2_slot9;
                            var7.hasCustomProfileTheme = var11;
                            var6 = var10.bind(var0)(var9, var7);
                        case 164:
                            var4[1] = var6;
                            var6 = _closure2_slot13;
                            if (!var6) {
                                _fun103082_ip = 211;
                                continue _fun103082
                            }
                        case 175:
                            var10 = _closure1_slot10;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 37;
                            var7 = var11[var7];
                            var9 = var9.bind(var0)(var7);
                            var7 = {};
                            var7.style = var8;
                            var6 = var10.bind(var0)(var9, var7);
                        case 211:
                            var4[2] = var6;
                            var12 = _closure1_slot10;
                            var6 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var7 = 38;
                            var7 = var10[var7];
                            var11 = var6.bind(var0)(var7);
                            var7 = {};
                            var9 = _closure2_slot0;
                            var7.user = var9;
                            var7.currentUser = var9;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[3] = var7;
                            var12 = _closure1_slot10;
                            var7 = 39;
                            var7 = var10[var7];
                            var11 = var6.bind(var0)(var7);
                            var7 = {};
                            var14 = var9.id;
                            var7.userId = var14;
                            var14 = _closure2_slot7;
                            var7.displayProfile = var14;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[4] = var7;
                            var15 = _closure1_slot10;
                            var11 = _closure1_slot0;
                            var7 = 40;
                            var12 = var10[var7];
                            var12 = var11.bind(var0)(var12);
                            var14 = var12.UserProfileAccountConnectionsCard;
                            var12 = {};
                            var16 = var9.id;
                            var12.userId = var16;
                            var12.style = var8;
                            var12 = var15.bind(var0)(var14, var12);
                            var4[5] = var12;
                            var15 = _closure1_slot10;
                            var12 = var10[var7];
                            var12 = var11.bind(var0)(var12);
                            var14 = var12.UserProfileApplicationRoleConnectionsCard;
                            var12 = {};
                            var16 = var9.id;
                            var12.userId = var16;
                            var12.style = var8;
                            var12 = var15.bind(var0)(var14, var12);
                            var4[6] = var12;
                            var12 = _closure1_slot10;
                            var7 = var10[var7];
                            var7 = var11.bind(var0)(var7);
                            var11 = var7.UserProfileApplicationRoleConnectionsCard;
                            var7 = {};
                            var14 = var9.id;
                            var7.userId = var14;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[7] = var7;
                            var12 = _closure1_slot10;
                            var7 = 41;
                            var7 = var10[var7];
                            var11 = var6.bind(var0)(var7);
                            var7 = {};
                            var14 = var9.id;
                            var7.userId = var14;
                            var13 = _closure2_slot1;
                            var7.navigateToFriends = var13;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[8] = var7;
                            var7 = _closure1_slot10;
                            var5 = 42;
                            var5 = var10[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = {};
                            var9 = var9.id;
                            var5.userId = var9;
                            var5.style = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[9] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var11 = var7.bind(var11)(var5, var6);
                _closure2_slot19 = var11;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var37;
                var2 = function() { // Environment: var0
                    _fun103083: for (var _fun103083_ip = 0;;) switch (_fun103083_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun103083_ip = 69;
                                continue _fun103083
                            }
                        case 13:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 43;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure2_slot17;
                            var0.wishlistId = var5;
                            var4 = _closure2_slot11;
                            var0.backgroundColor = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun103083_ip = 112;
                            continue _fun103083;
                        case 69:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 43;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.WishlistEmptyState;
                            var1 = {};
                            var0 = var4.bind(var3)(var2, var1);
                        case 112:
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                _closure2_slot20 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    var1 = {};
                    var0 = 'main';
                    var1.id = var0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var0 = var8[var4];
                    var3 = undefined;
                    var0 = var7.bind(var3)(var0);
                    var5 = var0.intl;
                    var2 = var5.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.LXw470;
                    var0 = var2.bind(var5)(var0);
                    var1.label = var0;
                    var0 = _closure2_slot19;
                    var0 = var0.bind(var3)();
                    var1.page = var0;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var5 = 'wishlist';
                    var1.id = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.t;
                    var4 = var4["7lZ31J"];
                    var4 = var5.bind(var6)(var4);
                    var1.label = var4;
                    var2 = _closure2_slot20;
                    var2 = var2.bind(var3)();
                    var1.page = var2;
                    var0[1] = var1;
                    return var0;
                };
                var7 = var6.bind(var7)(var2, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 44;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useSegmentedControlState;
                var2 = {};
                var2.pageWidth = var8;
                var8 = _closure1_slot7;
                var19 = var8.WISHLIST;
                var8 = 0;
                if (!(var9 === var19)) {
                    _fun103077_ip = 981;
                    continue _fun103077
                }
            case 978:
                var8 = var18;
            case 981:
                var2.defaultIndex = var8;
                var22 = _closure1_slot1;
                var33 = _closure1_slot2;
                var21 = 19;
                var8 = var33[var21];
                var8 = var22.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var2.itemSpacing = var8;
                var2.items = var7;
                var19 = var5.bind(var6)(var2);
                _closure2_slot21 = var19;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var2 = var19.setActiveIndex;
                var2 = var5.bind(var6)(var2);
                _closure2_slot22 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var19;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot22;
                    var0 = _closure2_slot21;
                    var0 = var0.setActiveIndex;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var5);
                var5 = _closure1_slot0;
                var1 = var33[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useFocusEffect;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var12;
                var0 = function() { // Environment: var0
                    _fun103086: for (var _fun103086_ip = 0;;) switch (_fun103086_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun103086_ip = 78;
                                continue _fun103086
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = _closure1_slot7;
                            var1 = var1.WISHLIST;
                            if (!(var2 !== var1)) {
                                _fun103086_ip = 55;
                                continue _fun103086
                            }
                        case 31:
                            var5 = _closure2_slot22;
                            var4 = var5.current;
                            var3 = 0;
                            var2 = false;
                            var1 = true;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            _fun103086_ip = 78;
                            continue _fun103086;
                        case 55:
                            var4 = _closure2_slot22;
                            var3 = var4.current;
                            var2 = 1;
                            var1 = false;
                            var0 = true;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var6);
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot10;
                var0 = 45;
                var0 = var33[var0];
                var0 = var22.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var4;
                var6 = _closure1_slot10;
                var4 = 46;
                var4 = var33[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LayerScope;
                var4 = {};
                var9 = _closure1_slot12;
                var7 = 47;
                var7 = var33[var7];
                var8 = var22.bind(var3)(var7);
                var7 = {};
                var39 = var20.profileContent;
                var38 = new Array(2);
                var38[0] = var39;
                var39 = {};
                var39.paddingTop = var40;
                var38[1] = var39;
                var7.containerStyle = var38;
                var7.primaryColor = var14;
                var7.secondaryColor = var13;
                var7.fallbackBackground = var10;
                var14 = _closure1_slot10;
                var13 = _closure1_slot13;
                var10 = {};
                var10.user = var32;
                var10.backgroundColor = var17;
                var17 = {};
                var17.backgroundColor = var37;
                var10.statusStyle = var17;
                var13 = var14.bind(var3)(var13, var10);
                var10 = new Array(4);
                var10[0] = var13;
                var17 = _closure1_slot10;
                var13 = 48;
                var13 = var33[var13];
                var14 = var22.bind(var3)(var13);
                var13 = {};
                var13.ref = var36;
                var13.customStatusActivity = var35;
                var13.hasCustomProfileTheme = var24;
                var24 = var20.customStatusBubble;
                var13.style = var24;
                var24 = var20.emojiOnlyCustomStatusBubble;
                var13.emojiOnlyStyle = var24;
                var24 = true;
                var13.editEnabled = var24;
                var13.placeholderText = var34;
                var13.prompt = var23;
                var13 = var17.bind(var3)(var14, var13);
                var10[1] = var13;
                var17 = _closure1_slot12;
                var14 = _closure1_slot5;
                var13 = {};
                var20 = var20.primaryInfo;
                var13.style = var20;
                var23 = _closure1_slot10;
                var20 = 49;
                var20 = var33[var20];
                var22 = var22.bind(var3)(var20);
                var20 = {};
                var20.user = var32;
                var32 = var29 == var30;
                var29 = undefined;
                if (var32) {
                    _fun103077_ip = 1441;
                    continue _fun103077
                }
            case 1435:
                var29 = var30.pronouns;
            case 1441:
                var20.pronouns = var29;
                var20.badges = var28;
                var20.badgeContainerBackground = var27;
                var20.onPressDisplayName = var26;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 20;
                var27 = var30[var26];
                var27 = var29.bind(var3)(var27);
                var32 = var27.intl;
                var28 = var32.string;
                var27 = var30[var26];
                var27 = var29.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27["0DPAZH"];
                var32 = var28.bind(var32)(var27);
                var27 = 50;
                var27 = var30[var27];
                var28 = var29.bind(var3)(var27);
                var27 = var28.getStatusLabel;
                var44 = var27.bind(var28)(var31);
                var27 = var30[var26];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var30[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.C6COaT;
                var42 = var27.bind(var28)(var26);
                var26 = global;
                var26 = var26.HermesInternal;
                var29 = var26.concat;
                var47 = '';
                var45 = ': ';
                var43 = '. ';
                var46 = var32;
                var26 = var47[var29](var46, var45, var44, var43, var42, var41);
                var20.displayNameAccessibilityHint = var26;
                var26 = _closure1_slot8;
                var26 = var26.YOU_SCREEN;
                var20.themeType = var26;
                var20.showChevron = var24;
                var22 = var23.bind(var3)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var24 = _closure1_slot10;
                var23 = _closure1_slot14;
                var22 = {};
                var22.navigateToProfileCustomization = var25;
                var22 = var24.bind(var3)(var23, var22);
                var20[1] = var22;
                var13.children = var20;
                var13 = var17.bind(var3)(var14, var13);
                var10[2] = var13;
                if (var12) {
                    _fun103077_ip = 1709;
                    continue _fun103077
                }
            case 1700:
                var11 = var11.bind(var3)();
                _fun103077_ip = 1881;
                continue _fun103077;
            case 1709:
                var14 = _closure1_slot12;
                var13 = _closure1_slot5;
                var12 = {};
                var17 = {};
                var17.flex = var18;
                var12.style = var17;
                var12.onLayout = var15;
                var18 = _closure1_slot10;
                var15 = {};
                var17 = {};
                var22 = _closure1_slot1;
                var20 = _closure1_slot2;
                var21 = var20[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.spacing;
                var21 = var21.PX_16;
                var17.marginBottom = var21;
                var15.style = var17;
                var23 = _closure1_slot10;
                var17 = _closure1_slot0;
                var21 = 51;
                var21 = var20[var21];
                var21 = var17.bind(var3)(var21);
                var22 = var21.Tabs;
                var21 = {};
                var21.state = var19;
                var21 = var23.bind(var3)(var22, var21);
                var15.children = var21;
                var18 = var18.bind(var3)(var13, var15);
                var15 = new Array(2);
                var15[0] = var18;
                var18 = _closure1_slot10;
                var16 = 52;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.SegmentedControlPages;
                var16 = {};
                var16.state = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1881:
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4661, 7003, 6988, 1369, 33, 13480, 13487, 6997, 6991, 7001, 3987, 5965, 1358, 7836, 4085, 7540, 671, 1234, 13495, 6981, 5675, 6993, 1348, 6989, 6992, 7011, 3346, 13496, 11313, 566, 1470, 7012, 13497, 11990, 11275, 7854, 7621, 11992, 13499, 11970, 13500, 7822, 3722, 5208, 6998, 7000, 7393, 7902, 7828, 7830, 2]);