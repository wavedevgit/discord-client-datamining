// modules/guild_scheduled_events/utils/ScheduleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var13;
    var10 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var0 = var2.minutes;
        var0 = var0.bind(var2)();
        var0 = var0 % var1;
        var3 = var1 - var0;
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var4.bind(var1)(var0);
        var2 = var0.bind(var1)(var2);
        var1 = var2.add;
        var0 = 'minutes';
        var2 = var1.bind(var2)(var3, var0);
        var1 = var2.seconds;
        var0 = 0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var10;
    var9 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.Weekday;
        var1 = _closure1_slot13;
        var0 = arg0;
        var4 = var1[var0];
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot18 = var9;
    var0 = function arg0, arg1() {
        _fun65069: for (var _fun65069_ip = 0;;) switch (_fun65069_ip) {
            case 0:
                var8 = arg0;
                var4 = arg1;
                var5 = null;
                var1 = var5 != var8;
                var3 = undefined;
                var0 = undefined;
                if (!var1) {
                    _fun65069_ip = 97;
                    continue _fun65069
                }
            case 19:
                var1 = {};
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 5;
                var7 = var7[var6];
                var7 = var9.bind(var3)(var7);
                var7 = var7.bind(var3)(var8);
                var1.startDate = var7;
                var1.endDate = var3;
                var0 = var1;
                if (!(var5 != var4)) {
                    _fun65069_ip = 97;
                    continue _fun65069
                }
            case 66:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var4);
                var1.endDate = var2;
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot19;
        var2 = var0.scheduled_start_time;
        var1 = var0.scheduled_end_time;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot20 = var8;
    var7 = function arg0, arg1() {
        _fun65071: for (var _fun65071_ip = 0;;) switch (_fun65071_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun65071_ip = 29;
                    continue _fun65071
                }
            case 12:
                if (!(var2 != var3)) {
                    _fun65071_ip = 29;
                    continue _fun65071
                }
            case 16:
                var0 = var1.isSame;
                var0 = var0.bind(var1)(var3);
                _fun65071_ip = 43;
                continue _fun65071;
            case 29:
                var1 = var2 == var1;
                if (!var1) {
                    _fun65071_ip = 40;
                    continue _fun65071
                }
            case 36:
                var1 = var2 == var3;
            case 40:
                var0 = var1;
            case 43:
                return var0;
        }
    };
    var _closure1_slot21 = var7;
    var6 = function arg0() {
        _fun65072: for (var _fun65072_ip = 0;;) switch (_fun65072_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.byWeekday;
                var3 = null;
                var0 = var3 != var0;
                var5 = null;
                if (!var0) {
                    _fun65072_ip = 42;
                    continue _fun65072
                }
            case 20:
                var12 = var1.byWeekday;
                var0 = new Array(0);
                var11 = 0;
                var13 = var0;
                var2 = arraySpread(var13, var12, var11);
                var5 = var0;
            case 42:
                var6 = var1.byNWeekday;
                var0 = var3 == var6;
                var9 = undefined;
                var4 = undefined;
                if (var0) {
                    _fun65072_ip = 76;
                    continue _fun65072
                }
            case 59:
                var2 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.Weekday;
                    var5 = var0.day;
                    var4 = var0.n;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var4 = var2.bind(var6)(var0);
            case 76:
                var8 = global;
                var6 = var8.Date;
                var13 = var1.start;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var2;
                var0 = new var14[var6](var13, var12);
                var7 = var0 instanceof Object ? var0 : var2;
                var0 = var7.setMilliseconds;
                var6 = 0;
                var0 = var0.bind(var7)(var6);
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 3;
                var0 = var10[var0];
                var0 = var2.bind(var9)(var0);
                var2 = var0.RRule;
                var0 = {};
                var0.dtstart = var7;
                var7 = var1.end;
                var9 = var3 != var7;
                var7 = null;
                if (!var9) {
                    _fun65072_ip = 203;
                    continue _fun65072
                }
            case 172:
                var10 = var8.Date;
                var13 = var1.end;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var14 = var9;
                var8 = new var14[var10](var13, var12);
                var7 = var8 instanceof Object ? var8 : var9;
            case 203:
                var0.until = var7;
                var7 = var1.frequency;
                var0.freq = var7;
                var7 = var1.interval;
                var0.interval = var7;
                if (!(var3 != var5)) {
                    _fun65072_ip = 237;
                    continue _fun65072
                }
            case 234:
                var4 = var5;
            case 237:
                var0.byweekday = var4;
                var4 = var1.byMonth;
                var5 = var3 != var4;
                var4 = null;
                if (!var5) {
                    _fun65072_ip = 279;
                    continue _fun65072
                }
            case 257:
                var12 = var1.byMonth;
                var5 = new Array(0);
                var13 = var5;
                var11 = 0;
                var7 = arraySpread(var13, var12, var11);
                var4 = var5;
            case 279:
                var0.bymonth = var4;
                var4 = var1.byMonthDay;
                var5 = var3 != var4;
                var4 = null;
                if (!var5) {
                    _fun65072_ip = 321;
                    continue _fun65072
                }
            case 299:
                var12 = var1.byMonthDay;
                var5 = new Array(0);
                var13 = var5;
                var11 = 0;
                var7 = arraySpread(var13, var12, var11);
                var4 = var5;
            case 321:
                var0.bymonthday = var4;
                var4 = var1.byYearDay;
                var4 = var3 != var4;
                var3 = null;
                if (!var4) {
                    _fun65072_ip = 363;
                    continue _fun65072
                }
            case 341:
                var12 = var1.byYearDay;
                var4 = new Array(0);
                var13 = var4;
                var11 = 0;
                var5 = arraySpread(var13, var12, var11);
                var3 = var4;
            case 363:
                var0.byyearday = var3;
                var1 = var1.count;
                var0.count = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var13 = var0;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot22 = var6;
    var5 = function arg0() {
        _fun65074: for (var _fun65074_ip = 0;;) switch (_fun65074_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.recurrence_rule;
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun65074_ip = 52;
                    continue _fun65074
                }
            case 18:
                var2 = global;
                var3 = var2.Date;
                var4 = var1.scheduled_start_time;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var0 = var1 instanceof Object ? var1 : var2;
            case 52:
                return var0;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function arg0() {
        _fun65075: for (var _fun65075_ip = 0;;) switch (_fun65075_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot18;
                var0 = var5.toDate;
                var2 = var0.bind(var5)();
                var0 = var2.getDay;
                var0 = var0.bind(var2)();
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var5.toDate;
                var5 = var2.bind(var5)();
                var2 = var5.getUTCDay;
                var2 = var2.bind(var5)();
                var3 = var4.bind(var3)(var2);
                var4 = var3.weekday;
                var2 = var0.weekday;
                var4 = var4 - var2;
                var2 = 0;
                if (!(!(var4 > var2))) {
                    _fun65075_ip = 116;
                    continue _fun65075
                }
            case 84:
                var3 = var3.weekday;
                var0 = var0.weekday;
                var0 = var3 - var0;
                if (!(!(var0 < var2))) {
                    _fun65075_ip = 110;
                    continue _fun65075
                }
            case 104:
                var0 = _closure1_slot7;
                _fun65075_ip = 114;
                continue _fun65075;
            case 110:
                var0 = _closure1_slot8;
            case 114:
                _fun65075_ip = 120;
                continue _fun65075;
            case 116:
                var0 = _closure1_slot9;
            case 120:
                return var0;
        }
    };
    var _closure1_slot24 = var4;
    var3 = function arg0() {
        _fun65076: for (var _fun65076_ip = 0;;) switch (_fun65076_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot18;
                var0 = var5.toDate;
                var2 = var0.bind(var5)();
                var0 = var2.getDay;
                var0 = var0.bind(var2)();
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var5.toDate;
                var5 = var2.bind(var5)();
                var2 = var5.getUTCDay;
                var2 = var2.bind(var5)();
                var3 = var4.bind(var3)(var2);
                var4 = var3.weekday;
                var2 = var0.weekday;
                var4 = var4 - var2;
                var2 = 0;
                if (!(!(var4 > var2))) {
                    _fun65076_ip = 116;
                    continue _fun65076
                }
            case 84:
                var3 = var3.weekday;
                var0 = var0.weekday;
                var0 = var3 - var0;
                if (!(!(var0 < var2))) {
                    _fun65076_ip = 110;
                    continue _fun65076
                }
            case 104:
                var0 = _closure1_slot10;
                _fun65076_ip = 114;
                continue _fun65076;
            case 110:
                var0 = _closure1_slot11;
            case 114:
                _fun65076_ip = 120;
                continue _fun65076;
            case 116:
                var0 = _closure1_slot12;
            case 120:
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var11 = global;
    var17 = var11.Object;
    var16 = var17.defineProperty;
    var14 = {};
    var0 = true;
    var14.value = var0;
    var0 = '__esModule';
    var0 = var16.bind(var17)(var2, var0, var14);
    var0 = 0;
    var14 = var13[var0];
    var0 = undefined;
    var14 = var15.bind(var0)(var14);
    var _closure1_slot3 = var14;
    var14 = 1;
    var14 = var13[var14];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RecurrenceOptions;
    var _closure1_slot4 = var14;
    var14 = 2;
    var14 = var13[var14];
    var14 = var12.bind(var0)(var14);
    var15 = var14.GuildScheduledEventEntityTypes;
    var _closure1_slot5 = var15;
    var14 = var14.GuildScheduledEventStatus;
    var _closure1_slot6 = var14;
    var15 = 3;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.MO;
    var16 = var14.weekday;
    var14 = new Array(5);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TU;
    var16 = var16.weekday;
    var14[1] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.WE;
    var16 = var16.weekday;
    var14[2] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TH;
    var16 = var16.weekday;
    var14[3] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.FR;
    var16 = var16.weekday;
    var14[4] = var16;
    var _closure1_slot7 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.SU;
    var16 = var14.weekday;
    var14 = new Array(5);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.MO;
    var16 = var16.weekday;
    var14[1] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TU;
    var16 = var16.weekday;
    var14[2] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.WE;
    var16 = var16.weekday;
    var14[3] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TH;
    var16 = var16.weekday;
    var14[4] = var16;
    var _closure1_slot8 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.TU;
    var16 = var14.weekday;
    var14 = new Array(5);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.WE;
    var16 = var16.weekday;
    var14[1] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TH;
    var16 = var16.weekday;
    var14[2] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.FR;
    var16 = var16.weekday;
    var14[3] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.SA;
    var16 = var16.weekday;
    var14[4] = var16;
    var _closure1_slot9 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.SA;
    var16 = var14.weekday;
    var14 = new Array(2);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.SU;
    var16 = var16.weekday;
    var14[1] = var16;
    var _closure1_slot10 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.FR;
    var16 = var14.weekday;
    var14 = new Array(2);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.SA;
    var16 = var16.weekday;
    var14[1] = var16;
    var _closure1_slot11 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.SU;
    var16 = var14.weekday;
    var14 = new Array(2);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.MO;
    var16 = var16.weekday;
    var14[1] = var16;
    var _closure1_slot12 = var14;
    var14 = var13[var15];
    var14 = var12.bind(var0)(var14);
    var14 = var14.RRule;
    var14 = var14.SU;
    var16 = var14.weekday;
    var14 = new Array(7);
    var14[0] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.MO;
    var16 = var16.weekday;
    var14[1] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TU;
    var16 = var16.weekday;
    var14[2] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.WE;
    var16 = var16.weekday;
    var14[3] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.TH;
    var16 = var16.weekday;
    var14[4] = var16;
    var16 = var13[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.RRule;
    var16 = var16.FR;
    var16 = var16.weekday;
    var14[5] = var16;
    var15 = var13[var15];
    var15 = var12.bind(var0)(var15);
    var15 = var15.RRule;
    var15 = var15.SA;
    var15 = var15.weekday;
    var14[6] = var15;
    var _closure1_slot13 = var14;
    var15 = var11.Set;
    var11 = var15.prototype;
    var14 = Object.create(var11, {
        constructor: {
            value: var15
        }
    });
    var20 = [0, 6];
    var21 = var14;
    var11 = new var21[var15](var20, var19);
    var11 = var11 instanceof Object ? var11 : var14;
    var _closure1_slot14 = var11;
    var11 = function arg0, arg1() {
        _fun65077: for (var _fun65077_ip = 0;;) switch (_fun65077_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dateFormat;
                var0 = var3.get;
                var4 = 'years';
                var5 = var0.bind(var3)(var4);
                var0 = var6.get;
                var4 = var0.bind(var6)(var4);
                var0 = 'ddd MMM Do, YYYY · LT';
                if (!(var5 === var4)) {
                    _fun65077_ip = 77;
                    continue _fun65077
                }
            case 71:
                var0 = 'ddd MMM Do · LT';
            case 77:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var11;
    var11 = function arg0, arg1() {
        _fun65078: for (var _fun65078_ip = 0;;) switch (_fun65078_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 6;
                var0 = var0[var7];
                var2 = undefined;
                var8 = var5.bind(var2)(var0);
                var6 = var8.differenceInCalendarDays;
                var0 = var4.toDate;
                var5 = var0.bind(var4)();
                var0 = var3.toDate;
                var0 = var0.bind(var3)();
                var9 = var6.bind(var8)(var5, var0);
                var0 = 1;
                if (!(!(var9 > var0))) {
                    _fun65078_ip = 145;
                    continue _fun65078
                }
            case 70:
                var5 = 0;
                if (!(!(var9 < var5))) {
                    _fun65078_ip = 145;
                    continue _fun65078
                }
            case 76:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var2)(var5);
                var5 = var6.dateFormat;
                var7 = var4.localeData;
                var8 = var7.bind(var4)();
                var7 = var8.calendar;
                var9 = var9 < var0;
                var0 = 'nextDay';
                if (!var9) {
                    _fun65078_ip = 130;
                    continue _fun65078
                }
            case 126:
                var0 = 'sameDay';
            case 130:
                var0 = var7.bind(var8)(var0, var4, var3);
                var0 = var5.bind(var6)(var4, var0);
                _fun65078_ip = 155;
                continue _fun65078;
            case 145:
                var1 = _closure1_slot15;
                var0 = var1.bind(var2)(var4, var3);
            case 155:
                return var0;
        }
    };
    var _closure1_slot16 = var11;
    var11 = 10;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/guild_scheduled_events/utils/ScheduleUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var11 = 365;
    var2.MAX_DAYS_AHEAD_AN_EVENT_CAN_START = var11;
    var11 = 366;
    var2.MAX_DAYS_AHEAD_AN_EVENT_CAN_END = var11;
    var11 = 4;
    var2.MAX_YEARS_AHEAD_RECURRING_EVENT = var11;
    var11 = function arg0() {
        _fun65079: for (var _fun65079_ip = 0;;) switch (_fun65079_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.toDate;
                var5 = var0.bind(var2)();
                var0 = global;
                var3 = var0.Math;
                var1 = var3.ceil;
                var0 = var5.getDate;
                var4 = var0.bind(var5)();
                var0 = 7;
                var0 = var4 / var0;
                var14 = var1.bind(var3)(var0);
                var1 = var2.format;
                var0 = 'dddd';
                var13 = var1.bind(var2)(var0);
                var1 = {};
                var0 = 'none';
                var1.id = var0;
                var2 = _closure1_slot4;
                var0 = var2.NONE;
                var1.value = var0;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 4;
                var0 = var10[var8];
                var7 = undefined;
                var0 = var11.bind(var7)(var0);
                var6 = var0.intl;
                var4 = var6.string;
                var0 = var10[var8];
                var0 = var11.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0["0bK0B1"];
                var0 = var4.bind(var6)(var0);
                var1.label = var0;
                var0 = new Array(5);
                var0[0] = var1;
                var1 = {};
                var4 = 'weekly';
                var1.id = var4;
                var4 = var2.WEEKLY;
                var1.value = var4;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var12 = var4.intl;
                var9 = var12.formatToPlainString;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var4 = var4.t;
                var6 = var4["B8/yfp"];
                var4 = {};
                var4.weekday = var13;
                var4 = var9.bind(var12)(var6, var4);
                var1.label = var4;
                var0[1] = var1;
                var1 = {};
                var4 = 'biweekly';
                var1.id = var4;
                var4 = var2.BIWEEKLY;
                var1.value = var4;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var12 = var4.intl;
                var9 = var12.formatToPlainString;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var4 = var4.t;
                var6 = var4["z+aIuX"];
                var4 = {};
                var4.weekday = var13;
                var4 = var9.bind(var12)(var6, var4);
                var1.label = var4;
                var0[2] = var1;
                var1 = {};
                var4 = 'monthly';
                var1.id = var4;
                var4 = var2.MONTHLY;
                var1.value = var4;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var12 = var4.intl;
                var9 = var12.formatToPlainString;
                var4 = var10[var8];
                var4 = var11.bind(var7)(var4);
                var4 = var4.t;
                var6 = var4.mjOEBk;
                var4 = {};
                var4.nth = var14;
                var4.weekday = var13;
                var4 = var9.bind(var12)(var6, var4);
                var1.label = var4;
                var0[3] = var1;
                var1 = {};
                var4 = 'yearly';
                var1.id = var4;
                var2 = var2.YEARLY;
                var1.value = var2;
                var2 = var10[var8];
                var2 = var11.bind(var7)(var2);
                var9 = var2.intl;
                var6 = var9.formatToPlainString;
                var2 = var10[var8];
                var2 = var11.bind(var7)(var2);
                var2 = var2.t;
                var4 = var2["5DFcVl"];
                var2 = {};
                var12 = var5.toLocaleString;
                var10 = var10[var8];
                var10 = var11.bind(var7)(var10);
                var10 = var10.intl;
                var11 = var10.currentLocale;
                var10 = {
                    'month': 'short',
                    'day': '2-digit'
                };
                var10 = var12.bind(var5)(var11, var10);
                var2.date = var10;
                var2 = var6.bind(var9)(var4, var2);
                var1.label = var2;
                var0[4] = var1;
                var4 = _closure1_slot14;
                var2 = var4.has;
                var1 = var5.getDay;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun65079_ip = 672;
                    continue _fun65079
                }
            case 573:
                var2 = var0.push;
                var1 = {};
                var4 = 'weekdayOnly';
                var1.id = var4;
                var4 = _closure1_slot4;
                var4 = var4.WEEKDAY_ONLY;
                var1.value = var4;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var8];
                var5 = var9.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var8];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["jYR/MY"];
                var4 = var5.bind(var6)(var4);
                var1.label = var4;
                var1 = var2.bind(var0)(var1);
                _fun65079_ip = 801;
                continue _fun65079;
            case 672:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun65079_ip = 704;
                    continue _fun65079
                }
            case 694:
                var2 = var4.isStaff;
                var1 = var2.bind(var4)();
            case 704:
                if (!var1) {
                    _fun65079_ip = 801;
                    continue _fun65079
                }
            case 707:
                var2 = var0.push;
                var1 = {};
                var4 = 'weekendOnly';
                var1.id = var4;
                var4 = _closure1_slot4;
                var4 = var4.WEEKEND_ONLY;
                var1.value = var4;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var8];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.hRpynV;
                var3 = var4.bind(var5)(var3);
                var1.label = var3;
                var1 = var2.bind(var0)(var1);
            case 801:
                return var0;
        }
    };
    var2.getRecurrenceOptions = var11;
    var11 = function() { // Environment: var1
        _fun65080: for (var _fun65080_ip = 0;;) switch (_fun65080_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var2 = var0.bind(var1)();
                var1 = var2.add;
                var3 = 1;
                var0 = 'hour';
                var2 = var1.bind(var2)(var3, var0);
                var0 = var2.hour;
                var0 = var0.bind(var2)();
                var1 = var2.minutes;
                var5 = var1.bind(var2)();
                var4 = 30;
                var1 = var0;
                if (!(var5 >= var4)) {
                    _fun65080_ip = 81;
                    continue _fun65080
                }
            case 77:
                var1 = var0 + var3;
            case 81:
                var0 = var2.hour;
                var1 = var0.bind(var2)(var1);
                var0 = var1.minutes;
                var2 = 0;
                var1 = var0.bind(var1)(var2);
                var0 = var1.seconds;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getInitialEventStartDate = var11;
    var11 = function arg0() {
        _fun65081: for (var _fun65081_ip = 0;;) switch (_fun65081_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot17;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun65081_ip = 44;
                    continue _fun65081
                }
            case 16:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var4 = var1.bind(var4)();
                _fun65081_ip = 71;
                continue _fun65081;
            case 44:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var5.bind(var1)(var0);
                var4 = var0.bind(var1)(var2);
            case 71:
                var2 = var4.add;
                var1 = 1;
                var0 = 'hour';
                var2 = var2.bind(var4)(var1, var0);
                var1 = undefined;
                var0 = 60;
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var2.getInitialEventEndDate = var11;
    var2.getNextBucketedTime = var10;
    var10 = function arg0, arg1, arg2() {
        _fun65082: for (var _fun65082_ip = 0;;) switch (_fun65082_ip) {
            case 0:
                var0 = arg1;
                var4 = arg2;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun65082_ip = 41;
                    continue _fun65082
                }
            case 12:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var4 = var1.bind(var2)();
            case 41:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = 5;
                var3 = var2[var6];
                var2 = undefined;
                var7 = var7.bind(var2)(var3);
                var3 = arg0;
                var3 = var7.bind(var2)(var3);
                var7 = var5 != var0;
                var10 = undefined;
                if (!var7) {
                    _fun65082_ip = 115;
                    continue _fun65082
                }
            case 83:
                var7 = '';
                var10 = undefined;
                if (!(var7 !== var0)) {
                    _fun65082_ip = 115;
                    continue _fun65082
                }
            case 93:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var6];
                var7 = var8.bind(var2)(var7);
                var10 = var7.bind(var2)(var0);
            case 115:
                var7 = var5 != var0;
                if (!var7) {
                    _fun65082_ip = 138;
                    continue _fun65082
                }
            case 122:
                var8 = var3.isSame;
                var0 = 'day';
                var7 = var8.bind(var3)(var10, var0);
            case 138:
                var0 = {};
                var8 = _closure1_slot16;
                var8 = var8.bind(var2)(var3, var4);
                var0.startDateTimeString = var8;
                var8 = var5 != var10;
                var5 = undefined;
                if (!var8) {
                    _fun65082_ip = 196;
                    continue _fun65082
                }
            case 164:
                if (var7) {
                    _fun65082_ip = 179;
                    continue _fun65082
                }
            case 167:
                var7 = _closure1_slot15;
                var7 = var7.bind(var2)(var10, var4);
                _fun65082_ip = 193;
                continue _fun65082;
            case 179:
                var9 = var10.format;
                var8 = 'LT';
                var7 = var9.bind(var10)(var8);
            case 193:
                var5 = var7;
            case 196:
                var0.endDateTimeString = var5;
                var5 = var3 <= var4;
                var0.currentOrPastEvent = var5;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = var1[var6];
                var7 = var5.bind(var2)(var7);
                var10 = var7.bind(var2)();
                var9 = var10.add;
                var8 = 1;
                var7 = 'hour';
                var7 = var9.bind(var10)(var8, var7);
                var7 = var3 <= var7;
                var0.upcomingEvent = var7;
                var1 = var1[var6];
                var1 = var5.bind(var2)(var1);
                var6 = var1.bind(var2)();
                var5 = var6.add;
                var2 = 15;
                var1 = 'minute';
                var1 = var5.bind(var6)(var2, var1);
                var1 = var3 <= var1;
                var0.withinStartWindow = var1;
                var2 = var3.diff;
                var1 = 'minutes';
                var1 = var2.bind(var3)(var4, var1);
                var0.diffMinutes = var1;
                return var0;
        }
    };
    var2.getEventTimeData = var10;
    var2.convertJSDayToRRuleDay = var9;
    var9 = function arg0, arg1() {
        _fun65083: for (var _fun65083_ip = 0;;) switch (_fun65083_ip) {
            case 0:
                var3 = _closure1_slot20;
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var0);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var3 = var4.bind(var1)(var2);
                var2 = 7;
                var2 = var5[var2];
                var5 = var4.bind(var1)(var2);
                var4 = var5.extractTimestamp;
                var2 = arg0;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                var4 = null;
                var5 = var4 == var0;
                var3 = undefined;
                if (var5) {
                    _fun65083_ip = 85;
                    continue _fun65083
                }
            case 79:
                var3 = var0.endDate;
            case 85:
                var3 = var4 != var3;
                var1 = undefined;
                if (!var3) {
                    _fun65083_ip = 137;
                    continue _fun65083
                }
            case 94:
                var3 = var2.clone;
                var4 = var3.bind(var2)();
                var3 = var4.add;
                var6 = var0.endDate;
                var5 = var6.diff;
                var0 = var0.startDate;
                var0 = var5.bind(var6)(var0);
                var1 = var3.bind(var4)(var0);
            case 137:
                var0 = {};
                var0.startDate = var2;
                var0.endDate = var1;
                return var0;
        }
    };
    var2.getBaseScheduleForRecurrence = var9;
    var9 = function arg0, arg1() {
        _fun65084: for (var _fun65084_ip = 0;;) switch (_fun65084_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun65084_ip = 138;
                    continue _fun65084
                }
            case 15:
                var5 = var4.scheduled_end_time;
                if (!(var2 == var5)) {
                    _fun65084_ip = 31;
                    continue _fun65084
                }
            case 25:
                var5 = var0.endDate;
            case 31:
                var1 = {};
                var3 = var4.scheduled_start_time;
                if (!(var2 == var3)) {
                    _fun65084_ip = 51;
                    continue _fun65084
                }
            case 43:
                var3 = var0.startDate;
                _fun65084_ip = 87;
                continue _fun65084;
            case 51:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 5;
                var6 = var7[var6];
                var7 = undefined;
                var6 = var8.bind(var7)(var6);
                var4 = var4.scheduled_start_time;
                var3 = var6.bind(var7)(var4);
            case 87:
                var1.startDate = var3;
                var3 = var2 != var5;
                var4 = undefined;
                var2 = undefined;
                if (!var3) {
                    _fun65084_ip = 131;
                    continue _fun65084
                }
            case 103:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var2 = var3.bind(var4)(var5);
            case 131:
                var1.endDate = var2;
                return var1;
            case 138:
                return var0;
        }
    };
    var2.getScheduleForRecurrenceWithException = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot19;
        var2 = var0.scheduledStartTime;
        var1 = var0.scheduledEndTime;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.getScheduleFromEventData = var9;
    var2.getScheduleFromEvent = var8;
    var8 = function arg0, arg1() {
        _fun65086: for (var _fun65086_ip = 0;;) switch (_fun65086_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.startDate;
                var5 = var0.endDate;
                var4 = null;
                var0 = var4 != var2;
                if (!var0) {
                    _fun65086_ip = 113;
                    continue _fun65086
                }
            case 24:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var1 = var1.bind(var6)();
                var6 = var2 < var1;
                var1 = !var6;
                if (var6) {
                    _fun65086_ip = 110;
                    continue _fun65086
                }
            case 63:
                var6 = var4 != var5;
                if (!var6) {
                    _fun65086_ip = 74;
                    continue _fun65086
                }
            case 70:
                var6 = var5 < var2;
            case 74:
                var2 = !var6;
                if (var6) {
                    _fun65086_ip = 107;
                    continue _fun65086
                }
            case 80:
                var3 = _closure1_slot5;
                var6 = var3.EXTERNAL;
                var3 = arg1;
                var3 = var3 !== var6;
                if (var3) {
                    _fun65086_ip = 104;
                    continue _fun65086
                }
            case 100:
                var3 = var4 != var5;
            case 104:
                var2 = var3;
            case 107:
                var1 = var2;
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var2.hasValidSchedule = var8;
    var2.areDatesIdentical = var7;
    var7 = function arg0, arg1() {
        _fun65087: for (var _fun65087_ip = 0;;) switch (_fun65087_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun65087_ip = 70;
                    continue _fun65087
                }
            case 12:
                if (!(var2 != var3)) {
                    _fun65087_ip = 70;
                    continue _fun65087
                }
            case 16:
                var6 = _closure1_slot21;
                var5 = var1.startDate;
                var0 = var3.startDate;
                var7 = undefined;
                var0 = var6.bind(var7)(var5, var0);
                if (!var0) {
                    _fun65087_ip = 68;
                    continue _fun65087
                }
            case 46:
                var6 = _closure1_slot21;
                var5 = var1.endDate;
                var4 = var3.endDate;
                var0 = var6.bind(var7)(var5, var4);
            case 68:
                _fun65087_ip = 84;
                continue _fun65087;
            case 70:
                var1 = var2 == var1;
                if (!var1) {
                    _fun65087_ip = 81;
                    continue _fun65087
                }
            case 77:
                var1 = var2 == var3;
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var2.areSchedulesIdentical = var7;
    var2.getRRule = var6;
    var6 = function arg0, arg1, arg2() {
        _fun65088: for (var _fun65088_ip = 0;;) switch (_fun65088_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var4 = arg2;
                var0 = arguments[3];
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun65088_ip = 26;
                    continue _fun65088
                }
            case 24:
                var0 = false;
            case 26:
                var3 = global;
                var5 = var3.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = var6;
                var5 = new var14[var5](var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var7 = var4;
                if (!(!(var7 > var5))) {
                    _fun65088_ip = 87;
                    continue _fun65088
                }
            case 61:
                var5 = var3.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = var6;
                var5 = new var14[var5](var13);
                var7 = var5 instanceof Object ? var5 : var6;
            case 87:
                var3 = var3.Date;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var5;
                var3 = new var14[var3](var13);
                var6 = var3 instanceof Object ? var3 : var5;
                var5 = var6.setFullYear;
                var3 = var6.getFullYear;
                var9 = var3.bind(var6)();
                var3 = 4;
                var3 = var9 + var3;
                var3 = var5.bind(var6)(var3);
                var5 = var8.between;
                var11 = true;
                var10 = function(arg0, arg1) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = 1;
                    var1 = var1 + var0;
                    var0 = arg1;
                    var0 = var0 < var1;
                    return var0;
                };
                var14 = var8;
                var13 = var7;
                var12 = var6;
                var3 = var14[var5](var13, var12, var11, var10, var9);
                if (!var0) {
                    _fun65088_ip = 209;
                    continue _fun65088
                }
            case 170:
                var1 = var3.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun65088_ip = 209;
                    continue _fun65088
                }
            case 181:
                var1 = var4.getTime;
                var1 = var1.bind(var4)();
                var4 = var3[var0];
                var0 = var4.getTime;
                var0 = var0.bind(var4)();
                if (!(var1 !== var0)) {
                    _fun65088_ip = 224;
                    continue _fun65088
                }
            case 209:
                var1 = var3.slice;
                var0 = 0;
                var0 = var1.bind(var3)(var0, var2);
                _fun65088_ip = 237;
                continue _fun65088;
            case 224:
                var2 = var3.slice;
                var1 = 1;
                var0 = var2.bind(var3)(var1);
            case 237:
                return var0;
        }
    };
    var2.generateNextRecurrences = var6;
    var2.getNextRecurrenceInEvent = var5;
    var5 = function arg0() {
        _fun65090: for (var _fun65090_ip = 0;;) switch (_fun65090_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun65090_ip = 150;
                    continue _fun65090
                }
            case 12:
                var1 = _closure1_slot23;
                var7 = undefined;
                var5 = var1.bind(var7)(var3);
                var3 = var0 != var5;
                var1 = null;
                if (!var3) {
                    _fun65090_ip = 148;
                    continue _fun65090
                }
            case 35:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var4 = var6.bind(var7)(var2);
                var3 = var4.fromTimestamp;
                var2 = global;
                var10 = var2.Math;
                var9 = var10.floor;
                var2 = var5.getTime;
                var11 = var2.bind(var5)();
                var2 = 8;
                var5 = var8[var2];
                var5 = var6.bind(var7)(var5);
                var5 = var5.Millis;
                var5 = var5.SECOND;
                var5 = var11 / var5;
                var5 = var9.bind(var10)(var5);
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.Millis;
                var2 = var2.SECOND;
                var2 = var5 * var2;
                var1 = var3.bind(var4)(var2);
            case 148:
                return var1;
            case 150:
                return var0;
        }
    };
    var2.getNextRecurrenceIdInEvent = var5;
    var5 = function arg0, arg1() {
        _fun65091: for (var _fun65091_ip = 0;;) switch (_fun65091_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun65091_ip = 333;
                    continue _fun65091
                }
            case 15:
                if (!(var0 != var3)) {
                    _fun65091_ip = 333;
                    continue _fun65091
                }
            case 22:
                var2 = global;
                var4 = var2.Date;
                var8 = var3.start;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var1;
                var0 = new var9[var4](var8, var7);
                var1 = var0 instanceof Object ? var0 : var1;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 7;
                var4 = var5[var4];
                var5 = undefined;
                var6 = var6.bind(var5)(var4);
                var4 = var6.extractTimestamp;
                var8 = var4.bind(var6)(var7);
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var4;
                var2 = new var9[var2](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = var1.getUTCHours;
                var6 = var4.bind(var1)();
                var4 = var2.getUTCHours;
                var4 = var4.bind(var2)();
                if (!(var6 === var4)) {
                    _fun65091_ip = 329;
                    continue _fun65091
                }
            case 144:
                var4 = var1.getUTCMinutes;
                var6 = var4.bind(var1)();
                var4 = var2.getUTCMinutes;
                var4 = var4.bind(var2)();
                if (!(var6 === var4)) {
                    _fun65091_ip = 329;
                    continue _fun65091
                }
            case 171:
                var4 = var1.getUTCSeconds;
                var6 = var4.bind(var1)();
                var4 = var2.getUTCSeconds;
                var4 = var4.bind(var2)();
                if (!(var6 === var4)) {
                    _fun65091_ip = 329;
                    continue _fun65091
                }
            case 198:
                var3 = var3.frequency;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 3;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.RRule;
                var4 = var4.WEEKLY;
                if (!(var4 !== var3)) {
                    _fun65091_ip = 303;
                    continue _fun65091
                }
            case 240:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.RRule;
                var0 = var0.YEARLY;
                if (!(var0 !== var3)) {
                    _fun65091_ip = 277;
                    continue _fun65091
                }
            case 273:
                var0 = true;
                return var0;
            case 277:
                var0 = var1.getUTCDate;
                var3 = var0.bind(var1)();
                var0 = var2.getUTCDate;
                var0 = var0.bind(var2)();
                var0 = var3 === var0;
                return var0;
            case 303:
                var0 = var1.getUTCDay;
                var1 = var0.bind(var1)();
                var0 = var2.getUTCDay;
                var0 = var0.bind(var2)();
                var0 = var1 === var0;
                return var0;
            case 329:
                var0 = false;
                return var0;
            case 333:
                var0 = false;
                return var0;
        }
    };
    var2.isValidRecurrence = var5;
    var2.getValidWeekdays = var4;
    var2.getValidWeekends = var3;
    var3 = function arg0, arg1() {
        _fun65092: for (var _fun65092_ip = 0;;) switch (_fun65092_ip) {
            case 0:
                var9 = arg0;
                var1 = arg1;
                var0 = _closure1_slot24;
                var10 = undefined;
                var4 = var0.bind(var10)(var1);
                var0 = _closure1_slot25;
                var5 = var0.bind(var10)(var1);
                var3 = _closure1_slot18;
                var0 = var1.toDate;
                var6 = var0.bind(var1)();
                var0 = var6.getUTCDay;
                var0 = var0.bind(var6)();
                var8 = var3.bind(var10)(var0);
                var0 = global;
                var6 = var0.Math;
                var3 = var6.ceil;
                var0 = var1.toDate;
                var7 = var0.bind(var1)();
                var0 = var7.getUTCDate;
                var7 = var0.bind(var7)();
                var0 = 7;
                var0 = var7 / var0;
                var6 = var3.bind(var6)(var0);
                var0 = var1.toDate;
                var7 = var0.bind(var1)();
                var1 = var7.setMilliseconds;
                var0 = 0;
                var0 = var1.bind(var7)(var0);
                var0 = _closure1_slot4;
                var3 = var0.NONE;
                var0 = null;
                var1 = null;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 805;
                    continue _fun65092
                }
            case 148:
                var3 = _closure1_slot4;
                var3 = var3.WEEKLY;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 723;
                    continue _fun65092
                }
            case 165:
                var3 = _closure1_slot4;
                var3 = var3.BIWEEKLY;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 631;
                    continue _fun65092
                }
            case 182:
                var3 = _closure1_slot4;
                var3 = var3.MONTHLY;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 520;
                    continue _fun65092
                }
            case 199:
                var3 = _closure1_slot4;
                var3 = var3.YEARLY;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 433;
                    continue _fun65092
                }
            case 216:
                var3 = _closure1_slot4;
                var3 = var3.WEEKDAY_ONLY;
                if (!(var3 !== var9)) {
                    _fun65092_ip = 341;
                    continue _fun65092
                }
            case 230:
                var3 = _closure1_slot4;
                var3 = var3.WEEKEND_ONLY;
                var1 = undefined;
                if (!(var3 === var9)) {
                    _fun65092_ip = 805;
                    continue _fun65092
                }
            case 249:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 3;
                var3 = var13[var11];
                var3 = var12.bind(var10)(var3);
                var9 = var3.RRule;
                var3 = {};
                var3.dtstart = var7;
                var11 = var13[var11];
                var11 = var12.bind(var10)(var11);
                var11 = var11.RRule;
                var11 = var11.DAILY;
                var3.freq = var11;
                var3.byweekday = var5;
                var5 = var9.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = var5;
                var15 = var3;
                var3 = new var16[var9](var15, var14);
                var1 = var3 instanceof Object ? var3 : var5;
                _fun65092_ip = 805;
                continue _fun65092;
            case 341:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 3;
                var3 = var12[var9];
                var3 = var11.bind(var10)(var3);
                var5 = var3.RRule;
                var3 = {};
                var3.dtstart = var7;
                var9 = var12[var9];
                var9 = var11.bind(var10)(var9);
                var9 = var9.RRule;
                var9 = var9.DAILY;
                var3.freq = var9;
                var3.byweekday = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var4;
                var15 = var3;
                var3 = new var16[var5](var15, var14);
                var1 = var3 instanceof Object ? var3 : var4;
                _fun65092_ip = 805;
                continue _fun65092;
            case 433:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 3;
                var3 = var11[var4];
                var3 = var9.bind(var10)(var3);
                var5 = var3.RRule;
                var3 = {};
                var3.dtstart = var7;
                var4 = var11[var4];
                var4 = var9.bind(var10)(var4);
                var4 = var4.RRule;
                var4 = var4.YEARLY;
                var3.freq = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var4;
                var15 = var3;
                var3 = new var16[var5](var15, var14);
                var1 = var3 instanceof Object ? var3 : var4;
                _fun65092_ip = 805;
                continue _fun65092;
            case 520:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 3;
                var3 = var11[var4];
                var3 = var9.bind(var10)(var3);
                var5 = var3.RRule;
                var3 = {};
                var3.dtstart = var7;
                var4 = var11[var4];
                var4 = var9.bind(var10)(var4);
                var4 = var4.RRule;
                var4 = var4.MONTHLY;
                var3.freq = var4;
                var4 = var8.nth;
                var6 = var4.bind(var8)(var6);
                var4 = new Array(1);
                var4[0] = var6;
                var3.byweekday = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var4;
                var15 = var3;
                var3 = new var16[var5](var15, var14);
                var1 = var3 instanceof Object ? var3 : var4;
                _fun65092_ip = 805;
                continue _fun65092;
            case 631:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var3 = var8[var4];
                var3 = var6.bind(var10)(var3);
                var5 = var3.RRule;
                var3 = {};
                var3.dtstart = var7;
                var4 = var8[var4];
                var4 = var6.bind(var10)(var4);
                var4 = var4.RRule;
                var4 = var4.WEEKLY;
                var3.freq = var4;
                var4 = 2;
                var3.interval = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var4;
                var15 = var3;
                var3 = new var16[var5](var15, var14);
                var1 = var3 instanceof Object ? var3 : var4;
                _fun65092_ip = 805;
                continue _fun65092;
            case 723:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var2 = var6[var3];
                var2 = var5.bind(var10)(var2);
                var4 = var2.RRule;
                var2 = {};
                var2.dtstart = var7;
                var3 = var6[var3];
                var3 = var5.bind(var10)(var3);
                var3 = var3.RRule;
                var3 = var3.WEEKLY;
                var2.freq = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var3;
                var15 = var2;
                var2 = new var16[var4](var15, var14);
                var1 = var2 instanceof Object ? var2 : var3;
            case 805:
                if (!(var0 != var1)) {
                    _fun65092_ip = 984;
                    continue _fun65092
                }
            case 812:
                var1 = var1.options;
                var13 = var1.dtstart;
                var12 = var1.until;
                var9 = var1.freq;
                var8 = var1.interval;
                var7 = var1.byweekday;
                var14 = var1.bynweekday;
                var5 = var1.bymonth;
                var4 = var1.bymonthday;
                var3 = var1.byyearday;
                var2 = var1.count;
                var1 = var0 == var14;
                var6 = undefined;
                if (var1) {
                    _fun65092_ip = 903;
                    continue _fun65092
                }
            case 886:
                var11 = var14.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var0 = {};
                    var1 = 1;
                    var1 = var2[var1];
                    var0.n = var1;
                    var1 = 0;
                    var1 = var2[var1];
                    var0.day = var1;
                    return var0;
                };
                var6 = var11.bind(var14)(var1);
            case 903:
                var1 = {};
                var11 = var13.toISOString;
                var11 = var11.bind(var13)();
                var1.start = var11;
                var11 = var0 == var12;
                var10 = undefined;
                if (var11) {
                    _fun65092_ip = 938;
                    continue _fun65092
                }
            case 928:
                var11 = var12.toISOString;
                var10 = var11.bind(var12)();
            case 938:
                var1.end = var10;
                var1.frequency = var9;
                var1.interval = var8;
                var1.byWeekday = var7;
                var1.byNWeekday = var6;
                var1.byMonth = var5;
                var1.byMonthDay = var4;
                var1.byYearDay = var3;
                var1.count = var2;
                return var1;
            case 984:
                return var0;
        }
    };
    var2.recurrenceOptionToRecurrenceRule = var3;
    var3 = function arg0, arg1() {
        _fun65094: for (var _fun65094_ip = 0;;) switch (_fun65094_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun65094_ip = 446;
                    continue _fun65094
                }
            case 15:
                var0 = _closure1_slot22;
                var6 = undefined;
                var0 = var0.bind(var6)(var2);
                var2 = var0.options;
                var3 = var2.freq;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 3;
                var2 = var2[var5];
                var2 = var4.bind(var6)(var2);
                var2 = var2.RRule;
                var2 = var2.WEEKLY;
                if (!(var2 !== var3)) {
                    _fun65094_ip = 359;
                    continue _fun65094
                }
            case 79:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var6)(var2);
                var2 = var2.RRule;
                var2 = var2.YEARLY;
                if (!(var2 !== var3)) {
                    _fun65094_ip = 347;
                    continue _fun65094
                }
            case 115:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var6)(var2);
                var2 = var2.RRule;
                var2 = var2.MONTHLY;
                if (!(var2 !== var3)) {
                    _fun65094_ip = 335;
                    continue _fun65094
                }
            case 151:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var6)(var2);
                var2 = var2.RRule;
                var2 = var2.DAILY;
                if (!(var2 !== var3)) {
                    _fun65094_ip = 196;
                    continue _fun65094
                }
            case 184:
                var2 = _closure1_slot4;
                var2 = var2.NONE;
                return var2;
            case 196:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 9;
                var2 = var2[var4];
                var8 = var3.bind(var6)(var2);
                var5 = var8.isEqual;
                var2 = var0.options;
                var3 = var2.byweekday;
                var2 = _closure1_slot24;
                var2 = var2.bind(var6)(var7);
                var2 = var5.bind(var8)(var3, var2);
                if (var2) {
                    _fun65094_ip = 323;
                    continue _fun65094
                }
            case 251:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var5 = var3.bind(var6)(var2);
                var4 = var5.isEqual;
                var2 = var0.options;
                var3 = var2.byweekday;
                var2 = _closure1_slot25;
                var2 = var2.bind(var6)(var7);
                var2 = var4.bind(var5)(var3, var2);
                var3 = _closure1_slot4;
                if (var2) {
                    _fun65094_ip = 315;
                    continue _fun65094
                }
            case 307:
                var2 = var3.NONE;
                _fun65094_ip = 321;
                continue _fun65094;
            case 315:
                var2 = var3.WEEKEND_ONLY;
            case 321:
                _fun65094_ip = 333;
                continue _fun65094;
            case 323:
                var3 = _closure1_slot4;
                var2 = var3.WEEKDAY_ONLY;
            case 333:
                return var2;
            case 335:
                var2 = _closure1_slot4;
                var2 = var2.MONTHLY;
                return var2;
            case 347:
                var2 = _closure1_slot4;
                var2 = var2.YEARLY;
                return var2;
            case 359:
                var2 = var0.options;
                var3 = var2.interval;
                var2 = 1;
                if (!(!(var3 < var2))) {
                    _fun65094_ip = 434;
                    continue _fun65094
                }
            case 377:
                var3 = var0.options;
                var4 = var3.interval;
                var3 = 2;
                if (!(!(var4 > var3))) {
                    _fun65094_ip = 434;
                    continue _fun65094
                }
            case 395:
                var0 = var0.options;
                var0 = var0.interval;
                if (!(var2 !== var0)) {
                    _fun65094_ip = 422;
                    continue _fun65094
                }
            case 410:
                var0 = _closure1_slot4;
                var0 = var0.BIWEEKLY;
                _fun65094_ip = 432;
                continue _fun65094;
            case 422:
                var2 = _closure1_slot4;
                var0 = var2.WEEKLY;
            case 432:
                _fun65094_ip = 444;
                continue _fun65094;
            case 434:
                var1 = _closure1_slot4;
                var0 = var1.NONE;
            case 444:
                return var0;
            case 446:
                var0 = _closure1_slot4;
                var0 = var0.NONE;
                return var0;
        }
    };
    var2.recurrenceRuleToOption = var3;
    var3 = function arg0, arg1() {
        _fun65095: for (var _fun65095_ip = 0;;) switch (_fun65095_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = null;
                var0 = var0 == var2;
                var5 = undefined;
                var3 = undefined;
                if (var0) {
                    _fun65095_ip = 25;
                    continue _fun65095
                }
            case 19:
                var3 = var2.scheduled_start_time;
            case 25:
                var0 = var1.scheduledStartTime;
                var0 = var3 !== var0;
                if (var0) {
                    _fun65095_ip = 54;
                    continue _fun65095
                }
            case 38:
                var4 = var2.scheduled_end_time;
                var3 = var1.scheduledEndTime;
                var0 = var4 !== var3;
            case 54:
                if (var0) {
                    _fun65095_ip = 107;
                    continue _fun65095
                }
            case 57:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.isEqual;
                var2 = var2.recurrence_rule;
                var1 = var1.recurrenceRule;
                var1 = var3.bind(var4)(var2, var1);
                var0 = !var1;
            case 107:
                return var0;
        }
    };
    var2.hasScheduleChanges = var3;
    var1 = function arg0, arg1, arg2() {
        _fun65096: for (var _fun65096_ip = 0;;) switch (_fun65096_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun65096_ip = 18;
                    continue _fun65096
                }
            case 9:
                var2 = var1.is_canceled;
                if (var2) {
                    _fun65096_ip = 67;
                    continue _fun65096
                }
            case 18:
                var3 = arg1;
                var2 = arg2;
                if (!(!(var3 < var2))) {
                    _fun65096_ip = 52;
                    continue _fun65096
                }
            case 28:
                var1 = var0 != var1;
                var0 = null;
                if (!var1) {
                    _fun65096_ip = 50;
                    continue _fun65096
                }
            case 37:
                var1 = _closure1_slot6;
                var0 = var1.SCHEDULED;
            case 50:
                _fun65096_ip = 65;
                continue _fun65096;
            case 52:
                var1 = _closure1_slot6;
                var0 = var1.COMPLETED;
            case 65:
                _fun65096_ip = 80;
                continue _fun65096;
            case 67:
                var1 = _closure1_slot6;
                var0 = var1.CANCELED;
            case 80:
                return var0;
        }
    };
    var2.getRecurrenceStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 8106, 1378, 8107, 1234, 3045, 3132, 21, 667, 22, 2]);