// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() { // Original name: AsyncExpiringMap, environment: var4
            _fun12669: for (var _fun12669_ip = 0;;) switch (_fun12669_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var3 = arguments.length;
                    var1 = 0;
                    if (!(var3 > var1)) {
                        _fun12669_ip = 24;
                        continue _fun12669
                    }
                case 16:
                    var3 = arguments[var1];
                    if (!(var0 === var3)) {
                        _fun12669_ip = 28;
                        continue _fun12669
                    }
                case 24:
                    var3 = {};
                    _fun12669_ip = 32;
                    continue _fun12669;
                case 28:
                    var3 = arguments[var1];
                case 32:
                    var4 = var3.cleanupInterval;
                    var1 = 5000;
                    if (!(var0 !== var4)) {
                        _fun12669_ip = 51;
                        continue _fun12669
                    }
                case 48:
                    var1 = var4;
                case 51:
                    var4 = var3.ttl;
                    var3 = 2000;
                    if (!(var0 !== var4)) {
                        _fun12669_ip = 70;
                        continue _fun12669
                    }
                case 67:
                    var3 = var4;
                case 70:
                    var5 = _closure1_slot1;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var2._ttl = var3;
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var3](var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2._map = var3;
                    var2._cleanupIntervalMs = var1;
                    var1 = var2.startCleanup;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'set';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: set, environment: var4
            _fun12670: for (var _fun12670_ip = 0;;) switch (_fun12670_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._cleanupInterval;
                    if (var2) {
                        _fun12670_ip = 34;
                        continue _fun12670
                    }
                case 24:
                    var2 = var1.startCleanup;
                    var2 = var2.bind(var1)();
                case 34:
                    var4 = 'object';
                    var2 = typeof var3;
                    if (!(var4 === var2)) {
                        _fun12670_ip = 59;
                        continue _fun12670
                    }
                case 45:
                    if (!var3) {
                        _fun12670_ip = 59;
                        continue _fun12670
                    }
                case 48:
                    var2 = 'then';
                    var2 = var2 in var3;
                    if (var2) {
                        _fun12670_ip = 123;
                        continue _fun12670
                    }
                case 59:
                    var6 = var1._map;
                    var4 = var6.set;
                    var2 = {};
                    var2.value = var3;
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var8 = var7.bind(var8)();
                    var7 = var1._ttl;
                    var7 = var8 + var7;
                    var2.expiresAt = var7;
                    var7 = null;
                    var2.promise = var7;
                    var2 = var4.bind(var6)(var5, var2);
                    _fun12670_ip = 185;
                    continue _fun12670;
                case 123:
                    var4 = {};
                    var2 = undefined;
                    var4.value = var2;
                    var2 = null;
                    var4.expiresAt = var2;
                    var4.promise = var3;
                    var _closure3_slot1 = var4;
                    var2 = var1._map;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5, var4);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot1;
                        var1 = arg0;
                        var2.value = var1;
                        var2 = _closure3_slot1;
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var3 = var1.bind(var3)();
                        var1 = _closure3_slot0;
                        var1 = var1._ttl;
                        var1 = var3 + var1;
                        var2.expiresAt = var1;
                        var1 = _closure3_slot1;
                        var0 = null;
                        var1.promise = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot1;
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var3 = var1.bind(var3)();
                        var1 = _closure3_slot0;
                        var1 = var1._ttl;
                        var1 = var3 + var1;
                        var2.expiresAt = var1;
                        var1 = _closure3_slot1;
                        var0 = null;
                        var1.promise = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 185:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'pop';
        var0.key = var5;
        var5 = function(arg0) { // Original name: pop, environment: var4
            var3 = arg0;
            var1 = this;
            var0 = var1.get;
            var0 = var0.bind(var1)(var3);
            var2 = var1._map;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: get, environment: var4
            _fun12674: for (var _fun12674_ip = 0;;) switch (_fun12674_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0._map;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var3);
                    if (var1) {
                        _fun12674_ip = 29;
                        continue _fun12674
                    }
                case 25:
                    var2 = undefined;
                    return var2;
                case 29:
                    var2 = var1.promise;
                    if (var2) {
                        _fun12674_ip = 100;
                        continue _fun12674
                    }
                case 38:
                    var2 = var1.expiresAt;
                    if (!var2) {
                        _fun12674_ip = 74;
                        continue _fun12674
                    }
                case 47:
                    var5 = var1.expiresAt;
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var2 = var5 <= var4;
                case 74:
                    if (!var2) {
                        _fun12674_ip = 93;
                        continue _fun12674
                    }
                case 77:
                    var2 = var0._map;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                case 93:
                    var0 = var1.value;
                    _fun12674_ip = 106;
                    continue _fun12674;
                case 100:
                    var0 = var1.promise;
                case 106:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function(arg0) { // Original name: has, environment: var4
            _fun12675: for (var _fun12675_ip = 0;;) switch (_fun12675_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var1 = var3._map;
                    var0 = var1.get;
                    var4 = var0.bind(var1)(var5);
                    var1 = !var4;
                    var0 = !var1;
                    if (var1) {
                        _fun12675_ip = 112;
                        continue _fun12675
                    }
                case 31:
                    var1 = var4.promise;
                    var2 = !var1;
                    var1 = !var2;
                    if (!var2) {
                        _fun12675_ip = 109;
                        continue _fun12675
                    }
                case 46:
                    var2 = var4.expiresAt;
                    if (!var2) {
                        _fun12675_ip = 82;
                        continue _fun12675
                    }
                case 55:
                    var6 = var4.expiresAt;
                    var4 = global;
                    var7 = var4.Date;
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var2 = var6 <= var4;
                case 82:
                    var2 = !var2;
                    if (var2) {
                        _fun12675_ip = 106;
                        continue _fun12675
                    }
                case 88:
                    var4 = var3._map;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var5);
                    var2 = false;
                case 106:
                    var1 = var2;
                case 109:
                    var0 = var1;
                case 112:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'ttl';
        var0.key = var5;
        var5 = function(arg0) { // Original name: ttl, environment: var4
            _fun12676: for (var _fun12676_ip = 0;;) switch (_fun12676_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._map;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    var3 = var1 == var0;
                    var1 = undefined;
                    var2 = undefined;
                    if (var3) {
                        _fun12676_ip = 41;
                        continue _fun12676
                    }
                case 35:
                    var2 = var0.expiresAt;
                case 41:
                    if (var2) {
                        _fun12676_ip = 46;
                        continue _fun12676
                    }
                case 44:
                    return var1;
                case 46:
                    var1 = var0.expiresAt;
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1 = var1 - var0;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun12676_ip = 82;
                        continue _fun12676
                    }
                case 79:
                    var0 = var1;
                case 82:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'cleanup';
        var0.key = var5;
        var5 = function() { // Original name: cleanup, environment: var4
            _fun12677: for (var _fun12677_ip = 0;;) switch (_fun12677_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var8 = var1.bind(var3)();
                    var3 = var2._map;
                    var1 = var3.entries;
                    var1 = var1.bind(var3)();
                    var7 = var1;
                    var3 = var7[Symbol.iterator];
                    var7 = var3().next;
                    var5 = 2;
                    var4 = 0;
                    var1 = 1;
                case 61:
                    var12 = var7().value;
                    var11 = var3;
                    if (!(var11 !== var0)) {
                        _fun12677_ip = 152;
                        continue _fun12677
                    }
                case 72: // try_start_0
                    var11 = _closure1_slot0;
                    var11 = var11.bind(var0)(var12, var5);
                    var9 = var11[var4];
                    var12 = var11[var1];
                    var10 = var12;
                    var12 = var12.expiresAt;
                    var11 = var12;
                    if (!var12) {
                        _fun12677_ip = 121;
                        continue _fun12677
                    }
                case 105:
                    var12 = var10;
                    var13 = var12.expiresAt;
                    var12 = var8;
                    var11 = var13 <= var12;
                case 121:
                    if (!var11) {
                        _fun12677_ip = 143;
                        continue _fun12677
                    }
                case 124:
                    var13 = var2._map;
                    var12 = var13.delete;
                    var11 = var9;
                    var11 = var12.bind(var13)(var11);
                case 143: // try_end0
                    _fun12677_ip = 61;
                    continue _fun12677;
                case 145: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var3.return();
                    throw var1;
                case 152:
                    var1 = var2._map;
                    var1 = var1.size;
                    if (var1) {
                        _fun12677_ip = 176;
                        continue _fun12677
                    }
                case 166:
                    var1 = var2.stopCleanup;
                    var1 = var1.bind(var2)();
                case 176:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() { // Original name: clear, environment: var4
            _fun12678: for (var _fun12678_ip = 0;;) switch (_fun12678_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._cleanupInterval;
                    if (!var1) {
                        _fun12678_ip = 33;
                        continue _fun12678
                    }
                case 12:
                    var1 = global;
                    var3 = var1.clearInterval;
                    var2 = var0._cleanupInterval;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                case 33:
                    var1 = var0._map;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'stopCleanup';
        var0.key = var5;
        var5 = function() { // Original name: stopCleanup, environment: var4
            _fun12679: for (var _fun12679_ip = 0;;) switch (_fun12679_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._cleanupInterval;
                    if (!var1) {
                        _fun12679_ip = 33;
                        continue _fun12679
                    }
                case 12:
                    var1 = global;
                    var2 = var1.clearInterval;
                    var1 = var0._cleanupInterval;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'startCleanup';
        var0.key = var5;
        var4 = function() { // Original name: startCleanup, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var0 = global;
            var4 = var0.setInterval;
            var3 = var2._cleanupIntervalMs;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.cleanup;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var4.bind(var0)(var1, var3);
            var2._cleanupInterval = var1;
            return var0;
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.AsyncExpiringMap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7]);