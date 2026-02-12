// modules/user_profile/native/UserProfileContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun70720: for (var _fun70720_ip = 0;;) switch (_fun70720_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.customStatusActivity;
                var14 = var0.user;
                var _closure2_slot0 = var14;
                var15 = var0.guildId;
                var _closure2_slot1 = var15;
                var16 = var0.channelId;
                var _closure2_slot2 = var16;
                var10 = var0.hasCustomProfileTheme;
                var9 = var0.isPreviewingChanges;
                var12 = var0.bubbleRef;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var5 = 14;
                var5 = var4[var5];
                var17 = var2.bind(var3)(var5);
                var13 = var17.useStateFromStores;
                var5 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = new Array(1);
                var7[0] = var14;
                var5 = function() { // Environment: var1
                    _fun70721: for (var _fun70721_ip = 0;;) switch (_fun70721_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun70721_ip = 32;
                                continue _fun70721
                            }
                        case 27:
                            var1 = var0.id;
                        case 32:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var7 = var13.bind(var17)(var8, var5, var7);
                var13 = _closure1_slot4;
                var8 = var13.useCallback;
                var5 = new Array(3);
                var5[0] = var16;
                var5[1] = var15;
                var5[2] = var14;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 16;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.user = var2;
                    var2 = _closure2_slot1;
                    var3.guildId = var2;
                    var1 = _closure2_slot2;
                    var3.channelId = var1;
                    var9 = 'UserProfileCustomStatusActionSheet';
                    var7 = 'stack';
                    var11 = var6;
                    var8 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var8 = var8.bind(var13)(var1, var5);
                var1 = 18;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useIsEligibleForCustomStatusLabelsExperiment;
                var1 = {};
                var5 = 'CustomStatusBubble';
                var1.location = var5;
                var13 = var2.bind(var4)(var1);
                var5 = _closure1_slot4;
                var4 = var5.useRef;
                var2 = null;
                var1 = null;
                if (!var13) {
                    _fun70720_ip = 272;
                    continue _fun70720
                }
            case 229:
                var13 = var2 == var11;
                var1 = null;
                if (!var13) {
                    _fun70720_ip = 272;
                    continue _fun70720
                }
            case 238:
                var1 = null;
                if (!var7) {
                    _fun70720_ip = 272;
                    continue _fun70720
                }
            case 243:
                var1 = null;
                if (var9) {
                    _fun70720_ip = 272;
                    continue _fun70720
                }
            case 248:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 19;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var1 = var13.bind(var3)();
            case 272:
                var4 = var4.bind(var5)(var1);
                var1 = var4.current;
                var1 = var2 != var1;
                var5 = undefined;
                if (!var1) {
                    _fun70720_ip = 305;
                    continue _fun70720
                }
            case 291:
                var2 = var4.current;
                var1 = var2.label;
                var5 = var1.bind(var2)();
            case 305:
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 20;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var12;
                var0.customStatusActivity = var11;
                var0.hasCustomProfileTheme = var10;
                if (!var7) {
                    _fun70720_ip = 351;
                    continue _fun70720
                }
            case 348:
                var7 = !var9;
            case 351:
                var0.editEnabled = var7;
                var7 = undefined;
                if (var9) {
                    _fun70720_ip = 364;
                    continue _fun70720
                }
            case 361:
                var7 = var8;
            case 364:
                var0.onPressTruncatedStatus = var7;
                var7 = var6.customStatusBubble;
                var0.style = var7;
                var6 = var6.emojiOnlyCustomStatusBubble;
                var0.emojiOnlyStyle = var6;
                var0.placeholderText = var5;
                var4 = var4.current;
                var0.prompt = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.user;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 22;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var8.bind(var3)(var0);
        var0 = var1.useUserProfileAnalyticsContext;
        var0 = var0.bind(var1)();
        var0 = var0.trackUserProfileAction;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot1;
        var0 = 23;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var0 = var0.newestAnalyticsLocation;
        var _closure2_slot2 = var0;
        var0 = function() {
            var2 = _closure2_slot1;
            var1 = {};
            var0 = 'REMOVE_FRIEND';
            var1.action = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var4 = var2.bind(var0)(var1);
            var3 = var4.removeFriend;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = {};
            var5 = _closure2_slot2;
            var1.location = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var _closure2_slot3 = var0;
        var0 = 25;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useName;
        var0 = var0.bind(var1)(var2);
        var _closure2_slot4 = var0;
        var2 = _closure1_slot16;
        var0 = 26;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var5 = _closure1_slot19;
        var0.icon = var5;
        var5 = 27;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.cvSt1J;
        var5 = var6.bind(var7)(var5);
        var0.accessibilityLabel = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 28;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.confirmRemoveFriend;
            var1 = {};
            var5 = _closure2_slot4;
            var1.userDisplayName = var5;
            var4 = _closure2_slot3;
            var1.onConfirm = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var4 = var1.user;
        var _closure2_slot0 = var4;
        var6 = var1.guildId;
        var _closure2_slot1 = var6;
        var7 = var1.channelId;
        var _closure2_slot2 = var7;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 15;
            var3 = var1[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 17;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 30;
            var2 = var1[var2];
            var1 = var1.paths;
            var10 = var3.bind(var0)(var2, var1);
            var3 = {};
            var2 = _closure2_slot0;
            var3.user = var2;
            var2 = _closure2_slot1;
            var3.guildId = var2;
            var1 = _closure2_slot2;
            var3.channelId = var1;
            var9 = 'UserProfileGameFriendActionSheet';
            var7 = 'stack';
            var11 = var6;
            var8 = var3;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var0;
        };
        var4 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot16;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 26;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var5 = _closure1_slot20;
        var0.icon = var5;
        var5 = 27;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.cvSt1J;
        var5 = var6.bind(var7)(var5);
        var0.accessibilityLabel = var5;
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var1 = function arg0() {
        _fun70728: for (var _fun70728_ip = 0;;) switch (_fun70728_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.user;
                var17 = var0.channelId;
                var15 = var0.displayProfile;
                var1 = var0.displayNameOverride;
                var13 = var0.pronounsOverride;
                var11 = var0.badgesOverride;
                var9 = var0.style;
                var8 = var0.badgeContainerBackground;
                var4 = var0.isPreviewingChanges;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 25;
                var0 = var12[var0];
                var2 = var7.bind(var3)(var0);
                var0 = var2.useUserTag;
                var0 = var0.bind(var2)(var16);
                var _closure2_slot0 = var0;
                var2 = 31;
                var2 = var12[var2];
                var2 = var7.bind(var3)(var2);
                var10 = var2.bind(var3)(var15);
                var2 = 32;
                var2 = var12[var2];
                var14 = var7.bind(var3)(var2);
                var7 = var14.useName;
                var12 = null;
                var18 = var12 == var15;
                var2 = undefined;
                if (var18) {
                    _fun70728_ip = 151;
                    continue _fun70728
                }
            case 146:
                var2 = var15.guildId;
            case 151:
                var17 = var7.bind(var14)(var2, var17, var16);
                var14 = var17;
                if (!(var12 != var1)) {
                    _fun70728_ip = 192;
                    continue _fun70728
                }
            case 165:
                var2 = var1.trim;
                var2 = var2.bind(var1)();
                var7 = var2.length;
                var2 = 0;
                var14 = var17;
                if (!(var7 > var2)) {
                    _fun70728_ip = 192;
                    continue _fun70728
                }
            case 189:
                var14 = var1;
            case 192:
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 22;
                var1 = var17[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useUserProfileAnalyticsContext;
                var1 = var1.bind(var2)();
                var18 = var1.trackUserProfileAction;
                _closure2_slot1 = var18;
                var7 = _closure1_slot4;
                var2 = var7.useCallback;
                var1 = new Array(2);
                var1[0] = var18;
                var1[1] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure2_slot1;
                    var2 = {};
                    var0 = 'COPY_USERNAME';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 33;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = 34;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var0 = 35;
                var0 = var17[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var16;
                var17 = var12 == var15;
                var16 = undefined;
                if (var17) {
                    _fun70728_ip = 306;
                    continue _fun70728
                }
            case 301:
                var16 = var15.guildId;
            case 306:
                var0.guildId = var16;
                var0.displayName = var14;
                if (!(var12 == var13)) {
                    _fun70728_ip = 336;
                    continue _fun70728
                }
            case 318:
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun70728_ip = 333;
                    continue _fun70728
                }
            case 327:
                var14 = var15.pronouns;
            case 333:
                var13 = var14;
            case 336:
                var0.pronouns = var13;
                if (!(var12 != var11)) {
                    _fun70728_ip = 348;
                    continue _fun70728
                }
            case 345:
                var10 = var11;
            case 348:
                var0.badges = var10;
                var0.style = var9;
                var0.badgeContainerBackground = var8;
                var8 = undefined;
                if (var4) {
                    _fun70728_ip = 370;
                    continue _fun70728
                }
            case 367:
                var8 = var7;
            case 370:
                var0.onPressDisplayName = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 27;
                var8 = var11[var5];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.y5MwJy;
                var5 = var8.bind(var9)(var5);
                var0.displayNameAccessibilityHint = var5;
                var5 = undefined;
                if (var4) {
                    _fun70728_ip = 443;
                    continue _fun70728
                }
            case 440:
                var5 = var7;
            case 443:
                var0.onPressUserTag = var5;
                var5 = undefined;
                if (var4) {
                    _fun70728_ip = 460;
                    continue _fun70728
                }
            case 453:
                var5 = function() { // Environment: var6
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'PRESS_PRONOUNS';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 34;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUserPronouns;
                    var1 = var1.bind(var2)();
                    return var0;
                };
            case 460:
                var0.onPressPronouns = var5;
                var4 = !var4;
                var0.showBadgeToastOnPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var1;
    var0 = function arg0() {
        _fun70731: for (var _fun70731_ip = 0;;) switch (_fun70731_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var19 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 13;
                var0 = var18[var0];
                var3 = undefined;
                var0 = var19.bind(var3)(var0);
                var4 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var0 = 22;
                var0 = var18[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var0 = 14;
                var0 = var18[var0];
                var5 = var8.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var2.bind(var5)(var1, var0);
                var0 = 36;
                var1 = var18[var0];
                var1 = var19.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot2 = var1;
                var0 = var18[var0];
                var1 = var19.bind(var3)(var0);
                var0 = {};
                var0.guild = var6;
                var0 = var1.bind(var3)(var0);
                var _closure2_slot3 = var0;
                var2 = _closure1_slot16;
                var0 = 37;
                var0 = var18[var0];
                var1 = var19.bind(var3)(var0);
                var0 = {};
                var4 = var4.primaryButtons;
                var0.style = var4;
                var4 = _closure1_slot15;
                var0.maxWidth = var4;
                var13 = _closure1_slot16;
                var5 = 38;
                var4 = var18[var5];
                var4 = var8.bind(var3)(var4);
                var12 = var4.Button;
                var7 = {};
                var11 = 'primary';
                var7.variant = var11;
                var14 = _closure1_slot16;
                var10 = 39;
                var4 = var18[var10];
                var4 = var8.bind(var3)(var4);
                var8 = var4.PencilIcon;
                var4 = {};
                var17 = 'sm';
                var4.size = var17;
                var15 = 40;
                var18 = var18[var15];
                var18 = var19.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.WHITE;
                var4.color = var18;
                var4 = var14.bind(var3)(var8, var4);
                var7.icon = var4;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun70731_ip = 368;
                    continue _fun70731
                }
            case 309:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 27;
                var14 = var20[var8];
                var14 = var19.bind(var3)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var8 = var20[var8];
                var8 = var19.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.s5vZlQ;
                var8 = var14.bind(var18)(var8);
                _fun70731_ip = 425;
                continue _fun70731;
            case 368:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 27;
                var18 = var21[var14];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var14 = var21[var14];
                var14 = var20.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.HmFaFB;
                var8 = var18.bind(var19)(var14);
            case 425:
                var7.text = var8;
                var8 = function() {
                    var3 = _closure2_slot1;
                    var2 = {};
                    var0 = 'EDIT_PROFILE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 41;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7.onPress = var8;
                var8 = true;
                var7.grow = var8;
                var7 = var13.bind(var3)(var12, var7);
                var0.primaryButton = var7;
                var6 = var4 != var6;
                var4 = undefined;
                if (!var6) {
                    _fun70731_ip = 639;
                    continue _fun70731
                }
            case 470:
                var7 = _closure1_slot16;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.variant = var11;
                var12 = _closure1_slot16;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var11 = var10.PencilIcon;
                var10 = {};
                var10.size = var17;
                var16 = _closure1_slot1;
                var15 = var14[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.WHITE;
                var10.color = var15;
                var10 = var12.bind(var3)(var11, var10);
                var5.icon = var10;
                var10 = 27;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["PKQB/H"];
                var10 = var11.bind(var12)(var10);
                var5.text = var10;
                var9 = function() {
                    var3 = _closure2_slot1;
                    var2 = {};
                    var0 = 'EDIT_GUILD_PROFILE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 41;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5.onPress = var9;
                var5.grow = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 639:
                var0.secondaryButton = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot12 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot16 = var9;
    var8 = var4.jsxs;
    var _closure1_slot17 = var8;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.UserCheckIcon;
    var4 = {
        'size': 'sm',
        'color': 'white'
    };
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot19 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.UserPlatformIcon;
    var4 = {
        'size': 'sm',
        'color': 'white'
    };
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot20 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.WishlistEmptyState;
    var4 = {};
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun70735: for (var _fun70735_ip = 0;;) switch (_fun70735_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var _closure2_slot0 = var17;
                var14 = var0.channel;
                var _closure2_slot1 = var14;
                var15 = var0.displayProfile;
                var _closure2_slot2 = var15;
                var45 = var0.showUserProfileActionSheet;
                var _closure2_slot3 = var45;
                var40 = var0.disableCalls;
                var39 = var0.disableMessage;
                var54 = var0.disableStatus;
                var6 = var0.isPreviewingChanges;
                var _closure2_slot4 = var6;
                var38 = var0.location;
                var32 = var0.navigateToPremium;
                var _closure2_slot5 = var32;
                var25 = var0.navigateToShop;
                var _closure2_slot6 = var25;
                var33 = var0.initialSection;
                var4 = undefined;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var2 = _closure1_slot16;
                var1 = _closure1_slot24;
                var0 = {};
                var0.user = var17;
                var18 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot23;
                var0 = {};
                var0.user = var17;
                var10 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 13;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var12 = var1.bind(var4)();
                var _closure2_slot7 = var12;
                var1 = 43;
                var1 = var0[var1];
                var3 = var2.bind(var4)(var1);
                var1 = _closure1_slot15;
                var9 = var3.bind(var4)(var1);
                var1 = 44;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var36 = var1.bottom;
                var2 = _closure1_slot0;
                var1 = 14;
                var0 = var0[var1];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var35
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var3.bind(var5)(var2, var0);
                var _closure2_slot8 = var16;
                var0 = null;
                var2 = var0 == var16;
                var3 = undefined;
                if (var2) {
                    _fun70735_ip = 331;
                    continue _fun70735
                }
            case 326:
                var3 = var16.id;
            case 331:
                var2 = var17.id;
                var28 = var3 === var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = var5[var1];
                var13 = var3.bind(var4)(var2);
                var8 = var13.useStateFromStoresObject;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var35
                    var0 = {};
                    var3 = _closure1_slot7;
                    var4 = var3.getRelationshipType;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.relationshipType = var2;
                    var2 = var3.getOriginApplicationId;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.originApplicationId = var1;
                    return var0;
                };
                var2 = var8.bind(var13)(var7, var2);
                var20 = var2.relationshipType;
                var47 = var2.originApplicationId;
                var2 = 45;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useIncomingGameRelationshipsForUser;
                var2 = var17.id;
                var41 = var7.bind(var8)(var2);
                var2 = 46;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useIsGameFriends;
                var2 = var17.id;
                var19 = var7.bind(var8)(var2);
                var2 = 47;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useUserProfileGameFriendApplicationIds;
                var2 = {};
                var7 = var17.id;
                var2.userId = var7;
                var57 = var3.bind(var5)(var2);
                _closure2_slot9 = var57;
                if (!(var0 == var15)) {
                    _fun70735_ip = 514;
                    continue _fun70735
                }
            case 498:
                var2 = var0 == var14;
                var48 = undefined;
                if (var2) {
                    _fun70735_ip = 512;
                    continue _fun70735
                }
            case 507:
                var48 = var14.guild_id;
            case 512:
                _fun70735_ip = 534;
                continue _fun70735;
            case 514:
                var3 = var15.guildId;
                var5 = var0 != var3;
                var2 = undefined;
                if (!var5) {
                    _fun70735_ip = 531;
                    continue _fun70735
                }
            case 528:
                var2 = var3;
            case 531:
                var48 = var2;
            case 534:
                _closure2_slot10 = var48;
                var7 = _closure1_slot16;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 48;
                var2 = var8[var2];
                var5 = var3.bind(var4)(var2);
                var2 = {};
                var2.user = var17;
                var2.guildId = var48;
                var42 = var7.bind(var4)(var5, var2);
                var13 = _closure1_slot4;
                var7 = var13.useMemo;
                var5 = new Array(2);
                var5[0] = var48;
                var5[1] = var17;
                var2 = function() { // Environment: var35
                    _fun70738: for (var _fun70738_ip = 0;;) switch (_fun70738_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun70738_ip = 21;
                                continue _fun70738
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var1 == var0)) {
                                _fun70738_ip = 25;
                                continue _fun70738
                            }
                        case 21:
                            var0 = {};
                            _fun70738_ip = 56;
                            continue _fun70738;
                        case 25:
                            var1 = {};
                            var3 = _closure2_slot10;
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
                var13 = var7.bind(var13)(var2, var5);
                var24 = _closure1_slot0;
                var2 = 49;
                var2 = var8[var2];
                var5 = var24.bind(var4)(var2);
                var2 = var5.useSubscribeGuildMembers;
                var7 = 'UserProfileContent';
                var2 = var2.bind(var5)(var13, var7);
                var2 = 50;
                var2 = var8[var2];
                var5 = var3.bind(var4)(var2);
                var2 = var17.id;
                var31 = var5.bind(var4)(var2);
                var2 = var8[var1];
                var21 = var24.bind(var4)(var2);
                var13 = var21.useStateFromStoresObject;
                var2 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var35
                    var1 = _closure1_slot9;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var13.bind(var21)(var5, var2);
                var22 = var2.pendingBanner;
                var27 = var2.pendingAvatar;
                var55 = var2.pendingAvatarDecoration;
                var52 = var2.pendingGlobalName;
                var51 = var2.pendingPronouns;
                var5 = var2.pendingBio;
                _closure2_slot11 = var5;
                var21 = var2.pendingAccentColor;
                var13 = var2.pendingThemeColors;
                var23 = var2.pendingLegacyUsernameDisabled;
                var2 = 51;
                var2 = var8[var2];
                var26 = var24.bind(var4)(var2);
                var24 = var26.getPendingAvatarSrc;
                var2 = {};
                var29 = var17.id;
                var2.userId = var29;
                var2.image = var27;
                var56 = var24.bind(var26)(var2);
                var2 = 31;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var50 = var2.bind(var4)(var15, var23);
                var2 = 52;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.user = var17;
                var2.displayProfile = var15;
                var8 = undefined;
                if (!var6) {
                    _fun70735_ip = 854;
                    continue _fun70735
                }
            case 851:
                var8 = var13;
            case 854:
                var2.pendingThemeColors = var8;
                var2 = var3.bind(var4)(var2);
                var29 = var2.theme;
                var27 = var2.primaryColor;
                var24 = var2.secondaryColor;
                var37 = var0 != var27;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 53;
                var2 = var8[var2];
                var26 = var3.bind(var4)(var2);
                var23 = var26.useUserProfileColors;
                var2 = {};
                var2.theme = var29;
                var2.primaryColor = var27;
                var2.secondaryColor = var24;
                var2 = var23.bind(var26)(var2);
                var43 = var2.gradientFallbackBackground;
                var44 = var2.containerBackground;
                _closure2_slot12 = var44;
                var23 = var2.avatarBackground;
                var53 = var2.statusBackground;
                var26 = _closure1_slot4;
                var2 = var26.useRef;
                var30 = var2.bind(var26)(var0);
                var2 = 54;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useMobileWishlistOwnerExperiment;
                var2 = var2.bind(var3)(var7);
                var26 = var2.enabled;
                if (!var26) {
                    _fun70735_ip = 1010;
                    continue _fun70735
                }
            case 1007:
                var26 = var28;
            case 1010:
                _closure2_slot13 = var26;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = var3[var1];
                var29 = var2.bind(var4)(var1);
                var8 = var29.useStateFromStores;
                var1 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var35
                    _fun70740: for (var _fun70740_ip = 0;;) switch (_fun70740_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var0 = null;
                            if (!var2) {
                                _fun70740_ip = 39;
                                continue _fun70740
                            }
                        case 12:
                            var3 = _closure1_slot10;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var1 = var8.bind(var29)(var7, var1);
                _closure2_slot14 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var49 = 0;
                var29 = var7.bind(var8)(var49);
                var8 = _closure1_slot3;
                var7 = 2;
                var29 = var8.bind(var4)(var29, var7);
                var7 = var29[var49];
                var8 = 1;
                var29 = var29[var8];
                _closure2_slot15 = var29;
                var58 = _closure1_slot4;
                var46 = var58.useCallback;
                var34 = function(arg0) { // Environment: var35
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot15;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var29 = new Array(0);
                var29 = var46.bind(var58)(var34, var29);
                var58 = _closure1_slot4;
                var46 = var58.useCallback;
                var34 = new Array(1);
                var34[0] = var32;
                var32 = function() { // Environment: var35
                    _fun70742: for (var _fun70742_ip = 0;;) switch (_fun70742_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun70742_ip = 56;
                                continue _fun70742
                            }
                        case 48:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var59 = var46.bind(var58)(var32, var34);
                var46 = _closure1_slot4;
                var34 = var46.useCallback;
                var32 = new Array(1);
                var32[0] = var25;
                var25 = function() { // Environment: var35
                    _fun70743: for (var _fun70743_ip = 0;;) switch (_fun70743_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun70743_ip = 56;
                                continue _fun70743
                            }
                        case 48:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var58 = var34.bind(var46)(var25, var32);
                var46 = _closure1_slot16;
                var32 = _closure1_slot1;
                var25 = 55;
                var25 = var3[var25];
                var34 = var32.bind(var4)(var25);
                var25 = {};
                var25.navigateToPremium = var59;
                var25.navigateToShop = var58;
                var25.hasCustomProfileTheme = var37;
                var25 = var46.bind(var4)(var34, var25);
                _closure2_slot16 = var25;
                var46 = _closure1_slot4;
                var34 = var46.useCallback;
                var25 = new Array(14);
                var25[0] = var17;
                var25[1] = var16;
                var25[2] = var44;
                var25[3] = var12;
                var25[4] = var6;
                var25[5] = var59;
                var25[6] = var58;
                var25[7] = var37;
                var25[8] = var48;
                var25[9] = var57;
                var25[10] = var15;
                var25[11] = var5;
                var25[12] = var14;
                var25[13] = var45;
                var5 = function() { // Environment: var35
                    _fun70744: for (var _fun70744_ip = 0;;) switch (_fun70744_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun70744_ip = 814;
                                continue _fun70744
                            }
                        case 16:
                            var1 = _closure2_slot8;
                            if (!(var0 != var1)) {
                                _fun70744_ip = 814;
                                continue _fun70744
                            }
                        case 27:
                            var11 = {};
                            var1 = _closure2_slot12;
                            var11.backgroundColor = var1;
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var5 = _closure2_slot7;
                            var6 = var5.cards;
                            var1 = new Array(2);
                            var1[0] = var6;
                            var5 = var5.profileContent;
                            var1[1] = var5;
                            var2.style = var1;
                            var1 = _closure2_slot0;
                            var1 = var1.isProvisional;
                            if (!var1) {
                                _fun70744_ip = 160;
                                continue _fun70744
                            }
                        case 95:
                            var9 = _closure1_slot16;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 56;
                            var5 = var8[var5];
                            var8 = undefined;
                            var5 = var6.bind(var8)(var5);
                            var6 = var5.UserProfileProvisionalAccountExplainerCard;
                            var5 = {};
                            var5.style = var11;
                            var12 = _closure2_slot0;
                            var12 = var12.id;
                            var5.userId = var12;
                            var12 = 16;
                            var5.iconSize = var12;
                            var1 = var9.bind(var8)(var6, var5);
                        case 160:
                            var5 = new Array(10);
                            var5[0] = var1;
                            var1 = _closure2_slot0;
                            var6 = var1.id;
                            var1 = _closure2_slot8;
                            var1 = var1.id;
                            var1 = var6 === var1;
                            if (!var1) {
                                _fun70744_ip = 200;
                                continue _fun70744
                            }
                        case 193:
                            var6 = _closure2_slot4;
                            var1 = !var6;
                        case 200:
                            if (!var1) {
                                _fun70744_ip = 207;
                                continue _fun70744
                            }
                        case 203:
                            var1 = _closure2_slot16;
                        case 207:
                            var5[1] = var1;
                            var9 = _closure1_slot16;
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 57;
                            var6 = var6[var1];
                            var1 = undefined;
                            var8 = var8.bind(var1)(var6);
                            var6 = {};
                            var12 = _closure2_slot0;
                            var6.user = var12;
                            var12 = _closure2_slot8;
                            var6.currentUser = var12;
                            var12 = _closure2_slot10;
                            var6.guildId = var12;
                            var6.style = var11;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[2] = var6;
                            var6 = _closure2_slot9;
                            var8 = var6.length;
                            var6 = 0;
                            var6 = var8 > var6;
                            if (!var6) {
                                _fun70744_ip = 354;
                                continue _fun70744
                            }
                        case 296:
                            var12 = _closure1_slot16;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 58;
                            var8 = var13[var8];
                            var9 = var9.bind(var1)(var8);
                            var8 = {};
                            var13 = _closure2_slot0;
                            var13 = var13.id;
                            var8.userId = var13;
                            var13 = _closure2_slot9;
                            var8.applicationIds = var13;
                            var8.style = var11;
                            var6 = var12.bind(var1)(var9, var8);
                        case 354:
                            var5[3] = var6;
                            var9 = _closure1_slot16;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var6 = 59;
                            var6 = var12[var6];
                            var8 = var8.bind(var1)(var6);
                            var6 = {};
                            var12 = _closure2_slot0;
                            var12 = var12.id;
                            var6.userId = var12;
                            var12 = _closure2_slot2;
                            var6.displayProfile = var12;
                            var13 = _closure2_slot4;
                            var12 = undefined;
                            if (!var13) {
                                _fun70744_ip = 419;
                                continue _fun70744
                            }
                        case 415:
                            var12 = _closure2_slot11;
                        case 419:
                            var6.pendingBio = var12;
                            var6.style = var11;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[4] = var6;
                            var6 = _closure2_slot10;
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun70744_ip = 506;
                                continue _fun70744
                            }
                        case 449:
                            var12 = _closure1_slot16;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 60;
                            var8 = var13[var8];
                            var9 = var9.bind(var1)(var8);
                            var8 = {};
                            var13 = _closure2_slot0;
                            var13 = var13.id;
                            var8.userId = var13;
                            var13 = _closure2_slot10;
                            var8.guildId = var13;
                            var8.style = var11;
                            var6 = var12.bind(var1)(var9, var8);
                        case 506:
                            var5[5] = var6;
                            var6 = _closure2_slot1;
                            var8 = var0 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun70744_ip = 532;
                                continue _fun70744
                            }
                        case 523:
                            var8 = _closure2_slot1;
                            var6 = var8.guild_id;
                        case 532:
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun70744_ip = 623;
                                continue _fun70744
                            }
                        case 539:
                            var12 = _closure1_slot16;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 61;
                            var8 = var13[var8];
                            var9 = var9.bind(var1)(var8);
                            var8 = {};
                            var13 = _closure2_slot0;
                            var8.user = var13;
                            var13 = _closure2_slot8;
                            var8.currentUser = var13;
                            var13 = _closure2_slot1;
                            var14 = var13.guild_id;
                            var8.guildId = var14;
                            var13 = var13.id;
                            var8.channelId = var13;
                            var13 = _closure2_slot3;
                            var8.showUserProfile = var13;
                            var8.style = var11;
                            var6 = var12.bind(var1)(var9, var8);
                        case 623:
                            var5[6] = var6;
                            var15 = _closure1_slot16;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 62;
                            var9 = var13[var6];
                            var9 = var8.bind(var1)(var9);
                            var14 = var9.UserProfileAccountConnectionsCard;
                            var9 = {};
                            var12 = _closure2_slot0;
                            var16 = var12.id;
                            var9.userId = var16;
                            var9.style = var11;
                            var9 = var15.bind(var1)(var14, var9);
                            var5[7] = var9;
                            var9 = _closure1_slot16;
                            var6 = var13[var6];
                            var6 = var8.bind(var1)(var6);
                            var8 = var6.UserProfileApplicationRoleConnectionsCard;
                            var6 = {};
                            var12 = var12.id;
                            var6.userId = var12;
                            var6.style = var11;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[8] = var6;
                            var6 = _closure2_slot4;
                            var6 = !var6;
                            if (!var6) {
                                _fun70744_ip = 798;
                                continue _fun70744
                            }
                        case 740:
                            var9 = _closure1_slot16;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var7 = 63;
                            var7 = var12[var7];
                            var8 = var8.bind(var1)(var7);
                            var7 = {};
                            var12 = _closure2_slot0;
                            var12 = var12.id;
                            var7.userId = var12;
                            var7.style = var11;
                            var10 = _closure2_slot3;
                            var7.onBack = var10;
                            var6 = var9.bind(var1)(var8, var7);
                        case 798:
                            var5[9] = var6;
                            var2.children = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        case 814:
                            return var0;
                    }
                };
                var25 = var34.bind(var46)(var5, var25);
                _closure2_slot17 = var25;
                var34 = _closure1_slot16;
                var5 = 42;
                var5 = var3[var5];
                var32 = var32.bind(var4)(var5);
                var5 = {};
                var5.wishlistId = var1;
                var5.backgroundColor = var53;
                var5 = var34.bind(var4)(var32, var5);
                _closure2_slot18 = var5;
                var34 = _closure1_slot4;
                var32 = var34.useCallback;
                var46 = var12.profileContent;
                var5 = new Array(3);
                var5[0] = var46;
                var5[1] = var1;
                var5[2] = var53;
                var1 = function() { // Environment: var35
                    _fun70745: for (var _fun70745_ip = 0;;) switch (_fun70745_ip) {
                        case 0:
                            var3 = _closure1_slot16;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var5 = _closure2_slot7;
                            var5 = var5.profileContent;
                            var1.style = var5;
                            var6 = _closure2_slot14;
                            var5 = null;
                            if (!(var5 != var6)) {
                                _fun70745_ip = 46;
                                continue _fun70745
                            }
                        case 40:
                            var0 = _closure2_slot18;
                            _fun70745_ip = 50;
                            continue _fun70745;
                        case 46:
                            var0 = _closure1_slot21;
                        case 50:
                            var1.children = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var1 = var32.bind(var34)(var1, var5);
                _closure2_slot19 = var1;
                var34 = _closure1_slot4;
                var32 = var34.useMemo;
                var5 = new Array(2);
                var5[0] = var25;
                var5[1] = var1;
                var1 = function() { // Environment: var35
                    var1 = {};
                    var0 = 'main';
                    var1.id = var0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 27;
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
                    var0 = _closure2_slot17;
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
                    var2 = _closure2_slot19;
                    var2 = var2.bind(var3)();
                    var1.page = var2;
                    var0[1] = var1;
                    return var0;
                };
                var5 = var32.bind(var34)(var1, var5);
                var1 = 64;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var7;
                var7 = _closure1_slot11;
                var32 = var7.WISHLIST;
                var7 = 0;
                if (!(var33 === var32)) {
                    _fun70735_ip = 1491;
                    continue _fun70735
                }
            case 1488:
                var7 = var8;
            case 1491:
                var1.defaultIndex = var7;
                var8 = _closure1_slot1;
                var32 = _closure1_slot2;
                var7 = 40;
                var7 = var32[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var1.itemSpacing = var7;
                var1.items = var5;
                var33 = var2.bind(var3)(var1);
                if (!(var0 != var17)) {
                    _fun70735_ip = 2830;
                    continue _fun70735
                }
            case 1548:
                if (!(var0 != var16)) {
                    _fun70735_ip = 2830;
                    continue _fun70735
                }
            case 1555:
                var46 = {};
                var46.backgroundColor = var44;
                _closure2_slot20 = var46;
                var3 = _closure1_slot16;
                var7 = _closure1_slot1;
                var57 = _closure1_slot2;
                var1 = 65;
                var1 = var57[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var1.user = var17;
                var1.style = var46;
                var32 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot16;
                var2 = _closure1_slot26;
                var1 = {};
                var1.guildId = var48;
                var34 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot17;
                var2 = _closure1_slot18;
                var1 = {};
                var8 = _closure1_slot16;
                var5 = 66;
                var5 = var57[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.user = var17;
                var5.displayProfile = var15;
                var5.bannerHeight = var9;
                var9 = undefined;
                if (!var6) {
                    _fun70735_ip = 1675;
                    continue _fun70735
                }
            case 1672:
                var9 = var22;
            case 1675:
                var5.pendingBanner = var9;
                var9 = undefined;
                if (!var6) {
                    _fun70735_ip = 1688;
                    continue _fun70735
                }
            case 1685:
                var9 = var56;
            case 1688:
                var5.pendingAvatarSrc = var9;
                var9 = undefined;
                if (!var6) {
                    _fun70735_ip = 1710;
                    continue _fun70735
                }
            case 1698:
                var22 = var0 != var21;
                var9 = undefined;
                if (!var22) {
                    _fun70735_ip = 1710;
                    continue _fun70735
                }
            case 1707:
                var9 = var21;
            case 1710:
                var5.pendingAccentColor = var9;
                var9 = undefined;
                if (!var6) {
                    _fun70735_ip = 1732;
                    continue _fun70735
                }
            case 1720:
                var21 = var0 != var13;
                var9 = undefined;
                if (!var21) {
                    _fun70735_ip = 1732;
                    continue _fun70735
                }
            case 1729:
                var9 = var13;
            case 1732:
                var5.pendingThemeColors = var9;
                var5.disableInteraction = var6;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot17;
                var8 = _closure1_slot5;
                var7 = {};
                var22 = _closure1_slot16;
                var21 = _closure1_slot1;
                var57 = _closure1_slot2;
                var13 = 67;
                var13 = var57[var13];
                var21 = var21.bind(var4)(var13);
                var13 = {};
                var13.user = var17;
                var13.guildId = var48;
                var13.disableStatus = var54;
                var54 = undefined;
                if (!var6) {
                    _fun70735_ip = 1813;
                    continue _fun70735
                }
            case 1810:
                var54 = var56;
            case 1813:
                var13.pendingAvatarSrc = var54;
                var54 = undefined;
                if (!var6) {
                    _fun70735_ip = 1826;
                    continue _fun70735
                }
            case 1823:
                var54 = var55;
            case 1826:
                var13.pendingAvatarDecoration = var54;
                var13.backgroundColor = var23;
                var23 = {};
                var23.backgroundColor = var53;
                var13.statusStyle = var23;
                var21 = var22.bind(var4)(var21, var13);
                var13 = new Array(2);
                var13[0] = var21;
                var23 = _closure1_slot17;
                var22 = _closure1_slot1;
                var53 = _closure1_slot2;
                var21 = 68;
                var21 = var53[var21];
                var22 = var22.bind(var4)(var21);
                var21 = {};
                var21.fallbackBackground = var43;
                var21.primaryColor = var27;
                var21.secondaryColor = var24;
                var27 = var12.profileContentWrapper;
                var24 = new Array(2);
                var24[0] = var27;
                var27 = {};
                if (!var28) {
                    _fun70735_ip = 1925;
                    continue _fun70735
                }
            case 1920:
                var28 = 0;
                if (!var6) {
                    _fun70735_ip = 1938;
                    continue _fun70735
                }
            case 1925:
                var43 = var0 != var31;
                var28 = 0;
                if (var43) {
                    _fun70735_ip = 1938;
                    continue _fun70735
                }
            case 1934:
                var28 = _closure1_slot13;
            case 1938:
                var27.paddingTop = var28;
                var28 = _closure1_slot12;
                var28 = var36 + var28;
                var27.paddingBottom = var28;
                var24[1] = var27;
                var21.containerStyle = var24;
                var28 = _closure1_slot16;
                var27 = _closure1_slot22;
                var24 = {};
                var24.customStatusActivity = var31;
                var24.user = var17;
                var24.guildId = var48;
                var36 = var0 == var14;
                var31 = undefined;
                if (var36) {
                    _fun70735_ip = 2002;
                    continue _fun70735
                }
            case 1997:
                var31 = var14.id;
            case 2002:
                var24.channelId = var31;
                var24.hasCustomProfileTheme = var37;
                var24.showUserProfileActionSheet = var45;
                var24.isPreviewingChanges = var6;
                var24.bubbleRef = var30;
                var27 = var28.bind(var4)(var27, var24);
                var24 = new Array(3);
                var24[0] = var27;
                var30 = _closure1_slot17;
                var28 = _closure1_slot5;
                var27 = {};
                var36 = var12.primaryInfo;
                var31 = new Array(2);
                var31[0] = var36;
                var36 = var12.profileContent;
                var31[1] = var36;
                var27.style = var31;
                var43 = _closure1_slot16;
                var36 = _closure1_slot25;
                var31 = {};
                var31.user = var17;
                var53 = var0 == var14;
                var49 = undefined;
                if (var53) {
                    _fun70735_ip = 2106;
                    continue _fun70735
                }
            case 2101:
                var49 = var14.id;
            case 2106:
                var31.channelId = var49;
                var31.displayProfile = var15;
                var49 = undefined;
                if (!var6) {
                    _fun70735_ip = 2123;
                    continue _fun70735
                }
            case 2120:
                var49 = var52;
            case 2123:
                var31.displayNameOverride = var49;
                var49 = undefined;
                if (!var6) {
                    _fun70735_ip = 2136;
                    continue _fun70735
                }
            case 2133:
                var49 = var51;
            case 2136:
                var31.pronounsOverride = var49;
                var49 = undefined;
                if (!var6) {
                    _fun70735_ip = 2149;
                    continue _fun70735
                }
            case 2146:
                var49 = var50;
            case 2149:
                var31.badgesOverride = var49;
                var31.badgeContainerBackground = var44;
                var31.isPreviewingChanges = var6;
                var36 = var43.bind(var4)(var36, var31);
                var31 = new Array(7);
                var31[0] = var36;
                var43 = var17.id;
                var36 = var16.id;
                var36 = var43 !== var36;
                if (!var36) {
                    _fun70735_ip = 2198;
                    continue _fun70735
                }
            case 2195:
                var36 = var42;
            case 2198:
                var31[1] = var36;
                var36 = _closure1_slot14;
                var36 = var36.PENDING_INCOMING;
                var36 = var20 === var36;
                if (!var36) {
                    _fun70735_ip = 2290;
                    continue _fun70735
                }
            case 2219:
                var44 = _closure1_slot16;
                var43 = _closure1_slot1;
                var49 = _closure1_slot2;
                var42 = 69;
                var42 = var49[var42];
                var43 = var43.bind(var4)(var42);
                var42 = {};
                var42.user = var17;
                var50 = var0 == var14;
                var49 = undefined;
                if (var50) {
                    _fun70735_ip = 2263;
                    continue _fun70735
                }
            case 2258:
                var49 = var14.id;
            case 2263:
                var42.channelId = var49;
                var42.guildId = var48;
                var42.applicationId = var47;
                var42.style = var46;
                var42.showUserProfile = var45;
                var36 = var44.bind(var4)(var43, var42);
            case 2290:
                var31[2] = var36;
                var36 = var41.map;
                var35 = function(arg0) { // Environment: var35
                    _fun70747: for (var _fun70747_ip = 0;;) switch (_fun70747_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 69;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.user = var6;
                            var6 = true;
                            var1.isGameRelationship = var6;
                            var6 = var0.applicationId;
                            var1.applicationId = var6;
                            var7 = _closure2_slot1;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun70747_ip = 85;
                                continue _fun70747
                            }
                        case 76:
                            var7 = _closure2_slot1;
                            var6 = var7.id;
                        case 85:
                            var1.channelId = var6;
                            var6 = _closure2_slot10;
                            var1.guildId = var6;
                            var6 = _closure2_slot20;
                            var1.style = var6;
                            var5 = _closure2_slot3;
                            var1.showUserProfile = var5;
                            var0 = var0.applicationId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var35 = var36.bind(var41)(var35);
                var31[3] = var35;
                var31[4] = var32;
                var35 = var17.id;
                var32 = var16.id;
                var32 = var35 === var32;
                if (!var32) {
                    _fun70735_ip = 2339;
                    continue _fun70735
                }
            case 2336:
                var32 = !var6;
            case 2339:
                if (!var32) {
                    _fun70735_ip = 2345;
                    continue _fun70735
                }
            case 2342:
                var32 = var34;
            case 2345:
                var31[5] = var32;
                var34 = var17.id;
                var32 = var16.id;
                var32 = var34 !== var32;
                if (!var32) {
                    _fun70735_ip = 2457;
                    continue _fun70735
                }
            case 2366:
                var36 = _closure1_slot16;
                var35 = _closure1_slot1;
                var41 = _closure1_slot2;
                var34 = 70;
                var34 = var41[var34];
                var35 = var35.bind(var4)(var34);
                var34 = {};
                var34.user = var17;
                if (var40) {
                    _fun70735_ip = 2413;
                    continue _fun70735
                }
            case 2399:
                var41 = _closure1_slot14;
                var41 = var41.BLOCKED;
                var40 = var20 === var41;
            case 2413:
                if (var40) {
                    _fun70735_ip = 2422;
                    continue _fun70735
                }
            case 2416:
                var40 = var17.isProvisional;
            case 2422:
                var34.disableCalls = var40;
                var34.disableMessage = var39;
                var34.location = var38;
                var34.hasCustomProfileTheme = var37;
                var37 = var12.primaryButtons;
                var34.style = var37;
                var32 = var36.bind(var4)(var35, var34);
            case 2457:
                var31[6] = var32;
                var27.children = var31;
                var27 = var30.bind(var4)(var28, var27);
                var24[1] = var27;
                if (var26) {
                    _fun70735_ip = 2487;
                    continue _fun70735
                }
            case 2478:
                var25 = var25.bind(var4)();
                _fun70735_ip = 2626;
                continue _fun70735;
            case 2487:
                var28 = _closure1_slot17;
                var27 = _closure1_slot5;
                var26 = {};
                var26.onLayout = var29;
                var30 = _closure1_slot16;
                var29 = {};
                var31 = var12.profileTablist;
                var29.style = var31;
                var36 = _closure1_slot16;
                var31 = _closure1_slot0;
                var34 = _closure1_slot2;
                var32 = 71;
                var32 = var34[var32];
                var32 = var31.bind(var4)(var32);
                var35 = var32.Tabs;
                var32 = {};
                var32.state = var33;
                var32 = var36.bind(var4)(var35, var32);
                var29.children = var32;
                var30 = var30.bind(var4)(var27, var29);
                var29 = new Array(2);
                var29[0] = var30;
                var32 = _closure1_slot16;
                var30 = 72;
                var30 = var34[var30];
                var30 = var31.bind(var4)(var30);
                var31 = var30.SegmentedControlPages;
                var30 = {};
                var30.state = var33;
                var30 = var32.bind(var4)(var31, var30);
                var29[1] = var30;
                var26.children = var29;
                var25 = var28.bind(var4)(var27, var26);
            case 2626:
                var24[2] = var25;
                var21.children = var24;
                var21 = var23.bind(var4)(var22, var21);
                var13[1] = var21;
                var7.children = var13;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun70735_ip = 2814;
                    continue _fun70735
                }
            case 2667:
                var9 = _closure1_slot17;
                var8 = _closure1_slot5;
                var7 = {};
                var12 = var12.bannerButtons;
                var7.style = var12;
                var21 = var17.id;
                var13 = var16.id;
                var12 = null;
                if (!(var21 !== var13)) {
                    _fun70735_ip = 2742;
                    continue _fun70735
                }
            case 2703:
                var13 = var17.bot;
                var12 = null;
                if (var13) {
                    _fun70735_ip = 2742;
                    continue _fun70735
                }
            case 2714:
                var13 = _closure1_slot14;
                var13 = var13.FRIEND;
                if (!(var20 !== var13)) {
                    _fun70735_ip = 2739;
                    continue _fun70735
                }
            case 2728:
                var13 = null;
                if (!var19) {
                    _fun70735_ip = 2736;
                    continue _fun70735
                }
            case 2733:
                var13 = var18;
            case 2736:
                var10 = var13;
            case 2739:
                var12 = var10;
            case 2742:
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot16;
                var12 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 73;
                var11 = var18[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11.user = var17;
                var11.currentUser = var16;
                var11.displayProfile = var15;
                var11.channel = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 2814:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2830:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 74;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PrimaryInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 3102, 1621, 5642, 4667, 7073, 7058, 660, 4908, 33, 7061, 566, 3279, 8503, 1307, 7081, 7082, 7070, 8802, 7071, 5785, 8148, 3237, 7585, 1234, 8600, 3251, 8804, 7063, 3956, 5321, 3149, 8348, 8418, 8504, 4090, 7584, 671, 7977, 8808, 8347, 1568, 8805, 11680, 11681, 11682, 8500, 8502, 5782, 7059, 7062, 8832, 11683, 11620, 8510, 11684, 8420, 8657, 8662, 11685, 8718, 8321, 11688, 7064, 7067, 7068, 11689, 11691, 8492, 8494, 11696, 2]);