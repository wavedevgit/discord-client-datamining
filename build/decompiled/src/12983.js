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
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = 100;
    var2.MIN_DELAY = var3;
    var3 = 5000;
    var2.START_DELAY = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = function() {
            _fun99572: for (var _fun99572_ip = 0;;) switch (_fun99572_ip) {
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
                        _fun99572_ip = 62;
                        continue _fun99572
                    }
                case 47:
                    var4 = arguments[var1];
                    var6[var1] = var4;
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun99572_ip = 47;
                        continue _fun99572
                    }
                case 62:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 1;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun99572_ip = 157;
                        continue _fun99572
                    }
                case 94:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.logger;
                    var3 = var4.info;
                    var2 = var3.apply;
                    var5 = ['[Offline]:'];
                    var1 = var5.concat;
                    var1 = var1.bind(var5)(var6);
                    var1 = var2.bind(var3)(var4, var1);
                case 157:
                    return var0;
            }
        };
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun99573: for (var _fun99573_ip = 0;;) switch (_fun99573_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = function arg0() {
                        _fun99574: for (var _fun99574_ip = 0;;) switch (_fun99574_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun99574_ip = 29;
                                    continue _fun99574
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
                                        _fun99576: for (var _fun99576_ip = 0;;) switch (_fun99576_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun99576_ip = 152;
                                                    continue _fun99576
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
                                                    _fun99576_ip = 149;
                                                    continue _fun99576
                                                }
                                            case 43:
                                                if (!var1) {
                                                    _fun99576_ip = 146;
                                                    continue _fun99576
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
                                            case 146:
                                                return var2;
                                            case 149:
                                                return var1;
                                            case 152:
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
                                    _fun99574_ip = 97;
                                    continue _fun99574
                                }
                            case 87:
                                var3 = _closure3_slot2;
                                var2 = var3.unref;
                            case 97:
                                if (!var2) {
                                    _fun99574_ip = 114;
                                    continue _fun99574
                                }
                            case 100:
                                var2 = _closure3_slot2;
                                var1 = var2.unref;
                                var1 = var1.bind(var2)();
                            case 114:
                                return var0;
                        }
                    };
                    var _closure3_slot5 = var0;
                    var3 = function() {
                        _fun99578: for (var _fun99578_ip = 0;;) switch (_fun99578_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (var0) {
                                    _fun99578_ip = 65;
                                    continue _fun99578
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
                    var2 = function arg0() {
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
                    var0 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot2;
                        var1 = function*(arg0) { // Environment: var1
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun99582: for (var _fun99582_ip = 0;;) switch (_fun99582_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun99582_ip = 597;
                                            continue _fun99582
                                        }
                                    case 10:
                                        var6 = undefined;
                                        var9 = undefined;
                                        var2 = arg0;
                                        var5 = undefined;
                                        var4 = undefined;
                                        var7 = undefined;
                                        var1 = arguments.length;
                                        var8 = 1;
                                        var1 = var1 > var8;
                                        if (!var1) {
                                            _fun99582_ip = 44;
                                            continue _fun99582
                                        }
                                    case 36:
                                        var10 = arguments[var8];
                                        var1 = var6 !== var10;
                                    case 44:
                                        if (!var1) {
                                            _fun99582_ip = 51;
                                            continue _fun99582
                                        }
                                    case 47:
                                        var1 = arguments[var8];
                                    case 51:
                                        var5 = var1;
                                        if (var1) {
                                            _fun99582_ip = 158;
                                            continue _fun99582
                                        }
                                    case 57:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var9[var1];
                                        var10 = var8.bind(var6)(var1);
                                        var9 = var10.envelopeContainsItemType;
                                        var8 = var2;
                                        var1 = ['replay_event', 'replay_recording'];
                                        var1 = var9.bind(var10)(var8, var1);
                                        if (!var1) {
                                            _fun99582_ip = 158;
                                            continue _fun99582
                                        }
                                    case 108:
                                        var10 = _closure3_slot3;
                                        var9 = var10.push;
                                        var1 = var2;
                                        var1 = var9.bind(var10)(var1);
                                        SaveGenerator(address = 132);
                                    case 130:
                                        return var1;
                                    case 132:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                                        if (var9) {
                                            _fun99582_ip = 155;
                                            continue _fun99582
                                        }
                                    case 138:
                                        var9 = _closure3_slot5;
                                        var8 = 100;
                                        var8 = var9.bind(var6)(var8);
                                        var8 = {};
                                        return var8;
                                    case 155:
                                        return var1;
                                    case 158: // try_start_0
                                        var10 = _closure3_slot1;
                                        var9 = var10.send;
                                        var1 = var2;
                                        var1 = var9.bind(var10)(var1);
                                        SaveGenerator(address = 183);
                                    case 181:
                                        return var1;
                                    case 183:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                                        if (var9) {
                                            _fun99582_ip = 379;
                                            continue _fun99582
                                        }
                                    case 192:
                                        var4 = var1;
                                        var7 = 100;
                                        if (!var1) {
                                            _fun99582_ip = 357;
                                            continue _fun99582
                                        }
                                    case 204:
                                        var9 = var4;
                                        var9 = var9.headers;
                                        if (!var9) {
                                            _fun99582_ip = 234;
                                            continue _fun99582
                                        }
                                    case 216:
                                        var9 = var4;
                                        var9 = var9.headers;
                                        var9 = var9["retry-after"];
                                        if (var9) {
                                            _fun99582_ip = 308;
                                            continue _fun99582
                                        }
                                    case 234:
                                        var9 = var4;
                                        var9 = var9.headers;
                                        if (!var9) {
                                            _fun99582_ip = 264;
                                            continue _fun99582
                                        }
                                    case 246:
                                        var9 = var4;
                                        var9 = var9.headers;
                                        var9 = var9["x-sentry-rate-limits"];
                                        if (var9) {
                                            _fun99582_ip = 300;
                                            continue _fun99582
                                        }
                                    case 264:
                                        var10 = var4;
                                        var10 = var10.statusCode;
                                        var9 = var10;
                                        if (var10) {
                                            _fun99582_ip = 281;
                                            continue _fun99582
                                        }
                                    case 279:
                                        var9 = 0;
                                    case 281:
                                        var10 = var9;
                                        var9 = 400;
                                        if (!(var10 >= var9)) {
                                            _fun99582_ip = 357;
                                            continue _fun99582
                                        }
                                    case 294:
                                        var9 = var4;
                                    case 297: // try_end0
                                        return var9;
                                    case 300: // try_start_1
                                        var7 = 60000;
                                        _fun99582_ip = 357;
                                        continue _fun99582;
                                    case 308:
                                        var10 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var9 = 2;
                                        var9 = var11[var9];
                                        var11 = var10.bind(var6)(var9);
                                        var10 = var11.parseRetryAfterHeader;
                                        var9 = var4;
                                        var9 = var9.headers;
                                        var9 = var9["retry-after"];
                                        var7 = var10.bind(var11)(var9);
                                    case 357:
                                        var9 = _closure3_slot5;
                                        var7 = var9.bind(var6)(var7);
                                        var7 = 5000;
                                        _closure3_slot4 = var7;
                                    case 376: // try_end1
                                        return var4;
                                    case 379:
                                        return var1;
                                    case 382: // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 12);
                                        var3 = var12;
                                        var11 = var2;
                                        var10 = _closure3_slot4;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var8[var1];
                                        var8 = var7.bind(var6)(var1);
                                        var7 = var8.envelopeContainsItemType;
                                        var1 = ['client_report'];
                                        var1 = var7.bind(var8)(var11, var1);
                                        var1 = !var1;
                                        if (!var1) {
                                            _fun99582_ip = 484;
                                            continue _fun99582
                                        }
                                    case 448:
                                        var7 = _closure3_slot0;
                                        var7 = var7.shouldStore;
                                        var7 = !var7;
                                        if (var7) {
                                            _fun99582_ip = 481;
                                            continue _fun99582
                                        }
                                    case 464:
                                        var9 = _closure3_slot0;
                                        var8 = var9.shouldStore;
                                        var7 = var8.bind(var9)(var11, var12, var10);
                                    case 481:
                                        var1 = var7;
                                    case 484:
                                        SaveGenerator(address = 488);
                                    case 486:
                                        return var1;
                                    case 488:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun99582_ip = 594;
                                            continue _fun99582
                                        }
                                    case 494:
                                        if (var1) {
                                            _fun99582_ip = 502;
                                            continue _fun99582
                                        }
                                    case 497:
                                        var7 = var3;
                                        throw var7;
                                    case 502:
                                        var7 = _closure3_slot3;
                                        if (var5) {
                                            _fun99582_ip = 535;
                                            continue _fun99582
                                        }
                                    case 509:
                                        var8 = var7.push;
                                        var5 = var2;
                                        var5 = var8.bind(var7)(var5);
                                        SaveGenerator(address = 526);
                                    case 524:
                                        return var5;
                                    case 526:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                                        if (!var8) {
                                            _fun99582_ip = 556;
                                            continue _fun99582
                                        }
                                    case 532:
                                        return var5;
                                    case 535:
                                        var5 = var7.unshift;
                                        var2 = var5.bind(var7)(var2);
                                        SaveGenerator(address = 550);
                                    case 548:
                                        return var2;
                                    case 550:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun99582_ip = 591;
                                            continue _fun99582
                                        }
                                    case 556:
                                        var4 = _closure3_slot6;
                                        var4 = var4.bind(var6)();
                                        var5 = _closure2_slot1;
                                        var4 = var3;
                                        var3 = 'Error sending. Event queued.';
                                        var3 = var5.bind(var6)(var3, var4);
                                        var3 = {};
                                        return var3;
                                    case 591:
                                        return var2;
                                    case 594:
                                        return var1;
                                    case 597:
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
                        _fun99573_ip = 116;
                        continue _fun99573
                    }
                case 80:
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
                case 116:
                    var5 = var4.createStore;
                    var5 = var5.bind(var4)(var4);
                    var _closure3_slot3 = var5;
                    var5 = 5000;
                    var _closure3_slot4 = var5;
                    var4 = var4.flushAtStartup;
                    if (!var4) {
                        _fun99573_ip = 154;
                        continue _fun99573
                    }
                case 150:
                    var0 = var3.bind(var0)();
                case 154:
                    var0 = {};
                    var0.send = var2;
                    var1 = function arg0() {
                        var2 = _closure3_slot1;
                        var1 = var2.flush;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.flush = var1;
                    return var0;
            }
        };
        return var0;
    };
    var2.makeOfflineTransport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 12955, 12889]);