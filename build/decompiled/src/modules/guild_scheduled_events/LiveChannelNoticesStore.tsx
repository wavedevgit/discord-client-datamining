// modules/guild_scheduled_events/LiveChannelNoticesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun101965: for (var _fun101965_ip = 0;;) switch (_fun101965_ip) {
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
                _fun101965_ip = 76;
                continue _fun101965;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildScheduledEventStatus;
    var _closure1_slot5 = var1;
    var1 = {};
    var7 = new Array(0);
    var1.hiddenEventsAndStages = var7;
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun101969: for (var _fun101969_ip = 0;;) switch (_fun101969_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun101969_ip = 69;
                        continue _fun101969
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun101969_ip = 105;
                    continue _fun101969;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun101970: for (var _fun101970_ip = 0;;) switch (_fun101970_ip) {
                case 0:
                    var1 = arg0;
                    var3 = null;
                    var0 = var3 != var1;
                    if (!var0) {
                        _fun101970_ip = 22;
                        continue _fun101970
                    }
                case 12:
                    var2 = var1.hiddenEventsAndStages;
                    var0 = var3 != var2;
                case 22:
                    if (!var0) {
                        _fun101970_ip = 32;
                        continue _fun101970
                    }
                case 25:
                    _closure1_slot6 = var1;
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLiveChannelNoticeHidden';
        var4.key = var6;
        var6 = function arg0() {
            _fun101971: for (var _fun101971_ip = 0;;) switch (_fun101971_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.eventId;
                    var7 = var0.stageId;
                    var1 = null;
                    var2 = var1 == var7;
                    if (var2) {
                        _fun101971_ip = 74;
                        continue _fun101971
                    }
                case 24:
                    var0 = _closure1_slot6;
                    var4 = var0.hiddenEventsAndStages;
                    var3 = var4.includes;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'stage-';
                    var0 = var5.bind(var0)(var7);
                    var0 = var3.bind(var4)(var0);
                    var2 = !var0;
                case 74:
                    var0 = !var2;
                    if (!var2) {
                        _fun101971_ip = 137;
                        continue _fun101971
                    }
                case 80:
                    var1 = var1 != var6;
                    if (!var1) {
                        _fun101971_ip = 134;
                        continue _fun101971
                    }
                case 87:
                    var2 = _closure1_slot6;
                    var4 = var2.hiddenEventsAndStages;
                    var3 = var4.includes;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'event-';
                    var2 = var5.bind(var2)(var6);
                    var1 = var3.bind(var4)(var2);
                case 134:
                    var0 = var1;
                case 137:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LiveChannelNoticesStore';
    var7.displayName = var1;
    var1 = 'liveChannelNotices_v2';
    var7.persistKey = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun101973: for (var _fun101973_ip = 0;;) switch (_fun101973_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.eventId;
                var5 = var0.stageId;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun101973_ip = 74;
                    continue _fun101973
                }
            case 21:
                if (!(var0 != var5)) {
                    _fun101973_ip = 121;
                    continue _fun101973
                }
            case 25:
                var0 = _closure1_slot6;
                var2 = var0.hiddenEventsAndStages;
                var1 = var2.push;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'stage-';
                var0 = var3.bind(var0)(var5);
                var0 = var1.bind(var2)(var0);
                _fun101973_ip = 121;
                continue _fun101973;
            case 74:
                var0 = _closure1_slot6;
                var2 = var0.hiddenEventsAndStages;
                var1 = var2.push;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'event-';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 121:
                var0 = undefined;
                return var0;
        }
    };
    var1.LIVE_CHANNEL_NOTICE_HIDE = var8;
    var8 = function arg0() {
        _fun101974: for (var _fun101974_ip = 0;;) switch (_fun101974_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guildScheduledEvent;
                var3 = var4.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'event-';
                var5 = var2.bind(var1)(var3);
                var _closure2_slot0 = var5;
                var2 = _closure1_slot6;
                var3 = var2.hiddenEventsAndStages;
                var2 = var3.includes;
                var2 = var2.bind(var3)(var5);
                var2 = !var2;
                if (var2) {
                    _fun101974_ip = 117;
                    continue _fun101974
                }
            case 73:
                var5 = var4.status;
                var3 = _closure1_slot5;
                var3 = var3.CANCELED;
                var3 = var5 !== var3;
                if (!var3) {
                    _fun101974_ip = 114;
                    continue _fun101974
                }
            case 95:
                var5 = var4.status;
                var4 = _closure1_slot5;
                var4 = var4.COMPLETED;
                var3 = var5 !== var4;
            case 114:
                var2 = var3;
            case 117:
                if (var2) {
                    _fun101974_ip = 153;
                    continue _fun101974
                }
            case 120:
                var1 = _closure1_slot6;
                var3 = var1.hiddenEventsAndStages;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var1.hiddenEventsAndStages = var0;
            case 153:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_UPDATE = var8;
    var8 = function arg0() {
        _fun101976: for (var _fun101976_ip = 0;;) switch (_fun101976_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guildScheduledEvent;
                var3 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'event-';
                var4 = var2.bind(var1)(var3);
                var _closure2_slot0 = var4;
                var2 = _closure1_slot6;
                var3 = var2.hiddenEventsAndStages;
                var2 = var3.includes;
                var2 = var2.bind(var3)(var4);
                if (!var2) {
                    _fun101976_ip = 103;
                    continue _fun101976
                }
            case 70:
                var1 = _closure1_slot6;
                var3 = var1.hiddenEventsAndStages;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var1.hiddenEventsAndStages = var0;
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_DELETE = var8;
    var3 = function arg0() {
        _fun101978: for (var _fun101978_ip = 0;;) switch (_fun101978_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.instance;
                var3 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'stage-';
                var4 = var2.bind(var1)(var3);
                var _closure2_slot0 = var4;
                var2 = _closure1_slot6;
                var3 = var2.hiddenEventsAndStages;
                var2 = var3.includes;
                var2 = var2.bind(var3)(var4);
                if (!var2) {
                    _fun101978_ip = 103;
                    continue _fun101978
                }
            case 70:
                var1 = _closure1_slot6;
                var3 = var1.hiddenEventsAndStages;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var1.hiddenEventsAndStages = var0;
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var1.STAGE_INSTANCE_DELETE = var3;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/LiveChannelNoticesStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1378, 566, 806, 2]);