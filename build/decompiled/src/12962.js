// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun99518: for (var _fun99518_ip = 0;;) switch (_fun99518_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = 'event';
                if (!(var0 !== var1)) {
                    _fun99518_ip = 26;
                    continue _fun99518
                }
            case 14:
                var0 = 'transaction';
                if (!(var0 !== var1)) {
                    _fun99518_ip = 26;
                    continue _fun99518
                }
            case 22:
                var0 = undefined;
                return var0;
            case 26:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var2);
                var0 = undefined;
                if (!var1) {
                    _fun99518_ip = 56;
                    continue _fun99518
                }
            case 49:
                var1 = 1;
                var0 = var2[var1];
            case 56:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = 64;
    var1.DEFAULT_TRANSPORT_BUFFER_SIZE = var2;
    var0 = function arg0, arg1() {
        _fun99519: for (var _fun99519_ip = 0;;) switch (_fun99519_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var3 = undefined;
                var _closure2_slot0 = var0;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var4 = arguments.length;
                var2 = 2;
                if (!(var4 > var2)) {
                    _fun99519_ip = 38;
                    continue _fun99519
                }
            case 30:
                var4 = arguments[var2];
                if (!(var6 === var4)) {
                    _fun99519_ip = 85;
                    continue _fun99519
                }
            case 38:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 0;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.makePromiseBuffer;
                var0 = var0.bufferSize;
                if (var0) {
                    _fun99519_ip = 78;
                    continue _fun99519
                }
            case 75:
                var0 = 64;
            case 78:
                var0 = var4.bind(var5)(var0);
                _fun99519_ip = 89;
                continue _fun99519;
            case 85:
                var0 = arguments[var2];
            case 89:
                var _closure2_slot2 = var0;
                var0 = {};
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = function arg0() {
                    _fun99520: for (var _fun99520_ip = 0;;) switch (_fun99520_ip) {
                        case 0:
                            var4 = arg0;
                            var7 = new Array(0);
                            var _closure3_slot0 = var7;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var3 = 0;
                            var5 = var2[var3];
                            var2 = undefined;
                            var8 = var6.bind(var2)(var5);
                            var6 = var8.forEachEnvelopeItem;
                            var5 = function(arg0, arg1) { // Environment: var1
                                _fun99521: for (var _fun99521_ip = 0;;) switch (_fun99521_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = arg1;
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var1 = 0;
                                        var5 = var7[var1];
                                        var0 = undefined;
                                        var8 = var6.bind(var0)(var5);
                                        var5 = var8.envelopeItemTypeToDataCategory;
                                        var5 = var5.bind(var8)(var3);
                                        var1 = var7[var1];
                                        var8 = var6.bind(var0)(var1);
                                        var7 = var8.isRateLimited;
                                        var6 = _closure2_slot3;
                                        var6 = var7.bind(var8)(var6, var5);
                                        if (var6) {
                                            _fun99521_ip = 91;
                                            continue _fun99521
                                        }
                                    case 72:
                                        var7 = _closure3_slot0;
                                        var6 = var7.push;
                                        var6 = var6.bind(var7)(var4);
                                        _fun99521_ip = 124;
                                        continue _fun99521;
                                    case 91:
                                        var2 = _closure1_slot2;
                                        var4 = var2.bind(var0)(var4, var3);
                                        var3 = _closure2_slot0;
                                        var2 = var3.recordDroppedEvent;
                                        var1 = 'ratelimit_backoff';
                                        var1 = var2.bind(var3)(var1, var5, var4);
                                    case 124:
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var8)(var4, var5);
                            var5 = var7.length;
                            if (!(var3 !== var5)) {
                                _fun99520_ip = 164;
                                continue _fun99520
                            }
                        case 65:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var3];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.createEnvelope;
                            var4 = var4[var3];
                            var4 = var5.bind(var6)(var4, var7);
                            var _closure3_slot1 = var4;
                            var4 = function arg0() {
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 0;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.forEachEnvelopeItem;
                                var2 = _closure3_slot1;
                                var1 = function(arg0, arg1) { // Environment: var1
                                    var7 = arg1;
                                    var3 = _closure1_slot2;
                                    var0 = undefined;
                                    var2 = arg0;
                                    var5 = var3.bind(var0)(var2, var7);
                                    var4 = _closure2_slot0;
                                    var3 = var4.recordDroppedEvent;
                                    var2 = _closure4_slot0;
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot1;
                                    var1 = 0;
                                    var1 = var8[var1];
                                    var6 = var6.bind(var0)(var1);
                                    var1 = var6.envelopeItemTypeToDataCategory;
                                    var1 = var1.bind(var6)(var7);
                                    var1 = var3.bind(var4)(var2, var1, var5);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var _closure3_slot2 = var4;
                            var6 = _closure2_slot2;
                            var5 = var6.add;
                            var4 = function() {
                                var3 = _closure2_slot1;
                                var2 = {};
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 0;
                                var4 = var4[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.serializeEnvelope;
                                var4 = _closure3_slot1;
                                var4 = var5.bind(var6)(var4);
                                var2.body = var4;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    _fun99525: for (var _fun99525_ip = 0;;) switch (_fun99525_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.statusCode;
                                            var3 = undefined;
                                            var1 = var3 !== var1;
                                            if (!var1) {
                                                _fun99525_ip = 53;
                                                continue _fun99525
                                            }
                                        case 18:
                                            var4 = var0.statusCode;
                                            var2 = 200;
                                            var2 = var4 < var2;
                                            if (var2) {
                                                _fun99525_ip = 50;
                                                continue _fun99525
                                            }
                                        case 34:
                                            var5 = var0.statusCode;
                                            var4 = 300;
                                            var2 = var5 >= var4;
                                        case 50:
                                            var1 = var2;
                                        case 53:
                                            if (!var1) {
                                                _fun99525_ip = 85;
                                                continue _fun99525
                                            }
                                        case 56:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var5[var2];
                                            var2 = var4.bind(var3)(var2);
                                            var1 = var2.DEBUG_BUILD;
                                        case 85:
                                            if (!var1) {
                                                _fun99525_ip = 163;
                                                continue _fun99525
                                            }
                                        case 88:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 0;
                                            var1 = var4[var1];
                                            var1 = var2.bind(var3)(var1);
                                            var4 = var1.logger;
                                            var2 = var4.warn;
                                            var7 = var0.statusCode;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var6 = var1.concat;
                                            var5 = 'Sentry responded with status code ';
                                            var1 = ' to sent event.';
                                            var1 = var6.bind(var5)(var7, var1);
                                            var1 = var2.bind(var4)(var1);
                                        case 163:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 0;
                                            var1 = var4[var1];
                                            var4 = var2.bind(var3)(var1);
                                            var3 = var4.updateRateLimits;
                                            var1 = _closure2_slot3;
                                            var1 = var3.bind(var4)(var1, var0);
                                            _closure2_slot3 = var1;
                                            return var0;
                                    }
                                };
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure3_slot2;
                                    var1 = undefined;
                                    var0 = 'network_error';
                                    var0 = var2.bind(var1)(var0);
                                    var0 = arg0;
                                    throw var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.then;
                            var4 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                return var0;
                            };
                            var1 = function(arg0) { // Environment: var1
                                _fun99528: for (var _fun99528_ip = 0;;) switch (_fun99528_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var3 = 0;
                                        var4 = var2[var3];
                                        var2 = undefined;
                                        var4 = var5.bind(var2)(var4);
                                        var4 = var4.SentryError;
                                        var4 = var1 instanceof var4;
                                        if (var4) {
                                            _fun99528_ip = 42;
                                            continue _fun99528
                                        }
                                    case 40:
                                        throw var1;
                                    case 42:
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var1 = 1;
                                        var1 = var5[var1];
                                        var1 = var4.bind(var2)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99528_ip = 110;
                                            continue _fun99528
                                        }
                                    case 71:
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var1 = var1[var3];
                                        var1 = var4.bind(var2)(var1);
                                        var5 = var1.logger;
                                        var4 = var5.error;
                                        var1 = 'Skipped sending event because buffer is full.';
                                        var1 = var4.bind(var5)(var1);
                                    case 110:
                                        var4 = _closure3_slot2;
                                        var1 = 'queue_overflow';
                                        var1 = var4.bind(var2)(var1);
                                        var1 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var0 = var0[var3];
                                        var2 = var1.bind(var2)(var0);
                                        var1 = var2.resolvedSyncPromise;
                                        var0 = {};
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var1 = var5.bind(var6)(var4, var1);
                            return var1;
                        case 164:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var3];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.resolvedSyncPromise;
                            var0 = {};
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0.send = var2;
                var1 = function arg0() {
                    var2 = _closure2_slot2;
                    var1 = var2.drain;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.flush = var1;
                return var0;
        }
    };
    var1.createTransport = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12869, 12935]);