// modules/guild_settings/native/GuildSettingsModalOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun114795: for (var _fun114795_ip = 0;;) switch (_fun114795_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114795_ip = 76;
                continue _fun114795;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot33 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var6 = global;
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = var8;
    var7 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.UserNotificationSettings;
    var _closure1_slot18 = var8;
    var8 = var7.ChannelTypes;
    var _closure1_slot19 = var8;
    var8 = var7.Permissions;
    var _closure1_slot20 = var8;
    var8 = var7.GuildFeatures;
    var _closure1_slot21 = var8;
    var8 = var7.HelpdeskArticles;
    var _closure1_slot22 = var8;
    var8 = var7.SystemChannelFlags;
    var _closure1_slot23 = var8;
    var8 = var7.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot24 = var8;
    var7 = var7.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot25 = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.TitleStyleType;
    var _closure1_slot26 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot27 = var8;
    var8 = var7.jsxs;
    var _closure1_slot28 = var8;
    var7 = var7.Fragment;
    var _closure1_slot29 = var7;
    var7 = 18;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10.flex = var11;
    var7.overview = var10;
    var10 = {};
    var11 = 19;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.marginHorizontal = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10.marginBottom = var13;
    var7.redesignHorizontalPadding = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10.marginTop = var11;
    var7.hint = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot30 = var7;
    var8 = var6.Object;
    var7 = var8.freeze;
    var9 = {};
    var6 = 60;
    var9.value = var6;
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.iXLF9W;
        var0 = {};
        var4 = 1;
        var0.minutes = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.label = var6;
    var6 = new Array(5);
    var6[0] = var9;
    var9 = {};
    var10 = 300;
    var9.value = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.iXLF9W;
        var0 = {};
        var4 = 5;
        var0.minutes = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.label = var10;
    var6[1] = var9;
    var9 = {};
    var10 = 900;
    var9.value = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.iXLF9W;
        var0 = {};
        var4 = 15;
        var0.minutes = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.label = var10;
    var6[2] = var9;
    var9 = {};
    var10 = 1800;
    var9.value = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.iXLF9W;
        var0 = {};
        var4 = 30;
        var0.minutes = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.label = var10;
    var6[3] = var9;
    var9 = {};
    var10 = 3600;
    var9.value = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.xCjYxK;
        var0 = {};
        var4 = 1;
        var0.hours = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.label = var10;
    var6[4] = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot31 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114804: for (var _fun114804_ip = 0;;) switch (_fun114804_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot33;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114804_ip = 86;
                        continue _fun114804
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114804_ip = 120;
                    continue _fun114804;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateGuild;
                        var1 = {};
                        var4 = arg0;
                        var1.name = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleNameChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateGuild;
                        var1 = {};
                        var4 = arg0;
                        var1.description = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleDescriptionChange = var2;
                    var2 = function() { // Environment: var1
                        _fun114807: for (var _fun114807_ip = 0;;) switch (_fun114807_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var0 = 22;
                                var1 = var9[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var3 = _closure3_slot0;
                                var6 = var3.props;
                                var6 = var6.guild;
                                var6 = var6.id;
                                var1.guildId = var6;
                                var6 = _closure1_slot12;
                                var1.channelType = var6;
                                var8 = _closure1_slot0;
                                var5 = 20;
                                var6 = var9[var5];
                                var6 = var8.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.wGiHkK;
                                var5 = var6.bind(var7)(var5);
                                var1.noChannelOptionLabel = var5;
                                var5 = function arg0() {
                                    _fun114808: for (var _fun114808_ip = 0;;) switch (_fun114808_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 21;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.updateGuild;
                                            var1 = {};
                                            var4 = null;
                                            var6 = var4 == var5;
                                            var4 = undefined;
                                            if (var6) {
                                                _fun114808_ip = 52;
                                                continue _fun114808
                                            }
                                        case 47:
                                            var4 = var5.id;
                                        case 52:
                                            var1.afkChannelId = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var1.onSelect = var5;
                                var4 = function arg0() {
                                    var0 = arg0;
                                    var0 = var0.channel;
                                    var1 = var0.type;
                                    var0 = _closure1_slot19;
                                    var0 = var0.GUILD_VOICE;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1.filterFn = var4;
                                var3 = var3.props;
                                var4 = var3.afkChannel;
                                var3 = null;
                                var5 = var3 != var4;
                                if (!var5) {
                                    _fun114807_ip = 167;
                                    continue _fun114807
                                }
                            case 164:
                                var3 = var4;
                            case 167:
                                var1.selectedChannel = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var0.handleAfkChannelChange = var2;
                    var2 = function() { // Environment: var1
                        _fun114810: for (var _fun114810_ip = 0;;) switch (_fun114810_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var0 = 22;
                                var1 = var9[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var3 = _closure3_slot0;
                                var6 = var3.props;
                                var6 = var6.guild;
                                var6 = var6.id;
                                var1.guildId = var6;
                                var6 = _closure1_slot11;
                                var1.channelType = var6;
                                var6 = function arg0() {
                                    var0 = arg0;
                                    var0 = var0.channel;
                                    var1 = var0.type;
                                    var0 = _closure1_slot19;
                                    var0 = var0.GUILD_TEXT;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1.filterFn = var6;
                                var8 = _closure1_slot0;
                                var5 = 20;
                                var6 = var9[var5];
                                var6 = var8.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.ibUhoa;
                                var5 = var6.bind(var7)(var5);
                                var1.noChannelOptionLabel = var5;
                                var4 = function arg0() {
                                    _fun114812: for (var _fun114812_ip = 0;;) switch (_fun114812_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 21;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.updateGuild;
                                            var1 = {};
                                            var4 = null;
                                            var6 = var4 == var5;
                                            var4 = undefined;
                                            if (var6) {
                                                _fun114812_ip = 52;
                                                continue _fun114812
                                            }
                                        case 47:
                                            var4 = var5.id;
                                        case 52:
                                            var1.systemChannelId = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var1.onSelect = var4;
                                var3 = var3.props;
                                var4 = var3.systemChannel;
                                var3 = null;
                                var5 = var3 != var4;
                                if (!var5) {
                                    _fun114810_ip = 167;
                                    continue _fun114810
                                }
                            case 164:
                                var3 = var4;
                            case 167:
                                var1.selectedChannel = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var0.handleSystemChannelChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_JOIN_NOTIFICATIONS;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemJoinMessages = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemJoinMessageReplies = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemPremiumSubscribe = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemReminderNotifications = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemGuildRoleSubscriptionPurchaseMessages = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemGuildRoleSubscriptionPurchaseMessageReplies = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.handleSystemChannelFlagsChange;
                        var0 = _closure1_slot23;
                        var1 = var0.SUPPRESS_CHANNEL_PROMPT_DEADCHAT;
                        var0 = arg0;
                        var0 = !var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSystemGuildChannelPromptDeadchatMessages = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 23;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.showSimpleActionSheet;
                        var1 = {};
                        var5 = 'AFKTimeout';
                        var1.key = var5;
                        var6 = _closure1_slot31;
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            var3 = arg0;
                            var _closure5_slot0 = var3;
                            var0 = {};
                            var2 = var3.label;
                            var2 = var2.bind(var3)();
                            var0.label = var2;
                            var1 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.updateGuild;
                                var1 = {};
                                var4 = _closure5_slot0;
                                var4 = var4.value;
                                var1.afkTimeout = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onPress = var1;
                            return var0;
                        };
                        var4 = var5.bind(var6)(var4);
                        var1.options = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleAFKTimeoutChange = var2;
                    var2 = function() { // Environment: var1
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 24;
                        var1 = var6[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var10 = _closure1_slot0;
                        var7 = 20;
                        var4 = var6[var7];
                        var4 = var10.bind(var0)(var4);
                        var9 = var4.intl;
                        var8 = var9.string;
                        var4 = var6[var7];
                        var4 = var10.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4.l3hWP6;
                        var4 = var8.bind(var9)(var4);
                        var1.title = var4;
                        var4 = var6[var7];
                        var4 = var10.bind(var0)(var4);
                        var12 = var4.intl;
                        var11 = var12.format;
                        var4 = var6[var7];
                        var4 = var10.bind(var0)(var4);
                        var4 = var4.t;
                        var9 = var4["Zuo+Vd"];
                        var8 = {};
                        var4 = _closure3_slot0;
                        var13 = var4.props;
                        var13 = var13.guild;
                        var13 = var13.name;
                        var8.name = var13;
                        var8 = var11.bind(var12)(var9, var8);
                        var1.body = var8;
                        var8 = var6[var7];
                        var8 = var10.bind(var0)(var8);
                        var11 = var8.intl;
                        var9 = var11.string;
                        var8 = var6[var7];
                        var8 = var10.bind(var0)(var8);
                        var8 = var8.t;
                        var8 = var8.gm1Vej;
                        var8 = var9.bind(var11)(var8);
                        var1.cancelText = var8;
                        var8 = var6[var7];
                        var8 = var10.bind(var0)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var6[var7];
                        var7 = var10.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.p89ACt;
                        var7 = var8.bind(var9)(var7);
                        var1.confirmText = var7;
                        var4 = var4.handleConfirmDeleteServer;
                        var1.onConfirm = var4;
                        var4 = 25;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.Colors;
                        var4 = var4.RED;
                        var1.confirmColor = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleDeleteServer = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.deleteGuild;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.guild;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleConfirmDeleteServer = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateGuild;
                        var1 = {};
                        var4 = arg0;
                        var1.splash = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleSplashChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114826: for (var _fun114826_ip = 0;;) switch (_fun114826_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var0 = var0.guild;
                                var1 = global;
                                var2 = var1.Set;
                                var5 = var0.features;
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var6 = var1;
                                var0 = new var6[var2](var5, var4);
                                var4 = var0 instanceof Object ? var0 : var1;
                                var0 = arg0;
                                if (var0) {
                                    _fun114826_ip = 82;
                                    continue _fun114826
                                }
                            case 57:
                                var1 = var4.delete;
                                var0 = _closure1_slot21;
                                var0 = var0.SUMMARIES_ENABLED_BY_USER;
                                var0 = var1.bind(var4)(var0);
                                _fun114826_ip = 105;
                                continue _fun114826;
                            case 82:
                                var1 = var4.add;
                                var0 = _closure1_slot21;
                                var0 = var0.SUMMARIES_ENABLED_BY_USER;
                                var0 = var1.bind(var4)(var0);
                            case 105:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.updateGuild;
                                var1 = {};
                                var1.features = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleSummariesToggle = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateGuild;
                        var1 = {};
                        var4 = arg0;
                        var1.banner = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleBannerChange = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var0 = var0.guild;
                        var4 = var0.id;
                        var16 = var0.name;
                        var15 = var0.icon;
                        var14 = var0.afkChannelId;
                        var13 = var0.afkTimeout;
                        var12 = var0.systemChannelId;
                        var10 = var0.safetyAlertsChannelId;
                        var11 = var0.systemChannelFlags;
                        var9 = var0.defaultMessageNotifications;
                        var8 = var0.splash;
                        var7 = var0.banner;
                        var6 = var0.description;
                        var5 = var0.features;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 21;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.saveGuild;
                        var1 = {};
                        var1.name = var16;
                        var1.icon = var15;
                        var1.afkChannelId = var14;
                        var1.afkTimeout = var13;
                        var1.systemChannelId = var12;
                        var1.systemChannelFlags = var11;
                        var1.safetyAlertsChannelId = var10;
                        var1.defaultMessageNotifications = var9;
                        var1.splash = var8;
                        var1.banner = var7;
                        var1.description = var6;
                        var1.features = var5;
                        var1 = var2.bind(var3)(var4, var1);
                        return var0;
                    };
                    var0.handleOverviewSaveChanges = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.updateNavigator;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun114830: for (var _fun114830_ip = 0;;) switch (_fun114830_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = var3.props;
                    var0 = var0.errors;
                    var2 = var3.updateNavigator;
                    var2 = var2.bind(var3)(var1);
                    var1 = var1.errors;
                    var2 = var1.message;
                    var1 = var0.message;
                    var1 = var2 !== var1;
                    if (!var1) {
                        _fun114830_ip = 62;
                        continue _fun114830
                    }
                case 51:
                    var3 = var0.message;
                    var2 = null;
                    var1 = var2 != var3;
                case 62:
                    if (!var1) {
                        _fun114830_ip = 106;
                        continue _fun114830
                    }
                case 65:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.presentError;
                    var0 = var0.message;
                    var0 = var1.bind(var2)(var0);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigator';
        var4.key = var6;
        var6 = function arg0() {
            _fun114831: for (var _fun114831_ip = 0;;) switch (_fun114831_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var2 = var0.navigation;
                    var6 = var0.submitting;
                    var5 = var0.hasChanges;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun114831_ip = 54;
                        continue _fun114831
                    }
                case 44:
                    var3 = var1.submitting;
                    var0 = var6 === var3;
                case 54:
                    if (!var0) {
                        _fun114831_ip = 67;
                        continue _fun114831
                    }
                case 57:
                    var1 = var1.hasChanges;
                    var0 = var5 === var1;
                case 67:
                    if (var0) {
                        _fun114831_ip = 196;
                        continue _fun114831
                    }
                case 73:
                    var1 = var2.setOptions;
                    var0 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 20;
                    var8 = var11[var7];
                    var3 = undefined;
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7["/dp6yY"];
                    var7 = var8.bind(var9)(var7);
                    var0.title = var7;
                    var7 = undefined;
                    if (!var6) {
                        _fun114831_ip = 157;
                        continue _fun114831
                    }
                case 150:
                    var7 = function() { // Environment: var4
                        var0 = null;
                        return var0;
                    };
                case 157:
                    var0.headerLeft = var7;
                    if (var6) {
                        _fun114831_ip = 179;
                        continue _fun114831
                    }
                case 165:
                    var3 = undefined;
                    if (!var5) {
                        _fun114831_ip = 177;
                        continue _fun114831
                    }
                case 170:
                    var3 = function() { // Environment: var4
                        var3 = _closure1_slot27;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 28;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.handleOverviewSaveChanges;
                        var0.onPress = var4;
                        var4 = 20;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["R3BPH+"];
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 177:
                    _fun114831_ip = 186;
                    continue _fun114831;
                case 179:
                    var3 = function() { // Environment: var4
                        var3 = _closure1_slot27;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 27;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.HeaderSubmittingIndicator;
                        var0 = {};
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 186:
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                case 196:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.cancelChanges;
            var1 = this;
            var1 = var1.props;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            _fun114836: for (var _fun114836_ip = 0;;) switch (_fun114836_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var4 = var0.errors;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = undefined;
                    if (var2) {
                        _fun114836_ip = 47;
                        continue _fun114836
                    }
                case 25:
                    var2 = arg0;
                    var2 = var4[var2];
                    var1 = var1 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun114836_ip = 47;
                        continue _fun114836
                    }
                case 41:
                    var1 = 0;
                    var0 = var2[var1];
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleSystemChannelFlagsChange';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var0 = var0.props;
            var2 = var0.guild;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 29;
            var4 = var3[var0];
            var0 = undefined;
            var7 = var5.bind(var0)(var4);
            var6 = var7.setFlag;
            var5 = var2.systemChannelFlags;
            var4 = arg0;
            var2 = arg1;
            var4 = var6.bind(var7)(var5, var4, var2);
            var2 = _closure1_slot1;
            var1 = 21;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.updateGuild;
            var1 = {};
            var1.systemChannelFlags = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleDefaultNotificationsChange';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.updateGuild;
            var1 = {};
            var4 = arg0;
            var1.defaultMessageNotifications = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'renderGuildName';
        var4.key = var6;
        var6 = function() {
            var7 = this;
            var0 = var7.props;
            var11 = var0.guild;
            var8 = var0.canManage;
            var3 = _closure1_slot27;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 30;
            var0 = var10[var4];
            var2 = undefined;
            var0 = var9.bind(var2)(var0);
            var1 = var0.FormSection;
            var0 = {};
            var5 = _closure1_slot26;
            var5 = var5.ANDROID_NO_BORDER;
            var0.titleStyleType = var5;
            var6 = 20;
            var5 = var10[var6];
            var5 = var9.bind(var2)(var5);
            var13 = var5.intl;
            var12 = var13.string;
            var5 = var10[var6];
            var5 = var9.bind(var2)(var5);
            var5 = var5.t;
            var5 = var5.dBih7e;
            var5 = var12.bind(var13)(var5);
            var0.title = var5;
            var12 = var7.getError;
            var5 = 'name';
            var5 = var12.bind(var7)(var5);
            var0.error = var5;
            var4 = var10[var4];
            var4 = var9.bind(var2)(var4);
            var5 = var4.FormInput;
            var4 = {};
            var11 = var11.name;
            var4.value = var11;
            var8 = !var8;
            var4.disabled = var8;
            var7 = var7.handleNameChange;
            var4.onChange = var7;
            var7 = false;
            var4.showTopContainer = var7;
            var7 = 31;
            var7 = var10[var7];
            var7 = var9.bind(var2)(var7);
            var7 = var7.ClearButtonVisibility;
            var7 = var7.WITH_CONTENT;
            var4.clearButtonVisibility = var7;
            var7 = var10[var6];
            var7 = var9.bind(var2)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var2)(var6);
            var6 = var6.t;
            var6 = var6.R04ENe;
            var6 = var7.bind(var8)(var6);
            var4.clearButtonAccessibilityLabel = var6;
            var4 = var3.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'renderAFKSettings';
        var4.key = var6;
        var6 = function() {
            _fun114840: for (var _fun114840_ip = 0;;) switch (_fun114840_ip) {
                case 0:
                    var8 = this;
                    var1 = var8.props;
                    var11 = var1.guild;
                    var _closure3_slot0 = var11;
                    var10 = var1.canManage;
                    var5 = var1.afkChannel;
                    var14 = null;
                    if (!(var14 == var5)) {
                        _fun114840_ip = 99;
                        continue _fun114840
                    }
                case 37:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 20;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.wGiHkK;
                    var17 = var2.bind(var3)(var1);
                    _fun114840_ip = 145;
                    continue _fun114840;
                case 99:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.computeChannelName;
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot15;
                    var17 = var3.bind(var4)(var5, var2, var1);
                case 145:
                    var1 = var11.afkChannelId;
                    var2 = var14 != var1;
                    var1 = null;
                    if (!var2) {
                        _fun114840_ip = 184;
                        continue _fun114840
                    }
                case 160:
                    var3 = _closure1_slot31;
                    var2 = var3.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.value;
                        var0 = _closure3_slot0;
                        var0 = var0.afkTimeout;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var0);
                case 184:
                    if (!(var14 == var1)) {
                        _fun114840_ip = 213;
                        continue _fun114840
                    }
                case 188:
                    var2 = _closure1_slot31;
                    var0 = 1;
                    var2 = var2[var0];
                    var0 = var2.label;
                    var12 = var0.bind(var2)();
                    _fun114840_ip = 222;
                    continue _fun114840;
                case 213:
                    var0 = var1.label;
                    var12 = var0.bind(var1)();
                case 222:
                    var3 = _closure1_slot28;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var13 = 30;
                    var0 = var19[var13];
                    var2 = undefined;
                    var0 = var18.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var15 = 20;
                    var4 = var19[var15];
                    var4 = var18.bind(var2)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var4 = var19[var15];
                    var4 = var18.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.qyGmGt;
                    var4 = var5.bind(var6)(var4);
                    var0.title = var4;
                    var7 = _closure1_slot27;
                    var4 = var19[var13];
                    var4 = var18.bind(var2)(var4);
                    var5 = var4.FormHint;
                    var4 = {};
                    var6 = var19[var15];
                    var6 = var18.bind(var2)(var6);
                    var20 = var6.intl;
                    var16 = var20.string;
                    var6 = var19[var15];
                    var6 = var18.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.ffEOKP;
                    var6 = var16.bind(var20)(var6);
                    var4.children = var6;
                    var4 = var7.bind(var2)(var5, var4);
                    var0.hint = var4;
                    var4 = var19[var13];
                    var4 = var18.bind(var2)(var4);
                    var5 = var4.FormRow;
                    var4 = {};
                    var6 = var19[var15];
                    var6 = var18.bind(var2)(var6);
                    var20 = var6.intl;
                    var16 = var20.string;
                    var6 = var19[var15];
                    var6 = var18.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.KuYcnU;
                    var6 = var16.bind(var20)(var6);
                    var4.label = var6;
                    var6 = !var10;
                    var4.disabled = var6;
                    var6 = var19[var13];
                    var6 = var18.bind(var2)(var6);
                    var6 = var6.FormRow;
                    var16 = var6.Arrow;
                    var6 = {};
                    var6.label = var17;
                    var6 = var7.bind(var2)(var16, var6);
                    var4.trailing = var6;
                    var6 = var8.handleAfkChannelChange;
                    var4.onPress = var6;
                    var5 = var7.bind(var2)(var5, var4);
                    var4 = new Array(3);
                    var4[0] = var5;
                    var5 = var19[var13];
                    var5 = var18.bind(var2)(var5);
                    var6 = var5.FormDivider;
                    var5 = {};
                    var5 = var7.bind(var2)(var6, var5);
                    var4[1] = var5;
                    var5 = var19[var13];
                    var5 = var18.bind(var2)(var5);
                    var6 = var5.FormRow;
                    var5 = {};
                    var16 = var19[var15];
                    var16 = var18.bind(var2)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var2)(var15);
                    var15 = var15.t;
                    var15 = var15.brhYaR;
                    var15 = var16.bind(var17)(var15);
                    var5.label = var15;
                    var10 = !var10;
                    if (var10) {
                        _fun114840_ip = 638;
                        continue _fun114840
                    }
                case 628:
                    var11 = var11.afkChannelId;
                    var10 = var14 == var11;
                case 638:
                    var5.disabled = var10;
                    var11 = _closure1_slot27;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.FormRow;
                    var10 = var9.Arrow;
                    var9 = {};
                    var9.label = var12;
                    var9 = var11.bind(var2)(var10, var9);
                    var5.trailing = var9;
                    var8 = var8.handleAFKTimeoutChange;
                    var5.onPress = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'renderSystemMessageSettings';
        var4.key = var6;
        var6 = function() {
            _fun114842: for (var _fun114842_ip = 0;;) switch (_fun114842_ip) {
                case 0:
                    var14 = this;
                    var0 = var14.props;
                    var16 = var0.guild;
                    var19 = var0.canManage;
                    var4 = var0.systemChannel;
                    var5 = var0.enableDeadchatPrompt;
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun114842_ip = 99;
                        continue _fun114842
                    }
                case 37:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 20;
                    var1 = var7[var0];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.ibUhoa;
                    var17 = var1.bind(var2)(var0);
                    _fun114842_ip = 145;
                    continue _fun114842;
                case 99:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.computeChannelName;
                    var1 = _closure1_slot16;
                    var0 = _closure1_slot15;
                    var17 = var2.bind(var3)(var4, var1, var0);
                case 145:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 33;
                    var0 = var2[var0];
                    var3 = undefined;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings;
                    var0 = var0.bind(var1)(var16);
                    var7 = var0;
                    if (var0) {
                        _fun114842_ip = 235;
                        continue _fun114842
                    }
                case 187:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var6 = var2.bind(var3)(var1);
                    var4 = var6.hasFlag;
                    var2 = var16.systemChannelFlags;
                    var1 = _closure1_slot23;
                    var1 = var1.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS;
                    var7 = var4.bind(var6)(var2, var1);
                case 235:
                    var6 = var0;
                    if (var6) {
                        _fun114842_ip = 289;
                        continue _fun114842
                    }
                case 241:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 29;
                    var0 = var2[var0];
                    var4 = var1.bind(var3)(var0);
                    var2 = var4.hasFlag;
                    var1 = var16.systemChannelFlags;
                    var0 = _closure1_slot23;
                    var0 = var0.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
                    var6 = var2.bind(var4)(var1, var0);
                case 289:
                    var2 = _closure1_slot28;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 30;
                    var0 = var15[var10];
                    var0 = var18.bind(var3)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var20 = 20;
                    var4 = var15[var20];
                    var4 = var18.bind(var3)(var4);
                    var9 = var4.intl;
                    var8 = var9.string;
                    var4 = var15[var20];
                    var4 = var18.bind(var3)(var4);
                    var4 = var4.t;
                    var4 = var4.DP39VH;
                    var4 = var8.bind(var9)(var4);
                    var0.title = var4;
                    var11 = _closure1_slot27;
                    var4 = var15[var10];
                    var4 = var18.bind(var3)(var4);
                    var8 = var4.FormHint;
                    var4 = {};
                    var9 = var15[var20];
                    var9 = var18.bind(var3)(var9);
                    var21 = var9.intl;
                    var12 = var21.string;
                    var9 = var15[var20];
                    var9 = var18.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.BT9zR3;
                    var9 = var12.bind(var21)(var9);
                    var4.children = var9;
                    var4 = var11.bind(var3)(var8, var4);
                    var0.hint = var4;
                    var4 = var15[var10];
                    var4 = var18.bind(var3)(var4);
                    var8 = var4.FormRow;
                    var4 = {};
                    var9 = var15[var20];
                    var9 = var18.bind(var3)(var9);
                    var21 = var9.intl;
                    var12 = var21.string;
                    var9 = var15[var20];
                    var9 = var18.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.GK18KJ;
                    var9 = var12.bind(var21)(var9);
                    var4.label = var9;
                    var9 = !var19;
                    var4.disabled = var9;
                    var9 = var15[var10];
                    var9 = var18.bind(var3)(var9);
                    var9 = var9.FormRow;
                    var12 = var9.Arrow;
                    var9 = {};
                    var9.label = var17;
                    var9 = var11.bind(var3)(var12, var9);
                    var4.trailing = var9;
                    var9 = var14.handleSystemChannelChange;
                    var4.onPress = var9;
                    var8 = var11.bind(var3)(var8, var4);
                    var4 = new Array(12);
                    var4[0] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormDivider;
                    var8 = {};
                    var8 = var11.bind(var3)(var9, var8);
                    var4[1] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormSwitchRow;
                    var8 = {};
                    var12 = var15[var20];
                    var12 = var18.bind(var3)(var12);
                    var21 = var12.intl;
                    var17 = var21.string;
                    var12 = var15[var20];
                    var12 = var18.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12["+f0bXQ"];
                    var12 = var17.bind(var21)(var12);
                    var8.label = var12;
                    var12 = !var19;
                    var8.disabled = var12;
                    var17 = 29;
                    var12 = var15[var17];
                    var24 = var18.bind(var3)(var12);
                    var23 = var24.hasFlag;
                    var22 = var16.systemChannelFlags;
                    var12 = _closure1_slot23;
                    var21 = var12.SUPPRESS_JOIN_NOTIFICATIONS;
                    var21 = var23.bind(var24)(var22, var21);
                    var21 = !var21;
                    var8.value = var21;
                    var21 = var14.handleSystemJoinMessages;
                    var8.onValueChange = var21;
                    var8 = var11.bind(var3)(var9, var8);
                    var4[2] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormDivider;
                    var8 = {};
                    var8 = var11.bind(var3)(var9, var8);
                    var4[3] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormSwitchRow;
                    var8 = {};
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var21 = var21.t;
                    var21 = var21["72k7jf"];
                    var21 = var22.bind(var23)(var21);
                    var8.label = var21;
                    var21 = !var19;
                    var8.disabled = var21;
                    var21 = var15[var17];
                    var24 = var18.bind(var3)(var21);
                    var23 = var24.hasFlag;
                    var22 = var16.systemChannelFlags;
                    var21 = var12.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                    var21 = var23.bind(var24)(var22, var21);
                    var21 = !var21;
                    var8.value = var21;
                    var21 = var14.handleSystemJoinMessageReplies;
                    var8.onValueChange = var21;
                    var8 = var11.bind(var3)(var9, var8);
                    var4[4] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormDivider;
                    var8 = {};
                    var8 = var11.bind(var3)(var9, var8);
                    var4[5] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormSwitchRow;
                    var8 = {};
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var21 = var21.t;
                    var21 = var21["2L8NCN"];
                    var21 = var22.bind(var23)(var21);
                    var8.label = var21;
                    var21 = !var19;
                    var8.disabled = var21;
                    var21 = var15[var17];
                    var24 = var18.bind(var3)(var21);
                    var23 = var24.hasFlag;
                    var22 = var16.systemChannelFlags;
                    var21 = var12.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                    var21 = var23.bind(var24)(var22, var21);
                    var21 = !var21;
                    var8.value = var21;
                    var21 = var14.handleSystemPremiumSubscribe;
                    var8.onValueChange = var21;
                    var8 = var11.bind(var3)(var9, var8);
                    var4[6] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormDivider;
                    var8 = {};
                    var8 = var11.bind(var3)(var9, var8);
                    var4[7] = var8;
                    var8 = var15[var10];
                    var8 = var18.bind(var3)(var8);
                    var9 = var8.FormSwitchRow;
                    var8 = {};
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var21 = var21.t;
                    var21 = var21["NvnW+V"];
                    var21 = var22.bind(var23)(var21);
                    var8.label = var21;
                    var21 = !var19;
                    var8.disabled = var21;
                    var15 = var15[var17];
                    var21 = var18.bind(var3)(var15);
                    var18 = var21.hasFlag;
                    var15 = var16.systemChannelFlags;
                    var12 = var12.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                    var12 = var18.bind(var21)(var15, var12);
                    var12 = !var12;
                    var8.value = var12;
                    var12 = var14.handleSystemReminderNotifications;
                    var8.onValueChange = var12;
                    var8 = var11.bind(var3)(var9, var8);
                    var4[8] = var8;
                    if (!var7) {
                        _fun114842_ip = 1453;
                        continue _fun114842
                    }
                case 1251:
                    var11 = _closure1_slot28;
                    var9 = _closure1_slot29;
                    var8 = {};
                    var21 = _closure1_slot27;
                    var23 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var12 = var22[var10];
                    var12 = var23.bind(var3)(var12);
                    var15 = var12.FormDivider;
                    var12 = {};
                    var15 = var21.bind(var3)(var15, var12);
                    var12 = new Array(2);
                    var12[0] = var15;
                    var15 = var22[var10];
                    var15 = var23.bind(var3)(var15);
                    var18 = var15.FormSwitchRow;
                    var15 = {};
                    var24 = var22[var20];
                    var24 = var23.bind(var3)(var24);
                    var26 = var24.intl;
                    var25 = var26.string;
                    var24 = var22[var20];
                    var24 = var23.bind(var3)(var24);
                    var24 = var24.t;
                    var24 = var24["54n19R"];
                    var24 = var25.bind(var26)(var24);
                    var15.label = var24;
                    var24 = !var19;
                    var15.disabled = var24;
                    var22 = var22[var17];
                    var25 = var23.bind(var3)(var22);
                    var24 = var25.hasFlag;
                    var23 = var16.systemChannelFlags;
                    var22 = _closure1_slot23;
                    var22 = var22.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS;
                    var22 = var24.bind(var25)(var23, var22);
                    var22 = !var22;
                    var15.value = var22;
                    var22 = var14.handleSystemGuildRoleSubscriptionPurchaseMessages;
                    var15.onValueChange = var22;
                    var15 = var21.bind(var3)(var18, var15);
                    var12[1] = var15;
                    var8.children = var12;
                    var7 = var11.bind(var3)(var9, var8);
                case 1453:
                    var4[9] = var7;
                    if (!var6) {
                        _fun114842_ip = 1665;
                        continue _fun114842
                    }
                case 1463:
                    var9 = _closure1_slot28;
                    var8 = _closure1_slot29;
                    var7 = {};
                    var18 = _closure1_slot27;
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var11 = var21[var10];
                    var11 = var22.bind(var3)(var11);
                    var12 = var11.FormDivider;
                    var11 = {};
                    var12 = var18.bind(var3)(var12, var11);
                    var11 = new Array(2);
                    var11[0] = var12;
                    var12 = var21[var10];
                    var12 = var22.bind(var3)(var12);
                    var15 = var12.FormSwitchRow;
                    var12 = {};
                    var23 = var21[var20];
                    var23 = var22.bind(var3)(var23);
                    var25 = var23.intl;
                    var24 = var25.string;
                    var23 = var21[var20];
                    var23 = var22.bind(var3)(var23);
                    var23 = var23.t;
                    var23 = var23["IhF5d+"];
                    var23 = var24.bind(var25)(var23);
                    var12.label = var23;
                    var23 = !var19;
                    var12.disabled = var23;
                    var21 = var21[var17];
                    var24 = var22.bind(var3)(var21);
                    var23 = var24.hasFlag;
                    var22 = var16.systemChannelFlags;
                    var21 = _closure1_slot23;
                    var21 = var21.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
                    var21 = var23.bind(var24)(var22, var21);
                    var21 = !var21;
                    var12.value = var21;
                    var21 = var14.handleSystemGuildRoleSubscriptionPurchaseMessageReplies;
                    var12.onValueChange = var21;
                    var12 = var18.bind(var3)(var15, var12);
                    var11[1] = var12;
                    var7.children = var11;
                    var6 = var9.bind(var3)(var8, var7);
                case 1665:
                    var4[10] = var6;
                    if (!var5) {
                        _fun114842_ip = 1906;
                        continue _fun114842
                    }
                case 1675:
                    var8 = _closure1_slot28;
                    var7 = _closure1_slot29;
                    var6 = {};
                    var12 = _closure1_slot27;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = var15[var10];
                    var9 = var18.bind(var3)(var9);
                    var11 = var9.FormDivider;
                    var9 = {};
                    var11 = var12.bind(var3)(var11, var9);
                    var9 = new Array(2);
                    var9[0] = var11;
                    var10 = var15[var10];
                    var10 = var18.bind(var3)(var10);
                    var11 = var10.FormSwitchRow;
                    var10 = {};
                    var21 = var15[var20];
                    var21 = var18.bind(var3)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var15[var20];
                    var20 = var18.bind(var3)(var20);
                    var20 = var20.t;
                    var20 = var20["3yOX1/"];
                    var20 = var21.bind(var22)(var20);
                    var10.label = var20;
                    var19 = !var19;
                    var10.disabled = var19;
                    var17 = var15[var17];
                    var19 = var18.bind(var3)(var17);
                    var18 = var19.hasFlag;
                    var17 = var16.systemChannelFlags;
                    var16 = _closure1_slot23;
                    var16 = var16.SUPPRESS_CHANNEL_PROMPT_DEADCHAT;
                    var16 = var18.bind(var19)(var17, var16);
                    var16 = !var16;
                    var10.value = var16;
                    var14 = var14.handleSystemGuildChannelPromptDeadchatMessages;
                    var10.onValueChange = var14;
                    var14 = _closure1_slot1;
                    var13 = 34;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = {};
                    var13 = var12.bind(var3)(var14, var13);
                    var10.trailing = var13;
                    var10 = var12.bind(var3)(var11, var10);
                    var9[1] = var10;
                    var6.children = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 1906:
                    var4[11] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'renderDefaultNotificationSettings';
        var4.key = var6;
        var6 = function() {
            _fun114843: for (var _fun114843_ip = 0;;) switch (_fun114843_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var7 = var0.guild;
                    var10 = var0.canManage;
                    var14 = var0.guildMemberCount;
                    var3 = _closure1_slot27;
                    var16 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 30;
                    var0 = var11[var4];
                    var2 = undefined;
                    var0 = var16.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var13 = 20;
                    var5 = var11[var13];
                    var5 = var16.bind(var2)(var5);
                    var12 = var5.intl;
                    var9 = var12.string;
                    var5 = var11[var13];
                    var5 = var16.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5["23TVhl"];
                    var5 = var9.bind(var12)(var5);
                    var0.title = var5;
                    var4 = var11[var4];
                    var4 = var16.bind(var2)(var4);
                    var5 = var4.FormHint;
                    var4 = {};
                    var9 = var11[var13];
                    var9 = var16.bind(var2)(var9);
                    var15 = var9.intl;
                    var12 = var15.string;
                    var9 = var11[var13];
                    var9 = var16.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.PA2MZv;
                    var9 = var12.bind(var15)(var9);
                    var4.children = var9;
                    var4 = var3.bind(var2)(var5, var4);
                    var0.hint = var4;
                    var5 = _closure1_slot1;
                    var9 = 35;
                    var4 = var11[var9];
                    var5 = var5.bind(var2)(var4);
                    var4 = {};
                    var7 = var7.defaultMessageNotifications;
                    var4.value = var7;
                    var7 = {};
                    var12 = _closure1_slot18;
                    var12 = var12.ALL_MESSAGES;
                    var7.value = var12;
                    var12 = var11[var13];
                    var12 = var16.bind(var2)(var12);
                    var15 = var12.intl;
                    var12 = var15.string;
                    var11 = var11[var13];
                    var11 = var16.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11["n/bTaY"];
                    var11 = var12.bind(var15)(var11);
                    var7.name = var11;
                    var11 = null;
                    var12 = var11 != var14;
                    var11 = undefined;
                    if (!var12) {
                        _fun114843_ip = 369;
                        continue _fun114843
                    }
                case 302:
                    var12 = _closure1_slot24;
                    var12 = var14 >= var12;
                    var11 = undefined;
                    if (!var12) {
                        _fun114843_ip = 369;
                        continue _fun114843
                    }
                case 315:
                    var16 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var14 = var12[var13];
                    var14 = var16.bind(var2)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var12 = var12[var13];
                    var12 = var16.bind(var2)(var12);
                    var12 = var12.t;
                    var12 = var12["L+P4t2"];
                    var11 = var14.bind(var15)(var12);
                case 369:
                    var7.desc = var11;
                    var11 = new Array(2);
                    var11[0] = var7;
                    var12 = {};
                    var7 = _closure1_slot18;
                    var7 = var7.ONLY_MENTIONS;
                    var12.value = var7;
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var15 = var7[var13];
                    var15 = var14.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.format;
                    var13 = var7[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.t;
                    var14 = var13.L2hmYy;
                    var13 = {};
                    var13 = var15.bind(var16)(var14, var13);
                    var12.name = var13;
                    var11[1] = var12;
                    var4.options = var11;
                    var10 = !var10;
                    var4.disabled = var10;
                    var8 = _closure1_slot1;
                    var7 = var7[var9];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.Sizes;
                    var7 = var7.LARGE;
                    var4.size = var7;
                    var6 = function arg0() {
                        var0 = arg0;
                        var2 = var0.value;
                        var1 = _closure3_slot0;
                        var0 = var1.handleDefaultNotificationsChange;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var4.onChange = var6;
                    var4 = var3.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'renderSplash';
        var4.key = var6;
        var6 = function() {
            _fun114845: for (var _fun114845_ip = 0;;) switch (_fun114845_ip) {
                case 0:
                    var12 = this;
                    var1 = _closure1_slot30;
                    var0 = var12.context;
                    var4 = undefined;
                    var11 = var1.bind(var4)(var0);
                    var0 = var12.props;
                    var14 = var0.guild;
                    var17 = var0.canManage;
                    var2 = var14.features;
                    var1 = var2.has;
                    var0 = _closure1_slot21;
                    var0 = var0.INVITE_SPLASH;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!var1) {
                        _fun114845_ip = 512;
                        continue _fun114845
                    }
                case 72:
                    var3 = _closure1_slot28;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var5 = var11.redesignHorizontalPadding;
                    var1.style = var5;
                    var8 = _closure1_slot27;
                    var10 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 36;
                    var5 = var16[var5];
                    var5 = var10.bind(var4)(var5);
                    var6 = var5.TableRowGroupTitle;
                    var5 = {};
                    var9 = 20;
                    var7 = var16[var9];
                    var7 = var10.bind(var4)(var7);
                    var18 = var7.intl;
                    var15 = var18.string;
                    var7 = var16[var9];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.tzGY0q;
                    var7 = var15.bind(var18)(var7);
                    var5.title = var7;
                    var6 = var8.bind(var4)(var6, var5);
                    var5 = new Array(4);
                    var5[0] = var6;
                    var15 = _closure1_slot1;
                    var6 = 37;
                    var6 = var16[var6];
                    var7 = var15.bind(var4)(var6);
                    var6 = {};
                    var17 = !var17;
                    var6.disabled = var17;
                    var6.guild = var14;
                    var14 = var14.splash;
                    var6.rawSource = var14;
                    var14 = function arg0, arg1() {
                        var3 = arg0;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 38;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getGuildSplashSource;
                        var0 = {};
                        var4 = var3.id;
                        var0.id = var4;
                        var3 = var3.splash;
                        var0.splash = var3;
                        var3 = arg1;
                        var0.size = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.getSource = var14;
                    var12 = var12.handleSplashChange;
                    var6.onChooseAsset = var12;
                    var12 = {
                        'width': 1920,
                        'height': 1080
                    };
                    var6.size = var12;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var6 = 30;
                    var7 = var16[var6];
                    var7 = var10.bind(var4)(var7);
                    var12 = var7.FormHint;
                    var7 = {};
                    var11 = var11.hint;
                    var7.style = var11;
                    var11 = true;
                    var7.inset = var11;
                    var14 = var16[var9];
                    var14 = var10.bind(var4)(var14);
                    var18 = var14.intl;
                    var17 = var18.string;
                    var14 = var16[var9];
                    var14 = var10.bind(var4)(var14);
                    var14 = var14.t;
                    var14 = var14.FEFkkG;
                    var14 = var17.bind(var18)(var14);
                    var7.children = var14;
                    var7 = var8.bind(var4)(var12, var7);
                    var5[2] = var7;
                    var6 = var16[var6];
                    var6 = var10.bind(var4)(var6);
                    var7 = var6.FormHint;
                    var6 = {};
                    var6.inset = var11;
                    var11 = var16[var9];
                    var11 = var10.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var16[var9];
                    var9 = var10.bind(var4)(var9);
                    var9 = var9.t;
                    var10 = var9.ZYA9PV;
                    var9 = {};
                    var14 = 39;
                    var14 = var16[var14];
                    var15 = var15.bind(var4)(var14);
                    var14 = var15.getArticleURL;
                    var13 = _closure1_slot22;
                    var13 = var13.GUILD_INVITE_SPLASH;
                    var13 = var14.bind(var15)(var13);
                    var9.articleURL = var13;
                    var9 = var11.bind(var12)(var10, var9);
                    var6.children = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[3] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 512:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'renderSummaries';
        var4.key = var6;
        var6 = function() {
            _fun114847: for (var _fun114847_ip = 0;;) switch (_fun114847_ip) {
                case 0:
                    var6 = this;
                    var0 = var6.props;
                    var11 = var0.guild;
                    var9 = var0.canManage;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 40;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.canGuildUseConversationSummaries;
                    var0 = false;
                    var0 = var1.bind(var2)(var11, var0);
                    if (var0) {
                        _fun114847_ip = 65;
                        continue _fun114847
                    }
                case 61:
                    var0 = null;
                    return var0;
                case 65:
                    var15 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var12 = 20;
                    var0 = var8[var12];
                    var0 = var15.bind(var3)(var0);
                    var4 = var0.intl;
                    var2 = var4.format;
                    var0 = var8[var12];
                    var0 = var15.bind(var3)(var0);
                    var0 = var0.t;
                    var1 = var0["c6Cy/h"];
                    var0 = {};
                    var7 = _closure1_slot1;
                    var5 = 39;
                    var5 = var8[var5];
                    var14 = var7.bind(var3)(var5);
                    var13 = var14.getArticleURL;
                    var5 = _closure1_slot22;
                    var5 = var5.CONVERSATION_SUMMARIES;
                    var5 = var13.bind(var14)(var5);
                    var0.helpdeskArticle = var5;
                    var14 = var2.bind(var4)(var1, var0);
                    var2 = _closure1_slot27;
                    var4 = 30;
                    var0 = var8[var4];
                    var0 = var15.bind(var3)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var5 = var8[var12];
                    var5 = var15.bind(var3)(var5);
                    var16 = var5.intl;
                    var13 = var16.string;
                    var5 = var8[var12];
                    var5 = var15.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.XPDhcc;
                    var5 = var13.bind(var16)(var5);
                    var0.title = var5;
                    var5 = var8[var4];
                    var5 = var15.bind(var3)(var5);
                    var13 = var5.FormHint;
                    var5 = {};
                    var5.children = var14;
                    var5 = var2.bind(var3)(var13, var5);
                    var0.hint = var5;
                    var4 = var8[var4];
                    var4 = var15.bind(var3)(var4);
                    var5 = var4.FormSwitchRow;
                    var4 = {};
                    var13 = var8[var12];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var8[var12];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.vmEDQs;
                    var12 = var13.bind(var14)(var12);
                    var4.label = var12;
                    var12 = var11.features;
                    var11 = var12.has;
                    var10 = _closure1_slot21;
                    var10 = var10.SUMMARIES_ENABLED_BY_USER;
                    var10 = var11.bind(var12)(var10);
                    var4.value = var10;
                    var9 = !var9;
                    var4.disabled = var9;
                    var6 = var6.handleSummariesToggle;
                    var4.onValueChange = var6;
                    var6 = 34;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var6 = var2.bind(var3)(var7, var6);
                    var4.trailing = var6;
                    var4 = var2.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'renderDescription';
        var4.key = var6;
        var6 = function() {
            _fun114848: for (var _fun114848_ip = 0;;) switch (_fun114848_ip) {
                case 0:
                    var9 = this;
                    var0 = var9.props;
                    var13 = var0.guild;
                    var12 = var0.canManage;
                    var3 = var13.features;
                    var2 = var3.has;
                    var0 = _closure1_slot21;
                    var0 = var0.VERIFIED;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun114848_ip = 85;
                        continue _fun114848
                    }
                case 51:
                    var3 = var13.features;
                    var2 = var3.has;
                    var0 = _closure1_slot21;
                    var0 = var0.DISCOVERABLE;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    if (!var2) {
                        _fun114848_ip = 408;
                        continue _fun114848
                    }
                case 85:
                    var4 = _closure1_slot27;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 30;
                    var1 = var11[var5];
                    var3 = undefined;
                    var1 = var10.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var7 = 20;
                    var6 = var11[var7];
                    var6 = var10.bind(var3)(var6);
                    var14 = var6.intl;
                    var8 = var14.string;
                    var6 = var11[var7];
                    var6 = var10.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6["RSfm+i"];
                    var6 = var8.bind(var14)(var6);
                    var1.title = var6;
                    var6 = var11[var5];
                    var6 = var10.bind(var3)(var6);
                    var8 = var6.FormHint;
                    var6 = {};
                    var14 = var11[var7];
                    var14 = var10.bind(var3)(var14);
                    var16 = var14.intl;
                    var15 = var16.string;
                    var14 = var11[var7];
                    var14 = var10.bind(var3)(var14);
                    var14 = var14.t;
                    var14 = var14["/B6PRw"];
                    var14 = var15.bind(var16)(var14);
                    var6.children = var14;
                    var6 = var4.bind(var3)(var8, var6);
                    var1.hint = var6;
                    var5 = var11[var5];
                    var5 = var10.bind(var3)(var5);
                    var6 = var5.FormInput;
                    var5 = {
                        'showCharactersRemaining': true,
                        'maxLength': null,
                        'showTopContainer': false,
                        'value': null,
                        'multiline': true,
                        'disabled': null,
                        'numberOfLines': 4
                    };
                    var8 = true;
                    var14 = 41;
                    var14 = var11[var14];
                    var14 = var10.bind(var3)(var14);
                    var14 = var14.MAX_DESCRIPTION_LENGTH;
                    var5.maxLength = var14;
                    var13 = var13.description;
                    var5.value = var13;
                    var12 = !var12;
                    var5.disabled = var12;
                    var9 = var9.handleDescriptionChange;
                    var5.onChange = var9;
                    var5.autoCorrect = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.Nvfowl;
                    var7 = var8.bind(var9)(var7);
                    var5.placeholder = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 408:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'renderBanner';
        var4.key = var6;
        var6 = function() {
            _fun114849: for (var _fun114849_ip = 0;;) switch (_fun114849_ip) {
                case 0:
                    var11 = this;
                    var1 = _closure1_slot30;
                    var0 = var11.context;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var0 = var11.props;
                    var13 = var0.guild;
                    var16 = var0.canManage;
                    var2 = var13.features;
                    var1 = var2.has;
                    var0 = _closure1_slot21;
                    var0 = var0.BANNER;
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun114849_ip = 71;
                        continue _fun114849
                    }
                case 67:
                    var0 = null;
                    return var0;
                case 71:
                    var2 = _closure1_slot28;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var4 = var10.redesignHorizontalPadding;
                    var0.style = var4;
                    var7 = _closure1_slot27;
                    var9 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 36;
                    var4 = var15[var4];
                    var4 = var9.bind(var3)(var4);
                    var5 = var4.TableRowGroupTitle;
                    var4 = {};
                    var8 = 20;
                    var6 = var15[var8];
                    var6 = var9.bind(var3)(var6);
                    var17 = var6.intl;
                    var14 = var17.string;
                    var6 = var15[var8];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6["0r0AzF"];
                    var6 = var14.bind(var17)(var6);
                    var4.title = var6;
                    var5 = var7.bind(var3)(var5, var4);
                    var4 = new Array(4);
                    var4[0] = var5;
                    var14 = _closure1_slot1;
                    var5 = 37;
                    var5 = var15[var5];
                    var6 = var14.bind(var3)(var5);
                    var5 = {};
                    var16 = !var16;
                    var5.disabled = var16;
                    var5.guild = var13;
                    var13 = var13.banner;
                    var5.rawSource = var13;
                    var13 = function arg0() {
                        var3 = arg0;
                        var4 = var3.features;
                        var2 = var4.has;
                        var1 = _closure1_slot21;
                        var1 = var1.ANIMATED_BANNER;
                        var2 = var2.bind(var4)(var1);
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 38;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var0 = var1.getGuildBannerSource;
                        var0 = var0.bind(var1)(var3, var2);
                        return var0;
                    };
                    var5.getSource = var13;
                    var11 = var11.handleBannerChange;
                    var5.onChooseAsset = var11;
                    var11 = {
                        'width': 960,
                        'height': 540
                    };
                    var5.size = var11;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[1] = var5;
                    var5 = 30;
                    var6 = var15[var5];
                    var6 = var9.bind(var3)(var6);
                    var11 = var6.FormHint;
                    var6 = {};
                    var10 = var10.hint;
                    var6.style = var10;
                    var10 = true;
                    var6.inset = var10;
                    var13 = var15[var8];
                    var13 = var9.bind(var3)(var13);
                    var17 = var13.intl;
                    var16 = var17.string;
                    var13 = var15[var8];
                    var13 = var9.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.UfqmIb;
                    var13 = var16.bind(var17)(var13);
                    var6.children = var13;
                    var6 = var7.bind(var3)(var11, var6);
                    var4[2] = var6;
                    var5 = var15[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.FormHint;
                    var5 = {};
                    var5.inset = var10;
                    var10 = var15[var8];
                    var10 = var9.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.format;
                    var8 = var15[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.t;
                    var9 = var8.vBcWUv;
                    var8 = {};
                    var13 = 39;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.getArticleURL;
                    var12 = _closure1_slot22;
                    var12 = var12.GUILD_BANNER_SPLASH;
                    var12 = var13.bind(var14)(var12);
                    var8.articleURL = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[3] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'renderDeleteGuild';
        var4.key = var6;
        var6 = function() {
            _fun114851: for (var _fun114851_ip = 0;;) switch (_fun114851_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.props;
                    var6 = var0.guild;
                    var2 = _closure1_slot16;
                    var0 = var2.getCurrentUser;
                    var5 = var0.bind(var2)();
                    var3 = null;
                    var2 = var3 != var5;
                    var0 = null;
                    if (!var2) {
                        _fun114851_ip = 200;
                        continue _fun114851
                    }
                case 43:
                    var2 = _closure1_slot9;
                    var4 = undefined;
                    var2 = var2.bind(var4)(var6, var5);
                    var0 = null;
                    if (!var2) {
                        _fun114851_ip = 200;
                        continue _fun114851
                    }
                case 63:
                    var3 = _closure1_slot27;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 30;
                    var1 = var12[var1];
                    var1 = var11.bind(var4)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var5 = 42;
                    var5 = var12[var5];
                    var5 = var11.bind(var4)(var5);
                    var6 = var5.TableRow;
                    var5 = {};
                    var8 = 'danger';
                    var5.variant = var8;
                    var8 = 20;
                    var9 = var12[var8];
                    var9 = var11.bind(var4)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.l3hWP6;
                    var8 = var9.bind(var10)(var8);
                    var5.label = var8;
                    var7 = var7.handleDeleteServer;
                    var5.onPress = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 200:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            var11 = this;
            var1 = _closure1_slot30;
            var0 = var11.context;
            var3 = undefined;
            var9 = var1.bind(var3)(var0);
            var2 = _closure1_slot28;
            var1 = _closure1_slot29;
            var0 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 30;
            var4 = var8[var4];
            var4 = var6.bind(var3)(var4);
            var7 = var4.Form;
            var4 = {};
            var9 = var9.overview;
            var4.style = var9;
            var9 = var11.props;
            var9 = var9.contentContainerStyle;
            var4.contentContainerStyle = var9;
            var9 = var11.renderGuildName;
            var10 = var9.bind(var11)();
            var9 = new Array(9);
            var9[0] = var10;
            var10 = var11.renderSummaries;
            var10 = var10.bind(var11)();
            var9[1] = var10;
            var10 = var11.renderAFKSettings;
            var10 = var10.bind(var11)();
            var9[2] = var10;
            var10 = var11.renderSystemMessageSettings;
            var10 = var10.bind(var11)();
            var9[3] = var10;
            var10 = var11.renderDefaultNotificationSettings;
            var10 = var10.bind(var11)();
            var9[4] = var10;
            var10 = var11.renderDescription;
            var10 = var10.bind(var11)();
            var9[5] = var10;
            var10 = var11.renderBanner;
            var10 = var10.bind(var11)();
            var9[6] = var10;
            var10 = var11.renderSplash;
            var10 = var10.bind(var11)();
            var9[7] = var10;
            var10 = var11.renderDeleteGuild;
            var10 = var10.bind(var11)();
            var9[8] = var10;
            var4.children = var9;
            var7 = var2.bind(var3)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var7 = _closure1_slot27;
            var5 = 43;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.NavScrim;
            var5 = {};
            var5 = var7.bind(var3)(var6, var5);
            var4[1] = var5;
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot32 = var6;
    var3 = 44;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 49;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun114853: for (var _fun114853_ip = 0;;) switch (_fun114853_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.contentContainerStyle;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 45;
                var3 = var2[var3];
                var4 = undefined;
                var6 = var1.bind(var4)(var3);
                var3 = var6.useNavigation;
                var17 = var3.bind(var6)();
                var3 = 46;
                var6 = var2[var3];
                var11 = var1.bind(var4)(var6);
                var10 = var11.useStateFromStoresObject;
                var6 = _closure1_slot17;
                var9 = new Array(1);
                var9[0] = var6;
                var7 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot17;
                    var1 = var2.getGuild;
                    var1 = var1.bind(var2)();
                    var0.guild = var1;
                    var1 = var2.isSubmitting;
                    var1 = var1.bind(var2)();
                    var0.submitting = var1;
                    var1 = var2.hasChanges;
                    var1 = var1.bind(var2)();
                    var0.hasChanges = var1;
                    var1 = var2.getErrors;
                    var1 = var1.bind(var2)();
                    var0.errors = var1;
                    return var0;
                };
                var6 = new Array(0);
                var6 = var10.bind(var11)(var9, var7, var6);
                var15 = var6.submitting;
                var14 = var6.hasChanges;
                var9 = var6.errors;
                var16 = var6.guild;
                var _closure2_slot0 = var16;
                var6 = var2[var3];
                var12 = var1.bind(var4)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot14;
                var10 = new Array(1);
                var10[0] = var6;
                var7 = new Array(1);
                var7[0] = var16;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot14;
                    var2 = var3.can;
                    var0 = _closure1_slot20;
                    var1 = var0.MANAGE_GUILD;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var11.bind(var12)(var10, var6, var7);
                var6 = var2[var3];
                var12 = var1.bind(var4)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var6;
                var7 = function() { // Environment: var0
                    _fun114856: for (var _fun114856_ip = 0;;) switch (_fun114856_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun114856_ip = 40;
                                continue _fun114856
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.afkChannelId;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var12 = var11.bind(var12)(var10, var7);
                var7 = var2[var3];
                var11 = var1.bind(var4)(var7);
                var10 = var11.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    _fun114857: for (var _fun114857_ip = 0;;) switch (_fun114857_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun114857_ip = 40;
                                continue _fun114857
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.systemChannelId;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var11 = var10.bind(var11)(var7, var6);
                var3 = var2[var3];
                var7 = var1.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var10 = _closure1_slot13;
                var3 = new Array(1);
                var3[0] = var10;
                var0 = function() { // Environment: var0
                    _fun114858: for (var _fun114858_ip = 0;;) switch (_fun114858_ip) {
                        case 0:
                            var2 = _closure1_slot13;
                            var1 = var2.getMemberCount;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun114858_ip = 40;
                                continue _fun114858
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var3, var0);
                var0 = 47;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var6 = var0.SimpleDeadchatPromptExperiment;
                var3 = var6.useExperiment;
                var2 = {};
                var0 = null;
                var7 = var0 == var16;
                var1 = undefined;
                if (var7) {
                    _fun114853_ip = 324;
                    continue _fun114853
                }
            case 319:
                var1 = var16.id;
            case 324:
                if (!(var0 == var1)) {
                    _fun114853_ip = 332;
                    continue _fun114853
                }
            case 328:
                var1 = _closure1_slot25;
            case 332:
                var2.guildId = var1;
                var1 = 'guild_settings_mobile';
                var2.location = var1;
                var1 = {};
                var7 = var0 == var16;
                var1.disable = var7;
                var7 = true;
                var1.autoTrackExposure = var7;
                var1 = var3.bind(var6)(var2, var1);
                var7 = var1.enableDeadchat;
                var1 = var0 != var16;
                var0 = null;
                if (!var1) {
                    _fun114853_ip = 493;
                    continue _fun114853
                }
            case 385:
                var3 = _closure1_slot27;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 48;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var6 = _closure1_slot32;
                var5 = {};
                var5.navigation = var17;
                var5.guild = var16;
                var5.submitting = var15;
                var5.hasChanges = var14;
                var5.canManage = var13;
                var5.afkChannel = var12;
                var5.systemChannel = var11;
                var5.guildMemberCount = var10;
                var5.errors = var9;
                var5.contentContainerStyle = var8;
                var5.enableDeadchatPrompt = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 493:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1416, 1372, 1671, 1599, 3091, 3100, 1621, 8175, 660, 4876, 33, 1297, 671, 1234, 8174, 9806, 7751, 3936, 3937, 3147, 4705, 5326, 1384, 5382, 5411, 4794, 6711, 5368, 7161, 5367, 14725, 1417, 1684, 9280, 7402, 4900, 5206, 3159, 1469, 566, 14728, 4899, 2]);