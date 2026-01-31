// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12640: for (var _fun12640_ip = 0;;) switch (_fun12640_ip) {
        case 0:
            var1 = exports;
            var3 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = function() { // Original name: fetchNativeFrames, environment: var2
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 0;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.NATIVE;
                    var2 = var3.fetchNativeFrames;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        _fun12643: for (var _fun12643_ip = 0;;) switch (_fun12643_ip) {
                            case 0:
                                var2 = arg0;
                                if (var2) {
                                    _fun12643_ip = 28;
                                    continue _fun12643
                                }
                            case 9:
                                var4 = _closure3_slot1;
                                var3 = undefined;
                                var1 = 'Native frames response is null.';
                                var1 = var4.bind(var3)(var1);
                                _fun12643_ip = 39;
                                continue _fun12643;
                            case 28:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 39:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var0, var2);
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = 'Fetching native frames took too long. Dropping frames.';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 2000;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var _closure1_slot5 = var0;
            var0 = function(arg0, arg1) { // Original name: isClose, environment: var2
                var0 = global;
                var2 = var0.Math;
                var1 = var2.abs;
                var3 = arg0;
                var0 = arg1;
                var0 = var3 - var0;
                var1 = var1.bind(var2)(var0);
                var0 = 0.05;
                var0 = var1 < var0;
                return var0;
            };
            var _closure1_slot6 = var0;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var1, var0, var4);
            var0 = var3;
            if (!var0) {
                _fun12640_ip = 84;
                continue _fun12640
            }
        case 78:
            var0 = var3.__awaiter;
        case 84:
            if (var0) {
                _fun12640_ip = 92;
                continue _fun12640
            }
        case 87:
            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                _fun12647: for (var _fun12647_ip = 0;;) switch (_fun12647_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12647_ip = 48;
                            continue _fun12647
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12648: for (var _fun12648_ip = 0;;) switch (_fun12648_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun12649: for (var _fun12649_ip = 0;;) switch (_fun12649_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12649_ip = 52;
                                                continue _fun12649;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun12650: for (var _fun12650_ip = 0;;) switch (_fun12650_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12650_ip = 53;
                                                continue _fun12650;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun12651: for (var _fun12651_ip = 0;;) switch (_fun12651_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12651_ip = 54;
                                                    continue _fun12651
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun12652: for (var _fun12652_ip = 0;;) switch (_fun12652_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12652_ip = 52;
                                                                continue _fun12652
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12651_ip = 73;
                                                continue _fun12651;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12648_ip = 70;
                                        continue _fun12648
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 92:
            var _closure1_slot2 = var0;
            var0 = 'NativeFrames';
            var _closure1_slot3 = var0;
            var0 = function() { // Original name: nativeFramesIntegration, environment: var2
                var0 = null;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var6 = var5[var0];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var8 = var6.AsyncExpiringMap;
                var6 = {};
                var7 = 60000;
                var6.ttl = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var10 = var7;
                var9 = var6;
                var6 = new var10[var8](var9, var8);
                var6 = var6 instanceof Object ? var6 : var7;
                var _closure2_slot1 = var6;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var4 = var0.AsyncExpiringMap;
                var0 = {};
                var3 = 2000;
                var0.ttl = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var3;
                var9 = var0;
                var0 = new var10[var4](var9, var8);
                var0 = var0 instanceof Object ? var0 : var3;
                var _closure2_slot2 = var0;
                var0 = function(arg0) { // Original name: fetchStartFramesForSpan, environment: var1
                    _fun12655: for (var _fun12655_ip = 0;;) switch (_fun12655_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.isRootSpan;
                            var2 = var2.bind(var4)(var3);
                            if (!var2) {
                                _fun12655_ip = 188;
                                continue _fun12655
                            }
                        case 45:
                            var2 = var3.spanContext;
                            var2 = var2.bind(var3)();
                            var4 = var2.spanId;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 2;
                            var2 = var5[var2];
                            var2 = var3.bind(var0)(var2);
                            var5 = var2.debug;
                            var3 = var5.log;
                            var13 = _closure1_slot3;
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var8 = var2.concat;
                            var14 = '[';
                            var12 = '] Fetching frames for root span start (';
                            var10 = ').';
                            var11 = var4;
                            var2 = var14[var8](var13, var12, var11, var10, var9);
                            var2 = var3.bind(var5)(var2);
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var6 = var1.Promise;
                            var1 = var6.prototype;
                            var5 = Object.create(var1, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var13 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = _closure1_slot5;
                                var0 = undefined;
                                var4 = var2.bind(var0)();
                                var3 = var4.then;
                                var2 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 2;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var4 = var2.debug;
                                    var3 = var4.log;
                                    var6 = _closure1_slot3;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var5 = var1.concat;
                                    var2 = '[';
                                    var1 = '] Error while fetching native frames.';
                                    var2 = var5.bind(var2)(var6, var1);
                                    var1 = arg0;
                                    var1 = var3.bind(var4)(var2, var1);
                                    var2 = _closure4_slot0;
                                    var1 = null;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var14 = var5;
                            var1 = new var14[var6](var13, var12);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var2.bind(var3)(var4, var1);
                        case 188:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var0 = function(arg0) { // Original name: fetchEndFramesForSpan, environment: var1
                    _fun12659: for (var _fun12659_ip = 0;;) switch (_fun12659_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var7 = 2;
                            var1 = var8[var7];
                            var6 = undefined;
                            var3 = var4.bind(var6)(var1);
                            var1 = var3.timestampInSeconds;
                            var1 = var1.bind(var3)();
                            var _closure3_slot0 = var1;
                            var1 = var5.spanContext;
                            var1 = var1.bind(var5)();
                            var3 = var1.spanId;
                            var1 = 3;
                            var1 = var8[var1];
                            var4 = var4.bind(var6)(var1);
                            var1 = var4.isRootSpan;
                            var1 = var1.bind(var4)(var5);
                            if (var1) {
                                _fun12659_ip = 200;
                                continue _fun12659
                            }
                        case 86:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var7];
                            var1 = var4.bind(var6)(var1);
                            var5 = var1.debug;
                            var4 = var5.log;
                            var15 = _closure1_slot3;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var10 = var1.concat;
                            var16 = '[';
                            var14 = '] Fetch frames for child span end (';
                            var12 = ').';
                            var13 = var3;
                            var1 = var16[var10](var15, var14, var13, var12, var11);
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure1_slot5;
                            var5 = var1.bind(var6)();
                            var4 = var5.then;
                            var1 = function(arg0) { // Environment: var0
                                var1 = {};
                                var0 = _closure3_slot0;
                                var1.timestamp = var0;
                                var0 = arg0;
                                var1.nativeFrames = var0;
                                _closure2_slot0 = var1;
                                var0 = undefined;
                                return var0;
                            };
                            var5 = var4.bind(var5)(var1);
                            var4 = var5.catch;
                            var1 = function(arg0) { // Environment: var0
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.debug;
                                var2 = var3.log;
                                var5 = _closure1_slot3;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var1 = '[';
                                var0 = '] Error while fetching native frames.';
                                var1 = var4.bind(var1)(var5, var0);
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var4.bind(var5)(var1);
                            return var6;
                        case 200:
                            var5 = _closure2_slot1;
                            var4 = var5.has;
                            var4 = var4.bind(var5)(var3);
                            if (var4) {
                                _fun12659_ip = 222;
                                continue _fun12659
                            }
                        case 220:
                            return var6;
                        case 222:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var6 = var4.debug;
                            var5 = var6.log;
                            var15 = _closure1_slot3;
                            var4 = global;
                            var2 = var4.HermesInternal;
                            var9 = var2.concat;
                            var16 = '[';
                            var14 = '] Fetch frames for root span end (';
                            var12 = ').';
                            var13 = var3;
                            var2 = var16[var9](var15, var14, var13, var12, var11);
                            var2 = var5.bind(var6)(var2);
                            var2 = _closure2_slot2;
                            var1 = var2.set;
                            var5 = var4.Promise;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var15 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = _closure1_slot5;
                                var0 = undefined;
                                var4 = var2.bind(var0)();
                                var3 = var4.then;
                                var2 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = {};
                                    var0 = _closure3_slot0;
                                    var1.timestamp = var0;
                                    var0 = arg0;
                                    var1.nativeFrames = var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 2;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var4 = var2.debug;
                                    var3 = var4.log;
                                    var6 = _closure1_slot3;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var5 = var1.concat;
                                    var2 = '[';
                                    var1 = '] Error while fetching native frames.';
                                    var2 = var5.bind(var2)(var6, var1);
                                    var1 = arg0;
                                    var1 = var3.bind(var4)(var2, var1);
                                    var2 = _closure4_slot0;
                                    var1 = null;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var16 = var4;
                            var0 = new var16[var5](var15, var14);
                            var0 = var0 instanceof Object ? var0 : var4;
                            var0 = var1.bind(var2)(var3, var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot4 = var0;
                var0 = {};
                var2 = _closure1_slot3;
                var0.name = var2;
                var2 = function(arg0) { // Original name: setup, environment: var1
                    _fun12665: for (var _fun12665_ip = 0;;) switch (_fun12665_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var3 = 0;
                            var1 = var0[var3];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.NATIVE;
                            var6 = var1.enableNative;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            if (var6) {
                                _fun12665_ip = 113;
                                continue _fun12665
                            }
                        case 50:
                            var6 = 2;
                            var6 = var1[var6];
                            var6 = var2.bind(var0)(var6);
                            var7 = var6.debug;
                            var6 = var7.warn;
                            var10 = _closure1_slot3;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var9 = var5.concat;
                            var8 = '[';
                            var5 = '] This is not available on the Web, Expo Go and other platforms without native modules.';
                            var5 = var9.bind(var8)(var10, var5);
                            var5 = var6.bind(var7)(var5);
                            _fun12665_ip = 185;
                            continue _fun12665;
                        case 113:
                            var1 = var1[var3];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.NATIVE;
                            var1 = var2.enableNativeFramesTracking;
                            var1 = var1.bind(var2)();
                            var5 = var4.on;
                            var3 = _closure2_slot3;
                            var2 = 'spanStart';
                            var2 = var5.bind(var4)(var2, var3);
                            var3 = var4.on;
                            var2 = _closure2_slot4;
                            var1 = 'spanEnd';
                            var1 = var3.bind(var4)(var1, var2);
                        case 185:
                            return var0;
                    }
                };
                var0.setup = var2;
                var1 = function(arg0) { // Original name: processEvent, environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot2;
                    var3 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun12668: for (var _fun12668_ip = 0;;) switch (_fun12668_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun12668_ip = 1098;
                                        continue _fun12668
                                    }
                                case 10:
                                    var1 = _closure3_slot0;
                                    var2 = var1.type;
                                    var1 = 'transaction';
                                    if (!(var1 === var2)) {
                                        _fun12668_ip = 113;
                                        continue _fun12668
                                    }
                                case 30:
                                    var1 = _closure3_slot0;
                                    var1 = var1.transaction;
                                    if (!var1) {
                                        _fun12668_ip = 113;
                                        continue _fun12668
                                    }
                                case 43:
                                    var1 = _closure3_slot0;
                                    var1 = var1.contexts;
                                    if (!var1) {
                                        _fun12668_ip = 113;
                                        continue _fun12668
                                    }
                                case 56:
                                    var1 = _closure3_slot0;
                                    var1 = var1.contexts;
                                    var1 = var1.trace;
                                    if (!var1) {
                                        _fun12668_ip = 113;
                                        continue _fun12668
                                    }
                                case 75:
                                    var1 = _closure3_slot0;
                                    var1 = var1.timestamp;
                                    if (!var1) {
                                        _fun12668_ip = 113;
                                        continue _fun12668
                                    }
                                case 88:
                                    var1 = _closure3_slot0;
                                    var1 = var1.contexts;
                                    var1 = var1.trace;
                                    var1 = var1.span_id;
                                    if (var1) {
                                        _fun12668_ip = 120;
                                        continue _fun12668
                                    }
                                case 113:
                                    var1 = _closure3_slot0;
                                    return var1;
                                case 120:
                                    var1 = _closure3_slot0;
                                    var2 = var1.contexts;
                                    var2 = var2.trace;
                                    var19 = var2.op;
                                    var1 = var1.contexts;
                                    var1 = var1.trace;
                                    var12 = var1.span_id;
                                    var2 = _closure2_slot1;
                                    var1 = var2.pop;
                                    var1 = var1.bind(var2)(var12);
                                    SaveGenerator(address = 181);
                                case 179:
                                    return var1;
                                case 181:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun12668_ip = 1095;
                                        continue _fun12668
                                    }
                                case 190:
                                    if (var1) {
                                        _fun12668_ip = 296;
                                        continue _fun12668
                                    }
                                case 193:
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var3 = 2;
                                    var6 = var6[var3];
                                    var3 = undefined;
                                    var3 = var7.bind(var3)(var6);
                                    var7 = var3.debug;
                                    var6 = var7.warn;
                                    var26 = _closure1_slot3;
                                    var2 = _closure3_slot0;
                                    var24 = var2.transaction;
                                    var22 = var2.event_id;
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var11 = var3.concat;
                                    var27 = '[';
                                    var25 = '] Start frames of transaction ';
                                    var23 = ' (eventId, ';
                                    var21 = ') are missing, but the transaction already ended.';
                                    var3 = var27[var11](var26, var25, var24, var23, var22, var21, var20);
                                    var3 = var6.bind(var7)(var3);
                                    return var2;
                                case 296:
                                    var3 = _closure2_slot2;
                                    var2 = var3.pop;
                                    var2 = var2.bind(var3)(var12);
                                    SaveGenerator(address = 315);
                                case 313:
                                    return var2;
                                case 315:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun12668_ip = 1092;
                                        continue _fun12668
                                    }
                                case 324:
                                    if (!var2) {
                                        _fun12668_ip = 364;
                                        continue _fun12668
                                    }
                                case 327:
                                    var9 = _closure1_slot6;
                                    var7 = var2.timestamp;
                                    var6 = _closure3_slot0;
                                    var6 = var6.timestamp;
                                    var8 = undefined;
                                    var6 = var9.bind(var8)(var7, var6);
                                    if (var6) {
                                        _fun12668_ip = 585;
                                        continue _fun12668
                                    }
                                case 364:
                                    var6 = _closure2_slot0;
                                    if (!var6) {
                                        _fun12668_ip = 409;
                                        continue _fun12668
                                    }
                                case 371:
                                    var11 = _closure1_slot6;
                                    var7 = _closure2_slot0;
                                    var9 = var7.timestamp;
                                    var7 = _closure3_slot0;
                                    var7 = var7.timestamp;
                                    var10 = undefined;
                                    var7 = var11.bind(var10)(var9, var7);
                                    if (var7) {
                                        _fun12668_ip = 497;
                                        continue _fun12668
                                    }
                                case 409:
                                    var13 = _closure1_slot0;
                                    var11 = _closure1_slot1;
                                    var9 = 2;
                                    var11 = var11[var9];
                                    var9 = undefined;
                                    var9 = var13.bind(var9)(var11);
                                    var11 = var9.debug;
                                    var9 = var11.warn;
                                    var26 = _closure1_slot3;
                                    var7 = global;
                                    var7 = var7.HermesInternal;
                                    var15 = var7.concat;
                                    var27 = '[';
                                    var25 = '] Frames were collected within larger than margin of error delay for spanId (';
                                    var23 = '). Dropping the inaccurate values.';
                                    var24 = var12;
                                    var7 = var27[var15](var26, var25, var24, var23, var22);
                                    var7 = var9.bind(var11)(var7);
                                    var7 = _closure3_slot0;
                                    return var7;
                                case 497:
                                    var9 = _closure1_slot0;
                                    var11 = _closure1_slot1;
                                    var7 = 2;
                                    var7 = var11[var7];
                                    var7 = var9.bind(var10)(var7);
                                    var9 = var7.debug;
                                    var7 = var9.log;
                                    var26 = _closure1_slot3;
                                    var6 = global;
                                    var6 = var6.HermesInternal;
                                    var13 = var6.concat;
                                    var27 = '[';
                                    var25 = '] Using native frames from last child span end (spanId, ';
                                    var23 = ').';
                                    var24 = var12;
                                    var6 = var27[var13](var26, var25, var24, var23, var22);
                                    var6 = var7.bind(var9)(var6);
                                    var5 = _closure2_slot0;
                                    var6 = var5.nativeFrames;
                                    _fun12668_ip = 667;
                                    continue _fun12668;
                                case 585:
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot1;
                                    var5 = 2;
                                    var5 = var9[var5];
                                    var5 = var7.bind(var8)(var5);
                                    var7 = var5.debug;
                                    var5 = var7.log;
                                    var26 = _closure1_slot3;
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var10 = var3.concat;
                                    var27 = '[';
                                    var25 = '] Using frames from root span end (spanId, ';
                                    var23 = ').';
                                    var24 = var12;
                                    var3 = var27[var10](var26, var25, var24, var23, var22);
                                    var3 = var5.bind(var7)(var3);
                                    var6 = var2.nativeFrames;
                                case 667:
                                    var8 = {};
                                    var3 = {};
                                    var7 = var6.totalFrames;
                                    var5 = var1.totalFrames;
                                    var5 = var7 - var5;
                                    var3.value = var5;
                                    var5 = 'none';
                                    var3.unit = var5;
                                    var8.frames_total = var3;
                                    var3 = {};
                                    var9 = var6.frozenFrames;
                                    var7 = var1.frozenFrames;
                                    var7 = var9 - var7;
                                    var3.value = var7;
                                    var3.unit = var5;
                                    var8.frames_frozen = var3;
                                    var3 = {};
                                    var7 = var6.slowFrames;
                                    var6 = var1.slowFrames;
                                    var6 = var7 - var6;
                                    var3.value = var6;
                                    var3.unit = var5;
                                    var8.frames_slow = var3;
                                    var3 = var8.frames_frozen;
                                    var3 = var3.value;
                                    var5 = 0;
                                    if (!(var3 <= var5)) {
                                        _fun12668_ip = 819;
                                        continue _fun12668
                                    }
                                case 786:
                                    var3 = var8.frames_slow;
                                    var3 = var3.value;
                                    if (!(var3 <= var5)) {
                                        _fun12668_ip = 819;
                                        continue _fun12668
                                    }
                                case 801:
                                    var3 = var8.frames_total;
                                    var3 = var3.value;
                                    if (!(!(var3 <= var5))) {
                                        _fun12668_ip = 1004;
                                        continue _fun12668
                                    }
                                case 819:
                                    var7 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var13 = 2;
                                    var6 = var3[var13];
                                    var3 = undefined;
                                    var6 = var7.bind(var3)(var6);
                                    var10 = var6.debug;
                                    var7 = var10.log;
                                    var18 = _closure1_slot3;
                                    var5 = _closure3_slot0;
                                    var22 = var5.transaction;
                                    var9 = global;
                                    var11 = var9.JSON;
                                    var6 = var11.stringify;
                                    var20 = var6.bind(var11)(var8, var3, var13);
                                    var6 = var9.HermesInternal;
                                    var15 = var6.concat;
                                    var27 = '[';
                                    var25 = '] Adding measurements to ';
                                    var23 = ' transaction ';
                                    var21 = ': ';
                                    var26 = var18;
                                    var24 = var19;
                                    var6 = var27[var15](var26, var25, var24, var23, var22, var21, var20, var19);
                                    var6 = var7.bind(var10)(var6);
                                    var7 = var9.Object;
                                    var6 = var7.assign;
                                    var11 = var9.Object;
                                    var10 = var11.assign;
                                    var9 = var5.measurements;
                                    var13 = null;
                                    if (!(var13 !== var9)) {
                                        _fun12668_ip = 976;
                                        continue _fun12668
                                    }
                                case 972:
                                    if (!(var3 === var9)) {
                                        _fun12668_ip = 978;
                                        continue _fun12668
                                    }
                                case 976:
                                    var9 = {};
                                case 978:
                                    var3 = {};
                                    var3 = var10.bind(var11)(var3, var9);
                                    var3 = var6.bind(var7)(var3, var8);
                                    var5.measurements = var3;
                                    var3 = _closure3_slot0;
                                    _fun12668_ip = 1089;
                                    continue _fun12668;
                                case 1004:
                                    var8 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var6 = 2;
                                    var7 = var7[var6];
                                    var6 = undefined;
                                    var6 = var8.bind(var6)(var7);
                                    var7 = var6.debug;
                                    var6 = var7.warn;
                                    var26 = _closure1_slot3;
                                    var5 = global;
                                    var5 = var5.HermesInternal;
                                    var10 = var5.concat;
                                    var27 = '[';
                                    var25 = '] Detected zero slow or frozen frames. Not adding measurements to spanId (';
                                    var23 = ').';
                                    var24 = var12;
                                    var5 = var27[var10](var26, var25, var24, var23, var22);
                                    var5 = var6.bind(var7)(var5);
                                    var3 = _closure3_slot0;
                                case 1089:
                                    return var3;
                                case 1092:
                                    return var2;
                                case 1095:
                                    return var1;
                                case 1098:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var0 = var7[var2](var6, var5, var4, var3, var2);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
            };
            var _closure1_slot4 = var0;
            var2 = function(arg0) { // Original name: createNativeFramesIntegrations, environment: var2
                _fun12669: for (var _fun12669_ip = 0;;) switch (_fun12669_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun12669_ip = 80;
                            continue _fun12669
                        }
                    case 6:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var3 = 0;
                        var2 = var0[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        var2 = var2.NATIVE;
                        var2 = var2.enableNative;
                        if (!var2) {
                            _fun12669_ip = 80;
                            continue _fun12669
                        }
                    case 45:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.NATIVE;
                        var1 = var2.disableNativeFramesTracking;
                        var1 = var1.bind(var2)();
                        return var0;
                    case 80:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var1.createNativeFramesIntegrations = var2;
            var1.nativeFramesIntegration = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [998, 1162, 817, 1118]);