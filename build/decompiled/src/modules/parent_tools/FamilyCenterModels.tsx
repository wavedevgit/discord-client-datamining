// modules/parent_tools/FamilyCenterModels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function arg0, arg1, arg2() {
        _fun18176: for (var _fun18176_ip = 0;;) switch (_fun18176_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun18176_ip = 48;
                    continue _fun18176
                }
            case 35:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var2);
                _fun18176_ip = 86;
                continue _fun18176;
            case 48:
                var5 = global;
                var7 = var5.Reflect;
                var6 = var7.construct;
                var5 = new Array(0);
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 86:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun18177: for (var _fun18177_ip = 0;;) switch (_fun18177_ip) {
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
                _fun18177_ip = 74;
                continue _fun18177;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.hours;
        var1 = 60;
        var1 = var1 * var2;
        var0 = var0.minutes;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot12 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var5 = var5.bind(var0)(var4);
    var8 = var3.Object;
    var4 = var8.freeze;
    var3 = {};
    var9 = 6;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.SUNDAY;
    var3[0] = var10;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.MONDAY;
    var3[1] = var10;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.TUESDAY;
    var3[2] = var10;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.WEDNESDAY;
    var3[3] = var10;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.THURSDAY;
    var3[4] = var10;
    var10 = var7[var9];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.FRIDAY;
    var3[5] = var10;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var9 = var9.DayOfWeek;
    var9 = var9.SATURDAY;
    var3[6] = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            var1 = arg0;
            var4 = this;
            var5 = _closure1_slot2;
            var3 = _closure2_slot0;
            var2 = undefined;
            var5 = var5.bind(var2)(var4, var3);
            var0 = _closure1_slot10;
            var0 = var0.bind(var2)(var4, var3);
            var2 = var1.ruleId;
            var0.ruleId = var2;
            var2 = var1.label;
            var0.label = var2;
            var2 = var1.startTime;
            var0.startTime = var2;
            var2 = var1.endTime;
            var0.endTime = var2;
            var1 = var1.days;
            var0.days = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'isActiveAt';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun18183: for (var _fun18183_ip = 0;;) switch (_fun18183_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var2 = this;
                    var0 = var2.startTime;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun18183_ip = 242;
                        continue _fun18183
                    }
                case 24:
                    var0 = var2.endTime;
                    if (!(var3 != var0)) {
                        _fun18183_ip = 242;
                        continue _fun18183
                    }
                case 37:
                    var0 = var2.days;
                    var3 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var3)) {
                        _fun18183_ip = 242;
                        continue _fun18183
                    }
                case 57:
                    var4 = _closure1_slot12;
                    var0 = var2.startTime;
                    var6 = undefined;
                    var7 = var4.bind(var6)(var0);
                    var0 = var2.endTime;
                    var0 = var4.bind(var6)(var0);
                    var4 = var7 > var0;
                    var9 = var2.days;
                    var8 = var9.includes;
                    var8 = var8.bind(var9)(var5);
                    if (!var8) {
                        _fun18183_ip = 130;
                        continue _fun18183
                    }
                case 111:
                    if (var4) {
                        _fun18183_ip = 126;
                        continue _fun18183
                    }
                case 114:
                    if (!(var1 >= var7)) {
                        _fun18183_ip = 130;
                        continue _fun18183
                    }
                case 118:
                    if (!(var1 < var0)) {
                        _fun18183_ip = 130;
                        continue _fun18183
                    }
                case 122:
                    var8 = true;
                    return var8;
                case 126:
                    if (!(!(var1 >= var7))) {
                        _fun18183_ip = 238;
                        continue _fun18183
                    }
                case 130:
                    if (!var4) {
                        _fun18183_ip = 230;
                        continue _fun18183
                    }
                case 133:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var7 = 6;
                    var4 = var4[var7];
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.DayOfWeek;
                    var4 = var4.MONDAY;
                    if (!(var5 !== var4)) {
                        _fun18183_ip = 178;
                        continue _fun18183
                    }
                case 169:
                    var4 = 1;
                    var4 = var5 - var4;
                    _fun18183_ip = 207;
                    continue _fun18183;
                case 178:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.DayOfWeek;
                    var4 = var3.SUNDAY;
                case 207:
                    var3 = var2.days;
                    var2 = var3.includes;
                    var2 = var2.bind(var3)(var4);
                    if (!var2) {
                        _fun18183_ip = 230;
                        continue _fun18183
                    }
                case 226:
                    if (!(!(var1 < var0))) {
                        _fun18183_ip = 234;
                        continue _fun18183
                    }
                case 230:
                    var0 = false;
                    return var0;
                case 234:
                    var0 = true;
                    return var0;
                case 238:
                    var0 = true;
                    return var0;
                case 242:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var5 = {};
        var0 = 'fromServer';
        var5.key = var0;
        var0 = function arg0() {
            _fun18184: for (var _fun18184_ip = 0;;) switch (_fun18184_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.rule_id;
                    var0.ruleId = var3;
                    var3 = var1.label;
                    var0.label = var3;
                    var6 = var1.start_time;
                    var5 = null;
                    var7 = var5 != var6;
                    var4 = undefined;
                    if (!var7) {
                        _fun18184_ip = 54;
                        continue _fun18184
                    }
                case 51:
                    var4 = var6;
                case 54:
                    var0.startTime = var4;
                    var4 = var1.end_time;
                    var5 = var5 != var4;
                    var3 = undefined;
                    if (!var5) {
                        _fun18184_ip = 77;
                        continue _fun18184
                    }
                case 74:
                    var3 = var4;
                case 77:
                    var0.endTime = var3;
                    var1 = var1.days;
                    var0.days = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var1;
                    var8 = var0;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var7 = 'fromCache';
        var5.key = var7;
        var6 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var4 = var3.bind(var0)(var5);
    var _closure1_slot8 = var4;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var4 = var4.bind(var1)(var3, var2);
            var0 = _closure1_slot10;
            var0 = var0.bind(var1)(var3, var2);
            var1 = arg0;
            var1 = var1.rules;
            var0.rules = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'isInRestrictedHours';
        var0.key = var1;
        var1 = function() {
            _fun18188: for (var _fun18188_ip = 0;;) switch (_fun18188_ip) {
                case 0:
                    var4 = arguments[0];
                    var1 = this;
                    var2 = undefined;
                    if (!(var4 === var2)) {
                        _fun18188_ip = 42;
                        continue _fun18188
                    }
                case 14:
                    var3 = global;
                    var3 = var3.Date;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var5;
                    var3 = new var7[var3](var6);
                    var4 = var3 instanceof Object ? var3 : var5;
                case 42:
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var2;
                    var2 = var1.rules;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun18188_ip = 151;
                        continue _fun18188
                    }
                case 67:
                    var3 = _closure1_slot7;
                    var2 = var4.getDay;
                    var2 = var2.bind(var4)();
                    var2 = var3[var2];
                    _closure3_slot0 = var2;
                    var2 = var4.getHours;
                    var3 = var2.bind(var4)();
                    var2 = 60;
                    var3 = var2 * var3;
                    var2 = var4.getMinutes;
                    var2 = var2.bind(var4)();
                    var2 = var3 + var2;
                    _closure3_slot1 = var2;
                    var2 = var1.rules;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = var3.isActiveAt;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 151:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var5 = {};
        var0 = 'fromServer';
        var5.key = var0;
        var0 = function arg0() {
            _fun18190: for (var _fun18190_ip = 0;;) switch (_fun18190_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun18190_ip = 78;
                        continue _fun18190
                    }
                case 12:
                    var3 = _closure2_slot0;
                    var1 = {};
                    var5 = var2.rules;
                    var4 = var5.map;
                    var2 = _closure1_slot8;
                    var2 = var2.fromServer;
                    var2 = var4.bind(var5)(var2);
                    var1.rules = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var2;
                    var6 = var1;
                    var1 = new var7[var3](var6, var5);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 78:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var7 = 'fromCache';
        var5.key = var7;
        var6 = function arg0() {
            _fun18191: for (var _fun18191_ip = 0;;) switch (_fun18191_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun18191_ip = 78;
                        continue _fun18191
                    }
                case 12:
                    var3 = _closure2_slot0;
                    var1 = {};
                    var5 = var2.rules;
                    var4 = var5.map;
                    var2 = _closure1_slot8;
                    var2 = var2.fromCache;
                    var2 = var4.bind(var5)(var2);
                    var1.rules = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var2;
                    var6 = var1;
                    var1 = new var7[var3](var6, var5);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 78:
                    return var0;
            }
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var _closure1_slot9 = var3;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterModels.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ScheduleRuleRecord = var4;
    var2.RestrictedScheduleRecord = var3;
    var1 = function arg0() {
        _fun18192: for (var _fun18192_ip = 0;;) switch (_fun18192_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var1 = var0 == var6;
                if (var1) {
                    _fun18192_ip = 144;
                    continue _fun18192
                }
            case 15:
                var1 = _closure1_slot9;
                var2 = var6 instanceof var1;
                var1 = var6;
                if (var2) {
                    _fun18192_ip = 141;
                    continue _fun18192
                }
            case 32:
                var2 = var6.rules;
                var2 = var2.length;
                var4 = 0;
                if (!(var4 !== var2)) {
                    _fun18192_ip = 100;
                    continue _fun18192
                }
            case 49:
                var2 = var6.rules;
                var4 = var2[var4];
                var2 = 'ruleId';
                var2 = var2 in var4;
                var5 = _closure1_slot9;
                if (var2) {
                    _fun18192_ip = 87;
                    continue _fun18192
                }
            case 74:
                var2 = var5.fromServer;
                var2 = var2.bind(var5)(var6);
                _fun18192_ip = 98;
                continue _fun18192;
            case 87:
                var4 = var5.fromCache;
                var2 = var4.bind(var5)(var6);
            case 98:
                _fun18192_ip = 138;
                continue _fun18192;
            case 100:
                var5 = _closure1_slot9;
                var3 = {};
                var4 = new Array(0);
                var3.rules = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var7 = var3;
                var3 = new var8[var5](var7, var6);
                var2 = var3 instanceof Object ? var3 : var4;
            case 138:
                var1 = var2;
            case 141:
                var0 = var1;
            case 144:
                return var0;
        }
    };
    var2.ensureRestrictedScheduleRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 1637, 2]);