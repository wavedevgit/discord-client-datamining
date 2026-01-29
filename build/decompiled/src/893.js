// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = 100;
    var2.MIN_DELAY = var3;
    var3 = 5000;
    var2.START_DELAY = var3;
    var1 = function(arg0) { // Original name: makeOfflineTransport, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = function() { // Original name: log, environment: var0
            _fun9421: for (var _fun9421_ip = 0;;) switch (_fun9421_ip) {
                case 0:
                    var0 = undefined;
                    var3 = undefined;
                    var2 = arguments.length;
                    var1 = global;
                    var1 = var1.Array;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var4;
                    var8 = var2;
                    var1 = new var9[var1](var8, var7);
                    var6 = var1 instanceof Object ? var1 : var4;
                    var1 = 0;
                    var4 = var1 < var2;
                    if (!var4) {
                        _fun9421_ip = 62;
                        continue _fun9421
                    }
                case 47:
                    var4 = arguments[var1];
                    var6[var1] = var4;
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun9421_ip = 47;
                        continue _fun9421
                    }
                case 62:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 1;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun9421_ip = 156;
                        continue _fun9421
                    }
                case 94:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.debug;
                    var3 = var4.log;
                    var2 = var3.apply;
                    var5 = ['[Offline]:'];
                    var1 = var5.concat;
                    var1 = var1.bind(var5)(var6);
                    var1 = var2.bind(var3)(var4, var1);
                case 156:
                    return var0;
            }
        };
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun9422: for (var _fun9422_ip = 0;;) switch (_fun9422_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = function(arg0) { // Original name: flushIn, environment: var1
                        _fun9423: for (var _fun9423_ip = 0;;) switch (_fun9423_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun9423_ip = 29;
                                    continue _fun9423
                                }
                            case 10:
                                var0 = global;
                                var3 = var0.clearTimeout;
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                            case 29:
                                var0 = global;
                                var4 = var0.setTimeout;
                                var3 = _closure1_slot2;
                                var0 = undefined;
                                var2 = function*() { // Environment: var2
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun9425: for (var _fun9425_ip = 0;;) switch (_fun9425_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun9425_ip = 150;
                                                    continue _fun9425
                                                }
                                            case 10:
                                                var2 = undefined;
                                                _closure3_slot2 = var2;
                                                var4 = _closure3_slot3;
                                                var1 = var4.shift;
                                                var1 = var1.bind(var4)();
                                                SaveGenerator(address = 37);
                                            case 35:
                                                return var1;
                                            case 37:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun9425_ip = 147;
                                                    continue _fun9425
                                                }
                                            case 43:
                                                if (!var1) {
                                                    _fun9425_ip = 144;
                                                    continue _fun9425
                                                }
                                            case 46:
                                                var5 = _closure2_slot1;
                                                var4 = 'Attempting to send previously queued event';
                                                var4 = var5.bind(var2)(var4);
                                                var4 = 0;
                                                var5 = var1[var4];
                                                var4 = global;
                                                var4 = var4.Date;
                                                var6 = var4.prototype;
                                                var6 = Object.create(var6, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var9 = var6;
                                                var4 = new var9[var4](var8);
                                                var6 = var4 instanceof Object ? var4 : var6;
                                                var4 = var6.toISOString;
                                                var4 = var4.bind(var6)();
                                                var5.sent_at = var4;
                                                var4 = _closure3_slot7;
                                                var3 = true;
                                                var5 = var4.bind(var2)(var1, var3);
                                                var4 = var5.catch;
                                                var3 = function(arg0) { // Environment: var3
                                                    var3 = _closure2_slot1;
                                                    var0 = undefined;
                                                    var2 = 'Failed to retry sending';
                                                    var1 = arg0;
                                                    var1 = var3.bind(var0)(var2, var1);
                                                    return var0;
                                                };
                                                var3 = var4.bind(var5)(var3);
                                            case 144:
                                                return var2;
                                            case 147:
                                                return var1;
                                            case 150:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var3.bind(var0)(var2);
                                var2 = arg0;
                                var2 = var4.bind(var0)(var3, var2);
                                var _closure3_slot2 = var2;
                                var3 = 'number';
                                var2 = typeof var2;
                                var2 = var3 !== var2;
                                if (!var2) {
                                    _fun9423_ip = 95;
                                    continue _fun9423
                                }
                            case 85:
                                var3 = _closure3_slot2;
                                var2 = var3.unref;
                            case 95:
                                if (!var2) {
                                    _fun9423_ip = 112;
                                    continue _fun9423
                                }
                            case 98:
                                var2 = _closure3_slot2;
                                var1 = var2.unref;
                                var1 = var1.bind(var2)();
                            case 112:
                                return var0;
                        }
                    };
                    var _closure3_slot5 = var0;
                    var3 = function() { // Original name: flushWithBackOff, environment: var1
                        _fun9427: for (var _fun9427_ip = 0;;) switch (_fun9427_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (var0) {
                                    _fun9427_ip = 65;
                                    continue _fun9427
                                }
                            case 10:
                                var3 = _closure3_slot5;
                                var2 = _closure3_slot4;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = global;
                                var4 = var0.Math;
                                var3 = var4.min;
                                var2 = _closure3_slot4;
                                var0 = 2;
                                var2 = var0 * var2;
                                var0 = 3600000;
                                var0 = var3.bind(var4)(var2, var0);
                                _closure3_slot4 = var0;
                            case 65:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot6 = var3;
                    var2 = function(arg0) { // Original name: send, environment: var1
                        var0 = undefined;
                        var3 = _closure3_slot8;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot7 = var2;
                    var0 = function() { // Original name: _send, environment: var1
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot2;
                        var1 = function*(arg0) { // Environment: var1
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun9431: for (var _fun9431_ip = 0;;) switch (_fun9431_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun9431_ip = 685;
                                            continue _fun9431
                                        }
                                    case 10:
                                        var6 = undefined;
                                        var9 = undefined;
                                        var2 = arg0;
                                        var5 = undefined;
                                        var11 = undefined;
                                        var10 = undefined;
                                        var7 = undefined;
                                        var8 = undefined;
                                        var1 = arguments.length;
                                        var4 = 1;
                                        var1 = var1 > var4;
                                        if (!var1) {
                                            _fun9431_ip = 48;
                                            continue _fun9431
                                        }
                                    case 40:
                                        var12 = arguments[var4];
                                        var1 = var6 !== var12;
                                    case 48:
                                        if (!var1) {
                                            _fun9431_ip = 55;
                                            continue _fun9431
                                        }
                                    case 51:
                                        var1 = arguments[var4];
                                    case 55:
                                        var5 = var1;
                                        if (var1) {
                                            _fun9431_ip = 162;
                                            continue _fun9431
                                        }
                                    case 61:
                                        var4 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var9[var1];
                                        var12 = var4.bind(var6)(var1);
                                        var9 = var12.envelopeContainsItemType;
                                        var4 = var2;
                                        var1 = ['replay_event', 'replay_recording'];
                                        var1 = var9.bind(var12)(var4, var1);
                                        if (!var1) {
                                            _fun9431_ip = 162;
                                            continue _fun9431
                                        }
                                    case 112:
                                        var12 = _closure3_slot3;
                                        var9 = var12.push;
                                        var1 = var2;
                                        var1 = var9.bind(var12)(var1);
                                        SaveGenerator(address = 136);
                                    case 134:
                                        return var1;
                                    case 136:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                                        if (var9) {
                                            _fun9431_ip = 159;
                                            continue _fun9431
                                        }
                                    case 142:
                                        var9 = _closure3_slot5;
                                        var4 = 100;
                                        var4 = var9.bind(var6)(var4);
                                        var4 = {};
                                        return var4;
                                    case 159:
                                        return var1;
                                    case 162: // try_start_0
                                        var1 = _closure3_slot0;
                                        var1 = var1.shouldSend;
                                        if (!var1) {
                                            _fun9431_ip = 218;
                                            continue _fun9431
                                        }
                                    case 178:
                                        var12 = _closure3_slot0;
                                        var4 = var12.shouldSend;
                                        var1 = var2;
                                        var1 = var4.bind(var12)(var1);
                                        SaveGenerator(address = 200);
                                    case 198:
                                        return var1;
                                    case 200:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun9431_ip = 467;
                                            continue _fun9431
                                        }
                                    case 209:
                                        var4 = false;
                                        if (!(var4 !== var1)) {
                                            _fun9431_ip = 431;
                                            continue _fun9431
                                        }
                                    case 218:
                                        var13 = _closure3_slot1;
                                        var12 = var13.send;
                                        var4 = var2;
                                        var4 = var12.bind(var13)(var4);
                                        SaveGenerator(address = 240);
                                    case 238:
                                        return var4;
                                    case 240:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 12);
                                        if (var12) {
                                            _fun9431_ip = 428;
                                            continue _fun9431
                                        }
                                    case 249:
                                        var7 = var4;
                                        var8 = 100;
                                        if (!var4) {
                                            _fun9431_ip = 406;
                                            continue _fun9431
                                        }
                                    case 261:
                                        var12 = var7;
                                        var13 = var12.headers;
                                        var11 = var13;
                                        var12 = null;
                                        if (!(var12 != var13)) {
                                            _fun9431_ip = 288;
                                            continue _fun9431
                                        }
                                    case 279:
                                        var11 = var11["retry-after"];
                                        if (var11) {
                                            _fun9431_ip = 357;
                                            continue _fun9431
                                        }
                                    case 288:
                                        var11 = var7;
                                        var11 = var11.headers;
                                        var10 = var11;
                                        if (!(var12 != var11)) {
                                            _fun9431_ip = 313;
                                            continue _fun9431
                                        }
                                    case 304:
                                        var10 = var10["x-sentry-rate-limits"];
                                        if (var10) {
                                            _fun9431_ip = 349;
                                            continue _fun9431
                                        }
                                    case 313:
                                        var11 = var7;
                                        var11 = var11.statusCode;
                                        var10 = var11;
                                        if (var11) {
                                            _fun9431_ip = 330;
                                            continue _fun9431
                                        }
                                    case 328:
                                        var10 = 0;
                                    case 330:
                                        var11 = var10;
                                        var10 = 400;
                                        if (!(var11 >= var10)) {
                                            _fun9431_ip = 406;
                                            continue _fun9431
                                        }
                                    case 343:
                                        var10 = var7;
                                    case 346: // try_end0
                                        return var10;
                                    case 349: // try_start_1
                                        var8 = 60000;
                                        _fun9431_ip = 406;
                                        continue _fun9431;
                                    case 357:
                                        var11 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var10 = 4;
                                        var10 = var12[var10];
                                        var12 = var11.bind(var6)(var10);
                                        var11 = var12.parseRetryAfterHeader;
                                        var10 = var7;
                                        var10 = var10.headers;
                                        var10 = var10["retry-after"];
                                        var8 = var11.bind(var12)(var10);
                                    case 406:
                                        var10 = _closure3_slot5;
                                        var8 = var10.bind(var6)(var8);
                                        var8 = 5000;
                                        _closure3_slot4 = var8;
                                    case 425: // try_end1
                                        return var7;
                                    case 428:
                                        return var4;
                                    case 431: // try_start_2
                                        var4 = global;
                                        var8 = var4.Error;
                                        var4 = var8.prototype;
                                        var7 = Object.create(var4, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var16 = 'Envelope not sent because `shouldSend` callback returned false';
                                        var17 = var7;
                                        var4 = new var17[var8](var16, var15);
                                        var4 = var4 instanceof Object ? var4 : var7;
                                        throw var4;
                                    case 467: // try_end2
                                        return var1;
                                    case 470: // catch_target0 // catch_target1 // catch_target2
                                        CatchBlockStart(arg_register = 12);
                                        var3 = var12;
                                        var11 = var2;
                                        var10 = _closure3_slot4;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var8[var1];
                                        var8 = var7.bind(var6)(var1);
                                        var7 = var8.envelopeContainsItemType;
                                        var1 = ['client_report'];
                                        var1 = var7.bind(var8)(var11, var1);
                                        var1 = !var1;
                                        if (!var1) {
                                            _fun9431_ip = 572;
                                            continue _fun9431
                                        }
                                    case 536:
                                        var7 = _closure3_slot0;
                                        var7 = var7.shouldStore;
                                        var7 = !var7;
                                        if (var7) {
                                            _fun9431_ip = 569;
                                            continue _fun9431
                                        }
                                    case 552:
                                        var9 = _closure3_slot0;
                                        var8 = var9.shouldStore;
                                        var7 = var8.bind(var9)(var11, var12, var10);
                                    case 569:
                                        var1 = var7;
                                    case 572:
                                        SaveGenerator(address = 576);
                                    case 574:
                                        return var1;
                                    case 576:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun9431_ip = 682;
                                            continue _fun9431
                                        }
                                    case 582:
                                        if (var1) {
                                            _fun9431_ip = 590;
                                            continue _fun9431
                                        }
                                    case 585:
                                        var7 = var3;
                                        throw var7;
                                    case 590:
                                        var7 = _closure3_slot3;
                                        if (var5) {
                                            _fun9431_ip = 623;
                                            continue _fun9431
                                        }
                                    case 597:
                                        var8 = var7.push;
                                        var5 = var2;
                                        var5 = var8.bind(var7)(var5);
                                        SaveGenerator(address = 614);
                                    case 612:
                                        return var5;
                                    case 614:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                                        if (!var8) {
                                            _fun9431_ip = 644;
                                            continue _fun9431
                                        }
                                    case 620:
                                        return var5;
                                    case 623:
                                        var5 = var7.unshift;
                                        var2 = var5.bind(var7)(var2);
                                        SaveGenerator(address = 638);
                                    case 636:
                                        return var2;
                                    case 638:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun9431_ip = 679;
                                            continue _fun9431
                                        }
                                    case 644:
                                        var4 = _closure3_slot6;
                                        var4 = var4.bind(var6)();
                                        var5 = _closure2_slot1;
                                        var4 = var3;
                                        var3 = 'Error sending. Event queued.';
                                        var3 = var5.bind(var6)(var3, var4);
                                        var3 = {};
                                        return var3;
                                    case 679:
                                        return var2;
                                    case 682:
                                        return var1;
                                    case 685:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot8 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot8 = var0;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var _closure3_slot1 = var5;
                    var5 = var4.createStore;
                    if (var5) {
                        _fun9422_ip = 108;
                        continue _fun9422
                    }
                case 72:
                    var5 = global;
                    var7 = var5.Error;
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {
                        constructor: {
                            value: var7
                        }
                    });
                    var8 = 'No `createStore` function was provided';
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
                case 108:
                    var5 = var4.createStore;
                    var5 = var5.bind(var4)(var4);
                    var _closure3_slot3 = var5;
                    var5 = 5000;
                    var _closure3_slot4 = var5;
                    var4 = var4.flushAtStartup;
                    if (!var4) {
                        _fun9422_ip = 146;
                        continue _fun9422
                    }
                case 142:
                    var0 = var3.bind(var0)();
                case 146:
                    var0 = {};
                    var0.send = var2;
                    var1 = function(arg0) { // Original name: flush, environment: var1
                        _fun9432: for (var _fun9432_ip = 0;;) switch (_fun9432_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = undefined;
                                if (!(var3 === var2)) {
                                    _fun9432_ip = 34;
                                    continue _fun9432
                                }
                            case 9:
                                var1 = 5000;
                                _closure3_slot4 = var1;
                                var1 = _closure3_slot5;
                                var0 = 100;
                                var0 = var1.bind(var3)(var0);
                            case 34:
                                var1 = _closure3_slot1;
                                var0 = var1.flush;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var0.flush = var1;
                    return var0;
            }
        };
        return var0;
    };
    var2.makeOfflineTransport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 823, 824, 862, 892]);