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
        _fun70027: for (var _fun70027_ip = 0;;) switch (_fun70027_ip) {
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
                _fun70027_ip = 76;
                continue _fun70027;
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
        _fun70030: for (var _fun70030_ip = 0;;) switch (_fun70030_ip) {
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
                    _fun70030_ip = 44;
                    continue _fun70030
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
                    _fun70030_ip = 353;
                    continue _fun70030
                }
            case 91:
                var0 = null;
                if (!(var0 != var11)) {
                    _fun70030_ip = 353;
                    continue _fun70030
                }
            case 100:
                var2 = _closure1_slot15;
                var1 = var2.getGuild;
                var7 = var1.bind(var2)(var11);
                var _closure2_slot0 = var7;
                if (!(var0 != var7)) {
                    _fun70030_ip = 349;
                    continue _fun70030
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
                    _fun70030_ip = 347;
                    continue _fun70030
                }
            case 178:
                var2 = _closure1_slot17;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = var8.id;
                var1 = var2 !== var1;
                if (!var1) {
                    _fun70030_ip = 344;
                    continue _fun70030
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
                    _fun70030_ip = 341;
                    continue _fun70030
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
        _fun70032: for (var _fun70032_ip = 0;;) switch (_fun70032_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.notification;
                var2 = _closure1_slot26;
                var1 = var2.enqueue;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot25;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun70032_ip = 47;
                    continue _fun70032
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
        var0 = 40;
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
        _fun70034: for (var _fun70034_ip = 0;;) switch (_fun70034_ip) {
            case 0:
                var7 = arg0;
                var3 = var7.type;
                var0 = _closure1_slot21;
                var0 = var0.MESSAGE;
                if (!(var0 !== var3)) {
                    _fun70034_ip = 221;
                    continue _fun70034
                }
            case 28:
                var0 = _closure1_slot21;
                var0 = var0.ALERT;
                if (!(var0 !== var3)) {
                    _fun70034_ip = 221;
                    continue _fun70034
                }
            case 45:
                var0 = _closure1_slot21;
                var0 = var0.REACTION;
                if (!(var0 !== var3)) {
                    _fun70034_ip = 221;
                    continue _fun70034
                }
            case 62:
                var0 = _closure1_slot21;
                var0 = var0.FORUM_THREAD_CREATED;
                if (!(var0 !== var3)) {
                    _fun70034_ip = 171;
                    continue _fun70034
                }
            case 76:
                var0 = _closure1_slot21;
                var0 = var0.MESSAGE_FAILED_TO_SEND;
                if (!(var0 !== var3)) {
                    _fun70034_ip = 162;
                    continue _fun70034
                }
            case 90:
                var0 = _closure1_slot21;
                var2 = var0.MESSAGE_REMINDER;
                var6 = undefined;
                var5 = undefined;
                if (!(var2 === var3)) {
                    _fun70034_ip = 293;
                    continue _fun70034
                }
            case 111:
                var3 = var7.channel;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun70034_ip = 132;
                    continue _fun70034
                }
            case 127:
                var2 = var3.guild_id;
            case 132:
                var3 = var7.channel;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun70034_ip = 151;
                    continue _fun70034
                }
            case 146:
                var0 = var3.id;
            case 151:
                var5 = var0;
                var6 = var2;
                _fun70034_ip = 293;
                continue _fun70034;
            case 162:
                var5 = var7.channelId;
                var6 = undefined;
                _fun70034_ip = 293;
                continue _fun70034;
            case 171:
                var3 = var7.thread;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun70034_ip = 193;
                    continue _fun70034
                }
            case 188:
                var2 = var3.guild_id;
            case 193:
                var3 = var7.thread;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun70034_ip = 213;
                    continue _fun70034
                }
            case 208:
                var0 = var3.id;
            case 213:
                var5 = var0;
                var6 = var2;
                _fun70034_ip = 293;
                continue _fun70034;
            case 221:
                var3 = var7.guild;
                var4 = null;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun70034_ip = 242;
                    continue _fun70034
                }
            case 237:
                var2 = var3.id;
            case 242:
                if (!(var4 == var2)) {
                    _fun70034_ip = 268;
                    continue _fun70034
                }
            case 246:
                var8 = var7.channel;
                var9 = var4 == var8;
                var3 = undefined;
                if (var9) {
                    _fun70034_ip = 265;
                    continue _fun70034
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
                    _fun70034_ip = 287;
                    continue _fun70034
                }
            case 282:
                var0 = var3.id;
            case 287:
                var5 = var0;
                var6 = var2;
            case 293:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 40;
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
        _fun70036: for (var _fun70036_ip = 0;;) switch (_fun70036_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot26;
                var1 = var2.removeAll;
                var1 = var1.bind(var2)(var4);
                var1 = _closure1_slot25;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun70036_ip = 47;
                    continue _fun70036
                }
            case 33:
                var3 = _closure1_slot25;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                if (var3) {
                    _fun70036_ip = 71;
                    continue _fun70036
                }
            case 47:
                var3 = _closure1_slot25;
                if (!(var2 == var3)) {
                    _fun70036_ip = 67;
                    continue _fun70036
                }
            case 55:
                var4 = _closure1_slot32;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun70036_ip = 83;
                continue _fun70036;
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
            _fun70040: for (var _fun70040_ip = 0;;) switch (_fun70040_ip) {
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
                        _fun70040_ip = 143;
                        continue _fun70040
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
            _fun70041: for (var _fun70041_ip = 0;;) switch (_fun70041_ip) {
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
                        _fun70041_ip = 208;
                        continue _fun70041
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
                        _fun70041_ip = 206;
                        continue _fun70041
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
            _fun70043: for (var _fun70043_ip = 0;;) switch (_fun70043_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun70043_ip = 15;
                        continue _fun70043
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
            _fun70044: for (var _fun70044_ip = 0;;) switch (_fun70044_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isFull;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun70044_ip = 34;
                        continue _fun70044
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
    var1 = 41;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun70049: for (var _fun70049_ip = 0;;) switch (_fun70049_ip) {
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
                        _fun70049_ip = 69;
                        continue _fun70049
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun70049_ip = 105;
                    continue _fun70049;
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
    var1 = 42;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.POST_CONNECTION_OPEN = var9;
    var1.GUILD_UPDATE = var9;
    var9 = function arg0() {
        _fun70052: for (var _fun70052_ip = 0;;) switch (_fun70052_ip) {
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
                    _fun70052_ip = 62;
                    continue _fun70052
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
                    _fun70052_ip = 122;
                    continue _fun70052
                }
            case 90:
                var2 = _closure1_slot22;
                var7 = var2.SELF_MENTIONABLE_SYSTEM;
                var6 = var7.has;
                var2 = var5.type;
                var2 = var6.bind(var7)(var2);
                if (var2) {
                    _fun70052_ip = 122;
                    continue _fun70052
                }
            case 118:
                var2 = false;
                return var2;
            case 122:
                if (var0) {
                    _fun70052_ip = 720;
                    continue _fun70052
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
                    _fun70052_ip = 720;
                    continue _fun70052
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
                    _fun70052_ip = 720;
                    continue _fun70052
                }
            case 200:
                var2 = _closure1_slot9;
                var0 = var2.getChatOpen;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun70052_ip = 720;
                    continue _fun70052
                }
            case 221:
                var2 = _closure1_slot13;
                var0 = var2.getState;
                var2 = var0.bind(var2)();
                var0 = var2.isVoicePanelFullscreen;
                var0 = var0.bind(var2)();
                var6 = true;
                if (var0) {
                    _fun70052_ip = 392;
                    continue _fun70052
                }
            case 253:
                var2 = _closure1_slot8;
                var0 = var2.getConnectedActivityLocation;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70052_ip = 303;
                    continue _fun70052
                }
            case 273:
                var8 = _closure1_slot8;
                var2 = var8.getActivityPanelMode;
                var8 = var2.bind(var8)();
                var2 = _closure1_slot23;
                var2 = var2.PANEL;
                var6 = true;
                if (!(var8 !== var2)) {
                    _fun70052_ip = 392;
                    continue _fun70052
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
                    _fun70052_ip = 353;
                    continue _fun70052
                }
            case 340:
                var2 = var8.isReady;
                var2 = var2.bind(var8)();
                var0 = !var2;
            case 353:
                if (var0) {
                    _fun70052_ip = 389;
                    continue _fun70052
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
                    _fun70052_ip = 429;
                    continue _fun70052
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
                    _fun70052_ip = 716;
                    continue _fun70052
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
                    _fun70052_ip = 681;
                    continue _fun70052
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
        _fun70054: for (var _fun70054_ip = 0;;) switch (_fun70054_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.message;
                var5 = var1.route;
                var0 = var1.emoji;
                var _closure2_slot0 = var0;
                var9 = var1.reactorUserId;
                var1 = null;
                if (!(var1 != var11)) {
                    _fun70054_ip = 893;
                    continue _fun70054
                }
            case 41:
                var2 = var11.reactions;
                if (!(var1 != var2)) {
                    _fun70054_ip = 893;
                    continue _fun70054
                }
            case 54:
                if (!(var1 != var0)) {
                    _fun70054_ip = 893;
                    continue _fun70054
                }
            case 61:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 24;
                var2 = var2[var7];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.allowInAppNotifications;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun70054_ip = 893;
                    continue _fun70054
                }
            case 102:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 34;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.tryParseChannelPath;
                var2 = var2.bind(var3)(var5);
                if (!(var1 == var2)) {
                    _fun70054_ip = 151;
                    continue _fun70054
                }
            case 137:
                var2 = {
                    'channelId': null,
                    'guildId': null
                };
            case 151:
                var3 = var2.channelId;
                var2 = var2.guildId;
                if (!(var1 != var3)) {
                    _fun70054_ip = 889;
                    continue _fun70054
                }
            case 168:
                var6 = _closure1_slot17;
                var5 = var6.getCurrentlySelectedChannelId;
                var5 = var5.bind(var6)();
                if (!(var5 !== var3)) {
                    _fun70054_ip = 889;
                    continue _fun70054
                }
            case 189:
                if (!(var1 != var2)) {
                    _fun70054_ip = 889;
                    continue _fun70054
                }
            case 196:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 35;
                var5 = var10[var5];
                var5 = var8.bind(var4)(var5);
                var6 = var5.ReactionNotifications;
                var5 = var6.getSetting;
                var6 = var5.bind(var6)();
                var5 = 36;
                var5 = var10[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.ReactionNotificationType;
                var5 = var5.NOTIFICATIONS_DISABLED;
                if (!(var6 !== var5)) {
                    _fun70054_ip = 885;
                    continue _fun70054
                }
            case 263:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var4)(var5);
                var5 = var6.shouldNotify;
                var5 = var5.bind(var6)(var11, var3);
                if (var5) {
                    _fun70054_ip = 299;
                    continue _fun70054
                }
            case 295:
                var5 = false;
                return var5;
            case 299:
                var6 = _closure1_slot14;
                var5 = var6.getChannel;
                var8 = var5.bind(var6)(var3);
                var6 = var1 == var8;
                var5 = undefined;
                if (var6) {
                    _fun70054_ip = 327;
                    continue _fun70054
                }
            case 322:
                var5 = var8.type;
            case 327:
                var5 = var1 != var5;
                if (!var5) {
                    _fun70054_ip = 353;
                    continue _fun70054
                }
            case 334:
                var7 = var8.type;
                var6 = _closure1_slot20;
                var6 = var6.GUILD_ANNOUNCEMENT;
                var5 = var7 === var6;
            case 353:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 37;
                var6 = var10[var6];
                var12 = var7.bind(var4)(var6);
                var10 = var12.isReactionMilestoneNotification;
                var7 = var11.reactions;
                var14 = var1 == var8;
                var6 = undefined;
                if (var14) {
                    _fun70054_ip = 399;
                    continue _fun70054
                }
            case 394:
                var6 = var8.type;
            case 399:
                var6 = var10.bind(var12)(var7, var6);
                if (var5) {
                    _fun70054_ip = 411;
                    continue _fun70054
                }
            case 408:
                var5 = var6;
            case 411:
                var5 = !var5;
                var7 = _closure1_slot15;
                var6 = var7.getGuild;
                var10 = var6.bind(var7)(var2);
                var7 = _closure1_slot18;
                var6 = var7.getUser;
                var9 = var6.bind(var7)(var9);
                if (!(var1 != var8)) {
                    _fun70054_ip = 881;
                    continue _fun70054
                }
            case 450:
                if (!(var1 == var9)) {
                    _fun70054_ip = 460;
                    continue _fun70054
                }
            case 454:
                if (var5) {
                    _fun70054_ip = 881;
                    continue _fun70054
                }
            case 460:
                var12 = var11.reactions;
                var7 = var12.find;
                var6 = function(arg0) { // Environment: var13
                    _fun70055: for (var _fun70055_ip = 0;;) switch (_fun70055_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.emoji;
                            var3 = var0.id;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun70055_ip = 48;
                                continue _fun70055
                            }
                        case 33:
                            var3 = _closure2_slot0;
                            var4 = var3.id;
                            var3 = null;
                            var0 = var3 != var4;
                        case 48:
                            if (var0) {
                                _fun70055_ip = 75;
                                continue _fun70055
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
                var6 = var7.bind(var12)(var6);
                var12 = var1 != var6;
                var7 = undefined;
                if (!var12) {
                    _fun70054_ip = 495;
                    continue _fun70054
                }
            case 492:
                var7 = var6;
            case 495:
                if (!(var1 == var7)) {
                    _fun70054_ip = 505;
                    continue _fun70054
                }
            case 499:
                if (var5) {
                    _fun70054_ip = 877;
                    continue _fun70054
                }
            case 505:
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 28;
                var5 = var12[var5];
                var12 = var6.bind(var4)(var5);
                var6 = var12.getConfig;
                var5 = {};
                var14 = 'inAppNotificationNegativeTest';
                var5.location = var14;
                var5 = var6.bind(var12)(var5);
                var5 = var5.shouldSuppress;
                if (var5) {
                    _fun70054_ip = 852;
                    continue _fun70054
                }
            case 560:
                var6 = var8.type;
                var5 = _closure1_slot20;
                var5 = var5.GROUP_DM;
                if (!(var6 === var5)) {
                    _fun70054_ip = 686;
                    continue _fun70054
                }
            case 579:
                var6 = _closure1_slot18;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var12 = var11.author;
                var14 = var1 == var12;
                var5 = undefined;
                if (var14) {
                    _fun70054_ip = 612;
                    continue _fun70054
                }
            case 607:
                var5 = var12.id;
            case 612:
                var12 = var1 == var6;
                var1 = undefined;
                if (var12) {
                    _fun70054_ip = 626;
                    continue _fun70054
                }
            case 621:
                var1 = var6.id;
            case 626:
                if (!(var5 !== var1)) {
                    _fun70054_ip = 686;
                    continue _fun70054
                }
            case 630:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 38;
                var1 = var6[var1];
                var6 = var5.bind(var4)(var1);
                var5 = var6.getConfig;
                var1 = {};
                var12 = 'handleReactionAdd';
                var1.location = var12;
                var1 = var5.bind(var6)(var1);
                var1 = var1.showSettingsToggle;
                if (var1) {
                    _fun70054_ip = 686;
                    continue _fun70054
                }
            case 682:
                var1 = false;
                return var1;
            case 686:
                var5 = _closure1_slot29;
                var1 = {};
                var6 = {};
                var12 = _closure1_slot21;
                var12 = var12.REACTION;
                var6.type = var12;
                var6.key = var3;
                var15 = _closure1_slot1;
                var12 = _closure1_slot2;
                var14 = 33;
                var14 = var12[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.Millis;
                var15 = var14.SECOND;
                var14 = 5;
                var14 = var14 * var15;
                var6.duration = var14;
                var13 = function() {
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
                var6.onDismiss = var13;
                var6.channel = var8;
                var6.guild = var10;
                var6.user = var9;
                var10 = _closure1_slot0;
                var9 = 29;
                var9 = var12[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.createMessageRecord;
                var9 = var9.bind(var10)(var11);
                var6.message = var9;
                var10 = _closure1_slot14;
                var9 = var10.getChannel;
                var8 = var8.parent_id;
                var8 = var9.bind(var10)(var8);
                var6.parentChannel = var8;
                var6.reaction = var7;
                var1.notification = var6;
                var1 = var5.bind(var4)(var1);
                return var4;
            case 852:
                var1 = _closure1_slot30;
                var0 = _closure1_slot21;
                var0 = var0.REACTION;
                var0 = var1.bind(var4)(var0, var3, var2);
                var0 = false;
                return var0;
            case 877:
                var0 = false;
                return var0;
            case 881:
                var0 = false;
                return var0;
            case 885:
                var0 = false;
                return var0;
            case 889:
                var0 = false;
                return var0;
            case 893:
                var0 = false;
                return var0;
        }
    };
    var1.REACTION_NOTIFICATION_SENT = var9;
    var9 = function arg0() {
        _fun70057: for (var _fun70057_ip = 0;;) switch (_fun70057_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.savedMessage;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 39;
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
                    _fun70057_ip = 292;
                    continue _fun70057
                }
            case 78:
                var2 = var4.message;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun70057_ip = 292;
                    continue _fun70057
                }
            case 92:
                var5 = _closure1_slot14;
                var3 = var5.getChannel;
                var2 = var4.saveData;
                var2 = var2.channelId;
                var5 = var3.bind(var5)(var2);
                if (!(var1 != var5)) {
                    _fun70057_ip = 292;
                    continue _fun70057
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
        _fun70059: for (var _fun70059_ip = 0;;) switch (_fun70059_ip) {
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
                    _fun70059_ip = 405;
                    continue _fun70059
                }
            case 46:
                var5 = var2.isForumLikeChannel;
                var5 = var5.bind(var2)();
                if (!var5) {
                    _fun70059_ip = 405;
                    continue _fun70059
                }
            case 62:
                if (var1) {
                    _fun70059_ip = 69;
                    continue _fun70059
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
                    _fun70059_ip = 162;
                    continue _fun70059
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
                    _fun70059_ip = 166;
                    continue _fun70059
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
                    _fun70059_ip = 401;
                    continue _fun70059
                }
            case 194:
                var7 = _closure1_slot15;
                var5 = var7.getGuild;
                var1 = var2.guild_id;
                var8 = var5.bind(var7)(var1);
                var0 = var0 != var8;
                if (!var0) {
                    _fun70059_ip = 399;
                    continue _fun70059
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
                    _fun70059_ip = 363;
                    continue _fun70059
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
                _fun70059_ip = 396;
                continue _fun70059;
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
        _fun70062: for (var _fun70062_ip = 0;;) switch (_fun70062_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channelId;
                var _closure2_slot0 = var1;
                var2 = function arg0() {
                    _fun70063: for (var _fun70063_ip = 0;;) switch (_fun70063_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var0 = _closure1_slot21;
                            var0 = var0.MESSAGE;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun70063_ip = 49;
                                continue _fun70063
                            }
                        case 28:
                            var3 = var2.channel;
                            var4 = var3.id;
                            var3 = _closure2_slot0;
                            var0 = var4 === var3;
                        case 49:
                            if (var0) {
                                _fun70063_ip = 93;
                                continue _fun70063
                            }
                        case 52:
                            var4 = var2.type;
                            var3 = _closure1_slot21;
                            var3 = var3.MESSAGE_FAILED_TO_SEND;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun70063_ip = 90;
                                continue _fun70063
                            }
                        case 74:
                            var5 = var2.channelId;
                            var4 = _closure2_slot0;
                            var3 = var5 === var4;
                        case 90:
                            var0 = var3;
                        case 93:
                            if (var0) {
                                _fun70063_ip = 142;
                                continue _fun70063
                            }
                        case 96:
                            var3 = var2.type;
                            var1 = _closure1_slot21;
                            var1 = var1.ALERT;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun70063_ip = 139;
                                continue _fun70063
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
                    _fun70062_ip = 48;
                    continue _fun70062
                }
            case 37:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 48:
                if (!var1) {
                    _fun70062_ip = 73;
                    continue _fun70062
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
        _fun70064: for (var _fun70064_ip = 0;;) switch (_fun70064_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var1 = var1.chatOpen;
                var _closure2_slot1 = var1;
                var2 = function arg0() {
                    _fun70065: for (var _fun70065_ip = 0;;) switch (_fun70065_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot21;
                            var0 = var0.MESSAGE;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun70065_ip = 49;
                                continue _fun70065
                            }
                        case 28:
                            var1 = var1.channel;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 49:
                            if (!var0) {
                                _fun70065_ip = 59;
                                continue _fun70065
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
                    _fun70064_ip = 58;
                    continue _fun70064
                }
            case 47:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 58:
                if (!var1) {
                    _fun70064_ip = 83;
                    continue _fun70064
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
        _fun70066: for (var _fun70066_ip = 0;;) switch (_fun70066_ip) {
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
                    _fun70066_ip = 36;
                    continue _fun70066
                }
            case 25:
                var4 = _closure1_slot25;
                var3 = undefined;
                var1 = var2.bind(var3)(var4);
            case 36:
                if (!var1) {
                    _fun70066_ip = 61;
                    continue _fun70066
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
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/native/InAppNotificationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1371, 3947, 8764, 4703, 1310, 7907, 1372, 1410, 8765, 1675, 1621, 660, 7944, 6812, 6810, 3052, 22, 8766, 6753, 8767, 8065, 3919, 8773, 8774, 3969, 8775, 8776, 8780, 667, 3465, 1348, 1311, 8781, 8783, 8784, 4310, 566, 807, 2]);