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
    var0 = function(arg0) { // Original name: CustomStatusBubble, environment: var3
        _fun92513: for (var _fun92513_ip = 0;;) switch (_fun92513_ip) {
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
                var2 = 10;
                var2 = var4[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var5 = 11;
                var5 = var4[var5];
                var17 = var2.bind(var3)(var5);
                var13 = var17.useStateFromStores;
                var5 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = new Array(1);
                var7[0] = var14;
                var5 = function() { // Environment: var1
                    _fun92514: for (var _fun92514_ip = 0;;) switch (_fun92514_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun92514_ip = 32;
                                continue _fun92514
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
                var13 = _closure1_slot3;
                var8 = var13.useCallback;
                var5 = new Array(3);
                var5[0] = var16;
                var5[1] = var15;
                var5[2] = var14;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 14;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 13;
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
                var1 = 15;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useIsEligibleForCustomStatusLabelsExperiment;
                var1 = {};
                var5 = 'CustomStatusBubble';
                var1.location = var5;
                var13 = var2.bind(var4)(var1);
                var5 = _closure1_slot3;
                var4 = var5.useRef;
                var2 = null;
                var1 = null;
                if (!var13) {
                    _fun92513_ip = 272;
                    continue _fun92513
                }
            case 229:
                var13 = var2 == var11;
                var1 = null;
                if (!var13) {
                    _fun92513_ip = 272;
                    continue _fun92513
                }
            case 238:
                var1 = null;
                if (!var7) {
                    _fun92513_ip = 272;
                    continue _fun92513
                }
            case 243:
                var1 = null;
                if (var9) {
                    _fun92513_ip = 272;
                    continue _fun92513
                }
            case 248:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var1 = var13.bind(var3)();
            case 272:
                var4 = var4.bind(var5)(var1);
                var1 = var4.current;
                var1 = var2 != var1;
                var5 = undefined;
                if (!var1) {
                    _fun92513_ip = 305;
                    continue _fun92513
                }
            case 291:
                var2 = var4.current;
                var1 = var2.label;
                var5 = var1.bind(var2)();
            case 305:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 17;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var12;
                var0.customStatusActivity = var11;
                var0.hasCustomProfileTheme = var10;
                if (!var7) {
                    _fun92513_ip = 351;
                    continue _fun92513
                }
            case 348:
                var7 = !var9;
            case 351:
                var0.editEnabled = var7;
                var7 = undefined;
                if (var9) {
                    _fun92513_ip = 364;
                    continue _fun92513
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
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: RemoveFriendIconButton, environment: var3
        var0 = arg0;
        var2 = var0.user;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 18;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var8.bind(var3)(var0);
        var0 = var1.useUserProfileAnalyticsContext;
        var0 = var0.bind(var1)();
        var0 = var0.trackUserProfileAction;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot1;
        var0 = 19;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var0 = var0.newestAnalyticsLocation;
        var _closure2_slot2 = var0;
        var0 = function() { // Original name: handleConfirm, environment: var4
            var2 = _closure2_slot1;
            var1 = {};
            var0 = 'REMOVE_FRIEND';
            var1.action = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
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
        var0 = 21;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useName;
        var0 = var0.bind(var1)(var2);
        var _closure2_slot4 = var0;
        var2 = _closure1_slot13;
        var0 = 22;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot13;
        var5 = 23;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var6 = var5.UserCheckIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var3)(var6, var5);
        var0.icon = var5;
        var5 = 24;
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
        var4 = function() { // Original name: onPress, environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 25;
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
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: RemoveGameFriendIconButton, environment: var3
        var1 = arg0;
        var4 = var1.user;
        var _closure2_slot0 = var4;
        var6 = var1.guildId;
        var _closure2_slot1 = var6;
        var7 = var1.channelId;
        var _closure2_slot2 = var7;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var3 = var1[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 14;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 26;
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
        var3 = _closure1_slot13;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 22;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot13;
        var5 = 27;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var6 = var5.UserPlatformIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var2)(var6, var5);
        var0.icon = var5;
        var5 = 24;
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
    var _closure1_slot18 = var0;
    var1 = function(arg0) { // Original name: PrimaryInfo, environment: var3
        _fun92521: for (var _fun92521_ip = 0;;) switch (_fun92521_ip) {
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
                var0 = 21;
                var0 = var12[var0];
                var2 = var7.bind(var3)(var0);
                var0 = var2.useUserTag;
                var0 = var0.bind(var2)(var16);
                var _closure2_slot0 = var0;
                var2 = 28;
                var2 = var12[var2];
                var2 = var7.bind(var3)(var2);
                var10 = var2.bind(var3)(var15);
                var2 = 29;
                var2 = var12[var2];
                var14 = var7.bind(var3)(var2);
                var7 = var14.useName;
                var12 = null;
                var18 = var12 == var15;
                var2 = undefined;
                if (var18) {
                    _fun92521_ip = 151;
                    continue _fun92521
                }
            case 146:
                var2 = var15.guildId;
            case 151:
                var17 = var7.bind(var14)(var2, var17, var16);
                var14 = var17;
                if (!(var12 != var1)) {
                    _fun92521_ip = 192;
                    continue _fun92521
                }
            case 165:
                var2 = var1.trim;
                var2 = var2.bind(var1)();
                var7 = var2.length;
                var2 = 0;
                var14 = var17;
                if (!(var7 > var2)) {
                    _fun92521_ip = 192;
                    continue _fun92521
                }
            case 189:
                var14 = var1;
            case 192:
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 18;
                var1 = var17[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useUserProfileAnalyticsContext;
                var1 = var1.bind(var2)();
                var18 = var1.trackUserProfileAction;
                _closure2_slot1 = var18;
                var7 = _closure1_slot3;
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
                    var4 = 30;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = 31;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = 32;
                var0 = var17[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var16;
                var17 = var12 == var15;
                var16 = undefined;
                if (var17) {
                    _fun92521_ip = 306;
                    continue _fun92521
                }
            case 301:
                var16 = var15.guildId;
            case 306:
                var0.guildId = var16;
                var0.displayName = var14;
                if (!(var12 == var13)) {
                    _fun92521_ip = 336;
                    continue _fun92521
                }
            case 318:
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun92521_ip = 333;
                    continue _fun92521
                }
            case 327:
                var14 = var15.pronouns;
            case 333:
                var13 = var14;
            case 336:
                var0.pronouns = var13;
                if (!(var12 != var11)) {
                    _fun92521_ip = 348;
                    continue _fun92521
                }
            case 345:
                var10 = var11;
            case 348:
                var0.badges = var10;
                var0.style = var9;
                var0.badgeContainerBackground = var8;
                var8 = undefined;
                if (var4) {
                    _fun92521_ip = 370;
                    continue _fun92521
                }
            case 367:
                var8 = var7;
            case 370:
                var0.onPressDisplayName = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 24;
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
                    _fun92521_ip = 443;
                    continue _fun92521
                }
            case 440:
                var5 = var7;
            case 443:
                var0.onPressUserTag = var5;
                var5 = undefined;
                if (var4) {
                    _fun92521_ip = 460;
                    continue _fun92521
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
                    var1 = 31;
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
    var _closure1_slot19 = var1;
    var0 = function(arg0) { // Original name: EditSection, environment: var3
        _fun92524: for (var _fun92524_ip = 0;;) switch (_fun92524_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var19 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 10;
                var0 = var18[var0];
                var3 = undefined;
                var0 = var19.bind(var3)(var0);
                var4 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var0 = 18;
                var0 = var18[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var0 = 11;
                var0 = var18[var0];
                var5 = var8.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var2.bind(var5)(var1, var0);
                var0 = 33;
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
                var2 = _closure1_slot13;
                var0 = 34;
                var0 = var18[var0];
                var1 = var19.bind(var3)(var0);
                var0 = {};
                var4 = var4.primaryButtons;
                var0.style = var4;
                var4 = _closure1_slot12;
                var0.maxWidth = var4;
                var13 = _closure1_slot13;
                var5 = 35;
                var4 = var18[var5];
                var4 = var8.bind(var3)(var4);
                var12 = var4.Button;
                var7 = {};
                var11 = 'primary';
                var7.variant = var11;
                var14 = _closure1_slot13;
                var10 = 36;
                var4 = var18[var10];
                var4 = var8.bind(var3)(var4);
                var8 = var4.PencilIcon;
                var4 = {};
                var17 = 'sm';
                var4.size = var17;
                var15 = 37;
                var18 = var18[var15];
                var18 = var19.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.WHITE;
                var4.color = var18;
                var4 = var14.bind(var3)(var8, var4);
                var7.icon = var4;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun92524_ip = 368;
                    continue _fun92524
                }
            case 309:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 24;
                var14 = var20[var8];
                var14 = var19.bind(var3)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var8 = var20[var8];
                var8 = var19.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.s5vZlQ;
                var8 = var14.bind(var18)(var8);
                _fun92524_ip = 425;
                continue _fun92524;
            case 368:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 24;
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
                var8 = function() { // Original name: onPress, environment: var9
                    var3 = _closure2_slot1;
                    var2 = {};
                    var0 = 'EDIT_PROFILE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 38;
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
                    _fun92524_ip = 639;
                    continue _fun92524
                }
            case 470:
                var7 = _closure1_slot13;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.variant = var11;
                var12 = _closure1_slot13;
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
                var10 = 24;
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
                var9 = function() { // Original name: onPress, environment: var9
                    var3 = _closure2_slot1;
                    var2 = {};
                    var0 = 'EDIT_GUILD_PROFILE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 38;
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
    var _closure1_slot20 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
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
    var4 = var5.bind(var0)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot9 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.jsxs;
    var _closure1_slot14 = var8;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Original name: UserProfileContent, environment: var3
        _fun92528: for (var _fun92528_ip = 0;;) switch (_fun92528_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var _closure2_slot0 = var17;
                var14 = var0.channel;
                var _closure2_slot1 = var14;
                var15 = var0.displayProfile;
                var31 = var0.showUserProfileActionSheet;
                var _closure2_slot2 = var31;
                var40 = var0.disableCalls;
                var39 = var0.disableMessage;
                var47 = var0.disableStatus;
                var6 = var0.isPreviewingChanges;
                var38 = var0.location;
                var1 = var0.navigateToPremium;
                var _closure2_slot3 = var1;
                var0 = var0.navigateToShop;
                var _closure2_slot4 = var0;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 10;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var10 = var1.bind(var4)();
                var1 = 39;
                var1 = var0[var1];
                var3 = var2.bind(var4)(var1);
                var1 = _closure1_slot12;
                var9 = var3.bind(var4)(var1);
                var1 = 40;
                var1 = var0[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var27 = var1.bottom;
                var2 = _closure1_slot0;
                var1 = 11;
                var0 = var0[var1];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var37
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var16;
                var28 = undefined;
                if (var2) {
                    _fun92528_ip = 229;
                    continue _fun92528
                }
            case 224:
                var28 = var16.id;
            case 229:
                var24 = var17.id;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = var5[var1];
                var12 = var3.bind(var4)(var2);
                var8 = var12.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var37
                    var0 = {};
                    var3 = _closure1_slot6;
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
                var2 = var8.bind(var12)(var7, var2);
                var18 = var2.relationshipType;
                var42 = var2.originApplicationId;
                var2 = 41;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useIncomingGameRelationshipsForUser;
                var2 = var17.id;
                var29 = var7.bind(var8)(var2);
                var2 = 42;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useIsGameFriends;
                var2 = var17.id;
                var13 = var7.bind(var8)(var2);
                var2 = 43;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useUserProfileGameFriendApplicationIds;
                var2 = {};
                var7 = var17.id;
                var2.userId = var7;
                var35 = var3.bind(var5)(var2);
                if (!(var0 == var15)) {
                    _fun92528_ip = 404;
                    continue _fun92528
                }
            case 388:
                var2 = var0 == var14;
                var33 = undefined;
                if (var2) {
                    _fun92528_ip = 402;
                    continue _fun92528
                }
            case 397:
                var33 = var14.guild_id;
            case 402:
                _fun92528_ip = 424;
                continue _fun92528;
            case 404:
                var3 = var15.guildId;
                var5 = var0 != var3;
                var2 = undefined;
                if (!var5) {
                    _fun92528_ip = 421;
                    continue _fun92528
                }
            case 418:
                var2 = var3;
            case 421:
                var33 = var2;
            case 424:
                _closure2_slot5 = var33;
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var33;
                var3[1] = var17;
                var2 = function() { // Environment: var37
                    _fun92531: for (var _fun92531_ip = 0;;) switch (_fun92531_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun92531_ip = 21;
                                continue _fun92531
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var1 == var0)) {
                                _fun92531_ip = 25;
                                continue _fun92531
                            }
                        case 21:
                            var0 = {};
                            _fun92531_ip = 56;
                            continue _fun92531;
                        case 25:
                            var1 = {};
                            var3 = _closure2_slot5;
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
                var12 = var5.bind(var7)(var2, var3);
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 44;
                var2 = var3[var2];
                var8 = var7.bind(var4)(var2);
                var5 = var8.useSubscribeGuildMembers;
                var2 = 'UserProfileContent';
                var2 = var5.bind(var8)(var12, var2);
                var2 = _closure1_slot1;
                var5 = 45;
                var5 = var3[var5];
                var8 = var2.bind(var4)(var5);
                var5 = var17.id;
                var26 = var8.bind(var4)(var5);
                var1 = var3[var1];
                var12 = var7.bind(var4)(var1);
                var8 = var12.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var37
                    var1 = _closure1_slot8;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var12)(var5, var1);
                var20 = var1.pendingBanner;
                var21 = var1.pendingAvatar;
                var48 = var1.pendingAvatarDecoration;
                var45 = var1.pendingGlobalName;
                var44 = var1.pendingPronouns;
                var34 = var1.pendingBio;
                var19 = var1.pendingAccentColor;
                var12 = var1.pendingThemeColors;
                var5 = var1.pendingLegacyUsernameDisabled;
                var1 = 46;
                var1 = var3[var1];
                var8 = var7.bind(var4)(var1);
                var7 = var8.getPendingAvatarSrc;
                var1 = {};
                var22 = var17.id;
                var1.userId = var22;
                var1.image = var21;
                var49 = var7.bind(var8)(var1);
                var1 = 28;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var43 = var1.bind(var4)(var15, var5);
                var1 = 47;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var17;
                var1.displayProfile = var15;
                var3 = undefined;
                if (!var6) {
                    _fun92528_ip = 708;
                    continue _fun92528
                }
            case 705:
                var3 = var12;
            case 708:
                var1.pendingThemeColors = var3;
                var1 = var2.bind(var4)(var1);
                var5 = var1.theme;
                var23 = var1.primaryColor;
                var22 = var1.secondaryColor;
                var36 = var0 != var23;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 48;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useUserProfileColors;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var23;
                var1.secondaryColor = var22;
                var1 = var2.bind(var3)(var1);
                var41 = var1.gradientFallbackBackground;
                var30 = var1.containerBackground;
                var21 = var1.avatarBackground;
                var46 = var1.statusBackground;
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var25 = var1.bind(var2)(var0);
                if (!(var0 != var17)) {
                    _fun92528_ip = 2719;
                    continue _fun92528
                }
            case 833:
                if (!(var0 != var16)) {
                    _fun92528_ip = 2719;
                    continue _fun92528
                }
            case 840:
                var32 = {};
                var32.backgroundColor = var30;
                _closure2_slot6 = var32;
                var3 = _closure1_slot14;
                var2 = _closure1_slot15;
                var1 = {};
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var50 = _closure1_slot2;
                var5 = 49;
                var5 = var50[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.user = var17;
                var5.displayProfile = var15;
                var5.bannerHeight = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92528_ip = 908;
                    continue _fun92528
                }
            case 905:
                var9 = var20;
            case 908:
                var5.pendingBanner = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92528_ip = 921;
                    continue _fun92528
                }
            case 918:
                var9 = var49;
            case 921:
                var5.pendingAvatarSrc = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92528_ip = 943;
                    continue _fun92528
                }
            case 931:
                var20 = var0 != var19;
                var9 = undefined;
                if (!var20) {
                    _fun92528_ip = 943;
                    continue _fun92528
                }
            case 940:
                var9 = var19;
            case 943:
                var5.pendingAccentColor = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92528_ip = 965;
                    continue _fun92528
                }
            case 953:
                var19 = var0 != var12;
                var9 = undefined;
                if (!var19) {
                    _fun92528_ip = 965;
                    continue _fun92528
                }
            case 962:
                var9 = var12;
            case 965:
                var5.pendingThemeColors = var9;
                var5.disableInteraction = var6;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot14;
                var8 = _closure1_slot4;
                var7 = {};
                var20 = _closure1_slot13;
                var19 = _closure1_slot1;
                var50 = _closure1_slot2;
                var12 = 50;
                var12 = var50[var12];
                var19 = var19.bind(var4)(var12);
                var12 = {};
                var12.user = var17;
                var12.guildId = var33;
                var12.disableStatus = var47;
                var47 = undefined;
                if (!var6) {
                    _fun92528_ip = 1046;
                    continue _fun92528
                }
            case 1043:
                var47 = var49;
            case 1046:
                var12.pendingAvatarSrc = var47;
                var47 = undefined;
                if (!var6) {
                    _fun92528_ip = 1059;
                    continue _fun92528
                }
            case 1056:
                var47 = var48;
            case 1059:
                var12.pendingAvatarDecoration = var47;
                var12.backgroundColor = var21;
                var21 = {};
                var21.backgroundColor = var46;
                var12.statusStyle = var21;
                var19 = var20.bind(var4)(var19, var12);
                var12 = new Array(2);
                var12[0] = var19;
                var21 = _closure1_slot14;
                var20 = _closure1_slot1;
                var46 = _closure1_slot2;
                var19 = 51;
                var19 = var46[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var19.fallbackBackground = var41;
                var19.primaryColor = var23;
                var19.secondaryColor = var22;
                var23 = var10.profileContent;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = {};
                if (!(var28 === var24)) {
                    _fun92528_ip = 1159;
                    continue _fun92528
                }
            case 1154:
                var24 = 0;
                if (!var6) {
                    _fun92528_ip = 1172;
                    continue _fun92528
                }
            case 1159:
                var28 = var0 != var26;
                var24 = 0;
                if (var28) {
                    _fun92528_ip = 1172;
                    continue _fun92528
                }
            case 1168:
                var24 = _closure1_slot10;
            case 1172:
                var23.paddingTop = var24;
                var24 = _closure1_slot9;
                var24 = var27 + var24;
                var23.paddingBottom = var24;
                var22[1] = var23;
                var19.containerStyle = var22;
                var24 = _closure1_slot13;
                var23 = _closure1_slot16;
                var22 = {};
                var22.customStatusActivity = var26;
                var22.user = var17;
                var22.guildId = var33;
                var27 = var0 == var14;
                var26 = undefined;
                if (var27) {
                    _fun92528_ip = 1236;
                    continue _fun92528
                }
            case 1231:
                var26 = var14.id;
            case 1236:
                var22.channelId = var26;
                var22.hasCustomProfileTheme = var36;
                var22.showUserProfileActionSheet = var31;
                var22.isPreviewingChanges = var6;
                var22.bubbleRef = var25;
                var23 = var24.bind(var4)(var23, var22);
                var22 = new Array(3);
                var22[0] = var23;
                var25 = _closure1_slot14;
                var24 = _closure1_slot4;
                var23 = {};
                var26 = var10.primaryInfo;
                var23.style = var26;
                var28 = _closure1_slot13;
                var27 = _closure1_slot19;
                var26 = {};
                var26.user = var17;
                var46 = var0 == var14;
                var41 = undefined;
                if (var46) {
                    _fun92528_ip = 1322;
                    continue _fun92528
                }
            case 1317:
                var41 = var14.id;
            case 1322:
                var26.channelId = var41;
                var26.displayProfile = var15;
                var41 = undefined;
                if (!var6) {
                    _fun92528_ip = 1339;
                    continue _fun92528
                }
            case 1336:
                var41 = var45;
            case 1339:
                var26.displayNameOverride = var41;
                var41 = undefined;
                if (!var6) {
                    _fun92528_ip = 1352;
                    continue _fun92528
                }
            case 1349:
                var41 = var44;
            case 1352:
                var26.pronounsOverride = var41;
                var41 = undefined;
                if (!var6) {
                    _fun92528_ip = 1365;
                    continue _fun92528
                }
            case 1362:
                var41 = var43;
            case 1365:
                var26.badgesOverride = var41;
                var26.badgeContainerBackground = var30;
                var26.isPreviewingChanges = var6;
                var27 = var28.bind(var4)(var27, var26);
                var26 = new Array(7);
                var26[0] = var27;
                var28 = var17.id;
                var27 = var16.id;
                var27 = var28 !== var27;
                if (!var27) {
                    _fun92528_ip = 1451;
                    continue _fun92528
                }
            case 1411:
                var41 = _closure1_slot13;
                var30 = _closure1_slot1;
                var43 = _closure1_slot2;
                var28 = 52;
                var28 = var43[var28];
                var30 = var30.bind(var4)(var28);
                var28 = {};
                var28.user = var17;
                var28.guildId = var33;
                var27 = var41.bind(var4)(var30, var28);
            case 1451:
                var26[1] = var27;
                var27 = _closure1_slot11;
                var27 = var27.PENDING_INCOMING;
                var27 = var18 === var27;
                if (!var27) {
                    _fun92528_ip = 1543;
                    continue _fun92528
                }
            case 1472:
                var41 = _closure1_slot13;
                var30 = _closure1_slot1;
                var43 = _closure1_slot2;
                var28 = 53;
                var28 = var43[var28];
                var30 = var30.bind(var4)(var28);
                var28 = {};
                var28.user = var17;
                var44 = var0 == var14;
                var43 = undefined;
                if (var44) {
                    _fun92528_ip = 1516;
                    continue _fun92528
                }
            case 1511:
                var43 = var14.id;
            case 1516:
                var28.channelId = var43;
                var28.guildId = var33;
                var28.applicationId = var42;
                var28.style = var32;
                var28.showUserProfile = var31;
                var27 = var41.bind(var4)(var30, var28);
            case 1543:
                var26[2] = var27;
                var28 = var29.map;
                var27 = function(arg0) { // Environment: var37
                    _fun92535: for (var _fun92535_ip = 0;;) switch (_fun92535_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 53;
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
                                _fun92535_ip = 85;
                                continue _fun92535
                            }
                        case 76:
                            var7 = _closure2_slot1;
                            var6 = var7.id;
                        case 85:
                            var1.channelId = var6;
                            var6 = _closure2_slot5;
                            var1.guildId = var6;
                            var6 = _closure2_slot6;
                            var1.style = var6;
                            var5 = _closure2_slot2;
                            var1.showUserProfile = var5;
                            var0 = var0.applicationId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var27 = var28.bind(var29)(var27);
                var26[3] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var27 = 54;
                var27 = var30[var27];
                var28 = var28.bind(var4)(var27);
                var27 = {};
                var27.user = var17;
                var27.style = var32;
                var27 = var29.bind(var4)(var28, var27);
                var26[4] = var27;
                var28 = var17.id;
                var27 = var16.id;
                var27 = var28 === var27;
                if (!var27) {
                    _fun92528_ip = 1632;
                    continue _fun92528
                }
            case 1629:
                var27 = !var6;
            case 1632:
                if (!var27) {
                    _fun92528_ip = 1655;
                    continue _fun92528
                }
            case 1635:
                var30 = _closure1_slot13;
                var29 = _closure1_slot20;
                var28 = {};
                var28.guildId = var33;
                var27 = var30.bind(var4)(var29, var28);
            case 1655:
                var26[5] = var27;
                var28 = var17.id;
                var27 = var16.id;
                var27 = var28 !== var27;
                if (!var27) {
                    _fun92528_ip = 1767;
                    continue _fun92528
                }
            case 1676:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var41 = _closure1_slot2;
                var28 = 55;
                var28 = var41[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var28.user = var17;
                if (var40) {
                    _fun92528_ip = 1723;
                    continue _fun92528
                }
            case 1709:
                var41 = _closure1_slot11;
                var41 = var41.BLOCKED;
                var40 = var18 === var41;
            case 1723:
                if (var40) {
                    _fun92528_ip = 1732;
                    continue _fun92528
                }
            case 1726:
                var40 = var17.isProvisional;
            case 1732:
                var28.disableCalls = var40;
                var28.disableMessage = var39;
                var28.location = var38;
                var28.hasCustomProfileTheme = var36;
                var38 = var10.primaryButtons;
                var28.style = var38;
                var27 = var30.bind(var4)(var29, var28);
            case 1767:
                var26[6] = var27;
                var23.children = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[1] = var23;
                var25 = _closure1_slot14;
                var24 = _closure1_slot4;
                var23 = {};
                var26 = var10.cards;
                var23.style = var26;
                var27 = var17.isProvisional;
                if (!var27) {
                    _fun92528_ip = 1873;
                    continue _fun92528
                }
            case 1814:
                var29 = _closure1_slot13;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 56;
                var26 = var30[var26];
                var26 = var28.bind(var4)(var26);
                var28 = var26.UserProfileProvisionalAccountExplainerCard;
                var26 = {};
                var26.style = var32;
                var30 = var17.id;
                var26.userId = var30;
                var30 = 16;
                var26.iconSize = var30;
                var27 = var29.bind(var4)(var28, var26);
            case 1873:
                var26 = new Array(10);
                var26[0] = var27;
                var28 = var17.id;
                var27 = var16.id;
                var27 = var28 === var27;
                if (!var27) {
                    _fun92528_ip = 1901;
                    continue _fun92528
                }
            case 1898:
                var27 = !var6;
            case 1901:
                if (!var27) {
                    _fun92528_ip = 1965;
                    continue _fun92528
                }
            case 1904:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var38 = _closure1_slot2;
                var28 = 57;
                var28 = var38[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var38 = function() { // Original name: handleNavigateToPremium, environment: var37
                    _fun92533: for (var _fun92533_ip = 0;;) switch (_fun92533_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92533_ip = 56;
                                continue _fun92533
                            }
                        case 48:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var28.navigateToPremium = var38;
                var37 = function() { // Original name: handleNavigateToShop, environment: var37
                    _fun92534: for (var _fun92534_ip = 0;;) switch (_fun92534_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92534_ip = 56;
                                continue _fun92534
                            }
                        case 48:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var28.navigateToShop = var37;
                var28.hasCustomProfileTheme = var36;
                var27 = var30.bind(var4)(var29, var28);
            case 1965:
                var26[1] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var27 = 58;
                var27 = var30[var27];
                var28 = var28.bind(var4)(var27);
                var27 = {};
                var27.user = var17;
                var27.currentUser = var16;
                var27.guildId = var33;
                var27.style = var32;
                var27 = var29.bind(var4)(var28, var27);
                var26[2] = var27;
                var28 = var35.length;
                var27 = 0;
                var27 = var28 > var27;
                if (!var27) {
                    _fun92528_ip = 2086;
                    continue _fun92528
                }
            case 2036:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var36 = _closure1_slot2;
                var28 = 59;
                var28 = var36[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var36 = var17.id;
                var28.userId = var36;
                var28.applicationIds = var35;
                var28.style = var32;
                var27 = var30.bind(var4)(var29, var28);
            case 2086:
                var26[3] = var27;
                var29 = _closure1_slot13;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var27 = 60;
                var27 = var30[var27];
                var28 = var28.bind(var4)(var27);
                var27 = {};
                var30 = var17.id;
                var27.userId = var30;
                var27.displayProfile = var15;
                var30 = undefined;
                if (!var6) {
                    _fun92528_ip = 2138;
                    continue _fun92528
                }
            case 2135:
                var30 = var34;
            case 2138:
                var27.pendingBio = var30;
                var27.style = var32;
                var27 = var29.bind(var4)(var28, var27);
                var26[4] = var27;
                var27 = var0 != var33;
                if (!var27) {
                    _fun92528_ip = 2213;
                    continue _fun92528
                }
            case 2164:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var34 = _closure1_slot2;
                var28 = 61;
                var28 = var34[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var34 = var17.id;
                var28.userId = var34;
                var28.guildId = var33;
                var28.style = var32;
                var27 = var30.bind(var4)(var29, var28);
            case 2213:
                var26[5] = var27;
                var28 = var0 == var14;
                var27 = undefined;
                if (var28) {
                    _fun92528_ip = 2231;
                    continue _fun92528
                }
            case 2226:
                var27 = var14.guild_id;
            case 2231:
                var27 = var0 != var27;
                if (!var27) {
                    _fun92528_ip = 2306;
                    continue _fun92528
                }
            case 2238:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var33 = _closure1_slot2;
                var28 = 62;
                var28 = var33[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var28.user = var17;
                var28.currentUser = var16;
                var33 = var14.guild_id;
                var28.guildId = var33;
                var33 = var14.id;
                var28.channelId = var33;
                var28.showUserProfile = var31;
                var28.style = var32;
                var27 = var30.bind(var4)(var29, var28);
            case 2306:
                var26[6] = var27;
                var34 = _closure1_slot13;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var27 = 63;
                var29 = var30[var27];
                var29 = var28.bind(var4)(var29);
                var33 = var29.UserProfileAccountConnectionsCard;
                var29 = {};
                var35 = var17.id;
                var29.userId = var35;
                var29.style = var32;
                var29 = var34.bind(var4)(var33, var29);
                var26[7] = var29;
                var29 = _closure1_slot13;
                var27 = var30[var27];
                var27 = var28.bind(var4)(var27);
                var28 = var27.UserProfileApplicationRoleConnectionsCard;
                var27 = {};
                var30 = var17.id;
                var27.userId = var30;
                var27.style = var32;
                var27 = var29.bind(var4)(var28, var27);
                var26[8] = var27;
                var27 = !var6;
                if (!var27) {
                    _fun92528_ip = 2465;
                    continue _fun92528
                }
            case 2415:
                var30 = _closure1_slot13;
                var29 = _closure1_slot1;
                var33 = _closure1_slot2;
                var28 = 64;
                var28 = var33[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var33 = var17.id;
                var28.userId = var33;
                var28.style = var32;
                var28.onBack = var31;
                var27 = var30.bind(var4)(var29, var28);
            case 2465:
                var26[9] = var27;
                var23.children = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[2] = var23;
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var12[1] = var19;
                var7.children = var12;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun92528_ip = 2703;
                    continue _fun92528
                }
            case 2520:
                var9 = _closure1_slot14;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var10.bannerButtons;
                var7.style = var10;
                var19 = var17.id;
                var10 = var16.id;
                var12 = null;
                if (!(var19 !== var10)) {
                    _fun92528_ip = 2631;
                    continue _fun92528
                }
            case 2556:
                var10 = var17.bot;
                var12 = null;
                if (var10) {
                    _fun92528_ip = 2631;
                    continue _fun92528
                }
            case 2567:
                var10 = _closure1_slot11;
                var10 = var10.FRIEND;
                if (!(var18 !== var10)) {
                    _fun92528_ip = 2608;
                    continue _fun92528
                }
            case 2581:
                var10 = null;
                if (!var13) {
                    _fun92528_ip = 2606;
                    continue _fun92528
                }
            case 2586:
                var19 = _closure1_slot13;
                var18 = _closure1_slot18;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2606:
                _fun92528_ip = 2628;
                continue _fun92528;
            case 2608:
                var19 = _closure1_slot13;
                var18 = _closure1_slot17;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2628:
                var12 = var10;
            case 2631:
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot13;
                var12 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 65;
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
            case 2703:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2719:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 66;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PrimaryInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3059, 1613, 5544, 6921, 660, 4894, 33, 6924, 566, 3237, 7709, 1307, 6946, 6947, 6933, 6934, 5687, 7982, 3195, 7471, 11981, 1234, 8962, 11983, 3209, 6926, 3921, 5252, 3106, 7329, 7380, 7772, 4043, 7476, 671, 7902, 7328, 1568, 11984, 11985, 11986, 7706, 7708, 5684, 6922, 6925, 6927, 6930, 6931, 11987, 11988, 11990, 11991, 11822, 11996, 7790, 11997, 7557, 11960, 11962, 11998, 11967, 12001, 2]);