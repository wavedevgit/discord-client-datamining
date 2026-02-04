// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun23376: for (var _fun23376_ip = 0;;) switch (_fun23376_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun23376_ip = 43;
                    continue _fun23376
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun23376_ip = 50;
                    continue _fun23376
                }
            case 43:
                var2 = function arg0() {
                    _fun23378: for (var _fun23378_ip = 0;;) switch (_fun23378_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun23378_ip = 58;
                                continue _fun23378
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun23378_ip = 58;
                                continue _fun23378
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun23378_ip = 58;
                                continue _fun23378
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun23378_ip = 61;
                                continue _fun23378
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun23376_ip = 55;
                continue _fun23376;
            case 50:
                var2 = function arg0() {
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 55:
                _closure1_slot4 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var6 = function arg0() {
        _fun23379: for (var _fun23379_ip = 0;;) switch (_fun23379_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23379_ip = 18;
                    continue _fun23379
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23379_ip = 27;
                    continue _fun23379
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun23380: for (var _fun23380_ip = 0;;) switch (_fun23380_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = var6.length;
                var5 = 0;
                var0 = var5 < var0;
                var4 = global;
                var3 = true;
                var2 = 'value';
                if (!var0) {
                    _fun23380_ip = 102;
                    continue _fun23380
                }
            case 28:
                var10 = var6[var5];
                var0 = var10.enumerable;
                if (var0) {
                    _fun23380_ip = 42;
                    continue _fun23380
                }
            case 40:
                var0 = false;
            case 42:
                var10.enumerable = var0;
                var10.configurable = var3;
                var0 = var2 in var10;
                if (!var0) {
                    _fun23380_ip = 67;
                    continue _fun23380
                }
            case 61:
                var10.writable = var3;
            case 67:
                var9 = var4.Object;
                var8 = var9.defineProperty;
                var0 = var10.key;
                var0 = var8.bind(var9)(var7, var0, var10);
                var5 = var5 + 1;
                var0 = var6.length;
                if (var5 < var0) {
                    _fun23380_ip = 28;
                    continue _fun23380
                }
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun23381: for (var _fun23381_ip = 0;;) switch (_fun23381_ip) {
            case 0:
                var0 = global;
                var0 = var0.Object;
                var3 = var0.setPrototypeOf;
                if (var3) {
                    _fun23381_ip = 24;
                    continue _fun23381
                }
            case 17:
                var3 = function arg0, arg1() {
                    var0 = arg0;
                    var1 = arg1;
                    var0.__proto__ = var1;
                    return var0;
                };
            case 24:
                _closure1_slot6 = var3;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = function() {
            _fun23384: for (var _fun23384_ip = 0;;) switch (_fun23384_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Reflect;
                    var2 = 'undefined';
                    var1 = typeof var1;
                    if (!(var2 !== var1)) {
                        _fun23384_ip = 151;
                        continue _fun23384
                    }
                case 21:
                    var1 = var0.Reflect;
                    var1 = var1.construct;
                    if (!var1) {
                        _fun23384_ip = 151;
                        continue _fun23384
                    }
                case 35:
                    var1 = var0.Reflect;
                    var1 = var1.construct;
                    var1 = var1.sham;
                    if (var1) {
                        _fun23384_ip = 147;
                        continue _fun23384
                    }
                case 55:
                    var1 = var0.Proxy;
                    var2 = 'function';
                    var1 = typeof var1;
                    if (!(var2 !== var1)) {
                        _fun23384_ip = 143;
                        continue _fun23384
                    }
                case 72: // try_start_0
                    var1 = var0.Boolean;
                    var1 = var1.prototype;
                    var2 = var1.valueOf;
                    var1 = var2.call;
                    var6 = var0.Reflect;
                    var5 = var6.construct;
                    var4 = var0.Boolean;
                    var3 = new Array(0);
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var5.bind(var6)(var4, var3, var0);
                    var0 = var1.bind(var2)(var0);
                case 133: // try_end0
                    var0 = true;
                    return var0;
                case 137: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = false;
                    return var0;
                case 143:
                    var0 = true;
                    return var0;
                case 147:
                    var0 = false;
                    return var0;
                case 151:
                    var0 = false;
                    return var0;
            }
        };
        var1 = undefined;
        var1 = var2.bind(var1)();
        var _closure2_slot1 = var1;
        var0 = function() {
            _fun23386: for (var _fun23386_ip = 0;;) switch (_fun23386_ip) {
                case 0:
                    var1 = this;
                    var3 = undefined;
                    var0 = undefined;
                    var6 = _closure1_slot9;
                    var5 = _closure2_slot0;
                    var8 = var6.bind(var3)(var5);
                    var4 = _closure2_slot1;
                    if (var4) {
                        _fun23386_ip = 51;
                        continue _fun23386
                    }
                case 33:
                    var5 = var8.apply;
                    var0 = arguments;
                    var4 = var0;
                    var6 = var5.bind(var8)(var1, var4);
                    _fun23386_ip = 87;
                    continue _fun23386;
                case 51:
                    var4 = _closure1_slot9;
                    var4 = var4.bind(var3)(var1);
                    var7 = var4.constructor;
                    var4 = global;
                    var5 = var4.Reflect;
                    var4 = var5.construct;
                    var0 = arguments;
                    var6 = var4.bind(var5)(var8, var0, var7);
                case 87:
                    if (!var6) {
                        _fun23386_ip = 124;
                        continue _fun23386
                    }
                case 90:
                    var0 = _closure1_slot4;
                    var5 = var0.bind(var3)(var6);
                    var4 = 'object';
                    var0 = var6;
                    if (!(var4 !== var5)) {
                        _fun23386_ip = 136;
                        continue _fun23386
                    }
                case 110:
                    var5 = 'function';
                    var4 = typeof var6;
                    var0 = var6;
                    if (!(var5 !== var4)) {
                        _fun23386_ip = 136;
                        continue _fun23386
                    }
                case 124:
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var3)(var1);
                    var0 = var1;
                case 136:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun23387: for (var _fun23387_ip = 0;;) switch (_fun23387_ip) {
            case 0:
                var0 = arg0;
                var1 = undefined;
                if (!(var1 !== var0)) {
                    _fun23387_ip = 11;
                    continue _fun23387
                }
            case 9:
                return var0;
            case 11:
                var0 = global;
                var2 = var0.ReferenceError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = "this hasn't been initialised - super() hasn't been called";
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun23388: for (var _fun23388_ip = 0;;) switch (_fun23388_ip) {
            case 0:
                var0 = global;
                var1 = var0.Object;
                var1 = var1.setPrototypeOf;
                if (var1) {
                    _fun23388_ip = 26;
                    continue _fun23388
                }
            case 17:
                var2 = function arg0() {
                    _fun23389: for (var _fun23389_ip = 0;;) switch (_fun23389_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.__proto__;
                            if (var0) {
                                _fun23389_ip = 31;
                                continue _fun23389
                            }
                        case 12:
                            var1 = global;
                            var2 = var1.Object;
                            var1 = var2.getPrototypeOf;
                            var0 = var1.bind(var2)(var3);
                        case 31:
                            return var0;
                    }
                };
                _fun23388_ip = 38;
                continue _fun23388;
            case 26:
                var0 = var0.Object;
                var2 = var0.getPrototypeOf;
            case 38:
                _closure1_slot9 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun23390: for (var _fun23390_ip = 0;;) switch (_fun23390_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var5 = arg2;
                var1 = var4 in var0;
                if (var1) {
                    _fun23390_ip = 22;
                    continue _fun23390
                }
            case 16:
                var0[var4] = var5;
                _fun23390_ip = 58;
                continue _fun23390;
            case 22:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.defineProperty;
                var1 = {
                    'value': null,
                    'enumerable': true,
                    'configurable': true,
                    'writable': true
                };
                var1.value = var5;
                var1 = var2.bind(var3)(var0, var4, var1);
            case 58:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = undefined;
    var2.ISOWeekParser = var0;
    var3 = 0;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Parser;
    var1 = function(arg0) { // Environment: var1
        _fun23391: for (var _fun23391_ip = 0;;) switch (_fun23391_ip) {
            case 0:
                var3 = arg0;
                var0 = function() {
                    _fun23392: for (var _fun23392_ip = 0;;) switch (_fun23392_ip) {
                        case 0:
                            var0 = this;
                            var4 = undefined;
                            var5 = undefined;
                            var1 = _closure2_slot1;
                            var3 = var0 instanceof var1;
                            var1 = global;
                            if (var3) {
                                _fun23392_ip = 57;
                                continue _fun23392
                            }
                        case 23:
                            var7 = var1.TypeError;
                            var3 = var7.prototype;
                            var6 = Object.create(var3, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var11 = 'Cannot call a class as a function';
                            var12 = var6;
                            var3 = new var12[var7](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var6;
                            throw var3;
                        case 57:
                            var3 = arguments.length;
                            var1 = var1.Array;
                            var6 = var1.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var6;
                            var11 = var3;
                            var1 = new var12[var1](var11, var10);
                            var8 = var1 instanceof Object ? var1 : var6;
                            var1 = 0;
                            var6 = var1 < var3;
                            if (!var6) {
                                _fun23392_ip = 113;
                                continue _fun23392
                            }
                        case 98:
                            var6 = arguments[var1];
                            var8[var1] = var6;
                            var1 = var1 + 1;
                            if (var1 < var3) {
                                _fun23392_ip = 98;
                                continue _fun23392
                            }
                        case 113:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot8;
                            var5 = _closure2_slot0;
                            var6 = var5.call;
                            var5 = var6.apply;
                            var2 = _closure2_slot0;
                            var7 = new Array(1);
                            var7[0] = var0;
                            var0 = var7.concat;
                            var0 = var0.bind(var7)(var8);
                            var0 = var5.bind(var6)(var2, var0);
                            var2 = var1.bind(var4)(var0);
                            var5 = 'priority';
                            var2 = 100;
                            var2 = var3.bind(var4)(var0, var5, var2);
                            var1 = var1.bind(var4)(var0);
                            var2 = 'incompatibleTokens';
                            var1 = ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'];
                            var1 = var3.bind(var4)(var0, var2, var1);
                            return var0;
                    }
                };
                var _closure2_slot1 = var0;
                var2 = 'function';
                var1 = typeof var3;
                if (!(var2 !== var1)) {
                    _fun23391_ip = 34;
                    continue _fun23391
                }
            case 25:
                var1 = null;
                if (!(var1 === var3)) {
                    _fun23391_ip = 218;
                    continue _fun23391
                }
            case 34:
                var1 = global;
                var6 = var1.Object;
                var4 = var6.create;
                var2 = var3;
                if (!var2) {
                    _fun23391_ip = 58;
                    continue _fun23391
                }
            case 53:
                var2 = var3.prototype;
            case 58:
                var1 = {};
                var7 = {
                    'value': null,
                    'writable': true,
                    'configurable': true
                };
                var7.value = var0;
                var1.constructor = var7;
                var1 = var4.bind(var6)(var2, var1);
                var0.prototype = var1;
                if (!var3) {
                    _fun23391_ip = 110;
                    continue _fun23391
                }
            case 95:
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var3);
            case 110:
                var2 = _closure1_slot7;
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var _closure2_slot0 = var2;
                var2 = {};
                var3 = 'parse';
                var2.key = var3;
                var3 = function arg0, arg1, arg2() {
                    _fun23393: for (var _fun23393_ip = 0;;) switch (_fun23393_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            var2 = arg2;
                            var1 = 'I';
                            if (!(var1 !== var0)) {
                                _fun23393_ip = 96;
                                continue _fun23393
                            }
                        case 17:
                            var1 = 'Io';
                            if (!(var1 !== var0)) {
                                _fun23393_ip = 71;
                                continue _fun23393
                            }
                        case 27:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 2;
                            var1 = var4[var1];
                            var4 = undefined;
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.parseNDigits;
                            var0 = var0.length;
                            var0 = var1.bind(var4)(var0, var3);
                            return var0;
                        case 71:
                            var1 = var2.ordinalNumber;
                            var0 = {};
                            var4 = 'week';
                            var0.unit = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        case 96:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 2;
                            var0 = var5[var0];
                            var2 = undefined;
                            var0 = var4.bind(var2)(var0);
                            var1 = var0.parseNumericPattern;
                            var0 = 3;
                            var0 = var5[var0];
                            var0 = var4.bind(var2)(var0);
                            var0 = var0.numericPatterns;
                            var0 = var0.week;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var2.value = var3;
                var3 = new Array(3);
                var3[0] = var2;
                var2 = {};
                var6 = 'validate';
                var2.key = var6;
                var6 = function arg0, arg1() {
                    _fun23394: for (var _fun23394_ip = 0;;) switch (_fun23394_ip) {
                        case 0:
                            var2 = arg1;
                            var0 = 1;
                            var0 = var2 >= var0;
                            if (!var0) {
                                _fun23394_ip = 20;
                                continue _fun23394
                            }
                        case 13:
                            var1 = 53;
                            var0 = var2 <= var1;
                        case 20:
                            return var0;
                    }
                };
                var2.value = var6;
                var3[1] = var2;
                var2 = {};
                var6 = 'set';
                var2.key = var6;
                var5 = function arg0, arg1, arg2() {
                    var1 = _closure1_slot3;
                    var2 = var1.default;
                    var0 = _closure1_slot2;
                    var4 = var0.default;
                    var1 = undefined;
                    var3 = arg0;
                    var0 = arg2;
                    var0 = var4.bind(var1)(var3, var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2.value = var5;
                var3[2] = var2;
                var2 = _closure1_slot5;
                var1 = var0.prototype;
                var1 = var2.bind(var4)(var1, var3);
                return var0;
            case 218:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Super expression must either be null or a function';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = var1.bind(var0)(var3);
    var2.ISOWeekParser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2893, 2810, 2881, 2882, 2879]);