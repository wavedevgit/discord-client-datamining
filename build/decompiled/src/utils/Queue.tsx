// utils/Queue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'Queue';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: Queue, environment: var4
            _fun67535: for (var _fun67535_ip = 0;;) switch (_fun67535_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun67535_ip = 22;
                        continue _fun67535
                    }
                case 15:
                    var4 = _closure1_slot4;
                case 22:
                    if (!(var3 === var0)) {
                        _fun67535_ip = 29;
                        continue _fun67535
                    }
                case 26:
                    var3 = 100;
                case 29:
                    var6 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var0)(var2, var5);
                    var2.logger = var4;
                    var2.defaultRetryAfter = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var3;
                    var1 = new var9[var1](var8);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.queue = var1;
                    var1 = null;
                    var2.timeout = var1;
                    var1 = false;
                    var2.draining = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enqueue';
        var0.key = var1;
        var1 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            var1 = this;
            var3 = var1.queue;
            var2 = var3.push;
            var0 = {};
            var4 = arg0;
            var0.message = var4;
            var4 = arg1;
            var0.success = var4;
            var4 = arg2;
            var0.logId = var4;
            var0 = var2.bind(var3)(var0);
            var0 = var1._drainIfNecessary;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'length';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0.queue;
            var0 = var0.length;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_drainIfNecessary';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun67538: for (var _fun67538_ip = 0;;) switch (_fun67538_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var2 = var3.timeout;
                    var1 = null;
                    if (!(var1 === var2)) {
                        _fun67538_ip = 188;
                        continue _fun67538
                    }
                case 24:
                    var1 = var3.queue;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun67538_ip = 188;
                        continue _fun67538
                    }
                case 44:
                    var2 = var3.draining;
                    var1 = true;
                    if (!(var1 !== var2)) {
                        _fun67538_ip = 188;
                        continue _fun67538
                    }
                case 59:
                    var3.draining = var1;
                    var2 = var3.queue;
                    var1 = var2.shift;
                    var1 = var1.bind(var2)();
                    var _closure3_slot1 = var1;
                    var2 = var1.message;
                    var4 = var1.success;
                    var _closure3_slot2 = var4;
                    var9 = var1.logId;
                    var _closure3_slot3 = var9;
                    var5 = var3.logger;
                    var4 = var5.log;
                    var1 = var3.queue;
                    var8 = var1.length;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'Draining message from queue LogId:';
                    var1 = ' QueueLength: ';
                    var1 = var7.bind(var6)(var9, var1, var8);
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.drain;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun67539: for (var _fun67539_ip = 0;;) switch (_fun67539_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var6 = _closure3_slot0;
                                var8 = var6.logger;
                                var7 = var8.log;
                                var11 = _closure3_slot3;
                                var3 = var6.queue;
                                var10 = var3.length;
                                var3 = global;
                                var4 = var3.HermesInternal;
                                var9 = var4.concat;
                                var4 = 'Finished draining message from queue LogId:';
                                var13 = ' QueueLength: ';
                                var4 = var9.bind(var4)(var11, var13, var10);
                                var4 = var7.bind(var8)(var4);
                                var4 = false;
                                var6.draining = var4;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun67539_ip = 210;
                                    continue _fun67539
                                }
                            case 92:
                                var8 = var5.retryAfter;
                                if (!(var4 == var8)) {
                                    _fun67539_ip = 112;
                                    continue _fun67539
                                }
                            case 102:
                                var4 = _closure3_slot0;
                                var8 = var4.defaultRetryAfter;
                            case 112:
                                var5 = _closure3_slot0;
                                var7 = var5.logger;
                                var6 = var7.info;
                                var16 = _closure3_slot3;
                                var4 = var5.queue;
                                var14 = var4.length;
                                var4 = var3.HermesInternal;
                                var10 = var4.concat;
                                var19 = 'Rate limited. Delaying draining of queue for ';
                                var17 = ' ms. LogId:';
                                var18 = var8;
                                var15 = var13;
                                var4 = var19[var10](var18, var17, var16, var15, var14, var13);
                                var4 = var6.bind(var7)(var4);
                                var7 = var3.setTimeout;
                                var6 = undefined;
                                var4 = function() { // Environment: var2
                                    var1 = _closure3_slot0;
                                    var3 = var1.queue;
                                    var2 = var3.unshift;
                                    var0 = _closure3_slot1;
                                    var0 = var2.bind(var3)(var0);
                                    var0 = null;
                                    var1.timeout = var0;
                                    var0 = var1._drainIfNecessary;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var4 = var7.bind(var6)(var4, var8);
                                var5.timeout = var4;
                                _fun67539_ip = 268;
                                continue _fun67539;
                            case 210:
                                var4 = var3.setImmediate;
                                var3 = undefined;
                                var2 = function() { // Environment: var2
                                    var1 = _closure3_slot0;
                                    var0 = var1._drainIfNecessary;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var2 = var4.bind(var3)(var2);
                            case 230: // try_start_0
                                var2 = _closure3_slot2;
                                var1 = var2.bind(var3)(var1);
                            case 239: // try_end0
                                _fun67539_ip = 268;
                                continue _fun67539;
                            case 241: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var0 = _closure3_slot0;
                                var2 = var0.logger;
                                var1 = var2.error;
                                var0 = '';
                                var0 = var1.bind(var2)(var0, var3);
                            case 268:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var3)(var2, var0);
                case 188:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/Queue.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3, 13, 2]);