// ../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            var3 = arg0;
            var2 = this;
            var4 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var2._capacity = var3;
            var2._tokenCount = var3;
            var1 = new Array(0);
            var2._queue = var1;
            var1 = arg1;
            var1 = var1 / var3;
            var2._intervalPeriod = var1;
            var1 = null;
            var2._intervalID = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_processQueue';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                _fun64438: for (var _fun64438_ip = 0;;) switch (_fun64438_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1._queue;
                        var1 = var1.length;
                        var2 = 0;
                        if (!(var1 > var2)) {
                            _fun64438_ip = 159;
                            continue _fun64438
                        }
                    case 27:
                        var1 = _closure3_slot0;
                        var1 = var1._tokenCount;
                        if (!(var1 > var2)) {
                            _fun64438_ip = 159;
                            continue _fun64438
                        }
                    case 41:
                        var1 = _closure3_slot0;
                        var2 = var1._tokenCount;
                        var2 = var2 - 1;
                        var1._tokenCount = var2;
                        var2 = var1._intervalID;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun64438_ip = 111;
                            continue _fun64438
                        }
                    case 72:
                        var3 = _closure3_slot0;
                        var2 = global;
                        var6 = var2.setInterval;
                        var5 = var3._intervalPeriod;
                        var4 = undefined;
                        var2 = function() { // Environment: var2
                            var1 = _closure3_slot0;
                            var0 = var1._iterate;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2 = var6.bind(var4)(var2, var5);
                        var3._intervalID = var2;
                    case 111:
                        var2 = _closure3_slot0;
                        var3 = var2._queue;
                        var2 = var3.shift;
                        var2 = var2.bind(var3)();
                        if (!(var1 != var2)) {
                            _fun64438_ip = 145;
                            continue _fun64438
                        }
                    case 135:
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                    case 145:
                        var1 = _closure3_slot0;
                        var0 = var1._processQueue;
                        var0 = var0.bind(var1)();
                    case 159:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = 0;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = '_iterate';
        var0.key = var5;
        var5 = function() {
            _fun64440: for (var _fun64440_ip = 0;;) switch (_fun64440_ip) {
                case 0:
                    var1 = this;
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var3 = var1._capacity;
                    var6 = var1._tokenCount;
                    var2 = 1;
                    var2 = var6 + var2;
                    var2 = var4.bind(var5)(var3, var2);
                    var1._tokenCount = var2;
                    var3 = var1._tokenCount;
                    var2 = var1._capacity;
                    var2 = var3 >= var2;
                    if (!var2) {
                        _fun64440_ip = 78;
                        continue _fun64440
                    }
                case 66:
                    var4 = var1._intervalID;
                    var3 = null;
                    var2 = var3 != var4;
                case 78:
                    if (!var2) {
                        _fun64440_ip = 108;
                        continue _fun64440
                    }
                case 81:
                    var3 = var0.clearInterval;
                    var2 = var1._intervalID;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = null;
                    var1._intervalID = var0;
                case 108:
                    var0 = var1._processQueue;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'process';
        var0.key = var5;
        var4 = function arg0() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                _fun64442: for (var _fun64442_ip = 0;;) switch (_fun64442_ip) {
                    case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure3_slot1;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun64442_ip = 35;
                            continue _fun64442
                        }
                    case 22:
                        var3 = _closure3_slot1;
                        var3 = var3.aborted;
                        if (var3) {
                            _fun64442_ip = 132;
                            continue _fun64442
                        }
                    case 35:
                        var6 = {};
                        var3 = arg0;
                        var6.resolve = var3;
                        var3 = _closure3_slot1;
                        var6.signal = var3;
                        var _closure4_slot1 = var6;
                        var4 = _closure3_slot0;
                        var5 = var4._queue;
                        var4 = var5.push;
                        var4 = var4.bind(var5)(var6);
                        if (!var3) {
                            _fun64442_ip = 116;
                            continue _fun64442
                        }
                    case 81:
                        var6 = _closure3_slot1;
                        var5 = var6.addEventListener;
                        var4 = {};
                        var3 = true;
                        var4.once = var3;
                        var3 = 'abort';
                        var1 = function() { // Environment: var1
                            _fun64443: for (var _fun64443_ip = 0;;) switch (_fun64443_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    var4 = var0._queue;
                                    var3 = var4.indexOf;
                                    var2 = _closure4_slot1;
                                    var4 = var3.bind(var4)(var2);
                                    var2 = 0;
                                    if (!(var4 >= var2)) {
                                        _fun64443_ip = 62;
                                        continue _fun64443
                                    }
                                case 37:
                                    var1 = _closure3_slot0;
                                    var3 = var1._queue;
                                    var2 = var3.splice;
                                    var1 = 1;
                                    var1 = var2.bind(var3)(var4, var1);
                                case 62:
                                    var2 = _closure4_slot0;
                                    var0 = global;
                                    var3 = var0.Error;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var6 = 'Aborted';
                                    var7 = var1;
                                    var0 = new var7[var3](var6, var5);
                                    var1 = var0 instanceof Object ? var0 : var1;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var1 = var5.bind(var6)(var3, var1, var4);
                    case 116:
                        var1 = _closure3_slot0;
                        var0 = var1._processQueue;
                        var0 = var0.bind(var1)();
                        _fun64442_ip = 173;
                        continue _fun64442;
                    case 132:
                        var0 = global;
                        var3 = var0.Error;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var9 = 'Already aborted';
                        var10 = var1;
                        var0 = new var10[var3](var9, var8);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 173:
                        var0 = undefined;
                        return var0;
                }
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);