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
        _fun80527: for (var _fun80527_ip = 0;;) switch (_fun80527_ip) {
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
                    _fun80527_ip = 114;
                    continue _fun80527
                }
            case 82:
                var1 = null;
                if (!(var1 == var0)) {
                    _fun80527_ip = 111;
                    continue _fun80527
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
                    _fun80527_ip = 290;
                    continue _fun80527
                }
            case 284:
                var12 = var14.banner;
            case 290:
                var12 = var13 != var12;
                if (!var12) {
                    _fun80527_ip = 299;
                    continue _fun80527
                }
            case 297:
                var11 = undefined;
            case 299:
                var4.bannerSafeArea = var11;
                var4.showProfilePreviewButton = var10;
                var9 = function() {
                    _fun80528: for (var _fun80528_ip = 0;;) switch (_fun80528_ip) {
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
                                _fun80528_ip = 122;
                                continue _fun80528
                            }
                        case 114:
                            var7 = var8.setPendingBanner;
                            _fun80528_ip = 128;
                            continue _fun80528;
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
                                _fun80528_ip = 188;
                                continue _fun80528
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
        _fun80529: for (var _fun80529_ip = 0;;) switch (_fun80529_ip) {
            case 0:
                var0 = arg0;
                var38 = var0.currentUser;
                var48 = var0.autoFocusElement;
                var12 = var0.isTryItOut;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun80529_ip = 31;
                    continue _fun80529
                }
            case 29:
                var12 = false;
            case 31:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 19;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var66 = var0.bind(var3)();
                var0 = 20;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var63 = var0.bind(var3)();
                var0 = 21;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var10 = var0.bind(var3)();
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var28 = null;
                var13 = var0.bind(var1)(var28);
                var0 = var1.useRef;
                var56 = var0.bind(var1)(var28);
                var0 = var1.useRef;
                var59 = var0.bind(var1)(var28);
                var0 = var1.useRef;
                var53 = var0.bind(var1)(var28);
                var0 = 22;
                var0 = var7[var0];
                var1 = var4.bind(var3)(var0);
                var0 = {};
                var46 = true;
                var0.includeKeyboardHeight = var46;
                var0 = var1.bind(var3)(var0);
                var5 = var0.insets;
                var14 = 23;
                var0 = var7[var14];
                var0 = var4.bind(var3)(var0);
                var0 = var0.spacing;
                var11 = var0.PX_16;
                var0 = 24;
                var0 = var7[var0];
                var1 = var4.bind(var3)(var0);
                var0 = {};
                var0.insets = var5;
                var6 = {};
                var6.ref = var56;
                var2 = {};
                var15 = 'toRef';
                var2.type = var15;
                var2.ref = var59;
                var2.extraOffset = var11;
                var6.offset = var2;
                var2 = new Array(3);
                var2[0] = var6;
                var6 = {};
                var6.ref = var59;
                var8 = {};
                var8.type = var15;
                var8.ref = var53;
                var8.extraOffset = var11;
                var6.offset = var8;
                var2[1] = var6;
                var6 = {};
                var6.ref = var53;
                var8 = {};
                var11 = 'toValue';
                var8.type = var11;
                var11 = var7[var14];
                var11 = var4.bind(var3)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_64;
                var8.value = var11;
                var6.offset = var8;
                var2[2] = var6;
                var0.inputs = var2;
                var0.scrollViewRef = var13;
                var0 = var1.bind(var3)(var0);
                var47 = var0.onFocus;
                var1 = _closure1_slot0;
                var0 = 25;
                var0 = var7[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.useIsDisplayNameStylesMobileEnabled;
                var0 = {};
                var8 = 'UserProfileEditForm';
                var0.location = var8;
                var30 = var2.bind(var6)(var0);
                var0 = 26;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.errors;
                var36 = var0.isSubmitting;
                var11 = var0.pendingAvatar;
                var41 = var0.pendingAvatarDecoration;
                var71 = var0.pendingBanner;
                var39 = var0.pendingProfileEffect;
                var34 = var0.pendingNameplate;
                var43 = var0.pendingThemeColors;
                var70 = var0.pendingAccentColor;
                var20 = var0.tryItOutBanner;
                var42 = var0.tryItOutAvatarDecoration;
                var40 = var0.tryItOutProfileEffect;
                var44 = var0.tryItOutThemeColors;
                var52 = var0.tryItOutDisplayNameStyles;
                var61 = var0.pendingGlobalName;
                var55 = var0.pendingPronouns;
                var50 = var0.pendingBio;
                var6 = var0.pendingLegacyUsernameDisabled;
                var35 = var0.pendingPrimaryGuildId;
                var29 = var0.pendingDisplayNameStyles;
                var0 = 27;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = 28;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useGuildAutomodProfileQuarantineErrors;
                var1 = var0.bind(var1)();
                var0 = 29;
                var0 = var7[var0];
                var4 = var4.bind(var3)(var0);
                var7 = var38.id;
                var8 = var28 != var7;
                var31 = '';
                var0 = var31;
                if (!var8) {
                    _fun80529_ip = 616;
                    continue _fun80529
                }
            case 613:
                var0 = var7;
            case 616:
                var33 = var4.bind(var3)(var0);
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 30;
                var0 = var7[var0];
                var8 = var4.bind(var3)(var0);
                var0 = var8.useCustomStatusActivity;
                var68 = var0.bind(var8)();
                var0 = 31;
                var0 = var7[var0];
                var8 = var4.bind(var3)(var0);
                var4 = var8.getPendingAvatarSrc;
                var0 = {};
                var15 = var38.id;
                var0.userId = var15;
                var0.image = var11;
                var45 = var4.bind(var8)(var0);
                var4 = _closure1_slot1;
                var0 = 32;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var64 = var0.bind(var3)(var33, var6);
                var0 = 9;
                var0 = var7[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.canUsePremiumProfileCustomization;
                var8 = var0.bind(var4)(var38);
                var0 = var28 == var33;
                var26 = undefined;
                if (var0) {
                    _fun80529_ip = 756;
                    continue _fun80529
                }
            case 744:
                var0 = var33.getLegacyUsername;
                var26 = var0.bind(var33)();
            case 756:
                var0 = var38.globalName;
                var4 = var28 != var0;
                var60 = var31;
                if (!var4) {
                    _fun80529_ip = 775;
                    continue _fun80529
                }
            case 772:
                var60 = var0;
            case 775:
                var4 = var28 == var33;
                var0 = undefined;
                if (var4) {
                    _fun80529_ip = 790;
                    continue _fun80529
                }
            case 784:
                var0 = var33.pronouns;
            case 790:
                var4 = var28 != var0;
                var54 = var31;
                if (!var4) {
                    _fun80529_ip = 803;
                    continue _fun80529
                }
            case 800:
                var54 = var0;
            case 803:
                _closure2_slot1 = var54;
                var4 = var28 == var33;
                var0 = undefined;
                if (var4) {
                    _fun80529_ip = 822;
                    continue _fun80529
                }
            case 816:
                var0 = var33.bio;
            case 822:
                var4 = var28 != var0;
                var49 = var31;
                if (!var4) {
                    _fun80529_ip = 835;
                    continue _fun80529
                }
            case 832:
                var49 = var0;
            case 835:
                _closure2_slot2 = var49;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 33;
                var0 = var7[var0];
                var4 = var4.bind(var3)(var0);
                var0 = {};
                var0.user = var38;
                var0.displayProfile = var33;
                var7 = var43;
                if (!var12) {
                    _fun80529_ip = 879;
                    continue _fun80529
                }
            case 876:
                var7 = var44;
            case 879:
                var0.pendingThemeColors = var7;
                var0.isPreview = var12;
                var0 = var4.bind(var3)(var0);
                var4 = var0.theme;
                var67 = var0.primaryColor;
                var21 = var0.secondaryColor;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 34;
                var0 = var11[var0];
                var11 = var7.bind(var3)(var0);
                var7 = var11.useUserProfileColors;
                var0 = {};
                var0.theme = var4;
                var0.primaryColor = var67;
                var0.secondaryColor = var21;
                var0 = var7.bind(var11)(var0);
                var22 = var0.gradientFallbackBackground;
                var17 = var0.gradientSecondaryBackground;
                var37 = var0.containerBackground;
                var0 = var0.avatarBackground;
                var7 = var5.bottom;
                var69 = 0;
                var5 = 0;
                if (var8) {
                    _fun80529_ip = 1005;
                    continue _fun80529
                }
            case 996:
                var5 = 0;
                if (var10) {
                    _fun80529_ip = 1005;
                    continue _fun80529
                }
            case 1001:
                var5 = _closure1_slot7;
            case 1005:
                var7 = var7 + var5;
                var11 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var14];
                var5 = var11.bind(var3)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_16;
                var24 = var7 + var5;
                var73 = {};
                var73.backgroundColor = var0;
                var0 = var28 == var2;
                var62 = undefined;
                if (var0) {
                    _fun80529_ip = 1073;
                    continue _fun80529
                }
            case 1055:
                var0 = var2.username;
                var5 = var28 == var0;
                var62 = undefined;
                if (var5) {
                    _fun80529_ip = 1073;
                    continue _fun80529
                }
            case 1069:
                var62 = var0[var69];
            case 1073:
                if (!(var28 == var62)) {
                    _fun80529_ip = 1099;
                    continue _fun80529
                }
            case 1077:
                var5 = var2.global_name;
                var7 = var28 == var5;
                var0 = undefined;
                if (var7) {
                    _fun80529_ip = 1096;
                    continue _fun80529
                }
            case 1092:
                var0 = var5[var69];
            case 1096:
                var62 = var0;
            case 1099:
                if (!(var28 == var62)) {
                    _fun80529_ip = 1134;
                    continue _fun80529
                }
            case 1103:
                var5 = var28 == var1;
                var0 = undefined;
                if (var5) {
                    _fun80529_ip = 1131;
                    continue _fun80529
                }
            case 1112:
                var1 = var1.nick;
                var5 = var28 == var1;
                var0 = undefined;
                if (var5) {
                    _fun80529_ip = 1131;
                    continue _fun80529
                }
            case 1127:
                var0 = var1[var69];
            case 1131:
                var62 = var0;
            case 1134:
                var0 = var2.pronouns;
                var1 = var28 == var0;
                var57 = undefined;
                if (var1) {
                    _fun80529_ip = 1153;
                    continue _fun80529
                }
            case 1149:
                var57 = var0[var69];
            case 1153:
                var0 = var2.bio;
                var1 = var28 == var0;
                var51 = undefined;
                if (var1) {
                    _fun80529_ip = 1172;
                    continue _fun80529
                }
            case 1168:
                var51 = var0[var69];
            case 1172:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var2);
                var0 = var0.length;
                var0 = var0 > var69;
                var25 = null;
                if (!var0) {
                    _fun80529_ip = 1270;
                    continue _fun80529
                }
            case 1204:
                var0 = var28 == var51;
                var25 = null;
                if (!var0) {
                    _fun80529_ip = 1270;
                    continue _fun80529
                }
            case 1213:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var1 = var7[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["84MExs"];
                var25 = var1.bind(var2)(var0);
            case 1270:
                var1 = _closure1_slot0;
                var65 = _closure1_slot2;
                var0 = 35;
                var0 = var65[var0];
                var7 = var1.bind(var3)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var32
                    var1 = _closure1_slot6;
                    var0 = var1.getScrollPosition;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var7)(var2, var0);
                var23 = _closure1_slot1;
                var0 = 36;
                var0 = var65[var0];
                var0 = var23.bind(var3)(var0);
                var0 = var0.bind(var3)(var13, var2);
                _closure2_slot3 = var0;
                var5 = _closure1_slot13;
                var0 = 37;
                var0 = var65[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.Text;
                var0 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-feedback-critical'
                };
                var0.children = var25;
                var58 = var5.bind(var3)(var2, var0);
                var5 = _closure1_slot13;
                var0 = 38;
                var0 = var65[var0];
                var2 = var23.bind(var3)(var0);
                var0 = {};
                var0.legacyUsername = var26;
                var0.pendingLegacyUsernameDisabled = var6;
                var27 = var5.bind(var3)(var2, var0);
                var2 = _closure1_slot13;
                var0 = 39;
                var0 = var65[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var4;
                var0.primaryColor = var67;
                var0.secondaryColor = var21;
                var6 = _closure1_slot14;
                var5 = _closure1_slot5;
                var4 = {};
                var11 = var63.container;
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
                var15 = var63.bounceOffset;
                var13.style = var15;
                var14 = var14.bind(var3)(var5, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var19 = 40;
                var14 = var65[var19];
                var15 = var23.bind(var3)(var14);
                var14 = {};
                var14.fallbackBackground = var22;
                var14.primaryColor = var67;
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
                var16.pendingBanner = var71;
                var16.pendingAccentColor = var70;
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
                var71 = var66.avatarBackground;
                var70 = new Array(4);
                var70[0] = var71;
                var71 = var66.avatarPosition;
                var70[1] = var71;
                var71 = var63.avatarContainer;
                var70[2] = var71;
                var70[3] = var73;
                var18.style = var70;
                var72 = _closure1_slot13;
                var70 = 41;
                var70 = var65[var70];
                var71 = var23.bind(var3)(var70);
                var70 = {};
                var70.user = var38;
                var70.disabled = var36;
                var74 = var28 != var12;
                var70.disableStatus = var74;
                var70.statusStyle = var73;
                var70.isTryItOut = var12;
                var73 = _closure1_slot12;
                var73 = var73.AVATAR;
                var73 = var48 === var73;
                var70.autoStartEditFlow = var73;
                var70 = var72.bind(var3)(var71, var70);
                var18.children = var70;
                var20 = var20.bind(var3)(var5, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var19 = var65[var19];
                var20 = var23.bind(var3)(var19);
                var19 = {};
                var19.fallbackBackground = var22;
                var19.primaryColor = var67;
                var19.secondaryColor = var21;
                var22 = var66.profileContentWrapper;
                var21 = new Array(3);
                var21[0] = var22;
                var22 = var66.profileContent;
                var21[1] = var22;
                var22 = {};
                var22.paddingTop = var69;
                var22.paddingBottom = var24;
                var21[2] = var22;
                var19.containerStyle = var21;
                var24 = _closure1_slot13;
                var21 = 42;
                var21 = var65[var21];
                var22 = var23.bind(var3)(var21);
                var21 = {};
                var21.customStatusActivity = var68;
                var67 = var28 != var67;
                var21.hasCustomProfileTheme = var67;
                var67 = var66.customStatusBubble;
                var21.style = var67;
                var66 = var66.emojiOnlyCustomStatusBubble;
                var21.emojiOnlyStyle = var66;
                var21.editEnabled = var46;
                var22 = var24.bind(var3)(var22, var21);
                var21 = new Array(3);
                var21[0] = var22;
                var24 = _closure1_slot13;
                var22 = 43;
                var22 = var65[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var22.user = var38;
                var22.displayName = var61;
                var22.badges = var64;
                var64 = var54;
                if (!(var28 != var55)) {
                    _fun80529_ip = 1970;
                    continue _fun80529
                }
            case 1967:
                var64 = var55;
            case 1970:
                var22.pronouns = var64;
                var22.badgeContainerBackground = var37;
                var64 = 'header';
                var22.displayNameAccessibilityRole = var64;
                if (!var12) {
                    _fun80529_ip = 1995;
                    continue _fun80529
                }
            case 1992:
                var29 = var52;
            case 1995:
                var22.pendingDisplayNameStyles = var29;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                _closure2_slot0 = var38;
                var24 = _closure1_slot14;
                var23 = _closure1_slot5;
                var22 = {};
                var52 = var63.formContainer;
                var29 = new Array(2);
                var29[0] = var52;
                var52 = {};
                var52.backgroundColor = var37;
                var29[1] = var52;
                var22.style = var29;
                var52 = var28 != var25;
                var29 = null;
                if (!var52) {
                    _fun80529_ip = 2097;
                    continue _fun80529
                }
            case 2061:
                var29 = null;
                if (!(var31 !== var25)) {
                    _fun80529_ip = 2097;
                    continue _fun80529
                }
            case 2067:
                var52 = _closure1_slot13;
                var31 = _closure1_slot5;
                var25 = {};
                var63 = var63.errorContainer;
                var25.style = var63;
                var25.children = var58;
                var29 = var52.bind(var3)(var31, var25);
            case 2097:
                var25 = new Array(11);
                var25[0] = var29;
                var58 = _closure1_slot13;
                var52 = _closure1_slot1;
                var63 = _closure1_slot2;
                var29 = 44;
                var31 = var63[var29];
                var52 = var52.bind(var3)(var31);
                var31 = {};
                var31.scrollTargetRef = var56;
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
                var31.label = var63;
                var31.errorMessage = var62;
                if (!(var28 != var61)) {
                    _fun80529_ip = 2203;
                    continue _fun80529
                }
            case 2200:
                var60 = var61;
            case 2203:
                var31.value = var60;
                var31.onFocus = var47;
                var60 = function arg0() {
                    _fun80531: for (var _fun80531_ip = 0;;) switch (_fun80531_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = '';
                            if (!(var1 === var0)) {
                                _fun80531_ip = 35;
                                continue _fun80531
                            }
                        case 11:
                            var1 = _closure2_slot0;
                            var2 = var1.globalName;
                            var1 = null;
                            var1 = var1 == var2;
                            var4 = undefined;
                            if (var1) {
                                _fun80531_ip = 38;
                                continue _fun80531
                            }
                        case 35:
                            var4 = var0;
                        case 38:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 45;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setPendingGlobalName;
                            var1 = _closure2_slot0;
                            var5 = var1.globalName;
                            var1 = undefined;
                            if (!(var4 !== var5)) {
                                _fun80531_ip = 91;
                                continue _fun80531
                            }
                        case 88:
                            var1 = var4;
                        case 91:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var31.onChange = var60;
                var60 = var38.toString;
                var60 = var60.bind(var38)();
                var31.placeholder = var60;
                var60 = _closure1_slot9;
                var31.maxLength = var60;
                var31.disabled = var36;
                var31 = var58.bind(var3)(var52, var31);
                var25[1] = var31;
                if (!var30) {
                    _fun80529_ip = 2276;
                    continue _fun80529
                }
            case 2264:
                var31 = var8;
                if (var31) {
                    _fun80529_ip = 2273;
                    continue _fun80529
                }
            case 2270:
                var31 = var12;
            case 2273:
                var30 = var31;
            case 2276:
                if (!var30) {
                    _fun80529_ip = 2320;
                    continue _fun80529
                }
            case 2279:
                var58 = _closure1_slot13;
                var52 = _closure1_slot1;
                var60 = _closure1_slot2;
                var31 = 46;
                var31 = var60[var31];
                var52 = var52.bind(var3)(var31);
                var31 = {};
                var31.user = var38;
                var31.isTryItOut = var12;
                var30 = var58.bind(var3)(var52, var31);
            case 2320:
                var25[2] = var30;
                var52 = _closure1_slot13;
                var31 = _closure1_slot1;
                var58 = _closure1_slot2;
                var30 = var58[var29];
                var31 = var31.bind(var3)(var30);
                var30 = {};
                var30.scrollTargetRef = var59;
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
                var30.label = var58;
                var30.errorMessage = var57;
                if (!(var28 != var55)) {
                    _fun80529_ip = 2416;
                    continue _fun80529
                }
            case 2413:
                var54 = var55;
            case 2416:
                var30.value = var54;
                var30.onFocus = var47;
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
                var30.onChange = var54;
                var54 = _closure1_slot10;
                var30.maxLength = var54;
                var30.disabled = var36;
                var30 = var52.bind(var3)(var31, var30);
                var25[3] = var30;
                var31 = _closure1_slot13;
                var30 = _closure1_slot1;
                var52 = _closure1_slot2;
                var29 = var52[var29];
                var30 = var30.bind(var3)(var29);
                var29 = {};
                var29.scrollTargetRef = var53;
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
                var29.label = var52;
                var29.errorMessage = var51;
                if (!(var28 != var50)) {
                    _fun80529_ip = 2552;
                    continue _fun80529
                }
            case 2549:
                var49 = var50;
            case 2552:
                var29.value = var49;
                var29.onFocus = var47;
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
                var29.onChange = var47;
                var47 = _closure1_slot12;
                var47 = var47.BIO;
                var47 = var48 === var47;
                var29.autoFocus = var47;
                var47 = _closure1_slot8;
                var29.maxLength = var47;
                var47 = 5;
                var29.numberOfLines = var47;
                var29.multiline = var46;
                var29.disabled = var36;
                var29 = var31.bind(var3)(var30, var29);
                var25[4] = var29;
                var31 = _closure1_slot13;
                var30 = _closure1_slot1;
                var46 = _closure1_slot2;
                var29 = 47;
                var29 = var46[var29];
                var30 = var30.bind(var3)(var29);
                var29 = {};
                var29.user = var38;
                var47 = _closure1_slot0;
                var48 = _closure1_slot2;
                var46 = 16;
                var46 = var48[var46];
                var47 = var47.bind(var3)(var46);
                if (var12) {
                    _fun80529_ip = 2689;
                    continue _fun80529
                }
            case 2681:
                var46 = var47.setPendingThemeColors;
                _fun80529_ip = 2695;
                continue _fun80529;
            case 2689:
                var46 = var47.setTryItOutThemeColors;
            case 2695:
                var29.onProfileThemeColorsChanged = var46;
                var29.pendingAvatarSrc = var45;
                if (!var12) {
                    _fun80529_ip = 2711;
                    continue _fun80529
                }
            case 2708:
                var43 = var44;
            case 2711:
                var29.pendingThemeColors = var43;
                var29.isTryItOut = var12;
                var29 = var31.bind(var3)(var30, var29);
                var25[5] = var29;
                var31 = _closure1_slot13;
                var30 = _closure1_slot1;
                var43 = _closure1_slot2;
                var29 = 48;
                var29 = var43[var29];
                var30 = var30.bind(var3)(var29);
                var29 = {};
                var29.user = var38;
                if (!var12) {
                    _fun80529_ip = 2767;
                    continue _fun80529
                }
            case 2764:
                var41 = var42;
            case 2767:
                var29.pendingAvatarDecoration = var41;
                var29.isTryItOut = var12;
                var29 = var31.bind(var3)(var30, var29);
                var25[6] = var29;
                var31 = _closure1_slot13;
                var30 = _closure1_slot1;
                var41 = _closure1_slot2;
                var29 = 49;
                var29 = var41[var29];
                var30 = var30.bind(var3)(var29);
                var29 = {};
                var29.user = var38;
                if (!var12) {
                    _fun80529_ip = 2823;
                    continue _fun80529
                }
            case 2820:
                var39 = var40;
            case 2823:
                var29.pendingProfileEffect = var39;
                var29.displayProfile = var33;
                var29.isTryItOut = var12;
                var29 = var31.bind(var3)(var30, var29);
                var25[7] = var29;
                var31 = _closure1_slot13;
                var33 = _closure1_slot1;
                var39 = _closure1_slot2;
                var29 = 50;
                var29 = var39[var29];
                var30 = var33.bind(var3)(var29);
                var29 = {};
                var29.user = var38;
                var29.pendingNameplate = var34;
                var29 = var31.bind(var3)(var30, var29);
                var25[8] = var29;
                var31 = _closure1_slot13;
                var30 = _closure1_slot5;
                var29 = {};
                var32 = function arg0() {
                    _fun80534: for (var _fun80534_ip = 0;;) switch (_fun80534_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun80534_ip = 38;
                                continue _fun80534
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
                var29.ref = var32;
                var34 = _closure1_slot13;
                var32 = 51;
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
                var29.children = var32;
                var29 = var31.bind(var3)(var30, var29);
                var25[9] = var29;
                var26 = var28 != var26;
                if (!var26) {
                    _fun80529_ip = 2986;
                    continue _fun80529
                }
            case 2983:
                var26 = var27;
            case 2986:
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
                    _fun80529_ip = 3073;
                    continue _fun80529
                }
            case 3070:
                var8 = !var10;
            case 3073:
                if (!var8) {
                    _fun80529_ip = 3119;
                    continue _fun80529
                }
            case 3076:
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
            case 3119:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6003, 7058, 660, 665, 10171, 33, 10172, 3111, 5785, 5639, 10137, 3279, 10138, 1307, 5645, 5644, 1234, 7061, 10148, 5462, 4871, 671, 8677, 3982, 7044, 5786, 10071, 7051, 5726, 5782, 7063, 7059, 7062, 566, 10173, 3938, 10174, 3161, 7068, 10175, 7070, 8348, 10154, 5780, 10155, 10159, 10161, 10162, 10163, 10178, 10181, 2]);