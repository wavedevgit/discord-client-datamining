// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13417: for (var _fun13417_ip = 0;;) switch (_fun13417_ip) {
        case 0:
            var11 = require;
            var2 = exports;
            var12 = dependencyMap;
            var10 = function arg0() {
                _fun13418: for (var _fun13418_ip = 0;;) switch (_fun13418_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1;
                        if (!var1) {
                            _fun13418_ip = 42;
                            continue _fun13418
                        }
                    case 9:
                        var3 = 'object';
                        var2 = typeof var1;
                        var0 = var1;
                        if (!(var3 === var2)) {
                            _fun13418_ip = 42;
                            continue _fun13418
                        }
                    case 23:
                        var2 = 'default';
                        var2 = var2 in var1;
                        var0 = var1;
                        if (!var2) {
                            _fun13418_ip = 42;
                            continue _fun13418
                        }
                    case 37:
                        var0 = var1.default;
                    case 42:
                        return var0;
                }
            };
            var0 = function() {
                _fun13419: for (var _fun13419_ip = 0;;) switch (_fun13419_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun13419_ip = 25;
                            continue _fun13419
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun13420: for (var _fun13420_ip = 0;;) switch (_fun13420_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var1 = arguments.length;
                                    var3 = 1;
                                    var1 = var3 < var1;
                                    var2 = global;
                                    var4 = undefined;
                                    if (!var1) {
                                        _fun13420_ip = 115;
                                        continue _fun13420
                                    }
                                case 22:
                                    var11 = arguments[var3];
                                    var9 = var11;
                                    var1 = var4;
                                    var4 = var1;
                                    for (var6 in var9)
                                        case 43: {
                                            var4 = var1;
                                            case 55: var12 = var6;
                                            var13 = var2.Object;
                                            var13 = var13.prototype;
                                            var14 = var13.hasOwnProperty;
                                            var13 = var14.call;
                                            var13 = var13.bind(var14)(var11, var12);
                                            var1 = var12;
                                            if (!var13) {
                                                _fun13420_ip = 43;
                                                continue _fun13420
                                            }
                                            case 92: var13 = var11[var12];
                                            var0[var12] = var13;
                                            var1 = var12;
                                            _fun13420_ip = 43;
                                            continue _fun13420;
                                        }
                                case 105:
                                    var3 = var3 + 1;
                                    var1 = arguments.length;
                                    if (var3 < var1) {
                                        _fun13420_ip = 22;
                                        continue _fun13420
                                    }
                                case 115:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot8 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var8 = function arg0() {
                _fun13421: for (var _fun13421_ip = 0;;) switch (_fun13421_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.charAt;
                        var0 = 0;
                        var3 = var1.bind(var2)(var0);
                        var1 = '/';
                        var0 = var2;
                        if (!(var1 !== var3)) {
                            _fun13421_ip = 31;
                            continue _fun13421
                        }
                    case 27:
                        var0 = var1 + var2;
                    case 31:
                        return var0;
                }
            };
            var _closure1_slot9 = var8;
            var9 = function arg0() {
                _fun13422: for (var _fun13422_ip = 0;;) switch (_fun13422_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3.charAt;
                        var0 = 0;
                        var2 = var1.bind(var3)(var0);
                        var1 = '/';
                        var0 = var3;
                        if (!(var1 === var2)) {
                            _fun13422_ip = 41;
                            continue _fun13422
                        }
                    case 27:
                        var2 = var3.substr;
                        var1 = 1;
                        var0 = var2.bind(var3)(var1);
                    case 41:
                        return var0;
                }
            };
            var _closure1_slot10 = var9;
            var0 = function arg0, arg1() {
                _fun13423: for (var _fun13423_ip = 0;;) switch (_fun13423_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = arg1;
                        var0 = var3.toLowerCase;
                        var4 = var0.bind(var3)();
                        var2 = var4.indexOf;
                        var0 = var1.toLowerCase;
                        var0 = var0.bind(var1)();
                        var2 = var2.bind(var4)(var0);
                        var0 = 0;
                        var2 = var0 === var2;
                        if (!var2) {
                            _fun13423_ip = 89;
                            continue _fun13423
                        }
                    case 46:
                        var5 = '/?#';
                        var4 = var5.indexOf;
                        var6 = var3.charAt;
                        var0 = var1.length;
                        var0 = var6.bind(var3)(var0);
                        var4 = var4.bind(var5)(var0);
                        var0 = -1;
                        var2 = var0 !== var4;
                    case 89:
                        var0 = var3;
                        if (!var2) {
                            _fun13423_ip = 111;
                            continue _fun13423
                        }
                    case 95:
                        var2 = var3.substr;
                        var1 = var1.length;
                        var0 = var2.bind(var3)(var1);
                    case 111:
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function arg0() {
                _fun13424: for (var _fun13424_ip = 0;;) switch (_fun13424_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.charAt;
                        var2 = var4.length;
                        var0 = 1;
                        var0 = var2 - var0;
                        var2 = var1.bind(var4)(var0);
                        var1 = '/';
                        var0 = var4;
                        if (!(var1 === var2)) {
                            _fun13424_ip = 56;
                            continue _fun13424
                        }
                    case 37:
                        var3 = var4.slice;
                        var2 = 0;
                        var1 = -1;
                        var0 = var3.bind(var4)(var2, var1);
                    case 56:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var3 = function arg0() {
                _fun13425: for (var _fun13425_ip = 0;;) switch (_fun13425_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun13425_ip = 10;
                            continue _fun13425
                        }
                    case 6:
                        var2 = '/';
                    case 10:
                        var0 = var2.indexOf;
                        var3 = '#';
                        var9 = var0.bind(var2)(var3);
                        var1 = '';
                        var0 = -1;
                        var8 = var2;
                        var4 = var8;
                        var2 = var1;
                        if (!(var0 !== var9)) {
                            _fun13425_ip = 73;
                            continue _fun13425
                        }
                    case 48:
                        var5 = var8.substr;
                        var2 = var5.bind(var8)(var9);
                        var7 = var8.substr;
                        var6 = 0;
                        var4 = var7.bind(var8)(var6, var9);
                    case 73:
                        var5 = var4.indexOf;
                        var6 = '?';
                        var10 = var5.bind(var4)(var6);
                        var9 = var4;
                        var4 = var9;
                        var5 = var1;
                        if (!(var0 !== var10)) {
                            _fun13425_ip = 126;
                            continue _fun13425
                        }
                    case 101:
                        var0 = var9.substr;
                        var5 = var0.bind(var9)(var10);
                        var8 = var9.substr;
                        var7 = 0;
                        var4 = var8.bind(var9)(var7, var10);
                    case 126:
                        var0 = {};
                        var0.pathname = var4;
                        var4 = var1;
                        if (!(var6 !== var5)) {
                            _fun13425_ip = 143;
                            continue _fun13425
                        }
                    case 140:
                        var4 = var5;
                    case 143:
                        var0.search = var4;
                        if (!(var3 !== var2)) {
                            _fun13425_ip = 155;
                            continue _fun13425
                        }
                    case 152:
                        var1 = var2;
                    case 155:
                        var0.hash = var1;
                        return var0;
                }
            };
            var _closure1_slot13 = var3;
            var1 = function arg0() {
                _fun13426: for (var _fun13426_ip = 0;;) switch (_fun13426_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.pathname;
                        var5 = var0.search;
                        var4 = var0.hash;
                        if (var1) {
                            _fun13426_ip = 27;
                            continue _fun13426
                        }
                    case 23:
                        var1 = '/';
                    case 27:
                        var0 = var5;
                        if (!var5) {
                            _fun13426_ip = 41;
                            continue _fun13426
                        }
                    case 33:
                        var2 = '?';
                        var0 = var2 !== var5;
                    case 41:
                        var2 = var1;
                        if (!var0) {
                            _fun13426_ip = 79;
                            continue _fun13426
                        }
                    case 47:
                        var3 = var5.charAt;
                        var0 = 0;
                        var6 = var3.bind(var5)(var0);
                        var3 = '?';
                        var0 = var5;
                        if (!(var3 !== var6)) {
                            _fun13426_ip = 75;
                            continue _fun13426
                        }
                    case 71:
                        var0 = var3 + var5;
                    case 75:
                        var2 = var1 + var0;
                    case 79:
                        var1 = var4;
                        if (!var4) {
                            _fun13426_ip = 93;
                            continue _fun13426
                        }
                    case 85:
                        var0 = '#';
                        var1 = var0 !== var4;
                    case 93:
                        var0 = var2;
                        if (!var1) {
                            _fun13426_ip = 131;
                            continue _fun13426
                        }
                    case 99:
                        var3 = var4.charAt;
                        var1 = 0;
                        var5 = var3.bind(var4)(var1);
                        var3 = '#';
                        var1 = var4;
                        if (!(var3 !== var5)) {
                            _fun13426_ip = 127;
                            continue _fun13426
                        }
                    case 123:
                        var1 = var3 + var4;
                    case 127:
                        var0 = var2 + var1;
                    case 131:
                        return var0;
                }
            };
            var _closure1_slot14 = var1;
            var5 = function arg0, arg1, arg2, arg3() {
                _fun13427: for (var _fun13427_ip = 0;;) switch (_fun13427_ip) {
                    case 0:
                        var7 = arg0;
                        var5 = arg1;
                        var3 = arg2;
                        var2 = arg3;
                        var6 = undefined;
                        var1 = undefined;
                        var8 = 'string';
                        var4 = typeof var7;
                        if (!(var8 !== var4)) {
                            _fun13427_ip = 247;
                            continue _fun13427
                        }
                    case 30:
                        var8 = _closure1_slot8;
                        var4 = {};
                        var4 = var8.bind(var6)(var4, var7);
                        var1 = var4;
                        var4 = var4.pathname;
                        if (!(var6 === var4)) {
                            _fun13427_ip = 71;
                            continue _fun13427
                        }
                    case 58:
                        var8 = var1;
                        var4 = '';
                        var8.pathname = var4;
                    case 71:
                        var4 = var1;
                        var8 = var4.search;
                        var4 = var1;
                        if (var8) {
                            _fun13427_ip = 98;
                            continue _fun13427
                        }
                    case 86:
                        var8 = '';
                        var4.search = var8;
                        _fun13427_ip = 144;
                        continue _fun13427;
                    case 98:
                        var9 = var4.search;
                        var8 = var9.charAt;
                        var4 = 0;
                        var4 = var8.bind(var9)(var4);
                        var9 = '?';
                        if (!(var9 !== var4)) {
                            _fun13427_ip = 144;
                            continue _fun13427
                        }
                    case 125:
                        var8 = var1;
                        var4 = var8.search;
                        var4 = var9 + var4;
                        var8.search = var4;
                    case 144:
                        var4 = var1;
                        var8 = var4.hash;
                        var4 = var1;
                        if (var8) {
                            _fun13427_ip = 170;
                            continue _fun13427
                        }
                    case 158:
                        var8 = '';
                        var4.hash = var8;
                        _fun13427_ip = 214;
                        continue _fun13427;
                    case 170:
                        var9 = var4.hash;
                        var8 = var9.charAt;
                        var4 = 0;
                        var4 = var8.bind(var9)(var4);
                        var9 = '#';
                        if (!(var9 !== var4)) {
                            _fun13427_ip = 214;
                            continue _fun13427
                        }
                    case 196:
                        var8 = var1;
                        var4 = var8.hash;
                        var4 = var9 + var4;
                        var8.hash = var4;
                    case 214:
                        var4 = var6 !== var5;
                        if (!var4) {
                            _fun13427_ip = 233;
                            continue _fun13427
                        }
                    case 221:
                        var8 = var1;
                        var8 = var8.state;
                        var4 = var6 === var8;
                    case 233:
                        if (!var4) {
                            _fun13427_ip = 245;
                            continue _fun13427
                        }
                    case 236:
                        var4 = var1;
                        var4.state = var5;
                    case 245:
                        _fun13427_ip = 268;
                        continue _fun13427;
                    case 247:
                        var4 = _closure1_slot13;
                        var4 = var4.bind(var6)(var7);
                        var1 = var4;
                        var4.state = var5;
                    case 268: // try_start_0
                        var5 = var1;
                        var4 = global;
                        var7 = var4.decodeURI;
                        var4 = var5.pathname;
                        var4 = var7.bind(var6)(var4);
                        var5.pathname = var4;
                    case 296: // try_end0
                        var4 = var3;
                        if (!var4) {
                            _fun13427_ip = 311;
                            continue _fun13427
                        }
                    case 302:
                        var4 = var1;
                        var4.key = var3;
                    case 311:
                        var3 = var2;
                        var4 = var1;
                        var4 = var4.pathname;
                        if (var3) {
                            _fun13427_ip = 344;
                            continue _fun13427
                        }
                    case 326:
                        if (var4) {
                            _fun13427_ip = 428;
                            continue _fun13427
                        }
                    case 329:
                        var5 = var1;
                        var3 = '/';
                        var5.pathname = var3;
                        _fun13427_ip = 428;
                        continue _fun13427;
                    case 344:
                        var3 = var1;
                        if (var4) {
                            _fun13427_ip = 367;
                            continue _fun13427
                        }
                    case 350:
                        var4 = var2;
                        var4 = var4.pathname;
                        var3.pathname = var4;
                        _fun13427_ip = 428;
                        continue _fun13427;
                    case 367:
                        var5 = var3.pathname;
                        var4 = var5.charAt;
                        var3 = 0;
                        var4 = var4.bind(var5)(var3);
                        var3 = '/';
                        if (!(var3 !== var4)) {
                            _fun13427_ip = 428;
                            continue _fun13427
                        }
                    case 394:
                        var3 = var1;
                        var5 = _closure1_slot0;
                        var4 = var3.pathname;
                        var2 = var2.pathname;
                        var2 = var5.bind(var6)(var4, var2);
                        var3.pathname = var2;
                    case 428:
                        var2 = var1;
                        return var2;
                    case 433: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var0 = var4;
                        var2 = global;
                        var3 = var2.URIError;
                        var3 = var4 instanceof var3;
                        if (var3) {
                            _fun13427_ip = 455;
                            continue _fun13427
                        }
                    case 453:
                        _fun13427_ip = 507;
                        continue _fun13427;
                    case 455:
                        var3 = var2.URIError;
                        var2 = var1.pathname;
                        var1 = 'Pathname "';
                        var4 = var1 + var2;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var1 = '" could not be decoded. This is likely caused by an invalid percent-encoding.';
                        var11 = var4 + var1;
                        var12 = var2;
                        var1 = new var12[var3](var11, var10);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 507:
                        throw var0;
                }
            };
            var _closure1_slot15 = var5;
            var0 = function() {
                var0 = null;
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = function arg0() {
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    _closure2_slot0 = var2;
                    var0 = function() { // Environment: var0
                        _fun13430: for (var _fun13430_ip = 0;;) switch (_fun13430_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = _closure3_slot0;
                                if (!(var2 === var0)) {
                                    _fun13430_ip = 24;
                                    continue _fun13430
                                }
                            case 18:
                                var0 = null;
                                _closure2_slot0 = var0;
                            case 24:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0.setPrompt = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun13431: for (var _fun13431_ip = 0;;) switch (_fun13431_ip) {
                        case 0:
                            var3 = arg2;
                            var2 = arg3;
                            var4 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun13431_ip = 30;
                                continue _fun13431
                            }
                        case 19:
                            var4 = undefined;
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                            _fun13431_ip = 121;
                            continue _fun13431;
                        case 30:
                            var1 = _closure2_slot0;
                            var4 = 'function';
                            var1 = typeof var1;
                            if (!(var4 !== var1)) {
                                _fun13431_ip = 51;
                                continue _fun13431
                            }
                        case 45:
                            var1 = _closure2_slot0;
                            _fun13431_ip = 69;
                            continue _fun13431;
                        case 51:
                            var7 = _closure2_slot0;
                            var6 = undefined;
                            var5 = arg0;
                            var0 = arg1;
                            var1 = var7.bind(var6)(var5, var0);
                        case 69:
                            var5 = 'string';
                            var0 = typeof var1;
                            if (!(var5 !== var0)) {
                                _fun13431_ip = 95;
                                continue _fun13431
                            }
                        case 80:
                            var5 = undefined;
                            var0 = false;
                            var0 = var0 !== var1;
                            var0 = var2.bind(var5)(var0);
                            _fun13431_ip = 121;
                            continue _fun13431;
                        case 95:
                            var0 = typeof var3;
                            if (!(var4 !== var0)) {
                                _fun13431_ip = 113;
                                continue _fun13431
                            }
                        case 102:
                            var4 = undefined;
                            var0 = true;
                            var0 = var2.bind(var4)(var0);
                            _fun13431_ip = 121;
                            continue _fun13431;
                        case 113:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1, var2);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.confirmTransitionTo = var2;
                var2 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = function() {
                        _fun13433: for (var _fun13433_ip = 0;;) switch (_fun13433_ip) {
                            case 0:
                                var0 = undefined;
                                var1 = undefined;
                                var3 = _closure3_slot1;
                                if (!var3) {
                                    _fun13433_ip = 31;
                                    continue _fun13433
                                }
                            case 14:
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var1 = arguments;
                                var1 = var2.bind(var3)(var0, var1);
                            case 31:
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var3;
                    var1 = true;
                    var _closure3_slot1 = var1;
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var0 = false;
                        _closure3_slot1 = var0;
                        var3 = _closure2_slot1;
                        var2 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            var1 = _closure3_slot2;
                            var0 = arg0;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        _closure2_slot1 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0.appendListener = var2;
                var1 = function() {
                    _fun13436: for (var _fun13436_ip = 0;;) switch (_fun13436_ip) {
                        case 0:
                            var0 = undefined;
                            var5 = undefined;
                            var4 = arguments.length;
                            var2 = global;
                            var2 = var2.Array;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var3;
                            var7 = var4;
                            var2 = new var8[var2](var7, var6);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var _closure3_slot0 = var3;
                            var2 = 0;
                            var6 = var2 < var4;
                            if (!var6) {
                                _fun13436_ip = 68;
                                continue _fun13436
                            }
                        case 53:
                            var6 = arguments[var2];
                            var3[var2] = var6;
                            var2 = var2 + 1;
                            if (var2 < var4) {
                                _fun13436_ip = 53;
                                continue _fun13436
                            }
                        case 68:
                            var3 = _closure2_slot1;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var2 = var3.apply;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0.notifyListeners = var1;
                return var0;
            };
            var _closure1_slot16 = var0;
            var0 = function arg0, arg1() {
                var0 = global;
                var2 = var0.window;
                var1 = var2.confirm;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = arg1;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var _closure1_slot17 = var0;
            var0 = function() {
                _fun13439: for (var _fun13439_ip = 0;;) switch (_fun13439_ip) {
                    case 0: // try_start_0
                        var1 = global;
                        var1 = var1.window;
                        var1 = var1.history;
                        var1 = var1.state;
                        var0 = var1;
                        if (var1) {
                            _fun13439_ip = 27;
                            continue _fun13439
                        }
                    case 25:
                        var0 = {};
                    case 27: // try_end0
                        return var0;
                    case 29: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = {};
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function arg0() {
                _fun13440: for (var _fun13440_ip = 0;;) switch (_fun13440_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.indexOf;
                        var0 = '#';
                        var3 = var1.bind(var4)(var0);
                        var1 = -1;
                        var0 = var4;
                        if (!(var1 !== var3)) {
                            _fun13440_ip = 44;
                            continue _fun13440
                        }
                    case 31:
                        var2 = var4.slice;
                        var1 = 0;
                        var0 = var2.bind(var4)(var1, var3);
                    case 44:
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = function() {
                _fun13441: for (var _fun13441_ip = 0;;) switch (_fun13441_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.window;
                        var0 = var0.location;
                        var3 = var0.href;
                        var1 = var3.indexOf;
                        var0 = '#';
                        var4 = var1.bind(var3)(var0);
                        var0 = '';
                        var1 = -1;
                        if (!(var1 !== var4)) {
                            _fun13441_ip = 66;
                            continue _fun13441
                        }
                    case 48:
                        var2 = var3.substring;
                        var1 = 1;
                        var1 = var4 + var1;
                        var0 = var2.bind(var3)(var1);
                    case 66:
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function arg0() {
                var0 = global;
                var1 = var0.window;
                var3 = var1.location;
                var2 = var3.replace;
                var4 = _closure1_slot19;
                var0 = var0.window;
                var0 = var0.location;
                var1 = var0.href;
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = '#';
                var4 = var4 + var1;
                var1 = arg0;
                var1 = var4 + var1;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot21 = var0;
            var0 = function arg0, arg1, arg2() {
                var0 = global;
                var3 = var0.Math;
                var2 = var3.min;
                var5 = var0.Math;
                var4 = var5.max;
                var1 = arg0;
                var0 = 0;
                var1 = var4.bind(var5)(var1, var0);
                var0 = arg2;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot22 = var0;
            var7 = global;
            var14 = var7.Object;
            var13 = var14.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var13.bind(var14)(var2, var0, var6);
            var0 = 0;
            var6 = var12[var0];
            var0 = undefined;
            var6 = var11.bind(var0)(var6);
            var6 = var10.bind(var0)(var6);
            var _closure1_slot0 = var6;
            var6 = 1;
            var6 = var12[var6];
            var6 = var11.bind(var0)(var6);
            var6 = var10.bind(var0)(var6);
            var _closure1_slot1 = var6;
            var6 = 2;
            var6 = var12[var6];
            var6 = var11.bind(var0)(var6);
            var6 = 3;
            var6 = var12[var6];
            var6 = var11.bind(var0)(var6);
            var6 = var10.bind(var0)(var6);
            var _closure1_slot2 = var6;
            var6 = var7.window;
            var10 = 'undefined';
            var6 = typeof var6;
            var6 = var10 === var6;
            if (var6) {
                _fun13417_ip = 293;
                continue _fun13417
            }
        case 278:
            var10 = var7.window;
            var10 = var10.document;
            var6 = !var10;
        case 293:
            if (var6) {
                _fun13417_ip = 317;
                continue _fun13417
            }
        case 296:
            var7 = var7.window;
            var7 = var7.document;
            var7 = var7.createElement;
            var6 = !var7;
        case 317:
            var6 = !var6;
            var _closure1_slot3 = var6;
            var6 = 'popstate';
            var _closure1_slot4 = var6;
            var6 = 'hashchange';
            var _closure1_slot5 = var6;
            var _closure1_slot6 = var6;
            var6 = {};
            var7 = {};
            var10 = function arg0() {
                _fun13444: for (var _fun13444_ip = 0;;) switch (_fun13444_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3.charAt;
                        var0 = 0;
                        var2 = var1.bind(var3)(var0);
                        var1 = '!';
                        var0 = var3;
                        if (!(var1 !== var2)) {
                            _fun13444_ip = 51;
                            continue _fun13444
                        }
                    case 27:
                        var2 = _closure1_slot10;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var1 = '!/';
                        var0 = var1 + var2;
                    case 51:
                        return var0;
                }
            };
            var7.encodePath = var10;
            var10 = function arg0() {
                _fun13445: for (var _fun13445_ip = 0;;) switch (_fun13445_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3.charAt;
                        var0 = 0;
                        var2 = var1.bind(var3)(var0);
                        var1 = '!';
                        var0 = var3;
                        if (!(var1 === var2)) {
                            _fun13445_ip = 41;
                            continue _fun13445
                        }
                    case 27:
                        var2 = var3.substr;
                        var1 = 1;
                        var0 = var2.bind(var3)(var1);
                    case 41:
                        return var0;
                }
            };
            var7.decodePath = var10;
            var6.hashbang = var7;
            var7 = {};
            var7.encodePath = var9;
            var7.decodePath = var8;
            var6.noslash = var7;
            var7 = {};
            var7.encodePath = var8;
            var7.decodePath = var8;
            var6.slash = var7;
            var _closure1_slot7 = var6;
            var6 = function arg0() {
                _fun13446: for (var _fun13446_ip = 0;;) switch (_fun13446_ip) {
                    case 0:
                        var8 = arg0;
                        var7 = function arg0() {
                            _fun13447: for (var _fun13447_ip = 0;;) switch (_fun13447_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun13447_ip = 8;
                                        continue _fun13447
                                    }
                                case 6:
                                    var0 = {};
                                case 8:
                                    var4 = var0.key;
                                    var3 = var0.state;
                                    var0 = global;
                                    var0 = var0.window;
                                    var0 = var0.location;
                                    var2 = var0.pathname;
                                    var1 = var0.search;
                                    var1 = var2 + var1;
                                    var0 = var0.hash;
                                    var6 = var1 + var0;
                                    var1 = _closure2_slot6;
                                    var2 = var6;
                                    if (!var1) {
                                        _fun13447_ip = 88;
                                        continue _fun13447
                                    }
                                case 69:
                                    var5 = _closure1_slot11;
                                    var1 = _closure2_slot6;
                                    var0 = undefined;
                                    var2 = var5.bind(var0)(var6, var1);
                                case 88:
                                    var1 = _closure1_slot15;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2, var3, var4);
                                    return var0;
                            }
                        };
                        var _closure2_slot13 = var7;
                        var0 = function() {
                            var0 = global;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var2 = var0.bind(var1)();
                            var1 = var2.toString;
                            var0 = 36;
                            var3 = var1.bind(var2)(var0);
                            var2 = var3.substr;
                            var1 = _closure2_slot5;
                            var0 = 2;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var _closure2_slot14 = var0;
                        var0 = function arg0() {
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot12;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var4.bind(var0)(var3, var2);
                            var3 = _closure2_slot12;
                            var2 = _closure2_slot0;
                            var2 = var2.length;
                            var3.length = var2;
                            var4 = _closure2_slot7;
                            var3 = var4.notifyListeners;
                            var2 = _closure2_slot12;
                            var2 = var2.location;
                            var1 = _closure2_slot12;
                            var1 = var1.action;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var _closure2_slot15 = var0;
                        var0 = function arg0() {
                            _fun13450: for (var _fun13450_ip = 0;;) switch (_fun13450_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.state;
                                    var0 = undefined;
                                    var2 = var0 === var2;
                                    if (!var2) {
                                        _fun13450_ip = 58;
                                        continue _fun13450
                                    }
                                case 17:
                                    var3 = global;
                                    var3 = var3.navigator;
                                    var5 = var3.userAgent;
                                    var4 = var5.indexOf;
                                    var3 = 'CriOS';
                                    var4 = var4.bind(var5)(var3);
                                    var3 = -1;
                                    var2 = var3 === var4;
                                case 58:
                                    if (var2) {
                                        _fun13450_ip = 87;
                                        continue _fun13450
                                    }
                                case 61:
                                    var2 = _closure2_slot18;
                                    var3 = _closure2_slot13;
                                    var1 = var1.state;
                                    var1 = var3.bind(var0)(var1);
                                    var1 = var2.bind(var0)(var1);
                                case 87:
                                    return var0;
                            }
                        };
                        var _closure2_slot16 = var0;
                        var0 = function() {
                            var2 = _closure2_slot18;
                            var3 = _closure2_slot13;
                            var1 = _closure1_slot18;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var1 = var3.bind(var0)(var1);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var _closure2_slot17 = var0;
                        var0 = function arg0() {
                            _fun13452: for (var _fun13452_ip = 0;;) switch (_fun13452_ip) {
                                case 0:
                                    var6 = arg0;
                                    var _closure3_slot0 = var6;
                                    var2 = _closure2_slot8;
                                    if (var2) {
                                        _fun13452_ip = 54;
                                        continue _fun13452
                                    }
                                case 19:
                                    var5 = _closure2_slot7;
                                    var4 = var5.confirmTransitionTo;
                                    var8 = _closure2_slot4;
                                    var9 = 'POP';
                                    var7 = function(arg0) { // Environment: var1
                                        _fun13453: for (var _fun13453_ip = 0;;) switch (_fun13453_ip) {
                                            case 0:
                                                var2 = arg0;
                                                if (var2) {
                                                    _fun13453_ip = 109;
                                                    continue _fun13453
                                                }
                                            case 12:
                                                var2 = _closure3_slot0;
                                                var3 = _closure2_slot12;
                                                var3 = var3.location;
                                                var5 = _closure2_slot9;
                                                var4 = var5.indexOf;
                                                var3 = var3.key;
                                                var3 = var4.bind(var5)(var3);
                                                var4 = -1;
                                                if (!(var4 === var3)) {
                                                    _fun13453_ip = 57;
                                                    continue _fun13453
                                                }
                                            case 55:
                                                var3 = 0;
                                            case 57:
                                                var6 = _closure2_slot9;
                                                var5 = var6.indexOf;
                                                var2 = var2.key;
                                                var2 = var5.bind(var6)(var2);
                                                if (!(var4 === var2)) {
                                                    _fun13453_ip = 83;
                                                    continue _fun13453
                                                }
                                            case 81:
                                                var2 = 0;
                                            case 83:
                                                var4 = var3 - var2;
                                                if (!var4) {
                                                    _fun13453_ip = 138;
                                                    continue _fun13453
                                                }
                                            case 90:
                                                var2 = true;
                                                _closure2_slot8 = var2;
                                                var3 = _closure2_slot20;
                                                var2 = undefined;
                                                var2 = var3.bind(var2)(var4);
                                                _fun13453_ip = 138;
                                                continue _fun13453;
                                            case 109:
                                                var2 = _closure2_slot15;
                                                var1 = {};
                                                var3 = 'POP';
                                                var1.action = var3;
                                                var0 = _closure3_slot0;
                                                var1.location = var0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 138:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var11 = var5;
                                    var10 = var6;
                                    var1 = var11[var4](var10, var9, var8, var7, var6);
                                    _fun13452_ip = 70;
                                    continue _fun13452;
                                case 54:
                                    var1 = false;
                                    _closure2_slot8 = var1;
                                    var1 = _closure2_slot15;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 70:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot18 = var0;
                        var3 = function arg0() {
                            var1 = _closure2_slot6;
                            var3 = _closure1_slot14;
                            var2 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var0);
                            var0 = var1 + var0;
                            return var0;
                        };
                        var _closure2_slot19 = var3;
                        var2 = function arg0() {
                            var2 = _closure2_slot0;
                            var1 = var2.go;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot20 = var2;
                        var0 = function arg0() {
                            _fun13456: for (var _fun13456_ip = 0;;) switch (_fun13456_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot10;
                                    var3 = var1 + var2;
                                    _closure2_slot10 = var3;
                                    var1 = 1;
                                    if (!(var1 === var3)) {
                                        _fun13456_ip = 29;
                                        continue _fun13456
                                    }
                                case 25:
                                    if (!(var1 !== var2)) {
                                        _fun13456_ip = 108;
                                        continue _fun13456
                                    }
                                case 29:
                                    var2 = _closure2_slot10;
                                    var1 = 0;
                                    if (!(var1 === var2)) {
                                        _fun13456_ip = 172;
                                        continue _fun13456
                                    }
                                case 42:
                                    var2 = global;
                                    var6 = var2.window;
                                    var5 = var6.removeEventListener;
                                    var4 = _closure1_slot4;
                                    var3 = _closure2_slot16;
                                    var3 = var5.bind(var6)(var4, var3);
                                    var3 = _closure2_slot2;
                                    if (!var3) {
                                        _fun13456_ip = 172;
                                        continue _fun13456
                                    }
                                case 80:
                                    var4 = var2.window;
                                    var3 = var4.removeEventListener;
                                    var2 = _closure1_slot5;
                                    var1 = _closure2_slot17;
                                    var1 = var3.bind(var4)(var2, var1);
                                    _fun13456_ip = 172;
                                    continue _fun13456;
                                case 108:
                                    var2 = global;
                                    var6 = var2.window;
                                    var5 = var6.addEventListener;
                                    var4 = _closure1_slot4;
                                    var3 = _closure2_slot16;
                                    var3 = var5.bind(var6)(var4, var3);
                                    var3 = _closure2_slot2;
                                    if (!var3) {
                                        _fun13456_ip = 172;
                                        continue _fun13456
                                    }
                                case 146:
                                    var3 = var2.window;
                                    var2 = var3.addEventListener;
                                    var1 = _closure1_slot5;
                                    var0 = _closure2_slot17;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 172:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot21 = var0;
                        var6 = undefined;
                        if (!(var6 === var8)) {
                            _fun13446_ip = 94;
                            continue _fun13446
                        }
                    case 92:
                        var8 = {};
                    case 94:
                        var0 = _closure1_slot3;
                        if (var0) {
                            _fun13446_ip = 115;
                            continue _fun13446
                        }
                    case 104:
                        var5 = _closure1_slot2;
                        var0 = false;
                        var0 = var5.bind(var6)(var0);
                    case 115:
                        var0 = global;
                        var5 = var0.window;
                        var5 = var5.history;
                        var _closure2_slot0 = var5;
                        var9 = var0.window;
                        var9 = var9.navigator;
                        var13 = var9.userAgent;
                        var10 = var13.indexOf;
                        var9 = 'Android 2.';
                        var10 = var10.bind(var13)(var9);
                        var9 = -1;
                        var10 = var9 === var10;
                        if (!var10) {
                            _fun13446_ip = 202;
                            continue _fun13446
                        }
                    case 181:
                        var12 = var13.indexOf;
                        var11 = 'Android 4.0';
                        var11 = var12.bind(var13)(var11);
                        var10 = var9 === var11;
                    case 202:
                        if (var10) {
                            _fun13446_ip = 226;
                            continue _fun13446
                        }
                    case 205:
                        var12 = var13.indexOf;
                        var11 = 'Mobile Safari';
                        var11 = var12.bind(var13)(var11);
                        var10 = var9 === var11;
                    case 226:
                        if (var10) {
                            _fun13446_ip = 250;
                            continue _fun13446
                        }
                    case 229:
                        var12 = var13.indexOf;
                        var11 = 'Chrome';
                        var11 = var12.bind(var13)(var11);
                        var10 = var9 !== var11;
                    case 250:
                        if (var10) {
                            _fun13446_ip = 274;
                            continue _fun13446
                        }
                    case 253:
                        var12 = var13.indexOf;
                        var11 = 'Windows Phone';
                        var11 = var12.bind(var13)(var11);
                        var10 = var9 !== var11;
                    case 274:
                        if (!var10) {
                            _fun13446_ip = 289;
                            continue _fun13446
                        }
                    case 277:
                        var11 = var0.window;
                        var10 = var11.history;
                    case 289:
                        if (!var10) {
                            _fun13446_ip = 312;
                            continue _fun13446
                        }
                    case 292:
                        var11 = var0.window;
                        var12 = var11.history;
                        var11 = 'pushState';
                        var10 = var11 in var12;
                    case 312:
                        var _closure2_slot1 = var10;
                        var0 = var0.window;
                        var0 = var0.navigator;
                        var11 = var0.userAgent;
                        var10 = var11.indexOf;
                        var0 = 'Trident';
                        var0 = var10.bind(var11)(var0);
                        var0 = var9 === var0;
                        var0 = !var0;
                        var _closure2_slot2 = var0;
                        var9 = var8.forceRefresh;
                        var0 = var6 !== var9;
                        if (!var0) {
                            _fun13446_ip = 378;
                            continue _fun13446
                        }
                    case 375:
                        var0 = var9;
                    case 378:
                        var _closure2_slot3 = var0;
                        var0 = var8.getUserConfirmation;
                        if (!(var6 === var0)) {
                            _fun13446_ip = 396;
                            continue _fun13446
                        }
                    case 392:
                        var0 = _closure1_slot17;
                    case 396:
                        var _closure2_slot4 = var0;
                        var9 = var8.keyLength;
                        var0 = 6;
                        if (!(var6 !== var9)) {
                            _fun13446_ip = 416;
                            continue _fun13446
                        }
                    case 413:
                        var0 = var9;
                    case 416:
                        var _closure2_slot5 = var0;
                        var9 = var8.basename;
                        var0 = '';
                        if (!var9) {
                            _fun13446_ip = 457;
                            continue _fun13446
                        }
                    case 433:
                        var9 = _closure1_slot12;
                        var10 = _closure1_slot9;
                        var8 = var8.basename;
                        var8 = var10.bind(var6)(var8);
                        var0 = var9.bind(var6)(var8);
                    case 457:
                        var _closure2_slot6 = var0;
                        var0 = _closure1_slot16;
                        var0 = var0.bind(var6)();
                        var _closure2_slot7 = var0;
                        var0 = false;
                        var _closure2_slot8 = var0;
                        var4 = _closure1_slot18;
                        var4 = var4.bind(var6)();
                        var4 = var7.bind(var6)(var4);
                        var7 = var4.key;
                        var6 = new Array(1);
                        var6[0] = var7;
                        var _closure2_slot9 = var6;
                        var6 = 0;
                        var _closure2_slot10 = var6;
                        var _closure2_slot11 = var0;
                        var0 = {};
                        var5 = var5.length;
                        var0.length = var5;
                        var5 = 'POP';
                        var0.action = var5;
                        var0.location = var4;
                        var0.createHref = var3;
                        var3 = function arg0, arg1() {
                            var7 = _closure1_slot15;
                            var3 = _closure2_slot14;
                            var0 = undefined;
                            var9 = var3.bind(var0)();
                            var3 = _closure2_slot12;
                            var8 = var3.location;
                            var11 = arg0;
                            var10 = arg1;
                            var12 = undefined;
                            var6 = var12[var7](var11, var10, var9, var8, var7);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot7;
                            var4 = var5.confirmTransitionTo;
                            var9 = _closure2_slot4;
                            var10 = 'PUSH';
                            var8 = function(arg0) { // Environment: var1
                                _fun13458: for (var _fun13458_ip = 0;;) switch (_fun13458_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13458_ip = 227;
                                            continue _fun13458
                                        }
                                    case 9:
                                        var1 = _closure2_slot19;
                                        var2 = _closure3_slot0;
                                        var3 = undefined;
                                        var1 = var1.bind(var3)(var2);
                                        var8 = var2.key;
                                        var2 = var2.state;
                                        var5 = _closure2_slot1;
                                        if (var5) {
                                            _fun13458_ip = 71;
                                            continue _fun13458
                                        }
                                    case 47:
                                        var5 = global;
                                        var5 = var5.window;
                                        var5 = var5.location;
                                        var5.href = var1;
                                        _fun13458_ip = 227;
                                        continue _fun13458;
                                    case 71:
                                        var7 = _closure2_slot0;
                                        var6 = var7.pushState;
                                        var5 = {};
                                        var5.key = var8;
                                        var5.state = var2;
                                        var2 = null;
                                        var2 = var6.bind(var7)(var5, var2, var1);
                                        var2 = _closure2_slot3;
                                        if (var2) {
                                            _fun13458_ip = 208;
                                            continue _fun13458
                                        }
                                    case 107:
                                        var6 = _closure2_slot9;
                                        var5 = var6.indexOf;
                                        var2 = _closure2_slot12;
                                        var2 = var2.location;
                                        var2 = var2.key;
                                        var5 = var5.bind(var6)(var2);
                                        var7 = _closure2_slot9;
                                        var6 = var7.slice;
                                        var2 = 1;
                                        var5 = var5 + var2;
                                        var2 = 0;
                                        var2 = var6.bind(var7)(var2, var5);
                                        var6 = var2.push;
                                        var4 = _closure3_slot0;
                                        var5 = var4.key;
                                        var5 = var6.bind(var2)(var5);
                                        _closure2_slot9 = var2;
                                        var2 = _closure2_slot15;
                                        var0 = {};
                                        var5 = 'PUSH';
                                        var0.action = var5;
                                        var0.location = var4;
                                        var0 = var2.bind(var3)(var0);
                                        _fun13458_ip = 227;
                                        continue _fun13458;
                                    case 208:
                                        var0 = global;
                                        var0 = var0.window;
                                        var0 = var0.location;
                                        var0.href = var1;
                                    case 227:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var12 = var5;
                            var11 = var6;
                            var1 = var12[var4](var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var0.push = var3;
                        var3 = function arg0, arg1() {
                            var7 = _closure1_slot15;
                            var3 = _closure2_slot14;
                            var0 = undefined;
                            var9 = var3.bind(var0)();
                            var3 = _closure2_slot12;
                            var8 = var3.location;
                            var11 = arg0;
                            var10 = arg1;
                            var12 = undefined;
                            var6 = var12[var7](var11, var10, var9, var8, var7);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot7;
                            var4 = var5.confirmTransitionTo;
                            var9 = _closure2_slot4;
                            var10 = 'REPLACE';
                            var8 = function(arg0) { // Environment: var1
                                _fun13460: for (var _fun13460_ip = 0;;) switch (_fun13460_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13460_ip = 221;
                                            continue _fun13460
                                        }
                                    case 9:
                                        var2 = _closure2_slot19;
                                        var1 = _closure3_slot0;
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var8 = var1.key;
                                        var1 = var1.state;
                                        var5 = _closure2_slot1;
                                        if (var5) {
                                            _fun13460_ip = 75;
                                            continue _fun13460
                                        }
                                    case 47:
                                        var5 = global;
                                        var5 = var5.window;
                                        var6 = var5.location;
                                        var5 = var6.replace;
                                        var5 = var5.bind(var6)(var2);
                                        _fun13460_ip = 221;
                                        continue _fun13460;
                                    case 75:
                                        var7 = _closure2_slot0;
                                        var6 = var7.replaceState;
                                        var5 = {};
                                        var5.key = var8;
                                        var5.state = var1;
                                        var1 = null;
                                        var1 = var6.bind(var7)(var5, var1, var2);
                                        var1 = _closure2_slot3;
                                        if (var1) {
                                            _fun13460_ip = 198;
                                            continue _fun13460
                                        }
                                    case 111:
                                        var6 = _closure2_slot9;
                                        var5 = var6.indexOf;
                                        var1 = _closure2_slot12;
                                        var1 = var1.location;
                                        var1 = var1.key;
                                        var6 = var5.bind(var6)(var1);
                                        var1 = -1;
                                        if (!(var1 !== var6)) {
                                            _fun13460_ip = 167;
                                            continue _fun13460
                                        }
                                    case 150:
                                        var5 = _closure2_slot9;
                                        var1 = _closure3_slot0;
                                        var1 = var1.key;
                                        var5[var6] = var1;
                                    case 167:
                                        var1 = _closure2_slot15;
                                        var0 = {};
                                        var5 = 'REPLACE';
                                        var0.action = var5;
                                        var4 = _closure3_slot0;
                                        var0.location = var4;
                                        var0 = var1.bind(var3)(var0);
                                        _fun13460_ip = 221;
                                        continue _fun13460;
                                    case 198:
                                        var0 = global;
                                        var0 = var0.window;
                                        var1 = var0.location;
                                        var0 = var1.replace;
                                        var0 = var0.bind(var1)(var2);
                                    case 221:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var12 = var5;
                            var11 = var6;
                            var1 = var12[var4](var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var0.replace = var3;
                        var0.go = var2;
                        var2 = function() {
                            var2 = _closure2_slot20;
                            var0 = undefined;
                            var1 = -1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goBack = var2;
                        var2 = function() {
                            var2 = _closure2_slot20;
                            var0 = undefined;
                            var1 = 1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goForward = var2;
                        var2 = function arg0() {
                            _fun13463: for (var _fun13463_ip = 0;;) switch (_fun13463_ip) {
                                case 0:
                                    var5 = arg0;
                                    var4 = undefined;
                                    if (!(var4 === var5)) {
                                        _fun13463_ip = 13;
                                        continue _fun13463
                                    }
                                case 11:
                                    var5 = false;
                                case 13:
                                    var3 = _closure2_slot7;
                                    var1 = var3.setPrompt;
                                    var1 = var1.bind(var3)(var5);
                                    var _closure3_slot0 = var1;
                                    var1 = _closure2_slot11;
                                    if (var1) {
                                        _fun13463_ip = 60;
                                        continue _fun13463
                                    }
                                case 42:
                                    var3 = _closure2_slot21;
                                    var1 = 1;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = true;
                                    _closure2_slot11 = var1;
                                case 60:
                                    var0 = function() { // Environment: var0
                                        _fun13464: for (var _fun13464_ip = 0;;) switch (_fun13464_ip) {
                                            case 0:
                                                var1 = _closure2_slot11;
                                                if (!var1) {
                                                    _fun13464_ip = 33;
                                                    continue _fun13464
                                                }
                                            case 10:
                                                var1 = false;
                                                _closure2_slot11 = var1;
                                                var2 = _closure2_slot21;
                                                var1 = undefined;
                                                var0 = -1;
                                                var0 = var2.bind(var1)(var0);
                                            case 33:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                return var0;
                                        }
                                    };
                                    return var0;
                            }
                        };
                        var0.block = var2;
                        var2 = function arg0() {
                            var4 = _closure2_slot7;
                            var3 = var4.appendListener;
                            var2 = arg0;
                            var2 = var3.bind(var4)(var2);
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot21;
                            var2 = undefined;
                            var1 = 1;
                            var1 = var3.bind(var2)(var1);
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot21;
                                var0 = undefined;
                                var1 = -1;
                                var1 = var2.bind(var0)(var1);
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            return var0;
                        };
                        var0.listen = var2;
                        var _closure2_slot12 = var0;
                        return var0;
                }
            };
            var2.createBrowserHistory = var6;
            var6 = function arg0() {
                _fun13467: for (var _fun13467_ip = 0;;) switch (_fun13467_ip) {
                    case 0:
                        var8 = arg0;
                        var3 = function() {
                            _fun13468: for (var _fun13468_ip = 0;;) switch (_fun13468_ip) {
                                case 0:
                                    var4 = _closure2_slot4;
                                    var1 = _closure1_slot20;
                                    var2 = undefined;
                                    var1 = var1.bind(var2)();
                                    var5 = var4.bind(var2)(var1);
                                    var4 = _closure2_slot2;
                                    var1 = var5;
                                    if (!var4) {
                                        _fun13468_ip = 49;
                                        continue _fun13468
                                    }
                                case 35:
                                    var4 = _closure1_slot11;
                                    var3 = _closure2_slot2;
                                    var1 = var4.bind(var2)(var5, var3);
                                case 49:
                                    var0 = _closure1_slot15;
                                    var0 = var0.bind(var2)(var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot12 = var3;
                        var0 = function arg0() {
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot11;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var4.bind(var0)(var3, var2);
                            var3 = _closure2_slot11;
                            var2 = _closure2_slot0;
                            var2 = var2.length;
                            var3.length = var2;
                            var4 = _closure2_slot5;
                            var3 = var4.notifyListeners;
                            var2 = _closure2_slot11;
                            var2 = var2.location;
                            var1 = _closure2_slot11;
                            var1 = var1.action;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var _closure2_slot13 = var0;
                        var0 = function() {
                            _fun13470: for (var _fun13470_ip = 0;;) switch (_fun13470_ip) {
                                case 0:
                                    var2 = _closure1_slot20;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)();
                                    var2 = _closure2_slot3;
                                    var2 = var2.bind(var0)(var3);
                                    if (!(var3 === var2)) {
                                        _fun13470_ip = 149;
                                        continue _fun13470
                                    }
                                case 29:
                                    var3 = _closure2_slot12;
                                    var4 = var3.bind(var0)();
                                    var3 = _closure2_slot11;
                                    var6 = var3.location;
                                    var3 = _closure2_slot6;
                                    if (var3) {
                                        _fun13470_ip = 110;
                                        continue _fun13470
                                    }
                                case 53:
                                    var7 = var6.pathname;
                                    var3 = var4.pathname;
                                    var3 = var7 === var3;
                                    if (!var3) {
                                        _fun13470_ip = 88;
                                        continue _fun13470
                                    }
                                case 72:
                                    var8 = var6.search;
                                    var7 = var4.search;
                                    var3 = var8 === var7;
                                case 88:
                                    if (!var3) {
                                        _fun13470_ip = 105;
                                        continue _fun13470
                                    }
                                case 91:
                                    var7 = var6.hash;
                                    var6 = var4.hash;
                                    var3 = var7 === var6;
                                case 105:
                                    if (!var3) {
                                        _fun13470_ip = 110;
                                        continue _fun13470
                                    }
                                case 108:
                                    return var0;
                                case 110:
                                    var6 = _closure2_slot7;
                                    var3 = _closure1_slot14;
                                    var3 = var3.bind(var0)(var4);
                                    if (!(var6 !== var3)) {
                                        _fun13470_ip = 147;
                                        continue _fun13470
                                    }
                                case 127:
                                    var3 = null;
                                    _closure2_slot7 = var3;
                                    var3 = function(arg0) { // Environment: var3
                                        _fun13471: for (var _fun13471_ip = 0;;) switch (_fun13471_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var _closure4_slot0 = var6;
                                                var2 = _closure2_slot6;
                                                if (var2) {
                                                    _fun13471_ip = 54;
                                                    continue _fun13471
                                                }
                                            case 19:
                                                var5 = _closure2_slot5;
                                                var4 = var5.confirmTransitionTo;
                                                var8 = _closure2_slot1;
                                                var9 = 'POP';
                                                var7 = function(arg0) { // Environment: var1
                                                    _fun13472: for (var _fun13472_ip = 0;;) switch (_fun13472_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            if (var2) {
                                                                _fun13472_ip = 120;
                                                                continue _fun13472
                                                            }
                                                        case 12:
                                                            var8 = _closure4_slot0;
                                                            var2 = _closure2_slot11;
                                                            var7 = var2.location;
                                                            var6 = _closure2_slot8;
                                                            var5 = var6.lastIndexOf;
                                                            var3 = _closure1_slot14;
                                                            var4 = undefined;
                                                            var3 = var3.bind(var4)(var7);
                                                            var3 = var5.bind(var6)(var3);
                                                            var5 = -1;
                                                            if (!(var5 === var3)) {
                                                                _fun13472_ip = 66;
                                                                continue _fun13472
                                                            }
                                                        case 64:
                                                            var3 = 0;
                                                        case 66:
                                                            var7 = _closure2_slot8;
                                                            var6 = var7.lastIndexOf;
                                                            var2 = _closure1_slot14;
                                                            var2 = var2.bind(var4)(var8);
                                                            var2 = var6.bind(var7)(var2);
                                                            if (!(var5 === var2)) {
                                                                _fun13472_ip = 96;
                                                                continue _fun13472
                                                            }
                                                        case 94:
                                                            var2 = 0;
                                                        case 96:
                                                            var3 = var3 - var2;
                                                            if (!var3) {
                                                                _fun13472_ip = 149;
                                                                continue _fun13472
                                                            }
                                                        case 103:
                                                            var2 = true;
                                                            _closure2_slot6 = var2;
                                                            var2 = _closure2_slot15;
                                                            var2 = var2.bind(var4)(var3);
                                                            _fun13472_ip = 149;
                                                            continue _fun13472;
                                                        case 120:
                                                            var2 = _closure2_slot13;
                                                            var1 = {};
                                                            var3 = 'POP';
                                                            var1.action = var3;
                                                            var0 = _closure4_slot0;
                                                            var1.location = var0;
                                                            var0 = undefined;
                                                            var0 = var2.bind(var0)(var1);
                                                        case 149:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var11 = var5;
                                                var10 = var6;
                                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                                _fun13471_ip = 70;
                                                continue _fun13471;
                                            case 54:
                                                var1 = false;
                                                _closure2_slot6 = var1;
                                                var1 = _closure2_slot13;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                            case 70:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = var3.bind(var0)(var4);
                                    _fun13470_ip = 158;
                                    continue _fun13470;
                                case 147:
                                    return var0;
                                case 149:
                                    var1 = _closure1_slot21;
                                    var1 = var1.bind(var0)(var2);
                                case 158:
                                    return var0;
                            }
                        };
                        var _closure2_slot14 = var0;
                        var2 = function arg0() {
                            var2 = _closure2_slot0;
                            var1 = var2.go;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot15 = var2;
                        var0 = function arg0() {
                            _fun13474: for (var _fun13474_ip = 0;;) switch (_fun13474_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot9;
                                    var3 = var1 + var2;
                                    _closure2_slot9 = var3;
                                    var1 = 1;
                                    if (!(var1 === var3)) {
                                        _fun13474_ip = 29;
                                        continue _fun13474
                                    }
                                case 25:
                                    if (!(var1 !== var2)) {
                                        _fun13474_ip = 72;
                                        continue _fun13474
                                    }
                                case 29:
                                    var2 = _closure2_slot9;
                                    var1 = 0;
                                    if (!(var1 === var2)) {
                                        _fun13474_ip = 103;
                                        continue _fun13474
                                    }
                                case 39:
                                    var1 = global;
                                    var4 = var1.window;
                                    var3 = var4.removeEventListener;
                                    var2 = _closure1_slot6;
                                    var1 = _closure2_slot14;
                                    var1 = var3.bind(var4)(var2, var1);
                                    _fun13474_ip = 103;
                                    continue _fun13474;
                                case 72:
                                    var1 = global;
                                    var3 = var1.window;
                                    var2 = var3.addEventListener;
                                    var1 = _closure1_slot6;
                                    var0 = _closure2_slot14;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 103:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot16 = var0;
                        var6 = undefined;
                        if (!(var6 === var8)) {
                            _fun13467_ip = 58;
                            continue _fun13467
                        }
                    case 56:
                        var8 = {};
                    case 58:
                        var0 = _closure1_slot3;
                        if (var0) {
                            _fun13467_ip = 79;
                            continue _fun13467
                        }
                    case 68:
                        var4 = _closure1_slot2;
                        var0 = false;
                        var0 = var4.bind(var6)(var0);
                    case 79:
                        var0 = global;
                        var4 = var0.window;
                        var4 = var4.history;
                        var _closure2_slot0 = var4;
                        var0 = var0.window;
                        var0 = var0.navigator;
                        var9 = var0.userAgent;
                        var7 = var9.indexOf;
                        var0 = 'Firefox';
                        var0 = var7.bind(var9)(var0);
                        var0 = var8.getUserConfirmation;
                        if (!(var6 === var0)) {
                            _fun13467_ip = 146;
                            continue _fun13467
                        }
                    case 142:
                        var0 = _closure1_slot17;
                    case 146:
                        var _closure2_slot1 = var0;
                        var0 = var8.hashType;
                        var7 = 'slash';
                        if (!(var6 !== var0)) {
                            _fun13467_ip = 167;
                            continue _fun13467
                        }
                    case 164:
                        var7 = var0;
                    case 167:
                        var9 = var8.basename;
                        var0 = '';
                        if (!var9) {
                            _fun13467_ip = 204;
                            continue _fun13467
                        }
                    case 180:
                        var9 = _closure1_slot12;
                        var10 = _closure1_slot9;
                        var8 = var8.basename;
                        var8 = var10.bind(var6)(var8);
                        var0 = var9.bind(var6)(var8);
                    case 204:
                        var _closure2_slot2 = var0;
                        var0 = _closure1_slot7;
                        var0 = var0[var7];
                        var8 = var0.encodePath;
                        var _closure2_slot3 = var8;
                        var0 = var0.decodePath;
                        var _closure2_slot4 = var0;
                        var0 = _closure1_slot16;
                        var0 = var0.bind(var6)();
                        var _closure2_slot5 = var0;
                        var0 = false;
                        var _closure2_slot6 = var0;
                        var7 = null;
                        var _closure2_slot7 = var7;
                        var7 = _closure1_slot20;
                        var7 = var7.bind(var6)();
                        var8 = var8.bind(var6)(var7);
                        if (!(var7 !== var8)) {
                            _fun13467_ip = 286;
                            continue _fun13467
                        }
                    case 277:
                        var7 = _closure1_slot21;
                        var7 = var7.bind(var6)(var8);
                    case 286:
                        var3 = var3.bind(var6)();
                        var5 = _closure1_slot14;
                        var6 = var5.bind(var6)(var3);
                        var5 = new Array(1);
                        var5[0] = var6;
                        var _closure2_slot8 = var5;
                        var5 = 0;
                        var _closure2_slot9 = var5;
                        var _closure2_slot10 = var0;
                        var0 = {};
                        var4 = var4.length;
                        var0.length = var4;
                        var4 = 'POP';
                        var0.action = var4;
                        var0.location = var3;
                        var3 = function arg0() {
                            _fun13475: for (var _fun13475_ip = 0;;) switch (_fun13475_ip) {
                                case 0:
                                    var0 = global;
                                    var3 = var0.document;
                                    var2 = var3.querySelector;
                                    var1 = 'base';
                                    var4 = var2.bind(var3)(var1);
                                    var2 = var4;
                                    if (!var2) {
                                        _fun13475_ip = 44;
                                        continue _fun13475
                                    }
                                case 29:
                                    var3 = var4.getAttribute;
                                    var1 = 'href';
                                    var2 = var3.bind(var4)(var1);
                                case 44:
                                    var1 = '';
                                    if (!var2) {
                                        _fun13475_ip = 82;
                                        continue _fun13475
                                    }
                                case 51:
                                    var3 = _closure1_slot19;
                                    var0 = var0.window;
                                    var0 = var0.location;
                                    var2 = var0.href;
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var2);
                                case 82:
                                    var0 = '#';
                                    var1 = var1 + var0;
                                    var3 = _closure2_slot3;
                                    var4 = _closure2_slot2;
                                    var5 = _closure1_slot14;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var0 = var5.bind(var2)(var0);
                                    var0 = var4 + var0;
                                    var0 = var3.bind(var2)(var0);
                                    var0 = var1 + var0;
                                    return var0;
                            }
                        };
                        var0.createHref = var3;
                        var3 = function arg0, arg1() {
                            var5 = _closure1_slot15;
                            var0 = _closure2_slot11;
                            var7 = var0.location;
                            var0 = undefined;
                            var10 = arg0;
                            var11 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var6 = var11[var5](var10, var9, var8, var7, var6);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot5;
                            var4 = var5.confirmTransitionTo;
                            var8 = _closure2_slot1;
                            var9 = 'PUSH';
                            var7 = function(arg0) { // Environment: var1
                                _fun13477: for (var _fun13477_ip = 0;;) switch (_fun13477_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13477_ip = 193;
                                            continue _fun13477
                                        }
                                    case 9:
                                        var4 = _closure1_slot14;
                                        var0 = _closure3_slot0;
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var0);
                                        var6 = _closure2_slot3;
                                        var4 = _closure2_slot2;
                                        var4 = var4 + var5;
                                        var6 = var6.bind(var2)(var4);
                                        var4 = _closure1_slot20;
                                        var4 = var4.bind(var2)();
                                        if (!(var4 === var6)) {
                                            _fun13477_ip = 72;
                                            continue _fun13477
                                        }
                                    case 62:
                                        var4 = _closure2_slot13;
                                        var4 = var4.bind(var2)();
                                        _fun13477_ip = 193;
                                        continue _fun13477;
                                    case 72:
                                        _closure2_slot7 = var5;
                                        var4 = global;
                                        var4 = var4.window;
                                        var4 = var4.location;
                                        var4.hash = var6;
                                        var6 = _closure2_slot8;
                                        var4 = var6.lastIndexOf;
                                        var7 = _closure1_slot14;
                                        var1 = _closure2_slot11;
                                        var1 = var1.location;
                                        var1 = var7.bind(var2)(var1);
                                        var4 = var4.bind(var6)(var1);
                                        var7 = _closure2_slot8;
                                        var6 = var7.slice;
                                        var1 = 1;
                                        var4 = var4 + var1;
                                        var1 = 0;
                                        var1 = var6.bind(var7)(var1, var4);
                                        var4 = var1.push;
                                        var4 = var4.bind(var1)(var5);
                                        _closure2_slot8 = var1;
                                        var1 = _closure2_slot13;
                                        var0 = {};
                                        var4 = 'PUSH';
                                        var0.action = var4;
                                        var3 = _closure3_slot0;
                                        var0.location = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 193:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var11 = var5;
                            var10 = var6;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var0.push = var3;
                        var3 = function arg0, arg1() {
                            var5 = _closure1_slot15;
                            var0 = _closure2_slot11;
                            var7 = var0.location;
                            var0 = undefined;
                            var10 = arg0;
                            var11 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var6 = var11[var5](var10, var9, var8, var7, var6);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot5;
                            var4 = var5.confirmTransitionTo;
                            var8 = _closure2_slot1;
                            var9 = 'REPLACE';
                            var7 = function(arg0) { // Environment: var1
                                _fun13479: for (var _fun13479_ip = 0;;) switch (_fun13479_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13479_ip = 155;
                                            continue _fun13479
                                        }
                                    case 9:
                                        var4 = _closure1_slot14;
                                        var0 = _closure3_slot0;
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var0);
                                        var6 = _closure2_slot3;
                                        var4 = _closure2_slot2;
                                        var4 = var4 + var5;
                                        var6 = var6.bind(var2)(var4);
                                        var4 = _closure1_slot20;
                                        var4 = var4.bind(var2)();
                                        if (!(var4 !== var6)) {
                                            _fun13479_ip = 75;
                                            continue _fun13479
                                        }
                                    case 62:
                                        _closure2_slot7 = var5;
                                        var4 = _closure1_slot21;
                                        var4 = var4.bind(var2)(var6);
                                    case 75:
                                        var6 = _closure2_slot8;
                                        var4 = var6.indexOf;
                                        var7 = _closure1_slot14;
                                        var1 = _closure2_slot11;
                                        var1 = var1.location;
                                        var1 = var7.bind(var2)(var1);
                                        var4 = var4.bind(var6)(var1);
                                        var1 = -1;
                                        if (!(var1 !== var4)) {
                                            _fun13479_ip = 126;
                                            continue _fun13479
                                        }
                                    case 118:
                                        var1 = _closure2_slot8;
                                        var1[var4] = var5;
                                    case 126:
                                        var1 = _closure2_slot13;
                                        var0 = {};
                                        var4 = 'REPLACE';
                                        var0.action = var4;
                                        var3 = _closure3_slot0;
                                        var0.location = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 155:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var11 = var5;
                            var10 = var6;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var0.replace = var3;
                        var0.go = var2;
                        var2 = function() {
                            var2 = _closure2_slot15;
                            var0 = undefined;
                            var1 = -1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goBack = var2;
                        var2 = function() {
                            var2 = _closure2_slot15;
                            var0 = undefined;
                            var1 = 1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goForward = var2;
                        var2 = function arg0() {
                            _fun13482: for (var _fun13482_ip = 0;;) switch (_fun13482_ip) {
                                case 0:
                                    var5 = arg0;
                                    var4 = undefined;
                                    if (!(var4 === var5)) {
                                        _fun13482_ip = 13;
                                        continue _fun13482
                                    }
                                case 11:
                                    var5 = false;
                                case 13:
                                    var3 = _closure2_slot5;
                                    var1 = var3.setPrompt;
                                    var1 = var1.bind(var3)(var5);
                                    var _closure3_slot0 = var1;
                                    var1 = _closure2_slot10;
                                    if (var1) {
                                        _fun13482_ip = 60;
                                        continue _fun13482
                                    }
                                case 42:
                                    var3 = _closure2_slot16;
                                    var1 = 1;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = true;
                                    _closure2_slot10 = var1;
                                case 60:
                                    var0 = function() { // Environment: var0
                                        _fun13483: for (var _fun13483_ip = 0;;) switch (_fun13483_ip) {
                                            case 0:
                                                var1 = _closure2_slot10;
                                                if (!var1) {
                                                    _fun13483_ip = 33;
                                                    continue _fun13483
                                                }
                                            case 10:
                                                var1 = false;
                                                _closure2_slot10 = var1;
                                                var2 = _closure2_slot16;
                                                var1 = undefined;
                                                var0 = -1;
                                                var0 = var2.bind(var1)(var0);
                                            case 33:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                return var0;
                                        }
                                    };
                                    return var0;
                            }
                        };
                        var0.block = var2;
                        var2 = function arg0() {
                            var4 = _closure2_slot5;
                            var3 = var4.appendListener;
                            var2 = arg0;
                            var2 = var3.bind(var4)(var2);
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot16;
                            var2 = undefined;
                            var1 = 1;
                            var1 = var3.bind(var2)(var1);
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot16;
                                var0 = undefined;
                                var1 = -1;
                                var1 = var2.bind(var0)(var1);
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            return var0;
                        };
                        var0.listen = var2;
                        var _closure2_slot11 = var0;
                        return var0;
                }
            };
            var2.createHashHistory = var6;
            var6 = function arg0() {
                _fun13486: for (var _fun13486_ip = 0;;) switch (_fun13486_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = function arg0() {
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var4.bind(var0)(var3, var2);
                            var3 = _closure2_slot3;
                            var2 = var3.entries;
                            var2 = var2.length;
                            var3.length = var2;
                            var4 = _closure2_slot2;
                            var3 = var4.notifyListeners;
                            var2 = _closure2_slot3;
                            var2 = var2.location;
                            var1 = _closure2_slot3;
                            var1 = var1.action;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var _closure2_slot4 = var2;
                        var2 = function() {
                            var0 = global;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var2 = var0.bind(var1)();
                            var1 = var2.toString;
                            var0 = 36;
                            var3 = var1.bind(var2)(var0);
                            var2 = var3.substr;
                            var1 = _closure2_slot1;
                            var0 = 2;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var _closure2_slot5 = var2;
                        var2 = function arg0() {
                            var6 = _closure1_slot22;
                            var0 = _closure2_slot3;
                            var3 = var0.index;
                            var0 = arg0;
                            var5 = var3 + var0;
                            var0 = _closure2_slot3;
                            var0 = var0.entries;
                            var3 = var0.length;
                            var0 = 1;
                            var4 = var3 - var0;
                            var0 = undefined;
                            var3 = 0;
                            var4 = var6.bind(var0)(var5, var3, var4);
                            var _closure3_slot0 = var4;
                            var3 = _closure2_slot3;
                            var3 = var3.entries;
                            var6 = var3[var4];
                            var _closure3_slot1 = var6;
                            var5 = _closure2_slot2;
                            var4 = var5.confirmTransitionTo;
                            var8 = _closure2_slot0;
                            var9 = 'POP';
                            var7 = function(arg0) { // Environment: var1
                                _fun13490: for (var _fun13490_ip = 0;;) switch (_fun13490_ip) {
                                    case 0:
                                        var2 = _closure2_slot4;
                                        var0 = arg0;
                                        if (var0) {
                                            _fun13490_ip = 21;
                                            continue _fun13490
                                        }
                                    case 13:
                                        var0 = undefined;
                                        var0 = var2.bind(var0)();
                                        _fun13490_ip = 57;
                                        continue _fun13490;
                                    case 21:
                                        var1 = {};
                                        var0 = 'POP';
                                        var1.action = var0;
                                        var3 = _closure3_slot1;
                                        var1.location = var3;
                                        var0 = _closure3_slot0;
                                        var1.index = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var11 = var5;
                            var10 = var6;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var _closure2_slot6 = var2;
                        var8 = undefined;
                        if (!(var8 === var0)) {
                            _fun13486_ip = 40;
                            continue _fun13486
                        }
                    case 38:
                        var0 = {};
                    case 40:
                        var3 = var0.getUserConfirmation;
                        var _closure2_slot0 = var3;
                        var6 = var0.initialEntries;
                        if (!(var8 === var6)) {
                            _fun13486_ip = 70;
                            continue _fun13486
                        }
                    case 60:
                        var6 = ['/'];
                    case 70:
                        var3 = var0.initialIndex;
                        var7 = 0;
                        var5 = 0;
                        if (!(var8 !== var3)) {
                            _fun13486_ip = 87;
                            continue _fun13486
                        }
                    case 84:
                        var5 = var3;
                    case 87:
                        var3 = var0.keyLength;
                        var0 = 6;
                        if (!(var8 !== var3)) {
                            _fun13486_ip = 103;
                            continue _fun13486
                        }
                    case 100:
                        var0 = var3;
                    case 103:
                        var _closure2_slot1 = var0;
                        var3 = _closure1_slot16;
                        var3 = var3.bind(var8)();
                        var _closure2_slot2 = var3;
                        var4 = _closure1_slot22;
                        var9 = var6.length;
                        var3 = 1;
                        var3 = var9 - var3;
                        var5 = var4.bind(var8)(var5, var7, var3);
                        var4 = var6.map;
                        var3 = function(arg0) { // Environment: var1
                            _fun13491: for (var _fun13491_ip = 0;;) switch (_fun13491_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot15;
                                    var1 = 'string';
                                    var0 = typeof var3;
                                    if (!(var1 !== var0)) {
                                        _fun13491_ip = 44;
                                        continue _fun13491
                                    }
                                case 21:
                                    var1 = var3.key;
                                    if (var1) {
                                        _fun13491_ip = 42;
                                        continue _fun13491
                                    }
                                case 29:
                                    var4 = _closure2_slot5;
                                    var0 = undefined;
                                    var1 = var4.bind(var0)();
                                case 42:
                                    _fun13491_ip = 57;
                                    continue _fun13491;
                                case 44:
                                    var4 = _closure2_slot5;
                                    var0 = undefined;
                                    var1 = var4.bind(var0)();
                                case 57:
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var3, var0, var1);
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var6)(var3);
                        var3 = _closure1_slot14;
                        var0 = {};
                        var6 = var4.length;
                        var0.length = var6;
                        var6 = 'POP';
                        var0.action = var6;
                        var6 = var4[var5];
                        var0.location = var6;
                        var0.index = var5;
                        var0.entries = var4;
                        var0.createHref = var3;
                        var3 = function arg0, arg1() {
                            var7 = _closure1_slot15;
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var9 = var3.bind(var0)();
                            var3 = _closure2_slot3;
                            var8 = var3.location;
                            var11 = arg0;
                            var10 = arg1;
                            var12 = undefined;
                            var6 = var12[var7](var11, var10, var9, var8, var7);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot2;
                            var4 = var5.confirmTransitionTo;
                            var9 = _closure2_slot0;
                            var10 = 'PUSH';
                            var8 = function(arg0) { // Environment: var1
                                _fun13493: for (var _fun13493_ip = 0;;) switch (_fun13493_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13493_ip = 148;
                                            continue _fun13493
                                        }
                                    case 9:
                                        var0 = _closure2_slot3;
                                        var2 = var0.index;
                                        var0 = 1;
                                        var3 = var2 + var0;
                                        var0 = _closure2_slot3;
                                        var4 = var0.entries;
                                        var2 = var4.slice;
                                        var0 = 0;
                                        var0 = var2.bind(var4)(var0);
                                        var2 = var0.length;
                                        if (!(!(var2 > var3))) {
                                            _fun13493_ip = 78;
                                            continue _fun13493
                                        }
                                    case 59:
                                        var4 = var0.push;
                                        var2 = _closure3_slot0;
                                        var2 = var4.bind(var0)(var2);
                                        _fun13493_ip = 107;
                                        continue _fun13493;
                                    case 78:
                                        var5 = var0.splice;
                                        var2 = var0.length;
                                        var4 = var2 - var3;
                                        var2 = _closure3_slot0;
                                        var2 = var5.bind(var0)(var3, var4, var2);
                                    case 107:
                                        var2 = _closure2_slot4;
                                        var1 = {};
                                        var4 = 'PUSH';
                                        var1.action = var4;
                                        var4 = _closure3_slot0;
                                        var1.location = var4;
                                        var1.index = var3;
                                        var1.entries = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 148:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var12 = var5;
                            var11 = var6;
                            var1 = var12[var4](var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var0.push = var3;
                        var3 = function arg0, arg1() {
                            var7 = _closure1_slot15;
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var9 = var3.bind(var0)();
                            var3 = _closure2_slot3;
                            var8 = var3.location;
                            var11 = arg0;
                            var10 = arg1;
                            var12 = undefined;
                            var6 = var12[var7](var11, var10, var9, var8, var7);
                            var _closure3_slot0 = var6;
                            var5 = _closure2_slot2;
                            var4 = var5.confirmTransitionTo;
                            var9 = _closure2_slot0;
                            var10 = 'REPLACE';
                            var8 = function(arg0) { // Environment: var1
                                _fun13495: for (var _fun13495_ip = 0;;) switch (_fun13495_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun13495_ip = 66;
                                            continue _fun13495
                                        }
                                    case 6:
                                        var0 = _closure2_slot3;
                                        var3 = var0.entries;
                                        var0 = _closure2_slot3;
                                        var2 = var0.index;
                                        var0 = _closure3_slot0;
                                        var3[var2] = var0;
                                        var2 = _closure2_slot4;
                                        var1 = {};
                                        var3 = 'REPLACE';
                                        var1.action = var3;
                                        var1.location = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 66:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var12 = var5;
                            var11 = var6;
                            var1 = var12[var4](var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var0.replace = var3;
                        var0.go = var2;
                        var2 = function() {
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            var1 = -1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goBack = var2;
                        var2 = function() {
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            var1 = 1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.goForward = var2;
                        var2 = function arg0() {
                            _fun13498: for (var _fun13498_ip = 0;;) switch (_fun13498_ip) {
                                case 0:
                                    var0 = _closure2_slot3;
                                    var2 = var0.index;
                                    var0 = arg0;
                                    var2 = var2 + var0;
                                    var0 = 0;
                                    var0 = var0 <= var2;
                                    if (!var0) {
                                        _fun13498_ip = 47;
                                        continue _fun13498
                                    }
                                case 28:
                                    var1 = _closure2_slot3;
                                    var1 = var1.entries;
                                    var1 = var1.length;
                                    var0 = var2 < var1;
                                case 47:
                                    return var0;
                            }
                        };
                        var0.canGo = var2;
                        var2 = function arg0() {
                            _fun13499: for (var _fun13499_ip = 0;;) switch (_fun13499_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = undefined;
                                    if (!(var0 === var2)) {
                                        _fun13499_ip = 11;
                                        continue _fun13499
                                    }
                                case 9:
                                    var2 = false;
                                case 11:
                                    var1 = _closure2_slot2;
                                    var0 = var1.setPrompt;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var0.block = var2;
                        var2 = function arg0() {
                            var2 = _closure2_slot2;
                            var1 = var2.appendListener;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0.listen = var2;
                        var _closure2_slot3 = var0;
                        return var0;
                }
            };
            var2.createMemoryHistory = var6;
            var2.createLocation = var5;
            var4 = function arg0, arg1() {
                _fun13501: for (var _fun13501_ip = 0;;) switch (_fun13501_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                        var3 = var2.pathname;
                        var0 = var1.pathname;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun13501_ip = 41;
                            continue _fun13501
                        }
                    case 25:
                        var4 = var2.search;
                        var3 = var1.search;
                        var0 = var4 === var3;
                    case 41:
                        if (!var0) {
                            _fun13501_ip = 58;
                            continue _fun13501
                        }
                    case 44:
                        var4 = var2.hash;
                        var3 = var1.hash;
                        var0 = var4 === var3;
                    case 58:
                        if (!var0) {
                            _fun13501_ip = 75;
                            continue _fun13501
                        }
                    case 61:
                        var4 = var2.key;
                        var3 = var1.key;
                        var0 = var4 === var3;
                    case 75:
                        if (!var0) {
                            _fun13501_ip = 103;
                            continue _fun13501
                        }
                    case 78:
                        var4 = _closure1_slot1;
                        var3 = var2.state;
                        var2 = var1.state;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 103:
                        return var0;
                }
            };
            var2.locationsAreEqual = var4;
            var2.parsePath = var3;
            var2.createPath = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1223, 1225, 1227, 1228]);