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
        _fun92481: for (var _fun92481_ip = 0;;) switch (_fun92481_ip) {
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
                var2 = 11;
                var2 = var4[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var5 = 12;
                var5 = var4[var5];
                var17 = var2.bind(var3)(var5);
                var13 = var17.useStateFromStores;
                var5 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = new Array(1);
                var7[0] = var14;
                var5 = function() { // Environment: var1
                    _fun92482: for (var _fun92482_ip = 0;;) switch (_fun92482_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun92482_ip = 32;
                                continue _fun92482
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
                    var0 = 13;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 15;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 14;
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
                var1 = 16;
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
                    _fun92481_ip = 272;
                    continue _fun92481
                }
            case 229:
                var13 = var2 == var11;
                var1 = null;
                if (!var13) {
                    _fun92481_ip = 272;
                    continue _fun92481
                }
            case 238:
                var1 = null;
                if (!var7) {
                    _fun92481_ip = 272;
                    continue _fun92481
                }
            case 243:
                var1 = null;
                if (var9) {
                    _fun92481_ip = 272;
                    continue _fun92481
                }
            case 248:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 17;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var1 = var13.bind(var3)();
            case 272:
                var4 = var4.bind(var5)(var1);
                var1 = var4.current;
                var1 = var2 != var1;
                var5 = undefined;
                if (!var1) {
                    _fun92481_ip = 305;
                    continue _fun92481
                }
            case 291:
                var2 = var4.current;
                var1 = var2.label;
                var5 = var1.bind(var2)();
            case 305:
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 18;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var12;
                var0.customStatusActivity = var11;
                var0.hasCustomProfileTheme = var10;
                if (!var7) {
                    _fun92481_ip = 351;
                    continue _fun92481
                }
            case 348:
                var7 = !var9;
            case 351:
                var0.editEnabled = var7;
                var7 = undefined;
                if (var9) {
                    _fun92481_ip = 364;
                    continue _fun92481
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
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.user;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 19;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var8.bind(var3)(var0);
        var0 = var1.useUserProfileAnalyticsContext;
        var0 = var0.bind(var1)();
        var0 = var0.trackUserProfileAction;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot1;
        var0 = 20;
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
            var1 = 21;
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
        var0 = 22;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useName;
        var0 = var0.bind(var1)(var2);
        var _closure2_slot4 = var0;
        var2 = _closure1_slot14;
        var0 = 23;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot14;
        var5 = 24;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var6 = var5.UserCheckIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var3)(var6, var5);
        var0.icon = var5;
        var5 = 25;
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
            var0 = 26;
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
    var _closure1_slot18 = var0;
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
            var0 = 13;
            var3 = var1[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 15;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 27;
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
        var3 = _closure1_slot14;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 23;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'size': 'sm',
            'variant': 'secondary-overlay'
        };
        var7 = _closure1_slot14;
        var5 = 28;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var6 = var5.UserPlatformIcon;
        var5 = {
            'size': 'sm',
            'color': 'white'
        };
        var5 = var7.bind(var2)(var6, var5);
        var0.icon = var5;
        var5 = 25;
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
    var _closure1_slot19 = var0;
    var1 = function arg0() {
        _fun92489: for (var _fun92489_ip = 0;;) switch (_fun92489_ip) {
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
                var0 = 22;
                var0 = var12[var0];
                var2 = var7.bind(var3)(var0);
                var0 = var2.useUserTag;
                var0 = var0.bind(var2)(var16);
                var _closure2_slot0 = var0;
                var2 = 29;
                var2 = var12[var2];
                var2 = var7.bind(var3)(var2);
                var10 = var2.bind(var3)(var15);
                var2 = 30;
                var2 = var12[var2];
                var14 = var7.bind(var3)(var2);
                var7 = var14.useName;
                var12 = null;
                var18 = var12 == var15;
                var2 = undefined;
                if (var18) {
                    _fun92489_ip = 151;
                    continue _fun92489
                }
            case 146:
                var2 = var15.guildId;
            case 151:
                var17 = var7.bind(var14)(var2, var17, var16);
                var14 = var17;
                if (!(var12 != var1)) {
                    _fun92489_ip = 192;
                    continue _fun92489
                }
            case 165:
                var2 = var1.trim;
                var2 = var2.bind(var1)();
                var7 = var2.length;
                var2 = 0;
                var14 = var17;
                if (!(var7 > var2)) {
                    _fun92489_ip = 192;
                    continue _fun92489
                }
            case 189:
                var14 = var1;
            case 192:
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 19;
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
                    var4 = 31;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = 32;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var0 = 33;
                var0 = var17[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var16;
                var17 = var12 == var15;
                var16 = undefined;
                if (var17) {
                    _fun92489_ip = 306;
                    continue _fun92489
                }
            case 301:
                var16 = var15.guildId;
            case 306:
                var0.guildId = var16;
                var0.displayName = var14;
                if (!(var12 == var13)) {
                    _fun92489_ip = 336;
                    continue _fun92489
                }
            case 318:
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun92489_ip = 333;
                    continue _fun92489
                }
            case 327:
                var14 = var15.pronouns;
            case 333:
                var13 = var14;
            case 336:
                var0.pronouns = var13;
                if (!(var12 != var11)) {
                    _fun92489_ip = 348;
                    continue _fun92489
                }
            case 345:
                var10 = var11;
            case 348:
                var0.badges = var10;
                var0.style = var9;
                var0.badgeContainerBackground = var8;
                var8 = undefined;
                if (var4) {
                    _fun92489_ip = 370;
                    continue _fun92489
                }
            case 367:
                var8 = var7;
            case 370:
                var0.onPressDisplayName = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 25;
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
                    _fun92489_ip = 443;
                    continue _fun92489
                }
            case 440:
                var5 = var7;
            case 443:
                var0.onPressUserTag = var5;
                var5 = undefined;
                if (var4) {
                    _fun92489_ip = 460;
                    continue _fun92489
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
                    var1 = 32;
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
    var _closure1_slot20 = var1;
    var0 = function arg0() {
        _fun92492: for (var _fun92492_ip = 0;;) switch (_fun92492_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var19 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 11;
                var0 = var18[var0];
                var3 = undefined;
                var0 = var19.bind(var3)(var0);
                var4 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var0 = 19;
                var0 = var18[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var0 = 12;
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
                var0 = 34;
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
                var2 = _closure1_slot14;
                var0 = 35;
                var0 = var18[var0];
                var1 = var19.bind(var3)(var0);
                var0 = {};
                var4 = var4.primaryButtons;
                var0.style = var4;
                var4 = _closure1_slot13;
                var0.maxWidth = var4;
                var13 = _closure1_slot14;
                var5 = 36;
                var4 = var18[var5];
                var4 = var8.bind(var3)(var4);
                var12 = var4.Button;
                var7 = {};
                var11 = 'primary';
                var7.variant = var11;
                var14 = _closure1_slot14;
                var10 = 37;
                var4 = var18[var10];
                var4 = var8.bind(var3)(var4);
                var8 = var4.PencilIcon;
                var4 = {};
                var17 = 'sm';
                var4.size = var17;
                var15 = 38;
                var18 = var18[var15];
                var18 = var19.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.WHITE;
                var4.color = var18;
                var4 = var14.bind(var3)(var8, var4);
                var7.icon = var4;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun92492_ip = 368;
                    continue _fun92492
                }
            case 309:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 25;
                var14 = var20[var8];
                var14 = var19.bind(var3)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var8 = var20[var8];
                var8 = var19.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.s5vZlQ;
                var8 = var14.bind(var18)(var8);
                _fun92492_ip = 425;
                continue _fun92492;
            case 368:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 25;
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
                    var2 = 13;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 39;
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
                    _fun92492_ip = 639;
                    continue _fun92492
                }
            case 470:
                var7 = _closure1_slot14;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.variant = var11;
                var12 = _closure1_slot14;
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
                var10 = 25;
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
                    var2 = 13;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 39;
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
    var _closure1_slot21 = var0;
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
    var4 = var5.bind(var0)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot10 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun92496: for (var _fun92496_ip = 0;;) switch (_fun92496_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var _closure2_slot0 = var17;
                var14 = var0.channel;
                var _closure2_slot1 = var14;
                var15 = var0.displayProfile;
                var _closure2_slot2 = var15;
                var43 = var0.showUserProfileActionSheet;
                var _closure2_slot3 = var43;
                var38 = var0.disableCalls;
                var37 = var0.disableMessage;
                var49 = var0.disableStatus;
                var6 = var0.isPreviewingChanges;
                var _closure2_slot4 = var6;
                var36 = var0.location;
                var3 = var0.navigateToPremium;
                var _closure2_slot5 = var3;
                var2 = var0.navigateToShop;
                var _closure2_slot6 = var2;
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
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 11;
                var1 = var0[var1];
                var1 = var5.bind(var4)(var1);
                var10 = var1.bind(var4)();
                var _closure2_slot7 = var10;
                var1 = 40;
                var1 = var0[var1];
                var7 = var5.bind(var4)(var1);
                var1 = _closure1_slot13;
                var9 = var7.bind(var4)(var1);
                var1 = 41;
                var1 = var0[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var32 = var1.bottom;
                var5 = _closure1_slot0;
                var1 = 12;
                var0 = var0[var1];
                var8 = var5.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var30
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var7.bind(var8)(var5, var0);
                var _closure2_slot8 = var16;
                var0 = null;
                var5 = var0 == var16;
                var7 = undefined;
                if (var5) {
                    _fun92496_ip = 281;
                    continue _fun92496
                }
            case 276:
                var7 = var16.id;
            case 281:
                var5 = var17.id;
                var26 = var7 === var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = var8[var1];
                var18 = var7.bind(var4)(var5);
                var13 = var18.useStateFromStoresObject;
                var5 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() { // Environment: var30
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
                var5 = var13.bind(var18)(var12, var5);
                var18 = var5.relationshipType;
                var44 = var5.originApplicationId;
                var5 = 42;
                var5 = var8[var5];
                var13 = var7.bind(var4)(var5);
                var12 = var13.useIncomingGameRelationshipsForUser;
                var5 = var17.id;
                var33 = var12.bind(var13)(var5);
                var5 = 43;
                var5 = var8[var5];
                var13 = var7.bind(var4)(var5);
                var12 = var13.useIsGameFriends;
                var5 = var17.id;
                var13 = var12.bind(var13)(var5);
                var5 = 44;
                var5 = var8[var5];
                var8 = var7.bind(var4)(var5);
                var7 = var8.useUserProfileGameFriendApplicationIds;
                var5 = {};
                var12 = var17.id;
                var5.userId = var12;
                var8 = var7.bind(var8)(var5);
                _closure2_slot9 = var8;
                if (!(var0 == var15)) {
                    _fun92496_ip = 464;
                    continue _fun92496
                }
            case 448:
                var5 = var0 == var14;
                var39 = undefined;
                if (var5) {
                    _fun92496_ip = 462;
                    continue _fun92496
                }
            case 457:
                var39 = var14.guild_id;
            case 462:
                _fun92496_ip = 484;
                continue _fun92496;
            case 464:
                var7 = var15.guildId;
                var12 = var0 != var7;
                var5 = undefined;
                if (!var12) {
                    _fun92496_ip = 481;
                    continue _fun92496
                }
            case 478:
                var5 = var7;
            case 481:
                var39 = var5;
            case 484:
                _closure2_slot10 = var39;
                var19 = _closure1_slot4;
                var12 = var19.useMemo;
                var7 = new Array(2);
                var7[0] = var39;
                var7[1] = var17;
                var5 = function() { // Environment: var30
                    _fun92499: for (var _fun92499_ip = 0;;) switch (_fun92499_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun92499_ip = 21;
                                continue _fun92499
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var1 == var0)) {
                                _fun92499_ip = 25;
                                continue _fun92499
                            }
                        case 21:
                            var0 = {};
                            _fun92499_ip = 56;
                            continue _fun92499;
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
                var12 = var12.bind(var19)(var5, var7);
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var5 = 45;
                var5 = var21[var5];
                var7 = var24.bind(var4)(var5);
                var5 = var7.useSubscribeGuildMembers;
                var23 = 'UserProfileContent';
                var5 = var5.bind(var7)(var12, var23);
                var7 = _closure1_slot1;
                var5 = 46;
                var5 = var21[var5];
                var12 = var7.bind(var4)(var5);
                var5 = var17.id;
                var29 = var12.bind(var4)(var5);
                var1 = var21[var1];
                var19 = var24.bind(var4)(var1);
                var12 = var19.useStateFromStoresObject;
                var1 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var30
                    var1 = _closure1_slot9;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var12.bind(var19)(var5, var1);
                var20 = var5.pendingBanner;
                var27 = var5.pendingAvatar;
                var50 = var5.pendingAvatarDecoration;
                var47 = var5.pendingGlobalName;
                var46 = var5.pendingPronouns;
                var1 = var5.pendingBio;
                _closure2_slot11 = var1;
                var19 = var5.pendingAccentColor;
                var12 = var5.pendingThemeColors;
                var22 = var5.pendingLegacyUsernameDisabled;
                var5 = 47;
                var5 = var21[var5];
                var25 = var24.bind(var4)(var5);
                var24 = var25.getPendingAvatarSrc;
                var5 = {};
                var28 = var17.id;
                var5.userId = var28;
                var5.image = var27;
                var51 = var24.bind(var25)(var5);
                var5 = 29;
                var5 = var21[var5];
                var5 = var7.bind(var4)(var5);
                var45 = var5.bind(var4)(var15, var22);
                var5 = 48;
                var5 = var21[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.user = var17;
                var5.displayProfile = var15;
                var21 = undefined;
                if (!var6) {
                    _fun92496_ip = 772;
                    continue _fun92496
                }
            case 769:
                var21 = var12;
            case 772:
                var5.pendingThemeColors = var21;
                var5 = var7.bind(var4)(var5);
                var28 = var5.theme;
                var25 = var5.primaryColor;
                var22 = var5.secondaryColor;
                var35 = var0 != var25;
                _closure2_slot12 = var35;
                var7 = _closure1_slot0;
                var24 = _closure1_slot2;
                var5 = 49;
                var5 = var24[var5];
                var27 = var7.bind(var4)(var5);
                var21 = var27.useUserProfileColors;
                var5 = {};
                var5.theme = var28;
                var5.primaryColor = var25;
                var5.secondaryColor = var22;
                var5 = var21.bind(var27)(var5);
                var40 = var5.gradientFallbackBackground;
                var41 = var5.containerBackground;
                _closure2_slot13 = var41;
                var21 = var5.avatarBackground;
                var48 = var5.statusBackground;
                var27 = _closure1_slot4;
                var5 = var27.useRef;
                var28 = var5.bind(var27)(var0);
                var5 = 50;
                var5 = var24[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.useMobileWishlistOwnerExperiment;
                var5 = var5.bind(var7)(var23);
                var24 = var5.enabled;
                if (!var24) {
                    _fun92496_ip = 932;
                    continue _fun92496
                }
            case 929:
                var24 = var26;
            case 932:
                _closure2_slot14 = var24;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var42 = 0;
                var23 = var5.bind(var7)(var42);
                var7 = _closure1_slot3;
                var5 = 2;
                var23 = var7.bind(var4)(var23, var5);
                var7 = var23[var42];
                var5 = 1;
                var5 = var23[var5];
                _closure2_slot15 = var5;
                var31 = _closure1_slot4;
                var27 = var31.useCallback;
                var23 = function(arg0) { // Environment: var30
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot15;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = new Array(0);
                var27 = var27.bind(var31)(var23, var5);
                var31 = _closure1_slot4;
                var23 = var31.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var30
                    _fun92502: for (var _fun92502_ip = 0;;) switch (_fun92502_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92502_ip = 56;
                                continue _fun92502
                            }
                        case 48:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var31 = var23.bind(var31)(var3, var5);
                _closure2_slot16 = var31;
                var23 = _closure1_slot4;
                var5 = var23.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var30
                    _fun92503: for (var _fun92503_ip = 0;;) switch (_fun92503_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92503_ip = 56;
                                continue _fun92503
                            }
                        case 48:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var23 = var5.bind(var23)(var2, var3);
                _closure2_slot17 = var23;
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(14);
                var2[0] = var17;
                var2[1] = var16;
                var2[2] = var41;
                var2[3] = var10;
                var2[4] = var6;
                var2[5] = var31;
                var2[6] = var23;
                var2[7] = var35;
                var2[8] = var39;
                var2[9] = var8;
                var2[10] = var15;
                var2[11] = var1;
                var2[12] = var14;
                var2[13] = var43;
                var1 = function() { // Environment: var30
                    _fun92504: for (var _fun92504_ip = 0;;) switch (_fun92504_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun92504_ip = 871;
                                continue _fun92504
                            }
                        case 16:
                            var1 = _closure2_slot8;
                            if (!(var0 != var1)) {
                                _fun92504_ip = 871;
                                continue _fun92504
                            }
                        case 27:
                            var11 = {};
                            var1 = _closure2_slot13;
                            var11.backgroundColor = var1;
                            var4 = _closure1_slot15;
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
                                _fun92504_ip = 160;
                                continue _fun92504
                            }
                        case 95:
                            var9 = _closure1_slot14;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 51;
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
                                _fun92504_ip = 200;
                                continue _fun92504
                            }
                        case 193:
                            var6 = _closure2_slot4;
                            var1 = !var6;
                        case 200:
                            if (!var1) {
                                _fun92504_ip = 264;
                                continue _fun92504
                            }
                        case 203:
                            var12 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 52;
                            var6 = var9[var6];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var6);
                            var6 = {};
                            var13 = _closure2_slot16;
                            var6.navigateToPremium = var13;
                            var13 = _closure2_slot17;
                            var6.navigateToShop = var13;
                            var13 = _closure2_slot12;
                            var6.hasCustomProfileTheme = var13;
                            var1 = var12.bind(var9)(var8, var6);
                        case 264:
                            var5[1] = var1;
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 53;
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
                                _fun92504_ip = 411;
                                continue _fun92504
                            }
                        case 353:
                            var12 = _closure1_slot14;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 54;
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
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var6 = 55;
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
                                _fun92504_ip = 476;
                                continue _fun92504
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
                                _fun92504_ip = 563;
                                continue _fun92504
                            }
                        case 506:
                            var12 = _closure1_slot14;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 56;
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
                                _fun92504_ip = 589;
                                continue _fun92504
                            }
                        case 580:
                            var8 = _closure2_slot1;
                            var6 = var8.guild_id;
                        case 589:
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun92504_ip = 680;
                                continue _fun92504
                            }
                        case 596:
                            var12 = _closure1_slot14;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 57;
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
                            var15 = _closure1_slot14;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 58;
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
                            var9 = _closure1_slot14;
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
                                _fun92504_ip = 855;
                                continue _fun92504
                            }
                        case 797:
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var7 = 59;
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
                var23 = var3.bind(var5)(var1, var2);
                _closure2_slot18 = var23;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var24;
                var2[1] = var23;
                var1 = function() { // Environment: var30
                    _fun92505: for (var _fun92505_ip = 0;;) switch (_fun92505_ip) {
                        case 0:
                            var1 = {};
                            var0 = 'main';
                            var1.id = var0;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 25;
                            var3 = var0[var8];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var0 = var0[var8];
                            var0 = var6.bind(var5)(var0);
                            var0 = var0.t;
                            var0 = var0.LXw470;
                            var0 = var3.bind(var4)(var0);
                            var1.label = var0;
                            var0 = _closure2_slot14;
                            if (var0) {
                                _fun92505_ip = 102;
                                continue _fun92505
                            }
                        case 84:
                            var6 = _closure1_slot14;
                            var4 = _closure1_slot5;
                            var0 = {};
                            var0 = var6.bind(var5)(var4, var0);
                            _fun92505_ip = 110;
                            continue _fun92505;
                        case 102:
                            var3 = _closure2_slot18;
                            var0 = var3.bind(var5)();
                        case 110:
                            var1.page = var0;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var3 = 'wishlist';
                            var1.id = var3;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = var3[var8];
                            var4 = var7.bind(var5)(var4);
                            var6 = var4.intl;
                            var4 = var6.string;
                            var3 = var3[var8];
                            var3 = var7.bind(var5)(var3);
                            var3 = var3.t;
                            var3 = var3["7lZ31J"];
                            var3 = var4.bind(var6)(var3);
                            var1.label = var3;
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var2 = var4.bind(var5)(var3, var2);
                            var1.page = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var31 = _closure1_slot2;
                var1 = 60;
                var1 = var31[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var7;
                var1.defaultIndex = var42;
                var8 = _closure1_slot1;
                var7 = 38;
                var7 = var31[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var1.itemSpacing = var7;
                var1.items = var5;
                var31 = var2.bind(var3)(var1);
                if (!(var0 != var17)) {
                    _fun92496_ip = 2640;
                    continue _fun92496
                }
            case 1280:
                if (!(var0 != var16)) {
                    _fun92496_ip = 2640;
                    continue _fun92496
                }
            case 1287:
                var34 = {};
                var34.backgroundColor = var41;
                _closure2_slot19 = var34;
                var3 = _closure1_slot15;
                var2 = _closure1_slot16;
                var1 = {};
                var8 = _closure1_slot14;
                var7 = _closure1_slot1;
                var52 = _closure1_slot2;
                var5 = 61;
                var5 = var52[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.user = var17;
                var5.displayProfile = var15;
                var5.bannerHeight = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92496_ip = 1355;
                    continue _fun92496
                }
            case 1352:
                var9 = var20;
            case 1355:
                var5.pendingBanner = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92496_ip = 1368;
                    continue _fun92496
                }
            case 1365:
                var9 = var51;
            case 1368:
                var5.pendingAvatarSrc = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92496_ip = 1390;
                    continue _fun92496
                }
            case 1378:
                var20 = var0 != var19;
                var9 = undefined;
                if (!var20) {
                    _fun92496_ip = 1390;
                    continue _fun92496
                }
            case 1387:
                var9 = var19;
            case 1390:
                var5.pendingAccentColor = var9;
                var9 = undefined;
                if (!var6) {
                    _fun92496_ip = 1412;
                    continue _fun92496
                }
            case 1400:
                var19 = var0 != var12;
                var9 = undefined;
                if (!var19) {
                    _fun92496_ip = 1412;
                    continue _fun92496
                }
            case 1409:
                var9 = var12;
            case 1412:
                var5.pendingThemeColors = var9;
                var5.disableInteraction = var6;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot15;
                var8 = _closure1_slot5;
                var7 = {};
                var20 = _closure1_slot14;
                var19 = _closure1_slot1;
                var52 = _closure1_slot2;
                var12 = 62;
                var12 = var52[var12];
                var19 = var19.bind(var4)(var12);
                var12 = {};
                var12.user = var17;
                var12.guildId = var39;
                var12.disableStatus = var49;
                var49 = undefined;
                if (!var6) {
                    _fun92496_ip = 1493;
                    continue _fun92496
                }
            case 1490:
                var49 = var51;
            case 1493:
                var12.pendingAvatarSrc = var49;
                var49 = undefined;
                if (!var6) {
                    _fun92496_ip = 1506;
                    continue _fun92496
                }
            case 1503:
                var49 = var50;
            case 1506:
                var12.pendingAvatarDecoration = var49;
                var12.backgroundColor = var21;
                var21 = {};
                var21.backgroundColor = var48;
                var12.statusStyle = var21;
                var19 = var20.bind(var4)(var19, var12);
                var12 = new Array(2);
                var12[0] = var19;
                var21 = _closure1_slot15;
                var20 = _closure1_slot1;
                var48 = _closure1_slot2;
                var19 = 63;
                var19 = var48[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var19.fallbackBackground = var40;
                var19.primaryColor = var25;
                var19.secondaryColor = var22;
                var25 = var10.profileContentWrapper;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = {};
                if (!var26) {
                    _fun92496_ip = 1605;
                    continue _fun92496
                }
            case 1600:
                var26 = 0;
                if (!var6) {
                    _fun92496_ip = 1618;
                    continue _fun92496
                }
            case 1605:
                var40 = var0 != var29;
                var26 = 0;
                if (var40) {
                    _fun92496_ip = 1618;
                    continue _fun92496
                }
            case 1614:
                var26 = _closure1_slot11;
            case 1618:
                var25.paddingTop = var26;
                var26 = _closure1_slot10;
                var26 = var32 + var26;
                var25.paddingBottom = var26;
                var22[1] = var25;
                var19.containerStyle = var22;
                var26 = _closure1_slot14;
                var25 = _closure1_slot17;
                var22 = {};
                var22.customStatusActivity = var29;
                var22.user = var17;
                var22.guildId = var39;
                var32 = var0 == var14;
                var29 = undefined;
                if (var32) {
                    _fun92496_ip = 1682;
                    continue _fun92496
                }
            case 1677:
                var29 = var14.id;
            case 1682:
                var22.channelId = var29;
                var22.hasCustomProfileTheme = var35;
                var22.showUserProfileActionSheet = var43;
                var22.isPreviewingChanges = var6;
                var22.bubbleRef = var28;
                var25 = var26.bind(var4)(var25, var22);
                var22 = new Array(3);
                var22[0] = var25;
                var28 = _closure1_slot15;
                var26 = _closure1_slot5;
                var25 = {};
                var32 = var10.primaryInfo;
                var29 = new Array(2);
                var29[0] = var32;
                var32 = var10.profileContent;
                var29[1] = var32;
                var25.style = var29;
                var40 = _closure1_slot14;
                var32 = _closure1_slot20;
                var29 = {};
                var29.user = var17;
                var48 = var0 == var14;
                var42 = undefined;
                if (var48) {
                    _fun92496_ip = 1786;
                    continue _fun92496
                }
            case 1781:
                var42 = var14.id;
            case 1786:
                var29.channelId = var42;
                var29.displayProfile = var15;
                var42 = undefined;
                if (!var6) {
                    _fun92496_ip = 1803;
                    continue _fun92496
                }
            case 1800:
                var42 = var47;
            case 1803:
                var29.displayNameOverride = var42;
                var42 = undefined;
                if (!var6) {
                    _fun92496_ip = 1816;
                    continue _fun92496
                }
            case 1813:
                var42 = var46;
            case 1816:
                var29.pronounsOverride = var42;
                var42 = undefined;
                if (!var6) {
                    _fun92496_ip = 1829;
                    continue _fun92496
                }
            case 1826:
                var42 = var45;
            case 1829:
                var29.badgesOverride = var42;
                var29.badgeContainerBackground = var41;
                var29.isPreviewingChanges = var6;
                var32 = var40.bind(var4)(var32, var29);
                var29 = new Array(7);
                var29[0] = var32;
                var40 = var17.id;
                var32 = var16.id;
                var32 = var40 !== var32;
                if (!var32) {
                    _fun92496_ip = 1915;
                    continue _fun92496
                }
            case 1875:
                var42 = _closure1_slot14;
                var41 = _closure1_slot1;
                var45 = _closure1_slot2;
                var40 = 64;
                var40 = var45[var40];
                var41 = var41.bind(var4)(var40);
                var40 = {};
                var40.user = var17;
                var40.guildId = var39;
                var32 = var42.bind(var4)(var41, var40);
            case 1915:
                var29[1] = var32;
                var32 = _closure1_slot12;
                var32 = var32.PENDING_INCOMING;
                var32 = var18 === var32;
                if (!var32) {
                    _fun92496_ip = 2007;
                    continue _fun92496
                }
            case 1936:
                var42 = _closure1_slot14;
                var41 = _closure1_slot1;
                var45 = _closure1_slot2;
                var40 = 65;
                var40 = var45[var40];
                var41 = var41.bind(var4)(var40);
                var40 = {};
                var40.user = var17;
                var46 = var0 == var14;
                var45 = undefined;
                if (var46) {
                    _fun92496_ip = 1980;
                    continue _fun92496
                }
            case 1975:
                var45 = var14.id;
            case 1980:
                var40.channelId = var45;
                var40.guildId = var39;
                var40.applicationId = var44;
                var40.style = var34;
                var40.showUserProfile = var43;
                var32 = var42.bind(var4)(var41, var40);
            case 2007:
                var29[2] = var32;
                var32 = var33.map;
                var30 = function(arg0) { // Environment: var30
                    _fun92506: for (var _fun92506_ip = 0;;) switch (_fun92506_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 65;
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
                            var6 = _closure2_slot19;
                            var1.style = var6;
                            var5 = _closure2_slot3;
                            var1.showUserProfile = var5;
                            var0 = var0.applicationId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var30 = var32.bind(var33)(var30);
                var29[3] = var30;
                var33 = _closure1_slot14;
                var32 = _closure1_slot1;
                var40 = _closure1_slot2;
                var30 = 66;
                var30 = var40[var30];
                var32 = var32.bind(var4)(var30);
                var30 = {};
                var30.user = var17;
                var30.style = var34;
                var30 = var33.bind(var4)(var32, var30);
                var29[4] = var30;
                var32 = var17.id;
                var30 = var16.id;
                var30 = var32 === var30;
                if (!var30) {
                    _fun92496_ip = 2096;
                    continue _fun92496
                }
            case 2093:
                var30 = !var6;
            case 2096:
                if (!var30) {
                    _fun92496_ip = 2119;
                    continue _fun92496
                }
            case 2099:
                var34 = _closure1_slot14;
                var33 = _closure1_slot21;
                var32 = {};
                var32.guildId = var39;
                var30 = var34.bind(var4)(var33, var32);
            case 2119:
                var29[5] = var30;
                var32 = var17.id;
                var30 = var16.id;
                var30 = var32 !== var30;
                if (!var30) {
                    _fun92496_ip = 2231;
                    continue _fun92496
                }
            case 2140:
                var34 = _closure1_slot14;
                var33 = _closure1_slot1;
                var39 = _closure1_slot2;
                var32 = 67;
                var32 = var39[var32];
                var33 = var33.bind(var4)(var32);
                var32 = {};
                var32.user = var17;
                if (var38) {
                    _fun92496_ip = 2187;
                    continue _fun92496
                }
            case 2173:
                var39 = _closure1_slot12;
                var39 = var39.BLOCKED;
                var38 = var18 === var39;
            case 2187:
                if (var38) {
                    _fun92496_ip = 2196;
                    continue _fun92496
                }
            case 2190:
                var38 = var17.isProvisional;
            case 2196:
                var32.disableCalls = var38;
                var32.disableMessage = var37;
                var32.location = var36;
                var32.hasCustomProfileTheme = var35;
                var35 = var10.primaryButtons;
                var32.style = var35;
                var30 = var34.bind(var4)(var33, var32);
            case 2231:
                var29[6] = var30;
                var25.children = var29;
                var25 = var28.bind(var4)(var26, var25);
                var22[1] = var25;
                if (var24) {
                    _fun92496_ip = 2261;
                    continue _fun92496
                }
            case 2252:
                var23 = var23.bind(var4)();
                _fun92496_ip = 2400;
                continue _fun92496;
            case 2261:
                var26 = _closure1_slot15;
                var25 = _closure1_slot5;
                var24 = {};
                var24.onLayout = var27;
                var28 = _closure1_slot14;
                var27 = {};
                var29 = var10.profileTablist;
                var27.style = var29;
                var34 = _closure1_slot14;
                var29 = _closure1_slot0;
                var32 = _closure1_slot2;
                var30 = 68;
                var30 = var32[var30];
                var30 = var29.bind(var4)(var30);
                var33 = var30.Tabs;
                var30 = {};
                var30.state = var31;
                var30 = var34.bind(var4)(var33, var30);
                var27.children = var30;
                var28 = var28.bind(var4)(var25, var27);
                var27 = new Array(2);
                var27[0] = var28;
                var30 = _closure1_slot14;
                var28 = 69;
                var28 = var32[var28];
                var28 = var29.bind(var4)(var28);
                var29 = var28.SegmentedControlPages;
                var28 = {};
                var28.state = var31;
                var28 = var30.bind(var4)(var29, var28);
                var27[1] = var28;
                var24.children = var27;
                var23 = var26.bind(var4)(var25, var24);
            case 2400:
                var22[2] = var23;
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var12[1] = var19;
                var7.children = var12;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun92496_ip = 2624;
                    continue _fun92496
                }
            case 2441:
                var9 = _closure1_slot15;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var10.bannerButtons;
                var7.style = var10;
                var19 = var17.id;
                var10 = var16.id;
                var12 = null;
                if (!(var19 !== var10)) {
                    _fun92496_ip = 2552;
                    continue _fun92496
                }
            case 2477:
                var10 = var17.bot;
                var12 = null;
                if (var10) {
                    _fun92496_ip = 2552;
                    continue _fun92496
                }
            case 2488:
                var10 = _closure1_slot12;
                var10 = var10.FRIEND;
                if (!(var18 !== var10)) {
                    _fun92496_ip = 2529;
                    continue _fun92496
                }
            case 2502:
                var10 = null;
                if (!var13) {
                    _fun92496_ip = 2527;
                    continue _fun92496
                }
            case 2507:
                var19 = _closure1_slot14;
                var18 = _closure1_slot19;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2527:
                _fun92496_ip = 2549;
                continue _fun92496;
            case 2529:
                var19 = _closure1_slot14;
                var18 = _closure1_slot18;
                var13 = {};
                var13.user = var17;
                var10 = var19.bind(var4)(var18, var13);
            case 2549:
                var12 = var10;
            case 2552:
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot14;
                var12 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 70;
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
            case 2624:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2640:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 71;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PrimaryInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 3102, 1621, 5644, 7043, 660, 4942, 33, 7046, 566, 3279, 7802, 1307, 7066, 7067, 7055, 7056, 5787, 8076, 3237, 7565, 12015, 1234, 9075, 12017, 3251, 7048, 3956, 5352, 3149, 7423, 7474, 7865, 4090, 7570, 671, 7995, 7422, 1568, 12018, 12019, 12020, 7799, 7801, 5784, 7044, 7047, 11339, 11855, 12021, 7883, 12022, 7651, 11994, 11996, 12023, 12001, 7851, 7049, 7052, 7053, 12026, 12027, 12029, 12030, 7857, 7859, 12035, 2]);