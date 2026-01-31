// modules/guild_scheduled_events/useEventSchedule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: _getEventSchedule, environment: var1
        _fun65165: for (var _fun65165_ip = 0;;) switch (_fun65165_ip) {
            case 0:
                var2 = arg0;
                var8 = arg2;
                var0 = var2.recurrence_rule;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun65165_ip = 136;
                    continue _fun65165
                }
            case 18:
                if (!(var1 != var8)) {
                    _fun65165_ip = 136;
                    continue _fun65165
                }
            case 22:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 1;
                var6 = var5[var0];
                var3 = undefined;
                var7 = var4.bind(var3)(var6);
                var6 = var7.getBaseScheduleForRecurrence;
                var6 = var6.bind(var7)(var8, var2);
                var0 = var5[var0];
                var5 = var4.bind(var3)(var0);
                var4 = var5.getScheduleForRecurrenceWithException;
                var0 = arg1;
                var0 = var4.bind(var5)(var6, var0);
                var6 = var0.startDate;
                var5 = var0.endDate;
                var0 = {};
                var4 = var6.toDate;
                var4 = var4.bind(var6)();
                var0.startTime = var4;
                var4 = var1 == var5;
                if (var4) {
                    _fun65165_ip = 129;
                    continue _fun65165
                }
            case 119:
                var4 = var5.toDate;
                var3 = var4.bind(var5)();
            case 129:
                var0.endTime = var3;
                return var0;
            case 136:
                var0 = {};
                var3 = global;
                var6 = var3.Date;
                var10 = var2.scheduled_start_time;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var4 = var4 instanceof Object ? var4 : var5;
                var0.startTime = var4;
                var4 = var2.scheduled_end_time;
                var4 = var1 != var4;
                var1 = null;
                if (!var4) {
                    _fun65165_ip = 224;
                    continue _fun65165
                }
            case 192:
                var4 = var3.Date;
                var10 = var2.scheduled_end_time;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var2 = new var11[var4](var10, var9);
                var1 = var2 instanceof Object ? var2 : var3;
            case 224:
                var0.endTime = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useEventSchedule.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: useEventSchedule, environment: var1
        _fun65166: for (var _fun65166_ip = 0;;) switch (_fun65166_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun65166_ip = 48;
                    continue _fun65166
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getNextRecurrenceIdInEvent;
                var3 = var0.bind(var1)(var4);
            case 48:
                var2 = _closure1_slot4;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var0 = var1[var0];
                var1 = undefined;
                var5 = var5.bind(var1)(var0);
                var0 = var4.id;
                var0 = var5.bind(var1)(var3, var0);
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function(arg0, arg1) { // Original name: useEventScheduleById, environment: var1
        _fun65167: for (var _fun65167_ip = 0;;) switch (_fun65167_ip) {
            case 0:
                var5 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var6)(var2, var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun65167_ip = 102;
                    continue _fun65167
                }
            case 71:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 1;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.getNextRecurrenceIdInEvent;
                var5 = var2.bind(var6)(var3);
            case 102:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var7 = var0 == var3;
                var2 = undefined;
                if (var7) {
                    _fun65167_ip = 136;
                    continue _fun65167
                }
            case 131:
                var2 = var3.id;
            case 136:
                var2 = var6.bind(var4)(var5, var2);
                var6 = var0 == var3;
                var0 = null;
                if (var6) {
                    _fun65167_ip = 162;
                    continue _fun65167
                }
            case 151:
                var1 = _closure1_slot4;
                var0 = var1.bind(var4)(var3, var2, var5);
            case 162:
                return var0;
        }
    };
    var2.useEventScheduleById = var3;
    var1 = function(arg0, arg1) { // Original name: getEventSchedule, environment: var1
        var4 = arg0;
        var3 = arg1;
        var2 = _closure1_slot4;
        var5 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var6 = var5.bind(var1)(var0);
        var5 = var6.getEventException;
        var0 = var4.id;
        var0 = var5.bind(var6)(var3, var0);
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var2.getEventSchedule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3293, 8045, 8049, 566, 2]);