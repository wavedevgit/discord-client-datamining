// modules/opt_in_channels/OptInChannelsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun43320: for (var _fun43320_ip = 0;;) switch (_fun43320_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43320_ip = 164;
                            continue _fun43320
                        }
                    case 16:
                        var1 = null;
                        if (!(var1 != var6)) {
                            _fun43320_ip = 159;
                            continue _fun43320
                        }
                    case 25:
                        var3 = _closure1_slot4;
                        var1 = var3.isFullServerPreview;
                        var1 = var1.bind(var3)(var6);
                        if (var1) {
                            _fun43320_ip = 159;
                            continue _fun43320
                        }
                    case 46:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 9;
                        var1 = var4[var1];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var1);
                        var3 = var7.saveUserGuildSettingsBulk;
                        var1 = {};
                        var8 = {};
                        var8.channel_overrides = var5;
                        var1[var6] = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 97);
                    case 95:
                        return var1;
                    case 97:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43320_ip = 156;
                            continue _fun43320
                        }
                    case 103:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES';
                        var2.type = var7;
                        var2.guildId = var6;
                        var2.updates = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun43320_ip = 159;
                        continue _fun43320;
                    case 156:
                        return var1;
                    case 159:
                        var1 = undefined;
                        return var1;
                    case 164:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var4 = function arg0, arg1, arg2() {
        _fun43321: for (var _fun43321_ip = 0;;) switch (_fun43321_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var4;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun43321_ip = 262;
                    continue _fun43321
                }
            case 21:
                var5 = _closure1_slot4;
                var2 = var5.isFullServerPreview;
                var2 = var2.bind(var5)(var4);
                if (var2) {
                    _fun43321_ip = 223;
                    continue _fun43321
                }
            case 45:
                var7 = {};
                var _closure2_slot1 = var7;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var5 = _closure1_slot6;
                    var2 = var5.getChannelIdFlags;
                    var1 = _closure2_slot0;
                    var8 = var2.bind(var5)(var1, var3);
                    var2 = _closure2_slot1;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.setFlag;
                    var4 = _closure1_slot8;
                    var5 = var4.OPT_IN_ENABLED;
                    var4 = false;
                    var4 = var6.bind(var7)(var8, var5, var4);
                    var1.flags = var4;
                    var2[var3] = var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 14;
                var1 = var10[var1];
                var9 = undefined;
                var6 = var2.bind(var9)(var1);
                var5 = var6.updateChannelOverrideSettingsBulk;
                var8 = _closure1_slot0;
                var1 = 8;
                var1 = var10[var1];
                var1 = var8.bind(var9)(var1);
                var1 = var1.NotificationLabels;
                var1 = var1.OptedOut;
                var1 = var5.bind(var6)(var4, var7, var1);
                var1 = 11;
                var1 = var10[var1];
                var6 = var2.bind(var9)(var1);
                var5 = var6.track;
                var1 = _closure1_slot7;
                var2 = var1.CHANNEL_LIST_UPDATED;
                var1 = {};
                var7 = 12;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.collectGuildAnalyticsMetadata;
                var12 = var7.bind(var8)(var4);
                var13 = var1;
                var7 = copyDataProperties(var13, var12);
                var8 = 'remove_many';
                var7 = 'action_type';
                var1[var7] = var8;
                var8 = arg2;
                var7 = 'location';
                var1[var7] = var8;
                var1 = var5.bind(var6)(var2, var1);
                _fun43321_ip = 262;
                continue _fun43321;
            case 223:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.updateImpersonatedChannels;
                var0 = new Array(0);
                var0 = var1.bind(var2)(var4, var0, var3);
            case 262:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 15;
        var4 = var3[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.updateUserGuildSettings;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.UserSettingsDelay;
        var3 = var1.INFREQUENT_USER_ACTION;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var1
            _fun43324: for (var _fun43324_ip = 0;;) switch (_fun43324_ip) {
                case 0:
                    var2 = arg0;
                    var9 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var4 = 7;
                    var3 = var0[var4];
                    var7 = undefined;
                    var6 = var9.bind(var7)(var3);
                    var5 = var6.hasFlag;
                    var3 = var2.guildOnboardingProgress;
                    var8 = 16;
                    var0 = var0[var8];
                    var0 = var9.bind(var7)(var0);
                    var0 = var0.GuildOnboardingProgress;
                    var0 = var0.GUILD_NOTICE_CLEARED;
                    var0 = var5.bind(var6)(var3, var0);
                    if (!var0) {
                        _fun43324_ip = 132;
                        continue _fun43324
                    }
                case 73:
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var4];
                    var9 = var10.bind(var7)(var5);
                    var6 = var9.hasFlag;
                    var5 = var2.guildOnboardingProgress;
                    var3 = var3[var8];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.GuildOnboardingProgress;
                    var3 = var3.GUILD_NOTICE_SHOWN;
                    var3 = var6.bind(var9)(var5, var3);
                    var0 = !var3;
                case 132:
                    var0 = !var0;
                    if (!var0) {
                        _fun43324_ip = 259;
                        continue _fun43324
                    }
                case 138:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = var1[var4];
                    var10 = var3.bind(var7)(var5);
                    var9 = var10.addFlag;
                    var6 = var2.guildOnboardingProgress;
                    var5 = var1[var8];
                    var5 = var3.bind(var7)(var5);
                    var5 = var5.GuildOnboardingProgress;
                    var5 = var5.GUILD_NOTICE_CLEARED;
                    var5 = var9.bind(var10)(var6, var5);
                    var2.guildOnboardingProgress = var5;
                    var4 = var1[var4];
                    var6 = var3.bind(var7)(var4);
                    var5 = var6.setFlag;
                    var4 = var2.guildOnboardingProgress;
                    var1 = var1[var8];
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.GuildOnboardingProgress;
                    var3 = var1.GUILD_NOTICE_SHOWN;
                    var1 = false;
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var2.guildOnboardingProgress = var1;
                    var0 = true;
                case 259:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = var6;
    var5 = var5.GuildNotificationSettingsFlags;
    var _closure1_slot9 = var5;
    var5 = 13;
    var5 = var8[var5];
    var10 = var7.bind(var0)(var5);
    var9 = var10.debounce;
    var6 = function(arg0, arg1) { // Environment: var1
        var3 = function() {
            var0 = undefined;
            var3 = _closure1_slot10;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var5 = 1000;
    var5 = var9.bind(var10)(var6, var5);
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/opt_in_channels/OptInChannelsActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0, arg1, arg2, arg3() {
        _fun43327: for (var _fun43327_ip = 0;;) switch (_fun43327_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = arg2;
                var9 = arg3;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun43327_ip = 574;
                    continue _fun43327
                }
            case 21:
                var3 = _closure1_slot4;
                var2 = var3.isFullServerPreview;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun43327_ip = 502;
                    continue _fun43327
                }
            case 45:
                var3 = _closure1_slot6;
                var2 = var3.getChannelIdFlags;
                var10 = var2.bind(var3)(var4, var5);
                var7 = var10;
                if (var0) {
                    _fun43327_ip = 114;
                    continue _fun43327
                }
            case 67:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var8 = var6.bind(var2)(var3);
                var6 = var8.setFlag;
                var2 = _closure1_slot8;
                var3 = var2.FAVORITED;
                var2 = false;
                var7 = var6.bind(var8)(var10, var3, var2);
            case 114:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 8;
                var2 = var12[var8];
                var10 = undefined;
                var3 = var11.bind(var10)(var2);
                var2 = var3.getCurrentChannelSettings;
                var13 = var2.bind(var3)(var4, var5);
                var14 = {};
                var2 = 7;
                var2 = var12[var2];
                var6 = var11.bind(var10)(var2);
                var3 = var6.setFlag;
                var2 = _closure1_slot8;
                var2 = var2.OPT_IN_ENABLED;
                var2 = var3.bind(var6)(var7, var2, var0);
                var14.flags = var2;
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var12[var2];
                var7 = var3.bind(var10)(var2);
                var6 = var7.saveUserGuildSettingsBulk;
                var2 = {};
                var15 = {};
                var16 = {};
                var16[var5] = var14;
                var15.channel_overrides = var16;
                var2[var4] = var15;
                var2 = var6.bind(var7)(var2);
                var2 = 10;
                var2 = var12[var2];
                var7 = var3.bind(var10)(var2);
                var6 = var7.dispatch;
                var2 = {};
                var15 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
                var2.type = var15;
                var2.guildId = var4;
                var2.channelId = var5;
                var2.settings = var14;
                var2 = var6.bind(var7)(var2);
                var2 = var12[var8];
                var7 = var11.bind(var10)(var2);
                var6 = var7.trackChannelNotificationSettingsUpdate;
                var2 = {};
                var2.guildId = var4;
                var2.channelId = var5;
                var2.change = var14;
                var2.previous = var13;
                var8 = var12[var8];
                var8 = var11.bind(var10)(var8);
                var13 = var8.NotificationLabel;
                var8 = var13.optedIn;
                var8 = var8.bind(var13)(var0);
                var2.label = var8;
                var2.location = var9;
                var2 = var6.bind(var7)(var2);
                var2 = _closure1_slot12;
                var2 = var2.bind(var10)(var4);
                var2 = 11;
                var2 = var12[var2];
                var7 = var3.bind(var10)(var2);
                var6 = var7.track;
                var2 = _closure1_slot7;
                var3 = var2.CHANNEL_LIST_UPDATED;
                var2 = {};
                var8 = 12;
                var13 = var12[var8];
                var14 = var11.bind(var10)(var13);
                var13 = var14.collectGuildAnalyticsMetadata;
                var19 = var13.bind(var14)(var4);
                var20 = var2;
                var13 = copyDataProperties(var20, var19);
                var8 = var12[var8];
                var11 = var11.bind(var10)(var8);
                var10 = var11.collectChannelAnalyticsMetadata;
                var12 = _closure1_slot5;
                var8 = var12.getChannel;
                var8 = var8.bind(var12)(var5);
                var19 = var10.bind(var11)(var8);
                var20 = var2;
                var8 = copyDataProperties(var20, var19);
                var10 = 'remove';
                if (!var0) {
                    _fun43327_ip = 476;
                    continue _fun43327
                }
            case 472:
                var10 = 'add';
            case 476:
                var8 = 'action_type';
                var2[var8] = var10;
                var8 = 'location';
                var2[var8] = var9;
                var2 = var6.bind(var7)(var3, var2);
                _fun43327_ip = 574;
                continue _fun43327;
            case 502:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateImpersonatedChannels;
                if (var0) {
                    _fun43327_ip = 539;
                    continue _fun43327
                }
            case 533:
                var1 = new Array(0);
                _fun43327_ip = 550;
                continue _fun43327;
            case 539:
                var6 = new Array(1);
                var6[0] = var5;
                var1 = var6;
            case 550:
                if (var0) {
                    _fun43327_ip = 563;
                    continue _fun43327
                }
            case 553:
                var0 = new Array(1);
                var0[0] = var5;
                _fun43327_ip = 567;
                continue _fun43327;
            case 563:
                var0 = new Array(0);
            case 567:
                var0 = var2.bind(var3)(var4, var1, var0);
            case 574:
                var0 = undefined;
                return var0;
        }
    };
    var2.setOptInChannel = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun43328: for (var _fun43328_ip = 0;;) switch (_fun43328_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var1 = arg2;
                var9 = arg3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun43328_ip = 591;
                    continue _fun43328
                }
            case 21:
                var4 = _closure1_slot4;
                var2 = var4.isFullServerPreview;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun43328_ip = 595;
                    continue _fun43328
                }
            case 45:
                var4 = _closure1_slot6;
                var2 = var4.getChannelIdFlags;
                var7 = var2.bind(var4)(var3, var8);
                var10 = var7;
                if (var1) {
                    _fun43328_ip = 114;
                    continue _fun43328
                }
            case 67:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.setFlag;
                var2 = _closure1_slot8;
                var4 = var2.FAVORITED;
                var2 = false;
                var10 = var5.bind(var6)(var7, var4, var2);
            case 114:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 8;
                var2 = var4[var7];
                var11 = undefined;
                var6 = var5.bind(var11)(var2);
                var2 = var6.getCurrentChannelSettings;
                var13 = var2.bind(var6)(var3, var8);
                var14 = {};
                var2 = 7;
                var4 = var4[var2];
                var6 = var5.bind(var11)(var4);
                var5 = var6.setFlag;
                var4 = _closure1_slot8;
                var4 = var4.OPT_IN_ENABLED;
                var4 = var5.bind(var6)(var10, var4, var1);
                var14.flags = var4;
                var5 = _closure1_slot6;
                var4 = var5.isOptInEnabled;
                var4 = var4.bind(var5)(var3);
                if (var4) {
                    _fun43328_ip = 316;
                    continue _fun43328
                }
            case 207:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = var5[var2];
                var12 = var4.bind(var11)(var2);
                var10 = var12.setFlag;
                var4 = _closure1_slot6;
                var2 = var4.getGuildFlags;
                var6 = var2.bind(var4)(var3);
                var2 = _closure1_slot9;
                var4 = var2.OPT_IN_CHANNELS_ON;
                var2 = true;
                var10 = var10.bind(var12)(var6, var4, var2);
                var4 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var5 = var4.bind(var11)(var2);
                var4 = var5.saveUserGuildSettingsBulk;
                var2 = {};
                var6 = {};
                var12 = {};
                var12[var8] = var14;
                var6.channel_overrides = var12;
                var6.flags = var10;
                var2[var3] = var6;
                var2 = var4.bind(var5)(var2);
            case 316:
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 10;
                var2 = var12[var2];
                var6 = var4.bind(var11)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var10 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
                var2.type = var10;
                var2.guildId = var3;
                var2.channelId = var8;
                var2.settings = var14;
                var2 = var5.bind(var6)(var2);
                var10 = _closure1_slot0;
                var2 = var12[var7];
                var6 = var10.bind(var11)(var2);
                var5 = var6.trackChannelNotificationSettingsUpdate;
                var2 = {};
                var2.guildId = var3;
                var2.channelId = var8;
                var2.change = var14;
                var2.previous = var13;
                var7 = var12[var7];
                var7 = var10.bind(var11)(var7);
                var13 = var7.NotificationLabel;
                var7 = var13.optedIn;
                var7 = var7.bind(var13)(var1);
                var2.label = var7;
                var2.location = var9;
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot12;
                var2 = var2.bind(var11)(var3);
                var2 = 11;
                var2 = var12[var2];
                var6 = var4.bind(var11)(var2);
                var5 = var6.track;
                var2 = _closure1_slot7;
                var4 = var2.CHANNEL_LIST_UPDATED;
                var2 = {};
                var7 = 12;
                var13 = var12[var7];
                var14 = var10.bind(var11)(var13);
                var13 = var14.collectGuildAnalyticsMetadata;
                var17 = var13.bind(var14)(var3);
                var18 = var2;
                var13 = copyDataProperties(var18, var17);
                var7 = var12[var7];
                var11 = var10.bind(var11)(var7);
                var10 = var11.collectChannelAnalyticsMetadata;
                var12 = _closure1_slot5;
                var7 = var12.getChannel;
                var7 = var7.bind(var12)(var8);
                var17 = var10.bind(var11)(var7);
                var18 = var2;
                var7 = copyDataProperties(var18, var17);
                var10 = 'remove';
                if (!var1) {
                    _fun43328_ip = 567;
                    continue _fun43328
                }
            case 563:
                var10 = 'add';
            case 567:
                var7 = 'action_type';
                var2[var7] = var10;
                var7 = 'location';
                var2[var7] = var9;
                var2 = var5.bind(var6)(var4, var2);
            case 591:
                var2 = undefined;
                return var2;
            case 595:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 6;
                var5 = var2[var4];
                var2 = undefined;
                var7 = var6.bind(var2)(var5);
                var6 = var7.updateImpersonatedChannels;
                if (var1) {
                    _fun43328_ip = 632;
                    continue _fun43328
                }
            case 626:
                var5 = new Array(0);
                _fun43328_ip = 643;
                continue _fun43328;
            case 632:
                var9 = new Array(1);
                var9[0] = var8;
                var5 = var9;
            case 643:
                if (var1) {
                    _fun43328_ip = 656;
                    continue _fun43328
                }
            case 646:
                var1 = new Array(1);
                var1[0] = var8;
                _fun43328_ip = 660;
                continue _fun43328;
            case 656:
                var1 = new Array(0);
            case 660:
                var1 = var6.bind(var7)(var3, var5, var1);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var2 = var1.bind(var2)(var0);
                var1 = var2.updateImpersonatedData;
                var0 = {};
                var4 = true;
                var0.optInEnabled = var4;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.updateOptInChannelsImmediate = var6;
    var2.updateOptInChannelsBatched = var5;
    var5 = function arg0, arg1() {
        _fun43329: for (var _fun43329_ip = 0;;) switch (_fun43329_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var0 = arguments[2];
                var10 = arguments[3];
                var _closure2_slot0 = var4;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun43329_ip = 26;
                    continue _fun43329
                }
            case 24:
                var0 = false;
            case 26:
                var _closure2_slot1 = var3;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun43329_ip = 458;
                    continue _fun43329
                }
            case 39:
                var6 = _closure1_slot4;
                var2 = var6.isFullServerPreview;
                var2 = var2.bind(var6)(var4);
                if (var2) {
                    _fun43329_ip = 460;
                    continue _fun43329
                }
            case 63:
                var2 = {};
                _closure2_slot1 = var2;
                var6 = var8.forEach;
                var5 = function(arg0) { // Environment: var5
                    var3 = arg0;
                    var5 = _closure1_slot6;
                    var2 = var5.getChannelIdFlags;
                    var1 = _closure2_slot0;
                    var8 = var2.bind(var5)(var1, var3);
                    var2 = _closure2_slot1;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.setFlag;
                    var4 = _closure1_slot8;
                    var5 = var4.OPT_IN_ENABLED;
                    var4 = true;
                    var4 = var6.bind(var7)(var8, var5, var4);
                    var1.flags = var4;
                    var2[var3] = var1;
                    return var0;
                };
                var5 = var6.bind(var8)(var5);
                if (var0) {
                    _fun43329_ip = 245;
                    continue _fun43329
                }
            case 90:
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 14;
                var5 = var13[var5];
                var9 = var6.bind(var3)(var5);
                var7 = var9.updateChannelOverrideSettingsBulk;
                var12 = _closure1_slot0;
                var5 = 8;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.NotificationLabels;
                var5 = var5.OptedIn;
                var5 = var7.bind(var9)(var4, var2, var5);
                var5 = 11;
                var5 = var13[var5];
                var9 = var6.bind(var3)(var5);
                var7 = var9.track;
                var5 = _closure1_slot7;
                var6 = var5.CHANNEL_LIST_UPDATED;
                var5 = {};
                var11 = 12;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.collectGuildAnalyticsMetadata;
                var15 = var11.bind(var12)(var4);
                var16 = var5;
                var11 = copyDataProperties(var16, var15);
                var12 = 'add_many';
                var11 = 'action_type';
                var5[var11] = var12;
                var11 = 'location';
                var5[var11] = var10;
                var5 = var7.bind(var9)(var6, var5);
                _fun43329_ip = 458;
                continue _fun43329;
            case 245:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var5 = var12[var5];
                var13 = var11.bind(var3)(var5);
                var9 = var13.setFlag;
                var6 = _closure1_slot6;
                var5 = var6.getGuildFlags;
                var7 = var5.bind(var6)(var4);
                var5 = _closure1_slot9;
                var6 = var5.OPT_IN_CHANNELS_ON;
                var5 = true;
                var13 = var9.bind(var13)(var7, var6, var5);
                var5 = _closure1_slot1;
                var6 = 14;
                var6 = var12[var6];
                var9 = var5.bind(var3)(var6);
                var7 = var9.updateGuildAndChannelNotificationSettings;
                var6 = {};
                var6.flags = var13;
                var6.channel_overrides = var2;
                var2 = 8;
                var2 = var12[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationLabels;
                var2 = var2.OptedIn;
                var2 = var7.bind(var9)(var4, var6, var2);
                var2 = 11;
                var2 = var12[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.track;
                var2 = _closure1_slot7;
                var5 = var2.CHANNEL_LIST_UPDATED;
                var2 = {};
                var9 = 12;
                var9 = var12[var9];
                var11 = var11.bind(var3)(var9);
                var9 = var11.collectGuildAnalyticsMetadata;
                var15 = var9.bind(var11)(var4);
                var16 = var2;
                var9 = copyDataProperties(var16, var15);
                var11 = 'add_many_and_enable_guild';
                var9 = 'action_type';
                var2[var9] = var11;
                var9 = 'location';
                var2[var9] = var10;
                var2 = var6.bind(var7)(var5, var2);
            case 458:
                return var3;
            case 460:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 6;
                var2 = var2[var5];
                var7 = var6.bind(var3)(var2);
                var6 = var7.updateImpersonatedChannels;
                var2 = new Array(0);
                var2 = var6.bind(var7)(var4, var8, var2);
                if (!var0) {
                    _fun43329_ip = 538;
                    continue _fun43329
                }
            case 500:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var3 = var2.bind(var3)(var1);
                var2 = var3.updateImpersonatedData;
                var1 = {};
                var5 = true;
                var1.optInEnabled = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 538:
                var0 = undefined;
                return var0;
        }
    };
    var2.bulkOptInChannels = var5;
    var2.bulkOptOutChannels = var4;
    var4 = function arg0, arg1, arg2() {
        _fun43331: for (var _fun43331_ip = 0;;) switch (_fun43331_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = _closure1_slot4;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun43331_ip = 257;
                    continue _fun43331
                }
            case 30:
                var2 = _closure1_slot6;
                var1 = var2.getGuildFlags;
                var13 = var1.bind(var2)(var3);
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 14;
                var1 = var10[var1];
                var9 = undefined;
                var7 = var2.bind(var9)(var1);
                var6 = var7.updateGuildNotificationSettings;
                var5 = {};
                var8 = _closure1_slot0;
                var1 = 7;
                var1 = var10[var1];
                var12 = var8.bind(var9)(var1);
                var11 = var12.setFlag;
                var1 = _closure1_slot9;
                var1 = var1.OPT_IN_CHANNELS_ON;
                var1 = var11.bind(var12)(var13, var1, var4);
                var5.flags = var1;
                var1 = 8;
                var1 = var10[var1];
                var1 = var8.bind(var9)(var1);
                var11 = var1.NotificationLabel;
                var1 = var11.optedIn;
                var1 = var1.bind(var11)(var4);
                var1 = var6.bind(var7)(var3, var5, var1);
                var1 = 11;
                var1 = var10[var1];
                var6 = var2.bind(var9)(var1);
                var5 = var6.track;
                var1 = _closure1_slot7;
                var2 = var1.CHANNEL_LIST_UPDATED;
                var1 = {};
                var7 = 12;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.collectGuildAnalyticsMetadata;
                var15 = var7.bind(var8)(var3);
                var16 = var1;
                var7 = copyDataProperties(var16, var15);
                var8 = 'guild_disabled';
                if (!var4) {
                    _fun43331_ip = 228;
                    continue _fun43331
                }
            case 222:
                var8 = 'guild_enabled';
            case 228:
                var7 = 'action_type';
                var1[var7] = var8;
                var8 = arg2;
                var7 = 'location';
                var1[var7] = var8;
                var1 = var5.bind(var6)(var2, var1);
                _fun43331_ip = 298;
                continue _fun43331;
            case 257:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.updateImpersonatedData;
                var0 = {};
                var0.optInEnabled = var4;
                var0 = var1.bind(var2)(var3, var0);
            case 298:
                var0 = undefined;
                return var0;
        }
    };
    var2.setGuildOptIn = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun43332: for (var _fun43332_ip = 0;;) switch (_fun43332_ip) {
            case 0:
                var7 = arg0;
                var11 = arg1;
                var4 = arg2;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun43332_ip = 371;
                    continue _fun43332
                }
            case 18:
                var2 = _closure1_slot4;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var7);
                if (var1) {
                    _fun43332_ip = 371;
                    continue _fun43332
                }
            case 42:
                var2 = _closure1_slot6;
                var1 = var2.getChannelIdFlags;
                var9 = var1.bind(var2)(var7, var11);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var8 = undefined;
                var5 = var3.bind(var8)(var2);
                var3 = var5.hasFlag;
                var2 = _closure1_slot8;
                var2 = var2.OPT_IN_ENABLED;
                var2 = var3.bind(var5)(var9, var2);
                var2 = !var2;
                if (!var2) {
                    _fun43332_ip = 111;
                    continue _fun43332
                }
            case 108:
                var2 = var4;
            case 111:
                var14 = var9;
                if (!var2) {
                    _fun43332_ip = 159;
                    continue _fun43332
                }
            case 117:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var6 = var3.bind(var8)(var2);
                var5 = var6.setFlag;
                var2 = _closure1_slot8;
                var3 = var2.OPT_IN_ENABLED;
                var2 = true;
                var14 = var5.bind(var6)(var9, var3, var2);
            case 159:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 14;
                var3 = var9[var3];
                var10 = var2.bind(var8)(var3);
                var5 = var10.updateChannelOverrideSettings;
                var3 = {};
                var6 = _closure1_slot0;
                var1 = var9[var1];
                var13 = var6.bind(var8)(var1);
                var12 = var13.setFlag;
                var1 = _closure1_slot8;
                var1 = var1.FAVORITED;
                var1 = var12.bind(var13)(var14, var1, var4);
                var3.flags = var1;
                var1 = 8;
                var1 = var9[var1];
                var1 = var6.bind(var8)(var1);
                var12 = var1.NotificationLabel;
                var1 = var12.favorited;
                var15 = var1.bind(var12)(var4);
                var19 = var10;
                var18 = var7;
                var17 = var11;
                var16 = var3;
                var1 = var19[var5](var18, var17, var16, var15, var14);
                var1 = 11;
                var1 = var9[var1];
                var3 = var2.bind(var8)(var1);
                var2 = var3.track;
                var0 = _closure1_slot7;
                var1 = var0.CHANNEL_LIST_UPDATED;
                var0 = {};
                var5 = 12;
                var5 = var9[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.collectGuildAnalyticsMetadata;
                var17 = var5.bind(var6)(var7);
                var18 = var0;
                var5 = copyDataProperties(var18, var17);
                var5 = 'unfavorited';
                if (!var4) {
                    _fun43332_ip = 344;
                    continue _fun43332
                }
            case 340:
                var5 = 'favorited';
            case 344:
                var4 = 'action_type';
                var0[var4] = var5;
                var5 = arg3;
                var4 = 'location';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 371:
                var0 = undefined;
                return var0;
        }
    };
    var2.setIsFavorite = var4;
    var4 = function arg0, arg1() {
        var6 = arg0;
        var8 = arg1;
        var2 = _closure1_slot6;
        var0 = var2.getChannelIdFlags;
        var5 = null;
        var12 = var0.bind(var2)(var5, var6);
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 14;
        var2 = var9[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.updateChannelOverrideSettings;
        var2 = {};
        var7 = _closure1_slot0;
        var10 = 7;
        var10 = var9[var10];
        var11 = var7.bind(var0)(var10);
        var10 = var11.setFlag;
        var1 = _closure1_slot8;
        var1 = var1.FAVORITED;
        var1 = var10.bind(var11)(var12, var1, var8);
        var2.flags = var1;
        var1 = 8;
        var1 = var9[var1];
        var1 = var7.bind(var0)(var1);
        var7 = var1.NotificationLabel;
        var1 = var7.favorited;
        var13 = var1.bind(var7)(var8);
        var17 = var4;
        var16 = null;
        var15 = var6;
        var14 = var2;
        var1 = var17[var3](var16, var15, var14, var13, var12);
        return var0;
    };
    var2.setMessagesFavorite = var4;
    var4 = function arg0, arg1() {
        var6 = arg0;
        var8 = arg1;
        var2 = _closure1_slot6;
        var0 = var2.getChannelIdFlags;
        var5 = null;
        var12 = var0.bind(var2)(var5, var6);
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 14;
        var2 = var9[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.updateChannelOverrideSettings;
        var2 = {};
        var7 = _closure1_slot0;
        var10 = 7;
        var10 = var9[var10];
        var11 = var7.bind(var0)(var10);
        var10 = var11.setFlag;
        var1 = _closure1_slot8;
        var1 = var1.OPT_IN_ENABLED;
        var1 = var10.bind(var11)(var12, var1, var8);
        var2.flags = var1;
        var1 = 8;
        var1 = var9[var1];
        var1 = var7.bind(var0)(var1);
        var7 = var1.NotificationLabel;
        var1 = var7.optedIn;
        var13 = var1.bind(var7)(var8);
        var17 = var4;
        var16 = null;
        var15 = var6;
        var14 = var2;
        var1 = var17[var3](var16, var15, var14, var13, var12);
        return var0;
    };
    var2.setAddToMessages = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 15;
        var4 = var3[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.updateUserGuildSettings;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.UserSettingsDelay;
        var3 = var1.INFREQUENT_USER_ACTION;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var1
            _fun43336: for (var _fun43336_ip = 0;;) switch (_fun43336_ip) {
                case 0:
                    var2 = arg0;
                    var9 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var3 = 7;
                    var4 = var0[var3];
                    var7 = undefined;
                    var6 = var9.bind(var7)(var4);
                    var5 = var6.hasFlag;
                    var4 = var2.guildOnboardingProgress;
                    var8 = 16;
                    var0 = var0[var8];
                    var0 = var9.bind(var7)(var0);
                    var0 = var0.GuildOnboardingProgress;
                    var0 = var0.GUILD_NOTICE_SHOWN;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = !var0;
                    if (!var0) {
                        _fun43336_ip = 140;
                        continue _fun43336
                    }
                case 76:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var3 = var1[var3];
                    var5 = var6.bind(var7)(var3);
                    var4 = var5.addFlag;
                    var3 = var2.guildOnboardingProgress;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.GuildOnboardingProgress;
                    var1 = var1.GUILD_NOTICE_SHOWN;
                    var1 = var4.bind(var5)(var3, var1);
                    var2.guildOnboardingProgress = var1;
                    var0 = true;
                case 140:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.enableGuildNotice = var4;
    var2.dismissGuildNotice = var3;
    var3 = function arg0() {
        var5 = arg0;
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var0 = var2.getOptedInChannels;
        var8 = var0.bind(var2)(var5);
        var2 = new Array(0);
        var7 = 0;
        var9 = var2;
        var0 = arraySpread(var9, var8, var7);
        var0 = undefined;
        var2 = var3.bind(var0)(var5, var2);
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 15;
        var3 = var6[var1];
        var4 = var2.bind(var0)(var3);
        var3 = var4.updateUserGuildSettings;
        var1 = var6[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.UserSettingsDelay;
        var2 = var1.INFREQUENT_USER_ACTION;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var0 = var8[var2];
            var6 = undefined;
            var10 = var7.bind(var6)(var0);
            var9 = var10.setFlag;
            var4 = var1.guildOnboardingProgress;
            var0 = 16;
            var3 = var8[var0];
            var3 = var7.bind(var6)(var3);
            var3 = var3.GuildOnboardingProgress;
            var3 = var3.GUILD_NOTICE_SHOWN;
            var5 = false;
            var3 = var9.bind(var10)(var4, var3, var5);
            var1.guildOnboardingProgress = var3;
            var2 = var8[var2];
            var4 = var7.bind(var6)(var2);
            var3 = var4.setFlag;
            var2 = var1.guildOnboardingProgress;
            var0 = var8[var0];
            var0 = var7.bind(var6)(var0);
            var0 = var0.GuildOnboardingProgress;
            var0 = var0.GUILD_NOTICE_CLEARED;
            var0 = var3.bind(var4)(var2, var0, var5);
            var1.guildOnboardingProgress = var0;
            var0 = true;
            return var0;
        };
        var1 = var3.bind(var4)(var5, var1, var2);
        return var0;
    };
    var2.clearGuildNotice = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DISMISS_FAVORITE_SUGGESTION';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dimissFavoriteSuggestion = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_RECENTLY_ACTIVE_COLLAPSED';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.collapsed = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setRecentlyActiveCollapsed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1664, 1372, 4269, 660, 665, 4657, 1384, 4660, 4662, 806, 795, 4268, 22, 4663, 1355, 1311, 2]);