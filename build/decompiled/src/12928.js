// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun99557: for (var _fun99557_ip = 0;;) switch (_fun99557_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var2 = undefined;
            case 7: // try_start_0 // try_start_1
                var1 = var0;
                var1 = var1.exception;
                var3 = var1.values;
                var1 = 0;
                var1 = var3[var1];
                var1 = var1.stacktrace;
                var2 = var1.frames;
            case 39: // try_end0
                _fun99557_ip = 43;
                continue _fun99557;
            case 41: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 43:
                var3 = var2;
                var1 = null;
                if (!var3) {
                    _fun99557_ip = 68;
                    continue _fun99557
                }
            case 51:
                var3 = var2;
                var2 = function() {
                    _fun99558: for (var _fun99558_ip = 0;;) switch (_fun99558_ip) {
                        case 0:
                            var2 = undefined;
                            var0 = undefined;
                            var1 = arguments.length;
                            var5 = 0;
                            if (!(var1 > var5)) {
                                _fun99558_ip = 21;
                                continue _fun99558
                            }
                        case 13:
                            var1 = arguments[var5];
                            if (!(var2 === var1)) {
                                _fun99558_ip = 27;
                                continue _fun99558
                            }
                        case 21:
                            var4 = new Array(0);
                            _fun99558_ip = 31;
                            continue _fun99558;
                        case 27:
                            var4 = arguments[var5];
                        case 31:
                            var1 = var4.length;
                            var0 = 1;
                            var3 = var1 - var0;
                            var2 = '[native code]';
                            var1 = '<anonymous>';
                            if (!(var3 >= var5)) {
                                _fun99558_ip = 93;
                                continue _fun99558
                            }
                        case 59:
                            var0 = var4[var3];
                            if (!var0) {
                                _fun99558_ip = 86;
                                continue _fun99558
                            }
                        case 66:
                            var6 = var0.filename;
                            if (!(var1 !== var6)) {
                                _fun99558_ip = 86;
                                continue _fun99558
                            }
                        case 76:
                            var6 = var0.filename;
                            if (!(var2 === var6)) {
                                _fun99558_ip = 97;
                                continue _fun99558
                            }
                        case 86:
                            var3 = var3 - 1;
                            if (var3 >= var5) {
                                _fun99558_ip = 59;
                                continue _fun99558
                            }
                        case 93:
                            var1 = null;
                            return var1;
                        case 97:
                            var0 = var0.filename;
                            if (var0) {
                                _fun99558_ip = 108;
                                continue _fun99558
                            }
                        case 106:
                            var0 = null;
                        case 108:
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var3);
            case 68: // try_end1
                return var1;
            case 70: // catch_target1
                CatchBlockStart(arg_register = 1);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun99557_ip = 184;
                    continue _fun99557
                }
            case 104:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var1 = var6[var3];
                var1 = var4.bind(var5)(var1);
                var2 = var1.logger;
                var1 = var2.error;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getEventDescription;
                var4 = var3.bind(var4)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Cannot extract url for event ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 184:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = new Array(8);
    var6 = /^Script error\.?$/;
    var3[0] = var6;
    var6 = /^Javascript error: Script error\.? on line 0$/;
    var3[1] = var6;
    var6 = /^ResizeObserver loop completed with undelivered notifications.$/;
    var3[2] = var6;
    var6 = /^Cannot redefine property: googletag$/;
    var3[3] = var6;
    var6 = "undefined is not an object (evaluating 'a.L')";
    var3[4] = var6;
    var6 = 'can\'t redefine non-configurable property "solana"';
    var3[5] = var6;
    var6 = "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)";
    var3[6] = var6;
    var6 = "Can't find variable: _AutofillCallbackHandler";
    var3[7] = var6;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun99559: for (var _fun99559_ip = 0;;) switch (_fun99559_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun99559_ip = 23;
                    continue _fun99559
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun99559_ip = 27;
                    continue _fun99559
                }
            case 23:
                var0 = {};
                _fun99559_ip = 31;
                continue _fun99559;
            case 27:
                var0 = arguments[var2];
            case 31:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'InboundFilters';
                var0.name = var2;
                var1 = function arg0, arg1, arg2() {
                    _fun99560: for (var _fun99560_ip = 0;;) switch (_fun99560_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = arg2;
                            var2 = var3.getOptions;
                            var5 = var2.bind(var3)();
                            var4 = _closure2_slot0;
                            var2 = function() {
                                _fun99561: for (var _fun99561_ip = 0;;) switch (_fun99561_ip) {
                                    case 0:
                                        var3 = undefined;
                                        var4 = undefined;
                                        var1 = arguments.length;
                                        var0 = 0;
                                        if (!(var1 > var0)) {
                                            _fun99561_ip = 21;
                                            continue _fun99561
                                        }
                                    case 13:
                                        var1 = arguments[var0];
                                        if (!(var3 === var1)) {
                                            _fun99561_ip = 25;
                                            continue _fun99561
                                        }
                                    case 21:
                                        var2 = {};
                                        _fun99561_ip = 29;
                                        continue _fun99561;
                                    case 25:
                                        var2 = arguments[var0];
                                    case 29:
                                        var1 = arguments.length;
                                        var0 = 1;
                                        if (!(var1 > var0)) {
                                            _fun99561_ip = 47;
                                            continue _fun99561
                                        }
                                    case 39:
                                        var1 = arguments[var0];
                                        if (!(var3 === var1)) {
                                            _fun99561_ip = 51;
                                            continue _fun99561
                                        }
                                    case 47:
                                        var1 = {};
                                        _fun99561_ip = 55;
                                        continue _fun99561;
                                    case 51:
                                        var1 = arguments[var0];
                                    case 55:
                                        var0 = {};
                                        var8 = new Array(0);
                                        var6 = var8.concat;
                                        var5 = _closure1_slot2;
                                        var4 = var2.allowUrls;
                                        if (var4) {
                                            _fun99561_ip = 86;
                                            continue _fun99561
                                        }
                                    case 82:
                                        var4 = new Array(0);
                                    case 86:
                                        var5 = var5.bind(var3)(var4);
                                        var9 = _closure1_slot2;
                                        var4 = var1.allowUrls;
                                        if (var4) {
                                            _fun99561_ip = 108;
                                            continue _fun99561
                                        }
                                    case 104:
                                        var4 = new Array(0);
                                    case 108:
                                        var4 = var9.bind(var3)(var4);
                                        var4 = var6.bind(var8)(var5, var4);
                                        var0.allowUrls = var4;
                                        var8 = new Array(0);
                                        var6 = var8.concat;
                                        var5 = _closure1_slot2;
                                        var4 = var2.denyUrls;
                                        if (var4) {
                                            _fun99561_ip = 150;
                                            continue _fun99561
                                        }
                                    case 146:
                                        var4 = new Array(0);
                                    case 150:
                                        var5 = var5.bind(var3)(var4);
                                        var9 = _closure1_slot2;
                                        var4 = var1.denyUrls;
                                        if (var4) {
                                            _fun99561_ip = 172;
                                            continue _fun99561
                                        }
                                    case 168:
                                        var4 = new Array(0);
                                    case 172:
                                        var4 = var9.bind(var3)(var4);
                                        var4 = var6.bind(var8)(var5, var4);
                                        var0.denyUrls = var4;
                                        var9 = new Array(0);
                                        var8 = var9.concat;
                                        var5 = _closure1_slot2;
                                        var4 = var2.ignoreErrors;
                                        if (var4) {
                                            _fun99561_ip = 214;
                                            continue _fun99561
                                        }
                                    case 210:
                                        var4 = new Array(0);
                                    case 214:
                                        var6 = var5.bind(var3)(var4);
                                        var5 = _closure1_slot2;
                                        var4 = var1.ignoreErrors;
                                        if (var4) {
                                            _fun99561_ip = 236;
                                            continue _fun99561
                                        }
                                    case 232:
                                        var4 = new Array(0);
                                    case 236:
                                        var5 = var5.bind(var3)(var4);
                                        var10 = _closure1_slot2;
                                        var4 = var2.disableErrorDefaults;
                                        if (var4) {
                                            _fun99561_ip = 260;
                                            continue _fun99561
                                        }
                                    case 254:
                                        var4 = _closure1_slot3;
                                        _fun99561_ip = 264;
                                        continue _fun99561;
                                    case 260:
                                        var4 = new Array(0);
                                    case 264:
                                        var4 = var10.bind(var3)(var4);
                                        var4 = var8.bind(var9)(var6, var5, var4);
                                        var0.ignoreErrors = var4;
                                        var6 = new Array(0);
                                        var5 = var6.concat;
                                        var8 = _closure1_slot2;
                                        var4 = var2.ignoreTransactions;
                                        if (var4) {
                                            _fun99561_ip = 307;
                                            continue _fun99561
                                        }
                                    case 303:
                                        var4 = new Array(0);
                                    case 307:
                                        var4 = var8.bind(var3)(var4);
                                        var7 = _closure1_slot2;
                                        var1 = var1.ignoreTransactions;
                                        if (var1) {
                                            _fun99561_ip = 329;
                                            continue _fun99561
                                        }
                                    case 325:
                                        var1 = new Array(0);
                                    case 329:
                                        var1 = var7.bind(var3)(var1);
                                        var1 = var5.bind(var6)(var4, var1);
                                        var0.ignoreTransactions = var1;
                                        var1 = var2.ignoreInternal;
                                        var1 = var3 === var1;
                                        if (var1) {
                                            _fun99561_ip = 364;
                                            continue _fun99561
                                        }
                                    case 358:
                                        var1 = var2.ignoreInternal;
                                    case 364:
                                        var0.ignoreInternal = var1;
                                        return var0;
                                }
                            };
                            var3 = undefined;
                            var2 = var2.bind(var3)(var4, var5);
                            var0 = function arg0, arg1() {
                                _fun99562: for (var _fun99562_ip = 0;;) switch (_fun99562_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var1 = arg1;
                                        var2 = var1.ignoreInternal;
                                        if (!var2) {
                                            _fun99562_ip = 62;
                                            continue _fun99562
                                        }
                                    case 17:
                                        var2 = var4;
                                    case 20: // try_start_0
                                        var2 = var2.exception;
                                        var3 = var2.values;
                                        var2 = 0;
                                        var2 = var3[var2];
                                        var3 = var2.type;
                                        var2 = 'SentryError';
                                        var2 = var2 === var3;
                                    case 50: // try_end0
                                        _fun99562_ip = 56;
                                        continue _fun99562;
                                    case 52: // catch_target0
                                        CatchBlockStart(arg_register = 3);
                                        var2 = false;
                                    case 56:
                                        if (var2) {
                                            _fun99562_ip = 983;
                                            continue _fun99562
                                        }
                                    case 62:
                                        var3 = var1.ignoreErrors;
                                        var2 = function arg0, arg1() {
                                            _fun99563: for (var _fun99563_ip = 0;;) switch (_fun99563_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var1 = arg1;
                                                    var _closure5_slot0 = var1;
                                                    var2 = var4.type;
                                                    if (var2) {
                                                        _fun99563_ip = 245;
                                                        continue _fun99563
                                                    }
                                                case 23:
                                                    if (!var1) {
                                                        _fun99563_ip = 245;
                                                        continue _fun99563
                                                    }
                                                case 29:
                                                    var1 = var1.length;
                                                    if (!var1) {
                                                        _fun99563_ip = 245;
                                                        continue _fun99563
                                                    }
                                                case 40:
                                                    var3 = var4;
                                                    var2 = undefined;
                                                    var1 = new Array(0);
                                                    var4 = var4.message;
                                                    if (!var4) {
                                                        _fun99563_ip = 78;
                                                        continue _fun99563
                                                    }
                                                case 57:
                                                    var6 = var1;
                                                    var5 = var6.push;
                                                    var4 = var3;
                                                    var4 = var4.message;
                                                    var4 = var5.bind(var6)(var4);
                                                case 78: // try_start_0
                                                    var4 = var3.exception;
                                                    var4 = var4.values;
                                                    var3 = var3.exception;
                                                    var3 = var3.values;
                                                    var5 = var3.length;
                                                    var3 = 1;
                                                    var3 = var5 - var3;
                                                    var2 = var4[var3];
                                                case 116: // try_end0
                                                    _fun99563_ip = 120;
                                                    continue _fun99563;
                                                case 118: // catch_target0
                                                    CatchBlockStart(arg_register = 3);
                                                case 120:
                                                    var4 = var2;
                                                    var3 = var4;
                                                    if (!var4) {
                                                        _fun99563_ip = 137;
                                                        continue _fun99563
                                                    }
                                                case 129:
                                                    var4 = var2;
                                                    var3 = var4.value;
                                                case 137:
                                                    if (!var3) {
                                                        _fun99563_ip = 222;
                                                        continue _fun99563
                                                    }
                                                case 140:
                                                    var6 = var1;
                                                    var5 = var6.push;
                                                    var3 = var2;
                                                    var4 = var3.value;
                                                    var4 = var5.bind(var6)(var4);
                                                    var3 = var3.type;
                                                    if (!var3) {
                                                        _fun99563_ip = 222;
                                                        continue _fun99563
                                                    }
                                                case 169:
                                                    var4 = var1;
                                                    var3 = var4.push;
                                                    var8 = var2.type;
                                                    var7 = var2.value;
                                                    var2 = global;
                                                    var2 = var2.HermesInternal;
                                                    var6 = var2.concat;
                                                    var5 = '';
                                                    var2 = ': ';
                                                    var2 = var6.bind(var5)(var8, var2, var7);
                                                    var2 = var3.bind(var4)(var2);
                                                case 222:
                                                    var2 = var1;
                                                    var1 = var2.some;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var0 = 3;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var3 = var2.bind(var0)(var1);
                                                        var2 = var3.stringMatchesSomePattern;
                                                        var1 = _closure5_slot0;
                                                        var0 = arg0;
                                                        var0 = var2.bind(var3)(var0, var1);
                                                        return var0;
                                                    };
                                                    var0 = var1.bind(var2)(var0);
                                                    return var0;
                                                case 245:
                                                    var0 = false;
                                                    return var0;
                                            }
                                        };
                                        var5 = undefined;
                                        var2 = var2.bind(var5)(var4, var3);
                                        if (var2) {
                                            _fun99562_ip = 867;
                                            continue _fun99562
                                        }
                                    case 89:
                                        var0 = function arg0() {
                                            _fun99565: for (var _fun99565_ip = 0;;) switch (_fun99565_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var0 = var1.type;
                                                    if (var0) {
                                                        _fun99565_ip = 107;
                                                        continue _fun99565
                                                    }
                                                case 11:
                                                    var0 = var1.exception;
                                                    if (!var0) {
                                                        _fun99565_ip = 103;
                                                        continue _fun99565
                                                    }
                                                case 20:
                                                    var0 = var1.exception;
                                                    var0 = var0.values;
                                                    if (!var0) {
                                                        _fun99565_ip = 103;
                                                        continue _fun99565
                                                    }
                                                case 34:
                                                    var0 = var1.exception;
                                                    var0 = var0.values;
                                                    var2 = var0.length;
                                                    var0 = 0;
                                                    if (!(var0 !== var2)) {
                                                        _fun99565_ip = 103;
                                                        continue _fun99565
                                                    }
                                                case 56:
                                                    var0 = var1.message;
                                                    var0 = !var0;
                                                    if (!var0) {
                                                        _fun99565_ip = 101;
                                                        continue _fun99565
                                                    }
                                                case 67:
                                                    var1 = var1.exception;
                                                    var3 = var1.values;
                                                    var2 = var3.some;
                                                    var1 = function(arg0) { // Environment: var1
                                                        _fun99566: for (var _fun99566_ip = 0;;) switch (_fun99566_ip) {
                                                            case 0:
                                                                var1 = arg0;
                                                                var0 = var1.stacktrace;
                                                                if (var0) {
                                                                    _fun99566_ip = 36;
                                                                    continue _fun99566
                                                                }
                                                            case 12:
                                                                var2 = var1.type;
                                                                if (!var2) {
                                                                    _fun99566_ip = 33;
                                                                    continue _fun99566
                                                                }
                                                            case 20:
                                                                var4 = var1.type;
                                                                var3 = 'Error';
                                                                var2 = var3 !== var4;
                                                            case 33:
                                                                var0 = var2;
                                                            case 36:
                                                                if (var0) {
                                                                    _fun99566_ip = 44;
                                                                    continue _fun99566
                                                                }
                                                            case 39:
                                                                var0 = var1.value;
                                                            case 44:
                                                                return var0;
                                                        }
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                    var0 = !var1;
                                                case 101:
                                                    return var0;
                                                case 103:
                                                    var0 = false;
                                                    return var0;
                                                case 107:
                                                    var0 = false;
                                                    return var0;
                                            }
                                        };
                                        var0 = var0.bind(var5)(var4);
                                        if (var0) {
                                            _fun99562_ip = 751;
                                            continue _fun99562
                                        }
                                    case 107:
                                        var9 = var1.ignoreTransactions;
                                        var6 = var4.type;
                                        var0 = false;
                                        var3 = 'transaction';
                                        var2 = false;
                                        if (!(var3 === var6)) {
                                            _fun99562_ip = 198;
                                            continue _fun99562
                                        }
                                    case 130:
                                        var2 = false;
                                        if (!var9) {
                                            _fun99562_ip = 198;
                                            continue _fun99562
                                        }
                                    case 135:
                                        var3 = var9.length;
                                        var2 = false;
                                        if (!var3) {
                                            _fun99562_ip = 198;
                                            continue _fun99562
                                        }
                                    case 145:
                                        var8 = var4.transaction;
                                        var6 = !var8;
                                        var3 = !var6;
                                        if (var6) {
                                            _fun99562_ip = 195;
                                            continue _fun99562
                                        }
                                    case 160:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var6 = 3;
                                        var6 = var10[var6];
                                        var7 = var7.bind(var5)(var6);
                                        var6 = var7.stringMatchesSomePattern;
                                        var3 = var6.bind(var7)(var8, var9);
                                    case 195:
                                        var2 = var3;
                                    case 198:
                                        if (var2) {
                                            _fun99562_ip = 635;
                                            continue _fun99562
                                        }
                                    case 204:
                                        var9 = var1.denyUrls;
                                        var2 = false;
                                        if (!var9) {
                                            _fun99562_ip = 281;
                                            continue _fun99562
                                        }
                                    case 215:
                                        var3 = var9.length;
                                        var2 = false;
                                        if (!var3) {
                                            _fun99562_ip = 281;
                                            continue _fun99562
                                        }
                                    case 225:
                                        var3 = _closure1_slot4;
                                        var8 = var3.bind(var5)(var4);
                                        var7 = !var8;
                                        var3 = !var7;
                                        if (var7) {
                                            _fun99562_ip = 278;
                                            continue _fun99562
                                        }
                                    case 246:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var6 = 3;
                                        var6 = var10[var6];
                                        var7 = var7.bind(var5)(var6);
                                        var6 = var7.stringMatchesSomePattern;
                                        var3 = var6.bind(var7)(var8, var9);
                                    case 278:
                                        var2 = var3;
                                    case 281:
                                        if (var2) {
                                            _fun99562_ip = 502;
                                            continue _fun99562
                                        }
                                    case 287:
                                        var9 = var1.allowUrls;
                                        var1 = true;
                                        var2 = true;
                                        if (!var9) {
                                            _fun99562_ip = 363;
                                            continue _fun99562
                                        }
                                    case 300:
                                        var3 = var9.length;
                                        var2 = true;
                                        if (!var3) {
                                            _fun99562_ip = 363;
                                            continue _fun99562
                                        }
                                    case 310:
                                        var3 = _closure1_slot4;
                                        var8 = var3.bind(var5)(var4);
                                        var3 = !var8;
                                        if (var3) {
                                            _fun99562_ip = 360;
                                            continue _fun99562
                                        }
                                    case 328:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var6 = 3;
                                        var6 = var10[var6];
                                        var7 = var7.bind(var5)(var6);
                                        var6 = var7.stringMatchesSomePattern;
                                        var3 = var6.bind(var7)(var8, var9);
                                    case 360:
                                        var2 = var3;
                                    case 363:
                                        if (var2) {
                                            _fun99562_ip = 500;
                                            continue _fun99562
                                        }
                                    case 369:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 2;
                                        var3 = var7[var3];
                                        var3 = var6.bind(var5)(var3);
                                        var3 = var3.DEBUG_BUILD;
                                        if (!var3) {
                                            _fun99562_ip = 498;
                                            continue _fun99562
                                        }
                                    case 401:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var7 = 3;
                                        var3 = var9[var7];
                                        var3 = var8.bind(var5)(var3);
                                        var6 = var3.logger;
                                        var3 = var6.warn;
                                        var7 = var9[var7];
                                        var8 = var8.bind(var5)(var7);
                                        var7 = var8.getEventDescription;
                                        var10 = var7.bind(var8)(var4);
                                        var2 = _closure1_slot4;
                                        var9 = var2.bind(var5)(var4);
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var8 = var2.concat;
                                        var7 = 'Event dropped due to not being matched by `allowUrls` option.\nEvent: ';
                                        var2 = '.\nUrl: ';
                                        var2 = var8.bind(var7)(var10, var2, var9);
                                        var2 = var3.bind(var6)(var2);
                                    case 498:
                                        return var1;
                                    case 500:
                                        return var0;
                                    case 502:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99562_ip = 631;
                                            continue _fun99562
                                        }
                                    case 534:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 3;
                                        var1 = var7[var3];
                                        var1 = var6.bind(var5)(var1);
                                        var2 = var1.logger;
                                        var1 = var2.warn;
                                        var3 = var7[var3];
                                        var6 = var6.bind(var5)(var3);
                                        var3 = var6.getEventDescription;
                                        var8 = var3.bind(var6)(var4);
                                        var0 = _closure1_slot4;
                                        var7 = var0.bind(var5)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var6 = var0.concat;
                                        var3 = 'Event dropped due to being matched by `denyUrls` option.\nEvent: ';
                                        var0 = '.\nUrl: ';
                                        var0 = var6.bind(var3)(var8, var0, var7);
                                        var0 = var1.bind(var2)(var0);
                                    case 631:
                                        var0 = true;
                                        return var0;
                                    case 635:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99562_ip = 747;
                                            continue _fun99562
                                        }
                                    case 667:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var6[var0];
                                        var1 = var3.bind(var5)(var1);
                                        var2 = var1.logger;
                                        var1 = var2.warn;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var5)(var0);
                                        var0 = var3.getEventDescription;
                                        var6 = var0.bind(var3)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var0 = 'Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ';
                                        var0 = var3.bind(var0)(var6);
                                        var0 = var1.bind(var2)(var0);
                                    case 747:
                                        var0 = true;
                                        return var0;
                                    case 751:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99562_ip = 863;
                                            continue _fun99562
                                        }
                                    case 783:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var6[var0];
                                        var1 = var3.bind(var5)(var1);
                                        var2 = var1.logger;
                                        var1 = var2.warn;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var5)(var0);
                                        var0 = var3.getEventDescription;
                                        var6 = var0.bind(var3)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var0 = 'Event dropped due to not having an error message, error type or stacktrace.\nEvent: ';
                                        var0 = var3.bind(var0)(var6);
                                        var0 = var1.bind(var2)(var0);
                                    case 863:
                                        var0 = true;
                                        return var0;
                                    case 867:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99562_ip = 979;
                                            continue _fun99562
                                        }
                                    case 899:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var6[var0];
                                        var1 = var3.bind(var5)(var1);
                                        var2 = var1.logger;
                                        var1 = var2.warn;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var5)(var0);
                                        var0 = var3.getEventDescription;
                                        var5 = var0.bind(var3)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var0 = 'Event dropped due to being matched by `ignoreErrors` option.\nEvent: ';
                                        var0 = var3.bind(var0)(var5);
                                        var0 = var1.bind(var2)(var0);
                                    case 979:
                                        var0 = true;
                                        return var0;
                                    case 983:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var5 = undefined;
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99562_ip = 1097;
                                            continue _fun99562
                                        }
                                    case 1017:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var6[var0];
                                        var1 = var3.bind(var5)(var1);
                                        var2 = var1.logger;
                                        var1 = var2.warn;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var5)(var0);
                                        var0 = var3.getEventDescription;
                                        var4 = var0.bind(var3)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var0 = 'Event dropped due to being internal Sentry Error.\nEvent: ';
                                        var0 = var3.bind(var0)(var4);
                                        var0 = var1.bind(var2)(var0);
                                    case 1097:
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var2 = var0.bind(var3)(var1, var2);
                            var0 = null;
                            if (var2) {
                                _fun99560_ip = 61;
                                continue _fun99560
                            }
                        case 58:
                            var0 = var1;
                        case 61:
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.inboundFiltersIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 12914, 12891, 12825]);