// stores/native/InAppNotificationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun69516: for (var _fun69516_ip = 0;;) switch (_fun69516_ip) {
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
                _fun69516_ip = 76;
                continue _fun69516;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var9 = function() {
        _fun69519: for (var _fun69519_ip = 0;;) switch (_fun69519_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 24;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.allowInAppNotifications;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun69519_ip = 44;
                    continue _fun69519
                }
            case 40:
                var0 = false;
                return var0;
            case 44:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 31;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.shouldShowRaidInAppNotification;
                var1 = var0.bind(var1)();
                var0 = var1.show;
                var11 = var1.guildId;
                if (!var0) {
                    _fun69519_ip = 353;
                    continue _fun69519
                }
            case 91:
                var0 = null;
                if (!(var0 != var11)) {
                    _fun69519_ip = 353;
                    continue _fun69519
                }
            case 100:
                var2 = _closure1_slot15;
                var1 = var2.getGuild;
                var7 = var1.bind(var2)(var11);
                var _closure2_slot0 = var7;
                if (!(var0 != var7)) {
                    _fun69519_ip = 349;
                    continue _fun69519
                }
            case 125:
                var4 = _closure1_slot14;
                var2 = var4.getChannel;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 32;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)(var7);
                var8 = var2.bind(var4)(var1);
                var _closure2_slot1 = var8;
                var0 = var0 != var8;
                if (!var0) {
                    _fun69519_ip = 347;
                    continue _fun69519
                }
            case 178:
                var2 = _closure1_slot17;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = var8.id;
                var1 = var2 !== var1;
                if (!var1) {
                    _fun69519_ip = 344;
                    continue _fun69519
                }
            case 207:
                var5 = _closure1_slot24;
                var4 = var5.wasRecentlyDismissed;
                var2 = {};
                var2.guild = var7;
                var2.channel = var8;
                var2 = var4.bind(var5)(var2);
                var2 = !var2;
                if (!var2) {
                    _fun69519_ip = 341;
                    continue _fun69519
                }
            case 240:
                var5 = _closure1_slot29;
                var4 = {};
                var6 = {};
                var12 = _closure1_slot21;
                var12 = var12.ALERT;
                var6.type = var12;
                var6.key = var11;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 33;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Millis;
                var11 = var10.SECOND;
                var10 = 30;
                var10 = var10 * var11;
                var6.duration = var10;
                var9 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 30;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.clearNotification;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot24;
                    var2 = var3.dismissNotification;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.guild = var5;
                    var4 = _closure2_slot1;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onDismiss = var9;
                var6.channel = var8;
                var6.guild = var7;
                var4.notification = var6;
                var4 = var5.bind(var3)(var4);
                var2 = undefined;
            case 341:
                var1 = var2;
            case 344:
                var0 = var1;
            case 347:
                return var0;
            case 349:
                var0 = false;
                return var0;
            case 353:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var9;
    var8 = function arg0() {
        _fun69521: for (var _fun69521_ip = 0;;) switch (_fun69521_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.notification;
                var2 = _closure1_slot26;
                var1 = var2.enqueue;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot25;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun69521_ip = 47;
                    continue _fun69521
                }
            case 37:
                var1 = _closure1_slot32;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var8;
    var0 = function arg0, arg1, arg2() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 39;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot19;
        var2 = var1.IN_APP_NOTIFICATION_SUPPRESSED;
        var1 = {};
        var5 = arg0;
        var1.type = var5;
        var5 = arg1;
        var1.channel_id = var5;
        var5 = arg2;
        var1.guild_id = var5;
        var5 = '2026-01-in-app-notifications-negative-test';
        var1.suppress_reason = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun69523: for (var _fun69523_ip = 0;;) switch (_fun69523_ip) {
            case 0:
                var7 = arg0;
                var3 = var7.type;
                var0 = _closure1_slot21;
                var0 = var0.MESSAGE;
                if (!(var0 !== var3)) {
                    _fun69523_ip = 221;
                    continue _fun69523
                }
            case 28:
                var0 = _closure1_slot21;
                var0 = var0.ALERT;
                if (!(var0 !== var3)) {
                    _fun69523_ip = 221;
                    continue _fun69523
                }
            case 45:
                var0 = _closure1_slot21;
                var0 = var0.REACTION;
                if (!(var0 !== var3)) {
                    _fun69523_ip = 221;
                    continue _fun69523
                }
            case 62:
                var0 = _closure1_slot21;
                var0 = var0.FORUM_THREAD_CREATED;
                if (!(var0 !== var3)) {
                    _fun69523_ip = 171;
                    continue _fun69523
                }
            case 76:
                var0 = _closure1_slot21;
                var0 = var0.MESSAGE_FAILED_TO_SEND;
                if (!(var0 !== var3)) {
                    _fun69523_ip = 162;
                    continue _fun69523
                }
            case 90:
                var0 = _closure1_slot21;
                var2 = var0.MESSAGE_REMINDER;
                var6 = undefined;
                var5 = undefined;
                if (!(var2 === var3)) {
                    _fun69523_ip = 293;
                    continue _fun69523
                }
            case 111:
                var3 = var7.channel;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun69523_ip = 132;
                    continue _fun69523
                }
            case 127:
                var2 = var3.guild_id;
            case 132:
                var3 = var7.channel;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun69523_ip = 151;
                    continue _fun69523
                }
            case 146:
                var0 = var3.id;
            case 151:
                var5 = var0;
                var6 = var2;
                _fun69523_ip = 293;
                continue _fun69523;
            case 162:
                var5 = var7.channelId;
                var6 = undefined;
                _fun69523_ip = 293;
                continue _fun69523;
            case 171:
                var3 = var7.thread;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun69523_ip = 193;
                    continue _fun69523
                }
            case 188:
                var2 = var3.guild_id;
            case 193:
                var3 = var7.thread;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun69523_ip = 213;
                    continue _fun69523
                }
            case 208:
                var0 = var3.id;
            case 213:
                var5 = var0;
                var6 = var2;
                _fun69523_ip = 293;
                continue _fun69523;
            case 221:
                var3 = var7.guild;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun69523_ip = 242;
                    continue _fun69523
                }
            case 237:
                var2 = var3.id;
            case 242:
                if (!(var4 == var2)) {
                    _fun69523_ip = 268;
                    continue _fun69523
                }
            case 246:
                var8 = var7.channel;
                var9 = var4 == var8;
                var3 = undefined;
                if (var9) {
                    _fun69523_ip = 265;
                    continue _fun69523
                }
            case 260:
                var3 = var8.guild_id;
            case 265:
                var2 = var3;
            case 268:
                var3 = var7.channel;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun69523_ip = 287;
                    continue _fun69523
                }
            case 282:
                var0 = var3.id;
            case 287:
                var5 = var0;
                var6 = var2;
            case 293:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 39;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot19;
                var2 = var1.IN_APP_NOTIFICATION_DISMISSED;
                var1 = {};
                var7 = var7.type;
                var1.type = var7;
                var1.guild_id = var6;
                var1.channel_id = var5;
                var5 = arg1;
                var1.dismiss_reason = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var2 = _closure1_slot26;
        var0 = var2.tryDrain;
        var0 = var0.bind(var2)();
        _closure1_slot25 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun69525: for (var _fun69525_ip = 0;;) switch (_fun69525_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot26;
                var1 = var2.removeAll;
                var1 = var1.bind(var2)(var4);
                var1 = _closure1_slot25;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun69525_ip = 47;
                    continue _fun69525
                }
            case 33:
                var3 = _closure1_slot25;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                if (var3) {
                    _fun69525_ip = 71;
                    continue _fun69525
                }
            case 47:
                var3 = _closure1_slot25;
                if (!(var2 == var3)) {
                    _fun69525_ip = 67;
                    continue _fun69525
                }
            case 55:
                var4 = _closure1_slot32;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun69525_ip = 83;
                continue _fun69525;
            case 67:
                var3 = false;
                return var3;
            case 71:
                _closure1_slot25 = var2;
                var0 = _closure1_slot32;
                var0 = var0.bind(var1)();
            case 83:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.trackMessageNotificationTimestamps;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.AnalyticEvents;
    var _closure1_slot19 = var7;
    var7 = var1.ChannelTypes;
    var _closure1_slot20 = var7;
    var7 = var1.InAppNotificationTypes;
    var _closure1_slot21 = var7;
    var1 = var1.MessageTypesSets;
    var _closure1_slot22 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ActivityPanelModes;
    var _closure1_slot23 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot7;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 18;
            var3 = var6[var4];
            var3 = var5.bind(var0)(var3);
            var3 = var3.GuildIncidentAlertTypes;
            var8 = var3.JOIN_RAID;
            var3 = global;
            var7 = var3.Map;
            var9 = var7.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var7
                }
            });
            var12 = var9;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var9;
            var1[var8] = var7;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.GuildIncidentAlertTypes;
            var4 = var4.DM_RAID;
            var3 = var3.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var3
                }
            });
            var12 = var5;
            var3 = new var12[var3](var11);
            var3 = var3 instanceof Object ? var3 : var5;
            var1[var4] = var3;
            var2.dissmissedAlertsMap = var1;
            var1 = {
                'amount': 1,
                'unitOfTime': 'hour'
            };
            var2.threshold = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'key';
        var0.key = var1;
        var1 = function arg0() {
            var0 = arg0;
            var1 = var0.guild;
            var0 = var0.channel;
            var1 = var1.id;
            var0 = var0.id;
            var0 = var1 + var0;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'dismissNotification';
        var0.key = var5;
        var5 = function arg0() {
            _fun69529: for (var _fun69529_ip = 0;;) switch (_fun69529_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var7 = var0.guild;
                    var6 = var0.channel;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 19;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.getIncidentAlertType;
                    var9 = _closure1_slot10;
                    var8 = var9.getGuildIncident;
                    var3 = var7.id;
                    var3 = var8.bind(var9)(var3);
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun69529_ip = 143;
                        continue _fun69529
                    }
                case 78:
                    var5 = var2.key;
                    var4 = {};
                    var4.guild = var7;
                    var4.channel = var6;
                    var4 = var5.bind(var2)(var4);
                    var2 = var2.dissmissedAlertsMap;
                    var3 = var2[var3];
                    var2 = var3.set;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.bind(var0)();
                    var1 = var2.bind(var3)(var4, var1);
                case 143:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'wasRecentlyDismissed';
        var0.key = var5;
        var4 = function arg0() {
            _fun69530: for (var _fun69530_ip = 0;;) switch (_fun69530_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var7 = var0.guild;
                    var5 = var0.channel;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 19;
                    var0 = var4[var0];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var0);
                    var3 = var4.getIncidentAlertType;
                    var9 = _closure1_slot10;
                    var8 = var9.getGuildIncident;
                    var0 = var7.id;
                    var0 = var8.bind(var9)(var0);
                    var3 = var3.bind(var4)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun69530_ip = 208;
                        continue _fun69530
                    }
                case 81:
                    var4 = var1.key;
                    var0 = {};
                    var0.guild = var7;
                    var0.channel = var5;
                    var4 = var4.bind(var1)(var0);
                    var0 = var1.dissmissedAlertsMap;
                    var3 = var0[var3];
                    var0 = var3.get;
                    var3 = var0.bind(var3)(var4);
                    var0 = var6 !== var3;
                    if (!var0) {
                        _fun69530_ip = 206;
                        continue _fun69530
                    }
                case 128:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 20;
                    var4 = var8[var2];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.bind(var6)();
                    var4 = var5.diff;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var3 = var2.bind(var6)(var3);
                    var2 = var1.threshold;
                    var2 = var2.unitOfTime;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = var1.threshold;
                    var1 = var1.amount;
                    var0 = var2 < var1;
                case 206:
                    return var0;
                case 208:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot24 = var1;
    var1 = null;
    var _closure1_slot25 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot7;
        var2 = function() {
            _fun69532: for (var _fun69532_ip = 0;;) switch (_fun69532_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun69532_ip = 15;
                        continue _fun69532
                    }
                case 12:
                    var2 = 2;
                case 15:
                    var4 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var1, var3);
                    var3 = new Array(0);
                    var1.queue = var3;
                    var1.maxSize = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enqueue';
        var0.key = var1;
        var1 = function arg0() {
            _fun69533: for (var _fun69533_ip = 0;;) switch (_fun69533_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isFull;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun69533_ip = 34;
                        continue _fun69533
                    }
                case 18:
                    var2 = var0.queue;
                    var1 = var2.shift;
                    var1 = var1.bind(var2)();
                case 34:
                    var2 = var0.queue;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'tryDrain';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.queue;
            var0 = var1.shift;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isFull';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.queue;
            var1 = var1.length;
            var0 = var0.maxSize;
            var0 = var1 >= var0;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'removeAll';
        var0.key = var5;
        var4 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.remove;
            var1 = this;
            var2 = var1.queue;
            var1 = arg0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot26 = var1;
    var1 = 40;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun69538: for (var _fun69538_ip = 0;;) switch (_fun69538_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69538_ip = 69;
                        continue _fun69538
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun69538_ip = 105;
                    continue _fun69538;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var11 = var3.waitFor;
            var20 = _closure1_slot9;
            var19 = _closure1_slot14;
            var18 = _closure1_slot8;
            var4 = _closure1_slot10;
            var16 = _closure1_slot15;
            var15 = _closure1_slot16;
            var14 = _closure1_slot17;
            var13 = _closure1_slot12;
            var12 = _closure1_slot18;
            var21 = var3;
            var17 = var4;
            var1 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot28;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCurrentNotification';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'InAppNotificationStore';
    var7.displayName = var1;
    var1 = 41;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.POST_CONNECTION_OPEN = var9;
    var1.GUILD_UPDATE = var9;
    var9 = function arg0() {
        _fun69541: for (var _fun69541_ip = 0;;) switch (_fun69541_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.message;
                var0 = var0.optimistic;
                var3 = var5.channel_id;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 22;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var6.bind(var4)(var2);
                var2 = var6.canViewPotentiallyNSFWChannel;
                var2 = var2.bind(var6)(var3);
                if (var2) {
                    _fun69541_ip = 62;
                    continue _fun69541
                }
            case 58:
                var2 = false;
                return var2;
            case 62:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)(var5);
                if (!var2) {
                    _fun69541_ip = 122;
                    continue _fun69541
                }
            case 90:
                var2 = _closure1_slot22;
                var7 = var2.SELF_MENTIONABLE_SYSTEM;
                var6 = var7.has;
                var2 = var5.type;
                var2 = var6.bind(var7)(var2);
                if (var2) {
                    _fun69541_ip = 122;
                    continue _fun69541
                }
            case 118:
                var2 = false;
                return var2;
            case 122:
                if (var0) {
                    _fun69541_ip = 720;
                    continue _fun69541
                }
            case 128:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 24;
                var0 = var0[var7];
                var2 = var2.bind(var4)(var0);
                var0 = var2.allowInAppNotifications;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun69541_ip = 720;
                    continue _fun69541
                }
            case 164:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 25;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isEnabled;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun69541_ip = 720;
                    continue _fun69541
                }
            case 200:
                var2 = _closure1_slot9;
                var0 = var2.getChatOpen;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun69541_ip = 720;
                    continue _fun69541
                }
            case 221:
                var2 = _closure1_slot13;
                var0 = var2.getState;
                var2 = var0.bind(var2)();
                var0 = var2.isVoicePanelFullscreen;
                var0 = var0.bind(var2)();
                var6 = true;
                if (var0) {
                    _fun69541_ip = 392;
                    continue _fun69541
                }
            case 253:
                var2 = _closure1_slot8;
                var0 = var2.getConnectedActivityLocation;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun69541_ip = 303;
                    continue _fun69541
                }
            case 273:
                var8 = _closure1_slot8;
                var2 = var8.getActivityPanelMode;
                var8 = var2.bind(var8)();
                var2 = _closure1_slot23;
                var2 = var2.PANEL;
                var6 = true;
                if (!(var8 !== var2)) {
                    _fun69541_ip = 392;
                    continue _fun69541
                }
            case 303:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 26;
                var2 = var9[var2];
                var8 = var8.bind(var4)(var2);
                var2 = var8.getRootNavigationRef;
                var8 = var2.bind(var8)();
                var0 = var0 == var8;
                if (var0) {
                    _fun69541_ip = 353;
                    continue _fun69541
                }
            case 340:
                var2 = var8.isReady;
                var2 = var2.bind(var8)();
                var0 = !var2;
            case 353:
                if (var0) {
                    _fun69541_ip = 389;
                    continue _fun69541
                }
            case 356:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 27;
                var2 = var9[var2];
                var8 = var8.bind(var4)(var2);
                var2 = var8.isChannelFocused;
                var2 = var2.bind(var8)();
                var0 = !var2;
            case 389:
                var6 = var0;
            case 392:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var2 = var2.bind(var4)(var0);
                var0 = var2.shouldNotify;
                var0 = var0.bind(var2)(var5, var3, var6);
                if (var0) {
                    _fun69541_ip = 429;
                    continue _fun69541
                }
            case 425:
                var0 = false;
                return var0;
            case 429:
                var2 = _closure1_slot14;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun69541_ip = 716;
                    continue _fun69541
                }
            case 452:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 28;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.getConfig;
                var2 = {};
                var7 = 'inAppNotificationNegativeTest';
                var2.location = var7;
                var2 = var3.bind(var6)(var2);
                var2 = var2.shouldSuppress;
                if (var2) {
                    _fun69541_ip = 681;
                    continue _fun69541
                }
            case 507:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 29;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.createMessageRecord;
                var6 = var2.bind(var3)(var5);
                var3 = _closure1_slot11;
                var2 = var0.guild_id;
                var2 = var3.bind(var4)(var5, var2);
                var3 = _closure1_slot29;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot21;
                var7 = var7.MESSAGE;
                var5.type = var7;
                var9 = _closure1_slot15;
                var8 = var9.getGuild;
                var7 = var0.getGuildId;
                var7 = var7.bind(var0)();
                var7 = var8.bind(var9)(var7);
                var5.guild = var7;
                var5.channel = var0;
                var5.message = var6;
                var6 = var6.id;
                var5.key = var6;
                var6 = 5000;
                var5.duration = var6;
                var6 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearNotification;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var5.onDismiss = var6;
                var8 = _closure1_slot14;
                var7 = var8.getChannel;
                var6 = var0.parent_id;
                var6 = var7.bind(var8)(var6);
                var5.parentChannel = var6;
                var2.notification = var5;
                var2 = var3.bind(var4)(var2);
                return var4;
            case 681:
                var3 = _closure1_slot30;
                var1 = _closure1_slot21;
                var2 = var1.MESSAGE;
                var1 = var0.id;
                var0 = var0.guild_id;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = false;
                return var0;
            case 716:
                var0 = false;
                return var0;
            case 720:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var9;
    var9 = function arg0() {
        _fun69543: for (var _fun69543_ip = 0;;) switch (_fun69543_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.message;
                var4 = var1.route;
                var0 = var1.emoji;
                var _closure2_slot0 = var0;
                var10 = var1.reactorUserId;
                var1 = null;
                if (!(var1 != var12)) {
                    _fun69543_ip = 774;
                    continue _fun69543
                }
            case 41:
                var2 = var12.reactions;
                if (!(var1 != var2)) {
                    _fun69543_ip = 774;
                    continue _fun69543
                }
            case 54:
                if (!(var1 != var0)) {
                    _fun69543_ip = 774;
                    continue _fun69543
                }
            case 61:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 24;
                var0 = var0[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.allowInAppNotifications;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun69543_ip = 774;
                    continue _fun69543
                }
            case 102:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 34;
                var0 = var5[var0];
                var3 = var3.bind(var6)(var0);
                var0 = var3.tryParseChannelPath;
                var0 = var0.bind(var3)(var4);
                if (!(var1 == var0)) {
                    _fun69543_ip = 151;
                    continue _fun69543
                }
            case 137:
                var0 = {
                    'channelId': null,
                    'guildId': null
                };
            case 151:
                var5 = var0.channelId;
                var4 = var0.guildId;
                if (!(var1 != var5)) {
                    _fun69543_ip = 770;
                    continue _fun69543
                }
            case 168:
                var3 = _closure1_slot17;
                var0 = var3.getCurrentlySelectedChannelId;
                var0 = var0.bind(var3)();
                if (!(var0 !== var5)) {
                    _fun69543_ip = 770;
                    continue _fun69543
                }
            case 189:
                if (!(var1 != var4)) {
                    _fun69543_ip = 770;
                    continue _fun69543
                }
            case 196:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 35;
                var0 = var9[var0];
                var0 = var8.bind(var6)(var0);
                var3 = var0.ReactionNotifications;
                var0 = var3.getSetting;
                var3 = var0.bind(var3)();
                var0 = 36;
                var0 = var9[var0];
                var0 = var8.bind(var6)(var0);
                var0 = var0.ReactionNotificationType;
                var0 = var0.NOTIFICATIONS_DISABLED;
                if (!(var3 !== var0)) {
                    _fun69543_ip = 766;
                    continue _fun69543
                }
            case 263:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var3 = var3.bind(var6)(var0);
                var0 = var3.shouldNotify;
                var0 = var0.bind(var3)(var12, var5);
                if (var0) {
                    _fun69543_ip = 299;
                    continue _fun69543
                }
            case 295:
                var0 = false;
                return var0;
            case 299:
                var3 = _closure1_slot14;
                var0 = var3.getChannel;
                var9 = var0.bind(var3)(var5);
                var3 = var1 == var9;
                var0 = undefined;
                if (var3) {
                    _fun69543_ip = 327;
                    continue _fun69543
                }
            case 322:
                var0 = var9.type;
            case 327:
                var3 = var1 != var0;
                if (!var3) {
                    _fun69543_ip = 353;
                    continue _fun69543
                }
            case 334:
                var7 = var9.type;
                var0 = _closure1_slot20;
                var0 = var0.GUILD_ANNOUNCEMENT;
                var3 = var7 === var0;
            case 353:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 37;
                var0 = var8[var0];
                var11 = var7.bind(var6)(var0);
                var8 = var11.isReactionMilestoneNotification;
                var7 = var12.reactions;
                var13 = var1 == var9;
                var0 = undefined;
                if (var13) {
                    _fun69543_ip = 399;
                    continue _fun69543
                }
            case 394:
                var0 = var9.type;
            case 399:
                var0 = var8.bind(var11)(var7, var0);
                var8 = _closure1_slot15;
                var7 = var8.getGuild;
                var11 = var7.bind(var8)(var4);
                var8 = _closure1_slot18;
                var7 = var8.getUser;
                var10 = var7.bind(var8)(var10);
                if (!(var1 != var9)) {
                    _fun69543_ip = 762;
                    continue _fun69543
                }
            case 441:
                if (!(var1 == var10)) {
                    _fun69543_ip = 451;
                    continue _fun69543
                }
            case 445:
                if (!var3) {
                    _fun69543_ip = 762;
                    continue _fun69543
                }
            case 451:
                var13 = var12.reactions;
                var8 = var13.find;
                var7 = function(arg0) { // Environment: var14
                    _fun69544: for (var _fun69544_ip = 0;;) switch (_fun69544_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.emoji;
                            var3 = var0.id;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun69544_ip = 48;
                                continue _fun69544
                            }
                        case 33:
                            var3 = _closure2_slot0;
                            var4 = var3.id;
                            var3 = null;
                            var0 = var3 != var4;
                        case 48:
                            if (var0) {
                                _fun69544_ip = 75;
                                continue _fun69544
                            }
                        case 51:
                            var2 = var2.emoji;
                            var2 = var2.name;
                            var1 = _closure2_slot0;
                            var1 = var1.name;
                            var0 = var2 === var1;
                        case 75:
                            return var0;
                    }
                };
                var7 = var8.bind(var13)(var7);
                var13 = var1 != var7;
                var8 = undefined;
                if (!var13) {
                    _fun69543_ip = 486;
                    continue _fun69543
                }
            case 483:
                var8 = var7;
            case 486:
                var1 = var1 == var8;
                if (!var1) {
                    _fun69543_ip = 496;
                    continue _fun69543
                }
            case 493:
                var1 = !var3;
            case 496:
                if (!var1) {
                    _fun69543_ip = 502;
                    continue _fun69543
                }
            case 499:
                var1 = !var0;
            case 502:
                var0 = !var1;
                if (var1) {
                    _fun69543_ip = 760;
                    continue _fun69543
                }
            case 511:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 28;
                var1 = var7[var1];
                var7 = var3.bind(var6)(var1);
                var3 = var7.getConfig;
                var1 = {};
                var13 = 'inAppNotificationNegativeTest';
                var1.location = var13;
                var1 = var3.bind(var7)(var1);
                var1 = var1.shouldSuppress;
                if (var1) {
                    _fun69543_ip = 734;
                    continue _fun69543
                }
            case 566:
                var3 = _closure1_slot29;
                var1 = {};
                var7 = {};
                var13 = _closure1_slot21;
                var13 = var13.REACTION;
                var7.type = var13;
                var7.key = var5;
                var16 = _closure1_slot1;
                var13 = _closure1_slot2;
                var15 = 33;
                var15 = var13[var15];
                var15 = var16.bind(var6)(var15);
                var15 = var15.Millis;
                var16 = var15.SECOND;
                var15 = 5;
                var15 = var15 * var16;
                var7.duration = var15;
                var14 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearNotification;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7.onDismiss = var14;
                var7.channel = var9;
                var7.guild = var11;
                var7.user = var10;
                var11 = _closure1_slot0;
                var10 = 29;
                var10 = var13[var10];
                var11 = var11.bind(var6)(var10);
                var10 = var11.createMessageRecord;
                var10 = var10.bind(var11)(var12);
                var7.message = var10;
                var11 = _closure1_slot14;
                var10 = var11.getChannel;
                var9 = var9.parent_id;
                var9 = var10.bind(var11)(var9);
                var7.parentChannel = var9;
                var7.reaction = var8;
                var1.notification = var7;
                var1 = var3.bind(var6)(var1);
                var1 = undefined;
                _fun69543_ip = 757;
                continue _fun69543;
            case 734:
                var3 = _closure1_slot30;
                var2 = _closure1_slot21;
                var2 = var2.REACTION;
                var2 = var3.bind(var6)(var2, var5, var4);
                var1 = false;
            case 757:
                var0 = var1;
            case 760:
                return var0;
            case 762:
                var0 = false;
                return var0;
            case 766:
                var0 = false;
                return var0;
            case 770:
                var0 = false;
                return var0;
            case 774:
                var0 = false;
                return var0;
        }
    };
    var1.REACTION_NOTIFICATION_SENT = var9;
    var9 = function arg0() {
        _fun69546: for (var _fun69546_ip = 0;;) switch (_fun69546_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.savedMessage;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 38;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var3 = var5.getCurrentConfig;
                var2 = {};
                var1 = 'inAppNotificationStore';
                var2.location = var1;
                var1 = {};
                var7 = false;
                var1.autoTrackExposure = var7;
                var1 = var3.bind(var5)(var2, var1);
                var1 = var1.enabled;
                if (!var1) {
                    _fun69546_ip = 292;
                    continue _fun69546
                }
            case 78:
                var2 = var4.message;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun69546_ip = 292;
                    continue _fun69546
                }
            case 92:
                var5 = _closure1_slot14;
                var3 = var5.getChannel;
                var2 = var4.saveData;
                var2 = var2.channelId;
                var5 = var3.bind(var5)(var2);
                if (!(var1 != var5)) {
                    _fun69546_ip = 292;
                    continue _fun69546
                }
            case 124:
                var2 = _closure1_slot29;
                var1 = {};
                var3 = {};
                var7 = _closure1_slot21;
                var7 = var7.MESSAGE_REMINDER;
                var3.type = var7;
                var7 = var4.saveData;
                var11 = var7.channelId;
                var7 = var4.saveData;
                var10 = var7.messageId;
                var7 = global;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = '-';
                var7 = var9.bind(var8)(var11, var7, var10);
                var3.key = var7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 33;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.Millis;
                var7 = var6.SECOND;
                var6 = 10;
                var6 = var6 * var7;
                var3.duration = var6;
                var6 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearNotification;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var3.onDismiss = var6;
                var3.channel = var5;
                var5 = var4.message;
                var5 = var5.author;
                var3.author = var5;
                var3.savedMessage = var4;
                var1.notification = var3;
                var1 = var2.bind(var0)(var1);
            case 292:
                return var0;
        }
    };
    var1.MESSAGE_REMINDER_DUE = var9;
    var9 = function arg0() {
        _fun69548: for (var _fun69548_ip = 0;;) switch (_fun69548_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var1 = var0.isNewlyCreated;
                var5 = _closure1_slot14;
                var2 = var5.getChannel;
                var0 = var3.parent_id;
                var2 = var2.bind(var5)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun69548_ip = 405;
                    continue _fun69548
                }
            case 46:
                var5 = var2.isForumLikeChannel;
                var5 = var5.bind(var2)();
                if (!var5) {
                    _fun69548_ip = 405;
                    continue _fun69548
                }
            case 62:
                if (var1) {
                    _fun69548_ip = 69;
                    continue _fun69548
                }
            case 65:
                var1 = false;
                return var1;
            case 69:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 24;
                var5 = var5[var1];
                var6 = undefined;
                var7 = var7.bind(var6)(var5);
                var5 = var7.allowInAppNotifications;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun69548_ip = 162;
                    continue _fun69548
                }
            case 104:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var7 = var8.bind(var6)(var1);
                var5 = var7.shouldNotifyForForumThreadCreation;
                var1 = 27;
                var1 = var9[var1];
                var8 = var8.bind(var6)(var1);
                var1 = var8.isChannelFocused;
                var1 = var1.bind(var8)();
                var1 = !var1;
                var1 = var5.bind(var7)(var3, var2, var1);
                if (var1) {
                    _fun69548_ip = 166;
                    continue _fun69548
                }
            case 162:
                var1 = false;
                return var1;
            case 166:
                var7 = _closure1_slot18;
                var5 = var7.getUser;
                var1 = var3.ownerId;
                var9 = var5.bind(var7)(var1);
                if (!(var0 != var9)) {
                    _fun69548_ip = 401;
                    continue _fun69548
                }
            case 194:
                var7 = _closure1_slot15;
                var5 = var7.getGuild;
                var1 = var2.guild_id;
                var8 = var5.bind(var7)(var1);
                var0 = var0 != var8;
                if (!var0) {
                    _fun69548_ip = 399;
                    continue _fun69548
                }
            case 223:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 28;
                var1 = var7[var1];
                var7 = var5.bind(var6)(var1);
                var5 = var7.getConfig;
                var1 = {};
                var10 = 'inAppNotificationNegativeTest';
                var1.location = var10;
                var1 = var5.bind(var7)(var1);
                var1 = var1.shouldSuppress;
                if (var1) {
                    _fun69548_ip = 363;
                    continue _fun69548
                }
            case 275:
                var5 = _closure1_slot29;
                var1 = {};
                var7 = {};
                var10 = _closure1_slot21;
                var10 = var10.FORUM_THREAD_CREATED;
                var7.type = var10;
                var7.thread = var3;
                var7.threadCreator = var9;
                var7.parentChannel = var2;
                var7.guild = var8;
                var8 = var3.id;
                var7.key = var8;
                var8 = 5000;
                var7.duration = var8;
                var8 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearNotification;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7.onDismiss = var8;
                var1.notification = var7;
                var1 = var5.bind(var6)(var1);
                var1 = undefined;
                _fun69548_ip = 396;
                continue _fun69548;
            case 363:
                var5 = _closure1_slot30;
                var4 = _closure1_slot21;
                var4 = var4.FORUM_THREAD_CREATED;
                var3 = var3.id;
                var2 = var2.guild_id;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1 = false;
            case 396:
                var0 = var1;
            case 399:
                return var0;
            case 401:
                var0 = false;
                return var0;
            case 405:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_CREATE = var9;
    var9 = function() {
        var1 = null;
        _closure1_slot25 = var1;
        var1 = _closure1_slot32;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CLEAR_IN_APP_NOTIFICATION = var9;
    var1.ENQUEUE_IN_APP_NOTIFICATION = var8;
    var8 = function arg0() {
        _fun69551: for (var _fun69551_ip = 0;;) switch (_fun69551_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channelId;
                var _closure2_slot0 = var1;
                var2 = function arg0() {
                    _fun69552: for (var _fun69552_ip = 0;;) switch (_fun69552_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var0 = _closure1_slot21;
                            var0 = var0.MESSAGE;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun69552_ip = 49;
                                continue _fun69552
                            }
                        case 28:
                            var3 = var2.channel;
                            var4 = var3.id;
                            var3 = _closure2_slot0;
                            var0 = var4 === var3;
                        case 49:
                            if (var0) {
                                _fun69552_ip = 93;
                                continue _fun69552
                            }
                        case 52:
                            var4 = var2.type;
                            var3 = _closure1_slot21;
                            var3 = var3.MESSAGE_FAILED_TO_SEND;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun69552_ip = 90;
                                continue _fun69552
                            }
                        case 74:
                            var5 = var2.channelId;
                            var4 = _closure2_slot0;
                            var3 = var5 === var4;
                        case 90:
                            var0 = var3;
                        case 93:
                            if (var0) {
                                _fun69552_ip = 142;
                                continue _fun69552
                            }
                        case 96:
                            var3 = var2.type;
                            var1 = _closure1_slot21;
                            var1 = var1.ALERT;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun69552_ip = 139;
                                continue _fun69552
                            }
                        case 118:
                            var2 = var2.channel;
                            var3 = var2.id;
                            var2 = _closure2_slot0;
                            var1 = var3 === var2;
                        case 139:
                            var0 = var1;
                        case 142:
                            return var0;
                    }
                };
                var3 = _closure1_slot25;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun69551_ip = 48;
                    continue _fun69551
                }
            case 37:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 48:
                if (!var1) {
                    _fun69551_ip = 73;
                    continue _fun69551
                }
            case 51:
                var5 = _closure1_slot31;
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = 'notification_clicked';
                var1 = var5.bind(var3)(var4, var1);
            case 73:
                var1 = _closure1_slot33;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun69553: for (var _fun69553_ip = 0;;) switch (_fun69553_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var1 = var1.chatOpen;
                var _closure2_slot1 = var1;
                var2 = function arg0() {
                    _fun69554: for (var _fun69554_ip = 0;;) switch (_fun69554_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot21;
                            var0 = var0.MESSAGE;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun69554_ip = 49;
                                continue _fun69554
                            }
                        case 28:
                            var1 = var1.channel;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 49:
                            if (!var0) {
                                _fun69554_ip = 59;
                                continue _fun69554
                            }
                        case 52:
                            var0 = _closure2_slot1;
                        case 59:
                            return var0;
                    }
                };
                var3 = _closure1_slot25;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun69553_ip = 58;
                    continue _fun69553
                }
            case 47:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 58:
                if (!var1) {
                    _fun69553_ip = 83;
                    continue _fun69553
                }
            case 61:
                var5 = _closure1_slot31;
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = 'notification_clicked';
                var1 = var5.bind(var3)(var4, var1);
            case 83:
                var1 = _closure1_slot33;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.CHANNEL_RTC_UPDATE_CHAT_OPEN = var8;
    var3 = function() {
        _fun69555: for (var _fun69555_ip = 0;;) switch (_fun69555_ip) {
            case 0:
                var2 = function arg0() {
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot21;
                    var0 = var0.MESSAGE;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = _closure1_slot25;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun69555_ip = 36;
                    continue _fun69555
                }
            case 25:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 36:
                if (!var1) {
                    _fun69555_ip = 61;
                    continue _fun69555
                }
            case 39:
                var5 = _closure1_slot31;
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = 'settings_updated';
                var1 = var5.bind(var3)(var4, var1);
            case 61:
                var1 = _closure1_slot33;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 42;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/native/InAppNotificationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1371, 3909, 8679, 4661, 1310, 7841, 1372, 1410, 8680, 1661, 1613, 660, 7878, 6695, 6693, 3006, 22, 8681, 6637, 8682, 7998, 3881, 8688, 8689, 3933, 8690, 8691, 8695, 667, 3424, 1348, 1311, 8696, 8698, 4268, 566, 806, 2]);