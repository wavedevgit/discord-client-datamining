// modules/user_profile/native/NonUserBotProfileContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot4 = var7;
    var3 = var3.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var7 = var3.jsxs;
    var _closure1_slot8 = var7;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun59764: for (var _fun59764_ip = 0;;) switch (_fun59764_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.user;
                var18 = var0.channel;
                var20 = var0.displayProfile;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var17 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var0 = 6;
                var0 = var2[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useUserProfileAnalyticsContext;
                var0 = var0.bind(var3)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot0 = var0;
                var0 = 7;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useName;
                var0 = null;
                var1 = var0 == var18;
                var2 = undefined;
                if (var1) {
                    _fun59764_ip = 124;
                    continue _fun59764
                }
            case 119:
                var2 = var18.guild_id;
            case 124:
                var6 = var0 == var18;
                var1 = undefined;
                if (var6) {
                    _fun59764_ip = 138;
                    continue _fun59764
                }
            case 133:
                var1 = var18.id;
            case 138:
                var27 = var3.bind(var5)(var2, var1, var21);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useUserTag;
                var1 = var1.bind(var5)(var21);
                _closure2_slot1 = var1;
                var1 = 9;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var22 = var1.bind(var4)(var20);
                var1 = 10;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var1 = _closure1_slot6;
                var7 = var5.bind(var4)(var1);
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var15 = var1.bottom;
                var1 = 12;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var21;
                var1.displayProfile = var20;
                var1 = var2.bind(var4)(var1);
                var5 = var1.theme;
                var14 = var1.primaryColor;
                var13 = var1.secondaryColor;
                var2 = _closure1_slot0;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useUserProfileColors;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var14;
                var1.secondaryColor = var13;
                var1 = var2.bind(var3)(var1);
                var12 = var1.gradientFallbackBackground;
                var11 = var1.avatarBackground;
                var19 = var1.containerBackground;
                if (!(var0 != var21)) {
                    _fun59764_ip = 915;
                    continue _fun59764
                }
            case 354:
                var26 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var0 = 'COPY_USERNAME';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 14;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var1);
                    var1 = 15;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var23 = _closure1_slot2;
                var5 = 16;
                var5 = var23[var5];
                var6 = var9.bind(var4)(var5);
                var5 = {};
                var5.user = var21;
                var5.displayProfile = var20;
                var5.bannerHeight = var7;
                var6 = var10.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot3;
                var6 = {};
                var8 = 17;
                var8 = var23[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.user = var21;
                var23 = var0 == var20;
                var24 = undefined;
                if (var23) {
                    _fun59764_ip = 461;
                    continue _fun59764
                }
            case 456:
                var24 = var20.guildId;
            case 461:
                var28 = var0 != var24;
                var23 = undefined;
                if (!var28) {
                    _fun59764_ip = 473;
                    continue _fun59764
                }
            case 470:
                var23 = var24;
            case 473:
                var8.guildId = var23;
                var8.backgroundColor = var11;
                var24 = true;
                var8.disableStatus = var24;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot8;
                var23 = _closure1_slot1;
                var28 = _closure1_slot2;
                var9 = 18;
                var9 = var28[var9];
                var10 = var23.bind(var4)(var9);
                var9 = {};
                var9.primaryColor = var14;
                var9.secondaryColor = var13;
                var9.fallbackBackground = var12;
                var13 = var17.profileContent;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var14 = _closure1_slot5;
                var13.paddingTop = var14;
                var14 = _closure1_slot4;
                var14 = var15 + var14;
                var13.paddingBottom = var14;
                var12[1] = var13;
                var9.containerStyle = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot3;
                var12 = {};
                var15 = var17.primaryInfo;
                var12.style = var15;
                var15 = 19;
                var15 = var28[var15];
                var23 = var23.bind(var4)(var15);
                var15 = {};
                var15.user = var21;
                var29 = var0 == var18;
                var28 = undefined;
                if (var29) {
                    _fun59764_ip = 642;
                    continue _fun59764
                }
            case 637:
                var28 = var18.guild_id;
            case 642:
                var15.guildId = var28;
                var15.displayName = var27;
                var28 = var0 == var20;
                var27 = undefined;
                if (var28) {
                    _fun59764_ip = 665;
                    continue _fun59764
                }
            case 659:
                var27 = var20.pronouns;
            case 665:
                var15.pronouns = var27;
                var15.badges = var22;
                var15.badgeContainerBackground = var19;
                var30 = _closure1_slot0;
                var22 = _closure1_slot2;
                var27 = 20;
                var28 = var22[var27];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var22[var27];
                var27 = var30.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.y5MwJy;
                var27 = var28.bind(var29)(var27);
                var15.displayNameAccessibilityHint = var27;
                var15.onPressDisplayName = var26;
                var15.onPressUserTag = var26;
                var25 = function() {
                    var2 = _closure2_slot0;
                    var1 = {};
                    var0 = 'PRESS_PRONOUNS';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUserPronouns;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var15.onPressPronouns = var25;
                var15.showBadgeToastOnPress = var24;
                var15 = var14.bind(var4)(var23, var15);
                var12.children = var15;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot7;
                var14 = _closure1_slot3;
                var13 = {};
                var17 = var17.cards;
                var13.style = var17;
                var17 = _closure1_slot1;
                var16 = 21;
                var16 = var22[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var21 = var21.id;
                var16.userId = var21;
                var16.displayProfile = var20;
                var16.channel = var18;
                var18 = {};
                var18.backgroundColor = var19;
                var16.style = var18;
                var16 = var15.bind(var4)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 915:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/NonUserBotProfileContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6988, 4935, 33, 6991, 7001, 3961, 3238, 6993, 7392, 1568, 6989, 6992, 5296, 3149, 6994, 6997, 6998, 7393, 1234, 7621, 2]);