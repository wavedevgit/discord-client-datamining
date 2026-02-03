// modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/saveGuildEventRecurrence.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun65430: for (var _fun65430_ip = 0;;) switch (_fun65430_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var10 = arg2;
                var1 = arg3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 0;
                var6 = var3[var12];
                var0 = undefined;
                var8 = var4.bind(var0)(var6);
                var6 = var8.getBaseScheduleForRecurrence;
                var9 = var6.bind(var8)(var7, var2);
                var3 = var3[var12];
                var8 = var4.bind(var0)(var3);
                var6 = var8.areDatesIdentical;
                var4 = var9.startDate;
                var3 = var10.startDate;
                var4 = var6.bind(var8)(var4, var3);
                var3 = null;
                var11 = null;
                if (var4) {
                    _fun65430_ip = 94;
                    continue _fun65430
                }
            case 88:
                var11 = var10.startDate;
            case 94:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var13 = var6.bind(var0)(var4);
                var8 = var13.areDatesIdentical;
                var6 = var9.endDate;
                var4 = var10.endDate;
                var4 = var8.bind(var13)(var6, var4);
                var8 = null;
                if (var4) {
                    _fun65430_ip = 146;
                    continue _fun65430
                }
            case 140:
                var8 = var10.endDate;
            case 146:
                if (!(var3 == var1)) {
                    _fun65430_ip = 324;
                    continue _fun65430
                }
            case 153:
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 2;
                var4 = var13[var4];
                var14 = var6.bind(var0)(var4);
                var4 = var14.extractTimestamp;
                var16 = var4.bind(var14)(var7);
                var4 = 1;
                var4 = var13[var4];
                var15 = var6.bind(var0)(var4);
                var14 = var15.createGuildEventException;
                var13 = {};
                var4 = global;
                var4 = var4.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var21 = var6;
                var20 = var16;
                var4 = new var21[var4](var20, var19);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.toISOString;
                var4 = var4.bind(var6)();
                var13.original_scheduled_start_time = var4;
                var6 = var3 == var11;
                var4 = undefined;
                if (var6) {
                    _fun65430_ip = 269;
                    continue _fun65430
                }
            case 259:
                var6 = var11.toISOString;
                var4 = var6.bind(var11)();
            case 269:
                var13.scheduled_start_time = var4;
                var6 = var3 == var8;
                var4 = undefined;
                if (var6) {
                    _fun65430_ip = 293;
                    continue _fun65430
                }
            case 283:
                var6 = var8.toISOString;
                var4 = var6.bind(var8)();
            case 293:
                var13.scheduled_end_time = var4;
                var4 = false;
                var13.is_canceled = var4;
                var6 = var2.guild_id;
                var4 = var2.id;
                var4 = var14.bind(var15)(var13, var6, var4);
                return var4;
            case 324:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var6 = var6.bind(var0)(var4);
                var4 = var6.areSchedulesIdentical;
                var4 = var4.bind(var6)(var10, var9);
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 1;
                var5 = var9[var5];
                var5 = var6.bind(var0)(var5);
                if (var4) {
                    _fun65430_ip = 468;
                    continue _fun65430
                }
            case 376:
                var6 = var5.updateGuildEventException;
                var4 = {};
                var10 = var3 == var11;
                var9 = undefined;
                if (var10) {
                    _fun65430_ip = 403;
                    continue _fun65430
                }
            case 393:
                var10 = var11.toISOString;
                var9 = var10.bind(var11)();
            case 403:
                var4.scheduled_start_time = var9;
                var3 = var3 == var8;
                var0 = undefined;
                if (var3) {
                    _fun65430_ip = 427;
                    continue _fun65430
                }
            case 417:
                var3 = var8.toISOString;
                var0 = var3.bind(var8)();
            case 427:
                var4.scheduled_end_time = var0;
                var0 = var1.is_canceled;
                var4.is_canceled = var0;
                var19 = var2.guild_id;
                var18 = var2.id;
                var21 = var5;
                var20 = var4;
                var17 = var7;
                var0 = var21[var6](var20, var19, var18, var17, var16);
                _fun65430_ip = 497;
                continue _fun65430;
            case 468:
                var4 = var5.deleteGuildEventException;
                var3 = var2.guild_id;
                var2 = var2.id;
                var1 = var1.event_exception_id;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 497:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8083, 8100, 21, 2]);