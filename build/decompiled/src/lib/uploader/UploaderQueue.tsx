// lib/uploader/UploaderQueue.tsx
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
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'UploaderQueue.tsx';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() { // Original name: UploaderQueue, environment: var5
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.queue = var1;
            var1 = false;
            var2.drainingQueue = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'enqueue';
        var4.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var5
            _fun54659: for (var _fun54659_ip = 0;;) switch (_fun54659_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.queue;
                    var2 = var3.unshift;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot3;
                    var2 = var3.log;
                    var0 = var1.drainingQueue;
                    var4 = 'no';
                    if (!var0) {
                        _fun54659_ip = 54;
                        continue _fun54659
                    }
                case 48:
                    var4 = 'yes';
                case 54:
                    var0 = 'enqueue() - alreadying draining? ';
                    var0 = var0 + var4;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.drainingQueue;
                    if (var0) {
                        _fun54659_ip = 88;
                        continue _fun54659
                    }
                case 78:
                    var0 = var1.drainQueue;
                    var0 = var0.bind(var1)();
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(2);
        var1[0] = var4;
        var4 = {};
        var6 = 'drainQueue';
        var4.key = var6;
        var7 = _closure1_slot0;
        var0 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54661: for (var _fun54661_ip = 0;;) switch (_fun54661_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54661_ip = 291;
                            continue _fun54661
                        }
                    case 15:
                        var1 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var _closure4_slot0 = var1;
                        var2 = true;
                        var3.drainingQueue = var2;
                        var10 = _closure1_slot3;
                        var9 = var10.log;
                        var5 = var3.queue;
                        var12 = var5.length;
                        var5 = global;
                        var7 = var5.HermesInternal;
                        var11 = var7.concat;
                        var7 = 'drainQueue() - starting, queue length: ';
                        var7 = var11.bind(var7)(var12);
                        var7 = var9.bind(var10)(var7);
                        var9 = var3.queue;
                        var7 = var9.pop;
                        var9 = var7.bind(var9)();
                        var6 = var9;
                        var7 = null;
                        if (!(var7 != var9)) {
                            _fun54661_ip = 260;
                            continue _fun54661
                        }
                    case 113: // try_start_0
                        var10 = _closure1_slot3;
                        var9 = var10.log;
                        var7 = 'drainQueue() - start uploader';
                        var7 = var9.bind(var10)(var7);
                        var6 = var6.bind(var1)();
                        var8 = var6;
                        _closure4_slot0 = var6;
                        var7 = var5.Promise;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var13 = function(arg0) { // Environment: var4
                            _fun54662: for (var _fun54662_ip = 0;;) switch (_fun54662_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure5_slot0 = var3;
                                    var2 = _closure4_slot0;
                                    var2 = var2._aborted;
                                    if (var2) {
                                        _fun54662_ip = 35;
                                        continue _fun54662
                                    }
                                case 25:
                                    var4 = _closure4_slot0;
                                    var2 = var4._errored;
                                case 35:
                                    if (!var2) {
                                        _fun54662_ip = 44;
                                        continue _fun54662
                                    }
                                case 38:
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                case 44:
                                    var5 = _closure4_slot0;
                                    var4 = var5.addListener;
                                    var3 = 'complete';
                                    var2 = function() { // Environment: var0
                                        var1 = _closure5_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var2 = var4.bind(var5)(var3, var2);
                                    var3 = _closure4_slot0;
                                    var2 = var3.addListener;
                                    var1 = 'error';
                                    var0 = function() { // Environment: var0
                                        var1 = _closure5_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var1, var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var14 = var6;
                        var4 = new var14[var7](var13, var12);
                        var4 = var4 instanceof Object ? var4 : var6;
                        SaveGenerator(address = 179);
                    case 177:
                        return var4;
                    case 179:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54661_ip = 228;
                            continue _fun54661
                        }
                    case 185:
                        var7 = _closure1_slot3;
                        var6 = var7.log;
                        var9 = var8.id;
                        var5 = var5.HermesInternal;
                        var8 = var5.concat;
                        var5 = 'drainQueue() Uploader complete - ';
                        var5 = var8.bind(var5)(var9);
                        var5 = var6.bind(var7)(var5);
                    case 226: // try_end0
                        _fun54661_ip = 247;
                        continue _fun54661;
                    case 228:
                        return var4;
                    case 231: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot3;
                        var4 = var5.error;
                        var4 = var4.bind(var5)(var6);
                    case 247:
                        var4 = var3.drainQueue;
                        var4 = var4.bind(var3)();
                        return var1;
                    case 260:
                        var5 = _closure1_slot3;
                        var4 = var5.log;
                        var2 = 'drainQueue() - No uploads left, setting drainingQueue to false';
                        var2 = var4.bind(var5)(var2);
                        var2 = false;
                        var3.drainingQueue = var2;
                        return var1;
                    case 291:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: drainQueue, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var1[1] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/uploader/UploaderQueue.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3, 2]);