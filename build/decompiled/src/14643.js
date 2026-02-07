// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun114214: for (var _fun114214_ip = 0;;) switch (_fun114214_ip) {
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
                _fun114214_ip = 76;
                continue _fun114214;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TimeoutError;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114219: for (var _fun114219_ip = 0;;) switch (_fun114219_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot3;
                    var2 = _closure2_slot4;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var3, var2);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var4)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot10;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun114219_ip = 62;
                        continue _fun114219
                    }
                case 49:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var3, var4);
                    _fun114219_ip = 100;
                    continue _fun114219;
                case 62:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var4)(var3);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var1 = var7.bind(var8)(var9, var5, var6);
                case 100:
                    var2 = var2.bind(var4)(var3, var1);
                    var8 = 0;
                    var2._intervalCount = var8;
                    var2._intervalEnd = var8;
                    var2._pendingCount = var8;
                    var1 = _closure1_slot8;
                    var2._resolveEmpty = var1;
                    var2._resolveIdle = var1;
                    var1 = global;
                    var10 = var1.Object;
                    var9 = var10.assign;
                    var3 = {
                        'carryoverConcurrencyCount': false,
                        'intervalCap': inf,
                        'interval': 0,
                        'concurrency': inf,
                        'autoStart': true
                    };
                    var5 = false;
                    var7 = inf;
                    var6 = true;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var0 = 7;
                    var0 = var12[var0];
                    var0 = var11.bind(var4)(var0);
                    var0 = var0.default;
                    var3.queueClass = var0;
                    var0 = arg0;
                    var0 = var9.bind(var10)(var3, var0);
                    var3 = var0.intervalCap;
                    var9 = 'number';
                    var3 = typeof var3;
                    if (!(var9 === var3)) {
                        _fun114219_ip = 255;
                        continue _fun114219
                    }
                case 239:
                    var9 = var0.intervalCap;
                    var3 = 1;
                    if (!(!(var9 >= var3))) {
                        _fun114219_ip = 376;
                        continue _fun114219
                    }
                case 255:
                    var10 = var1.TypeError;
                    var12 = var0.intervalCap;
                    var11 = null;
                    var3 = undefined;
                    if (!(var11 !== var12)) {
                        _fun114219_ip = 290;
                        continue _fun114219
                    }
                case 275:
                    var3 = undefined;
                    if (!(var4 !== var12)) {
                        _fun114219_ip = 290;
                        continue _fun114219
                    }
                case 281:
                    var9 = var12.toString;
                    var3 = var9.bind(var12)();
                case 290:
                    var9 = '';
                    var14 = var9;
                    if (!(var11 !== var3)) {
                        _fun114219_ip = 311;
                        continue _fun114219
                    }
                case 301:
                    var14 = var9;
                    if (!(var4 !== var3)) {
                        _fun114219_ip = 311;
                        continue _fun114219
                    }
                case 308:
                    var14 = var3;
                case 311:
                    var3 = var0.intervalCap;
                    var9 = var1.HermesInternal;
                    var13 = var9.concat;
                    var19 = 'Expected `intervalCap` to be a number from 1 and up, got `';
                    var17 = '` (';
                    var16 = typeof var3;
                    var15 = ')';
                    var18 = var14;
                    var18 = var19[var13](var18, var17, var16, var15, var14);
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var10
                        }
                    });
                    var19 = var9;
                    var3 = new var19[var10](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var9;
                    throw var3;
                case 376:
                    var3 = var0.interval;
                    if (!(var4 !== var3)) {
                        _fun114219_ip = 598;
                        continue _fun114219
                    }
                case 389:
                    var10 = var1.Number;
                    var9 = var10.isFinite;
                    var3 = var0.interval;
                    var3 = var9.bind(var10)(var3);
                    if (!var3) {
                        _fun114219_ip = 598;
                        continue _fun114219
                    }
                case 418:
                    var3 = var0.interval;
                    if (!(var3 >= var8)) {
                        _fun114219_ip = 598;
                        continue _fun114219
                    }
                case 431:
                    var3 = var0.carryoverConcurrencyCount;
                    var2._carryoverConcurrencyCount = var3;
                    var3 = var0.intervalCap;
                    var3 = var3 === var7;
                    if (var3) {
                        _fun114219_ip = 466;
                        continue _fun114219
                    }
                case 456:
                    var7 = var0.interval;
                    var3 = var8 === var7;
                case 466:
                    var2._isIntervalIgnored = var3;
                    var3 = var0.intervalCap;
                    var2._intervalCap = var3;
                    var3 = var0.interval;
                    var2._interval = var3;
                    var3 = var0.queueClass;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var19 = var7;
                    var3 = new var19[var3](var18);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var2._queue = var3;
                    var3 = var0.queueClass;
                    var2._queueClass = var3;
                    var3 = var0.concurrency;
                    var2.concurrency = var3;
                    var3 = var0.timeout;
                    var2._timeout = var3;
                    var3 = var0.throwOnTimeout;
                    var3 = var6 === var3;
                    var2._throwOnTimeout = var3;
                    var3 = var0.autoStart;
                    var3 = var5 === var3;
                    var2._isPaused = var3;
                    return var2;
                case 598:
                    var2 = var1.TypeError;
                    var6 = var0.interval;
                    var7 = null;
                    var3 = undefined;
                    if (!(var7 !== var6)) {
                        _fun114219_ip = 633;
                        continue _fun114219
                    }
                case 618:
                    var3 = undefined;
                    if (!(var3 !== var6)) {
                        _fun114219_ip = 633;
                        continue _fun114219
                    }
                case 624:
                    var5 = var6.toString;
                    var3 = var5.bind(var6)();
                case 633:
                    var5 = '';
                    var6 = var5;
                    if (!(var7 !== var3)) {
                        _fun114219_ip = 654;
                        continue _fun114219
                    }
                case 644:
                    var6 = var5;
                    if (!(var4 !== var3)) {
                        _fun114219_ip = 654;
                        continue _fun114219
                    }
                case 651:
                    var6 = var3;
                case 654:
                    var0 = var0.interval;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var19 = 'Expected `interval` to be a finite number >= 0, got `';
                    var17 = '` (';
                    var16 = typeof var0;
                    var15 = ')';
                    var18 = var6;
                    var18 = var19[var5](var18, var17, var16, var15, var14);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var19 = var1;
                    var0 = new var19[var2](var18, var17);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot4 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_doesIntervalAllowAnother';
        var4.key = var0;
        var0 = function() {
            _fun114220: for (var _fun114220_ip = 0;;) switch (_fun114220_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isIntervalIgnored;
                    if (var0) {
                        _fun114220_ip = 28;
                        continue _fun114220
                    }
                case 12:
                    var2 = var1._intervalCount;
                    var1 = var1._intervalCap;
                    var0 = var2 < var1;
                case 28:
                    return var0;
            }
        };
        var4.get = var0;
        var0 = new Array(23);
        var0[0] = var4;
        var4 = {};
        var7 = '_doesConcurrentAllowAnother';
        var4.key = var7;
        var7 = function() {
            var0 = this;
            var1 = var0._pendingCount;
            var0 = var0._concurrency;
            var0 = var1 < var0;
            return var0;
        };
        var4.get = var7;
        var0[1] = var4;
        var4 = {};
        var7 = '_next';
        var4.key = var7;
        var7 = function() {
            var2 = this;
            var0 = var2._pendingCount;
            var0 = var0 - 1;
            var2._pendingCount = var0;
            var0 = var2._tryToStartAnother;
            var0 = var0.bind(var2)();
            var1 = var2.emit;
            var0 = 'next';
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = '_resolvePromises';
        var4.key = var7;
        var7 = function() {
            _fun114223: for (var _fun114223_ip = 0;;) switch (_fun114223_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._resolveEmpty;
                    var0 = var0.bind(var2)();
                    var1 = _closure1_slot8;
                    var2._resolveEmpty = var1;
                    var3 = var2._pendingCount;
                    var1 = 0;
                    if (!(var1 === var3)) {
                        _fun114223_ip = 73;
                        continue _fun114223
                    }
                case 38:
                    var1 = var2._resolveIdle;
                    var1 = var1.bind(var2)();
                    var0 = _closure1_slot8;
                    var2._resolveIdle = var0;
                    var1 = var2.emit;
                    var0 = 'idle';
                    var0 = var1.bind(var2)(var0);
                case 73:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = '_onResumeInterval';
        var4.key = var7;
        var7 = function() {
            var1 = this;
            var0 = var1._onInterval;
            var0 = var0.bind(var1)();
            var0 = var1._initializeIntervalIfNeeded;
            var0 = var0.bind(var1)();
            var0 = undefined;
            var1._timeoutId = var0;
            return var0;
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = '_isIntervalPaused';
        var4.key = var7;
        var7 = function() {
            _fun114225: for (var _fun114225_ip = 0;;) switch (_fun114225_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = global;
                    var4 = var3.Date;
                    var0 = var4.now;
                    var4 = var0.bind(var4)();
                    var0 = var1._intervalId;
                    var5 = undefined;
                    if (!(var5 === var0)) {
                        _fun114225_ip = 116;
                        continue _fun114225
                    }
                case 38:
                    var0 = var1._intervalEnd;
                    var4 = var0 - var4;
                    var0 = 0;
                    if (!(!(var4 < var0))) {
                        _fun114225_ip = 93;
                        continue _fun114225
                    }
                case 54:
                    var6 = var1._timeoutId;
                    if (!(var5 === var6)) {
                        _fun114225_ip = 89;
                        continue _fun114225
                    }
                case 64:
                    var3 = var3.setTimeout;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1._onResumeInterval;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2, var4);
                    var1._timeoutId = var2;
                case 89:
                    var2 = true;
                    return var2;
                case 93:
                    var2 = var1._carryoverConcurrencyCount;
                    var0 = 0;
                    if (!var2) {
                        _fun114225_ip = 110;
                        continue _fun114225
                    }
                case 104:
                    var0 = var1._pendingCount;
                case 110:
                    var1._intervalCount = var0;
                case 116:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var7;
        var0[5] = var4;
        var4 = {};
        var7 = '_tryToStartAnother';
        var4.key = var7;
        var7 = function() {
            _fun114227: for (var _fun114227_ip = 0;;) switch (_fun114227_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._queue;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun114227_ip = 135;
                        continue _fun114227
                    }
                case 20:
                    var0 = var1._isPaused;
                    if (var0) {
                        _fun114227_ip = 131;
                        continue _fun114227
                    }
                case 29:
                    var0 = var1._isIntervalPaused;
                    var0 = var0.bind(var1)();
                    var3 = !var0;
                    var0 = var1._doesIntervalAllowAnother;
                    if (!var0) {
                        _fun114227_ip = 131;
                        continue _fun114227
                    }
                case 55:
                    var0 = var1._doesConcurrentAllowAnother;
                    if (!var0) {
                        _fun114227_ip = 131;
                        continue _fun114227
                    }
                case 66:
                    var2 = var1._queue;
                    var0 = var2.dequeue;
                    var4 = var0.bind(var2)();
                    var2 = !var4;
                    var0 = !var2;
                    if (var2) {
                        _fun114227_ip = 129;
                        continue _fun114227
                    }
                case 91:
                    var5 = var1.emit;
                    var2 = 'active';
                    var2 = var5.bind(var1)(var2);
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    var0 = true;
                    if (!var3) {
                        _fun114227_ip = 129;
                        continue _fun114227
                    }
                case 117:
                    var3 = var1._initializeIntervalIfNeeded;
                    var3 = var3.bind(var1)();
                    var0 = true;
                case 129:
                    return var0;
                case 131:
                    var0 = false;
                    return var0;
                case 135:
                    var0 = var1._intervalId;
                    if (!var0) {
                        _fun114227_ip = 165;
                        continue _fun114227
                    }
                case 144:
                    var0 = global;
                    var3 = var0.clearInterval;
                    var2 = var1._intervalId;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                case 165:
                    var0 = undefined;
                    var1._intervalId = var0;
                    var0 = var1._resolvePromises;
                    var0 = var0.bind(var1)();
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var7;
        var0[6] = var4;
        var4 = {};
        var7 = '_initializeIntervalIfNeeded';
        var4.key = var7;
        var7 = function() {
            _fun114228: for (var _fun114228_ip = 0;;) switch (_fun114228_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1._isIntervalIgnored;
                    if (var0) {
                        _fun114228_ip = 30;
                        continue _fun114228
                    }
                case 18:
                    var4 = var1._intervalId;
                    var3 = undefined;
                    var0 = var3 !== var4;
                case 30:
                    if (var0) {
                        _fun114228_ip = 99;
                        continue _fun114228
                    }
                case 33:
                    var0 = global;
                    var5 = var0.setInterval;
                    var4 = var1._interval;
                    var3 = undefined;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1._onInterval;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var5.bind(var3)(var2, var4);
                    var1._intervalId = var2;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var2 = var0.bind(var2)();
                    var0 = var1._interval;
                    var0 = var2 + var0;
                    var1._intervalEnd = var0;
                case 99:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[7] = var4;
        var4 = {};
        var7 = '_onInterval';
        var4.key = var7;
        var7 = function() {
            _fun114230: for (var _fun114230_ip = 0;;) switch (_fun114230_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._intervalCount;
                    var0 = 0;
                    var2 = var0 === var2;
                    if (!var2) {
                        _fun114230_ip = 28;
                        continue _fun114230
                    }
                case 18:
                    var3 = var1._pendingCount;
                    var2 = var0 === var3;
                case 28:
                    if (!var2) {
                        _fun114230_ip = 37;
                        continue _fun114230
                    }
                case 31:
                    var2 = var1._intervalId;
                case 37:
                    if (!var2) {
                        _fun114230_ip = 67;
                        continue _fun114230
                    }
                case 40:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = var1._intervalId;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var1._intervalId = var2;
                case 67:
                    var2 = var1._carryoverConcurrencyCount;
                    var0 = 0;
                    if (!var2) {
                        _fun114230_ip = 84;
                        continue _fun114230
                    }
                case 78:
                    var0 = var1._pendingCount;
                case 84:
                    var1._intervalCount = var0;
                    var0 = var1._processQueue;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[8] = var4;
        var4 = {};
        var7 = '_processQueue';
        var4.key = var7;
        var7 = function() {
            _fun114231: for (var _fun114231_ip = 0;;) switch (_fun114231_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._tryToStartAnother;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun114231_ip = 29;
                        continue _fun114231
                    }
                case 16:
                    var0 = var1._tryToStartAnother;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun114231_ip = 16;
                        continue _fun114231
                    }
                case 29:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[9] = var4;
        var4 = {};
        var7 = 'concurrency';
        var4.key = var7;
        var7 = function() {
            var0 = this;
            var0 = var0._concurrency;
            return var0;
        };
        var4.get = var7;
        var7 = function arg0() {
            _fun114233: for (var _fun114233_ip = 0;;) switch (_fun114233_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var7 = typeof var0;
                    var2 = 'number';
                    if (!(var2 === var7)) {
                        _fun114233_ip = 24;
                        continue _fun114233
                    }
                case 17:
                    var2 = 1;
                    if (!(!(var0 >= var2))) {
                        _fun114233_ip = 91;
                        continue _fun114233
                    }
                case 24:
                    var2 = global;
                    var4 = var2.TypeError;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var12 = 'Expected `concurrency` to be a number from 1 and up, got `';
                    var10 = '` (';
                    var8 = ')';
                    var11 = var0;
                    var9 = var7;
                    var11 = var12[var6](var11, var10, var9, var8, var7);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = var3;
                    var2 = new var12[var4](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 91:
                    var1._concurrency = var0;
                    var0 = var1._processQueue;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.set = var7;
        var0[10] = var4;
        var4 = {};
        var7 = 'add';
        var4.key = var7;
        var7 = _closure1_slot2;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun114235: for (var _fun114235_ip = 0;;) switch (_fun114235_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun114235_ip = 99;
                            continue _fun114235
                        }
                    case 9:
                        var5 = undefined;
                        var4 = undefined;
                        var2 = arg0;
                        var _closure4_slot0 = var2;
                        var _closure4_slot2 = var5;
                        var2 = this;
                        var _closure4_slot1 = var2;
                        var2 = arguments.length;
                        var3 = 1;
                        if (!(var2 > var3)) {
                            _fun114235_ip = 49;
                            continue _fun114235
                        }
                    case 41:
                        var2 = arguments[var3];
                        if (!(var5 === var2)) {
                            _fun114235_ip = 53;
                            continue _fun114235
                        }
                    case 49:
                        var2 = {};
                        _fun114235_ip = 57;
                        continue _fun114235;
                    case 53:
                        var2 = arguments[var3];
                    case 57:
                        _closure4_slot2 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var6 = function(arg0, arg1) { // Environment: var1
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var _closure5_slot1 = var1;
                            var1 = function() { // Environment: var0
                                var3 = _closure1_slot2;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun114239: for (var _fun114239_ip = 0;;) switch (_fun114239_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun114239_ip = 258;
                                                    continue _fun114239
                                                }
                                            case 10:
                                                var3 = _closure4_slot1;
                                                var2 = var3._pendingCount;
                                                var2 = var2 + 1;
                                                var3._pendingCount = var2;
                                                var2 = var3._intervalCount;
                                                var2 = var2 + 1;
                                                var3._intervalCount = var2;
                                            case 47: // try_start_0
                                                var2 = _closure4_slot1;
                                                var2 = var2._timeout;
                                                var4 = undefined;
                                                if (!(var4 === var2)) {
                                                    _fun114239_ip = 77;
                                                    continue _fun114239
                                                }
                                            case 63:
                                                var2 = _closure4_slot2;
                                                var2 = var2.timeout;
                                                if (!(var4 !== var2)) {
                                                    _fun114239_ip = 186;
                                                    continue _fun114239
                                                }
                                            case 77:
                                                var3 = _closure1_slot0;
                                                var5 = _closure1_slot1;
                                                var2 = 6;
                                                var2 = var5[var2];
                                                var7 = var3.bind(var4)(var2);
                                                var6 = var7.default;
                                                var2 = global;
                                                var5 = var2.Promise;
                                                var3 = var5.resolve;
                                                var2 = _closure4_slot0;
                                                var2 = var2.bind(var4)();
                                                var5 = var3.bind(var5)(var2);
                                                var2 = _closure4_slot2;
                                                var2 = var2.timeout;
                                                if (!(var4 !== var2)) {
                                                    _fun114239_ip = 158;
                                                    continue _fun114239
                                                }
                                            case 146:
                                                var2 = _closure4_slot2;
                                                var3 = var2.timeout;
                                                _fun114239_ip = 168;
                                                continue _fun114239;
                                            case 158:
                                                var2 = _closure4_slot1;
                                                var3 = var2._timeout;
                                            case 168:
                                                var2 = function() { // Environment: var2
                                                    _fun114240: for (var _fun114240_ip = 0;;) switch (_fun114240_ip) {
                                                        case 0:
                                                            var0 = _closure4_slot2;
                                                            var1 = var0.throwOnTimeout;
                                                            var0 = undefined;
                                                            if (!(var0 !== var1)) {
                                                                _fun114240_ip = 31;
                                                                continue _fun114240
                                                            }
                                                        case 19:
                                                            var1 = _closure4_slot2;
                                                            var1 = var1.throwOnTimeout;
                                                            _fun114240_ip = 41;
                                                            continue _fun114240;
                                                        case 31:
                                                            var2 = _closure4_slot1;
                                                            var1 = var2._throwOnTimeout;
                                                        case 41:
                                                            if (!var1) {
                                                                _fun114240_ip = 63;
                                                                continue _fun114240
                                                            }
                                                        case 44:
                                                            var2 = _closure5_slot1;
                                                            var1 = _closure1_slot9;
                                                            var1 = var2.bind(var0)(var1);
                                                        case 63:
                                                            return var0;
                                                    }
                                                };
                                                var2 = var6.bind(var7)(var5, var3, var2);
                                                _fun114239_ip = 194;
                                                continue _fun114239;
                                            case 186:
                                                var3 = _closure4_slot0;
                                                var2 = var3.bind(var4)();
                                            case 194:
                                                var3 = _closure5_slot0;
                                                SaveGenerator(address = 205);
                                            case 203:
                                                return var2;
                                            case 205:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                                if (var5) {
                                                    _fun114239_ip = 218;
                                                    continue _fun114239
                                                }
                                            case 211:
                                                var3 = var3.bind(var4)(var2);
                                            case 216: // try_end0
                                                _fun114239_ip = 237;
                                                continue _fun114239;
                                            case 218:
                                                return var2;
                                            case 221: // catch_target0
                                                CatchBlockStart(arg_register = 4);
                                                var3 = _closure5_slot1;
                                                var2 = undefined;
                                                var2 = var3.bind(var2)(var4);
                                            case 237:
                                                var2 = _closure4_slot1;
                                                var1 = var2._next;
                                                var1 = var1.bind(var2)();
                                                var1 = undefined;
                                                return var1;
                                            case 258:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure6_slot0 = var1;
                                var0 = function() {
                                    var0 = undefined;
                                    var3 = _closure6_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = undefined;
                            var5 = var1.bind(var0)();
                            var3 = _closure4_slot1;
                            var4 = var3._queue;
                            var2 = var4.enqueue;
                            var1 = _closure4_slot2;
                            var1 = var2.bind(var4)(var5, var1);
                            var1 = var3._tryToStartAnother;
                            var1 = var1.bind(var3)();
                            var2 = var3.emit;
                            var1 = 'add';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var7 = var2;
                        var1 = new var7[var3](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 99:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot3 = var6;
        var6 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'addAll';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun114244: for (var _fun114244_ip = 0;;) switch (_fun114244_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun114244_ip = 71;
                            continue _fun114244
                        }
                    case 12:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = this;
                        var _closure4_slot1 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.all;
                        var4 = var5.map;
                        var6 = function() { // Environment: var1
                            var3 = _closure1_slot2;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun114247: for (var _fun114247_ip = 0;;) switch (_fun114247_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun114247_ip = 35;
                                                continue _fun114247
                                            }
                                        case 7:
                                            var4 = _closure4_slot1;
                                            var3 = var4.add;
                                            var2 = _closure4_slot0;
                                            var1 = arg0;
                                            var1 = var3.bind(var4)(var1, var2);
                                            return var1;
                                        case 35:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function(arg0) { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = undefined;
                        var1 = var6.bind(var1)();
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot2 = var6;
        var6 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'start';
        var4.key = var6;
        var6 = function() {
            _fun114250: for (var _fun114250_ip = 0;;) switch (_fun114250_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._isPaused;
                    if (!var1) {
                        _fun114250_ip = 30;
                        continue _fun114250
                    }
                case 12:
                    var1 = false;
                    var0._isPaused = var1;
                    var1 = var0._processQueue;
                    var1 = var1.bind(var0)();
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'pause';
        var4.key = var6;
        var6 = function() {
            var1 = true;
            var0 = this;
            var0._isPaused = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'clear';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1._queueClass;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var3 = var2;
            var0 = new var3[var0](var2);
            var0 = var0 instanceof Object ? var0 : var2;
            var1._queue = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'onEmpty';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114254: for (var _fun114254_ip = 0;;) switch (_fun114254_ip) {
                    case 0:
                        StartGenerator();
                        var2 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114254_ip = 76;
                            continue _fun114254
                        }
                    case 12:
                        var _closure4_slot0 = var2;
                        var2 = var2._queue;
                        var3 = var2.size;
                        var2 = 0;
                        if (!(var2 === var3)) {
                            _fun114254_ip = 38;
                            continue _fun114254
                        }
                    case 33:
                        var2 = undefined;
                        return var2;
                    case 38:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = _closure4_slot0;
                            var2 = var1._resolveEmpty;
                            var _closure5_slot1 = var2;
                            var0 = function() { // Environment: var0
                                var2 = _closure5_slot1;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1._resolveEmpty = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 76:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'onIdle';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114259: for (var _fun114259_ip = 0;;) switch (_fun114259_ip) {
                    case 0:
                        StartGenerator();
                        var2 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114259_ip = 86;
                            continue _fun114259
                        }
                    case 12:
                        var _closure4_slot0 = var2;
                        var4 = var2._pendingCount;
                        var3 = 0;
                        if (!(var3 === var4)) {
                            _fun114259_ip = 48;
                            continue _fun114259
                        }
                    case 28:
                        var2 = var2._queue;
                        var2 = var2.size;
                        if (!(var3 === var2)) {
                            _fun114259_ip = 48;
                            continue _fun114259
                        }
                    case 43:
                        var2 = undefined;
                        return var2;
                    case 48:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = _closure4_slot0;
                            var2 = var1._resolveIdle;
                            var _closure5_slot1 = var2;
                            var0 = function() { // Environment: var0
                                var2 = _closure5_slot1;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1._resolveIdle = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var2;
                        var1 = new var6[var3](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 86:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
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
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'size';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._queue;
            var0 = var0.size;
            return var0;
        };
        var4.get = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'sizeBy';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0._queue;
            var1 = var2.filter;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.length;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'pending';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._pendingCount;
            return var0;
        };
        var4.get = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isPaused';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._isPaused;
            return var0;
        };
        var4.get = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'timeout';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._timeout;
            return var0;
        };
        var4.get = var6;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._timeout = var1;
            var0 = undefined;
            return var0;
        };
        var4.set = var5;
        var0[22] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 14644, 14646, 14648]);