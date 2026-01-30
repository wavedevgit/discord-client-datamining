// modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun64827: for (var _fun64827_ip = 0;;) switch (_fun64827_ip) {
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
            case 70: // try_end0
                _fun64827_ip = 74;
                continue _fun64827;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: resetStateForEvent, environment: var3
        var2 = arg0;
        var0 = {};
        var4 = _closure1_slot11;
        var5 = var0;
        var3 = copyDataProperties(var5, var4);
        var3 = delete var0[var2];
        _closure1_slot11 = var0;
        var0 = {};
        var4 = _closure1_slot12;
        var5 = var0;
        var3 = copyDataProperties(var5, var4);
        var2 = delete var0[var2];
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.GuildScheduledEventStatus;
    var _closure1_slot9 = var7;
    var1 = var1.UpcomingGuildEventNoticeTypes;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: UpcomingEventNoticesStore, environment: var5
            _fun64832: for (var _fun64832_ip = 0;;) switch (_fun64832_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun64832_ip = 69;
                        continue _fun64832
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun64832_ip = 105;
                    continue _fun64832;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun64833: for (var _fun64833_ip = 0;;) switch (_fun64833_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var4 = var5.waitFor;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun64833_ip = 67;
                        continue _fun64833
                    }
                case 35:
                    var3 = var0.upcomingEventDismissals;
                    if (!(var2 == var3)) {
                        _fun64833_ip = 47;
                        continue _fun64833
                    }
                case 45:
                    var3 = {};
                case 47:
                    _closure1_slot11 = var3;
                    var0 = var0.upcomingEventSeenTimestamps;
                    if (!(var2 == var0)) {
                        _fun64833_ip = 63;
                        continue _fun64833
                    }
                case 61:
                    var0 = {};
                case 63:
                    _closure1_slot12 = var0;
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildEventNoticeDismissalTime';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAllEventDismissals';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUpcomingNoticeSeenTime';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAllUpcomingNoticeSeenTimes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot11;
            var0.upcomingEventDismissals = var2;
            var1 = _closure1_slot12;
            var0.upcomingEventSeenTimestamps = var1;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UpcomingEventNoticesStore';
    var7.displayName = var1;
    var1 = 'UpcomingEventNotices';
    var7.persistKey = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleHideNotice, environment: var3
        var0 = arg0;
        var3 = var0.eventId;
        var1 = {};
        var5 = _closure1_slot11;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var1[var3] = var2;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.UPCOMING_GUILD_EVENT_NOTICE_HIDE = var8;
    var8 = function(arg0) { // Original name: handleEventUpdate, environment: var3
        _fun64840: for (var _fun64840_ip = 0;;) switch (_fun64840_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildScheduledEvent;
                var3 = var0.status;
                var2 = _closure1_slot9;
                var2 = var2.CANCELED;
                var2 = var3 !== var2;
                if (!var2) {
                    _fun64840_ip = 53;
                    continue _fun64840
                }
            case 34:
                var4 = var0.status;
                var3 = _closure1_slot9;
                var3 = var3.COMPLETED;
                var2 = var4 !== var3;
            case 53:
                if (var2) {
                    _fun64840_ip = 72;
                    continue _fun64840
                }
            case 56:
                var2 = _closure1_slot14;
                var1 = var0.id;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleEventDelete, environment: var3
        var0 = arg0;
        var0 = var0.guildScheduledEvent;
        var2 = _closure1_slot14;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_SCHEDULED_EVENT_DELETE = var8;
    var8 = function(arg0) { // Original name: handleMaybeHideNewEventNotice, environment: var3
        _fun64842: for (var _fun64842_ip = 0;;) switch (_fun64842_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var3 = var0.guildEventId;
                var4 = _closure1_slot7;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                if (!(var2 === var0)) {
                    _fun64842_ip = 195;
                    continue _fun64842
                }
            case 38:
                var2 = _closure1_slot8;
                var0 = var2.getGuildScheduledEvent;
                var7 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var7)) {
                    _fun64842_ip = 195;
                    continue _fun64842
                }
            case 62:
                var4 = var7.status;
                var0 = _closure1_slot9;
                var0 = var0.SCHEDULED;
                if (!(var4 === var0)) {
                    _fun64842_ip = 195;
                    continue _fun64842
                }
            case 81:
                var0 = _closure1_slot11;
                var0 = var0[var3];
                if (!(var2 == var0)) {
                    _fun64842_ip = 195;
                    continue _fun64842
                }
            case 93:
                var0 = _closure1_slot12;
                var9 = var0[var3];
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 8;
                var0 = var4[var0];
                var5 = undefined;
                var4 = var2.bind(var5)(var0);
                var2 = var4.getNextShownUpcomingEventNoticeType;
                var8 = false;
                var12 = var4;
                var11 = var7;
                var10 = undefined;
                var2 = var12[var2](var11, var10, var9, var8, var7);
                var0 = _closure1_slot10;
                var0 = var0.NEW_EVENT;
                if (!(var2 === var0)) {
                    _fun64842_ip = 195;
                    continue _fun64842
                }
            case 157:
                var0 = {};
                var10 = _closure1_slot11;
                var11 = var0;
                var2 = copyDataProperties(var11, var10);
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var0[var3] = var2;
                _closure1_slot11 = var0;
            case 195:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_USER_ADD = var8;
    var3 = function(arg0) { // Original name: handleMarkUpcomingNoticeAsSeen, environment: var3
        var0 = arg0;
        var3 = var0.guildEventId;
        var1 = {};
        var5 = _closure1_slot12;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var1[var3] = var2;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.UPCOMING_GUILD_EVENT_NOTICE_SEEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3293, 1378, 8045, 566, 806, 2]);