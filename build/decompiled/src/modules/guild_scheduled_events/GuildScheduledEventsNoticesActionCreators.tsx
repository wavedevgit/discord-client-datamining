// modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun110685: for (var _fun110685_ip = 0;;) switch (_fun110685_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.eventId;
                var3 = var0.stageId;
                var1 = null;
                var0 = var1 == var4;
                if (!var0) {
                    _fun110685_ip = 28;
                    continue _fun110685
                }
            case 24:
                var0 = var1 == var3;
            case 28:
                if (var0) {
                    _fun110685_ip = 87;
                    continue _fun110685
                }
            case 31:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'LIVE_CHANNEL_NOTICE_HIDE';
                var0.type = var5;
                var0.eventId = var4;
                var0.stageId = var3;
                var0 = var1.bind(var2)(var0);
            case 87:
                var0 = undefined;
                return var0;
        }
    };
    var2.hideLiveChannelNotice = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPCOMING_GUILD_EVENT_NOTICE_HIDE';
        var1.type = var4;
        var4 = arg0;
        var1.eventId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideUpcomingEventNotice = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPCOMING_GUILD_EVENT_NOTICE_SEEN';
        var1.type = var4;
        var4 = arg0;
        var1.guildEventId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.markUpcomingEventNoticeAsSeen = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EVENT_BANNER_DISMISS';
        var1.type = var4;
        var4 = arg0;
        var1.eventId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissEventBanner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);