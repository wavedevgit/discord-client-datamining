// modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.UpcomingGuildEventNoticeTypes;
    var _closure1_slot2 = var6;
    var6 = var3.NEW_EVENT_WINDOW_MILLISECONDS;
    var _closure1_slot3 = var6;
    var6 = var3.EVENT_STARTING_SOON_WINDOW_MILLISECONDS;
    var _closure1_slot4 = var6;
    var3 = var3.ACKED_RECENTLY_WINDOW_DAYS;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/GuildScheduledEventUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun65093: for (var _fun65093_ip = 0;;) switch (_fun65093_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var5 = arg2;
                var2 = arg3;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 1;
                var0 = var0[var9];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var0 = global;
                var10 = var0.Date;
                var16 = var8.scheduled_start_time;
                var7 = var10.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var10
                    }
                });
                var17 = var7;
                var4 = new var17[var10](var16, var15);
                var7 = var4 instanceof Object ? var4 : var7;
                var4 = var7.getTime;
                var7 = var4.bind(var7)();
                var4 = {};
                var10 = _closure1_slot4;
                var10 = var7 - var10;
                var4.start = var10;
                var4.end = var7;
                var13 = var11.isBetween;
                var12 = var4.start;
                var10 = var4.end;
                var10 = var13.bind(var11)(var12, var10);
                if (var10) {
                    _fun65093_ip = 237;
                    continue _fun65093
                }
            case 128:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 2;
                var10 = var13[var10];
                var12 = var12.bind(var3)(var10);
                var10 = var12.extractTimestamp;
                var8 = var8.id;
                var10 = var10.bind(var12)(var8);
                var12 = var0.Math;
                var8 = var12.min;
                var0 = null;
                var13 = var10;
                if (!(var0 != var5)) {
                    _fun65093_ip = 187;
                    continue _fun65093
                }
            case 184:
                var13 = var5;
            case 187:
                var5 = _closure1_slot3;
                var5 = var13 + var5;
                var8 = var8.bind(var12)(var5, var7);
                var5 = var11.isBetween;
                var5 = var5.bind(var11)(var10, var8);
                if (!var5) {
                    _fun65093_ip = 235;
                    continue _fun65093
                }
            case 216:
                if (!(var0 == var6)) {
                    _fun65093_ip = 235;
                    continue _fun65093
                }
            case 220:
                if (var2) {
                    _fun65093_ip = 235;
                    continue _fun65093
                }
            case 223:
                var0 = _closure1_slot2;
                var0 = var0.NEW_EVENT;
                return var0;
            case 235:
                return var3;
            case 237:
                var0 = null;
                if (!(var0 == var6)) {
                    _fun65093_ip = 255;
                    continue _fun65093
                }
            case 243:
                var0 = _closure1_slot2;
                var0 = var0.EVENT_STARTING_SOON;
                return var0;
            case 255:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var9];
                var5 = var8.bind(var3)(var5);
                var6 = var5.bind(var3)(var6);
                var10 = var6.isBetween;
                var5 = var4.start;
                var4 = var4.end;
                var5 = var10.bind(var6)(var5, var4);
                var4 = var6.isBetween;
                var0 = var0[var9];
                var0 = var8.bind(var3)(var0);
                var10 = var0.bind(var3)(var7);
                var9 = var10.subtract;
                var8 = _closure1_slot5;
                var0 = 'days';
                var0 = var9.bind(var10)(var8, var0);
                var4 = var4.bind(var6)(var0, var7);
                var0 = undefined;
                if (var5) {
                    _fun65093_ip = 368;
                    continue _fun65093
                }
            case 350:
                if (!var4) {
                    _fun65093_ip = 358;
                    continue _fun65093
                }
            case 353:
                var0 = undefined;
                if (!var2) {
                    _fun65093_ip = 368;
                    continue _fun65093
                }
            case 358:
                var1 = _closure1_slot2;
                var0 = var1.EVENT_STARTING_SOON;
            case 368:
                return var0;
        }
    };
    var2.getNextShownUpcomingEventNoticeType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1378, 3047, 21, 2]);