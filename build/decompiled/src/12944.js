// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            _fun99348: for (var _fun99348_ip = 0;;) switch (_fun99348_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = arg0;
                    var2._client = var3;
                    var3 = 60;
                    var2.flushTimeout = var3;
                    var3 = global;
                    var4 = var3.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2._pendingAggregates = var4;
                    var4 = true;
                    var2._isEnabled = var4;
                    var4 = var3.setInterval;
                    var5 = var2.flushTimeout;
                    var3 = 1000;
                    var3 = var3 * var5;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.flush;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2._intervalId = var1;
                    var1 = var2._intervalId;
                    var1 = var1.unref;
                    if (!var1) {
                        _fun99348_ip = 163;
                        continue _fun99348
                    }
                case 147:
                    var3 = var2._intervalId;
                    var1 = var3.unref;
                    var1 = var1.bind(var3)();
                case 163:
                    var1 = arg1;
                    var2._sessionAttrs = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'flush';
        var0.key = var1;
        var1 = function() {
            _fun99350: for (var _fun99350_ip = 0;;) switch (_fun99350_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.getSessionAggregates;
                    var2 = var1.bind(var0)();
                    var1 = var2.aggregates;
                    var3 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var3)) {
                        _fun99350_ip = 83;
                        continue _fun99350
                    }
                case 32:
                    var1 = global;
                    var1 = var1.Map;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var5 = var3;
                    var1 = new var5[var1](var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0._pendingAggregates = var1;
                    var1 = var0._client;
                    var0 = var1.sendSession;
                    var0 = var0.bind(var1)(var2);
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'getSessionAggregates';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = global;
            var3 = var0.Array;
            var2 = var3.from;
            var4 = var1._pendingAggregates;
            var0 = var4.values;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var0);
            var2 = {};
            var1 = var1._sessionAttrs;
            var2.attrs = var1;
            var2.aggregates = var0;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var0 = var1.dropUndefinedKeys;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = global;
            var3 = var0.clearInterval;
            var1 = var2._intervalId;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = false;
            var2._isEnabled = var1;
            var1 = var2.flush;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'incrementSessionStatusCount';
        var0.key = var5;
        var5 = function() {
            _fun99353: for (var _fun99353_ip = 0;;) switch (_fun99353_ip) {
                case 0:
                    var5 = this;
                    var0 = var5._isEnabled;
                    if (!var0) {
                        _fun99353_ip = 131;
                        continue _fun99353
                    }
                case 12:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.getIsolationScope;
                    var1 = var0.bind(var1)();
                    var0 = var1.getRequestSession;
                    var0 = var0.bind(var1)();
                    var3 = var0;
                    if (!var3) {
                        _fun99353_ip = 68;
                        continue _fun99353
                    }
                case 63:
                    var3 = var0.status;
                case 68:
                    if (!var3) {
                        _fun99353_ip = 131;
                        continue _fun99353
                    }
                case 71:
                    var4 = var5._incrementSessionStatusCount;
                    var3 = var0.status;
                    var0 = global;
                    var0 = var0.Date;
                    var6 = var0.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var6;
                    var0 = new var9[var0](var8);
                    var0 = var0 instanceof Object ? var0 : var6;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.setRequestSession;
                    var0 = var0.bind(var1)(var2);
                case 131:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_incrementSessionStatusCount';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun99354: for (var _fun99354_ip = 0;;) switch (_fun99354_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var5 = global;
                    var2 = var5.Date;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = arg1;
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var0 = var2.setSeconds;
                    var1 = 0;
                    var6 = var0.bind(var2)(var1, var1);
                    var2 = var4._pendingAggregates;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var6);
                    if (var0) {
                        _fun99354_ip = 136;
                        continue _fun99354
                    }
                case 70:
                    var2 = {};
                    var5 = var5.Date;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var7;
                    var9 = var6;
                    var5 = new var10[var5](var9, var8);
                    var7 = var5 instanceof Object ? var5 : var7;
                    var5 = var7.toISOString;
                    var5 = var5.bind(var7)();
                    var2.started = var5;
                    var5 = var4._pendingAggregates;
                    var4 = var5.set;
                    var4 = var4.bind(var5)(var6, var2);
                    var0 = var2;
                case 136:
                    var2 = 'errored';
                    if (!(var2 !== var3)) {
                        _fun99354_ip = 216;
                        continue _fun99354
                    }
                case 144:
                    var2 = 'ok';
                    if (!(var2 !== var3)) {
                        _fun99354_ip = 184;
                        continue _fun99354
                    }
                case 152:
                    var3 = var0.crashed;
                    if (var3) {
                        _fun99354_ip = 163;
                        continue _fun99354
                    }
                case 161:
                    var3 = 0;
                case 163:
                    var2 = 1;
                    var2 = var3 + var2;
                    var0.crashed = var2;
                    var2 = var0.crashed;
                    return var2;
                case 184:
                    var3 = var0.exited;
                    if (var3) {
                        _fun99354_ip = 195;
                        continue _fun99354
                    }
                case 193:
                    var3 = 0;
                case 195:
                    var2 = 1;
                    var2 = var3 + var2;
                    var0.exited = var2;
                    var2 = var0.exited;
                    return var2;
                case 216:
                    var2 = var0.errored;
                    if (var2) {
                        _fun99354_ip = 227;
                        continue _fun99354
                    }
                case 225:
                    var2 = 0;
                case 227:
                    var1 = 1;
                    var1 = var2 + var1;
                    var0.errored = var1;
                    var0 = var0.errored;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.SessionFlusher = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12858, 12923]);