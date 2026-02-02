// modules/user_profile/native/UserProfileEditForm.tsx
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
        _fun79740: for (var _fun79740_ip = 0;;) switch (_fun79740_ip) {
            case 0:
                var2 = arg0;
                var17 = var2.user;
                var _closure2_slot0 = var17;
                var14 = var2.displayProfile;
                var _closure2_slot1 = var14;
                var15 = var2.pendingAvatarSrc;
                var16 = var2.pendingBanner;
                var12 = var2.pendingAccentColor;
                var13 = var2.pendingThemeColors;
                var0 = var2.tryItOutBanner;
                var1 = var2.isTryItOut;
                var _closure2_slot2 = var1;
                var7 = var2.disabled;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                if (!var1) {
                    _fun79740_ip = 114;
                    continue _fun79740
                }
            case 82:
                var1 = null;
                if (!(var1 == var0)) {
                    _fun79740_ip = 111;
                    continue _fun79740
                }
            case 88:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var0 = var2.bind(var3)(var1);
            case 111:
                var16 = var0;
            case 114:
                _closure2_slot3 = var16;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.canUseCollectibles;
                var10 = var0.bind(var1)(var17);
                var0 = 10;
                var1 = var4[var0];
                var2 = var5.bind(var3)(var1);
                var1 = 11;
                var1 = var4[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.EDIT_BANNER;
                var1 = var2.bind(var3)(var1);
                var6 = var1.analyticsLocations;
                _closure2_slot4 = var6;
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var6;
                var6 = _closure1_slot13;
                var11 = 12;
                var4 = var4[var11];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.user = var17;
                var4.displayProfile = var14;
                var4.pendingBanner = var16;
                var4.pendingAvatarSrc = var15;
                var4.pendingThemeColors = var13;
                var4.pendingAccentColor = var12;
                var13 = null;
                var15 = var13 == var14;
                var12 = undefined;
                if (var15) {
                    _fun79740_ip = 290;
                    continue _fun79740
                }
            case 284:
                var12 = var14.banner;
            case 290:
                var12 = var13 != var12;
                if (!var12) {
                    _fun79740_ip = 299;
                    continue _fun79740
                }
            case 297:
                var11 = undefined;
            case 299:
                var4.bannerSafeArea = var11;
                var4.showProfilePreviewButton = var10;
                var9 = function() {
                    _fun79741: for (var _fun79741_ip = 0;;) switch (_fun79741_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var2 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 15;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 14;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.user = var7;
                            var7 = _closure2_slot4;
                            var2.analyticsLocations = var7;
                            var7 = _closure2_slot2;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 16;
                            var8 = var10[var8];
                            var8 = var9.bind(var0)(var8);
                            if (var7) {
                                _fun79741_ip = 122;
                                continue _fun79741
                            }
                        case 114:
                            var7 = var8.setPendingBanner;
                            _fun79741_ip = 128;
                            continue _fun79741;
                        case 122:
                            var7 = var8.setTryItOutBanner;
                        case 128:
                            var2.onBannerChange = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 17;
                            var6 = var8[var6];
                            var9 = var7.bind(var0)(var6);
                            var8 = var9.showRemoveBanner;
                            var7 = _closure2_slot3;
                            var10 = _closure2_slot1;
                            var6 = null;
                            var10 = var6 == var10;
                            var6 = undefined;
                            if (var10) {
                                _fun79741_ip = 188;
                                continue _fun79741
                            }
                        case 178:
                            var10 = _closure2_slot1;
                            var6 = var10.banner;
                        case 188:
                            var6 = var8.bind(var9)(var7, var6);
                            var2.showRemoveBanner = var6;
                            var1 = _closure2_slot2;
                            var2.isTryItOut = var1;
                            var1 = 'Change Banner';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var4.onPressEdit = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 18;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.VqsHy0;
                var8 = var9.bind(var10)(var8);
                var4.editButtonAccessibilityLabel = var8;
                var4.editDisabled = var7;
                var4 = var6.bind(var3)(var5, var4);
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
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BIO_MAX_LENGTH;
    var _closure1_slot8 = var6;
    var6 = var3.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot9 = var6;
    var3 = var3.PRONOUNS_MAX_LENGTH;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProfileCustomizationScrollPositions;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileEditAutoFocusElement;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 53;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79742: for (var _fun79742_ip = 0;;) switch (_fun79742_ip) {
            case 0:
                var0 = arg0;
                var38 = var0.currentUser;
                var48 = var0.autoFocusElement;
                var12 = var0.isTryItOut;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun79742_ip = 31;
                    continue _fun79742
                }
            case 29:
                var12 = false;
            case 31:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 19;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var64 = var0.bind(var3)();
                var0 = 20;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var58 = var0.bind(var3)();
                var0 = 21;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var10 = var0.bind(var3)();
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var26 = null;
                var13 = var0.bind(var1)(var26);
                var0 = var1.useRef;
                var56 = var0.bind(var1)(var26);
                var0 = var1.useRef;
                var59 = var0.bind(var1)(var26);
                var0 = var1.useRef;
                var53 = var0.bind(var1)(var26);
                var0 = 22;
                var0 = var6[var0];
                var1 = var4.bind(var3)(var0);
                var0 = {};
                var46 = true;
                var0.includeKeyboardHeight = var46;
                var0 = var1.bind(var3)(var0);
                var5 = var0.insets;
                var11 = 23;
                var0 = var6[var11];
                var0 = var4.bind(var3)(var0);
                var0 = var0.spacing;
                var14 = var0.PX_16;
                var0 = 24;
                var0 = var6[var0];
                var1 = var4.bind(var3)(var0);
                var0 = {};
                var0.insets = var5;
                var7 = {};
                var7.ref = var56;
                var2 = {};
                var15 = 'toRef';
                var2.type = var15;
                var2.ref = var59;
                var2.extraOffset = var14;
                var7.offset = var2;
                var2 = new Array(3);
                var2[0] = var7;
                var7 = {};
                var7.ref = var59;
                var8 = {};
                var8.type = var15;
                var8.ref = var53;
                var8.extraOffset = var14;
                var7.offset = var8;
                var2[1] = var7;
                var7 = {};
                var7.ref = var53;
                var8 = {};
                var14 = 'toValue';
                var8.type = var14;
                var14 = var6[var11];
                var14 = var4.bind(var3)(var14);
                var14 = var14.spacing;
                var14 = var14.PX_64;
                var8.value = var14;
                var7.offset = var8;
                var2[2] = var7;
                var0.inputs = var2;
                var0.scrollViewRef = var13;
                var0 = var1.bind(var3)(var0);
                var47 = var0.onFocus;
                var1 = _closure1_slot0;
                var0 = 25;
                var0 = var6[var0];
                var7 = var1.bind(var3)(var0);
                var2 = var7.useIsDisplayNameStylesMobileEnabled;
                var0 = {};
                var8 = 'UserProfileEditForm';
                var0.location = var8;
                var28 = var2.bind(var7)(var0);
                var0 = 26;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.errors;
                var36 = var0.isSubmitting;
                var8 = var0.pendingAvatar;
                var41 = var0.pendingAvatarDecoration;
                var70 = var0.pendingBanner;
                var39 = var0.pendingProfileEffect;
                var34 = var0.pendingNameplate;
                var43 = var0.pendingThemeColors;
                var69 = var0.pendingAccentColor;
                var20 = var0.tryItOutBanner;
                var42 = var0.tryItOutAvatarDecoration;
                var40 = var0.tryItOutProfileEffect;
                var44 = var0.tryItOutThemeColors;
                var29 = var0.tryItOutDisplayNameStyles;
                var61 = var0.pendingGlobalName;
                var55 = var0.pendingPronouns;
                var50 = var0.pendingBio;
                var30 = var0.pendingLegacyUsernameDisabled;
                var35 = var0.pendingPrimaryGuildId;
                var27 = var0.pendingDisplayNameStyles;
                var0 = 27;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = 28;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useGuildAutomodProfileQuarantineErrors;
                var1 = var0.bind(var1)();
                var0 = 29;
                var0 = var6[var0];
                var4 = var4.bind(var3)(var0);
                var6 = var38.id;
                var7 = var26 != var6;
                var25 = '';
                var0 = var25;
                if (!var7) {
                    _fun79742_ip = 616;
                    continue _fun79742
                }
            case 613:
                var0 = var6;
            case 616:
                var33 = var4.bind(var3)(var0);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 30;
                var0 = var6[var0];
                var7 = var4.bind(var3)(var0);
                var0 = var7.useCustomStatusActivity;
                var67 = var0.bind(var7)();
                var0 = 31;
                var0 = var6[var0];
                var7 = var4.bind(var3)(var0);
                var4 = var7.getPendingAvatarSrc;
                var0 = {};
                var14 = var38.id;
                var0.userId = var14;
                var0.image = var8;
                var45 = var4.bind(var7)(var0);
                var4 = _closure1_slot1;
                var0 = 32;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var52 = var0.bind(var3)(var33, var30);
                var0 = 9;
                var0 = var6[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.canUsePremiumProfileCustomization;
                var8 = var0.bind(var4)(var38);
                var0 = var26 == var33;
                var31 = undefined;
                if (var0) {
                    _fun79742_ip = 756;
                    continue _fun79742
                }
            case 744:
                var0 = var33.getLegacyUsername;
                var31 = var0.bind(var33)();
            case 756:
                var0 = var38.globalName;
                var4 = var26 != var0;
                var60 = var25;
                if (!var4) {
                    _fun79742_ip = 775;
                    continue _fun79742
                }
            case 772:
                var60 = var0;
            case 775:
                var4 = var26 == var33;
                var0 = undefined;
                if (var4) {
                    _fun79742_ip = 790;
                    continue _fun79742
                }
            case 784:
                var0 = var33.pronouns;
            case 790:
                var4 = var26 != var0;
                var54 = var25;
                if (!var4) {
                    _fun79742_ip = 803;
                    continue _fun79742
                }
            case 800:
                var54 = var0;
            case 803:
                _closure2_slot1 = var54;
                var4 = var26 == var33;
                var0 = undefined;
                if (var4) {
                    _fun79742_ip = 822;
                    continue _fun79742
                }
            case 816:
                var0 = var33.bio;
            case 822:
                var4 = var26 != var0;
                var49 = var25;
                if (!var4) {
                    _fun79742_ip = 835;
                    continue _fun79742
                }
            case 832:
                var49 = var0;
            case 835:
                _closure2_slot2 = var49;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 33;
                var0 = var6[var0];
                var4 = var4.bind(var3)(var0);
                var0 = {};
                var0.user = var38;
                var0.displayProfile = var33;
                var6 = var43;
                if (!var12) {
                    _fun79742_ip = 879;
                    continue _fun79742
                }
            case 876:
                var6 = var44;
            case 879:
                var0.pendingThemeColors = var6;
                var0.isPreview = var12;
                var0 = var4.bind(var3)(var0);
                var4 = var0.theme;
                var66 = var0.primaryColor;
                var21 = var0.secondaryColor;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 34;
                var0 = var7[var0];
                var7 = var6.bind(var3)(var0);
                var6 = var7.useUserProfileColors;
                var0 = {};
                var0.theme = var4;
                var0.primaryColor = var66;
                var0.secondaryColor = var21;
                var0 = var6.bind(var7)(var0);
                var22 = var0.gradientFallbackBackground;
                var17 = var0.gradientSecondaryBackground;
                var37 = var0.containerBackground;
                var0 = var0.avatarBackground;
                var6 = var5.bottom;
                var68 = 0;
                var5 = 0;
                if (var8) {
                    _fun79742_ip = 1005;
                    continue _fun79742
                }
            case 996:
                var5 = 0;
                if (var10) {
                    _fun79742_ip = 1005;
                    continue _fun79742
                }
            case 1001:
                var5 = _closure1_slot7;
            case 1005:
                var6 = var6 + var5;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var5 = var7.bind(var3)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_16;
                var24 = var6 + var5;
                var72 = {};
                var72.backgroundColor = var0;
                var0 = var26 == var2;
                var62 = undefined;
                if (var0) {
                    _fun79742_ip = 1073;
                    continue _fun79742
                }
            case 1055:
                var0 = var2.username;
                var5 = var26 == var0;
                var62 = undefined;
                if (var5) {
                    _fun79742_ip = 1073;
                    continue _fun79742
                }
            case 1069:
                var62 = var0[var68];
            case 1073:
                if (!(var26 == var62)) {
                    _fun79742_ip = 1099;
                    continue _fun79742
                }
            case 1077:
                var5 = var2.global_name;
                var6 = var26 == var5;
                var0 = undefined;
                if (var6) {
                    _fun79742_ip = 1096;
                    continue _fun79742
                }
            case 1092:
                var0 = var5[var68];
            case 1096:
                var62 = var0;
            case 1099:
                if (!(var26 == var62)) {
                    _fun79742_ip = 1134;
                    continue _fun79742
                }
            case 1103:
                var5 = var26 == var1;
                var0 = undefined;
                if (var5) {
                    _fun79742_ip = 1131;
                    continue _fun79742
                }
            case 1112:
                var1 = var1.nick;
                var5 = var26 == var1;
                var0 = undefined;
                if (var5) {
                    _fun79742_ip = 1131;
                    continue _fun79742
                }
            case 1127:
                var0 = var1[var68];
            case 1131:
                var62 = var0;
            case 1134:
                var0 = var2.pronouns;
                var1 = var26 == var0;
                var57 = undefined;
                if (var1) {
                    _fun79742_ip = 1153;
                    continue _fun79742
                }
            case 1149:
                var57 = var0[var68];
            case 1153:
                var0 = var2.bio;
                var1 = var26 == var0;
                var51 = undefined;
                if (var1) {
                    _fun79742_ip = 1172;
                    continue _fun79742
                }
            case 1168:
                var51 = var0[var68];
            case 1172:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var2);
                var0 = var0.length;
                var0 = var0 > var68;
                var65 = null;
                if (!var0) {
                    _fun79742_ip = 1270;
                    continue _fun79742
                }
            case 1204:
                var0 = var26 == var51;
                var65 = null;
                if (!var0) {
                    _fun79742_ip = 1270;
                    continue _fun79742
                }
            case 1213:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 18;
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["84MExs"];
                var65 = var1.bind(var2)(var0);
            case 1270:
                var1 = _closure1_slot0;
                var63 = _closure1_slot2;
                var0 = 35;
                var0 = var63[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var32
                    var1 = _closure1_slot6;
                    var0 = var1.getScrollPosition;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var0);
                var23 = _closure1_slot1;
                var0 = 36;
                var0 = var63[var0];
                var0 = var23.bind(var3)(var0);
                var0 = var0.bind(var3)(var13, var2);
                _closure2_slot3 = var0;
                var2 = _closure1_slot13;
                var0 = 38;
                var0 = var63[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var4;
                var0.primaryColor = var66;
                var0.secondaryColor = var21;
                var6 = _closure1_slot14;
                var5 = _closure1_slot5;
                var4 = {};
                var11 = var58.container;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = {};
                var11.backgroundColor = var17;
                var7[1] = var11;
                var4.style = var7;
                var11 = _closure1_slot4;
                var7 = {};
                var7.ref = var13;
                var14 = _closure1_slot13;
                var13 = {};
                var15 = var58.bounceOffset;
                var13.style = var15;
                var14 = var14.bind(var3)(var5, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var19 = 39;
                var14 = var63[var19];
                var15 = var23.bind(var3)(var14);
                var14 = {};
                var14.fallbackBackground = var22;
                var14.primaryColor = var66;
                var14.secondaryColor = var21;
                var16 = {};
                var16.backgroundColor = var17;
                var14.containerStyle = var16;
                var18 = _closure1_slot13;
                var17 = _closure1_slot15;
                var16 = {};
                var16.user = var38;
                var16.displayProfile = var33;
                var16.pendingAvatarSrc = var45;
                var16.pendingBanner = var70;
                var16.pendingAccentColor = var69;
                var16.pendingThemeColors = var43;
                var16.tryItOutBanner = var20;
                var16.isTryItOut = var12;
                var16.disabled = var36;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = {};
                var20 = _closure1_slot13;
                var18 = {};
                var70 = var64.avatarBackground;
                var69 = new Array(4);
                var69[0] = var70;
                var70 = var64.avatarPosition;
                var69[1] = var70;
                var70 = var58.avatarContainer;
                var69[2] = var70;
                var69[3] = var72;
                var18.style = var69;
                var71 = _closure1_slot13;
                var69 = 40;
                var69 = var63[var69];
                var70 = var23.bind(var3)(var69);
                var69 = {};
                var69.user = var38;
                var69.disabled = var36;
                var73 = var26 != var12;
                var69.disableStatus = var73;
                var69.statusStyle = var72;
                var69.isTryItOut = var12;
                var72 = _closure1_slot12;
                var72 = var72.AVATAR;
                var72 = var48 === var72;
                var69.autoStartEditFlow = var72;
                var69 = var71.bind(var3)(var70, var69);
                var18.children = var69;
                var20 = var20.bind(var3)(var5, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var19 = var63[var19];
                var20 = var23.bind(var3)(var19);
                var19 = {};
                var19.fallbackBackground = var22;
                var19.primaryColor = var66;
                var19.secondaryColor = var21;
                var22 = var64.profileContent;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = {};
                var22.paddingTop = var68;
                var22.paddingBottom = var24;
                var21[1] = var22;
                var19.containerStyle = var21;
                var24 = _closure1_slot13;
                var21 = 41;
                var21 = var63[var21];
                var22 = var23.bind(var3)(var21);
                var21 = {};
                var21.customStatusActivity = var67;
                var66 = var26 != var66;
                var21.hasCustomProfileTheme = var66;
                var66 = var64.customStatusBubble;
                var21.style = var66;
                var64 = var64.emojiOnlyCustomStatusBubble;
                var21.emojiOnlyStyle = var64;
                var21.editEnabled = var46;
                var22 = var24.bind(var3)(var22, var21);
                var21 = new Array(3);
                var21[0] = var22;
                var24 = _closure1_slot13;
                var22 = 42;
                var22 = var63[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var22.user = var38;
                var22.displayName = var61;
                var22.badges = var52;
                var52 = var54;
                if (!(var26 != var55)) {
                    _fun79742_ip = 1881;
                    continue _fun79742
                }
            case 1878:
                var52 = var55;
            case 1881:
                var22.pronouns = var52;
                var22.badgeContainerBackground = var37;
                if (!var12) {
                    _fun79742_ip = 1897;
                    continue _fun79742
                }
            case 1894:
                var27 = var29;
            case 1897:
                var22.pendingDisplayNameStyles = var27;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                _closure2_slot0 = var38;
                var24 = _closure1_slot14;
                var23 = _closure1_slot5;
                var22 = {};
                var29 = var58.formContainer;
                var27 = new Array(2);
                var27[0] = var29;
                var29 = {};
                var29.backgroundColor = var37;
                var27[1] = var29;
                var22.style = var27;
                var29 = var26 != var65;
                var27 = null;
                if (!var29) {
                    _fun79742_ip = 2052;
                    continue _fun79742
                }
            case 1963:
                var27 = null;
                if (!(var25 !== var65)) {
                    _fun79742_ip = 2052;
                    continue _fun79742
                }
            case 1969:
                var52 = _closure1_slot13;
                var29 = _closure1_slot5;
                var25 = {};
                var58 = var58.errorContainer;
                var25.style = var58;
                var64 = _closure1_slot13;
                var63 = _closure1_slot0;
                var66 = _closure1_slot2;
                var58 = 37;
                var58 = var66[var58];
                var58 = var63.bind(var3)(var58);
                var63 = var58.Text;
                var58 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-feedback-critical'
                };
                var58.children = var65;
                var58 = var64.bind(var3)(var63, var58);
                var25.children = var58;
                var27 = var52.bind(var3)(var29, var25);
            case 2052:
                var25 = new Array(11);
                var25[0] = var27;
                var58 = _closure1_slot13;
                var52 = _closure1_slot1;
                var63 = _closure1_slot2;
                var27 = 43;
                var29 = var63[var27];
                var52 = var52.bind(var3)(var29);
                var29 = {};
                var29.scrollTargetRef = var56;
                var66 = _closure1_slot0;
                var56 = 18;
                var64 = var63[var56];
                var64 = var66.bind(var3)(var64);
                var65 = var64.intl;
                var64 = var65.string;
                var63 = var63[var56];
                var63 = var66.bind(var3)(var63);
                var63 = var63.t;
                var63 = var63["9AjdkD"];
                var63 = var64.bind(var65)(var63);
                var29.label = var63;
                var29.errorMessage = var62;
                if (!(var26 != var61)) {
                    _fun79742_ip = 2158;
                    continue _fun79742
                }
            case 2155:
                var60 = var61;
            case 2158:
                var29.value = var60;
                var29.onFocus = var47;
                var60 = function arg0() {
                    _fun79744: for (var _fun79744_ip = 0;;) switch (_fun79744_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = '';
                            if (!(var1 === var0)) {
                                _fun79744_ip = 35;
                                continue _fun79744
                            }
                        case 11:
                            var1 = _closure2_slot0;
                            var2 = var1.globalName;
                            var1 = null;
                            var1 = var1 == var2;
                            var4 = undefined;
                            if (var1) {
                                _fun79744_ip = 38;
                                continue _fun79744
                            }
                        case 35:
                            var4 = var0;
                        case 38:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 44;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setPendingGlobalName;
                            var1 = _closure2_slot0;
                            var5 = var1.globalName;
                            var1 = undefined;
                            if (!(var4 !== var5)) {
                                _fun79744_ip = 91;
                                continue _fun79744
                            }
                        case 88:
                            var1 = var4;
                        case 91:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var29.onChange = var60;
                var60 = var38.toString;
                var60 = var60.bind(var38)();
                var29.placeholder = var60;
                var60 = _closure1_slot9;
                var29.maxLength = var60;
                var29.disabled = var36;
                var29 = var58.bind(var3)(var52, var29);
                var25[1] = var29;
                if (!var28) {
                    _fun79742_ip = 2231;
                    continue _fun79742
                }
            case 2219:
                var29 = var8;
                if (var29) {
                    _fun79742_ip = 2228;
                    continue _fun79742
                }
            case 2225:
                var29 = var12;
            case 2228:
                var28 = var29;
            case 2231:
                if (!var28) {
                    _fun79742_ip = 2275;
                    continue _fun79742
                }
            case 2234:
                var58 = _closure1_slot13;
                var52 = _closure1_slot1;
                var60 = _closure1_slot2;
                var29 = 45;
                var29 = var60[var29];
                var52 = var52.bind(var3)(var29);
                var29 = {};
                var29.user = var38;
                var29.isTryItOut = var12;
                var28 = var58.bind(var3)(var52, var29);
            case 2275:
                var25[2] = var28;
                var52 = _closure1_slot13;
                var29 = _closure1_slot1;
                var58 = _closure1_slot2;
                var28 = var58[var27];
                var29 = var29.bind(var3)(var28);
                var28 = {};
                var28.scrollTargetRef = var59;
                var61 = _closure1_slot0;
                var59 = var58[var56];
                var59 = var61.bind(var3)(var59);
                var60 = var59.intl;
                var59 = var60.string;
                var58 = var58[var56];
                var58 = var61.bind(var3)(var58);
                var58 = var58.t;
                var58 = var58["+T3RI/"];
                var58 = var59.bind(var60)(var58);
                var28.label = var58;
                var28.errorMessage = var57;
                if (!(var26 != var55)) {
                    _fun79742_ip = 2371;
                    continue _fun79742
                }
            case 2368:
                var54 = var55;
            case 2371:
                var28.value = var54;
                var28.onFocus = var47;
                var54 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setNewPendingUserPronouns;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var28.onChange = var54;
                var54 = _closure1_slot10;
                var28.maxLength = var54;
                var28.disabled = var36;
                var28 = var52.bind(var3)(var29, var28);
                var25[3] = var28;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var52 = _closure1_slot2;
                var27 = var52[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var27.scrollTargetRef = var53;
                var55 = _closure1_slot0;
                var53 = var52[var56];
                var53 = var55.bind(var3)(var53);
                var54 = var53.intl;
                var53 = var54.string;
                var52 = var52[var56];
                var52 = var55.bind(var3)(var52);
                var52 = var52.t;
                var52 = var52.NepzEw;
                var52 = var53.bind(var54)(var52);
                var27.label = var52;
                var27.errorMessage = var51;
                if (!(var26 != var50)) {
                    _fun79742_ip = 2507;
                    continue _fun79742
                }
            case 2504:
                var49 = var50;
            case 2507:
                var27.value = var49;
                var27.onFocus = var47;
                var47 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setNewPendingUserBio;
                    var1 = _closure2_slot2;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var27.onChange = var47;
                var47 = _closure1_slot12;
                var47 = var47.BIO;
                var47 = var48 === var47;
                var27.autoFocus = var47;
                var47 = _closure1_slot8;
                var27.maxLength = var47;
                var47 = 5;
                var27.numberOfLines = var47;
                var27.multiline = var46;
                var27.disabled = var36;
                var27 = var29.bind(var3)(var28, var27);
                var25[4] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var46 = _closure1_slot2;
                var27 = 46;
                var27 = var46[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var27.user = var38;
                var47 = _closure1_slot0;
                var48 = _closure1_slot2;
                var46 = 16;
                var46 = var48[var46];
                var47 = var47.bind(var3)(var46);
                if (var12) {
                    _fun79742_ip = 2644;
                    continue _fun79742
                }
            case 2636:
                var46 = var47.setPendingThemeColors;
                _fun79742_ip = 2650;
                continue _fun79742;
            case 2644:
                var46 = var47.setTryItOutThemeColors;
            case 2650:
                var27.onProfileThemeColorsChanged = var46;
                var27.pendingAvatarSrc = var45;
                if (!var12) {
                    _fun79742_ip = 2666;
                    continue _fun79742
                }
            case 2663:
                var43 = var44;
            case 2666:
                var27.pendingThemeColors = var43;
                var27.isTryItOut = var12;
                var27 = var29.bind(var3)(var28, var27);
                var25[5] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var43 = _closure1_slot2;
                var27 = 47;
                var27 = var43[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var27.user = var38;
                if (!var12) {
                    _fun79742_ip = 2722;
                    continue _fun79742
                }
            case 2719:
                var41 = var42;
            case 2722:
                var27.pendingAvatarDecoration = var41;
                var27.isTryItOut = var12;
                var27 = var29.bind(var3)(var28, var27);
                var25[6] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var41 = _closure1_slot2;
                var27 = 48;
                var27 = var41[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var27.user = var38;
                if (!var12) {
                    _fun79742_ip = 2778;
                    continue _fun79742
                }
            case 2775:
                var39 = var40;
            case 2778:
                var27.pendingProfileEffect = var39;
                var27.displayProfile = var33;
                var27.isTryItOut = var12;
                var27 = var29.bind(var3)(var28, var27);
                var25[7] = var27;
                var29 = _closure1_slot13;
                var33 = _closure1_slot1;
                var39 = _closure1_slot2;
                var27 = 49;
                var27 = var39[var27];
                var28 = var33.bind(var3)(var27);
                var27 = {};
                var27.user = var38;
                var27.pendingNameplate = var34;
                var27 = var29.bind(var3)(var28, var27);
                var25[8] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot5;
                var27 = {};
                var32 = function arg0() {
                    _fun79747: for (var _fun79747_ip = 0;;) switch (_fun79747_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun79747_ip = 38;
                                continue _fun79747
                            }
                        case 9:
                            var0 = _closure2_slot3;
                            var1 = var0.current;
                            var0 = _closure1_slot11;
                            var0 = var0.GUILD_TAG;
                            var1[var0] = var2;
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var27.ref = var32;
                var34 = _closure1_slot13;
                var32 = 50;
                var32 = var39[var32];
                var33 = var33.bind(var3)(var32);
                var32 = {};
                var32.user = var38;
                var32.disabled = var36;
                var36 = {};
                var36.backgroundColor = var37;
                var32.tagStyle = var36;
                var32.pendingPrimaryGuildId = var35;
                var32 = var34.bind(var3)(var33, var32);
                var27.children = var32;
                var27 = var29.bind(var3)(var28, var27);
                var25[9] = var27;
                var26 = var26 != var31;
                if (!var26) {
                    _fun79742_ip = 2980;
                    continue _fun79742
                }
            case 2938:
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var32 = _closure1_slot2;
                var27 = 51;
                var27 = var32[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var27.legacyUsername = var31;
                var27.pendingLegacyUsernameDisabled = var30;
                var26 = var29.bind(var3)(var28, var27);
            case 2980:
                var25[10] = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[2] = var22;
                var19.children = var21;
                var19 = var6.bind(var3)(var20, var19);
                var18[1] = var19;
                var17.children = var18;
                var17 = var6.bind(var3)(var5, var17);
                var16[1] = var17;
                var14.children = var16;
                var14 = var6.bind(var3)(var15, var14);
                var13[1] = var14;
                var7.children = var13;
                var11 = var6.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var8 = !var8;
                if (!var8) {
                    _fun79742_ip = 3067;
                    continue _fun79742
                }
            case 3064:
                var8 = !var10;
            case 3067:
                if (!var8) {
                    _fun79742_ip = 3113;
                    continue _fun79742
                }
            case 3070:
                var11 = _closure1_slot13;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 52;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.UserProfilePremiumUpsellCard;
                var9 = {};
                var9.isTryItOut = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 3113:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5887, 6922, 660, 665, 10103, 33, 10104, 3070, 5690, 5543, 10105, 3239, 10106, 1307, 5550, 5549, 1234, 6925, 10116, 5363, 4858, 671, 9561, 3948, 6908, 5691, 10043, 6915, 5631, 5687, 6927, 6923, 6926, 566, 10117, 3902, 3120, 6932, 10118, 6934, 7330, 10123, 5685, 10124, 10128, 10130, 10131, 10133, 10139, 10142, 10143, 2]);