// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun14835: for (var _fun14835_ip = 0;;) switch (_fun14835_ip) {
        case 0:
            var5 = require;
            var3 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = function arg0, arg1, arg2() {
                _fun14836: for (var _fun14836_ip = 0;;) switch (_fun14836_ip) {
                    case 0:
                        var3 = arg0;
                        var5 = arg2;
                        var1 = _closure1_slot4;
                        var2 = undefined;
                        var0 = arg1;
                        var8 = var1.bind(var2)(var0);
                        var1 = _closure1_slot3;
                        var0 = _closure1_slot11;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun14836_ip = 51;
                            continue _fun14836
                        }
                    case 38:
                        var0 = var8.apply;
                        var0 = var0.bind(var8)(var3, var5);
                        _fun14836_ip = 92;
                        continue _fun14836;
                    case 51:
                        var6 = global;
                        var7 = var6.Reflect;
                        var6 = var7.construct;
                        if (var5) {
                            _fun14836_ip = 71;
                            continue _fun14836
                        }
                    case 67:
                        var5 = new Array(0);
                    case 71:
                        var4 = _closure1_slot4;
                        var4 = var4.bind(var2)(var3);
                        var4 = var4.constructor;
                        var0 = var6.bind(var7)(var8, var5, var4);
                    case 92:
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = function() {
                _fun14837: for (var _fun14837_ip = 0;;) switch (_fun14837_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun14837_ip = 74;
                        continue _fun14837;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot11 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function arg0() {
                _fun14840: for (var _fun14840_ip = 0;;) switch (_fun14840_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun14840_ip = 42;
                            continue _fun14840
                        }
                    case 6:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 42:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var1 = 0;
            var4 = var6[var1];
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
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot5 = var4;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot7 = var4;
            var7 = global;
            var8 = var7.Object;
            var6 = var8.defineProperty;
            var5 = {};
            var4 = true;
            var5.value = var4;
            var4 = '__esModule';
            var4 = var6.bind(var8)(var3, var4, var5);
            var3.PbULong = var0;
            var3.PbLong = var0;
            var6 = var7.DataView;
            var8 = var7.ArrayBuffer;
            var4 = var8.prototype;
            var5 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var12 = 8;
            var13 = var5;
            var4 = new var13[var8](var12, var11);
            var12 = var4 instanceof Object ? var4 : var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var13 = var5;
            var4 = new var13[var6](var12, var11);
            var6 = var4 instanceof Object ? var4 : var5;
            var4 = var7.globalThis;
            var5 = var4.BigInt;
            var4 = undefined;
            if (!(var0 !== var5)) {
                _fun14835_ip = 445;
                continue _fun14835
            }
        case 263:
            var5 = var6.getBigInt64;
            var8 = 'function';
            var5 = typeof var5;
            var4 = undefined;
            if (!(var8 === var5)) {
                _fun14835_ip = 445;
                continue _fun14835
            }
        case 285:
            var5 = var6.getBigUint64;
            var5 = typeof var5;
            var4 = undefined;
            if (!(var8 === var5)) {
                _fun14835_ip = 445;
                continue _fun14835
            }
        case 303:
            var5 = var6.setBigInt64;
            var5 = typeof var5;
            var4 = undefined;
            if (!(var8 === var5)) {
                _fun14835_ip = 445;
                continue _fun14835
            }
        case 321:
            var5 = var6.setBigUint64;
            var5 = typeof var5;
            var4 = undefined;
            if (!(var8 === var5)) {
                _fun14835_ip = 445;
                continue _fun14835
            }
        case 336:
            var5 = {};
            var9 = var7.BigInt;
            var8 = '-9223372036854775808';
            var8 = var9.bind(var0)(var8);
            var5.MIN = var8;
            var9 = var7.BigInt;
            var8 = '9223372036854775807';
            var8 = var9.bind(var0)(var8);
            var5.MAX = var8;
            var9 = var7.BigInt;
            var8 = '0';
            var8 = var9.bind(var0)(var8);
            var5.UMIN = var8;
            var9 = var7.BigInt;
            var8 = '18446744073709551615';
            var8 = var9.bind(var0)(var8);
            var5.UMAX = var8;
            var7 = var7.BigInt;
            var5.C = var7;
            var5.V = var6;
            var4 = var5;
        case 445:
            var _closure1_slot8 = var4;
            var4 = /^-?[0-9]+$/;
            var _closure1_slot9 = var4;
            var4 = function() { // Environment: var2
                var3 = _closure1_slot7;
                var2 = function arg0, arg1() {
                    var2 = this;
                    var3 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = arg0;
                    var1 = var1 | 0;
                    var2.lo = var1;
                    var1 = arg1;
                    var1 = var1 | 0;
                    var2.hi = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'isZero';
                var0.key = var1;
                var1 = function() {
                    _fun14843: for (var _fun14843_ip = 0;;) switch (_fun14843_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.lo;
                            var2 = 0;
                            var0 = var2 == var0;
                            if (!var0) {
                                _fun14843_ip = 28;
                                continue _fun14843
                            }
                        case 18:
                            var1 = var1.hi;
                            var0 = var2 == var1;
                        case 28:
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'toNumber';
                var0.key = var5;
                var4 = function() {
                    _fun14844: for (var _fun14844_ip = 0;;) switch (_fun14844_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0.hi;
                            var1 = 4294967296.0;
                            var1 = var2 * var1;
                            var2 = var0.lo;
                            var0 = 0;
                            var0 = var2 >>> var0;
                            var0 = var1 + var0;
                            var1 = global;
                            var3 = var1.Number;
                            var2 = var3.isSafeInteger;
                            var2 = var2.bind(var3)(var0);
                            if (var2) {
                                _fun14844_ip = 95;
                                continue _fun14844
                            }
                        case 61:
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = 'cannot convert to safe number';
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 95:
                            return var0;
                    }
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var4 = var4.bind(var0)();
            var5 = function(arg0) { // Environment: var2
                var4 = function() {
                    var4 = this;
                    var3 = undefined;
                    var0 = undefined;
                    var5 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var3)(var4, var2);
                    var1 = _closure1_slot10;
                    var0 = arguments;
                    var0 = var1.bind(var3)(var4, var2, var0);
                    return var0;
                };
                var _closure2_slot0 = var4;
                var5 = _closure1_slot5;
                var3 = undefined;
                var2 = arg0;
                var2 = var5.bind(var3)(var4, var2);
                var2 = _closure1_slot7;
                var5 = {};
                var1 = 'toString';
                var5.key = var1;
                var1 = function() {
                    _fun14847: for (var _fun14847_ip = 0;;) switch (_fun14847_ip) {
                        case 0:
                            var2 = this;
                            var1 = _closure1_slot8;
                            if (var1) {
                                _fun14847_ip = 61;
                                continue _fun14847
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.int64toString;
                            var1 = var2.lo;
                            var0 = var2.hi;
                            var0 = var3.bind(var4)(var1, var0);
                            _fun14847_ip = 80;
                            continue _fun14847;
                        case 61:
                            var1 = var2.toBigInt;
                            var2 = var1.bind(var2)();
                            var1 = var2.toString;
                            var0 = var1.bind(var2)();
                        case 80:
                            return var0;
                    }
                };
                var5.value = var1;
                var1 = new Array(2);
                var1[0] = var5;
                var5 = {};
                var6 = 'toBigInt';
                var5.key = var6;
                var6 = function() {
                    var1 = this;
                    var3 = _closure1_slot12;
                    var0 = _closure1_slot8;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var0);
                    var6 = var0.V;
                    var5 = var6.setInt32;
                    var4 = var1.lo;
                    var3 = 0;
                    var2 = true;
                    var4 = var5.bind(var6)(var3, var4, var2);
                    var6 = var0.V;
                    var5 = var6.setInt32;
                    var4 = var1.hi;
                    var1 = 4;
                    var1 = var5.bind(var6)(var1, var4, var2);
                    var1 = var0.V;
                    var0 = var1.getBigUint64;
                    var0 = var0.bind(var1)(var3, var2);
                    return var0;
                };
                var5.value = var6;
                var1[1] = var5;
                var5 = {};
                var6 = 'from';
                var5.key = var6;
                var0 = function arg0() {
                    _fun14849: for (var _fun14849_ip = 0;;) switch (_fun14849_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = this;
                            var2 = _closure1_slot8;
                            var8 = typeof var6;
                            if (var2) {
                                _fun14849_ip = 425;
                                continue _fun14849
                            }
                        case 22:
                            var2 = 'string';
                            if (!(var2 !== var8)) {
                                _fun14849_ip = 201;
                                continue _fun14849
                            }
                        case 33:
                            var2 = 'number';
                            if (!(var2 === var8)) {
                                _fun14849_ip = 455;
                                continue _fun14849
                            }
                        case 44:
                            var3 = 0;
                            if (!(var3 != var6)) {
                                _fun14849_ip = 193;
                                continue _fun14849
                            }
                        case 53:
                            var2 = global;
                            var5 = var2.Number;
                            var4 = var5.isSafeInteger;
                            var4 = var4.bind(var5)(var6);
                            if (var4) {
                                _fun14849_ip = 109;
                                continue _fun14849
                            }
                        case 75:
                            var7 = var2.Error;
                            var4 = var7.prototype;
                            var5 = Object.create(var4, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var11 = 'number is no integer';
                            var12 = var5;
                            var4 = new var12[var7](var11, var10);
                            var4 = var4 instanceof Object ? var4 : var5;
                            throw var4;
                        case 109:
                            if (!(!(var6 < var3))) {
                                _fun14849_ip = 159;
                                continue _fun14849
                            }
                        case 113:
                            var5 = _closure2_slot0;
                            var3 = 4294967296.0;
                            var10 = var6 / var3;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var12 = var4;
                            var11 = var6;
                            var3 = new var12[var5](var11, var10, var9);
                            var3 = var3 instanceof Object ? var3 : var4;
                            return var3;
                        case 159:
                            var4 = var2.Error;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = 'signed value for ulong';
                            var12 = var3;
                            var2 = new var12[var4](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 193:
                            var2 = var0.ZERO;
                            return var2;
                        case 201:
                            var2 = '0';
                            if (!(var2 != var6)) {
                                _fun14849_ip = 417;
                                continue _fun14849
                            }
                        case 214:
                            var2 = var6.trim;
                            var4 = var2.bind(var6)();
                            var3 = _closure1_slot9;
                            var2 = var3.test;
                            var2 = var2.bind(var3)(var4);
                            if (var2) {
                                _fun14849_ip = 277;
                                continue _fun14849
                            }
                        case 241:
                            var2 = global;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var11 = 'string is no integer';
                            var12 = var3;
                            var2 = new var12[var5](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 277:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 6;
                            var2 = var5[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.int64fromString;
                            var4 = var2.bind(var3)(var4);
                            var3 = _closure1_slot2;
                            var2 = 3;
                            var4 = var3.bind(var5)(var4, var2);
                            var2 = 0;
                            var2 = var4[var2];
                            var3 = 1;
                            var5 = var4[var3];
                            var3 = 2;
                            var4 = var4[var3];
                            if (var2) {
                                _fun14849_ip = 381;
                                continue _fun14849
                            }
                        case 346:
                            var2 = _closure2_slot0;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var12 = var3;
                            var11 = var5;
                            var10 = var4;
                            var2 = new var12[var2](var11, var10, var9);
                            var2 = var2 instanceof Object ? var2 : var3;
                            return var2;
                        case 381:
                            var2 = global;
                            var4 = var2.Error;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = 'signed value';
                            var12 = var3;
                            var2 = new var12[var4](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 417:
                            var2 = var0.ZERO;
                            return var2;
                        case 425:
                            var2 = 'string';
                            if (!(var2 !== var8)) {
                                _fun14849_ip = 495;
                                continue _fun14849
                            }
                        case 433:
                            var2 = 'number';
                            var5 = var6;
                            if (!(var2 !== var8)) {
                                _fun14849_ip = 534;
                                continue _fun14849
                            }
                        case 444:
                            var2 = 'bigint';
                            var4 = var6;
                            if (!(var2 !== var8)) {
                                _fun14849_ip = 558;
                                continue _fun14849
                            }
                        case 455:
                            var2 = global;
                            var7 = var2.Error;
                            var2 = var7.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var2 = 'unknown value ';
                            var11 = var2 + var8;
                            var12 = var3;
                            var2 = new var12[var7](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 495:
                            var2 = '0';
                            if (!(var2 != var6)) {
                                _fun14849_ip = 814;
                                continue _fun14849
                            }
                        case 508:
                            var2 = '';
                            if (!(var2 != var6)) {
                                _fun14849_ip = 778;
                                continue _fun14849
                            }
                        case 519:
                            var3 = _closure1_slot8;
                            var2 = var3.C;
                            var5 = var2.bind(var3)(var6);
                        case 534:
                            var2 = 0;
                            if (!(var2 !== var5)) {
                                _fun14849_ip = 770;
                                continue _fun14849
                            }
                        case 543:
                            var3 = _closure1_slot8;
                            var2 = var3.C;
                            var4 = var2.bind(var3)(var5);
                        case 558:
                            if (var4) {
                                _fun14849_ip = 569;
                                continue _fun14849
                            }
                        case 561:
                            var2 = var0.ZERO;
                            return var2;
                        case 569:
                            var2 = _closure1_slot8;
                            var2 = var2.UMIN;
                            if (!(!(var4 < var2))) {
                                _fun14849_ip = 734;
                                continue _fun14849
                            }
                        case 586:
                            var2 = _closure1_slot8;
                            var2 = var2.UMAX;
                            if (!(!(var4 > var2))) {
                                _fun14849_ip = 698;
                                continue _fun14849
                            }
                        case 600:
                            var1 = _closure1_slot8;
                            var3 = var1.V;
                            var2 = var3.setBigUint64;
                            var5 = 0;
                            var6 = true;
                            var2 = var2.bind(var3)(var5, var4, var6);
                            var4 = _closure2_slot0;
                            var3 = var1.V;
                            var2 = var3.getInt32;
                            var3 = var2.bind(var3)(var5, var6);
                            var5 = var1.V;
                            var2 = var5.getInt32;
                            var1 = 4;
                            var10 = var2.bind(var5)(var1, var6);
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var12 = var2;
                            var11 = var3;
                            var1 = new var12[var4](var11, var10, var9);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        case 698:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'ulong too large';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 734:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'signed value for ulong';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 770:
                            var1 = var0.ZERO;
                            return var1;
                        case 778:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'string is no integer';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 814:
                            var0 = var0.ZERO;
                            return var0;
                    }
                };
                var5.value = var0;
                var0 = new Array(1);
                var0[0] = var5;
                var0 = var2.bind(var3)(var4, var1, var0);
                return var0;
            };
            var6 = var5.bind(var0)(var4);
            var3.PbULong = var6;
            var5 = var6.prototype;
            var7 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var13 = var7;
            var12 = 0;
            var11 = 0;
            var5 = new var13[var6](var12, var11, var10);
            var5 = var5 instanceof Object ? var5 : var7;
            var6.ZERO = var5;
            var2 = function(arg0) { // Environment: var2
                var4 = function() {
                    var4 = this;
                    var3 = undefined;
                    var0 = undefined;
                    var5 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var3)(var4, var2);
                    var1 = _closure1_slot10;
                    var0 = arguments;
                    var0 = var1.bind(var3)(var4, var2, var0);
                    return var0;
                };
                var _closure2_slot0 = var4;
                var5 = _closure1_slot5;
                var3 = undefined;
                var2 = arg0;
                var2 = var5.bind(var3)(var4, var2);
                var2 = _closure1_slot7;
                var5 = {};
                var1 = 'isNegative';
                var5.key = var1;
                var1 = function() {
                    var0 = this;
                    var1 = var0.hi;
                    var0 = 2147483648.0;
                    var0 = var0 & var1;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var5.value = var1;
                var1 = new Array(4);
                var1[0] = var5;
                var5 = {};
                var6 = 'negate';
                var5.key = var6;
                var6 = function() {
                    _fun14853: for (var _fun14853_ip = 0;;) switch (_fun14853_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.hi;
                            var1 = ~var1;
                            var0 = var0.lo;
                            var4 = 1;
                            if (var0) {
                                _fun14853_ip = 33;
                                continue _fun14853
                            }
                        case 24:
                            var3 = var1 + var4;
                            var2 = var0;
                            _fun14853_ip = 43;
                            continue _fun14853;
                        case 33:
                            var0 = ~var0;
                            var2 = var4 + var0;
                            var3 = var1;
                        case 43:
                            var0 = _closure2_slot0;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var6 = var3;
                            var0 = new var8[var0](var7, var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var5.value = var6;
                var1[1] = var5;
                var5 = {};
                var6 = 'toString';
                var5.key = var6;
                var6 = function() {
                    _fun14854: for (var _fun14854_ip = 0;;) switch (_fun14854_ip) {
                        case 0:
                            var1 = this;
                            var0 = _closure1_slot8;
                            if (var0) {
                                _fun14854_ip = 143;
                                continue _fun14854
                            }
                        case 16:
                            var0 = var1.isNegative;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun14854_ip = 77;
                                continue _fun14854
                            }
                        case 29:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 6;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.int64toString;
                            var3 = var1.lo;
                            var0 = var1.hi;
                            var0 = var4.bind(var5)(var3, var0);
                            return var0;
                        case 77:
                            var0 = var1.negate;
                            var0 = var0.bind(var1)();
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.int64toString;
                            var2 = var0.lo;
                            var0 = var0.hi;
                            var2 = var3.bind(var4)(var2, var0);
                            var0 = '-';
                            var0 = var0 + var2;
                            return var0;
                        case 143:
                            var0 = var1.toBigInt;
                            var1 = var0.bind(var1)();
                            var0 = var1.toString;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var5.value = var6;
                var1[2] = var5;
                var5 = {};
                var6 = 'toBigInt';
                var5.key = var6;
                var6 = function() {
                    var1 = this;
                    var3 = _closure1_slot12;
                    var0 = _closure1_slot8;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var0);
                    var6 = var0.V;
                    var5 = var6.setInt32;
                    var4 = var1.lo;
                    var3 = 0;
                    var2 = true;
                    var4 = var5.bind(var6)(var3, var4, var2);
                    var6 = var0.V;
                    var5 = var6.setInt32;
                    var4 = var1.hi;
                    var1 = 4;
                    var1 = var5.bind(var6)(var1, var4, var2);
                    var1 = var0.V;
                    var0 = var1.getBigInt64;
                    var0 = var0.bind(var1)(var3, var2);
                    return var0;
                };
                var5.value = var6;
                var1[3] = var5;
                var5 = {};
                var6 = 'from';
                var5.key = var6;
                var0 = function arg0() {
                    _fun14856: for (var _fun14856_ip = 0;;) switch (_fun14856_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = this;
                            var2 = _closure1_slot8;
                            var8 = typeof var6;
                            if (var2) {
                                _fun14856_ip = 421;
                                continue _fun14856
                            }
                        case 22:
                            var2 = 'string';
                            if (!(var2 !== var8)) {
                                _fun14856_ip = 226;
                                continue _fun14856
                            }
                        case 33:
                            var2 = 'number';
                            if (!(var2 === var8)) {
                                _fun14856_ip = 451;
                                continue _fun14856
                            }
                        case 44:
                            var2 = 0;
                            if (!(var2 != var6)) {
                                _fun14856_ip = 218;
                                continue _fun14856
                            }
                        case 53:
                            var3 = global;
                            var5 = var3.Number;
                            var4 = var5.isSafeInteger;
                            var4 = var4.bind(var5)(var6);
                            if (var4) {
                                _fun14856_ip = 109;
                                continue _fun14856
                            }
                        case 75:
                            var5 = var3.Error;
                            var3 = var5.prototype;
                            var4 = Object.create(var3, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var11 = 'number is no integer';
                            var12 = var4;
                            var3 = new var12[var5](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var4;
                            throw var3;
                        case 109:
                            if (!(!(var6 > var2))) {
                                _fun14856_ip = 172;
                                continue _fun14856
                            }
                        case 113:
                            var5 = _closure2_slot0;
                            var11 = -var6;
                            var3 = -var6;
                            var2 = 4294967296.0;
                            var10 = var3 / var2;
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var12 = var3;
                            var2 = new var12[var5](var11, var10, var9);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var3.negate;
                            var2 = var2.bind(var3)();
                            _fun14856_ip = 216;
                            continue _fun14856;
                        case 172:
                            var5 = _closure2_slot0;
                            var3 = 4294967296.0;
                            var10 = var6 / var3;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var12 = var4;
                            var11 = var6;
                            var3 = new var12[var5](var11, var10, var9);
                            var2 = var3 instanceof Object ? var3 : var4;
                        case 216:
                            return var2;
                        case 218:
                            var2 = var0.ZERO;
                            return var2;
                        case 226:
                            var2 = '0';
                            if (!(var2 != var6)) {
                                _fun14856_ip = 413;
                                continue _fun14856
                            }
                        case 239:
                            var2 = var6.trim;
                            var4 = var2.bind(var6)();
                            var3 = _closure1_slot9;
                            var2 = var3.test;
                            var2 = var2.bind(var3)(var4);
                            if (var2) {
                                _fun14856_ip = 302;
                                continue _fun14856
                            }
                        case 266:
                            var2 = global;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var11 = 'string is no integer';
                            var12 = var3;
                            var2 = new var12[var5](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 302:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 6;
                            var2 = var5[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.int64fromString;
                            var4 = var2.bind(var3)(var4);
                            var3 = _closure1_slot2;
                            var2 = 3;
                            var4 = var3.bind(var5)(var4, var2);
                            var2 = 0;
                            var3 = var4[var2];
                            var7 = _closure2_slot0;
                            var2 = 1;
                            var11 = var4[var2];
                            var2 = 2;
                            var10 = var4[var2];
                            var4 = var7.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var12 = var4;
                            var2 = new var12[var7](var11, var10, var9);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4;
                            if (!var3) {
                                _fun14856_ip = 411;
                                continue _fun14856
                            }
                        case 401:
                            var3 = var4.negate;
                            var2 = var3.bind(var4)();
                        case 411:
                            return var2;
                        case 413:
                            var2 = var0.ZERO;
                            return var2;
                        case 421:
                            var2 = 'string';
                            if (!(var2 !== var8)) {
                                _fun14856_ip = 491;
                                continue _fun14856
                            }
                        case 429:
                            var2 = 'number';
                            var5 = var6;
                            if (!(var2 !== var8)) {
                                _fun14856_ip = 530;
                                continue _fun14856
                            }
                        case 440:
                            var2 = 'bigint';
                            var4 = var6;
                            if (!(var2 !== var8)) {
                                _fun14856_ip = 554;
                                continue _fun14856
                            }
                        case 451:
                            var2 = global;
                            var7 = var2.Error;
                            var2 = var7.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var2 = 'unknown value ';
                            var11 = var2 + var8;
                            var12 = var3;
                            var2 = new var12[var7](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 491:
                            var2 = '0';
                            if (!(var2 != var6)) {
                                _fun14856_ip = 810;
                                continue _fun14856
                            }
                        case 504:
                            var2 = '';
                            if (!(var2 != var6)) {
                                _fun14856_ip = 774;
                                continue _fun14856
                            }
                        case 515:
                            var3 = _closure1_slot8;
                            var2 = var3.C;
                            var5 = var2.bind(var3)(var6);
                        case 530:
                            var2 = 0;
                            if (!(var2 !== var5)) {
                                _fun14856_ip = 766;
                                continue _fun14856
                            }
                        case 539:
                            var3 = _closure1_slot8;
                            var2 = var3.C;
                            var4 = var2.bind(var3)(var5);
                        case 554:
                            if (var4) {
                                _fun14856_ip = 565;
                                continue _fun14856
                            }
                        case 557:
                            var2 = var0.ZERO;
                            return var2;
                        case 565:
                            var2 = _closure1_slot8;
                            var2 = var2.MIN;
                            if (!(!(var4 < var2))) {
                                _fun14856_ip = 730;
                                continue _fun14856
                            }
                        case 582:
                            var2 = _closure1_slot8;
                            var2 = var2.MAX;
                            if (!(!(var4 > var2))) {
                                _fun14856_ip = 694;
                                continue _fun14856
                            }
                        case 596:
                            var1 = _closure1_slot8;
                            var3 = var1.V;
                            var2 = var3.setBigInt64;
                            var5 = 0;
                            var6 = true;
                            var2 = var2.bind(var3)(var5, var4, var6);
                            var4 = _closure2_slot0;
                            var3 = var1.V;
                            var2 = var3.getInt32;
                            var3 = var2.bind(var3)(var5, var6);
                            var5 = var1.V;
                            var2 = var5.getInt32;
                            var1 = 4;
                            var10 = var2.bind(var5)(var1, var6);
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var12 = var2;
                            var11 = var3;
                            var1 = new var12[var4](var11, var10, var9);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        case 694:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'ulong too large';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 730:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'ulong too small';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 766:
                            var1 = var0.ZERO;
                            return var1;
                        case 774:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'string is no integer';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 810:
                            var0 = var0.ZERO;
                            return var0;
                    }
                };
                var5.value = var0;
                var0 = new Array(1);
                var0[0] = var5;
                var0 = var2.bind(var3)(var4, var1, var0);
                return var0;
            };
            var2 = var2.bind(var0)(var4);
            var3.PbLong = var2;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var13 = var3;
            var12 = 0;
            var1 = new var13[var2](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.ZERO = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 15, 17, 18, 6, 7, 1319]);