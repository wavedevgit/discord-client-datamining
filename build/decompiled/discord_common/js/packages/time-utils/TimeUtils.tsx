// ../discord_common/js/packages/time-utils/TimeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var17;
    var7 = function arg0() {
        _fun31549: for (var _fun31549_ip = 0;;) switch (_fun31549_ip) {
            case 0:
                var3 = arg0;
                var4 = 'number';
                var2 = typeof var3;
                var1 = var3;
                if (!(var4 !== var2)) {
                    _fun31549_ip = 29;
                    continue _fun31549
                }
            case 19:
                var2 = var3.asMilliseconds;
                var1 = var2.bind(var3)();
            case 29:
                var _closure2_slot0 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var3 = var0.setTimeout;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot13 = var7;
    var5 = function arg0, arg1() {
        _fun31552: for (var _fun31552_ip = 0;;) switch (_fun31552_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var3 = _closure1_slot11;
                var3 = var3.NONE;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 245;
                    continue _fun31552
                }
            case 26:
                var3 = _closure1_slot11;
                var3 = var3.SECONDS;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 236;
                    continue _fun31552
                }
            case 43:
                var3 = _closure1_slot11;
                var3 = var3.MINUTES;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 234;
                    continue _fun31552
                }
            case 60:
                var3 = _closure1_slot11;
                var3 = var3.HOURS;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 225;
                    continue _fun31552
                }
            case 77:
                var3 = _closure1_slot11;
                var3 = var3.DAYS;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 209;
                    continue _fun31552
                }
            case 91:
                var3 = _closure1_slot11;
                var3 = var3.WEEKS;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 186;
                    continue _fun31552
                }
            case 105:
                var3 = _closure1_slot11;
                var3 = var3.MONTHS;
                if (!(var3 !== var2)) {
                    _fun31552_ip = 163;
                    continue _fun31552
                }
            case 119:
                var0 = _closure1_slot11;
                var0 = var0.YEARS;
                if (!(var0 !== var2)) {
                    _fun31552_ip = 137;
                    continue _fun31552
                }
            case 133:
                var0 = undefined;
                return var0;
            case 137:
                var0 = 60;
                var2 = var1 / var0;
                var0 = 24;
                var2 = var2 / var0;
                var0 = 365;
                var0 = var2 / var0;
                return var0;
            case 163:
                var0 = 60;
                var2 = var1 / var0;
                var0 = 24;
                var2 = var2 / var0;
                var0 = 31;
                var0 = var2 / var0;
                return var0;
            case 186:
                var0 = 60;
                var2 = var1 / var0;
                var0 = 24;
                var2 = var2 / var0;
                var0 = 7;
                var0 = var2 / var0;
                return var0;
            case 209:
                var0 = 60;
                var2 = var1 / var0;
                var0 = 24;
                var0 = var2 / var0;
                return var0;
            case 225:
                var0 = 60;
                var0 = var1 / var0;
                return var0;
            case 234:
                return var1;
            case 236:
                var0 = 60;
                var0 = var0 * var1;
                return var0;
            case 245:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot14 = var5;
    var3 = function arg0, arg1() {
        _fun31553: for (var _fun31553_ip = 0;;) switch (_fun31553_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot12;
                var1 = var4.findIndex;
                var0 = function(arg0) { // Environment: var2
                    _fun31554: for (var _fun31554_ip = 0;;) switch (_fun31554_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.max;
                            var1 = var0.unit;
                            var0 = _closure1_slot11;
                            var0 = var0.NONE;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun31554_ip = 45;
                                continue _fun31554
                            }
                        case 34:
                            var1 = _closure2_slot0;
                            var0 = var1 === var2;
                        case 45:
                            if (var0) {
                                _fun31554_ip = 59;
                                continue _fun31554
                            }
                        case 48:
                            var1 = _closure2_slot0;
                            var0 = var1 < var2;
                        case 59:
                            return var0;
                    }
                };
                var6 = var1.bind(var4)(var0);
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var1 = _closure1_slot12;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.unit;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var4.bind(var5)(var1, var0, var6);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun31553_ip = 119;
                    continue _fun31553
                }
            case 83:
                var4 = _closure1_slot12;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.unit;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun31553_ip = 117;
                    continue _fun31553
                }
            case 111:
                var1 = var2.unit;
            case 117:
                return var1;
            case 119:
                var0 = var0.unit;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var4 = 0;
    var6 = var17[var4];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var18 = 1;
    var6 = var17[var18];
    var6 = var8.bind(var0)(var6);
    var6 = 2;
    var6 = var17[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var17[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var17[var6];
    var6 = var16.bind(var0)(var6);
    var14 = function() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.floor;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 5;
        var3 = var6[var0];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.timeOrigin;
        var0 = var6[var0];
        var0 = var5.bind(var4)(var0);
        var4 = var0.performance;
        var0 = var4.now;
        var0 = var0.bind(var4)();
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var14;
    var6 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.time = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'now';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.time;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.time = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'increase';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = var1.time;
            var0 = arg0;
            var0 = var2 + var0;
            var1.time = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var1 = 0;
            var0 = this;
            var0.time = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var13 = var6.bind(var0)();
    var6 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'now';
        var0.key = var4;
        var1 = function() {
            var1 = _closure1_slot7;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var8 = var6.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var6
        }
    });
    var23 = var8;
    var6 = new var23[var6](var22);
    var12 = var6 instanceof Object ? var6 : var8;
    var _closure1_slot8 = var12;
    var6 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function arg0, arg1, arg2, arg3() {
            _fun31568: for (var _fun31568_ip = 0;;) switch (_fun31568_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var4 = arg2;
                    var7 = arg3;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var8 = _closure1_slot5;
                    var6 = _closure2_slot0;
                    var0 = undefined;
                    var6 = var8.bind(var0)(var2, var6);
                    var6 = 0;
                    var2.milliseconds = var6;
                    var8 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.milliseconds;
                        return var0;
                    };
                    var2.asMilliseconds = var8;
                    var8 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.milliseconds;
                        var0 = 1000;
                        var0 = var1 / var0;
                        return var0;
                    };
                    var2.asSeconds = var8;
                    var8 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.milliseconds;
                        var0 = 1000;
                        var1 = var1 / var0;
                        var0 = 60;
                        var0 = var1 / var0;
                        return var0;
                    };
                    var2.asMinutes = var8;
                    var8 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.milliseconds;
                        var0 = 1000;
                        var0 = var1 / var0;
                        var1 = 60;
                        var0 = var0 / var1;
                        var0 = var0 / var1;
                        return var0;
                    };
                    var2.asHours = var8;
                    var8 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = var2.fromMilliseconds;
                        var0 = _closure3_slot0;
                        var3 = var0.milliseconds;
                        var0 = arg0;
                        var0 = var0.milliseconds;
                        var0 = var3 + var0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.add = var8;
                    var8 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = var2.fromMilliseconds;
                        var0 = _closure3_slot0;
                        var3 = var0.milliseconds;
                        var0 = arg0;
                        var0 = var0.milliseconds;
                        var0 = var3 - var0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.subtract = var8;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = var2.fromMilliseconds;
                        var0 = global;
                        var5 = var0.Math;
                        var4 = var5.max;
                        var0 = _closure3_slot0;
                        var3 = var0.milliseconds;
                        var0 = arg0;
                        var0 = var0.milliseconds;
                        var3 = var3 - var0;
                        var0 = 0;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.subtractOrZero = var1;
                    var1 = var2.milliseconds;
                    if (var7) {
                        _fun31568_ip = 141;
                        continue _fun31568
                    }
                case 139:
                    var7 = 0;
                case 141:
                    var1 = var1 + var7;
                    var2.milliseconds = var1;
                    var7 = var2.milliseconds;
                    if (var4) {
                        _fun31568_ip = 162;
                        continue _fun31568
                    }
                case 160:
                    var4 = 0;
                case 162:
                    var1 = 1000;
                    var4 = var1 * var4;
                    var4 = var7 + var4;
                    var2.milliseconds = var4;
                    var7 = var2.milliseconds;
                    if (var3) {
                        _fun31568_ip = 193;
                        continue _fun31568
                    }
                case 191:
                    var3 = 0;
                case 193:
                    var3 = var1 * var3;
                    var4 = 60;
                    var3 = var3 * var4;
                    var3 = var7 + var3;
                    var2.milliseconds = var3;
                    var3 = var2.milliseconds;
                    if (var5) {
                        _fun31568_ip = 225;
                        continue _fun31568
                    }
                case 223:
                    var5 = 0;
                case 225:
                    var1 = var1 * var5;
                    var1 = var1 * var4;
                    var1 = var1 * var4;
                    var1 = var3 + var1;
                    var2.milliseconds = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isGreaterThan';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var1 = var0.milliseconds;
            var0 = arg0;
            var0 = var0.milliseconds;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'isGreaterOrEqualTo';
        var0.key = var5;
        var4 = function arg0() {
            var0 = this;
            var1 = var0.milliseconds;
            var0 = arg0;
            var0 = var0.milliseconds;
            var0 = var1 >= var0;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var11 = var6.bind(var0)();
    var _closure1_slot9 = var11;
    var _closure1_slot3 = var11;
    var6 = function(arg0) { // Environment: var1
        var3 = _closure1_slot3;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = arg0;
        var8 = var1;
        var7 = 0;
        var6 = 0;
        var5 = 0;
        var0 = new var8[var3](var7, var6, var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var11.fromMilliseconds = var6;
    var6 = function(arg0) { // Environment: var1
        var3 = _closure1_slot3;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = arg0;
        var7 = var1;
        var6 = 0;
        var5 = 0;
        var0 = new var7[var3](var6, var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var11.fromSeconds = var6;
    var6 = function(arg0) { // Environment: var1
        var3 = _closure1_slot3;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = 0;
        var4 = arg0;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var11.fromMinutes = var6;
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot3;
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
    var11.fromHours = var6;
    var6 = function() { // Environment: var1
        var4 = function() {
            _fun31583: for (var _fun31583_ip = 0;;) switch (_fun31583_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun31583_ip = 19;
                        continue _fun31583
                    }
                case 12:
                    var1 = _closure1_slot8;
                case 19:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var2, var3);
                    var2.timestampProducer = var1;
                    var2.startTime = var0;
                    var1 = 0;
                    var2.timePassed = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot6;
        var0 = {};
        var2 = 'lastElapsed';
        var0.key = var2;
        var2 = function() {
            var0 = this;
            var0 = var0.timePassed;
            return var0;
        };
        var0.get = var2;
        var2 = new Array(9);
        var2[0] = var0;
        var0 = {};
        var5 = 'lastStartTime';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.startTime;
            return var0;
        };
        var0.get = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'start';
        var0.key = var5;
        var5 = function() {
            _fun31586: for (var _fun31586_ip = 0;;) switch (_fun31586_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.startTime;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun31586_ip = 36;
                        continue _fun31586
                    }
                case 15:
                    var2 = var1.timestampProducer;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.startTime = var0;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'restart';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var2 = var1.timestampProducer;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.startTime = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = undefined;
            var2.startTime = var0;
            var1 = 0;
            var2.timePassed = var1;
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            _fun31589: for (var _fun31589_ip = 0;;) switch (_fun31589_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.startTime;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun31589_ip = 64;
                        continue _fun31589
                    }
                case 15:
                    var2 = var1.timePassed;
                    var3 = var1.timestampProducer;
                    var0 = var3.now;
                    var3 = var0.bind(var3)();
                    var0 = var1.startTime;
                    var0 = var3 - var0;
                    var0 = var2 + var0;
                    var1.timePassed = var0;
                    var0 = undefined;
                    var1.startTime = var0;
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'toggle';
        var0.key = var5;
        var5 = function arg0() {
            _fun31590: for (var _fun31590_ip = 0;;) switch (_fun31590_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.isRunning;
                    var2 = var2.bind(var1)();
                    if (!(var0 !== var2)) {
                        _fun31590_ip = 44;
                        continue _fun31590
                    }
                case 20:
                    if (var0) {
                        _fun31590_ip = 35;
                        continue _fun31590
                    }
                case 23:
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    _fun31590_ip = 44;
                    continue _fun31590;
                case 35:
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'elapsed';
        var0.key = var5;
        var5 = function() {
            _fun31591: for (var _fun31591_ip = 0;;) switch (_fun31591_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.startTime;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun31591_ip = 70;
                        continue _fun31591
                    }
                case 15:
                    var2 = var0.timestampProducer;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = var0.startTime;
                    var4 = var2 - var1;
                    var3 = _closure1_slot9;
                    var2 = var3.fromMilliseconds;
                    var1 = var0.timePassed;
                    var1 = var1 + var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 70:
                    var2 = _closure1_slot9;
                    var1 = var2.fromMilliseconds;
                    var0 = var0.timePassed;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'isRunning';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.startTime;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'startNew';
        var0.key = var5;
        var1 = function() {
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            var1 = var0.start;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var10 = var6.bind(var0)();
    var _closure1_slot10 = var10;
    var6 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function arg0() {
            _fun31595: for (var _fun31595_ip = 0;;) switch (_fun31595_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun31595_ip = 22;
                        continue _fun31595
                    }
                case 15:
                    var5 = _closure1_slot8;
                case 22:
                    var6 = _closure1_slot5;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var0)(var1, var4);
                    var2 = _closure1_slot10;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var4;
                    var8 = var5;
                    var2 = new var9[var2](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var1.stopwatch = var2;
                    var1.state = var3;
                    var2 = var1.stopwatch;
                    var1 = var2.toggle;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'value';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.state;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var3 = var0.stopwatch;
            var2 = var3.toggle;
            var2 = var2.bind(var3)(var1);
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.stopwatch;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var2 = var0.stopwatch;
            var1 = var2.toggle;
            var0 = var0.state;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'totalDuration';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.stopwatch;
            var0 = var1.elapsed;
            var1 = var0.bind(var1)();
            var0 = var1.asMilliseconds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'totalDurationSeconds';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.stopwatch;
            var0 = var1.elapsed;
            var1 = var0.bind(var1)();
            var0 = var1.asSeconds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var9 = var6.bind(var0)();
    var6 = function() { // Environment: var1
        var4 = function arg0() {
            var2 = this;
            var4 = _closure1_slot5;
            var3 = _closure2_slot1;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2.timeout = var3;
            var1 = _closure1_slot10;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.watch = var1;
            return var0;
        };
        var _closure2_slot1 = var4;
        var3 = _closure1_slot6;
        var1 = {};
        var2 = 'hasTimedOut';
        var1.key = var2;
        var2 = function() {
            _fun31603: for (var _fun31603_ip = 0;;) switch (_fun31603_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.watch;
                    var1 = var2.isRunning;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun31603_ip = 58;
                        continue _fun31603
                    }
                case 22:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = '`start` must be called before `hasTimedOut`';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 58:
                    var2 = var0.watch;
                    var1 = var2.elapsed;
                    var2 = var1.bind(var2)();
                    var1 = var2.isGreaterOrEqualTo;
                    var0 = var0.timeout;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var1.value = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var5 = 'start';
        var1.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.watch;
            var0 = var1.start;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var1.value = var5;
        var2[1] = var1;
        var5 = {};
        var1 = 'startNew';
        var5.key = var1;
        var1 = function arg0() {
            var2 = _closure2_slot1;
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
            var1 = var0.start;
            var1 = var1.bind(var0)();
            return var0;
        };
        var5.value = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'waitFor';
        var5.key = var7;
        var8 = _closure1_slot4;
        var0 = undefined;
        var7 = function*(arg0, arg1) { // Environment: var6
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun31607: for (var _fun31607_ip = 0;;) switch (_fun31607_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var9 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun31607_ip = 173;
                            continue _fun31607
                        }
                    case 16:
                        var2 = _closure1_slot9;
                        var4 = var2.fromMilliseconds;
                        var3 = 100;
                        var6 = var4.bind(var2)(var3);
                        var2 = var1 instanceof var2;
                        var3 = var1;
                        var7 = var6;
                        if (var2) {
                            _fun31607_ip = 83;
                            continue _fun31607
                        }
                    case 50:
                        var2 = var1.timeout;
                        var5 = var1.sleep;
                        var4 = null;
                        var3 = var2;
                        var7 = var6;
                        if (!(var4 != var5)) {
                            _fun31607_ip = 83;
                            continue _fun31607
                        }
                    case 74:
                        var7 = var1.sleep;
                        var3 = var2;
                    case 83:
                        var2 = _closure2_slot1;
                        var1 = var2.startNew;
                        var6 = var1.bind(var2)(var3);
                        var5 = undefined;
                        var2 = true;
                    case 107:
                        var1 = var9.bind(var5)();
                        SaveGenerator(address = 115);
                    case 113:
                        return var1;
                    case 115:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun31607_ip = 170;
                            continue _fun31607
                        }
                    case 121:
                        if (!(var2 !== var1)) {
                            _fun31607_ip = 167;
                            continue _fun31607
                        }
                    case 125:
                        var3 = _closure1_slot13;
                        var3 = var3.bind(var5)(var7);
                        SaveGenerator(address = 138);
                    case 136:
                        return var3;
                    case 138:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun31607_ip = 164;
                            continue _fun31607
                        }
                    case 144:
                        var4 = var6.hasTimedOut;
                        var4 = var4.bind(var6)();
                        if (!var4) {
                            _fun31607_ip = 107;
                            continue _fun31607
                        }
                    case 159:
                        var4 = false;
                        return var4;
                    case 164:
                        return var3;
                    case 167:
                        return var2;
                    case 170:
                        return var1;
                    case 173:
                        return var0;
                }
            };
            return var0;
        };
        var7 = var8.bind(var0)(var7);
        var _closure2_slot0 = var7;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var8 = var6.bind(var0)();
    var6 = {};
    var15 = 'NONE';
    var6.NONE = var15;
    var15 = 'SECONDS';
    var6.SECONDS = var15;
    var15 = 'MINUTES';
    var6.MINUTES = var15;
    var15 = 'HOURS';
    var6.HOURS = var15;
    var15 = 'DAYS';
    var6.DAYS = var15;
    var15 = 'WEEKS';
    var6.WEEKS = var15;
    var15 = 'MONTHS';
    var6.MONTHS = var15;
    var15 = 'YEARS';
    var6.YEARS = var15;
    var _closure1_slot11 = var6;
    var15 = {};
    var19 = var6.NONE;
    var15.unit = var19;
    var15.max = var4;
    var4 = new Array(8);
    var4[0] = var15;
    var15 = {};
    var19 = var6.SECONDS;
    var15.unit = var19;
    var15.max = var18;
    var4[1] = var15;
    var15 = {};
    var18 = var6.MINUTES;
    var15.unit = var18;
    var18 = 60;
    var15.max = var18;
    var4[2] = var15;
    var15 = {};
    var18 = var6.HOURS;
    var15.unit = var18;
    var18 = 1440;
    var15.max = var18;
    var4[3] = var15;
    var15 = {};
    var18 = var6.DAYS;
    var15.unit = var18;
    var18 = 44640;
    var15.max = var18;
    var4[4] = var15;
    var15 = {};
    var18 = var6.WEEKS;
    var15.unit = var18;
    var18 = 40320;
    var15.max = var18;
    var4[5] = var15;
    var15 = {};
    var18 = var6.MONTHS;
    var15.unit = var18;
    var18 = 525600;
    var15.max = var18;
    var4[6] = var15;
    var15 = {};
    var18 = var6.YEARS;
    var15.unit = var18;
    var18 = inf;
    var15.max = var18;
    var4[7] = var15;
    var _closure1_slot12 = var4;
    var15 = 7;
    var15 = var17[var15];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = '../discord_common/js/packages/time-utils/TimeUtils.tsx';
    var15 = var16.bind(var17)(var15);
    var2.now = var14;
    var2.ControllableTimeStampProducer = var13;
    var2.TimeStampProducer = var12;
    var2.TimeSpan = var11;
    var2.StopWatch = var10;
    var2.DurationEnabled = var9;
    var2.TimeOut = var8;
    var2.sleep = var7;
    var2.TimeUnits = var6;
    var2.convertMinutesToGivenTimeUnit = var5;
    var2.TimeUnitMax = var4;
    var2.getTimeUnit = var3;
    var1 = function arg0, arg1() {
        _fun31609: for (var _fun31609_ip = 0;;) switch (_fun31609_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun31609_ip = 99;
                    continue _fun31609
                }
            case 18:
                var4 = _closure1_slot15;
                var3 = undefined;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var3)(var5, var2);
                var6 = var1 != var2;
                var4 = null;
                if (!var6) {
                    _fun31609_ip = 57;
                    continue _fun31609
                }
            case 47:
                var0 = _closure1_slot14;
                var4 = var0.bind(var3)(var5, var2);
            case 57:
                var0 = {};
                var0.unit = var2;
                var2 = var1 != var4;
                var1 = null;
                if (!var2) {
                    _fun31609_ip = 92;
                    continue _fun31609
                }
            case 73:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.floor;
                var1 = var2.bind(var3)(var4);
            case 92:
                var0.time = var1;
                return var0;
            case 99:
                var0 = {};
                var1 = _closure1_slot11;
                var1 = var1.NONE;
                var0.unit = var1;
                var1 = 0;
                var0.time = var1;
                return var0;
        }
    };
    var2.getTimeAndUnit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 153, 6, 7, 3530, 637, 3531, 2]);