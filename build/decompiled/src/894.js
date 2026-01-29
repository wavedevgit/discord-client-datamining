// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0, arg1) { // Original name: eventFromEnvelope, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.forEachEnvelopeItem;
        var2 = arg0;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun9435: for (var _fun9435_ip = 0;;) switch (_fun9435_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure2_slot0;
                    var2 = var4.includes;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    if (!var1) {
                        _fun9435_ip = 60;
                        continue _fun9435
                    }
                case 26:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var3);
                    var1 = undefined;
                    if (!var2) {
                        _fun9435_ip = 56;
                        continue _fun9435
                    }
                case 49:
                    var2 = 1;
                    var1 = var3[var2];
                case 56:
                    var _closure2_slot1 = var1;
                case 60:
                    var0 = _closure2_slot1;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var0 = _closure2_slot1;
        return var0;
    };
    var _closure1_slot5 = var3;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var2.eventFromEnvelope = var3;
    var1 = function(arg0, arg1) { // Original name: makeMultiplexedTransport, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var _closure3_slot0 = var3;
            var0 = function(arg0, arg1) { // Original name: getTransport, environment: var1
                _fun9438: for (var _fun9438_ip = 0;;) switch (_fun9438_ip) {
                    case 0:
                        var2 = arg0;
                        var10 = arg1;
                        var1 = var2;
                        if (!var10) {
                            _fun9438_ip = 40;
                            continue _fun9438
                        }
                    case 12:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var3 = '';
                        var0 = ':';
                        var1 = var4.bind(var3)(var2, var0, var10);
                    case 40:
                        var4 = _closure3_slot2;
                        var0 = var4.get;
                        var0 = var0.bind(var4)(var1);
                        var5 = var1;
                        var1 = var0;
                        if (var1) {
                            _fun9438_ip = 267;
                            continue _fun9438
                        }
                    case 69:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 4;
                        var4 = var7[var4];
                        var7 = undefined;
                        var6 = var6.bind(var7)(var4);
                        var4 = var6.dsnFromString;
                        var8 = var4.bind(var6)(var2);
                        if (var8) {
                            _fun9438_ip = 110;
                            continue _fun9438
                        }
                    case 108:
                        return var7;
                    case 110:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var0 = 5;
                        var0 = var6[var0];
                        var6 = var4.bind(var7)(var0);
                        var4 = var6.getEnvelopeEndpointWithUrlEncodedAuth;
                        var0 = _closure3_slot0;
                        var0 = var0.tunnel;
                        var4 = var4.bind(var6)(var8, var0);
                        var9 = _closure2_slot0;
                        var8 = global;
                        if (var10) {
                            _fun9438_ip = 201;
                            continue _fun9438
                        }
                    case 164:
                        var13 = var8.Object;
                        var12 = var13.assign;
                        var11 = _closure3_slot0;
                        var6 = {};
                        var6.url = var4;
                        var0 = {};
                        var0 = var12.bind(var13)(var0, var11, var6);
                        var0 = var9.bind(var7)(var0);
                        _fun9438_ip = 249;
                        continue _fun9438;
                    case 201:
                        var6 = function(arg0, arg1) { // Original name: makeOverrideReleaseTransport, environment: var6
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var _closure5_slot1 = var1;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure5_slot0;
                                var7 = undefined;
                                var1 = arg0;
                                var4 = var2.bind(var7)(var1);
                                var _closure6_slot1 = var4;
                                var1 = global;
                                var3 = var1.Object;
                                var2 = var3.assign;
                                var1 = {};
                                var6 = _closure1_slot4;
                                var5 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun9442: for (var _fun9442_ip = 0;;) switch (_fun9442_ip) {
                                            case 0:
                                                StartGenerator();
                                                var3 = arg0;
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun9442_ip = 72;
                                                    continue _fun9442
                                                }
                                            case 10:
                                                var4 = _closure1_slot5;
                                                var2 = undefined;
                                                var1 = ['event', 'transaction', 'profile', 'replay_event'];
                                                var2 = var4.bind(var2)(var3, var1);
                                                if (!var2) {
                                                    _fun9442_ip = 51;
                                                    continue _fun9442
                                                }
                                            case 38:
                                                var1 = _closure5_slot1;
                                                var2.release = var1;
                                            case 51:
                                                var2 = _closure6_slot1;
                                                var1 = var2.send;
                                                var1 = var1.bind(var2)(var3);
                                                return var1;
                                            case 72:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var5 = var6.bind(var7)(var5);
                                var _closure6_slot0 = var5;
                                var0 = function(arg0) { // Original name: send, environment: var0
                                    var0 = undefined;
                                    var3 = _closure6_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var1.send = var0;
                                var0 = {};
                                var0 = var2.bind(var3)(var0, var4, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var6 = var6.bind(var7)(var9, var10);
                        var11 = var8.Object;
                        var10 = var11.assign;
                        var9 = _closure3_slot0;
                        var8 = {};
                        var8.url = var4;
                        var4 = {};
                        var4 = var10.bind(var11)(var4, var9, var8);
                        var0 = var6.bind(var7)(var4);
                    case 249:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var5, var0);
                        var1 = var0;
                    case 267:
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                }
            };
            var _closure3_slot3 = var0;
            var0 = function() { // Original name: _send2, environment: var1
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot4;
                var1 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun9446: for (var _fun9446_ip = 0;;) switch (_fun9446_ip) {
                            case 0:
                                StartGenerator();
                                var2 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun9446_ip = 179;
                                    continue _fun9446
                                }
                            case 15:
                                var _closure6_slot0 = var2;
                                var4 = _closure2_slot1;
                                var3 = {};
                                var3.envelope = var2;
                                var2 = function(arg0) { // Original name: getEvent, environment: var1
                                    _fun9447: for (var _fun9447_ip = 0;;) switch (_fun9447_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = null;
                                            if (!(var0 != var3)) {
                                                _fun9447_ip = 17;
                                                continue _fun9447
                                            }
                                        case 9:
                                            var0 = var3.length;
                                            if (var0) {
                                                _fun9447_ip = 27;
                                                continue _fun9447
                                            }
                                        case 17:
                                            var3 = ['event'];
                                        case 27:
                                            var2 = _closure1_slot5;
                                            var1 = _closure6_slot0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1, var3);
                                            return var0;
                                    }
                                };
                                var3.getEvent = var2;
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.map;
                                var2 = function(arg0) { // Environment: var1
                                    _fun9448: for (var _fun9448_ip = 0;;) switch (_fun9448_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = 'string';
                                            var0 = typeof var3;
                                            if (!(var1 !== var0)) {
                                                _fun9448_ip = 43;
                                                continue _fun9448
                                            }
                                        case 14:
                                            var4 = _closure3_slot3;
                                            var2 = var3.dsn;
                                            var1 = var3.release;
                                            var0 = undefined;
                                            var0 = var4.bind(var0)(var2, var1);
                                            _fun9448_ip = 58;
                                            continue _fun9448;
                                        case 43:
                                            var2 = _closure3_slot3;
                                            var1 = undefined;
                                            var0 = var2.bind(var1)(var3, var1);
                                        case 58:
                                            return var0;
                                    }
                                };
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.filter;
                                var2 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = !var0;
                                    var0 = !var0;
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.length;
                                var5 = var3;
                                if (var2) {
                                    _fun9446_ip = 123;
                                    continue _fun9446
                                }
                            case 91:
                                var2 = _closure3_slot1;
                                var3 = [''];
                                var3[1] = var2;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var5 = var2;
                            case 123:
                                var2 = global;
                                var3 = var2.Promise;
                                var2 = var3.all;
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    _fun9450: for (var _fun9450_ip = 0;;) switch (_fun9450_ip) {
                                        case 0:
                                            var2 = _closure1_slot3;
                                            var5 = undefined;
                                            var1 = arg0;
                                            var0 = 2;
                                            var0 = var2.bind(var5)(var1, var0);
                                            var8 = 0;
                                            var7 = var0[var8];
                                            var6 = 1;
                                            var2 = var0[var6];
                                            var1 = var2.send;
                                            var0 = _closure6_slot0;
                                            var4 = _closure1_slot0;
                                            var9 = _closure1_slot1;
                                            var3 = 3;
                                            var3 = var9[var3];
                                            var5 = var4.bind(var5)(var3);
                                            var4 = var5.createEnvelope;
                                            if (var7) {
                                                _fun9450_ip = 82;
                                                continue _fun9450
                                            }
                                        case 76:
                                            var3 = var0[var8];
                                            _fun9450_ip = 115;
                                            continue _fun9450;
                                        case 82:
                                            var9 = global;
                                            var11 = var9.Object;
                                            var10 = var11.assign;
                                            var9 = var0[var8];
                                            var8 = {};
                                            var8.dsn = var7;
                                            var7 = {};
                                            var3 = var10.bind(var11)(var7, var9, var8);
                                        case 115:
                                            var0 = var0[var6];
                                            var0 = var4.bind(var5)(var3, var0);
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 161);
                            case 159:
                                return var1;
                            case 161:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun9446_ip = 176;
                                    continue _fun9446
                                }
                            case 167:
                                var2 = 0;
                                var2 = var1[var2];
                                return var2;
                            case 176:
                                return var1;
                            case 179:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot4 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot4 = var0;
            var0 = function() { // Original name: _flush, environment: var1
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot4;
                var1 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun9453: for (var _fun9453_ip = 0;;) switch (_fun9453_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun9453_ip = 142;
                                    continue _fun9453
                                }
                            case 12:
                                var1 = arg0;
                                var _closure6_slot0 = var1;
                                var5 = new Array(0);
                                var4 = var5.concat;
                                var7 = _closure1_slot2;
                                var6 = _closure3_slot2;
                                var3 = var6.values;
                                var6 = var3.bind(var6)();
                                var3 = undefined;
                                var3 = var7.bind(var3)(var6);
                                var6 = _closure3_slot1;
                                var1 = new Array(1);
                                var1[0] = var6;
                                var6 = var4.bind(var5)(var3, var1);
                                var1 = global;
                                var4 = var1.Promise;
                                var3 = var4.all;
                                var5 = var6.map;
                                var1 = function(arg0) { // Environment: var2
                                    var2 = arg0;
                                    var1 = var2.flush;
                                    var0 = _closure6_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = var5.bind(var6)(var1);
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 114);
                            case 112:
                                return var1;
                            case 114:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun9453_ip = 139;
                                    continue _fun9453
                                }
                            case 120:
                                var3 = var1.every;
                                var2 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    return var0;
                                };
                                var2 = var3.bind(var1)(var2);
                                return var2;
                            case 139:
                                return var1;
                            case 142:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot5 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot5 = var0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var3);
            var _closure3_slot1 = var0;
            var0 = global;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot2 = var0;
            var0 = {};
            var2 = function(arg0) { // Original name: send, environment: var1
                var0 = undefined;
                var3 = _closure3_slot4;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0.send = var2;
            var1 = function(arg0) { // Original name: flush, environment: var1
                var0 = undefined;
                var3 = _closure3_slot5;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0.flush = var1;
            return var0;
        };
        return var0;
    };
    var2.makeMultiplexedTransport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 5, 862, 836, 873]);