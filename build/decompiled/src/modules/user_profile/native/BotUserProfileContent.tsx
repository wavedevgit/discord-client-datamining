// modules/user_profile/native/BotUserProfileContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot6 = var7;
    var3 = var3.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.jsxs;
    var _closure1_slot10 = var7;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun61790: for (var _fun61790_ip = 0;;) switch (_fun61790_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.user;
                var _closure2_slot0 = var13;
                var11 = var0.channel;
                var _closure2_slot1 = var11;
                var25 = var0.displayProfile;
                var27 = var0.showUserProfileActionSheet;
                var39 = var0.disableMessage;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var9 = var0.bind(var4)();
                var0 = 7;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = _closure1_slot8;
                var15 = var3.bind(var4)(var0);
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var23 = var0.bottom;
                var3 = _closure1_slot0;
                var0 = 9;
                var0 = var2[var0];
                var5 = var3.bind(var4)(var0);
                var0 = var5.useUserProfileAnalyticsContext;
                var0 = var0.bind(var5)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot2 = var0;
                var0 = 10;
                var0 = var2[var0];
                var7 = var3.bind(var4)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var35
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var33 = var5.bind(var7)(var3, var0);
                var0 = 11;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useName;
                var0 = null;
                var1 = var0 == var25;
                var2 = undefined;
                if (var1) {
                    _fun61790_ip = 230;
                    continue _fun61790
                }
            case 225:
                var2 = var25.guildId;
            case 230:
                var7 = var0 == var11;
                var1 = undefined;
                if (var7) {
                    _fun61790_ip = 244;
                    continue _fun61790
                }
            case 239:
                var1 = var11.id;
            case 244:
                var29 = var3.bind(var5)(var2, var1, var13);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var40 = 12;
                var1 = var1[var40];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useUserTag;
                var1 = var1.bind(var2)(var13);
                _closure2_slot3 = var1;
                var1 = var0 == var25;
                var12 = undefined;
                if (var1) {
                    _fun61790_ip = 300;
                    continue _fun61790
                }
            case 295:
                var12 = var25.application;
            case 300:
                var1 = var0 == var11;
                var32 = undefined;
                if (var1) {
                    _fun61790_ip = 314;
                    continue _fun61790
                }
            case 309:
                var32 = var11.guild_id;
            case 314:
                _closure2_slot4 = var32;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var32;
                var2[1] = var13;
                var1 = function() { // Environment: var35
                    _fun61792: for (var _fun61792_ip = 0;;) switch (_fun61792_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun61792_ip = 21;
                                continue _fun61792
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var1 == var0)) {
                                _fun61792_ip = 25;
                                continue _fun61792
                            }
                        case 21:
                            var0 = {};
                            _fun61792_ip = 56;
                            continue _fun61792;
                        case 25:
                            var1 = {};
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot0;
                            var4 = var2.id;
                            var2 = new Array(1);
                            var2[0] = var4;
                            var1[var3] = var2;
                            var0 = var1;
                        case 56:
                            return var0;
                    }
                };
                var8 = var3.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var5 = var7.useSubscribeGuildMembers;
                var1 = 'BotUserProfileContent';
                var1 = var5.bind(var7)(var8, var1);
                var5 = _closure1_slot1;
                var1 = 14;
                var1 = var3[var1];
                var1 = var5.bind(var4)(var1);
                var26 = var1.bind(var4)(var25);
                var1 = 15;
                var1 = var3[var1];
                var7 = var5.bind(var4)(var1);
                var1 = var13.id;
                var22 = var7.bind(var4)(var1);
                var1 = 16;
                var1 = var3[var1];
                var5 = var5.bind(var4)(var1);
                var1 = {};
                var1.user = var13;
                var1.displayProfile = var25;
                var1 = var5.bind(var4)(var1);
                var5 = var1.theme;
                var21 = var1.primaryColor;
                var10 = var1.secondaryColor;
                var1 = 17;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useUserProfileColors;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var21;
                var1.secondaryColor = var10;
                var1 = var2.bind(var3)(var1);
                var14 = var1.gradientFallbackBackground;
                var8 = var1.containerBackground;
                var19 = var1.avatarBackground;
                var20 = var1.statusBackground;
                if (!(var0 != var13)) {
                    _fun61790_ip = 2025;
                    continue _fun61790
                }
            case 548:
                if (!(var0 != var33)) {
                    _fun61790_ip = 2025;
                    continue _fun61790
                }
            case 555:
                var28 = function() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'COPY_USERNAME';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 18;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var1);
                    var1 = 19;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var3 = _closure1_slot10;
                var2 = _closure1_slot11;
                var1 = {};
                var18 = _closure1_slot9;
                var17 = _closure1_slot1;
                var24 = _closure1_slot2;
                var5 = 20;
                var5 = var24[var5];
                var7 = var17.bind(var4)(var5);
                var5 = {};
                var5.user = var13;
                var5.displayProfile = var25;
                var5.bannerHeight = var15;
                var7 = var18.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var15 = _closure1_slot4;
                var7 = {};
                var16 = 21;
                var16 = var24[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var16.user = var13;
                var24 = var0 == var25;
                var30 = undefined;
                if (var24) {
                    _fun61790_ip = 662;
                    continue _fun61790
                }
            case 657:
                var30 = var25.guildId;
            case 662:
                var31 = var0 != var30;
                var24 = undefined;
                if (!var31) {
                    _fun61790_ip = 674;
                    continue _fun61790
                }
            case 671:
                var24 = var30;
            case 674:
                var16.guildId = var24;
                var16.backgroundColor = var19;
                var19 = {};
                var19.backgroundColor = var20;
                var16.statusStyle = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot10;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var17 = 22;
                var17 = var20[var17];
                var18 = var18.bind(var4)(var17);
                var17 = {};
                var17.fallbackBackground = var14;
                var17.primaryColor = var21;
                var17.secondaryColor = var10;
                var14 = var9.profileContent;
                var10 = new Array(2);
                var10[0] = var14;
                var14 = {};
                var24 = var0 != var22;
                var20 = 0;
                if (var24) {
                    _fun61790_ip = 777;
                    continue _fun61790
                }
            case 773:
                var20 = _closure1_slot7;
            case 777:
                var14.paddingTop = var20;
                var20 = _closure1_slot6;
                var20 = var23 + var20;
                var14.paddingBottom = var20;
                var10[1] = var14;
                var17.containerStyle = var10;
                var24 = _closure1_slot9;
                var14 = _closure1_slot1;
                var30 = _closure1_slot2;
                var10 = 23;
                var10 = var30[var10];
                var20 = var14.bind(var4)(var10);
                var10 = {};
                var10.customStatusActivity = var22;
                var21 = var0 != var21;
                var10.hasCustomProfileTheme = var21;
                var21 = function() {
                    _fun61795: for (var _fun61795_ip = 0;;) switch (_fun61795_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 24;
                            var3 = var1[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 26;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 25;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var4 = var3.bind(var0)(var2, var1);
                            var3 = {};
                            var1 = _closure2_slot0;
                            var3.user = var1;
                            var1 = _closure2_slot4;
                            var3.guildId = var1;
                            var7 = _closure2_slot1;
                            var1 = null;
                            var7 = var1 == var7;
                            var1 = undefined;
                            if (var7) {
                                _fun61795_ip = 110;
                                continue _fun61795
                            }
                        case 101:
                            var2 = _closure2_slot1;
                            var1 = var2.id;
                        case 110:
                            var3.channelId = var1;
                            var10 = 'UserProfileCustomStatusActionSheet';
                            var8 = 'stack';
                            var12 = var6;
                            var11 = var4;
                            var9 = var3;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                            return var0;
                    }
                };
                var10.onPressTruncatedStatus = var21;
                var21 = var9.customStatusBubble;
                var10.style = var21;
                var21 = var9.emojiOnlyCustomStatusBubble;
                var10.emojiOnlyStyle = var21;
                var10 = var24.bind(var4)(var20, var10);
                var20 = new Array(3);
                var20[0] = var10;
                var23 = _closure1_slot10;
                var22 = _closure1_slot4;
                var21 = {};
                var10 = var9.primaryInfo;
                var21.style = var10;
                var10 = 27;
                var10 = var30[var10];
                var14 = var14.bind(var4)(var10);
                var10 = {};
                var10.user = var13;
                var10.guildId = var32;
                var10.displayName = var29;
                var30 = var0 == var25;
                var29 = undefined;
                if (var30) {
                    _fun61790_ip = 950;
                    continue _fun61790
                }
            case 944:
                var29 = var25.pronouns;
            case 950:
                var10.pronouns = var29;
                var10.badges = var26;
                var10.badgeContainerBackground = var8;
                var34 = _closure1_slot0;
                var26 = _closure1_slot2;
                var36 = 28;
                var29 = var26[var36];
                var29 = var34.bind(var4)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var26[var36];
                var29 = var34.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29.y5MwJy;
                var29 = var30.bind(var31)(var29);
                var10.displayNameAccessibilityHint = var29;
                var10.onPressDisplayName = var28;
                var10.onPressUserTag = var28;
                var28 = function() {
                    var2 = _closure2_slot2;
                    var1 = {};
                    var0 = 'PRESS_PRONOUNS';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUserPronouns;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var10.onPressPronouns = var28;
                var38 = true;
                var10.showBadgeToastOnPress = var38;
                var10 = var24.bind(var4)(var14, var10);
                var24 = new Array(3);
                var24[0] = var10;
                var30 = _closure1_slot9;
                var14 = _closure1_slot1;
                var10 = 29;
                var10 = var26[var10];
                var28 = var14.bind(var4)(var10);
                var10 = {};
                var10.user = var13;
                var10 = var30.bind(var4)(var28, var10);
                var24[1] = var10;
                var10 = 30;
                var10 = var26[var10];
                var29 = var14.bind(var4)(var10);
                var28 = {};
                var10 = var9.primaryButtons;
                var28.style = var10;
                var10 = _closure1_slot8;
                var28.maxWidth = var10;
                var14 = var0 != var12;
                var10 = undefined;
                if (!var14) {
                    _fun61790_ip = 1292;
                    continue _fun61790
                }
            case 1147:
                var26 = _closure1_slot0;
                var31 = _closure1_slot2;
                var14 = 31;
                var14 = var31[var14];
                var26 = var26.bind(var4)(var14);
                var14 = var26.canInstallApplication;
                var14 = var14.bind(var26)(var12);
                var10 = undefined;
                if (!var14) {
                    _fun61790_ip = 1292;
                    continue _fun61790
                }
            case 1183:
                var31 = _closure1_slot9;
                var26 = _closure1_slot1;
                var34 = _closure1_slot2;
                var14 = 32;
                var14 = var34[var14];
                var26 = var26.bind(var4)(var14);
                var14 = {};
                var14.application = var12;
                var34 = var13.id;
                var14.botUserId = var34;
                var37 = var0 != var11;
                var34 = undefined;
                if (!var37) {
                    _fun61790_ip = 1235;
                    continue _fun61790
                }
            case 1232:
                var34 = var11;
            case 1235:
                var14.channel = var34;
                var37 = var0 != var32;
                var34 = undefined;
                if (!var37) {
                    _fun61790_ip = 1251;
                    continue _fun61790
                }
            case 1248:
                var34 = var32;
            case 1251:
                var14.guildId = var34;
                var37 = _closure1_slot1;
                var41 = _closure1_slot2;
                var34 = 24;
                var34 = var41[var34];
                var34 = var37.bind(var4)(var34);
                var34 = var34.hideActionSheet;
                var14.onOpenApp = var34;
                var10 = var31.bind(var4)(var26, var14);
            case 1292:
                var28.primaryButton = var10;
                var14 = _closure1_slot9;
                var37 = _closure1_slot0;
                var26 = _closure1_slot2;
                var10 = 33;
                var10 = var26[var10];
                var10 = var37.bind(var4)(var10);
                var34 = var10.Button;
                var31 = {};
                var10 = 34;
                var10 = var26[var10];
                var10 = var37.bind(var4)(var10);
                var42 = var10.ChatIcon;
                var41 = {};
                var10 = 'sm';
                var41.size = var10;
                var10 = _closure1_slot1;
                var43 = 35;
                var43 = var26[var43];
                var43 = var10.bind(var4)(var43);
                var43 = var43.colors;
                var43 = var43.CONTROL_SECONDARY_TEXT_DEFAULT;
                var41.color = var43;
                var41 = var14.bind(var4)(var42, var41);
                var31.icon = var41;
                var41 = var26[var36];
                var41 = var37.bind(var4)(var41);
                var43 = var41.intl;
                var42 = var43.string;
                var41 = var26[var36];
                var41 = var37.bind(var4)(var41);
                var41 = var41.t;
                var41 = var41.zROXEV;
                var41 = var42.bind(var43)(var41);
                var31.text = var41;
                var41 = 'secondary';
                var31.variant = var41;
                var31.disabled = var39;
                var31.grow = var38;
                var38 = var26[var36];
                var38 = var37.bind(var4)(var38);
                var39 = var38.intl;
                var38 = var39.formatToPlainString;
                var36 = var26[var36];
                var36 = var37.bind(var4)(var36);
                var36 = var36.t;
                var37 = var36.zFfSFQ;
                var36 = {};
                var40 = var26[var40];
                var41 = var10.bind(var4)(var40);
                var40 = var41.getName;
                var40 = var40.bind(var41)(var13);
                var36.name = var40;
                var36 = var38.bind(var39)(var37, var36);
                var31.accessibilityHint = var36;
                var35 = function() {
                    var2 = _closure2_slot2;
                    var1 = {};
                    var0 = 'SEND_MESSAGE';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.hideActionSheet;
                    var1 = var1.bind(var5)();
                    var1 = 36;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.popAll;
                    var1 = var1.bind(var5)();
                    var1 = 37;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.recipientIds = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var31.onPress = var35;
                var31 = var14.bind(var4)(var34, var31);
                var28.secondaryButton = var31;
                var28 = var30.bind(var4)(var29, var28);
                var24[2] = var28;
                var21.children = var24;
                var21 = var23.bind(var4)(var22, var21);
                var20[1] = var21;
                var28 = {};
                var28.backgroundColor = var8;
                var23 = _closure1_slot10;
                var22 = _closure1_slot4;
                var21 = {};
                var8 = var9.cards;
                var21.style = var8;
                var8 = 38;
                var8 = var26[var8];
                var24 = var10.bind(var4)(var8);
                var8 = {};
                var8.user = var13;
                var8.currentUser = var33;
                var8.guildId = var32;
                var8.style = var28;
                var8 = var14.bind(var4)(var24, var8);
                var24 = new Array(4);
                var24[0] = var8;
                var8 = 39;
                var8 = var26[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var26 = var13.id;
                var8.userId = var26;
                var8.displayProfile = var25;
                var8.channel = var11;
                var8.style = var28;
                var8 = var14.bind(var4)(var10, var8);
                var24[1] = var8;
                var8 = var0 != var32;
                if (!var8) {
                    _fun61790_ip = 1851;
                    continue _fun61790
                }
            case 1710:
                var25 = _closure1_slot10;
                var14 = _closure1_slot11;
                var10 = {};
                var31 = _closure1_slot9;
                var30 = _closure1_slot1;
                var34 = _closure1_slot2;
                var26 = 40;
                var26 = var34[var26];
                var29 = var30.bind(var4)(var26);
                var26 = {};
                var35 = var13.id;
                var26.userId = var35;
                var26.guildId = var32;
                var26.style = var28;
                var29 = var31.bind(var4)(var29, var26);
                var26 = new Array(2);
                var26[0] = var29;
                var29 = 41;
                var29 = var34[var29];
                var30 = var30.bind(var4)(var29);
                var29 = {};
                var29.user = var13;
                var29.currentUser = var33;
                var29.guildId = var32;
                var33 = var0 == var11;
                var32 = undefined;
                if (var33) {
                    _fun61790_ip = 1818;
                    continue _fun61790
                }
            case 1813:
                var32 = var11.id;
            case 1818:
                var29.channelId = var32;
                var29.showUserProfile = var27;
                var29.style = var28;
                var29 = var31.bind(var4)(var30, var29);
                var26[1] = var29;
                var10.children = var26;
                var8 = var25.bind(var4)(var14, var10);
            case 1851:
                var24[2] = var8;
                var8 = _closure1_slot9;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var25 = 42;
                var25 = var14[var25];
                var26 = var10.bind(var4)(var25);
                var25 = {};
                var29 = var13.id;
                var25.userId = var29;
                var25.style = var28;
                var25.onBack = var27;
                var25 = var8.bind(var4)(var26, var25);
                var24[3] = var25;
                var21.children = var24;
                var21 = var23.bind(var4)(var22, var21);
                var20[2] = var21;
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var7.children = var16;
                var7 = var3.bind(var4)(var15, var7);
                var5[1] = var7;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var9.bannerButtons;
                var6.style = var9;
                var9 = 43;
                var9 = var14[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9.user = var13;
                var9.application = var12;
                var9.channel = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2025:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 44;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/BotUserProfileContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6922, 4897, 33, 6925, 7329, 1568, 6935, 566, 3922, 3197, 7707, 6927, 7709, 6923, 6926, 5255, 3108, 6928, 6931, 6932, 6934, 3239, 7710, 1307, 7330, 1234, 7712, 7773, 7774, 7775, 4045, 4803, 671, 4527, 3906, 7791, 7558, 11895, 11897, 11902, 11911, 2]);