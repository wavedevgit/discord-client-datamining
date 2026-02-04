// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = 64;
    var1.DEFAULT_TRANSPORT_BUFFER_SIZE = var2;
    var0 = function arg0, arg1() {
        _fun9397: for (var _fun9397_ip = 0;;) switch (_fun9397_ip) {
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
                    _fun9397_ip = 38;
                    continue _fun9397
                }
            case 30:
                var4 = arguments[var2];
                if (!(var6 === var4)) {
                    _fun9397_ip = 85;
                    continue _fun9397
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
                    _fun9397_ip = 78;
                    continue _fun9397
                }
            case 75:
                var0 = 64;
            case 78:
                var0 = var4.bind(var5)(var0);
                _fun9397_ip = 89;
                continue _fun9397;
            case 85:
                var0 = arguments[var2];
            case 89:
                var _closure2_slot2 = var0;
                var0 = {};
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = function arg0() {
                    _fun9398: for (var _fun9398_ip = 0;;) switch (_fun9398_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = new Array(0);
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var7 = 1;
                            var1 = var1[var7];
                            var6 = undefined;
                            var8 = var3.bind(var6)(var1);
                            var3 = var8.forEachEnvelopeItem;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun9399: for (var _fun9399_ip = 0;;) switch (_fun9399_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var0 = 1;
                                        var1 = var3[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.envelopeItemTypeToDataCategory;
                                        var1 = arg1;
                                        var4 = var4.bind(var5)(var1);
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var5 = var2.bind(var0)(var1);
                                        var3 = var5.isRateLimited;
                                        var2 = _closure2_slot3;
                                        var2 = var3.bind(var5)(var2, var4);
                                        if (var2) {
                                            _fun9399_ip = 95;
                                            continue _fun9399
                                        }
                                    case 73:
                                        var5 = _closure3_slot0;
                                        var3 = var5.push;
                                        var2 = arg0;
                                        var2 = var3.bind(var5)(var2);
                                        _fun9399_ip = 117;
                                        continue _fun9399;
                                    case 95:
                                        var3 = _closure2_slot0;
                                        var2 = var3.recordDroppedEvent;
                                        var1 = 'ratelimit_backoff';
                                        var1 = var2.bind(var3)(var1, var4);
                                    case 117:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var8)(var5, var1);
                            var3 = var4.length;
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun9398_ip = 157;
                                continue _fun9398
                            }
                        case 66:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var7];
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.createEnvelope;
                            var1 = var5[var1];
                            var1 = var2.bind(var3)(var1, var4);
                            var _closure3_slot1 = var1;
                            var1 = function arg0() {
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 1;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.forEachEnvelopeItem;
                                var2 = _closure3_slot1;
                                var1 = function(arg0, arg1) { // Environment: var1
                                    var4 = _closure2_slot0;
                                    var3 = var4.recordDroppedEvent;
                                    var2 = _closure4_slot0;
                                    var5 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 1;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var6 = var5.bind(var0)(var1);
                                    var5 = var6.envelopeItemTypeToDataCategory;
                                    var1 = arg1;
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var _closure3_slot2 = var1;
                            var3 = _closure2_slot2;
                            var2 = var3.add;
                            var1 = function() {
                                var3 = _closure2_slot1;
                                var2 = {};
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 1;
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
                                    _fun9403: for (var _fun9403_ip = 0;;) switch (_fun9403_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.statusCode;
                                            var3 = undefined;
                                            var1 = var3 !== var1;
                                            if (!var1) {
                                                _fun9403_ip = 53;
                                                continue _fun9403
                                            }
                                        case 18:
                                            var4 = var0.statusCode;
                                            var2 = 200;
                                            var2 = var4 < var2;
                                            if (var2) {
                                                _fun9403_ip = 50;
                                                continue _fun9403
                                            }
                                        case 34:
                                            var5 = var0.statusCode;
                                            var4 = 300;
                                            var2 = var5 >= var4;
                                        case 50:
                                            var1 = var2;
                                        case 53:
                                            if (!var1) {
                                                _fun9403_ip = 85;
                                                continue _fun9403
                                            }
                                        case 56:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 3;
                                            var2 = var5[var2];
                                            var2 = var4.bind(var3)(var2);
                                            var1 = var2.DEBUG_BUILD;
                                        case 85:
                                            if (!var1) {
                                                _fun9403_ip = 164;
                                                continue _fun9403
                                            }
                                        case 88:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 4;
                                            var1 = var4[var1];
                                            var1 = var2.bind(var3)(var1);
                                            var4 = var1.debug;
                                            var2 = var4.warn;
                                            var7 = var0.statusCode;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var6 = var1.concat;
                                            var5 = 'Sentry responded with status code ';
                                            var1 = ' to sent event.';
                                            var1 = var6.bind(var5)(var7, var1);
                                            var1 = var2.bind(var4)(var1);
                                        case 164:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 2;
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
                                    _fun9404: for (var _fun9404_ip = 0;;) switch (_fun9404_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = _closure3_slot2;
                                            var3 = undefined;
                                            var1 = 'network_error';
                                            var1 = var2.bind(var3)(var1);
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 3;
                                            var2 = var5[var2];
                                            var2 = var4.bind(var3)(var2);
                                            var2 = var2.DEBUG_BUILD;
                                            if (!var2) {
                                                _fun9404_ip = 98;
                                                continue _fun9404
                                            }
                                        case 55:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 4;
                                            var1 = var4[var1];
                                            var1 = var2.bind(var3)(var1);
                                            var3 = var1.debug;
                                            var2 = var3.error;
                                            var1 = 'Encountered error running transport request:';
                                            var1 = var2.bind(var3)(var1, var0);
                                        case 98:
                                            throw var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                return var0;
                            };
                            var0 = function(arg0) { // Environment: var0
                                _fun9406: for (var _fun9406_ip = 0;;) switch (_fun9406_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 0;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var3 = var3.SENTRY_BUFFER_FULL_ERROR;
                                        if (!(var1 !== var3)) {
                                            _fun9406_ip = 39;
                                            continue _fun9406
                                        }
                                    case 37:
                                        throw var1;
                                    case 39:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var4[var1];
                                        var1 = var3.bind(var2)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun9406_ip = 110;
                                            continue _fun9406
                                        }
                                    case 68:
                                        var1 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var0 = 4;
                                        var0 = var3[var0];
                                        var0 = var1.bind(var2)(var0);
                                        var3 = var0.debug;
                                        var1 = var3.error;
                                        var0 = 'Skipped sending event because buffer is full.';
                                        var0 = var1.bind(var3)(var0);
                                    case 110:
                                        var1 = _closure3_slot2;
                                        var0 = 'queue_overflow';
                                        var0 = var1.bind(var2)(var0);
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.resolve;
                                        var0 = {};
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 157:
                            var0 = global;
                            var2 = var0.Promise;
                            var1 = var2.resolve;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [891, 862, 892, 823, 824]);