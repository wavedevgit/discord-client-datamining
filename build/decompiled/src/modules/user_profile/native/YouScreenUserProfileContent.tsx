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
        var3 = _closure1_slot11;
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
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun103652: for (var _fun103652_ip = 0;;) switch (_fun103652_ip) {
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
                    _fun103652_ip = 166;
                    continue _fun103652
                }
            case 160:
                var1 = new Array(0);
                _fun103652_ip = 209;
                continue _fun103652;
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
                    _fun103653: for (var _fun103653_ip = 0;;) switch (_fun103653_ip) {
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
                                _fun103653_ip = 91;
                                continue _fun103653
                            }
                        case 72:
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot10;
                            var1 = var1.TAKE_ACTION;
                            var1 = var2.bind(var0)(var1);
                        case 91:
                            return var0;
                    }
                };
                var15 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot12;
                var0 = {};
                var8 = _closure1_slot11;
                var22 = _closure1_slot1;
                var4 = 16;
                var4 = var20[var4];
                var7 = var22.bind(var3)(var4);
                var4 = {};
                var12 = var12.primaryButtons;
                var4.style = var12;
                var14 = _closure1_slot11;
                var12 = 17;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var12.ref = var11;
                var16 = 'primary';
                var12.variant = var16;
                var18 = _closure1_slot11;
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
                    _fun103652_ip = 612;
                    continue _fun103652
                }
            case 565:
                var8 = _closure1_slot11;
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
    var _closure1_slot15 = var0;
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
    var7 = var3.ScrollView;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileSections;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileThemeTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.Fragment;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 53;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103654: for (var _fun103654_ip = 0;;) switch (_fun103654_ip) {
            case 0:
                var1 = arg0;
                var31 = var1.user;
                var _closure2_slot0 = var31;
                var4 = var1.style;
                var27 = var1.navigateToProfileCustomization;
                var6 = var1.navigateToFriends;
                var _closure2_slot1 = var6;
                var42 = var1.navigateToPremium;
                var _closure2_slot2 = var42;
                var39 = var1.navigateToShop;
                var _closure2_slot3 = var39;
                var38 = var1.initialTab;
                var _closure2_slot4 = var38;
                var3 = undefined;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot23 = var3;
                var _closure2_slot24 = var3;
                var _closure2_slot25 = var3;
                var _closure2_slot26 = var3;
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var10.bind(var3)(var1);
                var17 = var1.bind(var3)();
                var _closure2_slot5 = var17;
                var5 = _closure1_slot0;
                var1 = 22;
                var2 = var7[var1];
                var8 = var5.bind(var3)(var2);
                var2 = var8.useNavigation;
                var9 = var2.bind(var8)();
                var _closure2_slot6 = var9;
                var2 = 12;
                var2 = var7[var2];
                var8 = var5.bind(var3)(var2);
                var2 = var8.useUserProfileAnalyticsContext;
                var2 = var2.bind(var8)();
                var2 = var2.trackUserProfileAction;
                var _closure2_slot7 = var2;
                var8 = 23;
                var8 = var7[var8];
                var11 = var10.bind(var3)(var8);
                var8 = var31.id;
                var32 = var11.bind(var3)(var8);
                var _closure2_slot8 = var32;
                var8 = 24;
                var8 = var7[var8];
                var11 = var5.bind(var3)(var8);
                var8 = var11.useCustomStatusActivity;
                var35 = var8.bind(var11)();
                var _closure2_slot9 = var35;
                var8 = 25;
                var8 = var7[var8];
                var8 = var10.bind(var3)(var8);
                var30 = var8.bind(var3)(var32);
                var8 = 26;
                var8 = var7[var8];
                var8 = var5.bind(var3)(var8);
                var11 = var8.StatusSetting;
                var8 = var11.useSetting;
                var33 = var8.bind(var11)();
                var8 = 27;
                var8 = var7[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.user = var31;
                var8.displayProfile = var32;
                var8 = var10.bind(var3)(var8);
                var12 = var8.theme;
                var14 = var8.primaryColor;
                var13 = var8.secondaryColor;
                var19 = null;
                var26 = var19 != var14;
                var _closure2_slot10 = var26;
                var8 = 28;
                var8 = var7[var8];
                var11 = var5.bind(var3)(var8);
                var10 = var11.useUserProfileColors;
                var8 = {};
                var8.theme = var12;
                var8.primaryColor = var14;
                var8.secondaryColor = var13;
                var8 = var10.bind(var11)(var8);
                var10 = var8.gradientFallbackBackground;
                var29 = var8.containerBackground;
                var _closure2_slot11 = var29;
                var16 = var8.avatarBackground;
                var37 = var8.statusBackground;
                var11 = _closure1_slot4;
                var8 = var11.useRef;
                var36 = var8.bind(var11)(var19);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot7;
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
                var28 = var11.bind(var12)(var2, var8);
                var2 = 29;
                var2 = var7[var2];
                var11 = var5.bind(var3)(var2);
                var8 = var11.useIsEligibleForCustomStatusLabelsExperiment;
                var2 = {};
                var15 = 'YouScreenUserProfileContent';
                var2.location = var15;
                var8 = var8.bind(var11)(var2);
                var _closure2_slot12 = var8;
                var2 = 30;
                var2 = var7[var2];
                var12 = var5.bind(var3)(var2);
                var11 = var12.useVirtualCurrencyMobileEnabled;
                var2 = {};
                var2.location = var15;
                var2 = var11.bind(var12)(var2);
                var34 = var2.enabled;
                var _closure2_slot13 = var34;
                var11 = _closure1_slot4;
                var2 = var11.useState;
                var12 = var2.bind(var11)(var19);
                var2 = _closure1_slot3;
                var11 = 2;
                var2 = var2.bind(var3)(var12, var11);
                var40 = 0;
                var23 = var2[var40];
                var20 = 1;
                var2 = var2[var20];
                var _closure2_slot14 = var2;
                var2 = 31;
                var2 = var7[var2];
                var12 = var5.bind(var3)(var2);
                var2 = var12.useShouldShowExpiringTrialOfferCard;
                var41 = var2.bind(var12)();
                var _closure2_slot15 = var41;
                var2 = 32;
                var2 = var7[var2];
                var12 = var5.bind(var3)(var2);
                var2 = var12.useMobileWishlistOwnerExperiment;
                var2 = var2.bind(var12)(var15);
                var12 = var2.enabled;
                var _closure2_slot16 = var12;
                var2 = 33;
                var2 = var7[var2];
                var15 = var5.bind(var3)(var2);
                var7 = var15.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    _fun103656: for (var _fun103656_ip = 0;;) switch (_fun103656_ip) {
                        case 0:
                            var2 = _closure2_slot16;
                            var0 = null;
                            if (!var2) {
                                _fun103656_ip = 39;
                                continue _fun103656
                            }
                        case 12:
                            var3 = _closure1_slot7;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var5 = var7.bind(var15)(var5, var2);
                var _closure2_slot17 = var5;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var7 = var2.bind(var7)(var40);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var7, var11);
                var21 = var2[var40];
                var2 = var2[var20];
                var _closure2_slot18 = var2;
                var22 = _closure1_slot4;
                var15 = var22.useCallback;
                var7 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var2 = new Array(0);
                var15 = var15.bind(var22)(var7, var2);
                var22 = _closure1_slot4;
                var7 = var22.useRef;
                var2 = new Array(0);
                var2 = var7.bind(var22)(var2);
                var _closure2_slot19 = var2;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var7 = var2.bind(var7)(var3);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var7, var11);
                var22 = var2[var40];
                var2 = var2[var20];
                var _closure2_slot20 = var2;
                var11 = _closure1_slot4;
                var7 = var11.useRef;
                var2 = _closure1_slot8;
                var24 = var2.WISHLIST;
                var2 = 0;
                if (!(var38 === var24)) {
                    _fun103654_ip = 822;
                    continue _fun103654
                }
            case 819:
                var2 = var20;
            case 822:
                var2 = var7.bind(var11)(var2);
                _closure2_slot21 = var2;
                var24 = _closure1_slot4;
                var11 = var24.useCallback;
                var7 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun103658: for (var _fun103658_ip = 0;;) switch (_fun103658_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arg2;
                            var0 = 0;
                            if (!(!(var2 <= var0))) {
                                _fun103658_ip = 71;
                                continue _fun103658
                            }
                        case 12:
                            var1 = _closure2_slot19;
                            var3 = var1.current;
                            var3 = var3[var4];
                            var1 = var1.current;
                            var1[var4] = var2;
                            var1 = _closure2_slot21;
                            var1 = var1.current;
                            var1 = var4 === var1;
                            if (!var1) {
                                _fun103658_ip = 57;
                                continue _fun103658
                            }
                        case 53:
                            var1 = var2 !== var3;
                        case 57:
                            if (!var1) {
                                _fun103658_ip = 71;
                                continue _fun103658
                            }
                        case 60:
                            var1 = _closure2_slot20;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var2 = var11.bind(var24)(var7, var2);
                _closure2_slot22 = var2;
                var25 = _closure1_slot4;
                var24 = var25.useCallback;
                var11 = function(arg0) { // Environment: var0
                    _fun103659: for (var _fun103659_ip = 0;;) switch (_fun103659_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot21;
                            var1.current = var2;
                            var1 = _closure2_slot19;
                            var1 = var1.current;
                            var2 = var1[var2];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103659_ip = 46;
                                continue _fun103659
                            }
                        case 35:
                            var1 = _closure2_slot20;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = new Array(0);
                var7 = var24.bind(var25)(var11, var7);
                var24 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var1];
                var24 = var24.bind(var3)(var11);
                var11 = var24.useFocusEffect;
                var44 = _closure1_slot4;
                var43 = var44.useCallback;
                var25 = new Array(2);
                var25[0] = var35;
                var25[1] = var8;
                var8 = function() { // Environment: var0
                    _fun103660: for (var _fun103660_ip = 0;;) switch (_fun103660_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var1 = _closure2_slot9;
                            var3 = null;
                            var4 = var3 == var1;
                            var1 = null;
                            if (!var4) {
                                _fun103660_ip = 60;
                                continue _fun103660
                            }
                        case 22:
                            var0 = _closure2_slot12;
                            var1 = null;
                            if (!var0) {
                                _fun103660_ip = 60;
                                continue _fun103660
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
                var8 = var43.bind(var44)(var8, var25);
                var8 = var11.bind(var24)(var8);
                var8 = var19 != var23;
                var25 = undefined;
                if (!var8) {
                    _fun103654_ip = 967;
                    continue _fun103654
                }
            case 958:
                var8 = var23.label;
                var25 = var8.bind(var23)();
            case 967:
                var24 = _closure1_slot4;
                var11 = var24.useCallback;
                var8 = new Array(10);
                var8[0] = var29;
                var8[1] = var17;
                var8[2] = var42;
                var8[3] = var41;
                var8[4] = var39;
                var8[5] = var26;
                var8[6] = var34;
                var8[7] = var31;
                var8[8] = var32;
                var8[9] = var6;
                var6 = function() { // Environment: var0
                    _fun103661: for (var _fun103661_ip = 0;;) switch (_fun103661_ip) {
                        case 0:
                            var4 = _closure2_slot5;
                            var0 = var4.card;
                            var8 = new Array(2);
                            var8[0] = var0;
                            var0 = {};
                            var1 = _closure2_slot11;
                            var0.backgroundColor = var1;
                            var8[1] = var0;
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var6 = var4.cards;
                            var0 = new Array(2);
                            var0[0] = var6;
                            var4 = var4.profileContent;
                            var0[1] = var4;
                            var1.style = var0;
                            var7 = _closure1_slot11;
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
                            var4 = new Array(9);
                            var4[0] = var6;
                            var6 = _closure2_slot15;
                            var6 = !var6;
                            if (!var6) {
                                _fun103661_ip = 200;
                                continue _fun103661
                            }
                        case 141:
                            var10 = _closure1_slot11;
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
                            var11 = _closure2_slot10;
                            var7.hasCustomProfileTheme = var11;
                            var6 = var10.bind(var0)(var9, var7);
                        case 200:
                            var4[1] = var6;
                            var6 = _closure2_slot13;
                            if (!var6) {
                                _fun103661_ip = 247;
                                continue _fun103661
                            }
                        case 211:
                            var10 = _closure1_slot11;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 37;
                            var7 = var11[var7];
                            var9 = var9.bind(var0)(var7);
                            var7 = {};
                            var7.style = var8;
                            var6 = var10.bind(var0)(var9, var7);
                        case 247:
                            var4[2] = var6;
                            var12 = _closure1_slot11;
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
                            var12 = _closure1_slot11;
                            var7 = 39;
                            var7 = var10[var7];
                            var11 = var6.bind(var0)(var7);
                            var7 = {};
                            var14 = var9.id;
                            var7.userId = var14;
                            var14 = _closure2_slot8;
                            var7.displayProfile = var14;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[4] = var7;
                            var15 = _closure1_slot11;
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
                            var12 = _closure1_slot11;
                            var7 = var10[var7];
                            var7 = var11.bind(var0)(var7);
                            var11 = var7.UserProfileApplicationRoleConnectionsCard;
                            var7 = {};
                            var14 = var9.id;
                            var7.userId = var14;
                            var7.style = var8;
                            var7 = var12.bind(var0)(var11, var7);
                            var4[6] = var7;
                            var12 = _closure1_slot11;
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
                            var4[7] = var7;
                            var7 = _closure1_slot11;
                            var5 = 42;
                            var5 = var10[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = {};
                            var9 = var9.id;
                            var5.userId = var9;
                            var5.style = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[8] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var11 = var11.bind(var24)(var6, var8);
                _closure2_slot23 = var11;
                var24 = _closure1_slot4;
                var8 = var24.useCallback;
                var34 = var17.profileContent;
                var6 = new Array(3);
                var6[0] = var34;
                var6[1] = var5;
                var6[2] = var29;
                var5 = function() { // Environment: var0
                    _fun103662: for (var _fun103662_ip = 0;;) switch (_fun103662_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot5;
                            var0 = var0.profileContent;
                            var1.style = var0;
                            var5 = _closure2_slot17;
                            var0 = null;
                            if (!(var0 != var5)) {
                                _fun103662_ip = 93;
                                continue _fun103662
                            }
                        case 40:
                            var7 = _closure1_slot11;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 43;
                            var0 = var6[var0];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var0);
                            var0 = {};
                            var9 = _closure2_slot17;
                            var0.wishlistId = var9;
                            var8 = _closure2_slot11;
                            var0.backgroundColor = var8;
                            var0 = var7.bind(var6)(var5, var0);
                            _fun103662_ip = 133;
                            continue _fun103662;
                        case 93:
                            var7 = _closure1_slot11;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 43;
                            var4 = var6[var4];
                            var6 = undefined;
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.WishlistEmptyState;
                            var4 = {};
                            var0 = var7.bind(var6)(var5, var4);
                        case 133:
                            var1.children = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var24 = var8.bind(var24)(var5, var6);
                _closure2_slot24 = var24;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var24;
                var5[2] = var2;
                var2 = function() { // Environment: var0
                    var1 = {};
                    var0 = 'main';
                    var1.id = var0;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 20;
                    var0 = var12[var3];
                    var5 = undefined;
                    var0 = var11.bind(var5)(var0);
                    var6 = var0.intl;
                    var4 = var6.string;
                    var0 = var12[var3];
                    var0 = var11.bind(var5)(var0);
                    var0 = var0.t;
                    var0 = var0.LXw470;
                    var0 = var4.bind(var6)(var0);
                    var1.label = var0;
                    var9 = _closure1_slot11;
                    var4 = _closure1_slot5;
                    var0 = {};
                    var8 = false;
                    var0.scrollEnabled = var8;
                    var6 = function arg0, arg1() {
                        var4 = _closure2_slot22;
                        var3 = undefined;
                        var2 = 0;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var0.onContentSizeChange = var6;
                    var10 = _closure2_slot23;
                    var10 = var10.bind(var5)();
                    var0.children = var10;
                    var0 = var9.bind(var5)(var4, var0);
                    var1.page = var0;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var9 = 'wishlist';
                    var1.id = var9;
                    var9 = var12[var3];
                    var9 = var11.bind(var5)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var3 = var12[var3];
                    var3 = var11.bind(var5)(var3);
                    var3 = var3.t;
                    var3 = var3["7lZ31J"];
                    var3 = var9.bind(var10)(var3);
                    var1.label = var3;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var2.scrollEnabled = var8;
                    var7 = function arg0, arg1() {
                        var4 = _closure2_slot22;
                        var3 = undefined;
                        var2 = 1;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var2.onContentSizeChange = var7;
                    var6 = _closure2_slot24;
                    var6 = var6.bind(var5)();
                    var2.children = var6;
                    var2 = var3.bind(var5)(var4, var2);
                    var1.page = var2;
                    var0[1] = var1;
                    return var0;
                };
                var8 = var6.bind(var8)(var2, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 44;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useSegmentedControlState;
                var2 = {};
                var2.pageWidth = var21;
                var21 = _closure1_slot8;
                var24 = var21.WISHLIST;
                var21 = 0;
                if (!(var38 === var24)) {
                    _fun103654_ip = 1175;
                    continue _fun103654
                }
            case 1172:
                var21 = var20;
            case 1175:
                var2.defaultIndex = var21;
                var24 = _closure1_slot1;
                var34 = _closure1_slot2;
                var21 = 19;
                var21 = var34[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.spacing;
                var21 = var21.PX_24;
                var2.itemSpacing = var21;
                var2.items = var8;
                var2.onPageChange = var7;
                var21 = var5.bind(var6)(var2);
                _closure2_slot25 = var21;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var2 = var21.setActiveIndex;
                var2 = var5.bind(var6)(var2);
                _closure2_slot26 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var21;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot26;
                    var0 = _closure2_slot25;
                    var0 = var0.setActiveIndex;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var5);
                var5 = _closure1_slot0;
                var1 = var34[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useFocusEffect;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var6 = new Array(3);
                var6[0] = var38;
                var6[1] = var12;
                var6[2] = var9;
                var0 = function() { // Environment: var0
                    _fun103667: for (var _fun103667_ip = 0;;) switch (_fun103667_ip) {
                        case 0:
                            var2 = _closure2_slot16;
                            var4 = undefined;
                            if (var2) {
                                _fun103667_ip = 16;
                                continue _fun103667
                            }
                        case 14:
                            return var4;
                        case 16:
                            var2 = _closure2_slot4;
                            if (!(var4 !== var2)) {
                                _fun103667_ip = 82;
                                continue _fun103667
                            }
                        case 24:
                            var3 = _closure2_slot4;
                            var1 = _closure1_slot8;
                            var2 = var1.WISHLIST;
                            var1 = 0;
                            if (!(var3 === var2)) {
                                _fun103667_ip = 50;
                                continue _fun103667
                            }
                        case 47:
                            var1 = 1;
                        case 50:
                            var _closure3_slot1 = var1;
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var0
                                var5 = _closure2_slot26;
                                var4 = var5.current;
                                var3 = _closure3_slot1;
                                var2 = false;
                                var1 = true;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                var3 = _closure2_slot6;
                                var2 = var3.setParams;
                                var1 = {};
                                var0 = undefined;
                                var1.initialTab = var0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = 80;
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot0 = var1;
                        case 82:
                            var0 = function() { // Environment: var0
                                _fun103669: for (var _fun103669_ip = 0;;) switch (_fun103669_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun103669_ip = 32;
                                            continue _fun103669
                                        }
                                    case 13:
                                        var2 = global;
                                        var3 = var2.clearTimeout;
                                        var2 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2);
                                    case 32:
                                        var3 = _closure2_slot6;
                                        var2 = var3.isFocused;
                                        var2 = var2.bind(var3)();
                                        if (var2) {
                                            _fun103669_ip = 121;
                                            continue _fun103669
                                        }
                                    case 52:
                                        var3 = _closure2_slot6;
                                        var2 = var3.getParent;
                                        var3 = var2.bind(var3)();
                                        var1 = var1 != var3;
                                        if (!var1) {
                                            _fun103669_ip = 83;
                                            continue _fun103669
                                        }
                                    case 73:
                                        var2 = var3.isFocused;
                                        var1 = var2.bind(var3)();
                                    case 83:
                                        if (!var1) {
                                            _fun103669_ip = 121;
                                            continue _fun103669
                                        }
                                    case 86:
                                        var2 = _closure2_slot6;
                                        var1 = var2.setParams;
                                        var0 = {};
                                        var3 = _closure1_slot8;
                                        var3 = var3.MAIN;
                                        var0.initialTab = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 121:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var6);
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot11;
                var0 = 45;
                var0 = var34[var0];
                var0 = var24.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var4;
                var6 = _closure1_slot11;
                var4 = 46;
                var4 = var34[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LayerScope;
                var4 = {};
                var9 = _closure1_slot13;
                var7 = 47;
                var7 = var34[var7];
                var8 = var24.bind(var3)(var7);
                var7 = {};
                var39 = var17.profileContentWrapper;
                var38 = new Array(2);
                var38[0] = var39;
                var39 = {};
                var39.paddingTop = var40;
                var38[1] = var39;
                var7.containerStyle = var38;
                var7.primaryColor = var14;
                var7.secondaryColor = var13;
                var7.fallbackBackground = var10;
                var14 = _closure1_slot11;
                var13 = _closure1_slot14;
                var10 = {};
                var10.user = var31;
                var10.backgroundColor = var16;
                var16 = {};
                var16.backgroundColor = var37;
                var10.statusStyle = var16;
                var13 = var14.bind(var3)(var13, var10);
                var10 = new Array(4);
                var10[0] = var13;
                var16 = _closure1_slot11;
                var13 = 48;
                var13 = var34[var13];
                var14 = var24.bind(var3)(var13);
                var13 = {};
                var13.ref = var36;
                var13.customStatusActivity = var35;
                var13.hasCustomProfileTheme = var26;
                var26 = var17.customStatusBubble;
                var13.style = var26;
                var26 = var17.emojiOnlyCustomStatusBubble;
                var13.emojiOnlyStyle = var26;
                var26 = true;
                var13.editEnabled = var26;
                var13.placeholderText = var25;
                var13.prompt = var23;
                var13 = var16.bind(var3)(var14, var13);
                var10[1] = var13;
                var16 = _closure1_slot13;
                var14 = _closure1_slot6;
                var13 = {};
                var25 = var17.primaryInfo;
                var23 = new Array(2);
                var23[0] = var25;
                var25 = var17.profileContent;
                var23[1] = var25;
                var13.style = var23;
                var25 = _closure1_slot11;
                var23 = 49;
                var23 = var34[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var23.user = var31;
                var34 = var19 == var32;
                var31 = undefined;
                if (var34) {
                    _fun103654_ip = 1662;
                    continue _fun103654
                }
            case 1656:
                var31 = var32.pronouns;
            case 1662:
                var23.pronouns = var31;
                var23.badges = var30;
                var23.badgeContainerBackground = var29;
                var23.onPressDisplayName = var28;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var28 = 20;
                var29 = var32[var28];
                var29 = var31.bind(var3)(var29);
                var34 = var29.intl;
                var30 = var34.string;
                var29 = var32[var28];
                var29 = var31.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29["0DPAZH"];
                var34 = var30.bind(var34)(var29);
                var29 = 50;
                var29 = var32[var29];
                var30 = var31.bind(var3)(var29);
                var29 = var30.getStatusLabel;
                var48 = var29.bind(var30)(var33);
                var29 = var32[var28];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.C6COaT;
                var46 = var29.bind(var30)(var28);
                var28 = global;
                var28 = var28.HermesInternal;
                var31 = var28.concat;
                var51 = '';
                var49 = ': ';
                var47 = '. ';
                var50 = var34;
                var28 = var51[var31](var50, var49, var48, var47, var46, var45);
                var23.displayNameAccessibilityHint = var28;
                var28 = _closure1_slot9;
                var28 = var28.YOU_SCREEN;
                var23.themeType = var28;
                var23.showChevron = var26;
                var24 = var25.bind(var3)(var24, var23);
                var23 = new Array(2);
                var23[0] = var24;
                var26 = _closure1_slot11;
                var25 = _closure1_slot15;
                var24 = {};
                var24.navigateToProfileCustomization = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var13.children = var23;
                var13 = var16.bind(var3)(var14, var13);
                var10[2] = var13;
                if (var12) {
                    _fun103654_ip = 1930;
                    continue _fun103654
                }
            case 1921:
                var11 = var11.bind(var3)();
                _fun103654_ip = 2125;
                continue _fun103654;
            case 1930:
                var14 = _closure1_slot13;
                var13 = _closure1_slot6;
                var12 = {};
                var16 = {};
                var16.flex = var20;
                var12.style = var16;
                var12.onLayout = var15;
                var16 = _closure1_slot11;
                var15 = {};
                var17 = var17.profileTablist;
                var15.style = var17;
                var23 = _closure1_slot11;
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = 51;
                var17 = var24[var17];
                var17 = var20.bind(var3)(var17);
                var20 = var17.Tabs;
                var17 = {};
                var17.state = var21;
                var17 = var23.bind(var3)(var20, var17);
                var15.children = var17;
                var16 = var16.bind(var3)(var13, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var17 = _closure1_slot11;
                var16 = {};
                var20 = var19 != var22;
                var19 = undefined;
                if (!var20) {
                    _fun103654_ip = 2055;
                    continue _fun103654
                }
            case 2046:
                var20 = {};
                var20.height = var22;
                var19 = var20;
            case 2055:
                var16.style = var19;
                var20 = _closure1_slot11;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 52;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.SegmentedControlPages;
                var18 = {};
                var18.state = var21;
                var18 = var20.bind(var3)(var19, var18);
                var16.children = var18;
                var16 = var17.bind(var3)(var13, var16);
                var15[1] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 2125:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4666, 7065, 7049, 1369, 33, 13514, 13521, 7059, 7053, 7063, 3984, 6018, 1358, 7838, 4092, 8977, 671, 1235, 13530, 1470, 7042, 5728, 7055, 1348, 7050, 7054, 7073, 3346, 13531, 11334, 566, 7074, 13532, 12020, 11296, 7856, 7624, 12022, 13534, 12000, 12025, 7824, 3719, 5263, 7060, 7062, 7430, 7904, 7830, 7832, 2]);