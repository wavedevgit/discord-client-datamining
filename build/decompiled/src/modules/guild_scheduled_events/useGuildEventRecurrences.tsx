// modules/guild_scheduled_events/useGuildEventRecurrences.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useGuildEventRecurrences.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun66338: for (var _fun66338_ip = 0;;) switch (_fun66338_ip) {
            case 0:
                var10 = arg0;
                var2 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var8;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var4 = var3[var0];
                var0 = undefined;
                var9 = var6.bind(var0)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var7.bind(var9)(var6, var4);
                var _closure2_slot3 = var6;
                var4 = _closure1_slot1;
                var16 = 4;
                var3 = var3[var16];
                var3 = var4.bind(var0)(var3);
                var4 = var3.bind(var0)(var8);
                var _closure2_slot4 = var4;
                var11 = _closure1_slot4;
                var9 = var11.useState;
                var7 = null;
                if (!(var7 != var8)) {
                    _fun66338_ip = 126;
                    continue _fun66338
                }
            case 122:
                if (!(var7 == var6)) {
                    _fun66338_ip = 132;
                    continue _fun66338
                }
            case 126:
                var3 = new Array(0);
                _fun66338_ip = 219;
                continue _fun66338;
            case 132:
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 5;
                var14 = var17[var12];
                var15 = var13.bind(var0)(var14);
                var14 = var15.generateNextRecurrences;
                var12 = var17[var12];
                var13 = var13.bind(var0)(var12);
                var12 = var13.getRRule;
                var13 = var12.bind(var13)(var8);
                var12 = global;
                var18 = var12.Date;
                var21 = var6.scheduled_start_time;
                var17 = var18.prototype;
                var17 = Object.create(var17, {
                    constructor: {
                        value: var18
                    }
                });
                var22 = var17;
                var12 = new var22[var18](var21, var20);
                var12 = var12 instanceof Object ? var12 : var17;
                var3 = var14.bind(var15)(var16, var13, var12);
            case 219:
                var11 = var9.bind(var11)(var3);
                var9 = _closure1_slot3;
                var3 = 2;
                var11 = var9.bind(var0)(var11, var3);
                var3 = 0;
                var3 = var11[var3];
                var _closure2_slot5 = var3;
                var9 = 1;
                var9 = var11[var9];
                var _closure2_slot6 = var9;
                var5 = _closure1_slot4;
                var11 = var5.useEffect;
                var9 = new Array(4);
                var9[0] = var8;
                var12 = var3.length;
                var9[1] = var12;
                var9[2] = var6;
                var9[3] = var4;
                var4 = function() { // Environment: var1
                    _fun66340: for (var _fun66340_ip = 0;;) switch (_fun66340_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun66340_ip = 199;
                                continue _fun66340
                            }
                        case 16:
                            var1 = _closure2_slot2;
                            if (!(var2 != var1)) {
                                _fun66340_ip = 199;
                                continue _fun66340
                            }
                        case 27:
                            var1 = _closure2_slot3;
                            if (!(var2 != var1)) {
                                _fun66340_ip = 199;
                                continue _fun66340
                            }
                        case 38:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.isEqual;
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot2;
                            var3 = var5.bind(var6)(var4, var3);
                            if (var3) {
                                _fun66340_ip = 199;
                                continue _fun66340
                            }
                        case 86:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 5;
                            var1 = var5[var3];
                            var7 = var4.bind(var2)(var1);
                            var6 = var7.getRRule;
                            var1 = _closure2_slot2;
                            var6 = var6.bind(var7)(var1);
                            var1 = _closure2_slot6;
                            var3 = var5[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.generateNextRecurrences;
                            var3 = _closure2_slot5;
                            var3 = var3.length;
                            var7 = global;
                            var8 = var7.Date;
                            var0 = _closure2_slot3;
                            var11 = var0.scheduled_start_time;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var12 = var7;
                            var0 = new var12[var8](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var7;
                            var0 = var4.bind(var5)(var3, var6, var0);
                            var0 = var1.bind(var2)(var0);
                        case 199:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var11.bind(var5)(var4, var9);
                var9 = var5.useEffect;
                var4 = new Array(3);
                var4[0] = var10;
                var4[1] = var2;
                var4[2] = var3;
                var2 = function() { // Environment: var1
                    _fun66341: for (var _fun66341_ip = 0;;) switch (_fun66341_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun66341_ip = 82;
                                continue _fun66341
                            }
                        case 13:
                            var3 = _closure2_slot5;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var0 = 7;
                                var0 = var6[var0];
                                var4 = undefined;
                                var2 = var5.bind(var4)(var0);
                                var1 = var2.fromTimestamp;
                                var0 = global;
                                var8 = var0.Math;
                                var7 = var8.floor;
                                var0 = var3.getTime;
                                var9 = var0.bind(var3)();
                                var0 = 8;
                                var3 = var6[var0];
                                var3 = var5.bind(var4)(var3);
                                var3 = var3.Millis;
                                var3 = var3.SECOND;
                                var3 = var9 / var3;
                                var3 = var7.bind(var8)(var3);
                                var0 = var6[var0];
                                var0 = var5.bind(var4)(var0);
                                var0 = var0.Millis;
                                var0 = var0.SECOND;
                                var0 = var3 * var0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var2.bind(var3)(var1);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getGuildEventUserCounts;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0, var4);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var5)(var2, var4);
                var4 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var3;
                var7 = var7 == var6;
                var0 = undefined;
                if (var7) {
                    _fun66338_ip = 371;
                    continue _fun66338
                }
            case 365:
                var0 = var6.scheduled_start_time;
            case 371:
                var2[2] = var0;
                var0 = function() { // Environment: var1
                    _fun66343: for (var _fun66343_ip = 0;;) switch (_fun66343_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun66343_ip = 216;
                                continue _fun66343
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun66343_ip = 216;
                                continue _fun66343
                            }
                        case 34:
                            var2 = _closure2_slot3;
                            var3 = var0 == var2;
                            var6 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun66343_ip = 59;
                                continue _fun66343
                            }
                        case 49:
                            var3 = _closure2_slot3;
                            var2 = var3.scheduled_start_time;
                        case 59:
                            if (!(var0 != var2)) {
                                _fun66343_ip = 216;
                                continue _fun66343
                            }
                        case 66:
                            var2 = global;
                            var2 = var2.Date;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var3;
                            var2 = new var11[var2](var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var8 = var2.setFullYear;
                            var3 = var2.getFullYear;
                            var9 = var3.bind(var2)();
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 5;
                            var4 = var7[var3];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.MAX_YEARS_AHEAD_RECURRING_EVENT;
                            var4 = var9 + var4;
                            var4 = var8.bind(var2)(var4);
                            var8 = _closure2_slot5;
                            var9 = var8.length;
                            var4 = 1;
                            var4 = var9 - var4;
                            var4 = var8[var4];
                            var3 = var7[var3];
                            var5 = var5.bind(var6)(var3);
                            var3 = var5.getRRule;
                            var1 = _closure2_slot2;
                            var3 = var3.bind(var5)(var1);
                            var1 = var3.after;
                            var1 = var1.bind(var3)(var4);
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun66343_ip = 214;
                                continue _fun66343
                            }
                        case 210:
                            var0 = var1 <= var2;
                        case 214:
                            return var0;
                        case 216:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var0, var2);
                var0 = {};
                var0.recurrenceStartTimes = var3;
                var0.canViewMoreRecurrences = var2;
                var1 = function() {
                    _fun66344: for (var _fun66344_ip = 0;;) switch (_fun66344_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun66344_ip = 156;
                                continue _fun66344
                            }
                        case 16:
                            var1 = _closure2_slot3;
                            if (!(var2 != var1)) {
                                _fun66344_ip = 156;
                                continue _fun66344
                            }
                        case 27:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 5;
                            var1 = var6[var3];
                            var2 = undefined;
                            var7 = var5.bind(var2)(var1);
                            var4 = var7.getRRule;
                            var1 = _closure2_slot2;
                            var9 = var4.bind(var7)(var1);
                            var4 = _closure2_slot5;
                            var7 = var4.length;
                            var1 = 1;
                            var1 = var7 - var1;
                            var8 = var4[var1];
                            var1 = _closure2_slot6;
                            var12 = _closure2_slot5;
                            var0 = new Array(0);
                            var11 = 0;
                            var13 = var0;
                            var4 = arraySpread(var13, var12, var11);
                            var3 = var6[var3];
                            var7 = var5.bind(var2)(var3);
                            var6 = var7.generateNextRecurrences;
                            var13 = 4;
                            var10 = true;
                            var14 = var7;
                            var12 = var9;
                            var11 = var8;
                            var12 = var14[var6](var13, var12, var11, var10, var9);
                            var13 = var0;
                            var11 = var4;
                            var3 = arraySpread(var13, var12, var11);
                            var0 = var1.bind(var2)(var0);
                        case 156:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.updateRecurrenceStartTimes = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3334, 566, 7753, 8086, 22, 21, 667, 8178, 2]);