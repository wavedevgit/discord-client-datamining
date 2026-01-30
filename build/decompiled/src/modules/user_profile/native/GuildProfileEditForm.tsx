// modules/user_profile/native/GuildProfileEditForm.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: EditGuildProfileBanner, environment: var1
        _fun80674: for (var _fun80674_ip = 0;;) switch (_fun80674_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.user;
                var _closure2_slot0 = var16;
                var15 = var0.displayProfile;
                var12 = var0.guildMember;
                var1 = var0.guildMemberProfile;
                var _closure2_slot1 = var1;
                var13 = var0.pendingAvatarSrc;
                var14 = var0.pendingBanner;
                var _closure2_slot2 = var14;
                var11 = var0.pendingThemeColors;
                var7 = var0.disabled;
                var5 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 9;
                var0 = var17[var0];
                var3 = undefined;
                var1 = var5.bind(var3)(var0);
                var0 = var1.canUsePremiumGuildMemberProfile;
                var10 = var0.bind(var1)(var16);
                var _closure2_slot3 = var10;
                var0 = 10;
                var1 = var17[var0];
                var2 = var5.bind(var3)(var1);
                var1 = 11;
                var1 = var17[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.EDIT_BANNER;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var _closure2_slot4 = var4;
                var2 = _closure1_slot18;
                var1 = _closure1_slot0;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot18;
                var4 = 12;
                var4 = var17[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.user = var16;
                var4.displayProfile = var15;
                var4.pendingBanner = var14;
                var4.pendingAvatarSrc = var13;
                var4.pendingThemeColors = var11;
                var11 = false;
                var4.showProfilePreviewButton = var11;
                if (!var10) {
                    _fun80674_ip = 235;
                    continue _fun80674
                }
            case 229:
                var11 = null;
                var10 = var11 != var12;
            case 235:
                var4.showEditButton = var10;
                var9 = function() { // Original name: onPressEdit, environment: var9
                    _fun80675: for (var _fun80675_ip = 0;;) switch (_fun80675_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            if (var1) {
                                _fun80675_ip = 134;
                                continue _fun80675
                            }
                        case 21:
                            var1 = 19;
                            var3 = var8[var1];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var3);
                            var3 = var4.handleShowUpsellAlert;
                            var1 = {};
                            var5 = _closure1_slot16;
                            var5 = var5.PREMIUM_GUILD_PROFILE;
                            var1.initialUpsellKey = var5;
                            var5 = {};
                            var6 = _closure1_slot12;
                            var6 = var6.PREMIUM_GUILD_MEMBER_PROFILE;
                            var5.section = var6;
                            var6 = _closure1_slot11;
                            var6 = var6.EDIT_GUILD_PROFILE_BANNER;
                            var5.object = var6;
                            var1.analyticsLocation = var5;
                            var5 = _closure2_slot4;
                            var1.analyticsLocations = var5;
                            var5 = {};
                            var6 = _closure1_slot17;
                            var6 = var6.PREMIUM_GUILD_IDENTITY_MODAL;
                            var5.type = var6;
                            var1.analyticsProperties = var5;
                            var1 = var3.bind(var4)(var1);
                            _fun80675_ip = 363;
                            continue _fun80675;
                        case 134:
                            var1 = 13;
                            var1 = var8[var1];
                            var6 = undefined;
                            var4 = var2.bind(var6)(var1);
                            var3 = var4.openLazy;
                            var7 = _closure1_slot0;
                            var1 = 15;
                            var1 = var8[var1];
                            var5 = var7.bind(var6)(var1);
                            var1 = 14;
                            var2 = var8[var1];
                            var1 = var8.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.user = var5;
                            var5 = _closure2_slot4;
                            var1.analyticsLocations = var5;
                            var5 = 16;
                            var5 = var8[var5];
                            var9 = var7.bind(var6)(var5);
                            var8 = var9.showRemoveBanner;
                            var7 = _closure2_slot2;
                            var11 = _closure2_slot1;
                            var5 = null;
                            var11 = var5 == var11;
                            var5 = undefined;
                            if (var11) {
                                _fun80675_ip = 254;
                                continue _fun80675
                            }
                        case 244:
                            var10 = _closure2_slot1;
                            var5 = var10.banner;
                        case 254:
                            var5 = var8.bind(var9)(var7, var5);
                            var1.showRemoveBanner = var5;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var8 = var7[var0];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var0 = var7[var0];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0.jHlJNS;
                            var0 = var8.bind(var9)(var0);
                            var1.removeText = var0;
                            var0 = 18;
                            var0 = var7[var0];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.setPendingBanner;
                            var1.onBannerChange = var0;
                            var0 = 'Change Banner';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 363:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.onPressEdit = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["95hPAe"];
                var8 = var9.bind(var10)(var8);
                var4.editButtonAccessibilityLabel = var8;
                var4.editDisabled = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = ['nick', 'bio', 'guild_tag'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjects;
    var _closure1_slot11 = var6;
    var7 = var3.AnalyticsPages;
    var6 = var3.AnalyticsSections;
    var _closure1_slot12 = var6;
    var8 = var3.BIO_MAX_LENGTH;
    var _closure1_slot13 = var8;
    var8 = var3.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot14 = var8;
    var8 = var3.PRONOUNS_MAX_LENGTH;
    var _closure1_slot15 = var8;
    var3 = var3.UpsellTypes;
    var _closure1_slot16 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot17 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot18 = var8;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = var7.USER_SETTINGS;
    var3.page = var7;
    var6 = var6.SETTINGS_CUSTOMIZE_PROFILE;
    var3.section = var6;
    var _closure1_slot20 = var3;
    var3 = 54;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildProfileEditForm, environment: var1
        _fun80676: for (var _fun80676_ip = 0;;) switch (_fun80676_ip) {
            case 0:
                var0 = arg0;
                var36 = var0.currentUser;
                var _closure2_slot0 = var36;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var64 = 20;
                var0 = var6[var64];
                var0 = var5.bind(var4)(var0);
                var67 = var0.bind(var4)();
                var0 = 21;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var15 = var0.bind(var4)();
                var0 = 22;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var1 = var0.bind(var4)();
                var3 = _closure1_slot5;
                var2 = var3.useRef;
                var0 = null;
                var11 = var2.bind(var3)(var0);
                var2 = var3.useRef;
                var20 = var2.bind(var3)(var0);
                var2 = var3.useRef;
                var56 = var2.bind(var3)(var0);
                var2 = var3.useRef;
                var51 = var2.bind(var3)(var0);
                var2 = 23;
                var2 = var6[var2];
                var3 = var5.bind(var4)(var2);
                var2 = {};
                var45 = true;
                var2.includeKeyboardHeight = var45;
                var2 = var3.bind(var4)(var2);
                var18 = var2.insets;
                var19 = 24;
                var2 = var6[var19];
                var2 = var5.bind(var4)(var2);
                var2 = var2.spacing;
                var10 = var2.PX_16;
                var2 = 25;
                var2 = var6[var2];
                var3 = var5.bind(var4)(var2);
                var2 = {};
                var2.insets = var18;
                var8 = {};
                var8.ref = var20;
                var7 = {};
                var12 = 'toRef';
                var7.type = var12;
                var7.ref = var56;
                var7.extraOffset = var10;
                var8.offset = var7;
                var7 = new Array(3);
                var7[0] = var8;
                var8 = {};
                var8.ref = var56;
                var9 = {};
                var9.type = var12;
                var9.ref = var51;
                var9.extraOffset = var10;
                var8.offset = var9;
                var7[1] = var8;
                var8 = {};
                var8.ref = var51;
                var9 = {};
                var10 = 'toValue';
                var9.type = var10;
                var10 = var6[var19];
                var10 = var5.bind(var4)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_64;
                var9.value = var10;
                var8.offset = var9;
                var7[2] = var8;
                var2.inputs = var7;
                var2.scrollViewRef = var11;
                var2 = var3.bind(var4)(var2);
                var46 = var2.onFocus;
                var7 = _closure1_slot0;
                var2 = 26;
                var2 = var6[var2];
                var8 = var7.bind(var4)(var2);
                var3 = var8.useIsDisplayNameStylesMobileEnabled;
                var2 = {};
                var9 = 'GuildProfileEditForm';
                var2.location = var9;
                var31 = var3.bind(var8)(var2);
                var2 = 27;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var3 = var2.bind(var4)();
                var34 = var3.guild;
                var _closure2_slot1 = var34;
                var2 = var3.errors;
                var38 = var3.isDisabled;
                var59 = var3.pendingNickname;
                var10 = var3.pendingAvatar;
                var24 = var3.pendingBanner;
                var43 = var3.pendingThemeColors;
                var53 = var3.pendingPronouns;
                var48 = var3.pendingBio;
                var41 = var3.pendingAvatarDecoration;
                var40 = var3.pendingProfileEffect;
                var35 = var3.pendingNameplate;
                var32 = var3.pendingDisplayNameStyles;
                var3 = 28;
                var8 = var6[var3];
                var16 = var7.bind(var4)(var8);
                var12 = var16.useStateFromStores;
                var8 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var14
                    _fun80677: for (var _fun80677_ip = 0;;) switch (_fun80677_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun80677_ip = 53;
                                continue _fun80677
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var66 = var12.bind(var16)(var9, var8);
                var _closure2_slot2 = var66;
                var3 = var6[var3];
                var9 = var7.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var14
                    _fun80678: for (var _fun80678_ip = 0;;) switch (_fun80678_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var6 = null;
                            var1 = var6 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun80678_ip = 68;
                                continue _fun80678
                            }
                        case 18:
                            var4 = _closure1_slot9;
                            var3 = var4.getGuildMemberProfile;
                            var1 = _closure2_slot0;
                            var2 = var1.id;
                            var1 = _closure2_slot1;
                            var6 = var6 == var1;
                            var1 = undefined;
                            if (var6) {
                                _fun80678_ip = 62;
                                continue _fun80678
                            }
                        case 53:
                            var5 = _closure2_slot1;
                            var1 = var5.id;
                        case 62:
                            var0 = var3.bind(var4)(var2, var1);
                        case 68:
                            return var0;
                    }
                };
                var25 = var8.bind(var9)(var7, var3);
                var _closure2_slot3 = var25;
                var3 = 29;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var36.id;
                var7 = var0 == var34;
                var3 = undefined;
                if (var7) {
                    _fun80676_ip = 603;
                    continue _fun80676
                }
            case 598:
                var3 = var34.id;
            case 603:
                var39 = var6.bind(var4)(var5, var3);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 30;
                var3 = var6[var3];
                var7 = var5.bind(var4)(var3);
                var3 = var7.useCustomStatusActivity;
                var69 = var3.bind(var7)();
                var7 = _closure1_slot1;
                var3 = 31;
                var3 = var6[var3];
                var3 = var7.bind(var4)(var3);
                var62 = var3.bind(var4)(var39);
                var3 = 32;
                var3 = var6[var3];
                var9 = var5.bind(var4)(var3);
                var8 = var9.getPendingAvatarSrc;
                var3 = {};
                var12 = var36.id;
                var3.userId = var12;
                var3.image = var10;
                var44 = var8.bind(var9)(var3);
                var3 = 33;
                var3 = var6[var3];
                var8 = var5.bind(var4)(var3);
                var3 = var8.useGuildActionSheetPermissions;
                var3 = var3.bind(var8)(var34);
                var57 = var3.canEditNickname;
                var3 = 9;
                var3 = var6[var3];
                var7 = var7.bind(var4)(var3);
                var3 = var7.canUsePremiumGuildMemberProfile;
                var33 = var3.bind(var7)(var36);
                var3 = 34;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.canResetThemeColors;
                var7 = var0 == var25;
                var3 = undefined;
                if (var7) {
                    _fun80676_ip = 784;
                    continue _fun80676
                }
            case 778:
                var3 = var25.themeColors;
            case 784:
                var42 = var5.bind(var6)(var43, var3);
                var9 = !var33;
                if (!var9) {
                    _fun80676_ip = 799;
                    continue _fun80676
                }
            case 796:
                var9 = !var1;
            case 799:
                var3 = var0 == var66;
                var1 = undefined;
                if (var3) {
                    _fun80676_ip = 814;
                    continue _fun80676
                }
            case 808:
                var1 = var66.nick;
            case 814:
                var3 = var0 != var1;
                var37 = '';
                var58 = var37;
                if (!var3) {
                    _fun80676_ip = 831;
                    continue _fun80676
                }
            case 828:
                var58 = var1;
            case 831:
                var3 = var0 == var39;
                var1 = undefined;
                if (var3) {
                    _fun80676_ip = 846;
                    continue _fun80676
                }
            case 840:
                var1 = var39.pronouns;
            case 846:
                var3 = var0 != var1;
                var52 = var37;
                if (!var3) {
                    _fun80676_ip = 859;
                    continue _fun80676
                }
            case 856:
                var52 = var1;
            case 859:
                _closure2_slot4 = var52;
                var3 = var0 == var39;
                var1 = undefined;
                if (var3) {
                    _fun80676_ip = 878;
                    continue _fun80676
                }
            case 872:
                var1 = var39.bio;
            case 878:
                var3 = var0 != var1;
                var47 = var37;
                if (!var3) {
                    _fun80676_ip = 891;
                    continue _fun80676
                }
            case 888:
                var47 = var1;
            case 891:
                _closure2_slot5 = var47;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var5 = var3.bind(var4)(var1);
                var1 = 11;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var7 = var1.USER_SETTINGS;
                var1 = new Array(1);
                var1[0] = var7;
                var1 = var5.bind(var4)(var1);
                var1 = var1.analyticsLocations;
                _closure2_slot6 = var1;
                var1 = 35;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = {};
                var1.user = var36;
                var1.displayProfile = var39;
                var1.pendingThemeColors = var43;
                var1 = var3.bind(var4)(var1);
                var5 = var1.theme;
                var68 = var1.primaryColor;
                var26 = var1.secondaryColor;
                var3 = _closure1_slot0;
                var1 = 36;
                var1 = var6[var1];
                var6 = var3.bind(var4)(var1);
                var3 = var6.useUserProfileColors;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var68;
                var1.secondaryColor = var26;
                var1 = var3.bind(var6)(var1);
                var27 = var1.gradientFallbackBackground;
                var21 = var1.gradientSecondaryBackground;
                var65 = var1.containerBackground;
                var1 = var1.avatarBackground;
                var6 = var18.bottom;
                var61 = 0;
                var3 = 0;
                if (!var9) {
                    _fun80676_ip = 1091;
                    continue _fun80676
                }
            case 1087:
                var3 = _closure1_slot10;
            case 1091:
                var6 = var6 + var3;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var19];
                var3 = var7.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_16;
                var29 = var6 + var3;
                var70 = {};
                var70.backgroundColor = var1;
                var6 = var2.nick;
                var3 = var2.bio;
                var1 = var2.guild_tag;
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var63 = var8.bind(var4)(var2, var7);
                var7 = var0 == var6;
                var60 = undefined;
                if (var7) {
                    _fun80676_ip = 1177;
                    continue _fun80676
                }
            case 1173:
                var60 = var6[var61];
            case 1177:
                var6 = var2.pronouns;
                var7 = var0 == var6;
                var55 = undefined;
                if (var7) {
                    _fun80676_ip = 1196;
                    continue _fun80676
                }
            case 1192:
                var55 = var6[var61];
            case 1196:
                var6 = var0 == var3;
                var50 = undefined;
                if (var6) {
                    _fun80676_ip = 1209;
                    continue _fun80676
                }
            case 1205:
                var50 = var3[var61];
            case 1209:
                var3 = var0 == var1;
                var30 = undefined;
                if (var3) {
                    _fun80676_ip = 1222;
                    continue _fun80676
                }
            case 1218:
                var30 = var1[var61];
            case 1222:
                var49 = global;
                var3 = var49.parseInt;
                var1 = var0 == var2;
                var6 = undefined;
                if (var1) {
                    _fun80676_ip = 1244;
                    continue _fun80676
                }
            case 1239:
                var6 = var2.code;
            case 1244:
                var7 = var0 != var6;
                var1 = var37;
                if (!var7) {
                    _fun80676_ip = 1257;
                    continue _fun80676
                }
            case 1254:
                var1 = var6;
            case 1257:
                var3 = var3.bind(var4)(var1);
                var1 = 200005;
                var54 = null;
                if (!(var1 === var3)) {
                    _fun80676_ip = 1291;
                    continue _fun80676
                }
            case 1274:
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun80676_ip = 1288;
                    continue _fun80676
                }
            case 1283:
                var1 = var2.message;
            case 1288:
                var54 = var1;
            case 1291:
                if (!(var0 != var34)) {
                    _fun80676_ip = 3396;
                    continue _fun80676
                }
            case 1298:
                var3 = _closure1_slot18;
                var2 = _closure1_slot0;
                var71 = _closure1_slot2;
                var1 = 38;
                var1 = var71[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var68;
                var1.secondaryColor = var26;
                var7 = _closure1_slot19;
                var6 = _closure1_slot7;
                var5 = {};
                var10 = var15.container;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var10.backgroundColor = var21;
                var8[1] = var10;
                var5.style = var8;
                var10 = _closure1_slot6;
                var8 = {};
                var8.ref = var11;
                var12 = _closure1_slot18;
                var11 = {};
                var16 = var15.bounceOffset;
                var11.style = var16;
                var12 = var12.bind(var4)(var6, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var28 = _closure1_slot1;
                var23 = 39;
                var12 = var71[var23];
                var16 = var28.bind(var4)(var12);
                var12 = {};
                var12.fallbackBackground = var27;
                var12.primaryColor = var68;
                var12.secondaryColor = var26;
                var17 = {};
                var17.backgroundColor = var21;
                var12.containerStyle = var17;
                var22 = _closure1_slot18;
                var21 = _closure1_slot21;
                var17 = {};
                var17.user = var36;
                var17.displayProfile = var39;
                var17.guildMember = var66;
                var17.guildMemberProfile = var25;
                var17.pendingAvatarSrc = var44;
                var17.pendingBanner = var24;
                var17.pendingThemeColors = var43;
                var17.disabled = var38;
                var21 = var22.bind(var4)(var21, var17);
                var17 = new Array(2);
                var17[0] = var21;
                var21 = {};
                var24 = _closure1_slot18;
                var22 = {};
                var66 = var67.avatarBackground;
                var25 = new Array(4);
                var25[0] = var66;
                var66 = var67.avatarPosition;
                var25[1] = var66;
                var66 = var15.avatarContainer;
                var25[2] = var66;
                var25[3] = var70;
                var22.style = var25;
                var66 = _closure1_slot18;
                var25 = 40;
                var25 = var71[var25];
                var28 = var28.bind(var4)(var25);
                var25 = {};
                var71 = var36.id;
                var25.userId = var71;
                var71 = var38;
                if (var38) {
                    _fun80676_ip = 1614;
                    continue _fun80676
                }
            case 1611:
                var71 = !var33;
            case 1614:
                var25.disabled = var71;
                var71 = false;
                var25.disableStatus = var71;
                var72 = var0 == var34;
                var71 = undefined;
                if (var72) {
                    _fun80676_ip = 1639;
                    continue _fun80676
                }
            case 1634:
                var71 = var34.id;
            case 1639:
                var25.guildId = var71;
                var25.statusStyle = var70;
                var25 = var66.bind(var4)(var28, var25);
                var22.children = var25;
                var24 = var24.bind(var4)(var6, var22);
                var22 = new Array(2);
                var22[0] = var24;
                var25 = _closure1_slot19;
                var28 = _closure1_slot1;
                var66 = _closure1_slot2;
                var23 = var66[var23];
                var24 = var28.bind(var4)(var23);
                var23 = {};
                var23.fallbackBackground = var27;
                var23.primaryColor = var68;
                var23.secondaryColor = var26;
                var27 = var67.profileContent;
                var26 = new Array(2);
                var26[0] = var27;
                var27 = {};
                var27.paddingTop = var61;
                var27.paddingBottom = var29;
                var26[1] = var27;
                var23.containerStyle = var26;
                var29 = _closure1_slot18;
                var26 = 41;
                var26 = var66[var26];
                var27 = var28.bind(var4)(var26);
                var26 = {};
                var26.customStatusActivity = var69;
                var68 = var0 != var68;
                var26.hasCustomProfileTheme = var68;
                var68 = var67.customStatusBubble;
                var26.style = var68;
                var67 = var67.emojiOnlyCustomStatusBubble;
                var26.emojiOnlyStyle = var67;
                var26.editEnabled = var45;
                var27 = var29.bind(var4)(var27, var26);
                var26 = new Array(3);
                var26[0] = var27;
                var29 = _closure1_slot18;
                var27 = 42;
                var27 = var66[var27];
                var28 = var28.bind(var4)(var27);
                var27 = {};
                var27.user = var36;
                var66 = var58;
                if (!(var0 != var59)) {
                    _fun80676_ip = 1849;
                    continue _fun80676
                }
            case 1846:
                var66 = var59;
            case 1849:
                var27.displayName = var66;
                var66 = var52;
                if (!(var0 != var53)) {
                    _fun80676_ip = 1863;
                    continue _fun80676
                }
            case 1860:
                var66 = var53;
            case 1863:
                var27.pronouns = var66;
                var27.badges = var62;
                var27.badgeContainerBackground = var65;
                var62 = var34.id;
                var27.guildId = var62;
                var27.pendingDisplayNameStyles = var32;
                var27 = var29.bind(var4)(var28, var27);
                var26[1] = var27;
                var29 = _closure1_slot19;
                var28 = _closure1_slot7;
                var27 = {};
                var62 = var15.formContainer;
                var32 = new Array(2);
                var32[0] = var62;
                var62 = {};
                var62.backgroundColor = var65;
                var62.paddingBottom = var64;
                var32[1] = var62;
                var27.style = var32;
                var62 = var0 != var50;
                var32 = null;
                if (var62) {
                    _fun80676_ip = 2178;
                    continue _fun80676
                }
            case 1957:
                var62 = var0 != var60;
                var32 = null;
                if (var62) {
                    _fun80676_ip = 2178;
                    continue _fun80676
                }
            case 1969:
                if (!(var0 == var30)) {
                    _fun80676_ip = 2074;
                    continue _fun80676
                }
            case 1973:
                var62 = var49.Object;
                var49 = var62.keys;
                var49 = var49.bind(var62)(var63);
                var49 = var49.length;
                var49 = var49 > var61;
                var64 = null;
                if (!var49) {
                    _fun80676_ip = 2072;
                    continue _fun80676
                }
            case 2003:
                if (!(var0 == var54)) {
                    _fun80676_ip = 2066;
                    continue _fun80676
                }
            case 2007:
                var63 = _closure1_slot0;
                var65 = _closure1_slot2;
                var49 = 17;
                var61 = var65[var49];
                var61 = var63.bind(var4)(var61);
                var62 = var61.intl;
                var61 = var62.string;
                var49 = var65[var49];
                var49 = var63.bind(var4)(var49);
                var49 = var49.t;
                var49 = var49.s35OuK;
                var49 = var61.bind(var62)(var49);
                _fun80676_ip = 2069;
                continue _fun80676;
            case 2066:
                var49 = var54;
            case 2069:
                var64 = var49;
            case 2072:
                _fun80676_ip = 2077;
                continue _fun80676;
            case 2074:
                var64 = var30;
            case 2077:
                var49 = var0 == var64;
                var30 = null;
                if (var49) {
                    _fun80676_ip = 2175;
                    continue _fun80676
                }
            case 2086:
                var30 = null;
                if (!(var37 !== var64)) {
                    _fun80676_ip = 2175;
                    continue _fun80676
                }
            case 2092:
                var54 = _closure1_slot18;
                var49 = _closure1_slot7;
                var37 = {};
                var61 = var15.errorContainer;
                var37.style = var61;
                var63 = _closure1_slot18;
                var62 = _closure1_slot0;
                var65 = _closure1_slot2;
                var61 = 37;
                var61 = var65[var61];
                var61 = var62.bind(var4)(var61);
                var62 = var61.Text;
                var61 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-feedback-critical'
                };
                var61.children = var64;
                var61 = var63.bind(var4)(var62, var61);
                var37.children = var61;
                var30 = var54.bind(var4)(var49, var37);
            case 2175:
                var32 = var30;
            case 2178:
                var30 = new Array(9);
                var30[0] = var32;
                var54 = _closure1_slot18;
                var49 = _closure1_slot1;
                var61 = _closure1_slot2;
                var32 = 43;
                var37 = var61[var32];
                var49 = var49.bind(var4)(var37);
                var37 = {};
                var37.scrollTargetRef = var20;
                var64 = _closure1_slot0;
                var20 = 17;
                var62 = var61[var20];
                var62 = var64.bind(var4)(var62);
                var63 = var62.intl;
                var62 = var63.string;
                var61 = var61[var20];
                var61 = var64.bind(var4)(var61);
                var61 = var61.t;
                var61 = var61.me1lRk;
                var61 = var62.bind(var63)(var61);
                var37.label = var61;
                var37.errorMessage = var60;
                if (!(var0 != var59)) {
                    _fun80676_ip = 2286;
                    continue _fun80676
                }
            case 2283:
                var58 = var59;
            case 2286:
                var37.value = var58;
                var37.onFocus = var46;
                var58 = function(arg0) { // Original name: onChange, environment: var14
                    _fun80679: for (var _fun80679_ip = 0;;) switch (_fun80679_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = '';
                            if (!(var1 === var0)) {
                                _fun80679_ip = 48;
                                continue _fun80679
                            }
                        case 11:
                            var1 = _closure2_slot2;
                            var2 = null;
                            var5 = var2 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun80679_ip = 39;
                                continue _fun80679
                            }
                        case 29:
                            var3 = _closure2_slot2;
                            var1 = var3.nick;
                        case 39:
                            var1 = var2 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun80679_ip = 51;
                                continue _fun80679
                            }
                        case 48:
                            var4 = var0;
                        case 51:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 34;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setNewPendingNickname;
                            var6 = _closure2_slot2;
                            var1 = null;
                            var6 = var1 == var6;
                            var1 = undefined;
                            if (var6) {
                                _fun80679_ip = 110;
                                continue _fun80679
                            }
                        case 100:
                            var5 = _closure2_slot2;
                            var1 = var5.nick;
                        case 110:
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var37.onChange = var58;
                var59 = _closure1_slot1;
                var60 = _closure1_slot2;
                var58 = 44;
                var58 = var60[var58];
                var59 = var59.bind(var4)(var58);
                var58 = var59.getName;
                var58 = var58.bind(var59)(var36);
                var37.placeholder = var58;
                var58 = _closure1_slot14;
                var37.maxLength = var58;
                var57 = !var57;
                if (var57) {
                    _fun80676_ip = 2361;
                    continue _fun80676
                }
            case 2358:
                var57 = var38;
            case 2361:
                var37.disabled = var57;
                var37 = var54.bind(var4)(var49, var37);
                var30[1] = var37;
                if (!var31) {
                    _fun80676_ip = 2381;
                    continue _fun80676
                }
            case 2378:
                var31 = var33;
            case 2381:
                if (!var31) {
                    _fun80676_ip = 2429;
                    continue _fun80676
                }
            case 2384:
                var54 = _closure1_slot18;
                var49 = _closure1_slot1;
                var57 = _closure1_slot2;
                var37 = 45;
                var37 = var57[var37];
                var49 = var49.bind(var4)(var37);
                var37 = {};
                var37.user = var36;
                var57 = var34.id;
                var37.guildId = var57;
                var31 = var54.bind(var4)(var49, var37);
            case 2429:
                var30[2] = var31;
                var49 = _closure1_slot18;
                var37 = _closure1_slot1;
                var54 = _closure1_slot2;
                var31 = var54[var32];
                var37 = var37.bind(var4)(var31);
                var31 = {};
                var31.scrollTargetRef = var56;
                var57 = _closure1_slot0;
                var56 = var54[var20];
                var56 = var57.bind(var4)(var56);
                var59 = var56.intl;
                var58 = var59.string;
                var56 = var54[var20];
                var56 = var57.bind(var4)(var56);
                var56 = var56.t;
                var56 = var56["+T3RI/"];
                var56 = var58.bind(var59)(var56);
                var31.label = var56;
                var31.errorMessage = var55;
                var55 = var54[var20];
                var55 = var57.bind(var4)(var55);
                var56 = var55.intl;
                var55 = var56.string;
                var54 = var54[var20];
                var54 = var57.bind(var4)(var54);
                var54 = var54.t;
                var54 = var54.NZqtIp;
                var54 = var55.bind(var56)(var54);
                var31.description = var54;
                if (!(var0 != var53)) {
                    _fun80676_ip = 2575;
                    continue _fun80676
                }
            case 2572:
                var52 = var53;
            case 2575:
                var31.value = var52;
                var31.onFocus = var46;
                var52 = function(arg0) { // Original name: onChange, environment: var14
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setNewPendingGuildIdentityPronouns;
                    var1 = _closure2_slot4;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var31.onChange = var52;
                var52 = _closure1_slot15;
                var31.maxLength = var52;
                var31.disabled = var38;
                var31 = var49.bind(var4)(var37, var31);
                var30[3] = var31;
                var31 = null;
                if (!var33) {
                    _fun80676_ip = 2822;
                    continue _fun80676
                }
            case 2627:
                var37 = _closure1_slot18;
                var33 = _closure1_slot1;
                var49 = _closure1_slot2;
                var32 = var49[var32];
                var33 = var33.bind(var4)(var32);
                var32 = {};
                var32.scrollTargetRef = var51;
                var52 = _closure1_slot0;
                var51 = var49[var20];
                var51 = var52.bind(var4)(var51);
                var54 = var51.intl;
                var53 = var54.string;
                var51 = var49[var20];
                var51 = var52.bind(var4)(var51);
                var51 = var51.t;
                var51 = var51.NepzEw;
                var51 = var53.bind(var54)(var51);
                var32.label = var51;
                var32.errorMessage = var50;
                var50 = var49[var20];
                var50 = var52.bind(var4)(var50);
                var51 = var50.intl;
                var50 = var51.string;
                var49 = var49[var20];
                var49 = var52.bind(var4)(var49);
                var49 = var49.t;
                var49 = var49.gYETnt;
                var49 = var50.bind(var51)(var49);
                var32.description = var49;
                if (!(var0 != var48)) {
                    _fun80676_ip = 2769;
                    continue _fun80676
                }
            case 2766:
                var47 = var48;
            case 2769:
                var32.value = var47;
                var32.onFocus = var46;
                var46 = function(arg0) { // Original name: onChange, environment: var14
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setNewPendingGuildIdentityBio;
                    var1 = _closure2_slot5;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var32.onChange = var46;
                var46 = _closure1_slot13;
                var32.maxLength = var46;
                var46 = 5;
                var32.numberOfLines = var46;
                var32.multiline = var45;
                var32.disabled = var38;
                var31 = var37.bind(var4)(var33, var32);
            case 2822:
                var30[4] = var31;
                var38 = _closure1_slot18;
                var32 = _closure1_slot1;
                var37 = _closure1_slot2;
                var31 = 46;
                var31 = var37[var31];
                var33 = var32.bind(var4)(var31);
                var31 = {};
                var31.pendingAvatarSrc = var44;
                var31.pendingThemeColors = var43;
                var31.user = var36;
                var43 = var34.id;
                var31.guildId = var43;
                var43 = function(arg0) { // Original name: onProfileThemeColorsChanged, environment: var14
                    _fun80682: for (var _fun80682_ip = 0;;) switch (_fun80682_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 34;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.setNewPendingGuildIdentityThemeColors;
                            var5 = _closure2_slot3;
                            var2 = null;
                            var5 = var2 == var5;
                            var2 = undefined;
                            if (var5) {
                                _fun80682_ip = 59;
                                continue _fun80682
                            }
                        case 49:
                            var1 = _closure2_slot3;
                            var2 = var1.themeColors;
                        case 59:
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var31.onProfileThemeColorsChanged = var43;
                var31.showResetMenu = var42;
                var31 = var38.bind(var4)(var33, var31);
                var30[5] = var31;
                var38 = _closure1_slot18;
                var31 = 47;
                var31 = var37[var31];
                var33 = var32.bind(var4)(var31);
                var31 = {};
                var31.user = var36;
                var42 = var34.id;
                var31.guildId = var42;
                var31.pendingAvatarDecoration = var41;
                var31 = var38.bind(var4)(var33, var31);
                var30[6] = var31;
                var38 = _closure1_slot18;
                var31 = 48;
                var31 = var37[var31];
                var33 = var32.bind(var4)(var31);
                var31 = {};
                var31.user = var36;
                var41 = var34.id;
                var31.guildId = var41;
                var31.pendingProfileEffect = var40;
                var31.displayProfile = var39;
                var31 = var38.bind(var4)(var33, var31);
                var30[7] = var31;
                var33 = _closure1_slot18;
                var31 = 49;
                var31 = var37[var31];
                var32 = var32.bind(var4)(var31);
                var31 = {};
                var31.user = var36;
                var31.pendingNameplate = var35;
                var34 = var34.id;
                var31.guildId = var34;
                var31 = var33.bind(var4)(var32, var31);
                var30[8] = var31;
                var27.children = var30;
                var27 = var29.bind(var4)(var28, var27);
                var26[2] = var27;
                var23.children = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[1] = var23;
                var21.children = var22;
                var21 = var7.bind(var4)(var6, var21);
                var17[1] = var21;
                var12.children = var17;
                var12 = var7.bind(var4)(var16, var12);
                var11[1] = var12;
                var8.children = var11;
                var10 = var7.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                if (!var9) {
                    _fun80676_ip = 3370;
                    continue _fun80676
                }
            case 3125:
                var12 = _closure1_slot18;
                var21 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 50;
                var10 = var16[var10];
                var11 = var21.bind(var4)(var10);
                var10 = {};
                var17 = var15.floatingUpsell;
                var15 = new Array(2);
                var15[0] = var17;
                var17 = {};
                var19 = var16[var19];
                var19 = var21.bind(var4)(var19);
                var19 = var19.spacing;
                var19 = var19.PX_16;
                var18 = var18.bottom;
                var18 = var19 + var18;
                var17.bottom = var18;
                var15[1] = var17;
                var10.style = var15;
                var19 = _closure1_slot0;
                var15 = var16[var20];
                var15 = var19.bind(var4)(var15);
                var18 = var15.intl;
                var17 = var18.string;
                var15 = var16[var20];
                var15 = var19.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.pj0XBN;
                var15 = var17.bind(var18)(var15);
                var10.ctaText = var15;
                var14 = function() { // Original name: onPress, environment: var14
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 51;
                    var1 = var7[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var1 = 15;
                    var1 = var7[var1];
                    var5 = var6.bind(var0)(var1);
                    var1 = 52;
                    var2 = var7[var1];
                    var1 = var7.paths;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = {};
                    var5 = {};
                    var10 = _closure1_slot20;
                    var11 = var5;
                    var9 = copyDataProperties(var11, var10);
                    var8 = _closure1_slot11;
                    var9 = var8.BUTTON_CTA;
                    var8 = 'object';
                    var5[var8] = var9;
                    var1.analyticsLocation = var5;
                    var5 = _closure2_slot6;
                    var1.analyticsLocations = var5;
                    var5 = 53;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.PremiumFeatureCardOrder;
                    var5 = var5.TIER_2_LEADING;
                    var1.premiumFeatureCardOrder = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var10.onPress = var14;
                var15 = _closure1_slot18;
                var13 = 37;
                var13 = var16[var13];
                var13 = var19.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {};
                var17 = 'text-sm/normal';
                var13.variant = var17;
                var17 = var16[var20];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.YIZS5B;
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 3370:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 3396:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 1672, 4622, 6921, 660, 1615, 33, 3068, 5687, 5540, 10101, 3237, 10102, 1307, 5546, 1234, 5683, 7573, 6924, 10112, 5360, 4855, 671, 9557, 3946, 10142, 566, 6914, 5628, 6926, 5684, 10235, 10236, 6922, 6925, 3901, 3118, 6931, 10237, 6933, 7329, 10119, 3195, 10120, 10124, 10126, 10127, 10129, 10140, 4524, 7007, 7634, 2]);