// modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var0 = function(arg0) { // Original name: ChangeIdentityOption, environment: var1
        _fun97081: for (var _fun97081_ip = 0;;) switch (_fun97081_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.guild;
                var15 = var0.user;
                var0 = _closure1_slot22;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 28;
                var0 = var5[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.getNickname;
                var0 = var18.id;
                var14 = var2.bind(var6)(var0, var3, var15);
                var6 = {};
                var0 = _closure1_slot15;
                var0 = var0.GUILD_CHANNEL;
                var6.page = var0;
                var0 = _closure1_slot16;
                var0 = var0.GUILD_BOTTOM_SHEET;
                var6.section = var0;
                var0 = 29;
                var0 = var5[var0];
                var2 = var1.bind(var3)(var0);
                var0 = 30;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.GUILD_SETTINGS;
                var0 = var2.bind(var3)(var0);
                var2 = var0.analyticsLocations;
                var0 = 31;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.guild = var18;
                var0.analyticsLocation = var6;
                var0.analyticsLocations = var2;
                var0 = var1.bind(var3)(var0);
                var _closure2_slot0 = var0;
                var2 = _closure1_slot20;
                var6 = _closure1_slot0;
                var0 = 16;
                var0 = var5[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheetRow;
                var0 = {};
                var11 = 17;
                var5 = var5[var11];
                var5 = var6.bind(var3)(var5);
                var7 = var5.intl;
                var6 = var7.string;
                var9 = var18.features;
                var8 = var9.has;
                var5 = _closure1_slot14;
                var5 = var5.HUB;
                var5 = var8.bind(var9)(var5);
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                if (var5) {
                    _fun97081_ip = 284;
                    continue _fun97081
                }
            case 276:
                var5 = var8["PKQB/H"];
                _fun97081_ip = 292;
                continue _fun97081;
            case 284:
                var5 = var8["+MWrWt"];
            case 292:
                var5 = var6.bind(var7)(var5);
                var0.label = var5;
                var6 = null;
                var5 = var14;
                if (!(var6 != var15)) {
                    _fun97081_ip = 530;
                    continue _fun97081
                }
            case 313:
                var7 = var15.hasAvatarForGuild;
                var6 = var18.id;
                var6 = var7.bind(var15)(var6);
                var5 = var14;
                if (!var6) {
                    _fun97081_ip = 530;
                    continue _fun97081
                }
            case 338:
                var8 = _closure1_slot21;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var13.identitySublabel;
                var6.style = var9;
                var17 = _closure1_slot20;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var19 = 32;
                var9 = var16[var19];
                var12 = var11.bind(var3)(var9);
                var9 = {};
                var20 = _closure1_slot0;
                var19 = var16[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.SIZE_16;
                var9.size = var19;
                var19 = var13.guildServerAvatar;
                var9.style = var19;
                var9.user = var15;
                var18 = var18.id;
                var9.guildId = var18;
                var12 = var17.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot20;
                var10 = 33;
                var10 = var16[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.user = var15;
                var10.nick = var14;
                var14 = var13.identityName;
                var10.usernameStyle = var14;
                var14 = var13.identityName;
                var10.discriminatorStyle = var14;
                var13 = var13.identityName;
                var10.nicknameStyle = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 530:
                var0.subLabel = var5;
                var4 = function() { // Original name: onPress, environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var8[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.isGuildOwner;
    var _closure1_slot6 = var4;
    var3 = var3.getGuildIconURL;
    var _closure1_slot7 = var3;
    var11 = 4;
    var3 = var8[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.ChannelTypes;
    var _closure1_slot13 = var4;
    var4 = var3.GuildFeatures;
    var _closure1_slot14 = var4;
    var10 = var3.Fonts;
    var4 = var3.AnalyticsPages;
    var _closure1_slot15 = var4;
    var4 = var3.AnalyticsSections;
    var _closure1_slot16 = var4;
    var3 = var3.AVATAR_MAX_SIZE;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot19 = var3;
    var9 = 12;
    var3 = var8[var9];
    var3 = var7.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot20 = var4;
    var3 = var3.jsxs;
    var _closure1_slot21 = var3;
    var3 = 13;
    var3 = var8[var3];
    var5 = var7.bind(var0)(var3);
    var4 = var5.createStyles;
    var3 = {};
    var6 = {};
    var6.marginRight = var11;
    var3.guildServerAvatar = var6;
    var6 = {};
    var11 = 14;
    var11 = var8[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var6.color = var11;
    var10 = var10.PRIMARY_MEDIUM;
    var6.fontFamily = var10;
    var6.fontSize = var9;
    var3.identityName = var6;
    var6 = {};
    var9 = 'row';
    var6.flexDirection = var9;
    var3.identitySublabel = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot22 = var3;
    var3 = function(arg0) { // Original name: HideMutedChannelsOption, environment: var1
        var0 = arg0;
        var0 = var0.guild;
        var _closure2_slot0 = var0;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 15;
        var1 = var10[var1];
        var3 = undefined;
        var6 = var9.bind(var3)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            var2 = _closure1_slot11;
            var1 = var2.isGuildCollapsed;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var6)(var2, var1);
        var2 = _closure1_slot20;
        var0 = 16;
        var0 = var10[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.ActionSheetSwitchRow;
        var0 = {};
        var6 = 17;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.UwOLJO;
        var6 = var7.bind(var8)(var6);
        var0.label = var6;
        var0.value = var5;
        var4 = function() { // Original name: onValueChange, environment: var4
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.toggleCollapseGuild;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.onValueChange = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var3;
    var3 = function(arg0) { // Original name: BrowseChannelsOption, environment: var1
        _fun97086: for (var _fun97086_ip = 0;;) switch (_fun97086_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var5 = var2.bind(var4)(var0);
                var3 = _closure1_slot0;
                var2 = 20;
                var2 = var7[var2];
                var9 = var3.bind(var4)(var2);
                var8 = var9.UNSAFE_useIsDismissibleContentDismissed;
                var2 = 21;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CHANNEL_BROWSER_NEW_BADGE_NUX;
                var11 = var8.bind(var9)(var2);
                var2 = 15;
                var8 = var7[var2];
                var12 = var3.bind(var4)(var8);
                var10 = var12.useStateFromStores;
                var8 = _closure1_slot10;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var1
                    var3 = _closure1_slot10;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot19;
                    var0 = var0.GUILD_ONBOARDING_QUESTION;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var10.bind(var12)(var9, var8);
                var2 = var7[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = var3.getNewChannelIds;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.size;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.MAX_NEW_CHANNELS_TO_SHOW;
                    var0 = var1 > var0;
                    return var0;
                };
                var9 = var7.bind(var8)(var3, var2);
                var7 = _closure1_slot3;
                var3 = var7.useCallback;
                var8 = var0.id;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = 24;
                    var3 = var2[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.pushLazy;
                    var6 = _closure1_slot0;
                    var3 = 26;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 25;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var2.guildId = var6;
                    var1 = _closure1_slot18;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var7 = var3.bind(var7)(var1, var2);
                var2 = var0.features;
                var1 = var2.has;
                var0 = _closure1_slot14;
                var0 = var0.COMMUNITY;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!var1) {
                    _fun97086_ip = 416;
                    continue _fun97086
                }
            case 245:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionSheetRow;
                var1 = {};
                if (!var11) {
                    _fun97086_ip = 288;
                    continue _fun97086
                }
            case 280:
                if (var10) {
                    _fun97086_ip = 288;
                    continue _fun97086
                }
            case 283:
                var8 = null;
                if (!var9) {
                    _fun97086_ip = 326;
                    continue _fun97086
                }
            case 288:
                var11 = _closure1_slot20;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 27;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.NewBadge;
                var9 = {};
                var8 = var11.bind(var4)(var10, var9);
            case 326:
                var1.trailing = var8;
                var1.onPress = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 17;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun97086_ip = 395;
                    continue _fun97086
                }
            case 382:
                var5 = var6.et6wav;
                var5 = var7.bind(var8)(var5);
                _fun97086_ip = 406;
                continue _fun97086;
            case 395:
                var6 = var6.h9mGOP;
                var5 = var7.bind(var8)(var6);
            case 406:
                var1.label = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 416:
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var5 = function(arg0) { // Original name: RestrictedGuildPrivacyOption, environment: var1
        _fun97090: for (var _fun97090_ip = 0;;) switch (_fun97090_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guild;
                var _closure2_slot0 = var6;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 34;
                var0 = var8[var0];
                var3 = undefined;
                var0 = var12.bind(var3)(var0);
                var1 = var0.RestrictedGuildIds;
                var0 = var1.useSetting;
                var2 = var0.bind(var1)();
                var1 = var2.includes;
                var0 = var6.id;
                var5 = var1.bind(var2)(var0);
                var2 = _closure1_slot20;
                var0 = 16;
                var0 = var8[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.ActionSheetSwitchRow;
                var0 = {};
                var11 = 17;
                var9 = var8[var11];
                var9 = var12.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var11];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.KXNTgb;
                var8 = var9.bind(var10)(var8);
                var0.label = var8;
                var9 = var6.features;
                var8 = var9.has;
                var6 = _closure1_slot14;
                var6 = var6.HUB;
                var6 = var8.bind(var9)(var6);
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun97090_ip = 232;
                    continue _fun97090
                }
            case 217:
                var6 = var7.jMFSQV;
                var6 = var8.bind(var9)(var6);
                _fun97090_ip = 245;
                continue _fun97090;
            case 232:
                var7 = var7["2YwzGs"];
                var6 = var8.bind(var9)(var7);
            case 245:
                var0.subLabel = var6;
                var5 = !var5;
                var0.value = var5;
                var4 = function(arg0) { // Original name: onValueChange, environment: var4
                    _fun97091: for (var _fun97091_ip = 0;;) switch (_fun97091_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 35;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getSanitizedRestrictedGuilds;
                            var5 = var2.bind(var3)();
                            var2 = arg0;
                            if (var2) {
                                _fun97091_ip = 65;
                                continue _fun97091
                            }
                        case 41:
                            var3 = var5.add;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var5)(var2);
                            _fun97091_ip = 87;
                            continue _fun97091;
                        case 65:
                            var3 = var5.delete;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var5)(var2);
                        case 87:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 34;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.RestrictedGuildIds;
                            var2 = var3.updateSetting;
                            var1 = global;
                            var4 = var1.Array;
                            var1 = var4.from;
                            var1 = var1.bind(var4)(var5);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0.onValueChange = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var5;
    var4 = function(arg0) { // Original name: NotificationAction, environment: var1
        var0 = arg0;
        var0 = var0.guild;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot20;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 16;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.ActionSheetRow;
        var0 = {};
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.HcoRu0;
        var5 = var6.bind(var7)(var5);
        var0.label = var5;
        var4 = function() { // Original name: onPress, environment: var4
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 23;
            var1 = var3[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var1 = var4.hideActionSheet;
            var1 = var1.bind(var4)();
            var1 = 36;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.open;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot26 = var4;
    var3 = function(arg0) { // Original name: handleLeaveServer, environment: var1
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 23;
        var2 = var4[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var2 = var2.bind(var3)();
        var5 = _closure1_slot3;
        var3 = var5.lazy;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 26;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 47;
            var1 = var0[var1];
            var0 = var0.paths;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot0;
        var2 = 48;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.openAlert;
        var2 = _closure1_slot20;
        var1 = {};
        var6 = arg0;
        var1.guild = var6;
        var2 = var2.bind(var0)(var5, var1);
        var1 = 'guild-action-sheet-leave-server';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot27 = var3;
    var6 = 63;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx';
    var6 = var7.bind(var8)(var6);
    var2.RestrictedGuildPrivacyOption = var5;
    var2.NotificationAction = var4;
    var4 = function(arg0) { // Environment: var1
        _fun97096: for (var _fun97096_ip = 0;;) switch (_fun97096_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var _closure2_slot0 = var9;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var3 = undefined;
                var7 = var18.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var11
                    var2 = _closure1_slot8;
                    var1 = var2.getGuildHasUnreadIgnoreMuted;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var5.bind(var7)(var4, var1, var2);
                var1 = 37;
                var1 = var14[var1];
                var4 = var18.bind(var3)(var1);
                var2 = var4.useShouldUseNewNotificationSystem;
                var1 = 'GuildUnreadAction';
                var5 = var2.bind(var4)(var1);
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var1 = var9.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 36;
                    var2 = var7[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.updateGuildNotificationSettings;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = {};
                    var6 = false;
                    var2.muted = var6;
                    var6 = _closure1_slot0;
                    var1 = 38;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.NotificationLabels;
                    var1 = var1.Unmuted;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1 = var4.bind(var7)(var1, var2);
                var _closure2_slot1 = var1;
                var0 = var14[var0];
                var4 = var18.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var2 = _closure1_slot11;
                    var1 = var2.isMuted;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var2.bind(var4)(var1, var0);
                var _closure2_slot2 = var12;
                var2 = _closure1_slot21;
                var13 = 16;
                var0 = var14[var13];
                var0 = var18.bind(var3)(var0);
                var0 = var0.ActionSheetRow;
                var1 = var0.Group;
                var0 = {};
                var4 = false;
                var0.hasIcons = var4;
                var8 = _closure1_slot20;
                var4 = var14[var13];
                var4 = var18.bind(var3)(var4);
                var7 = var4.ActionSheetRow;
                var4 = {};
                var17 = 17;
                var15 = var14[var17];
                var15 = var18.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var17];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.e6RscS;
                var14 = var15.bind(var16)(var14);
                var4.label = var14;
                var14 = function() { // Original name: onPress, environment: var11
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 23;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 39;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var1 = _closure1_slot16;
                    var1 = var1.GUILD_POPOUT;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4.onPress = var14;
                var10 = !var10;
                var4.disabled = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                if (!var5) {
                    _fun97096_ip = 449;
                    continue _fun97096
                }
            case 331:
                var10 = _closure1_slot20;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.ActionSheetRow;
                var7 = {};
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if (var12) {
                    _fun97096_ip = 417;
                    continue _fun97096
                }
            case 404:
                var12 = var13.vRzp7P;
                var12 = var14.bind(var15)(var12);
                _fun97096_ip = 428;
                continue _fun97096;
            case 417:
                var13 = var13.De0BTC;
                var12 = var14.bind(var15)(var13);
            case 428:
                var7.label = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    _fun97101: for (var _fun97101_ip = 0;;) switch (_fun97101_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun97101_ip = 150;
                                continue _fun97101
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 23;
                            var5 = var1[var3];
                            var6 = undefined;
                            var7 = var4.bind(var6)(var5);
                            var5 = var7.hideActionSheet;
                            var5 = var5.bind(var7)();
                            var3 = var1[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 26;
                            var2 = var1[var2];
                            var3 = var3.bind(var6)(var2);
                            var2 = 40;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var6)(var2, var1);
                            var6 = _closure2_slot0;
                            var7 = var6.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'muteSettings';
                            var2 = var2.bind(var1)(var7);
                            var1 = {};
                            var6 = var6.id;
                            var1.guildId = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            _fun97101_ip = 160;
                            continue _fun97101;
                        case 150:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7.onPress = var11;
                var5 = var10.bind(var3)(var8, var7);
            case 449:
                var4[1] = var5;
                var8 = var9.features;
                var7 = var8.has;
                var5 = _closure1_slot14;
                var5 = var5.COMMUNITY;
                var7 = var7.bind(var8)(var5);
                var5 = null;
                if (!var7) {
                    _fun97096_ip = 504;
                    continue _fun97096
                }
            case 484:
                var8 = _closure1_slot20;
                var7 = _closure1_slot24;
                var6 = {};
                var6.guild = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 504:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildUnreadAction = var4;
    var4 = function(arg0) { // Original name: GuildActionSheetPrimaryActions, environment: var1
        _fun97102: for (var _fun97102_ip = 0;;) switch (_fun97102_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 41;
                var2 = var7[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useGuildActionSheetPermissions;
                var2 = var2.bind(var3)(var0);
                var3 = var2.canManageChannels;
                var8 = _closure1_slot1;
                var2 = 42;
                var2 = var7[var2];
                var2 = var8.bind(var4)(var2);
                var0 = var0.id;
                var2 = var2.bind(var4)(var0);
                var0 = 15;
                var0 = var7[var0];
                var8 = var6.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var5
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 43;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isVerifiedRolesChannelVisible;
                    var4 = _closure1_slot9;
                    var3 = var4.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0);
                var7 = new Array(0);
                if (!var3) {
                    _fun97102_ip = 340;
                    continue _fun97102
                }
            case 134:
                var8 = var7.push;
                var11 = _closure1_slot20;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 16;
                var6 = var14[var3];
                var6 = var13.bind(var4)(var6);
                var9 = var6.ActionSheetRow;
                var6 = {};
                var10 = 17;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var16 = var12.intl;
                var15 = var16.string;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["fUYU+j"];
                var12 = var15.bind(var16)(var12);
                var6.label = var12;
                var12 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 44;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.open;
                    var1 = _closure2_slot0;
                    var7 = var1.id;
                    var9 = var4;
                    var8 = null;
                    var6 = null;
                    var5 = null;
                    var1 = var9[var3](var8, var7, var6, var5, var4);
                    return var0;
                };
                var6.onPress = var12;
                var6 = var11.bind(var4)(var9, var6);
                var6 = var8.bind(var7)(var6);
                var6 = var7.push;
                var9 = _closure1_slot20;
                var3 = var14[var3];
                var3 = var13.bind(var4)(var3);
                var8 = var3.ActionSheetRow;
                var3 = {};
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["ISN+NM"];
                var10 = var11.bind(var12)(var10);
                var3.label = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 23;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 44;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.open;
                    var1 = _closure1_slot13;
                    var9 = var1.GUILD_CATEGORY;
                    var1 = _closure2_slot0;
                    var8 = var1.id;
                    var10 = var5;
                    var7 = null;
                    var6 = null;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var9.bind(var4)(var8, var3);
                var3 = var6.bind(var7)(var3);
            case 340:
                if (!var2) {
                    _fun97102_ip = 453;
                    continue _fun97102
                }
            case 343:
                var3 = var7.push;
                var8 = _closure1_slot20;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 16;
                var2 = var13[var2];
                var2 = var12.bind(var4)(var2);
                var6 = var2.ActionSheetRow;
                var2 = {};
                var9 = 17;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["60lJ0C"];
                var9 = var10.bind(var11)(var9);
                var2.label = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 45;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.openCreateOrEditGuildEventModal;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2.onPress = var9;
                var2 = var8.bind(var4)(var6, var2);
                var2 = var3.bind(var7)(var2);
            case 453:
                if (!var0) {
                    _fun97102_ip = 566;
                    continue _fun97102
                }
            case 456:
                var2 = var7.push;
                var6 = _closure1_slot20;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 16;
                var0 = var12[var0];
                var0 = var11.bind(var4)(var0);
                var3 = var0.ActionSheetRow;
                var0 = {};
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.ghtnss;
                var8 = var9.bind(var10)(var8);
                var0.label = var8;
                var8 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 46;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildRoleConnectionsModal;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.guildId = var4;
                    var4 = function() { // Original name: onClose, environment: var4
                        var0 = undefined;
                        return var0;
                    };
                    var1.onClose = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var8;
                var0 = var6.bind(var4)(var3, var0);
                var0 = var2.bind(var7)(var0);
            case 566:
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun97102_ip = 651;
                    continue _fun97102
                }
            case 579:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ActionSheetRow;
                var2 = var1.Group;
                var1 = {};
                var6 = false;
                var1.hasIcons = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = _closure1_slot20;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 651:
                return var0;
        }
    };
    var2.GuildActionSheetPrimaryActions = var4;
    var2.handleLeaveServer = var3;
    var3 = function(arg0) { // Environment: var1
        _fun97110: for (var _fun97110_ip = 0;;) switch (_fun97110_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var _closure2_slot0 = var9;
                var2 = _closure1_slot12;
                var0 = var2.getCurrentUser;
                var12 = var0.bind(var2)();
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 49;
                var0 = var8[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var0 = null;
                var3 = var0 != var12;
                var2 = 'GuildActionSheetDirectoryActions: user cannot be undefined';
                var2 = var6.bind(var4)(var3, var2);
                var7 = new Array(0);
                var2 = _closure1_slot6;
                var2 = var2.bind(var4)(var9, var12);
                var6 = var7.push;
                var11 = _closure1_slot20;
                var10 = _closure1_slot26;
                var3 = {};
                var3.guild = var9;
                var3 = var11.bind(var4)(var10, var3);
                var3 = var6.bind(var7)(var3);
                var6 = var7.push;
                var11 = _closure1_slot20;
                var10 = _closure1_slot28;
                var3 = {};
                var3.guild = var9;
                var3.user = var12;
                var3 = var11.bind(var4)(var10, var3);
                var3 = var6.bind(var7)(var3);
                var6 = var7.push;
                var11 = _closure1_slot20;
                var10 = _closure1_slot25;
                var3 = {};
                var3.guild = var9;
                var3 = var11.bind(var4)(var10, var3);
                var3 = var6.bind(var7)(var3);
                var6 = _closure1_slot0;
                var3 = 50;
                var3 = var8[var3];
                var8 = var6.bind(var4)(var3);
                var6 = var8.useMessageRequestPrivacyOption;
                var3 = {};
                var3.guild = var9;
                var6 = var6.bind(var8)(var3);
                if (!(var0 != var6)) {
                    _fun97110_ip = 225;
                    continue _fun97110
                }
            case 215:
                var3 = var7.push;
                var3 = var3.bind(var7)(var6);
            case 225:
                if (var2) {
                    _fun97110_ip = 399;
                    continue _fun97110
                }
            case 231:
                var3 = var7.push;
                var8 = _closure1_slot20;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var6.bind(var4)(var2);
                var6 = var2.ActionSheetRow;
                var2 = {};
                var11 = var9.features;
                var10 = var11.has;
                var9 = _closure1_slot14;
                var9 = var9.HUB;
                var9 = var10.bind(var11)(var9);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 17;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun97110_ip = 354;
                    continue _fun97110
                }
            case 341:
                var9 = var10.J2TBi3;
                var9 = var11.bind(var12)(var9);
                _fun97110_ip = 365;
                continue _fun97110;
            case 354:
                var10 = var10.Dv8gFT;
                var9 = var11.bind(var12)(var10);
            case 365:
                var2.label = var9;
                var9 = 'danger';
                var2.variant = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot27;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onPress = var9;
                var2 = var8.bind(var4)(var6, var2);
                var2 = var3.bind(var7)(var2);
            case 399:
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun97110_ip = 484;
                    continue _fun97110
                }
            case 412:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ActionSheetRow;
                var2 = var1.Group;
                var1 = {};
                var6 = false;
                var1.hasIcons = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = _closure1_slot20;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 484:
                return var0;
        }
    };
    var2.GuildActionSheetDirectoryActions = var3;
    var3 = function(arg0) { // Environment: var1
        _fun97113: for (var _fun97113_ip = 0;;) switch (_fun97113_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guild;
                var _closure2_slot0 = var10;
                var2 = _closure1_slot12;
                var0 = var2.getCurrentUser;
                var14 = var0.bind(var2)();
                var0 = _closure1_slot6;
                var4 = undefined;
                var2 = var0.bind(var4)(var10, var14);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 51;
                var0 = var9[var0];
                var3 = var8.bind(var4)(var0);
                var0 = var3.useCanReportRaid;
                var6 = var0.bind(var3)(var10);
                var0 = 52;
                var0 = var9[var0];
                var7 = var8.bind(var4)(var0);
                var3 = var7.useGuildIncidentsState;
                var0 = var10.id;
                var0 = var3.bind(var7)(var0);
                var3 = var0.shouldShowIncidentActions;
                var12 = var0.isUnderLockdown;
                var7 = new Array(0);
                var0 = 53;
                var0 = var9[var0];
                var9 = var8.bind(var4)(var0);
                var8 = var9.useOptInEnabledForGuild;
                var0 = var10.id;
                var13 = var8.bind(var9)(var0);
                var8 = var7.push;
                var11 = _closure1_slot20;
                var9 = _closure1_slot28;
                var0 = {};
                var0.guild = var10;
                var0.user = var14;
                var0 = var11.bind(var4)(var9, var0);
                var0 = var8.bind(var7)(var0);
                var9 = var10.features;
                var8 = var9.has;
                var0 = _closure1_slot14;
                var0 = var0.COMMUNITY;
                var0 = var8.bind(var9)(var0);
                if (!var0) {
                    _fun97113_ip = 328;
                    continue _fun97113
                }
            case 208:
                var8 = var7.push;
                var11 = _closure1_slot20;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 16;
                var0 = var18[var0];
                var0 = var17.bind(var4)(var0);
                var9 = var0.ActionSheetSwitchRow;
                var0 = {};
                var14 = 17;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.FB2ZZV;
                var14 = var15.bind(var16)(var14);
                var0.label = var14;
                var13 = !var13;
                var0.value = var13;
                var13 = function() { // Original name: onValueChange, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 54;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.toggleShowAllChannels;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.onValueChange = var13;
                var0 = var11.bind(var4)(var9, var0);
                var0 = var8.bind(var7)(var0);
            case 328:
                var8 = var7.push;
                var11 = _closure1_slot20;
                var9 = _closure1_slot23;
                var0 = {};
                var0.guild = var10;
                var0 = var11.bind(var4)(var9, var0);
                var0 = var8.bind(var7)(var0);
                var8 = var7.push;
                var11 = _closure1_slot20;
                var9 = _closure1_slot25;
                var0 = {};
                var0.guild = var10;
                var0 = var11.bind(var4)(var9, var0);
                var0 = var8.bind(var7)(var0);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 50;
                var0 = var9[var0];
                var9 = var8.bind(var4)(var0);
                var8 = var9.useMessageRequestPrivacyOption;
                var0 = {};
                var0.guild = var10;
                var9 = var8.bind(var9)(var0);
                var0 = null;
                if (!(var0 != var9)) {
                    _fun97113_ip = 441;
                    continue _fun97113
                }
            case 431:
                var8 = var7.push;
                var8 = var8.bind(var7)(var9);
            case 441:
                if (!var6) {
                    _fun97113_ip = 556;
                    continue _fun97113
                }
            case 444:
                var8 = var7.push;
                var11 = _closure1_slot20;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 16;
                var6 = var17[var6];
                var6 = var16.bind(var4)(var6);
                var9 = var6.ActionSheetRow;
                var6 = {};
                var13 = 17;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.cswId3;
                var13 = var14.bind(var15)(var13);
                var6.label = var13;
                var13 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 55;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openReportRaidModal;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var13;
                var6 = var11.bind(var4)(var9, var6);
                var6 = var8.bind(var7)(var6);
            case 556:
                var9 = var7.push;
                var13 = _closure1_slot20;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 16;
                var8 = var14[var6];
                var8 = var18.bind(var4)(var8);
                var11 = var8.ActionSheetRow;
                var8 = {};
                var15 = 17;
                var16 = var14[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var15];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.Aen9eh;
                var14 = var16.bind(var17)(var14);
                var8.label = var14;
                var14 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 56;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showReportModalForGuild;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onPress = var14;
                var8 = var13.bind(var4)(var11, var8);
                var8 = var9.bind(var7)(var8);
                if (!var3) {
                    _fun97113_ip = 812;
                    continue _fun97113
                }
            case 672:
                var8 = var7.push;
                var11 = _closure1_slot20;
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var9.bind(var4)(var3);
                var9 = var3.ActionSheetRow;
                var3 = {};
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var15];
                var14 = var17.bind(var4)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var13[var15];
                var13 = var17.bind(var4)(var13);
                var13 = var13.t;
                if (var12) {
                    _fun97113_ip = 765;
                    continue _fun97113
                }
            case 750:
                var12 = var13.EPlEdu;
                var12 = var14.bind(var16)(var12);
                _fun97113_ip = 778;
                continue _fun97113;
            case 765:
                var13 = var13["+tSVi3"];
                var12 = var14.bind(var16)(var13);
            case 778:
                var3.label = var12;
                var12 = 'danger';
                var3.variant = var12;
                var12 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 23;
                    var1 = var2[var3];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var1 = var6.hideActionSheet;
                    var1 = var1.bind(var6)();
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 57;
                    var5 = var2[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.GuildIncidentActionSources;
                    var5 = var5.GUILD_PROFILE;
                    var1.source = var5;
                    var3 = var2[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = 26;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 58;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.guild = var6;
                    var2.analyticsData = var1;
                    var1 = 'GuildIncidentActionsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var3.onPress = var12;
                var3 = var11.bind(var4)(var9, var3);
                var3 = var8.bind(var7)(var3);
            case 812:
                if (var2) {
                    _fun97113_ip = 980;
                    continue _fun97113
                }
            case 818:
                var3 = var7.push;
                var9 = _closure1_slot20;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var4)(var2);
                var8 = var2.ActionSheetRow;
                var2 = {};
                var12 = var10.features;
                var11 = var12.has;
                var10 = _closure1_slot14;
                var10 = var10.HUB;
                var10 = var11.bind(var12)(var10);
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var15];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                if (var10) {
                    _fun97113_ip = 935;
                    continue _fun97113
                }
            case 922:
                var10 = var11.J2TBi3;
                var10 = var12.bind(var13)(var10);
                _fun97113_ip = 946;
                continue _fun97113;
            case 935:
                var11 = var11.Dv8gFT;
                var10 = var12.bind(var13)(var11);
            case 946:
                var2.label = var10;
                var10 = 'danger';
                var2.variant = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot27;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onPress = var10;
                var2 = var9.bind(var4)(var8, var2);
                var2 = var3.bind(var7)(var2);
            case 980:
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun97113_ip = 1062;
                    continue _fun97113
                }
            case 993:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ActionSheetRow;
                var2 = var1.Group;
                var1 = {};
                var6 = false;
                var1.hasIcons = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = _closure1_slot20;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1062:
                return var0;
        }
    };
    var2.GuildActionSheetSecondaryActions = var3;
    var1 = function(arg0) { // Environment: var1
        _fun97120: for (var _fun97120_ip = 0;;) switch (_fun97120_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 34;
                var0 = var7[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var5 = var0.DeveloperMode;
                var0 = var5.useSetting;
                var0 = var0.bind(var5)();
                var6 = _closure1_slot1;
                var5 = 59;
                var5 = var7[var5];
                var9 = var6.bind(var3)(var5);
                var8 = var9.useExperiment;
                var6 = {};
                var5 = 'GuildDeveloperOptionAction';
                var6.location = var5;
                var5 = {};
                var7 = false;
                var5.autoTrackExposure = var7;
                var5 = var8.bind(var9)(var6, var5);
                var5 = var5.tidaWebformEnabled;
                if (var0) {
                    _fun97120_ip = 115;
                    continue _fun97120
                }
            case 111:
                var0 = null;
                return var0;
            case 115:
                var6 = new Array(0);
                var9 = var6.push;
                var12 = _closure1_slot20;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 16;
                var8 = var13[var0];
                var8 = var16.bind(var3)(var8);
                var11 = var8.ActionSheetRow;
                var8 = {};
                var10 = 17;
                var14 = var13[var10];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var10];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["94lLD7"];
                var13 = var14.bind(var15)(var13);
                var8.label = var13;
                var13 = function() { // Original name: onPress, environment: var4
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 60;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = 61;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentIdCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8.onPress = var13;
                var8 = var12.bind(var3)(var11, var8);
                var8 = var9.bind(var6)(var8);
                if (!var5) {
                    _fun97120_ip = 470;
                    continue _fun97120
                }
            case 237:
                var8 = var2.icon;
                var5 = null;
                if (!(var5 != var8)) {
                    _fun97120_ip = 354;
                    continue _fun97120
                }
            case 248:
                var9 = var6.push;
                var12 = _closure1_slot20;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = var13[var0];
                var8 = var16.bind(var3)(var8);
                var11 = var8.ActionSheetRow;
                var8 = {};
                var14 = var13[var10];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var10];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["7H30wR"];
                var13 = var14.bind(var15)(var13);
                var8.label = var13;
                var13 = function() { // Original name: onPress, environment: var4
                    _fun97122: for (var _fun97122_ip = 0;;) switch (_fun97122_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var4 = _closure2_slot0;
                            var3 = _closure1_slot17;
                            var0 = undefined;
                            var2 = true;
                            var5 = var5.bind(var0)(var4, var3, var2);
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun97122_ip = 88;
                                continue _fun97122
                            }
                        case 35:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 60;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var1 = var4.copy;
                            var1 = var1.bind(var4)(var5);
                            var1 = 61;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentLinkCopied;
                            var1 = var1.bind(var2)();
                        case 88:
                            return var0;
                    }
                };
                var8.onPress = var13;
                var8 = var12.bind(var3)(var11, var8);
                var8 = var9.bind(var6)(var8);
            case 354:
                var2 = var2.banner;
                if (!(var5 != var2)) {
                    _fun97120_ip = 470;
                    continue _fun97120
                }
            case 364:
                var5 = var6.push;
                var9 = _closure1_slot20;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = var11[var0];
                var2 = var14.bind(var3)(var2);
                var8 = var2.ActionSheetRow;
                var2 = {};
                var12 = var11[var10];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var10];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["2FoUnk"];
                var11 = var12.bind(var13)(var11);
                var2.label = var11;
                var11 = function() { // Original name: onPress, environment: var4
                    _fun97123: for (var _fun97123_ip = 0;;) switch (_fun97123_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 62;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.getGuildBannerURL;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var6 = var2.id;
                            var3.id = var6;
                            var2 = var2.banner;
                            var3.banner = var2;
                            var2 = true;
                            var5 = var4.bind(var5)(var3, var2);
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun97123_ip = 127;
                                continue _fun97123
                            }
                        case 74:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 60;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var1 = var4.copy;
                            var1 = var1.bind(var4)(var5);
                            var1 = 61;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentLinkCopied;
                            var1 = var1.bind(var2)();
                        case 127:
                            return var0;
                    }
                };
                var2.onPress = var11;
                var2 = var9.bind(var3)(var8, var2);
                var2 = var5.bind(var6)(var2);
            case 470:
                var2 = _closure1_slot20;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = var5[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.ActionSheetRow;
                var1 = var0.Group;
                var0 = {};
                var0.hasIcons = var7;
                var7 = var5[var10];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var5[var10];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.ObIb1Q;
                var5 = var7.bind(var8)(var5);
                var0.title = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = _closure1_slot20;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildDeveloperOptionAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4536, 1416, 8585, 1665, 3907, 4266, 1613, 660, 4647, 4267, 33, 1297, 671, 566, 7695, 1234, 9109, 5570, 3171, 1358, 4532, 3237, 4524, 9782, 1307, 11685, 3921, 5687, 5540, 7380, 5413, 8161, 1348, 7188, 4660, 8707, 4657, 12594, 8702, 10235, 8054, 4485, 8095, 8058, 9989, 12595, 3988, 44, 12592, 8690, 8689, 4542, 9795, 12596, 6454, 6692, 9998, 8361, 5252, 3106, 1417, 2]);