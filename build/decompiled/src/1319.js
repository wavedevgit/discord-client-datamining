// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.varint64read = var0;
    var2.varint64write = var0;
    var2.int64fromString = var0;
    var2.int64toString = var0;
    var2.varint32write = var0;
    var2.varint32read = var0;
    var3 = function() { // Original name: varint64read, environment: var1
        _fun14819: for (var _fun14819_ip = 0;;) switch (_fun14819_ip) {
            case 0:
                var7 = this;
                var8 = 0;
                var6 = 7;
                var3 = 28;
                var5 = 127;
                var4 = 128;
                var1 = 0;
                var0 = 0;
            case 21:
                var9 = var7.buf;
                var2 = var7.pos;
                var2 = parseFloat(var2);
                var10 = var2 + 1;
                var7.pos = var10;
                var9 = var9[var2];
                var2 = var5 & var9;
                var2 = var2 << var0;
                var2 = var1 | var2;
                var9 = var4 & var9;
                if (var9) {
                    _fun14819_ip = 91;
                    continue _fun14819
                }
            case 67:
                var9 = var7.assertBounds;
                var9 = var9.bind(var7)();
                var9 = new Array(2);
                var9[0] = var2;
                var9[1] = var8;
                return var9;
            case 91:
                var0 = var0 + var6;
                var1 = var2;
                if (var0 < var3) {
                    _fun14819_ip = 21;
                    continue _fun14819
                }
            case 102:
                var1 = var7.buf;
                var0 = var7.pos;
                var0 = parseFloat(var0);
                var8 = var0 + 1;
                var7.pos = var8;
                var0 = var1[var0];
                var1 = 15;
                var1 = var1 & var0;
                var1 = var1 << var3;
                var3 = var2 | var1;
                var1 = 112;
                var2 = var1 & var0;
                var1 = 4;
                var9 = var2 >> var1;
                var8 = var4 & var0;
                var2 = 3;
                var1 = 31;
                var0 = var9;
                if (var8) {
                    _fun14819_ip = 198;
                    continue _fun14819
                }
            case 174:
                var8 = var7.assertBounds;
                var8 = var8.bind(var7)();
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var9;
                return var8;
            case 198:
                var9 = var7.buf;
                var8 = var7.pos;
                var8 = parseFloat(var8);
                var10 = var8 + 1;
                var7.pos = var10;
                var8 = var9[var8];
                var9 = var5 & var8;
                var9 = var9 << var2;
                var0 = var0 | var9;
                var8 = var4 & var8;
                if (var8) {
                    _fun14819_ip = 268;
                    continue _fun14819
                }
            case 244:
                var8 = var7.assertBounds;
                var8 = var8.bind(var7)();
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var0;
                return var8;
            case 268:
                var2 = var2 + var6;
                if (var2 <= var1) {
                    _fun14819_ip = 198;
                    continue _fun14819
                }
            case 276:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = 'invalid varint';
                var12 = var1;
                var0 = new var12[var2](var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.varint64read = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: varint64write, environment: var1
        _fun14820: for (var _fun14820_ip = 0;;) switch (_fun14820_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = arg2;
                var7 = 0;
                var6 = 7;
                var0 = 28;
                var5 = 255;
                var4 = 128;
                var8 = 0;
            case 25:
                var11 = var1 >>> var8;
                var9 = var11 >>> var6;
                var9 = var9 === var7;
                if (!var9) {
                    _fun14820_ip = 44;
                    continue _fun14820
                }
            case 40:
                var9 = var7 == var3;
            case 44:
                var10 = var11;
                if (var9) {
                    _fun14820_ip = 54;
                    continue _fun14820
                }
            case 50:
                var10 = var4 | var11;
            case 54:
                var11 = var2.push;
                var10 = var5 & var10;
                var10 = var11.bind(var2)(var10);
                if (var9) {
                    _fun14820_ip = 221;
                    continue _fun14820
                }
            case 74:
                var8 = var8 + var6;
                if (var8 < var0) {
                    _fun14820_ip = 25;
                    continue _fun14820
                }
            case 82:
                var1 = var1 >>> var0;
                var8 = var6 & var3;
                var0 = 15;
                var1 = var1 & var0;
                var0 = 4;
                var0 = var8 << var0;
                var10 = var1 | var0;
                var1 = 3;
                var8 = var3 >> var1;
                var9 = var2.push;
                var0 = var10;
                if (!var8) {
                    _fun14820_ip = 130;
                    continue _fun14820
                }
            case 126:
                var0 = var4 | var10;
            case 130:
                var0 = var5 & var0;
                var0 = var9.bind(var2)(var0);
                var0 = 31;
                if (!var8) {
                    _fun14820_ip = 213;
                    continue _fun14820
                }
            case 145:
                var10 = var3 >>> var1;
                var8 = var10 >>> var6;
                var8 = var8 === var7;
                var9 = var10;
                if (var8) {
                    _fun14820_ip = 167;
                    continue _fun14820
                }
            case 163:
                var9 = var4 | var10;
            case 167:
                var10 = var2.push;
                var9 = var5 & var9;
                var9 = var10.bind(var2)(var9);
                if (var8) {
                    _fun14820_ip = 217;
                    continue _fun14820
                }
            case 184:
                var1 = var1 + var6;
                if (var1 < var0) {
                    _fun14820_ip = 145;
                    continue _fun14820
                }
            case 192:
                var1 = var2.push;
                var3 = var3 >>> var0;
                var0 = 1;
                var0 = var3 & var0;
                var0 = var1.bind(var2)(var0);
            case 213:
                var0 = undefined;
                return var0;
            case 217:
                var0 = undefined;
                return var0;
            case 221:
                var0 = undefined;
                return var0;
        }
    };
    var2.varint64write = var3;
    var3 = function(arg0) { // Original name: int64fromString, environment: var1
        _fun14821: for (var _fun14821_ip = 0;;) switch (_fun14821_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var4 = function(arg0, arg1) { // Original name: add1e6digit, environment: var1
                    _fun14822: for (var _fun14822_ip = 0;;) switch (_fun14822_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Number;
                            var5 = _closure2_slot0;
                            var4 = var5.slice;
                            var1 = arg0;
                            var0 = arg1;
                            var1 = var4.bind(var5)(var1, var0);
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = _closure2_slot3;
                            var4 = _closure2_slot1;
                            var1 = var1 * var4;
                            _closure2_slot3 = var1;
                            var1 = _closure2_slot2;
                            var1 = var1 * var4;
                            var1 = var1 + var3;
                            _closure2_slot2 = var1;
                            var3 = 4294967296.0;
                            if (!(var1 >= var3)) {
                                _fun14822_ip = 120;
                                continue _fun14822
                            }
                        case 85:
                            var4 = _closure2_slot3;
                            var1 = _closure2_slot2;
                            var1 = var1 / var3;
                            var1 = var1 | 0;
                            var1 = var4 + var1;
                            _closure2_slot3 = var1;
                            var1 = _closure2_slot2;
                            var1 = var1 % var3;
                            _closure2_slot2 = var1;
                        case 120:
                            return var0;
                    }
                };
                var0 = 0;
                var3 = var6[var0];
                var2 = '-';
                var2 = var2 == var3;
                if (!var2) {
                    _fun14821_ip = 48;
                    continue _fun14821
                }
            case 31:
                var5 = var6.slice;
                var3 = 1;
                var3 = var5.bind(var6)(var3);
                _closure2_slot0 = var3;
            case 48:
                var3 = 1000000;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var0;
                var3 = undefined;
                var5 = -24;
                var0 = -18;
                var5 = var4.bind(var3)(var5, var0);
                var5 = -12;
                var0 = var4.bind(var3)(var0, var5);
                var0 = -6;
                var5 = var4.bind(var3)(var5, var0);
                var0 = var4.bind(var3)(var0);
                var0 = new Array(3);
                var0[0] = var2;
                var2 = _closure2_slot2;
                var0[1] = var2;
                var1 = _closure2_slot3;
                var0[2] = var1;
                return var0;
        }
    };
    var2.int64fromString = var3;
    var3 = function(arg0, arg1) { // Original name: int64toString, environment: var1
        _fun14823: for (var _fun14823_ip = 0;;) switch (_fun14823_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var6 = function(arg0, arg1) { // Original name: decimalFrom1e7, environment: var0
                    _fun14824: for (var _fun14824_ip = 0;;) switch (_fun14824_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = '';
                            if (!var3) {
                                _fun14824_ip = 25;
                                continue _fun14824
                            }
                        case 10:
                            var0 = global;
                            var1 = var0.String;
                            var0 = undefined;
                            var2 = var1.bind(var0)(var3);
                        case 25:
                            var1 = arg1;
                            var0 = var2;
                            if (!var1) {
                                _fun14824_ip = 59;
                                continue _fun14824
                            }
                        case 34:
                            var4 = '0000000';
                            var3 = var4.slice;
                            var1 = var2.length;
                            var1 = var3.bind(var4)(var1);
                            var0 = var1 + var2;
                        case 59:
                            return var0;
                    }
                };
                var0 = 2097151;
                if (!(!(var1 <= var0))) {
                    _fun14823_ip = 251;
                    continue _fun14823
                }
            case 26:
                var0 = 24;
                var3 = var2 >>> var0;
                var0 = 8;
                var0 = var1 << var0;
                var0 = var3 | var0;
                var3 = 0;
                var4 = var0 >>> var3;
                var0 = 16777215;
                var7 = var4 & var0;
                var4 = 16;
                var5 = var1 >> var4;
                var4 = 65535;
                var5 = var5 & var4;
                var4 = var0 & var2;
                var0 = 6777216;
                var0 = var0 * var7;
                var4 = var4 + var0;
                var0 = 6710656;
                var0 = var0 * var5;
                var4 = var4 + var0;
                var0 = 8147497;
                var0 = var0 * var5;
                var7 = var7 + var0;
                var0 = 2;
                var10 = var0 * var5;
                var9 = 10000000;
                var8 = var7;
                var5 = var4;
                if (!(var5 >= var9)) {
                    _fun14823_ip = 177;
                    continue _fun14823
                }
            case 146:
                var0 = global;
                var12 = var0.Math;
                var11 = var12.floor;
                var0 = var4 / var9;
                var0 = var11.bind(var12)(var0);
                var8 = var7 + var0;
                var5 = var4 % var9;
            case 177:
                var7 = var10;
                var0 = var8;
                if (!(var0 >= var9)) {
                    _fun14823_ip = 218;
                    continue _fun14823
                }
            case 187:
                var4 = global;
                var12 = var4.Math;
                var11 = var12.floor;
                var4 = var8 / var9;
                var4 = var11.bind(var12)(var4);
                var7 = var10 + var4;
                var0 = var8 % var9;
            case 218:
                var4 = undefined;
                var3 = var6.bind(var4)(var7, var3);
                var0 = var6.bind(var4)(var0, var7);
                var3 = var3 + var0;
                var0 = 1;
                var0 = var6.bind(var4)(var5, var0);
                var0 = var3 + var0;
                return var0;
            case 251:
                var0 = 4294967296.0;
                var1 = var0 * var1;
                var0 = 0;
                var0 = var2 >>> var0;
                var0 = var1 + var0;
                var0 = '' + var0;
                return var0;
        }
    };
    var2.int64toString = var3;
    var3 = function(arg0, arg1) { // Original name: varint32write, environment: var1
        _fun14825: for (var _fun14825_ip = 0;;) switch (_fun14825_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var7 = 0;
                var8 = var1 >= var7;
                var5 = 127;
                var4 = 128;
                var3 = 7;
                var6 = 9;
                var0 = var1;
                if (var8) {
                    _fun14825_ip = 74;
                    continue _fun14825
                }
            case 30:
                var9 = var2.push;
                var8 = var5 & var0;
                var8 = var8 | var4;
                var8 = var9.bind(var2)(var8);
                var0 = var0 >> var3;
                var7 = var7 + 1;
                if (var7 < var6) {
                    _fun14825_ip = 30;
                    continue _fun14825
                }
            case 59:
                var6 = var2.push;
                var0 = 1;
                var0 = var6.bind(var2)(var0);
                _fun14825_ip = 123;
                continue _fun14825;
            case 74:
                var0 = var1;
                var1 = var0;
                if (!(var1 > var5)) {
                    _fun14825_ip = 113;
                    continue _fun14825
                }
            case 84:
                var7 = var2.push;
                var6 = var5 & var0;
                var6 = var6 | var4;
                var6 = var7.bind(var2)(var6);
                var0 = var0 >>> var3;
                var1 = var0;
                if (var1 > var5) {
                    _fun14825_ip = 84;
                    continue _fun14825
                }
            case 113:
                var0 = var2.push;
                var0 = var0.bind(var2)(var1);
            case 123:
                var0 = undefined;
                return var0;
        }
    };
    var2.varint32write = var3;
    var1 = function() { // Original name: varint32read, environment: var1
        _fun14826: for (var _fun14826_ip = 0;;) switch (_fun14826_ip) {
            case 0:
                var3 = this;
                var1 = var3.buf;
                var0 = var3.pos;
                var0 = parseFloat(var0);
                var2 = var0 + 1;
                var3.pos = var2;
                var0 = var1[var0];
                var1 = 127;
                var5 = var1 & var0;
                var4 = 128;
                var0 = var4 & var0;
                if (var0) {
                    _fun14826_ip = 59;
                    continue _fun14826
                }
            case 47:
                var0 = var3.assertBounds;
                var0 = var0.bind(var3)();
                return var5;
            case 59:
                var2 = var3.buf;
                var0 = var3.pos;
                var0 = parseFloat(var0);
                var6 = var0 + 1;
                var3.pos = var6;
                var0 = var2[var0];
                var6 = var1 & var0;
                var2 = 7;
                var2 = var6 << var2;
                var5 = var5 | var2;
                var0 = var4 & var0;
                if (var0) {
                    _fun14826_ip = 120;
                    continue _fun14826
                }
            case 108:
                var0 = var3.assertBounds;
                var0 = var0.bind(var3)();
                return var5;
            case 120:
                var2 = var3.buf;
                var0 = var3.pos;
                var0 = parseFloat(var0);
                var6 = var0 + 1;
                var3.pos = var6;
                var0 = var2[var0];
                var6 = var1 & var0;
                var2 = 14;
                var2 = var6 << var2;
                var2 = var5 | var2;
                var0 = var4 & var0;
                if (var0) {
                    _fun14826_ip = 181;
                    continue _fun14826
                }
            case 169:
                var0 = var3.assertBounds;
                var0 = var0.bind(var3)();
                return var2;
            case 181:
                var5 = var3.buf;
                var0 = var3.pos;
                var0 = parseFloat(var0);
                var6 = var0 + 1;
                var3.pos = var6;
                var0 = var5[var0];
                var5 = var1 & var0;
                var1 = 21;
                var1 = var5 << var1;
                var1 = var2 | var1;
                var0 = var4 & var0;
                if (var0) {
                    _fun14826_ip = 242;
                    continue _fun14826
                }
            case 230:
                var0 = var3.assertBounds;
                var0 = var0.bind(var3)();
                return var1;
            case 242:
                var2 = var3.buf;
                var0 = var3.pos;
                var0 = parseFloat(var0);
                var5 = var0 + 1;
                var3.pos = var5;
                var0 = var2[var0];
                var2 = 15;
                var2 = var2 & var0;
                var7 = var4 & var0;
                var6 = 5;
                var5 = 10;
                if (!var7) {
                    _fun14826_ip = 336;
                    continue _fun14826
                }
            case 289:
                var8 = var3.buf;
                var7 = var3.pos;
                var7 = parseFloat(var7);
                var9 = var7 + 1;
                var3.pos = var9;
                var7 = var8[var7];
                var6 = var6 + 1;
                var8 = var4 & var7;
                var0 = var7;
                if (!var8) {
                    _fun14826_ip = 336;
                    continue _fun14826
                }
            case 329:
                var0 = var7;
                if (var6 < var5) {
                    _fun14826_ip = 289;
                    continue _fun14826
                }
            case 336:
                var0 = var4 & var0;
                if (var0) {
                    _fun14826_ip = 372;
                    continue _fun14826
                }
            case 343:
                var0 = var3.assertBounds;
                var0 = var0.bind(var3)();
                var0 = 28;
                var0 = var2 << var0;
                var1 = var1 | var0;
                var0 = 0;
                var0 = var1 >>> var0;
                return var0;
            case 372:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'invalid varint';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.varint32read = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);