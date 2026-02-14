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
        _fun92475: for (var _fun92475_ip = 0;;) switch (_fun92475_ip) {
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
                var5 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = new Array(1);
                var7[0] = var14;
                var5 = function() { // Environment: var1
                    _fun92476: for (var _fun92476_ip = 0;;) switch (_fun92476_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun92476_ip = 32;
                                continue _fun92476
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
                    _fun92475_ip = 272;
                    continue _fun92475
                }
            case 229:
                var13 = var2 == var11;
                var1 = null;
                if (!var13) {
                    _fun92475_ip = 272;
                    continue _fun92475
                }
            case 238:
                var1 = null;
                if (!var7) {
                    _fun92475_ip = 272;
                    continue _fun92475
                }
            case 243:
                var1 = null;
                if (var9) {
                    _fun92475_ip = 272;
                    continue _fun92475
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
                    _fun92475_ip = 305;
                    continue _fun92475
                }
            case 291:
                var2 = var4.current;
                var1 = var2.label;
                var5 = var1.bind(var2)();
            case 305:
                var2 = _closure1_slot17;
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
                    _fun92475_ip = 351;
                    continue _fun92475
                }
            case 348:
                var7 = !var9;
            case 351:
                var0.editEnabled = var7;
                var7 = undefined;
                if (var9) {
                    _fun92475_ip = 364;
                    continue _fun92475
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
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.user;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 21;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var8.bind(var3)(var0);
        var0 = var1.useUserProfileAnalyticsContext;
        var0 = var0.bind(var1)();
        var0 = var0.trackUserProfileAction;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot1;
        var0 = 22;
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
            var1 = 23;
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
        var0 = 24;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useName;
        var0 = var0.bind(var1)(var2);
        var _closure2_slot4 = var0;
        var2 = _closure1_slot17;
        var0 = 25;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var6 = var5.UserCheckIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var3)(var6, var5);
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
    var _closure1_slot21 = var0;
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
            var2 = 29;
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
        var3 = _closure1_slot17;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 25;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot17;
        var5 = 30;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var6 = var5.UserPlatformIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var2)(var6, var5);
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
    var _closure1_slot22 = var0;
    var1 = function arg0() {
        _fun92483: for (var _fun92483_ip = 0;;) switch (_fun92483_ip) {
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
                var0 = 24;
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
                    _fun92483_ip = 151;
                    continue _fun92483
                }
            case 146:
                var2 = var15.guildId;
            case 151:
                var17 = var7.bind(var14)(var2, var17, var16);
                var14 = var17;
                if (!(var12 != var1)) {
                    _fun92483_ip = 192;
                    continue _fun92483
                }
            case 165:
                var2 = var1.trim;
                var2 = var2.bind(var1)();
                var7 = var2.length;
                var2 = 0;
                var14 = var17;
                if (!(var7 > var2)) {
                    _fun92483_ip = 192;
                    continue _fun92483
                }
            case 189:
                var14 = var1;
            case 192:
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 21;
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
                var2 = _closure1_slot17;
                var1 = _closure1_slot1;
                var0 = 35;
                var0 = var17[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var16;
                var17 = var12 == var15;
                var16 = undefined;
                if (var17) {
                    _fun92483_ip = 306;
                    continue _fun92483
                }
            case 301:
                var16 = var15.guildId;
            case 306:
                var0.guildId = var16;
                var0.displayName = var14;
                if (!(var12 == var13)) {
                    _fun92483_ip = 336;
                    continue _fun92483
                }
            case 318:
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun92483_ip = 333;
                    continue _fun92483
                }
            case 327:
                var14 = var15.pronouns;
            case 333:
                var13 = var14;
            case 336:
                var0.pronouns = var13;
                if (!(var12 != var11)) {
                    _fun92483_ip = 348;
                    continue _fun92483
                }
            case 345:
                var10 = var11;
            case 348:
                var0.badges = var10;
                var0.style = var9;
                var0.badgeContainerBackground = var8;
                var8 = undefined;
                if (var4) {
                    _fun92483_ip = 370;
                    continue _fun92483
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
                    _fun92483_ip = 443;
                    continue _fun92483
                }
            case 440:
                var5 = var7;
            case 443:
                var0.onPressUserTag = var5;
                var5 = undefined;
                if (var4) {
                    _fun92483_ip = 460;
                    continue _fun92483
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
    var _closure1_slot23 = var1;
    var0 = function arg0() {
        _fun92486: for (var _fun92486_ip = 0;;) switch (_fun92486_ip) {
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
                var0 = 21;
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
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot7;
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
                var2 = _closure1_slot17;
                var0 = 37;
                var0 = var18[var0];
                var1 = var19.bind(var3)(var0);
                var0 = {};
                var4 = var4.primaryButtons;
                var0.style = var4;
                var4 = _closure1_slot16;
                var0.maxWidth = var4;
                var13 = _closure1_slot17;
                var5 = 38;
                var4 = var18[var5];
                var4 = var8.bind(var3)(var4);
                var12 = var4.Button;
                var7 = {};
                var11 = 'primary';
                var7.variant = var11;
                var14 = _closure1_slot17;
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
                    _fun92486_ip = 368;
                    continue _fun92486
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
                _fun92486_ip = 425;
                continue _fun92486;
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
                    _fun92486_ip = 639;
                    continue _fun92486
                }
            case 470:
                var7 = _closure1_slot17;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.variant = var11;
                var12 = _closure1_slot17;
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
    var _closure1_slot24 = var0;
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
    var9 = var4.ScrollView;
    var _closure1_slot5 = var9;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot13 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var8 = var4.jsxs;
    var _closure1_slot18 = var8;
    var4 = var4.Fragment;
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun92490: for (var _fun92490_ip = 0;;) switch (_fun92490_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var _closure2_slot0 = var17;
                var14 = var0.channel;
                var _closure2_slot1 = var14;
                var15 = var0.displayProfile;
                var _closure2_slot2 = var15;
                var44 = var0.showUserProfileActionSheet;
                var _closure2_slot3 = var44;
                var39 = var0.disableCalls;
                var38 = var0.disableMessage;
                var50 = var0.disableStatus;
                var6 = var0.isPreviewingChanges;
                var _closure2_slot4 = var6;
                var37 = var0.location;
                var7 = var0.navigateToPremium;
                var _closure2_slot5 = var7;
                var3 = var0.navigateToShop;
                var _closure2_slot6 = var3;
                var53 = var0.initialSection;
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
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 13;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var10 = var1.bind(var4)();
                var _closure2_slot7 = var10;
                var1 = 42;
                var1 = var0[var1];
                var5 = var2.bind(var4)(var1);
                var1 = _closure1_slot16;
                var9 = var5.bind(var4)(var1);
                var1 = 43;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var31 = var1.bottom;
                var1 = _closure1_slot0;
                var8 = 14;
                var0 = var0[var8];
                var5 = var1.bind(var4)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var2.bind(var5)(var1, var0);
                var _closure2_slot8 = var16;
                var0 = null;
                var1 = var0 == var16;
                var2 = undefined;
                if (var1) {
                    _fun92490_ip = 311;
                    continue _fun92490
                }
            case 306:
                var2 = var16.id;
            case 311:
                var1 = var17.id;
                var26 = var2 === var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = var5[var8];
                var18 = var2.bind(var4)(var1);
                var13 = var18.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var1;
                var1 = function() { // Environment: var30
                    var0 = {};
                    var3 = _closure1_slot8;
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
                var1 = var13.bind(var18)(var12, var1);
                var18 = var1.relationshipType;
                var45 = var1.originApplicationId;
                var1 = 44;
                var1 = var5[var1];
                var13 = var2.bind(var4)(var1);
                var12 = var13.useIncomingGameRelationshipsForUser;
                var1 = var17.id;
                var34 = var12.bind(var13)(var1);
                var1 = 45;
                var1 = var5[var1];
                var13 = var2.bind(var4)(var1);
                var12 = var13.useIsGameFriends;
                var1 = var17.id;
                var13 = var12.bind(var13)(var1);
                var1 = 46;
                var1 = var5[var1];
                var5 = var2.bind(var4)(var1);
                var2 = var5.useUserProfileGameFriendApplicationIds;
                var1 = {};
                var12 = var17.id;
                var1.userId = var12;
                var54 = var2.bind(var5)(var1);
                _closure2_slot9 = var54;
                if (!(var0 == var15)) {
                    _fun92490_ip = 494;
                    continue _fun92490
                }
            case 478:
                var1 = var0 == var14;
                var40 = undefined;
                if (var1) {
                    _fun92490_ip = 492;
                    continue _fun92490
                }
            case 487:
                var40 = var14.guild_id;
            case 492:
                _fun92490_ip = 514;
                continue _fun92490;
            case 494:
                var2 = var15.guildId;
                var5 = var0 != var2;
                var1 = undefined;
                if (!var5) {
                    _fun92490_ip = 511;
                    continue _fun92490
                }
            case 508:
                var1 = var2;
            case 511:
                var40 = var1;
            case 514:
                _closure2_slot10 = var40;
                var12 = _closure1_slot4;
                var5 = var12.useMemo;
                var2 = new Array(2);
                var2[0] = var40;
                var2[1] = var17;
                var1 = function() { // Environment: var30
                    _fun92493: for (var _fun92493_ip = 0;;) switch (_fun92493_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun92493_ip = 21;
                                continue _fun92493
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var1 == var0)) {
                                _fun92493_ip = 25;
                                continue _fun92493
                            }
                        case 21:
                            var0 = {};
                            _fun92493_ip = 56;
                            continue _fun92493;
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
                var5 = var5.bind(var12)(var1, var2);
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var1 = 47;
                var1 = var21[var1];
                var2 = var24.bind(var4)(var1);
                var1 = var2.useSubscribeGuildMembers;
                var23 = 'UserProfileContent';
                var1 = var1.bind(var2)(var5, var23);
                var5 = _closure1_slot1;
                var1 = 48;
                var1 = var21[var1];
                var2 = var5.bind(var4)(var1);
                var1 = var17.id;
                var29 = var2.bind(var4)(var1);
                var1 = var21[var8];
                var19 = var24.bind(var4)(var1);
                var12 = var19.useStateFromStoresObject;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var30
                    var1 = _closure1_slot10;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var12.bind(var19)(var2, var1);
                var20 = var1.pendingBanner;
                var27 = var1.pendingAvatar;
                var51 = var1.pendingAvatarDecoration;
                var48 = var1.pendingGlobalName;
                var47 = var1.pendingPronouns;
                var2 = var1.pendingBio;
                _closure2_slot11 = var2;
                var19 = var1.pendingAccentColor;
                var12 = var1.pendingThemeColors;
                var22 = var1.pendingLegacyUsernameDisabled;
                var1 = 49;
                var1 = var21[var1];
                var25 = var24.bind(var4)(var1);
                var24 = var25.getPendingAvatarSrc;
                var1 = {};
                var28 = var17.id;
                var1.userId = var28;
                var1.image = var27;
                var52 = var24.bind(var25)(var1);
                var1 = 31;
                var1 = var21[var1];
                var1 = var5.bind(var4)(var1);
                var46 = var1.bind(var4)(var15, var22);
                var1 = 50;
                var1 = var21[var1];
                var5 = var5.bind(var4)(var1);
                var1 = {};
                var1.user = var17;
                var1.displayProfile = var15;
                var21 = undefined;
                if (!var6) {
                    _fun92490_ip = 802;
                    continue _fun92490
                }
            case 799:
                var21 = var12;
            case 802:
                var1.pendingThemeColors = var21;
                var1 = var5.bind(var4)(var1);
                var28 = var1.theme;
                var25 = var1.primaryColor;
                var22 = var1.secondaryColor;
                var36 = var0 != var25;
                _closure2_slot12 = var36;
                var5 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 51;
                var1 = var24[var1];
                var27 = var5.bind(var4)(var1);
                var21 = var27.useUserProfileColors;
                var1 = {};
                var1.theme = var28;
                var1.primaryColor = var25;
                var1.secondaryColor = var22;
                var1 = var21.bind(var27)(var1);
                var41 = var1.gradientFallbackBackground;
                var42 = var1.containerBackground;
                _closure2_slot13 = var42;
                var21 = var1.avatarBackground;
                var49 = var1.statusBackground;
                var27 = _closure1_slot4;
                var1 = var27.useRef;
                var28 = var1.bind(var27)(var0);
                var1 = 52;
                var1 = var24[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.useMobileWishlistOwnerExperiment;
                var1 = var1.bind(var5)(var23);
                var24 = var1.enabled;
                if (!var24) {
                    _fun92490_ip = 962;
                    continue _fun92490
                }
            case 959:
                var24 = var26;
            case 962:
                _closure2_slot14 = var24;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var23 = var5.bind(var4)(var1);
                var8 = var23.useStateFromStores;
                var1 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var30
                    _fun92495: for (var _fun92495_ip = 0;;) switch (_fun92495_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var0 = null;
                            if (!var2) {
                                _fun92495_ip = 39;
                                continue _fun92495
                            }
                        case 12:
                            var3 = _closure1_slot11;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var1 = var8.bind(var23)(var5, var1);
                _closure2_slot15 = var1;
                var8 = _closure1_slot4;
                var5 = var8.useState;
                var43 = 0;
                var5 = var5.bind(var8)(var43);
                var32 = _closure1_slot3;
                var23 = 2;
                var5 = var32.bind(var4)(var5, var23);
                var8 = var5[var43];
                var33 = 1;
                var5 = var5[var33];
                _closure2_slot16 = var5;
                var55 = _closure1_slot4;
                var35 = var55.useCallback;
                var27 = function(arg0) { // Environment: var30
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot16;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = new Array(0);
                var27 = var35.bind(var55)(var27, var5);
                var55 = _closure1_slot4;
                var35 = var55.useRef;
                var5 = new Array(0);
                var5 = var35.bind(var55)(var5);
                _closure2_slot17 = var5;
                var35 = _closure1_slot4;
                var5 = var35.useState;
                var5 = var5.bind(var35)(var4);
                var5 = var32.bind(var4)(var5, var23);
                var32 = var5[var43];
                var5 = var5[var33];
                _closure2_slot18 = var5;
                var35 = _closure1_slot4;
                var23 = var35.useRef;
                var5 = _closure1_slot12;
                var55 = var5.WISHLIST;
                var5 = 0;
                if (!(var53 === var55)) {
                    _fun92490_ip = 1169;
                    continue _fun92490
                }
            case 1166:
                var5 = var33;
            case 1169:
                var5 = var23.bind(var35)(var5);
                _closure2_slot19 = var5;
                var55 = _closure1_slot4;
                var35 = var55.useCallback;
                var23 = function(arg0, arg1, arg2) { // Environment: var30
                    _fun92497: for (var _fun92497_ip = 0;;) switch (_fun92497_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arg2;
                            var0 = 0;
                            if (!(!(var2 <= var0))) {
                                _fun92497_ip = 75;
                                continue _fun92497
                            }
                        case 12:
                            var1 = _closure2_slot17;
                            var1 = var1.current;
                            var3 = var1[var4];
                            var1 = _closure2_slot17;
                            var1 = var1.current;
                            var1[var4] = var2;
                            var1 = _closure2_slot19;
                            var1 = var1.current;
                            var1 = var4 === var1;
                            if (!var1) {
                                _fun92497_ip = 61;
                                continue _fun92497
                            }
                        case 57:
                            var1 = var2 !== var3;
                        case 61:
                            if (!var1) {
                                _fun92497_ip = 75;
                                continue _fun92497
                            }
                        case 64:
                            var1 = _closure2_slot18;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = new Array(0);
                var35 = var35.bind(var55)(var23, var5);
                _closure2_slot20 = var35;
                var56 = _closure1_slot4;
                var55 = var56.useCallback;
                var23 = function(arg0) { // Environment: var30
                    _fun92498: for (var _fun92498_ip = 0;;) switch (_fun92498_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot19;
                            var1.current = var2;
                            var1 = _closure2_slot17;
                            var1 = var1.current;
                            var2 = var1[var2];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun92498_ip = 46;
                                continue _fun92498
                            }
                        case 35:
                            var1 = _closure2_slot18;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = new Array(0);
                var5 = var55.bind(var56)(var23, var5);
                var56 = _closure1_slot4;
                var55 = var56.useCallback;
                var23 = new Array(1);
                var23[0] = var7;
                var7 = function() { // Environment: var30
                    _fun92499: for (var _fun92499_ip = 0;;) switch (_fun92499_ip) {
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
                                _fun92499_ip = 56;
                                continue _fun92499
                            }
                        case 48:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var56 = var55.bind(var56)(var7, var23);
                _closure2_slot21 = var56;
                var55 = _closure1_slot4;
                var23 = var55.useCallback;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var30
                    _fun92500: for (var _fun92500_ip = 0;;) switch (_fun92500_ip) {
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
                                _fun92500_ip = 56;
                                continue _fun92500
                            }
                        case 48:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var55 = var23.bind(var55)(var3, var7);
                _closure2_slot22 = var55;
                var23 = _closure1_slot4;
                var7 = var23.useCallback;
                var3 = new Array(14);
                var3[0] = var17;
                var3[1] = var16;
                var3[2] = var42;
                var3[3] = var10;
                var3[4] = var6;
                var3[5] = var56;
                var3[6] = var55;
                var3[7] = var36;
                var3[8] = var40;
                var3[9] = var54;
                var3[10] = var15;
                var3[11] = var2;
                var3[12] = var14;
                var3[13] = var44;
                var2 = function() { // Environment: var30
                    _fun92501: for (var _fun92501_ip = 0;;) switch (_fun92501_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun92501_ip = 871;
                                continue _fun92501
                            }
                        case 16:
                            var1 = _closure2_slot8;
                            if (!(var0 != var1)) {
                                _fun92501_ip = 871;
                                continue _fun92501
                            }
                        case 27:
                            var11 = {};
                            var1 = _closure2_slot13;
                            var11.backgroundColor = var1;
                            var4 = _closure1_slot18;
                            var3 = _closure1_slot6;
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
                                _fun92501_ip = 160;
                                continue _fun92501
                            }
                        case 95:
                            var9 = _closure1_slot17;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 53;
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
                                _fun92501_ip = 200;
                                continue _fun92501
                            }
                        case 193:
                            var6 = _closure2_slot4;
                            var1 = !var6;
                        case 200:
                            if (!var1) {
                                _fun92501_ip = 264;
                                continue _fun92501
                            }
                        case 203:
                            var12 = _closure1_slot17;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 54;
                            var6 = var9[var6];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var6);
                            var6 = {};
                            var13 = _closure2_slot21;
                            var6.navigateToPremium = var13;
                            var13 = _closure2_slot22;
                            var6.navigateToShop = var13;
                            var13 = _closure2_slot12;
                            var6.hasCustomProfileTheme = var13;
                            var1 = var12.bind(var9)(var8, var6);
                        case 264:
                            var5[1] = var1;
                            var9 = _closure1_slot17;
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 55;
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
                                _fun92501_ip = 411;
                                continue _fun92501
                            }
                        case 353:
                            var12 = _closure1_slot17;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 56;
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
                        case 411:
                            var5[3] = var6;
                            var9 = _closure1_slot17;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var6 = 57;
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
                                _fun92501_ip = 476;
                                continue _fun92501
                            }
                        case 472:
                            var12 = _closure2_slot11;
                        case 476:
                            var6.pendingBio = var12;
                            var6.style = var11;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[4] = var6;
                            var6 = _closure2_slot10;
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun92501_ip = 563;
                                continue _fun92501
                            }
                        case 506:
                            var12 = _closure1_slot17;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 58;
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
                        case 563:
                            var5[5] = var6;
                            var6 = _closure2_slot1;
                            var8 = var0 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun92501_ip = 589;
                                continue _fun92501
                            }
                        case 580:
                            var8 = _closure2_slot1;
                            var6 = var8.guild_id;
                        case 589:
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun92501_ip = 680;
                                continue _fun92501
                            }
                        case 596:
                            var12 = _closure1_slot17;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 59;
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
                        case 680:
                            var5[6] = var6;
                            var15 = _closure1_slot17;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 60;
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
                            var9 = _closure1_slot17;
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
                                _fun92501_ip = 855;
                                continue _fun92501
                            }
                        case 797:
                            var9 = _closure1_slot17;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var7 = 61;
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
                        case 855:
                            var5[9] = var6;
                            var2.children = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        case 871:
                            return var0;
                    }
                };
                var23 = var7.bind(var23)(var2, var3);
                _closure2_slot23 = var23;
                var7 = _closure1_slot4;
                var3 = var7.useCallback;
                var54 = var10.profileContent;
                var2 = new Array(3);
                var2[0] = var54;
                var2[1] = var1;
                var2[2] = var42;
                var1 = function() { // Environment: var30
                    _fun92502: for (var _fun92502_ip = 0;;) switch (_fun92502_ip) {
                        case 0:
                            var3 = _closure1_slot17;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot7;
                            var0 = var0.profileContent;
                            var1.style = var0;
                            var5 = _closure2_slot15;
                            var0 = null;
                            if (!(var0 != var5)) {
                                _fun92502_ip = 93;
                                continue _fun92502
                            }
                        case 40:
                            var7 = _closure1_slot17;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 62;
                            var0 = var6[var0];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var0);
                            var0 = {};
                            var9 = _closure2_slot15;
                            var0.wishlistId = var9;
                            var8 = _closure2_slot13;
                            var0.backgroundColor = var8;
                            var0 = var7.bind(var6)(var5, var0);
                            _fun92502_ip = 133;
                            continue _fun92502;
                        case 93:
                            var7 = _closure1_slot17;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 62;
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
                var1 = var3.bind(var7)(var1, var2);
                _closure2_slot24 = var1;
                var7 = _closure1_slot4;
                var3 = var7.useMemo;
                var2 = new Array(3);
                var2[0] = var35;
                var2[1] = var23;
                var2[2] = var1;
                var1 = function() { // Environment: var30
                    var1 = {};
                    var0 = 'main';
                    var1.id = var0;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 27;
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
                    var9 = _closure1_slot17;
                    var4 = _closure1_slot5;
                    var0 = {};
                    var8 = false;
                    var0.scrollEnabled = var8;
                    var6 = function arg0, arg1() {
                        var4 = _closure2_slot20;
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
                    var3 = _closure1_slot17;
                    var2 = {};
                    var2.scrollEnabled = var8;
                    var7 = function arg0, arg1() {
                        var4 = _closure2_slot20;
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
                var7 = var3.bind(var7)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 63;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var8;
                var8 = _closure1_slot12;
                var35 = var8.WISHLIST;
                var8 = 0;
                if (!(var53 === var35)) {
                    _fun92490_ip = 1526;
                    continue _fun92490
                }
            case 1523:
                var8 = var33;
            case 1526:
                var1.defaultIndex = var8;
                var33 = _closure1_slot1;
                var35 = _closure1_slot2;
                var8 = 40;
                var8 = var35[var8];
                var8 = var33.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var1.itemSpacing = var8;
                var1.items = var7;
                var1.onPageChange = var5;
                var33 = var2.bind(var3)(var1);
                if (!(var0 != var17)) {
                    _fun92490_ip = 2994;
                    continue _fun92490
                }
            case 1588:
                if (!(var0 != var16)) {
                    _fun92490_ip = 2994;
                    continue _fun92490
                }
            case 1595:
                var35 = {};
                var35.backgroundColor = var42;
                _closure2_slot25 = var35;
                var3 = _closure1_slot18;
                var2 = _closure1_slot19;
                var1 = {};
                var8 = _closure1_slot17;
                var7 = _closure1_slot1;
                var53 = _closure1_slot2;
                var5 = 64;
                var5 = var53[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.user = var17;
                var5.displayProfile = var15;
                var5.bannerHeight = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92490_ip = 1663;
                    continue _fun92490
                }
            case 1660:
                var9 = var20;
            case 1663:
                var5.pendingBanner = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92490_ip = 1676;
                    continue _fun92490
                }
            case 1673:
                var9 = var52;
            case 1676:
                var5.pendingAvatarSrc = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92490_ip = 1698;
                    continue _fun92490
                }
            case 1686:
                var20 = var0 != var19;
                var9 = undefined;
                if (!var20) {
                    _fun92490_ip = 1698;
                    continue _fun92490
                }
            case 1695:
                var9 = var19;
            case 1698:
                var5.pendingAccentColor = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92490_ip = 1720;
                    continue _fun92490
                }
            case 1708:
                var19 = var0 != var12;
                var9 = undefined;
                if (!var19) {
                    _fun92490_ip = 1720;
                    continue _fun92490
                }
            case 1717:
                var9 = var12;
            case 1720:
                var5.pendingThemeColors = var9;
                var5.disableInteraction = var6;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot18;
                var8 = _closure1_slot6;
                var7 = {};
                var20 = _closure1_slot17;
                var19 = _closure1_slot1;
                var53 = _closure1_slot2;
                var12 = 65;
                var12 = var53[var12];
                var19 = var19.bind(var4)(var12);
                var12 = {};
                var12.user = var17;
                var12.guildId = var40;
                var12.disableStatus = var50;
                var50 = undefined;
                if (!var6) {
                    _fun92490_ip = 1801;
                    continue _fun92490
                }
            case 1798:
                var50 = var52;
            case 1801:
                var12.pendingAvatarSrc = var50;
                var50 = undefined;
                if (!var6) {
                    _fun92490_ip = 1814;
                    continue _fun92490
                }
            case 1811:
                var50 = var51;
            case 1814:
                var12.pendingAvatarDecoration = var50;
                var12.backgroundColor = var21;
                var21 = {};
                var21.backgroundColor = var49;
                var12.statusStyle = var21;
                var19 = var20.bind(var4)(var19, var12);
                var12 = new Array(2);
                var12[0] = var19;
                var21 = _closure1_slot18;
                var20 = _closure1_slot1;
                var49 = _closure1_slot2;
                var19 = 66;
                var19 = var49[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var19.fallbackBackground = var41;
                var19.primaryColor = var25;
                var19.secondaryColor = var22;
                var25 = var10.profileContentWrapper;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = {};
                if (!var26) {
                    _fun92490_ip = 1913;
                    continue _fun92490
                }
            case 1908:
                var26 = 0;
                if (!var6) {
                    _fun92490_ip = 1926;
                    continue _fun92490
                }
            case 1913:
                var41 = var0 != var29;
                var26 = 0;
                if (var41) {
                    _fun92490_ip = 1926;
                    continue _fun92490
                }
            case 1922:
                var26 = _closure1_slot14;
            case 1926:
                var25.paddingTop = var26;
                var26 = _closure1_slot13;
                var26 = var31 + var26;
                var25.paddingBottom = var26;
                var22[1] = var25;
                var19.containerStyle = var22;
                var26 = _closure1_slot17;
                var25 = _closure1_slot20;
                var22 = {};
                var22.customStatusActivity = var29;
                var22.user = var17;
                var22.guildId = var40;
                var31 = var0 == var14;
                var29 = undefined;
                if (var31) {
                    _fun92490_ip = 1990;
                    continue _fun92490
                }
            case 1985:
                var29 = var14.id;
            case 1990:
                var22.channelId = var29;
                var22.hasCustomProfileTheme = var36;
                var22.showUserProfileActionSheet = var44;
                var22.isPreviewingChanges = var6;
                var22.bubbleRef = var28;
                var25 = var26.bind(var4)(var25, var22);
                var22 = new Array(3);
                var22[0] = var25;
                var28 = _closure1_slot18;
                var26 = _closure1_slot6;
                var25 = {};
                var31 = var10.primaryInfo;
                var29 = new Array(2);
                var29[0] = var31;
                var31 = var10.profileContent;
                var29[1] = var31;
                var25.style = var29;
                var41 = _closure1_slot17;
                var31 = _closure1_slot23;
                var29 = {};
                var29.user = var17;
                var49 = var0 == var14;
                var43 = undefined;
                if (var49) {
                    _fun92490_ip = 2094;
                    continue _fun92490
                }
            case 2089:
                var43 = var14.id;
            case 2094:
                var29.channelId = var43;
                var29.displayProfile = var15;
                var43 = undefined;
                if (!var6) {
                    _fun92490_ip = 2111;
                    continue _fun92490
                }
            case 2108:
                var43 = var48;
            case 2111:
                var29.displayNameOverride = var43;
                var43 = undefined;
                if (!var6) {
                    _fun92490_ip = 2124;
                    continue _fun92490
                }
            case 2121:
                var43 = var47;
            case 2124:
                var29.pronounsOverride = var43;
                var43 = undefined;
                if (!var6) {
                    _fun92490_ip = 2137;
                    continue _fun92490
                }
            case 2134:
                var43 = var46;
            case 2137:
                var29.badgesOverride = var43;
                var29.badgeContainerBackground = var42;
                var29.isPreviewingChanges = var6;
                var31 = var41.bind(var4)(var31, var29);
                var29 = new Array(7);
                var29[0] = var31;
                var41 = var17.id;
                var31 = var16.id;
                var31 = var41 !== var31;
                if (!var31) {
                    _fun92490_ip = 2223;
                    continue _fun92490
                }
            case 2183:
                var43 = _closure1_slot17;
                var42 = _closure1_slot1;
                var46 = _closure1_slot2;
                var41 = 67;
                var41 = var46[var41];
                var42 = var42.bind(var4)(var41);
                var41 = {};
                var41.user = var17;
                var41.guildId = var40;
                var31 = var43.bind(var4)(var42, var41);
            case 2223:
                var29[1] = var31;
                var31 = _closure1_slot15;
                var31 = var31.PENDING_INCOMING;
                var31 = var18 === var31;
                if (!var31) {
                    _fun92490_ip = 2315;
                    continue _fun92490
                }
            case 2244:
                var43 = _closure1_slot17;
                var42 = _closure1_slot1;
                var46 = _closure1_slot2;
                var41 = 68;
                var41 = var46[var41];
                var42 = var42.bind(var4)(var41);
                var41 = {};
                var41.user = var17;
                var47 = var0 == var14;
                var46 = undefined;
                if (var47) {
                    _fun92490_ip = 2288;
                    continue _fun92490
                }
            case 2283:
                var46 = var14.id;
            case 2288:
                var41.channelId = var46;
                var41.guildId = var40;
                var41.applicationId = var45;
                var41.style = var35;
                var41.showUserProfile = var44;
                var31 = var43.bind(var4)(var42, var41);
            case 2315:
                var29[2] = var31;
                var31 = var34.map;
                var30 = function(arg0) { // Environment: var30
                    _fun92506: for (var _fun92506_ip = 0;;) switch (_fun92506_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot17;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 68;
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
                                _fun92506_ip = 85;
                                continue _fun92506
                            }
                        case 76:
                            var7 = _closure2_slot1;
                            var6 = var7.id;
                        case 85:
                            var1.channelId = var6;
                            var6 = _closure2_slot10;
                            var1.guildId = var6;
                            var6 = _closure2_slot25;
                            var1.style = var6;
                            var5 = _closure2_slot3;
                            var1.showUserProfile = var5;
                            var0 = var0.applicationId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var30 = var31.bind(var34)(var30);
                var29[3] = var30;
                var34 = _closure1_slot17;
                var31 = _closure1_slot1;
                var41 = _closure1_slot2;
                var30 = 69;
                var30 = var41[var30];
                var31 = var31.bind(var4)(var30);
                var30 = {};
                var30.user = var17;
                var30.style = var35;
                var30 = var34.bind(var4)(var31, var30);
                var29[4] = var30;
                var31 = var17.id;
                var30 = var16.id;
                var30 = var31 === var30;
                if (!var30) {
                    _fun92490_ip = 2404;
                    continue _fun92490
                }
            case 2401:
                var30 = !var6;
            case 2404:
                if (!var30) {
                    _fun92490_ip = 2427;
                    continue _fun92490
                }
            case 2407:
                var35 = _closure1_slot17;
                var34 = _closure1_slot24;
                var31 = {};
                var31.guildId = var40;
                var30 = var35.bind(var4)(var34, var31);
            case 2427:
                var29[5] = var30;
                var31 = var17.id;
                var30 = var16.id;
                var30 = var31 !== var30;
                if (!var30) {
                    _fun92490_ip = 2539;
                    continue _fun92490
                }
            case 2448:
                var35 = _closure1_slot17;
                var34 = _closure1_slot1;
                var40 = _closure1_slot2;
                var31 = 70;
                var31 = var40[var31];
                var34 = var34.bind(var4)(var31);
                var31 = {};
                var31.user = var17;
                if (var39) {
                    _fun92490_ip = 2495;
                    continue _fun92490
                }
            case 2481:
                var40 = _closure1_slot15;
                var40 = var40.BLOCKED;
                var39 = var18 === var40;
            case 2495:
                if (var39) {
                    _fun92490_ip = 2504;
                    continue _fun92490
                }
            case 2498:
                var39 = var17.isProvisional;
            case 2504:
                var31.disableCalls = var39;
                var31.disableMessage = var38;
                var31.location = var37;
                var31.hasCustomProfileTheme = var36;
                var36 = var10.primaryButtons;
                var31.style = var36;
                var30 = var35.bind(var4)(var34, var31);
            case 2539:
                var29[6] = var30;
                var25.children = var29;
                var25 = var28.bind(var4)(var26, var25);
                var22[1] = var25;
                if (var24) {
                    _fun92490_ip = 2569;
                    continue _fun92490
                }
            case 2560:
                var23 = var23.bind(var4)();
                _fun92490_ip = 2754;
                continue _fun92490;
            case 2569:
                var26 = _closure1_slot18;
                var25 = _closure1_slot6;
                var24 = {};
                var24.onLayout = var27;
                var28 = _closure1_slot17;
                var27 = {};
                var29 = var10.profileTablist;
                var27.style = var29;
                var31 = _closure1_slot17;
                var30 = _closure1_slot0;
                var34 = _closure1_slot2;
                var29 = 71;
                var29 = var34[var29];
                var29 = var30.bind(var4)(var29);
                var30 = var29.Tabs;
                var29 = {};
                var29.state = var33;
                var29 = var31.bind(var4)(var30, var29);
                var27.children = var29;
                var28 = var28.bind(var4)(var25, var27);
                var27 = new Array(2);
                var27[0] = var28;
                var29 = _closure1_slot17;
                var28 = {};
                var31 = var0 != var32;
                var30 = undefined;
                if (!var31) {
                    _fun92490_ip = 2684;
                    continue _fun92490
                }
            case 2675:
                var31 = {};
                var31.height = var32;
                var30 = var31;
            case 2684:
                var28.style = var30;
                var32 = _closure1_slot17;
                var31 = _closure1_slot0;
                var34 = _closure1_slot2;
                var30 = 72;
                var30 = var34[var30];
                var30 = var31.bind(var4)(var30);
                var31 = var30.SegmentedControlPages;
                var30 = {};
                var30.state = var33;
                var30 = var32.bind(var4)(var31, var30);
                var28.children = var30;
                var28 = var29.bind(var4)(var25, var28);
                var27[1] = var28;
                var24.children = var27;
                var23 = var26.bind(var4)(var25, var24);
            case 2754:
                var22[2] = var23;
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var12[1] = var19;
                var7.children = var12;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun92490_ip = 2978;
                    continue _fun92490
                }
            case 2795:
                var9 = _closure1_slot18;
                var8 = _closure1_slot6;
                var7 = {};
                var10 = var10.bannerButtons;
                var7.style = var10;
                var19 = var17.id;
                var10 = var16.id;
                var12 = null;
                if (!(var19 !== var10)) {
                    _fun92490_ip = 2906;
                    continue _fun92490
                }
            case 2831:
                var10 = var17.bot;
                var12 = null;
                if (var10) {
                    _fun92490_ip = 2906;
                    continue _fun92490
                }
            case 2842:
                var10 = _closure1_slot15;
                var10 = var10.FRIEND;
                if (!(var18 !== var10)) {
                    _fun92490_ip = 2883;
                    continue _fun92490
                }
            case 2856:
                var10 = null;
                if (!var13) {
                    _fun92490_ip = 2881;
                    continue _fun92490
                }
            case 2861:
                var19 = _closure1_slot17;
                var18 = _closure1_slot22;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2881:
                _fun92490_ip = 2903;
                continue _fun92490;
            case 2883:
                var19 = _closure1_slot17;
                var18 = _closure1_slot21;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2903:
                var12 = var10;
            case 2906:
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot17;
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
            case 2978:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2994:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 3107, 1621, 5644, 4666, 7065, 7049, 660, 4941, 33, 7053, 566, 3284, 7775, 1307, 7073, 7074, 7062, 7063, 5787, 8049, 3242, 8199, 12014, 1235, 9050, 12016, 3256, 7055, 3958, 5353, 3154, 7430, 7481, 7838, 4092, 8977, 671, 7968, 7429, 1568, 12017, 12018, 12019, 7772, 7774, 5784, 7050, 7054, 11334, 11854, 12020, 7856, 12021, 7624, 11993, 11995, 12022, 12000, 12025, 7824, 7056, 7059, 7060, 12030, 12031, 12033, 12034, 7830, 7832, 12039, 2]);