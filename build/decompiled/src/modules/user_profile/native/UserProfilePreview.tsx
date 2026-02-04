// modules/user_profile/native/UserProfilePreview.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot5 = var6;
    var3 = var3.UserProfileThemeTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun57155: for (var _fun57155_ip = 0;;) switch (_fun57155_ip) {
            case 0:
                var4 = arg1;
                var3 = arg2;
                var0 = {};
                var1 = {
                    'maxHeight': '100%',
                    'position': 'relative',
                    'overflow': 'hidden',
                    'width': '100%'
                };
                var2 = null;
                var5 = var2 != var3;
                var2 = 263;
                if (!var5) {
                    _fun57155_ip = 40;
                    continue _fun57155
                }
            case 37:
                var2 = var3;
            case 40:
                var1.maxWidth = var2;
                var2 = 350;
                var3 = arg0;
                if (!var3) {
                    _fun57155_ip = 59;
                    continue _fun57155
                }
            case 57:
                var2 = undefined;
            case 59:
                var1.minHeight = var2;
                var2 = 1;
                var3 = var2;
                if (!var4) {
                    _fun57155_ip = 75;
                    continue _fun57155
                }
            case 73:
                var3 = undefined;
            case 75:
                var1.borderWidth = var3;
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 6;
                var7 = var5[var6];
                var5 = undefined;
                var7 = var8.bind(var5)(var7);
                var7 = var7.colors;
                if (var4) {
                    _fun57155_ip = 121;
                    continue _fun57155
                }
            case 113:
                var4 = var7.BACKGROUND_SURFACE_HIGH;
                _fun57155_ip = 127;
                continue _fun57155;
            case 121:
                var4 = var7.BORDER_MUTED;
            case 127:
                var1.borderColor = var4;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.sm;
                var1.borderRadius = var7;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.shadows;
                var9 = var3.SHADOW_HIGH;
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                var0.profileContainer = var1;
                var1 = {};
                var3 = 12;
                var1.marginTop = var3;
                var0.aboutMeCard = var1;
                var1 = {};
                var1.zIndex = var2;
                var0.profileEffect = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfilePreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57156: for (var _fun57156_ip = 0;;) switch (_fun57156_ip) {
            case 0:
                var1 = arg0;
                var25 = var1.user;
                var33 = var1.displayName;
                var27 = var1.guildId;
                var13 = var1.pendingProfileEffectRecord;
                var28 = var1.pendingDisplayNameStyles;
                var16 = var1.style;
                var19 = var1.compact;
                var3 = undefined;
                if (!(var19 === var3)) {
                    _fun57156_ip = 51;
                    continue _fun57156
                }
            case 49:
                var19 = false;
            case 51:
                var24 = var1.bioLineClamp;
                var12 = var1.maxWidth;
                var37 = var1.gradientFullHeight;
                if (!(var37 === var3)) {
                    _fun57156_ip = 75;
                    continue _fun57156
                }
            case 73:
                var37 = false;
            case 75:
                var5 = var1.additionalBadges;
                if (!(var5 === var3)) {
                    _fun57156_ip = 89;
                    continue _fun57156
                }
            case 85:
                var5 = new Array(0);
            case 89:
                var _closure2_slot0 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var8 = var6.bind(var3)(var1);
                var4 = var8.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var8)(var2, var1);
                var10 = var1.pendingAvatar;
                var11 = var1.pendingBanner;
                var15 = var1.pendingAccentColor;
                var14 = var1.pendingThemeColors;
                var42 = var1.pendingAvatarDecoration;
                var32 = var1.pendingGlobalName;
                var31 = var1.pendingPronouns;
                var2 = var1.pendingLegacyUsernameDisabled;
                var17 = _closure1_slot1;
                var1 = 8;
                var1 = var7[var1];
                var4 = var17.bind(var3)(var1);
                var1 = var25.id;
                var23 = var4.bind(var3)(var1, var27);
                var1 = 9;
                var1 = var7[var1];
                var4 = var17.bind(var3)(var1);
                var1 = {};
                var1.user = var25;
                var1.displayProfile = var23;
                var1.pendingThemeColors = var14;
                var1 = var4.bind(var3)(var1);
                var4 = var1.theme;
                var21 = var1.primaryColor;
                var18 = var1.secondaryColor;
                var8 = null;
                var35 = var8 != var21;
                var1 = _closure1_slot9;
                var12 = var1.bind(var3)(var19, var35, var12);
                var1 = 10;
                var1 = var7[var1];
                var1 = var17.bind(var3)(var1);
                var34 = var1.bind(var3)();
                var1 = 11;
                var1 = var7[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useCustomStatusActivity;
                var36 = var1.bind(var6)();
                var20 = var8 != var36;
                if (!var20) {
                    _fun57156_ip = 336;
                    continue _fun57156
                }
            case 333:
                var20 = !var19;
            case 336:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var22 = var6.bind(var3)(var1);
                var17 = var22.useUserProfileColors;
                var1 = {};
                var1.theme = var4;
                var1.primaryColor = var21;
                var1.secondaryColor = var18;
                var1 = var17.bind(var22)(var1);
                var22 = var1.gradientFallbackBackground;
                var41 = var1.avatarBackground;
                var26 = var1.containerBackground;
                var1 = 13;
                var1 = var7[var1];
                var7 = var6.bind(var3)(var1);
                var6 = var7.getProfilePreviewValue;
                var1 = {};
                var1.pendingValue = var13;
                var17 = var8 == var23;
                var13 = undefined;
                if (var17) {
                    _fun57156_ip = 442;
                    continue _fun57156
                }
            case 436:
                var13 = var23.profileEffect;
            case 442:
                var1.userValue = var13;
                var17 = var8 == var23;
                var13 = undefined;
                if (var17) {
                    _fun57156_ip = 477;
                    continue _fun57156
                }
            case 456:
                var17 = var23._guildMemberProfile;
                var29 = var8 == var17;
                var13 = undefined;
                if (var29) {
                    _fun57156_ip = 477;
                    continue _fun57156
                }
            case 471:
                var13 = var17.profileEffect;
            case 477:
                var1.guildValue = var13;
                var1.guildId = var27;
                var13 = var6.bind(var7)(var1);
                var17 = _closure1_slot0;
                var38 = _closure1_slot2;
                var1 = 14;
                var1 = var38[var1];
                var7 = var17.bind(var3)(var1);
                var6 = var7.getPendingAvatarSrc;
                var1 = {};
                var29 = var25.id;
                var1.userId = var29;
                var1.image = var10;
                var43 = var6.bind(var7)(var1);
                var10 = _closure1_slot1;
                var1 = 15;
                var1 = var38[var1];
                var1 = var10.bind(var3)(var1);
                var2 = var1.bind(var3)(var23, var2);
                var1 = global;
                var7 = var1.Set;
                var6 = var2.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var47 = var6.bind(var2)(var1);
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var48 = var6;
                var1 = new var48[var7](var47, var46);
                var1 = var1 instanceof Object ? var1 : var6;
                _closure2_slot0 = var1;
                var30 = new Array(0);
                var45 = 0;
                var47 = var30;
                var46 = var2;
                var45 = arraySpread(var47, var46, var45);
                var2 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var46 = var2.bind(var5)(var0);
                var47 = var30;
                var0 = arraySpread(var47, var46, var45);
                var2 = _closure1_slot7;
                var0 = 16;
                var0 = var38[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var4;
                var0.primaryColor = var21;
                var0.secondaryColor = var18;
                var6 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = {
                    'style': null,
                    'accessible': false,
                    'pointerEvents': 'none'
                };
                var29 = var12.profileContainer;
                var7 = new Array(2);
                var7[0] = var29;
                var7[1] = var16;
                var4.style = var7;
                var29 = false;
                var7 = 17;
                var7 = var38[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.user = var25;
                var7.displayProfile = var23;
                var16 = 18;
                var16 = var38[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
                var7.bannerHeight = var16;
                var7.pendingBanner = var11;
                var7.pendingAvatarSrc = var43;
                var16 = var8 != var15;
                var11 = undefined;
                if (!var16) {
                    _fun57156_ip = 800;
                    continue _fun57156
                }
            case 797:
                var11 = var15;
            case 800:
                var7.pendingAccentColor = var11;
                var15 = var8 != var14;
                var11 = undefined;
                if (!var15) {
                    _fun57156_ip = 817;
                    continue _fun57156
                }
            case 814:
                var11 = var14;
            case 817:
                var7.pendingThemeColors = var11;
                var40 = true;
                var7.disableInteraction = var40;
                var10 = var2.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var14 = _closure1_slot8;
                var11 = _closure1_slot3;
                var10 = {};
                var39 = _closure1_slot7;
                var17 = _closure1_slot1;
                var38 = _closure1_slot2;
                var15 = 19;
                var15 = var38[var15];
                var16 = var17.bind(var3)(var15);
                var15 = {};
                var15.user = var25;
                var15.guildId = var27;
                var15.pendingAvatarSrc = var43;
                var15.pendingAvatarDecoration = var42;
                var15.backgroundColor = var41;
                var15.disableStatus = var40;
                var16 = var39.bind(var3)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var16 = 20;
                var16 = var38[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.fallbackBackground = var22;
                var16.primaryColor = var21;
                var16.secondaryColor = var18;
                var21 = var34.profileContent;
                var18 = new Array(3);
                var18[0] = var21;
                var21 = !var20;
                if (var20) {
                    _fun57156_ip = 983;
                    continue _fun57156
                }
            case 969:
                var22 = {};
                var38 = _closure1_slot5;
                var22.paddingTop = var38;
                var21 = var22;
            case 983:
                var18[1] = var21;
                var21 = {};
                var22 = undefined;
                if (!var37) {
                    _fun57156_ip = 1000;
                    continue _fun57156
                }
            case 994:
                var22 = '100%';
            case 1000:
                var21.height = var22;
                var18[2] = var21;
                var16.containerStyle = var18;
                if (!var20) {
                    _fun57156_ip = 1094;
                    continue _fun57156
                }
            case 1016:
                var22 = _closure1_slot7;
                var21 = _closure1_slot1;
                var37 = _closure1_slot2;
                var18 = 21;
                var18 = var37[var18];
                var21 = var21.bind(var3)(var18);
                var18 = {};
                var18.customStatusActivity = var36;
                var36 = _closure1_slot6;
                var36 = var36.PREVIEW;
                var18.themeType = var36;
                var18.hasCustomProfileTheme = var35;
                var35 = var34.customStatusBubble;
                var18.style = var35;
                var34 = var34.emojiOnlyCustomStatusBubble;
                var18.emojiOnlyStyle = var34;
                var20 = var22.bind(var3)(var21, var18);
            case 1094:
                var18 = new Array(3);
                var18[0] = var20;
                var22 = _closure1_slot7;
                var21 = _closure1_slot1;
                var34 = _closure1_slot2;
                var20 = 22;
                var20 = var34[var20];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var20.user = var25;
                var34 = _closure1_slot6;
                var34 = var34.PREVIEW;
                var20.themeType = var34;
                if (!(var8 != var33)) {
                    _fun57156_ip = 1154;
                    continue _fun57156
                }
            case 1151:
                var32 = var33;
            case 1154:
                var20.displayName = var32;
                if (!(var8 == var31)) {
                    _fun57156_ip = 1180;
                    continue _fun57156
                }
            case 1162:
                var33 = var8 == var23;
                var32 = undefined;
                if (var33) {
                    _fun57156_ip = 1177;
                    continue _fun57156
                }
            case 1171:
                var32 = var23.pronouns;
            case 1177:
                var31 = var32;
            case 1180:
                var20.pronouns = var31;
                var20.badges = var30;
                var20.badgeContainerBackground = var26;
                var20.showBadgeToastOnPress = var29;
                var20.pendingDisplayNameStyles = var28;
                var20.guildId = var27;
                var20 = var22.bind(var3)(var21, var20);
                var18[1] = var20;
                var19 = !var19;
                if (!var19) {
                    _fun57156_ip = 1332;
                    continue _fun57156
                }
            case 1225:
                var22 = _closure1_slot7;
                var21 = _closure1_slot1;
                var27 = _closure1_slot2;
                var20 = 23;
                var20 = var27[var20];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var25 = var25.id;
                var20.userId = var25;
                var20.displayProfile = var23;
                var23 = _closure1_slot6;
                var23 = var23.PREVIEW;
                var20.themeType = var23;
                var25 = var12.aboutMeCard;
                var23 = new Array(2);
                var23[0] = var25;
                var25 = {};
                var25.backgroundColor = var26;
                var23[1] = var25;
                var20.style = var23;
                var25 = var8 != var24;
                var23 = 3;
                if (!var25) {
                    _fun57156_ip = 1321;
                    continue _fun57156
                }
            case 1318:
                var23 = var24;
            case 1321:
                var20.bioLineClamp = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1332:
                var18[2] = var19;
                var16.children = var18;
                var16 = var14.bind(var3)(var17, var16);
                var15[1] = var16;
                var10.children = var15;
                var10 = var14.bind(var3)(var11, var10);
                var7[1] = var10;
                var8 = var8 != var13;
                if (!var8) {
                    _fun57156_ip = 1424;
                    continue _fun57156
                }
            case 1371:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 24;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var13.skuId;
                var9.skuId = var13;
                var12 = var12.profileEffect;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1424:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5583, 6963, 33, 1297, 671, 566, 6956, 6964, 6966, 5667, 6967, 5585, 5723, 6968, 3159, 6969, 6908, 6972, 6973, 6975, 7369, 7597, 6906, 2]);