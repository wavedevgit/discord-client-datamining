// modules/threads/ThreadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = ['can_send_message', 'parent_channel_type'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.ThreadMemberFlags;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var3 = var3.UserNotificationSettings;
    var _closure1_slot10 = var3;
    var3 = function() {
        var0 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2["1Rcf/h"];
        var0.minutes = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.vgnx51;
        var0.hours = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.fNvE50;
        var0.days = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.P7Gygz;
        var1 = var2.bind(var3)(var1);
        var0.month = var1;
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = 16;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/threads/ThreadUtils.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var2.getTimestampString = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot11;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getTimestampAccessibilityLabel = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.trackWithMetadata;
        var1 = _closure1_slot9;
        var1 = var1.THREAD_BROWSER_TAB_CHANGED;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.trackThreadBrowserTab = var3;
    var3 = function() {
        _fun53556: for (var _fun53556_ip = 0;;) switch (_fun53556_ip) {
            case 0:
                var5 = arguments[0];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun53556_ip = 13;
                    continue _fun53556
                }
            case 9:
                var5 = 'Modal';
            case 13:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot9;
                var2 = var1.OPEN_MODAL;
                var1 = {};
                var6 = 'Thread Browser';
                var1.type = var6;
                var1.location_section = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackThreadBrowserOpened = var3;
    var3 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot9;
        var2 = var1.OPEN_POPOUT;
        var1 = {};
        var5 = 'Active Threads Popout';
        var1.type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackActiveThreadsPopoutOpened = var3;
    var3 = function arg0, arg1() {
        _fun53558: for (var _fun53558_ip = 0;;) switch (_fun53558_ip) {
            case 0:
                var9 = arg0;
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.collectThreadMetadata;
                var17 = var3.bind(var4)(var9);
                var6 = null;
                if (!(var6 != var17)) {
                    _fun53558_ip = 545;
                    continue _fun53558
                }
            case 51:
                var3 = var9.getGuildId;
                var14 = var3.bind(var9)();
                var13 = var9.parent_id;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 11;
                var3 = var3[var7];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getCurrentChannelSettings;
                var5 = var3.bind(var4)(var14, var13);
                var11 = function arg0() {
                    _fun53559: for (var _fun53559_ip = 0;;) switch (_fun53559_ip) {
                        case 0:
                            var9 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var2 = var2[var0];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var2);
                            var3 = var5.hasFlag;
                            var2 = _closure1_slot8;
                            var2 = var2.ALL_MESSAGES;
                            var2 = var3.bind(var5)(var9, var2);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            if (var2) {
                                _fun53559_ip = 228;
                                continue _fun53559
                            }
                        case 64:
                            var2 = var5[var0];
                            var7 = var3.bind(var4)(var2);
                            var6 = var7.hasFlag;
                            var2 = _closure1_slot8;
                            var2 = var2.ONLY_MENTIONS;
                            var2 = var6.bind(var7)(var9, var2);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            if (var2) {
                                _fun53559_ip = 194;
                                continue _fun53559
                            }
                        case 106:
                            var0 = var7[var0];
                            var8 = var6.bind(var4)(var0);
                            var2 = var8.hasFlag;
                            var0 = _closure1_slot8;
                            var0 = var0.NO_MESSAGES;
                            var0 = var2.bind(var8)(var9, var0);
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 11;
                            var2 = var9[var2];
                            var2 = var8.bind(var4)(var2);
                            var8 = var2.MessageNotificationSettings;
                            var2 = _closure1_slot10;
                            if (var0) {
                                _fun53559_ip = 182;
                                continue _fun53559
                            }
                        case 170:
                            var0 = var2.NULL;
                            var0 = var8[var0];
                            _fun53559_ip = 192;
                            continue _fun53559;
                        case 182:
                            var2 = var2.NO_MESSAGES;
                            var0 = var8[var2];
                        case 192:
                            _fun53559_ip = 226;
                            continue _fun53559;
                        case 194:
                            var2 = 11;
                            var2 = var7[var2];
                            var2 = var6.bind(var4)(var2);
                            var6 = var2.MessageNotificationSettings;
                            var2 = _closure1_slot10;
                            var2 = var2.ONLY_MENTIONS;
                            var0 = var6[var2];
                        case 226:
                            _fun53559_ip = 260;
                            continue _fun53559;
                        case 228:
                            var2 = 11;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.MessageNotificationSettings;
                            var1 = _closure1_slot10;
                            var1 = var1.ALL_MESSAGES;
                            var0 = var2[var1];
                        case 260:
                            return var0;
                    }
                };
                var8 = _closure1_slot7;
                var4 = var8.flags;
                var3 = var9.id;
                var3 = var4.bind(var8)(var3);
                var4 = var6 != var3;
                var12 = 0;
                if (!var4) {
                    _fun53558_ip = 137;
                    continue _fun53558
                }
            case 134:
                var12 = var3;
            case 137:
                var10 = var11.bind(var0)(var12);
                var18 = _closure1_slot7;
                var4 = var18.isMuted;
                var3 = var9.id;
                var8 = var4.bind(var18)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var15 = var4.bind(var0)(var3);
                var4 = var15.muteConfigToTimestamp;
                var16 = var18.getMuteConfig;
                var3 = var9.id;
                var3 = var16.bind(var18)(var3);
                var3 = var4.bind(var15)(var3);
                var4 = var17.can_send_message;
                var4 = var17.parent_channel_type;
                var4 = {};
                var16 = _closure1_slot4;
                var15 = _closure1_slot3;
                var19 = var16.bind(var0)(var17, var15);
                var20 = var4;
                var15 = copyDataProperties(var20, var19);
                var16 = var9.id;
                var15 = 'channel_id';
                var4[var15] = var16;
                var15 = 'guild_id';
                var4[var15] = var14;
                var15 = 'parent_id';
                var4[var15] = var13;
                var15 = var9.type;
                var9 = 'channel_type';
                var4[var9] = var15;
                var9 = _closure1_slot8;
                var9 = var9.HAS_INTERACTED;
                var9 = var12 & var9;
                var9 = !var9;
                var12 = !var9;
                var9 = 'has_interacted_with_thread';
                var4[var9] = var12;
                var12 = _closure1_slot6;
                var9 = var12.isGuildOrCategoryOrChannelMuted;
                var12 = var9.bind(var12)(var14, var13);
                var9 = 'parent_is_muted';
                var4[var9] = var12;
                var9 = 'old_thread_notification_setting';
                var4[var9] = var10;
                var9 = var2.flags;
                if (!(var6 != var9)) {
                    _fun53558_ip = 375;
                    continue _fun53558
                }
            case 365:
                var9 = var2.flags;
                var10 = var11.bind(var0)(var9);
            case 375:
                var9 = 'new_thread_notification_setting';
                var4[var9] = var10;
                var9 = var5.channel_message_notification_settings;
                var5 = 'parent_notification_setting';
                var4[var5] = var9;
                var5 = 'old_thread_is_muted';
                var4[var5] = var8;
                var5 = var2.muted;
                if (!(var6 != var5)) {
                    _fun53558_ip = 427;
                    continue _fun53558
                }
            case 424:
                var8 = var5;
            case 427:
                var5 = 'new_thread_is_muted';
                var4[var5] = var8;
                var5 = 'old_thread_muted_until';
                var4[var5] = var3;
                var5 = var2.mute_config;
                if (!(var6 != var5)) {
                    _fun53558_ip = 493;
                    continue _fun53558
                }
            case 459:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var0)(var5);
                var5 = var6.muteConfigToTimestamp;
                var2 = var2.mute_config;
                var3 = var5.bind(var6)(var2);
            case 493:
                var2 = 'new_thread_muted_until';
                var4[var2] = var3;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.track;
                var1 = _closure1_slot9;
                var1 = var1.THREAD_NOTIFICATION_SETTINGS_UPDATED;
                var1 = var2.bind(var3)(var1, var4);
            case 545:
                return var0;
        }
    };
    var2.trackThreadNotificationSettingsUpdated = var3;
    var1 = function(arg0) { // Environment: var1
        _fun53560: for (var _fun53560_ip = 0;;) switch (_fun53560_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.lastMessageId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var5.bind(var6)(var3, var0);
                var3 = null;
                var0 = var3 != var7;
                var5 = null;
                if (!var0) {
                    _fun53560_ip = 104;
                    continue _fun53560
                }
            case 73:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 14;
                var0 = var8[var0];
                var6 = var6.bind(var4)(var0);
                var0 = var6.extractTimestamp;
                var5 = var0.bind(var6)(var7);
            case 104:
                var0 = var1.threadMetadata;
                var6 = var3 == var0;
                var7 = undefined;
                if (var6) {
                    _fun53560_ip = 125;
                    continue _fun53560
                }
            case 119:
                var7 = var0.createTimestamp;
            case 125:
                var6 = var3 != var7;
                var0 = null;
                if (!var6) {
                    _fun53560_ip = 168;
                    continue _fun53560
                }
            case 134:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 15;
                var6 = var9[var6];
                var6 = var8.bind(var4)(var6);
                var7 = var6.bind(var4)(var7);
                var6 = var7.valueOf;
                var0 = var6.bind(var7)();
            case 168:
                if (!(var3 != var5)) {
                    _fun53560_ip = 175;
                    continue _fun53560
                }
            case 172:
                var0 = var5;
            case 175:
                if (!(var3 == var0)) {
                    _fun53560_ip = 215;
                    continue _fun53560
                }
            case 179:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.extractTimestamp;
                var1 = var1.id;
                var0 = var2.bind(var3)(var1);
            case 215:
                return var0;
        }
    };
    var2.useLastMessageTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 3908, 4269, 3054, 1233, 660, 1234, 4357, 4268, 795, 6443, 4660, 1384, 566, 21, 3006, 2]);