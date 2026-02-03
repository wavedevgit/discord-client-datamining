// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1() {
        _fun29700: for (var _fun29700_ip = 0;;) switch (_fun29700_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = undefined;
                var0 = var0 == var1;
                if (var0) {
                    _fun29700_ip = 23;
                    continue _fun29700
                }
            case 14:
                var2 = var3.length;
                var0 = var1 > var2;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun29700_ip = 33;
                    continue _fun29700
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var2;
                var5 = var1;
                var0 = new var6[var0](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun29700_ip = 88;
                    continue _fun29700
                }
            case 73:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun29700_ip = 73;
                    continue _fun29700
                }
            case 88:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun29701: for (var _fun29701_ip = 0;;) switch (_fun29701_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun29701_ip = 46;
                    continue _fun29701
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun29701_ip = 55;
                    continue _fun29701
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun29701_ip = 352;
                    continue _fun29701
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun29701_ip = 332;
                    continue _fun29701
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun29701_ip = 292;
                    continue _fun29701
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun29701_ip = 279;
                    continue _fun29701
                }
            case 110:
                var6 = var4.Object;
                var6 = var6.prototype;
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun29701_ip = 172;
                    continue _fun29701
                }
            case 167:
                var6 = var2.constructor;
            case 172:
                var9 = var8;
                if (!var6) {
                    _fun29701_ip = 188;
                    continue _fun29701
                }
            case 178:
                var6 = var2.constructor;
                var9 = var6.name;
            case 188:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun29701_ip = 258;
                    continue _fun29701
                }
            case 196:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun29701_ip = 258;
                    continue _fun29701
                }
            case 204:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun29701_ip = 243;
                    continue _fun29701
                }
            case 214:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun29701_ip = 256;
                    continue _fun29701
                }
            case 243:
                var8 = _closure1_slot29;
                var6 = var8.bind(var7)(var2, var7);
            case 256:
                _fun29701_ip = 274;
                continue _fun29701;
            case 258:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 274:
                var5 = var6;
                _fun29701_ip = 292;
                continue _fun29701;
            case 279:
                var6 = _closure1_slot29;
                var5 = var6.bind(var7)(var2, var7);
            case 292:
                var3 = var5;
                if (var3) {
                    _fun29701_ip = 332;
                    continue _fun29701
                }
            case 298:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 332:
                if (!var3) {
                    _fun29701_ip = 339;
                    continue _fun29701
                }
            case 335:
                _closure2_slot0 = var3;
            case 339:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun29702: for (var _fun29702_ip = 0;;) switch (_fun29702_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun29702_ip = 56;
                                continue _fun29702
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun29702_ip = 67;
                            continue _fun29702;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 352:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var3 = function() {
        _fun29703: for (var _fun29703_ip = 0;;) switch (_fun29703_ip) {
            case 0:
                var6 = undefined;
                var1 = undefined;
                var2 = new Array(0);
                var3 = var2.slice;
                var2 = var3.call;
                var1 = arguments;
                var2 = var2.bind(var3)(var1);
                var3 = var2.length;
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun29703_ip = 135;
                    continue _fun29703
                }
            case 39:
                var4 = var2.length;
                var3 = 2;
                if (!(var3 !== var4)) {
                    _fun29703_ip = 104;
                    continue _fun29703
                }
            case 51:
                var3 = global;
                var5 = var3.Error;
                var4 = var2.length;
                var3 = "isMatching wasn't given the right number of arguments: expected 1 or 2, received ";
                var7 = var3 + var4;
                var3 = var5.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var3 = '.';
                var10 = var7 + var3;
                var11 = var4;
                var3 = new var11[var5](var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 104:
                var5 = _closure1_slot6;
                var3 = 0;
                var4 = var2[var3];
                var3 = var2[var1];
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var3, var1);
                return var1;
            case 135:
                var1 = 0;
                var1 = var2[var1];
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var4.bind(var2)(var3, var1, var0);
                    return var0;
                };
                return var0;
        }
    };
    var _closure1_slot31 = var3;
    var5 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var0 = global;
        var2 = var0.Object;
        var1 = var2.assign;
        var0 = {};
        var5 = function() {
            var2 = _closure1_slot34;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.optional = var5;
        var5 = function arg0() {
            var3 = _closure1_slot35;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0.and = var5;
        var5 = function arg0() {
            var3 = _closure1_slot36;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0.or = var5;
        var4 = function arg0() {
            _fun29711: for (var _fun29711_ip = 0;;) switch (_fun29711_ip) {
                case 0:
                    var2 = arg0;
                    var3 = undefined;
                    if (!(var3 !== var2)) {
                        _fun29711_ip = 31;
                        continue _fun29711
                    }
                case 9:
                    var1 = _closure1_slot38;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var3)(var2, var0);
                    _fun29711_ip = 50;
                    continue _fun29711;
                case 31:
                    var2 = _closure1_slot38;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 50:
                    return var0;
            }
        };
        var0.select = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var _closure1_slot32 = var5;
    var0 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = function(arg0) { // Environment: var4
            var3 = arg0;
            var _closure3_slot0 = var3;
            var5 = global;
            var2 = var5.Object;
            var1 = var2.assign;
            var0 = {};
            var5 = var5.Symbol;
            var5 = var5.iterator;
            var4 = function() { // Environment: var4
                var2 = _closure1_slot0;
                var1 = var2.mark;
                var0 = function() {
                    var3 = _closure1_slot0;
                    var2 = var3.wrap;
                    var1 = _closure4_slot0;
                    var0 = function(arg0) { // Environment: var0
                        _fun29716: for (var _fun29716_ip = 0;;) switch (_fun29716_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = 'end';
                                var0 = 2;
                                var3 = 0;
                            case 12:
                                var2 = var1.next;
                                var1.prev = var2;
                                if (!(var3 !== var2)) {
                                    _fun29716_ip = 47;
                                    continue _fun29716
                                }
                            case 27:
                                if (!(var0 !== var2)) {
                                    _fun29716_ip = 35;
                                    continue _fun29716
                                }
                            case 31:
                                if (var4 !== var2) {
                                    _fun29716_ip = 12;
                                    continue _fun29716
                                }
                            case 35:
                                var2 = var1.stop;
                                var2 = var2.bind(var1)();
                                return var2;
                            case 47:
                                var1.next = var0;
                                var0 = global;
                                var3 = var0.Object;
                                var2 = var3.assign;
                                var1 = _closure3_slot0;
                                var6 = {};
                                var _closure5_slot0 = var6;
                                var5 = _closure1_slot2;
                                var4 = true;
                                var6[var5] = var4;
                                var0 = _closure5_slot0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure4_slot0 = var0;
                var1 = var1.bind(var2)(var0);
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var0[var5] = var4;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var5);
        var0 = {};
        var5 = function() {
            var2 = _closure1_slot33;
            var3 = _closure1_slot34;
            var0 = _closure2_slot0;
            var1 = undefined;
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.optional = var5;
        var4 = function arg0() {
            _fun29718: for (var _fun29718_ip = 0;;) switch (_fun29718_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot33;
                    var1 = undefined;
                    if (!(var1 !== var5)) {
                        _fun29718_ip = 35;
                        continue _fun29718
                    }
                case 16:
                    var4 = _closure1_slot38;
                    var0 = _closure2_slot0;
                    var0 = var4.bind(var1)(var5, var0);
                    _fun29718_ip = 51;
                    continue _fun29718;
                case 35:
                    var4 = _closure1_slot38;
                    var3 = _closure2_slot0;
                    var0 = var4.bind(var1)(var3);
                case 51:
                    var0 = var2.bind(var1)(var0);
                    return var0;
            }
        };
        var0.select = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot33 = var0;
    var32 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot32;
        var1 = {};
        var3 = _closure1_slot1;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function arg0() {
                _fun29721: for (var _fun29721_ip = 0;;) switch (_fun29721_ip) {
                    case 0:
                        var7 = arg0;
                        var2 = {};
                        var _closure4_slot0 = var2;
                        var6 = function arg0, arg1() {
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var0 = arg0;
                            var2[var0] = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var _closure4_slot1 = var6;
                        var5 = undefined;
                        if (!(var5 !== var7)) {
                            _fun29721_ip = 61;
                            continue _fun29721
                        }
                    case 26:
                        var0 = {};
                        var4 = _closure1_slot6;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3, var7, var6);
                        var0.matched = var3;
                        var0.selections = var2;
                        _fun29721_ip = 112;
                        continue _fun29721;
                    case 61:
                        var4 = _closure1_slot7;
                        var3 = _closure2_slot0;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure4_slot1;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1, var0);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        var1 = {};
                        var3 = true;
                        var1.matched = var3;
                        var1.selections = var2;
                        var0 = var1;
                    case 112:
                        return var0;
                }
            };
            var0.match = var2;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = _closure2_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.getSelectionKeys = var1;
            var1 = 'optional';
            var0.matcherType = var1;
            return var0;
        };
        var1[var3] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot34 = var32;
    var31 = function() {
        var2 = undefined;
        var0 = undefined;
        var1 = new Array(0);
        var4 = var1.slice;
        var1 = var4.call;
        var0 = arguments;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var1 = _closure1_slot32;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = function() { // Environment: var3
            var0 = {};
            var2 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var1 = {};
                var _closure4_slot1 = var1;
                var0 = function arg0, arg1() {
                    var2 = _closure4_slot1;
                    var1 = arg1;
                    var0 = arg0;
                    var2[var0] = var1;
                    var0 = undefined;
                    return var0;
                };
                var _closure4_slot2 = var0;
                var0 = {};
                var4 = _closure2_slot0;
                var3 = var4.every;
                var2 = function(arg0) { // Environment: var2
                    var4 = _closure1_slot6;
                    var3 = _closure4_slot0;
                    var2 = _closure4_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0.matched = var2;
                var0.selections = var1;
                return var0;
            };
            var0.match = var2;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0.getSelectionKeys = var1;
            var1 = 'and';
            var0.matcherType = var1;
            return var0;
        };
        var0[var4] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot35 = var31;
    var30 = function() {
        var2 = undefined;
        var0 = undefined;
        var1 = new Array(0);
        var4 = var1.slice;
        var1 = var4.call;
        var0 = arguments;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var1 = _closure1_slot32;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = function() { // Environment: var3
            var0 = {};
            var2 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var1 = {};
                var _closure4_slot1 = var1;
                var0 = function arg0, arg1() {
                    var2 = _closure4_slot1;
                    var1 = arg1;
                    var0 = arg0;
                    var2[var0] = var1;
                    var0 = undefined;
                    return var0;
                };
                var _closure4_slot2 = var0;
                var5 = _closure1_slot8;
                var4 = _closure2_slot0;
                var3 = _closure1_slot7;
                var0 = undefined;
                var5 = var5.bind(var0)(var4, var3);
                var3 = var5.forEach;
                var0 = function(arg0) { // Environment: var2
                    var2 = _closure4_slot2;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1, var0);
                    return var0;
                };
                var0 = var3.bind(var5)(var0);
                var0 = {};
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    var4 = _closure1_slot6;
                    var3 = _closure4_slot0;
                    var2 = _closure4_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0.matched = var2;
                var0.selections = var1;
                return var0;
            };
            var0.match = var2;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0.getSelectionKeys = var1;
            var1 = 'or';
            var0.matcherType = var1;
            return var0;
        };
        var0[var4] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot36 = var30;
    var29 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = _closure1_slot1;
        var1 = function() { // Environment: var1
            var0 = {};
            var1 = function arg0() {
                var0 = {};
                var1 = global;
                var3 = var1.Boolean;
                var4 = _closure2_slot0;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                var0.matched = var1;
                return var0;
            };
            var0.match = var1;
            return var0;
        };
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot37 = var29;
    var28 = function() {
        _fun29741: for (var _fun29741_ip = 0;;) switch (_fun29741_ip) {
            case 0:
                var2 = undefined;
                var0 = undefined;
                var1 = new Array(0);
                var4 = var1.slice;
                var1 = var4.call;
                var0 = arguments;
                var4 = var1.bind(var4)(var0);
                var1 = 0;
                var0 = var4[var1];
                var6 = 'string';
                var5 = typeof var0;
                var0 = undefined;
                if (!(var6 === var5)) {
                    _fun29741_ip = 50;
                    continue _fun29741
                }
            case 46:
                var0 = var4[var1];
            case 50:
                var _closure2_slot0 = var0;
                var5 = var4.length;
                var0 = 2;
                if (!(var0 !== var5)) {
                    _fun29741_ip = 85;
                    continue _fun29741
                }
            case 66:
                var0 = var4[var1];
                var5 = typeof var0;
                var0 = undefined;
                if (!(var6 !== var5)) {
                    _fun29741_ip = 83;
                    continue _fun29741
                }
            case 79:
                var0 = var4[var1];
            case 83:
                _fun29741_ip = 92;
                continue _fun29741;
            case 85:
                var1 = 1;
                var0 = var4[var1];
            case 92:
                var _closure2_slot1 = var0;
                var1 = _closure1_slot32;
                var0 = {};
                var4 = _closure1_slot1;
                var3 = function() { // Environment: var3
                    var0 = {};
                    var2 = function arg0() {
                        _fun29743: for (var _fun29743_ip = 0;;) switch (_fun29743_ip) {
                            case 0:
                                var7 = arg0;
                                var1 = {};
                                var2 = _closure2_slot0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun29743_ip = 29;
                                    continue _fun29743
                                }
                            case 20:
                                var0 = _closure1_slot3;
                                _fun29743_ip = 33;
                                continue _fun29743;
                            case 29:
                                var0 = _closure2_slot0;
                            case 33:
                                var1[var0] = var7;
                                var _closure4_slot0 = var1;
                                var0 = {};
                                var2 = _closure2_slot1;
                                var6 = undefined;
                                var2 = var6 === var2;
                                if (var2) {
                                    _fun29743_ip = 79;
                                    continue _fun29743
                                }
                            case 56:
                                var5 = _closure1_slot6;
                                var4 = _closure2_slot1;
                                var3 = function(arg0, arg1) { // Environment: var3
                                    var2 = _closure4_slot0;
                                    var1 = arg1;
                                    var0 = arg0;
                                    var2[var0] = var1;
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = var5.bind(var6)(var4, var7, var3);
                            case 79:
                                var0.matched = var2;
                                var0.selections = var1;
                                return var0;
                        }
                    };
                    var0.match = var2;
                    var1 = function() {
                        _fun29745: for (var _fun29745_ip = 0;;) switch (_fun29745_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 == var2)) {
                                    _fun29745_ip = 22;
                                    continue _fun29745
                                }
                            case 13:
                                var1 = _closure1_slot3;
                                _fun29745_ip = 26;
                                continue _fun29745;
                            case 22:
                                var1 = _closure2_slot0;
                            case 26:
                                var2 = new Array(1);
                                var2[0] = var1;
                                var1 = var2.concat;
                                var3 = _closure2_slot1;
                                var4 = undefined;
                                if (!(var4 !== var3)) {
                                    _fun29745_ip = 67;
                                    continue _fun29745
                                }
                            case 49:
                                var3 = _closure1_slot7;
                                var0 = _closure2_slot1;
                                var0 = var3.bind(var4)(var0);
                                _fun29745_ip = 71;
                                continue _fun29745;
                            case 67:
                                var0 = new Array(0);
                            case 71:
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0.getSelectionKeys = var1;
                    return var0;
                };
                var0[var4] = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot38 = var28;
    var6 = function arg0() {
        var1 = 'number';
        var0 = arg0;
        var0 = typeof var0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot39 = var6;
    var7 = function arg0() {
        var1 = 'string';
        var0 = arg0;
        var0 = typeof var0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot40 = var7;
    var4 = function arg0() {
        var1 = 'bigint';
        var0 = arg0;
        var0 = typeof var0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot41 = var4;
    var8 = arg6;
    var0 = 0;
    var9 = var8[var0];
    var8 = arg1;
    var0 = undefined;
    var8 = var8.bind(var0)(var9);
    var _closure1_slot0 = var8;
    var8 = global;
    var11 = var8.Symbol;
    var10 = var11.for;
    var9 = '@ts-pattern/matcher';
    var33 = var10.bind(var11)(var9);
    var _closure1_slot1 = var33;
    var10 = var8.Symbol;
    var9 = var10.for;
    var8 = '@ts-pattern/isVariadic';
    var8 = var9.bind(var10)(var8);
    var _closure1_slot2 = var8;
    var8 = '@ts-pattern/anonymous-select-key';
    var _closure1_slot3 = var8;
    var8 = function arg0() {
        _fun29749: for (var _fun29749_ip = 0;;) switch (_fun29749_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var2 = var1.Boolean;
                var1 = var0;
                if (!var1) {
                    _fun29749_ip = 28;
                    continue _fun29749
                }
            case 17:
                var3 = 'object';
                var0 = typeof var0;
                var1 = var3 === var0;
            case 28:
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot4 = var8;
    var8 = function arg0() {
        _fun29750: for (var _fun29750_ip = 0;;) switch (_fun29750_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                if (!var0) {
                    _fun29750_ip = 26;
                    continue _fun29750
                }
            case 9:
                var1 = _closure1_slot1;
                var1 = var2[var1];
                var1 = !var1;
                var0 = !var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot5 = var8;
    var8 = function arg0, arg1, arg2() {
        _fun29751: for (var _fun29751_ip = 0;;) switch (_fun29751_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var11 = arg2;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var11;
                var4 = _closure1_slot5;
                var10 = undefined;
                var4 = var4.bind(var10)(var2);
                if (var4) {
                    _fun29751_ip = 596;
                    continue _fun29751
                }
            case 43:
                var4 = _closure1_slot4;
                var4 = var4.bind(var10)(var2);
                if (var4) {
                    _fun29751_ip = 77;
                    continue _fun29751
                }
            case 55:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.is;
                var4 = var4.bind(var5)(var3, var2);
                return var4;
            case 77:
                var4 = _closure1_slot4;
                var4 = var4.bind(var10)(var3);
                if (var4) {
                    _fun29751_ip = 93;
                    continue _fun29751
                }
            case 89:
                var4 = false;
                return var4;
            case 93:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var2);
                if (var5) {
                    _fun29751_ip = 148;
                    continue _fun29751
                }
            case 114:
                var6 = var4.Object;
                var5 = var6.keys;
                var7 = var5.bind(var6)(var2);
                var6 = var7.every;
                var5 = function(arg0) { // Environment: var1
                    _fun29756: for (var _fun29756_ip = 0;;) switch (_fun29756_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var5 = var0[var3];
                            var0 = _closure2_slot1;
                            var0 = var3 in var0;
                            if (var0) {
                                _fun29756_ip = 71;
                                continue _fun29756
                            }
                        case 25:
                            var6 = _closure1_slot5;
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            if (!var2) {
                                _fun29756_ip = 68;
                                continue _fun29756
                            }
                        case 42:
                            var4 = _closure1_slot1;
                            var4 = var5[var4];
                            var4 = var4.bind(var5)();
                            var6 = var4.matcherType;
                            var4 = 'optional';
                            var2 = var4 === var6;
                        case 68:
                            var0 = var2;
                        case 71:
                            if (!var0) {
                                _fun29756_ip = 102;
                                continue _fun29756
                            }
                        case 74:
                            var4 = _closure1_slot42;
                            var2 = _closure2_slot1;
                            var3 = var2[var3];
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var5, var3, var2);
                        case 102:
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                return var5;
            case 148:
                var6 = var4.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var3);
                if (var5) {
                    _fun29751_ip = 171;
                    continue _fun29751
                }
            case 167:
                var5 = false;
                return var5;
            case 171:
                var8 = new Array(0);
                var13 = new Array(0);
                var12 = new Array(0);
                var6 = _closure1_slot30;
                var5 = var2.keys;
                var5 = var5.bind(var2)();
                var7 = var6.bind(var10)(var5);
                var6 = var7.bind(var10)();
                var5 = var6.done;
                if (var5) {
                    _fun29751_ip = 302;
                    continue _fun29751
                }
            case 213:
                var5 = var6.value;
                var9 = var2[var5];
                var5 = _closure1_slot5;
                var5 = var5.bind(var10)(var9);
                if (!var5) {
                    _fun29751_ip = 245;
                    continue _fun29751
                }
            case 234:
                var5 = _closure1_slot2;
                var5 = var9[var5];
                if (var5) {
                    _fun29751_ip = 277;
                    continue _fun29751
                }
            case 245:
                var5 = var12.length;
                if (var5) {
                    _fun29751_ip = 265;
                    continue _fun29751
                }
            case 253:
                var5 = var8.push;
                var5 = var5.bind(var8)(var9);
                _fun29751_ip = 287;
                continue _fun29751;
            case 265:
                var5 = var13.push;
                var5 = var5.bind(var13)(var9);
                _fun29751_ip = 287;
                continue _fun29751;
            case 277:
                var5 = var12.push;
                var5 = var5.bind(var12)(var9);
            case 287:
                var9 = var7.bind(var10)();
                var5 = var9.done;
                var6 = var9;
                if (!var5) {
                    _fun29751_ip = 213;
                    continue _fun29751
                }
            case 302:
                var5 = var12.length;
                if (var5) {
                    _fun29751_ip = 345;
                    continue _fun29751
                }
            case 310:
                var6 = var2.length;
                var5 = var3.length;
                var5 = var6 === var5;
                if (!var5) {
                    _fun29751_ip = 343;
                    continue _fun29751
                }
            case 327:
                var7 = var2.every;
                var6 = function(arg0, arg1) { // Environment: var1
                    var4 = _closure1_slot42;
                    var2 = _closure2_slot1;
                    var1 = arg1;
                    var3 = var2[var1];
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var5 = var7.bind(var2)(var6);
            case 343:
                return var5;
            case 345:
                var6 = var12.length;
                var5 = 1;
                if (!(!(var6 > var5))) {
                    _fun29751_ip = 562;
                    continue _fun29751
                }
            case 360:
                var6 = var3.length;
                var7 = var8.length;
                var5 = var13.length;
                var5 = var7 + var5;
                if (!(!(var6 < var5))) {
                    _fun29751_ip = 558;
                    continue _fun29751
                }
            case 386:
                var6 = var3.slice;
                var5 = var8.length;
                var7 = 0;
                var5 = var6.bind(var3)(var7, var5);
                var _closure2_slot4 = var5;
                var5 = var13.length;
                if (!(var7 !== var5)) {
                    _fun29751_ip = 437;
                    continue _fun29751
                }
            case 417:
                var6 = var3.slice;
                var5 = var13.length;
                var5 = -var5;
                var5 = var6.bind(var3)(var5);
                _fun29751_ip = 441;
                continue _fun29751;
            case 437:
                var5 = new Array(0);
            case 441:
                var _closure2_slot5 = var5;
                var9 = var3.slice;
                var6 = var8.length;
                var14 = var13.length;
                var5 = inf;
                if (!(var7 !== var14)) {
                    _fun29751_ip = 482;
                    continue _fun29751
                }
            case 474:
                var14 = var13.length;
                var5 = -var14;
            case 482:
                var9 = var9.bind(var3)(var6, var5);
                var6 = var8.every;
                var5 = function(arg0, arg1) { // Environment: var1
                    var4 = _closure1_slot42;
                    var2 = _closure2_slot4;
                    var1 = arg1;
                    var3 = var2[var1];
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var5 = var6.bind(var8)(var5);
                if (!var5) {
                    _fun29751_ip = 523;
                    continue _fun29751
                }
            case 507:
                var8 = var13.every;
                var6 = function(arg0, arg1) { // Environment: var1
                    var4 = _closure1_slot42;
                    var2 = _closure2_slot5;
                    var1 = arg1;
                    var3 = var2[var1];
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var5 = var8.bind(var13)(var6);
            case 523:
                if (!var5) {
                    _fun29751_ip = 556;
                    continue _fun29751
                }
            case 526:
                var6 = var12.length;
                var6 = var7 === var6;
                if (var6) {
                    _fun29751_ip = 553;
                    continue _fun29751
                }
            case 538:
                var8 = _closure1_slot42;
                var7 = var12[var7];
                var6 = var8.bind(var10)(var7, var9, var11);
            case 553:
                var5 = var6;
            case 556:
                return var5;
            case 558:
                var5 = false;
                return var5;
            case 562:
                var6 = var4.Error;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var17 = 'Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.';
                var18 = var5;
                var4 = new var18[var6](var17, var16);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 596:
                var0 = _closure1_slot1;
                var0 = var2[var0];
                var2 = var0.bind(var2)();
                var0 = var2.match;
                var2 = var0.bind(var2)(var3);
                var0 = var2.matched;
                var4 = var2.selections;
                var _closure2_slot3 = var4;
                var2 = var0;
                if (!var2) {
                    _fun29751_ip = 644;
                    continue _fun29751
                }
            case 641:
                var2 = var4;
            case 644:
                if (!var2) {
                    _fun29751_ip = 680;
                    continue _fun29751
                }
            case 647:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var2 = _closure2_slot2;
                    var0 = _closure2_slot3;
                    var1 = var0[var3];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 680:
                return var0;
        }
    };
    var _closure1_slot42 = var8;
    var _closure1_slot6 = var8;
    var8 = function arg0() {
        _fun29757: for (var _fun29757_ip = 0;;) switch (_fun29757_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot4;
                var2 = undefined;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun29757_ip = 29;
                    continue _fun29757
                }
            case 20:
                var0 = new Array(0);
                _fun29757_ip = 159;
                continue _fun29757;
            case 29:
                var1 = _closure1_slot5;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun29757_ip = 106;
                    continue _fun29757
                }
            case 41:
                var1 = global;
                var6 = var1.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var4);
                var6 = _closure1_slot8;
                if (var5) {
                    _fun29757_ip = 94;
                    continue _fun29757
                }
            case 66:
                var5 = var1.Object;
                var1 = var5.values;
                var5 = var1.bind(var5)(var4);
                var1 = _closure1_slot43;
                var1 = var6.bind(var2)(var5, var1);
                _fun29757_ip = 104;
                continue _fun29757;
            case 94:
                var5 = _closure1_slot43;
                var1 = var6.bind(var2)(var4, var5);
            case 104:
                _fun29757_ip = 156;
                continue _fun29757;
            case 106:
                var3 = _closure1_slot1;
                var3 = var4[var3];
                var6 = var3.bind(var4)();
                var5 = var6.getSelectionKeys;
                var3 = null;
                var4 = var3 == var5;
                var2 = undefined;
                if (var4) {
                    _fun29757_ip = 145;
                    continue _fun29757
                }
            case 135:
                var4 = var5.call;
                var2 = var4.bind(var5)(var6);
            case 145:
                if (!(var3 == var2)) {
                    _fun29757_ip = 153;
                    continue _fun29757
                }
            case 149:
                var2 = new Array(0);
            case 153:
                var1 = var2;
            case 156:
                var0 = var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot43 = var8;
    var _closure1_slot7 = var8;
    var8 = function arg0, arg1() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var2 = arg0;
            var1 = var2.concat;
            var4 = _closure2_slot0;
            var3 = undefined;
            var0 = arg1;
            var0 = var4.bind(var3)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var8;
    var8 = function arg0, arg1() {
        _fun29760: for (var _fun29760_ip = 0;;) switch (_fun29760_ip) {
            case 0:
                var4 = arg1;
                var1 = _closure1_slot30;
                var3 = undefined;
                var0 = arg0;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun29760_ip = 64;
                    continue _fun29760
                }
            case 32:
                var0 = var1.value;
                var0 = var4.bind(var3)(var0);
                if (var0) {
                    _fun29760_ip = 49;
                    continue _fun29760
                }
            case 45:
                var0 = false;
                return var0;
            case 49:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun29760_ip = 32;
                    continue _fun29760
                }
            case 64:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot9 = var8;
    var8 = function arg0, arg1() {
        _fun29761: for (var _fun29761_ip = 0;;) switch (_fun29761_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var1 = _closure1_slot30;
                var0 = var2.entries;
                var0 = var0.bind(var2)();
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var1 = var4.bind(var5)();
                var0 = var1.done;
                var3 = 1;
                var2 = 0;
                if (var0) {
                    _fun29761_ip = 88;
                    continue _fun29761
                }
            case 47:
                var0 = var1.value;
                var7 = var0[var3];
                var0 = var0[var2];
                var0 = var6.bind(var5)(var7, var0);
                if (var0) {
                    _fun29761_ip = 73;
                    continue _fun29761
                }
            case 69:
                var0 = false;
                return var0;
            case 73:
                var7 = var4.bind(var5)();
                var0 = var7.done;
                var1 = var7;
                if (!var0) {
                    _fun29761_ip = 47;
                    continue _fun29761
                }
            case 88:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot10 = var8;
    var8 = function(arg0) { // Environment: var1
        var0 = true;
        return var0;
    };
    var8 = var29.bind(var0)(var8);
    var27 = var5.bind(var0)(var8);
    var8 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = _closure1_slot32;
        var0 = undefined;
        var1 = var1.bind(var0)(var5);
        var0 = {};
        var5 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = arg0;
            var _closure3_slot0 = var5;
            var5 = _closure1_slot37;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                _fun29765: for (var _fun29765_ip = 0;;) switch (_fun29765_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot40;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3);
                        if (!var0) {
                            _fun29765_ip = 38;
                            continue _fun29765
                        }
                    case 20:
                        var2 = var3.startsWith;
                        var1 = _closure3_slot0;
                        var0 = var2.bind(var3)(var1);
                    case 38:
                        return var0;
                }
            };
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.startsWith = var5;
        var5 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = arg0;
            var _closure3_slot0 = var5;
            var5 = _closure1_slot37;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                _fun29767: for (var _fun29767_ip = 0;;) switch (_fun29767_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot40;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3);
                        if (!var0) {
                            _fun29767_ip = 38;
                            continue _fun29767
                        }
                    case 20:
                        var2 = var3.endsWith;
                        var1 = _closure3_slot0;
                        var0 = var2.bind(var3)(var1);
                    case 38:
                        return var0;
                }
            };
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.endsWith = var5;
        var5 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = function(arg0) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var2 = _closure1_slot37;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    _fun29770: for (var _fun29770_ip = 0;;) switch (_fun29770_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot40;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            if (!var0) {
                                _fun29770_ip = 36;
                                continue _fun29770
                            }
                        case 20:
                            var2 = var1.length;
                            var1 = _closure4_slot0;
                            var0 = var2 >= var1;
                        case 36:
                            return var0;
                    }
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.minLength = var5;
        var5 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = function(arg0) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var2 = _closure1_slot37;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    _fun29773: for (var _fun29773_ip = 0;;) switch (_fun29773_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot40;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            if (!var0) {
                                _fun29773_ip = 36;
                                continue _fun29773
                            }
                        case 20:
                            var2 = var1.length;
                            var1 = _closure4_slot0;
                            var0 = var2 <= var1;
                        case 36:
                            return var0;
                    }
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.maxLength = var5;
        var5 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = arg0;
            var _closure3_slot0 = var5;
            var5 = _closure1_slot37;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                _fun29775: for (var _fun29775_ip = 0;;) switch (_fun29775_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot40;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3);
                        if (!var0) {
                            _fun29775_ip = 37;
                            continue _fun29775
                        }
                    case 20:
                        var2 = var3.includes;
                        var1 = _closure3_slot0;
                        var0 = var2.bind(var3)(var1);
                    case 37:
                        return var0;
                }
            };
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.includes = var5;
        var4 = function arg0() {
            var2 = _closure1_slot44;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = arg0;
            var _closure3_slot0 = var5;
            var5 = _closure1_slot37;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                _fun29777: for (var _fun29777_ip = 0;;) switch (_fun29777_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = _closure1_slot40;
                        var3 = undefined;
                        var0 = var0.bind(var3)(var5);
                        if (!var0) {
                            _fun29777_ip = 51;
                            continue _fun29777
                        }
                    case 20:
                        var1 = global;
                        var2 = var1.Boolean;
                        var4 = var5.match;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var1);
                        var0 = var2.bind(var3)(var1);
                    case 51:
                        return var0;
                }
            };
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.regex = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot44 = var8;
    var7 = var29.bind(var0)(var7);
    var26 = var8.bind(var0)(var7);
    var25 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29779: for (var _fun29779_ip = 0;;) switch (_fun29779_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29779_ip = 31;
                        continue _fun29779
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var1 <= var2;
                case 31:
                    if (!var0) {
                        _fun29779_ip = 45;
                        continue _fun29779
                    }
                case 34:
                    var1 = _closure2_slot1;
                    var0 = var1 >= var2;
                case 45:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot11 = var25;
    var24 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29781: for (var _fun29781_ip = 0;;) switch (_fun29781_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29781_ip = 31;
                        continue _fun29781
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 < var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot12 = var24;
    var23 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29783: for (var _fun29783_ip = 0;;) switch (_fun29783_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29783_ip = 31;
                        continue _fun29783
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 > var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot13 = var23;
    var22 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29785: for (var _fun29785_ip = 0;;) switch (_fun29785_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29785_ip = 31;
                        continue _fun29785
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 <= var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot14 = var22;
    var21 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29787: for (var _fun29787_ip = 0;;) switch (_fun29787_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29787_ip = 31;
                        continue _fun29787
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 >= var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot15 = var21;
    var20 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29789: for (var _fun29789_ip = 0;;) switch (_fun29789_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3);
                    if (!var0) {
                        _fun29789_ip = 39;
                        continue _fun29789
                    }
                case 20:
                    var1 = global;
                    var2 = var1.Number;
                    var1 = var2.isInteger;
                    var0 = var1.bind(var2)(var3);
                case 39:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot16 = var20;
    var19 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29791: for (var _fun29791_ip = 0;;) switch (_fun29791_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3);
                    if (!var0) {
                        _fun29791_ip = 39;
                        continue _fun29791
                    }
                case 20:
                    var1 = global;
                    var2 = var1.Number;
                    var1 = var2.isFinite;
                    var0 = var1.bind(var2)(var3);
                case 39:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot17 = var19;
    var18 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29793: for (var _fun29793_ip = 0;;) switch (_fun29793_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29793_ip = 26;
                        continue _fun29793
                    }
                case 20:
                    var1 = 0;
                    var0 = var2 > var1;
                case 26:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot18 = var18;
    var17 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29795: for (var _fun29795_ip = 0;;) switch (_fun29795_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot39;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29795_ip = 26;
                        continue _fun29795
                    }
                case 20:
                    var1 = 0;
                    var0 = var2 < var1;
                case 26:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot19 = var17;
    var7 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = _closure1_slot32;
        var0 = undefined;
        var1 = var1.bind(var0)(var5);
        var0 = {};
        var5 = function arg0, arg1() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var6 = _closure1_slot11;
            var1 = undefined;
            var5 = arg0;
            var0 = arg1;
            var0 = var6.bind(var1)(var5, var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.between = var5;
        var5 = function arg0() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.lt = var5;
        var5 = function arg0() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot13;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.gt = var5;
        var5 = function arg0() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot14;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.lte = var5;
        var5 = function arg0() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot15;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.gte = var5;
        var5 = function() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot16;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.int = var5;
        var5 = function() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot17;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.finite = var5;
        var5 = function() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot18;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.positive = var5;
        var4 = function() {
            var2 = _closure1_slot45;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot19;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.negative = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot45 = var7;
    var6 = var29.bind(var0)(var6);
    var16 = var7.bind(var0)(var6);
    var15 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29807: for (var _fun29807_ip = 0;;) switch (_fun29807_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29807_ip = 31;
                        continue _fun29807
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var1 <= var2;
                case 31:
                    if (!var0) {
                        _fun29807_ip = 45;
                        continue _fun29807
                    }
                case 34:
                    var1 = _closure2_slot1;
                    var0 = var1 >= var2;
                case 45:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot20 = var15;
    var14 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29809: for (var _fun29809_ip = 0;;) switch (_fun29809_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29809_ip = 31;
                        continue _fun29809
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 < var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot21 = var14;
    var13 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29811: for (var _fun29811_ip = 0;;) switch (_fun29811_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29811_ip = 31;
                        continue _fun29811
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 > var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot22 = var13;
    var12 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29813: for (var _fun29813_ip = 0;;) switch (_fun29813_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29813_ip = 31;
                        continue _fun29813
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 <= var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot23 = var12;
    var11 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29815: for (var _fun29815_ip = 0;;) switch (_fun29815_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29815_ip = 31;
                        continue _fun29815
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2 >= var1;
                case 31:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot24 = var11;
    var10 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29817: for (var _fun29817_ip = 0;;) switch (_fun29817_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29817_ip = 26;
                        continue _fun29817
                    }
                case 20:
                    var1 = 0;
                    var0 = var2 > var1;
                case 26:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot25 = var10;
    var9 = function() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun29819: for (var _fun29819_ip = 0;;) switch (_fun29819_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot41;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun29819_ip = 26;
                        continue _fun29819
                    }
                case 20:
                    var1 = 0;
                    var0 = var2 < var1;
                case 26:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot26 = var9;
    var6 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = _closure1_slot32;
        var0 = undefined;
        var1 = var1.bind(var0)(var5);
        var0 = {};
        var5 = function arg0, arg1() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var6 = _closure1_slot20;
            var1 = undefined;
            var5 = arg0;
            var0 = arg1;
            var0 = var6.bind(var1)(var5, var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.between = var5;
        var5 = function arg0() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot21;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.lt = var5;
        var5 = function arg0() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot22;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.gt = var5;
        var5 = function arg0() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot23;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.lte = var5;
        var5 = function arg0() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var5 = _closure1_slot24;
            var1 = undefined;
            var0 = arg0;
            var0 = var5.bind(var1)(var0);
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.gte = var5;
        var5 = function() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot25;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.positive = var5;
        var4 = function() {
            var2 = _closure1_slot46;
            var4 = _closure1_slot35;
            var3 = _closure2_slot0;
            var0 = _closure1_slot26;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.negative = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot46 = var6;
    var4 = var29.bind(var0)(var4);
    var8 = var6.bind(var0)(var4);
    var4 = function(arg0) { // Environment: var1
        var1 = 'boolean';
        var0 = arg0;
        var0 = typeof var0;
        var0 = var1 === var0;
        return var0;
    };
    var4 = var29.bind(var0)(var4);
    var7 = var5.bind(var0)(var4);
    var4 = function(arg0) { // Environment: var1
        var1 = 'symbol';
        var0 = arg0;
        var0 = typeof var0;
        var0 = var1 === var0;
        return var0;
    };
    var4 = var29.bind(var0)(var4);
    var6 = var5.bind(var0)(var4);
    var4 = function(arg0) { // Environment: var1
        var1 = null;
        var0 = arg0;
        var0 = var1 == var0;
        return var0;
    };
    var4 = var29.bind(var0)(var4);
    var5 = var5.bind(var0)(var4);
    var4 = null;
    var4 = Object.create(var4);
    var4.matcher = var33;
    var4.optional = var32;
    var32 = function() {
        var2 = undefined;
        var0 = undefined;
        var1 = new Array(0);
        var4 = var1.slice;
        var1 = var4.call;
        var0 = arguments;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var1 = _closure1_slot33;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = function() { // Environment: var3
            var0 = {};
            var2 = function arg0() {
                _fun29833: for (var _fun29833_ip = 0;;) switch (_fun29833_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var6);
                        if (var1) {
                            _fun29833_ip = 37;
                            continue _fun29833
                        }
                    case 26:
                        var1 = {};
                        var2 = false;
                        var1.matched = var2;
                        return var1;
                    case 37:
                        var2 = _closure2_slot0;
                        var2 = var2.length;
                        var3 = 0;
                        if (!(var3 !== var2)) {
                            _fun29833_ip = 166;
                            continue _fun29833
                        }
                    case 55:
                        var1 = _closure2_slot0;
                        var4 = var1[var3];
                        var _closure4_slot0 = var4;
                        var1 = {};
                        var _closure4_slot1 = var1;
                        var2 = var6.length;
                        if (!(var3 !== var2)) {
                            _fun29833_ip = 121;
                            continue _fun29833
                        }
                    case 82:
                        var2 = function arg0, arg1() {
                            _fun29835: for (var _fun29835_ip = 0;;) switch (_fun29835_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure4_slot1;
                                    var4 = var1[var2];
                                    if (var4) {
                                        _fun29835_ip = 21;
                                        continue _fun29835
                                    }
                                case 17:
                                    var4 = new Array(0);
                                case 21:
                                    var3 = var4.concat;
                                    var0 = new Array(1);
                                    var5 = arg1;
                                    var0[0] = var5;
                                    var0 = var3.bind(var4)(var0);
                                    var1[var2] = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot2 = var2;
                        var2 = {};
                        var5 = var6.every;
                        var3 = function(arg0) { // Environment: var0
                            var4 = _closure1_slot6;
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var1)(var3, var0, var2);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                        var2.matched = var3;
                        var2.selections = var1;
                        return var2;
                    case 121:
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var3 = var3.bind(var2)(var4);
                        var2 = var3.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot1;
                            var1 = new Array(0);
                            var0 = arg0;
                            var2[var0] = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        var0 = {};
                        var2 = true;
                        var0.matched = var2;
                        var0.selections = var1;
                        return var0;
                    case 166:
                        var0 = {};
                        var1 = true;
                        var0.matched = var1;
                        return var0;
                }
            };
            var0.match = var2;
            var1 = function() {
                _fun29837: for (var _fun29837_ip = 0;;) switch (_fun29837_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun29837_ip = 42;
                            continue _fun29837
                        }
                    case 18:
                        var2 = _closure1_slot7;
                        var0 = _closure2_slot0;
                        var1 = var0[var1];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        _fun29837_ip = 46;
                        continue _fun29837;
                    case 42:
                        var0 = new Array(0);
                    case 46:
                        return var0;
                }
            };
            var0.getSelectionKeys = var1;
            return var0;
        };
        var0[var4] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.array = var32;
    var32 = function() {
        var2 = undefined;
        var0 = undefined;
        var1 = new Array(0);
        var4 = var1.slice;
        var1 = var4.call;
        var0 = arguments;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var1 = _closure1_slot32;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = function() { // Environment: var3
            var0 = {};
            var2 = function arg0() {
                _fun29840: for (var _fun29840_ip = 0;;) switch (_fun29840_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = global;
                        var0 = var0.Set;
                        var0 = var5 instanceof var0;
                        if (var0) {
                            _fun29840_ip = 31;
                            continue _fun29840
                        }
                    case 20:
                        var0 = {};
                        var1 = false;
                        var0.matched = var1;
                        return var0;
                    case 31:
                        var1 = {};
                        var _closure4_slot0 = var1;
                        var0 = var5.size;
                        var3 = 0;
                        if (!(var3 !== var0)) {
                            _fun29840_ip = 130;
                            continue _fun29840
                        }
                    case 48:
                        var4 = _closure2_slot0;
                        var4 = var4.length;
                        if (!(var3 !== var4)) {
                            _fun29840_ip = 119;
                            continue _fun29840
                        }
                    case 64:
                        var4 = function arg0, arg1() {
                            _fun29841: for (var _fun29841_ip = 0;;) switch (_fun29841_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure4_slot0;
                                    var4 = var1[var2];
                                    if (var4) {
                                        _fun29841_ip = 21;
                                        continue _fun29841
                                    }
                                case 17:
                                    var4 = new Array(0);
                                case 21:
                                    var3 = var4.concat;
                                    var0 = new Array(1);
                                    var5 = arg1;
                                    var0[0] = var5;
                                    var0 = var3.bind(var4)(var0);
                                    var1[var2] = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot1 = var4;
                        var0 = _closure2_slot0;
                        var0 = var0[var3];
                        var _closure4_slot2 = var0;
                        var0 = {};
                        var4 = _closure1_slot9;
                        var3 = undefined;
                        var2 = function(arg0) { // Environment: var2
                            var4 = _closure1_slot6;
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var1)(var3, var0, var2);
                            return var0;
                        };
                        var2 = var4.bind(var3)(var5, var2);
                        var0.matched = var2;
                        var0.selections = var1;
                        return var0;
                    case 119:
                        var0 = {};
                        var2 = true;
                        var0.matched = var2;
                        return var0;
                    case 130:
                        var0 = {};
                        var2 = true;
                        var0.matched = var2;
                        var0.selections = var1;
                        return var0;
                }
            };
            var0.match = var2;
            var1 = function() {
                _fun29843: for (var _fun29843_ip = 0;;) switch (_fun29843_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun29843_ip = 42;
                            continue _fun29843
                        }
                    case 18:
                        var2 = _closure1_slot7;
                        var0 = _closure2_slot0;
                        var1 = var0[var1];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        _fun29843_ip = 46;
                        continue _fun29843;
                    case 42:
                        var0 = new Array(0);
                    case 46:
                        return var0;
                }
            };
            var0.getSelectionKeys = var1;
            return var0;
        };
        var0[var4] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.set = var32;
    var32 = function() {
        var2 = undefined;
        var0 = undefined;
        var1 = new Array(0);
        var4 = var1.slice;
        var1 = var4.call;
        var0 = arguments;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var1 = _closure1_slot32;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = function() { // Environment: var3
            var0 = {};
            var2 = function arg0() {
                _fun29846: for (var _fun29846_ip = 0;;) switch (_fun29846_ip) {
                    case 0:
                        var8 = arg0;
                        var3 = global;
                        var0 = var3.Map;
                        var0 = var8 instanceof var0;
                        if (var0) {
                            _fun29846_ip = 31;
                            continue _fun29846
                        }
                    case 20:
                        var0 = {};
                        var1 = false;
                        var0.matched = var1;
                        return var0;
                    case 31:
                        var1 = {};
                        var _closure4_slot0 = var1;
                        var0 = var8.size;
                        var2 = 0;
                        if (!(var2 !== var0)) {
                            _fun29846_ip = 226;
                            continue _fun29846
                        }
                    case 51:
                        var0 = function arg0, arg1() {
                            _fun29847: for (var _fun29847_ip = 0;;) switch (_fun29847_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure4_slot0;
                                    var4 = var1[var2];
                                    if (var4) {
                                        _fun29847_ip = 21;
                                        continue _fun29847
                                    }
                                case 17:
                                    var4 = new Array(0);
                                case 21:
                                    var3 = var4.concat;
                                    var0 = new Array(1);
                                    var5 = arg1;
                                    var0[0] = var5;
                                    var0 = var3.bind(var4)(var0);
                                    var1[var2] = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot1 = var0;
                        var4 = _closure2_slot0;
                        var4 = var4.length;
                        if (!(var2 !== var4)) {
                            _fun29846_ip = 215;
                            continue _fun29846
                        }
                    case 79:
                        var4 = _closure2_slot0;
                        var4 = var4.length;
                        var6 = 1;
                        if (!(var6 !== var4)) {
                            _fun29846_ip = 149;
                            continue _fun29846
                        }
                    case 95:
                        var4 = _closure2_slot0;
                        var7 = var4[var2];
                        var _closure4_slot2 = var7;
                        var4 = var4[var6];
                        var _closure4_slot3 = var4;
                        var4 = {};
                        var7 = _closure1_slot10;
                        var6 = undefined;
                        var5 = function(arg0, arg1) { // Environment: var5
                            _fun29848: for (var _fun29848_ip = 0;;) switch (_fun29848_ip) {
                                case 0:
                                    var6 = _closure1_slot6;
                                    var4 = _closure4_slot2;
                                    var3 = _closure4_slot1;
                                    var5 = undefined;
                                    var0 = arg1;
                                    var0 = var6.bind(var5)(var4, var0, var3);
                                    var4 = _closure1_slot6;
                                    var3 = _closure4_slot3;
                                    var2 = _closure4_slot1;
                                    var1 = arg0;
                                    var1 = var4.bind(var5)(var3, var1, var2);
                                    if (!var0) {
                                        _fun29848_ip = 58;
                                        continue _fun29848
                                    }
                                case 55:
                                    var0 = var1;
                                case 58:
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var6)(var8, var5);
                        var4.matched = var5;
                        var4.selections = var1;
                        return var4;
                    case 149:
                        var3 = var3.Error;
                        var0 = _closure2_slot0;
                        var4 = var0[var2];
                        var0 = null;
                        var0 = var0 == var4;
                        var2 = undefined;
                        if (var0) {
                            _fun29846_ip = 183;
                            continue _fun29846
                        }
                    case 174:
                        var0 = var4.toString;
                        var2 = var0.bind(var4)();
                    case 183:
                        var0 = "`P.map` wasn't given enough arguments. Expected (key, value), received ";
                        var10 = var0 + var2;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var2;
                        var0 = new var11[var3](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 215:
                        var0 = {};
                        var2 = true;
                        var0.matched = var2;
                        return var0;
                    case 226:
                        var0 = {};
                        var2 = true;
                        var0.matched = var2;
                        var0.selections = var1;
                        return var0;
                }
            };
            var0.match = var2;
            var1 = function() {
                _fun29849: for (var _fun29849_ip = 0;;) switch (_fun29849_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var0 = var0.length;
                        var1 = 0;
                        if (!(var1 !== var0)) {
                            _fun29849_ip = 73;
                            continue _fun29849
                        }
                    case 18:
                        var3 = new Array(0);
                        var2 = var3.concat;
                        var4 = _closure1_slot7;
                        var6 = _closure2_slot0;
                        var1 = var6[var1];
                        var5 = undefined;
                        var1 = var4.bind(var5)(var1);
                        var4 = _closure1_slot7;
                        var0 = 1;
                        var0 = var6[var0];
                        var0 = var4.bind(var5)(var0);
                        var0 = var2.bind(var3)(var1, var0);
                        _fun29849_ip = 77;
                        continue _fun29849;
                    case 73:
                        var0 = new Array(0);
                    case 77:
                        return var0;
                }
            };
            var0.getSelectionKeys = var1;
            return var0;
        };
        var0[var4] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.map = var32;
    var4.intersection = var31;
    var4.union = var30;
    var30 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot32;
        var1 = {};
        var3 = _closure1_slot1;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function arg0() {
                var0 = {};
                var5 = _closure1_slot6;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = arg0;
                var1 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var3)(var4, var2, var1);
                var1 = !var1;
                var0.matched = var1;
                return var0;
            };
            var0.match = var2;
            var1 = function() {
                var0 = new Array(0);
                return var0;
            };
            var0.getSelectionKeys = var1;
            var1 = 'not';
            var0.matcherType = var1;
            return var0;
        };
        var1[var3] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var4.not = var30;
    var4.when = var29;
    var4.select = var28;
    var4.any = var27;
    var4._ = var27;
    var4.string = var26;
    var4.between = var25;
    var4.lt = var24;
    var4.gt = var23;
    var4.lte = var22;
    var4.gte = var21;
    var4.int = var20;
    var4.finite = var19;
    var4.positive = var18;
    var4.negative = var17;
    var4.number = var16;
    var4.betweenBigInt = var15;
    var4.ltBigInt = var14;
    var4.gtBigInt = var13;
    var4.lteBigInt = var12;
    var4.gteBigInt = var11;
    var4.positiveBigInt = var10;
    var4.negativeBigInt = var9;
    var4.bigint = var8;
    var4.boolean = var7;
    var4.symbol = var6;
    var4.nullish = var5;
    var5 = function arg0() {
        var2 = _closure1_slot32;
        var3 = _closure1_slot37;
        var4 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 instanceof var1;
                return var0;
            };
            return var0;
        };
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var0);
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var4.instanceOf = var5;
    var5 = function arg0() {
        var2 = _closure1_slot32;
        var3 = _closure1_slot37;
        var4 = _closure1_slot31;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var0);
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var4.shape = var5;
    var5 = {};
    var6 = false;
    var5.matched = var6;
    var5.value = var0;
    var _closure1_slot27 = var5;
    var5 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var2 = this;
            var0 = undefined;
            var2.input = var0;
            var2.state = var0;
            var1 = arg0;
            var2.input = var1;
            var1 = arg1;
            var2.state = var1;
            return var0;
        };
        var _closure2_slot0 = var0;
        var2 = var0.prototype;
        var3 = function() { // Environment: var1
            _fun29861: for (var _fun29861_ip = 0;;) switch (_fun29861_ip) {
                case 0:
                    var0 = this;
                    var6 = undefined;
                    var1 = undefined;
                    var _closure3_slot0 = var0;
                    var3 = new Array(0);
                    var4 = var3.slice;
                    var3 = var4.call;
                    var1 = arguments;
                    var3 = var3.bind(var4)(var1);
                    var1 = var0.state;
                    var1 = var1.matched;
                    if (var1) {
                        _fun29861_ip = 370;
                        continue _fun29861
                    }
                case 50:
                    var4 = var3.length;
                    var1 = 1;
                    var4 = var4 - var1;
                    var5 = var3[var4];
                    var8 = 0;
                    var4 = var3[var8];
                    var7 = new Array(1);
                    var7[0] = var4;
                    var9 = var3.length;
                    var4 = 3;
                    if (!(var4 === var9)) {
                        _fun29861_ip = 107;
                        continue _fun29861
                    }
                case 92:
                    var4 = var3[var1];
                    var9 = 'function';
                    var4 = typeof var4;
                    if (!(var9 !== var4)) {
                        _fun29861_ip = 164;
                        continue _fun29861
                    }
                case 107:
                    var9 = var3.length;
                    var4 = 2;
                    var9 = var9 > var4;
                    var4 = undefined;
                    if (!var9) {
                        _fun29861_ip = 182;
                        continue _fun29861
                    }
                case 124:
                    var11 = var7.push;
                    var10 = var11.apply;
                    var12 = var3.slice;
                    var9 = var3.length;
                    var9 = var9 - var1;
                    var9 = var12.bind(var3)(var1, var9);
                    var9 = var10.bind(var11)(var7, var9);
                    var4 = undefined;
                    _fun29861_ip = 182;
                    continue _fun29861;
                case 164:
                    var9 = var7.push;
                    var8 = var3[var8];
                    var8 = var9.bind(var7)(var8);
                    var4 = var3[var1];
                case 182:
                    var1 = false;
                    var _closure3_slot1 = var1;
                    var8 = {};
                    var _closure3_slot2 = var8;
                    var1 = function arg0, arg1() {
                        var1 = true;
                        _closure3_slot1 = var1;
                        var2 = _closure3_slot2;
                        var1 = arg1;
                        var0 = arg0;
                        var2[var0] = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var _closure3_slot3 = var1;
                    var3 = var7.some;
                    var1 = function(arg0) { // Environment: var2
                        var4 = _closure1_slot6;
                        var1 = _closure3_slot0;
                        var3 = var1.input;
                        var2 = _closure3_slot3;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var1 = var3.bind(var7)(var1);
                    if (!var1) {
                        _fun29861_ip = 252;
                        continue _fun29861
                    }
                case 222:
                    if (!var4) {
                        _fun29861_ip = 261;
                        continue _fun29861
                    }
                case 225:
                    var1 = global;
                    var3 = var1.Boolean;
                    var1 = var0.input;
                    var1 = var4.bind(var6)(var1);
                    var1 = var3.bind(var6)(var1);
                    if (var1) {
                        _fun29861_ip = 261;
                        continue _fun29861
                    }
                case 252:
                    var4 = _closure1_slot27;
                    _fun29861_ip = 332;
                    continue _fun29861;
                case 261:
                    var1 = {};
                    var3 = true;
                    var1.matched = var3;
                    var2 = _closure3_slot1;
                    if (var2) {
                        _fun29861_ip = 285;
                        continue _fun29861
                    }
                case 277:
                    var3 = var0.input;
                    _fun29861_ip = 313;
                    continue _fun29861;
                case 285:
                    var2 = _closure1_slot3;
                    var9 = var2 in var8;
                    var2 = var8;
                    if (!var9) {
                        _fun29861_ip = 310;
                        continue _fun29861
                    }
                case 302:
                    var7 = _closure1_slot3;
                    var2 = var8[var7];
                case 310:
                    var3 = var2;
                case 313:
                    var2 = var0.input;
                    var2 = var5.bind(var6)(var3, var2);
                    var1.value = var2;
                    var4 = var1;
                case 332:
                    var3 = _closure2_slot0;
                    var14 = var0.input;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var2;
                    var13 = var4;
                    var1 = new var15[var3](var14, var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 370:
                    return var0;
            }
        };
        var2.with = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            _fun29864: for (var _fun29864_ip = 0;;) switch (_fun29864_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.state;
                    var1 = var1.matched;
                    if (var1) {
                        _fun29864_ip = 135;
                        continue _fun29864
                    }
                case 16:
                    var1 = global;
                    var2 = var1.Boolean;
                    var3 = var0.input;
                    var1 = arg0;
                    var8 = undefined;
                    var1 = var1.bind(var8)(var3);
                    var1 = var2.bind(var8)(var1);
                    var4 = _closure2_slot0;
                    var3 = var0.input;
                    if (var1) {
                        _fun29864_ip = 70;
                        continue _fun29864
                    }
                case 61:
                    var1 = _closure1_slot27;
                    _fun29864_ip = 107;
                    continue _fun29864;
                case 70:
                    var2 = {};
                    var5 = true;
                    var2.matched = var5;
                    var7 = var0.input;
                    var6 = var0.input;
                    var5 = arg1;
                    var5 = var5.bind(var8)(var7, var6);
                    var2.value = var5;
                    var1 = var2;
                case 107:
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = var2;
                    var10 = var3;
                    var9 = var1;
                    var1 = new var11[var4](var10, var9, var8);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 135:
                    return var0;
            }
        };
        var2.when = var3;
        var3 = function(arg0) { // Environment: var1
            _fun29865: for (var _fun29865_ip = 0;;) switch (_fun29865_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.state;
                    var0 = var0.matched;
                    if (var0) {
                        _fun29865_ip = 34;
                        continue _fun29865
                    }
                case 16:
                    var3 = var1.input;
                    var2 = arg0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3);
                    _fun29865_ip = 44;
                    continue _fun29865;
                case 34:
                    var1 = var1.state;
                    var0 = var1.value;
                case 44:
                    return var0;
            }
        };
        var2.otherwise = var3;
        var3 = function() { // Environment: var1
            var1 = this;
            var0 = var1.run;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.exhaustive = var3;
        var3 = function() { // Environment: var1
            _fun29867: for (var _fun29867_ip = 0;;) switch (_fun29867_ip) {
                case 0:
                    var0 = this;
                    var1 = undefined;
                    var2 = var0.state;
                    var2 = var2.matched;
                    if (var2) {
                        _fun29867_ip = 96;
                        continue _fun29867
                    }
                case 18: // try_start_0
                    var2 = global;
                    var4 = var2.JSON;
                    var3 = var4.stringify;
                    var2 = var0.input;
                    var1 = var3.bind(var4)(var2);
                case 43: // try_end0
                    _fun29867_ip = 53;
                    continue _fun29867;
                case 45: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var1 = var0.input;
                case 53:
                    var2 = global;
                    var3 = var2.Error;
                    var2 = var1;
                    var1 = 'Pattern matching error: no pattern matches value ';
                    var5 = var1 + var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 96:
                    var0 = var0.state;
                    var0 = var0.value;
                    return var0;
            }
        };
        var2.run = var3;
        var1 = function() { // Environment: var1
            var0 = this;
            return var0;
        };
        var2.returnType = var1;
        return var0;
    };
    var5 = var5.bind(var0)();
    var _closure1_slot28 = var5;
    var2.P = var4;
    var2.Pattern = var4;
    var2.isMatching = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot28;
        var4 = _closure1_slot27;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.match = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3460]);