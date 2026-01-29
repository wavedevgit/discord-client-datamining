// modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function(arg0, arg1) { // Original name: getExistingRsvp, environment: var1
        var2 = _closure1_slot2;
        var1 = var2.getId;
        var4 = var1.bind(var2)();
        var3 = _closure1_slot3;
        var2 = var3.getRsvp;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0, var4);
        return var0;
    };
    var _closure1_slot7 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var9 = 0;
    var3 = var7[var9];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var7[var8];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.GuildScheduledEventUserResponses;
    var _closure1_slot4 = var5;
    var3 = var3.GuildScheduledEventStatusDone;
    var _closure1_slot5 = var3;
    var3 = {};
    var3.SERIES = var9;
    var5 = 'SERIES';
    var3[var9] = var5;
    var3.RECURRENCE = var8;
    var5 = 'RECURRENCE';
    var3[var8] = var5;
    var _closure1_slot6 = var3;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getExistingRsvp = var4;
    var2.ResponseOptions = var3;
    var3 = function() { // Original name: getResponseOptions, environment: var1
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var2 = var8[var3];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.uoorxi;
        var2 = var4.bind(var5)(var2);
        var1.name = var2;
        var2 = _closure1_slot6;
        var0 = var2.SERIES;
        var1.value = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.lwZCFT;
        var3 = var4.bind(var5)(var3);
        var1.name = var3;
        var2 = var2.RECURRENCE;
        var1.value = var2;
        var0[1] = var1;
        return var0;
    };
    var2.getResponseOptions = var3;
    var1 = function(arg0) { // Original name: handleRsvp, environment: var1
        _fun65263: for (var _fun65263_ip = 0;;) switch (_fun65263_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.eventId;
                var3 = var0.recurrenceId;
                var5 = var0.guildId;
                var4 = var0.updateRsvp;
                var10 = var0.openRsvpPicker;
                var1 = var0.onRsvp;
                var2 = _closure1_slot3;
                var0 = var2.getGuildScheduledEvent;
                var8 = var0.bind(var2)(var6);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun65263_ip = 439;
                    continue _fun65263
                }
            case 65:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 4;
                var9 = var12[var0];
                var0 = undefined;
                var13 = var11.bind(var0)(var9);
                var9 = var13.getEventException;
                var15 = var9.bind(var13)(var3, var6);
                var9 = 5;
                var9 = var12[var9];
                var11 = var11.bind(var0)(var9);
                var9 = var11.getEventSchedule;
                var9 = var9.bind(var11)(var8, var3);
                var14 = var9.startTime;
                var11 = var2 == var8;
                var9 = undefined;
                if (var11) {
                    _fun65263_ip = 144;
                    continue _fun65263
                }
            case 138:
                var9 = var8.scheduled_start_time;
            case 144:
                var9 = var2 != var9;
                var12 = null;
                if (!var9) {
                    _fun65263_ip = 232;
                    continue _fun65263
                }
            case 153:
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var9 = 6;
                var9 = var13[var9];
                var13 = var11.bind(var0)(var9);
                var11 = var13.getRecurrenceStatus;
                var9 = global;
                var17 = var9.Date;
                var16 = var2 == var8;
                var9 = undefined;
                if (var16) {
                    _fun65263_ip = 202;
                    continue _fun65263
                }
            case 196:
                var9 = var8.scheduled_start_time;
            case 202:
                var16 = var17.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var17
                    }
                });
                var22 = var16;
                var21 = var9;
                var9 = new var22[var17](var21, var20);
                var9 = var9 instanceof Object ? var9 : var16;
                var12 = var11.bind(var13)(var15, var14, var9);
            case 232:
                if (!(var2 != var12)) {
                    _fun65263_ip = 255;
                    continue _fun65263
                }
            case 236:
                var11 = _closure1_slot5;
                var9 = var11.has;
                var11 = var9.bind(var11)(var12);
                var9 = null;
                if (var11) {
                    _fun65263_ip = 293;
                    continue _fun65263
                }
            case 255:
                if (!(var2 == var3)) {
                    _fun65263_ip = 290;
                    continue _fun65263
                }
            case 259:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 6;
                var11 = var13[var11];
                var12 = var12.bind(var0)(var11);
                var11 = var12.getNextRecurrenceIdInEvent;
                var3 = var11.bind(var12)(var8);
            case 290:
                var9 = var3;
            case 293:
                var12 = _closure1_slot7;
                var3 = var8.id;
                var3 = var12.bind(var0)(var3);
                var11 = var8.id;
                var11 = var12.bind(var0)(var11, var9);
                if (!(var2 != var9)) {
                    _fun65263_ip = 388;
                    continue _fun65263
                }
            case 322:
                if (!(var2 == var11)) {
                    _fun65263_ip = 334;
                    continue _fun65263
                }
            case 326:
                var8 = var10.bind(var0)(var8, var9);
                _fun65263_ip = 439;
                continue _fun65263;
            case 334:
                if (!(var2 == var3)) {
                    _fun65263_ip = 350;
                    continue _fun65263
                }
            case 338:
                var8 = _closure1_slot4;
                var8 = var8.UNINTERESTED;
                _fun65263_ip = 360;
                continue _fun65263;
            case 350:
                var10 = _closure1_slot4;
                var8 = var10.INTERESTED;
            case 360:
                var22 = undefined;
                var21 = var6;
                var20 = var9;
                var19 = var5;
                var18 = var8;
                var8 = var22[var4](var21, var20, var19, var18, var17);
                if (!(var2 != var1)) {
                    _fun65263_ip = 439;
                    continue _fun65263
                }
            case 382:
                var8 = var1.bind(var0)();
                _fun65263_ip = 439;
                continue _fun65263;
            case 388:
                if (!(var2 == var3)) {
                    _fun65263_ip = 404;
                    continue _fun65263
                }
            case 392:
                var3 = _closure1_slot4;
                var3 = var3.INTERESTED;
                _fun65263_ip = 414;
                continue _fun65263;
            case 404:
                var7 = _closure1_slot4;
                var3 = var7.UNINTERESTED;
            case 414:
                var22 = undefined;
                var21 = var6;
                var20 = null;
                var19 = var5;
                var18 = var3;
                var3 = var22[var4](var21, var20, var19, var18, var17);
                if (!(var2 != var1)) {
                    _fun65263_ip = 439;
                    continue _fun65263
                }
            case 435:
                var0 = var1.bind(var0)();
            case 439:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleRsvp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3293, 1378, 1234, 8047, 8046, 8043, 2]);