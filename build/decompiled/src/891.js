// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = var2.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var4 = var2.Symbol;
    var3 = var4.for;
    var2 = 'SentryBufferFullError';
    var2 = var3.bind(var4)(var2);
    var _closure1_slot2 = var2;
    var1.SENTRY_BUFFER_FULL_ERROR = var2;
    var0 = function() {
        _fun9409: for (var _fun9409_ip = 0;;) switch (_fun9409_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = function arg0() {
                    var2 = _closure2_slot1;
                    var1 = var2.delete;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot2 = var0;
                var0 = arguments.length;
                var2 = 0;
                var5 = var0 > var2;
                var6 = 100;
                var0 = var6;
                if (!var5) {
                    _fun9409_ip = 48;
                    continue _fun9409
                }
            case 33:
                var5 = arguments[var2];
                var0 = var6;
                if (!(var4 !== var5)) {
                    _fun9409_ip = 48;
                    continue _fun9409
                }
            case 44:
                var0 = arguments[var2];
            case 48:
                var _closure2_slot0 = var0;
                var0 = global;
                var0 = var0.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var2;
                var0 = new var7[var0](var6);
                var0 = var0 instanceof Object ? var0 : var2;
                var _closure2_slot1 = var0;
                var0 = {};
                var3 = function() {
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = '$';
                Object.defineProperty(var0, var2, {
                    get: var3,
                    set: var4,
                    enumerable: true
                });
                var2 = function arg0() {
                    _fun9412: for (var _fun9412_ip = 0;;) switch (_fun9412_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = var0.size;
                            var0 = _closure2_slot0;
                            if (!(!(var3 < var0))) {
                                _fun9412_ip = 63;
                                continue _fun9412
                            }
                        case 22:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 0;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.rejectedSyncPromise;
                            var0 = _closure1_slot2;
                            var0 = var3.bind(var4)(var0);
                            return var0;
                        case 63:
                            var3 = arg0;
                            var0 = undefined;
                            var0 = var3.bind(var0)();
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot1;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var0);
                            var3 = var0.then;
                            var2 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0.add = var2;
                var1 = function arg0() {
                    _fun9415: for (var _fun9415_ip = 0;;) switch (_fun9415_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var0 = _closure2_slot1;
                            var0 = var0.size;
                            if (var0) {
                                _fun9415_ip = 63;
                                continue _fun9415
                            }
                        case 24:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 0;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.resolvedSyncPromise;
                            var0 = true;
                            var0 = var4.bind(var5)(var0);
                            return var0;
                        case 63:
                            var0 = global;
                            var5 = var0.Promise;
                            var4 = var5.allSettled;
                            var7 = var0.Array;
                            var6 = var7.from;
                            var3 = _closure2_slot1;
                            var3 = var6.bind(var7)(var3);
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.then;
                            var3 = function() { // Environment: var1
                                var0 = true;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            if (var2) {
                                _fun9415_ip = 122;
                                continue _fun9415
                            }
                        case 120:
                            return var3;
                        case 122:
                            var2 = new Array(2);
                            var2[0] = var3;
                            var4 = var0.Promise;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = global;
                                var3 = var1.setTimeout;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = function() { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = false;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var9 = var3;
                            var1 = new var9[var4](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var2[1] = var1;
                            var1 = var0.Promise;
                            var0 = var1.race;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var0.drain = var1;
                return var0;
        }
    };
    var1.makePromiseBuffer = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [871]);