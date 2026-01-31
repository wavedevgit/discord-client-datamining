// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _mergeOptions, environment: var1
        _fun9518: for (var _fun9518_ip = 0;;) switch (_fun9518_ip) {
            case 0:
                var6 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun9518_ip = 21;
                    continue _fun9518
                }
            case 13:
                var1 = arguments[var0];
                if (!(var6 === var1)) {
                    _fun9518_ip = 25;
                    continue _fun9518
                }
            case 21:
                var2 = {};
                _fun9518_ip = 29;
                continue _fun9518;
            case 25:
                var2 = arguments[var0];
            case 29:
                var1 = arguments.length;
                var0 = 1;
                if (!(var1 > var0)) {
                    _fun9518_ip = 47;
                    continue _fun9518
                }
            case 39:
                var1 = arguments[var0];
                if (!(var6 === var1)) {
                    _fun9518_ip = 51;
                    continue _fun9518
                }
            case 47:
                var1 = {};
                _fun9518_ip = 55;
                continue _fun9518;
            case 51:
                var1 = arguments[var0];
            case 55:
                var0 = {};
                var8 = new Array(0);
                var7 = var8.concat;
                var4 = _closure1_slot2;
                var3 = var2.allowUrls;
                if (var3) {
                    _fun9518_ip = 86;
                    continue _fun9518
                }
            case 82:
                var3 = new Array(0);
            case 86:
                var4 = var4.bind(var6)(var3);
                var9 = _closure1_slot2;
                var3 = var1.allowUrls;
                if (var3) {
                    _fun9518_ip = 108;
                    continue _fun9518
                }
            case 104:
                var3 = new Array(0);
            case 108:
                var3 = var9.bind(var6)(var3);
                var3 = var7.bind(var8)(var4, var3);
                var0.allowUrls = var3;
                var8 = new Array(0);
                var7 = var8.concat;
                var4 = _closure1_slot2;
                var3 = var2.denyUrls;
                if (var3) {
                    _fun9518_ip = 150;
                    continue _fun9518
                }
            case 146:
                var3 = new Array(0);
            case 150:
                var4 = var4.bind(var6)(var3);
                var9 = _closure1_slot2;
                var3 = var1.denyUrls;
                if (var3) {
                    _fun9518_ip = 172;
                    continue _fun9518
                }
            case 168:
                var3 = new Array(0);
            case 172:
                var3 = var9.bind(var6)(var3);
                var3 = var7.bind(var8)(var4, var3);
                var0.denyUrls = var3;
                var9 = new Array(0);
                var8 = var9.concat;
                var4 = _closure1_slot2;
                var3 = var2.ignoreErrors;
                if (var3) {
                    _fun9518_ip = 214;
                    continue _fun9518
                }
            case 210:
                var3 = new Array(0);
            case 214:
                var7 = var4.bind(var6)(var3);
                var4 = _closure1_slot2;
                var3 = var1.ignoreErrors;
                if (var3) {
                    _fun9518_ip = 236;
                    continue _fun9518
                }
            case 232:
                var3 = new Array(0);
            case 236:
                var4 = var4.bind(var6)(var3);
                var10 = _closure1_slot2;
                var3 = var2.disableErrorDefaults;
                if (var3) {
                    _fun9518_ip = 260;
                    continue _fun9518
                }
            case 254:
                var3 = _closure1_slot3;
                _fun9518_ip = 264;
                continue _fun9518;
            case 260:
                var3 = new Array(0);
            case 264:
                var3 = var10.bind(var6)(var3);
                var3 = var8.bind(var9)(var7, var4, var3);
                var0.ignoreErrors = var3;
                var4 = new Array(0);
                var3 = var4.concat;
                var7 = _closure1_slot2;
                var2 = var2.ignoreTransactions;
                if (var2) {
                    _fun9518_ip = 307;
                    continue _fun9518
                }
            case 303:
                var2 = new Array(0);
            case 307:
                var2 = var7.bind(var6)(var2);
                var5 = _closure1_slot2;
                var1 = var1.ignoreTransactions;
                if (var1) {
                    _fun9518_ip = 329;
                    continue _fun9518
                }
            case 325:
                var1 = new Array(0);
            case 329:
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                var0.ignoreTransactions = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: _getEventFilterUrl, environment: var1
        _fun9519: for (var _fun9519_ip = 0;;) switch (_fun9519_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var9 = undefined;
                var10 = undefined;
                var6 = undefined;
                var7 = undefined;
                var3 = undefined;
            case 17: // try_start_0
                var8 = _closure1_slot2;
                var1 = var0;
                var4 = var1.exception;
                var10 = var4;
                var1 = null;
                var11 = var1 == var4;
                var4 = undefined;
                if (var11) {
                    _fun9519_ip = 52;
                    continue _fun9519
                }
            case 47:
                var4 = var10.values;
            case 52:
                var9 = var4;
                if (!(var1 == var4)) {
                    _fun9519_ip = 65;
                    continue _fun9519
                }
            case 59:
                var4 = new Array(0);
                _fun9519_ip = 68;
                continue _fun9519;
            case 65:
                var4 = var9;
            case 68:
                var8 = var8.bind(var5)(var4);
                var4 = var8.reverse;
                var9 = var4.bind(var8)();
                var8 = var9.find;
                var4 = function(arg0) { // Environment: var2
                    _fun9520: for (var _fun9520_ip = 0;;) switch (_fun9520_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.mechanism;
                            var3 = null;
                            var5 = var3 == var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun9520_ip = 28;
                                continue _fun9520
                            }
                        case 22:
                            var0 = var2.parent_id;
                        case 28:
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun9520_ip = 73;
                                continue _fun9520
                            }
                        case 35:
                            var2 = var1.stacktrace;
                            var5 = var3 == var2;
                            var1 = undefined;
                            if (var5) {
                                _fun9520_ip = 70;
                                continue _fun9520
                            }
                        case 50:
                            var2 = var2.frames;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun9520_ip = 70;
                                continue _fun9520
                            }
                        case 65:
                            var1 = var2.length;
                        case 70:
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4);
                var7 = var4;
                var8 = var1 == var4;
                var4 = undefined;
                if (var8) {
                    _fun9519_ip = 134;
                    continue _fun9519
                }
            case 110:
                var7 = var7.stacktrace;
                var6 = var7;
                var7 = var1 == var7;
                var4 = undefined;
                if (var7) {
                    _fun9519_ip = 134;
                    continue _fun9519
                }
            case 128:
                var4 = var6.frames;
            case 134:
                var3 = var4;
                var1 = null;
                if (!var4) {
                    _fun9519_ip = 152;
                    continue _fun9519
                }
            case 142:
                var2 = function() { // Original name: _getLastValidUrl, environment: var2
                    _fun9521: for (var _fun9521_ip = 0;;) switch (_fun9521_ip) {
                        case 0:
                            var2 = undefined;
                            var0 = undefined;
                            var1 = arguments.length;
                            var5 = 0;
                            if (!(var1 > var5)) {
                                _fun9521_ip = 21;
                                continue _fun9521
                            }
                        case 13:
                            var1 = arguments[var5];
                            if (!(var2 === var1)) {
                                _fun9521_ip = 27;
                                continue _fun9521
                            }
                        case 21:
                            var4 = new Array(0);
                            _fun9521_ip = 31;
                            continue _fun9521;
                        case 27:
                            var4 = arguments[var5];
                        case 31:
                            var1 = var4.length;
                            var0 = 1;
                            var3 = var1 - var0;
                            var2 = '[native code]';
                            var1 = '<anonymous>';
                            if (!(var3 >= var5)) {
                                _fun9521_ip = 93;
                                continue _fun9521
                            }
                        case 59:
                            var0 = var4[var3];
                            if (!var0) {
                                _fun9521_ip = 86;
                                continue _fun9521
                            }
                        case 66:
                            var6 = var0.filename;
                            if (!(var1 !== var6)) {
                                _fun9521_ip = 86;
                                continue _fun9521
                            }
                        case 76:
                            var6 = var0.filename;
                            if (!(var2 === var6)) {
                                _fun9521_ip = 97;
                                continue _fun9521
                            }
                        case 86:
                            var3 = var3 - 1;
                            if (var3 >= var5) {
                                _fun9521_ip = 59;
                                continue _fun9521
                            }
                        case 93:
                            var1 = null;
                            return var1;
                        case 97:
                            var0 = var0.filename;
                            if (var0) {
                                _fun9521_ip = 108;
                                continue _fun9521
                            }
                        case 106:
                            var0 = null;
                        case 108:
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var3);
            case 152: // try_end0
                return var1;
            case 154: // catch_target0
                CatchBlockStart(arg_register = 1);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9519_ip = 271;
                    continue _fun9519
                }
            case 188:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var2 = var1.debug;
                var1 = var2.error;
                var3 = 4;
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
            case 271:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var4, var3);
    var3 = new Array(11);
    var4 = /^Script error\.?$/;
    var3[0] = var4;
    var4 = /^Javascript error: Script error\.? on line 0$/;
    var3[1] = var4;
    var4 = /^ResizeObserver loop completed with undelivered notifications.$/;
    var3[2] = var4;
    var4 = /^Cannot redefine property: googletag$/;
    var3[3] = var4;
    var4 = /^Can't find variable: gmo$/;
    var3[4] = var4;
    var4 = /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/;
    var3[5] = var4;
    var4 = 'can\'t redefine non-configurable property "solana"';
    var3[6] = var4;
    var4 = "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)";
    var3[7] = var4;
    var4 = "Can't find variable: _AutofillCallbackHandler";
    var3[8] = var4;
    var4 = /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/;
    var3[9] = var4;
    var4 = /^Java exception was raised during method invocation$/;
    var3[10] = var4;
    var _closure1_slot3 = var3;
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var7 = var8.defineIntegration;
    var3 = function() { // Environment: var1
        _fun9522: for (var _fun9522_ip = 0;;) switch (_fun9522_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9522_ip = 23;
                    continue _fun9522
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun9522_ip = 27;
                    continue _fun9522
                }
            case 23:
                var0 = {};
                _fun9522_ip = 31;
                continue _fun9522;
            case 27:
                var0 = arguments[var2];
            case 31:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'EventFilters';
                var0.name = var2;
                var2 = function(arg0) { // Original name: setup, environment: var1
                    var1 = arg0;
                    var0 = var1.getOptions;
                    var4 = var0.bind(var1)();
                    var3 = _closure1_slot5;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1, var4);
                    var _closure2_slot0 = var1;
                    return var0;
                };
                var0.setup = var2;
                var1 = function(arg0, arg1, arg2) { // Original name: processEvent, environment: var1
                    _fun9524: for (var _fun9524_ip = 0;;) switch (_fun9524_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = arg2;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun9524_ip = 49;
                                continue _fun9524
                            }
                        case 16:
                            var2 = var3.getOptions;
                            var5 = var2.bind(var3)();
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3, var5);
                            _closure2_slot0 = var2;
                        case 49:
                            var3 = _closure2_slot0;
                            var2 = function(arg0, arg1) { // Original name: _shouldDropEvent, environment: var0
                                _fun9525: for (var _fun9525_ip = 0;;) switch (_fun9525_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = arg1;
                                        var2 = var4.type;
                                        if (var2) {
                                            _fun9525_ip = 743;
                                            continue _fun9525
                                        }
                                    case 19:
                                        var3 = var0.ignoreErrors;
                                        var2 = function(arg0, arg1) { // Original name: _isIgnoredError, environment: var1
                                            _fun9526: for (var _fun9526_ip = 0;;) switch (_fun9526_ip) {
                                                case 0:
                                                    var1 = arg1;
                                                    var _closure5_slot0 = var1;
                                                    var2 = null;
                                                    if (!(var2 != var1)) {
                                                        _fun9526_ip = 80;
                                                        continue _fun9526
                                                    }
                                                case 15:
                                                    var1 = var1.length;
                                                    if (!var1) {
                                                        _fun9526_ip = 80;
                                                        continue _fun9526
                                                    }
                                                case 23:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var1 = 5;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var3 = var3.bind(var1)(var2);
                                                    var2 = var3.getPossibleEventMessages;
                                                    var1 = arg0;
                                                    var2 = var2.bind(var3)(var1);
                                                    var1 = var2.some;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var0 = 6;
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
                                                case 80:
                                                    var0 = false;
                                                    return var0;
                                            }
                                        };
                                        var6 = undefined;
                                        var2 = var2.bind(var6)(var4, var3);
                                        if (var2) {
                                            _fun9525_ip = 624;
                                            continue _fun9525
                                        }
                                    case 44:
                                        var1 = function(arg0) { // Original name: _isUselessError, environment: var1
                                            _fun9528: for (var _fun9528_ip = 0;;) switch (_fun9528_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var0 = var1.exception;
                                                    var2 = null;
                                                    if (!(var2 != var0)) {
                                                        _fun9528_ip = 77;
                                                        continue _fun9528
                                                    }
                                                case 15:
                                                    var0 = var0.values;
                                                    if (!(var2 != var0)) {
                                                        _fun9528_ip = 77;
                                                        continue _fun9528
                                                    }
                                                case 24:
                                                    var0 = var0.length;
                                                    if (!var0) {
                                                        _fun9528_ip = 77;
                                                        continue _fun9528
                                                    }
                                                case 32:
                                                    var0 = var1.message;
                                                    var0 = !var0;
                                                    if (!var0) {
                                                        _fun9528_ip = 75;
                                                        continue _fun9528
                                                    }
                                                case 43:
                                                    var1 = var1.exception;
                                                    var3 = var1.values;
                                                    var2 = var3.some;
                                                    var1 = function(arg0) { // Environment: var1
                                                        _fun9529: for (var _fun9529_ip = 0;;) switch (_fun9529_ip) {
                                                            case 0:
                                                                var1 = arg0;
                                                                var0 = var1.stacktrace;
                                                                if (var0) {
                                                                    _fun9529_ip = 36;
                                                                    continue _fun9529
                                                                }
                                                            case 12:
                                                                var2 = var1.type;
                                                                if (!var2) {
                                                                    _fun9529_ip = 33;
                                                                    continue _fun9529
                                                                }
                                                            case 20:
                                                                var4 = var1.type;
                                                                var3 = 'Error';
                                                                var2 = var3 !== var4;
                                                            case 33:
                                                                var0 = var2;
                                                            case 36:
                                                                if (var0) {
                                                                    _fun9529_ip = 44;
                                                                    continue _fun9529
                                                                }
                                                            case 39:
                                                                var0 = var1.value;
                                                            case 44:
                                                                return var0;
                                                        }
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                    var0 = !var1;
                                                case 75:
                                                    return var0;
                                                case 77:
                                                    var0 = false;
                                                    return var0;
                                            }
                                        };
                                        var1 = var1.bind(var6)(var4);
                                        if (var1) {
                                            _fun9525_ip = 505;
                                            continue _fun9525
                                        }
                                    case 60:
                                        var9 = var0.denyUrls;
                                        var1 = null;
                                        var3 = var1 == var9;
                                        var2 = false;
                                        if (var3) {
                                            _fun9525_ip = 143;
                                            continue _fun9525
                                        }
                                    case 77:
                                        var3 = var9.length;
                                        var2 = false;
                                        if (!var3) {
                                            _fun9525_ip = 143;
                                            continue _fun9525
                                        }
                                    case 87:
                                        var3 = _closure1_slot6;
                                        var8 = var3.bind(var6)(var4);
                                        var7 = !var8;
                                        var3 = !var7;
                                        if (var7) {
                                            _fun9525_ip = 140;
                                            continue _fun9525
                                        }
                                    case 108:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var5 = 6;
                                        var5 = var10[var5];
                                        var7 = var7.bind(var6)(var5);
                                        var5 = var7.stringMatchesSomePattern;
                                        var3 = var5.bind(var7)(var8, var9);
                                    case 140:
                                        var2 = var3;
                                    case 143:
                                        if (var2) {
                                            _fun9525_ip = 369;
                                            continue _fun9525
                                        }
                                    case 149:
                                        var9 = var0.allowUrls;
                                        var3 = var1 == var9;
                                        var1 = true;
                                        var2 = true;
                                        if (var3) {
                                            _fun9525_ip = 229;
                                            continue _fun9525
                                        }
                                    case 166:
                                        var3 = var9.length;
                                        var2 = true;
                                        if (!var3) {
                                            _fun9525_ip = 229;
                                            continue _fun9525
                                        }
                                    case 176:
                                        var3 = _closure1_slot6;
                                        var8 = var3.bind(var6)(var4);
                                        var3 = !var8;
                                        if (var3) {
                                            _fun9525_ip = 226;
                                            continue _fun9525
                                        }
                                    case 194:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var5 = 6;
                                        var5 = var10[var5];
                                        var7 = var7.bind(var6)(var5);
                                        var5 = var7.stringMatchesSomePattern;
                                        var3 = var5.bind(var7)(var8, var9);
                                    case 226:
                                        var2 = var3;
                                    case 229:
                                        if (var2) {
                                            _fun9525_ip = 841;
                                            continue _fun9525
                                        }
                                    case 235:
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 2;
                                        var3 = var7[var3];
                                        var3 = var5.bind(var6)(var3);
                                        var3 = var3.DEBUG_BUILD;
                                        if (!var3) {
                                            _fun9525_ip = 367;
                                            continue _fun9525
                                        }
                                    case 267:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var3 = 3;
                                        var3 = var9[var3];
                                        var3 = var8.bind(var6)(var3);
                                        var5 = var3.debug;
                                        var3 = var5.warn;
                                        var7 = 4;
                                        var7 = var9[var7];
                                        var8 = var8.bind(var6)(var7);
                                        var7 = var8.getEventDescription;
                                        var10 = var7.bind(var8)(var4);
                                        var2 = _closure1_slot6;
                                        var9 = var2.bind(var6)(var4);
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var8 = var2.concat;
                                        var7 = 'Event dropped due to not being matched by `allowUrls` option.\nEvent: ';
                                        var2 = '.\nUrl: ';
                                        var2 = var8.bind(var7)(var10, var2, var9);
                                        var2 = var3.bind(var5)(var2);
                                    case 367:
                                        return var1;
                                    case 369:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var2 = 2;
                                        var2 = var5[var2];
                                        var2 = var3.bind(var6)(var2);
                                        var2 = var2.DEBUG_BUILD;
                                        if (!var2) {
                                            _fun9525_ip = 501;
                                            continue _fun9525
                                        }
                                    case 401:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var2 = 3;
                                        var2 = var8[var2];
                                        var2 = var7.bind(var6)(var2);
                                        var3 = var2.debug;
                                        var2 = var3.warn;
                                        var5 = 4;
                                        var5 = var8[var5];
                                        var7 = var7.bind(var6)(var5);
                                        var5 = var7.getEventDescription;
                                        var9 = var5.bind(var7)(var4);
                                        var1 = _closure1_slot6;
                                        var8 = var1.bind(var6)(var4);
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var7 = var1.concat;
                                        var5 = 'Event dropped due to being matched by `denyUrls` option.\nEvent: ';
                                        var1 = '.\nUrl: ';
                                        var1 = var7.bind(var5)(var9, var1, var8);
                                        var1 = var2.bind(var3)(var1);
                                    case 501:
                                        var1 = true;
                                        return var1;
                                    case 505:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var2 = 2;
                                        var2 = var5[var2];
                                        var2 = var3.bind(var6)(var2);
                                        var2 = var2.DEBUG_BUILD;
                                        if (!var2) {
                                            _fun9525_ip = 620;
                                            continue _fun9525
                                        }
                                    case 537:
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var7[var1];
                                        var1 = var5.bind(var6)(var1);
                                        var3 = var1.debug;
                                        var2 = var3.warn;
                                        var1 = 4;
                                        var1 = var7[var1];
                                        var5 = var5.bind(var6)(var1);
                                        var1 = var5.getEventDescription;
                                        var7 = var1.bind(var5)(var4);
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Event dropped due to not having an error message, error type or stacktrace.\nEvent: ';
                                        var1 = var5.bind(var1)(var7);
                                        var1 = var2.bind(var3)(var1);
                                    case 620:
                                        var1 = true;
                                        return var1;
                                    case 624:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var2 = 2;
                                        var2 = var5[var2];
                                        var2 = var3.bind(var6)(var2);
                                        var2 = var2.DEBUG_BUILD;
                                        if (!var2) {
                                            _fun9525_ip = 739;
                                            continue _fun9525
                                        }
                                    case 656:
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var7[var1];
                                        var1 = var5.bind(var6)(var1);
                                        var3 = var1.debug;
                                        var2 = var3.warn;
                                        var1 = 4;
                                        var1 = var7[var1];
                                        var5 = var5.bind(var6)(var1);
                                        var1 = var5.getEventDescription;
                                        var6 = var1.bind(var5)(var4);
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Event dropped due to being matched by `ignoreErrors` option.\nEvent: ';
                                        var1 = var5.bind(var1)(var6);
                                        var1 = var2.bind(var3)(var1);
                                    case 739:
                                        var1 = true;
                                        return var1;
                                    case 743:
                                        var2 = var4.type;
                                        var1 = 'transaction';
                                        if (!(var1 === var2)) {
                                            _fun9525_ip = 841;
                                            continue _fun9525
                                        }
                                    case 756:
                                        var6 = var0.ignoreTransactions;
                                        var0 = null;
                                        var1 = var0 == var6;
                                        var0 = false;
                                        if (var1) {
                                            _fun9525_ip = 838;
                                            continue _fun9525
                                        }
                                    case 773:
                                        var1 = var6.length;
                                        var0 = false;
                                        if (!var1) {
                                            _fun9525_ip = 838;
                                            continue _fun9525
                                        }
                                    case 783:
                                        var5 = var4.transaction;
                                        var2 = !var5;
                                        var1 = !var2;
                                        if (var2) {
                                            _fun9525_ip = 835;
                                            continue _fun9525
                                        }
                                    case 798:
                                        var7 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 6;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var7.bind(var2)(var3);
                                        var2 = var3.stringMatchesSomePattern;
                                        var1 = var2.bind(var3)(var5, var6);
                                    case 835:
                                        var0 = var1;
                                    case 838:
                                        if (var0) {
                                            _fun9525_ip = 845;
                                            continue _fun9525
                                        }
                                    case 841:
                                        var0 = false;
                                        return var0;
                                    case 845:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 2;
                                        var1 = var3[var1];
                                        var5 = undefined;
                                        var1 = var2.bind(var5)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun9525_ip = 962;
                                            continue _fun9525
                                        }
                                    case 879:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 3;
                                        var0 = var6[var0];
                                        var0 = var3.bind(var5)(var0);
                                        var2 = var0.debug;
                                        var1 = var2.warn;
                                        var0 = 4;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var5)(var0);
                                        var0 = var3.getEventDescription;
                                        var4 = var0.bind(var3)(var4);
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var0 = 'Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ';
                                        var0 = var3.bind(var0)(var4);
                                        var0 = var1.bind(var2)(var0);
                                    case 962:
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1, var3);
                            var0 = null;
                            if (var2) {
                                _fun9524_ip = 76;
                                continue _fun9524
                            }
                        case 73:
                            var0 = var1;
                        case 76:
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var4 = var6[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Environment: var1
        _fun9530: for (var _fun9530_ip = 0;;) switch (_fun9530_ip) {
            case 0:
                var2 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun9530_ip = 21;
                    continue _fun9530
                }
            case 13:
                var1 = arguments[var0];
                if (!(var2 === var1)) {
                    _fun9530_ip = 25;
                    continue _fun9530
                }
            case 21:
                var1 = {};
                _fun9530_ip = 29;
                continue _fun9530;
            case 25:
                var1 = arguments[var0];
            case 29:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var0 = _closure1_slot4;
                var2 = var0.bind(var2)(var1);
                var1 = {};
                var0 = 'InboundFilters';
                var1.name = var0;
                var0 = {};
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var2.eventFiltersIntegration = var3;
    var2.inboundFiltersIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 881, 823, 824, 830, 882, 831]);