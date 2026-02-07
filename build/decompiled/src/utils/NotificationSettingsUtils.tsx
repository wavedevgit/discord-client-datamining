// utils/NotificationSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var11;
    var0 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = 'RETURN_PREVIOUS_WHEN_CHANGED';
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun43498: for (var _fun43498_ip = 0;;) switch (_fun43498_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure2_slot2;
                    var0 = 'RETURN_PREVIOUS_WHEN_CHANGED';
                    if (!(var0 !== var3)) {
                        _fun43498_ip = 24;
                        continue _fun43498
                    }
                case 20:
                    var0 = undefined;
                    return var0;
                case 24:
                    var0 = _closure2_slot0;
                    var4 = var0[var2];
                    var0 = _closure2_slot1;
                    var3 = var0[var2];
                    var0 = undefined;
                    if (!(var4 !== var3)) {
                        _fun43498_ip = 54;
                        continue _fun43498
                    }
                case 46:
                    var1 = _closure2_slot0;
                    var0 = var1[var2];
                case 54:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot15 = var0;
    var5 = function arg0() {
        _fun43499: for (var _fun43499_ip = 0;;) switch (_fun43499_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun43499_ip = 73;
                    continue _fun43499
                }
            case 14:
                var2 = var1.end_time;
                var2 = var3 != var2;
                var0 = null;
                if (!var2) {
                    _fun43499_ip = 73;
                    continue _fun43499
                }
            case 29:
                var2 = global;
                var3 = var2.Date;
                var4 = var1.end_time;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getTime;
                var0 = var1.bind(var2)();
            case 73:
                return var0;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function arg0() {
        _fun43500: for (var _fun43500_ip = 0;;) switch (_fun43500_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot6;
                var0 = var2.isMuted;
                var2 = var0.bind(var2)(var3);
                var4 = _closure1_slot6;
                var0 = var4.getMuteConfig;
                var4 = var0.bind(var4)(var3);
                var0 = {};
                var6 = _closure1_slot6;
                var5 = var6.isSuppressEveryoneEnabled;
                var5 = var5.bind(var6)(var3);
                var0.guild_suppress_everyone = var5;
                var6 = _closure1_slot6;
                var5 = var6.isSuppressRolesEnabled;
                var5 = var5.bind(var6)(var3);
                var0.guild_suppress_roles = var5;
                var6 = _closure1_slot6;
                var5 = var6.isMuteScheduledEventsEnabled;
                var5 = var5.bind(var6)(var3);
                var0.guild_scheduled_events_muted = var5;
                var0.guild_is_muted = var2;
                var6 = null;
                var5 = var6 != var4;
                var2 = null;
                if (!var5) {
                    _fun43500_ip = 173;
                    continue _fun43500
                }
            case 114:
                var5 = var4.end_time;
                var5 = var6 != var5;
                var2 = null;
                if (!var5) {
                    _fun43500_ip = 173;
                    continue _fun43500
                }
            case 129:
                var5 = global;
                var6 = var5.Date;
                var7 = var4.end_time;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var4 = new var8[var6](var7, var6);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.getTime;
                var2 = var4.bind(var5)();
            case 173:
                var0.guild_muted_until = var2;
                var4 = _closure1_slot6;
                var2 = var4.isMobilePushEnabled;
                var2 = var2.bind(var4)(var3);
                var0.guild_receive_mobile_push = var2;
                var4 = _closure1_slot14;
                var5 = _closure1_slot6;
                var2 = var5.getMessageNotifications;
                var2 = var2.bind(var5)(var3);
                var2 = var4[var2];
                var0.guild_message_notification_settings = var2;
                var4 = _closure1_slot6;
                var2 = var4.getNotifyHighlights;
                var2 = var2.bind(var4)(var3);
                var0.guild_notify_highlights = var2;
                var2 = _closure1_slot6;
                var1 = var2.getGuildFlags;
                var1 = var1.bind(var2)(var3);
                var0.guild_flags = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var3 = function arg0, arg1() {
        _fun43501: for (var _fun43501_ip = 0;;) switch (_fun43501_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot6;
                var0 = var2.isChannelMuted;
                var2 = var0.bind(var2)(var4, var3);
                var5 = _closure1_slot6;
                var0 = var5.getChannelMuteConfig;
                var5 = var0.bind(var5)(var4, var3);
                var0 = {};
                var0.channel_is_muted = var2;
                var7 = null;
                var6 = var7 != var5;
                var2 = null;
                if (!var6) {
                    _fun43501_ip = 118;
                    continue _fun43501
                }
            case 59:
                var6 = var5.end_time;
                var6 = var7 != var6;
                var2 = null;
                if (!var6) {
                    _fun43501_ip = 118;
                    continue _fun43501
                }
            case 74:
                var6 = global;
                var7 = var6.Date;
                var9 = var5.end_time;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var6;
                var5 = new var10[var7](var9, var8);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.getTime;
                var2 = var5.bind(var6)();
            case 118:
                var0.channel_muted_until = var2;
                var5 = _closure1_slot14;
                var6 = _closure1_slot6;
                var2 = var6.getChannelMessageNotifications;
                var2 = var2.bind(var6)(var4, var3);
                var2 = var5[var2];
                var0.channel_message_notification_settings = var2;
                var2 = _closure1_slot6;
                var1 = var2.getChannelIdFlags;
                var1 = var1.bind(var2)(var4, var3);
                var0.channel_flags = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var6 = global;
    var12 = var6.Object;
    var9 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var11[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var11[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var11[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot7 = var8;
    var13 = var7.UserNotificationSettings;
    var _closure1_slot8 = var13;
    var7 = 5;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var7.NotificationSettingsUpdateType;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var7.UnreadSetting;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var8 = var7.ChannelNotificationSettingsFlags;
    var _closure1_slot11 = var8;
    var7 = var7.GuildNotificationSettingsFlags;
    var _closure1_slot12 = var7;
    var8 = {};
    var7 = 'enabled forum thread created notifs';
    var8.ForumThreadsCreatedOn = var7;
    var7 = 'disabled forum thread created notifs';
    var8.ForumThreadsCreatedOff = var7;
    var7 = 'enabled suppress everyone';
    var8.SuppressEveryoneOn = var7;
    var7 = 'disabled suppress everyone';
    var8.SuppressEveryoneOff = var7;
    var7 = 'enabled suppress roles';
    var8.SuppressRolesOn = var7;
    var7 = 'disabled suppress roles';
    var8.SuppressRolesOff = var7;
    var7 = 'enabled highlights';
    var8.HighlightsOn = var7;
    var7 = 'disabled highlights';
    var8.HighlightsOff = var7;
    var7 = 'enabled mobile push notifications';
    var8.MobilePushOn = var7;
    var7 = 'disabled mobile push notifications';
    var8.MobilePushOff = var7;
    var7 = 'unreads set to all messages';
    var8.UnreadsAll = var7;
    var7 = 'unreads set to mentions';
    var8.UnreadsMentions = var7;
    var7 = 'unreads set to the default';
    var8.UnreadsDefault = var7;
    var7 = 'notifications set to all messages';
    var8.NotificationsAll = var7;
    var7 = 'notifications set to mentions';
    var8.NotificationsMentions = var7;
    var7 = 'notifications set to nothing';
    var8.NotificationsNothing = var7;
    var7 = 'notifications set to the default';
    var8.NotificationsDefault = var7;
    var7 = 'notification preset set to all messages';
    var8.PresetAll = var7;
    var7 = 'notification preset set to mentions';
    var8.PresetMentions = var7;
    var7 = 'notification preset set to nothing';
    var8.PresetNothing = var7;
    var7 = 'notification preset set to the default';
    var8.PresetDefault = var7;
    var7 = 'opted in to entity';
    var8.OptedIn = var7;
    var7 = 'opted out from entity';
    var8.OptedOut = var7;
    var7 = 'favorited';
    var8.Favorited = var7;
    var7 = 'unfavorited';
    var8.UnFavorited = var7;
    var7 = 'muted';
    var8.Muted = var7;
    var7 = 'unmuted';
    var8.Unmuted = var7;
    var7 = 'muted scheduled events';
    var8.MutedScheduledEvents = var7;
    var7 = 'unmuted scheduled events';
    var8.UnmutedScheduledEvents = var7;
    var7 = 'channel override created';
    var8.OverrideCreated = var7;
    var7 = 'channel override deleted';
    var8.OverrideDeleted = var7;
    var7 = 'announcement channels auto set to all messages';
    var8.AnnouncementAutoEnable = var7;
    var _closure1_slot13 = var8;
    var7 = {};
    var9 = function arg0() {
        _fun43502: for (var _fun43502_ip = 0;;) switch (_fun43502_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43502_ip = 21;
                    continue _fun43502
                }
            case 13:
                var0 = var1.ForumThreadsCreatedOff;
                _fun43502_ip = 27;
                continue _fun43502;
            case 21:
                var0 = var1.ForumThreadsCreatedOn;
            case 27:
                return var0;
        }
    };
    var7.forumThreadsCreated = var9;
    var9 = function arg0() {
        _fun43503: for (var _fun43503_ip = 0;;) switch (_fun43503_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43503_ip = 21;
                    continue _fun43503
                }
            case 13:
                var0 = var1.SuppressEveryoneOff;
                _fun43503_ip = 27;
                continue _fun43503;
            case 21:
                var0 = var1.SuppressEveryoneOn;
            case 27:
                return var0;
        }
    };
    var7.suppressEveryone = var9;
    var9 = function arg0() {
        _fun43504: for (var _fun43504_ip = 0;;) switch (_fun43504_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43504_ip = 21;
                    continue _fun43504
                }
            case 13:
                var0 = var1.SuppressRolesOff;
                _fun43504_ip = 27;
                continue _fun43504;
            case 21:
                var0 = var1.SuppressRolesOn;
            case 27:
                return var0;
        }
    };
    var7.suppressRoles = var9;
    var9 = function arg0() {
        _fun43505: for (var _fun43505_ip = 0;;) switch (_fun43505_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43505_ip = 21;
                    continue _fun43505
                }
            case 13:
                var0 = var1.HighlightsOff;
                _fun43505_ip = 27;
                continue _fun43505;
            case 21:
                var0 = var1.HighlightsOn;
            case 27:
                return var0;
        }
    };
    var7.highlights = var9;
    var9 = function arg0() {
        _fun43506: for (var _fun43506_ip = 0;;) switch (_fun43506_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43506_ip = 21;
                    continue _fun43506
                }
            case 13:
                var0 = var1.MobilePushOff;
                _fun43506_ip = 27;
                continue _fun43506;
            case 21:
                var0 = var1.MobilePushOn;
            case 27:
                return var0;
        }
    };
    var7.mobilePush = var9;
    var9 = function arg0() {
        _fun43507: for (var _fun43507_ip = 0;;) switch (_fun43507_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43507_ip = 21;
                    continue _fun43507
                }
            case 13:
                var0 = var1.OptedOut;
                _fun43507_ip = 27;
                continue _fun43507;
            case 21:
                var0 = var1.OptedIn;
            case 27:
                return var0;
        }
    };
    var7.optedIn = var9;
    var9 = function arg0() {
        _fun43508: for (var _fun43508_ip = 0;;) switch (_fun43508_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43508_ip = 21;
                    continue _fun43508
                }
            case 13:
                var0 = var1.UnFavorited;
                _fun43508_ip = 27;
                continue _fun43508;
            case 21:
                var0 = var1.Favorited;
            case 27:
                return var0;
        }
    };
    var7.favorited = var9;
    var9 = function arg0() {
        _fun43509: for (var _fun43509_ip = 0;;) switch (_fun43509_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43509_ip = 21;
                    continue _fun43509
                }
            case 13:
                var0 = var1.Unmuted;
                _fun43509_ip = 27;
                continue _fun43509;
            case 21:
                var0 = var1.Muted;
            case 27:
                return var0;
        }
    };
    var7.muted = var9;
    var9 = function arg0() {
        _fun43510: for (var _fun43510_ip = 0;;) switch (_fun43510_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                if (var0) {
                    _fun43510_ip = 21;
                    continue _fun43510
                }
            case 13:
                var0 = var1.UnmutedScheduledEvents;
                _fun43510_ip = 27;
                continue _fun43510;
            case 21:
                var0 = var1.MutedScheduledEvents;
            case 27:
                return var0;
        }
    };
    var7.mutedEvents = var9;
    var9 = function arg0() {
        _fun43511: for (var _fun43511_ip = 0;;) switch (_fun43511_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot10;
                var0 = var0.ALL_MESSAGES;
                if (!(var2 !== var0)) {
                    _fun43511_ip = 58;
                    continue _fun43511
                }
            case 20:
                var0 = _closure1_slot10;
                var0 = var0.ONLY_MENTIONS;
                if (!(var2 !== var0)) {
                    _fun43511_ip = 46;
                    continue _fun43511
                }
            case 34:
                var0 = _closure1_slot13;
                var0 = var0.UnreadsDefault;
                _fun43511_ip = 56;
                continue _fun43511;
            case 46:
                var2 = _closure1_slot13;
                var0 = var2.UnreadsMentions;
            case 56:
                _fun43511_ip = 68;
                continue _fun43511;
            case 58:
                var1 = _closure1_slot13;
                var0 = var1.UnreadsAll;
            case 68:
                return var0;
        }
    };
    var7.unreads = var9;
    var9 = function arg0() {
        _fun43512: for (var _fun43512_ip = 0;;) switch (_fun43512_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot8;
                var0 = var0.ALL_MESSAGES;
                if (!(var2 !== var0)) {
                    _fun43512_ip = 84;
                    continue _fun43512
                }
            case 20:
                var0 = _closure1_slot8;
                var0 = var0.ONLY_MENTIONS;
                if (!(var2 !== var0)) {
                    _fun43512_ip = 72;
                    continue _fun43512
                }
            case 34:
                var0 = _closure1_slot8;
                var0 = var0.NO_MESSAGES;
                if (!(var2 !== var0)) {
                    _fun43512_ip = 60;
                    continue _fun43512
                }
            case 48:
                var0 = _closure1_slot13;
                var0 = var0.NotificationsDefault;
                _fun43512_ip = 70;
                continue _fun43512;
            case 60:
                var2 = _closure1_slot13;
                var0 = var2.NotificationsNothing;
            case 70:
                _fun43512_ip = 82;
                continue _fun43512;
            case 72:
                var2 = _closure1_slot13;
                var0 = var2.NotificationsMentions;
            case 82:
                _fun43512_ip = 94;
                continue _fun43512;
            case 84:
                var1 = _closure1_slot13;
                var0 = var1.NotificationsAll;
            case 94:
                return var0;
        }
    };
    var7.notifications = var9;
    var12 = var6.Object;
    var9 = var12.freeze;
    var6 = {};
    var15 = var13.ALL_MESSAGES;
    var14 = 'All';
    var6[var15] = var14;
    var15 = var13.ONLY_MENTIONS;
    var14 = 'Mentions';
    var6[var15] = var14;
    var15 = var13.NO_MESSAGES;
    var14 = 'Nothing';
    var6[var15] = var14;
    var14 = var13.NULL;
    var13 = null;
    var6[var14] = var13;
    var6 = var9.bind(var12)(var6);
    var _closure1_slot14 = var6;
    var9 = 11;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/NotificationSettingsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.NotificationLabels = var8;
    var2.NotificationLabel = var7;
    var2.MessageNotificationSettings = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        _fun43513: for (var _fun43513_ip = 0;;) switch (_fun43513_ip) {
            case 0:
                var11 = arg0;
                var4 = function arg0() {
                    _fun43514: for (var _fun43514_ip = 0;;) switch (_fun43514_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arguments[1];
                            var0 = undefined;
                            if (!(var1 === var0)) {
                                _fun43514_ip = 14;
                                continue _fun43514
                            }
                        case 12:
                            var1 = {};
                        case 14:
                            var0 = var1.mute_config;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun43514_ip = 42;
                                continue _fun43514
                            }
                        case 26:
                            var0 = var1.mute_config;
                            var0 = var0.end_time;
                            if (!(var3 == var0)) {
                                _fun43514_ip = 50;
                                continue _fun43514
                            }
                        case 42:
                            var5 = var2.guild_muted_until;
                            _fun43514_ip = 100;
                            continue _fun43514;
                        case 50:
                            var0 = global;
                            var6 = var0.Date;
                            var0 = var1.mute_config;
                            var7 = var0.end_time;
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var8 = var4;
                            var0 = new var8[var6](var7, var6);
                            var4 = var0 instanceof Object ? var0 : var4;
                            var0 = var4.getTime;
                            var5 = var0.bind(var4)();
                        case 100:
                            var0 = var1.message_notifications;
                            if (!(var3 == var0)) {
                                _fun43514_ip = 118;
                                continue _fun43514
                            }
                        case 110:
                            var4 = var2.guild_message_notification_settings;
                            _fun43514_ip = 135;
                            continue _fun43514;
                        case 118:
                            var6 = _closure1_slot14;
                            var0 = var1.message_notifications;
                            var4 = var6[var0];
                        case 135:
                            var0 = {};
                            var0.guild_muted_until = var5;
                            var5 = var1.flags;
                            if (!(var3 == var5)) {
                                _fun43514_ip = 157;
                                continue _fun43514
                            }
                        case 151:
                            var5 = var2.guild_flags;
                        case 157:
                            var0.guild_flags = var5;
                            var5 = var1.muted;
                            if (!(var3 == var5)) {
                                _fun43514_ip = 178;
                                continue _fun43514
                            }
                        case 172:
                            var5 = var2.guild_is_muted;
                        case 178:
                            var0.guild_is_muted = var5;
                            var0.guild_message_notification_settings = var4;
                            var4 = var1.suppress_roles;
                            if (!(var3 == var4)) {
                                _fun43514_ip = 204;
                                continue _fun43514
                            }
                        case 198:
                            var4 = var2.guild_suppress_roles;
                        case 204:
                            var0.guild_suppress_roles = var4;
                            var4 = var1.mobile_push;
                            if (!(var3 == var4)) {
                                _fun43514_ip = 225;
                                continue _fun43514
                            }
                        case 219:
                            var4 = var2.guild_receive_mobile_push;
                        case 225:
                            var0.guild_receive_mobile_push = var4;
                            var4 = var1.notify_highlights;
                            if (!(var3 == var4)) {
                                _fun43514_ip = 246;
                                continue _fun43514
                            }
                        case 240:
                            var4 = var2.guild_notify_highlights;
                        case 246:
                            var0.guild_notify_highlights = var4;
                            var4 = var1.suppress_everyone;
                            if (!(var3 == var4)) {
                                _fun43514_ip = 267;
                                continue _fun43514
                            }
                        case 261:
                            var4 = var2.guild_suppress_everyone;
                        case 267:
                            var0.guild_suppress_everyone = var4;
                            var1 = var1.mute_scheduled_events;
                            if (!(var3 == var1)) {
                                _fun43514_ip = 288;
                                continue _fun43514
                            }
                        case 282:
                            var1 = var2.guild_scheduled_events_muted;
                        case 288:
                            var0.guild_scheduled_events_muted = var1;
                            return var0;
                    }
                };
                var0 = undefined;
                var1 = arg2;
                var3 = var4.bind(var0)(var1);
                var1 = _closure1_slot17;
                var2 = var1.bind(var0)(var11);
                var1 = arg1;
                var10 = var4.bind(var0)(var2, var1);
                var2 = _closure1_slot15;
                var1 = 'RETURN_PREVIOUS_WHEN_CHANGED';
                var8 = var2.bind(var0)(var3, var10, var1);
                var7 = 'guild_flags';
                var3 = var8.bind(var0)(var7);
                var1 = null;
                var4 = var1 != var3;
                var6 = 0;
                var2 = 0;
                if (!var4) {
                    _fun43513_ip = 83;
                    continue _fun43513
                }
            case 80:
                var2 = var3;
            case 83:
                var3 = var10.guild_flags;
                var4 = var1 != var3;
                var1 = 0;
                if (!var4) {
                    _fun43513_ip = 101;
                    continue _fun43513
                }
            case 98:
                var1 = var3;
            case 101:
                var12 = var1 ^ var2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var4 = var5.removeFlags;
                var1 = _closure1_slot12;
                var2 = var1.OPT_IN_CHANNELS_OFF;
                var1 = var1.OPT_IN_CHANNELS_ON;
                var5 = var4.bind(var5)(var12, var2, var1);
                var2 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.NOTIFICATION_SETTINGS_UPDATED;
                var1 = {};
                var15 = var1;
                var14 = var10;
                var10 = copyDataProperties(var15, var14);
                var12 = _closure1_slot3;
                var10 = var12.getStats;
                var14 = var10.bind(var12)(var11);
                var15 = var1;
                var10 = copyDataProperties(var15, var14);
                var12 = arg4;
                var10 = 'location';
                var1[var10] = var12;
                var10 = 'guild_id';
                var1[var10] = var11;
                var9 = _closure1_slot9;
                var10 = var9.GUILD;
                var9 = 'update_type';
                var1[var9] = var10;
                var10 = arg3;
                var9 = 'label';
                var1[var9] = var10;
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_flags_old';
                var1[var7] = var9;
                var7 = 'guild_is_muted';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_is_muted_old';
                var1[var7] = var9;
                var7 = 'guild_suppress_roles';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_suppress_roles_old';
                var1[var7] = var9;
                var7 = 'guild_notify_highlights';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_notify_highlights_old';
                var1[var7] = var9;
                var7 = 'guild_suppress_everyone';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_suppress_everyone_old';
                var1[var7] = var9;
                var7 = 'guild_receive_mobile_push';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_receive_mobile_push_old';
                var1[var7] = var9;
                var7 = 'guild_scheduled_events_muted';
                var9 = var8.bind(var0)(var7);
                var7 = 'guild_scheduled_events_muted_old';
                var1[var7] = var9;
                var7 = 'guild_message_notification_settings';
                var8 = var8.bind(var0)(var7);
                var7 = 'guild_message_notification_settings_old';
                var1[var7] = var8;
                var6 = var6 === var5;
                var5 = 'is_opt_in_only_change';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackGuildNotificationSettingsUpdate = var6;
    var2.muteConfigToTimestamp = var5;
    var5 = function arg0() {
        _fun43515: for (var _fun43515_ip = 0;;) switch (_fun43515_ip) {
            case 0:
                var3 = arg0;
                var15 = var3.updateType;
                var0 = undefined;
                if (!(var15 === var0)) {
                    _fun43515_ip = 30;
                    continue _fun43515
                }
            case 17:
                var1 = _closure1_slot9;
                var15 = var1.CHANNEL;
            case 30:
                var17 = var3.guildId;
                var _closure2_slot0 = var17;
                var16 = var3.channelId;
                var6 = var3.applicationId;
                var4 = var3.change;
                var1 = var3.previous;
                var14 = var3.label;
                var18 = var3.location;
                var2 = function arg0() {
                    _fun43516: for (var _fun43516_ip = 0;;) switch (_fun43516_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = arguments[1];
                            var3 = undefined;
                            if (!(var1 === var3)) {
                                _fun43516_ip = 14;
                                continue _fun43516
                            }
                        case 12:
                            var1 = {};
                        case 14:
                            var8 = var1.muted;
                            var5 = null;
                            if (!(var5 == var8)) {
                                _fun43516_ip = 44;
                                continue _fun43516
                            }
                        case 26:
                            var2 = var5 == var6;
                            var0 = undefined;
                            if (var2) {
                                _fun43516_ip = 41;
                                continue _fun43516
                            }
                        case 35:
                            var0 = var6.channel_is_muted;
                        case 41:
                            var8 = var0;
                        case 44:
                            var0 = var1.message_notifications;
                            if (!(var5 == var0)) {
                                _fun43516_ip = 71;
                                continue _fun43516
                            }
                        case 54:
                            var0 = var5 == var6;
                            var2 = undefined;
                            if (var0) {
                                _fun43516_ip = 69;
                                continue _fun43516
                            }
                        case 63:
                            var2 = var6.channel_message_notification_settings;
                        case 69:
                            _fun43516_ip = 88;
                            continue _fun43516;
                        case 71:
                            var4 = _closure1_slot14;
                            var0 = var1.message_notifications;
                            var2 = var4[var0];
                        case 88:
                            var0 = {};
                            var0.channel_is_muted = var8;
                            var4 = _closure2_slot0;
                            var7 = var5 == var4;
                            var4 = null;
                            if (var7) {
                                _fun43516_ip = 127;
                                continue _fun43516
                            }
                        case 111:
                            var7 = true;
                            var7 = var7 === var8;
                            if (var7) {
                                _fun43516_ip = 124;
                                continue _fun43516
                            }
                        case 120:
                            var7 = var5 != var2;
                        case 124:
                            var4 = var7;
                        case 127:
                            var0.channel_is_overridden = var4;
                            var4 = var1.flags;
                            if (!(var5 == var4)) {
                                _fun43516_ip = 161;
                                continue _fun43516
                            }
                        case 143:
                            var7 = var5 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun43516_ip = 158;
                                continue _fun43516
                            }
                        case 152:
                            var5 = var6.channel_flags;
                        case 158:
                            var4 = var5;
                        case 161:
                            var0.channel_flags = var4;
                            var0.channel_message_notification_settings = var2;
                            var2 = _closure1_slot16;
                            var1 = var1.mute_config;
                            var1 = var2.bind(var3)(var1);
                            var0.channel_muted_until = var1;
                            return var0;
                    }
                };
                var3 = var2.bind(var0)(var1);
                var1 = _closure1_slot18;
                var1 = var1.bind(var0)(var17, var16);
                var19 = var2.bind(var0)(var1, var4);
                var2 = _closure1_slot15;
                var1 = 'RETURN_PREVIOUS_WHEN_CHANGED';
                var10 = var2.bind(var0)(var3, var19, var1);
                var2 = _closure1_slot4;
                var1 = var2.getChannel;
                var11 = var1.bind(var2)(var16);
                var9 = 'channel_flags';
                var1 = var10.bind(var0)(var9);
                var12 = null;
                var3 = var12 != var1;
                var8 = 0;
                var2 = 0;
                if (!var3) {
                    _fun43515_ip = 156;
                    continue _fun43515
                }
            case 153:
                var2 = var1;
            case 156:
                var3 = var19.channel_flags;
                var4 = var12 != var3;
                var1 = 0;
                if (!var4) {
                    _fun43515_ip = 174;
                    continue _fun43515
                }
            case 171:
                var1 = var3;
            case 174:
                var5 = var1 ^ var2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.removeFlags;
                var1 = _closure1_slot11;
                var2 = var1.FAVORITED;
                var1 = var1.OPT_IN_ENABLED;
                var5 = var3.bind(var4)(var5, var2, var1);
                var2 = _closure1_slot5;
                var1 = var2.getLastMessage;
                var2 = var1.bind(var2)(var16);
                var3 = var12 == var2;
                var1 = undefined;
                if (var3) {
                    _fun43515_ip = 256;
                    continue _fun43515
                }
            case 251:
                var1 = var2.type;
            case 256:
                var2 = var12 != var1;
                var7 = null;
                if (!var2) {
                    _fun43515_ip = 268;
                    continue _fun43515
                }
            case 265:
                var7 = var1;
            case 268:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.NOTIFICATION_SETTINGS_UPDATED;
                var1 = {};
                var22 = var1;
                var21 = var19;
                var19 = copyDataProperties(var22, var21);
                var19 = _closure1_slot3;
                var13 = var19.getStats;
                var21 = var13.bind(var19)(var17);
                var22 = var1;
                var13 = copyDataProperties(var22, var21);
                var13 = 'location';
                var1[var13] = var18;
                var13 = 'guild_id';
                var1[var13] = var17;
                var13 = 'channel_id';
                var1[var13] = var16;
                var13 = 'update_type';
                var1[var13] = var15;
                var13 = 'label';
                var1[var13] = var14;
                var13 = var12 != var11;
                var12 = null;
                if (!var13) {
                    _fun43515_ip = 398;
                    continue _fun43515
                }
            case 392:
                var12 = var11.parent_id;
            case 398:
                var11 = 'parent_id';
                var1[var11] = var12;
                var11 = var10.bind(var0)(var9);
                var9 = 'channel_flags_old';
                var1[var9] = var11;
                var9 = 'channel_is_muted';
                var11 = var10.bind(var0)(var9);
                var9 = 'channel_is_muted_old';
                var1[var9] = var11;
                var9 = 'channel_muted_until';
                var11 = var10.bind(var0)(var9);
                var9 = 'channel_muted_until_old';
                var1[var9] = var11;
                var9 = 'channel_is_overridden';
                var11 = var10.bind(var0)(var9);
                var9 = 'channel_is_overridden_old';
                var1[var9] = var11;
                var9 = 'channel_message_notification_settings';
                var10 = var10.bind(var0)(var9);
                var9 = 'channel_message_notification_settings_old';
                var1[var9] = var10;
                var8 = var8 === var5;
                var5 = 'is_opt_in_only_change';
                var1[var5] = var8;
                var5 = 'last_message_type';
                var1[var5] = var7;
                var5 = 'application_id';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackChannelNotificationSettingsUpdate = var5;
    var2.getCurrentGuildSettings = var4;
    var4 = function arg0() {
        var3 = arg0;
        var0 = global;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var5 = var2;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot0 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = arg0;
            var2 = _closure2_slot0;
            var1 = var2.set;
            var4 = _closure1_slot17;
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getManyCurrentGuildSettings = var4;
    var2.getCurrentChannelSettings = var3;
    var3 = function arg0, arg1() {
        var3 = arg1;
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var5 = var2;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = arg0;
            var2 = _closure2_slot1;
            var1 = var2.set;
            var5 = _closure1_slot18;
            var4 = _closure2_slot0;
            var0 = undefined;
            var0 = var5.bind(var0)(var4, var3);
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getManyCurrentChannelSettings = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.NOTIFICATION_SETTINGS_UPDATED;
        var1 = {};
        var5 = _closure1_slot9;
        var5 = var5.ACCOUNT;
        var1.update_type = var5;
        var5 = arg0;
        var5 = var5.quietMode;
        var1.quiet_mode_enabled = var5;
        var5 = arg1;
        var5 = var5.quietMode;
        var1.quiet_mode_enabled_old = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackAccountNotificationSettingUpdated = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4696, 1372, 4251, 4303, 660, 3105, 4304, 665, 1384, 4302, 795, 2]);